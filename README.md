# GH-600 Study OS Offline

Aplicacion estatica offline para preparar la certificacion GitHub Certified: Agentic AI Developer GH-600.

Incluye:

- rutas de estudio para aprobar y para mejorar nota;
- contenido sintetizado desde fuentes oficiales exploradas;
- fuentes separadas entre `Core examen` y `Mejorar nota`;
- progreso local por horas estimadas de trabajo activo;
- tiempo estimado por fuente usando lectura calmada con margen;
- marcado persistente de fuentes leidas;
- notas personales en navegador;
- diagramas, checklist y preguntas tipo escenario;
- conexiones practicas con AgentOS.

## Uso local

Abre `app/index.html` en el navegador.

Si el navegador bloquea alguna API local, sirve la carpeta:

```powershell
python -m http.server 8765
```

Luego abre `http://127.0.0.1:8765/app/`.

## Verificacion

```powershell
node --check app/app.js
```
