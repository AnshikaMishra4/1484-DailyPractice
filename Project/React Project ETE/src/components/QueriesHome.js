
import React from 'react'
import Navbar from './Navbar';
import Queries from "./Queries";
import flex_logo from "../WebsiteMaterial/images/flex_logo.jpg"
import "./QueriesHome.css";
import {Link,useNavigate} from "react-router-dom"



function QueriesHome() {


    let history=useNavigate();

    const handleDelete=(id)=>{
        var index=Queries.map(function(e){
            return e.id
        }).indexOf(id);

        Queries.splice(index,1);
        history("/qh");
    }

    const handleEdit=(id,name,email,mobileno,message)=>{
        localStorage.setItem("Name",name);
        localStorage.setItem("Id",id);
        localStorage.setItem("Mail",email);
        localStorage.setItem("Mobile",mobileno);
        localStorage.setItem("Message",message);
    }
    // let img = document.getElementById('image');
    // img.src = localStorage.getItem('image');
  return (
    <>
    <Link to="/">
    <img src={flex_logo} id="logo"/>
    </Link>
    <>
        <table cellSpacing="10px" striped bordered hover  style={{margin:"10rem",width:"1000px"}}>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Mobile Number
                    </th>
                    <th>
                        Email id
                    </th>
                    <th>
                        Message
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Queries && Queries.length > 0
                    ?
                    Queries.map((item)=>{
                        return(
                            <tr>
                                <td>
                                    {item.Name}
                                </td>
                                <td>
                                    {item.mobileno}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.message}
                                </td>
                                <td>
                                    <Link to="/edit" >
                                        <button  id="icon" onClick={()=>handleEdit(item.id,item.Name,item.email,item.mobileno,item.message)}><i class="fa-solid fa-user-pen"></i>

                                        </button>
                                    </Link>
                                    <button onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button>
                                    
                                </td>
                            </tr>
                        )
                    })
                    :
                    "No data available"
                }
            </tbody>
        </table>
    </>
    {/* <img src="photo.jpg" alt="..." id="image" /> */}
    
    </>
  )
}
export default QueriesHome