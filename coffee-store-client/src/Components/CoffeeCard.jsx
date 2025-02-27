import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, chef, supplier, category, details, photo, _id } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-ruby-ten.vercel.app/coffees/${id}`, {
            method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                const filteredCoffees = coffees.filter(coffee => coffee._id !== id)
                setCoffees(filteredCoffees)
            }
          });
      }
    });
  };

  return (
    <div className="card p-4 card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <p className="text-2xl font-bold">Name:{name}</p>
        <p>{supplier}</p>
        <p>{chef}</p>
        <p>{category}</p>
        <p>{details}</p>
      </div>
      <div className="join join-vertical  my-auto gap-3">
        <button className="btn btn-success join-item">View</button>
        <Link to={`/updateCoffee/${_id}`}>
        <button className="btn btn-info join-item">Edit</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error join-item"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;