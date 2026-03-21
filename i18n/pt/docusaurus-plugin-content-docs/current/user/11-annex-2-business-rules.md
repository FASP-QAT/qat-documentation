---
id: annex-2-business-rules
title: "Anexo 2: Regras de Negócios"
sidebar_label: "Anexo 2: Regras de Negócios"
sidebar_position: 11
---
# Anexo 2: Regras de Negócios

## Introdução

Este documento descreve as principais fórmulas e regras de negócios que sustentam o aplicativo Quantification Analytics Tool (QAT).

## Módulo de Planejamento de Suprimentos: Planejamento de Suprimentos

1. **Saldo inicial:**

> O saldo inicial de um mês é igual ao saldo final do mês anterior e, se for o primeiro mês, o saldo inicial é 0.
>
> **Fórmula:**
>
> Saldo inicial do primeiro mês = 0
>
> Saldo inicial do mês atual = Saldo final do mês anterior

2. **Estoque Expirado:**

> O estoque vencido é calculado como a soma do saldo final de todos os lotes do mês anterior que estão disponíveis e têm prazo de validade igual ao do mês atual.
>
> **Fórmula:**
>
> Estoque Expirado = Soma do Saldo Final dos lotes que estão vencendo neste mês

3. **Remessa total:**

> A remessa total é calculada como a soma de todas as remessas com data de recebimento (se a data de entrega atual ou esperada) for a mesma do mês atual e o status da remessa não for cancelado e se essa remessa específica precisar ser contabilizada, isso deverá ser considerado no saldo final.
>
> **Fórmula:**
>
> Total de remessas = Soma de todas as remessas cuja data de recebimento ou data prevista de entrega é no mesmo mês

4. **Estoque Final e Ajuste:**

> O stock final é calculado como a soma do stock de todas as regiões e o ajustamento total é calculado como a soma dos ajustamentos de todas as regiões com base em determinadas condições.

1. Se a região reportou tanto o stock real como o ajuste, então consideramos apenas a contagem real ao fazer a soma e o ajuste é ignorado para essa região, mesmo que alguém tenha introduzido os dados para ajuste.

2. Se a região apenas reportou o ajuste, então esse ajuste é considerado ao fazer a soma.

> Por exemplo, se a Região A reportou tanto a contagem de stock como o ajuste manual, nesse caso consideramos apenas a contagem de stock e ignoramos o ajuste. E se a Região B reportou apenas os ajustes, então consideramos a soma de todos os ajustes para essa região. E então somamos as contagens de ambas as regiões como estoque final e ajuste total.
>
> **Fórmula:**
>
> Estoque Final = Soma do estoque de todas as regiões
>
> Ajustes Totais = Soma dos ajustes de todas as regiões para as quais não há quantidade de estoque disponível.

5. **Consumo: **

> O consumo é calculado como a soma do consumo de todas as regiões com base em algumas condições.

- > Se todas as regiões não reportaram o consumo real, o QAT considera o máximo da soma do consumo previsto e da soma do consumo real.

- > Se todas as regiões reportaram o consumo real, tomamos a soma como consumo final.

> \*\* \*\*
>
> **Fórmula: **
>
> Consumo final (se todas as regiões não reportaram o consumo real) = MAX (Soma do consumo real de todas as regiões, Soma do consumo previsto para todas as regiões)
>
> Consumo final (se todas as regiões reportaram o consumo real) = Soma do consumo real de todas as regiões

6. **Inventário projetado:**

> O estoque projetado é calculado como soma do saldo inicial, total de remessas, total de ajustes e dedução do consumo final total e estoque vencido.
>
> **Fórmula:**
>
> Estoque projetado = Saldo inicial + Total de remessas +/- Total de ajustes - Consumo final - Estoque expirado

7. **Calcular ajuste automático:**

> Os ajustes automáticos são calculados com base em três condições:

1. Se todas as regiões relataram a contagem de estoque real e o estoque projetado não é igual ao estoque final

2. Se algumas regiões relataram que a contagem real de estoque e o inventário final são maiores que a soma do estoque projetado e do ajuste total

3. Se alguma das regiões relatou a contagem real de estoque e o estoque projetado for inferior a 0

> E com base nas condições acima, se alguma das condições for satisfeita, o ajuste automático será calculado como a diferença entre o estoque final e o estoque projetado, caso contrário, será considerado 0.
>
> **Fórmula:**
>
> Ajustes automáticos = Estoque final - Estoque projetado

8. **AMC:**

> O consumo médio mensal (AMC) é calculado como a razão entre a soma da demanda total dos meses passados e a demanda total dos meses futuros e o número total de meses para todos os consumos finais diferentes de zero e incluindo o mês atual nos meses futuros. Se o consumo for real, a Demanda Total será igual à soma da demanda não atendida mais o consumo real. Se o consumo for previsto, a demanda total será igual ao consumo previsto. Tanto os meses passados ​​como os meses futuros baseiam-se no mapeamento das unidades de planeamento do programa.
>
> **Fórmula:**
>
> AMC = Soma (demanda total em número de meses passados) + Soma (demanda total em número de meses futuros)/Número total de meses

9. **MOS mínimo:**

> Min MOS é calculado como Max of Min MOS e Min MOS guardrail. Min MOS é baseado no mapeamento da unidade de planejamento do programa e o guardrail Min MOS é baseado no domínio.
>
> <u>RAs regras para casas decimais são as seguintes</u>:
>
> \-Exibir 0 casas decimais se tiver mais de 3 dígitos (\>100, por exemplo, <u>10.000</u>)
>
> \-Exibir 1 casa decimal se tiver 2 dígitos (por exemplo, <u>99</u>.8)
>
> \-Exibir 2 casas decimais se houver 1 dígito (por exemplo, <u>1</u>.63)
>
> \-Exibir 3 casas decimais se for menor que 0 (por exemplo, <u>0</u>.124)
>
> Nota: AMC e MOS sempre mostram decimais, outros campos do plano de fornecimento só mostrarão decimais se a alternância de arredondamento estiver ativada.
>
> **Fórmula:**
>
> Min MOS = Máx. de (Min MOS, proteção Min MOS)

10. **MOS máximo:**

> Max MOS é calculado como Min de Max da soma de Min MOS e frequência de reordenamento e o guardrail Min Max e Max Max guardrail. A frequência de reordenamento é baseada no mapeamento da unidade de planejamento do programa e o guardrail Min Max e o guardrail Max Max são baseados no domínio.
>
> **Fórmula:**
>
> Max MOS = Min (Max (Min MOS + frequência de reordenamento, proteção mínima máxima), proteção máxima máxima)

11. **Estoque mínimo:**

> O estoque mínimo é calculado multiplicando o AMC e o MOS mínimo.
>
> **Fórmula:**
>
> Estoque mínimo = AMC \* MOS mínimo

12. **Estoque máximo:**

> O estoque máximo é calculado multiplicando o AMC e o Max MOS.
>
> **Fórmula:**
>
> Estoque máximo = AMC \* MOS máximo

13. **Quantidade máxima:**

> A Quantidade Máxima é calculada como a soma da Quantidade Mínima e a multiplicação da frequência de novo pedido e AMC
>
> **Fórmula**
>
> Quantidade máxima = Quantidade mínima + (Frequência de novo pedido \* AMC)

14. **Saldo Final:**

> O saldo final é calculado com base em certas condições:

1. Se todas as regiões reportaram a contagem real de stock, então o saldo final é igual ao stock final.

> **Fórmula:**
>
> Saldo final = Estoque final

2. Se algumas regiões reportaram a contagem real de estoque e se o estoque final for maior que a soma do estoque projetado e do ajuste automático, o saldo final será igual ao estoque final.

> **Fórmula:**
>
> Saldo final = Estoque final

3. Caso contrário, o saldo final é calculado como a soma do estoque projetado e do ajuste automático.

> **Fórmula:**
>
> Saldo final = Estoque projetado + Ajuste automático

15. **Demanda não atendida:**

<!-- lista final -->

- Quando o consumo real está disponível = (Consumo real \* Dias sem estoque) / (Dias no mês – Dias sem estoque)

- Quando nenhum consumo real estiver disponível = Estoque projetado\* (se o estoque projetado for \<0)

<!-- lista final -->

16. **MOS:**

> MOS é calculado como a proporção entre o saldo final e o AMC.
>
> **Fórmula:**
>
> MOS = Saldo final / AMC

17. **Quando sugerir envios (Planejar por MOS):**

> QAT sugere o envio para um mês quando o MOS do mês e dos dois meses seguintes for menor que o MOS mínimo e se o mês for maior que o mês atual
>
> **Fórmula:**
>
> Quando sugerir remessas = Se MOS para o mês e dois meses seguintes \< MOS mínimo

18. **Quantidade de envio sugerida (Plano por MOS):**

> A quantidade de remessa sugerida é calculada como a diferença entre o estoque máximo e o saldo final
>
> **Fórmula:**
>
> Quantidade de remessa sugerida = Estoque máximo - Saldo final

- Se o MOS do mês atual e dos dois meses seguintes for menor que o MOS mínimo

> _Quantidade de pedido sugerida = (estoque máximo - saldo final + demanda não atendida)_

- Se MOS for '0' e AMC for maior que \> 0 e os dois meses seguintes forem menores que Min MOS

> _Quantidade de pedido sugerida = (estoque máximo - saldo final + demanda não atendida)_

- Se MOS for '0' e AMC for maior que \> 0 e um dos dois meses seguintes for maior que Min MOS

> _Quantidade de pedido sugerida = (estoque mínimo - saldo final + demanda não atendida)_

19. **Quando sugerir remessas (Planejar por quantidade): **

> QAT sugere a remessa para um mês quando o saldo final do mês + prazo de distribuição e os dois meses seguintes for menor que a quantidade mínima ou quando o saldo final do mês for 0 e AMC for maior que 0 e se o mês for maior que o mês atual
>
> **Fórmula: **
>
> Quando sugerir remessas = Se Saldo Final do mês + X (Prazo de Entrega de Distribuição) e dois meses seguintes \< Quantidade Mínima ou
>
> Quando sugerir remessas = Se Saldo Final do mês = 0 e AMC não for igual a 0
>
> \*\* \*\*

20. **Quantidade de remessa sugerida (Planejar por quantidade): **

> A quantidade de remessa sugerida é calculada como a diferença entre o estoque máximo/estoque mínimo e a soma do saldo final e da demanda não atendida
>
> **Fórmula:**

- Se o saldo final do mês atual + X meses (prazo de entrega de distribuição) e os dois meses seguintes for menor que a quantidade mínima

> _Quantidade de pedido sugerida = (Quantidade máxima para o mês atual + X meses (Prazo de entrega de distribuição) - Saldo final + Demanda não atendida)_

- Se o saldo final for '0' e o AMC for maior que \> 0 para o mês atual + X meses (prazo de entrega de distribuição) e os dois meses seguintes forem menores que a quantidade mínima

> _Quantidade de pedido sugerida = (Quantidade máxima para o mês atual + X meses (Prazo de entrega de distribuição) - Saldo final + Demanda não atendida)_

- Se o final for '0' e o AMC for maior que \> 0 para o mês atual + X meses (tempo de entrega de distribuição) e um dos dois meses seguintes for maior que o MOS mínimo

> _Quantidade de pedido sugerida = (Quantidade mínima - Saldo final + Demanda não atendida)_

21. **Cálculos em lote:**

> Abaixo estão as etapas para todas as alocações de lote:

1. **Cálculos FEFO:**

> Calculamos primeiro o FEFO não alocado, ou seja, calculamos a quantidade total restante do consumo final e o ajuste total que será utilizado no caso de cálculos do FEFO e para os quais não temos as informações do lote. Assim, o FEFO não alocado é calculado com base em duas condições diferentes

1. Se a soma do ajuste total e do ajuste automático for inferior a 0, o FEFO não alocado será calculado como a diferença entre o consumo final e a soma do ajuste manual e do ajuste automático.

> **Fórmula:**
>
> FEFO não alocado = Consumo final - (Ajuste manual + Ajuste automático)

2. Se a soma do ajustamento e do ajustamento nacional for superior a 0, então o FEFO não atribuído é igual ao do consumo final.

> **Fórmula:**
>
> FEFO não alocado = Consumo final
>
> Classificamos todos os lotes com base na data de vencimento em ordem crescente, ou seja, classificamos os lotes na ordem que expira primeiro
>
> Em seguida, percorremos todos os lotes para fazer os cálculos FEFO
>
> Calculamos o saldo inicial de um lote que é igual ao saldo final do mesmo lote no mês anterior. E se o lote for criado, o saldo inicial será considerado 0.
>
> **Fórmula:**
>
> Saldo inicial do lote recém-criado = 0
>
> Saldo inicial dos lotes restantes = Saldo final
>
> Calculamos então a quantidade de estoque expirado que é igual ao saldo final do mesmo lote do mês anterior e só é calculado quando a data de vencimento do lote é igual à do mês atual, caso contrário é 0.
>
> **Fórmula:**
>
> Estoque Expirado (Se a data de vencimento for igual à data atual) = Saldo Final
>
> Estoque expirado (caso contrário) = 0
>
> Em seguida, calculamos o saldo final temporário. O Saldo Final Temporário é calculado como a soma do saldo inicial, total de remessas, total de ajustes e dedução do consumo final total e estoque expirado.
>
> **Fórmula:**
>
> Saldo final temporário = Saldo inicial + Quantidade de remessa + Quantidade de ajuste - Quantidade de consumo - Estoque expirado
>
> Em seguida, calculamos o valor do saldo final, que é calculado com base em duas condições diferentes

1. > Se o saldo final temporário for maior ou igual ao FEFO não alocado, o saldo final será igual à diferença entre o saldo final temporário e o FEFO não alocado. Além disso, neste caso, tornamos o FEFO não alocado como 0, pois alocamos toda a quantidade para o lote.

> **Fórmula:**
>
> Saldo final = Saldo final temporário - FEFO não alocado
>
> FEFO não alocado = 0

2. > Se o saldo final temporário for menor que o FEFO não alocado, o saldo final será igual a 0, pois consumiremos totalmente este lote. Além disso, deduzimos a temperatura CB do FEFO não alocado, uma vez que consumimos essa grande parte da quantidade.

> **Fórmula:**
>
> Saldo final = 0
>
> FEFO não alocado = FEFO não alocado - saldo final temporário
>
> Repetimos este processo para cada lote na ordem do prazo de validade.

1. > **Cálculos LEFO:**

> Calculamos primeiro o LEFO não alocado, ou seja, calculamos a quantidade total restante do consumo final e o ajuste total que será utilizado no caso de cálculos de LEFO e para os quais não temos as informações do lote. Assim, o LEFO não alocado é calculado com base em duas condições diferentes

1. Se a soma do ajuste manual e do ajuste automático for maior que 0, então o LEFO não alocado será calculado como a diferença entre 0 e a soma do ajuste manual e do ajuste automático.

> **Fórmula:**
>
> LEFO não alocado = 0 - (Ajuste manual + Ajuste automático)

2. Se a soma do ajuste manual e do ajuste automático for menor que 0, então o LEFO não alocado será 0.

> **Fórmula:**
>
> LEFO não alocado = 0

3. Se o LEFO não alocado não for igual a 0, continuamos, caso contrário, quebramos.

> Classificamos todos os lotes com base na data de vencimento em ordem decrescente, ou seja, classificamos os lotes na ordem que expira primeiro
>
> Em seguida, percorremos todos os lotes para fazer os cálculos LEFO
>
> Em seguida, calculamos o saldo final temporário. O saldo final temporário é igual ao saldo final do lote após os cálculos FEFO.
>
> **Fórmula:**
>
> Saldo final temporário = Saldo final após cálculos FEFO
>
> Em seguida, calculamos o valor do saldo final, que é calculado com base em duas condições diferentes

1. Se o saldo final temporário for maior ou igual ao LEFO não alocado, o saldo final será igual à diferença entre o saldo final temporário e o LEFO não alocado. Também neste caso, tornamos o LEFO não alocado como 0, uma vez que alocamos toda a quantidade para o lote.

> **Fórmula:**
>
> Saldo final = Saldo final temporário - LEFO não alocado
>
> LEFO não alocado = 0

2. Se o saldo final temporário for menor que o LEFO não alocado, o saldo final será igual a 0, pois consumiremos totalmente este lote. Além disso, deduzimos a temperatura CB do LEFO não alocado, uma vez que consumimos grande parte da quantidade.

> **Fórmula:**
>
> Saldo final = 0
>
> LEFO não alocado = LEFO não alocado - saldo final temporário
>
> Repetimos este mesmo processo para o restante dos lotes até que o LEFO não alocado não seja igual a 0.

## Módulo de planejamento de suprimentos: lista de problemas de QAT

### Qualidade dos dados

1. > Insumos de consumo real recentes ausentes (nos últimos \<%X %\> meses)

<!-- lista final -->

1. **Sugestão:** Forneça o consumo real na região \<%REGION %\> para o mês de \<%DT %\>.

2. **Lógica:** O QPL verificará o consumo real dos últimos três meses e do mês atual. Se o consumo real dos últimos três meses e do mês atual estiver faltando, o problema será sinalizado.

<!-- lista final -->

1. Entradas de estoque recentes ausentes (nos últimos \<%X%\> meses)
    1. **Sugestão:** Forneça a contagem de estoque na região \<%REGION %\> para o mês de \<%DT%\>.

    2. **Lógica:** A QPL verificará o estoque dos últimos três meses e do mês atual. Se o estoque dos últimos três meses e do mês atual estiver faltando, o problema será sinalizado.

2. Faltam dados de consumo reais recentes durante meses em lacunas
    1. **Sugestão:** Forneça o consumo real na região \<%REGION %\> para o mês de \<%DT %\>.

    2. **Lógica:**
        1. O QPL verificará as entradas de consumo real para o mês atual (considerar como t) e para o mês que será o mês atual menos dois meses (considerar como t-2), ou seja, t e t-2 se ambos os meses tiverem consumo real e o mês atual menos um mês (considerar como t-1), ou seja, t-1 não tiver consumo real. Então, neste caso, o problema é sinalizado.

        2. O QPL verificará as entradas de consumo real para o mês atual menos um mês (considerar como t-1) e para o mês que será o mês atual menos três meses (considerar como t-3), ou seja, t-1 e t-3 se ambos os meses tiverem consumo real e o mês atual menos dois meses (considerar como t-2), ou seja, t-2 não tiver consumo real. Então, neste caso, o problema é sinalizado.

### Cronograma de Aquisições

1. As remessas tiveram datas de recebimento superiores a \<%X%\> dias no passado
    1. **Sugestão:** Verifique se a remessa \<%SHIPMENT_ID %\> foi recebida e atualize a data de recebimento ou o status da remessa.

    2. **Lógica:** QPL verificará a data de recebimento de todas as remessas e se a data de recebimento já passou e também ultrapassou o período de buffer, o problema será sinalizado. Por exemplo, o tempo de buffer para esse problema é de 14 dias, portanto, se a data de recebimento da remessa mais os dias de buffer já passaram, o problema será sinalizado para cada remessa.

2. A remessa não foi enviada há mais de \<%X%\> dias desde a data prevista
    1. **Sugestão:** Com base nos prazos de entrega, a remessa \<%SHIPMENT_ID%\> já deveria ter sido enviada. Verifique novamente para garantir que o status ou a data de recebimento estejam corretos.

    2. **Lógica:** A QPL verificará a data de envio para todas as remessas e se a data de envio já passou e também ultrapassou o período de buffer, o problema será sinalizado. Por exemplo, o tempo de buffer para esse problema é de 3 dias. Portanto, se a data enviada da remessa mais os dias de buffer já tiverem passado, o problema será sinalizado para cada remessa.

### Planejamento de Fornecimento

1. Sem consumo previsto \<%X %\> meses no futuro
    1. **Sugestão:** Forneça o consumo previsto na região \<%REGION %\> para o mês de \<%DT %\>.

    2. **Lógica:** A QPL verificará o consumo previsto para os próximos 18 meses. Se o consumo previsto para qualquer um dos meses estiver faltando, o problema será sinalizado. O problema entra em estado de conformidade se e somente se todos os 18 meses tiverem consumo previsto.

2. A previsão dinâmica não é usada para grupos de mercadorias ARV
    1. **Sugestão:** Verifique os dados de consumo na região \<%REGION%\> durante o período \<%DT%\>, pois incentivamos previsões com valores mensais dinâmicos, mostrando que fatores como escala do programa ou sazonalidade foram levados em consideração.

    2. **Lógica:** O QPL verificará se a unidade de planejamento do programa se enquadra no grupo de mercadorias ARV. Em seguida, o QPL verificará o consumo previsto para os 18 meses futuros, se quaisquer quatro meses consecutivos no período de 18 meses futuros tiverem a mesma quantidade de consumo prevista, então o problema será sinalizado.

3. A previsão dinâmica não é usada para grupos de produtos MALÁRIA
    1. **Sugestão:** Verifique os dados de consumo na região \<%REGION %\> durante o período \<%DT%\>, pois incentivamos previsões com valores mensais dinâmicos, mostrando que fatores como escala do programa ou sazonalidade foram levados em consideração.

    2. **Lógica:** O QPL verificará se a unidade de planeamento do programa se enquadra no grupo de produtos MALÁRIA. Em seguida, o QPL verificará o consumo previsto para os 18 meses futuros, se quaisquer quatro meses consecutivos no período de 18 meses futuros tiverem a mesma quantidade de consumo prevista, então o problema será sinalizado.

4. A previsão dinâmica não é usada para grupos de commodities VMMC
    1. **Sugestão:** Verifique os dados de consumo na região \<%REGION%\> durante o período \<%DT%\>, pois incentivamos previsões com valores mensais dinâmicos, mostrando que fatores como escala do programa ou sazonalidade foram levados em consideração.

    2. **Lógica:** O QPL verificará se a unidade de planejamento do programa se enquadra no grupo de mercadorias VMMC. Em seguida, o QPL verificará o consumo previsto para os 18 meses futuros, se quaisquer quatro meses consecutivos no período de 18 meses futuros tiverem a mesma quantidade de consumo prevista, então o problema será sinalizado.

5. **Plano de Fornecimento não segue parâmetros mínimos/máximos**
    1. **Sugestão:** **Reavaliar o plano de fornecimento para atender aos parâmetros Mín/Máx. Se houver excesso de estoque, considere adiar/cancelar remessa(s), revisar vencimentos futuros ou doar estoque. Se houver falta de estoque, considere planejar e fazer pedidos, agilizar ou aumentar a quantidade de remessa.**

    2. **Lógica: o QPL verificará se cada unidade de planejamento** está com estoque excessivo ou insuficiente em algum momento durante os próximos 18 meses, de acordo com os parâmetros mínimos e de reabastecimento definidos em níveis de programa individuais. O QAT contará então o número de meses em que a unidade de planejamento está **com excesso e falta de estoque** e subdividindo-a em duas janelas de tempo diferentes: os meses dentro do prazo de entrega (1-6 meses) e aqueles dentro da janela de planejamento (7-18 meses). O QPL também indicará o número de remessas recebidas nos próximos 1 a 6 meses e nos próximos 7 a 18 meses.

6. **Rupturas de estoque nos próximos 1 a 6 meses/Rupturas de estoque nos próximos 7 a 18 meses**
    1. **Sugestão: Considere planejar e fazer pedidos, agilizar ou aumentar a quantidade de remessa. Comunique a(s) possível(s) ruptura(s) de estoque com as partes interessadas relevantes.**

    2. **Lógica: o QPL verificará se cada unidade de planejamento** está esgotada (zero MOS) em qualquer momento durante os próximos 18 meses. O QAT contará então o número de meses em que a unidade de planejamento está abastecida e subdividi-la-á em duas janelas de tempo diferentes: os meses dentro do prazo de entrega (1 a 6 meses) e os meses dentro da janela de planejamento (7 a 18 meses). O QPL também indicará o número de remessas recebidas nos próximos 1 a 6 meses e nos próximos 7 a 18 meses.

### Outros (problemas manuais)

1. > **São perguntas ou esclarecimentos específicos inseridos manualmente pelo revisor do plano de fornecimento que não são sinalizados automaticamente pelo QAT. A descrição do problema, a sugestão e a criticidade são determinadas pelo revisor do plano de fornecimento. O QAT não conduz nenhuma lógica específica para este problema, pois ele deve ser adicionado, atualizado e resolvido manualmente pelo revisor do plano de fornecimento.**

## Módulo de Planejamento de Fornecimento: Outros Relatórios QAT

1. **WAPE (erro percentual absoluto ponderado)**

> WAPE (Erro Percentual Absoluto Ponderado) está sendo usado para calcular o erro de previsão. Este cálculo é usado em relatórios de erros de previsão que ajudam os proprietários do plano de fornecimento a revisar os erros de previsão para monitorar a força de suas previsões. A fórmula WAPE usa dados dos 3 a 12 meses anteriores, dependendo da seleção no menu suspenso ‘Janela de tempo’.
>
> WAPE está dividindo a soma das diferenças absolutas pela soma dos valores reais para uma janela de tempo específica. A janela de tempo pode ser 3,6,9 ou 12
>
> **Fórmula:**
>
> WAPE=((Abs(consumo real mês 1-consumo previsto mês 1)+ Abs(consumo real mês 2-consumo previsto mês 2)+ Abs(consumo real mês 3-consumo previsto mês 3)+ Abs(consumo real mês 4-consumo previsto mês 4)+ Abs(consumo real mês 5-consumo previsto mês 5)+ Abs(consumo real mês 6-mês de consumo previsto 6)) / (Soma de todo o consumo real nos últimos 6 meses))
>
> **Nota:** Janela de tempo considerada como 6 meses

2. **Custo de envio**

> É o custo total necessário para receber o pedido no armazém
>
> **Fórmula:**
>
> Custo total da remessa = (custo do produto + custo do frete) \* taxa de conversão para USD

3. **Custo do estoque**

> Este cálculo nos fornece o custo do produto disponível
>
> **Fórmula:**
>
> Custo do estoque = saldo final\* preço de catálogo

4. **Estoque médio**

> **Fórmula:**
>
> Estoque médio = soma (saldo final de ‘n’ meses) / n
>
> **Nota:** “n” é o número de meses

5. **Giro de estoque**

> É a relação consumo versus estoque médio. O usuário pode optar por visualizar a tabela de duas maneiras: por país ou por categoria de PU. Pode ser multisseleção para países ou categoria de PU, cálculo de nível mais alto (agregação/média de cada PU no programa ou de cada programa que contém essa categoria de PU). Em seguida, calculará os turnos para cada unidade de planejamento desse programa.
>
> **Fórmula: **

**Giros de estoque planejados (TI)**

**No nível PU**

> O cálculo é feito determinando os possíveis meses de estoque para cada mês acima de 12 meses se as regras de estoque funcionaram perfeitamente considerando o MIN e o Intervalo de Reordenamento da Unidade de Planejamento.
>
> Consumo = 1 MOS/mês; Consumo total durante o período = 12 MOS
>
> O MOS médio é calculado com base no MIN e no intervalo de novo pedido
>
> Por exemplo:

1\. Se o MIN for 3 e o novo pedido for 9 e o primeiro mês for um mês de novo pedido, então:

> uma. O MOS médio em 12 meses seria 7,25
>
>b. O giro de estoque planejado é o consumo total 12 dividido pela média calculada de meses de estoque em 12 meses. Assim, 12/7,25 = 1,7

| Intervalo de reordenação | Mês 1 | Mês 2 | Mês 3 | Mês 4 | Mês 5 | Mês 6 | Mês 7 | Mês 8 | Mês 9 | Mês 10 | Mês 11 | Mês 12 | Total de meses |
| ---------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- | ------------ |
| 12 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 78 |
| 11 | 1 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 67 |
| 10 | 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 58 |
| 9 | 3 | 2 | 1 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 51 |
| 8 | 4 | 3 | 2 | 1 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 46 |
| 7 | 5 | 4 | 3 | 2 | 1 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 43 |
| 6 | 6 | 5 | 4 | 3 | 2 | 1 | 6 | 5 | 4 | 3 | 2 | 1 | 42 |
| 5 | 2 | 1 | 5 | 4 | 3 | 2 | 1 | 5 | 4 | 3 | 2 | 1 | 33 |
| 4 | 4 | 3 | 2       | 1 | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1 | 30 |
| 3 | 3 | 2 | 1 | 3 | 2 | 1 | 3 | 2 | 1 | 3 | 2 | 1 | 24 |
| 2 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 18 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 12 |

**No nível do programa:**

> MODO (giros de estoque planejados de todas as unidades de planejamento em um programa específico)
>
> **Em nível de país e/ou categoria de PU**:

MODO (giros de estoque planejados de todas as unidades de planejamento em um país específico/categoria PU)

**Giro de estoque real (TI)**

**No nível PU**

1. Consumo total dos últimos 12 meses / Estoque médio disponível nos últimos 12 meses

> **No nível do programa**

1\. A primeira opção é procurar um modo.

2\. Se a contagem do valor MODE for \< 3 (configuração variável), QAT usa AVG, se a contagem do valor MODE for \> 3 (configuração variável), então

3\. A moda será determinada se o valor ocorrer em pelo menos 20% (configuração variável), do total de unidades de planejamento do programa. (Exemplo: o programa contém 100 PUs, 20 deles têm turnos = 1,2 e todos os demais têm turnos diferentes; portanto, os turnos do programa serão 1,2)

4\. Se a condição acima (20%) for encontrada várias vezes no conjunto de dados, QAT usará o INV MAIS BAIXO. modo de voltas do conjunto (Exemplo:, O programa contém 100 PUs; 60 PUs têm voltas diferentes; 20 PUs

> possuem giros inv = 1,2, outros 20 PUs possuem inv. voltas = 2,5; QAT exibirá 1.2 como inv. voltas para esse programa)

5\. Se nenhum modo definitivo puder ser encontrado com base nas regras acima, então os giros de faturamento no nível do programa serão a média de todos os giros de estoque da PU sob esse programa

**Em nível de país e/ou categoria de PU**

1\. A primeira opção é procurar um modo.

2\. Se a contagem do valor MODE for \< 3 (configuração variável), QAT usa AVG, se a contagem do valor MODE for \> 3 (configuração variável), então

3\. A moda será determinada se o valor ocorrer em pelo menos 20% (configuração variável) do número total de unidades de planejamento daquele país (ou categoria PU).

4\. Regra: se a condição acima for encontrada várias vezes no conjunto de dados, QAT usará o INV MAIS BAIXO. modo de turnos do grupo (por exemplo, País contém 1.000 PUs; 600 PUs têm turnos diferentes; 200 PUs

têm turnos inv = 1,6, outros 200 PUs têm inv. voltas = 2,2; QAT exibirá 1,6 como inv. vira para

essa categoria de país/PU)

5\. Regra: Se nenhum modo definitivo puder ser encontrado com base nas regras acima, então os giros de inventário em nível de categoria de país/PU serão a média de todos os giros de estoque de PU nessa categoria de país/PU

\*\* \*\*

**Observação**: O consumo real precede o consumo previsto no cálculo, se disponível

6. **Prazo de entrega total do agente de compras:**

> Este é o tempo total necessário para receber um produto no armazém desde a data em que o pedido foi planejado. Também depende do modo de envio (marítimo ou aéreo). Este cálculo é usado para calcular a data de entrega prevista para que o usuário possa solicitar produtos antes da ruptura de estoque
>
> **Fórmula:**
>
> Prazo de entrega total do agente de compras (por via aérea) = Prazo de entrega planejado para envio em meses + Enviado para prazo de entrega aprovado em meses + Prazo de entrega aprovado para envio em meses + Prazo de entrega enviado para chegada em meses (por via aérea) + Prazo de entrega recebido para chegada em meses
>
> Prazo de entrega total do agente de compras (por via marítima) = Prazo de entrega planejado para envio em meses + Enviado para prazo de entrega aprovado em meses + Prazo de entrega aprovado para envio em meses + Prazo de entrega enviado para chegada em meses (por via marítima) + Prazo de entrega recebido para chegada em meses

7. **Relatório de Vencimentos:**

> Este relatório calcula a quantidade expirada para cada unidade de planejamento, bem como o número do lote vinculado para mostrar as datas de quando ocorreu o vencimento. Também está incluído o custo total de vencimento de produtos vencidos.
>
> **Fórmula:**
>
> Custo total de vencimento = Quantidade expirada \* Preço unitário do produto da remessa (se o lote não vier da remessa, o preço de catálogo padrão será usado)

## Módulo de previsão: previsões de árvores

1. **Nó de agregação**

> O valor do nó de agregação para um mês é calculado como a soma dos valores dos nós filhos para esse mesmo mês
>
> **Fórmula:**
>
> Valor do nó para um mês = Soma (valores dos nós filhos)

1. **Nó numérico**

> O valor do nó numérico para um mês é definido no nó.
>
> **Fórmula:**
>
> Valor do nó para um mês = Valor definido no nó
>
> Existem três tipos de modelagem/transferência que podem ser aplicadas
>
> **a. Número linear: **
>
> Se a modelagem numérica linear for aplicada, o valor desse nó será aumentado ou diminuído em uma quantidade fixa mensal.
>
> Se a transferência linear de números for aplicada, o valor desse nó será diminuído neste nó e o mesmo valor será aumentado no nó transferido.

- **Fórmula para modelagem:**

> Valor para um nó por um mês = Valor definido no nó +/- Quantidade mensal fixa

- **Fórmula para transferência:**

> Valor de transferência do nó para um mês = Valor definido no nó - quantidade fixa mensal
>
> Valor de transferência para o nó por um mês = Valor definido no nó + quantidade fixa mensal

2. > **Porcentagem Linear: **

> Se a modelagem percentual linear for aplicada, uma porcentagem do mês inicial será aumentada ou diminuída a partir de cada mês.
>
> Se a transferência percentual linear for aplicada, uma porcentagem do mês inicial será diminuída neste nó e o mesmo valor será aumentado no nó transferido para cada mês.

- **Fórmula para modelagem:**

> Valor para um nó para um mês = Valor definido no nó +/- Porcentagem do valor do mês inicial

- **Fórmula para transferência:**

> Valor de transferência do nó para um mês = Valor definido no nó - Porcentagem do valor do mês inicial
>
> Valor de transferência para o nó por um mês = Valor definido no nó + Porcentagem do valor do mês inicial de transferência do nó

3. > **Porcentagem exponencial: **

> Se a modelagem percentual exponencial for aplicada, uma porcentagem do valor do mês anterior será aumentada ou diminuída a cada mês.
>
> Se a transferência percentual exponencial for aplicada, uma porcentagem do valor do mês anterior será diminuída neste nó e o mesmo valor será aumentado no nó transferido para cada mês.

- **Fórmula para modelagem:**

> Valor para um nó para um mês = Valor definido no nó +/- Porcentagem do valor do mês anterior

- **Fórmula para transferência:**

> Valor de transferência do nó para um mês = Valor definido no nó - Porcentagem do valor do mês anterior
>
> Valor de transferência para o nó durante um mês = Valor definido no nó + Percentagem do valor do mês anterior

1. > **Nó de Porcentagem**

> O valor do nó percentual é calculado como porcentagem do valor do nó pai
>
> **Fórmula:**
>
> Valor do nó para um mês = (Valor definido no nó \* Valor do nó pai/100)
>
> Existe apenas um tipo de modelagem/transferência que pode ser aplicada

1. > **Linear (% ponto): **

> Se a modelagem linear (% pontos) for aplicada, o valor será calculado como a soma da porcentagem do nó e do valor percentual linear (% pontos) do nó pai.
>
> Se a transferência linear de números for aplicada, o valor percentual desse nó será diminuído neste nó e o mesmo valor será aumentado no nó transferido.

- **Fórmula para modelagem:**

> Valor para um nó para um mês = (Valor definido no nó +/- Valor do ponto % linear) \* Valor do nó pai / 100

- **Fórmula para transferência:**

> Valor de transferência do nó para um mês = (Valor definido no nó - Valor do ponto percentual linear) \* Valor do nó pai / 100
>
> Valor de transferência para o nó por um mês = (Valor definido no nó + Valor do ponto percentual linear) \* Valor do nó pai / 100

1. > **Nó da Unidade de Previsão**

> O valor do nó percentual é calculado como porcentagem do valor do nó pai com base nos parâmetros da unidade de previsão
>
> **Fórmula:**
>
> Valor do nó para um mês = (Valor definido no nó \* Valor do nó pai/100)
>
> Existe apenas um tipo de modelagem/transferência que pode ser aplicada

1. > **Linear (% ponto): **

> Se a modelagem linear (% pontos) for aplicada, o valor será calculado como a soma da porcentagem do nó e do valor percentual linear (% pontos) do nó pai.
>
> Se a transferência linear de números for aplicada, o valor percentual desse nó será diminuído neste nó e o mesmo valor será aumentado no nó transferido.

- **Fórmula para modelagem:**

> Valor para um nó para um mês = (Valor definido no nó +/- Valor do ponto % linear) \* Valor do nó pai / 100

- **Fórmula para transferência:**

> Valor de transferência do nó para um mês = (Valor definido no nó - Valor do ponto percentual linear) \* Valor do nó pai / 100
>
> Valor de transferência para o nó por um mês = (Valor definido no nó + Valor do ponto percentual linear) \* Valor do nó pai / 100

1. > **Nó da Unidade de Planejamento**

> O valor do nó percentual é calculado como porcentagem do valor do nó pai com base nos parâmetros da unidade de planejamento
>
> **Fórmula:**
>
> Valor do nó para um mês = (Valor definido no nó \* Valor do nó pai/100)
>
> Existe apenas um tipo de modelagem/transferência que pode ser aplicada

1. > **Linear (% ponto): **

> Se a modelagem linear (% pontos) for aplicada, o valor será calculado como a soma da porcentagem do nó e do valor percentual linear (% pontos) do nó pai.
>
> Se a transferência linear de números for aplicada, o valor percentual desse nó será diminuído neste nó e o mesmo valor será aumentado no nó transferido.

- **Fórmula para modelagem:**

> Valor para um nó para um mês = (Valor definido no nó +/- Valor do ponto % linear) \* Valor do nó pai / 100

- **Fórmula para transferência:**

> Valor de transferência do nó para um mês = (Valor definido no nó - Valor do ponto percentual linear) \* Valor do nó pai / 100
>
> Valor de transferência para o nó por um mês = (Valor definido no nó + Valor do ponto percentual linear) \* Valor do nó pai / 100

## Módulo de Previsão: Previsão de Consumo

1. > **Interpolar**

> QAT interpola encontrando os valores mais próximos em ambos os lados (antes ou depois do espaço em branco), calcula a linha reta entre eles e usa essa fórmula linear para calcular o valor do(s) espaço(s) em branco. Observe que o QAT não interpolará nos meses em que o consumo real for zero. O QAT interpolará apenas se houver pelo menos um ponto de dados antes e um ponto de dados depois dos valores em branco.
>
> Matematicamente:

- Onde x representa meses e y representa o consumo real,

- Onde os valores de dados conhecidos são (x0, y0) e (x1, y1)

- Onde quaisquer valores de dados desconhecidos são (x, y)

- A fórmula para a linha interpolada é

> **Fórmula:**
>
> y = y0+(x-x0)\*(y1-y0)/(x1-x0)

2. > **Taxa de Estoque**

> A taxa de ruptura de estoque é calculada como a porcentagem da taxa de ruptura de estoque em dias e o número de dias em um mês
>
> **Fórmula:**
>
> Taxa de ruptura de estoque = (Taxa de ruptura de estoque (dias)/Nº de dias no mês) \* 100

3. > **Consumo Ajustado**

> O consumo ajustado é calculado com base no consumo real, taxa de relatório, taxa de ruptura de estoque (dias), número de dias no mês usando a fórmula abaixo
>
> **Fórmula:**
>
> Se o Consumo Real estiver vazio,
>
> Consumo Ajustado = “”
>
> Caso contrário,
>
> Consumo Ajustado= (Consumo Real/Taxa de Relatório/(1-(Taxa de Estoque(dias)/Nº de dias no mês)))\*100

4. > **Fator de Conversão para Tela de Entrada de Dados e Ajuste**

> Se o consumo real estiver na unidade de previsão, então
>
> Fator de conversão = 1/Fator de conversão da unidade de planejamento
>
> Se o Consumo Real estiver em Unidades de Planejamento então
>
> Fator de conversão = 1
>
> Se o Consumo Real estiver em Outra Unidade então
>
> Fator de conversão = 1/Conversão para FU (usuário inserido)

5. > **Consumo Ajustado por Unidade de Planejamento**

> O Consumo Ajustado em termos de unidade de planejamento é calculado multiplicando o Consumo Ajustado pelo Fator de Conversão
>
> **Fórmula:**
>
> Consumo Ajustado (Unidade de Planejamento) = Consumo Ajustado \* Fator de Conversão

6. > **Erro de previsão (%)**

<!-- lista final -->

- **WAPE** (erro percentual absoluto ponderado) divide a soma das diferenças absolutas pela soma dos valores reais para uma janela de tempo específica. A janela de tempo é de 6 meses.

> **Fórmula:**
>
> WAPE = ((Abs(consumo real mês 1-consumo previsto mês 1)+ Abs(consumo real mês 2-consumo previsto mês 2)+ Abs(consumo real mês 3-consumo previsto mês 3)+ Abs(consumo real mês 4-consumo previsto mês 4)+ Abs(consumo real mês 5-consumo previsto mês 5)+ Abs(consumo real mês 6-mês de consumo previsto 6)) / (Soma de todo o consumo real nos últimos 6 meses))

- **RMSE (**Erro quadrático médio) é calculado como a raiz quadrada da razão da soma do quadrado da diferença entre a previsão - real e o número de observações.

> **Fórmula:**
>
> RMSE = Raiz quadrada \[ Soma(Quadrado(Previsão – Real)) / Nº de Observações \]

- **MAPE (**Erro percentual absoluto médio) é calculado como a razão de 1 para o número de observações multiplicado pela soma da diferença absoluta entre o real e a previsão pela multiplicação do real absoluto e 100

> **Fórmula:**
>
> MAPE = (1/Nº de observações) \* Somatório(Absoluto(real – previsão) / Absoluto(real)) \* 100

- **MSE** (erro quadrático médio) é calculado como a multiplicação da razão de 1 pelo número de observações e a soma do quadrado da diferença entre o real e o previsto.

> **Fórmula:**
>
> MSE = (1/Nº de observações) \* Somatório(Quadrado(real – previsão))

- **R ao quadrado**

> R2 = 1 – \[soma quadrada da regressão (SSR) / soma total dos quadrados (SST)\]. A soma quadrada dos resíduos da regressão é a soma de seus resíduos ao quadrado, e a soma total dos quadrados é a soma da distância em que os dados estão da média, tudo ao quadrado. Por “soma dos quadrados” entendemos a soma dos desvios quadrados entre os valores **reais** e a média (SST), ou entre os valores **previstos** e a média (SSR). O valor R2 é sempre um número entre 0 e 1. R2 é uma medida do ajuste de uma linha de regressão a uma série de observações históricas com valores mais próximos de 1 indicando uma correspondência mais forte entre os valores reais e previstos (modelo de regressão). Não é uma medida de erro e não deve ser usada por si só para avaliar a adequação de uma previsão, mas em combinação com outras métricas de erro e com o conhecimento do programa pelo usuário.
>
> **Fórmula:**
>
> R2= 1- \[SSR/SST\]

7. **Importar do plano de fornecimento QAT**

<!-- lista final -->

- QAT permite aos usuários importar dados reais de seus planos de abastecimento para uma previsão de consumo.
  - Primeiro, o usuário selecionará um Programa de Previsão e um Intervalo de Datas para o consumo real importado.
    - Nota: Uma alternância será mostrada se nem todas as unidades de planejamento não mapeadas forem importadas. Isso é útil se houver muitas unidades de planejamento e você importar apenas algumas unidades selecionadas. Após mapear as poucas unidades de planejamento selecionadas, clique no botão de alternância “Não importar todas as unidades de planejamento não mapeadas”, que selecionará automaticamente as unidades de planejamento restantes a não serem importadas.

  - Em segundo lugar, um Programa de Plano de Fornecimento e uma Versão do Plano de Fornecimento serão selecionados. Isso é útil se um usuário desejar uma versão específica do plano de fornecimento carregada e não apenas a mais recente.
    - Nota: Um usuário pode selecionar mais de um programa para importar.

  - Terceiro, depois de selecionar um programa de Plano de Fornecimento, as Unidades de Planejamento do Plano de Fornecimento serão mostradas ao lado do menu suspenso Unidade de Planejamento de Previsão.
    - Observação: o menu suspenso Unidade de planejamento de previsão permite que o usuário selecione uma unidade de planejamento de previsão específica ou não importe essa unidade de planejamento do plano de fornecimento específica.

  - Após selecionar próximo, agora deve ser inserido um % do Plano de Fornecimento.
    - Uma dica de ferramenta é mostrada na coluna superior informando “Porcentagem da quantidade de consumo real mensal do programa Plano de Fornecimento que será importada para o Programa de Previsão.

    - Isso permite que uma porcentagem específica seja usada caso não seja necessário 100%.

## Módulo de previsão: relatórios e resultados

### Compare e selecione

1. **Comparar com previsão de consumo** é exibido apenas quando há previsões de árvore e de consumo. Ele exibe os valores como

<!-- lista final -->

- > Maior que H% da maior previsão de consumo ou

-> Menor que L% da previsão de menor consumo

> **Fórmula:**
>
> H% = (Soma(Previsão da árvore selecionada)-Soma(Previsão de Consumo))/Soma(Previsão de Consumo)
>
> L% = (Soma(Previsão da árvore selecionada)-Soma(Previsão de Consumo))/Soma(Previsão de Consumo)

2. **Árvores de seleção múltipla**

> Na tela comparar e selecionar, os usuários podem selecionar várias previsões de árvores como sua previsão final, que agregará as quantidades de previsão mensais. Os usuários não podem selecionar múltiplas previsões de consumo ou uma combinação de árvores e previsões de consumo como previsão final
>
> Nota: Erro de previsão de extrapolação de consumo e Erro de previsão de comparação e seleção corresponderão em ambas as telas, mesmo que o intervalo histórico de dados seja limitado.

### Resumo da previsão

1. > **Estoque ou demanda não atendida**

> O estoque ou a demanda não atendida é calculado como a diferença entre a soma do estoque e as remessas existentes para uma unidade de planejamento e o consumo total previsto
>
> **Fórmula:**
>
> Estoque ou Demanda Não Atendida = (Estoque para uma unidade de planejamento + Remessas Existentes para uma unidade de planejamento) -(Consumo total previsto)

2. > **Estoque desejado**

> O estoque desejado é calculado como a razão entre a multiplicação dos meses de estoque para uma unidade de planejamento e o consumo total previsto pelo número de meses no período de previsão

**Fórmula:**

> Estoque desejado =((Meses de estoque para uma unidade de planejamento) \*(Consumo total previsto) /(Número de meses no período de previsão))

3. > **Excedente/lacuna de compras**

O excedente de aquisição é calculado como a diferença entre o estoque e o estoque desejado

**Fórmula:**

Excedente de Aquisições = Estoque ou Demanda Não Atendida - Estoque desejado

4. > **Compras necessárias**

> As aquisições necessárias são calculadas como a multiplicação do excedente/lacuna de aquisições e do preço unitário.

**Fórmula:**

Aquisições necessárias = excedente de compras \* Preço unitário

5. > **Custo do frete**

> O custo do frete é calculado como a multiplicação da proporção da porcentagem do frete por 100 e a soma das compras necessárias

**Fórmula:**

Custo de frete = Porcentagem de frete /100 \* Total de compras necessárias

6. > **Custo Total**

O custo total é calculado como a soma das aquisições necessárias e o custo do frete

**Fórmula:**

Custo Total = Soma das Aquisições Necessárias + Custo de Frete

## Módulo de Planejamento e Previsão de Fornecimento: Upload de Versões

A seção abaixo detalha as diferentes condições que o QAT procura ao identificar conflitos em um upload de versão (tanto para um programa de plano de fornecimento quanto para um programa de previsão).

O exemplo a seguir será usado ao longo da explicação abaixo: Um usuário está tentando fazer upload da versão local 8 e a versão mais recente disponível no servidor é a versão 10. Depois que quaisquer conflitos forem resolvidos e o usuário confirmar, a versão carregada será a versão 11. O QAT compara as 3 versões diferentes:

> **a. Servidor v8** (esta é a versão do servidor que o usuário baixou antes de fazer edições)
>
> **b. Local v8** (esta é a versão que o usuário pretende fazer upload)
>
> **c. Servidor v10** (esta é a versão mais recente do servidor)

Dependendo do tipo de dados, o QAT compara registros reais ou compara datas modificadas. Os registros reais não podem ser comparados para alguns dados porque os dados são muito vastos e complexos.

<table>
  <thead>
    <tr class="header">
      <th>Aregistros reais são comparados</th>
      <th>Datas modificadas são comparadas</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <ul>
          <li>
            <p>Módulo de planejamento de suprimentos</p>
            <ul>
              <li>
                <p>
                  Consumo real/previsto, estoque, ajuste, remessa
                  registros
                </p>
              </li>
              <li>
                Lista de problemas <p>QAT</p>
              </li>
              <li>
                <p>ERP Vinculação de Remessa*</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Módulo de previsão</p>
            <ul>
              <li>
                <p>PConfigurações da unidade de planejamento</p>
              </li>
              <li>
                <p>Configurações de versão</p>
              </li>
              <li>
                <p>Previsão Selecionada</p>
              </li>
            </ul>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <p>Módulo de previsão</p>
            <ul>
              <li>
                <p>Consumo real, ajustes, extrapolação</p>
              </li>
              <li>
                <p>Tree</p>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> \* Para vinculação do ERP, antes da lógica abaixo, o QAT primeiro verifica se o envio do ERP já está vinculado a outro programa. Se estiver vinculado, o QAT será destacado em vermelho e não permitirá o upload.

Usando a lógica descrita abaixo (testando cada condição em ordem sequencial), o QAT determina se os dados são

- > **Recém-adicionado na versão local (Local v8)** ß Condição 1

- > **Recém-adicionado na versão do servidor (Server v10)** ß Condição 2

- > **Inalterado desde a versão anterior do servidor (Servidor v8)** ß Condição 3a

- > **Atualizado na versão local (Local v8) sem conflitos ß** Condição 3b

- > **Atualizado na versão do servidor (Server v10) sem conflitos** ßCondição 3c

- > **Ou, um conflito entre as versões local e do servidor.** ß Condição 3d

#### Condição 1: dados recém-adicionados na versão local 

Primeiro, o QAT verifica cada ponto de dados na versão local (Local v8) para confirmar se são dados adicionados recentemente. Nesse caso, <u>data é mostrado como **verde** na tela de upload.</u>

**a. Servidor v8 - Registro não existe**

** b. Local v8 - O registro existe**

**c. Servidor v10 - Registro não existe**

Abaixo estão alguns exemplos para esta condição:

1. > **Consumo (planejamento de fornecimento):** Por exemplo, há um registro de consumo real no local v8 para maio de 2023, unidade de planejamento A, unidade de relatório alternativa B, região X. O QAT verifica o servidor v10 e o servidor v8 para ver se existe um registro de consumo real em maio de 2023, unidade de planejamento A, unidade de relatório alternativa B, região X. Caso contrário, a v8 local é a mais recente.

2. > **Inventário (planejamento de fornecimento):** Por exemplo, há um registro de inventário no local v8 para maio de 2023, unidade de planejamento A, unidade de relatório alternativa B, região X, fonte de dados Y. O QAT verifica o servidor v10 e o servidor v8 para ver se existe um registro de inventário em maio de 2023, unidade de planejamento A, unidade de relatório alternativa B, região X, fonte de dados Y. Caso contrário, a v8 local é a mais recente.

<!-- lista final -->

2. > **Ajustes, Remessas, QPL (Planejamento de Fornecimento):** Como os IDs só são atribuídos após o upload do plano de fornecimento, o QAT verifica os IDs de cada registro no local v8 para ver se eles são “0”. Os registros com o ID “0” foram criados recentemente nesta versão local, portanto, para esses registros, o local v8 é o mais recente. QAT não verifica versões do servidor.

3. > **Árvores (Previsão):** Como os IDs só são atribuídos após o upload da previsão, o QAT verifica os IDs de cada árvore no local v8 para ver se eles são “0”. Árvores com o ID “0” foram criadas recentemente nesta versão local, portanto, para estas, a v8 local é a mais recente. QAT não verifica versões do servidor.

4. > **Configurações da unidade de planejamento (previsão):** O QAT verifica se esse ID da unidade de planejamento está presente no Sever v8 e no Server v10. Se o ID da unidade de planejamento não existir em nenhum deles, a versão 8 local será a mais recente.

5. > **Dados de consumo e extrapolação (previsão):** O QAT verifica se os dados desta unidade de planejamento e região estão presentes no Server v10 com base na presença da data modificada. Se os dados da unidade de planejamento e da região não estiverem presentes no Server v10, o local v8 será o mais recente.

6. > **Previsão Selecionada (Previsão):** O QAT verifica se existe uma previsão selecionada para esta unidade de planejamento e região no Server v10. Se nenhuma seleção estiver presente no Server v10, o local v8 será o mais recente.

#### Condição 2: dados recém-adicionados na versão do servidor 

Se a Condição 1 falhar, o QAT verifica a versão mais recente do servidor (Servidor v10) para ver se esses dados foram adicionados recentemente, comparando-os com a versão local (Local v8). QAT não verifica a versão anterior do servidor (servidor v8). Se os dados não estiverem presentes na versão local, isso significa que os dados foram adicionados recentemente na versão mais recente do servidor e não há conflito com a versão local. Esses dados serão adicionados à versão recém-carregada (Servidor v11) e <u>data é mostrado como **azul** na tela de upload</u>.

**um. Servidor v8 - Registro não existe**

** b. Local v8 - O registro não existe**

**c. Servidor v10 - Registro existe**

Abaixo estão alguns exemplos para esta condição:

1. > **Inventário de Consumo, Ajuste, Expedição, QPL (Planejamento de Fornecimento): Por exemplo, existe um registro de consumo real com ID único \#A no servidor v10. QAT verifica se o ID\#A exclusivo também está presente na versão local v8. Se o ID exclusivo não estiver presente na versão local, o servidor v10 é o mais recente. **

2. > **Árvores: Por exemplo, existe uma árvore com ID exclusivo \#B no servidor v10. QAT verifica se o ID\#B exclusivo também está presente na versão local v8. Se o ID exclusivo não estiver presente na versão local, o servidor v10 é o mais recente. **

3. > **Configurações da unidade de planejamento (previsão):** **Por exemplo, há uma unidade de planejamento com ID de unidade de planejamento \#C no servidor v10. O QAT verifica se a unidade de planejamento \#C também está presente na versão local v8. Se o ID da unidade de planejamento não estiver presente na versão local, o servidor v10 será o mais recente. **

<!-- lista final -->

7. > **Dados de consumo e extrapolação (previsão): Depois que o QAT encontra dados para uma ** unidade de planejamento e servidor de região v10, o QAT examina a mesma unidade de planejamento e região no local v8 procura uma data modificada. Se a data de modificação não existir na v8 local, **servidor v10 é a mais recente. **

8. > **Previsão Selecionada (Previsão):** **Depois que o QAT encontra dados para previsões selecionadas para uma unidade de planejamento e região específicas no servidor v10, o QAT procura** a mesma unidade de planejamento e região no local v8 procura uma previsão selecionada. Se a previsão selecionada não existir na v8 local, **servidor v10 é a mais recente. **

#### Condição 3a: o servidor local e o mais recente são iguais 

Se as condições acima falharem, o QAT verifica cada ponto de dados na versão local (Local v8) para ver se eles são iguais à versão mais recente do servidor (v10). Se for o mesmo, os dados <u> serão mostrados sem destaque na tela de upload </u>.

**um. servidor v8 – O registro é X**

** b. v8 local – O registro é X**

**c. Servidor v10 mais recente – O registro é X**

Abaixo estão alguns exemplos para esta condição:

1. > **Consumo, Estoque, Ajuste, Remessas, QPL, configurações de versão, configurações de unidade de planejamento e previsões selecionadas:** O QAT compara cada registro na versão local (v8) com as versões mais recentes do servidor (v10). Por exemplo, para o registro de consumo real do mês 22 de junho, o QAT verifica cada campo (ARU, fonte de dados, quantidade, dias de falta de estoque, etc.) para ver se o local (v8) e a versão mais recente do servidor (v10) são iguais. Se forem iguais, nenhuma alteração foi feita desde o servidor v8 ou foram atualizados para ter o mesmo valor.

2. > **Consumo (Previsão) e Árvores: QAT compara a data da última modificação de cada registro na versão local (v8) com a data da última modificação da versão mais recente do servidor (v10). Se forem iguais, nenhuma alteração foi feita desde o servidor v8.**

#### Condição 3b: Mudanças apenas na versão local 

Se as condições acima falharem, o QAT compara para ver se a versão anterior do servidor (Servidor v8) e a versão mais recente do servidor (servidor v10) são iguais. Nesse caso, o QAT infere que a versão local (local v8) foi alterada e <u>data é mostrado como **verde** na tela de upload.</u>

Abaixo estão alguns exemplos para esta condição:

1. **Consumo, estoque, ajuste, remessas, QPL, configurações de versão, configurações de unidade de planejamento e previsões selecionadas:** Por exemplo, um registro de consumo real para 22 de junho tem “Relatórios de armazém” como fonte de dados na v8 local. Se o campo da fonte de dados das versões anterior (v8) e mais recente (v10) do servidor forem ambos “Relatórios LMIS”, isto indica que os dados foram modificados na versão local, portanto a versão local v8 é a mais recente.

> **a. servidor v8 – a fonte de dados são relatórios LMIS **
>
> **b. v8 local –** **a fonte de dados são relatórios do Warehouse **
>
> **c. Servidor v10 mais recente - a fonte de dados são relatórios LMIS  **

2. **Consumo (Previsão) e Árvores:** Se as datas da última modificação das versões anterior (v8) e mais recente (v10) do servidor forem iguais, isso indica que os dados foram modificados na versão local, portanto a v8 local é a mais recente.

> **a. servidor v8 - a data da última modificação é 15 de setembro de 2023, 12:00:00**
>
> **b. v8 local - a data da última modificação é 20 de setembro de 2023, 15:15:00**
>
> **c. Servidor v10 mais recente – a data da última modificação é 15 de setembro de 2023, 12:00:00**

#### Condição 3c: Mudanças apenas na versão mais recente do servidor 

Se as condições acima falharem, o QAT compara para ver se a versão anterior do servidor (Servidor v8) e a versão local (local v8) são iguais. Nesse caso, o QAT infere que a versão mais recente do servidor (servidor v10) foi alterada e os dados <u> são mostrados como **azul** na tela de upload.</u>

Abaixo estão alguns exemplos para esta condição:

1. **Consumo, Estoque, Ajuste, Remessas, QPL, configurações de versão, configurações de unidade de planejamento e previsões selecionadas: Por exemplo, um registro de consumo real para 22 de junho. Se o valor da fonte de dados em** servidor v8 e local v8 forem iguais, isso indica que os dados foram modificados na versão mais recente do servidor (v10), então **servidor v10 é o mais recente. **

> **a. Servidor v8 - a fonte de dados são relatórios LMIS **
>
> **b. v8 local - a fonte de dados são relatórios LMIS **
>
> **c. Servidor v10 mais recente - a fonte de dados é Warehouse Reports **

2. **Consumo (Previsão) e Árvores:** Se as datas da última modificação da versão anterior do servidor (v8) e da versão local (v8) forem iguais, isso indica que os dados foram modificados na versão mais recente do servidor (v10), então **servidor v10 é o mais recente. **

> **a. servidor v8: a data da última modificação é 15 de setembro de 2023, 12h00 **
>
> **b. v8 local: a data da última modificação é 15 de setembro de 2023, 12h00 **
>
> **c. Servidor v10 mais recente – a data da última modificação é 20 de setembro de 2023, 15:30:00**

#### Condição 3d: alterações na versão local e na versão mais recente do servidor (mesmo parâmetro)

Se as condições acima falharem, isso significa que as 3 versões não correspondem e há um conflito. Nesse caso, <u>data será destacado em **amarelo** na tela de upload.</u>

Abaixo estão alguns exemplos para esta condição:

1. **Consumo, estoque, ajuste, remessas, QPL, configurações de versão, configurações de unidade de planejamento e previsões selecionadas:** Para um registro de consumo real para o mês de 22 de junho**, se**se o valor da fonte de dados não corresponder a nenhuma das versões, isso indica que os dados são modificados nas versões local (v8) e no servidor mais recente (v10), portanto, o QAT destaca a linha em amarelo para indicar um conflito para o usuário resolver.

> uma. servidor v8 - a fonte de dados é Relatórios LMIS
>
> **b. v8 local - a fonte de dados é Relatórios SDP**
>
> **c. Servidor v10 mais recente - a fonte de dados é Warehouse Reports**

2. **Consumo (Previsão) e Árvores**: Se a data da última modificação não corresponder a nenhuma das versões, isso indica que os dados foram modificados nas versões local (v8) e de servidor mais recente (v10), portanto o QAT destaca a linha em amarelo para indicar um conflito para o usuário resolver.

> **a. servidor v8 - a data da última modificação é 15 de setembro de 2023, 12:00:00**
>
> **b. v8 local - a data da última modificação é 16 de setembro de 2023, 13:00:00**
>
> **c. Servidor v10 mais recente – a data da última modificação é 20 de setembro de 2023, 15:30:00**
>
> **a. servidor v8 - a data da última modificação é 28 de setembro de 2023, 12:00:00**
>
> **b. v8 local - a data da última modificação é 16 de setembro de 2023, 13:00:00**
>
> **c. Servidor v10 mais recente – árvore faltando **

#### Condição 4: alterações na versão local e na versão mais recente do servidor (parâmetros diferentes) 

Após verificar todas as condições, o QAT verifica se há registros que possuam uma combinação de 3b e 3c, mas para campos diferentes. Nesse caso, <u>data será destacado **amarelo** na tela de upload</u>.

1. **Consumo, Estoque, Ajuste, Expedições, QPL, configurações de versão, configurações de unidade de planejamento e previsões selecionadas:** Para um registro de consumo real do mês de 22 de junho**,** a fonte de dados é atualizada na versão local (Condição 3b) e a quantidade é alterada na versão do servidor (condição 3c). Neste caso, o QAT não sabe qual versão usar, então o QAT destaca a linha em amarelo para indicar um conflito para o usuário resolver.

| **Versão** | **Fonte de dados** (Condição 3b) | **Quantidade** (Condição 3c) |
| --------------------- | ------------------------------ | --------------------------- |
| servidor v8 | Relatórios LMIS | 50 |
| **v8 local** | **Relatórios de armazém** | 50 |
| **servidor mais recente v10** | Relatórios LMIS | 55 |

2. **Consumo (Previsão) e Árvores:** Isso não se aplica, pois apenas a data modificada é comparada para esses dois tipos de dados

#