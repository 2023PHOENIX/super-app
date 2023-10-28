import React from 'react';
import "./notes.css"

function Notes(props) {
    return (
        <div className='notes'>
            <h1>All Notes</h1>

            <textarea className='text-note' />
        </div>
    );
}

export default Notes;