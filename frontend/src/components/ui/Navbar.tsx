import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <div
      style={{
        height: 70,
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Search size={18} />
        <input
          placeholder="Search..."
          style={{
            border: "none",
            outline: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Bell />

        <div>
          <strong>Admin</strong>
          <div style={{ fontSize: 12 }}>Administrator</div>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}

export default Navbar;