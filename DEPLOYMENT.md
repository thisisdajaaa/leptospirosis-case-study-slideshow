# Deployment Guide for GitHub Pages

This guide will walk you through deploying your Leptospirosis Case Study Slideshow to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Your code pushed to a GitHub repository

## Step-by-Step Deployment

### 1. Update Repository Name (if needed)

If your GitHub repository name is **NOT** `leptospirosis-case-study-slideshow`, you need to update the base path:

**Option A: Update vite.config.js**
```js
base: process.env.NODE_ENV === 'production' 
  ? '/YOUR_REPO_NAME/'  // Replace with your actual repo name
  : '/',
```

**Option B: Use environment variable in GitHub Actions**
Edit `.github/workflows/deploy.yml` and uncomment/add:
```yaml
env:
  NODE_ENV: production
  VITE_BASE_PATH: '/YOUR_REPO_NAME/'  # Replace with your actual repo name
```

### 2. Push Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Setup GitHub Pages deployment"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 4. Trigger Deployment

The deployment will automatically trigger when you:
- Push to `main` or `master` branch
- Or manually trigger it:
  1. Go to **Actions** tab
  2. Select **Deploy to GitHub Pages** workflow
  3. Click **Run workflow** → **Run workflow**

### 5. Monitor Deployment

1. Go to **Actions** tab in your repository
2. Click on the running workflow
3. Watch the build and deployment progress
4. Once complete, you'll see a green checkmark

### 6. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Note:** It may take a few minutes for the site to be accessible after the first deployment.

## Troubleshooting

### Site shows 404 or blank page

1. **Check base path**: Make sure the base path in `vite.config.js` matches your repository name exactly (including case sensitivity)
2. **Check Actions**: Ensure the workflow completed successfully
3. **Clear cache**: Try accessing in incognito mode or clear browser cache

### Build fails

1. Check the **Actions** tab for error messages
2. Common issues:
   - Missing dependencies (run `yarn install` locally to verify)
   - Syntax errors in code
   - Missing environment variables

### Assets not loading

- Ensure `base` path in `vite.config.js` is correct
- Check that all asset paths are relative
- Verify `.nojekyll` file exists in `public/` folder

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the project
yarn build

# Install gh-pages (if not already installed)
yarn add -D gh-pages

# Deploy
yarn deploy
```

Then configure GitHub Pages to use the `gh-pages` branch as the source.

## Updating Your Site

Simply push changes to the `main` branch:
```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions will automatically rebuild and redeploy your site.
