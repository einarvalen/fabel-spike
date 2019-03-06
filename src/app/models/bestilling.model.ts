import { Lastbalansering } from './lastbalansering.model';

export class Bestilling {
    id: number;
    opprettetDato : Date;
    iktlosning:string;
    beskrivelse:string;
    pobref:string;
    kontaktperson:string;
    miljo:string;
    sikkerhetsniva:string;
    stat:string;
    lastbalanseringer?:Lastbalansering[];
}
