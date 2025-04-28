import { useQueryState } from "nuqs";

const Pagination = () => {
  const [page, setPage] = useQueryState("page", { defaultValue: "1" });

  const array = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex gap-2 ">
      {array.map((pages) => {
        return (
          <button
            onClick={() => setPage(page.toString())}
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            {pages}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
