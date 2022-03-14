import { Artist } from './Artist';
import { Music } from './Music';

export class Album {
    public id: number;
    public name: string;
    public artist: Artist;
    public tracks: Music[];
    public releaseDate: Date;
}