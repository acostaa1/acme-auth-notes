import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Notes = ({notes})=> {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <div>
        {notes.map( note => {
          return(
            <li key={note.id}>{note.name}: {note.content}</li>
          )
        })}
      </div>
    </div>
  );
};

export default connect(state => state)(Notes);
