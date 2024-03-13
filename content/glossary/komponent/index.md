---
title: "komponent"
description: "komponent funkcyjny React"
id: "19"
---

Komponent w React to "część" aplikacji internetowej, która zajmuje się jedną konkretną rzeczą, na przykład wyświetlaniem przycisku, formularza lub całego panelu. To jak kawałek puzzle, który można użyć wielokrotnie, aby zbudować całą stronę internetową.\
Każdy komponent ma swoje "zasady", które mówią mu, jak się zachować i jak wyglądać na ekranie. Na przykład, przycisk może mieć różne kolory lub tekst w zależności od tego, jakie reguły mu przekazujemy.\
Komponenty są podstawowym budulcem stron internetowych napisanych w React.

Komponenty przyjmują dane wejściowe, nazywane **propsami**, i generują strukturę drzewa DOM lub innego typu elementy interfejsu użytkownika na podstawie tych danych.

Wyróżniamy dwa rodzaje komponentów w React: **klasowe** i **funkcyjne**.
My w swojej aplikacji skupimy sie na tym drugim typie.

## Budowa komponentu

Komponent funkcyjny w React składa się z jednej funkcji JavaScript, która zwraca element lub strukturę JSX.

W skrócie, składa się z:

1. **definicji funkcji** tworzymy funkcję, która będzie naszym komponentem. Może to być standardowa funkcja JavaScript lub funkcja strzałkowa.
2. **Zwracanego JSX:** wewnątrz funkcji definiujemy, co ma być zwrócone przez ten komponent. Zazwyczaj jest to struktura **JSX**, która opisuje wygląd i zachowanie komponentu. **JSX** to składnia rozszerzająca język JavaScript, która pozwala nam pisać kod HTML wewnątrz kodu JavaScript.

```js
import React from "react";

// Komponent funkcyjny
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

W powyższym przykładzie `Greeting` jest nazwą komponentu funkcyjnego, który przyjmuje obiekt `props` jako argument i zwraca element JSX zawierający pozdrowienie. Aby uzyskać dostęp do wartości `name`, musimy odwołać się do niej poprzez `props.name`.

Natomiast w drugim przykładzie:

```js
import React from "react";

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

zamiast pobierać cały obiekt props i odwoływać się do właściwości `name` poprzez `props.name`, wykorzystujemy destrukturyzację, aby od razu wyciągnąć właściwość `name` z obiektu `props` i przypisać ją do zmiennej o nazwie `name`. Dzięki temu możemy od razu użyć zmiennej `name` wewnątrz funkcji komponentu, co sprawia, że kod jest bardziej czytelny i zwięzły.

Nawiasy klamrowe `{ }` są używane do osadzania kodu JavaScript wewnątrz JSX, co pozwala na dynamiczne wstawianie wartości lub wyrażeń JavaScript wewnątrz komponentów React.

## Importowanie i eksportowanie

W React, komponenty mogą być importowane i eksportowane, tak jak każda inna funkcja lub moduł JavaScript.

W poprzednim przykładzie widzmy, ze komponent (funkcja) został wyeksportowany jako domyślny, `export default Greeting;`, co pozwala nam importować go w innych plikach.

Aby wykorzystać komponent taki komponent musimy go **zaimportować**.

```js
// Importowanie komponentu Greeting z innego pliku
import Greeting from "./GreetingComponent";

// Użycie komponentu Greeting
function App() {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
}
```
