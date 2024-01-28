import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>The page you were looking for could not be found. Please try again!</p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}
