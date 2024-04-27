
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myArts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  return (
    <div className="gadgetContainer pt-10">
      
      {
        // eslint-disable-next-line no-unused-vars
        item?.map(p => (
          <div key={item._id}>
            <h1>Hello</h1>
          </div>
        ))
      }
    </div>
  );
};

export default MyCartPage;
