//validaciones simples (asserts)
describe('Cuentas', function() {

    //expects simples
    var a = 1+1;
    var b = 2;
    it('Vamos a ver que se sume bien', function(){
        expect(a==b, 'Si la prueba falla, esto se muestra').to.equal(true);
    });

    it('Vamos a ver que reste bien', function(){
        expect(a-b).to.equal(0);
    })

    it('Vamos a ver una igualdad', () => {
        expect(1==1).to.equal(true);
    })

    it('Negacion o inversion', () => {
        expect(1-1).to.not.equal(1);
    })

    it('Tiene que ser verdadero', () => {
        expect(2==2).to.be.true;
    })

    it('La variable existe', () => {
        expect(a).to.exist;
    })

    it('Menor a 10', () => {
        expect(a, 'variable no es menor a 10').to.be.lessThan(10);
    })

    it('Mayor a 10', () => {
        expect(a, 'variable no es mayor a 10').to.be.greaterThan(10);
    })

})