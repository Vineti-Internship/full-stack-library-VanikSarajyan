import React from 'react';

const AuthorItem = (props) => {
    const {author} = props;
    return (
        <tr>
            <td>{author.id}</td>
            <td>{author.full_name}</td>
            <td>{author.email}</td>
            <td>
                <button className="btn btn-primary">Edit</button>
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