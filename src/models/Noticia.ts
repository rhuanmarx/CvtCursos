export class Noticia{
    private id : number;
    private Titulo : string;
    private Tema: string;
    private Data: string;
    private Horario : string;
    private Descricao: string;
    private Foto : string;

    constructor(id : number, Titulo : string, Tema : string, Data : string, Horario: string,  Descricao : string, Foto : string){
        this.id = id;
        this.Titulo = Titulo;
        this.Tema = Tema;
        this.Data = Data;
        this.Horario = Horario;
        this.Descricao = Descricao;
        this.Foto = Foto;
    }
}