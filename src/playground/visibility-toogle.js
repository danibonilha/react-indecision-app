class VisibilityToogle extends React.Component {
	constructor(props) {
		super(props)
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			title: 'Visibility Toggle',
			visibility: false,
			detailsText: "My details paragraph"
		}
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}
	render() {
		return (
			<div>
				<Header title={this.state.title} />
				<Button
					click={this.handleToggleVisibility}
					buttonName={
						this.state.visibility ? 'Hide Details' : 'Show Details'
					}
				/>
				{this.state.visibility && <Details text={this.state.detailsText} />}
			</div>
		);
	}

}
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}
class Button extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.click}>{this.props.buttonName}</button>
			</div>
		);
	}
}
class Details extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToogle />, document.getElementById('app'));
