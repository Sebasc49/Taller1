// LAS PRUEBAS UNITARIAS TESTEANDO FUNCIONES 

// 1. importar dependencias, servicios, funciones
import suma from "../src/utils/ejemplo.js";


// 2. DEFINIR UN BLOQUE DE PRUEBAS -> FN SUMA 
/*
  PALABRAS RESERVADAS PARA HACER PRUEBAS SON:
  Describe -> AGRUPAR EL BLOQUE DE PRUEBAS
  if -> Define casos individuales dentro de cada bloque de pruebas
  Expect -> toBe -> Que es lo que queremos que suceda -> definimos cual es el respuesta que debe suceder 

*/

//1. paso una descripcion y luego una funciona flecha
describe('Probar la funcion suma', ()=>{
    //Aca va nuestro bloque de pruebas
    
    // caso prueba 1: se sumen numeros positivos
    it('deberia sumar dos numeros positivos, correctamente', ()=>{
        expect(suma(5,2)).toBe(7);
    });

    //caso de prueba 2: se sumen numeros negativos
    it('deberia sumar dos numeros negativos, correctamente', ()=>{
        expect(suma(-2,-4)).toBe(-6);
    });



});