# Ego Transport Website

This is the official website for Ego Transport, a modern and responsive web application built with Next.js. The website is designed to showcase the services, benefits, and contact information for Ego Transport.

## Features

- **Responsive Design**: Optimized for all devices, including desktops, tablets, and mobile phones.
- **Dynamic Navigation**: Includes a mobile-friendly menu with smooth animations.
- **Modern UI**: Built with reusable components for scalability and maintainability.
- **Contact Form**: Allows users to easily get in touch with Ego Transport.
- **Hosting**: Deployed on Vercel for fast and reliable performance.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Hosting

The website is hosted on [Vercel](https://vercel.com/), which provides seamless integration with Next.js for deployment and performance optimization.

### Deployment Steps

1. Push your code to the main branch of the GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically build and deploy the project.

## Domain Setup

The domain for this website is managed by [WebSupport](https://www.websupport.sk/). Follow these steps to connect the domain to Vercel:

1. Log in to your WebSupport account.
2. Navigate to the DNS settings for your domain.
3. Add the following DNS records:
   - **CNAME**: Point the `www` subdomain to `cname.vercel-dns.com`.
   - **A Records**: Point the root domain (`@`) to the IP addresses provided by Vercel.
4. Verify the domain in the Vercel dashboard.

## Local Development

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/egotransport.git
   ```
2. Navigate to the project directory:
   ```bash
   cd egotransport
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Project Structure

- **`app/`**: Contains the main application files, including layout and pages.
- **`components/`**: Reusable UI components such as Header, HeroBanner, and ContactForm.
- **`constants/`**: Stores constants like navigation links.
- **`public/`**: Static assets such as images.

## License

This project is licensed under the [MIT License](LICENSE).
