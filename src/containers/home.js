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
                            <h1> <font color = "#FF00F2">Welcome to the Pre-Game!</font> </h1>
                            <Link to="/login" ><RaisedButton type="submit" primary={false} backgroundColor='#FF00F2' >Log in</RaisedButton></Link>
                            <Link to="/signup"><RaisedButton type="submit" primary={false} style={{ margin: 12 }} backgroundColor='#FF00F2' >Sign Up</RaisedButton></Link>
                        </div>
                    </center>
                </MuiThemeProvider>

            </div>
        )
    }
}

export default LoginSignup;