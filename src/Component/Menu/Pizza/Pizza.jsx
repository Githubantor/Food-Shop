import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { saveJobsApplication } from "../../Cart/localstorage/localstorage";
import { motion } from "framer-motion";

const Pizza = () => {
  const [menu, setMenu] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const handleCart = (food) => {
    saveJobsApplication(food);
    if (user) {
      console.log(food);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${food.name} added to cart successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "You need to log in",
        text: "Please log in to add items to your cart.",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const pizzas = menu.filter((item) => item.category === "pizza");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8 bg-gradient-to-t from-rose-500 to-rose-700"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pizzas.map((item) => (
          <motion.div
            key={item._id}
            className="card bg-white shadow-lg rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <figure className="px-4 pt-4">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
            </figure>

            <div className="card-body p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-sm mb-4">{item.recipe}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleCart(item)}
                  className="btn bg-rose-500 text-white border-rose-500 hover:bg-rose-600 transition py-2 px-4 rounded"
                >
                  Buy Now ${item.price}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Pizza;
