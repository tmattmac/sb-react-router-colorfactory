import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
    const colorNames = Object.keys(colors);

    return (
        <div className="ColorList">
            <h1>Welcome to the color factory.</h1>
            <Link to="/colors/new">Add a color</Link>
            <h2>Please select a color.</h2>
            <ul className="ColorList-list">
                {colorNames.map(c => (
                    <li key={c}>
                        <Link to={`/colors/${c}`}>{c}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ColorList;