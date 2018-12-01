import React from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../ThemeContext';

const AuthorItem = (props) => {
    const {author} = props;
    return (
        <ThemeContext.Consumer>
            { ({theme}) => (
                <tr>
                    <td>{author.id}</td>
                    <td>{author.full_name}</td>
                    <td>{author.email}</td>
                    <td>
                        <Link to={`/authors/edit/${author.id}`} >
                            <button 
                                className="btn btn-primary"
                                style={{backgroundColor: theme.editButton, borderColor: "white"}}>
                                Edit
                            </button>
                        </Link>
                        <button 
                            className="btn btn-danger"
                            style={{backgroundColor: theme.deleteButton, borderColor: "white"}}
                            onClick={() => props.handleDelete(author.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            )}
        </ThemeContext.Consumer>
    )
}

export default AuthorItem;