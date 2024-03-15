---
title: Funkcjonalność like'owania part. 1
id: 4
---

Pierwszymi krokami w osięgnięciu naszego celu będą:

1. "złapanie" elementu (serduszka)
1. przypisanie go do zmiennej
1. zmiana jego wyglądu po kliknięciu

W celu "złapania" elementu wykorzystamy metodę <a href="/glossary/querySelector/" target="_blank">querySelector</a>.

```js
document.querySelector(".like");
```

Przypiszmy element do zmiennej:

```js
const likeIcon = document.querySelector(".like");
```

Teraz wykorzystajmy metodę nasłuchiwania co się dzieje, z naszym elementem tj. <a href="/glossary/addEventListener/" target="_blank">addEventListener</a>

```js
likeIcon.addEventListener("click", () => {
  console.log("działam");
});
```

Następnie spróbujmy zmienić wygląd serduszka wykorzystując gotową klasę 'active':

```js
likeIcon.addEventListener("click", () => {
  likeIcon.classList.add("active");
});
```
