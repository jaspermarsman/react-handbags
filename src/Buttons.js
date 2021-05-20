import React from "react";

function Buttons(props) {
    return (
        <>
            <button
                onClick={() => console.log(props.content)}
                disabled={props.disabled}>
                {props.content}
            </button>
        </>
    );
}

export default Buttons;