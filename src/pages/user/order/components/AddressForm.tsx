import axios from "axios";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { FormData } from "../../../../types/auth";
import { useState } from "react";

const FORM_DATA: FormData = {
  street: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
  phone: "",
  address: "",
  address1: ""
};

const AddressForm = () => {
  const { userId } = useParams<{ userId: string }>();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState<FormData>(FORM_DATA);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestData = {
      ...formData,
      userId
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/user/address/${userId}`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Address added successfully", response.data);
    } catch {
      console.error("Error adding address");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 mt-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded-md">
        <h1 className="text-2xl font-semibold text-black mb-6 text-center font-serif">
          Add a Shipping Address
        </h1>
        <Form
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default AddressForm;
