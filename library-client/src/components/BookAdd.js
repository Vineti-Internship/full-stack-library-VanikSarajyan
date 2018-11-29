import React from 'react';

import BookForm from './BookForm';

class BookAdd extends React.PureComponent {
    async handleAdd(title, price, description, authorId){
        const book = {
            title,
            price,
            description,
            author_id: authorId
        }
        console.log(JSON.stringify({book}));
        try{
            await fetch("http://localhost:4000/books", {
                method: "POST",
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
        return(
            <React.Fragment>
                <h1>Adding New Book</h1>
                <BookForm 
                    handleAdd = {this.handleAdd}
                />
            </React.Fragment>
        )
    }
}

export default BookAdd;