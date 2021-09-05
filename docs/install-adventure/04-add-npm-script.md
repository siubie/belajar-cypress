---
sidebar_position: 4
---

# Add NPM Script

Yok blajar NPM Script biar kyk hekel :v

## What is npm script

Bagian dari file package.json, di file ini ditambahin property / variabel yang bisa dipanggil
kemudian dikasi custom command. Script ini custom bisa diset suka suka nya developer.

## How to add custom script

- Buka file package.json
  ![package.json](/img/04-add-npm-script/01-package-json.png)
- Cek di object `"scripts"`

  ```json
  "scripts" : {
    "open":"npx cypress open"
  }
  ```

  ![npm run](/img/04-add-npm-script/03-open-script.png)

  Sekarang kalo dah ada script kyk gitu, kita bisa jalanin cypress dengan perintah

  ```bash
    npm run open
  ```

  ![npm run](/img/04-add-npm-script/02-npm-run-open.png)
