#aarconadaPracticaDevOps

Práctica creada por Álvaro Arconada para el bloque devOps

DNS Pública: ec2-52-87-239-247.compute-1.amazonaws.com

IP: 52.87.239.247

imágenes:
http://ec2-52-87-239-247.compute-1.amazonaws.com/images/anuncios/iphone.png

http://ec2-52-87-239-247.compute-1.amazonaws.com/images/anuncios/bicicleta.png

# aarconadaPracticaNode

Práctica creada por Álvaro Arconada para el bloque de nodejs

Para el uso del API:


Iniciar la base de datos:

    Utilizar el script install_db.js
    Crea un usuario de prueba con los parámetros:
        -nombre: usuario1
        -email: usuario@mail.com
        -clave:12345
    Limpia la base de datos de anuncios e incluye el del iphone y el de la bici

Registrar nuevos usuarios (sign):

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

Ver imágenes:

    Se han guardado en la ruta:
    http://localhost:3000/public/images
    -iphone.png
    -bicicleta.png

Para introducir un nuevo anuncio:

    POST:http://localhost:3000/api/v1/anuncios
    solo los usuarios registrados pueden subir anuncios entonces hay que tener token
    los campos que hay que introducir son:
        -name
        -venta (true/false)
        -precio
        -tags ('work','lifestyle', 'motor', 'mobile')
        -foto [opcional]
        -token
