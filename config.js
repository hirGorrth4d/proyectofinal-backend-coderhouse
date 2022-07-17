require('dotenv').config()
export default {
    fileSystem: {
        path: './database'
    },
    mongodb: {
        connection: process.env.MONGODB_CONNECTION,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": process.env.FIREBASE_TYPE,
        "project_id": process.env.FIREBASE_ID,
        "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY,
        "client_email": process.env.FIREBASE_CLIENT_EMAIL,
        "client_id": process.env.FIREBASE_CLIENT_ID,
        "auth_uri": process.env.FIREBASE_AUTH_URI,
        "token_uri": process.env.FIREBASE_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER,
        "client_x509_cert_url": process.env.FIREBASE_CLIENT_CERT_URL
    },
    sql: {
        client: "mysql",
        connection: {
            host: process.env.SQL_HOST,
            user: process.env.SQL_USER,
            password: process.env.SQL_PASSWORD,
            database: process.env.SQL_DB
        }
    }
}