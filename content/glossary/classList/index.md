---
title: "classList"
description: "właściwość obiektu document"
id: "4"
---

Metoda `classList` jest właściwością obiektu `document`, która umożliwia dostęp do listy klas CSS przypisanych do danego elementu. Pozwala to na dynamiczne dodawanie, usuwanie i sprawdzanie klas na elemencie HTML.

```js
element.classList;
```

Metoda `classList` zapewnia szereg przydatnych metod do manipulowania klasami na elemencie, takich jak:

- `add(className)` - dodaje określoną klasę do listy klas elementu
- `remove(className)` - usuwa określoną klasę z listy klas elementu
- `toggle(className)` - jeśli klasa istnieje, usuwa ją. Jeśli nie istnieje, dodaje ją
- `contains(className)` - sprawdza, czy element ma określoną klasę, zwracając wartość logiczną `true` lub `false`

Przykład użycia:

```js
// Pobiera element o id "myElement"
const element = document.getElementById("myElement");

// Dodaje klasę "active" do elementu
element.classList.add("active");

// Usuwa klasę "inactive" z elementu
element.classList.remove("inactive");

// Jeśli element ma klasę "hidden", usuwa ją; jeśli nie ma, dodaje
element.classList.toggle("hidden");

// Sprawdza, czy element ma klasę "visible"
const isVisible = element.classList.contains("visible");
```

Dzięki `classList` można łatwo manipulować klasami na elementach HTML bezpośrednio za pomocą JavaScript, co jest przydatne do tworzenia interaktywnych stron internetowych.
