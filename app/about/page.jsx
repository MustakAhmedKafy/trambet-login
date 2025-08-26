"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/logo1.png";

export default function AboutPage() {
  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src={Logo || "/placeholder.svg"} alt="Trambet Logo" height={40} />
          </Link>
          <div className="d-flex gap-2">
            <Link href="/dashboard" className="btn btn-outline-light">
              Dashboard
            </Link>
            <Link href="/" className="btn btn-light">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 mb-4 text-center">About Trambet</h1>
            <div className="card shadow-sm">
              <div className="card-body p-5">
                <h2 className="h3 mb-4">Our Mission</h2>
                <p className="lead mb-4">
                  Trambet is dedicated to providing innovative solutions that empower users to achieve their goals
                  efficiently and effectively.
                </p>

                <h2 className="h3 mb-4">What We Do</h2>
                <p className="mb-4">
                  We specialize in creating user-friendly platforms that combine cutting-edge technology with intuitive
                  design. Our team is committed to delivering exceptional experiences that make complex tasks simple.
                </p>

                <h2 className="h3 mb-4">Our Values</h2>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="text-center">
                      <h5>Innovation</h5>
                      <p className="small">Constantly pushing boundaries to create better solutions.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="text-center">
                      <h5>Quality</h5>
                      <p className="small">Delivering excellence in every aspect of our work.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="text-center">
                      <h5>Support</h5>
                      <p className="small">Providing outstanding customer service and support.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Link href="/login" className="btn btn-primary btn-lg me-3">
                    Get Started
                  </Link>
                  <Link href="/" className="btn btn-outline-primary btn-lg">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
