class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision';
		const subtitle = 'Let the computer choose!' 
		const options = ['one', 'two', 'three'];
		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		)
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h1>{this.props.subtitle}</h1>
			</div>
		);
	}
}

class Action extends React.Component {
	handlePick() {
		alert('pick');
	}
	render() {
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		)
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props)
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}
	handleRemoveAll() {
		console.log(this.props.options);
	}	
	render() {
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
				{
					this.props.options.map((option) => <Option key={option} option={option}/>)
				}	
			</div>
		)
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.option}
			</div>
		)
	}
}

class AddOption extends React.Component {
	handleAddOption(event) {
		event.preventDefault();
		const option = event.target.elements.option.value;
		if (option) {
			alert('added');
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
				<input type="text" name="option"/>
				<button>Add Option</button>
				</form>
			</div>
		)
	}
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))
