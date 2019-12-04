// import React from 'react';
//  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//  import * as firebase from "firebase";
//  import { Link } from 'react-router';
//  import { RaisedButton } from 'material-ui';
//  import { App } from 'material-ui';
//  import Paper from 'material-ui/Paper';
//  import { browserHistory } from 'react-router';
//  import FloatingActionButton from 'material-ui/FloatingActionButton';
//  import ContentAdd from 'material-ui/svg-icons/action/done';
//  import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
//  import ActionFavorite from 'material-ui/svg-icons/action/favorite';
//  import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


//  timer = () => {
 
//     var min = this.state.TotalTime
//     var sec = 0;
//     console.log(min)

//     setInterval(() => {
//         var time;
//             // if (min < 10 && sec < 10) {
//             //     time = "0" + min + ":" + "0" + sec;
//             // }
//             // if (min < 10) {
//             //     time = "0" + min + ":" + sec;
//             // }
//             // if (sec < 10) {
//             //     time = min + ":" + "0" + sec;
//             // }
//             if (sec == "0") {
//                 min--;
//                 sec = 60;
//             }
//             if (min == "0" && sec == "1") {
//                 time = "Time Out"
//                 browserHistory.push('/result')
//             }

//             else { time = min + ":" + sec; }

//             sec--;


//             this.setState({
//                 timer: time,
//             })
//         }, 1000)
// }

// //  componentWillMount() {

// //      var don = [];

// //       firebase.database().ref("UserInfo/"+firebase.auth().currentUser.uid+"/Quizzes/").on('value', (data) => {
// //           let obj = data.val();
// //              console.log(obj);
// //              for (var prop in obj) {
// //                  don.push(obj[prop]);
// //                   // console.log(don);
// //                   this.setState({
// //                       donors: don
// //                   })
// //               }
// //           })
// //      firebase.database().ref('QuizDetail').on('value', (data) => {
// //           let obj = data.val();
// //           console.log(obj.Title)
// //           this.setState({
// //               Title: obj.Title,
// //               Totalmarks: obj.Totalmarks,
// //               TotalQuestion: obj.TotalQuestion,
// //               TotalTime: obj.Totaltime
// //           })
// //           this.timer()

// //       })
// //       firebase.database().ref('QuizQuestion/').on('value', (data) => {
// //           let ques = [];
// //           let obj = data.val();
// //               console.log(obj.op1)
// //               for (var prop in obj) {
// //                   ques.push(obj[prop]);
// //                    console.log(don);
// //               }
// //               console.log(ques[1].Question);
// //               let Question = ques[0].Question;
// //               let op1 = ques[0].op1;
// //               let op2 = ques[0].op2;
// //               let op3 = ques[0].op3;
// //               let op4 = ques[0].op4;
// //               let Ans = ques[0].Answer;

// //                let ans = ques[0].Answer;
// //               this.setState({
// //                   Question: Question,
// //                   op1: op1,
// //                   op2: op2,
// //                   op3: op3,
// //                   op4: op4,
// //                   Ans: Ans
// //               })

// //           })

// //  }



