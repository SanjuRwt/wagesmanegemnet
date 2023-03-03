import { Outlet, Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            🆆🅰🅶🅴🆂 <br /> 🅼🅰🅽🅰🅶🅴🅼🅴🅽🆃
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/Home" class="nav-link">
                  𝐇𝐨𝐦𝐞
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Registration" class="nav-link">
                  𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Addwages" class="nav-link">
                  𝐀𝐝𝐝𝐰𝐚𝐠𝐞𝐬
                </Link>
              </li>

              <li class="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
