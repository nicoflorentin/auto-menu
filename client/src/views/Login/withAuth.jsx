import { useDispatch, useSelector } from "react-redux"
import { fetchLogin, fetchSignUp, logOut, storeUserGlobal } from "../../redux/slices/loginSlice"
import { useNavigate } from "react-router"
import { useEffect } from "react";

const withAuth = (OriginalComponent) => {
  const NewComponent = ({ ...props }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const localSavedUser = JSON.parse(localStorage.getItem('user'))
    const { loading, data: loggedUserData, error } = useSelector((state) => state.login);
    // Si no hay token en el estado o en localstorage, navegar a login
    useEffect(() => {
      if (!loggedUserData?.token && !localSavedUser?.token) {
        navigate('/login')
      } else {
        dispatch(storeUserGlobal(localSavedUser))
      }
    }, []);

    const handleLogin = async (loginData) => {
      try {
        await dispatch(fetchLogin(loginData))
      } catch (error) {
        console.log('Login error:', error);
      }
    };
    
    const handleSignUp = async (SignUpData) => {
      try {
        await dispatch(fetchSignUp(SignUpData));
      } catch (error) {
        console.log('Sign up error:', error);
      }
    };

    const handleLogOut = () => {
      dispatch(logOut())
      navigate('/login')
    }

    return (
      <OriginalComponent
        {...props}
        loggedUserData={loggedUserData}
        login={handleLogin}
        signUp={handleSignUp}
        logOut={handleLogOut}
        error={error}
        loading={loading}
      />
    );
  };

  return NewComponent;
};

export default withAuth;