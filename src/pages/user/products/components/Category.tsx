const Category = ({ selectedCategory, setSelectedCategory }: {selectedCategory: string | null, setSelectedCategory: (value: string) => void }) => {
  return (
    <div className="lg:w-1/4">
    <div className="w-full px-2 border-1 border-gray-200 p-2 rounded-lg">
      <select
        id="category-select"
        className="w-full p-2  rounded-md focus:outline-none"
        value={selectedCategory || ""}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
        <option value="sports">Sports</option>
        <option value="kitchen">Kitchen</option>
        <option value="toys">Toys</option>
        <option value="health">Health</option>
        <option value="stationary">Stationary</option>
      </select>
    </div>
  </div>
  );
};

export default Category;
