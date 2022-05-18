// Code Keypad Component Here
import React from "react";

function Keypad() {

    function inputPassword(e) {
        console.log("Entering password...");
    }

    return (
        <input type="password" onChange={inputPassword}></input>
    );
}


export default Keypad;