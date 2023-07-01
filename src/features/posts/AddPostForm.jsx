import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const onSavedPostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content));
            setContent('');
            setTitle('');
        }
    };

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor='postsTtitle'>Post title: </label>
                <input
                    type='text'
                    id='postsTitle'
                    name='postsTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postContent'>Content: </label>
                <textarea
                    name='postContent'
                    id='postContent'
                    value={content}
                    onChange={onContentChanged}
                ></textarea>
                <button type='button' onClick={onSavedPostClicked}>
                    Save post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
