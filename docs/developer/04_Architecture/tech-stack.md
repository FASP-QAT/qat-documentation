---
id: tech-stack
title: Tech Stack
sidebar_label: Tech Stack
sidebar_position: 2
---

# Tech Stack

## Front End (core-ui)

### React JS

React is a library for building composable user interfaces, it supports and encourages the creation of reusable UI components, which presents data that changes over time by using declarative syntax.

It uses a concept called Virtual Dom, that selectively renders subtrees of nodes upon state changes. It does the least amount of DOM manipulation possible in order to keep your components up to date.React finds out what changes have been made, and changes only what needs to be changed.

See the [React documentation](https://react.dev/) for more information.

### Indexed DB

IndexedDB is a large-scale, NoSQL storage system. It lets you store just about anything in the user's browser. In addition to the usual search, get, and put actions, IndexedDB also supports transactions. Here is the definition of IndexedDB on MDN:

"IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high performance searches of this data. While DOM Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution."

Each IndexedDB database is unique to an origin (typically, this is the site domain or subdomain), meaning it cannot access or be accessed by any other origin. Data storage limits are usually quite large, if they exist at all, but different browsers handle limits and data eviction differently

Browsers supported :Chrome,Firefox,Opera,Safari

See the [IndexedDB documentation](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for more information.

### Local Storage

The Local Storage is an internal database created into the browser, which you can use to save data in a key-value format. Most popular and commonly used browsers like Chrome, Firefox and Safari all support Local Storage. The data stored in local storage has no expiration date, so it will persist over the closed browser window and session.

Local storage has a very simple set, retrieve and remove API, and the key-value pair is always of string type.

See the [Local Storage documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for more information.

### Webpack and Workbox

**Webpack** is a popular module bundling system built on top of Node. js. It can handle not only combination and minification of JavaScript and CSS files, but also other assets such as image files (spriting) through the use of plugins.

See the [Webpack documentation](https://webpack.js.org/) for more information.

**Workbox** is the successor to sw-precache and sw-toolbox . It is a collection of libraries and tools used for generating a service worker, and for precaching, routing, and runtime-caching. **Workbox** also includes modules for easily integrating background sync and Google Analytics into your service worker.

See the [Workbox documentation](https://developers.google.com/web/tools/workbox) for more information.

### Service Worker

A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.It's a JavaScript Worker, so it can't access the DOM directly. Instead, a service worker can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM if needed.

Service worker is a programmable network proxy, allowing you to control how network requests from your page are handled.

It's terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's onfetch and onmessage handlers. If there is information that you need to persist and reuse across restarts, service workers do have access to the IndexedDB API.

The reason this is such an exciting API is that it allows you to support offline experiences.

Service workers are supported by Chrome, **Firefox** and Opera and Safari

See the [Service Worker documentation](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) for more information.

### I18next

**i18next** is an i18n framework written in and for JavaScript. It provides the standard i18n features of interpolation, formatting, and handling plurals and context.

See the [i18next documentation](https://www.i18next.com/) for more information.

### Offline App Installation

App Installation is the process of installing the application on the user's computer. This is managed by a PWA (Progressive Web App) and a service worker.

Browsers Supported : Chrome

See the [PWA documentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) for more information.

## Back End (api)

API stands for **A**pplication **P**rogramming **I**nterface. The most important part of this name is "interface", because an API essentially talks to a program for you.

### Spring Boot

Spring Boot is a framework for building Java applications. It is built on top of the Spring Framework and provides a more opinionated approach to application development.

See the [Spring Boot documentation](https://spring.io/projects/spring-boot) for more information.

### MySQL

MySQL is a relational database management system (RDBMS) that uses SQL (Structured Query Language) to manage data.

See the [MySQL documentation](https://www.mysql.com/) for more information.

### Authentication

To call an API on QAT you need to call the end point of the API and you need to pass the JWT Value pair where the Key is "Authorization" and the Token must be prefixed with the following string "Bearer " JSON Web Token (JWT) is a means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS) and/or encrypted using JSON Web Encryption (JWE).

Details on the end points and the parameters that you need to pass and that you will receive from the API's are mentioned in the API list provided above.

As an example, to generate the JWT authorization token you need to call the `https://www.quantificationanalytics.org/authenticate` endpoint. The Username and Password should be passed to the end point as part of the Body as a JSON object.

Sample JSON
```json
{
  "username": "sombody@somedomain.com",
  "password": "somepassword"
}
```

This will return you the JWT authorization token that you can use in the subsequent API calls. The JWT is valid for a period of 6hrs from the time of issue.
