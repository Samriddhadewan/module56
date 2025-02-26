import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleNewCoffee = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,chef,supplier,category,details,photo}
        

        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCoffee)

        })
        .then(res=> res.json())
        .then(data =>{
          console.log(data)
            if(data.insertedId){
              Swal.fire({
                title: 'Successfully coffee added',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
    
    }
   

    return (
    <div  className=" max-w-[1100px] my-10 mx-auto bg-[#F4F3F0] p-15 rounded-3xl">
        <div>
        <h1 className="text-4xl text-center font-bold mb-10">Add Coffee</h1>
            <form onSubmit={handleNewCoffee} className="space-y-4">
                {/* name and chef */}
                <div className="md:flex gap-3 ">
                <div className="form-control  w-full ">
          <label className="label ">
            <span className="label-text">Name</span>
          </label> <br />
          <input type="text" name="name" placeholder="enter coffee name" className="input input-bordered w-full" required />
            </div>
                <div className="form-control  w-full ">
          <label className="label">
            <span className="label-text">Chef</span>
          </label><br />
          <input type="text"  placeholder="Enter chef Name" className="input input-bordered w-full" name="chef" required />
            </div>
                </div>
                {/* supplier and taste */}
                <div className="md:flex gap-3 ">
                <div className="form-control  w-full ">
          <label className="label ">
            <span className="label-text">Supplier</span>
          </label> <br />
          <input type="text" name="supplier" placeholder="enter coffee supplier" className="input input-bordered w-full" required />
            </div>
                <div className="form-control  w-full ">
          <label className="label">
            <span className="label-text">Taste</span>
          </label><br />
          <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" required />
            </div>
                </div>
                {/* category and details */}
                <div className="md:flex gap-3 ">
                <div className="form-control  w-full ">
          <label className="label ">
            <span className="label-text">Category</span>
          </label> <br />
          <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" required />
            </div>
                <div className="form-control  w-full ">
          <label className="label">
            <span className="label-text">Details</span>
          </label><br />
          <input type="text" name="details" placeholder="Enter coffee taste" className="input input-bordered w-full" required />
            </div>
                </div>
                {/* Photo */}
                <div className="md:flex gap-3 ">
                <div className="form-control  w-[50%] ">
          <label className="label ">
            <span className="label-text">Enter Photo Url</span>
          </label> <br />
          <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full" required />
            </div>
               
                </div>
                <button  className="btn text-white bg-[#D2B48C] btn-block">Add Coffee</button>
            </form>
        </div>
    </div>
  )
}

export default AddCoffee