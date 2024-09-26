# Pruebas realizadas para flujos de pago

Para las pruebas ejecutar las tres apps en el orden APP_01, APP_02 y server.

## APP_01

Aplicación de React con varios componentes de prueba.
Abre con `window.open` los componentes de App 02, envía y recibe mensajes por `postMessage` de App 02

```bash
cd APP_01
pnpm dev
```

## APP_02

Aplicación de React con los componentes que reciben y envían mensajes por `postMessage` a la App 01

```bash
cd APP_02
pnpm dev
```

## Server

Es una aplicación de Node.js con Express.js

```bash
cd server
pnpm dev
```
