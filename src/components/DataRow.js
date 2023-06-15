import React from 'react';

export default function DataRow(rowInfo) {
  if (rowInfo.rowIndex % 2 === 0) {
    return (
      <>
        <td>{rowInfo.data.socialMediaLink}</td>
        <td>{rowInfo.data.socialMediaName}</td>
        <td>{rowInfo.data.description}</td>
      </>
    );
  } else {
    return (
      <React.Fragment>
        <tr className="stripe_row_color">
          <td>{rowInfo.data.socialMediaLink}</td>
          <td>{rowInfo.data.socialMediaName}</td>
          <td>{rowInfo.data.description}</td>
        </tr>
      </React.Fragment>
    );
  }
}
