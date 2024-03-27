import sliklogo from './assets/sliklogomain.webp'
import profile from './assets/slikbear.webp'
import ImageSlider from './components/ImageSlider'

function App() {
  

  return (
    <>
    <div className='h-full w-screen p-0 bg-gradient-to-br from-purple-300 to-indigo-300'>
      <nav className='w-screen h-20 flex mt-0 py-2 justify-center px-4 bg-pink-100' >
      
        <div className='flex justify-start font-bold text-lg font-urbanist gap-x-6 flex-wrap w-1/3'>
          <h1>WOMEN</h1>
        <h1 >MEN</h1>
        <h1>GIFTING</h1>
        <h1>BRANDS</h1>
        </div>
        <div className='w-1/3 flex justify-center'>
          <img src={sliklogo} className='h-10 w-auto m-0 ' />
        </div>
        <div className='w-1/3 flex justify-end'>
          <img src={profile} className='h-10 w-10 rounded-full'/>
        </div>
        
      </nav>
      
       <ImageSlider /> 
      
      
     </div>
    </>
  )
}

export default App
