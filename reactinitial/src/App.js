import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Clothes from "./components/Clothes";


const App = () => {
  const [clothes, setClothes] = useState(null);

  useEffect(() => {
    const clothes = async () => {
      const response = await fetch(`https://demoapi.com/api/clothes`);
      const data = await response.json();
      setClothes(data);
    };
    clothes();
  }, []);
  console.log(clothes);

  return (
    <div>
      <h1>Series Api</h1>
      {clothes ? (
        clothes.map((clothes, index) => (
          <Clothes
            key={index}
            type={clothes.type}
            gender={clothes.gender}
          />
        ))
      ) : (
        <LoadingMask />
      )}
    </div>
  );
};

export default App;
