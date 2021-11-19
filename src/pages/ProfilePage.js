import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ChangePassWord from "../components/profile/ChangePassWord";
import Profile from "../components/profile/Profile";
import { getUser } from "../services/user";

function ProfilePage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(async (dispatch) => {
      return getUser().then((res) => {
        dispatch({ type: "USER_FETCHED", payload: res.data });
      });
    });

    return () => {
      dispatch({ type: "USER_EMPTY" });
    };
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile info={user} />} />
        <Route path="/password" element={<ChangePassWord />} />
      </Routes>
    </>
  );
}

export default ProfilePage;
