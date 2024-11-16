# Backend de Adopciones

Este proyecto implementa un **backend para un sistema de adopciones** utilizando **MongoDB** como base de datos. Permite gestionar usuarios, mascotas y procesos de adopción a través de una API RESTful, facilitando la interacción entre las partes involucradas en el proceso de adopción.

## Tecnologías

- **Node.js** con **Express** para la creación de la API.
- **MongoDB** como base de datos NoSQL.
- **Mongoose** para interactuar con MongoDB desde Node.js.
- **Docker** para contenerizar la aplicación y facilitar su despliegue.

## Funcionalidades

- **Gestión de Usuarios**: Crear, obtener, actualizar y eliminar usuarios.
- **Gestión de Mascotas**: Crear, obtener, actualizar y eliminar mascotas disponibles para adopción.
- **Proceso de Adopción**: Realizar el proceso de adopción y almacenar la información relevante.

## Uso con Docker

Este proyecto está disponible como una imagen de Docker, lo que facilita su despliegue y ejecución.

1. **Descargar la imagen de Docker**: [Docker Hub - carla484/adoption](https://hub.docker.com/r/carla484/adoption)

```bash
docker pull carla484/adoption:general
