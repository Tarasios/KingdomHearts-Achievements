# Inline icons for headers / names

Drop small PNGs here and reference them from any tracker lang string with
the `{{name}}` shorthand (no path, no extension). The icon is sized to the
surrounding text, so it sits neatly inside a header without being
disruptive.

Examples (edit `lang/messages/en/<game>.json`):

- Header: set `bt-finish-for` to `{{finish}} Finish Commands — %1`
  → shows `images/icons/finish.png` before the heading.
- World header icons for a per-world view (e.g. `dwarf-woodlands.png`,
  `radiant-garden.png`).

Naming: letters, numbers and hyphens, e.g. `{{dwarf-woodlands}}` →
`images/icons/dwarf-woodlands.png`. If the file is missing the browser
shows a small broken-image marker, so only reference icons you've added.

There is also a hover-tooltip shorthand: `[[visible text|more info]]`
renders the text with a dotted underline and shows "more info" on hover.
Both shorthands work in any header or item-name field.
