import { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import pfp from '../../assets/rakp.webp'

export const AnimatedTooltip = () => {
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const [onProfile, setOnprofile] = useState(true)
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event:any) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const handleMouseEnter = () => {
    setShowLogoutButton(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowLogoutButton(false);
    }, 1000); 
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div
      className="flex justify-center mr-4 relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.6 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 10,
          },
        }}
        exit={{ opacity: 0, y: 20, scale: 0.6 }}
        style={{
          translateX: translateX,
          rotate: rotate,
          whiteSpace: "nowrap",
        }}
    
      >
        
        {(showLogoutButton && onProfile) && (
          <button
            onClick={handleLogout}
            className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600 transition-colors duration-300"
          >
            Logout
          </button>
        )}
      </motion.div>
      <img
        onMouseMove={handleMouseMove}
        src={pfp}
        alt="pfp"
        className="object-cover !m-0 !p-0 object-top rounded-full h-10 w-10 border-2 group-hover:scale-105 group-hover:z-30 border-purple-200 relative transition duration-500"
      />
    </div>
  );
};