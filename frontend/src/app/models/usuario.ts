export class Usuario {

    constructor( 
        _id='',
        nombre='',
        apellido='',
        ident=0,
        contrasena=0,
        id_enlace=0,
        telefono=0, 
        direccion='',
        municipio='', 
        comuna=0, 
        puesto_votacion='', 
        mesa_votacion=0, 
        nivel_escolaridad='', 
        perfil_ocupacional='', 
        trabaja='',
        personas_cargo=0
    ){
        this._id=_id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.ident=ident;
        this.contrasena=contrasena;
        this.id_enlace=id_enlace;
        this.telefono=telefono;
        this.direccion=direccion;
        this.municipio=municipio;
        this.comuna=comuna;
        this.puesto_votacion=puesto_votacion; 
        this.mesa_votacion=mesa_votacion;
        this.nivel_escolaridad=nivel_escolaridad;
        this.perfil_ocupacional=perfil_ocupacional;
        this.trabaja=trabaja;
        this.personas_cargo=personas_cargo;
    }
    _id: String;
    nombre:  String;
    apellido: String;
    ident: Number;
    contrasena: Number;
    id_enlace: Number;
    telefono: Number;
    direccion: String;
    municipio: String;
    comuna: Number;
    puesto_votacion: String;
    mesa_votacion: Number;
    nivel_escolaridad: String;
    perfil_ocupacional: String;
    trabaja: String;
    personas_cargo: Number; 
}
