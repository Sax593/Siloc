// import { useEffect, useState } from "react";
import "./style.scss";
// import axios from "axios";
// import { useParams } from "react-router-dom";

export default function SiloInfo() {
  // const [vehicle, setVehicle] = useState([]);
  // const { id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/vehicules/${id}`)
  //     .then(({ data }) => {
  //       setVehicle(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  return (
    <section className="siloInfo">
      <button type="button" className="storageRemain">
        12 storages remaining
      </button>
      <button type="button" className="storageFull">
        78 full storages
      </button>
    </section>
  );
}
