import React from 'react';
import {Link} from 'react-router-dom';
import AuthorItem from './AuthorItem';

class Authors extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            authors: []
        }
    }

    getAuthors = async () => {
        try {
            const response = await fetch('http://localhost:4000/authors');
            const authors = await response.json();
            this.setState({authors});

        } catch(e){
            console.log(e);
        }
    }

    componentDidMount(){
        setTimeout(this.getAuthors, 1200);
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
            <React.Fragment>
                <h1>Authors</h1>
                <p>{this.state.message}</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
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
                <Link to="/authors/new"><button className="btn btn-success">Add New Author</button></Link> <br /> <br />
                <Link to="/">Home</Link>
            </React.Fragment>
        )
    }
}

export default Authors;