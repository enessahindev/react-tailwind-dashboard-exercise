import React from "react";

const Layout = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-14">
          react-tailwind-dashboard-exercise
        </h1>
        <ul className="mt-4">
          <tbody>
            <th>
              <td>Tech</td>
            </th>
          </tbody>
          <li>react</li>
          <li>tailwind</li>
          <li>@syncfusion</li>
          <li>@headlessui</li>
          <li>@emotion/react</li>
          <li>@heroicons/react</li>
          <hr />
          <tbody>
            <th>
              <td>Pages</td>
            </th>
          </tbody>
          <li>Dashboard</li>
          <li>Orders</li>
          <li>Stores</li>
          <li>Customers</li>
          <li>Catalog</li>
          <hr />
          <tbody>
            <th>
              <td>Managments</td>
            </th>
          </tbody>
          <li>Users</li>
          <li>Users Group</li>
          <li>User Edit Profile</li>
          <hr />
          <tbody>
            <th>
              <td>Auth Pages</td>
            </th>
          </tbody>
          <li>Login</li>
          <li>Register</li>
          <li>Error</li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
