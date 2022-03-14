import { Album } from './Album';
import { Artist } from './Artist';
import { Genre } from './Genre';

export class Music {
    public id: number;
    public name: string;
    public genre: Genre;
    public artist: Artist;
    public album: Album;
    public releaseDate: Date;
}