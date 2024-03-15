---
title: Start
id: "0"
description: "Start"
---

Dzisiaj zrobimy **Mini Instagrama** za pomocą języka JavaScript oraz biblioteki React.\
Możesz podejrzeć jak to będzie wyglądać tutaj: <a href="https://0adk.github.io/photogram/" target="_blank">Photogram</a>.\
Struktura i wygląd (HTML i CSS) są już gotowe.\
Naszym zadaniem będzie ożywić go dodając kod JavaScript.

## Środowisko pracy

- przeglądarka internetowa - polecamy Chrome
- narzędzia programisty - bez nich ani rusz! Naciśnij F12 (Ctrl + Option + I na Macbookach), żeby je otworzyć.
- edytor kodu - polecamy Visual Studio Code
- Node.js - w wersji `18.19.1` - <a href="https://nodejs.org/download/release/v18.19.1/" target="_blank">https://nodejs.org/download/release/v18.19.1/</a>

## Instalacja projektu

- otwórz projekt w programie VSC i otwórz terminal (na górnym menu na opcja "Terminal" lub `Ctrl + Shift + ù` / `Cmd + Shift + ù`)
- w terminalu wpisz polecenie `npm install -g json-server` a następnie `npm install`
- odpal serwer za pomocą polecania `json-server --watch src/data/db.json --port 3001`
- odpal projekt za pomoca polecania `npm run start`

## Struktura projektu

![Struktura projektu](./struktura.png)

1. `node_modules` to katalog w projekcie Node.js, który zawiera wszystkie zewnętrzne zależności (biblioteki, paczki) wykorzystywane przez dany projekt. Gdy instalujesz paczki za pomocą menedżera pakietów npm (Node Package Manager) lub Yarn, są one pobierane i przechowywane w katalogu node_modules.
2. `public` - katalog zawierający główny plik HTML, CSS oraz grafiki używane w projekcie
3. `src` - katalog zawierający folder z komponentami React, danymi oraz plik `index.js`, który jest głównym plikiem startowym aplikacji, gdzie renderuje się główny komponent App do drzewa DOM, uruchamiając aplikację React. Plik `App.js` zawiera główny komponent App, który jest głównym komponentem aplikacji. To tutaj definiujesz strukturę i układ głównego interfejsu użytkownika aplikacji.
4. pliki konfiguracyjne `package.json`, `package-lock.json`
