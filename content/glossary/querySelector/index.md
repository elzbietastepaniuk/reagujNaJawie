---
title: "querySelector"
description: "metoda obiektu document"
id: "2"
---

Metoda `querySelector` obiektu `document` służy do wybierania pierwszego elementu na stronie, który pasuje do określonego selektora CSS. Pozwala ona na dynamiczne manipulowanie elementami strony w oparciu o ich atrybuty, klasy, identyfikatory lub inne właściwości.
```js
document.querySelector(selector)
```
Selector to ciąg znaków (string) reprezentujący selektor CSS, który określa, który element należy wybrać. Na przykład:

- `#myId` - wybiera element o identyfikatorze myId
- `.myClass` - wybiera elementy o klasie myClass
- `div` - wybiera wszystkie elementy `<div>`
- `div.myClass` - wybiera wszystkie elementy `<div>` z klasą myClass
- `[name="myName"]` - wybiera elementy z atrybutem name o wartości myName

Na przykład: 
```js
// Wybiera pierwszy element o klasie "example"
const element = document.querySelector('.example');

// Wybiera pierwszy element o identyfikatorze "myDiv"
const myDiv = document.querySelector('#myDiv');

// Wybiera pierwszy element <button>
const button = document.querySelector('button');
```

Metoda `querySelector` zwraca pierwszy pasujący element lub `null`, jeśli nie odnaleziono żadnego elementu pasującego do określonego selektora.\
Jeśli na stronie istnieje więcej niż jeden pasujący element, zostanie zwrócony tylko pierwszy znaleziony.