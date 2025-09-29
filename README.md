# Kaicheng (Kevin) Guo - Personal Website

A modern, responsive personal website built with Next.js, React, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/KevinGuo27/KevinGuo27.github.io.git
cd KevinGuo27.github.io
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Replace placeholder assets:

   - Add your headshot image as `public/headshot.jpg`
   - Add your CV as `public/Kaicheng_Guo_CV.pdf`

4. Customize your information:
   - Edit the profile data in `app/page.tsx`
   - Update contact information, education, publications, research, etc.

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
# or
yarn build
```

### Deployment

This site is configured for GitHub Pages deployment. Push to the `main` or `kevin` branch to trigger automatic deployment.

## 🎨 Customization

### Profile Data

All personal information is stored in the `PROFILE`, `EDUCATION`, `PUBLICATIONS`, `RESEARCH`, `EXPERIENCE`, `TEACHING`, `SKILLS`, and `HOBBIES` constants at the top of `app/page.tsx`.

### Styling

The site uses Tailwind CSS for styling with a custom design system. Colors and spacing can be customized in `tailwind.config.js`.

### Assets

- **Headshot**: Place your image at `public/headshot.jpg`
- **CV**: Place your CV at `public/Kaicheng_Guo_CV.pdf`
- Add any additional assets to the `public/` directory

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page component
├── components/ui/        # Reusable UI components
│   ├── badge.tsx
│   ├── button.tsx
│   └── card.tsx
├── lib/
│   └── utils.ts         # Utility functions
├── public/              # Static assets
│   ├── headshot.jpg     # Your headshot (replace this)
│   └── Kaicheng_Guo_CV.pdf  # Your CV (replace this)
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 🛠 Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## 📝 License

This project is open source and available under the [MIT License](LICENSE.md).

---

Made with ❤️ by Kaicheng (Kevin) Guo
