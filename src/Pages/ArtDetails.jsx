import { Link, useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/url";
import toast from "react-hot-toast";
import Spinner from "../Components/Spinner";

const ArtDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`https://arts-and-crafts.vercel.app/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    });
    return (
        <div className="gadgetContainer mt-8">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {item.name}</h2>
                    <div className="text-white mb-1">
                        <p>subcategory_Name: {item.subcategory_Name}</p>
                        <p>customization: {item.customization}</p>
                        <p>shortDescription: {item.shortDescription}</p>
                        <p>processing_time: {item.processing_time}</p>
                        <p>stockStatus: {item.stockStatus}</p>
                        <p>item_name: {item.item_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtDetails;