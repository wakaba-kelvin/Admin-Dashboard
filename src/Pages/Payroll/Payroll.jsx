import React, { useEffect, useState } from "react";
import "./Payroll.scss";
import { useGetAllPayrollRecordsQuery, useGetPayrollRecordByIdQuery } from "../../Feature/Payroll/Payroll";
import jsPDF from 'jspdf'; 

const Payroll = () => {
  const { data: payrollData, isLoading, isError, refetch } = useGetAllPayrollRecordsQuery();
  const [selectedPayrollId, setSelectedPayrollId] = useState(null);
  const { data: selectedPayroll, error, isLoading: selectedPayrollLoading } = useGetPayrollRecordByIdQuery(selectedPayrollId, {
    skip: !selectedPayrollId,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleDownload = async (employeeId, employeeName, grossPay, deductions, advance, netPay) => {
    try {
      const doc = new jsPDF();
      doc.setFont("helvetica");
      doc.setFontSize(12);
  
      // Add payslip content
      doc.text('PAY SLIP', 105, 10, { align: 'center' });
      // doc.setFontStyle('bold');
      doc.text(`Employee Name: ${employeeName}`, 10, 30);
      doc.text(`Gross Pay: ${grossPay}`, 10, 45);
      doc.text(`Deductions: ${deductions}`, 10, 60);
      doc.text(`Advance: ${advance}`, 10, 75);
      doc.text(`Net Pay: ${netPay}`, 10, 90);
  
      // Add border to the payslip
      doc.setLineWidth(0.5);
      doc.rect(5, 5, 200, 100);
  
      // Save the PDF
      doc.save(`${employeeName}_payslip.pdf`);
    } catch (error) {
      console.error("Error downloading payslip:", error);
      alert(`Error downloading payslip: ${error.message}`);
    }
  };
  
  

  const resetSelectedPayroll = () => {
    setSelectedPayrollId(null);
  };

  return (
    <div className="payroll">
      <div className="payroll-table">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data</div>}
        {payrollData && (
          <table>
            <thead>
              <tr>
                <th>Emp. Details</th>
                <th>Gross Pay</th>
                <th>Deductions</th>
                <th>Advance</th>
                <th>Net Pay</th>
                <th>Download Payslip</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((employee) => (
                <tr key={employee.PayrollID}>
                  <td>
                    {employee.FirstName} {employee.LastName}
                  </td>
                  <td>${employee.GrossPay}</td>
                  <td>
                    NHIF: ${employee.NHIFDeduction}, NSSF: ${employee.NSSFDeduction}, HELB: ${employee.HELBDeduction}
                  </td>
                  <td>${employee.Advance}</td>
                  <td>${employee.NetPay}</td>
                  <td>
                    <button onClick={() => handleDownload(employee.PayrollID, `${employee.FirstName} ${employee.LastName}`, employee.GrossPay, `NHIF: ${employee.NHIFDeduction}, NSSF: ${employee.NSSFDeduction}, HELB: ${employee.HELBDeduction}`, employee.Advance, employee.NetPay)}>
                      Download Payslip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Render the selected payroll details */}
        {selectedPayrollLoading && <div>Loading payroll details...</div>}
        {selectedPayroll && (
          <div className="payroll-details">
            <h2>Payroll Details</h2>
            <p>
              Employee: {selectedPayroll.FirstName} {selectedPayroll.LastName}
            </p>
            <button onClick={resetSelectedPayroll}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payroll;
