import Card from "./Card";

const CardWrapper = ({ images }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((img, id) => {
        return <Card key={id} image={img} />;
      })}
    </div>
  );
};

export default CardWrapper;
