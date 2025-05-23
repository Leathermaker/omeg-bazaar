import { queryOptions } from "@tanstack/react-query";
import { fetchCategories, fetchProductIds, getProductsByCategory } from "./fetchers";

 const getCategoriesQuery = () => {
  return queryOptions({
    queryKey: ["categories"],
    queryFn: fetchCategories
  });
};

 const getProductsQuery = (categoryParam: string) => {
    
  return queryOptions({
    queryKey: ["products", categoryParam],
    queryFn: () =>  getProductsByCategory(categoryParam)
  });
};

 const getCartProductIdQuery = (productIds: string[]) => {
  
  return queryOptions({
    queryKey: ["cartproducts", productIds],
    queryFn: () =>  fetchProductIds(productIds),
    enabled: productIds.length > 0,
    
  });
}



export { getCategoriesQuery, getProductsQuery, getCartProductIdQuery };