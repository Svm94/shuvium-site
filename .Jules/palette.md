## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-12 - App-level Skip to Content Implementation
**Learning:** Adding a global "Skip to content" link requires wrapping the application routes in a top-level Layout (e.g., `<RootLayout />`) that provides the `<Outlet />` inside a targetable `<main>` element with `tabIndex={-1}` and `focus-visible:outline-none`.
**Action:** When implementing app-level accessibility features that shouldn't disrupt individual page structures, utilize the `react-router-dom` Outlet pattern within a dedicated layout component rather than modifying the root `index.html` or injecting elements directly into `App.tsx`.
