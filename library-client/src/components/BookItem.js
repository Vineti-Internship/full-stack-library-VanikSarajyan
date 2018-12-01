import React from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../ThemeContext';

const BookItem = (props) => {
    const {book} = props;
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <tr>
                    <td>{book.title}</td>
                    <td>{book.author ? book.author.full_name : "Author has been deleted"}</td>
                    <td>{book.description}</td>
                    <td>{book.price} $ </td>
                    <td>
                        <Link to={`/books/edit/${book.id}`}>
                            <button 
                                style={{backgroundColor: theme.editButton, borderColor: "white"}}
                                className="btn btn-primary">
                                Edit
                            </button>
                        </Link>
                        <button 
                            style={{backgroundColor: theme.deleteButton, borderColor: "white"}}
                            onClick={() => props.handleDelete(book.id)} 
                            className="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            )}
        </ThemeContext.Consumer>
    )
}

export default BookItem;