import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import ClientMedicalRecord from "../../components/ClientMedicalRecord";
import { getMedicalRecord } from "../../api/MedicalRecordApi";
import Navbar from "../../components/Navbar";

const MedicalRecord = () => {
  const [medicalrecords, setMedicalRecord] = useState([]);

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
    <div>
      <Navbar />
      <Container>
        {medicalrecords.map((medicalrecord) => (
          <ClientMedicalRecord
            key={medicalrecord.id}
            medicalrecord={medicalrecord}
          />
        ))}
      </Container>
    </div>
  );
};

export default MedicalRecord;
