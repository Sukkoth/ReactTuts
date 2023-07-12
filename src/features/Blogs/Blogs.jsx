import React, { useEffect, useState } from 'react';
import './blogsStyle.css';
import coverImage from '../../assets/cover.jpg';
import Blog from './Blog';
import Pagination from '../../Components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from './blogsSlice';
const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs);
    const [queryOptions, setQueryOptions] = useState({
        pageSize: 5,
        page: 5,
        sources: 'bbc-news,cnn,abc-news,al-jazeera-english',
        q: null,
        category: null,
    });

    const handlePageChange = (changePageTo) => {
        setQueryOptions({ ...queryOptions, page: changePageTo });
    };

    useEffect(() => {
        dispatch(fetchBlogs(queryOptions));
    }, [queryOptions]);
    return (
        <div className='blogsMain'>
            <div className='blogs'>
                {blogs.isLoading && (
                    <h3 style={{ textAlign: 'center' }}>Loading . . .</h3>
                )}

                {!blogs.isLoading &&
                    blogs?.data?.articles &&
                    blogs?.data?.articles.map((blog, index) => (
                        <Blog blog={blog} key={index} />
                    ))}
                {!blogs.isLoading && blogs?.data?.articles && (
                    <Pagination
                        page={blogs?.data?.page || queryOptions.page}
                        totalResults={blogs?.data?.totalResults}
                        pageSize={queryOptions.pageSize || 5}
                        handlePageChange={handlePageChange}
                    />
                )}
            </div>

            <div className='sideBar'>
                <div className='sideBarItem'>
                    <h2>Categories</h2>
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
                <div className='sideBarItem'>
                    <h2>Sources</h2>
                    <ul>
                        <li className='itemList'>
                            <input
                                class='form-check-input'
                                type='checkbox'
                                value=''
                                id=''
                            />
                            <label class='form-check-label' for=''>
                                <i class='fa-solid fa-newspaper sideBarIcon'></i>
                                CNN
                            </label>
                        </li>
                        <li className='itemList'>
                            <input
                                class='form-check-input'
                                type='checkbox'
                                value=''
                                id=''
                            />
                            <label class='form-check-label' for=''>
                                <i class='fa-solid fa-newspaper sideBarIcon'></i>
                                BBC
                            </label>
                        </li>
                        <li className='itemList'>
                            <input
                                class='form-check-input'
                                type='checkbox'
                                value=''
                                id=''
                            />
                            <label class='form-check-label' for=''>
                                <i class='fa-solid fa-newspaper sideBarIcon'></i>
                                Al Jazeera English
                            </label>
                        </li>
                        <li className='itemList'>
                            <input
                                class='form-check-input'
                                type='checkbox'
                                value=''
                                id=''
                            />
                            <label class='form-check-label' for=''>
                                <i class='fa-solid fa-newspaper sideBarIcon'></i>
                                Associated Press
                            </label>
                        </li>
                        <li className='itemList'>
                            <input
                                class='form-check-input'
                                type='checkbox'
                                value=''
                                id=''
                            />
                            <label class='form-check-label' for=''>
                                <i class='fa-solid fa-newspaper sideBarIcon'></i>
                                BBC Sport
                            </label>
                        </li>
                        <li className='itemList'>
                            <input
                                class='form-check-input'
                                type='checkbox'
                                value=''
                                id=''
                            />
                            <label class='form-check-label' for=''>
                                <i class='fa-solid fa-newspaper sideBarIcon'></i>
                                B Bild
                            </label>
                        </li>
                        <li className='itemList'>
                            <input
                                class='form-check-input'
                                type='checkbox'
                                value=''
                                id=''
                            />
                            <label class='form-check-label' for=''>
                                <i class='fa-solid fa-newspaper sideBarIcon'></i>
                                ABC News
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
