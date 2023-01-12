import SiloImage from "@components/SiloImage/SiloImage";
import SiloInfo from "@components/SiloInfo/SiloInfo";
import "./style.scss";

export default function StorageDashboardBySilo() {
  return (
    <div>
      <p className="sectorName">Sector Name</p>
      <h1 className="currentStorage">Storage</h1>
      <div className="storageOverview">
        <section className="storageOverviewImage">
          <SiloImage />
        </section>
        <div className="storageInfoOverview">
          <SiloInfo />
        </div>
      </div>
    </div>
  );
}
