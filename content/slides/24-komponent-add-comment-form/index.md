---
title: Komponent `AddCommentForm.js`
id: "24"
---

Komponent `AddCommentForm.js` służy do dodawania nowych komentarzy.
Podobnie jak w komponencie `CommentSection` będziemy wykorzystywac komunikację z serwerem, jednak tu zamiast pobierania, będziemy wysyłać nowy komentarz.

## Struktura komponentu

Skupmy się na wstępie na strukturze komponentu, a następnie zdefiniujmy funkcje i stany, które będą potrzebne do prawidłowego działania komponentu.

```js
return (
  <form onSubmit={  }> // Obsługa zdarzenia wysłania formularza
    <div className="form-container">
      <img
        src={''} // Źródło zdjęcia avatara użytkownika
        alt="Avatar"
        className="avatar"
      />
      <div className="form-input">
        {/* Pole tekstowe do wprowadzania treści komentarza */}
        <textarea
          id="comment"
          value={ } // Treść komentarza
          onChange={ } // Obsługa zdarzenia zmiany zawartości pola tekstowego
          onKeyDown={ } // Obsługa zdarzenia wciśnięcia klawisza - jesli jest to enter - wyślij formularz
          rows={1}
          required
          placeholder="Wpisz treść komentarza"
          style={{ resize: 'none' }} // Jeśli jest błąd dodaj czerwony border
        ></textarea>
        {/* Jesli jest błąd, pokaż go */}
        <span className="error">{ }</span> // Treść błędu
      </div>
    </div>
  </form>
)
```

Z tego kodu wynika, że potrzebujemy 3 funkcji oraz 2 stanów.

## Wykorzystanie hooków stanu `useState`

Tu również wykorzystamy hook stanu <a href="/glossary/useState" target="_blank">`useState`</a> do przechowywania aktualnego tekstu komentarza (`comment`) oraz ewentualnego błędu przy dodawaniu komentarza (`error`).

```js
import React, { useState } from "react";

const AddCommentForm = () => {
  // Stan komponentu: comment - aktualny tekst komentarza, error - ewentualny błąd przy dodawaniu komentarza
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
};
```

Mając to możemy uzupełnić tymi stanami strukturę:

```js
 <textarea
  id="comment"
  value={comment} // Treść komentarza
  onChange={ }
  onKeyDown={ }
  rows={1}
  required
  placeholder="Wpisz treść komentarza"
  style={{ resize: 'none' }} // Jeśli jest błąd dodaj czerwony border
></textarea>
{/* Jesli jest błąd, pokaż go */}
 <span className="error">{error}</span> // Treść błędu
```

Możemy także dodać warunek dla błędu z pomocą <a href="/glossary/operatory/" target="_blank">operatora logicznego `&&` </a>, tak jak to zrobilismy komponencie `CommentSection.js`. Spróbuj zrobić to samodzielnie.

Podobnie za pomocą <a href="/glossary/operator-trójargumentowy/" target="_blank">operatora trójargumentowego</a> możemy dodać czerwone obramowanie dla pola tekstowego, jeśli wystepuje błąd. 
```js
style={{ resize: 'none', borderColor: error ? 'red' : '' }}
```

## Obsługa zdarzeń

Ustalilismy, że ten komponent obsługuje trzy zdarzenia, które są istotne dla procesu dodawania komentarza.

1. Obsługa zdarzenia wysłania formularza. Sprawdza, czy wprowadzony przez użytkownika komentarz nie jest pusty, a następnie wysyła go do serwera. W przypadku powodzenia, uaktualnia listę komentarzy i czyści pole tekstowe. W przypadku błędu, informuje użytkownika o problemie. Niech funkcja obsługująca to zdarzenia nazywa sie `handleSubmit`.

2. Obsługa zdarzenia wciśnięcia klawisza. Jeśli użytkownik naciśnie klawisz Enter (bez jednoczesnego przytrzymania Shift), automatycznie wywołuje funkcję wysłania formularza `handleSubmit`. Niech funkcja obsługująca to zdarzenia nazywa sie `handleKeyDown`.

3. Obsługa zdarzenia zmiany zawartości pola tekstowego. Aktualizuje stan komponentu, aby odzwierciedlić nowy wprowadzony przez użytkownika tekst. Niech funkcja obsługująca to zdarzenia nazywa sie `handleChange`.

Napiszmy te funkcje.

### Obsługa zdarzenia wysłania formularza `handleSubmit`

Będzie to funkcja asynchroniczna (tak, jak przy pobieraniu komentarzy, które mogą trwać dłużej nie blokując przy tym wykonywania innych operacji w aplikacji).\
Nasza funkcja przyjmuje parametr `e`, który reprezentuje zdarzenie, w tym przypadku, zdarzenie wysłania formularza.\
Przekazanie zdarzenie będzie nam potrzebne do wywołaniu na nim metody `preventDefault()`, która zapobiega domyślnemu zachowaniu formularza - przeładowaniu strony po jego wysłaniu.

####

```js
const handleSubmit = async (e) => {
  // Zapobieganie domyślnego zachowania formularza (przeładowania strony) po jego wysłaniu
  e.preventDefault()

```

#### Tworzenie obiektu nowego komentarza

Aby wysłać nowy komentarz musimy najpierw stworzyć obiekt nowego komentarza zgodnie ze strukturą `src\data\db.json`. Pole `id` zostanie automatyczne dodanie przez `json-server`, pozostałe musimy wypełnić sami.\
Aktualnie mamy treść komentarza trzymaną w stanie `comment` i ją możemy przekazac do obiektu.\
Pozostałe pola uzupełnimy później.

```js
// Tworzenie obiektu nowego komentarza.
const newComment = {
  nickname: "",
  content: comment,
  avatar: "",
};
```

#### Wysyłanie komentarza na serwer

W funkcji `handleSubmit` również uzyjemy bloków `try` i `catch`.

Wewnątrz bloku `try` użyjemy funkcji `fetch`, która przyjmuje 2 argumenty:

1. endpoint `/comments`, adres URL, do którego wysyłamy dane
2. obiekt konfiguracyjny, który zawiera informacje takie jak `method`, `headers` i `body`.

- `method: 'POST'` określa metodę żądania HTTP, w tym przypadku POST. Metoda POST jest używana do wysyłania danych do serwera, takich jak nowy komentarz.

- `body:` zawiera dane, które chcemy przesłać do serwera. Może to być tekst, formularz, obiekt JSON itp., w zależności od tego, jakie dane chcemy wysłać.

- `headers` jest obiektem, który zawiera różne nagłówki HTTP jako pary klucz-wartość. Na przykład, w przypadku wysyłania żądania z treścią w formacie JSON, możemy dodać nagłówek `Content-Type` z wartością `application/json`, aby poinformować serwer, że przesyłamy dane w formacie JSON.

Nastepnie sprawdzamy, czy odpowiedź z serwera jest poprawna. Jeśli nie, to zostaje rzucony błąd. Jeśli odpowiedź jest poprawna, wykonuje się kod w bloku `else` - czyscimy pole tekstowe, ustawiając wartość komentarza na pusty string, co umożliwia użytkownikowi wprowadzenie nowego komentarza.

Jeśli wystąpił jakiś błąd podczas wysyłania komentarza do serwera, w bloku `catch` aktualizuje się stan błędu. Wiadomość błędu jest przechowywana w obiekcie `error`, a `error.message` zawiera tę wiadomość i przekazujemy ją do stanu `error` za pomocą funkcji `setError`.

```js
  try {
    // Wysłanie nowego komentarza do serwera
    const response = await fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment)
    })
    // Obsługa odpowiedzi z serwera
    if (!response.ok) {
      throw new Error('Błąd przy dodawaniu komentarza')
    } else {
      // Zresetowanie pola komentarza textarea po dodaniu komentarza
      setComment('')
    }
  } catch (error) {
    // Aktualizacja stanu błędu
    setError(error.message)
  }
}
```

Możemy jeszcze zabezpieczyć się przed wysłaniem pustego komentarza: 
```js
if (comment.trim().length === 0) return
```
Metoda `trim()` usuwa puste znaki z początku i końca tekstu, a `length` zwraca długość tekstu. Jeśli komentarz jest pusty, funkcja kończy działanie (`return`).

Czyli nasz funkcja powinna wyglądać tak:

```js
const handleSubmit = async (e) => {
  e.preventDefault();

  if (comment.trim().length === 0) return;

  const newComment = {
    nickname: "",
    content: comment,
    avatar: "",
  };
  try {
    const response = await fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    if (!response.ok) {
      throw new Error("Błąd przy dodawaniu komentarza");
    } else {
      setComment("");
    }
  } catch (error) {
    setError(error.message);
  }
};
```

### Obsługa zdarzenia zmiany zawartości pola tekstowego `handleChange`

Funkcja `handleChange` będzie wywoływana po zmianie zawartości pola tekstowego. Będzie ona miała za adanie zaktualizować stan komponentu (`comment`), aby odzwierciedlić nowy wprowadzony przez użytkownika tekst.

Tu również przekazujemy parametr `e` - event, zdarzenie. Gdy użytkownik wpisuje tekst w pole tekstowe (`textarea`) i zdarzenie `onChange` zostaje wywołane, `e.target.value` będzie zawierać aktualną wartość wprowadzoną przez użytkownika. Wartość tę przekazujemy ją do stanu `comment` za pomocą funkcji `setComment`.

```js
const handleChange = (e) => {
  setComment(e.target.value);
};
```

Możemy dodać dynamiczne dostosowywanie wysokości pola tekstowego.

Na początku ustawiamy wysokość pola tekstowego na automatyczną. Oznacza to, że wysokość pola tekstowego zostanie dostosowana do jego zawartości.

```js
e.target.style.height = "auto";
```

Następnie sprawdzamy, czy rzeczywista wysokość treści pola tekstowego jest mniejsza niż 200 pikseli. Jeśli tak, ustawiamy wysokość pola tekstowego na wysokość jego zawartości za pomocą `e.target.scrollHeight`. W przeciwnym razie, jeśli treść pola tekstowego jest większa lub równa 200 pikseli, ustawiamy wysokość na 200 pikseli.

```js
if (e.target.scrollHeight < 200) {
  e.target.style.height = `${e.target.scrollHeight}px`;
} else {
  e.target.style.height = "200px";
}
```

### Obsługa zdarzenia wciśnięcia klawisza `handleKeyDown`

Ponieważ nie chcemy mieć specjalnego buttonu do wysłania formularza i planujemy wykonac wysłanie za pomocą naciśnięcia klawisza `enter`, musimy dodać obsługę takiego zdarzenia na polu `textarea`.

W funkcji za pomocą obiektu `event` sprawdzamy, czy jaki klawisz został przez uzytkownika naciśnięty (`e.key`). Jeśli wciśnięty klawisz to `Enter` (bez jednoczesnego przytrzymania `Shift`), automatycznie wywołuje funkcję handleSubmit.

Dodatkowy po wysłaniu komentarza możemy ustawić wysokość pola `textarea` na `auto`.

```js
const handleKeyDown = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    // Wywołanie funkcji wysyłania komentarza do serwera
    handleSubmit(e);
    // Ustawienie wysokości textarea na auto po wysłaniu komentarza
    e.target.style.height = "auto";
  }
};
```

### Aktualizacja listy komentarzy po dodaniu nowego komentarza

OK, wysyłamy komentarz na serwer, ale aby go zobaczyć, musimy wykonać ponownie pobieranie komentarzy w komponencie `CommentSection.js`.

Aby to zrobić musimy przekazać do komponentu `CommentSection.js` po wysłaniu komentarza informację, że powinien on zaktualizować listę komentarzy. Zrobimy to za pomocą `props`.

Najpierw dodajmy komponent `AddCommentForm` do `CommentSection`.

```js
import React, { useEffect, useState } from "react";
import AddCommentForm from "./AddCommentForm";
import CommentList from "./CommentList";

const CommentSection = () => {
  // pozostałe funkcjonalności komponentu

  return (
    <div className="comment-section">
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <CommentList comments={comments} />
      )}
      <AddCommentForm />
    </div>
  );
};
```

Dodajmy props `onAddComment` do którego będzie przekazana nowa funkcja pobierająca dane `handleAddComment`.

```js
<AddCommentForm onAddComment={handleAddComment} />
```

```js
const handleAddComment = () => {
  fetchComments();
};
```

Teraz musimy wykorzystać przekazaną funkcję w komponencie `AddCommentForm`.

Postępuj zgodnie z poniższymi krokami:

1. Przekaż funkcję `onAddComment` jako argument do komponentu `AddCommentForm`
2. Wywołaj funkcję `onAddComment` - zastanów się, gdzie to najlepiej wykonać.
