import Image from 'next/image'
import Signup from './Components/User/SignUp/page'
import Link from 'next/link'
import SignUp from './Components/User/SignUp/page'
export default function Home() {
  return (
    <>
    <SignUp/>

      {/* <Link href={"Components/User/SignUp"}> Sign Up
      </Link>

      <Link href={"Components/User/Login"}> Login User
      </Link> */}
    </>
  )
}