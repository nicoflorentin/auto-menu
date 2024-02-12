import { useDispatch, useSelector } from "react-redux"
import { fetchLogin } from "../../redux/slices/loginSlice"
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
        navigate('/dashboard');
      }
    }, [loggedUserData?.token, navigate]); // Optimized dependency array

    const handleLogin = async (loginData) => {
      try {
        await dispatch(fetchLogin(loginData));
      } catch (error) {
        console.error('Login error:', error);
        // Optionally display user-friendly error messages based on error
      }
    };

    return (
      <OriginalComponent
        {...props}
        loggedUserData={loggedUserData}
        login={handleLogin}
        error={error}
        loading={loading}
      />
    );
  };

  return NewComponent;
};

export default withAuth;