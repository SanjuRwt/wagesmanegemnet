import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://jagrutigurukul.org/projects/query_api.php?key=sanjusoftdev&query=Select%20*%20From%20Registration`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          console.log(result);
          setProducts(result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div className="products">
      🆆🅰🅶🅴🆂
      <br />
      🅻🅸🆂🆃 <br />
      <table border="1" class="table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>

        {products.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.Name}</td>
            <td>{item.Address}</td>
            <td>{item.Phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
