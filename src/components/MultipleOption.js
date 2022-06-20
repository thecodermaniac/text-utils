import React from 'react'
import Textform from './components/TextForm'

export default function MultipleOption(params) {
    return (
        <>
            <label htmlFor="exampleFormControlSelect2">{params.title}</label>
            <select multiple className="form-control" id="exampleFormControlSelect2">
                <option>100</option>
                <option>125</option>
                <option>200</option>
                <option>300</option>
                <option onClick={Textform.handleClick}>400</option>
            </select>
        </>
    )

}