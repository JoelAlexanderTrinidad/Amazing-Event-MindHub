const eventos = data.events 
const fechaActual = data.currentDate

const todosLosEventos = (even) => {
    let template = ''

    for(let evento of even){
        template += `
                <div class="card col-5 col-lg-3 col-xl-2">
                    <div class="p-2 pt-md-3 pt-md-3 tarjeta">
                        <img src="https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg" class="img-tarjeta" alt="...">
                        <div class="">
                        <h5 class="pt-1 titulo-tarjeta">${evento.name}</h5>
                        <p class="texto-tarjeta">${evento.description.slice(0,40)}...</p>
                        <p class="text-center pt-2 mb-0">Price: <span class="text-success">$${evento.price}</span></p>
                        <p class="texto-tarjeta">Date: ${evento.date}</p>
                        <div class="justify-content-center d-flex">
                            <a href="./details.html" class="btn btn-danger boton-tarjeta">View more</a>
                        </div>
                        </div>
                    </div>
                </div>
            `
    }
    return template
}

// console.log(todosLosEventos(eventos));

let seccion = document.getElementById('seccion-index')

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
                        <h5 class="pt-1 titulo-tarjeta">Collectivities Party</h5>
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