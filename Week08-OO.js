// The Dish class is the template for an object that stores food name and food price.
// This is the primary class that has 2 properties and one describe method.

class Dish {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }
   describe() {
      return `${this.name} costs $${this.price}`
   }
}

// This DishesOnTheMenu class represents an array of Dish type. It has 1 property
// availableDishes that hold all the dishes the restaurant offers on the menu. It
// has 4 methods.
class DishesOnTheMenu {
    constructor(availableDishes) {
        this.availableDishes = [];
    }
    addDish(dish) {                         //Method to add a new dish to the menu
        if (dish instanceof Dish) {
           this.availableDishes.push(dish);
        } 
        else {
           throw new Error(`You can only add an instance of Dish. 
           argument is not a dish: ${dish}`);
        }
     }
    deleteDish(dish) {                      //Method to delete a dish from the menu

        for(let index in this.availableDishes) {

        
            if (this.availableDishes[index] === dish)
                this.availableDishes.splice(index, 1);
        }
     }
     describe() {                           //Method to show all the available dishes on the menu,
                                            // Returns a string of information
        let dishesString = '';
        let indexPlusOne = 0;
        
        for( let index in this.availableDishes)
        {  
            indexPlusOne = Number(index) + 1;
            dishesString += `${indexPlusOne}) ${this.availableDishes[index].name} costs $${this.availableDishes[index].price}\n     `;
        
        }
        return dishesString;
     }
     
     findDishByIndex(index) {               //Method to find any dish in the array and return the object
        if(index > 0 && index <= this.availableDishes.length)
            return this.availableDishes[index-1];
        else
            return -1;
     }
}

//The class Order contains the structure to hold a single order. It has properties for the name of
// the order and an array of dishes ordered by the customer. 
class Order {
   constructor(name) {
         this.name = name;
         this.dishesOrdered = [];
   }
   addDish(dish) {                          //Method to add a dish by the push method to the array                 
      if (dish instanceof Dish) {
         this.dishesOrdered.push(dish);
      } 
      else {
         throw new Error(`You can only add an instance of Dish. 
         argument is not a dish: ${dish}`);
      }
   }
   
   describe() {                             //Method to describe dishes ordered for one customer
     
      let cartString = `Order for ${this.name} has ${this.dishesOrdered.length} dishes.\n`;
      this.dishesOrdered.forEach(element => {
            cartString += `${element.name} costs $${element.price}`;
      });
      return cartString;
   }
}

//Class that holds an array of type Order, it holds all the current orders. It has 1 property
// an array.
class OrdersFromTheMenu {
    constructor() {
        this.orders = [];

    }
    addto(order) {                          // Method to add new orders via the push method
        if (order instanceof Order) {
            this.orders.push(order);
         } 
         else {
            throw new Error(`You can only add an instance of Dish. 
            argument is not a order: ${order}`);
         }
    }
    delete(order) {                         //Method to delete an order from the array, it uses
                                            // a passed order parameter then deletes via splice

        for(let index in this.orders) {

        
            if (this.orders[index] === order)
                this.orders.splice(index, 1);
        }


    }
    describe() {                            //Method to show all the data from the orders array.
                                            // it returns a string of information.
        let theString = `This has ${this.orders.length} orders.\n`;
        let indexPlusOne = 0;
        for(let index in this.orders){
            indexPlusOne = index + 1;
            for(let xindex in this.orders[index].dishesOrdered) {
                    
                    theString += indexPlusOne + ' ' + this.orders[index].name + ' ' + this.orders[index].dishesOrdered[xindex].name + ' ' + this.orders[index].dishesOrdered[xindex].price;
            }
        }
        return theString;
        
    }
    findOrderByIndex(index) {               //Method to find an order via number index, it returns
                                            // an order object.
        if(index >= 0 && index <= this.orders.length)
            return this.orders[index];
        else
            return -1;
   }
    findOrderByName(fname) {                // Method to find an order by the customer name,
                                            // it returns an order object.
        this.orders.forEach(element => {
            if(element.name = fname)
                return element;
        });
    }
    outputAllOrders() {                     // Method to return a string of informaton on all
                                            // orders.
        let theString = '';
        for(let index in this.orders){
            for(let xindex in this.orders[index].dishesOrdered) {
                
                    theString += this.orders[index].name + ' ' + this.orders[index].dishesOrdered[xindex].name + ' ' + this.orders[index].dishesOrdered[xindex].price;
            }
            
        }
        return theString;
    }
}

// The class Menu that has no properties, but only methods that involve displaying the screen menus.
class Menu {
    constructor() {

    }
    mainscreen() {                                  // The main screen menu
        return prompt(`
            0) exit
            1) Add dishes to the menu
            2) Delete dishes from the menu
            3) View Dishes on the menu
            4) Create order
            5) View order
            6) Delete order
            7) View all orders
            `);
    }
    showDishesOnTheMenu(request, dishesInfo) {      // Screen to show the restaurants current dishes
                                                    // it takes a request string and information 
                                                    // parameters.
        return prompt(`  ${request}
            0) back
            -----------------
            ${dishesInfo}
            `);
    }

    showOrdersFromTheMenu(orderInfo) {              //Screen to show the current orders
        return prompt(`
            0) back
            -----------------
            ${orderInfo}
            `);
    }

    promptForName() {                               //Screen to prompt for the customer name
                                                    // it creates a new order.
        let name = prompt('Please enter the order name: ');
        return new Order(name);
    }
    promptForDish() {                               //Screen to prompt for dish information
                                                    // it creates a new dish.
        let name = prompt('Please enter the dish name');
        let price = prompt('Please enter the price for dish');
        return new Dish(name, price);
    }

    orderCreationSubmenu(orderInfo, dishesInfo ) {  //Screen used in the order creation process
        return prompt(`
            0) back
            
            Available Dishes: 
            ${dishesInfo}
            -----------------
            Your Current Order:
            ${orderInfo}

            `);

    }

    orderDeletionSubmenu(xprompt, allOrders) {      // Screen used for order deletion
        return prompt(` ${xprompt}
            0) back
            
            -----------------
            Current Orders:
            ${allOrders}

            `);

    }

    getInput(screenInputValue, min, max) {          //Method to filter the input values
        if (screenInputValue >= min && screenInputValue <= max) {
            return screenInputValue;
        }
        else {
            throw new Error(`You can only enter values from ${min} to ${max}`);
         }
      
    }
}

// THE MAIN PART OF THE PROGRAM where objects are created.

//Instantiating the objects so they are available for use.
let tempDish = new Dish('Fake fish', 0);
let dishList = new DishesOnTheMenu(tempDish);
let theMenu = new Menu();
let tempOrder = new Order();
let orderList = new OrdersFromTheMenu(tempOrder);

//Show the menu screen and filter the input to respect only the menu items
let selection1 = theMenu.getInput(theMenu.mainscreen(),'0', '7');

//Keep showing the menu until the user enters 0
while(selection1 != '0') {
    if(selection1 == '1') {
        //Add dishes to the menu
        
        let selection2 = -1;
        while(selection2 != 0) {   //Keep showing the add dishes menu until all dishes entered.
            
            tempDish = theMenu.promptForDish();
            dishList.addDish(tempDish);
            selection2 = theMenu.showDishesOnTheMenu("Type any key to Add a dish",dishList.describe());
        }
       
    }
    else if(selection1 == '2') {
          //Delete dishes to the menu
        
        selection2 = theMenu.showDishesOnTheMenu("Select a number to delete:", dishList.describe());
        while(selection2 != 0) {    //Keep showing the dishes until user finishes deleting.
            
            let selectedDish = dishList.findDishByIndex(selection2);
            if (selectedDish != -1)
                dishList.deleteDish(selectedDish);
            selection2 = theMenu.showDishesOnTheMenu("Select a number to delete:", dishList.describe());
        }  
    }
    else if(selection1 == '3') {
        // View all  dishes available
        selection2 = theMenu.showDishesOnTheMenu("For View Only", dishList.describe());
        while( selection2 != 0) {     //View until user press 0 for back
            selection2 = theMenu.showDishesOnTheMenu("For View Only", dishList.describe()); 
        }
    }
    else if(selection1 == '4')  {
        // Create an Order

        let selectedDish;
        tempOrder = theMenu.promptForName();  //Prompt for name and create the order template

        //Show the order creation menu and get the users selection
        selection2 = theMenu.orderCreationSubmenu(tempOrder.describe(), dishList.describe());
        //while(selection2 != 0) {

            //Find the selected dish and add to the order
            selectedDish = dishList.findDishByIndex(selection2);
            if( selectedDish != -1) {
                tempOrder.addDish(selectedDish);
                //Add to the array of permanent orders
                orderList.addto(tempOrder);
            }
            // Keep showing the order creation menu until user presses 0 for back
            selection2 = theMenu.orderCreationSubmenu(tempOrder.describe(), dishList.describe());
            

       // }
    }
    else if(selection1 == '5')  {       //View the order created 
        selection2 = theMenu.showOrdersFromTheMenu(tempOrder.describe());
        while(selection2 != 0)
            selection2 = theMenu.showOrdersFromTheMenu(tempOrder.describe());
    }
    else if(selection1 == '6')  {
                                        //Delete an order
        let selectedOrder;
        // selection2 = -1;
        selection2 = theMenu.orderDeletionSubmenu("Enter a number to delete an order", orderList.describe());
        while(selection2 != 0) {
            selectedOrder = orderList.findOrderByIndex(selection2 -1);
            if(selectedOrder != -1) 
                orderList.delete(selectedOrder);
          selection2 = theMenu.orderDeletionSubmenu(orderList.describe());
            
        }
    }
    else if(selection1 == '7') {        // View all orders
        selection2 = -1;
        selection2 = theMenu.showOrdersFromTheMenu(orderList.outputAllOrders());
        //while (selection2 != 0)
        //    selection2 = theMenu.showOrdersFromTheMenu(orderList.outputAllOrders())
    }

    //Keep showing the main menu screen
    selection1 = theMenu.getInput(theMenu.mainscreen(),'0', '7');
}
