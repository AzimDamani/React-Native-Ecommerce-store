import { BASE_URL } from '../../constants';
export const getAllPosts = async () => {
    const response = await fetch(`${BASE_URL}`);
    if(!response.ok){
      throw new Error('Error Occured');
    }
    return response.json();
  };
export const getAllCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories`);
    if(!response.ok){
      throw new Error('Error Occured');
    }
    return response.json();
  };
export const getDataByCategory = async (category: string) => {
    const response = await fetch(`${BASE_URL}/category/${category}`);
    if(!response.ok){
      throw new Error('Error Occured');
    }
    return response.json();
};
