import React, { useState } from 'react'

export default function LextForm(params) {
    const [text, setText] = useState('Enter text to Capitalize');
    const [wpm, setwpm] = useState(125)
    const [btnsty, setbtnsty] = useState({
        margin: '3px'
    })
    function handleClick() {
        console.log('clicked button')
        setText(text.toUpperCase())
        params.setAlerts('success', 'Converted to upper case')
    }

    function loweriseclick() {
        setText(text.toLowerCase())
        params.setAlerts('success', 'Converted to lower case')
    }
    function handlechange(events) {
        console.log('handling change')
        setText(events.target.value)
    }
    function clickchange(events) {
        console.log('set wpm')
        setwpm(events.target.value)

    }
    function wordcounter(textstr) {
        return textstr.split(/\s+/).filter(function (n) { return n != '' }).length

    }
    function charactercont(textstr) {
        var count = 0
        textstr = textstr.split(' ').filter(function (n) { return n != '' })
        for (let word in textstr) {
            count += textstr[word].length
        }
        return count
    }
    function spaceclick() {
        var temp = spaceremover(text)
        setText(temp)
        console.log(temp)
        params.setAlerts('success', 'Extra Space Removed')
    }
    function spaceremover(textstr) {
        textstr = textstr.split(' ').filter(function (n) { return n != '' })
        textstr = textstr.join(" ");
        return textstr
    }

    function clipclick() {
        clipboardcopy(text)
    }
    function clipboardcopy(textstr) {
        navigator.clipboard.writeText(textstr).then(() => {
            params.setAlerts('success', 'Copied to Clipboard')
        });
    }
    return (
        <>
            <label htmlFor="exampleFormControlTextarea1">{params.title}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handlechange}></textarea>
            <br />
            <div className="d-grid gap-6 d-md-block">
                <button disabled={text.length === 0} type="button" className={params.modes === 'light' ? 'btn btn-dark' : 'btn btn-light'} onClick={handleClick} style={btnsty}>Capitalize</button>
                <button disabled={text.length === 0} type="button" className={params.modes === 'light' ? 'btn btn-dark' : 'btn btn-light'} onClick={loweriseclick} style={btnsty}>Lowercase</button>
                <button disabled={text.length === 0} type="button" className={params.modes === 'light' ? 'btn btn-dark' : 'btn btn-light'} onClick={spaceclick} style={btnsty}>Space Remove</button>
                <button disabled={text.length === 0} type="button" className={params.modes === 'light' ? 'btn btn-dark' : 'btn btn-light'} onClick={clipclick} style={btnsty}>Copy To clipboard</button>
            </div>
            <br />
            <label htmlFor="exampleFormControlTextarea1">Type your Wpm</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={wpm} onChange={clickchange}></textarea>
            <p>{wordcounter(text)} Words and {charactercont(text)} Characters</p>
            <p>The text could be read in {(1 / wpm) * wordcounter(text)} Minutes</p>
            <h1>Preview Text</h1>
            <p>{text}</p>
        </>
    );
}