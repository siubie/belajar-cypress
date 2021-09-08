---
sidebar_position: 5
---

# Menjalankan Cypress Test

Menjalankan cypress test bisa dipermudah dengan menggunakan cli, ini bisa dilakukan dengan modifikasi scripts di package.json

```json
"scripts":{
  "test:chrome" : "cypress run -browser chrome",
  "test:firefox" : "cypress run -browser firefox"
}
```

:::tip Hajar aja ges
Ga usah merasa terintimidasi sama file package.json ini cuma perlu dipahami aja abis gitu enak wes
:::

Bisa juga kita combine script ini sesuka hati, its depend on your imagination

```json
"scripts": {
  "test": "cypress run",
  "test:dev": "npm test --env=dev",
  "test:uat": "npm test --env=uat",
  "test:dev:chrome": "npm run test:dev –browser chrome",
  "test:uat:chrome": " npm run test:uat –browser chrome",
  "test:dev:firefox": "npm run test:dev –browser firefox",
  "test:uat:firefox": "npm run test:uat –browser firefox"
}
```
