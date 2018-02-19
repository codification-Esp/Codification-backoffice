/* tslint:disable */

declare var Object: any;
export interface EtudiantInterface {
  "numEtudiant": string;
  "prenom": string;
  "nom": string;
  "dateNaiss": Date;
  "villeNaiss"?: string;
  "numCIN": string;
  "departement": string;
  "formation": string;
  "niveau": number;
  "id"?: any;
  "accountId"?: any;
}

export class Etudiant implements EtudiantInterface {
  "numEtudiant": string;
  "prenom": string;
  "nom": string;
  "dateNaiss": Date;
  "villeNaiss": string;
  "numCIN": string;
  "departement": string;
  "formation": string;
  "niveau": number;
  "id": any;
  "accountId": any;
  constructor(data?: EtudiantInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Etudiant`.
   */
  public static getModelName() {
    return "Etudiant";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Etudiant for dynamic purposes.
  **/
  public static factory(data: EtudiantInterface): Etudiant{
    return new Etudiant(data);
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
      name: 'Etudiant',
      plural: 'Etudiants',
      path: 'Etudiants',
      idName: 'id',
      properties: {
        "numEtudiant": {
          name: 'numEtudiant',
          type: 'string'
        },
        "prenom": {
          name: 'prenom',
          type: 'string'
        },
        "nom": {
          name: 'nom',
          type: 'string'
        },
        "dateNaiss": {
          name: 'dateNaiss',
          type: 'Date'
        },
        "villeNaiss": {
          name: 'villeNaiss',
          type: 'string'
        },
        "numCIN": {
          name: 'numCIN',
          type: 'string'
        },
        "departement": {
          name: 'departement',
          type: 'string'
        },
        "formation": {
          name: 'formation',
          type: 'string'
        },
        "niveau": {
          name: 'niveau',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "accountId": {
          name: 'accountId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
