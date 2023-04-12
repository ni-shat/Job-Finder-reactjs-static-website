import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Statistics', path: '/statistics' },
        { id: 3, name: 'Applied jobs', path: '/applied-jobs' },
        { id: 4, name: 'Blog', path: '/blog' }
    ];

    return (
        <nav className='w-[95%] lg:w-[65%] mx-auto pt-12 pb-12 flex gap-4 justify-between items-center'>
            <div>
                <Link className='text-xl lg:text-3xl font-bold' to='/'>JobFinder</Link>
            </div>
            {/* menu icon for mobile */}
            <div className='flex-grow md:flex-grow-0'>
                <div className=' block md:hidden' onClick={() => setIsOpen(!isOpen)}>
                    <span>{
                        isOpen === true ? <FontAwesomeIcon icon={faBars} />
                            : <FontAwesomeIcon icon={faXmark} />
                    }
                    </span>
                </div>
                <div>
                    <ul className={`md:flex border md:border-0 rounded-md md:rounded-none 
                    p-2 
                    text-base md:text-xl md:space-x-12 text-[#474747] 
                    absolute md:static duration-500 ${isOpen ? '-top-56' : 'top-20'}`}>

                        {
                            routes.map(route => <CustomLink
                                CustomLink
                                key={route.id}
                                route={route}
                            ></CustomLink>)
                        }
                    </ul>
                </div>
            </div>
            <div>
                <button className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100% p-2 px-3 lg:p-4 lg:px-8 rounded-md text-xs lg:text-xl text-white font-semibold'>Start Applying</button>
            </div>

            {/* end */}
            {/* <div className='hidden md:block text-xl space-x-12 text-[#474747]'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/applied-jobs'>Applied jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>
            <div>
                <button className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100% p-2 px-3 lg:p-4 lg:px-8 rounded-md text-base lg:text-xl text-white font-semibold'>Start Applying</button>
            </div> */}

        </nav>
    );
};

export default Navbar;
