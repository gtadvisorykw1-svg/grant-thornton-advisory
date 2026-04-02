# Grant Thornton Insight Cards Reference

## Overview
Insight cards from Grant Thornton Saudi Arabia/Kuwait website featuring image, category, title, description, date, and external link button with sophisticated hover effects.

## Card Structure

```html
<div class="article-tile">
  <div class="article-tile__header">
    <img class="article-tile__image" src="..." alt="..." />
  </div>
  <div class="article-tile__content-container">
    <div class="content">
      <span class="category">CATEGORY NAME</span>
      <a href="..." class="title">Card Title</a>
      <div class="text">Description text...</div>
      <div class="page-promote__author">
        <span class="article-date">28 Oct 2025</span>
      </div>
    </div>
  </div>
  <div class="article-link__container">
    <a href="..." class="external-link__contents">
      <span class="button-vi-external-link-icon--only purple-theme">
        <!-- External link SVG icon -->
      </span>
    </a>
  </div>
</div>
```

## Dimensions
- Card width: ~355px (flexible, varies by layout)
- Card min-height: 530px (desktop), 500px (mobile)
- Image aspect ratio: 1:1 (square)
- Image height: 47% of card
- Content height: 53% of card
- Border radius: 24px (card), 24px 24px 0 0 (content area)

## Grid/Carousel Layout
- Uses Glide.js carousel on homepage
- Display: flex (within .glide__slides)
- Slide padding: 16px right (creates gap between cards)
- Card width: ~289px in carousel, flexible in grid layouts
- Featured cards can be larger (545px width)
- Standard cards: ~265-289px width
- Carousel has shadow effect (.has-shadow class)

## Color Palette

| Element | Default | Hover |
|---------|---------|-------|
| Card background | #ffffff | #ffffff |
| Content background | #ffffff | #4f2d7f (purple) |
| Title | #4f2d7f | #ffffff |
| Category | #666666 | #ffffff |
| Description text | #000000 | #ffffff |
| Date | #666666 | #ffffff |
| Link button bg | #4f2d7f | #a06dff |

## Typography

### Font Family
```css
font-family: GT-Walsheim-Pro, Arial, Helvetica, sans-serif;
```

### Category
- Font size: 14px (1.4rem)
- Font weight: 400
- Text transform: uppercase
- Letter spacing: 1.6px
- Color: #666666 (var(--article-tile-category-color))
- Margin bottom: 8px

### Title
- Font size: 24px (2.4rem) desktop, 20px mobile
- Line height: 32px (3.2rem) desktop, 28px mobile
- Font weight: 400 (normal) - uses var(--font-weight-normal)
- Color: #4f2d7f (var(--article-tile-title-color))
- Display: block
- No line clamping by default

### Description Text
- Font size: 16px (1.6rem)
- Line height: 24px (2.4rem)
- Font weight: 400
- Color: #000000 (var(--article-tile-text-color))
- Initially hidden (opacity: 0, max-height: 0)

### Date
- Font size: 14px (1.4rem)
- Line height: 22px (2.2rem)
- Color: #666666 (var(--article-tile-published-date-color))
- Margin top: 16px

## CSS Variables

```css
:root {
  --article-animating-timer: 0.6s;
  --article-tile-title-color: #4f2d7f;
  --article-tile-category-color: #666;
  --article-tile-text-color: #000;
  --article-tile-published-date-color: #666;
}
```

## Default Card Styles

```css
.article-tile {
  text-decoration: none;
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  background: rgb(255, 255, 255);
  position: relative;
  border-radius: 24px;
  box-shadow: transparent 0px 0px 0px; /* No shadow by default */
  transition: box-shadow var(--article-animating-timer) 0s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Image Container

```css
.article-tile__header {
  height: 47%;
  overflow: hidden; /* Clips zoomed image on hover */
}

.article-tile__image {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  position: absolute;
  object-fit: cover;
  transform: scale(1.01, 1.01); /* Slight initial scale */
  transition: all var(--article-animating-timer) 0s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Content Area

```css
.article-tile__content-container .content {
  background: rgb(255, 255, 255);
  border-radius: 24px 24px 0px 0px;
  overflow: hidden;
  flex: 1 1 auto;
  transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Hover Effects

### Card Container
```css
.article-tile:hover {
  box-shadow: rgba(43, 20, 77, 0.4) 0px 4px 16px 0px;
}
```

### Image Zoom
```css
.article-tile:hover .article-tile__image,
.article-tile:active .article-tile__image,
.article-tile:focus-visible:not(.no-focus) .article-tile__image {
  transform: scale(1.11) translateY(-5%);
}
```

### Content Slide Up (Desktop only)
```css
@media (hover: hover) and (min-width: 960px) {
  .article-tile:hover .content,
  .article-tile:active .content,
  .article-tile:focus-visible:not(.no-focus) .content {
    transform: translateY(-4.5rem); /* -45px */
    background: rgb(79, 45, 127);
  }
}
```

### Text Reveal
```css
.article-tile:hover .article-tile__content-container .text,
.article-tile:active .article-tile__content-container .text,
.article-tile:focus-visible:not(.no-focus) .article-tile__content-container .text {
  max-height: 14.5rem; /* 145px */
  opacity: 1;
  margin-top: 16px;
}
```

### Color Transitions
```css
.article-tile:hover {
  --article-tile-title-color: #fff;
  --article-tile-category-color: #fff;
  --article-tile-text-color: #fff;
  --article-tile-published-date-color: #fff;
}
```

### Link Button Hide
```css
.article-tile:hover .article-link__container {
  opacity: 0;
}
```

## Focus States

```css
/* Focus visible applies same effects as hover */
.article-tile:focus-visible:not(.no-focus) .article-tile__image {
  transform: scale(1.11) translateY(-5%);
}

.article-tile:focus-visible:not(.no-focus) .content {
  transform: translateY(-4.5rem);
  background: rgb(79, 45, 127);
}

/* Title focus state */
@media (hover: hover) {
  .article-tile a.title:hover,
  .article-tile a.title:active,
  .article-tile a.title:focus-visible {
    --article-tile-title-color: #ce2c2c; /* Red on direct title focus */
  }
}

/* Remove outline on touch devices */
@media (hover: none) {
  .article-tile { outline: none; }
  .article-tile a.title { outline: none; }
}
```

## Transition Timing
- Duration: 0.6s (600ms) - var(--article-animating-timer)
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Applied to: all transforms, opacity, background, box-shadow

## External Link Button

### Default State
- Size: 32px × 32px
- Border radius: 100% (circle)
- Background: #4f2d7f
- Icon color: #ffffff

### Hover State
- Background: #a06dff (lighter purple)

### External Link SVG Icon
```svg
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-animation-vi">
  <g transform="matrix(1,0,0,1,-3.5,-3.5)">
    <!-- Arrow group -->
    <g transform="matrix(1,0,0,1,16.01,1.52)" class="external-link-icon--arrow">
      <g transform="matrix(1,0,0,1,8.36,13.15)">
        <path stroke-linecap="butt" stroke-linejoin="round" fill-opacity="0" 
              stroke="currentColor" stroke-width="3" 
              d="M-5.67,5.67 L5.67,-5.67"/>
      </g>
      <g transform="matrix(1,0,0,1,10.75,10.75)">
        <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" 
              stroke="currentColor" stroke-width="3" 
              d="M-3.25,-3.25 L3.25,-3.25 L3.25,3.25"/>
      </g>
    </g>
    <!-- Rounded square with gap -->
    <g transform="matrix(1,0,0,1,20,20)">
      <path class="external-link-icon--dash" opacity="0" fill="transparent" 
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" 
            d="M6.18,10.29 C9.67,8.19 12,4.37 12,0 C12,-6.63 6.63,-12 0,-12 L-3.51,-12"/>
      <path class="external-link-icon--dash2" fill="transparent" 
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" 
            d="M-4.45,-12 L-12,-12 L-12,12 L12,12 L12,4.8"/>
    </g>
  </g>
</svg>
```

### External Link Icon Animations
```css
@keyframes external-link-dash {
  0% { stroke-dashoffset: 100; rotate: 240deg; }
  63% { rotate: 0deg; }
  65% { stroke-dashoffset: 64; }
  65.01% { stroke-dashoffset: 0; }
  90% { stroke-dashoffset: -28; }
  100% { stroke-dashoffset: -36; rotate: 0deg; }
}

@keyframes external-link-arrow {
  0% { opacity: 0; }
  55% { opacity: 0; transform: translate(35%, 20%); }
  60% { opacity: 1; }
  70% { transform: translate(60%, -5%); }
  90% { transform: matrix(1, 0, 0, 1, 16.0096, 1.5193); }
  100% { transform: matrix(1, 0, 0, 1, 16.0096, 1.5193); opacity: 1; }
}
```

## Responsive Breakpoints
- Desktop: min-width 960px
- Large desktop: min-width 1200px
- Mobile: max-width 959px
- Touch devices: (hover: none)

## Content Padding
- Desktop: 40px 32px 8px
- Mobile: 24px 24px 0

## Link Button Position
- Position: absolute
- Left: 32px (desktop), 24px (mobile)
- Bottom: 24px

## Card Variants

### No Image Card (.no-image)
- Title uses bolder font weight (var(--font-weight-bold))
- Larger title: 34px desktop, 24px mobile
- Content doesn't slide up on hover

### Reverse Card (.reverse)
- Image at bottom, content at top
- Different hover animation (image translates down)
- Border radius: 24px 24px 0 0 on header

### Trending Card (.trending)
- Smaller card variant
- No content slide animation
- Used in sidebar sections
