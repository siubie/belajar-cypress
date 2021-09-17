---
sidebar_position: 1
---

# Basic Testing

Di cypress itu gampang mikir nya cuma ada 4 basic command yang perlu dikuasai biar bisa nulis test

1. `cy.visit()` buka halaman web
2. `cy.get()` ambil selector
3. `cy.click()` click selector
4. `cy.should()` assersion

Perintah lainnya bisa dipelajari sambil googling pake `bahasa inggris` di dokumentasi cypress atau `stackoverflow`

## Dimana file testing dibuat

By default file testing ada di folder `cypress/integration/`, berkreasilah biar bisa ngatur file file dalam folder itu biar enak dipake nggarap

## Building Blocks Testing

```javascript
describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
```

`describe` dipake buat mendeskripsikan satu proses, `it` dipake untuk ngetes, satu blok `it` untuk satu test case
Langkah langkah yang biasanya dilakukan

1. Visit Page
2. Cari Elemen
3. Klik
4. Asersi

## Setup Test Proses

1. Buka VsCode (Ingat pasang plugin biar kerjanya enteng)
2. Buka cypress `npx cypress open`
3. Buat File Test
4. Run Satu Test di open di browser
5. Split Screen kiri / kanan antara vscode sama browser nya cypress
