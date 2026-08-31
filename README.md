# 🚀 Anushka Kumari | Software Developer Portfolio

A modern, responsive, and visually stunning developer portfolio built with **React**, **Vite**, and **Vanilla CSS**. Features an interactive tech vector background animation, glassmorphism UI components, dynamic skill badges, functional contact integration, Google Drive CV PDF previewer & downloader, and an interactive Lightbox modal for licenses and certifications.

---

## ✨ Key Features

- **📄 Curriculum Vitae (CV) Previewer & Downloader**: Prominent top-of-page CV section featuring live interactive Google Drive document preview modal, direct download links (`Anushka_Kumari_CV.pdf`), and external Google Drive viewer shortcuts.
- **🌐 Interactive Constellation Vector Background**: Fullscreen animated particle network with interactive mouse magnetic physics and glowing nodes built using HTML5 Canvas.
- **👩‍💻 Hero Section with Orbiting Tech Badges**: Dual spinning orbital glow rings featuring interactive glassmorphism tech badges (Python, JavaScript, React, C++, Google Cloud, Git) surrounding a centered profile avatar, along with quick CTA buttons including "View CV / Resume".
- **🛠️ Technical Arsenal (Skills & Competencies)**: Categorized showcase with distinct Lucide icons for programming languages, tools, platforms, and professional competencies.
- **📜 Licenses & Certifications Lightbox**: Clickable credential cards that open a centered Lightbox viewer showcasing official certificates (DigiCoders Python Training, Infosys Springboard AI, Lenovo Cybersecurity, Wadhwani Employability, and 4 Google Cloud Skills Arcade Awards).
- **📬 Functional Contact Form**: Validated contact section with state management, error/success alert banners, direct email dispatch (`mailto:`), and quick-connect info cards.
- **🔝 Scroll-to-Top Floating Action Button**: Smart FAB in the bottom right corner that smoothly fades in when scrolled past 30% of the page height.
- **🎨 Dynamic Theme & Contrast Controls**: Instant dark/light mode toggle and high-contrast accessibility mode.

---

## 🛠️ Tech Stack

- **Core**: React 19, JavaScript (ES6+), HTML5
- **Styling**: Vanilla CSS3 (Custom Design System, Glassmorphism, CSS Animations)
- **Icons & Graphics**: Lucide React, React Icons, Canvas 2D API
- **Build Tool**: Vite 8
- **Linter**: Oxlint

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v20+ or v22+) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:AnushkaDubey368/Anushka-Portfolio.git
   cd Anushka-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal output).

---

## 📂 Project Structure

```text
anushka-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/              # Certificate documents, GCP badges & profile DP
├── src/
│   ├── assets/              # SVG icons & local static assets
│   ├── components/
│   │   ├── About.jsx / .css
│   │   ├── BackgroundVisualizer.jsx / .css   # Canvas vector network
│   │   ├── Certificates.jsx / .css           # Licenses & Lightbox modal
│   │   ├── Contact.jsx / .css                # Functional form
│   │   ├── Experience.jsx / .css
│   │   ├── Hero.jsx / .css                   # Orbital avatar hero & CV link
│   │   ├── Navbar.jsx / .css                 # Glassmorphic navbar
│   │   ├── PdfViewer.jsx / .css              # Google Drive CV modal & download
│   │   ├── Projects.jsx / .css
│   │   ├── ScrollToTop.jsx / .css            # Floating action button
│   │   └── Skills.jsx / .css                 # Technical arsenal grid
│   ├── App.jsx              # Application root
│   ├── index.css            # Design tokens & core styles
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 📄 License

Created by **Anushka Kumari**. All rights reserved.
