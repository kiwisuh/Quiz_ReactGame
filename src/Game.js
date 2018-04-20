import React from 'react'
import data from './data/quiz.json';
import Question from './Question'
import './Game.css';

export default class Quiz extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        quiz: {},
        index: 0,
        category: "",
        answers: []
      }
  }

  componentDidMount() {
    //collect all the data
    this.setState({quiz: data})
  }

  handleAnswerSelected(event) {
    //adding values to the answers
    let list = [...this.state.answers.slice(0, this.state.index),
      parseInt(event.target.attributes.getNamedItem('value').value),
      ...this.state.answers.slice(this.state.index + 1)]
    this.setState({'answers': list})
    //if current question is less than the total number of questions then index = index + 1
    if (this.state.index < this.state.quiz.questions.length) {
      this.setState({'index': this.state.index + 1})
    } else {
    //else add up all the points and set score to total points
      let score = 0
      this.state.answers.map((answer, i) => (
        score = score + this.state.quiz.questions[i].answers[answer].point
      ))
      this.setState({'score': score})
    }
  }

  render() {
    const {
      quiz, index
    } = this.state
    //checking to see if user completed
    let completed = false;
    if(quiz.questions && (index === quiz.questions.length))
      completed = true;

     //checking to see number of questions
     let numberOfQuestions = 10;
    if(quiz.questions && (index === quiz.questions.length))
      numberOfQuestions = 0;

    //adding score
    let score = 0
    if (completed) {
      this.state.answers.map((answer, i) => (
        score = score + this.state.quiz.questions[i].answers[answer].point
      ))
    }
    return (
      <div className = "GameContainer">
        {completed ?
          <div>
            <h2>Results: </h2>
            {this.state.answers.map((answer, i) =>(
                this.state.quiz.questions[i].answers[answer].label === quiz.questions[i].correctAnswer ? <p id='green'>{quiz.questions[i].question}</p> : <p id='red'>{quiz.questions[i].question}</p>
            ))}
            <h2>Your score is {score}</h2>
          </div>
        :
          <div>
          <h2>Question {index + 1} of {numberOfQuestions}</h2>
          {quiz.questions && index < numberOfQuestions ?
            <Question
              question={quiz.questions[index]}
              index={index}
              onAnswerSelected={(event) => this.handleAnswerSelected(event)}
            />
          : ''}
          </div>
        }
      </div>
    )
  }
}
