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

    async componentDidMount(){
        try {
            const response = await fetch('http://localhost:4000/authors');
            const authors = await response.json();
            this.setState({authors});

        } catch(e){
            console.log(e);
        }
    }

    render(){
        return (
            <React.Fragment>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <tr>
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