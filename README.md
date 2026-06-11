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

## Portadas

Las tarjetas usan imagenes locales generadas a partir de la primera pagina de cada PDF. Estan en `assets/covers`. Los PDFs completos se mantienen fuera de la web para que no queden publicos al desplegar.

## Previsualizaciones

Cada tema tiene dos imagenes de previsualizacion en `assets/previews`, generadas desde las paginas 2 y 3 del PDF con una marca de agua fuerte. Se muestran desde el boton `Previsualizar` de cada tarjeta.

## Seguridad y despliegue

- No subas PDFs completos a este proyecto ni al hosting publico. El `.gitignore` bloquea `*.pdf` para evitar errores.
- Las previews son imagenes PNG con marca de agua permanente; no contienen el PDF original.
- `robots.txt`, `_headers` y `vercel.json` anaden cabeceras de seguridad y piden a buscadores que no indexen portadas ni previews.
- En una web estatica no existe una proteccion absoluta contra capturas de pantalla o guardado de imagenes publicas. Para entregar el material completo, hazlo solo despues del pago por email, enlace privado o backend autenticado.

## Probar en local

Puedes abrir `index.html` directamente en el navegador. Si prefieres servidor local:

```bash
python3 -m http.server 8080
```

Luego abre `http://localhost:8080`.
