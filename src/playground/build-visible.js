const appRoot = document.getElementById('app');
let details = <p>My detals paragraph</p>;
let visibility = false;

const onToogle = () => {
   visibility = !visibility
	render();
}

const render = () => {
	const app = {
		title: 'Visibility Toggle'    
	 }
	const template = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={onToogle}>{ visibility ? 'Hide Details' : 'Show Details'}</button>
			{visibility && <p>My detals paragraph</p> }
		</div>
	)    
	ReactDOM.render(template, appRoot);
}

render();