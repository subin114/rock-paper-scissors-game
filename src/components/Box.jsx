/* eslint-disable react/prop-types */
const Box = ({ title, item, result }) => {
  let res;

  // Computer 카드인지 && 비긴건 아닌지 && 빈 값인지
  if (title === "Computer" && result !== "tie" && result !== "") {
    res = result === "Win" ? "Lose" : "Win";
  } else {
    res = result;
  }

  return (
    <div className="box">
      <h1>{title}</h1>
      <h2 className="itemTxt">{item && item.name}</h2>
      <img src={item && item.img} />
      <h2 className={`${res}`}>{res}</h2>
    </div>
  );
};

export default Box;
