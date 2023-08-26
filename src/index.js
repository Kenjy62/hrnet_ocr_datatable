import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./src/output.css";

export default function Datatable({ data }) {
  const [employees, setEmployees] = useState(data);

  function compareByFirstName(a, b) {
    const firstNameA = a.firstname.toUpperCase();
    const firstNameB = b.firstname.toUpperCase();

    if (firstNameA < firstNameB) {
      return -1;
    }

    if (firstNameA > firstNameB) {
      return 1;
    }

    return 0;
  }

  function compareByLastName(a, b) {
    const lastNameA = a.lastname.toUpperCase();
    const lastNameB = b.lastname.toUpperCase();

    if (lastNameA < lastNameB) {
      return -1;
    }

    if (lastNameA > lastNameB) {
      return 1;
    }

    return 0;
  }

  function compareByStartDate(a, b) {
    const startDateA = new Date(a.startdate.split("/").reverse().join("/"));
    const startDateB = new Date(b.startdate.split("/").reverse().join("/"));

    if (startDateA < startDateB) {
      return -1;
    }

    if (startDateA > startDateB) {
      return 1;
    }

    return 0;
  }

  function compareByDepartment(a, b) {
    const departmentA = a.department.toUpperCase();
    const departmentB = b.department.toUpperCase();

    if (departmentA < departmentB) {
      return -1;
    }

    if (departmentA > departmentB) {
      return 1;
    }

    return 0;
  }

  function compareByBirthdate(a, b) {
    const birthDateA = new Date(a.birthdate.split("/").reverse().join("/"));
    const birthDateB = new Date(b.birthdate.split("/").reverse().join("/"));

    if (birthDateA < birthDateB) {
      return -1;
    }

    if (birthDateA > birthDateB) {
      return 1;
    }

    return 0;
  }

  function compareByStreet(a, b) {
    const streetA = a.street.toUpperCase();
    const streetB = b.street.toUpperCase();

    if (streetA < streetB) {
      return -1;
    }

    if (streetA > streetB) {
      return 1;
    }

    return 0;
  }

  function compareByCity(a, b) {
    const cityA = a.city.toUpperCase();
    const cityB = b.city.toUpperCase();

    if (cityA < cityB) {
      return -1;
    }

    if (cityA > cityB) {
      return 1;
    }

    return 0;
  }

  function compareByState(a, b) {
    const stateA = a.state.toUpperCase();
    const stateB = b.state.toUpperCase();

    if (stateA < stateB) {
      return -1;
    }

    if (stateA > stateB) {
      return 1;
    }

    return 0;
  }

  function compareByZip(a, b) {
    const zipA = parseInt(a.zipcode);
    const zipB = parseInt(b.zipcode);

    if (zipA < zipB) {
      return -1;
    }

    if (zipA > zipB) {
      return 1;
    }

    return 0;
  }

  // State

  // Order Ascendant or Descendant
  const [sortOrder, setSortOrder] = useState("asc");

  // Set filtered By Fistname, lastname etc..
  const [filterBy, setFilteredBy] = useState("firstname");

  // Total Entries
  const [totalEntries, setTotalEntries] = useState(employees?.length);

  // Number of Entries Display
  const [entriesShowing, setEntriesShowing] = useState(5);

  // Data Viewing
  const [dataViewing, setDataViewing] = useState(employees);

  // Number of entris at display
  const [numberEntriesDisplay, setNumberEntriesInView] = useState();

  // Actually Page
  const [currentPage, setCurrentPage] = useState(1);

  // Header Icons
  const [sortIcons, setSortIcons] = useState({
    firstname: null,
    lastname: null,
    startdate: null,
    department: null,
    birthdate: null,
    street: null,
    city: null,
    state: null,
    zip: null,
  });

  // Reset Page, Set Options, Filtering,
  useEffect(() => {
    setCurrentPage(1);

    const options = Array.from(
      { length: Math.ceil(employees?.length / 5) },
      (_, index) => (index + 1) * 5
    );
    setNumberEntriesInView(options);

    if (filterBy === "firstname") {
      let data;
      if (sortOrder === "asc") {
        data = employees?.sort(compareByFirstName);
      } else {
        data = employees?.sort((a, b) => compareByFirstName(b, a));
      }
      setDataViewing(data?.slice(0, entriesShowing));
    }

    if (filterBy === "lastname") {
      let data;
      if (sortOrder === "asc") {
        data = employees?.sort(compareByLastName);
      } else {
        data = employees?.sort((a, b) => compareByLastName(b, a));
      }
      setDataViewing(data?.slice(0, entriesShowing));
    }

    if (filterBy === "startdate") {
      let data;
      if (sortOrder === "asc") {
        data = employees.sort(compareByStartDate);
      } else {
        data = employees.sort((a, b) => compareByStartDate(b, a));
      }
      setDataViewing(data.slice(0, entriesShowing));
    }

    if (filterBy === "department") {
      let data;
      if (sortOrder === "asc") {
        data = employees.sort(compareByDepartment);
      } else {
        data = employees.sort((a, b) => compareByDepartment(b, a));
      }
      setDataViewing(data?.slice(0, entriesShowing));
    }

    if (filterBy === "birthdate") {
      let data;
      if (sortOrder === "asc") {
        data = employees.sort(compareByBirthdate);
      } else {
        data = employees.sort((a, b) => compareByBirthdate(b, a));
      }
      setDataViewing(data?.slice(0, entriesShowing));
    }

    if (filterBy === "city") {
      let data;
      if (sortOrder === "asc") {
        data = employees.sort(compareByCity);
      } else {
        data = employees.sort((a, b) => compareByCity(b, a));
      }
      setDataViewing(data?.slice(0, entriesShowing));
    }

    if (filterBy === "street") {
      let data;
      if (sortOrder === "asc") {
        data = employees.sort(compareByStreet);
      } else {
        data = employees.sort((a, b) => compareByStreet(b, a));
      }
      setDataViewing(data?.slice(0, entriesShowing));
    }

    if (filterBy === "state") {
      let data;
      if (sortOrder === "asc") {
        data = employees.sort(compareByState);
      } else {
        data = employees.sort((a, b) => compareByState(b, a));
      }
      setDataViewing(data?.slice(0, entriesShowing));
    }

    if (filterBy === "zip") {
      let data;
      if (sortOrder === "asc") {
        data = employees.sort(compareByZip);
      } else {
        data = employees.sort((a, b) => compareByZip(b, a));
      }
      setDataViewing(data?.slice(0, entriesShowing));
    }
  }, [filterBy, sortOrder, entriesShowing]);

  // Number of entries display and Pagination Gestion
  useEffect(() => {
    const startIndex = (currentPage - 1) * entriesShowing;
    const endIndex = startIndex + entriesShowing;
    setDataViewing(employees?.slice(startIndex, endIndex));
  }, [currentPage, entriesShowing]);

  // See or hide a filtering icon
  const handleSortToggle = (field) => {
    setFilteredBy(field);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));

    const resetIcons = {
      firstname: null,
      lastname: null,
      startdate: null,
      department: null,
      birthdate: null,
      street: null,
      city: null,
      state: null,
      zip: null,
    };

    setSortIcons((prevSortIcons) => ({
      ...resetIcons,
      [field]: sortOrder === "asc" ? faChevronUp : faChevronDown,
    }));
  };

  // Searchbar
  const handleSearchChange = (value) => {
    if (value === "") {
      setDataViewing(employees?.slice(0, entriesShowing));
      return;
    }

    const filteredList = employees.filter((employee) => {
      const searchableFields = [
        "firstname",
        "lastname",
        "startdate",
        "department",
        "birthdate",
        "street",
        "city",
        "state",
        "zipcode",
      ];

      return searchableFields.some((field) => {
        const fieldValue = employee[field].toLowerCase();
        return fieldValue.includes(value.toLowerCase());
      });
    });

    setDataViewing(filteredList);
  };

  return (
    <>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-2">
          <span>Show</span>
          <select onChange={(e) => setEntriesShowing(e.target.value)}>
            {numberEntriesDisplay?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>
        <div className="flex flex-row gap-4">
          <label htmlFor="searchbar">Search :</label>
          <input
            id="searchbar"
            onChange={(e) => handleSearchChange(e.target.value)}
            className="border border-black"
            type="text"
          />
        </div>
      </div>
      <div className="w-full flex flex-row border-b border-black">
        <div className="block customTable">
          <div
            onClick={() => handleSortToggle("firstname")}
            className="border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
          >
            <span>First Name</span>
            {sortIcons.firstname != null ? (
              <FontAwesomeIcon icon={sortIcons.firstname} />
            ) : null}
          </div>
          {dataViewing?.map((e, i) => {
            return (
              <div key={i} className="border-b py-1">
                <span className="customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal">
                  {e.firstname}
                </span>
              </div>
            );
          })}
        </div>
        <div className="block customTable">
          <div
            onClick={() => {
              handleSortToggle("lastname");
            }}
            className="border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
          >
            <span>Last Name</span>
            {sortIcons.lastname != null ? (
              <FontAwesomeIcon icon={sortIcons.lastname} />
            ) : null}
          </div>
          {dataViewing?.map((e, i) => {
            return (
              <div key={i} className="border-b py-1">
                <span className="customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal">
                  {e.lastname}
                </span>
              </div>
            );
          })}
        </div>
        <div className="customTable block">
          <div
            onClick={() => handleSortToggle("startdate")}
            className="border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
          >
            <span>Start Date</span>
            {sortIcons.startdate != null ? (
              <FontAwesomeIcon icon={sortIcons.startdate} />
            ) : null}
          </div>
          {dataViewing?.map((e, i) => {
            return (
              <div key={i} className="border-b py-1">
                <span className="customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal">
                  {e.startdate}
                </span>
              </div>
            );
          })}
        </div>
        <div className="customTable block">
          <div
            className="border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
            onClick={() => handleSortToggle("department")}
          >
            <span>Department</span>
            {sortIcons.department != null ? (
              <FontAwesomeIcon icon={sortIcons.department} />
            ) : null}
          </div>
          {dataViewing?.map((e, i) => {
            return (
              <div key={i} className="border-b py-1">
                <span className="customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal">
                  {e.department}
                </span>
              </div>
            );
          })}
        </div>
        <div className="customTable block">
          <div
            className="border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
            onClick={() => handleSortToggle("birthdate")}
          >
            <span>Date Of Birth</span>
            {sortIcons.birthdate != null ? (
              <FontAwesomeIcon icon={sortIcons.birthdate} />
            ) : null}
          </div>
          {dataViewing?.map((e, i) => {
            return (
              <div key={i} className="border-b py-1">
                <span className="customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal">
                  {e.birthdate}
                </span>
              </div>
            );
          })}
        </div>
        <div className="customTable block">
          <div
            className="border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
            onClick={() => handleSortToggle("street")}
          >
            <span>Street</span>
            {sortIcons.street != null ? (
              <FontAwesomeIcon icon={sortIcons.street} />
            ) : null}
          </div>
          {dataViewing?.map((e, i) => {
            return (
              <div key={i} className="border-b py-1">
                <span className="customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal">
                  {e.street}
                </span>
              </div>
            );
          })}
        </div>
        <div className="customTable block">
          <div
            className="border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
            onClick={() => handleSortToggle("city")}
          >
            <span>City</span>
            {sortIcons.city != null ? (
              <FontAwesomeIcon icon={sortIcons.city} />
            ) : null}
          </div>
          {dataViewing?.map((e, i) => {
            return (
              <div key={i} className="border-b py-1">
                <span className="customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal">
                  {e.city}
                </span>
              </div>
            );
          })}
        </div>
        <div className="customTable block">
          <div
            className="border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
            onClick={() => handleSortToggle("state")}
          >
            <span>State</span>
            {sortIcons.state != null ? (
              <FontAwesomeIcon icon={sortIcons.state} />
            ) : null}
          </div>
          {dataViewing?.map((e, i) => {
            return (
              <div key={i} className="border-b py-1">
                <span className="customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal">
                  {e.state}
                </span>
              </div>
            );
          })}
        </div>
        <div className="customTable block">
          <div
            className="border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
            onClick={() => handleSortToggle("zip")}
          >
            <span>Zip Code</span>
            {sortIcons.zip != null ? (
              <FontAwesomeIcon icon={sortIcons.zip} />
            ) : null}
          </div>
          {dataViewing?.map((e, i) => {
            return (
              <div key={i} className="border-b py-1">
                <span className="customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal">
                  {e.zipcode}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div>
          Showing 1 to {entriesShowing} of {totalEntries} entries
        </div>
        {totalEntries > entriesShowing ? (
          <div className="flex flex-row gap-4">
            <span>Previous</span>
            {Array.from(
              { length: Math.ceil(totalEntries / entriesShowing) },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-2 py-1 border ${
                    currentPage === index + 1 ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
            <span>Next</span>
          </div>
        ) : null}
      </div>
    </>
  );
}
