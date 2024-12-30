import React, { useState } from "react";
import { PiCaretUpDownFill } from "react-icons/pi";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const Transactiondetails = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [expandedRows, setExpandedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null); // Changed to track only the visible dropdown
  const [selectedRows, setSelectedRows] = useState([]);

  const transactions = [
    {
      id: "#123412451",
      invoice: "#INV123",
      date: "June 1, 2024, 08:22 AM",
      recipient: "Julia Esteh",
      photo: "https://via.placeholder.com/40", // Placeholder photo
      amount: "$128.89",
      type: "Income",
      location: "Bangladesh, India",
      status: "Canceled",
    },
    {
      id: "#123412452",
      invoice: "#INV124",
      date: "June 2, 2024, 10:15 AM",
      recipient: "John Doe",
      photo: "https://via.placeholder.com/40",
      amount: "$200.00",
      type: "Expense",
      location: "Chennai, India",
      status: "Completed",
    },
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(transactions.map((transaction) => transaction.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const toggleRowExpansion = (id) => {
    setExpandedRows((prevExpanded) =>
      prevExpanded.includes(id)
        ? prevExpanded.filter((rowId) => rowId !== id)
        : [...prevExpanded, id]
    );
  };

  const toggleDropdown = (id) => {
    setDropdownVisible((prev) => (prev === id ? null : id)); // Toggle visibility of dropdown based on transaction id
  };

  const handleEdit = (id) => {
    alert(`Editing record with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Deleting record with ID: ${id}`);
  };

  return (
    <div className="transaction-details-container">
      <h1>Transaction Details</h1>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                style={{ color: "blue", width: "30px", height: "30px" }}
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>
              ID <PiCaretUpDownFill />
            </th>
            <th>
              Invoice <PiCaretUpDownFill />
            </th>
            <th>
              Date <PiCaretUpDownFill />
            </th>
            <th>
              Recipient <PiCaretUpDownFill />
            </th>
            <th>
              Amount <PiCaretUpDownFill />
            </th>
            {/* <th>Type <PiCaretUpDownFill /></th> */}
            <th>
              Location <PiCaretUpDownFill />
            </th>
            <th>
              Status <PiCaretUpDownFill />
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(transaction.id)}
                    onChange={() => handleSelectRow(transaction.id)}
                  />
                </td>
                <td>{transaction.id}</td>
                <td>{transaction.invoice}</td>
                <td>{transaction.date}</td>
                <td>
                  <div className="recipient">
                    <img
                      src={transaction.photo}
                      alt="Recipient"
                      className="recipient-photo"
                    />
                    {transaction.recipient}
                  </div>
                </td>
                <td>{transaction.amount}</td>
                {/* <td>
                  {transaction.type === 'Income' ? (
                    <IoArrowDownCircleOutline className="icon-green" />
                  ) : (
                    <IoArrowUpCircleOutline className="icon-red" />
                  )}
                </td> */}
                <td>{transaction.location}</td>
                <td
                  className={`status ${
                    transaction.status === "Pending"
                      ? "status-pending"
                      : transaction.status === "Completed"
                      ? "status-completed"
                      : "status-canceled"
                  }`}
                >
                  {transaction.status}
                </td>
                <td>
                  <div className="action-menu">
                    <BsThreeDotsVertical
                      className="action-icon"
                      onClick={() => toggleDropdown(transaction.id)}
                    />
                    {dropdownVisible === transaction.id && (
                      <div className="dropdown-menu">
                        <button onClick={() => handleEdit(transaction.id)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(transaction.id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
              {expandedRows.includes(transaction.id) && (
                <tr className="details-row">
                  <td colSpan="10">More details about {transaction.id}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactiondetails;
