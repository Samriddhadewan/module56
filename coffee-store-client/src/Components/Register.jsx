import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const Register = () => {
  const { handleCreateNewUser} = useContext(AuthContext);

  const handleSubmitButton = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    
    handleCreateNewUser(email, password)
    .then((result)=> {
      const user = result.user;
      const createdAt = user?.metadata?.creationTime;
      const newUser = {name, email, createdAt}
      console.log(user)
      form.reset()


      fetch("http://localhost:5000/users", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data => console.log(data))


    })
    .catch((error)=> {
      const errorCode = error.code;
    const errorMessage = error.message;
    form.reset()
    console.log(errorCode, errorMessage);
    })
  }





  return (
   <div className=" min-h-[80vh] flex items-center justify-center">
     <div className="card bg-base-100 w-full p-8  max-w-xl shrink-0 shadow-2xl">
        <h1 className="text-center text-3xl font-bold underline">Register</h1>
      <form onSubmit={handleSubmitButton} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label><br />
          <input type="text" placeholder="email" name="name" className="input input-bordered w-full" required />
        </div>
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
        <div className="form-control mt-6">
          <button className="btn w-full btn-accent text-white">Register</button>
        </div>
      </form>
    </div>
   </div>
  )
}

export default Register