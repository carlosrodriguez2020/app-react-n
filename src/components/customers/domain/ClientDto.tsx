import React from "react";

interface DtoClient {
  nombre: string;
  idCliente: number;
  direccion: string;
  localidad: string;
  provincia: string;
  condicionIVA: string;
  obsrvaciones: string;
}

const dtoClient = {
  nombre: "Carlos",
  idCliente: 12,
  direccion: "G. Paz",
  localidad: "Tucuman",
  provincia: "Tucuman",
  condicionIVA: "RI",
  obsrvaciones: "alguna observacion",
};

const ClientDto = (perfil: DtoClient) => console.log(perfil);

ClientDto(dtoClient);

export default ClientDto;
