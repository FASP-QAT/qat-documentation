---
id: forecasting-module-reports-and-outputs
title: "Forecasting Module: Reports and Outputs"
sidebar_label: "Forecasting Module: Reports and Outputs"
sidebar_position: 9
---
# Módulo de Previsão: Relatórios e Resultados

## Compare e selecione

**<u>Purpose</u>:** Permite que os usuários comparem todas as previsões disponíveis (dos métodos de árvore e de consumo) e selecionem sua previsão final. Nesta tela, os usuários selecionam suas previsões, uma unidade de planejamento e região por vez. Para selecionar previsões em diversas unidades de planejamento e regiões, use a tela Resumo da previsão. Os usuários devem utilizar todas as tabelas e gráficos desta tela para comparar os dados e escolher uma previsão final.

**<u>Usando esta tela</u>:**

1. **Verifique se todas as previsões esperadas aparecem na tabela Comparar e Selecionar. Para adicionar previsões, navegue até a tela** [Gerenciar árvore](#tree-forecasts) **para criar uma previsão de árvore ou a tela [Extrapolação](#extrapolation)** **para criar uma previsão baseada em consumo.** Os usuários também podem precisar verificar novamente a tela [Atualizar unidades de planejamento](#planning-units-1) para garantir que os métodos Previsão de consumo ou Previsões de árvore foram marcados/desmarcados para cada unidade de planejamento.
    1. Observação: as linhas ficam destacadas em cinza e não são editáveis ​​quando não há nada para exibir ou selecionar.

2. **Revise as previsões disponíveis para cada unidade de planejamento usando as seguintes informações na tela:**
    1. **Erro de Previsão (%):** este erro é calculado usando o cálculo do Erro Percentual Absoluto Ponderado (WAPE) da mesma forma que é calculado na tela Extrapolação de Consumo. Se o erro de previsão estiver destacado em texto verde, esta previsão terá o erro de previsão mais baixo dentre as previsões disponíveis.

> _Nota: o erro de previsão nem sempre é confiável para previsões de árvores – a menos que uma previsão de árvore tenha uma sobreposição significativa com os dados reais anteriores, pode não haver dados de previsões anteriores disponíveis para comparação._

2. **Comparar com a previsão de consumo:** o QAT compara as previsões de consumo e as previsões de árvore disponíveis. Para qualquer previsão de árvore, o QAT sinalizará a porcentagem acima da previsão de consumo mais alta ou abaixo da previsão de consumo mais baixa. A comparação será destacada em texto vermelho se estiver fora das porcentagens limite definidas pelo usuário na tela [Configurações de versão](#version-settings). Assumindo dados de consumo reais confiáveis, esta comparação ajuda os usuários a determinar se suas previsões de árvore são comparáveis ​​ao consumo histórico. Esta estatística não estará disponível para previsões de consumo.

3. **Gráfico: compare visualmente as diferentes previsões.** A previsão selecionada na tabela superior aparecerá **em negrito** no gráfico.

4. **Tabela de dados detalhada: compare os dados entre as previsões lado a lado clicando no botão “Mostrar dados” abaixo do gráfico. Todos os dados em negrito**/**_negrito itálico roxo_** **se enquadram no período de previsão.**

5. **Visualização das previsões em agregações de ano civil ou ano fiscal: por padrão, o QAT mostra a previsão em valores mensais, mas os usuários têm a opção de visualizar uma agregação desses valores por ano civil ou por ano fiscal (e definir o início/fim do ano fiscal que funciona em seu contexto).**
    1. **Ao optar pela visualização por ano civil/ano fiscal, uma nova tabela aparece entre o gráfico e a tabela de dados detalhados. Esta nova tabela mostra os valores agregados de previsão por ano civil ou fiscal e indica o número de meses usados no cálculo para esse ano.**

<!-- lista final -->

3. **Selecione a previsão final na tabela Comparar e Selecionar. Se houver um símbolo ** ![Warning with solid fill](/img/media/image319.png) ** próximo à Unidade de Planejamento, não há previsão selecionada. Se houver um símbolo** ![Checkbox Checked with solid fill](/img/media/image320.png) **ao lado da Unidade de Planejamento, há uma previsão selecionada.**

4. **Repita as etapas 1 a 3 para cada unidade de planejamento e região até que não haja mais** ![Warning with solid fill](/img/media/image319.png) **símbolos restantes. Depois de concluído, prossiga para ** [Previsões mensais](#previsão mensal) **para verificar todas as unidades de planejamento juntas.**

**_Nota: Os usuários podem selecionar múltiplas previsões de árvores como sua previsão final, que agregará as quantidades de previsão mensais; no entanto, os usuários não podem selecionar várias previsões de consumo ou uma combinação de previsões de consumo e de árvore._**

**<u>Dicas sobre como usar o gráfico e a tabela de dados detalhados:</u>**

- Um usuário pode visualizar o gráfico em Unidade de Planejamento, Unidade de Previsão, [Unidade de Equivalência](#unidades de equivalência) e por um período de tempo específico. Se um usuário escolher “Mostrar apenas o período de previsão”, o gráfico exibirá apenas o período de tempo que o usuário escolheu como período de previsão na tela Configurações de versão.

- Por padrão, o QAT exibirá todas as previsões disponíveis por Unidade de Planejamento e quaisquer valores reais inseridos ou importados do módulo Planejamento de Fornecimento do QAT no gráfico; no entanto, um usuário pode desmarcar a opção “Exibir?” caixa de seleção para quaisquer previsões na tabela superior, caso não desejem visualizá-las no gráfico.

- Tal como o gráfico apresentado no ecrã Extrapolação de Consumo, o utilizador pode optar por visualizar a previsão ‘trás’. Observe que se você escolher esta opção, a linha “Reais (ajustados)” retornará.

## Previsão Mensal

**<u>Purpose</u>**: permite que os usuários visualizem as previsões finais (_selecionadas_) de um único programa e exibem a previsão por unidade de planejamento e mês. Este resultado agrega todas as previsões regionais em uma previsão total. Para visualizar previsões regionais desagregadas, os usuários podem exportar o resultado como CSV. Este relatório é ótimo para verificar todas as unidades de planejamento em um só lugar, pois possui diversas opções de visualização de relatório:

- Unidade de Planejamento ou Unidade de Previsão

- Agregado por Unidade de Equivalência

- Gráfico mensal ou anual e dados tabulares

![P3495#yIS1](/img/media/image321.png)

Figura 188: Previsão Mensal Exibida com Eixo Y nas UEs

![P3497#yIS1](/img/media/image322.png)

Figura 189: Dados tabulares de previsão mensal

**<u>Usando esta tela</u>**:

- _Apenas as previsões selecionadas serão mostradas nesta saída. Para selecionar uma previsão para um produto, vá para a tela ‘_[Compare and Select Forecast](#compare-and-select)’. Para ver as previsões totais entre produtos, vá para a tela ‘[Resumo da previsão](#forecast-summary)’.

- *O**Período do Relatório** será usado para determinar o período de tempo que será exibido na saída gráfica/tabular e deve estar dentro do período de previsão.

- Use os parâmetros para visualizar os dados gráficos/tabulares por unidades de previsão ou unidades de planejamento, bem como mostrar o eixo y em unidades de equivalência.

- **Unidades de equivalência** (EUs) permitem que os usuários agreguem dados em unidades de planejamento ou unidades de previsão que são diferentes, mas têm a mesma unidade de equivalência. Consulte [Unidades de equivalência](#unidades de equivalência) para obter mais informações.

- O filtro ‘Eixo X Agregado por Ano’ permite visualizar os dados agregados por ano em vez de por mês.

- Para a visualização gráfica, existem 3 maneiras de ocultar quais unidades de planejamento estão sendo exibidas:
  1. Use o filtro na parte superior para selecionar a(s) unidade(s) de planejamento.

  2. Clique em uma unidade de planejamento na legenda do gráfico.

  3. Desmarque a caixa de seleção ‘Exibir’ na extremidade esquerda da visualização tabular.

## Resumo da previsão

**<u>Purpose</u>**: permite que os usuários vejam um resumo de suas previsões finais (selecionadas) para todo o período de previsão. Para visualizar as previsões por mês, use a tela ‘[Previsão mensal](#previsão mensal)’.

- **Visualização regional:** Use esta visualização para ver sua previsão nas unidades de planejamento <u></u> e <u>regiões</u>. Atualize diretamente o método de previsão para cada combinação de unidade de planejamento regional e adicione notas na tabela, se desejar. As seleções de previsão também podem ser atualizadas na tela ‘[Compare and Select Forecast](#compare-and-select)’.

- **Visualização Nacional:** Use esta visualização para ver sua previsão em <u>nível nacional</u> e avaliar seu <u>superávit ou lacunas de aquisição</u>.

### Visão Regional

1. **Utilize os menus suspensos na parte superior da tela para selecionar o Programa e a Versão**

2. **Certifique-se do botão de opção “Visualização regional” em Exibir.**

3. **Veja um resumo de todas as unidades de planejamento, sua quantidade prevista selecionada e as notas, por região.**

4. **(se uma versão local for selecionada), o usuário pode atualizar a previsão selecionada clicando duas vezes em qualquer uma das células na coluna “Previsão Selecionada”, bem como em quaisquer notas na coluna “Notas”.**

![P3518#yIS1](/img/media/image323.png)

Figura 190 Resumo da Previsão - Visão Regional

### Vista Nacional

![P3521#yIS1](/img/media/image324.png)

Figura 191 Resumo da Previsão - Visão Nacional

1. **Utilize os menus suspensos na parte superior da tela para selecionar o Programa e a Versão**

2. **Certifique-se do botão de opção “Visualização Nacional” em Tela.**

3. **Veja a análise de lacuna de superávit resultante. _Nota: Este não é um plano de fornecimento completo, mas uma análise de excedentes/lacunas de compras de alto nível. Recomendamos importar sua previsão para o módulo de planejamento de fornecimento para planejamento granular de fornecimento._**

4. **Clique na caixa de seleção “ocultar cálculos” para ver uma versão simplificada da tabela.**

5. Para que os dados sejam exibidos aqui corretamente, insira os seguintes dados:
    1. Em [Atualizar unidade de planejamento](#planning-units-1):
        1. **Estoque** – no início do seu período de previsão

        2. **Remessas existentes** – durante o período de previsão

        3. **Meses de estoque desejados** – no final do período de previsão

        4. **Tipo de preço** e **Preços unitários**

    2. Em [Atualizar configurações de versão](#version-settings):
        1. **% do frete** - o custo do frete é calculado como uma porcentagem do custo do produto

**Fórmulas usadas para calcular o excedente/lacuna de aquisições**

- Estoque do projeto no final da previsão = (estoque inicial) + (remessas existentes) - (quantidade prevista)

- Estoque desejado no final da previsão = (Quantidade prevista \* Meses de estoque desejados) / (Número de meses no período de previsão)

- Excedente/lacuna de aquisições = (estoque projetado no final da previsão) - (estoque desejado no final da previsão)

Por exemplo, uma previsão de janeiro de 2021 a dezembro de 2023 (previsão de 36 meses)

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Tquantidade total prevista</strong>
      </th>
      <th>
        <strong> Estoque <br /> (final de dezembro de 2020) </strong>
      </th>
      <th>
        <strong>ERemessas existentes (janeiro de 2021 - dezembro de 2023)</strong>
      </th>
      <th>
        <strong> Estoque <br /> (final de dezembro de 2023) </strong>
      </th>
      <th>
        <strong> Meses de estoque desejados <br /> (final de dezembro de 2023) </strong>
      </th>
      <th>
        <strong> Estoque desejado <br /> (final de dezembro de 2023) </strong>
      </th>
      <th>
        <strong>Excedente/lacuna de aquisição</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>360.000</td>
      <td>5.000</td>
      <td>20.000</td>
      <td>
        <p>5.000 + 20.000</p>
        <p> - 360.000</p>
        <p>= -335.000</p>
      </td>
      <td>5</td>
      <td>
        <p>(360.000 * 5) /36</p>
        <p> = 50.000</p>
      </td>
      <td>
        <p>-335.000 -50.000</p>
        <p>= -385.000</p>
      </td>
    </tr>
  </tbody>
</table>

**Fórmulas utilizadas para calcular os Custos de Aquisição**

_Nota: o custo só é calculado se houver lacuna na aquisição e não se houver excedente_

- Custo do Produto = Lacuna de Aquisição \* Custo Unitário

- Custo do frete = Custo do produto \* Porcentagem do frete

- Custo Total = Custo do Produto + Custo do Frete

Para o exemplo acima, assumindo um custo unitário de 0,10 USD e uma % de frete de 7%:

- Custo do produto = -385.000 \* 0,10 = US$ 38.500

- Custo do frete = US$ 38.500 \* 7% = US$ 2.695

- Custo total = $ 38.500 + $ 2.695 = $ 41.195