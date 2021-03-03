function sumar(a, b) {
    return a + b;
}

describe('operaciones básicas de suma', function(){
    it('should return 4 2+2', function() {
        const resultado = sumar(2, 2);
        expect(resultado).toBe(4);
    });
});