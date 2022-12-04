import React from 'react';
import Upload from './UploadImageToS3WithReactS3';
import Site from './Site';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                Escuela
            </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink exact to="/" activeClassName="activeClicked">
                    
                <CDBSidebarMenuItem icon="columns">Menu</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="./UploadImageToS3WithReactS3" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Alumnos</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="./Site" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Materias</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Maestros</CDBSidebarMenuItem>
                </NavLink>
            </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
                style={{
                padding: '20px 5px',
                }}
            >
            </div>
                Cómputo en la nube
            </CDBSidebarFooter>
        </CDBSidebar>
        <Routes>
            <Route exact path='/UploadImageToS3WithReactS3' element={< Upload />}></Route>
            <Route exact path='/Site' element={< Site />}></Route>
        </Routes>
        </div>
  );
};

export default Sidebar;