---
title: "useState"
description: "hook w React"
id: "19"
---

`useState` to narzędzie, które pomaga komponentom React przechowywać i aktualizować informacje (stan elementu). Jest jak pudełko, w którym można przechowywać różne wartości, na przykład liczby, tekst czy obiekty.

Funkcja `useState` tworzy to pudełko:

```js
import React, {useState} from 'react';

const [count, setCount] = useState(0);
```

Kiedy używamy hooka `useState` w React, dostajemy parę: **zmienną**, która przechowuje aktualną wartość stanu (czyli `count` w tym przypadku) oraz **funkcję**, którą możemy użyć do zmiany tej wartości stanu (czyli `setCount`).\
Te nazwy (`count` i `setCount`) są po prostu tymi, które sami wybieramy, aby odwoływać się do aktualnej wartości stanu oraz do funkcji zmieniającej tę wartość.\
Jest to podobne do nadawania nazw zmiennym w zwykłym programowaniu, tak aby było łatwiej zrozumieć, co one robią.

W naszym przykładzie:

- `count` jest to zmienna przechowująca aktualną wartość stanu licznika.
- `setCount` jest to funkcja, którą używamy do aktualizacji wartości stanu licznika.


#### Stan początkowy

Kiedy używamy `useState(0)`, oznacza to, że stan początkowy (początkowa wartość, którą chcemy przypisać do naszego stanu) jest ustawiony na `0`. To znaczy, że gdy komponent jest po raz pierwszy renderowany, jego stan będzie zaczynał od wartości `0`.\
Jednak pamiętaj, że możemy ustawić różne wartości początkowe w zależności od tego, co potrzebujemy w naszej aplikacji. Na przykład, jeśli chcemy zacząć od innego numeru, po prostu podajemy tę liczbę jako argument do `useState`, np. `useState(10)` rozpocznie stan od `10`.

#### Zmiana stanu

Kiedy chcesz zwiększyć liczbę w pudełku o jeden, używasz funkcji `setCount`, aby otworzyć pudełko, zmienić liczbę i zamknąć je ponownie.

```js
const increment = () => {
  setCount(count + 1);
};
```

`increment` to instrukcja (funkcja), która mówi: *"Otwórz pudełko, zobacz, jaką liczbę masz w środku, dodaj do niej jedną, a następnie zamknij pudełko z nową liczbą w środku."*

Zobaczmy cały kod z użyciem hooka `useState`:

```js
import React, { useState } from 'react';

const Counter = () => {
  // Użycie hooka useState do zainicjowania stanu licznika (initialState = 0)
  const [count, setCount] = useState(0);

  // Funkcja obsługująca zwiększanie wartości licznika
  const increment = () => {
    // Wywołanie setState, aby zaktualizować wartość stanu (count)
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Wywołanie funkcji increment po kliknięciu przycisku */}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```


