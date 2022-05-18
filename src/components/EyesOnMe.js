// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function focusButton() {
        console.log("Good!");
    }

    function blurButton() {
        console.log("Hey! Eyes on me!");
    }

    return <button onFocus={focusButton} onBlur={blurButton}>Eyes on me</button>
}

export default EyesOnMe;