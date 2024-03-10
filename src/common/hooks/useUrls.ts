import { useLocation } from 'react-router-dom';

const useUrls = () => {
    const location = useLocation()
    const pathname = location.pathname;

    return pathname;
};

export default useUrls;
