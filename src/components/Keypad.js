// Code Keypad Component Here

function Keypad() {

    function reportChange() {
        console.log('Entering password...');
    }

    return (
        <>
            <input type="password" onChange={reportChange}></input>
        </>
    )
}

export default Keypad;