import s from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={s.message}>
      <h1>Oops...please try again!</h1>
    </div>
  )
}

export default ErrorMessage
