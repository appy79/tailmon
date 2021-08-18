function Person({ person, onDelete }) {
  return (
    <figure className="m-5 md:flex rounded-xl border-solid border  p-8 bg-white bg-opacity-40">
      <img className="w-48 h-auto rounded-3xl" src={person.img} alt="" />
      <div className="pt-6 md:p-8 md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">{person.fourD}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-indigo-600">{person.nam}</div>
          <div className="text-green-800">{person.designation}</div>
          <div className="m-3">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                onDelete(person);
              }}
            >
              Delete
            </button>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Person;
