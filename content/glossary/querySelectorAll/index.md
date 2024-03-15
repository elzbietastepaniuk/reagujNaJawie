---
title: "querySelectorAll"
description: "metoda obiektu document"
id: 3
---

Metoda `querySelectorAll` jest jedną z metod obiektu `document` służy, która służy do wybierania wszystkich elementów na stronie, które pasują do określonego selektora CSS. Pozwala to na zbieranie wielu elementów na stronie i operowanie nimi w sposób dynamiczny.

```js
document.querySelectorAll(selector);
```

gdzie `selector` to ciąg znaków reprezentujący selektor `CSS`, który określa, które elementy należy wybrać. Selektory działają tak samo jak w `CSS`, na przykład:

- `.myClass` - wybiera wszystkie elementy o klasie `myClass`
- `div` - wybiera wszystkie elementy `<div>`
- `div.myClass` - wybiera wszystkie elementy `<div>` z klasą `myClass`
- `[name="myName"]` - wybiera elementy z atrybutem `name` o wartości `myName`

Przykład użycia:

```js
// Wybiera wszystkie elementy o klasie "example" i zwraca je jako tablicę
const elements = document.querySelectorAll(".example");

// Wybiera wszystkie elementy <button> i zwraca je jako tablicę
const buttons = document.querySelectorAll("button");

// Wybiera wszystkie elementy <div> o klasie "container" i zwraca je jako tablicę
const divs = document.querySelectorAll("div.container");
```

Metoda `querySelectorAll` zwraca listę wszystkich pasujących elementów jako obiekt typu `NodeList`. Można iterować po tej liście za pomocą pętli, jak na przykład pętla `for` lub `forEach`, aby wykonać operacje na każdym wybranym elemencie.
