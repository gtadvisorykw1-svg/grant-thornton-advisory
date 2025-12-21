# Image Optimization Guide for Leadership Photos

## Current Issue
The leadership images (Aiban.png and Tarek.png) are too large:
- Aiban.png: 3.4MB
- Tarek.png: 5.9MB

## Recommended Actions

### 1. Compress and Resize Images
- Resize to maximum 800px width (sufficient for the layout)
- Compress to under 200KB each
- Convert to WebP format for better compression
- Keep PNG as fallback

### 2. Tools to Use
- Online: TinyPNG, Squoosh.app, or Compressor.io
- CLI: `sharp-cli` or `imagemin`
- Photoshop: Export for Web with quality 70-80%

### 3. Optimal Specifications
- Format: WebP (primary), PNG (fallback)
- Dimensions: 800x1067px (3:4 aspect ratio)
- File size: <200KB each
- Quality: 75-85%

### 4. File Naming Convention
Consider using descriptive names:
- `aiban-leadership-photo.webp`
- `tarek-leadership-photo.webp`