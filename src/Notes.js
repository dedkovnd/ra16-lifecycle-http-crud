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
        const note = evt.target.previousSibling.innerText
        this.state.notes.forEach(res=> {
          if(res.content === note) {
              fetch(`http://localhost:7777/notes/${res.id}`, {
                  method:'DELETE'
              })
              fetch('http://localhost:7777/notes')
                  .then(response=> response.json())
                  .then(json=>this.setState({notes: json}))
          }
        })
        console.log(this.state)
    }

    render(){
        console.log(this.state)
        const {notes} = this.state
        return <div>
            {notes.map((note, i)=>
                <div key={i}>
                    <div>{note.content}</div>
                <button onClick={this.deleteButton}>Delete</button>
                </div>)}
                <button onClick={this.updateButton}>Update</button>
        </div>
    }
}