export interface DtoClient {
  nombre: string;
  idCliente: number;
  direccion: string;
  localidad: string;
  provincia: string;
  condicionIVA?: string;
  observaciones?: string;
}

export const dtoClient: DtoClient = {
  nombre: "Carlos",
  idCliente: 12,
  direccion: "G. Paz",
  localidad: "Tucuman",
  provincia: "Tucuman",
  condicionIVA: "RI",
  observaciones: "alguna observacion",
};

const ClientDto = (perfil: DtoClient) => console.log(perfil);

ClientDto(dtoClient);

export default ClientDto;
