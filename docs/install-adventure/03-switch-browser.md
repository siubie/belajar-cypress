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

:::note
Pas awal jalan si cypress bakal ngedetect browser yang udah ke install bisa juga switch dari dropdown pilihan browser
:::

![switch browser](/img/03-switch-browser/01-switch-browser-ui.png)

## Jalanin via command line

```bash
npx cypress run --browser {browser-name}
```

atau

```bash
npx cypress run --browser path/to/browser/binary
```

![cypress run](/img/03-switch-browser/02-cypress-run.png)
![cypress run in action](/img/03-switch-browser/03-cypress-run-video.png)
