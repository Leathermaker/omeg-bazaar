const Category = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3">
        <select
          className="p-2 border border-primary rounded-lg w-full"
          defaultValue=""
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="home">Home & Garden</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default Category;
