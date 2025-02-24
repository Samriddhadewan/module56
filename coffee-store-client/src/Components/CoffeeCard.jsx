
const CoffeeCard = ({coffee}) => {
  const {name,chef,supplier,category,details,photo} = coffee
    return (
    <div className="card p-4 card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Movie" />
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
  <button className="btn btn-info join-item">Edit</button>
  <button className="btn btn-error join-item">X</button>
</div>
</div>
  )
}

export default CoffeeCard