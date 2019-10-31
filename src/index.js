import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
    return (
        <div>
            <p>{props.name} {props.numberOfExercises}</p>
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )

}

const Content = (props) => {
    return (
        <div>
            <Part name={props.name1} numberOfExercises={props.numberOfExercises1}/>
            <Part name={props.name2} numberOfExercises={props.numberOfExercises2}/>
            <Part name={props.name3} numberOfExercises={props.numberOfExercises3}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.number1 + props.number2 + props.number3}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}/>
            <Content name1={part1} name2={part2} name3={part3} numberOfExercises1={exercises1}
                     numberOfExercises2={exercises2} numberOfExercises3={exercises3}/>
            <Total number1={exercises1} number2={exercises2} number3={exercises3}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
