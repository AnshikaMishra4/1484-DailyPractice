import React, { useEffect } from 'react';
const[studentDetails,setStudentDetails]=useState([]);
useEffect(()=>{
    Axios.get("http://localhost:8000/read.then").then((response)=>{
        setStudentDetails(response.data);
    })
},[])
//search result
const[foundUsers,setFoundUsers]=useState(studentDetails);
const filter=(e)=>{
    const keyword=e.target.value;
    if(keyword!==''){
        const results=studentDetaild.filter((user)=>{
        return
        user.name.toLowerCase().startsWith(keyword.toLowerCase()) ||
        user.email.toLowerCase().startsWith(keywoed.toLowerCase());
        //use the toLowerCase() method to make it case -insensitive
        });
        setFoundUsers(results);
    }else{
        setFoundUsers(studentDetails);
        //if the text fiels is empty show all users
    }
    setName(keyword);
}
return(
    <div>
        <Home/>
        <input type="search" value={name} onChange={filter} className="input" placeholder="Filter" />
        <div className="user-list">
            {foundUsers && foundUsers.length>0 ?(
                foundUsers.map((user)=>(
                    <li key={user.id}className="user">
                        <span className="user-name">{user.name}</span>
                        <span className="user-name">{user.email}</span>
                    </li>
                ))
            ) : (
                <h1>No results found</h1>
            )}
        </div>
    </div>
)