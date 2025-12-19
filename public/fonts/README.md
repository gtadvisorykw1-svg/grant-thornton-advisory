# GT Walsheim Font Setup

## Current Status
The CSS is configured to use GT Walsheim LC fonts. You need to copy the font files to this folder.

## Required Action

Copy the following files from:
```
C:\Users\Jackson\Documents\dev\Docs\grab\grant-thornton-replica\Fonts to install to c drive fonts folder\
```

To this folder:
```
C:\Users\Jackson\Documents\dev\Docs\grab\grant-thornton-replica\public\fonts\
```

### Files to Copy:
- `GTWalsheimLC-Light.ttf`
- `GTWalsheimLC-LightOblique.ttf`
- `GTWalsheimLC-Regular.ttf`
- `GTWalsheimLC-RegularOblique.ttf`
- `GTWalsheimLC-Medium.ttf`
- `GTWalsheimLC-MediumOblique.ttf`
- `GTWalsheimLC-Bold.ttf`
- `GTWalsheimLC-BoldOblique.ttf`
- `GTWalsheimLC-Black.ttf`

## Quick Copy Command (Run in Command Prompt)

```cmd
copy "C:\Users\Jackson\Documents\dev\Docs\grab\grant-thornton-replica\Fonts to install to c drive fonts folder\*.ttf" "C:\Users\Jackson\Documents\dev\Docs\grab\grant-thornton-replica\public\fonts\"
```

## Font Weights Reference

| File | Weight | CSS Value | Usage |
|------|--------|-----------|-------|
| GTWalsheimLC-Light.ttf | Light | 300 | Subtle text, large body |
| GTWalsheimLC-Regular.ttf | Regular | 400 | Body text, paragraphs |
| GTWalsheimLC-Medium.ttf | Medium | 500 | Labels, buttons, emphasis |
| GTWalsheimLC-Bold.ttf | Bold | 700 | Headings, strong emphasis |
| GTWalsheimLC-Black.ttf | Black | 900 | Hero titles, display text |

## Verifying Installation

After copying the fonts, restart your dev server:
```bash
npm run dev
```

Then open the site and check in DevTools:
1. Open Developer Tools (F12)
2. Go to Network tab → Filter by "Font"
3. Refresh the page
4. You should see the .ttf files loading

Or inspect any text element and check the "Computed" styles - it should show `font-family: "GT Walsheim"`.
