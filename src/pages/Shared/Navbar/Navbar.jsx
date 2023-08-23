import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import usePhotographer from "../../../hooks/usePhotographer";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isPhotographer] = usePhotographer();
  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  return (
    <div className="fixed z-10 w-full bg-white">
      <div className="my-4 h-full ">
        <img src={Logo} alt="logo" className="md:cursor-pointer mx-auto h-9  block lg:hidden" />
      </div>
      <nav className="bg-white ">
        <div className="flex font-poppins items-center font-medium justify-around h-20 ">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9 lg:block hidden" />
            {
              user ? <div className="inline-flex items-center gap-2"> <p className='tooltip ' data-tip={user.displayName} >
                <img className='w-10 h-10 rounded-full  block lg:hidden' src={user.photoURL
                } alt='user image' ></img>
              </p> <button onClick={handleLogOut} className="btn btn-ghost block lg:hidden font-poppins text-[15px]">LogOut</button></div> : <img src="
             https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" className="h-9 block md:block lg:hidden" alt="" srcset="" />
            }
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 lg:gap-2 font-semibold ">
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <li><NavLinks /></li>
            <li>
              <Link to="/about" className="py-7 px-3 inline-block">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="py-7 px-3 inline-block">
                Gallery
              </Link>
            </li>
            {
              user && <>
                {isAdmin ? <li><Link to="/dashboard/adminhome" className="py-3 px-3 inline-block">Dashboard</Link></li> :
                  isPhotographer ? <li><Link to="/dashboard/photographerhome" className="py-3 px-3 inline-block">Dashboard</Link></li> :
                    <li><Link to="/dashboard/userhome" className="py-3 px-3 inline-block">Dashboard</Link></li>}
              </>
            }
            <li>
              <Link to="/contact" className="py-7 px-3 inline-block">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="py-7 px-3 inline-block">
                Login
              </Link>
            </li>
          </ul>
          <div className="md:block hidden">
            {
              user ? <div className="inline-flex gap-3 items-center"> <p className='tooltip ' data-tip={user.displayName} >
                <img className='w-10 h-10 rounded-full  hidden lg:block' src={user.photoURL
                } alt='user image' ></img>
              </p> <button onClick={handleLogOut} className="btn btn-ghost   hidden lg:block font-poppins text-[15px]">LogOut</button></div> : <img src="
             https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" className="h-9" alt="" srcset="" />
            }
          </div>

          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-neutral-200 fixed w-full h-[400px] z-10 py-12 top-36 overflow-y-auto bottom-0  pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] font-semibold text-lg "}
        `}
          >
            <li>
              <Link to="/" className="py-4 px-3 inline-block">
                Home
              </Link>
            </li>
            <li><NavLinks /></li>
            <li>
              <Link to="/about" className="py-3 px-3 inline-block">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="py-3 px-3 inline-block">
                Gallery
              </Link>
            </li>
            {
              user && <>
                {isAdmin ? <li><Link to="/dashboard/adminhome" className="py-3 px-3 inline-block">Dashboard</Link></li> :
                  isPhotographer ? <li><Link to="/dashboard/instructorhome" className="py-3 px-3 inline-block">Dashboard</Link></li> :
                    <li><Link to="/dashboard/userhome" className="py-3 px-3 inline-block">Dashboard</Link></li>}
              </>
            }
            <div className="py-3">
              <li>
                <Link to="/contact" className="py-3 px-3 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="py-3 px-3 inline-block">
                  Login
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
