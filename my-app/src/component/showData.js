import { Table } from "react-bootstrap";
import "./form.css"

function FormDataTable({ formData }) {
    return (
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>College Name</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.studentName}</td>
              <td>{data.email}</td>
              <td>{data.number}</td>
              <td>{data.college}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  export default FormDataTable