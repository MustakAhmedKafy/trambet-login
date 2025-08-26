"use client"

import { useState } from "react"
import Image from "next/image"
import Logo from "@/public/logo1.png";

export default function TrambetLoginForm({ onSubmit, showLogo = true }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(email, password, remember)
    } else {
      console.log("Login attempt:", { email, password, remember })
    }
  }

  return (
    <div className="trambet-login-form p-md-4 p-3">
      {showLogo && (
        <div className="trambet-logo text-center m-auto" style={{ width: "250px" }}>
          {/* logo */}
          <Image src={Logo || "/placeholder.svg"} className="w-full" alt="logo" />
        </div>
      )}

      <div className="text-center mb-4">
        <h2 className="h4 fw-bold text-white mb-2">Get started now</h2>
        <p className="mb-0">Enter your credentials to access your account or create new</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label d-block fw-medium">
            User ID or Email <span>*</span>
          </label>
          <input
            type="email"
            className="trambet-form-control w-full"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="form-label d-block fw-medium">
            Password <span>*</span>
          </label>
          <input
            type="password"
            className=" trambet-form-control w-full"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label className="form-check-label text-sm" htmlFor="remember">
              Remember me
            </label>
          </div>
          <a href="#" className="text-decoration-none forgot-password small">
            Forgot password
          </a>
        </div>

        <button type="submit" className="btn trambet-btn-primary w-100 mb-3">
          Sign in
        </button>

        <div className="d-flex gap-3 mb-4">
          <button
            type="button"
            className="btn trambet-social-btn d-flex justify-center align-items-center w-100"
            style={{
              padding: "10px 8px",
              backgroundColor: "#374151",
              border: "1px solid #4b5563",
              color: "#fff",
              borderRadius: "8px",
            }}
          >
            <svg className="me-2" width="16" height="16" viewBox="0 0 18 18">
              <path
                fill="#4285F4"
                d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"
              />
              <path
                fill="#34A853"
                d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-7.18-2.53H1.83v2.07A8 8 0 0 0 8.98 17z"
              />
              <path fill="#FBBC05" d="M4.5 10.49a4.8 4.8 0 0 1 0-3.07V5.35H1.83a8 8 0 0 0 0 7.28l2.67-2.14z" />
              <path
                fill="#EA4335"
                d="M8.98 4.72c1.16 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.35L4.5 7.42a4.77 4.77 0 0 1 4.48-2.7z"
              />
            </svg>
            <span className="small">Signin Google</span>
          </button>
          <button
            type="button"
            className="btn trambet-social-btn d-flex justify-center align-items-center w-100"
            style={{
              padding: "10px 8px",
              backgroundColor: "#374151",
              border: "1px solid #4b5563",
              color: "#fff",
              borderRadius: "8px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="me-2"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0088cc"
                d="M12 0C5.37 0 0 5.373 0 12c0 6.627 5.37 12 
         12 12s12-5.373 12-12C24 5.373 18.63 0 12 0Zm5.543 8.184-1.8 
         8.482c-.135.603-.49.75-.993.468l-2.75-2.028-1.327 
         1.278c-.146.147-.269.27-.55.27l.197-2.789 
         5.085-4.59c.222-.197-.048-.306-.342-.11l-6.28 
         3.957-2.707-.847c-.589-.183-.603-.589.124-.872l10.58-4.083c.49-.177.918.11.76.872Z"
              />
            </svg>
            <span className="small">Signin Telegram</span>
          </button>
        </div>

        <div className="text-center">
          <p className="small mb-1">
            Don't have an account?{" "}
            <a href="#" className="text-decoration-none sign-up-link fw-medium">
              Create Account
            </a>
          </p>
          <p className="small mb-1">
            Quick registration?{" "}
            <a href="#" className="text-decoration-none sign-up-link fw-medium">
              Click here
            </a>
          </p>
          <p className="small mb-0">
            <a href="#" className="text-decoration-none sign-up-link fw-medium">
              Become an affiliate
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}
