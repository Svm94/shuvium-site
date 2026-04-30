## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-01 - [Skip to Main Content Link]
**Learning:** Adding a skip to content link is crucial for keyboard users, allowing them to bypass repetitive navigation. It can be visually hidden but revealed on focus using CSS transforms to ensure a smooth transition.
**Action:** Implement a skip link in `MainLayout.tsx` using `focus-visible:translate-y-0` and `-translate-y-[200%]`. Target a `main` tag with `id="main-content"` and `tabIndex={-1}`.
