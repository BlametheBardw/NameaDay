# Name of the Day

A simple single-page website that displays a random name each day. The same name is shown to all visitors on the same day, changing at midnight UTC.

## Features

- Displays one name per day (deterministic, same for all visitors)
- Clean, responsive design
- Pure HTML/CSS/JavaScript (no dependencies)
- Easy to customize

## Customization

Edit the `names` array in `script.js` to add your own names:

```javascript
const names = [
    "George", "Bob", "Sam", // ... add your names here
];
```

## Free Hosting Options

### Option 1: GitHub Pages (Recommended)

1. Create a new GitHub repository
2. Push these files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main` branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

**Commands:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main
```

## How It Works

The site uses a deterministic algorithm based on the current date (UTC) to select a name from the array. This ensures:
- Everyone sees the same name on the same day
- The name changes automatically at midnight UTC
- No server or database needed

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and responsive design
- `script.js` - Daily name generation logic

## License

Free to use and modify as you wish.
