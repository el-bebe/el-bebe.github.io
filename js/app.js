
const hamburgesa = document.querySelector('.hamburgesa')
const navegacion = document.querySelector('.navegacion')
const enlases = document.querySelectorAll('.navegacion a')
const fecha = document.querySelector('.fecha')
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
   fechaActual();
})
function mostrarMenu(){
    hamburgesa.addEventListener('click',()=>{
          navegacion.classList.toggle('ocultar');    
        })}
          /*OTRA FORMA DE LLAMAR A LA FUNCION*/
      /* if(navegacion.classList.contains('ocultar')){
           navegacion.classList.remove('ocultar');
           }else{
              navegacion.classList.add('ocultar')
          }*/
function cerrarMenu(){
    enlases.forEach(enlace =>{
         enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if (e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
         } )
    })
}
function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}

function fechaActual()
{            let fechaHoy = new Date().getFullYear();
               fecha.textContent = fechaHoy
    }