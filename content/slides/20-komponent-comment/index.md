---
title: Komponent `Comment.js`
id: "20"
---

Komponent `Comment` renderuje pojedynczy komentarz.

Przyjrzyjmy się jak wygląda kod `html` pojedynczego komentarza:

```html
<li class="comment" id="1">
  <img class="avatar" src="/images/avatars/av1.jpg" alt="harmony123">
  <div class="comment-content">
    <p class="nickname">harmony123</p>
    <p>Zapnijcie pasy, jedziemy z Reactem!</p>
  </div>
</li>
```

i pomyślmy jakie dane są potrzebne, aby utworzyć reużywalny komponent.

Są to: id, src - źródło awatara, nick, oraz treść komentarza.
Więc te dane będziemy musieli przekazywać do komponentu.

Kolejnym krokiem będzie stworzenie komponentu `Comment` w React, który będzie renderował pojedynczy komentarz na podstawie danych przekazanych przez `props`. Aby to zrobić, potrzebujemy utworzyć nowy plik dla tego komponentu.

1. Utwórz nowy plik o nazwie `Comment.js` w folderze components.
2. W pliku `Comment.js` rozpocznij od importu biblioteki React:
```js
import React from 'react';
```

*Importowanie biblioteki React jest konieczne w każdym pliku, który zawiera komponenty React. Biblioteka React dostarcza narzędzi i funkcji potrzebnych do definiowania komponentów, obsługi stanu, renderowania interfejsu użytkownika itp.*

3. Następnie zdefiniuj komponent `Comment`, który będzie przyjmował dane komentarza jako `props` oraz zwracał kod HTML reprezentujący pojedynczy komentarz:

```js
const Comment = ({ id, avatarSrc, nickname, content }) => {
  return (
    <li className="comment" id={id}>
      <img className="avatar" src={avatarSrc} alt={nickname} />
      <div className="comment-content">
        <p className="nickname">{nickname}</p>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default Comment;
```

W powyższym kodzie, `Comment` jest funkcją komponentu, która przyjmuje cztery argumenty: `id`, `avatarSrc`, `nickname`, `content`. Następnie zwraca element listy (`<li>`) reprezentujący pojedynczy komentarz. Każdy komentarz zawiera zdjęcie awatara (`<img>`), nazwę użytkownika (`<p>` z klasą `nickname`) oraz treść komentarza (`<p>`).



>**Pamiętaj**
>Nawiasy klamrowe `{ }` są używane do osadzania kodu JavaScript wewnątrz JSX, co pozwala na dynamiczne wstawianie wartości lub wyrażeń JavaScript wewnątrz komponentów React.


Komponent musi również zostać eksportowany.

## Użycie komponentu `Comment`

Spróbujmy teraz użyć nasz komponent z komentarzem w pliku `App.js` w divie z klasą `App`. 
Oczywiście należy go najpierw importować.

```js
import React from 'react';
import Comment from './components/Comment';


function App() {
  return (
    <div className="App">
      <ul>
         <Comment
          id={1}
          avatarSrc="/images/avatars/av2.jpg"
          nickname="johnny2000"
          content="Bardzo ciekawy artykuł!"
        />
      </ul>
    </div>
  );
} 

export default App;
```

Użyliśmy komponentu Comment, aby wyrenderować komentarz. Komentarz jest przekazywany jako oddzielny element listy (`<li>`). Atrybuty `id`, `avatarSrc`, `nickname` i `content` są przekazywane do komponentu `Comment` jako `props`, aby wyświetlić odpowiednie informacje dla komentarza.

Spróbuj dodać drugi komentarz używając danych użytkownika: `harmony123`, `/images/avatars/av1.jpg`.






