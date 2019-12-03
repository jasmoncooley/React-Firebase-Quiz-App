import React, { Component } from 'react';
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import YouTube from '@u-wave/react-youtube';


class LoginSignup extends Component {


    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>
                            <YouTube
                                video="x2to0hs"
                                autoplay
                            />
                            <h1> <font color="#FF00F2">Welcome to the Pre-Game!</font> </h1>
                            <Link to="/login"><RaisedButton type="submit" primary={false}>Log in</RaisedButton></Link>
                            <Link to="/signup"><RaisedButton type="submit" primary={true} style={{ margin: 12 }}>Sign Up</RaisedButton></Link>
                        </div>
                    </center>
                </MuiThemeProvider>

            </div>
        )
    }
}

export default LoginSignup;