// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FiZap } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function App() {
  return (
    <div className="flex flex-col min-h-dvh m-auto container">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
