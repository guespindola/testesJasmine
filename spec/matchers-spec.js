//toBe

describe("Suíte de testes do toBe", function () {
    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = { 'valor': valorBooleano };
    var obj2 = { 'valor': valorBooleano };
    // valor e o tipo é ===(toBee), valor é ==(toEqual)
    it("deve validar o uso do matcher 'toBe'", function () {
        expect(valorBooleano).toBe(true);
        expect(valorBooleanoCopia).toBe(valorBooleano);
        expect(valorBooleano).not.toBe(valorBooleanoTexto);
        expect(valorBooleanoTexto).toBe("true");
        expect(obj1).not.toBe(obj2); // o valor e o tipo do obj1 nao sao identicos ao obj2?é falso
    });
});



describe("Suíte de testes do toEqual", function () {
    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = { 'valor': valorBooleano };
    var obj2 = { 'valor': valorBooleano };

    it("deve validar o uso do matcher 'toEqual'", function () {
        expect(valorBooleano).toEqual(true);
        expect(valorBooleanoCopia).toEqual(valorBooleano);
        expect(valorBooleano).not.toEqual(valorBooleanoTexto);
        expect(valorBooleanoTexto).toEqual("true");
        expect(obj1).toEqual(obj2);
    });
});

//toMatch

describe("Suíte de testes do toMatch", function () {
    var textoComparar = "Curso de testes com jasmine";
    it("deve validar o uso do match 'toMatch'", function () {
        expect(textoComparar).toMatch(/jasmine/);
        expect(textoComparar).toMatch("jasmine");
        expect(textoComparar).toMatch(/jasmine/i);
        expect(textoComparar).not.toMatch(/Javascript/);
        expect("14/12/2016").toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });
});

describe("suíte de testes do toBeDefined", function () {
    var numero = 10;
    var texto;
    var obj = { 'valor': 10 };
    it("deve validar o uso do matcher 'toBeDefined'", function () {
        expect(numero).toBeDefined();
        expect(texto).not.toBeDefined();
        expect(obj.valor).toBeDefined();
        expect(obj.mensagem).not.toBeDefined();
    });
});

describe("suíte de testes do toBeUnDefined", function () {
    var numero = 10;
    var texto;
    var obj = { 'valor': 10 };
    it("deve validar o uso do matcher 'toBeUnDefined'", function () {
        expect(texto).toBeUndefined();
        expect(numero).not.toBeUndefined();
        expect(obj.mensagem).toBeUndefined();
        expect(obj.valor).not.toBeUndefined();
    });
});

describe("suíte de testes do toBeNull", function () {
    var objeto = null
    var texto;
    var numero = 10
    it("deve validar o uso do matcher 'toBeNull'", function () {
        expect(objeto).toBeNull();
        expect(numero).not.toBeNull();
        expect(texto).not.toBeNull();
        expect(objeto).not.toEqual(texto);
    });
});

//toBeTruthy
//aceita qualquer valor válido != 'false' / '0' / 'undefined' / 'null' / 'NaN'

describe("suíte de testes do toBeTruthy", function () {
    var objeto = { 'valor': 123 }
    var texto;
    var numero = 10;
    it("deve validar o uso do matcher 'toBetruthy'", function () {
        expect(objeto).toBeTruthy();
        expect(numero).toBeTruthy();
        expect(texto).not.toBeTruthy();
    });
});

//toBeFalsy

describe("suíte de testes do toBefalsy", function () {
    var numero = 10;

    it("deve validar o uso do matcher 'toBeFalsy'", function () {
        expect(false).toBeFalsy();
        expect("").toBeFalsy();
        expect(0).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(numero).not.toBeFalsy();
        expect("false").not.toBeFalsy();
    });
});

describe("Suíte de testes toContain", function () {
    var nomes = ["Fulano", "Ciclano", "Beltrano"];
    var nomesTexto = "Fulano Ciclano Beltrano";
    it("deve validar o uso do matcher 'toContain'", function () {
        expect(nomes).toContain("Ciclano");
        expect(nomesTexto).toContain("Fulano");
        expect(nomesTexto).toContain("Bel");
        expect(nomes).not.toContain("Maria");
        expect(nomes).not.toContain("ciclano");

    });
});

describe("Suíte de testes do toBeLessThan", function () {
    const PI = 3.1415;
    var numero = 2;
    it("deve validar o uso do matcher 'toBeLessThan'", function () {
        expect(numero).toBeLessThan(PI);
        expect("1.2").toBeLessThan(PI);
        expect(5).not.toBeLessThan(PI);
        expect(PI).not.toBeLessThan(PI);
    });
});

describe("Suíte de testes do toBeGreaterThan", function () {
    const PI = 3.1415;
    var numero = 4;
    it("deve validar o uso do matcher 'toBeGreaterThan'", function () {
        expect(numero).toBeGreaterThan(PI);
        expect("3.2").toBeGreaterThan(PI);
        expect(2).not.toBeGreaterThan(PI);
        expect(PI).not.toBeGreaterThan(PI);
    });
});

describe("Suíte de testes do toThrow", function () {
    var comErro = function () {
        return numero * 10;
    };
    var semErro = function (numero) {
        return numero * 10;
    };

    it("deve validar o uso do matcher 'toThrow'", function () {
        expect(comErro).toThrow();
        expect(semErro).not.toThrow();

    });
});

describe("Suíte de testes do tópico 5.13", function () {
    var calcularDobro = function (numero) {
        if (numero <= 0) {
            throw new TypeError("O número deve ser maior que 0.");
        }
        return numero * numero;
    };
    it("deve validar o uso do matcher 'toThrowError'", function () {
        expect(function () { calcularDobro(0) })
            .toThrowError();
        expect(function () { calcularDobro(0) })
            .toThrowError("O número deve ser maior que 0.");
        expect(function () { calcularDobro(0) })
            .toThrowError(/maior que 0/);
        expect(function () { calcularDobro(0) })
            .toThrowError(TypeError);
        expect(function () { calcularDobro(0) })
            .toThrowError(TypeError, "O número deve ser maior que 0.");
        expect(calcularDobro).not.toThrowError();
    });
});

describe("Testa a função 'fail' de falha manual", function () {
    var operacao = function (deveExecutar, callBack) {
        if (deveExecutar) {
            callBack();
        }
    };
    it("Não deve executar a funcao de callBack", function () {
        operacao(false, function () {
            fail("Função de callBack foi executada");
        });
    });
});

describe("Suíte de testes do beforeEach", function () {
    var contador = 0;
    beforeEach(function () {
        contador++;
    });
    it("deve exibir o contador com valor 1", function () {
        expect(contador).toEqual(1);
    });
    it("deve exibir o contador com valor 2", function () {
        expect(contador).toEqual(2);
    });
});

describe("Suíte de testes do afterEach", function () {
    var contador = 0;
    beforeEach(function () {
        contador++;
    });
    afterEach(function () {
        contador = 0;
    });
    it("deve exibir o contador com valor 1", function () {
        expect(contador).toEqual(1);
    });
    it("deve continuar exibindo contador igual a 1", function () {
        expect(contador).toEqual(1);
    });
});

describe("Suíte de testes do beforeAll", function () {
    var contador;
    beforeAll(function () {
        contador = 10;
    });
    beforeEach(function () {
        contador ++;
    });
    it("deve exibir o contador com valor 11", function () {
        expect(contador).toEqual(11);
    });
    it("deve exibir o contador com valor 12", function () {
        expect(contador).toEqual(12);
    });
});

describe("Suíte de testes do afterAll", function () {
    var contador;
    beforeAll(function () {
        contador = 10;
    });
    afterEach(function () {
        contador = 0;
    });
    it("deve exibir o contador com valor 10", function () {
        expect(contador).toEqual(10);
    });
    it("deve exibir o contador com valor 10", function () {
        expect(contador).toEqual(10);
    });
});

describe ("Supite de testes - Aninhado Suítes", function() {
    var contadorExterno = 0;
    beforeEach(function() {
        contadorExterno++;
    });
    it("deve ter incrementado o contador externo para 1", function() {
        expect(contadorExterno).toEqual(1);
    });
    describe("Suíte aninhada à anterior", function(){
        var contadorInterno = 1;
        beforeEach(function() {
            contadorInterno++;
        });
        it("deve conter o valor '2' para ambos contadores", function() {
            expect(contadorInterno).toEqual(contadorExterno);
        });
    });
});




