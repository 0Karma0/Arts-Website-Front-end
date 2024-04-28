
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  const [control, setControl] = useState(false);
  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myArts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user, control]);

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/delete/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setControl(!control)
              Swal.fire({
                title: "Deleted!",
                text: "Your Art has been deleted.",
                icon: "success"
              });
            }
          });
      }
    })

  }

  return (
    <div className="gadgetContainer pt-10 grid md:grid-cols-3 gap-4 mt-8">

      {
        // eslint-disable-next-line no-unused-vars
        item?.map(p => (
          <div className="" key={p._id}>
            <div className="card bg-base-100 shadow-xl">
              <figure><img src={p.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Name: {p.name}</h2>
                <div className="text-white mb-1">
                  <p>subcategory_Name: {p.subcategory_Name}</p>
                  <p>customization: {p.customization}</p>
                  <p>shortDescription: {p.shortDescription}</p>
                  <p>processing_time: {p.processing_time}</p>
                  <p>stockStatus: {p.stockStatus}</p>
                  <p>item_name: {p.item_name}</p>
                </div>
                <div className="card-actions justify-between">
                  <Link to={`/products/${p._id}`}><button className="btn btn-primary">Update</button></Link>
                  <button onClick={() => handleDelete(p._id)} className="btn btn-secondary">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default MyCartPage;
