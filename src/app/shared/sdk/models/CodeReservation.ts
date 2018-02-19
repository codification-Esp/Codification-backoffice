/* tslint:disable */

declare var Object: any;
export interface CodeReservationInterface {
  "idReservation": number;
  "codeReservation": string;
  "id"?: any;
}

export class CodeReservation implements CodeReservationInterface {
  "idReservation": number;
  "codeReservation": string;
  "id": any;
  constructor(data?: CodeReservationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CodeReservation`.
   */
  public static getModelName() {
    return "CodeReservation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CodeReservation for dynamic purposes.
  **/
  public static factory(data: CodeReservationInterface): CodeReservation{
    return new CodeReservation(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CodeReservation',
      plural: 'CodeReservations',
      path: 'CodeReservations',
      idName: 'id',
      properties: {
        "idReservation": {
          name: 'idReservation',
          type: 'number'
        },
        "codeReservation": {
          name: 'codeReservation',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
