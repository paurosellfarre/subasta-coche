"use client"

import { CustomAlertI } from "@components/Alert/customAlert.interface"

export default function CustomAlert({
  showAlert,
  success,
  code,
  message,
  setAlertData,
}: CustomAlertI) {
  return (
    <div
      id="alert-1"
      className={` flex p-4 mb-4 rounded-lg dark:bg-gray-800 ${
        success
          ? "bg-blue-50 text-blue-800 dark:text-blue-400"
          : "bg-red-50 text-red-800 dark:text-red-400"
      }`}
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Info</span>
      {success ? (
        <div className="ml-3 text-sm font-medium">
          Felicidades! Usuario creado correctamente
        </div>
      ) : (
        <div className="ml-3 text-sm font-medium">
          Revise que todos los campos esten completos
        </div>
      )}
      <button
        type="button"
        className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 inline-flex h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700 p-1.5 ${
          success
            ? "bg-blue-50 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:text-blue-400"
            : "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:text-red-400"
        }`}
        data-dismiss-target="#alert-1"
        aria-label="Close"
        onClick={() =>
          setAlertData({
            showAlert: false,
            success,
            code,
            message,
            setAlertData,
          })
        }
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}
