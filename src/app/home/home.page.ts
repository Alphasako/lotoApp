import { Component, OnInit, AfterViewInit } from '@angular/core';
import { lotoNumbers } from '../models/lotoNumbers.model';
import { game } from '../models/lotoNumbers.model';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  indexGame = 0
  allNumbers : any = [];
  lastNumber = 0;
  currentGame ="Quine"
  currentGameNumber = 1


  allGame : any = [];


  isClick: boolean=false;

  constructor(
    private navCtrl: NavController,
    private alertCtrl : AlertController
    ) {

  }

  ngOnInit() {
    this.createArray()
    this.createGame()
    console.log(this.allGame.length)
    console.log(this.allNumbers)
  }

  createArray() {
var indexNumber = 0



for (let i = 0; i < 91; i++) {

  var element = {
    number : indexNumber,
    isClicked : false
  }
  this.allNumbers.push(element);

  indexNumber = indexNumber+1
  // if (indexNumber == 90) {
  //   break
  // }
}









  }

// range(start, end) {
//     if(start === end) return [start];
//     return [start, ...range(start + 1, end)];
// }

isClicked(number: number){
 return this.isClick;
}

onClick(indexNumber: any){

  this.allNumbers[indexNumber].isClicked =!this.allNumbers[indexNumber].isClicked
  this.lastNumber = indexNumber
  // this.isClick=!this.isClick;
}

async resetGame() {
  var alert = this.alertCtrl.create({
    header: "Remettre à zéro?",
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: () => {

          this.deselectNumbers()
        }
      }
    ]
  });
   (await alert).present();
}


deselectNumbers() {
  this.lastNumber = 0
  this.allNumbers.forEach((x: any)=>  {
    x.isClicked = false
 });

}

goToMenu() {
this.navCtrl.navigateForward('/menu')
}


createGame() {

  this.allGame = [
    { number : 0 ,currentGame : "-",currentGift : "", currentSponsor : "",},

    { number : 1 ,currentGame : "Quine n°1",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},
    { number : 1 ,currentGame : "Quine n°2",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},
    { number : 1 ,currentGame : "Quine n°3",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},
    { number : 1 ,currentGame : "Quine n°4",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},
    { number : 1 ,currentGame : "Quine n°5",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},
    { number : 1 ,currentGame : "Quine n°6",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},
    { number : 1 ,currentGame : "Quine n°7",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},
    { number : 1 ,currentGame : "Quine n°8",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},
    { number : 1 ,currentGame : "Quine n°9",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},
    { number : 1 ,currentGame : "Quine n°10",currentGift : "Place de cinéma", currentSponsor : "Cinéma Ferney-Voltaire",},


    { number : 2 ,currentGame : "Quine",currentGift : "NICHOIR OISEAU", currentSponsor : "",},
    { number : 2 ,currentGame : "Double Quine",currentGift : "SOIN BEAUTE", currentSponsor : "INSTITUT L'APOTHEOSE SEGNY",},
    { number : 2 ,currentGame : "Carton",currentGift : "SMARTPHONE VIVO", currentSponsor : "CARREFOUR SEGNY",},

    { number : 3 ,currentGame : "Quine",currentGift : "3 PIZZAS A EMPORTER", currentSponsor : "6#42, SEGNY",},
    { number : 3 ,currentGame : "Double Quine",currentGift : "COFFRET DE VIN", currentSponsor : "",},
    { number : 3 ,currentGame : "Carton",currentGift : "2 PLACES EN VIP MATCH PRO D2 A OYONNAX", currentSponsor : "",},

    { number : 4 ,currentGame : "Quine",currentGift : "JEU", currentSponsor : "MAISON DE LA PRESSE, SEGNY",},
    { number : 4 ,currentGame : "Double Quine",currentGift : "COFFRET 3 COKTAILs", currentSponsor : "TAKITI",},
    { number : 4 ,currentGame : "Carton",currentGift : "BALLON FOOT FFF ET KIT FAN DE FOOT", currentSponsor : "SPORT 2000, SEGNY",},

    { number : 5 ,currentGame : "Quine",currentGift : "BON D'ACHAT", currentSponsor : "FLORANICE, SEGNY",},
    { number : 5 ,currentGame : "Double Quine",currentGift : "BON REPAS", currentSponsor : "CHEZ ARNO, SEGNY",},
    { number : 5 ,currentGame : "Carton",currentGift : "PANIER GARNI", currentSponsor : "LA POISSONERIE DU LAVOIR, SEGNY",},

    { number : 6 ,currentGame : "Carton Plein",currentGift : "ORDINATEUR PORTABLE", currentSponsor : "CARREFOUR SEGNY",},

    { number : 7 ,currentGame : "Quine",currentGift : "BALLON DE BASKET & SAC DE SPORT", currentSponsor : "FIBA",},
    { number : 7 ,currentGame : "Double Quine",currentGift : "1H DE MASSAGE THAI", currentSponsor : "APISSARA, ST GENIS POUILLY",},
    { number : 7 ,currentGame : "Carton",currentGift : "SHOOTING PHOTO", currentSponsor : "SARAH PHOTOGRAPHY, SEGNY",},

    { number : 8 ,currentGame : "Quine",currentGift : "1 COURS DE MUSIQUE + 1 T-SHIRT", currentSponsor : "GROOVE MUSIQUE, CESSY"},
    { number : 8 ,currentGame : "Double Quine",currentGift : "2 PLACES DE THEATRE", currentSponsor : "FERME AUBERGE DU PRE VELARD",},
    { number : 8 ,currentGame : "Carton",currentGift : "CALENDRIER 2023 DE LUXE", currentSponsor : "PHILOPHOTO",},

    { number : 9 ,currentGame : "Quine",currentGift : "SOIN BEAUTE", currentSponsor : "INSTITUT L'APOTHEOSE, SEGNY",},
    { number : 9 ,currentGame : "Double Quine",currentGift : "PARTIE DE BOWLING POUR 4 PERSONNES", currentSponsor : "LOISIRS GAMES, SEGNY",},
    { number : 9 ,currentGame : "Carton",currentGift : "BAPTEME DE L'AIR", currentSponsor : "CLUB AERONAUTIQUE D'ANNEMASSE",},

    { number : 10 ,currentGame : "Quine",currentGift : "GOURDE THERMIQUE", currentSponsor : "GOLF PASSION, BERNEX(CH)",},
    { number : 10 ,currentGame : "Double Quine",currentGift : "BON D'ACHAT", currentSponsor : "FROMAGERIE MICHELIN, SEGNY",},
    { number : 10 ,currentGame : "Carton",currentGift : "PAELLA MAISON POUR 6 PERSONNES", currentSponsor : "JULIO TRAITEUR",},

    { number : 11 ,currentGame : "Quine",currentGift : "PRODUITS POUR LE CORPS SOLIDES", currentSponsor : "ONIKHA",},
    { number : 11 ,currentGame : "Double Quine",currentGift : "BON COUPE + BARBE A L'ANCIENNE", currentSponsor : "LE BARBIER DU COIN, ST GENIS POUILLY",},
    { number : 11 ,currentGame : "Carton",currentGift : "VTT", currentSponsor : "",},

    { number : 12 ,currentGame : "Carton Plein",currentGift : "IPHONE SE 64GB", currentSponsor : "CARREFOUR SEGNY",},

    { number : 13 ,currentGame : "Quine",currentGift : "COFFRET 3 BIERES", currentSponsor : "BRASSERIE GESSIENNE, ORNEX",},
    { number : 13 ,currentGame : "Double Quine",currentGift : "PLASTIFIEUSE A4", currentSponsor : "IO BURO, CESSY",},
    { number : 13 ,currentGame : "Carton",currentGift : "SOIN BEAUTE", currentSponsor : "INSTITUT L'APOTHEOSE, SEGNY",},

    { number : 14 ,currentGame : "Quine",currentGift : "30 MIN DE JEUX VIRTUELS", currentSponsor : "LOISIRS GAMES, CESSY",},
    { number : 14 ,currentGame : "Double Quine",currentGift : "BON D'ACHAT", currentSponsor : "BERTHIE SPORT, SEGNY",},
    { number : 14 ,currentGame : "Carton",currentGift : "FOUR BRANDT", currentSponsor : "ORPI, GEX",},

    { number : 15 ,currentGame : "Quine",currentGift : "2 ENTREES FILETS SUSPENDUS", currentSponsor : "GAIA LOISIRS LAMOURA",},
    { number : 15 ,currentGame : "Double Quine",currentGift : "LOT 3 PANIERS EN TISSU", currentSponsor : "ATELIER BAYADERE",},
    { number : 15 ,currentGame : "Carton",currentGift : "GRILLE PAIN SMEG", currentSponsor : "CUISINE AVIVA, ST GENIS POUILLY",},

    { number : 16 ,currentGame : "Quine",currentGift : "SESSIONS ESCALADE", currentSponsor : "TOTEM ESCALADE, GENEVE",},
    { number : 16 ,currentGame : "Double Quine",currentGift : "HOTEL A INSECTES", currentSponsor : "",},
    { number : 16 ,currentGame : "Carton",currentGift : "4 ENTREES AU PARC WALIBI", currentSponsor : "",},

    { number : 17 ,currentGame : "Quine",currentGift : "COFFRET CONFITURES", currentSponsor : "MARAUDES ET COMPAGNIE, MIJOUX",},
    { number : 17 ,currentGame : "Double Quine",currentGift : "TROUSSE DE TOILETTE + CHEQUE CADEAU", currentSponsor : "B SAINT CLAIR",},
    { number : 17 ,currentGame : "Carton",currentGift : "TRAIN A INSECTES", currentSponsor : "",},

    { number : 18 ,currentGame : "Carton Plein",currentGift : "ROBOT PATISSIER MULTIFONCTIONS", currentSponsor : "CARREFOUR SEGNY",},


    { number : 19 ,currentGame : "Quine",currentGift : "VERRE FAN DE FOOT FFF", currentSponsor : "SPORT 2000, SEGNY",},
    { number : 19 ,currentGame : "Double Quine",currentGift : "BON D'ACHAT", currentSponsor : " FLORARNICE, SEGNY",},
    { number : 19 ,currentGame : "Carton",currentGift : "AGENDA DELUXE", currentSponsor : "2 SOEURS 1 AGENDA",},

    { number : 20 ,currentGame : "Quine",currentGift : "BON REPAS X2", currentSponsor : "PANDA WOK, CESSY",},
    { number : 20 ,currentGame : "Double Quine",currentGift : "COFFRET BEAUTE FEMME", currentSponsor : "STUDIO NAILS, SEGNY",},
    { number : 20 ,currentGame : "Carton",currentGift : "BOUTEILLE JEROBOAM", currentSponsor : "BAR A TAPAS, SEGNY",},

    { number : 21 ,currentGame : "Quine",currentGift : "GOURDE THERMIQUE", currentSponsor : "GOLF PASSION, BERNEX(CH)",},
    { number : 21 ,currentGame : "Double Quine",currentGift : "NETTOYAGE VOITURE INTERIEUR ET EXTERIEUR", currentSponsor : "RENAULT, CESSY",},
    { number : 21 ,currentGame : "Carton",currentGift : "SESSION KARTING 2 ADULTES ET 2 ENFANTS", currentSponsor : "ON'KART, VIRY",},


    { number : 22 ,currentGame : "Quine",currentGift : "SESSIONS ESCALADE", currentSponsor : "CORTIGRIMPE, ST GENIS POUILLY",},
    { number : 22 ,currentGame : "Double Quine",currentGift : "LAMPE SUR PIED", currentSponsor : "BRICORAMA, CESSY",},
    { number : 22 ,currentGame : "Carton",currentGift : "MICRO ONDE GRILL", currentSponsor : "CARREFOUR SEGNY",},


    { number : 23 ,currentGame : "Carton Plein",currentGift : "?", currentSponsor : "",},

    { number : 24 ,currentGame : "Carton Plein", currentGift : "BON VOYAGE CHEZ PRET A PARTIR A VAL THOIRY", currentSponsor : "",},

  ]


}

nextGame() {

  // this.currentGameNumber = this.currentGameNumber + 1
  console.log("BEFORE---",this.indexGame);
  this.indexGame = this.indexGame +1
  console.log("AFTER--",this.indexGame);
  // this.deselectNumbers()
}




async nextButton() {
  var alert = this.alertCtrl.create({
    header: "Partie suivante",
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: () => {

          this.nextGame()
        }
      }
    ]
  });
   (await alert).present();
}


async manuelEntry() {
  var alert = this.alertCtrl.create({
    header: "Entrez l'index de la partie",
    // message: 'Do you want to buy this book?',
    inputs: [
      {
      name: "indexAlert",
      type: "textarea",
    },

    ],
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: (data) => {
          const numberValue = Number(data.indexAlert);
          console.log("BEFORE--MANUAL",data.indexAlert);
          console.log(this.allGame[data.indexAlert]);
          this.indexGame = numberValue
          console.log("AFTER--MANUAL",data.indexAlert);
          this.deselectNumbers()
        }
      }
    ]
  });
   (await alert).present();
}

async presentConfirm() {
  var alert = this.alertCtrl.create({
    header: "Nouvelle Partie",
    message: 'Do you want to buy this book?',
    inputs: [
      {
      type: "radio",
      label: "Quine",
      value:"Quine"
    },
    {
      type: "radio",
      label: "Double Quine",
      value:"Double Quine"
    },
    {
      type: "radio",
      label: "Carton",
      value:"Carton"
    },

    ],
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: (data) => {
          console.log('Buy clicked');
          this.currentGame = data
          this.nextGame()
        }
      }
    ]
  });
   (await alert).present();
}


}
