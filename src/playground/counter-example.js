class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}
	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count} </h1>
				<Button click={this.handleAddOne} title="+1"/>
				<Button click={this.handleMinusOne} title="-1"/>
				<Button click={this.handleReset} title="reset"/>
			</div>
		);
	}
}

class Button extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.click}>{this.props.title}</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));
