import SiloImage from "@components/SiloImage/SiloImage";
import SiloInfo from "@components/SiloInfo/SiloInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";

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
