import React from 'react';

export default class AddOneTodo extends React.Component {

	constructor() {
		super();
		this.state = {
			isActive: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		let modal = document.getElementById('addModal');

		if(this.state.isActive) {
			modal.style.display = "none";
			this.state.isActive = false;
		} else {
			modal.style.display = "block";
			this.state.isActive = true;
		}

	}

	render() {
		return (
			<div>
				<a href="#addModal" className="btn btn-outline-info" onClick={this.handleClick} id="addTodo">
					<i className="fa fa-plus" aria-hidden="true"></i> Add a Todo
				</a>
				<div id="addModal" className="some-modal">
					<div className="some-modal-content">
						<span className="close" onClick={this.handleClick}>&times;</span>
						<form id="addForm">
							<div className="form-group">
								<label htmlFor="taskName">New Todo</label>
								<input type="text" className="form-control" id="taskName" name="taskName" placeholder="Todo : brush my unicorn's hair" />
							</div>
							<button type="submit" className="btn btn-success" id="addTask">Add</button>
						</form>
					</div>
				</div>
			</div>
		)
	}

}