import CarType from "@components/CarType/CarType";
import ListingCar from "@components/ListingCar/ListingCar";

import "./style.scss";

export default function CarListingScreen() {
  return (
    <>
      <h1 className="carsListTitle">List of cars</h1>
      <section className="listingfilter">
        <section className="listingcar">
          <CarType />
          <ListingCar />
        </section>
      </section>
    </>
  );
}
