//TRAER LOS DATOS DE LA MEMORIA Y CONVERTIRLOS A JSON NUEVAMENTE
let gastos = JSON.parse(sessionStorage.getItem("datos"))

//filtro aqui
//DOM
let fila=document.getElementById("fila")



//RECORRER EL ARREGLO DE DATOS QUE VOY A PINTAR
//TRAVERSING
//1.DEBEMOS RECORRER UN ARREGLO DE DATOS
gastos.forEach(function(gasto){
    

    //2.CREAMOS ETIQUETAS NECESARIAS PARA MOSTRAR LAS INFORMACIÓN

        let columna=document.createElement("div")
        columna.classList.add("col") 

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","p-5")  

        let descripcion=document.createElement("h3")
        descripcion.classList.add("text-center","fw-bold")
        //PROPIEDAD PARA MODIFICAR EL TEXTO DE UNA ETIQUETA DESDE JAVASCRIPT
        descripcion.textContent= gasto.descripcion

        let montoGasto=document.createElement("h2")
        montoGasto.classList.add("text-center","text-success")
        montoGasto.textContent="$ "+gasto.monto.toLocaleString('es-ES')  //SEPARADOR DE MILES

        //COLOCAR IMAGENES
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid")
        
        if(gasto.categoria=="transporte"){
            imagen.src="../../assets/img/bus.PNG"
        }else if(gasto.categoria=="comida"){
            imagen.src="../../assets/img/hora-de-comer.png" 
        }else if(gasto.categoria=="Impuestos"){
            imagen.src="../../assets/img/pago.png" 
        }else if(gasto.categoria=="Entretenimiento"){
            imagen.src="../../assets/img/entretenimiento.png"                       
        }else if(gasto.categoria=="Salud"){
            imagen.src="../../assets/img/eps.png"        
        }else if(gasto.categoria=="Otros"){
            imagen.src="../../assets/img/comprador.png"        
        }
        

    
    //3.CREANDO LAS JERARQUIAS DEL MODELO TRAVERSING
    //SE ARRANCA DE LOS MAS INTERNO HACIA LO MAS EXTERNO

    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(montoGasto)
    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
})

