# Vinayak_Void Portfolio

A modern, high-performance React portfolio website showcasing the work and skills of Vinayak Dwivedi.

## Features

- 🚀 **Modern React Architecture** - Built with React 18, TypeScript, and Vite for optimal performance
- 🎨 **Premium UI/UX** - Stunning animations with Framer Motion and custom cursor effects
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ⚡ **Lightning Fast** - Optimized build with Vite for rapid loading times
- 🌙 **Dark Theme** - Beautiful dark theme with vibrant accent colors
- ✨ **Interactive Elements** - Smooth hover effects, scroll animations, and micro-interactions
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for better search visibility

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: CSS-in-JS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vinayak-Dwivedi/vinayak-void-portfolio
cd vinayak-void-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form and info
│   ├── CustomCursor.tsx   # Custom cursor component
│   ├── Footer.tsx         # Footer with social links
│   ├── Hero.tsx           # Hero section with animations
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx        # Projects showcase
│   └── Skills.tsx         # Skills and tech stack
├── App.tsx                # Main app component
├── main.tsx              # App entry point
└── index.css             # Global styles and design system
```

## Customization

### Colors

The color scheme is defined in CSS variables in `index.css`:

```css
:root {
  --bg: #050810;           /* Background */
  --surface: #0d1225;       /* Card backgrounds */
  --surface2: #111827;      /* Darker surfaces */
  --border: rgba(255,255,255,0.06); /* Borders */
  --text: #e8eaf0;          /* Primary text */
  --muted: #6b7280;         /* Secondary text */
  --accent: #4f9eff;         /* Primary accent */
  --accent2: #a78bfa;        /* Secondary accent */
  --accent3: #34d399;        /* Tertiary accent */
}
```

### Fonts

The portfolio uses Google Fonts:
- **Syne** - Headings and display text
- **DM Sans** - Body text
- **Space Mono** - Code and small text

## Performance Features

- **Code Splitting** - Automatic code splitting with React.lazy
- **Image Optimization** - Optimized images and lazy loading
- **Bundle Analysis** - Built-in bundle analyzer
- **Caching** - Proper caching headers for static assets

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect the settings
3. Deploy!

### Other Platforms

Any platform that supports static site hosting will work. Just build the project and upload the `dist` folder.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: vinayakdwivedi2023@gmail.com
- **GitHub**: https://github.com/Vinayak-Dwivedi
- **Portfolio**: https://your-portfolio-url.com

---

Built with ❤️ by Vinayak Dwivedi
