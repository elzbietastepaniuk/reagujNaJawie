---
title: "useEffect"
description: "hook w React"
id: "20"
---

`useEffect` jest hookiem w React, który pozwala nam wykonywać jakieś akcje w odpowiedzi na zmiany w naszej aplikacji. Możemy go porównać do "reakcji łańcuchowej" - coś się zmienia, a my reagujemy w zależności od tego, co się stało.

```js
import React, { useState, useEffect } from 'react';

function WelcomeMessage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(true);
  }, []);

  return (
    <div>
      {showMessage && <p>Witaj na stronie!</p>}
    </div>
  );
}
```

Tablica zależności w hooku `useEffect` jest drugim argumentem tej funkcji. Określa, na jakich wartościach zależny jest efekt. Kiedy wartości te się zmieniają, efekt zostanie uruchomiony ponownie.

Przykłady:

1. Efekt zostanie uruchomiony tylko raz

```js
useEffect(() => {
  console.log('Komponent zrenderowany');
}, []); // Ta pusta tablica oznacza, że efekt zostanie uruchomiony tylko raz, po pierwszym renderowaniu komponentu
```


2. Efekt uruchomiony za każdym razem, gdy się zmieni wartość
```js
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Wartość count została zmieniona na: ${count}`);
  }, [count]); // Ten efekt będzie uruchamiany za każdym razem, gdy wartość count się zmieni

  return (
    <div>
      <p>Licznik: {count}</p>
      <button onClick={() => setCount(count + 1)}>Zwiększ licznik</button>
    </div>
  );
}

export default Counter;
```