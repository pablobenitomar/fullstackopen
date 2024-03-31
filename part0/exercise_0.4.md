
# Exercise 0.4 

Create a similar diagram depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the Save button.

If necessary, show operations on the browser or on the server as comments on the diagram.

The diagram does not have to be a sequence diagram. Any sensible way of presenting the events is fine.


This is the diagram: 

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    activate user
    user->>browser: Fill text field
    user->>browser: Click Save button
    deactivate user

    activate browser
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note 
    deactivate browser

    activate server
    server-->>browser: 302 Redirect to /notes
    deactivate server

    Note right of browser: The browser reloads the whole page, including CSS, JS and data
```