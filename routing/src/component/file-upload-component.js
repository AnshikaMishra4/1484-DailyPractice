import React,{Component} from 'react';
import axios from 'axios';
export default class FilesUploadComponent extends Component{
    constructor(props){
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            profileImg: ''
        }
        this.onFileChange(e){
            this.setState({profileImg: e.target.files[0]})
        }
        this.onSubmit(e){
            e.preventDefault()
            const formData = new FormData()
            formData.append('profileImg', this.state.profileImg)
            axios.post("http://localhost:4000/api/user-profile", formData,)
        }
    }
}