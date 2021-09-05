---
sidebar_position: 3
---

# Switch Browser

Classic problem pada dev web based adalah gimana kalo mau ngecek dengan versi browser yang berbeda beda,
nah di cypress udah ada fitur untuk ngetes dengan berbagai macam browser asalkan si browser dah ada di
laptop tester.

## Supported Browser

- Firefox
- Chrome
- Chromium
- Edge

Pada dasarnya semua browser basic bisa

:::tip
Pas awal jalan si cypress bakal ngedetect browser yang udah ke install bisa juga switch dari dropdown pilihan browser
:::

## Jalanin via command line

```bash
  cypress run --browser {browser-name}
```

atau

```bash
  cypress run --browser path/to/browser/binary
```
