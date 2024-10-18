import Header from "../other/Header";

const AdminDashboard = () => {
  const role = "Admin";
  return (
    <div className="p-6 text-white mx-auto min-h-screen bg-gray-900">
      <div className="w-full max-w-[90%] xl:max-w-[80%] mx-auto p-6">
        <Header role={role} />
      </div>

      <div className="w-full flex-1 max-w-[90%] xl:max-w-[80%] p-6 bg-gray-800 rounded-lg transition-shadow hover:shadow-custom-blue mx-auto">
        <h2 className="text-white text-2xl font-semibold mb-4">Create Task</h2>
        <hr className="lg:block w-1/3 hidden" />

        <form className="lg:flex gap-6 justify-between place-items-center">
          <section className="flex flex-col flex-1">
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-1">
                Task Title
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Make a UI design"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Detailed description of task (Max 500 words)"
                rows="8"
                required
              />
            </div>
          </section>

          <section className="flex flex-col flex-1">
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-1">
                Assign To
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Assign To"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-1">
                Category
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Design, Development, etc..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Create Task
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
