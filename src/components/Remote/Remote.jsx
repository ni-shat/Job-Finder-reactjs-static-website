import React from 'react';

const Remote = ({ route}) => {
    const { itemId, otherParam } = route.params;
    console.log(itemId, otherParam);
    return (
        <div>
            <div className='bg-[#F9FAFF]'>
                <h2 className='text-4xl font-bold text-center text-[#1A1919] pt-32 pb-[176px]'>Job details</h2>
            </div>
            <div>
                remote
            </div>
        </div>
    );
};

export default Remote;