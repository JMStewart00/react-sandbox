import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from './ListItem';


function App() {
    // let index = 0;
    const [index, setIndex] = useState(2); // [ variable, setVariable ]
    const [menuItems, setMenuItems] = useState([
        {
            "id": 1,
            "category": {
                "title": "Dinner"
            },
            "cuisine": {
                "label": "American"
            },
            "title": "Smoked Brisket",
            "price": "14.99",
            "description": "Served with White Bread, Pickle, Onion, and Two Sides",
            "spicy_level": 0
        },
        {
            "id": 2,
            "category": {
                "title": "Dinner"
            },
            "cuisine": {
                "label": "American"
            },
            "title": "Nashville Hot Chicken Sandwich",
            "price": "12.99",
            "description": "Brined overnight in a combination of spices and buttermilk, this sandwich is fried to order and covered in our housemade Nashville Hot sauce. Top with housemade mayo, a sweet and tangy slaw and pickles on a brioche bun.",
            "spicy_level": 2
        },
        {
            "id": 3,
            "category": {
                "title": "Appetizer"
            },
            "cuisine": {
                "label": "Indian"
            },
            "title": "Chicken Biryani",
            "price": "11.99",
            "description": "A delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, served with a  flavorful saffron rice.",
            "spicy_level": 3
        },
        {
            "id": 4,
            "category": {
                "title": "Lunch"
            },
            "cuisine": {
                "label": "Thai"
            },
            "title": "Kobe Basil Beef",
            "price": "10.99",
            "description": "Beef is stir fried in a delicious sauce with shallots, garlic, Thai chili, and Thai basil, and served on a bed of fragrant jasmine rice. Topping this dish with a crispy, Thai-style fried egg takes it over the top.",
            "spicy_level": 4
    },])


    const listItems = menuItems.map(item => <ListItem  item={item} />);
//     <ul>
//   <li>Creola Katherine Johnson: mathematician</li>
//   <li>Mario José Molina-Pasquel Henríquez: chemist</li>
//   <li>Mohammad Abdus Salam: physicist</li>
//   <li>Percy Lavon Julian: chemist</li>
//   <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
// </ul>
    return <ul>{listItems}</ul>;

}

export default App