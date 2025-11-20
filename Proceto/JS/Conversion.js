let valor = document.getElementById("in1");
const eleccion = document.getElementById("se1");
let b = document.getElementById("pb");
let k = document.getElementById("pk");
let m = document.getElementById("pm");
let g = document.getElementById("pg");
let t = document.getElementById("pt");
let p = document.getElementById("pp");
let botonEnviar = document.getElementById("bo1");
botonEnviar.addEventListener("click",()=>{
    const valorConvertir = valor.value;
    const valorEleccion = eleccion.value;
    if(isNaN(valorConvertir) || valorConvertir < 0 || valorConvertir===null){
        alert("Por favor, Ingresa un valor numerico valido");
    }else{
        if(valorEleccion==="Bytes"){
            b.textContent = valorConvertir;
            k.textContent = valorConvertir/1024;
            m.textContent = valorConvertir/1024**2;;
            g.textContent = valorConvertir/1024**3;
            t.textContent = valorConvertir/1024**4;
            p.textContent = valorConvertir/1024**5;
        }
        if(valorEleccion==="Kilobytes"){
            b.textContent = valorConvertir*1024;
            k.textContent = valorConvertir;
            m.textContent = valorConvertir/1024;
            g.textContent = valorConvertir/1024**2;
            t.textContent = valorConvertir/1024**3;
            p.textContent = valorConvertir/1024**4;
        }
        if(valorEleccion==="Megabytes"){
            b.textContent = valorConvertir*1024**2;
            k.textContent = valorConvertir*1024;
            m.textContent = valorConvertir;
            g.textContent = valorConvertir/1024;
            t.textContent = valorConvertir/1024**2;
            p.textContent = valorConvertir/1024**3;
        }
        if(valorEleccion==="Gigabytes"){
            b.textContent = valorConvertir*1024**3;
            k.textContent = valorConvertir*1024**2;
            m.textContent = valorConvertir*1024;
            g.textContent = valorConvertir;
            t.textContent = valorConvertir/1024;
            p.textContent = valorConvertir/1024**2;
        }
        if(valorEleccion==="Terabytes"){
            b.textContent = valorConvertir*1024**4;
            k.textContent = valorConvertir*1024**3;
            m.textContent = valorConvertir*1024**2;
            g.textContent = valorConvertir*1024;
            t.textContent = valorConvertir;
            p.textContent = valorConvertir/1024;
        }
        if(valorEleccion==="Petabytes"){
            b.textContent = valorConvertir*1024**5;
            k.textContent = valorConvertir*1024**4;
            m.textContent = valorConvertir*1024**3;
            g.textContent = valorConvertir*1024**2;
            t.textContent = valorConvertir*1024;
            p.textContent = valorConvertir;
        }   
    }
});