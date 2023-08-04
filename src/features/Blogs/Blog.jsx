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
                <p className='date'>
                    {formatDate(blog?.publishedAt)}, By {blog?.author}
                </p>
                <h3 className='title'>{blog?.title}</h3>
                <p className='blogContent'>{blog?.description}</p>
                <a href={blog?.url} style={{ textDecoration: 'none' }}>
                    <h4 className='continueReading'>Continue Reading</h4>
                </a>
            </div>
        </div>
    );
};

export default Blog;
