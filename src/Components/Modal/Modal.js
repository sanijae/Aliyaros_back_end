import React from 'react';
import { ModalBody, ModalFooter, ModalHeader, ModalMain, ModalTitle } from './styled';

export default function Modal({show,setShow}) {
  return (
    <ModalMain show={show}>
      <ModalHeader>
        <ModalTitle>Are you sure want to delete</ModalTitle>
      </ModalHeader>
      <ModalBody>
        Delete it know
      </ModalBody>
      <ModalFooter>
        footer
        <button onClick={()=>setShow(!show)}>Delete</button>
      </ModalFooter>
    </ModalMain>
  );
}
