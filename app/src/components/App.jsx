import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import Question from './Question';
import Filter from './Filter';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
	constructor(props, context){
		super(props, context);

		this.state = {
            QUESTIONS: window.QUESTIONS,
            filter: 0,
		};
		
		this.styles = {
			appBar: {
				position: 'fixed',
				top: 0,
			},
			wrap: {
				margin: '75px auto',
                width: '100%',
                maxWidth: 600,
			},
            questionField: {
                margin: '0 auto'
            }
		};
	}
    

	setFilter(filter){
		this.setState({
			filter
		})
	}
    
    addAnswer(answer, question){
        let QUESTIONS = this.state.QUESTIONS;
        QUESTIONS[question].answers.push(answer);
        this.setState({QUESTIONS});
    }

    addQuestion(){
        let question = this.refs.question.getValue();
        if(question) {
            let QUESTION = this.state.QUESTIONS;
            QUESTION.push({question, answers:[]});
            this.setState(QUESTION);
        }
    }

	render(){
        let filtredQuestions = this.state.QUESTIONS;
        if(this.state.filter !== 0){
            filtredQuestions = filtredQuestions.filter(question=>{
                if(this.state.filter === 1) return question.answers.length !== 0;
                if(this.state.filter === 2) return question.answers.length === 0;
            })
        }
		return (
			<div>
				<AppBar
                    style={this.styles.appBar}
                    title="Test"
                    showMenuIconButton={false}
                    iconElementRight={<Filter setFilter={(filter)=>this.setFilter(filter)}/>}
                />
                <div style={this.styles.wrap}>
                    <ReactCSSTransitionGroup transitionName="animatePaper" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {filtredQuestions.map((question, index)=>(
                            <Question key={index} index={index} question={question.question} answers={question.answers} addAnswer={(answer,question)=>this.addAnswer(answer,question)}/>
                        ))}
                    </ReactCSSTransitionGroup>
                    <TextField style={{width:'100%'}}
                               hintText="Question Field"
                               floatingLabelText="Your Question"
                               multiLine={true}
                               ref = "question"
                    />
                    <RaisedButton label="Add Question" secondary={true} fullWidth={true} onClick={()=>this.addQuestion()}/>
                </div>
			</div>
		);
	}
}