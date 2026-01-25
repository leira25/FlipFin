## Project Summary
Flip Finance is a professional-grade crypto trading terminal for the Solana ecosystem, featuring a data-dense "Cyber-Trading" interface. It provides real-time token tracking, trending lists, and portfolio management tools with a high-contrast dark theme.

## Tech Stack
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: JavaScript/TypeScript (TSX components)

## Architecture
- **Source Root**: `src/`
- **Components**: `src/components/sections/` contains the core landing page sections (Header, Sidebar, TickerBar, TokenDashboard).
- **Styles**: `src/index.css` contains the global theme and Tailwind v4 configuration.

## User Preferences
- **Theme**: Dark mode (#0b0e11)
- **Primary Color**: #02c076 (Binance Green)
- **Secondary Color**: #f6465d (Stop-loss Red)

## Project Guidelines
- Follow the "Cyber-Trading" aesthetic with compact typography and micro-interactions.
- Use `lucide-react` for icons.
- Maintain a data-dense information architecture.
- "Launch App" button should point to `https://flipfin.fun/`.

## Common Patterns
- **Layout**: Sidebar (left) + TickerBar (top) + Header (sub-top) + Dashboard (content).
- **Typography**: Inter for UI, JetBrains Mono for data values.
