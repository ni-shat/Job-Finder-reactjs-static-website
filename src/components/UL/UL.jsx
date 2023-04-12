import React from 'react';

const UL = ({ array }) => {
    return (
        <div>
            <ul className='list-disc list-outside pt-5 pl-16'>              
                    {
                        array.map(element => <li  key={array.indexOf(element)}>
                            {element}
                        </li>)
                    }

            </ul>
        </div>
    );
};

export default UL;