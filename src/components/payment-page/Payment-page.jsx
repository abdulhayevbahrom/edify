// import React, { useEffect, useState } from "react";
// import { message, Select } from "antd";
// import axios from "../../api";
// import "./Payment-page.css";
// import PickerData from "../antd/DataPicker";


// function PaymentPage() {
//   const [groups, setGroups] = useState([]);
//   const [errorText, setErrorText] = useState(false);
//   const selectData = groups.map((g) => g && { label: g.name, value: g._id });

//   const getGroup = () => {
//     axios
//       .get("/group/all", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => setGroups(res.data.innerData))
//       .catch((err) => {
//         setErrorText(err.response.data.message)
//         message.error(err.response.data.message)
//       })
//   }

//   const createPayment = () => {
//     axios
//       .post("/payment/create", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         message.success(res.data.message);
//         console.log(res.data);
//       })
//   }

//   useEffect(() => {
//     getGroup();
//     // createPayment();
//   }, [])

//     const [data, setData] = useState({
//     name: "",
//     groupName:"",
//     amount: "",
//     paymentMethod: "",
//     mo4nth: "",
//     })


//   return (
//     <div className='Payment-page'>
//       <h1>To'lov qilish</h1>
//       <form onSubmit={createPayment}>
//         <div className="left_pay">
//           <div className="student_name">
//             <label>O’quvchi ism va familiyasi</label>
//             <input name="name" type="text" />
//           </div>
//           <div className="group_name">
//             <label>O’quvchi guruhi </label>
//             <Select style={{ width: "530px" }} options={selectData} name="groupName" />
//           </div>
//           <div className="payment_amount">
//             <label>To‘lov summasi</label>
//             <input type="number" name="amount" />
//           </div>
//           <div className="card_number">
//             <label>Karta raqami</label>
//             <input type="number" name="paymentMethod" />
//           </div>
//         </div>
//         <div className="payment_right">
//           <div className="payment_day">
//             <label>To‘lov sanasi</label>
//             <PickerData />
//           </div>
//           <div className="payment_comment">
//             <label>qaysi oylik uchun</label>
//             <select>
//               <option value="yanvar">yanvar</option>
//               <option value="fevral">fevral</option>
//               <option value="mart">mart</option>
//               <option value="aprel">aprel</option>
//               <option value="may">may</option>
//               <option value="iyun">iyun</option>
//               <option value="iyul">iyul</option>
//               <option value="avgust">avgust</option>
//               <option value="sentyabr">sentyabr</option>
//               <option value="oktyabr">oktyabr</option>
//               <option value="noyabr">noyabr</option>
//               <option value="dekabr">dekabr</option>
//             </select>
//           </div>
//           <button>To'lov qilish</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default PaymentPage


import React, { useEffect, useState } from "react";
import { message, Select } from "antd";
import axios from "../../api";
import { DatePicker } from "antd";
import PickerData from "../antd/DataPicker";
import "./Payment-page.css";

// function PaymentPage() {
//   const [groups, setGroups] = useState([]);
//   const [errorText, setErrorText] = useState("");

//   const [data, setData] = useState({
//     name: "",
//     groupName: "",
//     amount: "",
//     paymentDate: "",
//     paymentMethod: "",
//     paymentStatus: "",
//     paymentType: "",
//     userId: "",
//     groupId: "",
//     month: "",
//   });

//   useEffect(() => {
//     getGroups();
//   }, []);

//   const getGroups = () => {
//     axios
//       .get("/group/all", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => setGroups(res.data.innerData))
//       .catch((err) => {
//         setErrorText(err.response.data.message);
//         message.error(err.response.data.message);
//       });
//   };
//   const createPayment = (e) => {
//     e.preventDefault();
//     axios
//       .post("/payment/create", data, {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         message.success(res.data.message);
//         setData({ name: "", groupId: "", amount: "", paymentMethod: "", month: "" });
//       })
//       .catch((err) => message.error(err.response?.data?.message));
//   };

function PaymentPage() {
  const [groups, setGroups] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [file, setFile] = useState(null); // Fayl uchun state

  const [data, setData] = useState({
    groupName: "",
    amount: "",
    paymentDate: "",
    paymentMethod: "",
    paymentStatus: "",
    paymentType: "",
    userId: "",
    groupId: "",
    month: "",
    student_id: "",
  });

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = () => {
    axios
      .get("/group/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setGroups(res.data.innerData))
      .catch((err) => {
        setErrorText(err.response.data.message);
        message.error(err.response.data.message);
      });
  };

  const createPayment = (e) => {
    e.preventDefault();

    // FormData yaratamiz va ma'lumotlarni qo‘shamiz
    let formData = new FormData();
    // formData.append("receipt", file); // To'lov kvitansiyasi (fayl)
    formData.append("name", data.name);
    formData.append("groupName", data.groupName);
    formData.append("amount", data.amount);
    formData.append("paymentDate", data.paymentDate);
    formData.append("paymentMethod", data.paymentMethod);
    formData.append("paymentStatus", data.paymentStatus);
    formData.append("paymentType", data.paymentType);
    formData.append("userId", data.userId);
    formData.append("groupId", data.groupId);
    formData.append("month", data.month);
    formData.append("student_id", data.student_id);

    axios
      .post("/payment/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        message.success(res.data.message);
        setData({
          
          groupName: "",
          amount: "",
          paymentDate: "",
          paymentMethod: "",
          paymentStatus: "",
          paymentType: "",
          userId: "",
          groupId: "",
          month: "",
          student_id: "",
        });
        setFile(null); // Fayl state'ni tozalash
      })
      .catch((err) => message.error(err.response?.data?.message));
  };

  return (
    <div className='Payment-page'>
      <h1>To'lov qilish</h1>
      <form onSubmit={createPayment}>
        <div className='left_pay'>
          <div className='student_name'>
            <label>O’quvchi ism va familiyasi</label>
            <input
              name="student_id"
              type='text'
              value={data.student_id}
              onChange={(e) => setData({ ...data, student_id: e.target.value })}

            />
          </div>
          <div className='group_name'>
            <label>O’quvchi guruhi</label>
            <Select
              style={{ width: "100%" }}
              options={groups.map(g => ({ label: g.name, value: g._id }))}
              value={data.groupName}
              onChange={(value) => setData({ ...data, groupName: value })}
              name="groupName"
            />
          </div>
          <div className='payment_amount'>
            <label>To‘lov summasi</label>
            <input
              type='number'
              value={data.amount}
              onChange={(e) => setData({ ...data, amount: Number(e.target.value) })}
              name="amount"
            />
          </div>
          <div className='card_number'>
            <label>Karta raqami</label>
            <input
              type='text'
              value={data.paymentMethod}
              onChange={(e) => setData({ ...data, paymentMethod: e.target.value })}
              name="paymentMethod"
            />
          </div>
        </div>
        <div className='payment_right'>
          <div className='payment_day'>
            <label>To‘lov sanasi</label>
            {/* <PickerData
              onChange={(date) => {
                console.log("PickerData value:", date);
                setData({ ...data, paymentDate: new Date(date).toISOString() });
              }}
            name='paymentDate' /> */}

            <DatePicker
              name="paymentDate"
              onChange={(date, dateString) => {
                console.log("PickerData value:", date, dateString);
                if (date) {
                  setData({ ...data, paymentDate: date.toISOString() }); // ISO formatga o'tkazamiz
                }
              }}
            />
          </div>
          <div className='card_number'>
            <label>Qaysi oylik uchun</label>
            <select
              value={data.month}
              onChange={(e) => setData({ ...data, month: e.target.value })}
              name="month"
            >
              {["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"].map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <button>To'lov qilish</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentPage;
