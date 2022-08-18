import axios from 'axios';

const apiCommon= (token)=> axios.create({
   baseURL:"https://api.gallery.gov.et/api",
   headers:{
    "x-auth-token":token
  }
})

export default {apiCommon}