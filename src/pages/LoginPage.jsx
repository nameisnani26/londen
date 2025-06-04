import { useState } from "react";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.png";
import InputField from "../components/InputField";
import Button from "../components/Button";
// import { postRequest } from "../services/NetworkServices";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!username || !password) {
  //     toast.error("Please enter both username and password.");
  //     return;
  //   }

  //   const payload = {
  //     name: username,
  //     password: password,
  //   };

  //   try {
  //     const data = await postRequest("/login", payload);
  //     console.log("Login successful:", data);
  //     localStorage.setItem("token", data.token);
  //     toast.success("Login successful!");
  //     navigate("/index");
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     toast.error("Invalid username or password.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please enter both username and password.");
      return;
    }

    // Static login credentials
    const Username = "jrhodes";
    const Password = "06cac09";

    if (username === Username && password === Password) {
      toast.success("Login successful!");
      localStorage.setItem("token", "fake-jwt-token");
      navigate("/index");
    } else {
      toast.error("Invalid username or password.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 w-100 bg-light">
      <div className="card p-4 shadow rounded-4" style={{ width: "500px", backgroundColor: "#ffffff" }}>
        <div className="text-center mb-2">
          <img src={logo} alt="Logo" style={{ width: "400px", marginBottom: "40px" }} />
          <p className="text-muted" style={{ fontSize: "14px", marginBottom: "0" }}>
            Please enter your credentials
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Username Row */}
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="username"
              className="me-2 text-muted"
              style={{ width: "100px", fontSize: "14px", marginBottom: "0" }}
            >
              Username
            </label>
            <InputField
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="form-control rounded-pill px-4 py-2"
            />
          </div>

          {/* Password Row */}
          <div className="mb-3 d-flex align-items-center">
            <label
              htmlFor="password"
              className="me-2 text-muted"
              style={{ width: "100px", fontSize: "14px", marginBottom: "0" }}
            >
              Password
            </label>
            <InputField
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="form-control rounded-pill px-4 py-2"
            />
          </div>

          <div className="d-flex justify-content-end">
            <Button type="submit" className="btn btn-secondary rounded-pill">
              Login
            </Button>
          </div>
        </form>

        <div className="text-center text-muted mt-4" style={{ fontSize: "12px" }}>
          © 2002-2025 Laser Image Inc.
          <br />
          For Support Call 214-267-1313 or 888-869-0765 ext 102
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
