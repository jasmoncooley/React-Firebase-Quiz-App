import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

const style ={
  background:"#e75480"
}
class Bar extends Component {
    constructor(props) {
      super(props);
        
      this.state = {
         value: "Signup",
      }
   }
    
      signup(ev) {
        ev.preventDefault();      
            console.log("Sign out successful"),
            browserHistory.push('/signup')
 }
 
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="The Pre-Game" style={style} iconElementRight={<FlatButton label={this.state.value}  onClick={this.signup} />} />
                    </div>
                </MuiThemeProvider>
                {this.props.children}
            </div>
        )
    }
}

export default Bar;