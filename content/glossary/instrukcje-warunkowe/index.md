---
title: "instrukcje warunkowe"
description: "blok kodu w JS"
id: 16
---

Instrukcje warunkowe w JavaScript służą do wykonywania różnych działań w zależności od spełnienia określonych warunków. Najczęściej stosowanymi instrukcjami warunkowymi są `if`, `else if` oraz `else`. Poniżej znajdziesz krótki opis każdej instrukcji warunkowej wraz z przykładami kodu:

### Instrukcja warunkowa if:

Służy do wykonania określonych działań, jeśli warunek jest spełniony.

```js
if (warunek) {
  // Wykonaj to, gdy warunek jest spełniony
}

let x = 10;
if (x > 5) {
  console.log("x jest większe niż 5");
}
```

### Instrukcja warunkowa else if:

Służy do wykonania innych działań, jeśli pierwszy warunek nie jest spełniony, a kolejny warunek jest spełniony.

```js
if (warunek1) {
  // Wykonaj to, gdy warunek1 jest spełniony
} else if (warunek2) {
  // Wykonaj to, gdy warunek2 jest spełniony
}

let y = 3;
if (y > 5) {
  console.log("y jest większe niż 5");
} else if (y < 5) {
  console.log("y jest mniejsze niż 5");
}
```

### Instrukcja warunkowa else:

Służy do wykonania działań, jeśli żaden z poprzednich warunków nie jest spełniony.

```js
if (warunek) {
  // Wykonaj to, gdy warunek jest spełniony
} else {
  // Wykonaj to, gdy warunek nie jest spełniony
}

let z = 5;
if (z > 5) {
  console.log("z jest większe niż 5");
} else {
  console.log("z nie jest większe niż 5");
}
```

Te instrukcje warunkowe pozwalają na elastyczne zarządzanie przepływem sterowania w programach JavaScript w zależności od spełnienia określonych warunków.
