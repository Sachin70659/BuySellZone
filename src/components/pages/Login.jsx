import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ auth, setAuth }) => {
  const [name, setName] = useState("");
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setAuth({ loggedIn: true, user: { name } });
    nav("/");
  };

  return (
    <form className="max-w-md mx-auto p-6" onSubmit={submit}>
      <h2 className="text-2xl mb-4">Login / Signup (Mock)</h2>
      <input className="border p-2 w-full mb-3" placeholder="Your name (mock)" onChange={(e)=>setName(e.target.value)} />
      <button className="bg-blue-600 text-white w-full py-2 rounded">Login</button>
    </form>
  );
};
