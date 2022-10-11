import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App(props) {
    const [count, setCount] = useState(0);
    const [characters, setCharacters] = useState([]);
    console.log(characters);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((resp) => setCharacters(resp.data.results))
    }, [])

    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={handleAlertClick}>
                Show alert
            </button>
        </div>
    );
}

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }

//         this.handleAlertClick = this.handleAlertClick.bind(this.handleAlertClick);
//     }
//     handleAlertClick(state) {
//         setTimeout(() => {
//             alert('You clicked on: ' + state.count);
//         }, 3000);
//     }
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1})}>
//                     Click me
//                 </button>
//                 <button onClick={() => this.handleAlertClick(this.state)}>
//                     Show alert
//                 </button>
//             </div>
//         )
//     }
// }
export default App