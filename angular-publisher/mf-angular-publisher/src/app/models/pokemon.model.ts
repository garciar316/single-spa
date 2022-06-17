import { Stat } from "./detail.model";

export interface Pokemon {
    id: number;
    name: string;
    specie: string;
    height: number;
    weight: number;
    image?: string;
    stats?: Stat[]
}