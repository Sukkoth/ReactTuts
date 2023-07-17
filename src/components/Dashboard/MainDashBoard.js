import React, { useEffect } from 'react';
import AccountList from './AccountList';
import AccountSummaryAAAA from './AccountSummary';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../../redux/slice/users/usersSlice';

const MainDashBoard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileAction());
    }, [dispatch]);

    const { profile, error, loading } = useSelector((state) => state?.users);

    return (
        <>
            {loading ? (
                <h2 className='text-center text-green-600 text-lg mt-5'>
                    Loading . . .
                </h2>
            ) : error ? (
                <h2 className='text-red-600 text-center mt-5 text-lg'>
                    {error}
                </h2>
            ) : (
                <>
                    <AccountSummaryAAAA profile={profile} />
                    <AccountList profile={profile} />
                </>
            )}
        </>
    );
};

export default MainDashBoard;
