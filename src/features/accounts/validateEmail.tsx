import { useSelector } from "react-redux"

const VerifyEmail = () => {
  const user = useSelector((state) => state.user)
  return (
    <div className="mx-auto my-8 bg-gray-300 flex gap-2 flex-col border-2 max-w-md p-2 items-center">
      <p className="text-xl">Verify your Email Address</p>
      <p className=""><strong>A verification email has been sent to: </strong></p>
      <p>Follow the instruction in the email to verify your account</p>
      <button className="bg-gray-100 w-20">Resend Email</button>
    </div>
  )
}

export default VerifyEmail