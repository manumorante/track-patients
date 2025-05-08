# Track Patients Challenge

A simple dashboard to help coaches manage their patients and coaching notes.

## 🤔 Tech Stack

- React + TypeScript
- React Query
- Zustand
- Tailwind CSS
- Headless UI

## Testing Approach

In this README, please explain your approach to testing this application:

### What testing strategy would you implement to prevent regressions?

### Which components or features would you prioritize for testing and why?

### What testing tools or libraries would you use with this stack?

## Key Technical Decisions

- Organized React Query calls into custom hooks
- Each data operation has its own hook for better reusability
- Simple API simulation with consistent delays
- Zustand with persistence for UI state
- Feature-based components
- Shared interfaces for type safety
- Clean separation of concerns

## Technical Notes

- All pages use dynamic imports (`React.lazy`)
- 404 page and error boundaries were omitted for simplicity but would be added in a real app.
