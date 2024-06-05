import React, { useState } from "react";
import "./login.css";
function LoginPage() {
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(
      "https://u08-business-idea-u08-ajjr-39gd.onrender.com/api/auth/login",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.msg === "Du är inloggad") {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userRole", data.role);
          setSuccess(data.msg);
          setError("");
          if (data.role === "admin") {
            window.location.href = "/admin";
          } else {
            window.location.href = "/"; // Redirect to home page for non admin
          }
        } else {
          setError(data.msg);
          setSuccess("");
        }
      })
      .catch(() => {
        setError("Ett fel inträffade vid anslutning till servern.");
        setSuccess("");
      });
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Lösenorden matchar inte.");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, newPassword }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.msg);
        setError("");
      } else {
        setError(data.msg);
      }
    } catch (err) {
      setError("Ett fel inträffade vid anslutning till servern.");
    }
  };

  return (
    <div className="backgroundstyle container d-flex justify-content-center align-items-center">
      <div className="login-form row justify-content-center w-100">
        <div className="fullformlogin">
          <div className="card shadow-lg p-5 border-0">
            <h2 className="text-center mb-4">
              {isResettingPassword ? "Återställ lösenord" : "Logga in"}
            </h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form
              onSubmit={isResettingPassword ? handleResetPassword : handleLogin}
            >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-post
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {isResettingPassword ? (
                <>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      Nytt lösenord
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Bekräfta lösenord
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Lösenord
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  {isResettingPassword ? "Spara nytt lösenord" : "Logga in"}
                </button>
                {!isResettingPassword ? (
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => setIsResettingPassword(true)}
                  >
                    Glömt lösenord?
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => setIsResettingPassword(false)}
                  >
                    Gå tillbaka
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
