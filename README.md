# Sachin A - AI Engineer Portfolio

A modern, high-performance portfolio website built to showcase my work as an AI Engineer, Data Analyst, and Full-Stack Developer. This project features a responsive design, interactive animations, and a clean professional aesthetic.

![Project Preview](https://img.shields.io/badge/Status-Active-success)

## 🚀 Features

- **Interactive UI**: Built with React and Framer Motion for smooth transitions and animations.
- **Responsive Design**: Fully optimized for extensive device support (Mobile, Tablet, Desktop).
- **Project Showcase**: Filterable project gallery with direct links to GitHub repositories.
- **Experience Timeline**: Visual display of professional journey and certifications.
- **Contact Form**: Functional contact form integrated with Formspree.
- **Modern Tech Stack**: Utilizes the latest web technologies for speed and maintainability.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui primitives
│   ├── Hero.tsx       # Landing section
│   ├── Projects.tsx   # Project grid with filtering
│   ├── Experience.tsx # Timeline and certifications
│   ├── Contact.tsx    # Contact form
│   └── ...
├── pages/             # Page layouts
├── hooks/             # Custom React hooks
└── lib/               # Utilities
public/
└── resume.pdf         # Resume file (downloadable)
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Sachin1966/sachin-a.-ai-portfolio.git
    cd sachin-a.-ai-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## ⚙️ Configuration

### 1. Resume Download
Place your actual PDF resume in the `public` folder and name it `resume.pdf`.
- File path: `/public/resume.pdf`

### 2. Contact Form Setup
The contact form is pre-configured to use [Formspree](https://formspree.io).
1.  Sign up for a free account at Formspree.
2.  Create a new form and copy the **Form ID**.
3.  Open `src/components/Contact.tsx`.
4.  Replace `"YOUR_FORM_ID"` with your actual ID:
    ```typescript
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzaabbcc";
    ```

## 🤝 Contact

**Sachin A**
- Email: asachin1966@gmail.com
- GitHub: [https://github.com/Sachin1966](https://github.com/Sachin1966)
- LinkedIn: [https://www.linkedin.com/in/sachin-a-293368294](https://www.linkedin.com/in/sachin-a-293368294)

---
© 2026 Sachin A. All Rights Reserved.
