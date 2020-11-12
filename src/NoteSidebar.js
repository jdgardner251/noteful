import React from 'react'
import { useHistory } from 'react-router-dom';

function NoteSidebar(){
    const history = useHistory();

    const goBackHandle = () => {
        history.goBack();
    }


    return (
        <div className='note-sidebar'>
            <button onClick={() => goBackHandle()}>Go Back</button>
        </div>
    )
}

export default NoteSidebar;