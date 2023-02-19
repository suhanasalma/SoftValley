import React, { useEffect, useState } from "react";

import {
  useFetchAssignQuery,
  useFetchSourceQuery,
  useFetchStatusQuery,
  useGetInfoQuery,
} from "../../Redux/InformationApi/informationApi";
import DataTable from "react-data-table-component";
import { FaPen, FaSearch, FaTrashAlt, FaExternalLinkAlt } from "react-icons/fa";
import FilterCards from "../../Components/Dashboard/FilterCards/FilterCards";
import Button from "../../Components/Dashboard/Button/Button";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(100);
  const [filterText, setFilterText] = useState("");
  // const {} = response?.data?.data?.data
  const { isLoading, data } = useGetInfoQuery({ page, perPage });
  const AssignResponse = useFetchAssignQuery();
  const sourseResponse = useFetchSourceQuery();
  const StatusResponse = useFetchStatusQuery();
  const handlePageChange = () => {};

  const handlePerRowsChange = () => {};

  console.log(data?.data?.data);

  const columns = [
    {
      name: "Lead Name",
      selector: (row) => row.leadName,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Followup Date",
      selector: (row) => row.followupDate,
    },
    {
      name: "Last Note",
      selector: (row) => (
        <div className="flex items-center">
          <p className="mr-2">{row.lastNote}</p>
          <FaPen className="sm:text-4xl lg:text-sm" />
        </div>
      ),
    },
    {
      name: "Assigned",
      selector: (row) => (
        <div>
          <img
            className="h-10 w-10 cursor-pointer "
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt=""
          ></img>
        </div>
      ),
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Preferred Countries",
      selector: (row) => row.preferredCountries,
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          <p className={`text-[${row.status?.color}]`}>
            {row.status?.name} {row.status?.color}
          </p>
        </div>
      ),
    },
    {
      name: "Source",
      selector: (row) => row.source,
    },
    {
      name: "Actions",
      selector: (row) => (
        <div className="flex items-center gap-5">
          <FaExternalLinkAlt />
          <FaTrashAlt />
          <FaPen />
        </div>
      ),
    },
  ];

  const tableData = data?.data?.data
    ?.filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
    )
    ?.map((user) => {
      return {
        leadName: user?.name,
        phone: user?.phone,
        followupDate: user?.followup_date,
        lastNote: "no note created",
        assigned: user?.lead_assignees?.map((image) => image?.image),
        email: user?.email,
        preferredCountries: user?.lead_preferred_countries?.map(
          (country) => country?.name
        ),
        status: user?.lead_status,
        source: user?.source?.name,
        actions: "Actions",
      };
    });

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  return (
    <>
      <div className="px-10 py-3 bg-slate-100">
        <div className="flex items-center border-2 bg-white w-56 rounded-lg">
          <input
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            type="text"
            className=" p-1 outline-none"
            placeholder="Search in leads table "
          />
          <FaSearch className="text-slate-400" />
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-5 my-10 mx-5">
        <FilterCards name="Assigness" api={AssignResponse} />
        <FilterCards name="Sources" api={sourseResponse} />
        <FilterCards name="Statuses" api={StatusResponse} />
        <input className="w-60 border-2 rounded-md p-1"  type="date"></input>
        <Button text="Filter" classes="bg-[#405189] text-white" />
        <Button text="Reset" classes="bg-white text-gray-400 border-2" />
      </div>
      <DataTable
        fixedHeader={true}
        columns={columns}
        data={tableData}
        progressPending={isLoading}
        selectableRows
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        highlightOnHover
        pointerOnHover
        customStyles={customStyles}
      />
    </>
  );
};

export default Dashboard;
