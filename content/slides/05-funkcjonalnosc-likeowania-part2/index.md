---
title: Funkcjonalność like'owania part. 2
id: 5
---

Wszystko fajnie, ale jednak się rozmyśliliśmy i chcemy odserduszkować zdjęcie. Aby to osiągnąć wykorzystamy <a href="/glossary/instrukcje-warunkowe/" target="_blank">instrukcję warunkową</a> if...else.

Może najpierw ubierzmy w słowa to, co chcemy osiągnąć klikając w ikonę:

1. Jeśli element ma już nadaną klasę 'active' to należy ją usunąć.
2. W przeciwnym wypadku należy nadać tę klasę.

W naszym kodzie będzie to wyglądać następująco:

```js
likeIcon.addEventListener("click", () => {
  if (likeIcon.classList.contains("active")) {
    likeIcon.classList.remove("active");
  } else {
    likeIcon.classList.add("active");
  }
});
```
