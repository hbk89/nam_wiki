import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// to remove
import photo from "../../images/gum.jpg";

const SectionProfile = (props) => {
  return (
        <div className="section-photo-profile" style={{ width: "550px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} align="center">
                  <h2>{props.profile.name}</h2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={2}
                  style={{ padding: "0px", borderBottomWidth: "0px" }}
                >
                  <img src={photo} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={2}>출생</TableCell>
                <TableCell>{props.profile.birth.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{props.profile.birth.place}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>국적</TableCell>
                <TableCell>{props.profile.nationality}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>신체</TableCell>
                <TableCell>
                  <span>{props.profile.body.height}</span>,
                  <span>{props.profile.body.weight}</span>,
                  <span>{props.profile.body.bloodType}</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>학력</TableCell>
                <TableCell>
                  {props.profile.edu.map((item) => (
                    <div key={item._id}>
                      <span>{item.name + item.level}</span>
                      <span>{" (" + item.status + ") "}</span>
                    </div>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>가족</TableCell>
                <TableCell>
                  {props.profile.family.map((item) => (
                    <span key = {item._id}>
                      {item.relation} {item.name},
                    </span>
                    
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>병역</TableCell>
                <TableCell>
                  <span>
                    {props.profile.military.kind}{" "}
                    {props.profile.military.state}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>연락</TableCell>
                <TableCell>
                  <span>{props.profile.contact.mobile}</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
  );
};
export default SectionProfile;
