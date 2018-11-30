import React from 'react';
import {Link} from 'react-router-dom';
import BookItem from './BookItem';
import Loading from './Loading';

class Books extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(this.getBooks, 400);
    }

    getBooks = async () => {
        try {
            const response = await fetch("http://localhost:4000/books");
            const books = await response.json();
            this.setState({books, isLoading: false})
        } catch(e){
            console.log(e);
        }
    }

    deleteBook = async (id) => {
        try {
            await fetch(`http://localhost:4000/books/${id}`, {
                method: "DELETE"
            });
            this.getBooks();
        } catch(e){
            console.log(e);
        }
    }

    render(){
        return (
            <React.Fragment>
                <h1>Books</h1>
                {this.state.isLoading ? <Loading /> :<React.Fragment>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.books.map((book,index) => {
                                return (
                                    <BookItem 
                                        key={index}
                                        book = {book}
                                        handleDelete={this.deleteBook}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                    <Link to="/books/new"><button className="btn btn-success">Add New Book</button></Link>
            </React.Fragment>}
            <br /> <br />
            <Link to="/">Home</Link>
            </React.Fragment>
        )
    }
}

export default Books;