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
            <img
              src="https://lh3.googleusercontent.com/8gc9bTfDcH0qoeehDOzZ63t50zc4MKbGUCRQm6BaWPw6q31_8sJq0TnDVpDi30ODPCgnKJNGyLR-IfjvTzrli_offmcEmS1DrNgg3HoFJGOm1sRsVA64ZgIhzdf_ULHTmloUcO94gSCyy-XMvBm_XYbytiYvSDn7BPi2R-I1ajvvgMyBMuVj9M0fda1FciYqdsY9f-_sKjuq1Stk4Y-d1XOS9uB6Fug049NAelmhCwHgvPTWTAnDEPba529uNg3MEU9pWni-c_tgbS9h4XTha0mdLTJpsMHO2QKVSWLQ-aJ48bNgKibsahMQvw0e9gAUbRXLhfFYL6wjHS4bWChmrxUbqs6jsvVo6NQsU5-wLkPCADsA7Y0_dfIGuryvnqH1iGJ8qP32HiLVgEX5OiwvdY8f5vxuIJU-xSxsiH-8wnj0iqCJq-2zJEZ2Mpc_-VBnBiCrc-NIhDvkOXeeeZwjN0Y1q9vawf8Ojwp-g53Vb6-Iyi5X2JJro79HPwfvcuit52HqTT30V02IB6C3hEIjmaKhU8Elwz-pfvVU3SqAyccZ6a61M1chUkPRYMiHX9-6RzF8QiZaTFhcSSrrB-JnGGg-pl4C7nh8TF9BJB_dhz0Rqsd0TOI34zmL6fZoCBov8vBiBwemOmAq70wOQZJwT72RynzrdZe3GOhodEJtJ5FQ8p2HQ6GS2Pbs7S5fFPsOmu3GxLpF-uW2hb8RAmcxOvpl=w1194-h893-no?authuser=0"
              alt="me"
              className="widgetlgimg"
            />
            <span className="widgetlgname">Thirumalai</span>
          </td>
          <td className="widgetlgdate">02 jan 2022</td>
          <td className="widgetlgamount">$2000.00</td>
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
            <img
              src="https://lh3.googleusercontent.com/_2TEbi2Qu4-Wo2bz8Bs9DTnC7P7AUDBxnMxJfGSJ3XB8ZcM9SxY5YbCsPWVItTB9bO5CnxyZRfovO0tU_Lr7nua9slo4dA9vZweXOulwsn3M1s5Uz5aMDextYPqFx_LLgdsRVm6AyAlq5fxQW009uFhq_-bf71E0POhs4lP0-4KpZBICaFKvGn5qv5s27df5_TCElTkC2xmcYI9LUT9l2k2aQNCisk1cj6lJ_XHp7lOIXLIrACsOCkux9AX7L2YouK4ykzr7us2Cvud4siy219B9R7_WIK6iYoWpWIMUBxaPlHy8V0REKe1CktVgU0a7BjXREZxheKbX8AXAcpxFyKbvC7_CwcbS9s1dpO34zXAwWn1LwGltTThJmP3F6iXEBKEzdNtZwqbt3daQPpi9cCI1n-OBSon5fCuq_FrnBxxjlY0NJoeV6BM4Ax3zLr745iu-reAVlPhXiIBE1MCaJtYWCzYyGapRWOeRIVMBrwtAIgvvKvFpZaN1evy7YYfPbhAk3I3Na1fBoks5T46JxWa2SGQPyqKuQaG3ZCeAkMhaRl6zft1MPLcLOdtZxGPfL7ynVxOHNq4ZlktJj4T9YoCsHghctj3V-bv5t5lNykO-FmS10OY31FmcJdjBcK_360h5iytQXp2g_LpZl4qgPxjX6Lc0-l6RGZh3JvoTkjk9yx99LozUe3HWU7oJ2BfSGQVjmP5H3QU6lRDUBqMr9Zbc=w670-h893-no?authuser=0"
              alt="me"
              className="widgetlgimg"
            />
            <span className="widgetlgname">Sadhesswaran</span>
          </td>
          <td className="widgetlgdate">07 jan 2022</td>
          <td className="widgetlgamount">$500.00</td>
          <td className="widgetlgstatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src={Me} alt="me" className="widgetlgimg" />
            <span className="widgetlgname">Sakthivel</span>
          </td>
          <td className="widgetlgdate">10 jan 2022</td>
          <td className="widgetlgamount">$200.00</td>
          <td className="widgetlgstatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
