# Requirimientos

## 1. Requisitos Funcionales

¿Qué debe hacer el sistema?

### 1.1. Adquisición de Datos

* [ ] Soporte para múltiples protocolos de comunicación (IEC-61850 C/S, IEC-104 M/S, Modbus TCP/M, Modbus RTU/M, DNP3/M, etc.).
* [ ] Configuración flexible de puntos de datos (tags) y sus atributos.
* [ ] Mecanismos de polling y reporte por excepción configurables.
* [ ] Adquisición de datos históricos y en tiempo real.
* [ ] Capacidad de manejar grandes volúmenes de datos.
* [ ] Mecanismos de validación y filtrado de datos.
* [ ] Soporte para diferentes tipos de datos (analógicos, digitales, contadores, etc.).
* [ ] Configuración de unidades de medida y escalamiento.

### 1.2. Supervisión y Control

* [ ] Visualización gráfica de la red eléctrica (unifilares, sinópticos).
* [ ] Indicación en tiempo real del estado de equipos (abierto/cerrado, encendido/apagado, valores analógicos).
* [ ] Funcionalidad de control remoto de dispositivos (apertura/cierre de interruptores, ajuste de setpoints, etc.) con confirmación.
* [ ] Interfaz intuitiva para la operación y el control.
* [ ] Alarmas y eventos en tiempo real con priorización y clasificación.
* [ ] Reconocimiento y gestión de alarmas por parte de los operadores.
* [ ] Visualización de tendencias históricas de variables.
* [ ] Generación de diagramas de carga, perfiles de tensión, etc.
* [ ] Funcionalidades de simulación y entrenamiento (opcional).

### 1.3. Gestión de Alarmas y Eventos

* [ ] Configuración flexible de criterios de alarma (umbrales, tasas de cambio, etc.).
* [ ] Historial detallado de alarmas y eventos con marcas de tiempo y operador.
* [ ] Mecanismos de notificación de alarmas (visual, sonora, correo electrónico, SMS, etc.).
* [ ] Filtrado y búsqueda avanzada de alarmas y eventos.
* [ ] Generación de informes de alarmas y eventos.

### 1.4 Historial de Datos (HMI/Archiving)

* [ ] Almacenamiento seguro y eficiente de datos históricos.
* [ ] Configuración de la frecuencia de muestreo y retención de datos.
* [ ] Acceso rápido y flexible a datos históricos para análisis y reportes.
* [ ] Herramientas para la visualización y análisis de datos históricos (gráficos de tendencias, tablas).
* [ ] Funcionalidades de exportación de datos en diferentes formatos (CSV, Excel, etc.).

### 1.5 Reportes

* [ ] Generación de informes predefinidos (carga, generación, pérdidas, disponibilidad de equipos, etc.).
* [ ] Herramientas para la creación y personalización de informes.
* [ ] Programación de la generación y distribución automática de informes.
* [ ] Exportación de informes en diferentes formatos (PDF, Word, Excel, etc.).

### 1.6. Seguridad

* [ ] Autenticación robusta de usuarios con diferentes niveles de acceso (roles y permisos).
* [ ] Auditoría de acciones de los usuarios y del sistema.
* [ ] Cifrado de comunicaciones sensibles.
* [ ] Protección contra accesos no autorizados.
* [ ] Integración con sistemas de seguridad existentes (LDAP, Active Directory, etc.).
* [ ] Cumplimiento de normativas de ciberseguridad relevantes para el sector eléctrico.

### 1.7. Interfaz de Usuario (HMI - Human Machine Interface)

* [ ] Interfaz gráfica intuitiva y fácil de usar.
* [ ] Diseño ergonómico para la operación continua.
* [ ] Personalización de vistas y paneles de control.
* [ ] Soporte para múltiples monitores y resoluciones.
* [ ] Alarmas y eventos claramente visibles en la interfaz.
* [ ] Navegación sencilla entre diferentes pantallas y funcionalidades.

### 1.8. Integración con Otros Sistemas

* [ ] Capacidad de integración con sistemas EMS (Energy Management System).
* [ ] Capacidad de integración con sistemas GIS (Geographic Information System).
* [ ] Capacidad de integración con sistemas de gestión de activos (EAM/CMMS).
* [ ] Capacidad de integración con sistemas de facturación.
* [ ] Soporte para APIs y estándares de interoperabilidad.

## 2. Requisitos No Funcionales

¿Cómo debe ser el sistema?

### 2.1. Rendimiento

* [ ] Tiempos de respuesta aceptables para la adquisición de datos y la ejecución de comandos.
* [ ] Capacidad de manejar la carga esperada de datos y usuarios concurrentes.
* [ ] Escalabilidad para adaptarse al crecimiento futuro del sistema.

### 2.2. Disponibilidad y Confiabilidad

* [ ] Alta disponibilidad del sistema (redundancia de componentes críticos).
* [ ] Mecanismos de recuperación ante fallos (failover).
* [ ] Monitorización del estado del sistema y sus componentes.

### 2.3. Seguridad (Repetido para énfasis)

* [ ] Cumplimiento de políticas de seguridad de la organización.
* [ ] Resistencia a ciberataques conocidos.
* [ ] Actualizaciones de seguridad periódicas.

### 2.4. Usabilidad

* [ ] Facilidad de aprendizaje y uso para los operadores.
* [ ] Documentación clara y completa del sistema.
* [ ] Herramientas de ayuda y soporte integradas.

### 2.5. Mantenibilidad

* [ ] Diseño modular para facilitar el mantenimiento y las actualizaciones.
* [ ] Herramientas de diagnóstico y resolución de problemas.
* [ ] Facilidad de configuración y administración del sistema.

### 2.6. Portabilidad (si aplica)

* [ ] Compatibilidad con diferentes sistemas operativos (servidor y cliente).
* [ ] Compatibilidad con diferentes navegadores web (si aplica).

### 2.7. Cumplimiento Normativo

* [ ] Cumplimiento de las normativas y estándares relevantes para el sector eléctrico en Paraguay (ANDE, etc.).
* [ ] Cumplimiento de normativas de seguridad y medio ambiente.

## 3. Requisitos de Implementación y Despliegue

* [ ] Requisitos de hardware y software para el servidor SCADA.
* [ ] Requisitos de hardware y software para las estaciones de operador.
* [ ] Requisitos de red y comunicaciones.
* [ ] Plan de migración de sistemas existentes (si aplica).
* [ ] Procedimientos de instalación y configuración del software.
* [ ] Pruebas de aceptación del sistema (SAT).
* [ ] Plan de capacitación para los usuarios.
* [ ] Plan de puesta en marcha y transición.

## 4. Requisitos de Mantenimiento y Soporte

* [ ] Acuerdo de nivel de servicio (SLA) para el soporte técnico.
* [ ] Disponibilidad de soporte técnico (horario, canales de comunicación).
* [ ] Procedimientos para la solicitud y resolución de incidencias.
* [ ] Plan de actualizaciones y parches del software.
* [ ] Documentación de mantenimiento y resolución de problemas.
