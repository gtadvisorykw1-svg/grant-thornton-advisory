# Mobius Animation Reference

## Overview
This project includes a replicated Mobius SVG animation from Grant Thornton Saudi Arabia's service pages. The animation features expanding/fading circular paths with a purple gradient glow effect.

## Files
- `components/MobiusAnimation.tsx` - React component with styled-jsx
- `public/mobius-animation.css` - Standalone CSS styles and keyframes
- `public/mobius-demo.html` - Complete HTML demo page

## Color Palette
| Name | Hex | RGB |
|------|-----|-----|
| Core Purple | #4f2d7f | rgb(79,45,127) |
| Dark Purple | #2b144d | rgb(43,20,77) |
| Bright Purple | - | rgb(111,48,191) |
| Accent Purple | - | rgb(143,52,255) |
| Fill Dark | - | rgb(33,10,79) |
| Fill Darker | - | rgb(22,4,57) |

## Animation Details
- **Duration**: 8 seconds base cycle (`--mobius-duration: 8s`)
- **5 Path Groups**: Each with unique scale/opacity animations
- **Keyframes**:
  - `mobius-animate1`: 8s, scale 0→1.1, opacity 1→0
  - `mobius-animate2`: 8s, scale 0→1, opacity 1→0
  - `mobius-animate3`: 16s, scale 0→2.1, opacity 0.7→0
  - `mobius-animate4`: 8s + 1.28s delay, scale 0→1.8
  - `mobius-animate5`: 16s, scale 0→1.75, opacity pulsing

## SVG Structure
- ViewBox: `0 0 1600 1600`
- Uses `mix-blend-mode: multiply` for layering
- Radial gradients for purple glow effect
- Mask for gradient fade on outer glow

## Usage
```tsx
import { MobiusAnimation } from '@/components/MobiusAnimation';

<MobiusAnimation className="custom-class" />
```

## CSS Variables
```css
--mobius-duration: 8s;
--mobius-core-purple: #4f2d7f;
--mobius-dark-purple: #2b144d;
--banner-background-color: #4f2d7f;
```
