# Week 3 - Challenge WeekEnd

![Logo Pokémon](pokemon-logo.svg)

## Pokémon

Esta aplicación tendrá tres páginas:

- Todos los pokémon
- Mis pokémon
- Detalle de pokémon

El listado de todos los pokémon se alimentará de la PokéAPI, y deberá ir paginado. El listado deberá ir acompañado de dos botones, para avanzar y retroceder de página. También debe mostrar el total de pokèmon mostrados vs. el total de pokèmon que existen (p.e. 10/1000). Siempre debe mostrar los pokémon en el mismo orden.

El usuario debe poder añadir los pokémon que quiera a su listado local de favoritos, al que puede acceder en la página Mis pokémon. El listado de Mis pokémon se alimentará de [una API local](/week3/challenges/pokeapi). El usuario debería poder eliminar pokémon de su listado local, y también modificar algún/unos dato/s.

Desde cualquiera de los listados, el usuario debería poder ir al detalle de un pokémon, donde se le mostrarán más datos. A esta página de detalle se llega pasando una id por la URL (la id del pokémon que queremos ver).

- TS
- BEM
- HTML semántico y válido
- Testing
- Husky
- GitHub actions (workflow `Audit`)
- App desplegada en Netlify/Vercel
- API desplegada en Render

Documentación de la API local: https://jsonplaceholder.typicode.com/guide/
