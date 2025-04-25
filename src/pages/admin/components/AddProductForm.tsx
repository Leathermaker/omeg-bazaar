


const AddProductForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-green max-w-[30rem] w-full rounded-md">
         <h1 className="text-2xl font-serif font-bold text-black p-4">Add Product</h1>
         <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">
              Product Name
            </label>
            <input
              type="text"
              placeholder=" Enter your Product Name"
              className="py-2 border-b-2 border-primary focus:outline-none"
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

        
        </form>
      </div>
      
    </div>
  )
}

export default AddProductForm

