## Documentación de la API

### Creación de Usuario

#### Ruta de Creación de Usuario

Para crear un nuevo usuario, envía una solicitud POST a la siguiente ruta:

- **Endpoint:** `/api/user`
- **Método HTTP:** POST
- **Descripción:** Esta ruta se utiliza para crear un nuevo usuario en el sistema.
- **Parámetros de la solicitud:**
  - `username` (string): El nombre de usuario del nuevo usuario.
  - `password` (string): La contraseña del nuevo usuario.
  - `name` (string): El nombre completo del nuevo usuario.
- **Respuesta Exitosa (201 Created):**
  - **Cuerpo de la respuesta:**
    ```json
    {
      "error": false,
      "data": {
        "_id": "id_del_usuario",
        "username": "nuevo_usuario@gmail.com",
        "name": "Nombre del Nuevo Usuario"
      }
    }
    ```

---

### Autenticación de Usuario

#### Ruta de Login

Para autenticar a un usuario, envía una solicitud POST a la siguiente ruta:

- **Endpoint:** `/api/login`
- **Método HTTP:** POST
- **Descripción:** Esta ruta se utiliza para autenticar a los usuarios mediante email y contraseña.
- **Parámetros de la solicitud:**
  - `email` (string): Email del usuario.
  - `password` (string): La contraseña del usuario.
- **Respuesta Exitosa (200 OK):**

  - **Cuerpo de la respuesta:**

    ```json
    {
      "error": false,
      "data": {
        "token": "jwt_token",
        "username": "nuevo_usuario@gmail.com",
        "restaurantId": "660ef583b27719e07c4ab918"
      }
    }
    ```

---

### Creación de Platos

#### Ruta de Creación de Platos

Para crear un nuevo plato, envía una solicitud POST a la siguiente ruta:

- **Endpoint:** `/api/dish`
- **Método HTTP:** POST
- **Descripción:** Esta ruta se utiliza para crear un nuevo plato en el sistema.
- **Parámetros de la solicitud:**
  - `title` (string): El nombre del plato.
  - `description` (string): La descripción del plato.
  - `category` (string): La categoría del plato.
  - `price` (number): El precio del plato.
  - `image` (string, opcional): La ruta de la imagen del plato.
  - `celiac` (boolean, opcional): Indica si el plato es apto para celíacos.
  - `vegetarian` (boolean, opcional): Indica si el plato es vegetariano.
  - `archived` (boolean, opcional): Indica si el plato está archivado.
- **Cabecera de Autorización:**
  - `Authorization` (string): Token JWT de autenticación.
- **Respuesta Exitosa (201 Created):**
  - **Cuerpo de la respuesta:**
    ```json
    {
      "error": false,
      "data": [
        {
          "title": "Nombre del Plato",
          "description": "Descripción del plato",
          "category": "Categoría del plato",
          "price": 100,
          "image": "ruta_de_la_imagen.jpg",
          "celiac": false,
          "vegetarian": false,
          "archived": false,
          "restaurant": {
            "owner": "ID_del_dueño_del_restaurante",
            "dishes": ["ID_del_plato_creado"],
            "id": "ID_del_restaurante"
          },
          "id": "ID_del_plato_creado"
        }
      ]
    }
    ```

---

### Obtención de Platos

#### Ruta de Obtención de Platos

Para obtener una lista de platos, incluyendo la posibilidad de filtrarlos por categoría, envía una solicitud GET a la siguiente ruta:

- **Endpoint:** `/api/dish`
- **Para filtar:** `/api/dish?name=`
- **Para filtar:** `/api/dish?category=`
- **Para filtar:** `/api/dish?price=`
- **Método HTTP:** GET
- **Descripción:** Esta ruta se utiliza para obtener una lista de platos del restaurante asociado al usuario, con la opción de filtrarlos por categoría.
- **Parámetros de la solicitud:**
  - `category` (string, opcional): Filtra los platos por categoría.
- **Cabecera de Autorización:**
  - `Authorization` (string): Token JWT de autenticación.
- **Respuesta Exitosa (200 OK):**
  - **Cuerpo de la respuesta:** Un arreglo de objetos que representan los platos filtrados.
    ```json
    [
      {
        "title": "Nombre del Plato",
        "description": "Descripción del plato",
        "category": "Categoría del plato",
        "price": 100,
        "image": "ruta_de_la_imagen.jpg",
        "celiac": false,
        "vegetarian": false,
        "archived": false,
        "restaurant": {
          "owner": "ID_del_dueño_del_restaurante",
          "dishes": ["ID_del_plato_1", "ID_del_plato_2"],
          "id": "ID_del_restaurante"
        },
        "id": "ID_del_plato"
      }
      // Más platos...
    ]
    ```

---

### Obtención de un Plato por su ID

#### Ruta de Obtención de un Plato por su ID

Para obtener un plato específico por su ID, envía una solicitud GET a la siguiente ruta:

- **Endpoint:** `/api/dish/:id`
- **Método HTTP:** GET
- **Descripción:** Esta ruta se utiliza para obtener un plato específico por su ID.
- **Parámetros de la solicitud:**
  - `id` (string): El ID único del plato que se desea obtener.
- **Cabecera de Autorización:**
  - `Authorization` (string): Token JWT de autenticación.
- **Respuesta Exitosa (200 OK):**
  - **Cuerpo de la respuesta:** Un objeto que representa el plato solicitado.
    ```json
    {
      "title": "Nombre del Plato",
      "description": "Descripción del plato",
      "category": "Categoría del plato",
      "price": 100,
      "image": "ruta_de_la_imagen.jpg",
      "celiac": false,
      "vegetarian": false,
      "archived": false,
      "restaurant": {
        "owner": "ID_del_dueño_del_restaurante",
        "dishes": ["ID_del_plato_1", "ID_del_plato_2"],
        "id": "ID_del_restaurante"
      },
      "id": "ID_del_plato"
    }
    ```

---

### Edición de un Plato por su ID

#### Ruta de Edición de un Plato por su ID

Para editar un plato específico por su ID, envía una solicitud PUT a la siguiente ruta:

- **Endpoint:** `/api/dish/:id`
- **Método HTTP:** PUT
- **Descripción:** Esta ruta se utiliza para editar un plato específico por su ID.
- **Parámetros de la solicitud:**
  - `id` (string): El ID único del plato que se desea editar.
- **Cabecera de Autorización:**
  - `Authorization` (string): Token JWT de autenticación.
- **Cuerpo de la solicitud:** Un objeto JSON que contiene los campos actualizados del plato.
- **Respuesta Exitosa (201 Created):**
  - **Cuerpo de la respuesta:** Un objeto que representa el plato editado.
    ```json
    {
      "title": "Nuevo Nombre del Plato",
      "description": "Nueva Descripción del Plato",
      "category": "Nueva Categoría del Plato",
      "price": 150,
      "image": "nueva_ruta_de_la_imagen.jpg",
      "celiac": true,
      "vegetarian": true,
      "archived": true,
      "restaurant": {
        "owner": "ID_del_dueño_del_restaurante",
        "dishes": ["ID_del_plato_1", "ID_del_plato_2"],
        "id": "ID_del_restaurante"
      },
      "id": "ID_del_plato_editado"
    }
    ```

---

### Eliminación de un Plato por su ID

#### Ruta de Eliminación de un Plato por su ID

Para eliminar un plato específico por su ID, envía una solicitud DELETE a la siguiente ruta:

- **Endpoint:** `/api/dish/:id`
- **Método HTTP:** DELETE
- **Descripción:** Esta ruta se utiliza para eliminar un plato específico por su ID. La eliminación no es permanente; en su lugar, el plato se archiva marcándolo como eliminado.
- **Parámetros de la solicitud:**
  - `id` (string): El ID único del plato que se desea eliminar.
- **Cabecera de Autorización:**
  - `Authorization` (string): Token JWT de autenticación.

---

### Actualización de un Restaurante por su ID

#### Ruta de Actualización de un Restaurante por su ID

Para actualizar un restaurante específico por su ID, envía una solicitud PUT a la siguiente ruta:


- **Endpoint:** `/restaurant/edit/:id`
- **Método HTTP:** PUT
- **Descripción:** Esta ruta se utiliza para actualizar un restaurante específico por su ID.
- **Parámetros de la solicitud:**
  - `id` (string): El ID único del restaurante que se desea actualizar.
- **Cabecera de Autorización:**
  - `Authorization` (string): Token JWT de autenticación.
- **Cuerpo de la solicitud:** Un objeto JSON que contiene los campos actualizados del restaurante.
- **Respuesta Exitosa (201 Created):**
  - **Cuerpo de la respuesta:** Un objeto que representa el restaurante actualizado.
  ```json
  {
    "owner": "ID_del_dueño_del_restaurante",
    "dishes": ["ID_del_plato_1", "ID_del_plato_2"],
    "name": "Nuevo Nombre del Restaurante",
    "description": "Nueva Descripción del Restaurante",
    "image": "nueva_ruta_de_la_imagen.jpg",
    "id": "ID_del_restaurante"
  }
  ```

---

### Obtención de un Restaurante por su Nombre

#### Ruta de Obtención de un Restaurante por su Nombre

Para obtener un restaurante específico por su nombre, envía una solicitud GET a la siguiente ruta:


- **Endpoint:** `/menu/:name`
- **Método HTTP:** GET
- **Descripción:** Esta ruta se utiliza para obtener un restaurante específico por su nombre. Es una ruta pública accesible para clientes.
- **Parámetros de la solicitud:**
  - `name` (string): El nombre del restaurante que se desea obtener.
- **Respuesta Exitosa (200 OK):**
  - **Cuerpo de la respuesta:** Un objeto que representa el restaurante solicitado.
    (200 OK):\*\*
  - **Cuerpo de la respuesta:** Un objeto que representa el restaurante solicitado.
    ```json
    {
      "owner": "ID_del_dueño_del_restaurante",
      "dishes": [
        {
          "title": "Nombre del Plato",
          "description": "Descripción del Plato",
          "category": "Categoría del Plato",
          "price": 100,
          "image": "ruta_de_la_imagen.jpg",
          "celiac": false,
          "vegetarian": false,
          "restaurant": "ID_del_restaurante",
          "id": "ID_del_plato"
        },
        {
          "title": "Nombre del Otro Plato",
          "description": "Descripción del Otro Plato",
          "category": "Categoría del Otro Plato",
          "price": 150,
          "image": "ruta_del_otro_imagen.jpg",
          "celiac": true,
          "vegetarian": true,
          "restaurant": "ID_del_restaurante",
          "id": "ID_del_otro_plato"
        }
      ],
      "description": "Descripción del Restaurante",
      "image": "ruta_de_la_imagen.jpg",
      "name": "Nombre del Restaurante",
      "id": "ID_del_restaurante"
    }
    ```

---

### Obtención de un Restaurante por su ID

#### Ruta de Obtención de un Restaurante por su ID

Para obtener un restaurante específico por su ID, envía una solicitud GET a la siguiente ruta:


- **Endpoint:** `/api/restaurant/:id`
- **Método HTTP:** GET
- **Descripción:** Esta ruta se utiliza para obtener un restaurante específico por su ID. Se requiere el ID del restaurante como parámetro en la URL.
- **Parámetros de la solicitud:**
  - `id` (string): El ID único del restaurante que se desea obtener.
- **Respuesta Exitosa (200 OK):**

  - **Cuerpo de la respuesta:** Un objeto que representa el restaurante solicitado.

    ```json
    {
      "owner": "ID_del_dueño_del_restaurante",
      "dishes": ["ID_del_plato_1", "ID_del_plato_2"],
      "description": "Descripción del Restaurante",
      "image": "ruta_de_la_imagen.jpg",
      "name": "Nombre del Restaurante",
      "id": "ID_del_restaurante"
    }
    ```
