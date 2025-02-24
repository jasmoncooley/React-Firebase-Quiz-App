import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";





class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Score: ""

        }
    }

     componentWillMount() {

        firebase.database().ref('UserInfo/'+firebase.auth().currentUser.uid+'/Quizzes/Score').on('value', (data) => {
            console.log(data.val())
            this.setState({
                Score: data.val()
            })
        })
        
    }
   
    render() {
      
        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>

                            <h1><font color="#ff2e97">Quiz Finished</font></h1>
                            <h1><font color="#ff2e97">Your Score {this.state.Score}</font></h1>

                                

                           
                        </div>
                    </center>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Result;