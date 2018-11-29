import React from 'react';
import {Link} from 'react-router-dom';
import Loading from './Loading';

class AuthorFrom extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            fullName:"",
            email:"",
            isLoading: true
        }
    }
    componentDidMount(){
        if(this.props.handleAdd){
            this.setState({isLoading: false});
        } else{
            this.getCurrentAuthor();
        }
    }

    getCurrentAuthor = async () => {
        try {
            const response = await fetch(`http://localhost:4000/authors/${this.props.authorId}`);
            const author = await response.json();
            const {full_name : fullName, email} = author;
            this.setState({fullName, email, isLoading: false});
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
        if(this.props.handleAdd){
            this.props.handleAdd(this.state.fullName, this.state.email);
        } else {
            this.props.handleEdit(this.props.authorId,this.state.fullName, this.state.email)
        }

    }

    render(){
        return (
            <React.Fragment>
                {this.state.isLoading ? <Loading /> : <div style={{width: 600, margin: "0 auto"}}>
                    <div className="form-group">
                        <label >Full Name</label>
                        <input name="fullName" onChange={this.handleChange} value={this.state.fullName} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" onChange={this.handleChange} value={this.state.email} type="eamil" className="form-control"/>
                    </div>
                    <Link to='/authors'><button className="btn btn-success" onClick={this.handleClick}>Submit</button></Link>
                    <Link to="/authors"><button className="btn btn-default">Cancel</button></Link>
                </div>}
            </React.Fragment>
        )
    }
}

export default AuthorFrom;