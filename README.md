# 🏡 Real Estate

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)](https://vercel.com/)

**Real Estate** is a modern, responsive web app showcasing property listings with elegant design and smooth animations.  
Built using **Next.js**, **TypeScript**, **TailwindCSS**, and **Radix UI**.

---

## 🚀 Live Demo

👉 [View Live App](https://real-state-seven-tau.vercel.app/)

---

## ✨ Features

- 🌙 **Theme switcher** using `next-themes`.
- 🎨 **Elegant and composable UI** with Radix + Tailwind.
- 📱 **Fully responsive**, works seamlessly on all devices.
- ✨ **Smooth transitions** using Tailwind animate.
- 🧪 **Component & Unit Testing** with Vitest.

---

## 🧰 Tech Stack

| Category          | Technology                           |
| ----------------- | ------------------------------------ |
| **Framework**     | Next.js 14                           |
| **Language**      | TypeScript                           |
| **Styling**       | TailwindCSS, tailwind-merge, animate |
| **UI Components** | Radix UI, Geist, Lucide Icons        |
| **Themes**        | next-themes                          |
| **Analytics**     | Vercel Analytics                     |
| **Testing**       | Vitest                               |

---

## ⚙️ CI/CD & Automation

This project includes a full GitHub Actions workflow for continuous integration, testing, and deployment:

- **Continuous Integration (CI)**

  - Runs on `push` or `pull_request` events to `master`.
  - Lints code with **ESLint**.
  - Builds the project.
  - Runs **unit and integration tests** using **Jest**.

- **Continuous Deployment (CD)**

  - Automatic deployment to **Vercel** after CI succeeds.
  - Manual approval required for production deployment.
  - Discord notifications for successful production deployments.
  - [CI/CD Discord channel here!](https://discord.com/channels/1433886988158763124/1433886988980719819)

- **Performance & Quality Checks**

  - Weekly **Lighthouse audits** scheduled with GitHub Actions.
  - Dependabot keeps **npm dependencies** and **GitHub Actions** up-to-date weekly.

- **Reusable Workflows**
  - CI tasks are modularized in a **reusable workflow** for maintainability and consistency.
