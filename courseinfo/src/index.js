import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {

	return (
		<h1>{props.title}</h1>
	)
}

const Part = (props) => {
	
	return (
		<div>
			<p>
				{props.part} {props.exercise}
			</p>
		</div>
	)	
}

const Content = (props) => {

	return (
		<div>
      		<Part part={props.p1} exercise={props.ex1} />
			<Part part={props.p2} exercise={props.ex2} />
			<Part part={props.p3} exercise={props.ex3} />
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
      		<p>
				Number of exercises {props.ex1 + props.ex2 + props.ex3}
			</p>
		</div>
	)
}

const App = () => {
	
	const title= 'Half Stack application development'
  	const part1 = 'Fundamentals of React'
  	const exercises1 = 10
  	const part2 = 'Using props to pass data'
  	const exercises2 = 7
  	const part3 = 'State of a component'
  	const exercises3 = 14

  	return (
    	<div>
      		<Header title={title} />
	  		<Content 
				p1={part1} ex1={exercises1} 
				p2={part2} ex2={exercises2}
				p3={part3} ex3={exercises3}
			/>
	  		<Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    	</div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

