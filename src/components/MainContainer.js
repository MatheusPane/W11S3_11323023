import React from 'react';

export default class MainContainer extends React.Component {
	state = {
		title: 'This is the Title',
		showTitle: true,
		buttonText: 'Hide'
	};

	hide = () => {
		this.setState({
			showTitle: !this.state.showTitle,
			buttonText: this.state.showTitle ? 'Show' : 'Hide'
		});
	};

	changeTitle = (e) => {
		this.setState({
			title: e.target.value
		});
	};

	deleteTitle = () => {
		this.setState({
			title: '',
			buttonText: 'Show'
		});
	};

	toggleButton = () => {
		this.setState({
			buttonText: this.state.buttonText === 'Show' ? 'Hide' : 'Show'
		});
	};

	resetTitle = () => {
		this.setState({
			title: 'This is the Title'
		});
	};

	render() {
		return (
			<div id='title'>
  {this.state.showTitle && (
    <div>
      <h1>{this.state.title}</h1>
      <input
        placeholder='Change the title'
        value={this.state.title}
        onChange={this.changeTitle}
      />
      <div className='buttons-container'>
        <button onClick={this.deleteTitle}>Delete Title</button>
        <button onClick={this.resetTitle}>Reset Title</button>
        <button onClick={this.toggleButton}>Toggle Button Text</button>
      </div>
    </div>
  )}
  <button onClick={this.hide}>{this.state.buttonText}</button>
</div>

		);
	}
}
