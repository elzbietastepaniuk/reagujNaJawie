---
title: "operator trójargumentowy"
description: "skrócona forma zapisu instrukcji warunkowej"
id: "17"
---

Operator trójargumentowy, znany również jako operator warunkowy, pozwala na wyrażanie prostych warunków w jednej linii kodu. Jest to skrócona forma zapisu instrukcji warunkowej `if...else`.

Składnia operatora trójargumentowego wygląda następująco:

```js
warunek ? wartosc1 : wartosc2;
```

Zasada działania operatora trójargumentowego jest taka, że jeśli warunek jest spełniony (prawdziwy), to zwracana jest wartość `wartosc1`, w przeciwnym razie zwracana jest wartość `wartosc2`.

Na przykład

```js
let wiek = 18;
let komunikat = wiek >= 18 ? "Jesteś pełnoletni" : "Jesteś niepełnoletni";

console.log(komunikat); // Output: Jesteś pełnoletni
```

W tym przykładzie, jeśli wiek jest większy lub równy 18, to zmienna `komunikat` przyjmuje wartość `"Jesteś pełnoletni"`, w przeciwnym razie przyjmuje wartość` "Jesteś niepełnoletni"`.

Operator trójargumentowy jest użyteczny, gdy chcemy skrócić zapis prostych warunków, które mają jedynie dwie możliwe wartości.
