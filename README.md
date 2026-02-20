# Teacher Insights Dashboard

A comprehensive, modern dashboard application built to visualize and analyze teacher activity metrics, engagement patterns, and educational insights across different grades, subjects, and activity types.

## Overview

The Teacher Insights Dashboard is a real-time analytics platform designed to help educational administrators monitor and understand teacher activities, performance metrics, and engagement trends. The dashboard provides interactive visualizations including bar charts, pie charts, and area charts to present complex data in an intuitive and actionable format.

## Architecture Decisions

### Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org) - Modern React framework with server-side rendering and static generation capabilities
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with PostCSS - Utility-first CSS framework for rapid UI development
- **Component Library**: [Shadcn/ui](https://ui.shadcn.com) - High-quality, customizable React components built on Radix UI
- **Data Visualization**: [Recharts](https://recharts.org) - Composable charting library with responsive, interactive charts
- **UI Icons**: [Lucide React](https://lucide.dev) - Beautiful, consistent SVG icon library
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) - Light/dark mode support
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript for better maintainability

### Design Principles

1. **Component-Based Architecture**: The application follows a modular component structure with reusable UI components and specialized chart components
2. **Responsive Design**: Mobile-first approach with responsive grid layouts that adapt seamlessly across devices (mobile, tablet, desktop)
3. **Single Responsibility**: Each component has a focused purpose, making the codebase easy to understand and maintain
4. **Separation of Concerns**: Data layer (`/data`) is completely separated from presentation layer (`/components`)
5. **Theme Support**: Built-in light and dark mode support for enhanced user experience

### Data Management

The dashboard utilizes **Mockaroo-generated synthetic data** with **1,000+ realistic teacher activity records** combined with **sample data provided in the project brief**. This hybrid approach ensures:

- Comprehensive coverage of various scenarios and edge cases
- Realistic patterns reflecting actual teacher behavior
- Sufficient volume for meaningful analytics and trend analysis
- Easy extensibility without modifying the core data generation logic

**Data Sources**:
- **Mockaroo**: Primary synthetic data generator (1,000+ records)
- **Sample Dataset**: Email-provided reference data integrated for validation and specific use cases

### Project Structure

```
components/
├── Charts/
│   ├── AppBarChart.tsx           # Interactive bar chart for activity metrics
│   ├── ChartAreaDefault.tsx       # Area chart for trend visualization
│   ├── ChartBarInteractive.tsx    # Detailed interactive bar charts
│   └── ChartPieLabelList.tsx      # Pie chart for category distribution
├── Layout/
│   ├── AppSidebar.tsx             # Navigation sidebar
│   └── Navbar.tsx                 # Header navigation
├── providers/
│   └── ThemeProvider.tsx          # Theme configuration and context
└── ui/                            # Reusable UI components (buttons, cards, etc.)

data/
├── savra-teacher-data-set.js      # Main teacher activity dataset (Mockaroo)
├── chartData.js                   # Processed data for chart rendering
├── quarterly-activity-data.js     # Aggregated quarterly metrics
├── subject-wise-activity-growth.js # Subject-specific growth analytics
└── unmerged-quarterly-activity-data.js # Raw quarterly data

app/
├── layout.tsx                     # Root layout with theme provider
├── page.tsx                       # Dashboard homepage
└── globals.css                    # Global styles and Tailwind directives

lib/
└── utils.ts                       # Utility functions and helpers

hooks/
└── use-mobile.ts                  # Custom hook for responsive behavior
```

## Features

✨ **Interactive Data Visualizations**
- Real-time responsive charts that adapt to user interactions
- Multiple visualization types (bar, pie, area charts) for different analytics needs

📊 **Comprehensive Analytics**
- Teacher activity tracking across multiple dimensions
- Subject-wise performance analysis
- Quarterly trend analysis
- Grade-level insights

🎨 **Modern UI/UX**
- Clean, professional interface with consistent design language
- Smooth animations and transitions
- Intuitive navigation
- Accessibility-first component design

🌓 **Theme Support**
- Light and dark mode for comfortable viewing in any environment
- User preference persistence

💻 **Fully Responsive**
- Mobile, tablet, and desktop optimizations
- Grid-based layout system for flexible content arrangement

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed
- Basic familiarity with React and Next.js

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd savra-technical-assignment-teacher-insights-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

The application auto-reloads as you make changes to the source files.

### Build for Production

```bash
npm run build
npm start
```

## Future Scalability Improvements

### 🔐 Authentication & Authorization
Implementing a robust authentication system would be a transformative upgrade, enabling:
- **User Authentication**: Secure login with role-based access control (admin, teacher, administrator)
- **Data Personalization**: Each user sees dashboards tailored to their role and permissions
- **Audit Trails**: Track who accessed what data and when for compliance
- **Multi-Tenancy**: Support for multiple schools/organizations with isolated data
- **Advanced Permissions**: Granular control over dashboard access, export capabilities, and data manipulation

**Impact**: This single feature would transform the application from a static dashboard into a **full-scale, enterprise-ready application** capable of handling production workloads with proper security, governance, and user management.

### Database Integration
- Replace in-memory datasets with a scalable database (PostgreSQL, MongoDB)
- Implement real-time data synchronization with WebSockets
- Add data caching layer (Redis) for improved performance

### API Layer
- Build RESTful/GraphQL API endpoints
- Implement pagination, filtering, and sorting
- Add rate limiting and request validation

### Performance Optimization
- Server-side data aggregation and processing
- Implement data pagination for large datasets
- Add query optimization and indexing strategies
- Caching strategies for frequently accessed data

### Advanced Analytics Features
- Predictive analytics using machine learning models
- Custom report generation and scheduling
- Alert systems for anomalies and thresholds
- Export functionality (PDF, Excel, CSV)

### Infrastructure & DevOps
- Docker containerization for consistent deployments
- CI/CD pipeline with automated testing
- Monitoring and logging (ELK stack, Sentry)
- Multi-environment deployments (staging, production)

## Development

### Technologies Used
- **React 19** - UI library
- **TypeScript 5** - Static typing
- **Tailwind CSS 4** - Styling
- **Next.js 16** - React framework
- **shadcn/ui** - Component library
- **Recharts** - Chart library
- **ESLint 9** - Code linting

### Code Quality

The project uses ESLint for code quality:
```bash
npm run lint
```

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is created as a technical assignment for SAVRA.

## Author

Ritesh Raj

---

**Built with ❤️ for better educational insights**
