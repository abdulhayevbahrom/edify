import React from "react";
import "./Login.css";
import { Button, Form, message } from "antd";
import axios from "../../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c1eb28938bc46002814213fa59c6422982ec2c77
  const signIn = () => {
    let data = form.getFieldsValue();
    axios
      .post("/edu/login", data)
      .then((res) => {
        console.log(res.data);

        if (res.data.state) {
          localStorage.setItem("token", res.data.innerData.token);
          localStorage.setItem("user", JSON.stringify(res.data.innerData.edu));
          navigate("/");
        }
      })
      .catch((err) => {
        message.error(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <div className="login">
      <Form form={form} name="login-form" className="login-form">
        <h1>Login</h1>
        <Form.Item
          name="login"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <input type="text" placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <input type="password" placeholder="Password" />
        </Form.Item>
        <Button onClick={signIn}>Login</Button>
      </Form>
    </div>
  );
<<<<<<< HEAD
=======
=======
    const signIn = () => {
        let data = form.getFieldsValue();
        axios
            .post("/edu/login", data)
            .then((res) => {
                if (res.data.state) {
                    localStorage.setItem("token", res.data.innerData.token);
                    localStorage.setItem("user", res.data.innerData.user);
                    navigate("/");
                }
            })
            .catch((err) => {
                message.error(err.response.data.message);
                console.log(err);
            });
    };

    return (
        <div className="login">
            <Form form={form} name="login-form" className="login-form">
                <h1>Login</h1>
                <Form.Item
                    name="login"
                    rules={[{ required: true, message: "Please input your username!" }]}
                >
                    <input type="text" placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <input type="password" placeholder="Password" />
                </Form.Item>
                <Button onClick={signIn}>Login</Button>
            </Form>
        </div>
    );
>>>>>>> origin/asqarjon
>>>>>>> c1eb28938bc46002814213fa59c6422982ec2c77
}

export default Login;
