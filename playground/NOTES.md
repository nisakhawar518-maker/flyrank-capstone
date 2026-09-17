# NOTES.md

## What shadcn/ui handled that I missed

1. **Portal rendering** — shadcn's Dialog renders through a React Portal (into document.body), so it can't get visually clipped by a parent with overflow:hidden. My Modal rendered inline in the component tree without a portal.

2. **aria-describedby / DialogDescription** — shadcn provides a separate DialogDescription component that Base UI automatically wires to the dialog via aria-describedby, so screen readers announce both the title and a description on open. My Modal only wired aria-labelledby (title); it had no description linkage.

3. **sr-only text for icon-only buttons** — shadcn uses visually-hidden `<span className="sr-only">Close</span>` text so an icon-only close button still announces "Close" to screen readers. My close button used visible text so I didn't need this, but it's a pattern I hadn't considered for icon-only controls.

## Other observations
- Both shadcn's Dialog and Tabs delegate all ARIA roles, keyboard handling, and focus management to Base UI primitives instead of raw useState/onKeyDown like I wrote by hand. My hand-rolled version works and passes keyboard testing, but is more fragile — e.g. my focus trap only queries direct focusable children inside the dialog, not deeply nested ones.