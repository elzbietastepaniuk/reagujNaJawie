---
title: "document"
description: "obiekt document"
id: 1
---

Obiekt `document` jest jednym z obiektów dostępnych w środowisku przeglądarki w JavaScript. Reprezentuje on całą stronę lub dokument HTML, nad którym aktualnie działa skrypt JavaScript.

Oto najważniejsze przykłady użycia obiektu `document`:

**Dostęp do elementów HTML** można użyć obiektu `document` do pobierania istniejących elementów HTML za pomocą metod takich jak `getElementById`, `getElementsByClassName`, `getElementsByTagName` lub [`querySelector`](/glossary/querySelector/).

```js
// Pobieranie elementu o danym identyfikatorze (id)
const header = document.getElementById("header");

// Pobieranie wszystkich elementów o danej klasie (class)
const paragraphs = document.getElementsByClassName("paragraph");

// Pobieranie pierwszego elementu div
const firstDiv = document.querySelector("div");
```

**Manipulacja zawartością HTML** można użyć obiektu `document` do manipulacji zawartością strony internetowej, taką jak dodawanie, usuwanie lub modyfikowanie elementów HTML.

```js
// Dodawanie nowego elementu div do dokumentu
const newDiv = document.createElement('div')
newDiv.textContent = 'Nowy element'
document.body.appendChild(newDiv)

// Usuwanie elementu o klasie "test"
const itemToRemove = document.querySelector('.test')
itemToRemove.remove()

// Modyfikowanie tekstu drugiego elementu listy zakupów
<ul id="shoppingList">
  <li>Jabłka</li>
  <li>Banany</li>
  <li>Pomarańcze</li>
</ul>

const secondItem = document.getElementById('shoppingList').getElementsByTagName('li')[1]
secondItem.innerHTML = 'Gruszki'
```
