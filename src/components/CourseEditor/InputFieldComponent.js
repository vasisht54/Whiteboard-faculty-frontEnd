import React from "react";

const InputFieldComponent = ({placeHolder}) =>
    <div className="row p-1">
        <input className="form-control" placeholder={placeHolder}/>
    </div>;
export default InputFieldComponent;