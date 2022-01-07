import { Link } from "react-router-dom";
import "./product.css";
import Charts from "../../Chats";
import { Productdata } from "../../../Dammy";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="producttitlecontainer">
        <h1 className="producttitle">Product</h1>
        <Link to="/newproduct">
          <button className="productaddbutton">Create</button>
        </Link>
      </div>
      <div className="producttop">
        <div className="producttopleft">
          <Charts
            data={Productdata}
            grid
            datakey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="producttopright">
          <div className="productrighttop">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000"
              alt="me"
              className="productrighttopimg"
            />
            <span className="productname">Iphone</span>
          </div>
          <div className="productbottom">
            <div className="productinfoitem">
              <span className="productinfokey">id:</span>
              <span className="productinfovalue">123</span>
            </div>
            <div className="productinfoitem">
              <span className="productinfokey">Sales:</span>
              <span className="productinfovalue">50000</span>
            </div>
            <div className="productinfoitem">
              <span className="productinfokey">active:</span>
              <span className="productinfovalue">yes</span>
            </div>
            <div className="productinfoitem">
              <span className="productinfokey">in stock:</span>
              <span className="productinfovalue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Iphone" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000"
                alt="phone"
                className="productuploadimg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
