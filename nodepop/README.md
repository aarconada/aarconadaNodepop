# aarconadaPracticaNode

Práctica creada por Álvaro Arconada para el bloque de nodejs

Para el uso del API:

Registrar nuevos usuarios:

    POST: http://localhost:3000/api/v1/usuarios/sign
    Incluyendo los campos:
        -nombre
        -email
        -clave


Para recibir el token:

    POST: http://localhost:3000/api/v1/usuarios/authenticate
    Introduciendo los campos:
        -email
        -clave

Ver lista de anuncios:

    Acceso con autenticación por json Web token

    GET: http://localhost:3000/api/v1/anuncios
    Introducir el campo*:
        -Token
        *Puede incluirse en la query string o como parámetro x-access-token como header

Para introducir un nuevo anuncio:

    POST:

