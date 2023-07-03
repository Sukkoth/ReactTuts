import React from 'react';

const Switch = ({ title, eventHandler, switchOn }) => {
    return (
        <>
            <p className='power-title'>{title}</p>
            <div className='switch' onClick={eventHandler}>
                <div
                    className='switch-button'
                    style={{
                        float: switchOn == true ? 'right' : 'left',
                    }}
                ></div>
            </div>
        </>
    );
};

Switch.defaultProps = {
    switchOn: true,
};

export default Switch;
