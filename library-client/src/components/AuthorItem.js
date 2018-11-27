import React from 'react';

const AuthorItem = (props) => {
    const {author} = props;
    return (
        <tr>
            <td>{author.full_name}</td>
            <td>{author.email}</td>
            <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default AuthorItem;