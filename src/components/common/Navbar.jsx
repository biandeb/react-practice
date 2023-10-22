import { Link, NavLink, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { toast } from "sonner";

import { useSession } from "../../stores/useSession";


const Navbar = () => {
  const {isLoggedIn, logout, user} = useSession();

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
        text: "You will log out",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!',
        cancelButtonText: 'Cancel',
    }).then((res) => {
      if(res.isConfirmed){
        toast.success('Session closed successfully. See you 👋🏼')
        logout();
        navigate('/');
      }
    })
  }

  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container">
      <ul className="list-navbar gap-4">
      <li><Link className="navbar-brand" to='/'>Rolling Code Site</Link>
      </li>
      {!isLoggedIn && (<li><NavLink className={({isActive}) =>
          isActive ? 'nav-link actived fw-bold' : 'nav-link'
          } to='/login'>Login</NavLink>
          </li>
          )}
      {user?.isAdmin && (<li><NavLink className={({isActive}) =>
          isActive ? 'nav-link actived fw-bold' : 'nav-link'
          } to='/admin'>Admin</NavLink>
          </li>
          )}
          </ul>
          {isLoggedIn && (<button type="button" className="btn-logout" onClick={handleLogout}>
            Log out
          </button>)} 
    </div>
  </nav>
  )
}
export default Navbar;