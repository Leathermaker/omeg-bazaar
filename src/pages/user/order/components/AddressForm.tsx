const AddressForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-md ">
        <h1 className="text-2xl font-semibold text-black mb-6 text-center font-serif">
          Add a Shipping Address
        </h1>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="py-2 border-b-2 border-primary focus:outline-none "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">Street</label>
            <input
              type="text"
              placeholder="123 Main St"
              className=" py-2 border-b-2 border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">
              Address Line 1
            </label>
            <input
              type="text"
              placeholder="Type Your Address"
              className="py-2 border-b-2 border-primary focus:outline-none "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">
              Address Line 2
            </label>
            <input
              type="text"
              placeholder="Another Address"
              className="py-2 border-b-2 border-primary focus:outline-none "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">City</label>
            <input
              type="text"
              placeholder="City"
              className="py-2 border-b-2 border-primary focus:outline-none "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">State</label>
            <input
              type="text"
              placeholder="State"
              className="py-2 border-b-2 border-primary focus:outline-none "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">Country</label>
            <input
              type="text"
              placeholder="Country"
              className="py-2 border-b-2 border-primary focus:outline-none "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">Pincode</label>
            <input
              type="text"
              placeholder="Postal Code"
              className="py-2 border-b-2 border-primary focus:outline-none "
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-primary  text-white font-semibold py-2 rounded shadow-sm transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
