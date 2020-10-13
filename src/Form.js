import React,{useState,useEffect} from "react";

export function Form () {
    const [form,setForm] = useState({
        id: 0,
        content: ""
    })
    const changeHandler = evt => {
        evt.persist()
        setForm(prev=>{
            return {
                ...prev,
                content: evt.target.value
            }
        })
    }

    const buttonHandler = evt => {
        evt.preventDefault()
        setForm(prev=>{
            return {
                ...prev,
                id: form.id++,
                content: ""
            }
        })
        fetch('http://localhost:7777/notes', {
            method:'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <form onSubmit={buttonHandler}>
            <label htmlFor="note">New Note</label>
            <input id="note" name="note" type="text" value={form.content} onChange={changeHandler}></input>
            <button type="submit">Add</button>
        </form>
    )
}