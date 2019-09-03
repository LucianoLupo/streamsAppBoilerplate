
import React, { Component } from 'react'

export default class GoogleAuth extends Component {
    
    state = { isSignedIn: null };
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'813138123393-v8dtlqu1qmg4kic01e9og1u5ibf4qqv9.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    renderAuthButton() {
        if( this.state.isSignedIn === null ){
            return <div>I dont know</div>
        }else if (this.state.isSignedIn) {
            return <div>Is signed in</div>
        } else {
            return <div> is not signed in</div>
        }

    }


    render() {
        return (
            <div> {this.renderAuthButton() } </div>
        )
    }
}
