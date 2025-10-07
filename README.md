# Personal Website - Kaicheng (Kevin) Guo

A modern personal website built with Next.js and deployed on GitHub Pages.

## 🚀 Quick Start

### Updating Your Website

**Use the deployment script (recommended):**
```bash
./deploy.sh
```

**Or manually:**
```bash
# 1. Make your changes to the website files
# 2. Add any new images to the public/ directory
git add .
git commit -m "Your update message"
git push origin main
```

## 📁 Important Directories

- `app/` - Website content and components
- `public/` - Static assets (images, PDFs) - **MUST be committed to git**
- `out/` - Build output (auto-generated, ignored by git)

## 🖼️ Adding Images

1. **Put images in `public/` directory**
2. **Reference them in code as `/filename.jpg`**
3. **Run `./deploy.sh` to deploy**

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📝 Common Tasks

### Adding New Research Projects
1. Edit `app/page.tsx` - add to the `research` array
2. Add images to `public/` directory
3. Run `./deploy.sh`

### Updating Publications
1. Edit `app/page.tsx` - modify the `publications` array
2. Add new images to `public/` if needed
3. Run `./deploy.sh`

### Adding New Images
1. Copy images to `public/` directory
2. Update image references in `app/page.tsx`
3. Run `./deploy.sh`

## 🚨 Troubleshooting

**Images not showing?**
- Make sure images are in `public/` directory
- Check that `public/` is not in `.gitignore`
- Run `./deploy.sh` to redeploy

**Website not updating?**
- Check GitHub Actions: https://github.com/KevinGuo27/KevinGuo27.github.io/actions
- Wait 2-3 minutes for deployment to complete
- Try hard refresh (Ctrl+F5)

## 🌐 Live Website

Your website is automatically deployed to: https://kevinguo27.github.io/
