const mostrar = document.getElementById("mostrar");
const btn_iniciar = document.getElementById("btn_iniciar");
const btn_pausar = document.getElementById("btn_pausar");
const btn_reiniciar = document.getElementById("btn_reiniciar");
const modo = document.getElementById("modo");

let tiempo = 1500;
let segundos;
let enDescanso = false;
modo.textContent = "Modo Trabajo";
mostrar.textContent ="25:00";
const temporizador = () => {
    segundos = setInterval(() => {
        tiempo-=1;
        if(tiempo === 0) {
            if(enDescanso)
            {
                enDescanso = false;
                tiempo = 1500;
                modo.textContent = "Modo Trabajo";
            } else {
                enDescanso = true;
                tiempo = 300;
                modo.textContent = "Modo Descanso";
            }
        } 


        let minutos = Math.floor(tiempo / 60);
        let segundosRestantes = tiempo % 60;
        let mostrarMinutos = String(minutos).padStart(2, '0');
        let mostrarSegundos = String(segundosRestantes).padStart(2, '0');
        mostrar.textContent = `${mostrarMinutos}:${mostrarSegundos}`;
    }, 1000)
}

btn_iniciar.addEventListener('click', () => {
    btn_iniciar.disabled = true;
    temporizador();
});
btn_pausar.addEventListener('click', () => {
    clearInterval(segundos);
    btn_iniciar.disabled = false;
})

btn_reiniciar.addEventListener('click', () => {
    btn_iniciar.disabled = false;
    tiempo = 1500;
    clearInterval(segundos);
    mostrar.textContent ="25:00";
    modo.textContent = "Modo Trabajo";
})
