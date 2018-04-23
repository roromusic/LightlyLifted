import React, { Component } from 'react';
import Button from './Button';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            sent: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let form = new FormData();
        form.append('EMAIL', this.state.email);

        const url = "https://lightlylifted.us18.list-manage.com/subscribe/post?u=49711b70605f43145ff248437&amp;id=3bd73ed62b"

        fetch(url, { 
            mode: 'no-cors',
            method: 'POST',
            body: form
          }).then(() => {
              this.setState(()=> ({email: "", sent: true}))
          })
    }

    onChange(e) {
        e.persist();
        this.setState((prevState, props) => {
            return {email: e.target.value};
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    style={{
                        width: "100%",
                        height: "40px",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "300",
                        marginBottom: "25px"
                    }}
                    name="EMAIL"
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    value={this.state.email}
                    required
                    onChange={this.onChange}
                />
                {this.state.sent ? 
                    <div style={{
                        fontWeight: "bold",
                        color: "#FFCB4E"
                    }}>Subscribed!</div> 
                    : 
                    undefined
                }
                <Button text="Sign up" />
            </form>
        )
    }
}

export default SignUp;