import React, {Component} from 'react';
import "./phonebookdirectory.css "

class phonebookdirectory extends Component{
    render()
    {
        return(
            <div className="phonebookdirectory">
            <h1> PhoneBook Directory</h1>
            <phonelist/>
            </div>
        )
    }
}
export default phonebookdirectory;