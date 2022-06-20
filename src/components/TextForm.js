import React, { useState } from 'react'

export default function LextForm(params) {
    const [text, setText] = useState('Enter text to Capitalize');
    const [wpm, setwpm] = useState(125)
    function handleClick() {
        console.log('clicked button')
        setText(text.toUpperCase())
    }

    function handlechange(events) {
        console.log('handling change')
        setText(events.target.value)
    }
    function clickchange(events) {
        console.log('set wpm')
        setwpm(events.target.value)
    }
    return (
        <>
            <label htmlFor="exampleFormControlTextarea1">{params.title}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handlechange}></textarea>
            <br />
            <button type="button" className="btn btn-dark" onClick={handleClick}>Capitalize</button>
            <br />
            <label htmlFor="exampleFormControlTextarea1">Type your Wpm</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={wpm} onChange={clickchange}></textarea>
            <p>{text.split(' ').length} Words and {text.length} Characters</p>
            <p>The text could be read in {(60 / wpm) * text.split(' ').length} Minutes</p>
        </>
    );
}