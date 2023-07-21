import React from "react";
import Logo from "../assets/flipkart-plus_logo.png";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Badge, Dropdown, Button } from "antd";
import { useSelector } from "react-redux";
const NavBar = () => {
  const items = [
    {
      key: "1",
      label: <Link>Signup</Link>,
    },
    {
      key: "2",
      label: <Link>My profile</Link>,
    },
    {
      key: "3",
      label: <Link>Orders</Link>,
    },
    {
      key: "4",
      label: <Link>Wish list</Link>,
    },
  ];
  const cartProductQty = useSelector((state) => state.cartItems.length);
  return (
    <div className="bg-blue-600 flex flex-col items-center justify-center py-[10px] w-full">
      <div className="container min-w-[80%] flex items-center justify-between px-[30px] max-w-[1200px]">
        <Link to="/">
          <div className="logo w-32 flex flex-col align-center justify-center text-center">
            <img src={Logo} alt="flipkart" />
            <p className="text-white text-xl">
              Explore <span className="text-yellow-300">Plus</span>
            </p>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-between w-[150px]">
          <Dropdown
            menu={{ items }}
            placement="bottom"
            arrow={{
              pointAtCenter: true,
            }}
            overlayStyle={{ minWidth: '150px' }}
          >
            <Link to="/login">
              <button className="bg-white px-[20px] py-[3px] text-blue-600 font-bold">
                Login
              </button>
            </Link>
          </Dropdown>

          <Link to="/Cart">
            <button className="flex items-center text-white">
              <Badge count={cartProductQty} overflowCount={10} size="medium">
                <BsCart4
                  className="mr-[5px]"
                  style={{ color: "white", fontSize: "18px" }}
                />
              </Badge>
              Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
