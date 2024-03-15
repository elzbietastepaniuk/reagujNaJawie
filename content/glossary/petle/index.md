---
title: "pętle"
description: "blok kodu w JS"
id: 18
---

Pętla w `JavaScript` to narzędzie, które pozwala nam wykonywać te same instrukcje wiele razy, aż do spełnienia określonego warunku. 

Jest kilka rodzajów pętli w JavaScript. Tu przedstawimy tylko te, które są używane w naszym projekcie:

1. Pętla `for` - jest to podstawowa pętla, która iteruje po elementach dowolnej kolekcji, takiej jak  <a href="/glossary/tablica/" target="_blank">tablica</a> lub <a href="/glossary/obiekt/" target="_blank">obiekt</a>. Możemy jej używać do iteracji po dowolnym typie danych, który ma właściwość `length` lub zestaw kluczy.

```js
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

2. Metoda `map()` - jest to metoda dostępna dla <a href="/glossary/tablica/" target="_blank">tablic</a> JavaScript, która tworzy nową tablicę na podstawie wyników wywołania określonej funkcji dla każdego elementu w tablicy.

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // wynik: [2, 4, 6, 8, 10]
```
