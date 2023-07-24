function calcularPorcentajes(gasto, ingreso) {
  // Calculo del porcentaje de gastos
  const porcentajeGastos = (gasto / ingreso) * 100;

  // Calculo del porcentaje de ingresos (siempre será 100%)
  const porcentajeIngresos = 100;

  // Calculo del porcentaje de ahorro
  const porcentajeAhorro = 100 - porcentajeGastos;

  // Calculo del monto ahorrado
  const montoAhorrado = ingreso - gasto;

  // Retornar los resultados como un objeto
  return {
    porcentajeGastos,
    porcentajeIngresos,
    porcentajeAhorro,
    montoAhorrado,
  };
}

let mensajeEntrada = window.confirm("¿Qué tal? Tenemos preparado un sistema para calcular tus porcentajes de ingresos, ahorros y gastos. ¿Te interesa? acepta para continuar");
if (mensajeEntrada)
{
    let namePerson = prompt("Ingresa tu nombre");
    let surnamePerson = prompt("Ingresa tu apellido");
    let edadPerson = prompt("Nos gustaría saber cuál es tu edad, ingresala")

    let nombreCompleto = namePerson + " " + surnamePerson;

        if (edadPerson >= 18)
        {

        alert(`Hola ${nombreCompleto}, bienvenido!`);
    
        alert ("Queremos ayudarte a calcular los porcentajes de tus gastos, ingresos y ahorro. Para ello, avanza y te solicitaremos algunos datos") 
        
        let gasto = parseInt(prompt("Ingresa tu monto mensual de gasto neto, sin puntos ni comas. Ej: 25000"));
        let ingreso = parseInt(prompt("Ingresa tu monto mensual de ingreso neto, sin puntos ni comas. Ej: 25000"));

        let porcentajes = calcularPorcentajes(gasto, ingreso)

        alert(`Tus porcentajes son: \n\n Porcentaje de gastos: ${porcentajes.porcentajeGastos}% \n\n Porcentaje de ingresos: ${porcentajes.porcentajeIngresos}% \n\n Porcentaje de ahorro: ${porcentajes.porcentajeAhorro}% \n\n Monto disponible para ahorro: ${porcentajes.montoAhorrado}`);
        
        let aceptar = window.confirm("Para calcular nuevamente los porcentajes: ACEPTAR \n\n Para terminar y salir: CANCELAR")
        
          while(aceptar){

            let gasto = parseInt(prompt("Ingresa tu monto mensual de gasto neto, sin puntos ni comas. Ej: 25000"));
            let ingreso = parseInt(prompt("Ingresa tu monto mensual de ingreso neto, sin puntos ni comas. Ej: 25000"));

            let porcentajes = calcularPorcentajes(gasto, ingreso)

            alert(`Tus porcentajes son: \n\n Porcentaje de gastos: ${porcentajes.porcentajeGastos}% \n\n Porcentaje de ingresos: ${porcentajes.porcentajeIngresos}% \n\n Porcentaje de ahorro: ${porcentajes.porcentajeAhorro}% \n\n Monto disponible para ahorro: ${porcentajes.montoAhorrado}`);
        
            let aceptar = window.confirm("Para calcular nuevamente los porcentajes: ACEPTAR \n\n Para terminar y salir: CANCELAR")
        

          }
          window.close();
        } 
        else (edadPerson < 18)
        {

        alert(`Hola ${datos}, lo sentimos, pero no tienes la edad suficiente para ingresar`);
        
        } 

}
else
{

    alert("Hasta luego, podrás volver cuando quieras!")

    window.close();

}