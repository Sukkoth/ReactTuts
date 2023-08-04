import { useState } from 'react';
import './pagination.css';
const Pagination = ({ page, totalResults, pageSize, handlePageChange }) => {
    if (totalResults === 0) return;
    return (
        <div className='pagination'>
            {/* Prev page */}
            {page !== 1 && (
                <button onClick={() => handlePageChange(page - 1)}>
                    <i className='fa-solid fa-angles-left'></i>
                </button>
            )}

            {/* first page */}
            {page !== 0 && page > 2 && (
                <>
                    <button onClick={() => handlePageChange(1)}>1</button>
                    <button disabled={true}>...</button>
                </>
            )}

            {/* PREV PAGE NUMBER */}
            {page > 1 && (
                <button onClick={() => handlePageChange(page - 1)}>
                    {page - 1}
                </button>
            )}

            {/* NEXT PAGE NUMBER */}
            <button className='active'>{page}</button>
            {page < parseInt(totalResults / pageSize) && (
                <button onClick={() => handlePageChange(page + 1)}>
                    {page + 1}
                </button>
            )}

            {/* LAST PAGE */}
            {page + 1 < parseInt(totalResults / pageSize) && (
                <>
                    <button disabled={true}>...</button>
                    <button
                        onClick={() =>
                            handlePageChange(parseInt(totalResults / pageSize))
                        }
                    >
                        {parseInt(totalResults / pageSize)}
                    </button>
                </>
            )}

            {/* NEXT PAGE  */}
            {page < parseInt(totalResults / pageSize) && (
                <button onClick={() => handlePageChange(page + 1)}>
                    <i className='fa-solid fa-angles-right'></i>
                </button>
            )}
        </div>
    );
};

export default Pagination;
