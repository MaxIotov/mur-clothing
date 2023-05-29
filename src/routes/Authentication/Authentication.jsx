import SignUpForm from '../../components/SignUpForm/SignUpForm'
import SignInForm from '../../components/SingInForm/SignInForm'
import './Authentication.styles.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
