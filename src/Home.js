
import React from 'react';
import {ProfileConsumer} from './Context'
import {Table,Button} from 'react-bootstrap'
import { Component } from 'react';
import { Tab } from 'bootstrap';

export default class Home extends Component{
    render(){
        return(
                <div className="conatiner">
                    <h3>ADD and Delete Data</h3>
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
                                       
                                       <td>  <input type="text" value={value.name} onChange={(e)=>{value.updateValue(e,"name")}}/></td>
                                       <td> <input type="email" value={value.email} onChange={(e)=>{value.updateValue(e,"email")}}/></td>
                                       <td> <input type="text" value={value.address} onChange={(e)=>{value.updateValue(e,"address")}}/> </td>
                                      <td> <input type="text" value={value.mobile} onChange={(e)=>{value.updateValue(e,"mobile")}}/></td> 
                                       
                                       <td><Button size ="sm" onClick={()=>{value.onSave(value.id)}}>{value.id ?"save":"add new"}</Button></td>

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
