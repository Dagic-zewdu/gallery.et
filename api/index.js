import axios from 'axios';

export const apiCommon= (token)=> axios.create({
   baseURL:"https://api.gallery.gov.et/api",
   headers:{
    "x-auth-token":token
  }
})
