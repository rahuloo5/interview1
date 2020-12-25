import React from 'react';
import {ProfileConsumer} from './Context'
import {Table,Button} from 'react-bootstrap'
import { Component } from 'react';
import { Tab } from 'bootstrap';

export default class Home extends Component{


    validateNumber = evt => {
        var theEvent = evt || window.event;
    
        // Handle paste
        if (theEvent.type === "paste") {
          key = theEvent.clipboardData.getData("text/plain");
        } else {
          // Handle key press
          var key = theEvent.keyCode || theEvent.which;
          key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
          theEvent.returnValue = false;
          if (theEvent.preventDefault) theEvent.preventDefault();
        }
      };

      validateEmail=(emailField)=>{
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.target.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}

    render(){
        return(
                <div className="conatiner">
                    <h3>Add and Delete Data</h3>
                    <ProfileConsumer>
                        {(value)=>{
                            return(
                                <Table size="sm" variant="dark" >
                                        <tbody><tr>
                                        
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Mobile</th>
                                        </tr>
                                        <tr>
                                       
                                       <td>  <input type="text"  placeholder = "Enter name" value={value.name} onChange={(e)=>{value.updateValue(e,"name")}}/></td>
                                       <td> <input type="email" placeholder= "Enter Email" value={value.email} onChange={(e)=>{value.updateValue(e,"email")}} onBlur={this.validateEmail}  /></td>
                                       <td> <input type="text" placeholder="Enter Address" value={value.address} onChange={(e)=>{value.updateValue(e,"address")}}/> </td>
                                      <td> <input type="tel" placeholder="Enter Mobile No." value={value.mobile} onChange={(e)=>{value.updateValue(e,"mobile")}} onKeyPress={this.validateNumber}/></td> 
                                       
                                       <td><Button size ="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"save":"add new"}</Button></td>

                                  </tr>
                                        {value.allData.map(info=>{
                                            return(
                                                <tr>
                                                   
                                                    <td>{info.name}</td>
                                                    <td>{info.email}</td>
                                                    <td>{info.address}</td>
                                                    <td>{info.mobile}</td>

                                                    <td>
                                                        <Button size ="sm" variant="success" onClick={()=>{value.onEdit(info.id)}}>
                                                            Edit
                                                        </Button>
                                                       
                                                        <Button size ="sm" variant="danger" onClick={()=>{value.onDelete(info.id)}}>
                                                            Delete
                                                        </Button>
                                                 </td>
                                                </tr>
                                                
                                            )
                                        })}



                                    </tbody>

                                </Table>
                            )
                        }}






                    </ProfileConsumer>
                    </div>
        )
    }
}
