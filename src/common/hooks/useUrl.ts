import { useLocation } from 'react-router-dom';

const useUrl = () => {
    const location = useLocation()
    const pathname = location.pathname;

    return pathname;
};

export default useUrl;
