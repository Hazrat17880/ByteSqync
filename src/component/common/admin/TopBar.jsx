const { Bell, User, Menu, Search } = require("lucide-react");

const AdminTopBar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg mr-3 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-bold text-[#5C4D82]">Pixi Group Admin</h1>
      </div>

      <div className="flex items-center space-x-4">
        

        <button className="p-2 rounded-lg relative text-gray-600 hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#EB5935] rounded-full"></span>
        </button>

        <div className="hidden md:flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#5C4D82] flex items-center justify-center text-white mr-2">
            <User size={16} />
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopBar