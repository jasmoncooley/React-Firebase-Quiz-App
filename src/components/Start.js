import React from 'react';
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import { browserHistory } from 'react-router'
import * as firebase from "firebase";


const style = {
   color: "white",
  
};
class Start extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         don: {},
         
         
        


     }
        this.next = this.next.bind(this);
    }
    componentWillMount() {
        firebase.database().ref('QuizDetail/' ).on('value', (data) => {
        let obj = data.val();
            console.log(obj)
            this.setState({
                don: obj
            })
            
          
    })
    }

     next(){
            browserHistory.push('/Quizes')
        
    
       }


    render() {
        console.log(this.state.don)
        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>

                            <h1 ref="val"><font color="#ff2e97">Quiz App</font></h1>

                            <Link to="/CreateQuiz"><RaisedButton primary={false} style={{ fontSize: 50}} backgroundColor='#ff2e97' ><span style={style}>Create Quiz</span></RaisedButton></Link>
                            <RaisedButton onClick={this.next} type="submit" primary={false} style={{ margin: 12 }} backgroundColor='#ff2e97' ><span style={style}>Attempt Quiz</span></RaisedButton>

                        </div>
                    </center>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Start;