import "./style.scss";
import CarType from "@components/CarType/CarType";
import DateTime from "@components/DateTime/DateTime";
import CarImage from "@components/CarImage/CarImage";

export default function BookingScreen() {
  return (
    <>
      <CarImage />
      <CarType />
      <DateTime />
    </>
  );
}
