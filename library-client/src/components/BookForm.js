import React from 'react';
import {Link} from 'react-router-dom';
import Loading from './Loading';

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
            this.setState({isLoading: false})
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
        if(this.props.handleAdd){
            const {title, price, description, authorId} = this.state;
            this.props.handleAdd(title, price, description, authorId);
        } 

    }

    render(){
        return (
            <React.Fragment>
                {this.state.isLoading ? <Loading /> : <div style={{width: 600, margin: "0 auto"}}>
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
                    <Link to='/books'><button onClick={this.handleClick} className="btn btn-success">Submit</button></Link>
                    <Link to="/books"><button className="btn btn-default">Cancel</button></Link>
                </div>}
            </React.Fragment>
        )
    }
}

export default BookForm;