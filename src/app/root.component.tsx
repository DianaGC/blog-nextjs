import React from 'react';
import ReactDOM from 'react-dom';
//import './styles.css';
import NavLinks from './ui/NavLinks/NavLinks';
import { UserGroupIcon, HomeIcon, DocumentIcon } from "@heroicons/react/24/outline";  
import Link from 'next/link';


const SideNav = () => (
  <div>
    <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-6 md: flex" >
        <NavLinks />
    </div>
  
  </div>
);

export default SideNav