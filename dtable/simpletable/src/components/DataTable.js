import { useState } from "react";
import { UserData } from "../Data";

export default function DataTable() {
  const [tableData, setTablesData] = useState(UserData)
  return (
    <table className="table" class="table  table-hover table-sm w-auto text-nowrap table-fit table-responsive table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          
          <th>Date</th>
          <th>Origin IMSID</th>
          <th>Processing IMSID</th>
          <th>Conversation Flag</th>
          <th>Message DRRN</th>
          <th>Node Name</th>
          <th>Input Count</th>
          <th>Destination</th>
          <th>UOW</th>
          <th>Program Name</th>
          <th>PSB Name</th>
          <th>Trans Code</th>
          <th>PST Number</th>
          <th>Timestamp</th>
          <th>Program Type</th>
          <th>Job Name</th>
          <th>Step Name</th>
          <th>User ID</th>
          <th>Net ID</th>  
        </tr>
      </thead>

      <tbody>
        {tableData.map(user => (
          <tr key={user.ID}>
            <td>{user.ID}</td>
            <td>{user.Date}</td>
            <td>{Array.isArray(user.OriginIMSID) ? user.OriginIMSID.join(', ') : ''}</td>
            <td>{Array.isArray(user.ProcessingIMSID) ? user.ProcessingIMSID.join(', ') : ''}</td>
            <td>{user.CoversationFlag}</td>
            <td>{user.MessageDRRN}</td>
            <td>{user.NodeName}</td>
            <td>{user.InputCount}</td>
            <td>{Array.isArray(user.Destination) ? user.Destination.join(', ') : ''}</td>
            <td>{Array.isArray(user.UOW) ? user.UOW.join(', ') : ''}</td>
            <td>{Array.isArray(user.ProgramName) ? user.ProgramName.join(', ') : user.ProgramName}</td>
            <td>{Array.isArray(user.PSBName) ? user.PSBName.join(', ') : user.PSBName}</td>
            <td>{user.TransCode}</td>
            <td>{user.PSTNumber}</td>
            <td>{user.Timestamp}</td>
            <td>{user['Program Type']}</td>
            <td>{Array.isArray(user['Job Name']) ? user['Job Name'].join(', ') : user['Job Name']}</td>
            <td>{Array.isArray(user['Step Name']) ? user['Step Name'].join(', ') : user['Step Name']}</td>
            <td>{Array.isArray(user.UserID) ? user.UserID.join(', ') : user.UserID}</td>
            <td>{user.NetID}</td>
          </tr>

        ))}
      </tbody>
    </table>
  )
}
