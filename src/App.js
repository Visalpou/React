import React, { useEffect, useState } from "react";
import Product from './Product';


const App = () => {
  const [advice, setAdvice] = useState("")
    useEffect(() => {
      const url = "https://api.adviceslip.com/advice"
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          setAdvice(json.slip.advice);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();  
    }, []);

      
    return (
      <div>
          <h1>{advice}</h1>
          <Product />
      </div>
    );
    
};

export default App;