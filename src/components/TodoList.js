import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            list: [],
        };
    }

    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput,
            };
            const list = [...this.state.list];
            list.push(userInput);
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    deleteItem(key) {
        const list = this.state.list.filter((item) => item.id !== key);
        this.setState({ list });
    }

    editItem(index) {
        const todos = [...this.state.list];
        const editedTodo = prompt("Edit the todo:");
        if (editedTodo !== null && editedTodo.trim() !== "") {
            todos[index].value = editedTodo;
            this.setState({ list: todos });
        }
    }

    render() {
        return (
            
            <Container className="todolist-container">
                {/* 標題 */}
                <Row>
                    <Col>
                        <h2 className="todolist-header">Today Todo List</h2>
                    </Col>
                </Row>
                {/* 輸入框與按鈕 */}
                <Row>
                    <Col>
                        <InputGroup className="input-group">
                            <FormControl
                                placeholder="Add a new task..."
                                value={this.state.userInput}
                                onChange={(e) => this.updateInput(e.target.value)}
                            />
                            <Button onClick={() => this.addItem()} variant="success">
                                Add
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>

                {/* Todo List */}
                <Row>
                    <Col>
                        <ListGroup>
                            {this.state.list.map((item, index) => (
                                <ListGroup.Item
                                    key={item.id}
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    {item.value}
                                    <div>
                                        <Button
                                            variant="danger"
                                            className="mr-2"
                                            onClick={() => this.deleteItem(item.id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="info"
                                            onClick={() => this.editItem(index)}
                                        >
                                            Edit
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TodoList;
