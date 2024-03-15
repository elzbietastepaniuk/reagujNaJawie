---
title: "operatory"
description: "arytmetyczne, przypisania, porównania, logiczne"
id: 8
---

`Operatory` są to symbole lub znaki, które pozwalają nam wykonywać różne operacje na zmiennych. W języku JavaScript możemy podzielić operatory na kilka kategorii, takich jak: operatory arytmetyczne, operatory przypisania, operatory porównania, operatory logiczne.

1. **Operatory arytmetyczne**<br />są to operatory używane do wykonywania podstawowych operacji arytmetycznych, takich jak dodawanie `+`, odejmowanie `-`, mnożenie `*`, dzielenie `/`, reszta z dzielenia `%`, oraz operatory inkrementacji `++`, dekrementacji `--`.

```js
let suma = a + b; // Dodawanie
let roznica = a - b; // Odejmowanie
let iloczyn = a * b; // Mnożenie
let iloraz = a / b; // Dzielenie
let reszta = a % b; // Reszta z dzielenia
let inkrementacja = a++; // Inkrementacja (zwiększenie o 1)
let dekrementacja = b--; // Dekrementacja (zmniejszenie o 1)
```

2. **Operatory przypisania**<br />służą one do przypisywania wartości do zmiennych. Najczęściej używanym operatorem przypisania jest operator przypisania `=`, ale istnieją również inne operatory, takie jak `+=`, `-=`, `*=`, `/=`, `%=`, które wykonują operację i przypisują wynik do zmiennej.

```js
let x = 10;
x += 5; // równoważne z x = x + 5;
x -= 3; // równoważne z x = x - 3;
x *= 2; // równoważne z x = x * 2;
x /= 4; // równoważne z x = x / 4;
x %= 2; // równoważne z x = x % 2;
```

3. **Operatory porównania**<br />służą do porównywania lewej strony równania do prawej zwracając w wyniku `true` lub `false`.<br />Należą do nich operatory równości `==`, nierówności `!=`, równości wartości i typu `===`, nierówności wartości i typu `!==`, większe `>`, mniejsze `<`, większe lub równe `>=`, mniejsze lub równe `<=`.

```js
console.log(a == b); // true (porównanie wartości)
console.log(a === b); // false (porównanie wartości i typu)
console.log(a != b); // false (nierówność wartości)
console.log(a !== b); // true (nierówność wartości i typu)
console.log(a > 3); // true (większe od)
console.log(a < 10); // true (mniejsze od)
console.log(a >= 5); // true (większe lub równe)
console.log(b <= 3); // false (mniejsze lub równe)
```

4. **Operatory logiczne**<br />używane są do wykonywania operacji logicznych na zmiennych logicznych. Najczęściej używanymi operatorami logicznymi są AND `&&`, OR `||` oraz NOT `!`. Służą one odpowiednio do koniunkcji, alternatywy i negacji.

```js
let x = true;
let y = false;

console.log(x && y); // false (koniunkcja, "AND")
console.log(x || y); // true (alternatywa, "OR")
console.log(!x); // false (negacja, "NOT")
```
