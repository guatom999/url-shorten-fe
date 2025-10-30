import React from 'react';

// interface HeaderProps {

// }

const Header: React.FC = () => {
    return (
        <header className="">
            <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-red-500">ShortenURL</h1>
                <span className='text-2xl text-b'>
                    Log in or Sign up
                </span>
            </div>
        </header>

    );
};

export default Header;