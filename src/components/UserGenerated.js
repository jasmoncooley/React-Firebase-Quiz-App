import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";
import { RaisedButton } from 'material-ui';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/done';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const style1 = {
    float: "right",
    padding: "0px 20px 0px 20px"

};
const style = {
    color: "green",
    fontSize: "20px",
    fontFamily: "Comic Sans MS"

};
const style7 = {
    color: "#444",
    fontFamily: "Comic Sans MS"

};
const style2 = {
    margin: "20px 0px 0px 0px",
    background: "#444",
    padding: "30px",
    color: "#fff",
    fontSize: "20px",
    fontFamily: "Comic Sans MS"

};
const style3 = {
    border: "2px solid #00cccc",
    padding: "0px 5px 0px 5px"
};
const style5 = {
    height: "800%",
    width: "50%",
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};
const stylee = {
    marginLeft: "80%",
    marginBottom: "3%",
};
const styles = {
    block: {
        maxWidth: 25,

    },
    radioButton: {
        marginBottom: 16,
        textAlign: "left",
        marginLeft: 30
    },
};


componentWillMount();   {
 
    var don = [];

     firebase.database().ref("UserInfo/"+firebase.auth().currentUser.uid+"/Quizzes/Score").on('value', (data) => {
         let obj = data.val();
            console.log(obj);
            for (var prop in obj) {
                don.push(obj[prop]);
                 // console.log(don);
                 this.setState({
                     donors: don
                 })
             }
         })
    firebase.database().ref('QuizDetail').on('value', (data) => {
         let obj = data.val();
         console.log(obj.Title)
         this.setState({
             Title: obj.Title,
             Totalmarks: obj.Totalmarks,
             TotalQuestion: obj.TotalQuestion,
             TotalTime: obj.Totaltime
         })
         this.timer()

     })
     firebase.database().ref('QuizQuestion/').on('value', (data) => {
         let ques = [];
         let obj = data.val();
             console.log(obj.op1)
             for (var prop in obj) {
                 ques.push(obj[prop]);
                  console.log(don);
             }
             console.log(ques[1].Question);
             let Question = ques[0].Question;
             let op1 = ques[0].op1;
             let op2 = ques[0].op2;
             let op3 = ques[0].op3;
             let op4 = ques[0].op4;
             let Ans = ques[0].Answer;

              let ans = ques[0].Answer;
             this.setState({
                 Question: Question,
                 op1: op1,
                 op2: op2,
                 op3: op3,
                 op4: op4,
                 Ans: Ans
             })

         })

}


render(); {
console.log(this.state.TotalTime);
    return (
        <div>
            <MuiThemeProvider>
                <div>
                    <center>
                        <Paper style={style5} zDepth={3}>
                            <h1 style={style7}>{this.state.Title} Quiz!</h1>
                            <span style={style}>{this.state.timer}</span>

                            <h4 style={style2}>{this.state.Question}</h4>

                            <br />
                            <br /><YoutubePlayer
                                videoId={this.state.ID}
                                playbackState='paused'

                                configuration={
                                    {

                                        showinfo: 0,
                                        controls: 0
                                    }
                                }
                            />
                            <div ref="val">
                                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                                    <RadioButton
                                        value={this.state.op1}
                                        label={this.state.op1}
                                        style={styles.radioButton}
                                        name="option"
                                    />

                                    <RadioButton
                                        value={this.state.op2}
                                        label={this.state.op2}
                                        style={styles.radioButton}
                                        name="option"
                                    />
                                    <RadioButton
                                        value={this.state.op3}
                                        label={this.state.op3}
                                        style={styles.radioButton}
                                        name="option"
                                    />
                                    <RadioButton
                                        value={this.state.op4}
                                        label={this.state.op4}
                                        style={styles.radioButton}
                                        name="option"
                                    />

                                </RadioButtonGroup>

                            </div>
                            <FloatingActionButton style={style} onClick={this.loadQuestion}>
                                <ContentAdd />
                            </FloatingActionButton>
                        </Paper>
                    </center>

                </div>
            </MuiThemeProvider>
        </div>
   // )
//}


