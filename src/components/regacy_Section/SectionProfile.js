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
              <h2>{props.wiki.name}</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.wiki.profile.map((item) => (
            <TableRow key= {item.head}>
              <TableCell>{item.head}</TableCell>
              <TableCell>
                {item.content.map((item2) => (
                  <div key= {item2} className="section-profile">{item2}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default SectionProfile;
