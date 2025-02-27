import { useContext } from "react";
import  { AuthContext } from "../Provider/AuthProvider";
import { data } from "react-router-dom";

const SignUp = () => {
  const {handleSignIn} = useContext(AuthContext);
  
  
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleSignIn(email, password)
    .then((res)=> {
      const user = res.user;

      const lastSignInTime = user?.metadata?.lastSignInTime;
      const loginInfo = {email, lastSignInTime};
      
      fetch(`https://coffee-store-server-ruby-ten.vercel.app/users`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfo)
      })
      .then(res=> res.json())
      .then(data => {
        // "sign in info in db", console.log(data)
      })
    
    })
    .catch((error)=> {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  }

  return (
    <div className=" min-h-[80vh] flex items-center justify-center">
     <div className="card bg-base-100 w-full p-8  max-w-xl shrink-0 shadow-2xl">
        <h1 className="text-center text-3xl font-bold underline">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label><br />
          <input type="email" placeholder="email" name="email" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label><br />
          <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
          <br />
        </div>
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        <div className="form-control mt-6">
          <button className="btn w-full btn-accent text-white">Login</button>
        </div>
      </form>
    </div>
   </div>
  )
}

export default SignUp