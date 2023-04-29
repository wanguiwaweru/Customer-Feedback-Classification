import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";


export default function FeedBackList() {
    const [applicationList, showApplicationList] = useState([]);

    const deleteComment = (id) => {
        axios.delete(`http://localhost:8000/comments/${id}`).then(() => {
            window.location.reload(false);
        })
    }
   
    useEffect(() => {
        axios.get("http://localhost:8000/comments").then((allApplications) => {
            showApplicationList(allApplications.data);
        });
    }, []);

    return (
        <>
            <h1 style={{ margin:"20px 0 20px 50px" }}>All Comments</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" fontWeight="bold">
                                Name
                            </TableCell>
                            <TableCell align="center" fontWeight="bold">
                                Email
                            </TableCell>
                            <TableCell align="center" fontWeight="bold">
                                phoneNumber
                            </TableCell>
                            <TableCell align="center" fontWeight="bold">
                                Comments
                            </TableCell>
                            <TableCell align="center" fontWeight="bold">
                                Classification
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applicationList.map((application, key) => (
                            <TableRow key={application.key}>
                                <TableCell align="center" component="th" scope="row">{application.name}</TableCell>
                                <TableCell align="center">{application.email}</TableCell>
                                <TableCell align="center">{application.phoneNumber}</TableCell>
                                <TableCell align="center">{application.comment} </TableCell>
                                <TableCell align="center">{application.classification} </TableCell>
                                <TableCell align="center" style={{ color: "blue", cursor: "pointer" }} onClick={() => deleteComment(application.id)} > Delete</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}