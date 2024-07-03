# rn-assignment6-11066506
Overview
This React Native project is a straightforward e-commerce application, featuring a product listing screen and a cart screen. Users can browse through available products, add them to their shopping cart, and remove them if needed. The cart’s contents are saved on the device using AsyncStorage, simulating a basic online shopping experience.

Features
HomeScreen: Presents a collection of products with an option to add each to the shopping cart.
CartScreen: Displays items added to the cart and provides functionality to remove them.
Add to Cart: Button available on the HomeScreen for adding products to the cart.
Remove from Cart: Button available on the CartScreen for removing products from the cart.
Local Data Storage: Utilizes AsyncStorage to save and retrieve selected items, ensuring persistence.
Design Choices
User Interface
The UI is crafted to be user-friendly and straightforward, guided by the provided mockup:

HomeScreen: Organized into a list format where each item is shown with its name, image, price, and an "Add to Cart" button.
CartScreen: Lists the items added to the cart with an option to remove each one, alongside a summary of the total estimated cost.
Headers and Titles: Centrally aligned headers and titles for each screen, clearly indicating their purpose.
Data Storage
AsyncStorage: Selected for its ease of use and ability to persist data locally on the device. It effectively handles JSON data, making it suitable for storing cart contents.
Functionality Implementation
Product List: The HomeScreen component displays a predefined list of products. Each product is presented with an "Add to Cart" button.
Cart Management: The CartScreen component pulls the cart items from AsyncStorage, shows them, and includes options for item removal.
Adding Items: The HomeScreen provides functionality for users to add items to the cart, with updates to both state and AsyncStorage.
Removing Items: The CartScreen enables users to remove products from the cart, also updating the state and AsyncStorage.
Implementation Details
Core Components
HomeScreen.js:

Renders a list of products.
Uses the ProductItem component to depict each product.
Manages the addition of items to the cart.
CartScreen.js:

Shows items currently in the cart.
Utilizes the CartItem component to display each cart item.
Handles the removal of items from the cart.
ProductItem.js:

A component designed to display individual products on the HomeScreen.
CartItem.js:

A component designed to display individual cart items on the CartScreen.
State Management
The application leverages React's useState and useEffect hooks for managing state.
The cart items are locally managed within each component and their state is persisted using AsyncStorage.
Local Storage
AsyncStorage:
Employed to save and retrieve cart items.
Provides methods to add, retrieve, and delete data.
Ensures that the cart's contents remain consistent across app sessions.

Screenshot
HomeScreen: Displaying the list of products.
![Screenshot1]![Screenshot1](https://github.com/pnllaryea/rn-assignment6-11066506/assets/151792787/7b54676c-9005-4646-aeea-12eddb42d512)


![Screenshot2] ![Screenshot2](https://github.com/pnllaryea/rn-assignment6-11066506/assets/151792787/ce6d6364-15a8-42f3-84f0-cb24dc445967)


CartScreen: Displaying selected items in the cart.
![Screenshot3] ![Screenshot3](https://github.com/pnllaryea/rn-assignment6-11066506/assets/151792787/49e6fef7-02b8-44ad-9925-3ba71b9b7a4e)


![Screenshot4] ![Screenshot4](https://github.com/pnllaryea/rn-assignment6-11066506/assets/151792787/711ec0ac-ccc4-4cdc-81b6-7be40c4a11c6)




