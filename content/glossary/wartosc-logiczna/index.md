---
title: "wartość logiczna"
description: "typ danych w JS - boolean"
id: "11"
---

`boolean` - typ danych, który przyjmuje jedną z dwóch wartości: `true` lub `false`.

```js
true, false;
```

Służy do reprezentowania wartości logicznych i są podstawą dla wielu operacji i konstrukcji warunkowych.

1. Negacja: operator `!` służy do negacji wartości logicznej. Jeśli wartość jest true, po zastosowaniu operatora `!` staje się false, a jeśli jest false, staje się true.

```js
let prawda = true;
let falsz = !prawda; // falsz będzie teraz równy false
```

2. Koniunkcja: operator `&&` wykonuje logiczną koniunkcję dwóch wartości. Zwraca true tylko wtedy, gdy obie wartości są true.

```js
let a = true;
let b = false;
let wynik = a && b; // wynik będzie równy false
```

3. Alternatywa: operator `||` wykonuje logiczną alternatywę dwóch wartości. Zwraca true, jeśli przynajmniej jedna z wartości jest true.

```js
let c = true;
let d = false;
let wynik2 = c || d; // wynik2 będzie równy true
```

3. Porównanie: oprócz standardowych operatorów porównania, takich jak `==` i `!=,` w JavaScript mamy również operatory ścisłego porównania `===` (również porównanie typu) i `!==.`

```js
let x = 5;
let y = 10;
let rowne = x === y; // rowne będzie równy false
let nierowne = x !== y; // nierowne będzie równy true
```

Zobacz więcej nt. → [operatorów](/glossary/operatory)
