# Netlify Deployment Guide for Luxort Hotel Website

## Prerequisites

- A GitHub account
- A Netlify account (free tier is sufficient)
- Git installed on your computer

## Step 1: Push Your Project to GitHub

### 1.1 Initialize Git (if not already done)

```powershell
cd C:\Users\yraje\OneDrive\Desktop\Assignment5\frontend
git init
```

### 1.2 Create .gitignore file (if not exists)

Create a `.gitignore` file in your frontend folder with:

```
node_modules/
.next/
out/
.env
.env.local
.DS_Store
*.log
```

### 1.3 Commit your code

```powershell
git add .
git commit -m "Initial commit - Luxort Hotel Website"
```

### 1.4 Create a new repository on GitHub

1. Go to https://github.com/new
2. Name: `luxort-hotel-website`
3. Description: `Luxury hotel website built with Next.js`
4. Make it Public
5. Click "Create repository"

### 1.5 Push to GitHub

```powershell
git remote add origin https://github.com/YOUR_USERNAME/luxort-hotel-website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Netlify

### Method A: Connect via GitHub (Recommended)

1. **Login to Netlify**

   - Go to https://app.netlify.com/
   - Sign up or login (you can use your GitHub account)

2. **Import from Git**

   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select your `luxort-hotel-website` repository

3. **Configure Build Settings**

   ```
   Branch to deploy: main
   Build command: npm run build
   Publish directory: .next
   ```

4. **Environment Variables** (if needed)

   - Click "Show advanced"
   - Add any environment variables if your project needs them
   - For this project, you likely don't need any

5. **Deploy Site**

   - Click "Deploy site"
   - Netlify will start building your site
   - Wait 2-5 minutes for the build to complete

6. **Get Your Live URL**
   - Once deployed, you'll get a URL like: `https://random-name-123456.netlify.app`
   - You can customize this under "Site settings" → "Change site name"

### Method B: Manual Deploy (Alternative)

1. **Build your project locally**

   ```powershell
   npm run build
   ```

2. **Go to Netlify**

   - https://app.netlify.com/
   - Click "Add new site" → "Deploy manually"

3. **Drag and Drop**
   - Drag the `.next` folder into the deploy area
   - Wait for upload and deployment

## Step 3: Verify Deployment

1. **Check the live site**

   - Click on your site URL
   - Test all sections: Header, Hero, About, Events, FAQ, Testimonials, Newsletter, Footer
   - Test navigation and interactive elements

2. **Check for errors**
   - Open browser console (F12)
   - Look for any errors or warnings
   - Test on mobile view (responsive design)

## Step 4: Share Your Submission

### Email Template for Submission

```
Subject: Front-End Assessment Submission - Luxort Hotel Website

Dear Hiring Team,

I have completed the front-end development for the Luxort Hotel website as per the provided Figma design.

Live Demo: https://your-site-name.netlify.app
GitHub Repository: https://github.com/YOUR_USERNAME/luxort-hotel-website

Technical Stack:
- Next.js 14.2.33
- TypeScript
- Tailwind CSS 3.4.1
- Deployed on Netlify

Key Features Implemented:
✓ Pixel-perfect implementation of Figma design
✓ Fully responsive layout
✓ Interactive carousels in Hero, About, and Events sections
✓ Smooth scrolling and animations
✓ All sections matching Figma specifications

Please let me know if you need any clarifications or additional information.

Best regards,
[Your Name]
```

## Troubleshooting

### Build Fails on Netlify

**Error: Module not found**

- Make sure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Error: Build command failed**

- Check Netlify build logs
- Ensure `next.config.mjs` is properly configured
- Verify Node.js version (use Node 18 or higher)

### Images Not Loading

- Ensure images are in `/public/assets/images/`
- Use correct paths: `/assets/images/filename.png`
- Check file names match exactly (case-sensitive)

### Site is blank/white screen

- Check browser console for errors
- Verify all components are exported correctly
- Ensure Tailwind CSS is properly configured

## Custom Domain (Optional)

If you want a custom domain:

1. Go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Follow Netlify's instructions to configure DNS

## Quick Checklist Before Submission

- [ ] All sections visible and styled correctly
- [ ] Logo appears in navbar and footer
- [ ] Navigation links work
- [ ] Carousel/slider functionality works in Hero, About, and Events
- [ ] Newsletter section has correct dark green background
- [ ] Footer displays properly
- [ ] Mobile responsive (test on phone or browser dev tools)
- [ ] No console errors
- [ ] Site loads quickly (< 3 seconds)

## Useful Netlify Features

- **Site Settings**: Change site name, add custom domain
- **Build & Deploy**: View build logs, trigger manual deploys
- **Deploy Previews**: Automatic previews for pull requests
- **Environment Variables**: Add API keys securely
- **Functions**: Add serverless functions if needed

## Support

If you encounter issues:

- Netlify Docs: https://docs.netlify.com/
- Netlify Community: https://answers.netlify.com/
- Next.js Deployment: https://nextjs.org/docs/deployment

---

**Good luck with your submission!** 🚀
