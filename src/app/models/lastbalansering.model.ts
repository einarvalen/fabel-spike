import { Appserver } from './appserver.model';


export class Lastbalansering
{
    constructor
    (
        public id?: number,
        public protokoll?: string, // Protokoll for kommunikasjon mellom lastbalanserer og appservere. Som oftest HTTP eller TCP. Headere i angitt protokoll må være lesbare for lastbalansereren.
        public host?: string, // DNS-navn for lastbalanseringen. Vanligvis (ikt-løsning/kortnavn)-lb[.miljø].vegvesen.no.
        public appservers?: Appserver[]
    )
    {}

}