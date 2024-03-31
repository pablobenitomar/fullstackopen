
# Exercise 0.6 


Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.


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
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
    deactivate browser
    Note right of browser: Browser uses Javascript XMLHttpRequest to send JSON with new note

    activate server
    server-->>browser:  201 Created JSON response {"message":"note created"}
    deactivate server

    Note left of browser: Browser updates DOM adding new submitted note
```