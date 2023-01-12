import axios from "axios";
import { useEffect, useState } from "react";
import "./style.scss";

export default function ListingCar() {
  const [listing, setListing] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehiculesfind/1`)
      .then(({ data }) => {
        setListing(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <article className="vehiclelisting">
      <ul>
        {listing.map((element) => {
          return (
            <li className="car" key={element.id}>
              {element.brand} {element.type} {element.mileage}miles
            </li>
          );
        })}
      </ul>
    </article>
  );
}
