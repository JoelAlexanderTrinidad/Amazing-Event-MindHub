//  crear tabla
const $table = document.getElementById('main-table')
const eventos = data.events

/* categorias */
const categorias = eventos.map(evento => evento.category)
const categoriasSinRepetir =  Array.from(new Set(categorias)) 

/* ganancias */
const gananciasFuturas = eventos

function seccionTabla(categorias, ganancias, asistencia){
    let template = ''
    categorias.forEach(categoria => {
        template += 
        `
            <tr>
                <td class="th">${categoria}</td>
                <td class="th"></td>
                <td class="th"></td>
            </tr>
        `
    });
    return template
}


function crearTabla(){
    let template = ''
    template = `
        <table>
            <thead>
                <tr>
                    <th class="titulo-tabla" colspan="3">Events statistics</th>
                </tr>
                <tr>
                    <th class="th">Events with highest percentage of attendance</th>
                    <th class="th">Events with the lowest percentage of attendance</th>
                    <th class="th">Event with larger capacity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="th"></td>
                    <td class="th"></td>
                    <td class="th"></td>
                </tr>
            </tbody>

            <thead>
                <tr>
                    <th class="titulo-tabla" colspan="3">Upcoming events statistics by category</th>
                </tr>
                <tr>
                    <th class="th">Categories</th>
                    <th class="th">Revenues</th>
                    <th class="th">Percentage of attendance</th>
                </tr>
            </thead>
            <tbody>
                ${seccionTabla(categoriasSinRepetir)}
            </tbody>

            <thead>
                <tr>
                    <th class="titulo-tabla" colspan="3">Past events statistics by category</th>
                </tr>
                <tr>
                    <th class="th">Categories</th>
                    <th class="th">Revenues</th>
                    <th class="th">Percentage of attendance</th>
                </tr>
            </thead>
            <tbody>
                ${seccionTabla(categoriasSinRepetir)}
            </tbody>
        </table>
    `
    return template
}

function renderizar(template, contenedor){
    document.getElementById(contenedor).innerHTML = template
}

renderizar(crearTabla(), 'main-table')

// pintar tabla