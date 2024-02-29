---
title: "undefined"
description: "typ danych w JS - undefined"
id: "14"
---

`undefined` typ danych, który oznacza, że zmienna nie została zdefiniowana ani zainicjowana. Jeśli spróbujemy uzyskać dostęp do zmiennej, która nie istnieje, otrzymamy wartość `undefined`.
```js
let x;
console.log(x); // Wynik: undefined
```

`undefined` jest również domyślną wartością zwracaną przez JavaScript, gdy nie znajduje on odpowiednika dla wyrażenia, na przykład przy odwoływaniu się do niezdefiniowanej zmiennej lub nieistniejącej właściwości obiektu.
```js
let person = { name: 'John', age: 30 };
console.log(person.address); // Wynik: undefined

let arr = [1, 2, 3];
console.log(arr[5]); // Wynik: undefined
```