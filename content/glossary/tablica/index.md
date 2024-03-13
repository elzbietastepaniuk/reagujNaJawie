---
title: "tablica"
description: "typ danych w JS - array"
id: "12"
---

Tablica, `array`, jest to struktura danych służąca do przechowywania kolekcji elementów w jednym miejscu. Elementy w tablicy mogą być różnego typu: liczby, tekst, obiekty, inne tablice itp. Tablica może być dynamicznie rozszerzana i zmniejszana w trakcie działania programu.

### Tworzenie Tablicy

Tablicę w JavaScript tworzymy za pomocą nawiasów kwadratowych []. Elementy tablicy oddzielamy przecinkami.

```js
[1, 2, 3, "JavaScript", true, { name: John, age: 25 }];
```

### Dostęp do elementów Tablicy

Elementy tablicy możemy odczytywać lub modyfikować za pomocą indeksów. Indeksowanie tablic w JavaScript zaczyna się od zera.

```js
let liczby = [1, 2, 3, 4, 5];
console.log(liczby[0]); // Odczytuje pierwszy element tablicy (1)
liczby[2] = 10; // Modyfikuje trzeci element tablicy (zmienia 3 na 10)
```

Po tablicy mozna iterować za pomocą pętli, na przykład pętla `for`,  `forEach` lub `map`, aby wykonać operacje na każdym wybranym elemencie.
