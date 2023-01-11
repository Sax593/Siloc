import CarImage from "@components/CarImage/CarImage";
import CarInfo from "@components/CarInfo/CarInfo";
import { AiFillStar } from "react-icons/ai";
import "./style.scss";

export default function SingleCarScreen() {
  return (
    <div className="carPage">
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
