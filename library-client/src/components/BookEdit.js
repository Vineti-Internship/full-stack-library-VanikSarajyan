import React from 'react';
import BookForm from "./BookForm";

class BookEdit extends React.PureComponent {
    handleEdit = async (id, title, price, description, authorId) => {
        const book = {
            title,
            price,
            description,
            author_id: authorId
        }
        try{
            await fetch(`http://localhost:4000/books/${id}`, {
                method: "PUT",
                body: JSON.stringify({book}),
                headers: {
                    "Content-Type": "application/json",
                }
            });
        } catch(e) {
            console.log(e);
        }
    }

    render(){
        return (
            <React.Fragment>
                <h1>Edit Book</h1>
                <BookForm 
                    handleEdit = {this.handleEdit}
                    bookId = {this.props.match.params.id}
                />
            </React.Fragment>
        )
    }
}

export default BookEdit;