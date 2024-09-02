## react

- react is a framework for building user interfaces
- runs as a single page app, which is a single html page and all the routing is done through react which compiles to javascript which is loaded by the browser
- makes for really fast and interactive interfaces

- React is a declarative JavaScript UI library
- declarative: explicit in data presentation (deterministic)
- component based design

# component

- separates app logic into smaller, reusable modules
- components manage their own state and UI
- when a component's state changes, it is re-rendered

# Virtual DOM

- React believes what is displayed should be a reflection of the apps state
- Normally, when changing a DOM element, alot of excess data is needlessly re-rendered
- React interfaces with the HTML DOM to intelligently only render the elements that have undergone state change
- when mutating the DOM, react will take the old copy of the DOM and the new copy, compare the two, 
and only make changes where there are differences. the old copy is then discarded.

# JSX

- JavaScript and XML
- employs XML like syntax to render HTML elements onto the page
- NOT XML under the hood (its just JavaScript)
- allows us to type HTML-like syntax directly in JavaScript files
- react takes all JSX and transpiles it into react syntax (React.createElement("div", {class: "test"}, null))

# one way binding

- allows us to only change the state to change the view
- does not allow the view to change the state

# react alternatives

- angular (two way binding)
    - add JS to HTML files

- vue (one way binding)
    - add JS to HTML files

- react
    - one way binding
    adds HTML to JS files