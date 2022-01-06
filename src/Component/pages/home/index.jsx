import Chats from "../../Chats";
import Featureinfo from "../../Featureinfo";
import WidgetsLg from "../../widgetsLg";
import WidgetsSm from "../../widgetsSm";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Featureinfo />
      <Chats />
      <div className="homewidgets">
        <WidgetsSm />
        <WidgetsLg />
      </div>
    </div>
  );
}
