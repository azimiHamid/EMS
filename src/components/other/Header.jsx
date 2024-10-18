/* eslint-disable react/prop-types */
const Header = ({ role }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="">
        <h1 className="text-2xl font-bold">
          Hello, <span className="text-yellow-400">{role}</span> 👋
        </h1>
      </div>
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
        Log Out
      </button>
    </div>
  );
};

export default Header;
