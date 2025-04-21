import { queryOptions } from "@tanstack/react-query";
import { fetchCategories, fetchProductIds, getProductsByCategory } from "./fetchers";

export const getCategoriesQuery = () => {
  return queryOptions({
    queryKey: ["categories"],
    queryFn: fetchCategories
  });
};

export const getProductsQuery = (categoryParam: string) => {
    
  return queryOptions({
    queryKey: ["products", categoryParam],
    queryFn: () =>  getProductsByCategory(categoryParam)
  });
};

export const getCartProductIdQuery = (productIds: string[]) => {
  
  return queryOptions({
    queryKey: ["cartproducts", productIds],
    queryFn: () =>  fetchProductIds(productIds),
    enabled: productIds.length > 0,
    
  });
}