---
title: Funkcjonalność like'owania part. 6
id: "8"
---

Funkcjonalność działa, ale poznajmy i przećwiczmy jeszcze jeden bardzo ważny element JavaScriptu, który będzie niezbędny w dalszym tworzeniu naszej aplikacji z wykorzystaniem biblioteki **React**. Są to <a href="/glossary/funkcje/" target="_blank">Funkcje</a>.

Jeśli przyjrzymy się naszej pętli zauważymy, że część kodu jest bardzo podobna i się powtarza. To może być pierwsza wskazówka do tego, że warto tę część kodu zamienić na funkcję, aby móc ją wykorzystać w różnych miejscach naszej aplikacji.

Zacznijmy od deklaracji funkcji. Istnieją różne sposoby na zadeklarowanie funkcji, ale my wykorzystamy przypisanie jej do zmiennej i wykorzystanie zapisu strzałkowego.
Zamysł funkcji jest taki, że powinna być ona niezależna i wszystkie zmienne powinny być przekazywane do niej w formie parametrów.
Do funkcji możemy przekazywać

```js
const handleLikesCounter = (params) => {};
```

Nasza funkcja może nam zwócić jakąś wartość lub wykonać jakąś czynność. My potrzebujemy, aby nasza funkcja dodała lub odjęła do/od przekazanej liczby like i podmieniła tę wartość w elemencie. Zatem będzie to wyglądać tak:

```js
const handleLikesCounter = (number, element, action) => {
  if (action === "add") {
    number = +number + 1;
  } else if (action === "sub") {
    number = +number - 100000;
  }
  element.innerHTML = number;
};
```

Pozostaje nam wykorzystać tę funkcję w naszej pętli.

```js
for (let i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener("click", () => {
    let value = counters[i].innerHTML;
    if (likeIcons[i].classList.contains("active")) {
      likeIcons[i].classList.remove("active");
      handleLikesCounter(value, counters[i], "sub");
    } else {
      likeIcons[i].classList.add("active");
      handleLikesCounter(value, counters[i], "add");
    }
  });
}
```
