import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Paper } from '@mui/material'
import { useParams, useLocation } from "react-router-dom";
import { getPublicInfoCourse } from "../services/course";
import { toast } from "react-toastify";
import ConfirmDialog from "../components/ConfirmPage/Student/ConfirmDialog";
import { Navigate } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function TeacherConfirmPage() {
    const [alreadyIn, setAlreadyIn] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    let query = useQuery(); //query.get('params')


    useEffect(() => {
        dispatch(async (dispatch) => {
          return getPublicInfoCourse(id).then((res) => {
            if (res.status === 200) {
                dispatch({ type: "COURSE_FETCHED", payload: res.data.payload });
            }
            if (res.status === 202) {
              if (res.data.message === "ALREADY_IN") {
                toast.info('Bạn đã tham gia lớp học');
                setAlreadyIn(true);
              } else toast.warning(res.data.message);
            }
          });
        });
        return () => {
          dispatch({ type: "COURSE_EMPTY" });
        };
    }, [dispatch, id, query]);

    if (alreadyIn) {
      const redirURL = '/course/' + id + '/info';
      return <Navigate to={redirURL} />
    }

    const paperStyle={ width:'50%', margin:"30px auto", paddingBottom: '30px' };

    return (
        <Paper elevation={10} style={paperStyle}>
            <ConfirmDialog />
        </Paper>
    );
}

export default TeacherConfirmPage;