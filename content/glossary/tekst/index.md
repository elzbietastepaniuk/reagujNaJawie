---
title: "tekst"
description: "typ danych w JS - string"
id: 10
---

`string` - (łańcuch znaków) - typ danych służący do przechowywania tekstów. Tekst jest zawsze otoczony cudzysłowami np.:

```js
"Hello, world!", "JavaScript", "12345";
```

Fragmenty tekstu możemy sklejać ze sobą przy użyciu operatora `+`, na przykład:

```js
// Deklaracja zmiennych przechowujących tekst w apostrofach
let imie = "Jan";
let wiek = "30";

// Składanie fragmentów tekstu za pomocą operatora +
let pozdrowienia = "Hej " + "Jan" + "!"; // Wynik: Hej Jan!
let komunikat = "Cześć, mam " + "30" + " lat."; // Wynik: Cześć, mam 30 lat.

// Składanie tekstu z użyciem zmiennych
let pozdrowieniaZmienna = "Hej " + imie + "!"; // Wynik: Hej Jan!
let komunikatZmienna = "Cześć, mam " + wiek + " lat."; // Wynik: Cześć, mam 30 lat.
```

Jest to przydatna technika w celu tworzenia dynamicznych komunikatów lub wiadomości w aplikacjach internetowych.
