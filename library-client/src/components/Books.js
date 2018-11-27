import React from 'react';
import {Link} from 'react-router-dom';
import BookItem from './BookItem';

class Books extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:4000/books");
            const books = await response.json();
            this.setState({books})
        } catch(e){
            console.log(e);
        }
    }
    render(){
        return (
            <React.Fragment>
                <h1>Books</h1>
                <table className="table">
                    <thead>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        {this.state.books.map((book,index) => {
                            return (
                                <BookItem 
                                    key={index}
                                    book = {book}
                                />
                            )
                        })}
                    </tbody>
                </table>
                <button className="btn btn-success">Add New Book</button> <br /> <br />
                <Link to="/">Home</Link>
            </React.Fragment>
        )
    }
}

export default Books;