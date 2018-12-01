import React from 'react';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import {ThemeContext} from '../ThemeContext';

class BookForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            price: "",
            description: "",
            authorId: "",
            isLoading: true
        }
    }
    componentDidMount(){
        if(this.props.handleAdd){
            this.setState({isLoading: false});
        } else {
            this.getCurrentBook();
        }
    }

    getCurrentBook = async () => {
        try {
            const response = await fetch(`http://localhost:4000/books/${this.props.bookId}`);
            const book = await response.json();
            const {title, author, price, description} = book;
            this.setState({title, authorId: author.id, price, description, isLoading: false });
        } catch(e){
            console.log(e);
        }
    }
    
    handleChange = (event) => {
        const {target} = event;
        const {name,value} = target;
        this.setState({
            [name]:value
        })
    }

    handleClick = () => {
        const {title, price, description, authorId} = this.state;
        if(this.props.handleAdd){
            this.props.handleAdd(title, price, description, authorId);
        } else {
            this.props.handleEdit(this.props.bookId, title, price, description, authorId);
        }

    }

    render(){
        return (
            <ThemeContext.Consumer>
                {({theme}) => (
                    <React.Fragment>
                        {this.state.isLoading ? <Loading /> : <div style={{width: 500, margin: "0 auto"}}>
                            <div className="form-group">
                                <label >Title</label>
                                <input name="title" onChange={this.handleChange} value={this.state.title} type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Author</label>
                                <input name="authorId" onChange={this.handleChange} value={this.state.authorId} type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input name="price" onChange={this.handleChange} value={this.state.price} type="number" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" onChange={this.handleChange} value={this.state.description} className="form-control"></textarea>
                            </div>
                            <Link to='/books'>
                                <button 
                                    onClick={this.handleClick} 
                                    style={{backgroundColor: theme.addButton, borderColor: "white"}}
                                    className="btn btn-success">
                                    Submit
                                </button>
                            </Link>
                            <Link to="/books">
                                <button 
                                    className="btn btn-default">
                                    Cancel
                                </button>
                            </Link>
                        </div>}
                    </React.Fragment>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default BookForm;