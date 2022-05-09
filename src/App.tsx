import React from 'react';
import './App.css';


function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordeon/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return <>This is APP component</>
}

function Rating() {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Star() {
    return <div>star</div>
}

function Accordeon() {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>

        </div>
    )
}

export default App;
