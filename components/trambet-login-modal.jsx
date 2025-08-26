"use client"
import TrambetLoginForm from "./trambet-login-form"
import Image from "next/image"
import LoginImg from "@/public/login-img.svg";

export default function TrambetLoginModal({ show, onHide, onSubmit }) {
  return (
    <>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex={-1}
        aria-hidden={!show}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 overflow-hidden">
            <div className="row g-0">
              {/* Right side - Purple Background */}
              <div className="col-md-6 trambet-login-bg d-none d-md-block position-relative">
                {/* login img */}
                <div className="p-4 w-full h-full">
                  <Image
                    className="w-full h-full object-contain"
                    src={LoginImg || "/placeholder.svg"}
                    alt="login-bg"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              {/* Left side - Login Form */}
              <div className="col-md-6 py-0 trambet-login-form-bg" style={{ padding: "20px" }}>
                <div className="position-relative">
                  <button
                    type="button"
                    onClick={onHide}
                    aria-label="Close"
                    className="position-absolute top-0 end-0 m-2 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#374151",
                      border: "1px solid #4b5563",
                      cursor: "pointer",
                      zIndex: 10,
                      color: "#fff",
                    }}
                  >
                    {/* Custom Cross (SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l5.146-5.147a.5.5 0 0 
    1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 
    1-.708.708L7.293 8 2.146 2.854a.5.5 0 0 
    1 0-.708z"
                      />
                    </svg>
                  </button>

                  <TrambetLoginForm onSubmit={onSubmit} showLogo={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal backdrop */}
      {show && <div className="modal-backdrop fade show" onClick={onHide}></div>}
    </>
  )
}
