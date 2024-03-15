---
title: Komponent `CommentList.js`
id: "12"
---


Dodalismy już kilka komentarzy, ale ręczne dodawanie kolejnych elementów raczej nie ma sensu :)
Potrzebujemy zebrać je wszystkie w jedną <a href="/glossary/tablica/" target="_blank">tablicę</a>, aby móc po niej iterowac i automatycznie tworzyć nowe elementy DOM.

Taka tablica będzie składała się wielu <a href="/glossary/obiekt/" target="_blank">obiektów</a>, z których każdy z nich będzie zwierał dane dla pojedynczego komentarza:

```js
const comments = [
  {
    id: "1",
    avatarSrc: "/images/avatars/av2.jpg",
    nickname: "johnny2000",
    content: "Bardzo ciekawy artykuł!",
  },
  {
    id: "2",
    avatarSrc: "/images/avatars/av1.jpg",
    nickname: "harmony123",
    content: "Fajnie, lećmy dalej",
  },
  {
    id: "3",
    avatarSrc: "/images/avatars/av3.jpg",
    nickname: "alina_malina",
    content: "Reagujmy dalej :)",
  },
];
```

Aby iterować po tej tablicy i renderować kolejne komentarze na podstawie komponentu `Comment.js`, musimy skorzystać z metody <a href="/glossary/petle/" target="_blank">`map()`</a>. Jest to metoda dostępna dla wszystkich obiektów typu <a href="/glossary/tablica/" target="_blank">Array (tablica)</a>.

Działanie metody `map()` polega na przetworzeniu każdego elementu tablicy przy użyciu funkcji przekazanej jako argument do metody `map()`. W wyniku działania metody `map()` otrzymujesz nową tablicę.

```js
const commentsElements = comments.map((comment) => (
  <li className="comment" id={comment.id}>
    <img className="avatar" src={comment.avatarSrc} alt={comment.nickname} />
    <div className="comment-content">
      <p className="nickname">{comment.nickname}</p>
      <p>{(comment, content)}</p>
    </div>
  </li>
));

console.log(commentsElements)
  // Konsola zwróci nam wynik nowej tablicy
  [
  ((
    <li className="comment" id="1">
      <img className="avatar" src="/images/avatars/av2.jpg" alt="johnny2000" />
      <div className="comment-content">
        <p className="nickname">johnny2000</p>
        <p>Bardzo ciekawy artykuł!</p>
      </div>
    </li>
  ),
  (
    <li className="comment" id="2">
      <img className="avatar" src="/images/avatars/av1.jpg" alt="harmony123" />
      <div className="comment-content">
        <p className="nickname">harmony123</p>
        <p>Fajnie, lećmy dalej</p>
      </div>
    </li>
  ),
  (
    <li className="comment" id="3">
      <img
        className="avatar"
        src="/images/avatars/av3.jpg"
        alt="alina_malina"
      />
      <div className="comment-content">
        <p className="nickname">alina_malina</p>
        <p>Reagujmy dalej :)</p>
      </div>
    </li>
  ))
];
```

Cała tablica `commentsElements` reprezentuje listę komentarzy gotowych do wyrenderowania w interfejsie użytkownika.

Mając wiedzę, jak można zastosować metodę `map()` na tablicy `comments`, możemy użyć naszego komponentu `Comment.js`.

Stwórzmy również nowy komponent `CommentList`

```js
import React from "react";
import Comment from "./components/Comment";

const CommentList = () => {
  const commentsElements = comments.map((comment) => (
    <Comment
      key={comment.id}
      id={comment.id}
      avatar={comment.avatar}
      nickname={comment.nickname}
      content={comment.content}
    />
  ));

  return (
    <div>
      <ul>{commentsElements}</ul>
    </div>
  );
};

export default App;
```

> Pamiętaj:
> Zauważ, że używamy `key={comment.id}` dla każdego elementu Comment, aby React mógł efektywnie zarządzać tymi elementami podczas aktualizacji interfejsu użytkownika. Wartość `key` powinna być unikatowa dla każdego elementu w kolekcji.

Dodajmy również nasz obiekt z komentarzami i użyjmy drugiego sposobu zapisu, przy czym jedyną różnicą będzie umieszczenie mapowania tablicy `comments` bezpośrednio w komponencie, a nie na zewnątrz.

```js
import React from "react";
import Comment from "./components/Comment";

const CommentList = () => {
  const comments = [
    {
      id: "1",
      avatarSrc: "/images/avatars/av2.jpg",
      nickname: "johnny2000",
      content: "Bardzo ciekawy artykuł!",
    },
    {
      id: "2",
      avatarSrc: "/images/avatars/av1.jpg",
      nickname: "harmony123",
      content: "Fajnie, lećmy dalej",
    },
    {
      id: "3",
      avatarSrc: "/images/avatars/av3.jpg",
      nickname: "alina_malina",
      content: "Reagujmy dalej :)",
    },
  ];

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            avatar={comment.avatar}
            nickname={comment.nickname}
            content={comment.content}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
```
