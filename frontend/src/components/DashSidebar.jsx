import { Button, Modal, Sidebar } from "flowbite-react";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
  HiDocumentAdd,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signOut } from "../store/slices/user/userAction";

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  const handleSignout = async () => {
    await dispatch(signOut());
    if (error) {
      return;
    }
    navigate("/login");
  };
  return (
    <div className="md:min-h-screen shadow-md shadow-blue-400 rounded-md">
      <Sidebar className="w-full md:w-56 border rounded-md border-slate-400">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-1">
            {user && user.isAdmin && (
              <Link to="/dashboard/index">
                <Sidebar.Item active icon={HiChartPie} as="div">
                  Dashboard
                </Sidebar.Item>
              </Link>
            )}
            <Link to="/dashboard/profile">
              <Sidebar.Item
                active={location.pathname == "/dashboard/profile"}
                icon={HiUser}
                label={user.isAdmin ? "Admin" : "User"}
                labelColor="dark"
                as="div"
              >
                Profile
              </Sidebar.Item>
            </Link>
            {user.isAdmin && (
              <>
                {" "}
                <Link to="/dashboard/createpost">
                  <Sidebar.Item
                    active={location.pathname == "/dashboard/createpost"}
                    icon={HiDocumentAdd}
                    as="div"
                  >
                    Create Post
                  </Sidebar.Item>
                </Link>{" "}
                <Link to="/dashboard/posts">
                  <Sidebar.Item
                    active={location.pathname == "/dashboard/posts"}
                    icon={HiDocumentText}
                    as="div"
                  >
                    Posts
                  </Sidebar.Item>
                </Link>
              </>
            )}
            {user.isAdmin && (
              <>
                <Link to="/dashboard/users">
                  <Sidebar.Item
                    active={location.pathname == "/dashboard/users"}
                    icon={HiOutlineUserGroup}
                    as="div"
                  >
                    Users
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard/comments">
                  <Sidebar.Item
                    active={location.pathname == "/dashboard/comments"}
                    icon={HiAnnotation}
                    as="div"
                  >
                    Comments
                  </Sidebar.Item>
                </Link>
              </>
            )}
            <Sidebar.Item
              icon={HiArrowSmRight}
              className="cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to log out?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleSignout}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
