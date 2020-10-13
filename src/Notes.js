import React from 'react'

export class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notes:[]}
        this.updateButton = this.updateButton.bind(this)
        this.deleteButton = this.deleteButton.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:7777/notes')
            .then(response=> response.json())
            .then(json=>this.setState({notes: json}))
    }

    updateButton(evt) {
        evt.preventDefault()
        fetch('http://localhost:7777/notes')
            .then(response=> response.json())
            .then(json=>this.setState({notes: json}))
    }

    deleteButton(evt){
        evt.preventDefault()
        console.log(evt.target.value)
     }

     render(){
        console.log(this.state)
        const {notes} = this.state
        return <div>
            {notes.map((note, i)=>
                <div key={i}>{note.content}
                <button type="submit" onSubmit={this.deleteButton}>Delete</button>
                </div>)}
                <button type="submit" onSubmit={this.updateButton}>Update</button>
        </div>
    }
}