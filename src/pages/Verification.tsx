import { useEffect, useState } from 'react'
import sliklogo from '../assets/sliklogo.webp'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../redux_toolkit/hooks'
import { selectUserData } from '../redux_toolkit/userSlice'
import { startVerification, updateVerification } from '../appwrite/auth'

export default function Verification() {
    const navigate = useNavigate()
   const userdata = useAppSelector(selectUserData)

   console.log(userdata) 
   console.log(userdata) 

    const [verified, setVerified] = useState(false)

    useEffect(()=> {
        const verification = async () => {
            
           const response = await updateVerification();
           if(response){
            console.log('success:', response)
            setVerified(true)
           }
           else {
            console.log('verification failed, try again please')
           
        }
        }
        verification();
        
    },[])

    return(
        <>
        <div  className="font-urbanist w-screen flex flex-col justify-start items-center py-10 px-5">
        <img
              className="mx-auto h-14 w-auto"
              src={sliklogo}
              alt="Slik"
            />
        <h2 onClick={startVerification} className="mt-20 mb-6 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Verification
            </h2>
        
        {verified? <><p className='text-center text-green-700 font-semibold text-xl '>Congratulations, You are verified. Start menifesting...</p>
        <button onClick={()=> navigate('/')} className='text-center font-semibold mt-10 h-14 w-60 rounded-lg text-white bg-black'>
        Home
    </button></>: 
        <p className='text-center font-semibold text-xl animate-pulse'>Verification is in Progress, Please wait...</p>}
        
        </div>
        </>
    )
}