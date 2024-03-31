import { productD } from "../utils/data"
import createProduct from "../appwrite/config"
export default function Admin() {
    return (
        <div onClick={()=>createProduct(productD)} className="m-20 bg-sky-950 h-20 w-40 rounded-xl text-lg font-urbanist">
            Add Data
        </div>
    )
}