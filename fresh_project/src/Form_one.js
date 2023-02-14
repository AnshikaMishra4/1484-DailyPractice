import React,{ useState } from 'react'
const Form_one=()=> {
  const [name,setName] = useState("");
  const handleSubmit = (event) =>{
    event.preventDefault();
    //alert('the name  you entered was : ${name} ');
    console.log(name);
  }
  return(
    <form onSubmit={handleSubmit}>
        <label>Enter your name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
    </form>
  )
}

export default Form_one;