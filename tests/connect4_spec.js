const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon')
const Connect4 = require('../app/connect4.js');


// 1. on teste l'affichage de la grille 7 colonnes / 6 rangées
// 2. pouvoir mettre 6 jettons dans une colonne
// 3. si un 7e jetton est placé dans une colonne => afficher un msg d'erreur
// 4. vider la grille

describe('Connect4 Test', () => {

    const connect4 = new Connect4()

    context('Affichage de la grille', () => {
        it('il y 7 colonnes', () => {
            let consoleDisplayer = { displayToConsole() {} }
            const consoleDisplayerMock = {}

            consoleDisplayerMock.saveFunction = consoleDisplayer.displayToConsole
            consoleDisplayer.displayToConsole = function() {
                consoleDisplayerMock.called = true
                consoleDisplayerMock.arguments = arguments
                consoleDisplayerMock.saveFunction(arguments)
            }
            consoleDisplayerMock.verify = function () {
                const argument = ('.'.repeat(7)+'\n').replace(6)
                if(consoleDisplayerMock.called) {
                    if(consoleDisplayerMock.arguments[0])
                }
            }
            expect(project.testFunction()).to.equal(1)
        })
    })
})

