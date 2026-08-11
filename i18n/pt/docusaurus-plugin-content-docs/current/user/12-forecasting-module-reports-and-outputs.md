---
id: forecasting-module-reports-and-outputs
title: "9. Forecasting Module: Reports and Outputs"
sidebar_label: "9. Forecast Outputs"
sidebar_position: 12
---
# Seção 9. Módulo de Previsão: Relatórios e Resultados

## A. Compare e selecione

**Objetivo:** permitir que os usuários comparem todas as previsões disponíveis (da árvore e dos métodos de consumo) e selecionem sua previsão final. Nesta tela, os usuários selecionam suas previsões, uma unidade de planejamento e região por vez. Para selecionar previsões em diversas unidades de planejamento e regiões, use a tela Resumo da previsão. Os usuários devem utilizar todas as tabelas e gráficos desta tela para comparar os dados e escolher uma previsão final.

**<u>Usando esta tela:</u>**

1. Verifique se todas as previsões esperadas aparecem na tabela Comparar e Selecionar. Para adicionar previsões, navegue até a tela [Gerenciar árvore](11-forecasting-module-forecasting.md#b-tree-forecasts) para criar uma previsão de árvore ou a tela [Extrapolação](11-forecasting-module-forecasting.md#a3-extrapolation) para criar uma previsão baseada em consumo. Os usuários também podem precisar verificar novamente a tela [Atualizar unidades de planejamento](10-forecasting-module-program-data.md#d-planning-units) para garantir que os métodos de previsão de consumo ou previsões de árvore foram marcados/desmarcados para cada unidade de planejamento.

   um. Nota: As linhas ficam destacadas em cinza e não podem ser editadas quando não há nada para exibir ou selecionar.

2. Revise as previsões disponíveis para cada unidade de planejamento usando as seguintes informações na tela:

   uma. **Erro de Previsão (%):** este erro é calculado usando o cálculo do Erro Percentual Absoluto Ponderado (WAPE) da mesma maneira que é calculado na tela Extrapolação de Consumo. Se o erro de previsão estiver destacado em <span style={{ color: 'green' }}>texto verde</span>, esta previsão terá o menor erro de previsão dentre as previsões disponíveis.

      *Observação: o erro de previsão nem sempre é confiável para previsões de árvores – a menos que uma previsão de árvore tenha uma sobreposição significativa com os dados reais anteriores, pode não haver dados de previsões anteriores disponíveis para comparação.*

   b. **Comparar com a previsão de consumo:** O QAT compara as previsões de consumo e as previsões de árvore disponíveis. Para qualquer previsão de árvore. O QAT sinalizará o percentual acima da maior ou abaixo da menor Previsão de Consumo. A comparação será destacada em <span style={{ color: 'red' }}>texto vermelho</span> se estiver fora das porcentagens limite definidas pelo usuário na tela [Configurações de versão](10-forecasting-module-program-data.md#c-version-settings). Assumindo dados de consumo reais confiáveis, esta comparação ajuda os usuários a determinar se suas previsões de árvore são comparáveis ​​ao consumo histórico. Esta estatística não estará disponível para previsões de consumo.

   c. **Gráfico:** compare visualmente as diferentes previsões. A previsão selecionada na tabela superior aparecerá **em negrito** no gráfico.

   d. **Tabela de dados detalhada:** Compare os dados entre as previsões lado a lado clicando no botão "Mostrar dados" abaixo do gráfico. Quaisquer dados em **negrito**/<span style={{ color: 'purple' }}><strong><em>negrito e itálico roxo</em></strong></span> estão dentro do período de previsão.

   e. **Visualização das previsões em agregações de ano civil ou ano fiscal:** por padrão, o QAT mostra a previsão em valores mensais, mas os usuários têm a opção de visualizar uma agregação desses valores por ano civil ou por ano fiscal (e definir o início/fim do ano fiscal que funciona em seu contexto).

      eu. Ao optar pela visualização por ano civil/ano fiscal, uma nova tabela aparece entre o gráfico e a tabela de dados detalhados. Esta nova tabela mostra os valores agregados de previsão por ano civil ou fiscal e indica o número de meses utilizados no cálculo para esse ano.

3. Selecione a previsão final na tabela Comparar e Selecionar. Se houver um símbolo <img src={require('@site/static/img/media/image319.png').default} alt="warning" style={{ width: '18px', verticalAlign: 'middle' }} /> próximo à Unidade de Planejamento, não há previsão selecionada. Se houver um símbolo <img src={require('@site/static/img/media/image320.png').default} alt="check" style={{ width: '15px', verticalAlign: 'middle' }} /> próximo à Unidade de Planejamento, há uma previsão selecionada.

4. Repita as etapas 1 a 3 para cada unidade de planejamento e região até que não restem mais símbolos <img src={require('@site/static/img/media/image319.png').default} alt="warning" style={{ width: '18px', verticalAlign: 'middle' }} />. Depois de concluído, prossiga para as [Previsões mensais](#9b-previsão mensal) para verificar todas as unidades de planejamento juntas.

*Observação: os usuários podem selecionar várias previsões de árvores como previsão final, o que agregará as quantidades de previsão mensais; no entanto, os usuários não podem selecionar múltiplas previsões de consumo ou uma combinação de previsões de consumo e de árvore.*

**<u>Dicas sobre como usar o gráfico e a tabela de dados detalhados:</u>**

* Um usuário pode visualizar o gráfico em Unidade de Planejamento, Unidade de Previsão, [Unidade de Equivalência](10-forecasting-module-program-data.md#e-equivalency-units) e por um período de tempo específico. Se um usuário escolher "Mostrar apenas o período de previsão", o gráfico exibirá apenas o período que o usuário escolheu como período de previsão na tela Configurações de versão.

* Por padrão, o QAT exibirá todas as previsões disponíveis por Unidade de Planejamento e quaisquer valores reais inseridos ou importados do módulo Planejamento de Fornecimento do QAT no gráfico; entretanto, um usuário pode desmarcar a opção "Exibir?" caixa de seleção para quaisquer previsões na tabela superior, caso não desejem visualizá-las no gráfico.

* Assim como o gráfico da tela de Extrapolação de Consumo, o usuário pode optar por exibir a previsão ‘de trás para frente’. Observe que se você escolher esta opção, a linha “Reais (ajustados)” retornará.

## B. Previsão Mensal

**Objetivo:** permitir que os usuários visualizem as previsões finais (selecionadas) de um único programa e exibam a previsão por unidade de planejamento e mês. Este resultado agrega todas as previsões regionais em uma previsão total. Para visualizar previsões regionais desagregadas, os usuários podem exportar o resultado como CSV. Este relatório é ótimo para verificar todas as unidades de planejamento em um só lugar, pois possui diversas opções de visualização de relatório:

* Unidade de Planejamento ou Unidade de Previsão
* Agregado por Unidade de Equivalência
* Gráfico mensal ou anual e dados tabulares

<img src={require('@site/static/img/media/image321.png').default} alt="Monthly forecast Displayed with Y-axis in EUs" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 188: Monthly forecast Displayed with Y-axis in EUs</p>

<img src={require('@site/static/img/media/image322.png').default} alt="Monthly Forecast Tabular Data" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 189: Monthly Forecast Tabular Data</p>

**<u>Usando esta tela:</u>**

* Apenas as previsões selecionadas serão mostradas nesta saída. Para selecionar uma previsão para um produto, vá para a tela [Comparar e selecionar previsão](#9a-compare-and-select). Para ver as previsões totais entre produtos, vá para a tela [Resumo da previsão](#9c-forecast-summary).

* O **Período do Relatório** será usado para determinar o período de tempo que será exibido na saída gráfica/tabular e deve estar dentro do período de previsão.

* Use os parâmetros para visualizar os dados gráficos/tabulares por unidades de previsão ou unidades de planejamento, bem como mostrar o eixo y em unidades de equivalência.

* **Unidades de equivalência** (EUs) permitem que os usuários agreguem dados em unidades de planejamento ou unidades de previsão que são diferentes, mas têm a mesma unidade de equivalência. Consulte [Unidades de Equivalência](10-forecasting-module-program-data.md#e-equivalency-units) para obter mais informações.

* O filtro 'Eixo X Agregado por Ano' permite visualizar os dados agregados por ano em vez de por mês.

* Para a visualização gráfica, existem 3 maneiras de ocultar quais unidades de planejamento estão sendo exibidas:
  1. Use o filtro na parte superior para selecionar a(s) unidade(s) de planejamento.
  2. Clique em uma unidade de planejamento na legenda do gráfico.
  3. Desmarque a caixa de seleção ‘Exibir’ na extremidade esquerda da visualização tabular.

## C. Resumo da previsão

**Objetivo:** permitir que os usuários vejam um resumo de suas previsões finais (selecionadas) para todo o período de previsão. Para visualizar as previsões por mês, use a tela 'Previsão Mensal'.

* **Visualização regional:** use esta visualização para ver sua previsão em unidades de planejamento e regiões. Atualize diretamente o método de previsão para cada combinação de unidade de planejamento regional e adicione notas na tabela, se desejar. As seleções de previsão também podem ser atualizadas na tela [Comparar e selecionar previsão](#9a-compare-and-select).

* **Visão Nacional:** Use esta visualização para ver sua previsão em nível nacional e avaliar seu [superávit ou lacunas de compras](#c2-national-view).

### C1. Visão Regional

1. Utilize os menus suspensos na parte superior da tela para selecionar o Programa e a Versão

2. Certifique-se do botão de opção "Visualização regional" em Exibir.

3. Visualize um resumo de todas as unidades de planejamento, sua quantidade prevista selecionada e as notas, por região.

4. (se uma versão local for selecionada), o usuário pode atualizar a previsão selecionada clicando duas vezes em qualquer uma das células na coluna "Previsão Selecionada", bem como em quaisquer notas na coluna "Notas".

<img src={require('@site/static/img/media/image323.png').default} alt="Forecast Summary - Regional View" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 190 Forecast Summary - Regional View</p>

### C2. Visão Nacional

<img src={require('@site/static/img/media/image324.png').default} alt="Forecast Summary - National View" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 191 forecast Summary - National View</p>

1. Utilize os menus suspensos na parte superior da tela para selecionar o Programa e a Versão

2. Certifique-se do botão de opção "National View" em Display.

3. Visualize a análise de lacuna de superávit resultante. *Observação: Este não é um plano de fornecimento completo, mas uma análise de excedentes/lacunas de compras de alto nível. Recomendamos importar sua previsão para o módulo de planejamento de fornecimento para um planejamento granular de fornecimento.*

4. Clique na caixa de seleção “ocultar cálculos” para ver uma versão simplificada da tabela.

5. Para que os dados sejam exibidos aqui corretamente, insira os seguintes dados:

   uma. Em [Atualizar unidade de planejamento](10-forecasting-module-program-data.md#d-planning-units):

      eu. **Estoque** – no início do seu período de previsão

      ii. **Remessas existentes** – durante o período de previsão

      iii. **Meses de estoque desejados** – no final do período de previsão

      iv. **Tipo de preço** e **Preços unitários**

   b. Em [Atualizar configurações de versão](10-forecasting-module-program-data.md#c-version-settings):

      eu. **% do frete** – o custo do frete é calculado como uma porcentagem do custo do produto

**Fórmulas usadas para calcular o excedente/lacuna de aquisições**

* Estoque do projeto no final da previsão = (estoque inicial) + (remessas existentes) - (quantidade prevista)
* Estoque desejado no final da previsão = (Quantidade prevista * Meses de estoque desejados) / (Número de meses no período de previsão)
* Excedente/lacuna de aquisições = (estoque projetado no final da previsão) - (estoque desejado no final da previsão)

Por exemplo, uma previsão de janeiro de 2021 a dezembro de 2023 (previsão de 36 meses)

| Quantidade total prevista | Estoque (final de dezembro de 2020) | Remessas existentes (janeiro de 2021 - dezembro de 2023) | Estoque (final de dezembro de 2023) | Meses de estoque desejados (final de dezembro de 2023) | Estoque desejado (final de dezembro de 2023) | Excedente/lacuna de compras |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 360.000 | 5.000 | 20.000 | 5.000 + 20.000<br />- 360.000<br />= -335.000 | 5 | (360.000 * 5) /<br />36<br />= 50.000 | -335.000 - 50.000<br />= -385.000 |

**Fórmulas utilizadas para calcular os Custos de Aquisição**

*Observação: o custo só é calculado se houver lacuna na aquisição, e não se houver excedente*

* Custo do Produto = Lacuna de Aquisição * Custo Unitário
*Custo do frete = Custo do produto *Porcentagem do frete
*Custo Total = Custo do Produto + Custo do Frete

Para o exemplo acima, assumindo um custo unitário de 0,10 USD e uma % de frete de 7%:

* Custo do produto = -385.000 * 0,10 = US$ 38.500
* Custo do frete = US$ 38.500 * 7% = US$ 2.695
*Custo total = US$ 38.500 + US$ 2.695 = US$ 41.195