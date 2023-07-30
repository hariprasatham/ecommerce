import React, { useState } from "react";
import { Form, Input, Radio, Select, Button } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const FormValidation = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     address_details: {
//       street_name: "",
//       city_name: "",
//       pincode: "",
//       district: "",
//       state: "",
//     },
//     hobbies: [{ name: "" }],
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     const updatedFormData = { ...formData };
  
//     // Handling nested fields and hobbies array
//     if (name.includes("hobbies")) {
//       const hobbyIndex = name.match(/\d+/)[0];
//       const hobbyProperty = name.split(".").pop();
//       updatedFormData.hobbies[hobbyIndex][hobbyProperty] = value;
//     } else if (name.includes(".")) {
//       const [outerKey, innerKey] = name.split(".");
//       updatedFormData[outerKey][innerKey] = value;
//     } else {
//       updatedFormData[name] = value;
//     }
  
//     setFormData(updatedFormData);
//   };
  

//   const handleAddHobby = () => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       hobbies: [...prevFormData.hobbies, { name: "" }],
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//     console.log(formData);
//   };
    const onFinish = (values) => {
      console.log("Form data:", values);
    };


  return (
    // <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg">
    //   <form onSubmit={handleSubmit}>
    //     {/* Input fields for name and age */}
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2">Name</label>
    //       <input
    //         type="text"
    //         name="name"
    //         placeholder="Name"
    //         value={formData.name}
    //         onChange={handleInputChange}
    //         className="w-full px-3 py-2 border rounded-md shadow-sm"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2">Age</label>
    //       <input
    //         type="number"
    //         name="age"
    //         placeholder="Age"
    //         value={formData.age}
    //         onChange={handleInputChange}
    //         className="w-full px-3 py-2 border rounded-md shadow-sm"
    //       />
    //     </div>

    //     {/* Input fields for address details */}
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2">
    //         Street Name
    //       </label>
    //       <input
    //         type="text"
    //         name="address_details.street_name"
    //         placeholder="Street Name"
    //         value={formData.address_details.street_name}
    //         onChange={handleInputChange}
    //         className="w-full px-3 py-2 border rounded-md shadow-sm"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2">
    //         City Name
    //       </label>
    //       <input
    //         type="text"
    //         name="address_details.city_name"
    //         placeholder="City Name"
    //         value={formData.address_details.city_name}
    //         onChange={handleInputChange}
    //         className="w-full px-3 py-2 border rounded-md shadow-sm"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2">Pincode</label>
    //       <input
    //         type="number"
    //         name="address_details.pincode"
    //         placeholder="Pincode"
    //         value={formData.address_details.pincode}
    //         onChange={handleInputChange}
    //         className="w-full px-3 py-2 border rounded-md shadow-sm"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2">District</label>
    //       <input
    //         type="text"
    //         name="address_details.district"
    //         placeholder="District"
    //         value={formData.address_details.district}
    //         onChange={handleInputChange}
    //         className="w-full px-3 py-2 border rounded-md shadow-sm"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2">State</label>
    //       <input
    //         type="text"
    //         name="address_details.state"
    //         placeholder="State"
    //         value={formData.address_details.state}
    //         onChange={handleInputChange}
    //         className="w-full px-3 py-2 border rounded-md shadow-sm"
    //       />
    //     </div>

    //     {/* Input fields for hobbies */}
    //     {formData.hobbies.map((hobby, index) => (
    //       <div key={index} className="mb-4">
    //         <input
    //           type="text"
    //           name={`hobbies[${index}].name`}
    //           placeholder="Hobby"
    //           value={hobby.name}
    //           onChange={handleInputChange}
    //           className="w-full px-3 py-2 border rounded-md shadow-sm"
    //         />
    //       </div>
    //     ))}

    //     <div className="mb-4">
    //       {/* Button to add new hobby input */}
    //       <button
    //         type="button"
    //         onClick={handleAddHobby}
    //         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    //       >
    //         Add Hobby
    //       </button>
    //     </div>

    //     <div>
    //       {/* Button to submit the form */}
    //       <button
    //         type="submit"
    //         className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg">
      <Form
        name="basic"
        initialValues={{
          name: "",
          age: "",
          address_details: {
            street_name: "",
            city_name: "",
            pincode: "",
            district: "",
            state: "",
          },
          hobbies: [{ name: "" }],
        }}
        onFinish={onFinish}
      >
        {/* Input fields for name and age */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please enter your age!" }]}
        >
          <Input type="number" />
        </Form.Item>

        {/* Input fields for address details */}
        <Form.Item
          label="Street Name"
          name={["address_details", "street_name"]}
          rules={[{ required: true, message: "Please enter the street name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City Name"
          name={["address_details", "city_name"]}
          rules={[{ required: true, message: "Please enter the city name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pincode"
          name={["address_details", "pincode"]}
          rules={[{ required: true, message: "Please enter the pincode!" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="District"
          name={["address_details", "district"]}
          rules={[{ required: true, message: "Please enter the district!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="State"
          name={["address_details", "state"]}
          rules={[{ required: true, message: "Please enter the state!" }]}
        >
          <Input />
        </Form.Item>

        {/* Input fields for hobbies */}
        <Form.List name="hobbies">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item key={field.key}>
                  <Form.Item
                    {...field}
                    name={[field.name, "name"]}
                    fieldKey={[field.fieldKey, "name"]}
                    rules={[{ required: true, message: "Please enter a hobby!" }]}
                  >
                    <Input placeholder="Hobby" />
                  </Form.Item>
                  {fields.length > 1 && (
                    <Button onClick={() => remove(field.name)}>Remove</Button>
                  )}
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block>
                  Add Hobby
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormValidation;
