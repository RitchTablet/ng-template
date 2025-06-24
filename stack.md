# Proyecto Angular 20 – Guía de Stack y Herramientas

## ¿Qué es Angular 20?

Angular 20 es la última versión del framework de desarrollo frontend de Google para construir aplicaciones web modernas, robustas y escalables. Angular destaca por su arquitectura basada en componentes, integración nativa con TypeScript, herramientas de testing, y un ecosistema maduro para grandes equipos y proyectos empresariales.

### Ventajas de Angular 20

- **Standalone Components:** Permite crear componentes y rutas sin necesidad de NgModules, simplificando la estructura y mejorando la mantenibilidad.
- **Mejoras de rendimiento:** Optimizaciones en el renderizado y carga de recursos.
- **Integración avanzada con TypeScript:** Mejor autocompletado, tipado y refactorización.
- **Herramientas modernas:** CLI poderosa, soporte para SSR, testing, y más.
- **Ecosistema robusto:** Gran comunidad, documentación y soporte empresarial.

## Tecnologías y Herramientas Usadas

### Husky

Husky permite ejecutar scripts automáticos (como linters y formateadores) antes de hacer commits o push en Git, asegurando calidad de código y previniendo errores en el flujo de trabajo.

#### Pre-commit

En este proyecto, el hook de pre-commit ejecuta lint-staged, que a su vez corre Prettier y ESLint sobre los archivos staged. Así, antes de cada commit se evalúa automáticamente:

- Que el código cumpla con el formato definido en Prettier.
- Que se respeten las reglas de los linters (ESLint), incluyendo la eliminación de imports/variables no usados y otros errores configurados.
- Que no existan errores de lint (el commit se bloquea si los hay).
- Que el formato se corrija automáticamente (el commit sigue si solo hay problemas de formato).

Además, en esta etapa de pre-commit se pueden agregar otras validaciones automáticas, como:

- Ejecución de pruebas unitarias rápidas.
- Validación de mensajes de commit (convenciones de mensajes).
- Revisión de seguridad básica (por ejemplo, con npm audit).
- Cualquier script personalizado que ayude a mantener la calidad y consistencia del código.

### lint-staged

Ejecuta linters y formateadores solo en los archivos que están staged para commit, haciendo el proceso más rápido y eficiente.

### ESLint

Herramienta de linting para JavaScript y TypeScript. Detecta errores, malas prácticas y ayuda a mantener un código limpio y consistente.

Actualmente, las reglas principales configuradas son:

- `prettier/prettier`: Aplica las reglas de formato de Prettier y marca como error cualquier diferencia.
- `@typescript-eslint/no-unused-vars`: Marca como error las variables, argumentos o imports no usados (excepto los que empiezan con `_`).
- `no-console`: Marca como error cualquier uso de `console` en el código.
- `unused-imports/no-unused-imports`: Elimina automáticamente los imports no usados al hacer autofix.
- `@typescript-eslint/explicit-function-return-type`: Obliga a declarar el tipo de retorno en todas las funciones y métodos.
- `@typescript-eslint/no-explicit-any`: Prohíbe el uso del tipo `any` para mantener el tipado estricto.
- `no-var`: Prohíbe el uso de `var`, solo permite `let` y `const`.
- `no-magic-numbers`: Advierte sobre el uso de números "mágicos" (excepto 0 y 1, y en índices de arrays).
- `no-debugger`: Prohíbe el uso de la instrucción `debugger` en el código.
- `no-empty-function`: Prohíbe la declaración de funciones vacías.

Estas reglas aseguran código limpio, sin imports/variables innecesarios, con tipado estricto y formato consistente.

### Prettier

Formateador de código que asegura un estilo consistente en todo el proyecto. En este setup, Prettier se encarga de:

- Forzar el uso de comillas dobles en todo el código.
- Aplicar punto y coma al final de cada línea.
- Limitar el ancho de línea a 100 caracteres.
- Usar 2 espacios por tabulación.
- Agregar comas finales donde sea posible (trailing commas).
- Corregir automáticamente espacios, saltos de línea y otros detalles de formato.

Esto facilita la colaboración y las revisiones de código, evitando discusiones sobre estilo y asegurando uniformidad en todo el proyecto.

### Commitlint

Commitlint valida que los mensajes de commit sigan la convención [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/). Esto ayuda a mantener un historial de cambios claro, estructurado y fácil de entender para todo el equipo y herramientas automáticas.

#### ¿Qué son los Conventional Commits?

Es un estándar para escribir mensajes de commit con un formato específico:

```
<tipo>(<scope opcional>): <asunto>
```

Ejemplo:

```
feat(auth): agrega validación de email en login
fix: corrige bug en la navegación
```

**Ventajas:**

- Facilita la generación automática de changelogs.
- Permite automatizar versiones semánticas (semver).
- Mejora la colaboración y el entendimiento del historial de cambios.
- Ayuda a detectar rápidamente el tipo de cambio realizado (feature, fix, docs, etc.).

Si el mensaje de commit no cumple con la convención, el commit será bloqueado y se mostrará una advertencia en español con un ejemplo y enlace a la documentación.

## Flujo de trabajo automatizado

1. Al hacer commit, Husky ejecuta lint-staged.
2. lint-staged corre Prettier y ESLint (con autofix) solo en los archivos staged.
3. Si hay errores de lint, el commit se bloquea; si hay problemas de formato, se corrigen automáticamente.

---

### Comandos para builder, levantar e inspeccionar el docker.

docker build -t ng-template:local .
docker run --rm -p 8080:80 ng-template:local
docker run --rm -it --entrypoint sh ng-template:local

docker build -t ng-template-dev:local -f Dockerfile.dev .
docker run --rm -p 8081:80 ng-template-dev:local
docker run --rm -it --entrypoint sh ng-template-dev:local
