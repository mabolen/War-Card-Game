const expect = chai.expect

describe('game', ()=> {
    it('should return a console log of a string with the winner', ()=> {
        expect(game()).to.equal(console.log('Player1 wins the game!') || console.log('Player2 wins the game!'))
    })
})