# To-do List Lab01

> - Author: Shanel Garcia
> - Instructor: Mr. James Foley
> - Description: Lab01 for DMIT2008

## Branding
- AppName: Takeout Box
- Tagline: Checking out your task made easy
- Logo: 
  - Idea #1: Take out moped, similar to what Chinese restaurants use, with checked checkbox on top of the seat
  - Idea #2: Food truck with the back of the truck looking like a checkbox
- Font Family: Roboto
``` css
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Condensed', sans-serif;
```

## Steps
### Preparation
1. assets/svg/logo.svg - store logo I illustrated for reference
2. icons/logo - add svg code to be imported
3. pages/
  - home.js - imports and functions to render home.js
  - toDoPage.js - imports and functions to render toDoPage.js
  - pageNotFound.js - imports and functions to render pageNotFound.js
4. router/router.js - loads different pages for index.js
  - default: home.js
5. utils/makeElement - combine all elements

### home.js
1. components/header/header.js - h1 title
2. components/header/tagline.js - p tagline
3. components/buttons/link - button navigational purposes
4. utils/makeElement - append child with all home.js components
5. pages/home.js - function to make the elements and inject it to the browser
  - icons/logo
  - component/header/header
  - component/header/tagline
  - component/button/link
6. index.js - import pages and router
7. scss/_home.scss - style home.js (see Layout Plan for details)

### toDoPage.js
1. pages/toDoPage.js - imports and functions to render toDoPage.js
2. data/todo.json - acting database for app
3. utils/dataFetcher.js - fetch data from data/todo.json
4. scss/_toDoPage.scss - style toDoPage.js

## Layout Plan

### Color Scheme
- Body BGcolor: #D5EF9F
- Banner BGcolor: #4F9274

### home.js
- Logo:
  - alignment: centered
  - type: svg (generated from my png)
- Title:
  - text: AppName
  - font: Regular
  - size:
  - color:
  - alignment: centered, 10px below the logo
- Tagline:
  - text: Tagline
  - font: Condensed
  - size:
  - color: 
  - alignment: centered, 5px below the title
- Link:
  - text: "Start Checking Out"
  - type: button
  - font: Condensed
  - size:
  - color: 
  - alignment: centered, 10px below the tagline
