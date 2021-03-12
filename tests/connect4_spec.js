const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon')
const Connect4 = require('../app/connect4.js');


// 1. on teste l'affichage de la grille 7 colonnes / 6 rangées
// 2. pouvoir mettre 6 jettons dans une colonne
// 3. si un 7e jetton est placé dans une colonne => afficher un msg d'erreur
// 4. pouvoir choisir la colonne du jeton
// 5. vider la grille

describe('Connect4 Test', () => {


    context('Affichage de la grille', () => {
        it('il y 7 colonnes de 6 rangées', () => {
            const connect4 = new Connect4();
            expect(connect4.showGrid()).to.equal(
                  '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
            )
        })
        it ('peux voir une cellule à une position donnée', () => {
            const connect4 = new Connect4();

            connect4.insertCoin(0);
            expect(connect4.lookAt(0, 0)).to.equal('*');
            expect(connect4.lookAt(1, 0)).to.equal('.');
        })
        it ('peux vider la grille', () => {
            const connect4 = new Connect4();
            connect4.insertCoin(0);
            connect4.cleanGrid();
            expect(connect4.showGrid()).to.equal(
                  '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
            )
        })
    })
    context('Partie', () => {
        it ('peux poser 1 jeton', () => {
            const connect4 = new Connect4();

            connect4.insertCoin();
            expect(connect4.showGrid()).to.equal(
                  '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
                + '*......\n'
            )
        })
        it ('peux poser 2 jetons sur la même colonne', () => {
            const connect4 = new Connect4();

            connect4.insertCoin();
            connect4.insertCoin();
            expect(connect4.showGrid()).to.equal(
                  '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
                + '*......\n'
                + '*......\n'
            )
        })
        it ('ne peux pas poser un 7eme jeton sur la même colonne', () => {
            const connect4 = new Connect4();

            // should throw exception

            expect(connect4.insertCoin()).to.equal('ok');
            expect(connect4.insertCoin()).to.equal('ok');
            expect(connect4.insertCoin()).to.equal('ok');
            expect(connect4.insertCoin()).to.equal('ok');
            expect(connect4.insertCoin()).to.equal('ok');
            expect(connect4.insertCoin()).to.equal('ok');
            expect(connect4.insertCoin()).to.equal('error');
        })
        it ('peux poser 1 jeton dans la colonne désirée', () => {
            const connect4 = new Connect4();

            connect4.insertCoin(3);
            connect4.insertCoin(3);
            expect(connect4.showGrid()).to.equal(
                  '.......\n'
                + '.......\n'
                + '.......\n'
                + '.......\n'
                + '...*...\n'
                + '...*...\n'
            )
        })
    })
})

