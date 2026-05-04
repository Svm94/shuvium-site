## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2025-04-09 - Accessible Skip to Content Links
**Learning:** For single-page applications with locked viewports, implementing a Skip to Content link requires structural coordination. Instead of toggling positioning attributes (which can cause layout jumps), using CSS transforms (`-translate-y-[200%]` to `translate-y-0` on `focus-visible`) creates a smoother visual transition when the link receives keyboard focus.
**Action:** The target `<main>` container must have a matching `id`, `tabIndex={-1}`, and explicit `focus-visible` styling (like `ring-inset`) to visibly confirm that keyboard focus has been successfully transferred.
