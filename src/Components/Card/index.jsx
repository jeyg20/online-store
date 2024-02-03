const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 bg-white/60 rounded-lg text-black text-sm px-3 py-0.5">
          Electronics
        </span>
        <img
          className="w-full h-full rounded-lg object-cover"
          src="https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg"
          alt="Headphones"
        />
        <div className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-medium">$300</span>
      </p>
    </div>
  );
};

export default Card;
