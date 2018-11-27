import React from 'react';
import AuthorFrom from './AuthorForm';

class AuthorAdd extends React.PureComponent {
    constructor(props){
        super(props)
    }

    async handleAdd(fullName, email){
        const author = {
            full_name:fullName,
            email
        }
        try{
            await fetch("http://localhost:4000/authors", {
                method: "POST",
                body: JSON.stringify({author}),
                headers: {
                    "Content-Type": "application/json",
                }
            });
        } catch(e) {
            console.log(e);
        }
    }

    render(){
        return (
            <React.Fragment>
                <h1>Add New Author</h1>
                <AuthorFrom 
                    handleAdd = {this.handleAdd}
                />
            </React.Fragment>
        )
    }
}

export default AuthorAdd;