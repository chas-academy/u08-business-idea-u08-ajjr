import React, { useState } from "react";
import "./login.css";

function LoginPage() {
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const users = [{ email: "example@example.com", password: "password123" }];

  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.email === email);
    if (!user) {
      setError("Inget konto finns med den angivna e-postadressen."); //Kontroll görs mot databasen om det finns ett konto med de matade emailkonto
      setSuccess("");
    } else if (user.password !== password) {
      setError("Fel lösenord angivet.");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Du är inloggad!");
    }
  };

  const handlePasswordReset = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Lösenorden matchar inte."); // Den gör en kontroll mot databasen om lösenordet för den inmatade email finns eller matchar med de som finns i databasen
      setSuccess("");
      return;
    }
    // Simulera API-anrop för att uppdatera lösenordet,,,, här ska den länkas till backends api
    fetch("/api/update-password", {
      // api länk för uppdatering av lösenord
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setError("");
        if (data.success) {
          setSuccess("Ditt lösenord har ändrats.");
          setIsResettingPassword(false); // Återgår till inloggningssidan
        } else {
          setError("Kunde inte ändra lösenordet.");
        }
      })
      .catch(() => {
        setError("Ett fel inträffade vid anslutning till servern."); //felmeddelande som ska dyka upp
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="loginform col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="mb-3">
              {isResettingPassword ? "Återställ lösenord" : "Logga in"}
            </h2>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success" role="alert">
                {success}
              </div> //Meddelande som ska dyka vid en lyckad inloggning
            )}
            <form
              onSubmit={isResettingPassword ? handlePasswordReset : handleLogin}
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
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  {isResettingPassword ? "Nytt lösenord" : "Lösenord"}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required={!isResettingPassword}
                />
              </div>
              {isResettingPassword && ( //funktion för att bli derigeras till glömtlösen sida för att ändra lösenord
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
              )}
              <button type="submit" className="btn btn-primary w-100 mb-2">
                {isResettingPassword ? "Ändra lösenord" : "Logga in"}
              </button>
              {!isResettingPassword ? (
                <button
                  type="button"
                  className="btn btn-link w-100"
                  onClick={() => setIsResettingPassword(true)}
                >
                  Glömt lösenord?
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-link w-100"
                  onClick={() => setIsResettingPassword(false)}
                >
                  Gå tillbaka
                </button> //går tillbaka till loginsidan
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
