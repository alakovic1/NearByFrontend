# NearByApplication - frontend

This project represents frontend code for “Near By” application, an online marketplace with product management system for a 
company that will allow users to easily find products close by. 
Implementation is done in Angular 16.

##Project structure
* **dropdown-menu:** component created for the category dropdown list
* **login-modal:** component created for login
* **map:** component created for the map only
* **modal:** component created for geolocation modal
* **product-listing:** component created to display all products
* **product-modal:** component created to display a single product
* **services:** folder containing services
* **app. files:** toolbar implementation
* **assets:** image folder
* **types:** folder containing all created types from the database to avoid using any

The system contains several modules:
* home page
* login
* display of all categories and filtering
* product display
* filtering by location

## Home page

On this page, all products from the database are displayed. Pagination was implemented because the
dataset is large, with lots of data; to avoid returning and displaying all data at once, pagination was
required. In this case, it is set to display two products per page (for representation). In an ideal case, it
would be 10.

<p align="center">
  <img src="images/homepage.png" width="800" />
</p>
