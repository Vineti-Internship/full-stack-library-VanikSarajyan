import React from 'react';
import AuthorFrom from './AuthorForm';

class AuthorEdit extends React.PureComponent {
    handleEdit = async (id, fullName, email) => {
        const author = {
            full_name:fullName,
            email
        }
        try{
            await fetch(`http://localhost:4000/authors/${id}`, {
                method: "PUT",
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
                <h1>Edit Author</h1>
                <AuthorFrom 
                    handleEdit = {this.handleEdit}
                    authorId = {this.props.match.params.id}
                />
            </React.Fragment>
        )
    }
}

export default AuthorEdit;