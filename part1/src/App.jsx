const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	return (
		<p>
			{props.name} {props.exercises}
		</p>
	);
};

const Content = (props) => {
	return (
		<>
			<Part
				name={props.courseContent1.name}
				exercises={props.courseContent1.exercises}
			/>

			<Part
				name={props.courseContent2.name}
				exercises={props.courseContent2.exercises}
			/>

			<Part
				name={props.courseContent3.name}
				exercises={props.courseContent3.exercises}
			/>
		</>
	);
};

const Total = (props) => {
	return (
		<p>
			Number of exercises{" "}
			{props.part1Exercises + props.part2Exercises + props.part3Exercises}
		</p>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<div>
			<Header course={course} />
			<Content
				courseContent1={part1}
				courseContent2={part2}
				courseContent3={part3}
			/>
			<Total
				part1Exercises={part1.exercises}
				part2Exercises={part2.exercises}
				part3Exercises={part3.exercises}
			/>
		</div>
	);
};

export default App;
