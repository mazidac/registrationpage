import React from 'react';

function Thankyou(props) {
console.log(props.inputValues)
const {name, lastname} = props.inputValues
    return (
        <div>
            name:{name}
            last name:{lastname}
        </div>
    );
}

export default Thankyou;