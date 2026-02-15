const Header = (props) => {
	console.log("Header props: ", props.course.name);

	return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
	console.log("Part props: ", props);

	return (
		<p>
			{props.name} {props.exercises}
		</p>
	);
};

const Content = (props) => {
	console.log(props);
	console.log(props.courseContent.parts[0].name);
	console.log(props.courseContent.parts[0].exercises);

	return (
		<>
			<Part
				name={props.courseContent.parts[0].name}
				exercises={props.courseContent.parts[0].exercises}
			/>
			<Part
				name={props.courseContent.parts[1].name}
				exercises={props.courseContent.parts[1].exercises}
			/>
			<Part
				name={props.courseContent.parts[2].name}
				exercises={props.courseContent.parts[2].exercises}
			/>
		</>
	);
};

const Total = (props) => {
	console.log("Total props: ", props);

	return (
		<p>
			Number of exercises{" "}
			{props.courseContent.parts[0].exercises +
				props.courseContent.parts[1].exercises +
				props.courseContent.parts[2].exercises}
		</p>
	);
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course} />
			<Content courseContent={course} />
			<Total courseContent={course} />
		</div>
	);
};

export default App;
