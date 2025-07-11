import { Outlet, Link, useNavigate } from "react-router-dom";
import ProfileInfo from "../components/Cards/ProfileInfo";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import {
  signInSuccess,
  signoutFailure,
  signoutStart,
} from "../redux/user/userSlice";
import Footer from "../components/Footer";



const PublicLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const onLogout = async () => {
    try {
      dispatch(signoutStart());

      const res = await axios.get("http://localhost:3000/api/auth/signout", {
        withCredentials: true,
      });

      if (res.data.success === false) {
        dispatch(signoutFailure(res.data.message));
        toast.error(res.data.message);
        return;
      }

      toast.success(res.data.message);
      dispatch(signInSuccess());
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      dispatch(signoutFailure(error.message));
    }
  };

  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <Link to={"/"}>
          <h2 className="text-xl font-medium text-black py-2">
            <span className="text-slate-500">Good</span>
            <span className="text-slate-900">Notes</span>
          </h2>
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-black">Features</Link>
          <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
        </div>

        <div  className="flex items-center gap-4">
          {!currentUser && (
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium bg-violet-600 text-white rounded hover:bg-violet-700 transition-all"
            >
              Login
            </Link>
          )}
          {currentUser?.rest && (
            <ProfileInfo userInfo={currentUser.rest} onLogout={onLogout} />
          )}

        </div>
      </div>

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;

