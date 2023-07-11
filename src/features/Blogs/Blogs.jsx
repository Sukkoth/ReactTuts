import React from 'react';
import blogsStyle from './blogsStyle.css';
import coverImage from '../../assets/cover.jpg';
const Blogs = () => {
    return (
        <div className='blogsMain'>
            <div className='blogs'>
                <div className='blog'>
                    <div className='coverImage'></div>
                    <div className='content'>
                        <p className='date'>July 10, 2023</p>
                        <h3 className='title'>
                            Trader Joe’s Sun-Dried Tomato Focaccia Turkey
                            Sandwich
                        </h3>
                        <p className='blogContent'>
                            Pillowy sun-dried tomato focaccia gets piled with
                            pesto mayo, turkey, juicy tomato slices, and greens.
                            This sandwich is a beauty and practically a
                            lifestyle!
                        </p>
                        <h4 className='continueReading'>Continue Reading</h4>
                    </div>
                </div>
                <div className='blog'>
                    <div className='coverImage'></div>
                    <div className='content'>
                        <p className='date'>July 10, 2023</p>
                        <h3 className='title'>
                            Trader Joe’s Sun-Dried Tomato Focaccia Turkey
                            Sandwich
                        </h3>
                        <p className='blogContent'>
                            Pillowy sun-dried tomato focaccia gets piled with
                            pesto mayo, turkey, juicy tomato slices, and greens.
                            This sandwich is a beauty and practically a
                            lifestyle!
                        </p>
                        <h4 className='continueReading'>Continue Reading</h4>
                    </div>
                </div>
            </div>
            <div className='sideBar'>
                <div className='sideBarItem'>
                    <h2>Sources</h2>
                    <ul>
                        <li className='itemList'>
                            <i class='fa-solid fa-business-time sideBarIcon'></i>
                            business
                        </li>
                        <li className='itemList'>
                            <i class='fa-solid fa-tv sideBarIcon'></i>
                            entertainment
                        </li>
                        <li className='itemList'>
                            <i class='fa-brands fa-intercom sideBarIcon'></i>
                            general
                        </li>
                        <li className='itemList'>
                            <i class='fa-sharp fa-solid fa-stethoscope sideBarIcon'></i>
                            health
                        </li>
                        <li className='itemList'>
                            <i class='fa-solid fa-flask sideBarIcon'></i>
                            science
                        </li>
                        <li className='itemList'>
                            <i class='fa-solid fa-futbol sideBarIcon'></i>
                            sports
                        </li>
                        <li className='itemList'>
                            <i class='fa-solid fa-microchip sideBarIcon'></i>
                            technology
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
