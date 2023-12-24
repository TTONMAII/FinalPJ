import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <div
        style={{
          height: "80px",
          background: "grey",
          zIndex: 500,
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap:10
        }}
      >
        <Link
          style={{
            fontSize: "20px",
            color: "white",
            border: "3px solid black",
            padding: "10px",
            borderRadius: "10px",
          }}
          to="/"
        >
          หน้าแรก
        </Link>


        <Link
          style={{
            fontSize: "20px",
            color: "white",
            border: "3px solid black",
            padding: "10px",
            borderRadius: "10px",
          }}
          to="/profile"
        >
          แนะนำตัว
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
