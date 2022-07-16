import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>E-mail:</span>
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail do usuário"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </form>
    </div>
  );
}

export default Login;
