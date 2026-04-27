## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2025-05-18 - Bypass Blocks (Skip to content) Animation
**Learning:** Animating bypass blocks like "Skip to content" links using positional properties (`top` or `left`) triggers layout recalculations, which can cause visual jank. Using CSS transforms (`translate-y`) ensures smooth visual transitions upon focus by keeping the operation on the GPU compositor layer.
**Action:** For skip links, use `-translate-y-full` or `-translate-y-[200%]` in the default hidden state, and switch to `translate-y-0` (or `translate-y-4` for some padding) on `focus-visible` to reveal the element smoothly.
