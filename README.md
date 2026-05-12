# Apuntes EIR

Web estatica para vender apuntes del EIR por temas. No necesita build para funcionar: puedes desplegar estos archivos directamente en Netlify, Vercel, GitHub Pages o cualquier hosting estatico.

## Contacto

El formulario esta configurado en `script.js`:

```js
const SITE_CONFIG = {
  contactEmail: "tihomir27402@gmail.com",
  formEndpoint: "https://formsubmit.co/ajax/tihomir27402@gmail.com",
};
```

- Cambia `contactEmail` por el correo real que quieras recibir.
- `formEndpoint` usa FormSubmit para enviar solicitudes desde una web estatica. La primera solicitud puede pedir confirmar/activar el correo receptor.
- El formulario envia una plantilla estructurada con datos del cliente, seleccion, total, metodo de pago y siguiente paso. Si `formEndpoint` esta vacio, la web abre el email del comprador con esa misma plantilla ya redactada.

## Fotos

Ahora las tarjetas usan imagenes temporales de Unsplash. Cuando tengas tus fotos, sustituye las URLs en el array `topics` de `script.js` por rutas locales como `./assets/pediatria.jpg` y coloca las imagenes en una carpeta `assets`.

## Probar en local

Puedes abrir `index.html` directamente en el navegador. Si prefieres servidor local:

```bash
python3 -m http.server 8080
```

Luego abre `http://localhost:8080`.
