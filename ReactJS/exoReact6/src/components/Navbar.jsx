import React from "react";

const Navbar = () => {

return (
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
</nav>
)
}

export default Navbar