/* eslint-disable react/react-in-jsx-scope */

function Spinner() {
  return (
    <div className="w-screen h-screen md:w-full md:h-full flex justify-center items-center bg-secondary-black">
      <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash"></span>
      <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.2s]"></span>
      <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.4s]"></span>
    </div>
  );
}

export default Spinner;
