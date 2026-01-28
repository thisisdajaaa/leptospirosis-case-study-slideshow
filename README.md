# Leptospirosis Case Study Slideshow

An interactive concept map slideshow for visualizing the progression and management of Leptospirosis.

## Features

- Interactive concept map visualization
- Step-by-step slideshow progression
- Draggable nodes for custom positioning
- Smooth animations and transitions
- Responsive design

## Tech Stack

- React 18
- Vite
- React Flow
- Framer Motion
- Tailwind CSS

## Local Development

### Prerequisites

- Node.js 18+ 
- Yarn (or npm)

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
yarn build

# Preview production build
yarn preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/leptospirosis-case-study-slideshow.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Update Repository Name (if needed)**
   - If your repository name is different from `leptospirosis-case-study-slideshow`, update the `base` path in `vite.config.js`:
   ```js
   base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
   ```

4. **Push to trigger deployment**
   - Push any changes to the `main` or `master` branch
   - GitHub Actions will automatically build and deploy your site
   - Check the **Actions** tab to see the deployment progress

### Accessing Your Site

Once deployed, your site will be available at:
```
https://YOUR_USERNAME.github.io/leptospirosis-case-study-slideshow/
```

### Manual Deployment

You can also manually trigger deployment by:
- Going to **Actions** tab in your repository
- Selecting **Deploy to GitHub Pages** workflow
- Clicking **Run workflow**

## Project Structure

```
├── src/
│   ├── components/       # React components
│   ├── data/            # Concept map data
│   ├── hooks/           # Custom React hooks
│   └── main.jsx         # Entry point
├── assets/              # Static assets
├── .github/workflows/   # CI/CD workflows
└── vite.config.js       # Vite configuration
```

## License

MIT
