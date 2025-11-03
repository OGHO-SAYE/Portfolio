# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- 🎬 Smooth animations using Framer Motion
- 📝 Contact form with validation
- 📊 Interactive skills visualization
- 🚀 Fast loading with Next.js
- 🧩 Component-based architecture

## Technologies Used

- **Frontend**:

  - Next.js
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Icons

- **Deployment**:
  - Ready for deployment on Vercel, Netlify, or GitHub Pages

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── public/              # Static files
├── src/                 # Source code
│   ├── app/             # Next.js App Router files
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   │
│   └── components/      # React components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
│
├── package.json         # Dependencies and scripts
└── tailwind.config.ts   # Tailwind CSS configuration
```

## Customization

- **Personal Information**: Edit the content in each component file under `src/components/`
- **Colors**: Modify the color scheme in `tailwind.config.ts`
- **Resume**: Replace the placeholder file at `public/resume.pdf` with your actual resume

## Deployment

This portfolio is optimized for deployment on Vercel, but can be deployed on any platform that supports Next.js.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for the animation library
