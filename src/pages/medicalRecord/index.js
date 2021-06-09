import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import ClientMedicalRecord from "../../components/ClientMedicalRecord";
import { getMedicalRecord } from "../../api/MedicalRecordApi";

const MedicalRecord = () => {
  const [setMedicalRecord] = useState([]);

  useEffect(() => {
    getMedicalRecord()
      .then((response) => {
        setMedicalRecord(response.data);
      })
      .catch((error) => {
        console.error(
          "Não foi possível encontrar informações no prontuário do paciente"
        );
      });
  }, []);

  return (
    <Container>
      medicalrecord.map((medicalrecord) 
      <ClientMedicalRecord
        key={medicalrecord.description}
        appointment={medicalrecord}
      />
      
    </Container>
  );
};

export default MedicalRecord;
