# Frontend Challenge

## Scenario

Here, coaches help patients manage chronic conditions through regular check-ins. Your
task: build a simple dashboard for tracking patients and coaching notes.

## Stack

- React + TypeScript
- React Query
- Zustand
- Tailwind CSS
- Headless UI

## Key Decisions

- Simple API simulation with consistent delays
- React Query hooks organized: Each data operation has its own hook for better reusability
- Zustand with persistence for UI state: with preloaded static file with patients and notes for test.
- Feature-based components
- Lazy loading: each page is loaded on demand, from the router.
- Skeleton loading: the most relevant components display a skeleton while receiving data.

## Future Improvements

- 404 page and error boundaries were omitted for simplicity but would be added in a real app.

## Testing Approach

In this README, please explain your approach to testing this application:

### What testing strategy would you implement to prevent regressions?

### Which components or features would you prioritize for testing and why?

### What testing tools or libraries would you use with this stack?
