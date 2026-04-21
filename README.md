# 🚛 Ego Transport - Modern Logistics & Moving Web

This is a production-grade web application built for **Ego Transport**, a professional moving and logistics company. The project focuses on high performance, lead generation, and advanced SEO strategies for local search dominance.

## 🌟 Key Features

- **Dynamic SEO Routing**: Programmatically generated landing pages for key Slovak cities (Bratislava, Košice, Žilina, etc.). Each page features unique content, metadata, and localized copy to maximize search engine relevance.
- **Modern Tech Stack**: Built with **Next.js 15+** utilizing the App Router and Server Components for lightning-fast page loads and optimal Core Web Vitals.
- **Responsive & Mobile-First**: A seamless user experience across all devices powered by **Tailwind CSS**.
- **Automated Sitemap Generation**: A dynamic `sitemap.js` implementation that monitors the city database and automatically injects new routes for instant Google indexing.
- **Validated Lead Generation**: A customized contact form featuring client-side validation, Honeypot spam protection, and automated inquiry processing.
- **Custom 404 Experience**: User-friendly error handling to keep potential customers engaged even when a route is not found.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Netlify](https://www.netlify.com/)
- **Deployment**: CI/CD via GitHub Integration

## 📁 Project Architecture

- **`/app/stahovanie/[mesto]`**: The core dynamic route template serving as the engine for localized SEO pages.
- **`/data/mestaData.js`**: Centralized Content Management (CCM) for city-specific data, benefits, and descriptions.
- **`/components/UI`**: A library of reusable, atomic UI components (Buttons, Inputs, Containers).
- **`sitemap.js`**: Programmatic SEO configuration for automated search engine crawling.

## 🚀 Installation & Local Development

To explore the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/egotransport.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## 📈 Project Status

The website is fully functional and live at **[egotransport.sk](https://www.egotransport.sk)**.

---

**Author:** Slavomír JONI
**License:** MIT
