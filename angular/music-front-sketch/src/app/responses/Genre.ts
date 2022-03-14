import { Music } from './Music';

export class Genre {
    public id: number;
    public name: string;
    public description: string;
    public tracks: Music[];
}