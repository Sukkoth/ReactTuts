import './pagination.css';
const Pagination = () => {
    return (
        <div className='pagination'>
            <button>
                <i class='fa-solid fa-angles-left'></i>
            </button>

            <button className='active'>1</button>
            <button>2</button>
            <button>150</button>
            <button>
                <i class='fa-solid fa-angles-right'></i>
            </button>
        </div>
    );
};

export default Pagination;
