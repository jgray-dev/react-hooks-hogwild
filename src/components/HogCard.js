function HogCard({ hog }) {
  console.log(hog);
  return (
    <div className="hog-card">
      <div>{hog.name}</div>
      <img src={hog.image} />
    </div>
  );
}

export default HogCard;
