---
title: "addEventListener"
description: "metoda obiektu"
id: 5
---

`addEventListener` jest metodą obiektu, która służy do dodawania zdarzeń (eventów) do elementów DOM. Pozwala to na reagowanie na różne akcje użytkownika, takie jak kliknięcie, najechanie myszą, wprowadzenie tekstu itp.

Metoda `addEventListener` przyjmuje dwa <a href="/glossary/argument" target="_blank">argumenty</a>: nazwę zdarzenia i funkcję obsługi zdarzenia. Po dodaniu zdarzenia, gdy dany rodzaj akcji wystąpi na elemencie, funkcja obsługi zostanie automatycznie wywołana.

Na przykład, jeśli chcemy wykonać pewne działanie po kliknięciu na przycisk, możemy użyć `addEventListener` w ten sposób:

```js
const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
  console.log("Przycisk został kliknięty!");
});
```
