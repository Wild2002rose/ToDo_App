import { Component } from "react";
import { Container } from "react-bootstrap";

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            userDate: "",
            list: []
        };
    }

    updateInfo(value, date) {
        this.setState({
            userInput: value !== undefined ? value : this.state.userInput,
            userDate: date !== undefined ? date : this.state.userDate,
        });
    }

    addItem() {
        if (this.state.userInput !== "" && this.state.userDate !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput,
                date: this.state.userDate
            };

            const list = [...this.state.list];
            list.push(userInput);

            this.setState({
                list,
                userDate: "",
                userInput: ""
            });
        }
    }

    delItem(key) {
        const list = [...this.state.list];
        const updateList = list.filter((item) => item.id !== key);
        this.setState({ list: updateList });
    }
    
    formatDate(date) {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    }

    render() {
        return (
            <Container>
                <center>
                    <h1 className="app-name">TODO LIST</h1>

                    <div className="container text-center">
                        <div className="row add-todo">
                            <div className="col">
                                <input
                                    type="text"
                                    placeholder="Enter your Todo"
                                    value={this.state.userInput}
                                    onChange={(item) => this.updateInfo(item.target.value)}
                                />
                            </div>
                            <div className="col-md-auto">
                                <input
                                    type="date"
                                    className="input-date"
                                    value={this.state.userDate}
                                    onChange={(item) => this.updateInfo(undefined, item.target.value)}
                                />
                            </div>
                            <div className="col col-lg-2">
                                <button
                                    type="button"
                                    className="btn btn-info npButton"
                                    onClick={() => this.addItem()}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        <hr />

                        {this.state.list.map((item) => (
                            <div key={item.id} className="row items">
                                <div className="col">{item.value}</div>
                                <div className="col-md-auto" >{this.formatDate(item.date)}</div>
                                <div className="col col-lg-2">
                                    <button
                                        type="button"
                                        className="btn btn-danger npButton"
                                        onClick={() => this.delItem(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </center>
            </Container>
        );
    }
}

export default Add;
