import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PageLoader = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        handleStart();
        const timeout = setTimeout(handleComplete, 4000);

        return () => clearTimeout(timeout);
    }, [location.pathname]);

    return (
        <>
            {loading && <Loader />}
            {children}
        </>
    );
}

export default PageLoader;