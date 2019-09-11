export class Sugerencia {

    constructor( 
        _id='',
        id_usuario='',
        id_enlace='',
        asunto='',
        descripcion='',
        estado='',
    ){
        this._id=_id;
        this.id_usuario=id_usuario;
        this.id_enlace=id_enlace;
        this.asunto=asunto;
        this.descripcion=descripcion;
        this.estado=estado;
       
    }
    _id: String;
    id_usuario:  String;
    id_enlace: String;
    asunto: String;
    descripcion: String;
    estado: String;
}
