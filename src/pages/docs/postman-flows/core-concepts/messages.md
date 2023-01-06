---
title: "About messages"
updated: 2022-11-17
warning: false
---

A _message_ is a single packet of data. A message could be a string or number, or it could be a large complex data structure like a list of users, or an entire movie.

Data structures like lists can also be converted to streams which can be processed by blocks asynchronously.

> When message flows from one block another, the actual data doesn't move but a pointer to the message is passed along.
