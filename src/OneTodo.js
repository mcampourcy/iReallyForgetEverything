import React from "react";

export default class OneTodo extends React.Component {
    constructor(props){
        super();
        this.props = props;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.updateTodo(this.props.thisTodo.id);
    }

    render() {
        let checkIcon = this.props.thisTodo.isDone ? "fa fa-check-square-o" : "fa fa-square-o";
        let checkTitle = this.props.thisTodo.isDone ? "Check this task" : "Uncheck this task";
        return (
            <p>
                <i onClick={this.handleClick} className={checkIcon} aria-hidden="true" title={checkTitle}></i>
                {this.props.thisTodo.name}
                <i className="fa fa-times" onClick="" aria-hidden="true" title="Delete this todo"></i>
            </p>
        )
    }
}