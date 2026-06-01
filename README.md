# 🏥 House Doc — Dr. Med. Schmidt

A modern, responsive family practice website built with React and Vite. Designed for a fictional German medical practice in the Basel/Freiburg/Lörrach region.

---

## 📸 Preview

> Landing page, Services, and more — fully responsive from 375px to 1280px.

---

## 🚀 Tech Stack

- **React 18** — component-based UI
- **Vite** — fast dev server & build tool
- **React Router DOM** — client-side routing
- **React Icons** — icon library
- **CSS Nesting** — modern nested CSS, no preprocessor needed

---

## ✨ Features

- 📱 Fully responsive — optimized for 375px, 480px, 820px, 1024px, and 1280px
- 🎨 Custom CSS design system with color palettes (primary, secondary, tertiary, accent, teal, neutral)
- 🧭 Fixed navbar with animated mobile menu (slide-in + overlay)
- 🖱️ Smooth hover animations — slide effects, float animations, icon transitions
- 📄 Multi-page layout — Landing, Services
- 🔝 Auto scroll-to-top on route change via `ScrollToTop` component
- 🧩 Modular component architecture

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   └── ScrollToTop.jsx
├── pages/
│   ├── Landing/
│   │   ├── Landing.jsx
│   │   ├── Landing.css
│   │   ├── OurServices.jsx
│   │   └── OurServices.css
│   └── Services/
│       ├── Services.jsx
│       ├── Services.css
│       ├── MedicalServices.jsx
│       ├── MedicalServices.css
│       ├── Questions.jsx
│       └── Questions.css
├── App.jsx
├── App.css
└── index.css
```

---

## 🎨 Design System

All design tokens are defined as CSS custom properties in `index.css`:

| Token            | Description                  |
| ---------------- | ---------------------------- |
| `--primary-*`    | Deep blue — main brand color |
| `--secondary-*`  | Teal — supporting color      |
| `--tertiary-*`   | Green — accent               |
| `--accent-*`     | Soft blue-lavender           |
| `--teal-*`       | Mint/turquoise               |
| `--neutral-*`    | Grays                        |
| `--font-heading` | Work Sans                    |
| `--font-body`    | Inter                        |

---

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/ilkckn/House-Doctor.git

# Navigate into the project
cd House-Doctor

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## 📌 Notes

- This is a **concept/portfolio project** — not a real medical practice
- All patient data, doctor names, and contact information are fictional
- Designed and developed by [Musa Çekçen](https://github.com/ilkckn) — MCCreative

---

## 📄 License

MIT
