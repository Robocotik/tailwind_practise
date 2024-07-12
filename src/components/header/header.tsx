import React from 'react';
const Header = () => {

    return (
        <div className="font-thin border">
            <ul className='flex flex-row gap-5 justify-center '>
                <li className='hover:shadow-orange-400 hover:shadow hover:scale-105 transition transition-all font-semibold text'>logo</li>
                <li className='hover:shadow-orange-400 hover:shadow hover:scale-105 transition transition-all'>about</li>
                <li className='hover:shadow-orange-400 hover:shadow hover:scale-105 transition transition-all'>more</li>
                <li className='hover:shadow-orange-400 hover:shadow hover:scale-105 transition transition-all'>contacts</li>
            </ul>
        </div>
    );
}

export default Header;