import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

/**
 * The Layout component in JavaScript React renders a webpage layout with a sidebar, page content, and
 * HTML tags.
 * @returns The `Layout` component is being returned, which consists of a `div` element with the class
 * name "App". Inside this `div`, there is a `Sidebar` component, a `div` element with the class name
 * "page" containing some text elements and an `Outlet` component.
 */
const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>
                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    );
};

export default Layout;