import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaIcons.FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Cadastro de Clientes',
    path: '/customerRegistration',
    icon: <BsIcons.BsPersonPlusFill />,
    cName: 'nav-text'
  },
  {
    title: 'Clientes',
    path: '/customer',
    icon: <BsIcons.BsPersonCheckFill />,
    cName: 'nav-text'
  },
  {
    title: 'Prontuários',
    path: '/medicalRecord',
    icon: <IoIcons.IoMdDocument />,
    cName: 'nav-text'
  },
  {
    title: 'Novo Atendimento',
    path: '/newAppointment',
    icon: <FaIcons.FaAmbulance />,
    cName: 'nav-text'
  },
  {
    title: 'Agenda',
    path: '/schedule',
    icon: <MdIcons.MdBook />,
    cName: 'nav-text'
  },
  {
    title: 'Especialistas',
    path: '/specialist',
    icon: <MdIcons.MdBusinessCenter />,
    cName: 'nav-text'
  }
];
