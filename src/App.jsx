import { useState } from "react"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleLogin() {
    if (email && password) {
      setSubmitted(true)
    } else {
      alert("Please fill in all fields")
    }
  }

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome! 🎉</h2>
          <p style={styles.sub}>You logged in as <strong>{email}</strong></p>
          <button style={styles.btn} onClick={() => setSubmitted(false)}>
            Log out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <h1 style={styles.logo}>VEEFITS</h1>
        <p style={styles.sub}>Sign in to your account</p>

        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.btn} onClick={handleLogin}>
          Sign in
        </button>

      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#fdf6f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
  },
  card: {
    background: "#fff",
    padding: "2.5rem 2rem",
    borderRadius: "16px",
    border: "1px solid #f0ddd6",
    width: "100%",
    maxWidth: "360px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  logo: {
    textAlign: "center",
    fontSize: "1.5rem",
    letterSpacing: "0.2em",
    color: "#2c1a1a",
  },
  sub: {
    textAlign: "center",
    fontSize: "0.85rem",
    color: "#b08080",
  },
  input: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #f0ddd6",
    fontSize: "0.9rem",
    outline: "none",
    background: "#fdf6f0",
  },
  btn: {
    padding: "11px",
    background: "#c4785a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
}

export default App