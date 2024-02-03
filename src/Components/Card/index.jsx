const Card = (data) => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 bg-neutral-300/60 rounded-lg text-black text-base font-semibold px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full rounded-lg object-cover"
          src={data.data.image}
          alt={data.data.title}
        />
        <div className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-normal w-36 h-5 truncate ...">
          {data.data.title}
        </span>
        <span className="text-lg font-medium">{data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
