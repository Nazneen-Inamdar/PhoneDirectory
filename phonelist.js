import React, {Component} from 'react';
import "./phonebookdirectory.css ";
import phonelist from "./phonelist/phonelist.js" 
const list =(props ) => {
     
    return(
        <tr>
        <td>props.user.name</td>
        <td>props.user.contact</td>
        <td> <button className="deleting" onClick={() =>{
            props.onDeletecontact(props.index)
        } }>Delete </button></td>
      </tr> 
    )
}

class addcontact extends Component{

    state = {
        name: "",
        contact: ""
    }
 onChangeName =() => {
     this.setState({name:e.target.value})
 }

 onChangeName =() => {
    this.setState({name:e.target.value})
}


onChangeName =() => {
    this.setState({name:e.target.value})
}


    render(){ 
    return(
        <div>
         Name:   <input type = "text" value ={this.state.name} onChange={this.onChangeName}/>
         <br/>
         Contact:   <input type = "text" value ={this.state.contact} onChange={this.onChangeContact}/> 
         <button className="adding" onClick={() =>this.props.onAddContact (this.state)}> Add Contact </button>
        </div>
    )
    }
}
class phonelist  extends Component{

    state = {
        phoneusrlist : [{
            name: 'nazneen',
            contact:7975664464
        },
        {
            name: 'faizan',
            contact:797131364
        },

        {
            name: 'manoj',
            contact:465691164
        }
    
    ]
    }
    onDeletecontact =(index) =>{
        const {phoneusrlist}  = this.state
        phoneusrlist.splice(index,1)
        this.setState({phoneusrlist})
    }
    onAddContact= (addData) => {
        const newContact = addData;
        const {phoneusrlist}= this.state;
        phoneusrlist.unshift(newContact);
        this.setState({phoneusrlist})
        console.log(addData)
    }
    render()
    {
        return(
            <div className="phonelist">
            <h1> Add new Contacts</h1>
            <addcontact onAddContact ={this.onAddContact}/>
            <br/>
            <hr/>
            <br/>
            <div className="list">
           <table> <tr>
    <th>Name</th>
    <th>contact</th>
    <th>delete</th>
  </tr>
  {this.state.phoneusrlist.map((user , index)=>{
    return <list user ={user} index={index} onDeletecontact = {this.onDeletecontact} />
})}
  <list/>
 </table>
           </div>
            </div>
        )
    }
}
export default phonelist;