import React, { useState } from 'react';
import PropTypes  from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState();

    const handledInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handledSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue,...cats,]);
            setInputValue('');
        }else{
            alert('El nombre de la categoria debe tener al menos 3 caracteres');
        }
    }

    return (
        <>
            <form onSubmit={handledSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handledInputChange}
                />
            </form>
        </>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}