import React from "react";
import ReactDOM from "react-dom";
import OneTodo from "./OneTodo.js";
import AddOneTodo from "./AddOneTodo.js";

/**
 * We create the component that will show the list of todos
 * The constructor takes the list of todos in parameters
 */
// Component (doesn't contain logic)
class ListTodo extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    };

    render() {
        let rows = this.props.todoList.map((todo, id) => {
            return <OneTodo thisTodo={todo} key={id}
                            updateTodo={ key => this.props.updateTodo(key) }/>
        });

        return (
            <div id="taskList">
                <div className="text-right">
                    <AddOneTodo/>
                </div>
                {rows}
            </div>
        );
    }
}

//Container (have logic)
class PageView extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: [
                {id: 0, name: "Task n°1", isDone: false},
                {id: 1, name: "Task n°2", isDone: true},
                {id: 2, name: "Task n°3", isDone: false},
            ]
        }
    }

    updateTodo(key) {
        var stateCopy = Object.assign({}, this.state);
        stateCopy.todoList = stateCopy.todoList.slice();
        stateCopy.todoList[key] = Object.assign({}, stateCopy.todoList[key]);
        stateCopy.todoList[key].isDone = stateCopy.todoList[key].isDone ? false : true;
        this.setState(stateCopy);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3 content">
                    <h1>I really forget everything</h1>
                    <h2>so I make lists</h2>
                    <ListTodo todoList={this.state.todoList}
                              updateTodo={ key => this.updateTodo(key) }/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <PageView/>,
    document.getElementById("app")
);
