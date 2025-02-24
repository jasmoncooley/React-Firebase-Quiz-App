import React, { Component } from 'react';
import './App.css';
import { Router, Route, IndexRoute, browserHistory, } from 'react-router'
import home from './containers/home'
import Login from './components/login'
import Signup from './components/signup'
import Start from './components/Start'
import Bar from './components/appbar'
import CreatQuiz from './components/CreatQuiz'
import AttemtQuiz from './components/AttemtQuiz'
import CreateQuestion from './components/CreateQuestion'
import Quizes from './components/Quizes'
import Music from './components/Music'
import Result from './components/result'
import Movies from './components/Movies'
import UserGenerated from './components/UserGenerated'



class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Bar}>
                    <IndexRoute component={home} />
                    <Route path="signup" component={Signup} />
                    <Route path="login" component={Login} />
                    <Route path="Start" component={Start} />
                    <Route path="CreatQuiz" component={CreatQuiz} />
                    <Route path="AttemtQuiz" component={AttemtQuiz} />
                    <Route path="CreateQuestion" component={CreateQuestion} />
                    <Route path="Quizes" component={Quizes} />
                    <Route path="result" component={Result} />
                    <Route path="Movies" component={Movies} />
                    <Route path="Music" component={Music} />
                    <Route path="UserGenerated" component={UserGenerated} />
                </Route>
            </Router>
        )
    }
}

export default App;
