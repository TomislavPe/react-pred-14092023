import "./App.css";
import { useState } from "react";
import { UserClass, UserFunction, UserChildren } from "./user";

export default function App() {
    const initialUsers = [
        { name: "Ivan", years: 30 },
        { name: "Marko", years: 35 },
        { name: "Ana", years: 25 },
    ];
    const tekst = "Proizvoljan tekst";

    const [users, setUsers] = useState(initialUsers);

    const uvecajGodine = () => {
        //koristite map funkciju za iterirat po state
        const newUsers = users.map((user) => {
            return { ...user, years: user.years + 1 };
        });

        setUsers(newUsers);
    };

    return (
        <>
            <h1>State</h1>
            <UserClass name={users[0].name} years={users[0].years} />
            <UserFunction name={users[1].name} years={users[1].years} />
            <UserChildren name={users[2].name} years={users[2].years}>
                <button onClick={uvecajGodine}>Uvecaj godine</button>
                {tekst}
            </UserChildren>
        </>
    );
}
