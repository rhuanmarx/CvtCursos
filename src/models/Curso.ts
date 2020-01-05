export class Curso{
    private id : number;
    private Nome : string;
    private DatadeInicio : string;
    private DatadeFim : string;
    private Horario: string;
    private DiasdaSemana : string; 
    private CargaHoraria : string;
   private Descricao: string;
   private NumeroVaga: string;
    private Foto : string;

    constructor(id : number, Nome : string, DatadeInicio : string, DatadeFim : string, Horario: string, DiasdaSemana: string, CargaHoraria: string, Descricao : string, NumeroVaga: string, Foto : string){
        this.id = id;
        this.Nome = Nome;
        this.DatadeInicio = DatadeInicio;
        this.DatadeFim = DatadeFim;
        this.Horario = Horario;
        this.DiasdaSemana = DiasdaSemana;
        this.CargaHoraria = CargaHoraria;
        this.Descricao = Descricao;
        this.NumeroVaga = NumeroVaga;
        this.Foto = Foto;
    }
}