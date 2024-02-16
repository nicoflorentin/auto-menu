import { useDispatch, useSelector } from "react-redux"
import { fetchLogin, fetchSignUp, logOut } from "../../redux/slices/loginSlice"
import { useNavigate } from "react-router"
import { useEffect } from "react";

const withAuth = (OriginalComponent) => {
  const NewComponent = ({ ...props }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, data: loggedUserData, error } = useSelector((state) => state.login);

    // Optimized conditional redirection upon successful login
    useEffect(() => {
      if (loggedUserData?.token) {
        navigate('/login')
      }
    }, [loggedUserData?.token, navigate]); // Optimized dependency array

    const handleLogin = async (loginData) => {
      try {
        await dispatch(fetchLogin(loginData))
      } catch (error) {
        console.log('Login error:', error);
        // Optionally display user-friendly error messages based on error
      }
    };
    
    const handleSignUp = async (SignUpData) => {
      try {
        await dispatch(fetchSignUp(SignUpData));
      } catch (error) {
        console.log('Login error:', error);
        // Optionally display user-friendly error messages based on error
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