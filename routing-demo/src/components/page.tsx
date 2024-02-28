const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    border: "1px solid  #3364ff",
    boxShadow: "5px 5px 2px lightblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <div style={cardStyle}>{children}</div>
    </>
  );
};
export default Card;
