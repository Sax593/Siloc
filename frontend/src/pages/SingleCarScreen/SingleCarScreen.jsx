import CarImage from "@components/CarImage/CarImage";
import CarInfo from "@components/CarInfo/CarInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import "./style.scss";

export default function SingleCarScreen() {
  const [vehicle, setVehicle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicules/${id}`)
      .then(({ data }) => {
        setVehicle(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="carPage">
      <h1 className="modelCar">
        {vehicle.brand} - {vehicle.model}
      </h1>
      <h2 className="typeCar">{vehicle.type}</h2>
      <section className="carOverview">
        <CarImage />
      </section>
      <div className="rating">
        <div className="stars">
          <i className="fa fa-star gold">
            <AiFillStar />
          </i>
          <i className="fa fa-star gold">
            <AiFillStar />
          </i>
          <i className="fa fa-star">
            <AiFillStar />
          </i>
          <i className="fa fa-star">
            <AiFillStar />
          </i>
          <i className="fa fa-star">
            <AiFillStar />
          </i>
        </div>
      </div>
      <section className="carInfoOverview">
        <CarInfo />
      </section>
    </div>
  );
}
