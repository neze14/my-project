import React, { useState } from 'react'; // This line imports React and useState from  react for use in the codes below

const URL = () => {
    const QRCode = require('qrcode.react'); 

    const [url, setUrl] = useState(''); // Declares a new state varuable called 'url'. This adds React state to the function's components.
    const [hide, setHide] = useState('no'); // Declares a new state varuable called 'hide'.

    // This function sets url to display the value as it is being typed.
    const ShowURL = (event) => { 
        setUrl(event.target.value)
    }

    // This function changes the value of 'hide' when it is called.
    const GenerateCode = () => {
        if (hide === "no") {
            setHide("")
        }
    }

    return (
        <div>
            {/**For URL */}

            {/**This give the component a style when called in App.ts */}
            <div class="tile is-parent">
                <article class="tile is-child notification is-info has-background-danger-dark">
                    <p class="title">URL Generator</p>
                    <p class="subtitle">...create your own!</p>
                    <figure class="image is-3by3">
                        <div>
                            {/** This sets the qr code to display with the colour black */}
                            <QRCode hidden={hide} value={url} size={256} fgColor="black" />
                        </div>
                    </figure>

                    {/** This sets the qr code to display with the colour black */}
                    <div className="field">
                        <label className="label">URL</label>
                        <div className="control">
                            <input className="input is-link" type="text" placeholder="Link input" onInput={ShowURL} />
                        </div>
                    </div>

                    {/** This button shows the QR code that has been generated */}
                    <div>
                        <button class="button is-info is-rounded" onClick={GenerateCode}> Generate </button>
                    </div>
                </article>
            </div>

        </div>

    )
}

export default URL; // This exports the function URL for use in App.js