import React, { useEffect } from 'react';
import './blogsStyle.css';
import Blog from './Blog';
import Pagination from '../../Components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, changePage, updateQueryOptions } from './blogsSlice';
const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs);
    const queryOptions = useSelector((state) => state.blogs.queryOptions);

    const handlePageChange = (changePageTo) => {
        dispatch(changePage(changePageTo));
        dispatch(fetchBlogs());
    };

    const handleCategories = (category) => {
        if (queryOptions?.category === category)
            dispatch(
                updateQueryOptions({
                    ...queryOptions,
                    q: '',
                    category: null,
                    sources: [
                        'bbc-news',
                        'cnn',
                        'abc-news',
                        'al-jazeera-english',
                    ],
                })
            );
        else
            dispatch(
                updateQueryOptions({
                    ...queryOptions,
                    category,
                    q: '',
                    sources: null,
                })
            );
        dispatch(fetchBlogs());
    };

    useEffect(() => {
        dispatch(fetchBlogs());
    }, []);

    return (
        <div className='blogsMain'>
            <div className='banner'>hello</div>
            <div className='main-content'>
                <div className='blogs'>
                    {blogs.isLoading && (
                        <h3 style={{ textAlign: 'center' }}>Loading . . .</h3>
                    )}

                    {!blogs.isLoading &&
                        !blogs?.errors &&
                        blogs?.data?.articles &&
                        blogs?.data?.articles.map((blog, index) => (
                            <Blog blog={blog} key={index} />
                        ))}
                    {!blogs.isLoading &&
                        !blogs?.errors &&
                        blogs?.data?.articles && (
                            <Pagination
                                page={blogs?.data?.page || queryOptions?.page}
                                totalResults={
                                    blogs?.data?.totalResults < 100
                                        ? blogs?.data?.totalResults
                                        : 100
                                }
                                pageSize={queryOptions?.pageSize || 5}
                                handlePageChange={handlePageChange}
                            />
                        )}
                    {!blogs.isLoading && blogs?.errors && (
                        <h3 style={{ textAlign: 'center', color: 'red' }}>
                            ERROR WHILE FETCHING DATA, TRY AGAIN LATER
                        </h3>
                    )}
                    {!blogs.isLoading &&
                        !blogs?.errors &&
                        blogs?.data?.totalResults === 0 && (
                            <h3 style={{ textAlign: 'center' }}>
                                NO RESULTS FOUND
                            </h3>
                        )}
                </div>

                <div className='sideBar'>
                    <div className='sideBarItem'>
                        <h2>Categories</h2>
                        <ul>
                            <li
                                className={`${
                                    queryOptions?.category === 'business'
                                        ? 'itemList active'
                                        : 'itemList'
                                }`}
                                onClick={() => handleCategories('business')}
                            >
                                <i className='fa-solid fa-business-time sideBarIcon'></i>
                                business
                            </li>
                            <li
                                className={`${
                                    queryOptions?.category === 'entertainment'
                                        ? 'itemList active'
                                        : 'itemList'
                                }`}
                                onClick={() =>
                                    handleCategories('entertainment')
                                }
                            >
                                <i className='fa-solid fa-tv sideBarIcon'></i>
                                entertainment
                            </li>
                            <li
                                className={`${
                                    queryOptions?.category === 'general'
                                        ? 'itemList active'
                                        : 'itemList'
                                }`}
                                onClick={() => handleCategories('general')}
                            >
                                <i className='fa-brands fa-intercom sideBarIcon'></i>
                                general
                            </li>
                            <li
                                className={`${
                                    queryOptions?.category === 'health'
                                        ? 'itemList active'
                                        : 'itemList'
                                }`}
                                onClick={() => handleCategories('health')}
                            >
                                <i className='fa-sharp fa-solid fa-stethoscope sideBarIcon'></i>
                                health
                            </li>
                            <li
                                className={`${
                                    queryOptions?.category === 'science'
                                        ? 'itemList active'
                                        : 'itemList'
                                }`}
                                onClick={() => handleCategories('science')}
                            >
                                <i className='fa-solid fa-flask sideBarIcon'></i>
                                science
                            </li>
                            <li
                                className={`${
                                    queryOptions?.category === 'sports'
                                        ? 'itemList active'
                                        : 'itemList'
                                }`}
                                onClick={() => handleCategories('sports')}
                            >
                                <i className='fa-solid fa-futbol sideBarIcon'></i>
                                sports
                            </li>
                            <li
                                className={`${
                                    queryOptions?.category === 'technology'
                                        ? 'itemList active'
                                        : 'itemList'
                                }`}
                                onClick={() => handleCategories('technology')}
                            >
                                <i className='fa-solid fa-microchip sideBarIcon'></i>
                                technology
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
