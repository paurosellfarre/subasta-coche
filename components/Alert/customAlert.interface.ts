import { Dispatch, SetStateAction } from "react"

export interface CustomAlertI {
  showAlert: boolean
  success: boolean
  code: number
  message: string
  setAlertData: Dispatch<SetStateAction<CustomAlertI>>
}
