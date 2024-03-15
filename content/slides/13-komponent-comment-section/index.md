---
title: Komponent `CommentSection.js`
id: 13
---

Przy tworzeniu komponentu z listą komentarzy użyliśmy zahardkodowanej tablicy z komentarzami. Ale nie jest to prawidłowe podejście, ponieważ chcemy mieć zawsze aktualną listę komentarzy.\
Będzie ona zapisywana na serwerze i przy renderowaniu aplikacji oraz wysyłaniu nowego komentarza pobierana.\
Funkcje komunikacji z serwerem będzie pełnił komponent `CommentSection.js`, będący także kontenerem dla wszystkich naszych komponentów.

## Inicjalizacja serwera JSON

Startując projekt wpisalismy komendę `json-server --watch src/data/db.json --port 3001`, dzięki której możemy używać fake API, symulując komunikację serwera.\
Otwórz link: <a href="http://localhost:3001/comments" target="_blank">http://localhost:3001/comments</a>\
Jest to **endpoint** - punkt końcowy w interfejsie API, który reprezentuje konkretny zasób.

Korzystając z tego endpointu w naszej aplikacji, będziemy mogli pobierać aktualną listę komentarzy z serwera, a także wysyłać nowe komentarze w celu ich zapisania na serwerze. Dzięki temu nasza aplikacja będzie zawsze korzystać z aktualnych danych i działać w sposób dynamiczny, reagując na zmiany w danych na serwerze.

## Tworzenie komponentu `CommentSection`

Stwórzmy teraz komponent `CommentSection`, który będzie odpowiedzialny za wyświetlanie listy komentarzy wraz z formularzem dodawania nowych komentarzy.

### Wykorzystanie hooków `useState` oraz `useEffect`

Wykorzystajmy hooki stanu <a href="/glossary/useState" target="_blank">`useState`</a> do przechowywania listy komentarzy (`comments`).\
Ponieważ czasem podczas komunikacji z serwerem może pojawić sie błąd także stwórzmy stan takiego błędu.

```js
const CommentSection = () => {
  // Stan komponentu:
  // comments - aktualna lista komentarzy,
  const [comments, setComments] = useState([]);
  // error - ewentualny błąd przy pobieraniu komentarzy
  const [error, setError] = useState("");
};
```

Chcielibyśmy, aby po pierwszym renderowaniu komponentu pobrać wszystkie komentarze z serwera.
Aby uzyskać taki efekt musimy użyć drugiego hooka React - <a href="/glossary/useEffect" target="_blank">`useEffect`</a>.\
W tym `useEffect` wywołajmy funkcję pobierającą komentarze: `fetchComments()`.

```js
// Zauważ, że w tablica zależności jest pusta, co oznacza, że ten efekt
// zostanie uruchomiony tylko raz, po pierwszym renderowaniu komponentu
useEffect(() => {
  fetchComments();
}, []);
```

### Funkcja `fetchComments`

Przy renderowaniu komponentu mamy wywołanie <a href="/glossary/funkcja" target="_blank">funkcji</a>, której zadaniem będzie pobranie wszystkich komentarzy z serwera - `fetchComments()`.

Teraz postarajmy się stworzyc taką funkcję.

```js
// Funkcja asynchroniczna pobierająca komentarze z serwera
const fetchComments = async () => {
  try {
    // Pobieranie komentarzy z serwera
    const response = await fetch("/comments");
    // Obsługa odpowiedzi z serwera
    if (!response.ok) {
      throw new Error("Nie można pobrać komentarzy");
    }
    // Konwersja (parsowanie) odpowiedzi serwera na listę komentarzy w formacie JSON
    const data = await response.json();
    // Aktualizacja stanu komentarzy
    setComments(data);
  } catch (error) {
    // Aktualizacja stanu błędu
    setError(error.message);
  }
};
```

### Definicja funkcji `fetchComments`

Funkcja `fetchComments` jest to funkcja asynchroniczna (`async`), co oznacza, że może wykonywać operacje, które zajmują pewien czas (jak np. pobieranie danych z serwera), nie blokując przy tym wykonywania innych operacji w aplikacji.

Zauważ, że nasza funkcja jest podzielona na 2 bloki: `try` i `catch`.

Blok `try` definiuje fragment kodu, w którym mogą wystąpić błędy.\
Wewnątrz bloku `try` najpierw próbujemy wykonać pobranie komentarzy z serwera przy użyciu metody `fetch`.\
Metoda `fetch` jest wbudowaną funkcją w języku JavaScript i służy do wykonywania zapytań sieciowych, takich jak pobieranie danych z serwera.

#### Pobieranie danych z serwera

Endpoint `/comments` jest adresem, z którego pobieramy dane, w naszym przypadku jest to symulowany serwer dostarczający dane z pliku JSON ( źródło: `src\data\db.json`, w przeglądarce: <a href="http://localhost:3001/comments" target="_blank">http://localhost:3001/comments</a>).
Adres ten przekazujemy do metody `fetch` jako <a href="/glossary/argument" target="_blank">`argument`</a>. 

#### Obsługa odpowiedzi z serwera

Po wykonaniu zapytania do serwera, oczekujemy na odpowiedź.\
Jeśli wystąpi błąd (np. brak połączenia z internetem, błąd serwera), zostanie zwrócony obiekt `Response` z odpowiednią informacją o błędzie. W takim przypadku, wywołujemy instrukcję `throw new Error('Nie można pobrać komentarzy')`, która rzuca nowym obiektem błędu z określonym komunikatem.\
Zauważ,że używamy tu <a href="/glossary/instrukcje-warunkowe" target="_blank">instrukcji warunkowej</a>, za pomoca której sprawdzamy, czy warunek jest spełniony, gdy` response.ok` nie jest prawdziwe. Używamy tu <a href="/glossary/operatory" target="_blank">operatora logicznego</a> negacji - `!`
```js
if (!response.ok)
```

Kiedy serwer odpowiada poprawnie (`ok:true` lub `status:200`), otrzymujemy odpowiedź w formacie `JSON`.\
Aby przetworzyć te dane w JavaScript, używamy metody `json()`, która zwraca obietnicę.\
Aby uzyskać dostęp do przetworzonych danych JSON, musimy poczekać, aż ta obietnica się rozwiąże. Do tego celu używamy słowa kluczowego `await`.\
Użycie `await` sprawia, że funkcja zawierająca ten kod jest wstrzymywana do czasu rozwiązania obietnicy, co oznacza, że inne instrukcje w funkcji nie będą wykonywane, dopóki dane JSON nie zostaną pobrane i przetworzone.

Gdy operacja się powiedzie, wynik parsowania zostanie przypisany do zmiennej `data`. Następnie, możemy użyć tej zmiennej do zaktualizowania stanu komponentu `comments`, wykorzystując funkcję `setComments`, która jest dostępna dzięki hookowi `useState`.\
Dzięki temu zaktualizujemy listę komentarzy w naszej aplikacji na podstawie danych pobranych z serwera.

#### Ustawianie stanu błędu

Blok `catch` przechwytuje ewentualne błędy, które mogą wystąpić wewnątrz bloku `try`. Jeśli jakikolwiek błąd pojawi się w bloku `try`, kod w bloku catch zostanie wykonany.
Jeśli wystąpi błąd, ustawiamy stan `error` za pomocą funkcji `setError`. W ten sposób informujemy użytkownika o wystąpieniu problemu podczas pobierania komentarzy, co umożliwia nam wyświetlenie odpowiedniej informacji na interfejsie użytkownika.

### Wyświetlenie listy z komentarzami

Teraz dodajmy fragment kodu, który definiuje, jak będzie wyglądać renderowanie części naszego interfejsu użytkownika obejmująca sekcję z komentarzami.

W bloku `return ()` tworzymy `div` z klasą `comment-section` - element kontenerowy, który będzie zawierał całą sekcję z komentarzami.

Teraz stwórzmy warunek, który sprawdza, czy wystąpił jakiś błąd podczas pobierania komentarzy.
Jeśli wystąpiła błąd - zwrócimy komunikat o błędzie, jesli nie wyrenderujemy komentarze pobrane z serwera.

Uzyjemy tu <a href="/glossary/operator-trojargumentowy/" target="_blank">operatora trójargumentowego</a>.

```js
{error ? ( <p className="error">{error}</p> ) : ( <CommentList comments={comments} /> )}
```

Jeśli zmienna `error` (ta, którą deklarowaliśmy za pomocą hooku `useState`) ma wartość (czyli wystąpił błąd), renderujemy `<p>` z klasą `error`, który wyświetla komunikat o błędzie zdefiniowany w funkcji `fetchComments`.
Jeśli nie ma błędu (czyli `error` jest pustym stringiem), renderujemy komponent `<CommentList />`, który odpowiada za wyświetlanie listy komentarzy.

### Modyfikacja komponentu `CommentList`

Dotychczas w komponencie `CommentList` mielismy zdeklarowaną tablicę `comments` zawierającą obiekty z komentarzami.\
Teraz możemy wykorzystać komentarze pobrane z serwera i przypisane do stanu `comments` w komponencie `CommentSection.js` i przekazać je do komponentu `CommentList` przez `props`:\
```js
<CommentList comments={comments} />
```

Zmodyfikujmy teraz komponent `CommentList`:

1. Usuńmy stałą `comments`: `const comments = [...]`
2. przekażmy `props`: `const CommentList = ({ comments }) => {`

## Podsumowanie

Podsumowując nasz komponent `CommentSection.js` powinien wyglądać tak:

```js
import React, { useEffect, useState } from "react";
import AddCommentForm from "./AddCommentForm";
import CommentList from "./CommentList";

// Komponent CommentSection służy wyświetlania wszystkich komentarzy wraz z formularzem
const CommentSection = ({ user }) => {
  // Stan komponentu: comments - aktualna lista komentarzy, error - ewentualny błąd przy pobieraniu komentarzy
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  // Funkcja asynchroniczna pobierająca komentarze z serwera
  const fetchComments = async () => {
    try {
      // Pobieranie komentarzy z serwera
      const response = await fetch("/comments");
      // Obsługa odpowiedzi z serwera
      if (!response.ok) {
        throw new Error("Nie można pobrać komentarzy");
      }
      // Konwersja (parsowanie) odpowiedź serwera na listę komentarzy w formacie JSON
      const data = await response.json();
      // Aktualizacja stanu komentarzy
      setComments(data);
    } catch (error) {
      // Aktualizacja stanu błędu
      setError(error.message);
    }
  };

  // Wywołanie funkcji fetchComments() po pierwszym renderowaniu komponentu, aby pobrać komentarze z serwera
  useEffect(() => {
    fetchComments();
  }, []);

  // Renderowanie komponentu CommentSection: wyświetlanie listy komentarzy lub błędu oraz formularza dodawania komentarza
  return (
    <div className="comment-section">
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};

export default CommentSection;
```

Możemy teraz ten komponent dodać do komponentu `App`.

```js
import React from "react";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <div className="App">
      <CommentSection />
    </div>
  );
}

export default App;
```
