## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-18 - Visual Hidden Focus Management
**Learning:** Adding a "Skip to content" link is a standard accessibility best practice, but how it's visually hidden matters. Using `top` or `display: none` can interfere with smooth CSS transitions or screen readers.
**Action:** Use CSS transforms (`-translate-y-[200%]`) along with `focus-visible:translate-y-0` for visually hiding elements like skip-to-content links that should smoothly transition in when focused via keyboard. And ensure the target receives a `tabIndex={-1}` to become programmatically focusable, alongside `focus-visible:outline-none` so it does not render an unnecessary focus ring.
