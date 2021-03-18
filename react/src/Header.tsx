import React from "react"

export const Header = () => {
    const [name, setName] = React.useState("Test User")
    const [changeName, setChangeName] = React.useState("")
    return (<header className={"header"}>
        <label>Current User: {name}</label>
        <input value={changeName} onChange={(ev) => {
            ev.preventDefault();
            setChangeName(ev.target.value)
        }} />
        <button onClick={(ev) => {
            setName(changeName)
        }}>
            Name aendern
    </button>

    </header>)
}