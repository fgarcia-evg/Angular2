
import { Injectable } from '@Angular/core';


@Injectable()
export class RopaService {

  // tslint:disable-next-line:variable-name
  public nombre_prenda = 'Pantalones';
  public coleccionRopa = ['pantalón Blanco', 'camiseta Roja'];

  // tslint:disable-next-line:variable-name
  prueba(nombre_prenda) {
    return nombre_prenda;
  }
  // tslint:disable-next-line:variable-name
  addRopa(nombre_prenda: string): Array<string> {
    this.coleccionRopa.push(nombre_prenda);

    return this.getRopa();
  }

  deleteRopa(index: number) {
    this.coleccionRopa.slice(index, 1);
  }

  getRopa() {
    return this.coleccionRopa;
  }
}
