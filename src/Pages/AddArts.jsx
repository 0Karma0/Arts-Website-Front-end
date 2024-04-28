import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth.jsx";

// eslint-disable-next-line react/prop-types
const AddArts = ({ update }) => {

    const { user } = useAuth() || {};
    const handleAddCraft = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const subcategory_Name = e.target.subcategory_Name.value;
        const customization = e.target.customization.value;
        const shortDescription = e.target.shortDescription.value;
        const processing_time = e.target.processing_time.value;
        const stockStatus = e.target.stockStatus.value;
        const item_name = e.target.item_name.value;
        const email = user.email;

        // console.log(name, price, image, type)

        const info = { name, price, image, subcategory_Name, email, customization, shortDescription, processing_time, stockStatus, item_name  };

        fetch("http://localhost:5000/addArts", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    Swal.fire("Your Craft has been added");
                }
            })

    };

    return (
        <div className="gadgetContainer pt-10">
            <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                {/* Heading */}
                <div className="mt-5 mb-8">
                    <p className="text-center text-3xl font-semibold">
                        <span className="mr-3 text-[#FF497C]">
                            <i className="bx bxs-alarm-add"></i>
                        </span>
                        <span className="dark:text-white">
                            <span className="text-[#FF497C]">
                                {update ? "Update " : "Add "}
                            </span>
                            Your Craft
                        </span>
                    </p>
                </div>
                {/* form */}
                <form onSubmit={handleAddCraft}>
                    <div className="flex gap-8 ">
                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                            />

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="subcategory_Name"
                            >
                                subcategory_Name
                            </label>
                            <select
                                name="subcategory_Name"
                                id="subcategory_Name"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Select subcategory_Name"
                            >
                                <option value="Mountain view canvas" selected>
                                    Mountain view canvas
                                </option>
                                <option value="Pencil Sketch Portrait" selected>
                                    Pencil Sketch Portrait
                                </option>
                                <option value="Floral Watercolor Art" selected>
                                    Floral Watercolor Art
                                </option>
                            </select>

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                Price
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="number"
                                placeholder="Enter Price"
                                id="Price"
                                name="price"
                            />
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="Customization"
                            >
                                Customization
                            </label>
                            <select
                                name="customization"
                                id="customization"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="customization"
                            >
                                <option value="Yes" selected>
                                    Yes
                                </option>
                                <option value="No" selected>
                                    No
                                </option>
                            </select>
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="item_name"
                            >
                                item_name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Enter item_name"
                                id="item_name"
                                name="item_name"
                            />
                        </div>
                        {/* Right side */}
                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="image">
                                Image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Enter Image URL"
                                id="image"
                                name="image"
                            />
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                short description
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Enter short description"
                                id="shortDescription"
                                name="shortDescription"
                            />

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="rating"
                            >
                                Rating
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                maxLength={5}
                                max={5}
                                min={0}
                                type="number"
                                placeholder="Enter Rating"
                                id="rating"
                                name="rating"
                            />
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="processing_time"
                            >
                                processing_time
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="number"
                                placeholder="Enter processing_time"
                                id="processing_time"
                                name="processing_time"
                            />
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="stockStatus"
                            >
                                stockStatus
                            </label>
                            <select
                                name="stockStatus"
                                id="stockStatus"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="stockStatus"
                            >
                                <option value="In stock" selected>
                                In stock
                                </option>
                                <option value="Made to Order" selected>
                                Made to Order
                                </option>
                            </select>
                        </div>
                    </div>



                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value="Add Craft"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddArts;