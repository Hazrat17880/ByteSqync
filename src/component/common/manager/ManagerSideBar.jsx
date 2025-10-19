'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Palette,
  Briefcase,
  Users,
  GraduationCap,
  Settings,
  Phone,
  Info,
  ChevronDown,
  LogOut,
  User
} from 'lucide-react';
import { toast } from 'react-toastify';

// Sidebar Component
const ManagerSidebar = ({ isOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [openSubmenus, setOpenSubmenus] = useState({});
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    // { name: 'Dashboard', icon: LayoutDashboard, path: '/admin-dashboard' },
    // { 
    //   name: 'Services', 
    //   icon: Palette,
    //   submenu: [
    //     { name: 'Creative Services', path: '/admin-dashboard/services/creative' },
    //     { name: 'Consulting Services', path: '/admin-dashboard/services/consulting' },
    //     { name: 'Academic Services', path: '/admin-dashboard/services/academic' },
    //   ]
    // },
    // { name: 'Projects', icon: Briefcase, path: '/admin-dashboard/projects' },
    { name: 'Students', icon: Users, path: '/manager-dashboard/students' },
    { name: 'Teachers', icon: GraduationCap, path: '/manager-dashboard/teachers' },
    { name: 'Settings', icon: Settings, path: '/manager-dashboard/settings' },
    // { name: 'Contact Us', icon: Phone, path: '/admin-dashboard/contact' },
    // { name: 'About Us', icon: Info, path: '/admin-dashboard/about' },
  ];

  // Set active menu based on current pathname
  useEffect(() => {
    const findActiveMenu = () => {
      // Check main menu items
      for (const item of menuItems) {
        if (item.path === pathname) {
          setActiveMenu(item.name);
          return;
        }
        
        // Check submenu items
        if (item.submenu) {
          for (const subItem of item.submenu) {
            if (subItem.path === pathname) {
              setActiveMenu(subItem.name);
              setOpenSubmenus(prev => ({ ...prev, [item.name]: true }));
              return;
            }
          }
        }
      }
    };

    findActiveMenu();
  }, [pathname]);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const handleClick = (name, path) => {
    setActiveMenu(name);
    if (path) {
      router.push(path);
      if (toggleSidebar) toggleSidebar(); // auto-close sidebar on mobile
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (res.ok) {
        toast.success('Logged out successfully');
        // Clear any client-side storage if needed
        localStorage.removeItem('adminToken');
        sessionStorage.removeItem('adminToken');
        
        // Redirect to login page
        router.push('/admin-auth-login');
      } else {
        const data = await res.json();
        toast.error(data.message || 'Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed. Please try again.');
    }
  };

  // Helper function to check if a menu item is active
  const isMenuItemActive = (itemName, itemPath, subItems = []) => {
    if (activeMenu === itemName) return true;
    
    // Check if any subitem is active
    return subItems.some(subItem => activeMenu === subItem.name);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative top-0 left-0 h-full w-64 bg-primary text-white 
        transform transition-transform duration-300 z-50 md:translate-x-0 md:flex md:flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Company Logo */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center">
            <div className="bg-accent p-2 rounded-lg mr-3">
              <Palette size={20} />
            </div>
            <h1 className="text-xl  text-white font-virtual tracking-wider">PIXI GROUP</h1>
          </div>
          <p className="text-xs text-white/70 mt-1">Admin Panel</p>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-4 overflow-y-auto sidebar-scroll">
          <ul className="space-y-1 px-3 pb-20">
            {menuItems.map((item) => {
              const isActive = isMenuItemActive(item.name, item.path, item.submenu);
              
              return (
                <li key={item.name}>
                  <button
                    onClick={() => 
                      item.submenu 
                        ? toggleSubmenu(item.name) 
                        : handleClick(item.name, item.path)
                    }
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      isActive ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon size={18} className="mr-3" />
                      <span>{item.name}</span>
                    </div>
                    {item.submenu && (
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform ${openSubmenus[item.name] ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>

                  {item.submenu && openSubmenus[item.name] && (
                    <ul className="ml-9 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleClick(subItem.name, subItem.path)}
                            className={`w-full flex items-center p-2 rounded-lg text-sm transition-colors ${
                              activeMenu === subItem.name ? 'bg-white/10' : 'hover:bg-white/5'
                            }`}
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center p-2 rounded-lg bg-white/5">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-2">
              <User size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-white/70">Super Admin</p>
            </div>
            <button 
              onClick={handleLogout}
              className="p-1 rounded hover:bg-white/10 transition-colors"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Hide scrollbars with CSS */}
      <style jsx global>{`
        .sidebar-scroll::-webkit-scrollbar {
          display: none;
        }
        .sidebar-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default ManagerSidebar;