"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/logo1.png";

export default function DashboardPage() {
  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src={Logo || "/placeholder.svg"} alt="Trambet Logo" height={40} />
          </Link>
          <div className="d-flex gap-2">
            <Link href="/about" className="btn btn-outline-light">
              About
            </Link>
            <Link href="/" className="btn btn-light">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 mb-4">Dashboard</h1>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Analytics</h5>
                    <p className="card-text">View your performance metrics and insights.</p>
                    <button className="btn btn-primary">View Analytics</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Settings</h5>
                    <p className="card-text">Manage your account and preferences.</p>
                    <button className="btn btn-primary">Open Settings</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Support</h5>
                    <p className="card-text">Get help and contact our support team.</p>
                    <button className="btn btn-primary">Contact Support</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
