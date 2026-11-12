# NHL · Pronóstico de puntos V4

Página web autocontenida (un solo HTML, sin librerías) que pronostica cuántos puntos hará cada jugador de NHL en su partido de hoy, usando solo situaciones 5v5 y 5v4. Todo se calcula en el navegador a partir de los CSV que cargas.

Versión publicada: https://claude.ai/artifact/RJuaeb754GFee3jKEprtoa (privada hasta que la compartas).

## Pestañas

- **Dashboard**: tabla de jugadores con P(≥1 punto), P(≥2), cuota justa, aporte 5v5 y 5v4, rival, portero y avisos. Orden por columna y filtros (`>=`, `<=`, `>`, `<`, `=`, rangos `2-5`).
- **Ticket**: selección por umbrales (GSAA del portero rival, Def/PK rival, TOI, probabilidad).
- **Claude Props NHL**: 4 selecciones base de partidos distintos + 1 de sinergia PP1 (ρ = 0.15 supuesto).
- **Mi ticket**: arma tu propio ticket con los 150 jugadores más probables.
- **Cargar datos**: un cuadro por archivo; se guardan en el navegador.
- **Metodología**: el modelo y sus limitaciones.

El registro de aciertos (✓ / ✗, Brier, tickets ganados) usa la base de datos del artefacto en claude.ai; abriendo `index.html` en local, esa parte muestra un aviso y lo demás funciona.

## Archivos

| Ruta | Qué es |
| --- | --- |
| `index.html` | La página lista para abrir, con los datos de ejemplo incluidos. |
| `src/template.html` | El código fuente de la página, sin datos. |
| `datos-ejemplo/` | Los CSV usados como ejemplo (exportaciones del 12-nov-2026). |
| `build.js` | Une la plantilla y los CSV de ejemplo en `index.html`. |

Para regenerar `index.html` después de cambiar la plantilla o los CSV:

```bash
node build.js
```

Solo **Jugadores 5v5** y **Jugadores 5v4 PP** son obligatorios; sin los demás el modelo se degrada con avisos.

Es un pronóstico estadístico, no una garantía.
