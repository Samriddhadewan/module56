import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
  const data = useLoaderData();
  const {name, chef, supplier, category, details, photo, _id} = data
    const handleUpdateCoffee = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,chef,supplier,category,details,photo,}
        

        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCoffee)

        })
        .then(res=> res.json())
        .then(data =>{
          console.log(data)
            if(data.modifiedCount > 0){
              Swal.fire({
                title: 'Successfully coffee updated',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
    
    }
   

    return (
    <div  className=" max-w-[1100px] my-40 mx-auto bg-[#F4F3F0] p-15 rounded-3xl">
        <div>
        <h1 className="text-4xl text-center font-bold mb-10">Update Coffee</h1>
            <form onSubmit={handleUpdateCoffee} className="space-y-4">
                {/* name and chef */}
                <div className="md:flex gap-3 ">
                <div className="form-control  w-full ">
          <label className="label ">
            <span className="label-text">Name</span>
          </label> <br />
          <input type="text" defaultValue={name} name="name" placeholder="enter coffee name"  className="input input-bordered w-full" required />
            </div>
                <div className="form-control  w-full ">
          <label className="label">
            <span className="label-text">Chef</span>
          </label><br />
          <input type="text" defaultValue={chef}  placeholder="Enter chef Name" className="input input-bordered w-full" name="chef" required />
            </div>
                </div>
                {/* supplier and taste */}
                <div className="md:flex gap-3 ">
                <div className="form-control  w-full ">
          <label className="label ">
            <span className="label-text">Supplier</span>
          </label> <br />
          <input type="text" defaultValue={supplier} name="supplier" placeholder="enter coffee supplier" className="input input-bordered w-full" required />
            </div>
                <div className="form-control  w-full ">
          <label className="label">
            <span className="label-text">Taste</span>
          </label><br />
          <input type="text"  name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full"  />
            </div>
                </div>
                {/* category and details */}
                <div className="md:flex gap-3 ">
                <div className="form-control  w-full ">
          <label className="label ">
            <span className="label-text">Category</span>
          </label> <br />
          <input type="text" defaultValue={category} name="category" placeholder="Enter coffee category" className="input input-bordered w-full" required />
            </div>
                <div className="form-control  w-full ">
          <label className="label">
            <span className="label-text">Details</span>
          </label><br />
          <input type="text" defaultValue={details} name="details" placeholder="Enter coffee taste" className="input input-bordered w-full" required />
            </div>
                </div>
                {/* Photo */}
                <div className="md:flex gap-3 ">
                <div className="form-control  w-[50%] ">
          <label className="label ">
            <span className="label-text">Enter Photo Url</span>
          </label> <br />
          <input type="text" defaultValue={photo} name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full" required />
            </div>
               
                </div>
                <button  className="btn text-white bg-[#D2B48C] btn-block">Update Coffee</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateCoffee