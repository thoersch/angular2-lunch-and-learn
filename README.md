## Step 1

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
    
