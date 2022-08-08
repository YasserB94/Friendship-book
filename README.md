# Friendship book
A simple webapp where people can add themselves as friends to the app, view all friends. As a BeCode exercise to learn Angular.

## How can I run this app ? 
- Currently the App is not Live on any server.
- Make sure you have prerequisites
    - Node v 16 LTS
    - Node Package Manager
    - Angular CLI
- To run it:
    - Clone this repository
    - run ```npm install``` to get the dependencies
    - run ```ng serve --open``` To open the webapp in your browser

***
### Project Structure Guidelines
- Friend-app
    - src
        - app
            - Shared ```Hosts all shared entities```
                - Components    ```Dumb Components```
                - Containers    ```Smart Components```
                - Directives    ```Shared Directives that add behaviour``` 
                - Guards        ```Logic that prevents behaviour```
                - Pipes         ```Transformers for data rendered```
                - Services      ```Shared Singletons that provide data```
                - Core          ```Shared TypeScript Entities: Classes,enums,interfaces```
            - Feature (example: friend-foe-form)
                - Components    ```Dumb Components```
                - Containers    ```Smart Components```
                - Directives    ```Directives that add behaviour``` 
                - Guards        ```Logic that prevents behaviour```
                - Pipes         ```Transformers for data rendered```
                - Services      ```Singletons that provide data``` 
                - Core          ```Shared TypeScript Entities: Classes,enums,interfaces```
- For now this app only has one feature: Manage friends/foes.
So one version of all these directories will sit in the root/app module.
***

### Installing Tailwind CSS
1. ```npm install -D tailwindcss postcss autoprefixer```
2. ```npx tailwindcss init```
3. Setup `tailwind.config.js`
    - Adding `"./src/app/*.{html,ts}"` to content for easy testing
4. Add Tailwind to Application Wide `styles.css`
    ``` @tailwind base;
        @tailwind components;
        @tailwind utilities;```
5. Add some basic classes to see if Tailwind CSS is workign.
***
### Header - √
#### Brand
- Simple H1 with some styling.
#### Links
- [Installing FontAwesome](https://github.com/FortAwesome/angular-fontawesome)
    - ```ng add @fortawesome/angular-fontawesome```
    - Importing the FontAwesomeModule into the app
        - ```import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';```
        - ```imports:[FontAwesomeModule,...```
- Adding an icon from FontAwesomeModule in the Header
    - Getting the icon object in the HeaderComponent;
        -  ```import {faGithub} from '@fortawesome/free-brands-svg-icons';```
        - ```faGithub = faGithub;```
    - Adding the icon to the HeaderTemplate
        - `<fa-icon [icon]="faGithub"></fa-icon>`
- Making link open in new page
    - ```target="_blank"```
***
### Navbar
- Created an array with NavLink data objects in Core for an easy modular modification of the navbar.
- Imported the array in the navbar
- Added basic styling
- Renders dumb component: _nav-link_ and passes it nav-data

### Nav-Link
- Setup to receive input.
- Created Interface for NavLink to satisfy strict mode
- Read out passed in navLink information to name buttons, add tooltips.
### Friends-Form
- Have a navigation link work towards the friends-form
    - Added ```routerLink="{{ navLink.path }}"``` to every button
    - Linked the path within the routing.module
TODO:: TURN_NAV_LINK_DATA from core into associative array to improve code readabilty in routes.
- Turn form into `[formGroup]`
    - Added FormsModule,ReactiveFormsModule to root module
    - Provided FormBuilder trough root module
    - Got FormBuilder into friends-form container
    - Added angular formgroup to HTML
    - Set Formgroup inside Friend-form
    - Added OnSubmit() function
    - Succesfully receives data and clears form.



### HomePage

### Friends-View