import "./App.css";
import { Component } from "react";
import { UserClass, UserFunction, UserChildren } from "./user";
import Komponenta from "./Komponenta";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { name: "Ivan", years: 30 },
                { name: "Marko", years: 35 },
                { name: "Ana", years: 25 },
            ],
            count: 0,
            tekst: "Proizvoljan tekst",
        };
    }

    uvecajGodine = () => {
        //koristite map funkciju za iterirat po state
        const newUsers = this.state.users.map((user) => {
            return { ...user, years: user.years + 1 };
        });

        this.setState({ users: newUsers });
    };

    uvecaj = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        const { users, tekst } = this.state;
        return (
            <>
                <p>Count: {this.state.count}</p>
                <Komponenta uvecaj={this.uvecaj} />
            </>
        );
    }
}

export default App;
