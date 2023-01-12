import SiloImage from "@components/SiloImage/SiloImage";
import SiloInfo from "@components/SiloInfo/SiloInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.scss";
import { useParams, Link } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { GiHomeGarage } from "react-icons/gi";

export default function StorageDashboardBySilo() {
  const [storage, setStorage] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/silo/${id}`)
      .then(({ data }) => {
        setStorage(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <p className="sectorName">{storage.name}</p>
      <h1 className="currentStorage">Storage</h1>
      <div className="iconMenu">
        <Link to="/sectors">
          <button type="button" id="homeIcon">
            <GiHomeGarage className="icon" />
          </button>
        </Link>
        <Link to="/sectors/1">
          <button type="button" id="homeIcon">
            <ImArrowLeft className="icon" />
          </button>
        </Link>
      </div>
      <div className="storageOverview">
        <section className="storageOverviewImage">
          <SiloImage />
        </section>
        <div className="storageInfoOverview">
          {storage.capacity && (
            <SiloInfo
              capacity={storage.capacity}
              maxCapacity={storage.max_capacity}
            />
          )}
        </div>
      </div>
    </div>
  );
}
