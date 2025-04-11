import { Outlet } from "react-router-dom";
import "./Root.scss";
import ScrollToTop from "../features/ScrollComponent/ScrollToTop";

const Root = () => {
  return (
    <>
      <main>
       <ScrollToTop />
        <Outlet />
      </main>
    </>
  );
}

export default Root;