import { useEffect } from 'react';

function useSetData(data, data2) {
  useEffect(() => {
    data.forEach((el) => {
      data2.forEach((item) => {
        if (el.mealName === item.mealName) {
          el.quantity = item.quantity;
        }
      });
    });
  });
}

export default useSetData;
