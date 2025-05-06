# Track Patients Challenge

A simple dashboard to help coaches manage their patients and coaching notes.

## 🤔 Tech Stack

Required:

- **React**
- **TypeScript**
- **React Query**

My choices:

- **Zustand**: Simple global state
- **Tailwind + Shadcn/UI**: Clean UI components

## 🚀 Quick Start

```bash
npm i
npm run dev
```

## 📝 Project Structure & Decisions

```
src/
├── hooks/         # Hooks pattern for React Query
├── store/         # Lightweight Zustand store - perfect fit
│
├── api/           # Simulated API endpoints
├── lib/           # Utils and helpers
│
├── pages/         # Routes and views
├── components/    # UI and feature components
│
└── types/         # Shared interfaces
```

## Key Technical Decisions

### Data Layer

- Organized React Query calls into custom hooks
- Each data operation has its own hook for better reusability
- Simple API simulation with consistent delays
- UUID generation using uuid library

### State Management

- Zustand with persistence for UI state
- Minimal global state approach
- Local storage integration included

### Project Structure

- Feature-based components
- Shared interfaces for type safety
- Clean separation of concerns

## 📄 License

MIT
