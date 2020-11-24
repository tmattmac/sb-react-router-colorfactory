import React, { useState, useEffect } from 'react';
import ColorPage from './ColorPage';
import ColorAddForm from './ColorAddForm';
import ColorList from './ColorList';
import { Switch, Route, Redirect } from 'react-router-dom';

const ColorFactory = () => {
    const [colors, setColors] = useState({});

    useEffect(() => {
        const savedColors = localStorage.getItem("colors") || '{}';
        setColors(JSON.parse(savedColors));
    }, []);

    useEffect(() => {
        localStorage.setItem("colors", JSON.stringify(colors));
    }, [colors]);

    const addColor = color => {
        setColors(colors => {
            const newColors = { ...colors, [color.name]: color.color };
            return newColors;
        });
    }

    return (
        <Switch>
            <Route exact path="/colors/new">
                <ColorAddForm colors={colors} addColor={addColor} />
            </Route>
            <Route path="/colors/:color">
                <ColorPage colors={colors} />
            </Route>
            <Route exact path="/colors">
                <ColorList colors={colors} />
            </Route>
            <Redirect to="/colors" />
        </Switch>
    );
}

export default ColorFactory;