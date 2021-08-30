import Image from 'next/image'

function Person({ person, onDelete }) {
  return (
    <div className="m-5 ">
    <figure className="group rounded-xl p-8">
      <div className="">
        <img className="w-48 h-60 rounded-3xl mx-auto group-hover:-translate-y-14" src={person.img} alt="" />
        <div className="-mt-12 flex">
          <div className="w-3/12"></div>
          <a href="https://instagram.com" target="_blank" ><Image className="rounded-xl invisible group-hover:visible" src="/insta_logo.jpg" width="40" height="40" alt="" /></a>
          <div className="w-2/12"></div>
          <a href="https://linkedin.com" target="_blank" ><Image className="rounded-xl invisible group-hover:visible" src="/linkedin_logo.png" width="40" height="40" alt="" /></a>
          <div className="w-3/12"></div>
        </div> 
      </div>
      <div className="pt-6 text-center">
        <div className="text-yellow-400">{person.nam}</div>
        <div className="text-green-300">{person.designation}</div>
          <div className="m-3">
            <button
              className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full"
              onClick={() => {
                onDelete(person);
              }}
            >
              Delete
            </button> *
          </div>
      </div>
    </figure>
    </div>
  );
}

export default Person;
