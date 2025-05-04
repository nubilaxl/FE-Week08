# FE-Week08


 This javascript web project is for Restaurant Menu and Ordering application that writes data to an alert box. It allows users to add, delete, and view menu food items with prices; and add, delete, view customer orders. 

## Live Demo URL

Check out the web page [Restaurant Order Management] (https://nubilaxl.github.io/FE-Week08/) 

## Technologies used


* Javascript
* Object Oriented Programming

## Favorite Features

### Usage of String Literals
* String literals became handy in displaying values of objects and arrays in the alert box. Demonstrated the use of parameter passing in modularized functions. It became necessary to reuse functions for some similar operations and passing parameters to string literals solved many problems.

### Usage of For Loops to Iterate Arrays
* The program was initially coded using the foreach arrow functions extensively to iterate the object arrays. This became problematic when I needed to gain access to the index in string literals. After conversion of arrow functions to the standard for loop, it was possible to gain index access and increment it. It was concerned that the inventory items should not start at zero in the display to the user as zero is a prompt to exit each screen. 

## Code Snippets

### Code to show dishes on the menu
```javascript

    describe() {                           
                                            
        let dishesString = '';
        let indexPlusOne = 0;
        
        for( let index in this.availableDishes)
        {  
            indexPlusOne = Number(index) + 1;
            dishesString += `${indexPlusOne}) ${this.availableDishes[index].name} costs $${this.availableDishes[index].price}\n     `;
        
        }
        return dishesString;
     }

```

### Code to show a customers order
```javascript

    describe() {                            
     
      let cartString = `Order for ${this.name} has ${this.dishesOrdered.length} dishes.\n`;
      this.dishesOrdered.forEach(element => {
            cartString += `${element.name} costs $${element.price}`;
      });
      return cartString;
   }

```
## Installation

The local environment require node packet manager, and http server
Check your system using command: npm -v 
If no version install from nodejs.org
Then install http server using command: npm install -g http-server

To make a local copy of of the code, clone the repository
```
git clone https://github.com/nubilaxl/FE-Week08
cd FE-Week08
```

Then within the project directory start http-server
```
http-server
```

The server will show the localhost url to plug into your browser

## Contributions
Pull requests, feature requests, and bug reports are welcome. Please open an issue first so that we may discuss.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact Info
Email: nubila.levon@outlook.com 
LinkedIn:  https://www.linkedin.com/in/nubila-levon/ 