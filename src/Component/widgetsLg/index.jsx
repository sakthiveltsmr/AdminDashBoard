import "./widgetLg.css";
import Me from "../../img/PRO.jpg";

export default function WidgetsLg() {
  const Button = ({ type }) => {
    return <button className={"widgetlgbutton " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetlgtitle">Latest Transactions</h3>
      <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Customer</th>
          <th className="widgetlgth">Date</th>
          <th className="widgetlgth">Amount</th>
          <th className="widgetlgth">Status</th>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src={Me} alt="me" className="widgetlgimg" />
            <span className="widgetlgname">Sakthivel</span>
          </td>
          <td className="widgetlgdate">06 jan 2022</td>
          <td className="widgetlgamount">$122.00</td>
          <td className="widgetlgstatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src={Me} alt="me" className="widgetlgimg" />
            <span className="widgetlgname">Sakthivel</span>
          </td>
          <td className="widgetlgdate">06 jan 2022</td>
          <td className="widgetlgamount">$122.00</td>
          <td className="widgetlgstatus">
            <Button type="Dedlined" />
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src={Me} alt="me" className="widgetlgimg" />
            <span className="widgetlgname">Sakthivel</span>
          </td>
          <td className="widgetlgdate">06 jan 2022</td>
          <td className="widgetlgamount">$122.00</td>
          <td className="widgetlgstatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src={Me} alt="me" className="widgetlgimg" />
            <span className="widgetlgname">Sakthivel</span>
          </td>
          <td className="widgetlgdate">06 jan 2022</td>
          <td className="widgetlgamount">$122.00</td>
          <td className="widgetlgstatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
