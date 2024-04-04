import { useForm, SubmitHandler } from "react-hook-form"
import { Prods } from "../utils/data"
import { createProductInAppwrite } from "../appwrite/config";
import { addProduct } from "../features/products/productSlice";
import { useAppDispatch } from "../app/hooks";
import { useState } from "react";
import failed from '../assets/failedemoji.svg';
const CreateProducts: React.FC = () => {
    const [error, setError] = useState(false)
    const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset
  } = useForm<Prods>()

  const onSubmit: SubmitHandler<Prods> = async (data) => {
    const createdProduct = await createProductInAppwrite({ ...data, images: data.images.split(','), likes: 0, clicks: 0 });
    if (createdProduct) {
      dispatch(addProduct(createdProduct));
      setError(false);
      reset(); 
      alert('Product added successfully')
    } else {
      setError(true);
      alert('Failed to add product')
    }
  };


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-auto w-auto flex-col gap-6 items-center font-urbanist mb-10">
            <div className="h-auto w-auto flex flex-wrap justify-center gap-4 text-xl font-semibold *:h-10 *:w-60 *:text-center *:rounded-xl *:px-1 ">
              <input placeholder="Title" {...register('title')} required/>
              <input placeholder="Target" {...register('target')} required/>
              <input placeholder="Images" {...register('images')} required/>
              <input placeholder="Price" {...register('price')} required/>
              <input placeholder="Brand" {...register('brand')} required/>
              <input placeholder="Category" {...register('category')} required/>
              <input placeholder="UserID" {...register('userid')} required/>
              <input placeholder="Collection" {...register('collection')} required/>
              
            </div>
            <input type="submit" value="Add Products"
              className="h-12 w-48 text-2xl font-semibold text-center bg-purple-300 rounded-lg hover:bg-purple-400 transition duration-200"
            />
          </div>
    </form>
    {error && <div className="w-screen h-auto flex justify-center">

      
    <img src={failed} className="animate-bounce   h-20 w-20"/>
    </div>}
    <hr />
    </>
  )
}

export default CreateProducts;