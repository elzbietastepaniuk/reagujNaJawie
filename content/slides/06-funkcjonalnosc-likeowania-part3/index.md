---
title: Funkcjonalność like'owania part. 3
id: 6
---

Sprawdźmy czy działa to dla wszystkich ikon w projekcie.

I jak??

Trochę słabo, działa nam to tylko w przypadku pierwszego serduszka, gdyż metoda querySelector wybiera pierwszy napotkany element w dokumencie. Aby złapać wszystkie serduszka musimy użyć metody <a href="/glossary/querySelectorAll/" target="_blank">querySelectorAll</a>.

Stwórzmy nową zmienną, do której przypiszemy wszystkie ikony serduszek:

```js
const likeIcons = document.querySelectorAll(".like");
```

Teraz kusi nas, aby jedynie podmienić pojedynczą ikonę na zbiór ikon jak poniżej:

```js
likeIcons.addEventListener("click", () => {
  if (likeIcon.classList.contains("active")) {
    likeIcon.classList.remove("active");
  } else {
    likeIcon.classList.add("active");
  }
});
```

Zajrzyjmy jednak co się dzieje w konsoli przeglądarki.

<span style="color: red">**Uncaught TypeError: likeIcons.addEventListener is not a function**</span>

Niestety nie możemy podpiąć methody addEventListener do zbioru, czyli <a href="/glossary/tablica/" target="_blank">tablicy</a> elementów, a tym właśnie jest 'likeIcons'. Metoda musi być podpięta do każdego elementu oddzielnie. Ale żeby nie robić tego "na piechotę" wykorzystamy do tego <a href="/glossary/petle/" target="_blank">pętlę</a> for.

```js
for (let i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener("click", () => {
    if (likeIcons[i].classList.contains("active")) {
      likeIcons[i].classList.remove("active");
    } else {
      likeIcons[i].classList.add("active");
    }
  });
}
```
