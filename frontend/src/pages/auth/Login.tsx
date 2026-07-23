import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login as loginService } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleLogin() {
  console.log("Login button clicked");

  console.log(email);
  console.log(password);

  try {
    console.log("API URL:", import.meta.env.VITE_API_URL);
    const res = await loginService(email, password);

    console.log(res);

    login(res.token);

    toast.success("Login Successful");

    navigate("/dashboard");
  }catch (err: any) {
  console.log(err);

  console.log(err.response);

  console.log(err.response?.data);

  toast.error(
    err.response?.data?.message || "Login Failed"
  );
}
}

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">

      <div className="w-[400px] rounded-xl bg-white p-8 shadow">

        <h1 className="mb-6 text-3xl font-bold">
          Fundsroom ERP
        </h1>

        <input
          className="mb-4 w-full rounded border p-3"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="mb-4 w-full rounded border p-3"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Login
        </button>

      </div>

    </div>
  );
}