export class Appserver
{
    constructor
    (
        public hostnavn?: string,
        public driftslokasjon?: string, // Protokoll for kommunikasjon mellom lastbalanserer og appservere. Som oftest HTTP eller TCP. Headere i angitt protokoll må være lesbare for lastbalansereren.
    )
    {}

}