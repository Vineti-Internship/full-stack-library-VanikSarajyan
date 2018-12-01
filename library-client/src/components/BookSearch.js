import React from 'react';
import BookItem from './BookItem';
import {ThemeContext} from '../ThemeContext';

class BookSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchResults: [],
            title: "",
            searchMessage: "",
            searched: false
        }
    }

    handleChange = (event) => {
        const {target} = event;
        const {name,value} = target;
        this.setState({
            [name]:value
        })
    }

    handleClick = async (title) => {
        this.setState({searchResults: []});
        try {
            const response = await fetch(`http://localhost:4000/books/search/${title}`);
            const searchResults = await response.json();
            if(searchResults.length > 0){
                this.setState({searchResults, searched: true});
            } else {
                this.setState({searchMessage: "No results", searched: true});
            }

        }catch (e) {
            console.log(e);
        }
    }
    render(){
        return (
            <ThemeContext.Consumer>
                {({theme}) => (
                <React.Fragment>
                    <p className="search">Search books</p>
                    <div className="input-group">
                        <input 
                            placeholder="Enter title..."
                            name="title" type="text" 
                            value={this.state.title} 
                            onChange={this.handleChange} 
                            className="form-control" 
                            style={{margin: "30px 10px",}}
                        /> 
                        <span className="input-group-btn">
                            <button 
                                disabled = {!this.state.title}
                                className="btn btn-info"
                                onClick={() => this.handleClick(this.state.title)}
                                style={{marginTop: "30px", borderColor:"white", backgroundColor:theme.editButton}}>
                                Search
                            </button>
                        </span>
                    </div>
                    <p>{this.state.searchMessage}</p>
                    {!this.state.searched || this.state.searchResults.length < 1 ? <React.Fragment /> : <table className="table">
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
                            {this.state.searchResults.map((book,index) => {
                                return (
                                    <BookItem 
                                        key={index}
                                        book = {book}
                                        handleDelete={this.props.deleteBook}
                                    />
                                )
                            })}
                         </tbody>
                    </table>}
                    <hr /> <hr />
                    <br />
                </React.Fragment>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default BookSearch;