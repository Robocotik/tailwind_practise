import React from "react";
import Props from './card.props'
import Button from "../button/button.tsx";
import { useState } from "react";

const Card = ({ title, desc, photo }: Props) => {
    let [isDark, setDark] = useState(true);
    let switchMode = () => { setDark(!isDark) }

    return (
        <div className="flex flex-col items-center justify-center border border-purple-500 relative rounded h-80">
            <img src={photo} className="w-auto h-20 absolute left-4 top-4"></img>
            <div className="flex flex-col h-full items-center justify-between p-4">
                <h1 className="font-bold">{title}</h1>
                <p>{desc}</p>
                <Button btnHandler={switchMode} isDark={isDark} />
            </div>
        </div>
    );
}


export default Card;