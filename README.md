# Modern React Dashboard

A responsive, production-ready dashboard built with React, TypeScript, and Tailwind CSS. This project features a modern design with responsive scaling and a collapsible sidebar.

## Features

- 📱 Fully responsive design
- 🎯 Automatic page scaling based on viewport size
- 🎨 Modern UI with Tailwind CSS
- 📊 Flexible layout with three-panel design
- 🔄 Collapsible sidebar navigation
- 🔔 Real-time notifications panel
- ⚡ Built with Vite for optimal performance

## Layout Components

- **Navbar**: Fixed navigation bar with responsive menu toggle
- **Sidebar**: Collapsible left panel with navigation links
- **Main Content**: Flexible content area with card grid
- **Right Panel**: Notifications and additional information
- **Footer**: Responsive footer with company information

## Responsive Scaling

The dashboard automatically scales based on viewport width:
- 992px - 1600px: 90% scale
- 700px - 767px: 80% scale
- 600px - 700px: 75% scale
- ≤ 600px: 50% scale

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

## Deployment

The project is deployed on Netlify. You can view the live site at:
https://capable-monstera-36eee9.netlify.app

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/         # React components
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── RightPanel.tsx
│   └── Footer.tsx
├── hooks/             # Custom React hooks
│   └── useResponsiveScale.ts
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
