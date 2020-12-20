import { Button,Table } from 'bootstrap'
import React, { Component } from 'react'
import {ProfileConsumer}  from './Context'



 class Home extends Component {
    render() {
        return (
            <div className="container">
                <h2>Data add</h2>
                <ProfileConsumer>
                    {(value)=>{
                        console.log(value)
                        return(
                            <Table size ="sm" variant ="dark" striped bordered hover>
                                <tbody>
                                    <tr>
                                        <th>
                                            ID
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Mobile
                                        </th>
                                        <th>
                                            Address
                                        </th>


                                    </tr>
                                    <tr>
                                       <td><input type="text" value={value.id} onChange={(e)=>{value.updateValue(e,"id")}}/></td>
                                       <td>  <input type="text" value={value.name} onChange={(e)=>{value.updateValue(e,"name")}}/></td>
                                       <td> <input type="email" value={value.email} onChange={(e)=>{value.updateValue(e,"email")}}/></td>
                                      <td> <input type="number" value={value.mobile} onChange={(e)=>{value.updateValue(e,"mobile")}}/></td> 
                                       <td> <input type="text" value={value.address} onChange={(e)=>{value.updateValue(e,"address")}}/> </td>
                                       <td><Button size ="sm" onClick={()=>{value.onSave(value.id)}}>{value.id ?"save":"add new"}</Button></td>

                                    </tr>

                                    {
                                        value.allData.map(info=>{
                                            return(
                                                <tr>
                                                    <td>{info.id}</td>
                                                    <td>{info.name}</td>
                                                    <td>{info.eamil}</td>
                                                    <td>{info.mobile}</td>
                                                    <td>{info.address}</td>
                                                    <td>
                                                        <Button size ="sm" variant="primary" onClick={()=>{value.onEdit(info.id)}}>
                                                            Edit
                                                        </Button>
                                                       
                                                        <Button size ="sm" variant="danger" onClick={()=>{value.onDelete(info.id)}}>
                                                            Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        )
                    }}
                </ProfileConsumer>
                
            </div>
        )
    }
}

export default Home;