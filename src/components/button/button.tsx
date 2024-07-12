import React from "react";
import Props from './button.props'

const Button = ({isDark, btnHandler} : Props) => {

    return (
        <button onClick={btnHandler} className={`w-4/5 ${isDark?  "bg-slate-800": "bg-purple-600"}`}></button>
    );
};

export default Button;