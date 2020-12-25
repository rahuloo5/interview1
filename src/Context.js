import React, { Component } from 'react'
import {data} from './data'

const ProfileContext = React.createContext();

 class ProfileProvider extends Component {
 

    state={
        allData: data,
        id:'',
        name:'',
        email:'',
        address:'',
        mobile:'',
        updateEdit:[],
       
    }


    getRecord =(id)=>{
        const profile = this.state.allData.find(item=>item.id===id);
        return profile;
    }

    onEdit =(id)=>{
        const tempProfile =this.state.allData;
        const index = tempProfile.indexOf(this.getRecord(id));
        const selectRecord = tempProfile[index]
        this.setState({
            id:selectRecord['id'],
            name:selectRecord['name'],
            email:selectRecord['email'],
            address:selectRecord['address'],
            mobile:selectRecord['mobile']
        })
    }
    updateValue=(e,input)=>{
        
       
        if(input==="name"){
            this.state.name = e.target.value;
        }
        if(input==="email"){
            //let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            //if(!e.target.value.match(regEmail )){
               // return  alert("wrong email")
            //}
            
                this.state.email = e.target.value;

          

            
    
        }
        if(input==="address"){
            this.state.address = e.target.value;
        }
        if(input==="mobile"){
            this.state.mobile = e.target.value;
        }
        const tempProf =[this.state.id , this.state.name, this.state.email,this.state.address,this.state.mobile];
        this.setState({
            updateEdit:tempProf
        })
    }


    onDelete=(id)=>{
        const tempProf = this.state.allData.filter(item =>item.id!==id)
        this.setState({allData:tempProf})
    }
    onSave=(id)=>{
        if(id!==""){
            const saveRecord = this.state.allData;
            const index =saveRecord.indexOf(this.getRecord(id));
            const Record = saveRecord[index];
            
            Record["name"] = this.state.updateEdit[1];
            Record["email"] = this.state.updateEdit[2];
            Record["address"] = this.state.updateEdit[3];
            Record["mobile"] = this.state.updateEdit[4];
            this.setState({
                allData:[...this.state.allData],
                id :"",name:"", email:"", address:"",mobile:""
            })
 }
 else{
            const MaxId = Math.max(...this.state.allData.map(item=>item.id));
            const id = MaxId+1;
            //console.log(id)
            const newArr=[];
        
        newArr['id'] = id
        newArr['name'] = this.state.updateEdit[1];
        newArr['email'] = this.state.updateEdit[2];
        newArr['address'] = this.state.updateEdit[3];
        newArr['mobile'] = this.state.updateEdit[4];

        this.setState({
            allData:[...this.state.allData, newArr],
            id :"" ,name:"", email:"", address:"",mobile:""
        })
        }
    }
    render() {
        return (
           <>
           <ProfileContext.Provider value={{...this.state,
        onEdit:this.onEdit,
        updateValue:this.updateValue,
        onSave:this.onSave,
        onDelete:this.onDelete
    
    }}
        
        >
              
           {this.props.children}
           </ProfileContext.Provider>


           </>
        )
    }
}

const ProfileConsumer = ProfileContext.Consumer;

export {ProfileProvider,ProfileConsumer}
