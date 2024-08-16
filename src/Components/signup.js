 
import { Link } from 'react-router-dom';
 
import { handleError, handleSuccess } from '../Pages/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({});
    const handleChange=(e)=>{
        const {name,value}=e.target;
        const copyLoginInfo={...loginInfo};
        copyLoginInfo[name]=value;
        setLoginInfo((loginInfo) => ({ ...loginInfo, [name]: value }));
        
        console.log(copyLoginInfo);
        }
  
  const handleSubmit=async (e)=>{
      console.log("Entered");
  e.preventDefault();
  const {name,email,password}=loginInfo;
  
  if(!name||!email||!password){
  return handleError('someone filed is missing ')
  }
  try{
  const url = "http://localhost:8080/auth/signup";
  const respose=await fetch(url,{
      method:"Post",
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify(loginInfo)
  }
  );
  const result=await respose.json();
  const {success,message,error}=result;
  console.log("succes is ",success);
  if(success){
      handleSuccess(message);
   setTimeout(()=>{
      navigate('/login')
  },1000)
  }
  }catch(err){
   console.log(err)
  }
  
  
  }
  return (
    <div className="containerLoginSignup">
    <div className='signup'>
     <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">
                <input type="text"
                name='name'
                onChange={handleChange}
                autoFocus
                placeholder='Enter name ..'/>
            </label>
        </div>
        <div>
            <label htmlFor="email">
                <input type="email"
                name='email'
                onChange={handleChange}
                placeholder='Enter your email  ..'/>
            </label>
        </div>
        <div>
            <label htmlFor="password">
                <input type="password"
                name='password'
                onChange={handleChange}
                placeholder='Enter your password  ..'/>
            </label>
        </div>
        <div>
        <button>
            Signup
        </button>
        </div>
        <span>Already Have acccount ?
          <Link style={{color:"black"}} to='/login'>Login</Link>   
        </span>
        </form> 
 
    </div>
    </div>
  )
}

export default Signup
