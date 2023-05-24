import React, { useState } from "react";

const PageTesing = ({totalData, setCurrentPage}) => {
    const [pageNumberLimit, setPagerNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    const pages = [];
    const TotalPage = Math.ceil(totalData/10);

    for(let i = 1; i<=TotalPage; i++){
      pages.push(i);
    }

    const handleClick = (event) => {
        setCurrentPage(event.target.id);
      }
      const renderPageNumber = pages.map((number)=>{
              if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
                return(
                  <li key={number} id={number} onClick={handleClick}>{number}</li>
                )
              }else{
                return null;
              }
      })
      const handleNext= () =>{
        if(TotalPage >= minPageNumberLimit+pageNumberLimit){
          setCurrentPage(maxPageNumberLimit + 1);
          setMinPageNumberLimit(maxPageNumberLimit);
          setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
        }
      }
      const handlePrev = () => {
        if(minPageNumberLimit-pageNumberLimit >= 0){
          setCurrentPage(minPageNumberLimit - pageNumberLimit + 1);
          setMinPageNumberLimit(minPageNumberLimit-pageNumberLimit);
          setMaxPageNumberLimit(minPageNumberLimit);
        }
      }

    return (
        <>
        <button onClick={handlePrev}>prev</button>
        <div>
            {renderPageNumber}   
        </div>
        <button onClick={handleNext}>next</button>
        </>
    );

}

export default PageTesing;