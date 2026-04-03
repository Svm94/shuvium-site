## 2024-05-24 - Accessible Custom UI Toggles
**Learning:** Custom UI toggle groups (like the currency selector in Pricing) lack native accessibility features, meaning screen readers cannot determine their group context or which option is currently active.
**Action:** Always wrap custom UI toggle groups in a container with `role="group"` and an `aria-label`. Ensure the interactive elements inside use explicit `aria-pressed` attributes to indicate state and include `focus-visible` utility classes to support keyboard navigation.
