import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';

type Props = {
  children: React.ReactNode;
};

const RequireAuth: React.FC<Props> = ({ children }) => {
  const userData = useAppSelector((state) => state.user.data);
  const location = useLocation();
  if (!userData) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default RequireAuth;
