# Ejercicios JavaScript — Prácticas con POO

Colección de ejercicios para practicar **Programación Orientada a Objetos (POO)** en JavaScript: creación de objetos, clases, constructores, métodos y arrays de objetos.

## 📋 Contenido

| # | Ejercicio | Dificultad |
|---|-----------|:----------:|
| 1 | [Crear objetos — Auto](#1-crear-objetos---auto) | 🟢 |
| 2 | [Cuenta bancaria](#2-cuenta-bancaria) | 🟢🟡 |
| 3 | [Rectángulos](#3-rectángulos) | 🟢 |
| 4 | [Producto](#4-producto) | 🟢🟡 |
| 5 | [Generaciones](#5-generaciones) | 🟢🟡🔴 |
| 6 | [Libro](#6-libro) | 🟢🟡🔴 |
| 7 | [Agenda telefónica](#7-agenda-telefónica) | 🟢🟡🔴 |

---

### 1. Crear objetos - Auto
Crear un objeto `auto` con propiedades (color, marca, modelo, estado encendido/apagado) y métodos para encender y apagar el vehículo.

**Output esperado:**
```
objeto.encender();   → auto encendido
objeto.apagar();     → El auto se apagó
```

### 2. Cuenta bancaria
Crear un objeto `cuenta` con:
- Propiedades: `titular` ("Alex"), `saldo` (inicial 0)
- Métodos: `ingresar(cantidad)`, `extraer(cantidad)`, `informar()`

Debe usarse para mostrar la descripción, ingresar y extraer dinero, y volver a mostrar el estado.

### 3. Rectángulos
Programa que permita crear múltiples objetos `rectángulo` con propiedades `alto` y `ancho`, junto con métodos para:
- Modificar sus propiedades
- Mostrarlas
- Calcular el perímetro
- Calcular el área

### 4. Producto
Crear objetos `producto` con propiedades `código`, `nombre` y `precio`, y un método `imprimeDatos()`.

Se deben crear **3 objetos** producto, guardarlos en un **array**, y mostrar los datos de los tres usando el método.

### 5. Generaciones
Crear un objeto `persona` con las propiedades: `nombre`, `edad`, `DNI`, `sexo` (H/M), `peso`, `altura`, `año de nacimiento`.

**Métodos requeridos:**
- `mostrarGeneracion()`: indica a qué generación pertenece la persona según su año de nacimiento y su rasgo característico (según la tabla de generaciones incluida en el enunciado).
- `esMayorDeEdad()`: indica si la persona es mayor de edad.
- `mostrarDatos()`: devuelve toda la información del objeto.
- `generaDNI()`: genera un número aleatorio de 8 cifras.

### 6. Libro
Crear un objeto `libro` con las propiedades:
- ISBN
- Título
- Autor
- Número de páginas

**Método:** `mostrarLibro()`, con el formato:
> "El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx"

Crear al menos **2 libros**, mostrarlos con `mostrarLibro()`, e indicar cuál de los dos tiene más páginas.

### 7. Agenda telefónica
Sistema de agenda de contactos, donde:
- Un **contacto** se define por `nombre` y `teléfono`. Dos contactos son iguales si su nombre coincide.
- Una **agenda** almacena un conjunto de contactos, con tamaño configurable (por defecto 10).


## 🛠️ Tecnologías

- JavaScript (ES6+)
- Ejecutable en consola del navegador, Node.js, o embebido en HTML

### Autor: Amalia, Fernandez