import React,{useState} from 'react'
import './AddUser.css'
const AddUser = ()=> {
  const [formData,setFormData] = useState(
    {
      name:'',
      mobile:'',
      email:'',
      password:'',
    }
  )
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h1 >Add User Form</h1>
            </div>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Name
  </label>
  <input
   type="text"
   class="form-control"
   id="exampleFormControlInput1"
   value={formData.name}
   onchange={(e)=>setFormData({...formData,name:e.target.value})}
   />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Mobile Number
  </label>
  <input
   type="text"
   class="form-control"
   id="exampleFormControlInput1"
   value={formData.mobile}
   onchange={(e)=>setFormData({...formData,mobile:e.target.value})}
    />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Email address
  </label>
  <input
   type="email"
   class="form-control"
   id="exampleFormControlInput1"
   placeholder="name@example.com" 
   value={formData.email}
   onchange={(e)=>setFormData({...formData,email:e.target.value})}
   />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Password
  </label>
  <input
   type="password"
   class="form-control"
   id="exampleFormControlInput1"
   value={formData.password}
   onchange={(e)=>setFormData({...formData,password:e.target.value})}
    />
</div>

<div class="mb-3">
  <button className="btn btn-success">Add User</button>
</div>

        </div>
    </div>
  )
}

export default AddUser;