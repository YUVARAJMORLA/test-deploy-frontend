import React, { useEffect } from 'react';
import { Button, Divider, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/users';

const rules = [
  {
    required: true,
    message: "Required",
  },
];

function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        message.success(response.message);
        // localStorage.setItem("token",response.data);
        // window.location.href = "/";
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/"); // Redirect to the home page if the user is already logged in
    }
  }, []);

  return (
    <div className='h-screen bg-gradient-to-r from-slate-800 via-teal-900 to-slate-800 flex justify-center items-center'>
      <div className='bg-white p-5 rounded w-[450px]'>
        <h1 className="text-primary">
          <div>PricePulse - <span className='text-gray-400'>REGISTER</span></div>
        </h1>
        <Divider />
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label='Name' name='name' rules={rules}>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label='Email' name='email' rules={rules}>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item label='Password' name='password' rules={rules}>
            <Input type='password' placeholder='Password' />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
          <div className="mt-5 text-center">
            <span className="text-grey-500">
              Already have an account? <Link to="/login" className="text-secondary">Login</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
