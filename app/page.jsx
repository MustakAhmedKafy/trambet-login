"use client"

import { useState } from "react"
import TrambetLoginModal from "@/components/trambet-login-modal"
import Logo from "@/public/logo1.png";
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm py-4">
        <div className="container">
          <div className="trambet-logo">
            <Image className="trambet-logo" src={Logo || "/placeholder.svg"} alt="trambet-logo" />
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-light" onClick={() => setShowModal(true)}>
              Login Modal
            </button>
            <Link href="/login" className="btn btn-outline-light">
              Login Page
            </Link>
          
          </div>
        </div>
      </nav>

      <main className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-4 mb-4">Welcome to Trambet</h1>
            <p className="lead mb-4">Your gateway to a seamless experience. Choose how you'd like to get started.</p>
           
          </div>
        </div>
      </main>

      <TrambetLoginModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  )
}
