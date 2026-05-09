## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-14 - Bypass Blocks & Smooth Skip Links
**Learning:** Using positional `top` properties to visually hide and show 'Skip to content' links causes a jarring visual jump. Adding a `tabIndex={-1}` and `focus-visible` styling (with `ring-inset`) on the target main container is essential for proper bypass block keyboard routing without disrupting layout.
**Action:** Always use CSS transforms (e.g., `-translate-y-[200%]` to `translate-y-0`) for skip link visibility transitions to ensure smoother animations. Also, wrap routes in a layout component (e.g., `RootLayout`) so global components like skip links don't interfere with individual page structure.
