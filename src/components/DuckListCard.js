function DuckListCard({ duck, handleDuckClick }) {
  return (
    <img
      src={duck.img_url}
      alt={duck.name}
      onClick={() => handleDuckClick(duck)}
    />
  );
}

export default DuckListCard;
