// COMPONENT
// 1. must be a function, name start with great letter
// 2. return html tag
// 3. inside .jsx (react type) file
// 4. you can call your components in html code of other components/App.js file

import { useState } from "react";

// label, disabled -> props (function arguments)

export const ExampleButton = ({label, disabled}) => {

    // here -> js code
    const [someState, setSomeState] = useState(""); //state -> "reactive" part, will rerrender parts of page only -> need to be always set with setter, [state, setState] -> setState(new state)
    const onClick = () => {
        if(!someState) {
        setSomeState(" This is setting state, so button will change on click with this text :P")
        }
        else {
            setSomeState("")
        }
    }

    // here (inside return) -> html code with js code inside {}
    return (
    <div>
        <button disabled={disabled} onClick={onClick}>{label + someState}</button>
    </div>);

}