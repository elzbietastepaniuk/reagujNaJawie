---
title: Funkcjonalność like'owania part. 5
id: "08"
---

Tak powinna wyglądać zmienna:

```js
const counters = document.querySelectorAll("#likes-counter");
```

Udało się? Super!

Z racji tego, że liczba serduszek odpowiada liczbie counterów (likeIcons.length === counters.length po js'owemu 🙂 sprawdź <a href="/glossary/operatory/" target="_blank">operatory</a>) zamiast tworzyć nową pętlę for wykorzystamy tę już istniejącą.
W niej do zmiennej przypiszemy aktualną liczbę like'ów, którą odczytamy z właściwości **innerHTML**.
Następnie przy dodawaniu klasy do serduszka dodajmy jednocześnie +1 like, a usuwając -1 like.
Wykonajmy sprawdzenie w konsoli.

```js
for (let i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener("click", () => {
    let value = counters[i].innerHTML;
    if (likeIcons[i].classList.contains("active")) {
      likeIcons[i].classList.remove("active");
      value = value - 1;
    } else {
      likeIcons[i].classList.add("active");
      value = value + 1;
    }

    console.log(value);
  });
}
```

Co się dzieje? Dlaczego 1 nie jest dodawane, a doklejane do poprzedniej wartości? Za tym stoją **typy** zmiennych.
Odczytane z elementu value jest typu <a href="/glossary/tekst/" target="_blank">String</a>, czyli w uproszczeniu tekst natomiast 1 jest <a href="/glossary/liczba/" target="_blank">liczbą</a>. Aby JavaScript mógł dodać te dwie wartości musimy zamienić value na liczbę, czyli sparsować ją. Można to zrobić bardzo łatwo korzystając z funkcji parseInt(value) lub dodając znak '+' przed zmienną.

```js
for (let i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener("click", () => {
    let value = counters[i].innerHTML;
    if (likeIcons[i].classList.contains("active")) {
      likeIcons[i].classList.remove("active");
      value = +value - 1;
    } else {
      likeIcons[i].classList.add("active");
      value = +value + 1;
    }

    console.log(value);
  });
}
```

Jeśli wszystko się zgadza pozostaje nam przypisać naszą nową wartość value do elementu.

```js
for (let i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener("click", () => {
    let value = counters[i].innerHTML;
    if (likeIcons[i].classList.contains("active")) {
      likeIcons[i].classList.remove("active");
      value = +value - 1;
      counters[i].innerHTML = value;
    } else {
      likeIcons[i].classList.add("active");
      value = +value + 1;
      counters[i].innerHTML = value;
    }
  });
}
```
