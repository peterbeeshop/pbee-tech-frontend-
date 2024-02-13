import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const handleApiError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError

    if (axiosError.response) {
      // The request was made and the server responded with a status code
      const status = axiosError.response.status

      switch (status) {
        case 400:
          // Handle Bad Request errors
          toast.error('Bad Request: ' + axiosError.response.data.message)
          break

        case 401:
          // Handle Unauthorized errors
          toast.error('Unauthorized: ' + axiosError.response.data.message)
          break

        // Add more cases as needed for other status codes...

        default:
          // Handle other status codes
          toast.error('An error occurred: ' + axiosError.response.data.message)
          break
      }
    } else if (axiosError.request) {
      // The request was made but no response was received
      toast.error('No response from the server')
    } else {
      // Something happened in setting up the request that triggered an error
      toast.error('Request setup error: ' + axiosError.message)
    }
  } else {
    // Handle non-Axios errors
    toast.error('An unexpected error occurred: ' + error.message)
  }
}
