export interface options {
    label: label;
    repoId: string;
    token: string;
}
export interface label {
    id: string;
    name: string;
    color: string;
    description?: string;
}
