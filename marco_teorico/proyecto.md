---
title: Proyecto MSA 180
---

# Documento del Proyecto: MSA 180 - Sistema SCADA para ANDE

**Fecha:** 12 de Marzo de 2.023

**Ubicación:** Asuncion, Departamento Central, Paraguay

**Elaborado por:** Israel Paniagua / DTE-MCO2

## 1. Introducción

El presente documento describe el proyecto "MSA 180", cuyo objetivo principal es desarrollar un prototipo de software SCADA (Supervisory Control and Data Acquisition) para la Administración Nacional de Electricidad (ANDE). Este sistema está diseñado para demostrar las funcionalidades esenciales de un SCADA moderno, enfocado en las necesidades del Departamento de Mantenimiento de la ANDE. La implementación se realizará utilizando tecnologías de código abierto robustas y escalables.

## 2. Justificación

La implementación de un sistema SCADA eficiente y moderno es crucial para la ANDE, especialmente para el Departamento de Mantenimiento. Un sistema de este tipo permitirá:

* **Monitoreo en tiempo real:** Visualización del estado de los equipos e instalaciones eléctricas.
* **Adquisición de datos:** Recolección y almacenamiento de información relevante para el mantenimiento preventivo y correctivo.
* **Control remoto (limitado al prototipo):** Demostración de la capacidad de enviar comandos a dispositivos (simulados en este prototipo).
* **Generación de alarmas:** Notificación temprana de eventos críticos o anomalías.
* **Análisis de datos históricos:** Identificación de tendencias y patrones para optimizar las estrategias de mantenimiento.
* **Mejora de la eficiencia operativa:** Reducción de tiempos de respuesta ante fallas y optimización de recursos.

El proyecto MSA 180 busca demostrar el potencial de una solución SCADA basada en software de código abierto, ofreciendo una alternativa flexible y adaptable a las necesidades específicas de la ANDE.

## 3. Objetivos

### 3.1 Objetivo General

Desarrollar un prototipo funcional de software SCADA (MSA 180) utilizando tecnologías de código abierto (Debian 12, JavaFX, Apache Cassandra, Apache Kafka) para demostrar sus capacidades al Departamento de Mantenimiento de la ANDE.

### 3.2 Objetivos Específicos

* **Implementar una interfaz hombre-máquina (IHM):** Desarrollar una interfaz gráfica intuitiva y fácil de usar con JavaFX para la visualización de datos en tiempo real y la interacción con el sistema.
* **Establecer un sistema de adquisición y transmisión de datos:** Configurar un mecanismo (simulado para este prototipo) para la recepción de datos de dispositivos de campo.
* **Implementar un sistema de almacenamiento de datos escalable:** Utilizar Apache Cassandra para almacenar los datos históricos de manera eficiente y accesible.
* **Implementar un sistema de mensajería robusto:** Emplear Apache Kafka para la gestión y el flujo de datos en tiempo real entre los diferentes componentes del sistema.
* **Desarrollar funcionalidades básicas de monitoreo:** Permitir la visualización del estado de los equipos, variables clave y tendencias.
* **Implementar un sistema básico de alarmas:** Generar y visualizar alarmas ante eventos predefinidos.
* **Documentar el diseño e implementación del prototipo:** Proporcionar una documentación clara y concisa del sistema desarrollado.
* **Presentar y demostrar el prototipo al personal del Departamento de Mantenimiento de la ANDE.**

## 4. Alcance del Proyecto

Este proyecto se centrará en la demostración de las funcionalidades core de un sistema SCADA. El alcance específico incluye:

* **Simulación de dispositivos de campo:** Debido a las limitaciones de acceso a equipos reales en esta etapa, se simularán fuentes de datos (sensores, actuadores, etc.).
* **Visualización de un número limitado de variables:** La IHM se enfocará en la visualización de un conjunto representativo de datos.
* **Implementación de comandos básicos (simulados):** Se demostrará la capacidad de enviar comandos a dispositivos simulados.
* **Funcionalidad de alarmas básicas:** Se implementarán alarmas para un conjunto limitado de condiciones predefinidas.
* **Almacenamiento de datos históricos de las variables monitoreadas.**
* **No se incluirá la integración con sistemas legados existentes de la ANDE en esta fase.**
* **La seguridad se abordará a nivel conceptual, sin implementación de medidas de seguridad robustas en este prototipo.**

## 5. Personal Involucrado (Departamento de Mantenimiento de la ANDE)

El personal del Departamento de Mantenimiento de la ANDE jugará un papel crucial en este proyecto, principalmente en las siguientes áreas:

* **Definición de Requisitos:** Proporcionar información sobre las necesidades específicas del departamento, los tipos de datos relevantes y los casos de uso prioritarios.
* **Validación y Retroalimentación:** Evaluar el prototipo desarrollado, proporcionar retroalimentación sobre su usabilidad y funcionalidad, y verificar si cumple con las expectativas iniciales.
* **Participación en las Demostraciones:** Asistir a las presentaciones y demostraciones del prototipo para comprender su funcionamiento y potencial.

**Roles Específicos (a ser definidos por la ANDE):**

* **Representante del Departamento de Mantenimiento:** Punto de contacto principal para la comunicación y la definición de requisitos.
* **Técnicos de Mantenimiento:** Usuarios finales del sistema, quienes proporcionarán información valiosa sobre sus necesidades operativas.
* **Supervisores de Mantenimiento:** Responsables de evaluar el potencial del sistema para mejorar la eficiencia del departamento.

## 6. Arquitectura del Sistema (Propuesta)

El sistema MSA 180 se basará en la siguiente arquitectura:

* **Dispositivos de Campo (Simulados):** Generarán datos simulados representando sensores, actuadores y otros equipos.
* **Agente de Adquisición de Datos (Simulado):** Un componente encargado de "recibir" los datos simulados de los dispositivos.
* **Apache Kafka:** Actuará como un bus de mensajería distribuido y escalable para el transporte de datos en tiempo real desde el agente de adquisición hacia el sistema de almacenamiento y la IHM.
* **Apache Cassandra:** Servirá como la base de datos NoSQL para el almacenamiento eficiente y escalable de los datos históricos recibidos a través de Kafka.
* **Servidor de Aplicación (Java):** Contendrá la lógica de negocio, la gestión de alarmas y la interfaz con Cassandra para la recuperación de datos.
* **Interfaz Hombre-Máquina (IHM - JavaFX):** Proporcionará una interfaz gráfica para que los usuarios del Departamento de Mantenimiento puedan:
  * Visualizar datos en tiempo real.
  * Ver tendencias históricas.
  * Recibir y gestionar alarmas.
  * Enviar comandos (simulados).

**Diagrama de Arquitectura (Conceptual):**

``` plain
+-------------------------+      +-----------------+      +---------------------+      +---------------------+      +---------------------+
| Dispositivos de Campo   |----->| Agente de       |----->| Apache Kafka        |----->| Apache Cassandra    |      | Servidor de         |
| (Simulados)             |      | Adquisición     |      | (Broker, Zookeeper) |      | (Nodos)             |----->| Aplicación (Java)   |
+-------------------------+      | (Simulado)      |      +---------------------+      +---------------------+      |                       |
                                 +-----------------+                                                                 +---------------------+
                                                                                                                               ^
                                                                                                                               |
                                                                                                               +-------------------------+
                                                                                                               | Interfaz Hombre-Máquina |
                                                                                                               | (IHM - JavaFX)          |
                                                                                                               | (Departamento de        |
                                                                                                               | Mantenimiento)          |
                                                                                                               +-------------------------+
```

## 7. Tecnologías a Utilizar

* **Sistema Operativo:** Debian 12 (por su estabilidad, seguridad y amplia comunidad).
* **Lenguaje de Programación:** Java (por su portabilidad, madurez y la disponibilidad de las bibliotecas necesarias).
* **Interfaz Hombre-Máquina (IHM):** JavaFX (para la creación de interfaces gráficas de usuario ricas e interactivas).
* **Base de Datos:** Apache Cassandra (base de datos NoSQL distribuida, escalable y de alta disponibilidad, ideal para el almacenamiento de series de tiempo).
* **Bus de Mensajería:** Apache Kafka (plataforma de streaming distribuida para la construcción de pipelines de datos en tiempo real).
* **Herramientas de Desarrollo:**
  * IDE: IntelliJ IDEA, Eclipse o similar.
  * Sistema de Control de Versiones: Git.
  * Herramientas de Construcción: Maven o Gradle.

## 8. Plan de Trabajo (Propuesta Inicial)

El plan de trabajo se dividirá en las siguientes fases principales:

| Fase                 | Actividades Principales                                                                                                                               | Duración Estimada |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| **Fase 1: Planificación y Diseño** | Definición detallada de requisitos con el Departamento de Mantenimiento, diseño de la arquitectura detallada, selección de herramientas específicas. | 2 semanas         |
| **Fase 2: Desarrollo del Backend** | Implementación del agente de adquisición de datos (simulado), configuración e integración de Apache Kafka y Apache Cassandra, desarrollo del servidor de aplicación (lógica de negocio y gestión de alarmas). | 6 semanas         |
| **Fase 3: Desarrollo del Frontend**| Diseño e implementación de la interfaz hombre-máquina (IHM) con JavaFX, integración con el backend para la visualización de datos y alarmas.   | 4 semanas         |
| **Fase 4: Pruebas e Integración** | Pruebas unitarias, pruebas de integración de los diferentes componentes del sistema, corrección de errores.                               | 3 semanas         |
| **Fase 5: Documentación y Preparación de la Demostración** | Elaboración de la documentación del proyecto (arquitectura, implementación, manual de usuario básico), preparación del entorno de demostración. | 2 semanas         |
| **Fase 6: Demostración y Retroalimentación** | Presentación y demostración del prototipo al personal del Departamento de Mantenimiento de la ANDE, recopilación de retroalimentación. | 1 semana          |

**Duración Total Estimada:** 18 semanas (aproximadamente 4.5 meses).

**Nota:** Este es un plan de trabajo inicial y puede ajustarse según las necesidades y la retroalimentación del Departamento de Mantenimiento de la ANDE.

## 9. Recursos Necesarios

* **Hardware:**
  * Servidores o máquinas virtuales para la instalación de Debian 12, Apache Cassandra y Apache Kafka.
  * Estaciones de trabajo para los desarrolladores.
* **Software:**
  * Distribución Debian 12.
  * JDK (Java Development Kit).
  * JavaFX SDK.
  * Apache Cassandra.
  * Apache Kafka.
  * Herramientas de desarrollo (IDE, Git, Maven/Gradle).
* **Personal:**
  * Desarrolladores de software con experiencia en Java, JavaFX, Apache Cassandra y Apache Kafka.
  * Personal del Departamento de Mantenimiento de la ANDE para la definición de requisitos y la evaluación del prototipo.

## 10. Riesgos y Mitigaciones (Iniciales)

| Riesgo                                     | Mitigación Propuesta                                                                                                                            |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Falta de claridad en los requisitos        | Establecer una comunicación fluida y constante con el Departamento de Mantenimiento, realizar reuniones periódicas para la definición y validación. |
| Problemas técnicos con las tecnologías     | Seleccionar versiones estables de las tecnologías, contar con personal con experiencia en las mismas, realizar pruebas exhaustivas.               |
| Retrasos en el desarrollo                  | Establecer un plan de trabajo realista, realizar un seguimiento continuo del progreso, identificar y abordar los problemas de manera temprana.       |
| Dificultades en la integración de componentes | Planificar la integración desde las etapas iniciales, realizar pruebas de integración frecuentes.                                                |
| Baja adopción por parte de los usuarios    | Involucrar al personal del Departamento de Mantenimiento desde el inicio, diseñar una IHM intuitiva y fácil de usar, destacar los beneficios del sistema. |

## 11. Criterios de Éxito

El proyecto MSA 180 se considerará exitoso si se cumplen los siguientes criterios:

* Se desarrolla un prototipo funcional de software SCADA que demuestra las funcionalidades básicas de monitoreo, adquisición de datos, almacenamiento y alarmas.
* La interfaz hombre-máquina (IHM) es intuitiva y fácil de usar para el personal del Departamento de Mantenimiento.
* El prototipo utiliza las tecnologías especificadas (Debian 12, JavaFX, Apache Cassandra, Apache Kafka).
* Se presenta y demuestra el prototipo al personal del Departamento de Mantenimiento de la ANDE, obteniendo retroalimentación valiosa.
* Se entrega la documentación del diseño e implementación del prototipo.

### 12. Siguientes Pasos

Una vez finalizada la fase de documentación, el siguiente paso crucial será la **presentación formal de este documento al Departamento de Mantenimiento de la ANDE** para su revisión, comentarios y aprobación. Posteriormente, se iniciará la fase de planificación detallada y la ejecución del proyecto según el plan de trabajo acordado.

Este documento sienta las bases para el desarrollo del proyecto MSA 180 y busca establecer una comprensión clara de los objetivos, el alcance y las expectativas entre el equipo de desarrollo y el Departamento de Mantenimiento de la ANDE.
