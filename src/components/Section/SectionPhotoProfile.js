import React from "react";
import useStore from "../../useStore";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// to remove
import photo from "../../images/gum.jpg"

const SectionPhotoProfile = () => {
  const { photoProfile } = useStore();

  return (
    <div className="section-photo-profile" style={{ width: "550px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} align="center"><h2>이덕호</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2} style={{padding : "0px", borderBottomWidth : "0px"}}>
              <img src={photo} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}>출생</TableCell>
            <TableCell>{photoProfile.birth.date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{photoProfile.birth.place}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>국적</TableCell>
            <TableCell>{photoProfile.nationality}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>신체</TableCell>
            <TableCell>
              <span>{photoProfile.body.height}</span>,
              <span>{photoProfile.body.weight}</span>,
              <span>{photoProfile.body.bloodType}</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>학력</TableCell>
            <TableCell>
              <div>{photoProfile.education.elementary}</div>
              <div>{photoProfile.education.middle}</div>
              <div>{photoProfile.education.elementary}</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>가족</TableCell>
            <TableCell>
              <div>
                부 {photoProfile.family.father}, 모 {photoProfile.family.mother}
                , 형 {photoProfile.family.brother}, 처{" "}
                {photoProfile.family.wife}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>병역</TableCell>
            <TableCell>
              <span>
                {photoProfile.military.kind}{" "}
                {photoProfile.military.state}
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>연락</TableCell>
            <TableCell>
              <span>{photoProfile.contact.mobile}</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default SectionPhotoProfile;
