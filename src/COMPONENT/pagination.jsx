import React, { useEffect, useState } from "react";

const Pagination = () => {
    const [useAnswer, setAnswer] = useState([]);

    useEffect(() => {
        GetApi()
    })

    const url = "https://jsonplaceholder.typicode.com/posts"

    const GetApi = async() => {
        const response  = await fetch(url)
        const result = await response.json()
        setAnswer(result)
        // console.log(result)
    }
    
  return (
    <>
      <div>pagination</div>
      {/* <button onClick={GetApi}>button</button> */}
      {useAnswer.map((data, index) => {
        return(<li key={index}>{data.body}</li>)
      })}
    </>
  );
};

export default Pagination;
