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

## Step 3 (git checkout step3)

1. Components as directives
    1. looking at `app/movies/movie-list.component.ts`, a new component is created and notice instead of inline template, it's replaced with a url
    2. notice the name and location convention of component and template with is angular 2 standard
    3. looking at `app/app.component.ts`, it uses the `MovieListComponent` as a directive
      1. the changes from the previous step, replaces most of the content of the `AppComponent` template to include our newest movie listing
      2. the directive is declared in the meta data in addition to the html selector for the movie list
      3. finally, to reference the component in the directive list, it must be imported
2. Built in directives
    1. Structural directives change the dom stucture
    2. naming convention is to prefix with an asterisk e.g `*ngIf`, `*ngFor`
    3. local variable binding are prefixed with a hash e.g `*ngFor="#x of y"`
    4. local variables are available to sibling and childs elements
    5. special attention to the `*ngFor` directive as the `of` is different than the `in`
      1. `of` iterates over a collection
      2. `in` iterates for the properties of an object
3. Binding
    1. interpolation
    2. property binding
      1. binding target is enclosed inside square brackers followed by the binding source e.g `<img [src]="myVar.image"/>`
      2. the old style `<img src="{{myVar.image}}"/>` is still available (at this time), but standard is the newer syntax
        1. the only caveat to that standard is if the it requires string interpolation e.g `<img src="http://example.com/{{myVar.image}}"/>`
    3. event binding
      1. binding target is enclised inside parentheses followed by the template statement e.g `<button (onclick)="doSomething()"></button>`
    4. two-way binding
      1. combines the property and event binding e.g `<input [(ngModel)]='movieFilter'/>`

## Step 4 (git checkout step4)
1. Interfaces
    1. like other languages, a contract of fields and functions to all implementations
    2. interfaces are defined by the keyword `interface` and enforce type safety when used
    3. looking at `app/movies/movie.ts` and `app/movies/movie-list.component.ts`, the array of `movies` is now strongly typed
2. Angular event chain
    1. angular provides interfaces to hook into the event chain by implementing them in a component e.g `export class AppComponent implements OnInit {...}`
    2. looking at the `app/app.component.ts`, the component now implements the `OnInit` interface which requires the implementation of the `ngOnInit()` function
3. Pipes
    1. built in pipes as seen in filters in angular 1 e.g `{{ 'something' | uppercase }}`
      1. used in new syntax e.g `<img [src]="myVar.image" [title]="myVar.title | lowercase" />`
    3. custom pipes are built using interface `PipeTransform` and implementing it's `transform` function
      1. in addition to implementing the interface, the class is decorated with the `@Pipe` decorator
      2. the decorator takes an object just like `@Component` does, but the fields are different, notably `name`
      3. lastly the `@Pipe` decorartor must be imported for the core modules
    4. using a custom pipe requires the calling component to delcare it like in `app/movies/movie-list.component.ts`
    5. looking at `app/movie-list.component.html`, the implementation is used passing the filter `nameFilter` as an argument