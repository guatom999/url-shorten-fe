import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 pb-40 ">
            <div className="w-full max-w-6xl">
                <main className="text-center">
                    <p className="text-xl text-gray-600 mb-8">Shorten your long URLs easily.</p>
                    <div className='flex bg-white p-3 rounded-full shadow-md'>
                        <input
                            type="url"
                            placeholder="Enter your URL here..."
                            className="w-full p-10 focus:outline-none text-3xl placeholder:text-gray-400"
                        />
                        <button className='w-[300px] border bg-red-500 text-white rounded-full text-4xl font-extrabold text-nowrap px-10'>
                            Create link
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HomePage;