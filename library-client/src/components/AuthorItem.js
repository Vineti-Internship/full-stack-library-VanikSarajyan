import React from 'react';
import {Link} from 'react-router-dom';

const AuthorItem = (props) => {
    const {author} = props;
    return (
        <tr>
            <td>{author.id}</td>
            <td>{author.full_name}</td>
            <td>{author.email}</td>
            <td>
                <Link to={`/authors/edit/${author.id}`} ><button 
                    className="btn btn-primary"
                >Edit</button></Link>
                <button 
                    className="btn btn-danger"
                    onClick={() => props.handleDelete(author.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default AuthorItem;