import { NavLink } from "react-router-dom";

const FloatingMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`font-bold fixed top-0 left-0 z-50 h-screen rounded-xl w-64 bg-purple-100 transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button name="close" aria-label="close" onClick={onClose} className="text-gray-700 hover:text-gray-900">
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="mt-0">
        <NavLink
          to="/women"
          className={({ isActive }) =>
            `block px-4 py-2 text-gray-700 hover:bg-purple-200 ${
              isActive ? "bg-purple-200" : ""
            }`
          }
          onClick={onClose}
        >
          WOMEN
        </NavLink>
        <NavLink
          to="/men"
          className={({ isActive }) =>
            `block px-4 py-2 text-gray-700 hover:bg-purple-200 ${
              isActive ? "bg-purple-200" : ""
            }`
          }
          onClick={onClose}
        >
          MEN
        </NavLink>
        <NavLink
          to="/brands"
          className={({ isActive }) =>
            `block px-4 py-2 text-gray-700 hover:bg-purple-200 ${
              isActive ? "bg-purple-200" : ""
            }`
          }
          onClick={onClose}
        >
          BRANDS
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `block px-4 py-2 text-gray-700 hover:bg-purple-200 ${
              isActive ? "bg-purple-200" : ""
            }`
          }
          onClick={onClose}
        >
          WISHLIST
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 text-gray-700 hover:bg-purple-200 ${
              isActive ? "bg-purple-200" : ""
            }`
          }
          onClick={onClose}
        >
          HOME
        </NavLink>
      </nav>
    </div>
  );
};

export default FloatingMenu;
