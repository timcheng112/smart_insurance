import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Searchbar from "../../components/Searchbar";
import Table from "../../components/Table";

const customers = [
  { id: 1, name: "John Doe", organisation: "SMRT", phone: "+65 91234567", age: 28, email: "johndoe@email.com" },
  { id: 2, name: "Ben Halim", organisation: "NUS", phone: "+65 92341234",  age: 24, email: "benhalim@email.com"},
  { id: 3, name: "Tim Cheng", organisation: "NUS", phone: "+65 87531203", age: 24, email: "timcheng@email.com" },
  { id: 4, name: "Vince Lim", organisation: "NUS", phone: "+65 92351273", age: 25, email: "vincelim@email.com" },
  { id: 5, name: "Spongebob", organisation: "CN", phone: "+65 81235539", age: 61, email: "spongebob@email.com" },
];

const DashboardCompany = ({ current }) => {
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const searchParams = ["name", "organisation", "phone"];
  const [query, setQuery] = useState("");

  useEffect(() => {
    setFilteredCustomers(
      query === ""
        ? customers
        : customers.filter(
            (customer) =>
              customer[searchParams[0]]
                .toString()
                .toLowerCase()
                .indexOf(query.toLowerCase()) > -1 ||
              customer[searchParams[1]]
                .toString()
                .toLowerCase()
                .indexOf(query.toLowerCase()) > -1 ||
              customer[searchParams[2]]
                .toString()
                .toLowerCase()
                .indexOf(query.toLowerCase()) > -1
          )
    );
  }, [filteredCustomers, query]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar current={current} />
      {/* <h1>Dashboard Company</h1> */}
      <Searchbar
        query={query}
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(e.target.value);
        }}
      />
      <Table customers={filteredCustomers} />
    </div>
  );
};

export default DashboardCompany;
