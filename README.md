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
- **Hooks organized**: Each data operation has its own hook for better reusability. 

- **Global state**: con Zustand, para gestionar y persistir todos los estados del UI.

- **Local Database**: I take advantage of Zustand and its function of persisting in localStorage to save data so I can edit, create and simulate a database.

- **Lazy**: each page is loaded on demand, from the router with `React lazy`.

- **Skeleton**: the most relevant components display a skeleton while receiving data.

- **Responsive**: support for running comfortably on a mobile device:

  - Applying good practices such as avoiding the 300ms delay.
  - Or preventing zooming when focusing on inputs.

- **Shancn Free**: Yo no usaría una librería como _Shancn/UI_ directamente en una empresa ya que necesita mucha supervisión y cambios. Además, no escala. Es preferible crear y mantener tu propio sistema de diseño y que se refleje en tus componentes, bien controlado.

- **UI Approach**: It's important to know that I've tried to make this _challenge_ as similar to how I would work in a company: controlled, scalable, and uniform. I'm thinking of working with a design team where we would meet to model a _Storybook_, for example.

- **Feature-based components** When thinking about microfrontends or simply a medium-to-large project, it's important to keep in mind that our features should be well organized. In this case, I've made the only available separation `patients` and `notes`, highlighting the potential use of both in other areas of the app.

## Future Improvements

- 404 page and error boundaries were omitted for simplicity but would be added in a real app.

## Testing Approach

In this README, please explain your approach to testing this application:

### What testing strategy would you implement to prevent regressions?

### Which components or features would you prioritize for testing and why?

### What testing tools or libraries would you use with this stack?
