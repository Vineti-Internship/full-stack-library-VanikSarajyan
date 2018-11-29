import React from 'react';

const BookItem = (props) => {
    const {book} = props;
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author ? book.author.full_name: "Author has been deleted"}</td>
            <td>{book.description}</td>
            <td>{book.price} $ </td>
            <td>
                <button className="btn btn-primary">Edit</button>
                <button onClick={() => props.handleDelete(book.id)} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default BookItem;