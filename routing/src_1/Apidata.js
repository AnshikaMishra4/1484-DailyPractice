import { render } from '@testing-library/react';
import React from 'react';
import Userdata from './Userdata.json';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
const Apidata=()=>{
   
    return(
        <div>
            <h1>This is the data component</h1>
            <table ClassName="table table-borderless">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Mobile no.
                        </th>
                        <th>
                            Address
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Userdata.map((users,index)=>(
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>{users.Name}</td>
                                <td>{users.Email}</td>
                                <td>{users.Mobile}</td>
                                <td>{users.Address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
    
}
export default Apidata;