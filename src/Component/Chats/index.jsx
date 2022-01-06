import "./Chats.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function Chats() {
  const data = [
    {
      name: "Jan",
      Active: 4000,
    },
    {
      name: "Feb",
      Active: 3000,
    },
    {
      name: "Mar",
      Active: 2000,
    },
    {
      name: "Apl",
      Active: 2780,
    },
    {
      name: "May",
      Active: 1890,
    },
    {
      name: "Jun",
      Active: 2390,
    },
    {
      name: "Jul",
      Active: 3490,
    },
    {
      name: "Aug",
      Active: 1090,
    },
    {
      name: "Sep",
      Active: 2390,
    },
    {
      name: "Oct",
      Active: 1000,
    },
    {
      name: "Nov",
      Active: 4000,
    },
    {
      name: "Dec",
      Active: 3000,
    },
  ];
  return (
    <div className="chats ">
      <h3 className="chartTittle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
