

import { useAppSelector } from "../app/hooks"
import { selectUserData } from "../features/users/userSlice"

export default function Loki() {
const userd = useAppSelector(selectUserData)
console.log(userd)

  return (
    <>
    {userd && 
    <div className="h-auto w-auto mt-20">
      <p>{userd.$id}</p>
      <p>{userd.name.split(' ')[0]}</p>
      <p>{userd.email}</p>
    </div>}
    </>
  )
}