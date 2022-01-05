import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./Featureinfo.css";

export default function Featureinfo() {
  return (
    <div className="feature">
      <div className="featuredItem">
        <span className="featuredTittle">Revanue</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featureIcon Negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTittle">Sales</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4
            <ArrowDownward className="featureIcon Negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTittle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4
            <ArrowUpward className="featureIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
