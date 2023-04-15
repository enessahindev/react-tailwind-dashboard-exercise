import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonPlus, BsMessenger, BsListTask } from "react-icons/bs";
import {
  BiBookmarkHeart,
  BiCategory,
  BiError,
  BiLogIn,
  BiRegistered,
  BiShoppingBag,
  BiUserCheck,
  BiUserPlus,
} from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";

import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import { FiUser } from "react-icons/fi";

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const links = [
  {
    links: [
      {
        name: "Dashboard",
        icon: <BiBookmarkHeart />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "stores",
        icon: <BiShoppingBag />,
      },
      {
        name: "customers",
        icon: <RiContactsLine />,
      },
      {
        name: "catalog",
        icon: <BiCategory />,
      },
    ],
  },
  {
    title: "Managments",
    links: [
      {
        name: "users",
        icon: <BiUserPlus />,
      },
      {
        name: "users-group",
        icon: <FiUser />,
      },
      {
        name: "user edit profile",
        icon: <BiUserCheck />,
      },
    ],
  },
  {
    title: "Auth Pages",
    links: [
      {
        name: "Login",
        icon: <BiLogIn />,
      },
      {
        name: "Register",
        icon: <BiRegistered />,
      },
      {
        name: "Error",
        icon: <BiError />,
      },
    ],
  },
];

export const cartData = [
  {
    image: product1,
    name: "Red Candy",
    category: "Food Item",
    price: "$250",
  },
  {
    image: product2,
    name: "Fresh Tomato",
    category: "Vegetable Item",
    price: "$350",
  },
  {
    image: product3,
    name: "Ice Cream",
    category: "Milk Product",
    price: "$150",
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    name: "orange-theme",
    color: "#FB9678",
  },
];

export const userProfileData = [
  {
    icon: <BsPersonPlus />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsMessenger />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <BsListTask />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];
