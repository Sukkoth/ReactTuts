import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';

import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const onSavedPostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setContent('');
            setTitle('');
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

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
                <label htmlFor='postAuthor'>Author: </label>
                <select
                    name='postAuthor'
                    id='postAuthor'
                    onChange={onAuthorChanged}
                >
                    <option value=''></option>
                    {usersOptions}
                </select>
                <label htmlFor='postContent'>Content: </label>
                <textarea
                    name='postContent'
                    id='postContent'
                    value={content}
                    onChange={onContentChanged}
                ></textarea>
                <button
                    type='button'
                    onClick={onSavedPostClicked}
                    disabled={!canSave}
                >
                    Save post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
