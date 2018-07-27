export class operacion{
    public x1 : number;
    public x2 : number;
    public x3 : number;
    public y1 : number;
    public y2 : number;
    public y3 : number;
    public z1 : number;
    public z2 : number;
    public z3 : number;
    public result1 : number;
    public result2 : number;
    public result3 : number;


    constructor(
        x1 : number, x2 : number, x3 : number,
        y1 : number, y2 : number, y3 : number,
        z1 : number, z2 : number, z3 : number,
        result1 : number, result2 : number, result3 : number
    ){
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;

        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;

        this.z1 = z1;
        this.z2 = z2;
        this.z3 = z3;

        this.result1 = result1;
        this.result2 = result2;
        this.result3 = result3;
    }


    public MatrizA1(){
        var matriza1 = ( this.y2 * this.z3 - this.y3 * this.z2 );
        return  matriza1;
    }

    public MatrizA2(){
      var matriza2 = (this.x2 * this.z3 - this.x3 * this.z2);
        return matriza2;
    }

    public MatrizA3(){
        var matriza3 = (this.x2 * this.y3 - this.x3 * this.y2);
        return matriza3;
    }

    public Determinante(){
        var determinante = this.x1 * this.MatrizA1() - this.y1 * this.MatrizA2() + this.z1 * this.MatrizA3();
        return determinante;
    }

    public DeterminanteX(){
        var matrizA1 = this.result1 * (this.y2 * this.z3 - this.y3 * this.z2);
        var matrizA2 = this.y1 * (this.result2 * this.z3 - this.result3 * this.z2);
        var matrizA3 = this.z1 * (this.result2 * this.y3 - this.result3 * this.y2);
        var Determinante = matrizA1 - matrizA2 + matrizA3;
        return Determinante;
    }
    public DeterminanteY(){


        var matrizA1 = this.x1 * (this.result2 * this.y3 - this.result3 * this.y2);
        var matrizA2 = this.result1 * (this.x2 * this.y3 - this.x3 * this.y2);
        var matrizA3 = this.y1 * (this.x2 * this.result3 - this.x3 * this.result2);
        var Determinante = matrizA1 - matrizA2 + matrizA3 ;
        return Determinante;
    }
    public DeterminanteZ(){
        var matrizA1 = this.x1 * (this.y2 * this.result3 - this.y3 * this.result2);
        var matrizA2 = this.y1 * (this.x2 * this.result3 - this.x3 * this.result2);
        var matrizA3 = this.result1 * (this.x2 * this.y3 - this.x3 * this.y2);
        var Determinante = matrizA1 - matrizA2  + matrizA3 ;
        return Determinante;
    }
}
