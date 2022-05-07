import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const signOutHandler = async () => { 
    try {
      await signOutUser();

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"/>
        </Link>

        <div className="nav-links-container">
          <Link className= "nav-link" to="/shop">
            SHOP
          </Link>

          { currentUser ? (
              <span onClick={ signOutHandler } className= "nav-link" >
                SIGN OUT
              </span>
            ) : 
            (
              <Link className= "nav-link" to="/auth">
                SIGN IN
              </Link> 
            )
          }
        </div>
      </div>

      <Outlet/>
    </Fragment>
  );
};

export default Navigation;