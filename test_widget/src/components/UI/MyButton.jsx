import React from 'react'
import '../../sass/App.scss';

const MyButton = ({children, ...props}) => {
    return (
        <button className='my_button' {...props} >{children}</button>
    )
}

export default React.memo(MyButton)
