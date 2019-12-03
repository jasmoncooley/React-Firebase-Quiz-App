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
     
    next1(){
        if(this.state.don === null){
            browserHistory.push('/Quizes')
        }
        else{
            browserHistory.push('/Movies')
        }
    
       }

     next(){
        if(this.state.don === null){
            browserHistory.push('/Quizes')
        }
        else{
            browserHistory.push('/AttemtQuiz')
        }
    
       }


    render() {
        console.log(this.state.don)
        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>

                            <h1 ref="val">Quiz App</h1>

                            <Link to="/CreateQuiz"><RaisedButton primary={true} ><span style={style}>Create Quiz</span></RaisedButton></Link>
                            <RaisedButton onClick={this.next} type="submit" primary={true} style={{ margin: 12 }}><span style={style}>Attempt Quiz</span></RaisedButton>

                            <RaisedButton onClick={this.next1} type="submit" primary={true} style={{ margin: 12 }}><span style={style}>Movies</span></RaisedButton>


                            
                    


                        </div>
                    </center>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Start;