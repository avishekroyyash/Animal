import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='border border-red-600 mx-auto p-40 bg-red-600 rounded-full'>
            <h1 className='font-bold text-7xl text-white'>404 Error</h1>
            <p className='font-bold text-3xl text-white'>Page is not found</p>
        </div>
    );
};

export default NotFoundPage;