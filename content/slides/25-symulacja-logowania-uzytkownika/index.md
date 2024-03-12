---
title: Symulacja logowania użytkownika
id: '25'
---

Została nam ostatnia rzecz: przy dodawaniu komentarza w komponencie `AddCommentForm. js` w obiekcie `newComment` pola `nickname` oraz `avatar` są puste.\
Nie mamy również zdjęcia avataru uzytkownika przy formularzu. 

Spróbujmy stworzyć obiekt użytkownika user, składający się z tych dwóch pól, w komponencie `App.js`, a następnie przekazać go przez props do komponentu `<CommentSection />` a potem do komponentu  `<AddCommentForm />`.\
Następnie w komponencie `<AddCommentForm />` użyjemy tych przekazanych danych w brakujących miejscach.
