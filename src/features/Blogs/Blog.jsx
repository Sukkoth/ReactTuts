import React from 'react';

const Blog = () => {
    return (
        <div className='blog'>
            <div className='coverImage'></div>
            <div className='content'>
                <p className='date'>July 10, 2023</p>
                <h3 className='title'>
                    Trader Joe’s Sun-Dried Tomato Focaccia Turkey Sandwich
                </h3>
                <p className='blogContent'>
                    Pillowy sun-dried tomato focaccia gets piled with pesto
                    mayo, turkey, juicy tomato slices, and greens. This sandwich
                    is a beauty and practically a lifestyle!
                </p>
                <h4 className='continueReading'>Continue Reading</h4>
            </div>
        </div>
    );
};

export default Blog;
