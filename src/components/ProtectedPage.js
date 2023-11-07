import React, { useEffect } from 'react';
import { message } from 'antd';
import { GetCurrentUser } from '../apicalls/users';
import { useNavigate } from 'react-router-dom';

function ProtectedPage({ children }) {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const validateToken = async () => {
    try {
      const response = await GetCurrentUser();
      if (response.success) {
        setUser(response.data);
      } else {
        // Token is not valid, navigate to the login page
        navigate("/login");
        message.error(response.message);
      }
    } catch (error) {
      // Handle the error here
      message.error(error.message);
      // You can choose to navigate to the login page here if necessary
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If there is a token, validate it
      validateToken();
    } else {
      // No token found, navigate to the login page
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      {user && (
        <div className="p-5">
          {user.name}
          {children}
        </div>
      )}
    </div>
  );
}

export default ProtectedPage;
