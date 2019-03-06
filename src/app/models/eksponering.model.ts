export class Eksponering
{
    constructor
    (
        public id?: number,
        public iktlosning?: string, 
        public eksponeringid?: string, // EksponeringsID
        public beskrivelse?: string, // Interaksjonsmønster
        public e_host?: string, // (Eksponert) Hostnavn 
        public e_port?: string, // (Eksponert) Port 
        public e_uri?: string, // (Eksponert) URI 
        public rp_uri?: string, // RP (Eksponert) URI 
        public lb_host?: string, 
        public lb_port?: string,
        public lb_uri?: string,
        public meldingsstr?: string,
        public klientsertref?: string,
        public serversertref?: string,
        public merknad_1?: string,
        public merknad_2?: string,
        public merknad_3?: string,
        public merknad_4?: string,
        public bestillingsnr?:number,
        public identitetsbarer?: string,
        public authentiseringsstyrke?: string,
        public identitetsleverandor?: string,
        public interaksjon?: string,
        public innholdstype?: string,
        public gradering?: string,
        public eksponeringsrute?: string,
        public tilgangspolicy?: string
    )
    {}

}