const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeLeadershipImages() {
  const publicDir = path.join(process.cwd(), 'public');
  const images = ['Aiban.png', 'Tarek.png'];
  
  console.log('🖼️  Optimizing leadership images...\n');
  
  for (const imageName of images) {
    const inputPath = path.join(publicDir, imageName);
    const outputPath = path.join(publicDir, imageName.replace('.png', '-optimized.webp'));
    const fallbackPath = path.join(publicDir, imageName.replace('.png', '-optimized.png'));
    
    if (!fs.existsSync(inputPath)) {
      console.log(`❌ ${imageName} not found`);
      continue;
    }
    
    try {
      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);
      
      // Create WebP version (primary)
      await sharp(inputPath)
        .resize(800, 1067, { 
          fit: 'cover',
          position: 'top'
        })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      // Create optimized PNG fallback
      await sharp(inputPath)
        .resize(800, 1067, { 
          fit: 'cover',
          position: 'top'
        })
        .png({ quality: 75, compressionLevel: 9 })
        .toFile(fallbackPath);
      
      // Get new file sizes
      const webpStats = fs.statSync(outputPath);
      const pngStats = fs.statSync(fallbackPath);
      const webpSize = (webpStats.size / 1024).toFixed(0);
      const pngSize = (pngStats.size / 1024).toFixed(0);
      
      console.log(`✅ ${imageName}:`);
      console.log(`   Original: ${originalSize}MB`);
      console.log(`   WebP: ${webpSize}KB (${((1 - webpStats.size / originalStats.size) * 100).toFixed(1)}% smaller)`);
      console.log(`   PNG: ${pngSize}KB (${((1 - pngStats.size / originalStats.size) * 100).toFixed(1)}% smaller)`);
      console.log('');
      
    } catch (error) {
      console.log(`❌ Error optimizing ${imageName}:`, error.message);
    }
  }
  
  console.log('🎉 Optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update the leadership page to use the optimized images');
  console.log('2. Deploy to Vercel');
  console.log('3. Test the leadership page loading');
}

// Run if called directly
if (require.main === module) {
  optimizeLeadershipImages().catch(console.error);
}

module.exports = { optimizeLeadershipImages };