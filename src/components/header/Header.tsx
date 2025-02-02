import { useAuth } from '../../context/auth/AuthContext';
import Logo from './component/Logo';

const Header = () => {
  const { logout } = useAuth();

  const headerFontColor = 'text-blue-800';
  return (
    <div className='flex justify-between w-full p-6 border-b-1 border-b-gray-200 bg-gray-50 shadow-sm'>
      <Logo color={headerFontColor} />
      <span
        className={`cursor-pointer ${headerFontColor} hover:text-blue-500`}
        onClick={logout}
      >
        Logout
      </span>
    </div>
  );
};

export default Header;
