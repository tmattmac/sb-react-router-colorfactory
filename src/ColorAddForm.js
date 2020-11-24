import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const INIT_STATE = {
    name: '',
    color: '#000000'
};

const ColorAddForm = ({ colors, addColor }) => {

    const [formData, setFormData] = useState(INIT_STATE);
    const [isValid, setIsValid] = useState(false);
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if (isValid) {
            addColor(formData);
            history.push(`/colors/${formData.name}`);
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => {
            return { ...formData, [name]: value };
        });
        if (!value || (name === 'name' && colors[value])) setIsValid(false);
        else setIsValid(true);
    }

    return (
        <form onSubmit={handleSubmit} className="ColorAddForm">
            <label htmlFor="colorName">Name: </label>
            <input
                id="colorName"
                onChange={handleChange}
                value={formData.name}
                name="name"
                valid={isValid.toString()}
            />
            <label htmlFor="colorValue">Color: </label>
            <input
                id="colorValue"
                type="color"
                onChange={handleChange}
                value={formData.color}
                name="color"
            />
            <button disabled={!isValid}>Add Color</button>
        </form>
    )
}

export default ColorAddForm;