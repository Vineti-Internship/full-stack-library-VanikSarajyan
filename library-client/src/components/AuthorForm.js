import React from 'react';
import {Link} from 'react-router-dom';

class AuthorFrom extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            fullName:"",
            email:""
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
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="form-group">
                    <label >Full Name</label>
                    <input name="fullName" onChange={this.handleChange} value={this.state.fullName} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email" onChange={this.handleChange} value={this.state.email} type="eamil" className="form-control"/>
                </div>
                <button className="btn btn-success" onClick={this.handleClick}>Add</button>
                <Link to="/authors"><button className="btn btn-default">Cancel</button></Link>
            </React.Fragment>
        )
    }
}

export default AuthorFrom;