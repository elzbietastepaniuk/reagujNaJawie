---
title: Podstawy JavaScript
id: "1"
description: "Podstawy JS"
---


JavaScript jest językiem programowania, który umożliwia tworzenie interaktywnych stron internetowych. To język, który pozwala przeglądarce na wykonywanie skryptów bezpośrednio na stronie internetowej, co daje nam możliwość dodawania interakcji, animacji, walidacji formularzy i wielu innych funkcji.


### Typy danych w JavaScript

JavaScript ma kilka podstawowych typów danych, które służą do przechowywania różnych rodzajów informacji. Oto najważniejsze z nich:

1. **String** -  (łańcuch znaków)- typ danych służący do przechowywania tekstów. Tekst jest zawsze otoczony cudzysłowami np.:
```js
"Hello, world!", 'JavaScript', "12345"
```

2. **Number** -  (liczba) - typ danych używany do przechowywania liczb. Może to być liczba całkowita lub liczba zmiennoprzecinkowa np.:
```js
42, 3.14, -10, 1000
```
3. **Boolean** - (wartość logiczna) typ danych, który przyjmuje jedną z dwóch wartości: `true` lub `false`. Służy do reprezentowania wartości logicznych.
```js
true, false
```

4. **Array** - (tablica) typ danych pozwalający na przechowywanie wielu wartości w jednym miejscu. Tablica jest uporządkowanym zbiorem elementów, które można indeksować (pierwszy element ma index 0). Tworzymy ją za pomocą nawiasów kwadratowych, np.:
```js
 [1, 2, 3, "JavaScript", true, { name: John, age: 25 }]
```

5. **Object** - (obiekt) - typ danych, który służy do grupowania powiązanych informacji w jednym miejscu. Obiekt składa się z par klucz-wartość, gdzie klucze są ciągami znaków, a wartości mogą być dowolnego typu. Tworzymy go za pomocą nawiasów klamrowych, np. { name: "John", age: 30 }.
```js
 { 
    name: "John", 
    age: 30, 
    city: "New York",
    isActive: true 
}
```

5. **Undefined** - Specjalny typ danych, który oznacza, że zmienna nie została zdefiniowana ani zainicjowana. Jeśli spróbujemy uzyskać dostęp do zmiennej, która nie istnieje, otrzymamy wartość `undefined`.
```js
 let x;
```

6. **Null** - Specjalny typ danych, który oznacza brak wartości. Możemy jawnie przypisać zmiennej wartość null, aby wskazać, że nie ma żadnej wartości.
```js
 let y = null;
```

7. **Function** (funkcja) to blok kodu, który może być wywoływany wielokrotnie w programie.
```js
 function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("John");
```

### Zmienne w JavaScript

W JavaScript używamy **zmiennych** do przechowywania danych.  Zmienna jest jak pojemnik, w którym możemy przechowywać różne informacje. Aby zadeklarować zmienną, używamy słowa kluczowego `let` lub `const`, a następnie nadajemy jej nazwę. Na przykład:

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
