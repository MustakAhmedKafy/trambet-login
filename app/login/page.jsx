"use client";

import TrambetLoginForm from "@/components/trambet-login-form";
import Image from "next/image";
import Link from "next/link";
import LoginImg from "@/public/login-img.svg";

export default function LoginPage() {
  const handleLogin = (email, password, remember) => {
    console.log("Login attempt:", { email, password, remember });
    // Add your login logic here
  };

  return (
    <div className="row min-vh-100 g-0">
      <div className="col-md-6 trambet-login-bg d-none d-md-block position-relative">
        <div className="p-4 w-100 h-100">
          <Image
            className="w-100 h-100 object-fit-contain"
            src={LoginImg || "/placeholder.svg"}
            alt="login-bg"
            width={400}
            height={400}
          />
        </div>
      </div>
      {/* Left side - Login Form */}
      <div className="col-md-6 trambet-login-form-bg p-4">
        <div className="position-relative">
          <TrambetLoginForm onSubmit={handleLogin} showLogo={true} />
        </div>
      </div>
    </div>
  );
}
