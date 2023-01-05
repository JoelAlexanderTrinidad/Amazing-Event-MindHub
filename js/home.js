const eventos = data.events 
const fechaActual = data.currentDate

let seccion = document.getElementById('seccion-index')

// crear funcion

function crearCard(arr, lugar){
    let div = document.createElement('div')
    div.classList.add('row', 'row-cols-2', 'container-fluid', 'px-0', 'mx-auto', 'justify-content-center', 'justify-content-lg-evenly', 'gap-3', 'my-4')

    for(let elemento of arr){
        div.innerHTML += 
        `
            <div class="card col-5 col-lg-3 col-xl-2">
                <div class="p-2 pt-md-3 pt-md-3 tarjeta">
                    <img src=${elemento.image} class="img-tarjeta" alt="...">
                    <div class="">
                        <h5 class="pt-1 titulo-tarjeta">${elemento.name}</h5>
                        <p class="texto-tarjeta">${elemento.description.slice(0,40)}...</p>
                        <p class="text-center pt-2 mb-0">Price: <span class="text-success">USD ${elemento.price}</span></p>
                        <p class="texto-tarjeta">Date: ${elemento.date}</p>
                        <div class="justify-content-center d-flex">
                            <a href="./details.html" class="btn btn-danger boton-tarjeta">View more</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    lugar.append(div)
}

crearCard(eventos, seccion)

/*  */

const $check = document.getElementById('checks')
const $input = document.getElementById('busqueda-input')

const todasLasCategorias = Array.from(new Set(categoriasFiltradas(eventos)))

function categoriasFiltradas(events){
    const categorias = events.map(event => event.category)
    return categorias
}

$check.innerHTML = generarCheckbox(todasLasCategorias)

function generarCheckbox(categorias){

    let template = ''
    categorias.forEach( categoria => {
        template += `
        <div class="form-check col-lg-auto col-6 p-lg-0 d-flex justify-content-center justify-content-lg-start">
            <input value="${categoria}" type="checkbox" name="category2" class="check-box form-check-input" id="${categoria}">
            <label class="form-check-label ps-3 ps-lg-2 col-lg-auto label-formulario col-8" for="${categoria}">${categoria}</label>
        </div>
        `
    })
    return template
}

$check.addEventListener('change', busquedaCheck)
$input.addEventListener('input', busquedaInputText)


function busquedaCheck(){
    const checkeados = obtenerCheckeados()
    const checkValue = checkeados.map(checkeados => checkeados.value)
    const eventosFiltrados = eventos.filter(evento => checkValue.includes(evento.category))
    if(eventosFiltrados.length === 0){
        return renderizar(generarCards(eventos), 'seccion-index')
    }
    renderizar(generarCards(eventosFiltrados), 'seccion-index')
}

function obtenerCheckeados(){
    const checkbox = document.querySelectorAll( 'input[type="checkbox"]:checked' )
    const checkboxArray = Array.from(checkbox)
    return checkboxArray
}

function renderizar(template, donde){
    document.getElementById(donde).innerHTML = template
}

function generarCards(eventos){
    let aux = ''
    let div = document.createElement('div')
    div.classList.add('row', 'row-cols-2', 'container-fluid', 'px-0', 'mx-auto', 'justify-content-center', 'justify-content-lg-evenly', 'gap-3', 'my-4')
    eventos.forEach(evento => {
        aux += `
        <div class="card col-5 col-lg-3 col-xl-2">
            <div class="p-2 pt-md-3 pt-md-3 tarjeta">
                <img src=${evento.image} class="img-tarjeta" alt="...">
                <div class="">
                    <h5 class="pt-1 titulo-tarjeta">${evento.name}</h5>
                    <p class="texto-tarjeta">${evento.description.slice(0,40)}...</p>
                    <p class="text-center pt-2 mb-0">Price: <span class="text-success">USD ${evento.price}</span></p>
                    <p class="texto-tarjeta">Date: ${evento.date}</p>
                    <div class="justify-content-center d-flex">
                        <a href="./details.html" class="btn btn-danger boton-tarjeta">View more</a>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    div.innerHTML = aux
    let template = div.outerHTML;
    return template
}

function busquedaInputText(e){
    let inputFiltrado = eventos.filter(evento => evento.name.startsWith($input.value))
    console.log(inputFiltrado)
}


/* const $busquedaInput = document.getElementById('busqueda-input')

const categorias = eventos.map(evento => evento.category)
const categoriasSiRepetir = Array.from(new Set(categorias))

renderizar(generarCheckbox(categoriasSiRepetir), 'checks')

const $checkBox =document.getElementById('checks')

$busquedaInput.addEventListener('input', filtroCruzado)
$checkBox.addEventListener('change', filtroCruzado)


function filtroCheck(eventos){
    const checkbox = document.querySelectorAll( 'input[type="checkbox"]:checked' )
    // buscar checks que esten checked
    // transformar de input a value
    // filtrar los eventos 
    // return
}

function busquedaCheckbox(categoria, listaEventos){
    let checkFiltrados = listaEventos.filter(evento => evento.categoria.includes(categoria.value))
    return checkFiltrados
}

function busquedaInputText(busquedaText){
    let eventosFiltrados = eventos.filter( evento => {
        return evento.nombre.toLowerCase().startsWith( busquedaText.value.toLowerCase() )
     } )
     return eventosFiltrados
}

function generarCheckbox(categorias){
    let template = ''
    categorias.forEach( (categoria, indice) => {
        template += `
        <div class="form-check col-lg-auto col-6 p-lg-0 d-flex justify-content-center justify-content-lg-start">
            <input value="${categoria}" type="checkbox" name="category2" class="check-box form-check-input" id="${indice}">
            <label class="form-check-label ps-3 ps-lg-2 col-lg-auto label-formulario col-8" for="${indice}">${categoria}</label>
        </div>
        `
    })
    return template
}

function renderizar(template, donde){
    document.getElementById(donde).innerHTML = template
}


function filtroCruzado(evento){
    console.log(evento)
    const filtroInpout = busquedaInputText($busquedaInput)
    const filtroCheckBox = filtroCheck( $checkBox, filtroInpout )
    renderizar( generarCheckbox( filtroCheckBox ), 'seccion-index' )
} */
