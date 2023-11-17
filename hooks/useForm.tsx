import { useEffect, useState } from "react"

export const useForm = (fields: {
  [key: string]: {
    type: string
    enum?: string[]
    properties?: {}
    minLength?: number
    maxLength?: number
    required?: boolean
    default?: string | number
  }
}) => {
  const [error, setError] = useState(false)
  //Check fields types and set initial values based on type
  const [formData, setFormData] = useState(
    Object.keys(fields).reduce((acc: any, key) => {
      if (fields[key].type === "number") {
        acc[key] = fields[key].default || 0
      } else if (fields[key].type === "string") {
        acc[key] = fields[key].default || ""
      } else if (fields[key].type === "enum") {
        acc[key] = fields[key].enum![0]
      } else if (fields[key].type === "object") {
        acc[key] = fields[key].properties
      }
      return acc
    }, {})
  )

  //Handle change of form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (!value || value === "0") {
      e.target.className = "border border-red-400 p-2 w-full rounded-md"
    } else {
      e.target.className = "border border-gray-400 p-2 w-full rounded-md"
    }

    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }))
  }

  //Validate required fields are not empty nor 0
  useEffect(() => {
    setError(false)
    Object.keys(fields).forEach((key) => {
      if (fields[key].required) {
        if (!formData[key] || formData[key] === "0") {
          setError(true)
        }
      }
    })
  }, [formData])

  return {
    formData,
    setFormData,
    handleChange,
    error,
  }
}
