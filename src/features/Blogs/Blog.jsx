import React from 'react';
import formatDate from '../../utils/formatDate';
import img from '../../assets/cover.jpg';

const Blog = ({ blog }) => {
    return (
        <div className='blog'>
            <div className='coverImage'>
                <img src={blog?.urlToImage || img} alt='' />
            </div>
            <div className='content'>
                <p className='date'>{formatDate(blog?.publishedAt)}</p>
                <h3 className='title'>{blog?.title}</h3>
                <p className='blogContent'>
                    {blog?.description?.substring(0, 200)}.....
                </p>
                <h4 className='continueReading'>Continue Reading</h4>
            </div>
        </div>
    );
};

export default Blog;
