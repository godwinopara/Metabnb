const ImageWrapper = ({ image1, image2, styles }) => {
  return (
    <div className={`xl:w-1/2 ${styles}`}>
      <img src={image1} alt="Nft place to stay" className="mb-2" />
      <img src={image2} alt="Nft place to stay" />
    </div>
  );
};

export default ImageWrapper;
