// Code EyesOnMe Component Here

function EyesOnMe() {

    function reportFocus() {
        console.log("Good!");
    }

    function reportBlur() {
        console.log("Hey! Eyes on me!");
    }

    return (
        <button onFocus={reportFocus} onBlur={reportBlur}>Eyes on me</button>
    );
}

export default EyesOnMe;