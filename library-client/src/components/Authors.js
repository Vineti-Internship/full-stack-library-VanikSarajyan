import React from 'react';
import {Link} from 'react-router-dom';
import AuthorItem from './AuthorItem';
import {ThemeContext} from '../ThemeContext';
import Loading from './Loading';

class Authors extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            authors: [],
            isLoading: true
        }
    }

    getAuthors = async () => {
        try {
            const response = await fetch('http://localhost:4000/authors');
            const authors = await response.json();
            this.setState({authors, isLoading: false});

        } catch(e){
            console.log(e);
        }
    }

    componentDidMount(){
        setTimeout(this.getAuthors, 400);
    }

    handleDelete = async (id) => {
        try{
            await fetch(`http://localhost:4000/authors/${id}`, {
                method: "DELETE",
            });
            this.getAuthors();
        } catch(e) {
            console.log(e);
        }
    }

    render(){
        return (
            <ThemeContext.Consumer>
               {({theme}) => (
                   <React.Fragment>
                        <h1>Authors</h1>
                        {this.state.isLoading ?  <Loading /> : 
                        <React.Fragment>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.authors.map((author, index) => {
                                        return (
                                            <AuthorItem 
                                                key={index}
                                                author = {author}
                                                handleDelete = {this.handleDelete}
                                            />
                                        );    
                                    })}
                                </tbody>
                            </table>
                            <Link to="/authors/new">
                                <button 
                                    style={{backgroundColor: theme.addButton, borderColor: "white"}} 
                                    className="btn btn-success">
                                    Add New Author
                                </button>
                            </Link>
                        </React.Fragment>}
                        <br /> <br />
                        <Link to="/">Home</Link>
                    </React.Fragment>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default Authors;