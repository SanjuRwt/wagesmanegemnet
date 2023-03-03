import { useState } from "react";

import "./styles.css";

export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var query = `INSERT INTO users( Firstname, Lastname) VALUES ('${firstname}','${lastname}')`;
    var endpoint =
      "https://jagrutigurukul.org/projects/query_api.php?key=sanjusoftdev&query=" +
      query;
    console.log(endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(JSON.stringify(error));
        }
      );
  };
  const [firstname, setFirstname] = useState([]);
  const [lastname, setLastname] = useState([]);
  return (
    <div className="App">
      <div class="container-fluid mt-3">
        <h3>
          🅰🅳🅳
          <br />
          🅼🅴🅼🅱🅴🆁
        </h3>

        <form onSubmit={handleSubmit}>
          <div class="mb-3 mt-3">
            <label for="name" class="form-label">
              𝐅𝐢𝐫𝐬𝐭𝐧𝐚𝐦𝐞
            </label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              placeholder="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              𝐋𝐚𝐬𝐭𝐧𝐚𝐦𝐞
            </label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              placeholder="lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            New
          </button>
        </form>
      </div>
    </div>
  );
}
