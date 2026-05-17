## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-17 - Accessible Skip-to-Content Link
**Learning:** Adding a skip-to-content bypass block early in the DOM using CSS transforms (`-translate-y-[200%]`, `translate-y-0`) handles focus states more gracefully than simple absolute positioning adjustments, reducing page jank. Using a `RootLayout` via `react-router-dom` to wrap routes preserves all downstream layouts while easily injecting these global UI accessibility components.
**Action:** Always wrap application routes in a root layout when introducing global invisible elements (like skip links) and use transitions for interactive states to maintain visual smoothness and focus-visible handling.
