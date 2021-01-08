import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState("Cart1");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOption = (e) => {
        setOption(e.target.innerText);
        toggleDropdown();
    };

    return (
        <div className=" right-0 my-10">
            <button
                onClick={toggleDropdown}
                className="block text-white text-base bg-indigo-500 border-gray-600 rounded px-5 py-1 overflow-hidden focus:outline-none"
            >
                {option}
            </button>

            <div
                className={
                    isOpen
                        ? "absolute mt-2 w-48 bg-white rounded-lg py-2 shadow-xl"
                        : "hidden"
                }
            >
                <Link
                    to="/cart/1"
                    onClick={handleOption}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-600"
                >
                    Cart1
                </Link>
                <Link
                    to="/cart/2"
                    onClick={handleOption}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-600"
                >
                    Cart2
                </Link>
                <Link
                    to="/cart/3"
                    onClick={handleOption}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-600"
                >
                    Cart3
                </Link>
            </div>
        </div>
    );
};

export default Dropdown;
