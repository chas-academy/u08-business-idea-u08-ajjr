// import React from 'react'

// function Login() {
//     return (
//         <div>Login</div>
//     )
// }

// export default Login
import React, { useState } from 'react';
import "./login.css"

function LoginPage() {
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const users = [
    { email: 'example@example.com', password: 'password123' }
  ];

  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find(user => user.email === email);
    if (!user) {
      setError('Inget konto finns med den angivna e-postadressen.');
      setSuccess('');
    } else if (user.password !== password) {
      setError('Fel lösenord angivet.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Du är inloggad!');
    }
  };

}

export default LoginPage;