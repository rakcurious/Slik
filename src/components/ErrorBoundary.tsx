import React, { ReactNode, useState, useEffect } from 'react';

interface Props {
  children?: ReactNode;
}

const ErrorBoundary: React.FC<Props> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error: Error) => {
      setHasError(true);
      console.error('Uncaught error:', error);
    };
    //@ts-ignore
    window.addEventListener('error', errorHandler);

    return () => {
        //@ts-ignore
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return (
        <div className="bg-indigo-100 px-10 pt-20 flex flex-col items-center justify-start w-screen bg-transparent min-h-screen font-main ">
        <img src='https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705966/slik/slikbearog_wx3vqt.png' alt='Slik' className='mb-5 h-40 w-40' />
            
            <p className= 'text-center font-semibold text-2xl'>Something went wrong</p>
            <p className='uppercase  my-2 text-center font-bold text-2xl'>Please refresh (reload) the page</p>
            <p className='text-center font-semibold text-lg'>If you still see this message after
          refreshing multiple times, or this message is very frequent, please
          let us know ASAP via email.</p>
          <p className='text-center font-medium text-xl'>email: rakcurious@gmail.com</p>
            
            
        </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;