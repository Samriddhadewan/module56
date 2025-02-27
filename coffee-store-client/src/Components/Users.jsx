import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const Users = () => {

    const currentUsers = useLoaderData();
    const [users, setUsers] = useState(currentUsers)



    const handleUserDelete = (id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {


          fetch(`https://coffee-store-server-ruby-ten.vercel.app/users/${id}`, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 1){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
            const filteredUsers = users.filter(user => user._id !== id)
              setUsers(filteredUsers);
          })



        }
      });
    }

  return (
    <div>
        <h1>Total Users {users.length}</h1>
        <div className="max-w-[1140px] mx-auto">
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Create Date</th>
        <th>Last Login</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user, idx) => <>
        <tr key={user._id} className="bg-base-200">
            <th>{idx + 1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            
            <td>{
                user?.createdAt ? `${user.createdAt}`:"Not Recorded"
            }</td>
            <td>{user?.LastSignInTime}</td>
            <td className="space-x-2 ">
                <button className="btn btn-info text-white">E</button>
                <button className="btn btn-error text-white"
                onClick={() =>handleUserDelete(user._id)}
                >X</button>
            </td>
          </tr>
        </> )
      }
    </tbody>
  </table>
</div>
        </div>

    </div>
  )
}

export default Users