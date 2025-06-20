"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full flex flex-col items-center text-center">
        <img
          src="/not_found.svg"
          alt="Page not found"
          className="w-48 h-48 mb-8 select-none pointer-events-none"
          draggable={false}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <svg
            className="animate-spin h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          Redirecting to home...
        </div>
        <p className="text-sm text-gray-400 mt-2">
          You will be redirected in 3 seconds.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
