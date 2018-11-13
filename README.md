# The Pirate Shop
This project was submitted for a coding challenge.

Time spent: 12 hours

## How The App Works
Built with React, the app is a pirate ecommerce site which displays 6 Star Wars discs:
* Star Wars Episode IV DVD ($20)
* Star Wars Episode V DVD ($20)
* Star Wars Episode VI DVD ($20)
* Star Wars Episode IV Blu-Ray ($25)
* Star Wars Episode V Blu-Ray ($25)
* Star Wars Episode VI Blu-Ray ($25)

Users can add discs to cart and edit their cart. Appropriate discounts will be applied automatically to their cart.

Assumptions: 
* We only have 6 kinds of discs: 3 DVDs and 3 Blu-rays.
* An unlimited number of discs are in stock (or at least users can add as many items as they want)
* Discount rules are set on the client side, not the server site. 

Live Demo on [Github Page](https://minhkhang1795.github.io/the-pirate-shop/)

## To run the app locally
Install [Create React App](https://github.com/facebook/create-react-app) to begin building apps with React!

Then, clone the app or download the app as a zip file (currently private due to the open coding challenge)
```
git clone https://github.com/minhkhang1795/the-pirate-shop.git
cd the-pirate-shop
```
Next, install all project dependencies with
```
npm install
```

Finally, start the development server with
```
npm start
```

Note: the service worker is included in the production build.

## Implemented functionalities
* [x] Interface Design:
  * [x] Responsiveness: All application components render on-screen in a responsive manner.
  * [x] Usability: All application components are usable across modern desktop, tablet, and phone browsers.
* [x] Application Functionality:
  * [x] List View: a list card view of Star Wars videos is shown at start.
  * [x] User can change the quantity of an item or remove an item from the cart. The change will reflect clearly and immediately on the UI.
  * [x] Discounts for DVDs and Blu-rays are automatically applied to cart.
  * [x] Discount for a bulk order is also automatically applied.
  * [x] Cart page clearly indicates the discounts, subtotals and total.


## Future steps
* Persist data in local storage.
* Enhance accessibility.
* Create detail page for videos.
* Allow users to add videos to favorite list (local storage).
* Handle errors when the app cannot fetch data from the server.
* Improve UI/UX to make it look more like an E-commerce site.
* Have more items and allow user to search for/filter/sort items based on some criteria (title, director, category, etc).
  
    
## Credits
* [MDBootstrap](https://mdbootstrap.com)
* [Udacity/reactnd-contacts-complete](https://github.com/minhkhang1795/reactnd-contacts-complete)
* [Open Movie Database](http://www.omdbapi.com/)

## MIT License

    Copyright 2018 Minh-Khang Vu

    Permission is hereby granted, free of charge, to any person obtaining a copy 
    of this software and associated documentation files (the "Software"), to deal 
    in the Software without restriction, including without limitation the rights 
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
    of the Software, and to permit persons to whom the Software is furnished to do 
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all 
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
