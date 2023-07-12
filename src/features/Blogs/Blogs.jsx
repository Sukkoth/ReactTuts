import React from 'react';
import './blogsStyle.css';
import coverImage from '../../assets/cover.jpg';
import Blog from './Blog';
import Pagination from '../../Components/Pagination';
const Blogs = () => {
    return (
        <div className='blogsMain'>
            <div className='blogs'>
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Pagination />
            </div>
            <div className='sideBar'>
                <div className='sideBarItem'>
                    <h2>Sources</h2>
                    <ul>
                        <li className='itemList'>
                            <i className='fa-solid fa-business-time sideBarIcon'></i>
                            business
                        </li>
                        <li className='itemList'>
                            <i className='fa-solid fa-tv sideBarIcon'></i>
                            entertainment
                        </li>
                        <li className='itemList'>
                            <i className='fa-brands fa-intercom sideBarIcon'></i>
                            general
                        </li>
                        <li className='itemList'>
                            <i className='fa-sharp fa-solid fa-stethoscope sideBarIcon'></i>
                            health
                        </li>
                        <li className='itemList'>
                            <i className='fa-solid fa-flask sideBarIcon'></i>
                            science
                        </li>
                        <li className='itemList'>
                            <i className='fa-solid fa-futbol sideBarIcon'></i>
                            sports
                        </li>
                        <li className='itemList'>
                            <i className='fa-solid fa-microchip sideBarIcon'></i>
                            technology
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
