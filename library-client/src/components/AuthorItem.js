import React from 'react';

const AuthorItem = (props) => {
    const {author} = props;
    return (
        <tr>
            <td>{author.full_name}</td>
            <td>{author.email}</td>
        </tr>
    )
}

export default AuthorItem;