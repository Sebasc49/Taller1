// 1. importamos dependencias, modulos y/o funciones
import supertest from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import { userModel } from "../src/models/users.model.js";

//2. Definir los bloques de prueba}
describe("Pruebas de los controladores de los usuarios", () => {
  /*
       Configuraciòn global de las pruebas
        beforeEach: para ejecutar acciones que queramos que se hagan antes de cada prueba
        afterAll: ejecuta acciones que queramos que se hagan al final de TODAS las peticiones*/

  // Limpiar la base de datos antes de cada prueba
  // El delete many se usa para borrar varios datos de la base de datos y los parentesis son para borrar varios datos
  beforeEach(async () => {
    await userModel.deleteMany({});
  });

  //cerrar la conexion a mongoDB despues de todas las pruebas
  afterAll(async () => {
    await mongoose.connection.close();
  });

  const testUser = {
    fullName: "Sebastian",
    email: "sebasg@gmail.com",
    password: "123456",
  };

  //2.1 Defino bloque de pruebas para peticion POST
  describe("Pruebas POST /users", () => {
    /*
               casos existoso
               casos fallidos: faltan campos requeridos, credenciales incorrectas, elementos no encontrados*/

    //primer caso de prueba: creacion de usuarios
    it("Deberia crear un usuario correctamente", async () => {
      const res = await supertest(app).post("/usuarios").send(testUser);

      expect(res.statusCode).toBe(201);
    });
  });

  it("Deberia crear un error si falta un campo obligatrio", async () => {
    const res = await supertest(app)
      .post("/usuarios")
      .send({ email: testUser.fullName });
    expect(res.body).toHaveProperty(
      "mensaje",
      "Ocurrió un error al crear un usuario"
    );
  });
  //2.1 Defino Bloque de Pruebas Para peticion GET
  describe("Pueba GET / User", () => {
    // it('Deberia indicar que no hay usuarios almacenados', async()=>{
    //     const res = await supertest(app).get('/usuarios')
    //     expect(res.statusCode).toBe(200);
    //     expect(res.body).toHaveProperty('mensaje', 'No hay usuarios almacenados');
    // });
    it("Debería indicar que no hay usuarios si la base de datos está vacía", async () => {
      const response = await supertest(app).get("/usuarios");

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty(
        "mensaje",
        "No hay usuarios almacenados"
      );
    });
  });
});
