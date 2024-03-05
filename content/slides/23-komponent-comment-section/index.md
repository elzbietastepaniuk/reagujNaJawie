---
title: Komponent `CommentSection.js`
id: '23'
---


Przy tworzeniu komponentu z listą komentarzy użyliśmy zahardkodowanej tablicy z komentarzami. Ale nie jest prawidłowe podejście, ponieważ chcemy mieć zawsze aktualną listę komentarzy. 

Będzie ona zapisywana na serwerze i przy renderowaniu aplikacji oraz wysyłaniu nowego komentarza pobierana. 

Funkcje komunikacji z serwerem będzie pełnił komponent `CommentSection.js` będący także kontenerem dla wszystkich naszych komponentów. 

Startując projekt wpisalismy komendę `json-server --watch src/data/db.json --port 3001`, dzięki której możemy używać fake API, symulując komunikację serwera.
Otwórz link: `http://localhost:3001/comments` 
Jest to endpoint - punkt końcowy w interfejsie API, który reprezentuje konkretny zasób.

Korzystając z tego endpointu w naszej aplikacji, będziemy mogli pobierać aktualną listę komentarzy z serwera, a także wysyłać nowe komentarze w celu ich zapisania na serwerze. Dzięki temu nasza aplikacja będzie zawsze korzystać z aktualnych danych i działać w sposób dynamiczny, reagując na zmiany w danych na serwerze.

Stwórzmy teraz komponent `CommentSection`, który będzie odpowiedzialny za wyświetlanie listy komentarzy wraz z formularzem dodawania nowych komentarzy.

Wykorzystajmy hooki stanu <a href="/glossary/useState" target="_blank">`useState`</a> do przechowywania listy komentarzy (`comments`).
Ponieważ czasem podczas komunikacji z serwerem może pojawić sie błąd także stwórzmy stan takiego błędu.

```js
const CommentSection = () => {
// Stan komponentu: comments - aktualna lista komentarzy, error - ewentualny błąd przy pobieraniu komentarzy
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
}
```

