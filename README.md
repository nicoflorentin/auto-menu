
## Menú Automático y Dashboard de Usuario
Este proyecto es una aplicación web que genera menús al instante y controla cada detalle desde un dashboard diseñado para simplificar la gestión. Crea una URL específica para que los clientes del restaurante puedan acceder desde sus dispositivos móviles.

### Tecnologías Utilizadas
Tailwind CSS
Next UI
React.js
React Redux Toolkit
React Router
Axios
Node.js
MongoDB

### Instalación
Clona el repositorio: git clone https://github.com/tu_usuario/tu_proyecto.git
Entra al directorio del proyecto: cd tu_proyecto
Instala las dependencias: npm install

### Uso
Configuración del Backend
Asegúrate de tener Node.js y MongoDB instalados en tu sistema.
Entra al directorio del backend: cd api
Instala las dependencias del backend: npm install
Crea un archivo .env con las variables de entorno necesarias para la conexión a MongoDB y otros ajustes del backend.
Ejemplo de .env: PORT=5000
MONGODB_URI=mongodb://localhost:27017/tu_base_de_datos
Inicia el servidor backend: npm run server

### Configuración del Frontend
Entra al directorio del frontend: cd client
Instala las dependencias del frontend: npm install
Crea un archivo .env en el directorio del frontend para las variables de entorno necesarias.
Ejemplo de .env: REACT_APP_API_URL=http://localhost:5000/api
Inicia la aplicación frontend: npm run dev

### Contribución
Haz un fork del proyecto
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Haz tus cambios y haz commit de ellos (git commit -am 'Agrega nueva característica').
Haz push a la rama (git push origin feature/nueva-caracteristica).
Crea un nuevo Pull Request
