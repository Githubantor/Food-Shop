import { useContext, useEffect, useState } from "react";
import { getStoredJobsApplication } from "../localstorage/localstorage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [foodCart, setFoodCart] = useState([]);

  useEffect(() => {
    if (user && user?.email) {
      const storedFood = getStoredJobsApplication();
      setFoodCart(storedFood);
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleDelete = (_id) => {
    const updatedCart = foodCart.filter((food) => food._id !== _id);
    setFoodCart(updatedCart);

    getStoredJobsApplication(updatedCart);
  };

  return (
    <div className="overflow-x-auto">
      {foodCart.length > 0 ? (
        <table
          className="table table-zebra"
          style={{ tableLayout: "fixed", width: "100%" }}
        >
          <thead>
            <tr>
              <th style={{ width: "20%" }}>#</th>
              <th style={{ width: "20%" }}>Name</th>
              <th style={{ width: "20%" }}>Category</th>
              <th style={{ width: "20%" }}>Price</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {foodCart.map((food, index) => (
              <tr key={food._id}>
                <th>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.category}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-danger"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default Cart;
