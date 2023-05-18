import { sendEmailVerification } from "firebase/auth"
import { useEffect, useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { auth } from "../../services/firebase/firebase"
import { setTimeActive } from "../../Redux/reducer"
import { useNavigate } from "react-router-dom"

const VerifyEmail = () => {
  const dispatch = useDispatch()
  const [time,setTime] = useState(60)
  const user = useSelector((state:any) => state.user)
  const timeActive = useSelector((state:any) => state.timeActive)
  const navigate = useNavigate()

  useEffect(() => {
    let interval:any = null
    if(timeActive && time !== 0  ){
    interval = setInterval(() => {
        setTime((time) => time -1)
      }, 1000)
    }else if(time == 0){
      dispatch(setTimeActive(false))
      setTime(60)
    }
    return () => clearInterval(interval)
    
  }, [timeActive,time])

  useEffect(() => {
    const interval = setInterval(() => {
      user.reload()
        .then(() => {
          if(user?.emailVerified){
            clearInterval(interval)
            navigate('/home')
          }
        })
    },1000)
  },[user])
  
  const resendEmailVerification = () => {
    if(auth.currentUser){
      console.log(auth.currentUser)
      sendEmailVerification(auth.currentUser)
        .then(() => {dispatch(setTimeActive(true))})
        .catch((err) => alert(err.message))
    }
  }
  return (
    <div className="mx-auto my-8 bg-gray-300 flex gap-4 flex-col border-2 max-w-md px-2 py-6 items-center">
      <p className="text-xl">Verify your Email Address</p>
      <p className=""><strong>A verification email has been sent to: </strong></p>
      <p>Follow the instruction in the email to verify your account</p>
      <div className="flex gap-4 ">
        <button className="bg-gray-100 mt-4 w-20" disabled={timeActive} onClick={resendEmailVerification}>Resend Email</button>
        <p className="my-6">{timeActive && time}</p>
      </div>
    </div>
  )
}

export default VerifyEmail