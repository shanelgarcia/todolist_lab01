# To-do List Lab01
test
> - Author: Shanel Garcia
> - Instructor: Mr. James Foley
> - Description: Lab01 for DMIT2008

## Branding
- AppName: Takeout Box
- Tagline: Checking out your tasks made easy
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
I'm not really going to use all of these. They're just here for reference.
(from darkest to lightest):
- Red (R)
 1. #4A0016
 2. #700E2F
 3. #953050
 4. #BB5D7B
 5. #E197AE
- Blue (B)
 1. #073A23
 2. #19573A
 3. #2F7555
 4. #4F9274
 5. #79AF97
- Green (G)
 1. #45520D
 2. #6C7A22
 3. #93A341
 4. #BECC6F
 5. #EAF5A9
- Neutral Colors (NC)
  1. Brown: #3E0C00

### Logo Potential Color Combination
- Lineart: NC1 3E0C00
- Combination: 

### Element Colors
- Main Text Color: #3E0C00

### home.js
- Logo:
  - alignment: centered
  - type: svg (generated from my png)
- Title:
  - text: AppName
  - font: Regular
  - alignment: centered, 10px below the logo
- Tagline:
  - text: Tagline
  - font: Condensed
  - alignment: centered, 5px below the title
- Link:
  - text: "Checkout Tasks"
  - type: button
  - font: Regular
  - alignment: centered, 10px below the tagline
