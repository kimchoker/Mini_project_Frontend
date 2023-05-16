import React from "react";

const Pagination = (props) => {
  const totalPage = props.value;

  const getThePageValue = (e) => {
    
  }
  const displayPageNumber = () => {
    const page = [];
    for (let i = 1; i <= Math.ceil(totalPage/10); i++) {
        page.push(<li key={i} onClick={getThePageValue}>{i}</li>);
    }
    return page;
  };

  return (
    <>
      <h1>Testing</h1>
      {displayPageNumber()}
    </>
  );
};

export default Pagination;
