---
title: "obiekt"
description: "typ danych w JS - object"
id: 13
---

`object` to typ danych, który służy do grupowania powiązanych informacji w jednym miejscu. Obiekt składa się z par klucz-wartość, gdzie klucz jest unikalnym identyfikatorem, a wartość może być dowolnym typem danych.

```js
let osoba = {
  imie: "Jan",
  nazwisko: "Kowalski",
  wiek: 30,
  adres: {
    ulica: "Warszawska 1",
    miasto: "Kraków",
  },
};
```

W powyższym przykładzie osoba jest obiektem, który zawiera właściwości takie jak `imie`, `nazwisko`, `wiek` i `adres`. Właściwość `adres` jest zagnieżdżonym obiektem, który również posiada swoje własne właściwości.

Aby odwołać się do konkretnej wartości w obiekcie, używamy nazwy klucza w nawiasach kwadratowych lub zapisujemy go bezpośrednio po kropce po nazwie obiektu.

```js
// Odwołanie się do wartości klucza "imie" obiektu osoba
let imie = osoba["imie"];
console.log(imie); // Wynik: Jan

// Alternatywnie, możemy użyć zapisu z kropką
let wiek = osoba.wiek;
console.log(wiek); // Wynik: 30
```
