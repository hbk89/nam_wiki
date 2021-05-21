import React, { useState, useEffect } from "react";
import useStore from "../../useStore";
import axios from "axios";
import {useObserver} from 'mobx-react'

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// to remove
import photo from "../../images/gum.jpg";
//import profile from "../../../server/models/profile";
import profileModel from "../../models/profileModel"

const SectionprofileModel = () => {
  axios.get('http://localhost:8080/api/profiles/60a710ee29ecc94388bec684')
  .then((Response) => {
    profileModel.set(Response.data);
  })
  .catch((err) => console.log(err));

  return useObserver(() => (
      <div className="section-photo-profile" style={{ width: "550px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} align="center"><h2>{profileModel.name}</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2} style={{padding : "0px", borderBottomWidth : "0px"}}>
              <img src={profileModel.photo} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}>출생</TableCell>
            <TableCell>{profileModel.birth.date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{profileModel.birth.place}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>국적</TableCell>
            <TableCell>{profileModel.nationality}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>신체</TableCell>
            <TableCell>
              <span>{profileModel.body.height}</span>,
              <span>{profileModel.body.weight}</span>,
              <span>{profileModel.body.bloodType}</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>학력</TableCell>
            <TableCell>
              <div>{profileModel.education.elementary.name}</div>
              <div>{profileModel.education.middle.name}</div>
              <div>{profileModel.education.elementary.name}</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>가족</TableCell>
            <TableCell>
              <div>
                부 {profileModel.family.father}, 모 {profileModel.family.mother}
                , 형 {profileModel.family.brother}, 처{" "}
                {profileModel.family.wife}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>병역</TableCell>
            <TableCell>
              <span>
                {profileModel.military.kind}{" "}
                {profileModel.military.state}
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>연락</TableCell>
            <TableCell>
              <span>{profileModel.contact.mobile}</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    ));
}
export default SectionprofileModel;
