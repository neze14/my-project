import React, { useState } from 'react'; // This line imports React and useState from  react for use in the codes below

const SMS = () => { // This line sets the function Email as a constant which can be used. In this case it is exported for use in App.js
    const QRCode = require('qrcode.react'); 

    const [num, setNum] = useState(''); // Declares a new state varuable called 'num'. This adds React state to the function's components.
    const [message, setMessage] = useState(''); // Declares a new state varuable called 'message'.
    const [hide, setHide] = useState('no'); // Declares a new state varuable called 'hide'.

    // This function sets mail to display the value as it is being typed.
    const ShowNum = (event) => {
        setNum(event.target.value)
    }

    // This function sets mail to display the value as it is being typed.
    const ShowMessage = (event) => {
        setMessage(event.target.value)
    }

    // This function changes the value of 'hide' when it is called.
    const GenerateCode = () => {
        if (hide === "no") {
            setHide("")
        }
    }

    return (
        <div>
            {/**For SMS */}

            <div class="tile is-parent">
                <article class="tile is-child notification is-info has-background-danger-dark">
                    <p class="title">SMS Generator</p>
                    <p class="subtitle">...create your own!</p>
                    <figure class="image is-3by3">
                        <div>
                            <QRCode hidden={hide} value={`SMS:${num}:${message}`} size={256} />
                        </div>
                    </figure>

                    <div className="field">
                        <label className="label">Phone Number</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Number" onInput={ShowNum} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Body</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Type Message" onInput={ShowMessage}></textarea>
                        </div>
                    </div>

                    <div>
                        <button class="button is-info is-rounded" onClick={GenerateCode}> Generate </button>
                    </div>
                </article>
            </div>

        </div>

    )
}

export default SMS; // This exports the function SMS for use in App.js