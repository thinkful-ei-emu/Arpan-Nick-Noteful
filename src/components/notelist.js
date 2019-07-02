import React from 'react';
import {Link} from 'react-router-dom';


function NoteList(props) {

    const filteredNoteList = props.notes
        .filter(note => `/folder/${note.folderId}` === props.match.url)
        .map(note => {
            const date = new Date(note.modified)
        const convertedDate = date.toDateString()
            return (
                <li key={note.id}>
                    <Link to={`/note/${note.id}`}>
                    <h2>{note.name}</h2>
                    </Link>
                    <p>Date Modified On: {convertedDate}</p>
                    <button type="click">Delete Note</button>
                </li>
            )
        })

    const noteList = props.notes.map(note => {
        const date = new Date(note.modified)
        const convertedDate = date.toDateString()
        return (
            <li key={note.id}>
                <Link to={`/note/${note.id}`}>
                <h2>{note.name}</h2>
                </Link>
                <p>Date Modified On: {convertedDate}</p>
                <button type="click">Delete Note</button>
            </li>
        )
    })

    if (props.match.url === '/') {
        return (
            <div>
                {noteList}
            </div>
        )
    } else return (
        <div>
            {filteredNoteList}
        </div>
    )

}

export default NoteList;