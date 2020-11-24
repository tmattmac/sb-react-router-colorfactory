import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import tinycolor from 'tinycolor2';
import './ColorPage.css';

const ColorPage = ({ colors }) => {

    const { color } = useParams();
    if (!colors[color]) return <Redirect to="/colors" />;

    // use tinycolor to get the most readable text color
    const inverse = tinycolor.mostReadable(
        colors[color], ["#000", "#FFF"]).toString();
    
    const colorCSS = { backgroundColor: colors[color] };
    const inverseCSS = { color: inverse };

    return (
        <div className="ColorPage" style={colorCSS}>
            <Link to="/colors" style={inverseCSS}>Go Home</Link>
        </div>
    )
}

export default ColorPage;