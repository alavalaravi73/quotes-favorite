# Quote Generator ✨

A sophisticated, minimalist random quote generator with dark vignette background, elegant typography, and subtle interactive animations.

## Features

- 🌙 **Dark Vignette Design** - Professional dark charcoal to deep navy gradient background
- ✨ **Soft Silver Accents** - Minimalist button and card borders with subtle inner glow
- 💫 **Breathing Animation** - Gentle scale breathing effect on quote text (6s cycle)
- 📜 **Elegant Serif Typography** - Classical font with increased letter spacing for premium feel
- 🔄 **Parallax Zoom Effect** - Subtle zoom-out on scroll for immersive experience
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ⌨️ **Keyboard Shortcut** - Press Spacebar for new quotes
- 🎯 **Content-Fitted Card** - Card size adapts to quote length, no wasted space

## How to Use Locally

1. Open `index.html` in your web browser
2. Click "New Quote" button or press **Spacebar** to display different quotes
3. Experience the subtle breathing animation and parallax zoom effect on scroll
4. Try scrolling to see the card gently zoom out

## Updating Quotes

To add, edit, or remove quotes:

1. Open `quotes.json` in any text editor
2. Edit the JSON array following this format:

```json
{
  "text": "Your quote text here",
  "author": "Author Name",
  "category": "Category"
}
```

3. Save the file
4. If deployed on GitHub Pages, commit and push your changes

## Color Scheme

- **Background**: Dark vignette (black center → deep navy edges #0f1b2e)
- **Text**: Warm cream (#fef5e7)
- **Accents**: Soft silver (#b8c5d6)
- **Card**: Semi-transparent dark glass with radial cyan glow overlay

## Technical Details

- **Font**: Inter (sans-serif) for quote text and UI
- **Animations**: 6-second breathing scale (1.0 → 1.01) + parallax zoom on scroll
- **Responsive**: Mobile-optimized with adaptive font sizing and touch-friendly button
- **Accessibility**: Smooth scroll enabled, respects `prefers-reduced-motion`

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `quote-generator`
3. Don't initialize with README (we already have files)

### Step 2: Push Your Code

Open your terminal in the `quotes-favorite` folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Quote generator"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Step 4: Update Quotes Anytime

To update quotes after deployment:

1. Edit `quotes.json` locally
2. Commit and push:

```bash
git add quotes.json
git commit -m "Updated quotes"
git push
```

3. Changes will be live in a few minutes!

## File Structure

```
quotes-favorite/
├── index.html       # Main HTML structure
├── styles.css       # All styles and gradients
├── script.js        # Quote logic and animations
├── quotes.json      # Your quote database (EDIT THIS!)
├── Quotes.csv       # Original CSV (kept for reference)
└── README.md        # This file
```

## Customization

### Adding New Gradient Colors

1. Open `styles.css`
2. Add a new gradient class:

```css
.gradient-yourcategory {
    background: linear-gradient(135deg, #color1 0%, #color2 50%, #color3 100%);
}
```

3. Open `script.js`
4. Add to the `moodGradients` object:

```javascript
'yourcategory': 'gradient-yourcategory'
```

### Changing Fonts

Edit the Google Fonts link in `index.html` and update CSS variables in `styles.css`:

```css
--font-quote: 'Your Font', serif;
--font-ui: 'Your Font', sans-serif;
```

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## License

Free to use and modify for personal or commercial projects.

---

**Enjoy your quote generator!** ✨
