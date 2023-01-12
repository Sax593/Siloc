import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineShareLocation } from "react-icons/md";

export default function SectorListing() {
  const [sector, setSector] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/silo`)
      .then(({ data }) => {
        setSector(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <h1 className="sectorsListTitle">Sectors</h1>
      <div className="sectorsList">
        {sector.map((element) => {
          return (
            <Link
              to={{ pathname: `/storageDashboard/${element.id}` }}
              key={element.id}
              className="sector"
            >
              <button type="button" id="sectorName">
                <MdOutlineShareLocation className="iconLocSL" />

                {element.name}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
