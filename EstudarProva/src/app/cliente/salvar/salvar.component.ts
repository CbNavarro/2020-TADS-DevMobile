import { Component } from '@angular/core';

@Component({
    selector: "salvarCliente-app",
    templateUrl: "./salvar.component.html",
    styleUrls: ["./salvar.component.css"]
})


export class SalvarComponent{

    peso: number = 0;
    altura: number = 0;

    calcularImc(): void {

        let imc = (this.peso / (this.altura * this.altura));
        alert("Seu imc é " + imc );
    }

}

