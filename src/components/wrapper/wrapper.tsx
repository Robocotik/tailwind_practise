import React from "react"
import Props from './wrapper.props'

const Wrapper = ({ children }: Props) => {
    return (
        <div className="w-4/5 m-auto">
            {children}
        </div>
    );
}

export default Wrapper;