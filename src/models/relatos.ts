export class Relatos{
    private id : number;
    private Nome : string;
    private DatadoCursos: string;
    private Cursos: string;
    private Relato : string;
    private Foto : string;

    constructor(id : number, Nome : string, DatadoCursos : string, Cursos : string,  Relato : string, Foto : string){
        this.id = id;
        this.Nome = Nome;
        this.DatadoCursos = DatadoCursos;
        this.Cursos = Cursos;
        this.Relato = Relato;
        this.Foto = Foto;
    }
}