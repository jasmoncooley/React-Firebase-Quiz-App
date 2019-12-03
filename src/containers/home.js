import React, { Component } from 'react';
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';


class LoginSignup extends Component {


    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>
                            <h1>Welcome to the Pre-Game!</h1>
                            <h1 style="color: rgb(255, 0, 200; font-size:16px">Big Heading</h1>
                            <Link to="/login"><RaisedButton type="submit" primary={false}>Log In</RaisedButton></Link>
                            <Link to="/signup"><RaisedButton type="submit" primary={true} style={{ margin: 12 }}>Sign Up</RaisedButton></Link>
                        </div>
                    </center>
                </MuiThemeProvider>

            </div>
        )
    }
}

export default LoginSignup;