---
title: "zmienna"
description: "pojemnik na dane"
id: "7"
---

W JavaScript używamy **zmiennych** do przechowywania danych. Zmienna jest jak pojemnik, w którym możemy przechowywać różne informacje. Aby zadeklarować zmienną, używamy słowa kluczowego `let` lub `const`, a następnie nadajemy jej nazwę. Na przykład:

```js
let name = "John"; // Deklaracja zmiennej 'name' i przypisanie jej wartości "John"
const age = 30; // Deklaracja zmiennej 'age' i przypisanie jej wartości 30
```

Słowo kluczowe `let` oznacza, że zmienna może zmieniać swoją wartość w trakcie działania programu, natomiast `const` oznacza, że zmienna ma stałą wartość, która nie może być zmieniana po przypisaniu.

Możemy również zadeklarować zmienną bez przypisywania jej początkowej wartości. W takim przypadku zmienna będzie miała wartość `undefined`:

```js
let greeting;
console.log(greeting); // Wyświetlenie wartości zmiennej 'greeting' w konsoli
```
