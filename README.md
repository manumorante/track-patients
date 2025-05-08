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

- **API Mock**: I assume the API part is less relevant to this challenge. I spent more time on it than I would have liked, but I'm happy with it. It's simple and functional.

- **Organized Hooks**: Each data operation has its own hook for better reusability and better lifecycle control. By personal choice or habit, I've tried not to use any `useEffects`.

- **Global state**: Zustand to manage and persist all UI states.

- **Local Database**: I take advantage of Zustand and its function of persisting in localStorage to save data so I can edit, create and simulate a database.

- **Lazy**: each page is loaded on demand, from the router with `React lazy`.

- **Skeleton**: the most relevant components display a skeleton while receiving data. I really like this.

- **Responsive**: support for running comfortably on a mobile device:

  - Applying good practices such as avoiding the 300ms delay.
  - Or preventing zooming when focusing on inputs.

- **Shancn Free**: I wouldn't use a library like Shancn/UI directly in a company because it requires a lot of oversight and changes. It also doesn't scale. It's preferable to create and maintain your own design system, ensuring that it's reflected in your components, with a well-controlled approach.

- **Headless UI** offers me just enough to be able to put the company's styles on top, it is lightweight and scalable.

- **UI Approach**: It's important to know that I've tried to make this _challenge_ as similar to how I would work in a company: controlled, scalable, and uniform. I'm thinking of working with a design team where we would meet to model a _Storybook_, for example.

- **Feature-based components** When thinking about a medium-to-large project, it's important to keep in mind that our features should be well organized. In this case, I've made the only available separation `patients` and `notes`, highlighting the potential use of both in other areas of the app.

## Notes

- **Auto Barrel Files**: I usually work with an extension that creates and maintains `index.ts` files with all exports. It's very convenient for development and allows for cleaner components.

## Future Improvements

- 404 page and error boundaries were omitted for simplicity but would be added in a real app.

## Testing Approach

### What testing strategy would you implement to prevent regressions?

### Which components or features would you prioritize for testing and why?

### What testing tools or libraries would you use with this stack?
