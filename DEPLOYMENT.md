# Deployment Guide - Netlify

## 🚀 Deploy Your Luxort Website to Netlify

### Prerequisites
- GitHub account
- Netlify account (free tier works!)
- Your code pushed to GitHub

---

## Method 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Push to GitHub
```bash
cd frontend
git init
git add .
git commit -m "Initial commit - Luxort Hotel Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and login
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** as your Git provider
4. Authorize Netlify to access your GitHub
5. Select your repository

### Step 3: Configure Build Settings
```
Build command: npm run build
Publish directory: .next
```

### Step 4: Environment Variables (if needed)
- Click on **"Show advanced"**
- Add any environment variables you need
- Example: `NEXT_PUBLIC_API_URL=https://api.example.com`

### Step 5: Deploy!
- Click **"Deploy site"**
- Wait 2-3 minutes for deployment
- Your site will be live at `https://random-name-12345.netlify.app`

### Step 6: Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow instructions to connect your domain

---

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Initialize Netlify
```bash
cd frontend
netlify init
```

### Step 4: Deploy
```bash
netlify deploy --prod
```

---

## Method 3: Drag & Drop (Quick Test)

### Step 1: Build Your Project
```bash
cd frontend
npm run build
```

### Step 2: Deploy
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your `.next` folder
3. Your site is live!

⚠️ **Note**: This method is for quick testing only. For production, use Method 1 or 2.

---

## 📝 Build Configuration File

Create `netlify.toml` in your frontend directory:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"
```

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All sections are visible
- [ ] Navigation works
- [ ] Images load properly
- [ ] Responsive design works on mobile
- [ ] Forms work (newsletter signup)
- [ ] No console errors
- [ ] SEO meta tags are correct
- [ ] Custom domain connected (if applicable)
- [ ] HTTPS enabled (automatic with Netlify)

---

## 🔧 Troubleshooting

### Issue: "Build failed"
**Solution**: Check build logs in Netlify dashboard
- Make sure all dependencies are in `package.json`
- Check Node.js version compatibility

### Issue: "Page not found" after deployment
**Solution**: Add redirects in `netlify.toml` (see above)

### Issue: Images not loading
**Solution**: 
- Make sure images are in `/public` folder
- Use relative paths: `/assets/images/image.jpg`
- Check image file names are correct

### Issue: Environment variables not working
**Solution**: 
- Add them in Netlify dashboard under "Site settings" → "Environment variables"
- Prefix with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding variables

---

## 🎯 Continuous Deployment

Once connected to GitHub:
1. Make changes to your code
2. Commit and push to main branch
3. Netlify automatically rebuilds and deploys
4. Changes live in 2-3 minutes!

```bash
git add .
git commit -m "Update hero section"
git push origin main
```

---

## 📊 Performance Optimization

After deployment, use these tools:
- **Lighthouse** (Chrome DevTools) - Check performance score
- **GTmetrix** - Analyze load times
- **Netlify Analytics** - Monitor site traffic

---

## 🎉 Your Site is Live!

Share your deployed URL:
```
https://your-site-name.netlify.app
```

**Next Steps:**
1. Add real images from Figma
2. Test on multiple devices
3. Share with friends and recruiters!
4. Add to your portfolio

---

## 📞 Need Help?

- Netlify Docs: https://docs.netlify.com
- Next.js Deployment: https://nextjs.org/docs/deployment
- Community Forum: https://answers.netlify.com

---

**Built with ❤️ for internship assessment**
