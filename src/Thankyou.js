import React from "react";

function Thankyou(props) {
  console.log(props.inputValues);
  const { name, lastname, dof, gender,e,m,addr,dis,st } = props.inputValues;
  return (
    <div className="container mt-2">
        <h4 className="text-center"> Your Details</h4>
      <p>
        Name:{name} {lastname}
        </p>
        <p>
        DoB:{dof}
        </p>
        <p>
        Gender:{gender}
        </p>
        <p>
        E-mail:{e}
        </p>
        <p>
        Mobile Number:{m}
        </p>
        <p>
        Address:{addr} {dis} {st}
        </p>
    
    </div>
  );
}

export default Thankyou;
