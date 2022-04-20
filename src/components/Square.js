import React from 'react';


const style = {
    background: ' rgb(238,174,202)',
    background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
    border: '2px solid dark blue',
    color: 'darkblue',
    fontSize: '45px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none '
};

const Square = ({value, onClick}) => (
    <button style = {style} 
    onClick={onClick}>
        {value}
        </button>
);

export default Square;