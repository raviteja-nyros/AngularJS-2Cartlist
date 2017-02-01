#ng2-ecommerce

An e-commerce portal with Product Listing Page, Product Detail Page etc developed using angular2.

##Auth0
Authentication being implemented by Auth0. Also SingleSignOn implemented.

##How to Run this application??

1) Open a command prompt in the project's root directory.

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.

Please install json-server and run in port 3004.Run the following in terminal/command prompt.

json-server --watch api/cart/cart.json --port 3004

json-server --watch api/products/products.json --port 3005

(or)

json-server --watch api/db.js --port 3004

##To display product id/name in URL of PDP page:

search with "get product id in URL of PDP page" (or) "get product name in URL of PDP page"s in following pages and comment un-necessary one(id/name).

1. Comment/Uncomment respective id/name in app.module.ts

2. Comment/Uncomment respective id/name in product-list.html

3. Comment/Uncomment respective id/name in product-detail.component.ts
