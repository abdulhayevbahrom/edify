// import React from "react";
// import "./Login.css";
// import { Button, Form, message } from "antd";
// import axios from "../../api";
// import { useNavigate } from "react-router-dom";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { TbLockPassword } from "react-icons/tb";

// function Login() {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   const signIn = () => {
//     let data = form.getFieldsValue();
//     console.log(data)
//     axios
//       .post("/edu/login", data)
//       .then((res) => {
//         if (res.data.state) {
//           localStorage.setItem("token", res.data.innerData.token);
//           navigate("/");
//         }
//       })
//       .catch((err) => {
//         message.error(err.response.data.message);
//         console.log(err);
//       });
//   };

//   return (
//     <div className="login">
//       <Form form={form}  className="login-form">
//         <h1>Login</h1>
//         <Form.Item
//           name="login"
//           rules={[{ required: true, message: "Please input your username!" }]}
//         >
//           <FaRegCircleUser /> 
//           <input type="text" placeholder="Username" />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[{ required: true, message: "Please input your password!" }]}
//         >
//           <TbLockPassword />
//           <input type="password" placeholder="Password" />
//         </Form.Item>
//         <Button onClick={signIn}>Login</Button>
//       </Form>
//     </div>
//   );
// }

// export default Login;


import React from "react";
import "./Login.css";
import { Button, Form, message } from "antd";
import axios from "../../api";
import { useNavigate } from "react-router-dom";

function Login() {
    const [form] = Form.useForm();
    const navigate = useNavigate();

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
}

export default Login;
