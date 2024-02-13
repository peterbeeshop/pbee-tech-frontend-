import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const handleApiError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError

    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorValue = axiosError.response.data as string
      toast.error(errorValue)
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
