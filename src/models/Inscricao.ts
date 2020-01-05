export class Inscricao{
    private id : number;
    private Nome: string;
    private Email: string;
    private DatadeNascimento: string;
    private Idade: string;
    private Sexo: string;
    private Escolaridade: string;
    private RuaEndereco: string;
private Cidade: string;
private Municipio: string;
private Telefone: string;
private NomedoPai: string;
private NomedaMae: string;
private CursosEscolhidos: string; 
    private Foto : string;

    constructor(id : number, Nome : string, Email : string, DatadeNascimento : string, Idade : string, Sexo: string, Escolaridade: string, RuaEndereco: string, Cidade: string, Municipio: string, Telefone: string, NomedoPai: string, NomedaMae: string, CursosEscolhidos: string, Foto : string){
        this.id = id;
        this.Nome = Nome;
        this.Email = Email;
        this.DatadeNascimento = DatadeNascimento;
        this.Idade = Idade;
        this.Sexo = Sexo;
        this.Escolaridade = Escolaridade;
this.RuaEndereco = RuaEndereco;
this.Cidade = Cidade;
this.Municipio = Municipio;
this.Telefone = Telefone;
this.NomedoPai = NomedoPai;
this.NomedaMae = NomedaMae;
this.CursosEscolhidos = CursosEscolhidos;
        this.Foto = Foto;
    }
}