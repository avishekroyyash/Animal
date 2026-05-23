import React from 'react';
export const metadata = {
  title: 'Animal Loading',
  description: 'this is animal loading',
}
const LoadingPage = () => {
    return (
        <div className='p-50'>
            <span className="loading loading-dots loading-xl text-red-500 text-7xl"></span>
        </div>
    );
};

export default LoadingPage;