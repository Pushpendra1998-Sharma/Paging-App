import React, { useState, useEffect } from 'react'

import Pagination from './Pagination';

import './App.css';



export default function App() {

  const [users_list, setusers_list] = useState([]);
  const [response_data, setresponse_data] = useState(null);
  const [no_on_page, setno_on_page] = useState(1);
  const [per_page_item, setper_page_item] = useState(null);
  const [total_page_item, settotal_page_item] = useState(null);
  const [total_page, settotal_page] = useState(null);

  const fetchData = () => {
    return fetch(`https://reqres.in/api/users?page=${no_on_page}`)
          .then((response) => response.json())
          .then((data) =>
            // setusers_list([...data.data])
            { setresponse_data(data);
              setusers_list([...data.data]);
              setno_on_page(data.page);
              setper_page_item(data.per_page);
              settotal_page_item(data.total);
              settotal_page(data.total_pages);
            });
        }

const paginate = (pageNumber) => {
  setno_on_page(pageNumber);
}

useEffect(() => {
  if (no_on_page)
  fetchData();
}, [no_on_page]);

    return (
        <div className="page-design">
          <table className="table-size">
          <tr>
              <th>Id</th>
            <th>E-mail</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {users_list.map((items, index) => { 
             return <tr>
                  <td>{items.id}</td>
                 <td>{items.email}</td>
                 <td> {items.first_name} </td>
                 <td> {items.last_name} </td>   
              </tr>
          })}
          </table>
          <Pagination
            per_page_item={per_page_item}
            total_page={total_page}
            paginate={paginate}
          />
        </div>
    )
}





