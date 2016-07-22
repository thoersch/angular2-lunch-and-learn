## Step 1 (git checkout step1)

1. Setup Project
    1. multiple options, includding manual
    2. git clone https://github.com/thoersch/angular2-lunch-and-learn && git checkout step1 && npm install
    3. angular cli coming to make this easier
2. Root component
    1. minimum 1 root component, should be named AppComponent (app.component.X file convention)
    2. a component controls a part of a view (not unlike a directive from v1) via a template
    3. looking at `app/app.component.ts`, this is the project's root component
      1. notice the `@Component` decorator
      2. Component is a function and it take an object as it's argument. 
      3. That object explains the component like how it's referenced and what view it's responsible for
      4. Selector is the html element the template gets created for
      5. notice the `import` statement for the decorator
      6. finally the class that is decorated with the imported `@Component` and exported
      7. the AppComponent is exported so that it can be imported elsewhere
3. Bootstrapping the application
    1. looking at `app/main.ts`, this is the starting point of our application which uses our root component
    2. the only thing this does is tell angular to bootstrap our root component but to do so, you have to import some things
    3. the bootstrap function itself needs to be imported for the platform it's running on (now that things are less web-centric)
    4. to pass our root component, it has to be imported. Notice the the import pulls the class by name from the file by it's name
4. Presenting a view
    1. looking at `index.html`, there are some scripts added here which take care of shimming and polyfilling
    2. it also loads the systemjs config which outlines how to import modules
    3. it then loads our the starting point which bootstraps our root component
    4. since it's bootstrapped, the Component function alllows the app to resolve and render the `my-app` element
    
## Step 2 (git checkout step2)
1. Quick note on transpilation
    1. after running it with `npm start`, transpilation occurs to generate the es5 javascript (outlined in the `tsconfig.json`)
    2. X.ts -> X.js and X.js.map.  The X.js file is the es5 version of the typescript file and the .map file is a source map used for debugging typescript
    3. since those are generated, there's no reason to modify them and can be hidden in Code by updating workspace settings: `"files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": true,
        "**/*.map": true
    }`
2. Component revisited
    1. component contains a view via a template
    2. class which encapsulates its fields, functions and constuctors 
    3. meta information melding those together
    4. while some meta information is required, others have are not
    5. looking at `app/app.component.ts`, class now contains a field, function and constructor. The `template` meta data contains some dyanmic text now too
      1. the constuctor is established with a function named `constuctor`
      2. the constuctor is called to intialize the class and thus sets the `foodOfChoice` variable
      3. the template renders and calls the function `getFoodOfChoice()` which returns the current state of `foodOfChoice`
