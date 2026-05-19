## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-19 - Skip to Content via CSS Transforms
**Learning:** Using CSS `top` or `left` values to toggle a visually hidden skip-to-content link can cause visual jank or lack smooth transitions when receiving focus. Additionally, wrapping React Router routes in a layout component provides a global non-intrusive container without breaking individual page layouts.
**Action:** Use CSS transforms (`-translate-y-[200%]` to `translate-y-0`) for smoother visual transitions upon receiving focus for skip links. Wrap page contents in a `<main>` container with `tabIndex={-1}` and `focus-visible:outline-none` when routing.
