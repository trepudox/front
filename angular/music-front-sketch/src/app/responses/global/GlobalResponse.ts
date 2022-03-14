import { Metadata } from './Metadata';

export class GlobalResponse<T> {
    public content: T;
    public metadata: Metadata;
}