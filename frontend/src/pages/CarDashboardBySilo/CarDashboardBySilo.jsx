import "./style.scss";

export default function CarDashboardBySilo() {
  return (
    <div>
      <p className="sectorName">Sector Name</p>
      <h1 className="currentCars">My current cars</h1>
      <div className="dashboardCarsBySilo">
        <button type="button" className="avalaibleCars">
          33 cars available
        </button>
        <button type="button" className="outsideCars">
          28 cars outside
        </button>
        <button type="button" className="toCheckCars">
          12 cars to check
        </button>
        <button type="button" className="maintenance">
          3 cars on maintenance
        </button>
      </div>
    </div>
  );
}
