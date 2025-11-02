const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

// === NOVOS TESTES PARA MATAR MUTANTES - BLOCO 1 ===
describe('Testes adicionais para matar mutantes restantes', () => {

  // === Operação: divisao ===
  test('51. deve lançar erro ao dividir por zero', () => { expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.'); });
  test('52. deve dividir corretamente números negativos', () => { expect(divisao(-10, 2)).toBe(-5); expect(divisao(10, -2)).toBe(-5); expect(divisao(-10, -2)).toBe(5); });
  test('53. deve dividir números com resultado decimal', () => { expect(divisao(5, 2)).toBe(2.5); });

  // === Operação: raizQuadrada ===
  test('54. deve lançar erro para raiz quadrada de número negativo', () => { expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.'); expect(() => raizQuadrada(-10)).toThrow(); });
  test('55. deve calcular raiz quadrada de zero', () => { expect(raizQuadrada(0)).toBe(0); });
  test('56. deve calcular raiz quadrada de números não-perfeitos', () => { expect(raizQuadrada(2)).toBeCloseTo(1.414, 2); });

  // === Operação: fatorial ===
  test('57. n=0 deve retornar 1 (não pode depender só de n===1)', () => { const resultado = fatorial(0); expect(resultado).toBe(1); });
  test('58. n=1 deve retornar 1 (não pode depender só de n===0)', () => { const resultado = fatorial(1); expect(resultado).toBe(1); });
  test('59. n=0 OU n=1 devem retornar 1 (não pode ser E)', () => { expect(fatorial(0)).toBe(1); expect(fatorial(1)).toBe(1); expect(fatorial(2)).not.toBe(1); expect(fatorial(2)).toBe(2); });
  test('60. sem caso base, n=2 retornaria valor errado', () => { const fat2 = fatorial(2); expect(fat2).toBe(2); const fat3 = fatorial(3); expect(fat3 / fat2).toBe(3); });
  test('61. deve rejeitar números negativos', () => { expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.'); expect(() => fatorial(-5)).toThrow(); });
  test('62. comportamento diferente entre casos base e loop', () => { expect(fatorial(0)).toBe(1); expect(fatorial(1)).toBe(1); expect(fatorial(2)).toBeGreaterThan(1); expect(fatorial(2)).toBe(2); expect(fatorial(3)).toBe(6); expect(fatorial(4)).toBe(24); });
  test('63. isolamento completo - cada condição é independente', () => { const zero = fatorial(0); expect(zero).toBe(1); expect(zero).not.toBe(0); expect(zero).not.toBeGreaterThan(1); const um = fatorial(1); expect(um).toBe(1); expect(um).not.toBe(0); expect(um).not.toBeGreaterThan(1); const dois = fatorial(2); expect(dois).toBeGreaterThan(1); expect(dois).toBe(2); });
  test('64. verificação cruzada de valores', () => { const valores = new Map([[0,1],[1,1],[2,2],[3,6],[4,24],[5,120]]); valores.forEach((esperado,n)=>{ const resultado = fatorial(n); expect(resultado).toBe(esperado); if(n>=3) expect(resultado).toBeGreaterThan(n); }); });

  // === Operação: mediaArray ===
  test('65. mediaArray de array vazio deve retornar 0', () => { expect(mediaArray([])).toBe(0); });
  test('66. mediaArray de array com um elemento', () => { expect(mediaArray([5])).toBe(5); });
  test('67. mediaArray com números negativos', () => { expect(mediaArray([-10, -20, -30])).toBe(-20); });
});

  // === Operação: maximoArray ===
  test('68. maximoArray deve lançar erro para array vazio', () => { expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.'); });
  test('69. maximoArray com um único elemento', () => { expect(maximoArray([42])).toBe(42); });
  test('70. maximoArray com números negativos', () => { expect(maximoArray([-5, -1, -10])).toBe(-1); });

  // === Operação: minimoArray ===
  test('71. minimoArray deve lançar erro para array vazio', () => { expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.'); });
  test('72. minimoArray com um único elemento', () => { expect(minimoArray([42])).toBe(42); });
  test('73. minimoArray com números negativos', () => { expect(minimoArray([-5, -1, -10])).toBe(-10); });

  // === Operação: isPar ===
  test('74. isPar(0) deve retornar true', () => { expect(isPar(0)).toBe(true); });
  test('75. isPar com número ímpar', () => { expect(isPar(3)).toBe(false); });
  test('76. isPar com número negativo par', () => { expect(isPar(-4)).toBe(true); });
  test('77. isPar com número negativo ímpar', () => { expect(isPar(-3)).toBe(false); });

  // === Operação: isImpar ===
  test('78. isImpar(0) deve retornar false', () => { expect(isImpar(0)).toBe(false); });
  test('79. isImpar com número par', () => { expect(isImpar(4)).toBe(false); });
  test('80. isImpar com número negativo ímpar', () => { expect(isImpar(-3)).toBe(true); });
  test('81. isImpar com número negativo par', () => { expect(isImpar(-4)).toBe(false); });

  // === Operação: isPrimo ===
  test('82. isPrimo(0) deve retornar false', () => { expect(isPrimo(0)).toBe(false); });
  test('83. isPrimo(1) deve retornar false', () => { expect(isPrimo(1)).toBe(false); });
  test('84. isPrimo(2) deve retornar true', () => { expect(isPrimo(2)).toBe(true); });
  test('85. isPrimo(3) deve retornar true', () => { expect(isPrimo(3)).toBe(true); });
  test('86. isPrimo(4) deve retornar false', () => { expect(isPrimo(4)).toBe(false); });
  test('87. isPrimo de número negativo', () => { expect(isPrimo(-5)).toBe(false); });
  test('88. isPrimo de números compostos grandes', () => { expect(isPrimo(9)).toBe(false); expect(isPrimo(15)).toBe(false); });

  // === Operação: produtoArray ===
  test('89. array vazio DEVE retornar 1 imediatamente', () => { const resultado = produtoArray([]); expect(resultado).toBe(1); expect(resultado).toStrictEqual(1); expect(resultado === 1).toBe(true); expect(resultado).not.toBe(0); expect(resultado).not.toBeGreaterThan(1); expect(resultado).not.toBeLessThan(1); });
  test('90. diferença entre array vazio e array [1]', () => { const vazio = produtoArray([]); const umElemento = produtoArray([1]); expect(vazio).toBe(1); expect(umElemento).toBe(1); expect(vazio).toEqual(umElemento); });
  test('91. array vazio vs array com múltiplos 1s', () => { expect(produtoArray([])).toBe(1); expect(produtoArray([1])).toBe(1); expect(produtoArray([1, 1])).toBe(1); expect(produtoArray([1, 1, 1])).toBe(1); });
  test('92. verificação de tipo específica', () => { const resultado = produtoArray([]); expect(typeof resultado).toBe('number'); expect(Number.isInteger(resultado)).toBe(true); expect(resultado).toBe(1); });

  // === Operação: clamp ===
  test('93. valor EXATAMENTE igual a min deve usar caminho correto', () => {
      const resultado = clamp(0, 0, 10);
      expect(resultado).toBe(0);
      expect(resultado).toEqual(0);
      expect(resultado >= 0).toBe(true);
      expect(resultado <= 0).toBe(true);
      expect(resultado === 0).toBe(true);
  });
  test('94. valor EXATAMENTE igual a max deve usar caminho correto', () => { const resultado = clamp(10, 0, 10); expect(resultado).toBe(10); expect(resultado).toEqual(10); expect(resultado <= 10).toBe(true); expect(resultado >= 10).toBe(true); expect(resultado === 10).toBe(true); });
  test('95. valor ligeiramente MAIOR que max', () => { expect(clamp(10.001, 0, 10)).toBe(10); expect(clamp(11, 0, 10)).toBe(10); });
  test('96. valor ligeiramente MENOR que max', () => { expect(clamp(9.999, 0, 10)).toBe(9.999); expect(clamp(9.999, 0, 10)).not.toBe(10); });
  test('97. sequência de valores ao redor do limite', () => { expect(clamp(9, 0, 10)).toBe(9); expect(clamp(10, 0, 10)).toBe(10); expect(clamp(11, 0, 10)).toBe(10); expect(clamp(10, 0, 10) === clamp(9.999, 0, 10)).toBe(false); });
  test('98. valor ligeiramente MENOR que min', () => { expect(clamp(-0.001, 0, 10)).toBe(0); expect(clamp(-1, 0, 10)).toBe(0); });
  test('99. valor ligeiramente MAIOR que min', () => { expect(clamp(0.001, 0, 10)).toBe(0.001); expect(clamp(0.001, 0, 10)).not.toBe(0); });
  test('100. sequência de valores ao redor do limite inferior', () => { expect(clamp(-1, 0, 10)).toBe(0); expect(clamp(0, 0, 10)).toBe(0); expect(clamp(1, 0, 10)).toBe(1); expect(clamp(0, 0, 10) === clamp(0.001, 0, 10)).toBe(false); });
  test('101. CLAMP: valor === max com contagem de asserções', () => { expect.assertions(3); const resultado = clamp(10, 0, 10); expect(resultado).toBe(10); expect(resultado).not.toBeGreaterThan(10); expect(resultado).not.toBeLessThan(10); });
  test('102. CLAMP: valor === min com contagem de asserções', () => { expect.assertions(3); const resultado = clamp(0, 0, 10); expect(resultado).toBe(0); expect(resultado).not.toBeGreaterThan(0); expect(resultado).not.toBeLessThan(0); });


  // === Operação: isDivisivel ===
  test('103. isDivisivel quando resto é zero', () => { expect(isDivisivel(10, 5)).toBe(true); });
  test('104. isDivisivel quando resto não é zero', () => { expect(isDivisivel(10, 3)).toBe(false); });
  test('105. isDivisivel com números negativos', () => { expect(isDivisivel(-10, 5)).toBe(true); expect(isDivisivel(10, -5)).toBe(true); });

  // === Operação: celsiusParaFahrenheit ===
  test('106. celsiusParaFahrenheit com valores negativos', () => { expect(celsiusParaFahrenheit(-40)).toBe(-40); });
  test('107. celsiusParaFahrenheit(100) deve dar 212', () => { expect(celsiusParaFahrenheit(100)).toBe(212); });
  test('108. celsiusParaFahrenheit com decimal', () => { expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6, 1); });

  // === Operação: fahrenheitParaCelsius ===
  test('109. fahrenheitParaCelsius com valores negativos', () => { expect(fahrenheitParaCelsius(-40)).toBe(-40); });
  test('110. fahrenheitParaCelsius(212) deve dar 100', () => { expect(fahrenheitParaCelsius(212)).toBe(100); });
  test('111. fahrenheitParaCelsius com decimal', () => { expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37, 1); });

  // === Operação: inverso ===
  test('112. inverso deve lançar erro para zero', () => { expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); });
  test('113. inverso de números positivos', () => { expect(inverso(2)).toBe(0.5); expect(inverso(5)).toBe(0.2); });
  test('114. inverso de números negativos', () => { expect(inverso(-2)).toBe(-0.5); });

  // === Operação: isMaiorQue ===
    test('115. isMaiorQue quando a > b', () => { expect(isMaiorQue(10, 5)).toBe(true); });
    test('116. isMaiorQue quando a < b', () => { expect(isMaiorQue(5, 10)).toBe(false); });
    test('117. isMaiorQue quando a === b', () => { expect(isMaiorQue(5, 5)).toBe(false); });

    // === Operação: isMenorQue ===
    test('118. isMenorQue quando a < b', () => { expect(isMenorQue(5, 10)).toBe(true); });
    test('119. isMenorQue quando a > b', () => { expect(isMenorQue(10, 5)).toBe(false); });
    test('120. isMenorQue quando a === b', () => { expect(isMenorQue(5, 5)).toBe(false); });

    // === Operação: isEqual ===
    test('121. isEqual quando valores são iguais', () => { expect(isEqual(5, 5)).toBe(true); });
    test('122. isEqual quando valores são diferentes', () => { expect(isEqual(5, 10)).toBe(false); });
    test('123. isEqual com zeros', () => { expect(isEqual(0, 0)).toBe(true); });
    test('124. isEqual com negativos', () => { expect(isEqual(-5, -5)).toBe(true); expect(isEqual(-5, 5)).toBe(false); });

    // === Operação: medianaArray ===
    test('125. medianaArray deve lançar erro para array vazio', () => { expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.'); });
    test('126. medianaArray com um elemento', () => { expect(medianaArray([5])).toBe(5); });
    test('127. medianaArray com dois elementos', () => { expect(medianaArray([5, 10])).toBe(7.5); });
    test('128. medianaArray com array já ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
    test('129. medianaArray com array desordenado', () => { expect(medianaArray([5, 1, 3, 2, 4])).toBe(3); });
    test('130. medianaArray com array par desordenado', () => { expect(medianaArray([4, 2, 6, 8])).toBe(5); });
    test('131. medianaArray com números negativos', () => { expect(medianaArray([-5, -1, -3])).toBe(-3); });
    test('132. medianaArray não deve modificar array original', () => { const arr = [3, 1, 2]; medianaArray(arr); expect(arr).toEqual([3, 1, 2]); });