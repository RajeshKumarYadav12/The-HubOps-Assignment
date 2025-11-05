# 📸 Image Integration Guide

## How to Add Real Images from Figma to Your Website

---

## Step 1: Export Images from Figma

### A. Hero Section Images (3 images needed)
1. Open your Figma design
2. Select the green area image → Right-click → Export → PNG → 2x
3. Name it: `hero-green.jpg`
4. Select the comfy area image → Export → `hero-comfy.jpg`
5. Select the luxury area image → Export → `hero-luxury.jpg`

### B. About Section Images (2 images needed)
1. Export the first image → `about-1.jpg`
2. Export the second image → `about-2.jpg`

### C. Hotel Highlights (1 main image)
1. Export the swimming pool/highlight image → `highlight-pool.jpg`

### D. Events Section (3 images)
1. Weddings image → `event-wedding.jpg`
2. Corporate image → `event-corporate.jpg`
3. Celebrations image → `event-celebration.jpg`

### E. Testimonials (6 avatar images)
1. Export each avatar → `avatar-1.jpg` to `avatar-6.jpg`
Or use placeholder avatars from UI Avatars

---

## Step 2: Place Images in Your Project

Copy all exported images to:
```
frontend/public/assets/images/
```

Your structure should look like:
```
frontend/public/assets/images/
├── hero-green.jpg
├── hero-comfy.jpg
├── hero-luxury.jpg
├── about-1.jpg
├── about-2.jpg
├── highlight-pool.jpg
├── event-wedding.jpg
├── event-corporate.jpg
├── event-celebration.jpg
├── avatar-1.jpg
├── avatar-2.jpg
├── avatar-3.jpg
├── avatar-4.jpg
├── avatar-5.jpg
└── avatar-6.jpg
```

---

## Step 3: Update Component Files

### Update Hero.tsx

Find this line (around line 50-52):
```tsx
<div className="col-span-1 bg-sage-light h-96 rounded-lg"></div>
```

Replace with:
```tsx
<Image 
  src="/assets/images/hero-green.jpg" 
  alt="Green area" 
  width={400} 
  height={600}
  className="col-span-1 h-96 rounded-lg object-cover"
/>
```

Add import at the top:
```tsx
import Image from 'next/image';
```

### Update About.tsx

Find (around line 60-61):
```tsx
<div className="bg-sage-light h-80 rounded-lg"></div>
<div className="bg-sage h-80 rounded-lg"></div>
```

Replace with:
```tsx
<Image 
  src="/assets/images/about-1.jpg" 
  alt="Luxort interior" 
  width={400} 
  height={500}
  className="h-80 rounded-lg object-cover"
/>
<Image 
  src="/assets/images/about-2.jpg" 
  alt="Luxort amenities" 
  width={400} 
  height={500}
  className="h-80 rounded-lg object-cover"
/>
```

### Update HotelHighlights.tsx

Find (around line 48):
```tsx
<div className="bg-sage h-96 rounded-lg"></div>
```

Replace with:
```tsx
<Image 
  src="/assets/images/highlight-pool.jpg" 
  alt="Swimming pool" 
  width={800} 
  height={600}
  className="h-96 rounded-lg object-cover w-full"
/>
```

### Update Events.tsx

Find (around line 42):
```tsx
<div className="bg-sage h-64 rounded-lg mb-4 group-hover:bg-sage-dark transition-colors"></div>
```

Replace with:
```tsx
<Image 
  src={`/assets/images/event-${event.id === '01' ? 'wedding' : event.id === '02' ? 'corporate' : 'celebration'}.jpg`}
  alt={event.title}
  width={400}
  height={300}
  className="h-64 rounded-lg mb-4 object-cover group-hover:scale-105 transition-transform"
/>
```

### Update Testimonials.tsx

Find (around line 67):
```tsx
<div className="w-12 h-12 rounded-full bg-sage-light"></div>
```

Replace with:
```tsx
<Image 
  src={`/assets/images/avatar-${index + 1}.jpg`}
  alt={testimonial.name}
  width={48}
  height={48}
  className="w-12 h-12 rounded-full object-cover"
/>
```

---

## Step 4: Optimize Images (Optional but Recommended)

### Use WebP format for better performance:
```bash
# Install sharp for image optimization
npm install sharp
```

### Or use online tools:
- https://squoosh.app/ (free, no signup)
- https://tinypng.com/ (compress JPG/PNG)
- https://cloudconvert.com/jpg-to-webp (convert to WebP)

---

## Step 5: Alternative - Use Placeholder Images

If you don't have images yet, use these free sources:

### Unsplash (High-quality free photos)
```tsx
<Image 
  src="https://images.unsplash.com/photo-1566073771259-6a8506099945" 
  alt="Luxury hotel"
  width={800}
  height={600}
  className="..."
/>
```

### UI Avatars (Generated avatars)
```tsx
<Image 
  src={`https://ui-avatars.com/api/?name=${testimonial.name}&size=128&background=8B9A92&color=fff`}
  alt={testimonial.name}
  width={48}
  height={48}
  className="w-12 h-12 rounded-full"
/>
```

---

## Step 6: Test Your Images

1. Save all changes
2. Check http://localhost:3000
3. Images should load automatically
4. Test on different screen sizes

---

## 🚨 Troubleshooting

### Images not showing?
```bash
# 1. Check file names are correct (case-sensitive!)
# 2. Make sure images are in /public/assets/images/
# 3. Restart dev server
Ctrl+C
npm run dev
```

### Images too large/slow?
- Resize images to max 2000px width
- Compress using TinyPNG or Squoosh
- Convert to WebP format

### Images look stretched?
- Add `object-cover` class
- Set proper `width` and `height` props
- Use `className` to control size

---

## 📝 Quick Reference - Image Component

```tsx
import Image from 'next/image';

<Image 
  src="/assets/images/your-image.jpg"  // Path from /public
  alt="Description for SEO"             // Always include!
  width={800}                           // Original width
  height={600}                          // Original height
  className="rounded-lg object-cover"   // Tailwind classes
  priority                              // Optional: load first
/>
```

---

## ✅ Checklist

After adding images:
- [ ] All hero images display correctly
- [ ] About section has 2 images
- [ ] Hotel highlights show main image
- [ ] All 3 event cards have images
- [ ] All 6 testimonials have avatars
- [ ] Images are properly sized
- [ ] No broken image icons
- [ ] Images load on mobile view
- [ ] Images look sharp (not blurry)

---

## 🎯 Pro Tips

1. **Lazy Loading**: Next.js Image component handles this automatically
2. **Responsive Images**: Use `sizes` prop for different screen sizes
3. **Blur Placeholder**: Add `placeholder="blur"` for smooth loading
4. **Background Images**: For hero sections, consider using CSS background
5. **Image Optimization**: Next.js automatically optimizes images on build

---

## 📞 Need Help?

- Next.js Image Docs: https://nextjs.org/docs/api-reference/next/image
- Unsplash API: https://unsplash.com/developers
- Image Optimization: https://web.dev/fast/#optimize-your-images

---

**Happy image hunting! 📸**
