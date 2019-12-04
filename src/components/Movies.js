import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";
import { RaisedButton } from 'material-ui';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/done';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import data1 from '../questions.js';
import YoutubePlayer from 'react-youtube-player';

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

export default class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            donors: [],
            count: 0,
            Question: "",
            op1: "",
            op2: "",
            op3: "",
            op4: "",
            Ans: "",
            timer: 0,
            Title: "",
            Totalmarks: "",
            TotalQuestion: "",
            score: 0,
            TotalTime: ""

        }
        this.loadQuestion = this.loadQuestion.bind(this);
        // this.time = this.time.bind(this);
    }

    loadQuestion() {
        var radios = document.getElementsByName('shipSpeed');
        console.log(radios);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                console.log(radios[i].value)
                if (this.state.Ans === radios[i].value) {
                    firebase.database().ref('UserInfo/'+firebase.auth().currentUser.uid+'/Quizzes/Score').on('value', (data) => {
                        console.log(typeof data.val())
                        this.state.score = parseInt(data.val())
                    })
                    console.log(typeof this.state.score);
                    this.state.score = this.state.score +5;
                    console.log(this.state.score);
                }
                else {
                    console.log("bad")
                }
                break;
            }

        }
        firebase.database().ref("UserInfo/"+firebase.auth().currentUser.uid+"/Quizzes/Score").set(this.state.score)

        setTimeout(() => {
            console.log(this.state.score);
            firebase.database().ref("Score/S").set(this.state.score + "%")

        }, 500)

        let a = this.state.count + 1
        this.setState({ count: a })
        if(!this.state.donors[a]){
           browserHistory.push('/result')

       }
       else{
        let Question = this.state.donors[a].Question;
        let op1 = this.state.donors[a].op1;
        let op2 = this.state.donors[a].op2;
        let op3 = this.state.donors[a].op3;
        let op4 = this.state.donors[a].op4;
        let Ans = this.state.donors[a].Answer;
        
        // let ans = this.state.donors[a].Answer;
        this.setState({
            Question: Question,
            op1: op1,
            op2: op2,
            op3: op3,
            op4: op4,
            Ans: Ans
        })
    }

}
timer = () => {

    var min = this.state.TotalTime
    var sec = 0;
    console.log(min)

    setInterval(() => {
        var time;
            // if (min < 10 && sec < 10) {
            //     time = "0" + min + ":" + "0" + sec;
            // }
            // if (min < 10) {
            //     time = "0" + min + ":" + sec;
            // }
            // if (sec < 10) {
            //     time = min + ":" + "0" + sec;
            // }
            if (sec == "0") {
                min--;
                sec = 60;
            }
            if (min == "0" && sec == "1") {
                time = "Time Out"
                browserHistory.push('/result')
            }

            else { time = min + ":" + sec; }

            sec--;


            this.setState({
                timer: time,
            })
        }, 1000)
}

componentWillMount() {

    var don = [];

    firebase.database().ref('Quiz Question/').on('value', (data) => {
        let obj = data.val();
            // console.log(obj);
            for (var prop in obj) {
                don.push(obj[prop]);
                // console.log(don);
                this.setState({
                    donors: don
                })
            }
        })
    firebase.database().ref('UserInfo/').on('value', (data) => {
        let obj = data.val();
        console.log(obj.Title)
        console.log(data1['Questions']['Movies']['Quiz1']);
        this.setState({
            Title: 'Movies',
            Totalmarks: obj.Totalmarks,
            TotalQuestion: obj.TotalQuestion,
            TotalTime: '5'
        })
        this.timer()

    })
    firebase.database().ref('UserInfo/').on('value', (data) => {
        let ques = [];
        let obj = data.val();
            // console.log(obj.op1)
            for (var prop in obj) {
                
                ques.push(obj[prop]);
                console.log(ques);
                // console.log(don);
            }
            var quesData = [];
            for (var i =1; i <= 6; i++){
                // var rec = {Question: "Questions" + i};
                var rec = Math.round(Math.random() * 5);
                console.log(typeof rec);
            }
            // do {
            //     Question += "new question" + que;
            //     que++;
            // }
            // while (que < 5) {
                const que = 'Question'+ rec;
                console.log(que);
                let Question = data1['Questions']['Movies']['Quiz1'][que]['Question'];
                let op1 = data1['Questions']['Movies']['Quiz1'][que]['Answer'];
                let op2 = data1['Questions']['Movies']['Quiz1'][que]['Answer3'];
                let op3 = data1['Questions']['Movies']['Quiz1'][que]['Answer2'];
                let op4 = data1['Questions']['Movies']['Quiz1'][que]['Answer4'];
                let Ans = data1['Questions']['Movies']['Quiz1'][que]['Correct Answer'];
            // }
            // let ans = ques[0].Answer;
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




render() {
        // console.log(this.state.TotalTime);
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
                                videoId='48l92b0XxW4'
                                playbackState='playing'

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
            )
    }
}
