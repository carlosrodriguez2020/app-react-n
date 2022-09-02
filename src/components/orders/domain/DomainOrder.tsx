export interface DtoOrder {
    nombre: string;
    fechas: string;
    idCliente: number;
    direccion: string;
    localidad: string;
    provincia: string;
    condicionIVA?: string;
    observaciones?: string;
    EstadoPendiente: string;
}