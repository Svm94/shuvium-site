## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.
## 2025-05-08 - Skip Link CSS Transforms
**Learning:** Using `top: -9999px` or similar absolute positioning hacks for skip links can cause layout jumping or poor visual transitions when focused.
**Action:** Always use CSS transforms (e.g. `-translate-y-[200%]` to `focus-visible:translate-y-0`) for smooth visual transitions upon receiving focus, creating a more polished experience for keyboard users without affecting layout flow.
