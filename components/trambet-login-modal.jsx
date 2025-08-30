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
                <div className="p-4 w-100 h-100">
                  <Image
                    className="w-100 h-100 object-contain"
                    src={LoginImg || "/placeholder.svg"}
                    alt="login-bg"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              {/* Left side - Login Form */}
              <div
                className="col-md-6 py-0 trambet-login-form-bg px-0"
               
              >
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
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m15.5 15.5l-10-10zm0-10l-10 10"
                        stroke-width="1"
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
      {show && (
        <div className="modal-backdrop fade show" onClick={onHide}></div>
      )}
    </>
  );
}
