import React from 'react';

import Paper from 'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
    constructor(props, context){
        super(props, context);

        this.styles = {
            paper: {
                margin: '25px auto',
                padding: 7,
                overflow: 'hidden',
            },
            question: {
                textAlign: 'right',
            },
            answer: {
                width: '80%',
                float: 'right',
            }
        };
    }

    addAnswer(){
        let answer = this.refs.answer.getValue();
        if(answer) this.props.addAnswer(answer, this.props.index);
    }

    render(){
        return (
            <Paper style={this.styles.paper} zDepth={3}>
                <div style={this.styles.question}><big>{this.props.question}</big></div>
                <div style={this.styles.answer}>
                    <ReactCSSTransitionGroup transitionName="animatePaper" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {this.props.answers.map((answer, index)=>(
                        <div key={index}>
                            <Divider/>
                            <div>{answer}</div>
                       </div>     
                    )
                    )}
                    </ReactCSSTransitionGroup>
                    <Divider/>
                    <TextField style={{width:'100%'}}
                               hintText="Answer Field"
                               floatingLabelText="Your Answer"
                               multiLine={true}
                               ref = "answer"
                    />
                </div>
                <RaisedButton label="Add Answer" secondary={true} fullWidth={true} onClick={()=>this.addAnswer()}/>
            </Paper>
        );
    }
}