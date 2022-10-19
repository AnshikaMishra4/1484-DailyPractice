import {Link, useNavigate} from "react-router-dom";
import Queries from "./Queries"
import {v4 as uuid} from "uuid";
import './ContactUs.css'
import React,{useState,useEffect} from 'react'


function QueriesEdit() {

    const [name,setName] =useState("");
    const [id,setId] =useState("");
    const [mail,setMail]=useState("");
    const [mobile,setMobile]=useState("");
    const [message,setMessage]=useState("");

    let history=useNavigate();

        var index=Queries.map(function(e){
            return e.id
        }).indexOf(id);
    
        const handleSubmit=(e)=>{
          e.preventDefault();
  
          let a=Queries[index];
          a.Name=name;
          a.id=id;
          a.email=mail;
          a.mobileno=mobile;
          a.message=message;
  
          history("/qh");
      }
      useEffect(()=>{
        setName(localStorage.getItem('Name'));
        setId(localStorage.getItem("Id"));
        setMail(localStorage.getItem("Mail"));
        setMobile(localStorage.getItem("Mobile"));
        setMessage(localStorage.getItem("Message"));
      },[])


  return (
    <div id="edit">
         <form >
            <input className="support_input" name="name"  placeholder="Name" value={name} type="text" onChange={(e)=> setName(e.target.value)} />
            <input className="support_input" name="mobileno"  placeholder="Mobile Number" value={mobile} type="text" onChange={(e)=> setMobile(e.target.value)}/>
            <input className="support_input" name="email"  placeholder="Email" type="text" value={mail} onChange={(e)=> setMail(e.target.value)}/>
            <textarea className="support_input" name="message"  style={{ "resize": "vertical", "height": "100px" }} placeholder="Message" value={message} type="text" onChange={(e)=> setMessage(e.target.value)}></textarea>
            <div style={{ "width": "100%", "textAlign": "center" }}>
              <button id="submit_form" type="submit" onClick={(e) => handleSubmit(e)}>
                  UPDATE
              </button>
            </div>
          </form>
    </div>
  )
}

export default QueriesEdit