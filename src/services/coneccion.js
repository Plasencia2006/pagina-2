
import pg from 'pg';
const { Client }= pg;


const config={
    user: 'prueba_basededatos_user',
    host: 'dpg-cucl09t6l47c73a5fgrg-a.oregon-postgres.render.com',
    database: 'prueba_basededatos',
    password: 'x7vUfYr0eCgYgSoPuLRQBbz3fpf3XmUy',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar() {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}

