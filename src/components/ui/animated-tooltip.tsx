import { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import pfp from '../../assets/rakp.webp'
import { logout } from "../../appwrite/auth";
import { useAppSelector } from "../../app/hooks";
import { selectUserData } from "../../features/users/userSlice";
import { NavLink } from "react-router-dom";

export const AnimatedTooltip = () => {

const userdata = useAppSelector(selectUserData)

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

  const handleLogout = async () => {
    await logout();

  };

  return (
    <div
      className="flex justify-center items-center mr-4 relative group"
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
        
        {(userdata && onProfile && showLogoutButton) && (
          
          <div className="relative bg-transparent h-18 w-40 flex flex-col justify-center items-center rounded-xl gap-1 ring-2 ring-violet-200 font-urbanist text-sm font-normal *:w-40 *:text-center">
            <p>
              {userdata.name}
            </p>
            <p>
              {userdata.email}
            </p >
            <NavLink to='/'>
            <button onClick={handleLogout} className="w-40 rounded-xl font-semibold hover:ring-2 hover:ring-violet-300">
              Logout
            </button>
            </NavLink>
          </div>
        )}
      </motion.div>
      <NavLink to='/profile'>
      <img
        onMouseMove={handleMouseMove}
        src={pfp}
        alt="pfp"
        className=" cursor-pointer object-cover !m-0 !p-0 object-top rounded-full h-10 w-10 border-2 group-hover:scale-105 group-hover:z-30 border-purple-200 relative transition duration-500"
      />
      </NavLink>
    </div>
  );
};