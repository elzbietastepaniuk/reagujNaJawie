---
title: "funkcja"
description: "blok kodu w JS"
id: 15
---

W języku JavaScript funkcje są jednym z podstawowych konceptów. Funkcje służą do grupowania zestawu instrukcji, które wykonują określone zadania, i mogą być wywoływane w różnych miejscach w programie.

## Deklaracja funkcji

Funkcje w JavaScript mogą być deklarowane na kilka różnych sposobów. Najczęstszym z nich jest deklaracja za pomocą słowa kluczowego function:

```js
function greet(name) {
  return "Hello, " + name + "!";
}
```

### Wyrażenie funkcyjne

Funkcje w JavaScript mogą być również przypisane do zmiennych jako wyrażenia funkcyjne:

```js
const greet = function (name) {
  return "Hello, " + name + "!";
};
```

### Funkcje strzałkowe

W JavaScript wprowadzono strzałkowe funkcje, które są krótszym sposobem definiowania funkcji anonimowych:

```js
const greet = (name) => {
  return "Hello, " + name + "!";
};
```

## Wywoływanie funkcji

Funkcje w JavaScript mogą być wywoływane poprzez ich nazwę i przekazanie odpowiednich argumentów:

```js
function myFunction() {
  console.log("Wywołaj funkcję");
}
myFunction(); // Wynik: Wywołaj funkcję


// Wynik funkcji możemy przypisać do zmiennej `result`
const greet = function (name) {
  return "Hello, " + name + "!";
};

const result = greet("John");
console.log(result); // Wynik: Hello, John!
```

## Parametry funkcji

Parametry funkcji to dane, które przekazujemy do niej podczas jej wywołania. Pozwalają nam te same instrukcje wykonywać na różnych zestawach danych. Parametry są przekazywane do funkcji w okrągłych nawiasach podczas jej definicji.

Przykładem jest funkcja `hello`, która przyjmuje imię jako parametr i wypisuje w konsoli pozdrowienia dla osoby o tym imieniu.

```js
function hello(name) {
  console.log("Hello, " + imie + "!");
}
```

Przy wywoływaniu tej funkcji możemy przekazać różne imiona (<a href="/glossary/argument" target="_blank">argumenty</a>), na przykład:

```js
hello("John"); // Wynik: Hello, John!
hello("Ann"); // Wynik: Hello, Ann!
hello("Mark"); // Wynik: Hello, Mark!
```

## Zwracanie wartości

Funkcje mogą zwracać wartości za pomocą instrukcji return, które przekazują wynik działania funkcji do miejsca, z którego została wywołana:

```js
function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);
console.log(result); // Wynik: 8
```
Po wykonaniu instrukcji `return`, działanie funkcji zostaje zakończone, więc żadne instrukcje znajdujące się po niej nie będą wykonywane.