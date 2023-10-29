import { useEffect } from 'react';

function useFetch(setIsLoading, setData, setError) {
  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);
      const response = await fetch(
        'https://food-order-41be5-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, [setIsLoading, setData, setError]);
}
export default useFetch;
