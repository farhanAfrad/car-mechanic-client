import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true
})
const useAxios = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        axiosInstance.interceptors.response.use((res)=>{
            return res;
        },(err)=>{
            console.log(err);
            if(err.response.status === 401){
                logOut()
                .then(()=>{
                    navigate('/login')
                })
                .catch(err => console.log(err))
            }
        })
    },[])
   
    return axiosInstance;
};

export default useAxios;