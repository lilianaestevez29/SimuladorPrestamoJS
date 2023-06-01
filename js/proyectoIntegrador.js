function simularPrestamo() {
    let monto = parseInt(prompt("Ingrese el monto del préstamo:"));
    let plazo = parseInt(prompt("Ingrese el plazo en meses:  "));
        if (monto <= 0 || plazo <= 0) {
        alert("El monto y el plazo deben ser mayores a cero.");
        } else {
        let tasaInteresAnual = 0.1; 
        let tasaInteresMensual = tasaInteresAnual / 12;
        
        let cuotaMensual = monto * (tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -plazo)));
        
        alert("El monto a pagar mensualmente es: $" + cuotaMensual.toFixed(2));
        }
  }
  
  