# Proyecto Cyrus

En honor al personaje Cyrus Smith de Jules Verne.

Desarrollando el sistema scada MSA **M**ega **S**cada **A**nde 

>1.0.1-beta

## 1. Introduccion

Actualmente en la ANDE se dispone de varias marcas del Scada Local, lo cual conlleva a tener variadas formas de configurarlos segun los procedimientos dados por el fabricante. Esto genera un problema al momento de mantener e inclusive de actualizar nuevas senalizaciones del scada.

Para poder disponer de un Scada Local, es necesario establecer los requerimientos generales y especificos para cada arquitectura, configuracion y tamano de software que se desea aplicar. Los requerimientos estan orientados de lo general a lo especifico y luego desprendiendose para cada caso con algunas excepciones que hubiere.

El objetivo general para el desarrollo de este Scada es que la ANDE disponga de su propio software configurable para uso en campo en las Estaciones Electricas que asi lo requieran.

El software debe de poder adquirir senalizaciones desde ciertos protocolos de comunicacion utilizados en la ANDE, monitorear y comandar desde la pantalla de una computadora hacia los diferentes equipos de adquisicion configurados, indicar las mediciones consultadas en los multimedidores, almacenar todos los eventos y las alarmas que ocurriesen y registrar en archivos logs datos e informacion que sirvan para un posterior analisis en casos de fallos.

## 2. Personal involucrado

El personal involucrado corresponde al Departamento de Mantenimiento de Sistemas de Control, de las Seccion de Sistemas de Control indicados por sus siglas DTE/MCO2.

## 3. Restricciones de diseño e implementación

Las limitantes para esta primera version del software, van relacionadas a la capacidad cuantitativa de los registros y de los puntos de adquisicion.

* **Tabla de cantidad de equipos**

| Descripcion                                |      Valores |
|--------------------------------------------|-------------:|
| La máxima cantidad de señales soportadas   | 8.000 puntos |
| La máxima cantidad de monitores soportados |   2 unidades |

* **Tabla de cantidad de protocolos y sus registros maximos**

| Descripcion                                                      | Cantidad de controlador | Valores maximos                                   |
|------------------------------------------------------------------|------------------------:|---------------------------------------------------|
| La máxima cantidad de usos del protocolo Modbus                  |             20 unidades | máximo 20 registros por cada controlador          |
| La máxima cantidad de usos del protocolo IEC-61850               |             15 unidades | máximo 250 registros por cada controlador         |
| La máxima cantidad de usos del protocolo IEC-104 Maestro/Esclavo |              2 unidades | máximo 1.500 señales para el Maestro o el Esclavo |
| La máxima cantidad de usos del protocolo DNP.3 Maestro           |              6 unidades | máximo 200 registros por cada controlador         |

Los demas protocolos y esclavos que no se tipifican en este apartado son descartados por no ser de uso comun en la ANDE. Sin embargo se puede realizar el analisis de factibilidad para nuevos protocolos.

## 4. Disposiciones de las interfaces

### 4.1. Interfaz para el usuario operador

Debe de contar con dos monitores con una resolución de relación **16:9 1280x720 | 1920x1080**. Esto es mandatorio para evitar configuraciones complicada en las resoluciones de las pantallas y poder mantener siempre una estandarización del tamaño y disposición de los despliegues y sus objetos en la pantalla.

Las aplicaciones que se tiene para esto son:

1. Interfaz de Despliegue, **Display Interface [MSA:DISP]**. Esta interfaz será en entorno Desktop en el lenguaje JavaFX. Contiene todos los despliegues a visualizarse en pantallas.

2. Interfaz para el Registro Histórico, **Interface for the Historical Record [MSA:HIST]**. Esta interfaz será en entorno web en el lenguaje Javaserver Faces. Permite acceder a los datos almacenados en el servidor.

### 4.2. Interfaz para el usuario administrador

1. Interfaz para la Administración y el Mantenimiento, **Interface For Administration And Maintenance [MSA:ADM]**. Esta interfaz será en entorno web en el lenguaje Javaserver Faces.
2. Intefaz para Contenedor de aplicaciones y ultimas actualizaciones **Interface For The Application Repositroy [MSA:REP]**. Esta interfaz sera en entorno web y contiene la ultima aplicacion del sistema, haciendo que todas las demas maquinas se actualicen automaticamente.

### 4.3. Interfaz del hardware

Los requisitos basicos del hardware son:

| Periferico      | Caracteristicas                                                                              |
|-----------------|----------------------------------------------------------------------------------------------|
| RAM             | 4Gb o superior                                                                               |
| Disco SSD       | 120 Gb                                                                                       |
| Procesador      | i3 2,4 Ghz o superior                                                                        |
| Tarjetas de red | Eth0 10/100 Mbps (3); uno para la red local, uno para la red scada y uno para la redundancia |

### 4.4. Interfaz del software

Los requisitos de software son:

| Nombre                | Aplicaciones                                                     |
|-----------------------|------------------------------------------------------------------|
| Apache Cassandra      | para la base de datos de las señalizaciones y del historico      |
| Apache Kafka          | para el manejo de las señalizaciones en tiempo real              |
| Debian 12 o posterior | para la plataforma operativa del sistema                         |
| JavaFX 17             | para el entorno del despliegue                                   |
| JavaServer Faces      | para el modulo de mantenimiento y entorno de acceso al historico |
| Lenguaje C            | para los modulos del driver                                      |
| PostgreSQL 15         | para el entorno del historico; pgadmin4 (solo para desarrollo)   |

### 4.5. Interfaces de las comunicaciones

Describir los requisitos de las interfaces de comunicación si hay comunicaciones con otros sistemas y cuáles son los protocolos de comunicación.

## 5. Convenciones

### 5.1. Algunas definiciones

* **Deficiones del sistema**

| Sigla | Definicion                           |
|:------|--------------------------------------|
| HMI   | Human Machine Interface              |
| OIT   | Operator Interface Terminal          |
| PCLD  | Process Control Logic Description    |
| PPC   | Programable Process Controller       |
| SDB   | Scada Data Base                      |
| SHW   | Scada Host Worstation                |
| SOW   | Scada Operator Workstation           |
| TSNC  | Tagname and Signal Naming Convention |

* **Deficiones de los niveles de las senhales**

| Sigla | Definicion |
|:-----:|------------|
|   G   | Generic    |
|   P   | Principal  |
|   S   | Secondary  |

* **Deficiones de los tipos de senhalizaciones**

| Sigla | Definicion             | Grupo     |
|:------|:-----------------------|:----------|
| AI:N  | Analog Input Normal    | Analogs   |
| AI:S  | Analog Input Scale     | Analogs   |
| AO:N  | Analog Output Normal   | SetPoints |
| AO:S  | Analog Output Scale    | SetPoints |
| DI:D  | Discrete Input Doble   | Discretes |
| DI:S  | Discrete Input Simple  | Discretes |
| DO:D  | Discrete Output Doble  | Commands  |
| DO:S  | Discrete Output Simple | Commands  |
