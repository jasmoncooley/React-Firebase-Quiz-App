import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";
import { Link } from 'react-router'
import { RaisedButton } from 'material-ui';





class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Score: "",
            username:""

        }  
    }

     componentWillMount() {

        firebase.database().ref('UserInfo/'+firebase.auth().currentUser.uid+'/Quizzes/Score').on('value', (data) => {
            console.log(data.val())
            this.state.Score= data.val()
            // this.setState({
            //     Score: data.val()
            // })
        })
        firebase.database().ref('UserInfo/'+firebase.auth().currentUser.uid+'/username').on('value', (data) => {
            console.log(data.val())
        
            this.setState({
                username: data.val()
            })
        })
        firebase.database().ref('UserInfo/Max_Score').on('value',(data)=>{
            console.log(data.val())
        })
    }
   
    // computeLeaderboard(){
    //     var dict = {}
    //     dict[this.state.username] = this.state.Score;
    //     if (dict[this.state.username]>maxScore){
    //         updateSingleData(maxScore){
    //         }
    //     }

        // updateSingleData(maxScore){
        //     firebase.database().ref('/').update({
        //         maxScore,
        //     });
        // }
        // var max=0
        // var i=0
        // var top = [];
        // for (var key in dict){
        //     if(dict[key]>max){
        //         top[i]=dict[key]
        //         i=i+1
        //     }
        //}




    render() {
      
        return (
            <div>
                <MuiThemeProvider>
                    <center>
                        <div>

                            <h1><font color="#ff2e97">Quiz Finished</font></h1>
                            <h1><font color="#ff2e97">Your Score {this.state.Score}</font></h1>

                                <div>
                                    <h1><font color="#ff2e97">{this.state.username} {this.state.Score}</font></h1>
                                    <Link to="/Leaderboard"><RaisedButton primary={false} style={{ fontSize: 32}} backgroundColor='#ff2e97' ><span style={{margin: 52}}>Leaderboard</span></RaisedButton></Link>
                                </div>    

                           
                        </div>
                    </center>
                </MuiThemeProvider>
            </div>
        )
    }
    
}
export default Result;