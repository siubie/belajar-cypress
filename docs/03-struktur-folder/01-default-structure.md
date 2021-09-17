---
sidebar_position: 1
---

# Default Structure

Struktur folder default dari cypres adalah :

![plugin](/img/03/01-folder-structure.png)

## Test file

Test spec ditaroh di folder cypress/integration, bisa dimasukkan folder kemudian di isi spec file yang bersesuaian.

## Fixture

Folder fixtures ini bakal bisa dipakai untuk nyimpan config, dan semua data static yang digunakan berulang ketika nggarap test.

## Assets File

Folder asset ini akan berisi semua asset yang tergenerate ketika test berjalan, contohnya file yang di download ketika ngetes, screenshot sama video proses testing.
Sebaiknya dimasukkan ke `.gitignore` karena bakalan autogenerate dan selalu conflict.

### Downloads

Semua file yang di download ketika test bakalan ada disini.

### Screenshots

Semua screenshot ada disini baik dilakukan dengan perintah `cy.screenshot()` atau yang di screenshot otomatis sama cypress ketika ada error.

### Video

Semua video yang di record ketika test ada di folder ini, kalo mau di disable bisa di disable di `cypress.json`

## Plugins

Plugin ini file file yang dieksekusi sebelum project dimulai, sebelum browser jalan, dan ketika tes berjalan ada hook nya.

## Support

File yang ada di folder support bisa dipake buat nyimpen command command custom yang kita punya. di reference di index.js nya support biar bisa dipake.
