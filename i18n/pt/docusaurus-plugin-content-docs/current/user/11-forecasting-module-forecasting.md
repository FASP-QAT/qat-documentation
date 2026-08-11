---
id: forecasting-module-forecasting
title: "8. Forecasting Module: Forecasting"
sidebar_label: "8. Forecasting"
sidebar_position: 11
---
# Seção 8. Módulo de Previsão: Previsão

## A. Previsões de consumo

As previsões baseadas no consumo, que se baseiam em dados históricos de consumo, são mais úteis em programas maduros e estáveis, que dispõem de um fornecimento completo de unidades de planeamento e de dados fiáveis. Este método pode ser o preditor mais confiável do consumo futuro se o uso futuro for muito semelhante ao passado. Assim, um usuário deve ser capaz de extrapolar dados históricos (idealmente, mais de 24 meses de dados de consumo real mensal estão disponíveis) e os dados devem ser uma série de dados ao longo do tempo (ou seja, consumo real **mensal ajustado**).

Existem quatro componentes básicos para uma previsão de consumo:

<div style={{ textAlign: 'center', margin: '20px 0', fontFamily: 'serif', fontSize: '1.2em', fontStyle: 'italic' }}>
  Forecast ≅ Base + Trend + Season + Random
</div>

Diferentes modelos de extrapolação utilizarão diferentes métodos estatísticos para estimar estes diferentes componentes e produzir uma previsão. No QAT, os usuários seguirão três etapas para produzir uma previsão baseada no consumo:

1. **[Importação/entrada](#a1-importinputting-actuals)** dados de consumo real. Isso pode ser feito importando dados do módulo QAT Supply Planning ou inserindo dados manualmente.
2. **[Ajustar](#a2-ajustes)** dados de consumo real adicionando taxa de relatório e rupturas de estoque e/ou interpolando dados ausentes.
3. **[Extrapolar](#a3-extrapolation)** dados de consumo real para produzir uma previsão. QAT tem cinco métodos de extrapolação diferentes para escolher: médias móveis, semi-médias, regressão linear, suavização exponencial tripla (TES, Holt-Winters) e média móvel integrada auto-regressiva (ARIMA).

###A1. Importar/Inserir dados reais

Existem duas maneiras pelas quais um usuário pode adicionar dados de consumo reais ao seu programa:
1. Importar dados de consumo real de um programa existente no módulo QAT Supply Planning, ou
2. Inserir dados manualmente na tela “Inserção de dados e ajustes” no módulo QAT Forecasting

**Etapas para importar dados do módulo QAT Supply Planning:**
1. Navegue até a tela "Previsão Baseada em Consumo" -&gt; "Importar do Plano de Fornecimento QAT"
2. Escolha o Programa de Previsão, os dados da Faixa de Consumo Real a serem importados, o programa Plano de Fornecimento e depois a versão do Plano de Fornecimento. Observação: apenas os programas de previsão que foram ***baixados*** no computador local do usuário estarão disponíveis no menu suspenso de “Programa de previsão”. Consulte [Baixar/Excluir programa](06-managing-programs-and-versions.md#download-or-delete-program) para saber como baixar um programa para o computador local.
3. Os usuários mapearão então a Unidade de Planejamento do Plano de Fornecimento para a Unidade de Planejamento de Previsão. Nota: *somente as unidades de planejamento que foram adicionadas ao Programa de Previsão na tela "Atualizar Unidades de Planejamento" e para as quais marcamos a caixa de seleção para previsão de consumo estarão disponíveis no menu suspenso para "Unidade de Planejamento de Previsão".* Consulte Módulo de Previsão [Unidades de Planejamento](10-forecasting-module-program-data.md#d-planning-units) para saber como adicionar unidades de planejamento a um programa de previsão.
4. Escolha "Não importar" no menu suspenso para quaisquer PUs que não correspondam automaticamente. Caso você tenha muitas PUs e queira selecionar "Não importar" para todas as unidades não mapeadas você pode marcar a caixa 'Não importar todas as unidades de planejamento não mapeadas'

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image239.png').default} alt="Figure 157: Step 1 for Importing Actual Consumption Data from the Supply Planning Module" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 157: Step 1 for Importing Actual Consumption Data from the Supply Planning Module</p>
     </div>

5. Os usuários escolhem qual região deve ser importada para o programa de previsão e também fornecem informações sobre a porcentagem do consumo real que deve ser importada para o programa de previsão

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image240.png').default} alt="Figure 158: Step 2 for Importing Actual Consumption Data from the Supply Planning Module" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 158: Step 2 for Importing Actual Consumption Data from the Supply Planning Module</p>
     </div>

6. A última etapa permitirá que os usuários verifiquem novamente os dados de consumo real do plano de abastecimento para garantir que estão importando a unidade de medida e os meses de dados corretos. Se os dados já existirem no programa de previsão, eles serão <span style={{ backgroundColor: '#FFFF00' }}>destacados em amarelo</span>. Se um usuário importar dados destacados em amarelo, essa nova importação substituirá os dados que já existem no programa de previsão. Os usuários podem desmarcar manualmente os meses de dados que não serão importados, se desejarem.

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image241.png').default} alt="Figure 159: Step 3 for Importing Actual Consumption Data from the Supply Planning Module" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 159: Step 3 for Importing Actual Consumption Data from the Supply Planning Module</p>
     </div>

7. Clique em “Importar”.

**Etapas para inserir dados de consumo real manualmente**
1. Navegue até a tela "Previsão Baseada em Consumo" -&gt; "Inserção de Dados e Ajustes".
2. Selecione o programa de previsão e o período de revisão desejado. Por padrão, o QAT pré-seleciona um intervalo de datas de 36 meses antes do início do período de previsão. Uma tabela não editável e todos os produtos relacionados a este programa de previsão são exibidos, juntamente com seus dados de consumo ajustados, caso você tenha inserido esses dados anteriormente; caso contrário, você verá <span style={{ backgroundColor: '#FFFF00' }}>células amarelas</span> indicando que nenhum dado de consumo foi inserido. Por padrão, os produtos e o consumo são mostrados em unidades de planejamento. O usuário também pode expandir cada linha da tabela para exibir o consumo por região, caso esteja gerenciando um programa multirregional.

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image242.png').default} alt="Figure 160: Top Table in Data Entry & Adjustments Screen" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 160: Top Table in Data Entry & Adjustments Screen</p>
     </div>

3. Na tabela superior, clique em uma unidade de planejamento para exibir a tabela de dados detalhada abaixo dessa unidade de planejamento. A tabela de dados detalhada terá uma seção para cada região do seu programa.
4. A tabela de dados detalhada permite aos usuários adicionar, editar, ajustar ou excluir registros históricos de consumo.

   um. Se desejar inserir os dados manualmente, insira o consumo histórico de cada região e mês na linha ‘Consumo Real’.

   b. Se você importou dados do QAT, verá o consumo histórico importado na linha ‘Consumo Real’.

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image243.png').default} alt="Figure 161: Manual Data Entry Table for Actual Consumption" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 161: Manual Data Entry Table for Actual Consumption</p>
        </div>

   c. Por padrão, presume-se que os dados sejam inseridos na Unidade de Planejamento. No entanto, o usuário pode especificar a unidade apropriada para os dados detalhados clicando no link “alterar” sob o nome da Unidade de Planejamento e no pop-up subsequente, escolhendo inserir dados usando a unidade de planejamento, as quantidades da unidade de previsão (aplicando um fator de conversão gerenciado pelo domínio) ou outra unidade inserida pelo usuário (e fator de conversão).

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image244.png').default} alt="Figure 162: Button for Changing How Data is Manually Entered for Actual Consumption" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 162: Button for Changing How Data is Manually Entered for Actual Consumption</p>
        </div>

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image245.png').default} alt="Figure 163: Pop-up for Choosing How Data is Entered" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 163: Pop-up for Choosing How Data is Entered</p>
        </div>

5. Assim que o usuário inserir os dados na linha “Consumo Real” da tabela de dados inferior, clique em “Enviar” para salvar os lançamentos e visualizá-los no gráfico.

   um. Os usuários também podem copiar e colar dados de um Excel ou outros formatos tabulares na linha “Consumo real”.

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image246.png').default} alt="Figure 164: Graphical Display of Manually Entered Actual Consumption Data" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 164: Graphical Display of Manually Entered Actual Consumption Data</p>
        </div>

###A2. Ajustes

**Objetivo:** Permitir que os usuários preparem dados históricos de consumo antes de passar para a tela 'Extrapolação'. O consumo real histórico pode ser quantidades vendidas, quantidades distribuídas ao usuário ou quantidades emitidas por instalações de armazenamento. Nesta tela, os usuários podem ajustar os dados históricos de consumo que foram inseridos manualmente nesta tela ou que foram importados de um programa de plano de fornecimento QAT (se desejar importar, prossiga primeiro para a tela 'Importar do Plano de Fornecimento QAT').

**Usando esta tela:**
1. Existem três maneiras de ajustar os dados:

   uma. **Ajuste para relatórios insuficientes:** o valor padrão é 100% de relatórios todos os meses. O usuário pode alterar isso para o valor correto. O QAT calculará o consumo ajustado por subnotificação. O cálculo pressupõe que as instalações que não reportaram qualquer consumo tiveram a mesma taxa de consumo que as que o fizeram.

   b. **Ajuste para rupturas de estoque:** Para dados importados, o número de dias de ruptura de estoque é obtido do programa de plano de fornecimento QAT, se os dados forem coletados. O valor padrão para dias de ruptura é zero dias (produto assumido sempre em estoque). O usuário pode alterar para o valor correto e o QAT calculará o consumo ajustado por ruptura de estoque. O cálculo pressupõe que os dias em que o produto esteve em estoque teriam a mesma taxa de consumo do restante do tempo em que o produto esteve em estoque. O valor padrão para o número de dias em um mês é baseado nos dias corridos, mas os usuários podem ajustar o número de dias usados ​​para o cálculo de falta de estoque em 'Atualizar configurações de versão'.

      **_Taxa de acumulação = Estoque esgotado (dias)/ (nº de dias no mês)._**<br />
      **_Consumo Ajustado = Consumo Real / Taxa de Relatório / (1 - Taxa de Stack Out)_**

Por exemplo, para um determinado mês, um produto teve um consumo de 1.000 unidades, ficou fora de estoque por 5 dos 31 dias do mês e a taxa de relato foi de 98%:

      **_Taxa de estoque = 5 dias sem estoque / 31 dias em um mês = 16,1%:_**<br />
      **_Consumo Ajustado = 1.000 unidades / Relatório de 98% / (1 - 16,1%) = 1.217 unidades._**

   c. **Ajustar para valores faltantes:** Clique no botão verde 'Interpolar' no centro direito da tela para pesquisar os períodos onde o valor de consumo está em branco e substituí-los por um valor interpolado. QAT interpola encontrando os valores mais próximos em ambos os lados (antes ou depois do espaço em branco), calcula a linha reta entre eles e usa essa fórmula linear para calcular o valor do(s) espaço(s) em branco. Observe que o QAT não interpolará nos meses em que o consumo real for zero. O QAT interpolará apenas se houver pelo menos um ponto de dados antes e um ponto de dados depois dos valores em branco. Matematicamente:

      - Onde x representa meses e y representa o consumo real,

      - Onde os valores de dados conhecidos são (x0, y0) e (x1, y1)

      - Onde quaisquer valores de dados desconhecidos são (x, y)

      - A fórmula para a linha interpolada é:

  <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image247.png').default} alt="Figure 162: Formula for Interpolation" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 162: Formula for Interpolation</p>

     <img src={require('@site/static/img/media/image248.png').default} alt="Figure 162: Formula for Interpolation" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 162: Formula for Interpolation</p>
     
     </div>

2. Use a tabela de dados detalhados para revisar o consumo ajustado
3. Clique em ‘Enviar’ para salvar quaisquer dados inseridos/ajustados. Assim que os ajustes forem salvos, o Gráfico será atualizado (observe que é necessário clicar em Enviar para que isso aconteça)
4. Repita as etapas 1 a 3 para cada unidade de planejamento que precisa ser ajustada.

###A3. Extrapolação

**Objetivo:** permitir que os usuários criem uma previsão identificando tendências e estações a partir de dados históricos de séries temporais inseridos pelo usuário na tela "Entrada e ajuste de dados". Várias opções de extrapolação estatística estão disponíveis e serão descritas abaixo. As extrapolações dos dados de consumo são feitas unidade de planejamento por unidade de planejamento.

**Usando esta tela:**

**1) Introdução à extrapolação:**

   - Antes de usar esta tela, certifique-se de ter preenchido a tela ‘Inserção e ajuste de dados’ para cada unidade de planejamento e região que você gostaria de extrapolar

   - Use os filtros na parte superior desta tela para selecionar a unidade de planejamento, a região a ser extrapolada e o intervalo de datas para utilização dos dados históricos.

   - O usuário poderá selecionar um ou vários dos métodos de extrapolação disponíveis no QAT, conforme apropriado ao padrão geral de consumo e aos dados disponíveis, conforme será discutido abaixo. Consulte as seções 2 a 4 abaixo para obter uma explicação dos métodos de extrapolação e como escolher os melhores métodos para sua previsão.

   - Observe que as alterações nesta tela são opcionais – o QAT aplica automaticamente os parâmetros de extrapolação padrão a todas as unidades de planejamento após a conclusão da tela Ajustes. O usuário então faz a seleção final da previsão na [tela Comparar e Selecionar](12-forecasting-module-reports-and-outputs.md#9a-compare-and-select).

**2) Métodos de extrapolação disponíveis no QAT**

   Os métodos de previsão no QAT são organizados do simples ao sofisticado.

   um. **Média Móvel:** A média móvel é uma média que se move ao longo do tempo, descartando dados mais antigos à medida que incorpora dados mais recentes. Para que o QAT calcule a média móvel, insira o número de meses anteriores que você gostaria de usar no cálculo da média. O usuário pode selecionar qualquer número inteiro positivo para este campo. Inserir 5, por exemplo, significaria que a projeção para o próximo mês da série seria a média do consumo dos cinco meses anteriores. Este método é mais útil para previsões de curto prazo e é sensível às tendências. Não é apropriado para dados sazonais

b. **Semimédias:**A semimédia estima tendências com base em duas metades de uma série. O QAT divide os dados reais em duas partes iguais (metades) e a média aritmética dos valores de cada parte (metade) é calculada como os valores ‘y’ de dois pontos em uma linha. A inclinação da linha de tendência é determinada pela diferença entre estes valores ‘y’ ao longo do tempo, conforme definido pela diferença dos pontos médios das duas metades da série, ou valores ‘x’, dos pontos. Este método é sensível às tendências e útil para previsões de curto e médio prazo, mas não é apropriado para dados sazonais.

   c. **Regressão Linear:** A regressão linear modela a relação entre duas variáveis ​​ajustando uma equação linear aos dados observados. Intervalo de confiança: entre 0% e 100% (exclusivo), por exemplo, o nível de confiança de 90% indica que 90% dos possíveis pontos futuros devem cair dentro deste raio da previsão representada pela linha de regressão. Este método não é apropriado para dados sazonais.

   d. **Suavização exponencial tripla (Holt-Winters):** Nas estatísticas, diferentes tipos de suavização são usados ​​para filtrar o ruído para que possamos ver os padrões em um conjunto de dados de série temporal com mais clareza. A suavização exponencial usa dados mais antigos com pesos decrescentes exponencialmente ao longo do tempo. Os parâmetros de suavização na suavização exponencial são definidos entre 0 e 1, com valores próximos de 1 favorecendo valores recentes e valores próximos de 0 favorecendo valores mais antigos. Os usuários que utilizam suavização exponencial tripla podem escolher quatro parâmetros:

      - alfa, aplica-se ao nível ou linha de base do conjunto de dados. Valores alfa mais altos dão mais peso aos dados mais recentes. O parâmetro padrão QAT para alfa é 0,2

      - beta, determina quão fortemente as tendências recentes devem ser valorizadas em comparação com tendências mais antigas. O parâmetro padrão QAT para beta é 0,2.

      - gama, reflete o componente sazonal da previsão. Sazonal geralmente se refere à repetição de padrões dentro de um ano. Quanto maior o gama, maior será o peso aplicado ao componente sazonal mais recente dos dados. O parâmetro padrão QAT para gama é 0,2.

      - Intervalo de confiança: entre 0% e 100% (exclusivo), por exemplo. O nível de confiança de 90% indica que 90% dos pontos futuros cairão dentro deste raio da previsão. O intervalo de confiança padrão do QAT é de 85%.

      O QAT calculará apenas as previsões do TES para conjuntos de dados com 24 ou mais meses de dados.

   e. **ARIMA:** ARIMA ou média móvel integrada autoregressiva permite que dois modelos estatísticos projetados para séries temporais estacionárias sejam integrados e aplicados a séries temporais não estacionárias, ou seja, séries temporais que possuem tendências ou estações. Muitas vezes é aplicado a previsões de curto prazo. “Auto-regressivo” significa que cada ponto na regressão é influenciado pelos seus valores anteriores e “média móvel” implica que cada ponto é uma média, uma combinação linear de um ou mais pontos adjacentes. Tanto a auto-regressão quanto a média móvel são "integradas" juntas para ajustar o melhor modelo para a série por meio de diferenciação ou, literalmente, usando a diferença entre pontos em uma série temporal para a análise, em vez dos valores brutos. Os modelos ARIMA possuem três parâmetros:

      - p ou AR (lag order): o número de observações defasadas no modelo. O parâmetro padrão QAT para p é 0.

      - d ou I (grau de diferenciação): o número de vezes que as observações brutas são diferenciadas. Este valor normalmente é 1 (se houver tendência) ou 0 (sem tendência). Outros valores mais elevados são possíveis, mas não esperados. O parâmetro padrão QAT para d é 1.

      - q ou MA (ordem da média móvel): o tamanho da janela da média móvel ou o número de observações diferenciadas a serem calculadas. O parâmetro padrão QAT para q é 1.

      - Intervalo de confiança: entre 0% e 100% (exclusivo), por exemplo. O nível de confiança de 90% indica que 90% dos pontos futuros cairão dentro deste raio da previsão. O intervalo de confiança padrão do QAT é de 85%.

O cálculo ARIMA pode ser sazonal ou não sazonal, com base na escolha e compreensão do usuário sobre seus dados e expectativas sobre se o consumo de um determinado produto está ou não sujeito a influências sazonais. A seleção padrão do QAT é para ARIMA sazonal. O QAT calculará apenas as previsões ARIMA para conjuntos de dados com 13 ou mais meses de dados.

**3) Qual método de extrapolação devo usar?**

   Abaixo estão algumas considerações para selecionar um método de previsão. Os métodos de previsão no QAT são organizados do simples ao sofisticado. Em geral,

   - Modelos mais sofisticados são mais sensíveis a problemas nos dados
   - Se você tiver dados de baixa qualidade (pontos de dados ausentes, taxas de relatórios variáveis, &lt;12 meses de dados), métodos de previsão mais simples, como médias móveis, serão provavelmente mais úteis.

   A escolha do método de extrapolação depende do padrão esperado nos dados. Alguns padrões típicos incluem:

   - Estacionário, onde o intervalo de valores observados ao longo do tempo gira em torno de uma média. Os modelos aplicados a esses conjuntos de dados podem incluir:

     - Média Móvel
     - ARIMA (não sazonal)

   - Tendência sem componente sazonal, onde os valores observados apresentam tendência crescente ou decrescente. Os modelos aplicados a esses conjuntos de dados podem incluir:

     - Semi-médias
     - Regressão Linear

   - Tendência e Sazonal, onde os valores observados em um conjunto de dados possuem componentes de tendência e sazonais. Os modelos aplicados a esses conjuntos de dados podem incluir:

     - ARIMA (sazonal)
     - Suavização Exponencial Tripla (Holt-Winters)

   - Sazonal sem tendência, onde os valores observados têm uma componente sazonal mas não têm tendência. Os modelos aplicados a esses conjuntos de dados podem incluir:

     - Suavização Exponencial Tripla (Holt-Winters)

   Os modelos aqui sugeridos não são exaustivos nem exclusivos. O QAT permite ao usuário aplicar uma variedade de métodos de extrapolação e depois compará-los usando métricas de melhor ajuste ou erro de previsão.
   A segunda etapa é considerar se se espera que os valores de previsão reflitam de perto os padrões históricos em seus dados e, portanto, se você usará as métricas de erro para informar sua seleção. Ao escolher um resultado (seja desconsiderando ou não a métrica de erro), será importante documentar sua justificativa para fazê-lo, para informar discussões ou revisões de sua previsão e para ajudar futuros previsores a apoiar suas decisões.

**4) Como interpreto os erros? <sup>1</sup>**

   O QAT calcula automaticamente as métricas de erro de previsão usando vários métodos. Estes incluem:

   - **MAPE (erro percentual médio absoluto):** pode ser interpretado como a diferença percentual média entre as previsões e seus alvos pretendidos no conjunto de dados. Por exemplo, se o MAPE for 15%, então as suas previsões estão, em média, 15% distantes dos valores reais.

     - MAPE = [(1/Nº de Observações) * ∑ (|(real – previsão)|/real)] x 100

   - **WAPE (Erro Percentual Absoluto Ponderado):** WAPE é uma métrica apropriada para quando o conjunto de dados utilizado possui valores baixos ou intermitentes. Uma porcentagem WAPE de 5 significa que a previsão estava errada em 5% em todo o conjunto de dados para um determinado período de avaliação. Dependendo do caso de uso, é recomendável escolher um modelo que forneça o menor valor WAPE.

     - WAPE = [ (∑n | (real – previsão) | / ∑ n (reais)] x 100

   - **RMSE (Root Mean Squared Error):** RMSE pode ser interpretado como o erro médio que as previsões do modelo apresentam em comparação com o real, com peso extra adicionado a erros de previsão maiores. Geralmente, quanto mais próximo o RMSE estiver de zero, mais preciso será o modelo.

     - RMSE = sqrt [∑n (real – previsão)2] / Nº de observações

   - **MSE (Erro Quadrático Médio):** MSE é a média agregada da diferença quadrática entre os valores reais e as previsões. Grandes erros são destacados devido a esta quadratura. O MSE é útil ao trabalhar em modelos onde grandes erros ocasionais devem ser minimizados. Geralmente, quanto mais próximo de 0, mais preciso é o modelo.

- MSE = ∑ n [(real – previsão)2] / Nº de observações)

   - **R2 (a correlação quadrática entre a variável dependente e os valores ajustados):** R2 = 1 – [soma quadrada da regressão (SSR) / soma total dos quadrados (SST)], onde a soma quadrada dos resíduos da regressão (SSR) é a soma dos seus resíduos ao quadrado, e a soma total dos quadrados (SST) é a soma da distância em que os dados estão longe da média, todos elevados ao quadrado. O valor R2 é sempre um número entre 0 e 1. R2 é uma medida do ajuste de uma linha de regressão a uma série de observações históricas com valores mais próximos de 1 indicando uma correspondência mais forte entre os valores reais e previstos (modelo de regressão). Não é uma medida de erro e não deve ser usada por si só para avaliar a adequação de uma previsão, mas em combinação com outras métricas de erro e com o conhecimento do programa pelo usuário.

     - R2 = 1 – [soma quadrada da regressão (SSR) / soma total dos quadrados (SST)]

   Além de R2, quanto menor a pontuação, mais próximo o resultado do método de previsão se ajusta aos dados históricos. Em modelos onde se espera que os padrões históricos num conjunto de dados sejam refletidos nos valores futuros, um valor de erro baixo poderia ser usado para ajudar a selecionar um método de extrapolação preferido, e o QAT destacará esses melhores ajustes numa tabela. Contudo, se forem previstas alterações substanciais que não se ajustem aos dados históricos, a extrapolação mais adequada poderá não ser a previsão mais adequada a seleccionar. 
   
   Para fazer a melhor seleção entre os métodos de extrapolação para o seu propósito, antes de revisar as métricas de erro, o mais importante é primeiro entender qual método de extrapolação é mais apropriado para o padrão esperado nos dados.

<hr />
<p style={{ fontSize: '0.85em' }}><sup>1</sup> <a href="https://stephenallwright.com/mse-vs-mae/" target="_blank">https://stephenallwright.com/mse-vs-mae/</a>; <a href="https://www.obviously.ai/post/introducing-wape" target="_blank">https://www.obviously.ai/post/introducing-wape</a></p>

**5) Otimização dos parâmetros de previsão TES e ARIMA**

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image249.png').default} alt="Figure 165: Optimize TES & ARIMA Link" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 165: Optimize TES & ARIMA Link</p>
  </div>

Conforme descrito em [Extrapolação](#extrapolação), o QAT oferece aos usuários múltiplas opções de extrapolação, incluindo TES e ARIMA sazonal e não sazonal. Os usuários são livres para usar os padrões do QAT ou inserir parâmetros de previsão alternativos com a intenção de reduzir as métricas de erro, aumentando assim a correspondência entre os resultados do método de previsão e os pontos de dados reais no período de dados históricos. Se o usuário estiver trabalhando online, o QAT pode otimizar os parâmetros TES e ARIMA iterando, calculando o RMSE de cada iteração e selecionando os parâmetros que produzem o RMSE mais baixo.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image250.png').default} alt="Figure 166: Optimizing TES & ARIMA Pop-up" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 166: Optimizing TES & ARIMA Pop-up</p>
  </div>

Para TES, o QAT calcula 125 iterações da previsão, testando cada um dos parâmetros alfa, beta e gama em combinação com os seguintes valores: 0, 0,2, 0,4, 0,8 e 1. Qualquer uma das 125 combinações para um determinado produto produz o resultado com o RMSE mais baixo será exibido na tela de extrapolação.

Para ARIMA ou ARIMA sazonal, o QAT calcula 24 iterações da previsão, testando cada um dos parâmetros p, d e q em combinação, usando os seguintes valores:

- p: 0 ou 1
- d: 0, 1 ou 2
- q: 0, 1, 2 ou 3

Qualquer uma das 24 combinações para um determinado produto que produza o resultado ARIMA com o RMSE mais baixo será exibida na tela de extrapolação.

**Observação:** **As estatísticas não são mágicas. A suposição subjacente a todos estes métodos de extrapolação é que as tendências e padrões nos dados históricos continuarão no futuro. Portanto, métricas de erro baixo não garantem necessariamente uma previsão melhor.**

**6) Extrapolação em massa**

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image251.png').default} alt="Figure 167: Bulk Extrapolation Link" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 167: Bulk Extrapolation Link</p>
  </div>

Na tela de extrapolação QAT, o usuário pode comparar os resultados dos vários métodos de extrapolação tanto graficamente quanto em uma tabela de resultados, produto por produto. Isso permite que o usuário desmarque métodos de extrapolação que eles acham que não se aplicam a um determinado produto para limitar as opções na [tela Comparar e Selecionar](12-forecasting-module-reports-and-outputs.md#9a-compare-and-select) apenas àqueles que o usuário escolhe exibir.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image252.png').default} alt="Figure 168: Bulk Extrapolation Pop-up" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 168: Bulk Extrapolation Pop-up</p>
  </div>

Se o usuário preferir enviar todos os resultados dos métodos de extrapolação disponíveis para mais de um produto diretamente para a tela Comparar e Selecionar, o usuário poderá selecionar a extrapolação em massa. Na janela pop-up Extrapolação em massa, o usuário pode então selecionar um intervalo de datas históricas a partir do qual extrapolar a previsão (apenas um intervalo de datas por extrapolação em massa), se deseja aplicar sazonalidade ao seu cálculo ARIMA, quais unidades de planejamento e regiões (se forem usados ​​dados regionais) incluir na extrapolação em massa e se deve ou não otimizar os parâmetros ARIMA e TES para a extrapolação.

Depois de executar a extrapolação em massa, todos os resultados podem ser visualizados na tela de extrapolação, na tela de comparação e seleção e na caixa suspensa da tela de resumo de previsão (regional). O usuário pode selecionar seu método de extrapolação preferido na tela Comparar e Selecionar ou na tela Resumo de Previsão (regional).

A extrapolação em massa no QAT é particularmente útil quando se trabalha com um grande conjunto de produtos para os quais estão disponíveis dados de consumo oportunos, completos e precisos durante 12 meses ou mais.

## B. Previsões de árvores

Os usuários podem realizar uma previsão baseada em árvore se os dados necessários para uma previsão baseada no consumo não estiverem disponíveis ou não forem úteis na previsão do consumo futuro. As previsões em árvore acomodam com flexibilidade todos os outros métodos de previsão, como morbidade, serviços e métodos demográficos. Os usuários podem especificar alterações ao longo do tempo em uma árvore, especificando diretamente a taxa de alteração ou extrapolando dados anteriores.

### B1. Construindo uma árvore

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image253.png').default} alt="Figure 169: Manage Tree – Tree List (Right click to access actions)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 169: Manage Tree – Tree List (Right click to access actions)</p>
  </div>

**Objetivo:** Permitir que os usuários:
1. Veja uma lista de suas árvores existentes
2. Edite uma árvore existente clicando em qualquer linha
3. Clique com o botão direito em uma linha para
   - **Duplicar árvores existentes:** Os usuários também podem duplicar uma árvore existente para outro programa. Os usuários devem ter acesso a ambos os programas e baixá-los em seu computador local para duplicação.
   - **Excluir árvores existentes:** Haverá uma tela de confirmação, mas esta ação será irreversível. No entanto, se você excluir acidentalmente uma árvore, poderá baixar novamente um programa se o backup da árvore excluída tiver sido feito no servidor.
   - **Tree Table:** Isto permite ao usuário editar a árvore selecionada na tela [Tree Table](#tree-table)
4. Adicione uma nova árvore a um programa baixado clicando no menu suspenso ‘Criar ou Selecionar’ no canto superior direito da tela. Novas árvores podem ser construídas:
   - manualmente - selecione '+ Desenhe sua própria árvore'
   - a partir de um modelo de árvore - selecione o nome do modelo desejado. Se um usuário quiser ver um modelo de árvore adicionado ao QAT que não existe e que beneficiaria a comunidade QAT, ele poderá enviar uma solicitação de alteração ao [Sistema de suporte técnico de tickets do QAT](05-getting-started.md#qat-helpdesk-and-tickets).

*Observação: [Visualizadores de previsão](15-annex-3-user-role-matrix.md) podem visualizar qualquer árvore que tenha sido carregada no servidor e à qual tenham acesso; no entanto, apenas usuários/administradores do Forecast poderão criar e editar/atualizar árvores.*

Ações do nó:
- <img src={require('@site/static/img/media/image254.png').default} alt="Delete" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Excluir:** Exclui o nó selecionado e todos os seus filhos.
- <img src={require('@site/static/img/media/image255.png').default} alt="Copy/Move" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Copiar/Mover:** Copia ou move o nó selecionado e todos os filhos sob o nó. O usuário pode selecionar o destino.
- <img src={require('@site/static/img/media/image256.png').default} alt="Add Branch Template" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Adicionar modelo de ramificação:** Adiciona um modelo de árvore como uma ramificação abaixo do nó escolhido.
- <img src={require('@site/static/img/media/image257.png').default} alt="Add" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Adicionar:** Adiciona um filho ao nó selecionado.
- <img src={require('@site/static/img/media/image258.png').default} alt="Collapse/Expand" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Recolher/Expandir:** Recolher/Expandir o nó atual e todos os seus filhos. Os usuários também podem passar o mouse sobre o ponto para escolher qual nó expandir e clicar uma vez para expandir esse nó e todos os seus filhos. Além disso, há uma caixa de seleção “Collapse Tree” na parte superior da tela Build Trees que recolherá todos os nós, exceto o nó superior.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image260.png').default} alt="Figure 170: Example of a Collapsed Forecasting Tree" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 170: Example of a Collapsed Forecasting Tree</p>
  </div>

Tipos de nós:

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Node Type</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Value</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Potential Children</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Advanced Functionality</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aggregation ∑</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sum of children nodes.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>∑ or Number</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Number #</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Defined at this node</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>% or <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} />, <img src={require('@site/static/img/media/image264.png').default} alt="Extrapolation" style={{ width: '16px', verticalAlign: 'middle' }} />, <img src={require('@site/static/img/media/image270.png').default} alt="Seasonality" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Percentage %</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Percentage of the parent.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>% or <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Funnel <img src={require('@site/static/img/media/image266.png').default} alt="Funnel" style={{ width: '16px', verticalAlign: 'middle' }} /></strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sum of linked source nodes (<img src={require('@site/static/img/media/image262.png').default} alt="Link" style={{ width: '16px', verticalAlign: 'middle' }} />)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>% or <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Forecasting Unit <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Percentage of the parent and forecasting unit parameters. Can be two different use types:
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', margin: '4px 0' }}>
          <li><img src={require('@site/static/img/media/image268.png').default} alt="Continuous" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /><strong>Continuous</strong></li>
          <li><img src={require('@site/static/img/media/image269.png').default} alt="Discrete" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /><strong>Discrete</strong></li>
        </ul>
      </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><img src={require('@site/static/img/media/image261.png').default} alt="PU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Planning Unit <img src={require('@site/static/img/media/image261.png').default} alt="PU" style={{ width: '16px', verticalAlign: 'middle' }} /></strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Percentage of the parent and planning unit parameters.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
  </tbody>
</table>

Atributos do nó:
- **∑ Atributos específicos do nó de agregação:** nenhum – é definido pela soma de seus filhos. Por exemplo, se houver dois nós filhos abaixo do nó Agregação iguais a 50 e 100, o QAT adicionaria automaticamente estes números para definir o nó Agregação: 50 (filho) + 100 (filho) = 150 (pai da agregação).
- **# Número de atributos específicos do nó:**
  - **Unidade do nó:** menu suspenso que consiste em paciente, cliente, cliente, pessoas ou unidade
  - **Mês:** escolha o mês/ano a partir do qual esses dados foram reportados. Por exemplo, se um usuário quiser definir um nó numérico como População do País e os dados forem de janeiro de 2020, o mês do nó deverá ser janeiro de 2020.
  - **Valor do nó:** Defina o valor numérico para este nó. Por exemplo, se a População do País em janeiro de 2020 for 500.000, o valor do nó deverá ser 500.000. Se esse valor mudar ao longo do tempo, os usuários poderão utilizar a guia [Modelagem/Transferência](#d-modelingtransfers) para especificar a alteração.
- **% Porcentagem de atributos específicos do nó:**
  - **Unidade do nó:** menu suspenso que consiste em paciente, cliente, cliente, pessoas ou unidade
  - **Mês:** escolha o mês/ano a partir do qual esses dados foram reportados. Normalmente, este será o mês/ano de início da previsão.
  - **Porcentagem de pai:** define a porcentagem do nó pai. Por exemplo, se metade do nó número pai, População do País, for feminina, a porcentagem do nó pai seria de 50%.
  - **Valor pai por mês:** não editável e fornecido apenas como referência.
  - **Valor do nó:** calculado automaticamente pelo QAT com base na porcentagem definida pelo usuário e no valor pai. Este campo não é editável.
- <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '18px', verticalAlign: 'middle', marginRight: '4px' }} /> **Atributos específicos do nó da unidade de previsão:**
  - **Mês:** escolha o mês/ano a partir do qual esses dados foram reportados. Normalmente, este será o mês/ano de início da previsão.
  - **Porcentagem de pai:** define a porcentagem do nó pai.
  - **Valor pai por mês:** não editável e fornecido apenas como referência.
  - **Porcentagem do valor pai por mês:** não editável e fornecido apenas como referência.
  - **Categoria do rastreador:** menu suspenso que pode ser usado para ajudar a restringir as unidades de previsão, mas será preenchido automaticamente assim que a unidade de previsão for escolhida.
  - **Copiar do modelo:** funcionalidade avançada, na qual um usuário pode utilizar um [modelo de uso](#c-usage-templates) para ajudar na construção eficiente de uma árvore. Este menu suspenso não é obrigatório.
  - **Unidade de previsão:** lista suspensa de todas as unidades de previsão disponíveis no programa do usuário. Se uma unidade de previsão não estiver disponível no menu suspenso, o usuário deverá primeiro adicioná-la à tela [Atualizar unidades de planejamento](10-forecasting-module-program-data.md#d-planning-units).
  - **Unidade de planejamento:** menu suspenso filtrado com base na unidade de previsão escolhida. Se houver apenas uma unidade de planejamento associada à unidade de previsão, este campo será preenchido automaticamente.
  - **Tipo de Uso:**
    - <img src={require('@site/static/img/media/image269.png').default} alt="Discrete" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Discreto:** Cada _______ [unidade do nó pai] requer _________ [unidade de medida de previsão] __________ vezes por [dia/semana/mês/ano] para _____________ [dia/semana/mês/ano]
      - **Calcular (Tudo no Primeiro Mês/Mês a Mês):** Se selecionado “Tudo no Primeiro Mês”, o QAT irá

antecipar a quantidade total prevista para o mês de início do nó. Se selecionado “Mês a mês”, o QAT calculará a quantidade discretamente mês a mês (consulte [Técnicas avançadas](#f-técnicas avançadas) para obter mais informações).
      - **Uso único (Sim/Não):** permite ao usuário determinar se esta unidade de previsão é usada durante um período específico de tempo. Se “sim” for selecionado, o período de tempo para cálculos discretos não será necessário.
    - <img src={require('@site/static/img/media/image268.png').default} alt="Continuous" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Contínuo:** Cada _______ [unidade do nó pai] requer _________ [unidade de medida de previsão] a cada _______ [dia/semana/mês/ano]
  - **Atraso em meses:** usado para detalhar se uma unidade de previsão está atrasada ou tem uso de produto em fases. Consulte [Técnicas Avançadas](#f-técnicas avançadas) para obter mais informações.
- <img src={require('@site/static/img/media/image261.png').default} alt="PU" style={{ width: '18px', verticalAlign: 'middle', marginRight: '4px' }} /> **Atributos específicos do nó da unidade de planejamento:** nó criado automaticamente quando a unidade de previsão é adicionada a uma árvore. A maioria dos atributos na tela de adição/edição de nó não são editáveis ​​e são apenas para referência; no entanto, alguns podem ser atualizados com base em circunstâncias específicas:
  - **Mês:** escolha o mês/ano a partir do qual esses dados foram reportados. Normalmente, este será o mês/ano de início da previsão.
  - **Substituição de cálculo:** os usuários podem optar por usar o cálculo automático do QAT para o número de unidades de planejamento clicando em “Sim” ou inserir manualmente um valor clicando em “Não”. Consulte [Técnicas Avançadas](#f-técnicas avançadas) para obter mais informações.

**Usando esta tela:**
- Um programa de previsão deve primeiro ser baixado para construir ou editar uma árvore
- Antes de construir e editar uma árvore, primeiro adicione as unidades de planejamento do programa de previsão na tela ‘Atualizar Unidades de Planejamento’.
- **Construir uma árvore semelhante a uma árvore existente?**
  - Mesma estrutura, números diferentes: Construa apenas uma árvore e use o recurso [cenário](#c-scenarios).
  - Estrutura ligeiramente diferente: duplique uma árvore existente clicando com o botão direito em uma linha e selecionando “Duplicar árvore”. Nota: Se você deseja duplicar uma árvore existente de outro programa, você deve ter baixado ambos os programas, então você pode duplicar de um programa para outro.
- **Pretende começar a partir de um modelo?** Consulte a seção [Modelo de árvore](#a-tree-templates)
- Os usuários também podem excluir árvores clicando com o botão direito em uma linha e selecionando “Excluir árvore”.

###a. Tipos e funções de nós

Construindo a Árvore: A árvore de previsão é construída de cima para baixo, utilizando diferentes tipos de “nós”. Consulte os tipos de nós e as ações dos nós abaixo. Cada árvore de previsão deve começar com um nó Agregação ou um nó Número e incluir um ou mais nós Unidade de Planejamento, que formam a saída da previsão.

  - *Porcentagem do pai:* define a porcentagem do nó pai.

  - *Valor pai por mês:* não editável e fornecido apenas como referência.

  - *Porcentagem do Valor Pai por Mês:* não editável e fornecido apenas como referência.

  - *Categoria do rastreador:* menu suspenso que pode ser usado para ajudar a restringir as unidades de previsão, mas será preenchido automaticamente assim que a unidade de previsão for escolhida.

  - *Copiar do modelo:* funcionalidade avançada, na qual um usuário pode utilizar um modelo de uso para auxiliar na construção de uma árvore com eficiência. Este menu suspenso não é obrigatório.

  - *Unidade de previsão:* lista suspensa de todas as unidades de previsão disponíveis no programa do usuário. Se uma unidade de previsão não estiver disponível no menu suspenso, o usuário deverá primeiro adicioná-la à tela ‘Atualizar unidade de planejamento’.

  - *Unidade de planejamento:* menu suspenso filtrado com base na unidade de previsão escolhida. Se houver apenas uma unidade de planejamento associada à unidade de previsão, este campo será preenchido automaticamente.

  - *Tipo de Uso:*

    - **Discreto:** Cada _______ [unidade do nó pai] requer _________ [unidade de medida de previsão] __________ vezes por [dia/semana/mês/ano] para _____________ [dia/semana/mês/ano]

      - *Calcular (Tudo no Primeiro Mês/Mês a Mês):* Se selecionado “Tudo no Primeiro Mês”, o QAT irá antecipar a quantidade total prevista para o mês inicial do nó. Se selecionado “Mês a Mês”, o QAT calculará a quantidade discretamente mês a mês (consulte Técnicas Avançadas para obter mais informações).

      - *Uso único (Sim/Não):* permite ao usuário determinar se esta unidade de previsão é usada durante um período específico de tempo. Se “sim” for selecionado, o período de tempo para cálculos discretos não será necessário.

    - **Contínuo:** Cada _______ [unidade do nó pai] requer _________ [unidade de medida de previsão] a cada _______ [dia/semana/mês/ano]

      - *Atraso em meses:* usado para detalhar se uma unidade de previsão está atrasada ou tem uso de produto em fases. Consulte Técnicas Avançadas para obter mais informações.

- **Atributos específicos do nó da unidade de planejamento:** nó criado automaticamente quando a unidade de previsão é adicionada a uma árvore. A maioria dos atributos na tela de adição/edição de nó não são editáveis ​​e são apenas para referência; no entanto, alguns podem ser atualizados com base em circunstâncias específicas:

  - *Mês:* escolha o mês/ano a partir do qual esses dados foram reportados. Normalmente, este será o mês/ano de início da previsão.

  - *Substituição de cálculo:* os usuários podem optar por usar o cálculo automático do QAT para o número de unidades de planejamento clicando em “Sim” ou inserir manualmente um valor clicando em “Não”. Consulte Técnicas Avançadas para obter mais informações.


  - *Porcentagem do pai:* define a porcentagem do nó pai.

  - *Valor pai por mês:* não editável e fornecido apenas como referência.

  - *Porcentagem do Valor Pai por Mês:* não editável e fornecido apenas como referência.

- *Categoria do rastreador:* menu suspenso que pode ser usado para ajudar a restringir as unidades de previsão, mas será preenchido automaticamente assim que a unidade de previsão for escolhida.

  - *Copiar do modelo:* funcionalidade avançada, na qual um usuário pode utilizar um modelo de uso para auxiliar na construção de uma árvore com eficiência. Este menu suspenso não é obrigatório.

  - *Unidade de previsão:* lista suspensa de todas as unidades de previsão disponíveis no programa do usuário. Se uma unidade de previsão não estiver disponível no menu suspenso, o usuário deverá primeiro adicioná-la à tela ‘Atualizar unidade de planejamento’.

  - *Unidade de planejamento:* menu suspenso filtrado com base na unidade de previsão escolhida. Se houver apenas uma unidade de planejamento associada à unidade de previsão, este campo será preenchido automaticamente.

  - *Tipo de Uso:*

    - **Discreto:** Cada _______ [unidade do nó pai] requer _________ [unidade de medida de previsão] __________ vezes por [dia/semana/mês/ano] para _____________ [dia/semana/mês/ano]

      - *Calcular (Tudo no Primeiro Mês/Mês a Mês):* Se selecionado “Tudo no Primeiro Mês”, o QAT irá antecipar a quantidade total prevista para o mês inicial do nó. Se selecionado “Mês a Mês”, o QAT calculará a quantidade discretamente mês a mês (consulte Técnicas Avançadas para obter mais informações).

      - *Uso único (Sim/Não):* permite ao usuário determinar se esta unidade de previsão é usada durante um período específico de tempo. Se “sim” for selecionado, o período de tempo para cálculos discretos não será necessário.

    - **Contínuo:** Cada _______ [unidade do nó pai] requer _________ [unidade de medida de previsão] a cada _______ [dia/semana/mês/ano]

      - *Atraso em meses:* usado para detalhar se uma unidade de previsão está atrasada ou tem uso de produto em fases. Consulte Técnicas Avançadas para obter mais informações.

- **Atributos específicos do nó da unidade de planejamento:** nó criado automaticamente quando a unidade de previsão é adicionada a uma árvore. A maioria dos atributos na tela de adição/edição de nó não são editáveis ​​e são apenas para referência; no entanto, alguns podem ser atualizados com base em circunstâncias específicas:

  - *Mês:* escolha o mês/ano a partir do qual esses dados foram reportados. Normalmente, este será o mês/ano de início da previsão.

  - *Substituição de cálculo:* os usuários podem optar por usar o cálculo automático do QAT para o número de unidades de planejamento clicando em “Sim” ou inserir manualmente um valor clicando em “Não”. Consulte Técnicas Avançadas para obter mais informações.

### Mudanças ao longo do tempo

Embora a estrutura da árvore permaneça constante ao longo do tempo, as porcentagens e os valores dos nós podem mudar com o tempo. Use o menu suspenso de data para visualizar a árvore em qualquer mês. As três funcionalidades abaixo estão disponíveis em cada nó e permitem ao usuário controlar como os nós mudam ao longo do tempo:

- **⇅ Modelagem:** Permite ao usuário especificar a taxa exata de mudança
- <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Transferência:** Permite que os usuários vinculem dois nós - de forma que a diminuição do nó de origem esteja vinculada ao aumento do nó de destino. Útil para transições.
- <img src={require('@site/static/img/media/image264.png').default} alt="Extrapolation" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Extrapolação:** permite que os usuários usem dados históricos para extrapolar alterações futuras.

Para obter mais informações e exemplos específicos de alterações ao longo do tempo, consulte [Modelagem/Transferências](#d-modelingtransfers).

### b. Noções básicas de construção de árvores

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image276.png').default} alt="Figure 171: Simple Forecasting Tree Example" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 171: Simple Forecasting Tree Example</p>
  </div>

As árvores de previsão são construídas de cima para baixo usando diferentes tipos de [nós](#a-node-types--functions). Cada árvore de previsão deve começar com um nó Agregação ou Número e incluir um ou mais nós Unidade de Planejamento. Os nós da Unidade de Planejamento devem ser filhos de um nó da Unidade de Previsão. Portanto, um usuário deve ter pelo menos três níveis de nós (nó Agregação/Número, nó Unidade de Previsão e nó Unidade de Planejamento) para produzir uma saída de previsão.

**Etapas para construir uma árvore manual:**
<ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
  <li style={{ marginBottom: '15px' }}>Download a program</li>
  <li style={{ marginBottom: '15px' }}>Navigate to the Forecasting Tree → Manage Tree screen</li>
  <li style={{ marginBottom: '15px' }}>In the top-right of the screen, click the blue ‘Create or Select’ dropdown and select ‘+ Draw your own tree’ from the dropdown</li>
  <li style={{ marginBottom: '15px' }}>
    Define the tree details, such as the forecasting method (demographic, morbidity, or services), tree name, and region.
    <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
      <li style={{ marginBottom: '10px' }}>Once created, users can edit tree details by clicking on the <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> icon next to the Tree dropdown.</li>
      <li>(optional) By clicking on the <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> icon next to the Scenario dropdown, users can add, edit, and delete tree scenarios. For more information, see <a href="#c-scenarios">Scenarios</a> in the section below.</li>
    </ol>
  </li>
  <li style={{ marginBottom: '15px' }}>By default, QAT will begin with a number node with a value of zero on Level 0. Click on this default node to edit/update the node.</li>
  <li style={{ marginBottom: '15px' }}>
    Adicione um novo nó (filho) abaixo do nó pai clicando em <img src={require('@site/static/img/media/image257.png').default} alt="Add" style={{ width: '16px', verticalAlign: 'middle' }} /> e escolhendo o tipo de nó apropriado. Com base no pai, o QAT filtrará automaticamente quais <a href="#a-node-types--functions">tipos de nó filho</a> estão disponíveis. QAT adicionará o novo nó sob o mesmo pai e à direita de quaisquer nós existentes. Continue adicionando nós com base nos dados disponíveis até terminar com um nó Unidade de Previsão e seu nó Unidade de Planejamento associado.
    <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
      <li style={{ marginBottom: '10px' }}>To delete a node, simply click the <img src={require('@site/static/img/media/image254.png').default} alt="delete" style={{ width: '16px', verticalAlign: 'middle' }} /> icon, but note that this will also delete the child nodes under the one being deleted.</li>
      <li style={{ marginBottom: '10px' }}>
        To copy or move a node, click on the <img src={require('@site/static/img/media/image255.png').default} alt="copy/move" style={{ width: '16px', verticalAlign: 'middle' }} /> icon. In the pop-up, review or select where you want the node to be copied or moved to – the tree, the level of the parent, and the parent.
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '10px' }}>
          <li style={{ marginBottom: '5px' }}>For copying, QAT will select the same location as the original node by default</li>
          <li style={{ marginBottom: '5px' }}>For moving, QAT will select the same tree as the original node by default</li>
          <li style={{ marginBottom: '5px' }}>The entire branch (including all child nodes) will be moved/copied.</li>
          <li>Use the checkbox to select if you want to include modeling or not. Note: Transfers are never copied/moved.</li>
        </ul>
      </li>
      <li style={{ marginBottom: '10px' }}>
        As a validation feature, QAT will flag a Planning Unit (PU) node with a red border under two circumstances: 1) if a user has added a Forecasting Unit (FU) and PU, and later changes the FU and mistakenly forgets to also change to the correct corresponding PU, or 2) if a user creates a tree from a tree template which has PUs, but the user does not have those PUs in their program.
        <div style={{ margin: '20px 0' }}>
          <img src={require('@site/static/img/media/image280.png').default} alt="Red Border Nodes" style={{ width: '100%' }} />
        </div>
        To correct this, users can click on the PU node and choose the appropriate PU from the dropdown list.
        <div style={{ margin: '20px 0' }}>
          <img src={require('@site/static/img/media/image281.png').default} alt="PU Dropdown Selection" style={{ width: '100%' }} />
        </div>
      </li>
      <li>Tip: users can “clean-up” their tree by clicking any of the checkboxes available (Hide Planning Unit, Hide Forecasting Unit and Planning Unit, or Hide Tree Validation) at the top of the tree.</li>
    </ol>
  </li>
  <li style={{ marginBottom: '15px' }}>(optional) Users can insert a tree template within the body of their tree by clicking the <img src={require('@site/static/img/media/image256.png').default} alt="branch template" style={{ width: '16px', verticalAlign: 'middle' }} /> icon to add a branch template. This branch will be added below the current node as a child. This improves the efficiency of adding multiple batches of nodes (a branch) that are the same or similar across an existing tree or a new tree by utilizing templates. For more information on branch templates, refer to <a href="#b-branch-templates">Branch Templates</a>.</li>
  <li style={{ marginBottom: '15px' }}>
    (opcional) Clique nos níveis da árvore (caixas retangulares azuis escuras à esquerda da árvore) para:
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '5px' }}>Name the levels of a tree. This will make a tree easier to read and will be used in the dropdowns and axis of the Modeling Validation screen.</li>
      <li>Reorder branches of your tree as desired by using the up and down arrows to indicate the left-to-right position of the branches. If the list is long, use the “see children of” dropdown to filter the nodes.</li>
    </ul>
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image282.png').default} alt="Level Details" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    As árvores QAT são salvas automaticamente no computador local (para salvar uma árvore no servidor, consulte [Upload Version](06-managing-programs-and-versions.md#c-upload)). As quantidades que aparecem nos nós também são calculadas automaticamente à medida que a árvore muda; no entanto, se o QAT estiver lento durante a edição da árvore, os usuários podem desmarcar a caixa “Calcular automaticamente” para interromper os cálculos automáticos de back-end. Para ver manualmente os cálculos atualizados após cada edição, os usuários precisarão clicar no ícone <img src={require('@site/static/img/media/image283.png').default} alt="calculate" style={{ width: '16px', verticalAlign: 'middle' }} />.
    <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
      <li style={{ marginBottom: '10px' }}>Users can download their trees as PDFs to share with stakeholders by clicking on the <img src={require('@site/static/img/media/image284.png').default} alt="PDF" style={{ width: '16px', verticalAlign: 'middle' }} /> icon.</li>
      <li>Users can download an outline form of their tree to double check the Sum of Children validation, node values, and their nodes by clicking on the <img src={require('@site/static/img/media/image285.png').default} alt="outline" style={{ width: '16px', verticalAlign: 'middle' }} /> icon.</li>
    </ol>
  </li>
  <li style={{ marginBottom: '15px' }}>
    (opcional) Para editar valores em lote em uma árvore, o usuário pode usar a tela Tabela em Árvore, que pode ser acessada por meio de um link no canto superior esquerdo da tela Gerenciar Árvore – Construir Árvores.
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '5px' }}>On the Tree Tables screen,</li>
      <li style={{ marginBottom: '5px' }}>The dropdowns at the top of the screen should be prepopulated with the same program, tree, scenario, and display date as previously selected, but users can update the dropdowns as needed before making edits.</li>
      <li style={{ marginBottom: '5px' }}>Nodes are grouped by node type on different tabs. Navigate to the node(s) you want to edit by using the tabs</li>
      <li style={{ marginBottom: '5px' }}>Made edits to any node values by editing the table cells.</li>
      <li style={{ marginBottom: '5px' }}>See the example and screenshot in Figure 172</li>
      <li style={{ marginBottom: '5px' }}>Note that while the Tree Tables screen is helpful for editing the values of multiple nodes efficiently, the Tree Tables screen does not allow for editing for the tree structure. Please use the Manage Tree – Build Trees screen to add, delete, copy or move nodes.</li>
      <li>Upon returning to the Build Tree screen, users may need to click the <img src={require('@site/static/img/media/image283.png').default} alt="calculate" style={{ width: '16px', verticalAlign: 'middle' }} /> icon to see updated values.</li>
    </ul>
  </li>
</ol>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image286.png').default} alt="Figure 172: Accessing and Using Tree Table Screen" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 172: Accessing and Using Tree Table Screen</p>
  </div>

### c. Cenários

**Uso de cenários:** Cenários são usados para modelar valores diferentes para a mesma árvore. Os cenários são úteis quando os utilizadores desejam analisar o resultado de diferentes mudanças ao longo do tempo (ex: meta nacional vs. status quo, diferentes níveis de sazonalidade, transição de unidades de planeamento a taxas diferentes, etc.), mas gostariam de manter a mesma estrutura base. Para criar uma árvore com estruturas diferentes (por exemplo, regimes diferentes, metodologias diferentes), é recomendado criar outra árvore (dica: utilize a função de árvore duplicada!). Para adicionar, editar, excluir ou desativar um cenário, use o ícone <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> próximo ao menu suspenso do cenário. Use o menu suspenso de cenários para selecionar qual cenário visualizar e editar.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Fixed for All Scenarios</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Unique to each Scenario</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tree structure</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Node value</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Node Title</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Month</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Node Type</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Notes</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modeling/Transfer/Extrapolation</td>
    </tr>
  </tbody>
</table>

*Notas:*
- Por padrão, apenas os cenários ativos são mostrados. Para visualizar cenários inativos, clique no ícone <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> próximo ao menu suspenso do cenário, seguido de “Mostrar inativos”
- Os usuários podem escolher diferentes combinações de cenário de árvore para cada unidade de planejamento na tela [Comparar e selecionar](12-forecasting-module-reports-and-outputs.md#9a-compare-and-select).

###d. Modelagem/Transferências

**Objetivo:** Se um nó mudar ao longo do tempo, um usuário poderá utilizar a guia Modelagem/Transferência para modelar o crescimento/perda dentro de um único nó ou uma transferência de um nó para outro. Observe que esta funcionalidade está disponível apenas para nós de número (#) e nós de porcentagem (%) (incluindo unidades de previsão e unidades de planejamento). O usuário ainda pode usar a guia para visualizar dados mensais dos nós de agregação e funil.

**Usando esta guia:**
Os usuários podem inserir manualmente quaisquer alterações desejadas ao longo do tempo (crescimento/perda/transferência) na tabela superior ou podem utilizar a Calculadora de Modelagem para calcular a taxa de variação mensal (consulte a seção ‘Calculadora de Modelagem’ abaixo para obter mais informações). Cada entrada deve ser adicionada como linhas separadas por alteração na tabela superior (ou seja, um nó não pode crescer e ser transferido em uma linha de entrada de dados – devem ser duas linhas separadas).

- **Regras para nós de transferência:**
  - Os nós numéricos só podem ser transferidos para outros nós numéricos e devem pertencer ao mesmo nível.
  - Os nós percentuais só podem ser transferidos para outros nós percentuais e devem pertencer ao mesmo pai.
  - As transferências são sempre negativas do nó de origem e positivas para o nó de destino.
  - A extrapolação não é permitida em um nó que também tenha uma transferência, seja de/para outro nó.

**Tipos de modelagem:**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Modeling Type</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong># Node Calculation</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>% Node Calculation</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a static number each month</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a static percentage each month, calculated based on the starting month</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Exponential (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a percentage each month, calculated on the previous month as a rolling percentage</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (% point)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a static percentage each month (e.g. if the starting month is 30% and the change is +1% each month, next month is 31%, the next is 32%, and so on)</td>
    </tr>
  </tbody>
</table>

**Sazonalidade e alterações manuais:**

Clique em **“Mostrar dados mensais”** para mostrar uma tabela e um gráfico com o valor do nó ao longo do tempo

  - Este recurso é útil para ver como as entradas de modelagem e transferência afetam os dados mensais em formato gráfico e tabular.
  - Nos dados tabulares, os usuários podem adicionar uma alteração manual para um mês específico ou inserir uma porcentagem do índice de sazonalidade (disponível apenas para # e % nós), conforme necessário.
  - Insira um % positivo para um valor aumentado neste mês ou um valor negativo para um valor diminuído. Por exemplo, 20% indica que o valor deste mês está 20% acima do valor não sazonal (ou 120%), enquanto -20% indica que está 20% abaixo do valor não sazonal (ou 80%).
  - Para nós percentuais, o QAT primeiro calcula o valor sazonal da porcentagem antes de calcular o valor do nó multiplicando a porcentagem sazonalizada e o valor pai. Na Figura 174, o exemplo mostra como a porcentagem não sazonalizada de 50% se torna 60% depois de sazonalizada.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image288.png').default} alt="Figure 173: Seasonality in a number node" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 173: Seasonality in a number node</p>
  </div>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image289.png').default} alt="Figure 174: Seasonality in a percentage node" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 174: Seasonality in a percentage node</p>
  </div>

  - Se um usuário marcar “A alteração manual afeta o mês futuro”, o valor manual adicionado ao final do mês será transferido para o início do mês seguinte.
  - Se nenhum desses campos for relevante, os usuários podem desmarcar “Mostrar alteração manual” ou “Mostrar sazonalidade e alteração manual” para ocultar essas colunas.

**Exemplos de modelagem:**

<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
  <li style={{ marginBottom: '15px' }}>
    <strong>Crescimento Simples</strong> (linear #) - o exemplo abaixo mostra um crescimento populacional a cada mês em 500/mês de janeiro de 2022 a dezembro de 2024.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image290.png').default} alt="Simple Growth (linear #)" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Perda Simples</strong> (linear #) - o exemplo abaixo mostra desgaste a cada mês em 100/mês de janeiro de 2022 a dezembro de 2024. QAT utiliza um número negativo para denotar uma diminuição ou perda.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image291.png').default} alt="Simple Loss (linear #)" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Crescimento Simples</strong> (% linear - o exemplo abaixo mostra um crescimento populacional constante a cada mês em 2% de janeiro de 2022 a dezembro de 2024. QAT calculou que essa mudança aumentará a população em 108,64 a cada mês.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image292.png').default} alt="Simple Growth (linear %)" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Crescimento Simples</strong> (% exponencial) - o exemplo abaixo mostra um crescimento populacional de 1% a cada mês, de janeiro de 2022 a dezembro de 2024. Como o crescimento é exponencial, a mudança difere a cada mês.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image293.png').default} alt="Simple Growth (exponential %)" style={{ width: '100%' }} />
    </div>
    <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '5px' }}>QAT calculates this change to be 54.32 in Jan-22 month,</li>
      <li style={{ marginBottom: '5px' }}>QAT calculates this change to be 54.86 in Feb-22 month, and</li>
      <li>QAT calculates this change to be 55.41 in Mar-22</li>
    </ul>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Perda plurianual</strong> - o exemplo abaixo mostra uma taxa diferente de desgaste (perda) a cada ano. O ano 1 (janeiro de 2022 a dezembro de 2022) diminui a população em 1% ou 54,32 a cada mês, o ano 2 (janeiro de 2023 a dezembro de 2023) diminui a população em 2% ou 95,6 a cada mês, etc. QAT utiliza um número negativo para denotar uma diminuição ou perda.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image294.png').default} alt="Multi-year Loss" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Transferência</strong> - o exemplo abaixo mostra uma transferência de 250 pacientes por mês durante um ano, janeiro de 2022 a dezembro de 2022, do nó atual (Adultos 1ª Linha) para outro nó (Adultos 2ª Linha). Esta transferência também aparecerá no outro nó (2ª linha para adultos) esmaecida para indicar uma alteração não editável.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image295.png').default} alt="Transfer" style={{ width: '100%' }} />
    </div>
  </li>
</ul>

### <img src={require('@site/static/img/media/image287.png').default} alt="calculator" style={{ width: '16px', verticalAlign: 'middle', marginRight: '8px' }} /> Calculadora de modelagem:

Clique na calculadora de modelagem <img src={require('@site/static/img/media/image287.png').default} alt="calculator" style={{ width: '16px', verticalAlign: 'middle' }} /> se precisar de ajuda para calcular a taxa de variação mensal. A calculadora de modelagem **Valor/Alteração Final** está disponível para todos os nós, exceto **Nós de Agregação**, e a calculadora de modelagem **Meta Anual** está disponível apenas para **Nós de Número**. Comece selecionando um **Tipo de modelagem** (Número linear, % linear ou % exponencial) e, em seguida, um **Tipo de meta** (Valor/mudança final ou Meta anual):

<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
  <li style={{ marginBottom: '15px' }}>
    <strong>Valor/alteração final</strong>: use isto se você tiver um valor alvo (não cumulativo) ou alteração total desejada durante um período específico, em vez de uma taxa de alteração mensal conhecida.
    <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '10px' }}>The <strong>Start Date</strong> and <strong>Target Date</strong> will be filled in based on the original inputs for Start date and End date in the modeling table, which are by default, based on the forecast period. The user can change these if desired. These two dates will flow back into the modeling table.</li>
      <li style={{ marginBottom: '10px' }}>The <strong>Start Value</strong> is the node value at beginning of the month for the <strong>Start Date</strong>, as calculated by QAT. In other words, the <strong>Start Value</strong> is the node value before any modeling changes occur. This field is calculated and cannot be directly changed by the user. If the <strong>Start Date</strong> is the month after the “Month” on the <strong>Node Data</strong> tab, then the <strong>Start Value</strong> is equal to the "Node Value” provided by the user on the <strong>Node Data</strong> tab.</li>
      <li style={{ marginBottom: '10px' }}><strong>Period</strong> is calculated as <strong>Target Date</strong> - <strong>Start Date</strong> (in months). This value is not displayed in the front-end of QAT, but is used in the formulas below.</li>
      <li style={{ marginBottom: '10px' }}>Based on the available data or assumptions, enter data in **one** of the following fields: <strong>Target Ending Value</strong>, <strong>Target Change (%)</strong> or <strong>Target Change (#)</strong></li>
      <li style={{ marginBottom: '10px' }}>After an input is developed, the other fields will be automatically populated, as well the final <strong>'Calculated Month-on-Month Change'</strong>.</li>
      <li>When user clicks 'Accept', the <strong>Monthly Change (% or #)</strong> will be populated back in the main modeling table, based on the formulas below. All negative changes will be displayed as “decrease” and positive changes displayed as “increase”, with the number shown in absolute value.</li>
    </ol>
  </li>
</ul>

Se o usuário inserir **Valor Final Alvo:**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (%)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Exponential (%)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Target Ending Value - Start Value) / Start Value</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Ending Value - Start Value</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Month-on-Month Change</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Target Ending Value - Start Value) / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(((Target Ending Value - Start Value) / Period) / Start Value) * 100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>((Target Ending Value / Start Value) ^ (1 / Period) - 1) * 100</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Change (#) / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
  </tbody>
</table>

Se o usuário inserir **Alteração de meta (%):**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (%)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Exponential (%)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Ending Value</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Start Value + (Start Value * Target Change (%)/100)/100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Ending Value - Start Value</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Month-on-Month Change</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Start value * Target Change (%)) / 100 / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(((Target Ending Value - Start Value) / Period) / Start Value) * 100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>((Target Ending Value / Start Value) ^ (1 / Period) - 1) * 100</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Change (#) / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
  </tbody>
</table>

Se o usuário inserir **Target Change (#):**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Ending Value</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Start Value + Target Change (#)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Target Ending Value - Start Value) / (Start Value * 100)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Month-on-Month Change</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Change (#)/ Period</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Change (#) / Period</td>
    </tr>
  </tbody>
</table>

- **Meta Anual:** Use isto se você tiver valores de meta (acumulados ao longo de um ano). Em vez de simplesmente dividir as metas anuais por 12, o que cria um padrão escalonado, a calculadora ajudará a fornecer uma previsão suave.

  <div style={{ margin: '20px 0' }}>
    <img src={require('@site/static/img/media/image297.png').default} alt="Annual Target Graph" style={{ width: '100%' }} />
  </div>

  <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
    <li style={{ marginBottom: '10px' }}>
      Select the first month of your target and the number of years of targets available.
      <ul style={{ listStyleType: 'square', paddingLeft: '20px', marginTop: '5px' }}>
        <li>QAT will autofill in the yearly rows in the table based on the chosen first month of target, assuming targets are for 12-month periods.</li>
      </ul>
    </li>
    <li style={{ marginBottom: '10px' }}>In the table, enter figures for the year before the target (the actual) and each target year.</li>
    <li style={{ marginBottom: '10px' }}>After data entry, click “Calculate” (see below for calculation approach and formulas).</li>
    <li style={{ marginBottom: '10px' }}>Review the differences between the desired targets and the QAT calculated numbers. If differences are large, consider if the rate of change follows a linear or exponential pattern and change the **Modeling Type** (Linear #, Linear %, or Exponential %) and re-calculate if needed.</li>
    <li>
      When user clicks “Accept,” QAT populates the calculated values in two places:
      <ul style={{ listStyleType: 'square', paddingLeft: '20px', marginTop: '5px' }}>
        <li style={{ marginBottom: '5px' }}>Node Value tab - Starting Month and Starting Value</li>
        <li>Modeling/Transfer tab – one row is created per 12-month period after the Starting Value. Note that these are not the same periods as the Target Years (see below).</li>
      </ul>
    </li>
  </ol>

**Abordagem de cálculo da meta anual:** O QAT pressupõe que 1/12 do valor real anual foi alcançado no ponto médio do ano real e 1/12 das metas anuais será alcançado no ponto médio de cada ano-alvo. O QAT então interpola efetivamente entre esses pontos médios calculando uma taxa de mudança mensal linear ou exponencial. Esta taxa de variação mensal é então aplicada a ambos os anos – a segunda metade do primeiro ano e a primeira metade do segundo ano. Para conseguir isso, o QAT calcula os seguintes campos:

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Field</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Explanation / Formula</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Annual Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Change from previous year. Calculated for each year after the first year.<br/>
        = (Current Year Value - Previous Year Value) / (Previous Year Value)
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (%) / Monthly Change (#)*</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Exponential Rate = (Year 2 Value/Year 1 Value)^ (1/12) -1<br/>
        Linear Rate = Annual Change / 12
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Node Month**</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>= n-7, where n is the first month of the target.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Node Value**</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Assumed to be the first value (the actual value) provided by the user divided by 12, since this is assumed to be the midpoint of the year.<br/>
        = Year Value/12
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Total</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Beginning with the Node Month and Node Value, and applying the Monthly Change (% or #), QAT calculates each monthly value, then provides sums the values across 12-month periods.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Difference (Target vs Calculated, #)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Calculated for each year after the first Actual year. This difference will be large if the annual change varies significantly between years.<br/>
        = Calculated Total – Target
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Difference (Target vs Calculated, %)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Calculated for each year after the first Actual year. This difference will be large if the annual change varies significantly between years.<br/>
        = (Calculated Total - Target) / Target.
      </td>
    </tr>
  </tbody>
</table>

<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '5px' }}>
  * Esses valores não aparecem na seção ‘Calculadora de modelagem’, mas são preenchidos na tabela do nó de modelagem/transferência superior depois que o usuário clica em “aceitar”.<br />
  ** Esses valores não aparecem na seção ‘Calculadora de modelagem’, mas são preenchidos nos campos do nó principal após o uso clicar em “aceitar”.
</p>

### e. Extrapolação

**Objetivo:** A guia de extrapolação permite que os usuários prevejam valores futuros de nós extrapolando a partir de valores passados. Esta funcionalidade está disponível apenas para nós numéricos e é semelhante à tela ‘Extrapolação’, mas é conduzida em um nó de árvore. Para um determinado nó, os usuários devem escolher entre modelagem/transferência ou extrapolação, mas não podem usar ambas ao mesmo tempo. Mais detalhes sobre métodos de extrapolação podem ser encontrados em [Extrapolação](#extrapolação).

**Usando esta guia:**

1. Primeiro, marque a caixa de seleção ao lado de ‘Extrapolar’ no nó Adicionar/Editar.
2. Selecione ‘Mostrar dados’.
3. Na tabela, insira quaisquer valores reais e taxas de relatório para seus dados anteriores. A partir desta entrada, o QAT calculará os valores históricos ajustados. Se você precisar alterar o período dos dados, altere o mês inicial e final na parte superior do nó em ‘Mês inicial para dados históricos’.
4. Se houver dados faltantes, use o botão verde Interpolar para preencher os dados faltantes. A interpolação só pode ser usada se houver dados faltantes em ambos os lados do mês.
5. (opcional) Selecione quais métodos de previsão você deseja exibir e atualize os parâmetros de extrapolação.
6. Clique em “Extrapolar”. Todas as previsões selecionadas serão exibidas na tabela principal e nos gráficos.

**NOTA:** Os valores mínimos necessários para obter gráficos e relatórios corretos para os diversos recursos estão abaixo:

* TES, Holt-Winters: Necessita de pelo menos 24 meses de dados de consumo real
* ARIMA: Precisa de pelo menos 14 meses de dados reais de consumo
* Média móvel, semimédias e regressão linear: precisa de pelo menos 3 meses de dados de consumo real

7. (opcional) Na tabela, adicione quaisquer alterações manuais (+/-). Essas alterações são adicionadas ou subtraídas sobre os valores extrapolados.
8. Após revisar a tabela principal, a tabela de erros e os gráficos, selecione o método de previsão desejado na parte inferior da tela e clique em “Salvar”.
9. Observação: Se você alterar alguma entrada, será necessário extrapolar novamente para atualizar os cálculos, antes de selecionar um novo método.

### f. Técnicas Avançadas

**Dicas para casos de uso específicos:**

- **Uso do produto atrasado ou faseado?** Às vezes, o consumo do produto é atrasado em relação aos demais níveis superiores da árvore. No nó Unidade de Previsão relevante, use o campo Atraso para indicar esse atraso.

  - Por exemplo, se o uso do produto começar 2 meses após as datas do nó pai, insira “2” neste campo.
  - Este campo também pode ser usado onde o produto muda ao longo do tempo - por exemplo, se as unidades de previsão A, B e C forem usadas em secessão por dois meses de cada vez, você pode configurar sua árvore com Unidade de previsão A (discreta para 2 meses, atraso = 0), Unidade de previsão B (discreta para 2 meses, atraso = 2), Unidade de previsão C (discreta para 2 meses, atraso = 4).

- **Uso discreto do produto por um longo período de tempo? (previsão do primeiro mês vs. previsão mês a mês):** O QAT tem a opção de calcular o uso discreto do produto em nós de unidades de previsão de duas maneiras:

  - antecipando a quantidade discreta consumida por paciente no mês 1 (escolha "Calcular" = "Tudo no primeiro mês") ou
  - desagregando a quantidade discreta consumida por paciente por mês (escolha "Calcular" = "Mês a Mês").
  - Por padrão, o QAT assumirá “Tudo no Primeiro Mês” (frontloading); no entanto, os usuários têm a opção de selecionar "Mês a mês" para o método alternativo. Este cálculo alternativo pode ser útil para Unidades de Planeamento (UP) que tenham padrões de baixo consumo durante um período de tempo ou se se aplicarem a um grupo de pacientes recém-iniciados. Por exemplo, se uma mulher grávida for obrigada a tomar um suplemento nutricional uma vez por mês durante a gravidez (nove meses), por padrão o QAT calcularia nove suplementos no mês 1 (fornecimento prévio). Sem o fornecimento prévio, o QAT calcularia um suplemento no mês 1, um suplemento no mês 2, um suplemento no mês 3 e assim por diante.

Cálculo de exemplo (tudo no primeiro mês vs. mês a mês) – nenhuma modelagem aplicada:

o **Todos no primeiro mês:** São 10 pacientes que necessitam de 1 frasco para tratamento ao longo de 6 meses; portanto, o número de unidades de planejamento por paciente = 6. Ao calcular “Tudo no primeiro mês”, o QAT antecipará a quantidade prevista e assumirá que todos os 60 frascos (10 pacientes * 6 frascos por paciente) são previstos a cada mês.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jan</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Feb</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Mar</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Apr</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>May</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jun</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jul</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Aug</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Sep</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Oct</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Nov</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Dec</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong># of Patients</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Total Forecasted</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
  </tbody>
</table>

<p style={{ fontStyle: 'italic', marginTop: '5px' }}>Total Forecasted in 6-month Period = 360 Bottles</p>

o **Mês a mês:** Há 10 pacientes que necessitam de 1 frasco para tratamento ao longo de 6 meses; portanto, o número de unidades de planejamento por paciente = 6. Com “Mês a mês”, o QAT distribuirá uniformemente a quantidade prevista ao longo do período. Assim, o QAT assumirá que estão previstos 10 frascos no mês 1 (10 pacientes * 1 frasco). No mês 2, esses mesmos 10 pacientes retornarão cada um para buscar outro frasco, enquanto um novo grupo de 10 pacientes também precisará de 1 frasco cada [(10 pacientes * 1 frasco) + (10 pacientes * 1 frasco)] para um total de 20 frascos previstos no mês 2, e assim por diante.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jan</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Feb</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Mar</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Apr</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>May</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jun</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jul</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Aug</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Sep</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Oct</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Nov</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Dec</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong># of Patients</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Total Forecasted</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>20</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>30</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>40</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>50</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>50</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>40</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>30</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>20</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
  </tbody>
</table>

<p style={{ fontStyle: 'italic', marginTop: '5px' }}>
  Total previsto no período de 6 meses = 160 garrafas<br />
  Total previsto no período de 12 meses = 360 garrafas
</p>

Exemplo de cálculo (Tudo no Primeiro Mês vs. Mês a Mês) – modelagem aplicada:
o Existem 10 pacientes que necessitam de 1 frasco para tratamento ao longo de 6 meses; assim, o número de Unidades de Planejamento por paciente = 6. Espera-se também um aumento de 5 novos pacientes por mês. Usando a lógica acima para calcular “Todos no primeiro mês” e “Mês a mês”, o QAT calculará o seguinte número de frascos a serem distribuídos durante um período de 12 meses:

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jan</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Feb</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Mar</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Apr</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>May</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jun</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jul</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Aug</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Sep</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Oct</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Nov</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Dec</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong># of Patients</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>15</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>20</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>25</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>30</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>35</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>All in the First Month</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>90</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>120</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>150</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>180</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>210</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month-by-Month</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>25</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>45</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>70</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>135</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>125</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>110</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>90</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>65</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>35</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
  </tbody>
</table>

<p style={{ fontStyle: 'italic', marginTop: '5px' }}>
  Total previsto (tudo no primeiro mês) = 810 garrafas<br />
  Total previsto (mês a mês) = 810 garrafas
</p>

- **Deseja um valor específico para o número de unidades de planejamento por paciente?** Um usuário pode especificar um valor específico para o número de unidades de planejamento por unidade* (discreta) ou por unidade* por mês (contínuo) escolhendo “Não” para “Usar cálculo automático do QAT para número de unidades de planejamento?” A menos que seja substituído por um usuário, o QAT utilizará o cálculo automático por padrão. (* Neste caso, a unidade pode ser paciente, teste, cliente, etc.)

  - **Exemplo discreto:** Se cada 1 frasco de bupivacaína for usado a cada 5 procedimentos, então o número de unidades/procedimentos de previsão é de 0,2 frascos. Com uma unidade de planejamento de 5 frascos, o QAT calcula que 0,2/5 = 0,04 unidades de planejamento são usadas por procedimento. No entanto, um usuário pode alternar o botão de opção para “Não” e optar por substituir isso com conhecimento das taxas de uso reais e inserir 0,05 unidades de planejamento. Sempre adicione uma nota ao substituir o cálculo do QAT.

    <div style={{ margin: '20px 0' }}>
    <img src={require('@site/static/img/media/image298.png').default} alt="Discrete Example Override" style={{ width: '100%' }} />
    </div>

  - **Exemplo contínuo:** Se um paciente precisar de 1 comprimido por dia indefinidamente do frasco de 30 comprimidos TLD, o QAT calculará isso como 30,4167/mês ou 1,0139/dia para contabilizar meses que têm 30 dias, 31 dias, 28 dias, etc. forneça o valor de substituição de 1. Sempre adicione uma nota ao substituir o cálculo do QAT.

    <div style={{ margin: '20px 0' }}>
    <img src={require('@site/static/img/media/image299.png').default} alt="Continuous Example Override" style={{ width: '100%' }} />
    </div>

- **Usos repetidos de previsão?** Se vários nós da unidade de previsão compartilharem as mesmas configurações, considere usar a [tela Modelo de uso](#c-usage-templates) para salvar seus usos comuns e, em seguida, usar o campo “Copiar do modelo” para preencher os campos nos nós da unidade de previsão.
- **Valores de nós agregados para cálculos adicionais? (Nós de funil):** Em alguns casos, os usuários podem querer vincular o valor de um nó a outro nó ou agregar vários nós em um nó antes de adicionar nós adicionais abaixo. ¶¶Observe que este recurso é diferente de vincular nós por meio de modelagem/transferência, que serve para vincular alterações em um nó a alterações em outro nó, em vez de agregação. Isso também é diferente de usar nós de agregação, que agregam apenas para cima e não permitem cálculos adicionais¶¶

**Casos de uso:**

  - **Os testes de carga viral** são utilizados por diversas populações, mas todas as populações utilizarão a mesma combinação de instrumentos. Comece com uma árvore demográfica que termine em múltiplas populações. As diferentes populações precisam ser somadas e os vários ramos do instrumento ficam sob a soma.
  - **Pacientes com malária** entram no sistema de saúde através de diferentes canais (agentes comunitários de saúde versus unidades de saúde pública), que possuem algoritmos de teste diferentes, mas quando um paciente apresenta resultado positivo, recebe a mesma “combinação” de tratamentos. As diferentes populações com resultados positivos precisam ser somadas e os vários regimes de tratamento ficam abaixo da soma
  - Vários **Métodos Contraceptivos** diferem na forma como são calculados, mas todos derivam da mesma população do país, que precisa ser atualizada a cada quantificação, e pode ter modelagem ao longo do tempo. Uma árvore pode ser construída para implantes e injectáveis, e outra construída para preservativos, mas as duas árvores estão ligadas entre si no nó da população do país para que os seus valores permaneçam consistentes

**Como vincular valores**

1. Indique (em # ou % nós) que eles são "nós de origem"

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image300.png').default} alt="Figure 175 Indicating source nodes" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 175 Indicating source nodes</p>
  </div>

2. Crie novos "nós de funil" e selecione de quais nós de origem agregar. Observação: os nós do funil podem “ficar” em qualquer lugar da árvore – ou seja, você pode transformar o primeiro nó de uma árvore em um nó de funil ou construir nós de funil sob qualquer nó de agregação, número ou porcentagem. Isso ocorre porque o valor dos nós do funil não deriva de seus pais, mas das fontes às quais estão vinculados.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image301.png').default} alt="Figure 176 Adding funnel nodes" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 176 Adding funnel nodes</p>
  </div>

3. Adicione quaisquer nós "filhos" sob os nós do funil - provavelmente serão os nós do produto. Os nós de funil permitem muita flexibilidade, pois podem ser usados em uma ou em várias árvores, podem ser usados em qualquer nível e

   1. O usuário pode vincular **internamente em uma árvore**

      <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image302.png').default} alt="Link internally within one tree" style={{ width: '100%' }} />
      </div>

   2. Os usuários podem vincular **externamente entre árvores** (nós de origem em uma árvore, nós de funil em uma árvore diferente)

      <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image303.png').default} alt="Link externally between trees" style={{ width: '100%' }} />
      </div>

### B2. Validações de modelagem

**Objetivo:** Depois que uma árvore for construída, os usuários poderão usar a tela Validação de modelagem para visualizar a mudança ao longo do tempo. Isso é útil se a previsão tiver aplicado modelagem/transferências em um ou mais nós modais.

**Usando esta tela:**
* Vá para 'Tree Forecast' e selecione 'Validações de Modelagem'.
* Selecione os filtros de tela usando os menus suspensos.
  * Programa: Você deve estar online para visualizar as versões do programa no servidor. Quando estiver off-line, apenas programas locais baixados poderão ser selecionados.
  * Nível:
    * Ao criar uma árvore, é útil renomear os níveis. O menu suspenso 'nível' nesta tela mostrará os diferentes nomes de nível que você escolheu. Isso torna mais fácil identificar o que os dados estão mostrando, em vez de usar o nível 0,1,2,3, etc.
    * A lista suspensa de níveis agrupará automaticamente a Unidade de Planejamento e a Unidade de Previsão em seus próprios níveis, caso esses nós estejam em níveis separados de sua árvore. Portanto, se você também tiver um nível chamado 'Unidade de Previsão', selecionar o nível 'FU' e o nível 'Unidade de Previsão' preencherá os mesmos resultados. No entanto, se você tiver uma unidade de previsão no nível 4 e outra no nível 5, o nível ‘FU’ mostrará ambas.
  * **Exibição do eixo X:** Os dados podem ser mostrados por meses (padrão) ou agregados por ano civil ou ano fiscal. (Ver Figura 154)
    * Ao agregar por ano, é útil usar o recurso 'Mostrar dados' para confirmar quais meses estão incluídos no gráfico agregado e para confirmar se há dados para todos os meses esperados
    * Ao agregar por anos fiscais - você deve selecionar o mês em que seu ano fiscal começa. Por exemplo, se o seu ano fiscal de 2023 for de outubro de 2022 a setembro de 2023 - você pode selecionar a opção que . O QAT sempre mostrará os exemplos usando o ano civil atual.
  * **Exibição do eixo Y:** Os dados podem ser mostrados por número de unidades, bem como por porcentagem. (Ver Figura 149 versus Figura 147)
* Para visualizar os dados tabulares, selecione o botão azul ‘Mostrar Dados’ no canto inferior direito da tela.
* Ao visualizar o gráfico, o usuário pode ocultar elementos clicando na legenda. Para reexibir, clique novamente nessa parte da legenda.
* Esta tela pode ser exportada em formato CSV e PDF selecionando o(s) ícone(s) no canto superior direito.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image304.png').default} alt="Figure 177: Modeling Validation Screen (by number and month)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 177: Modeling Validation Screen (by number and month)</p>
  </div>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image305.png').default} alt="Figure 178: Modeling Validation Screen (by percentage and month)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 178: Modeling Validation Screen (by percentage and month)</p>
  </div>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image307.png').default} alt="Figure 179: Modeling Validation Screen (by Calendar Year vs by Fiscal Year)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 179: Modeling Validation Screen (by Calendar Year vs by Fiscal Year)</p>
  </div>

### B3. Validações de produto

**Objetivo:** Depois que uma árvore for construída, os usuários poderão usar a tela Validações de Produto para verificar o uso dos produtos na árvore de previsão. Isso é útil para ver vários produtos ao mesmo tempo.

**Usando esta tela:**
* Vá para 'Tree Forecast' e selecione 'Validações de Produto'.
* Selecione os filtros de tela usando os menus suspensos.
  * Somente programas locais baixados podem ser selecionados nesta tela.
* Esta tela pode ser exportada em formato CSV e PDF selecionando o(s) ícone(s) no canto superior direito.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image308.png').default} alt="Figure 180: Product Validations" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 180: Product Validations</p>
  </div>

### B4. Usando modelos

####a. Modelos de árvore

**Objetivo:** permitir que os usuários comecem a projetar sua árvore de previsão a partir de um modelo pré-estabelecido. Nota: os modelos de árvore são gerenciados no nível de região (global).

**Usando modelos de árvore:**
O usuário pode adicionar modelos de árvore em dois locais diferentes: tela ‘Gerenciar árvore’ ou tela ‘Modelos de árvore’. Nota: um programa deve ser baixado para criar um modelo de árvore.

**Método 1:**

1. Navegue até ‘Previsão de Árvore’ → ‘Gerenciar Árvores’.
2. No canto superior direito da tela, clique no menu suspenso azul ‘Criar ou Selecionar’ e selecione o modelo de árvore desejado.
3. No pop-up “Detalhes da árvore”:

   uma. Confirme ou atualize as seções Programa, Método de previsão, Nome da árvore, Regiões e Notas.

   b. Se houver alguma unidade de planejamento que esteja no modelo, mas esteja faltando no programa, o QAT irá sinalizá-la em uma seção inferior deste pop-up (veja a Figura 150), onde uma tabela exibe todas as unidades de planejamento faltantes.

      eu. Se houver unidades de planejamento ausentes no programa (incluindo aquelas inativas ou desmarcadas para Tree Forecast) e são recomendadas para utilização do modelo de árvore escolhido, os usuários podem clicar no botão “Adicionar/atualizar unidades de planejamento selecionadas” e o QAT adicionará automaticamente as unidades de planejamento ao programa do usuário.

      ii. Se o usuário desejar criar a árvore sem as unidades de planejamento recomendadas, poderá clicar no botão “Criar árvore sem adicionar unidades de planejamento” e as unidades de planejamento não serão adicionadas ao programa do usuário. Isso pode ser útil quando um usuário deseja utilizar uma estrutura em árvore, mas possui diferentes unidades de planejamento que gostaria de prever.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image309.png').default} alt="Figure 181: Tree Details Pop-up with 'Missing Planning Units'" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 181 Tree Details Pop-up with 'Missing Planning Units'</p>
  </div>

         c. Observe que todos os detalhes da árvore podem ser atualizados posteriormente clicando no ícone de engrenagem <img src={require('@site/static/img/media/image310.png').default} alt="gear icon" style={{ height: '1.2em', verticalAlign: 'middle' }} /> próximo ao menu suspenso da árvore e as unidades de planejamento podem ser adicionadas navegando até a tela ‘Atualizar unidades de planejamento’.

4. O QAT criará automaticamente o modelo de árvore para o programa do usuário e navegará até a tela ‘Construir Árvore’.

**Método 2:**

1. Navegue até ‘Previsão de árvore’ → ‘Modelos de árvore’.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image311.png').default} alt="Figure 182: Tree Templates Screen" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 182: Tree Templates Screen</p>
  </div>

2. Revise as diferentes opções de modelo de árvore, prestando atenção especial ao Método de Previsão e ao tipo de Nó Inicial. Os usuários podem clicar em qualquer linha para revisar o modelo de árvore, sua estrutura e vários nós.

   um. Observação: os nós que começam com um nó Porcentagem são usados ​​especificamente para modelos de ramificação e não podem ser usados ​​como um modelo de árvore. Os usuários devem primeiro criar um nó inicial (Número ou Agregação), antes de adicionar um modelo de ramificação (para obter mais informações, consulte [Modelos de ramificação](#b-branch-templates)).

3. Depois que o usuário revisar o modelo de árvore, ele poderá clicar em “Usar este modelo” no canto superior direito da tela.
4. Continue seguindo as etapas 3 a 4 do Método 1 para finalizar a criação do modelo de árvore.

**Recomendações gerais sobre modelos de árvore:**

- Em geral, os modelos de árvore contêm valores de “0” e “0%” em todos os níveis, exceto nos nós das unidades de previsão e planejamento. O usuário pode então personalizar a árvore com base em seus requisitos – por exemplo:

  - Clique em cada nó para editar os valores para valores reais.
  - Renomeie qualquer título de nó.
  - Substitua quaisquer produtos por:

    - editar o nó da unidade de previsão – mas certifique-se de abrir também o nó da unidade de planejamento filho e selecionar a unidade de planejamento correta.
    - excluir os nós da unidade de previsão e planejamento e adicionar novos.

  - Copie quaisquer nós ou ramificações (o usuário pode copiar vários nós copiando o topo de uma ramificação de nós).
  - Exclua quaisquer nós ou ramificações.
  - Adicione notas para explicar quaisquer fontes de informação.

- Se houver um modelo de árvore que beneficie a comunidade QAT, os usuários podem solicitá-lo através do [Sistema de suporte técnico de tickets QAT](05-getting-started.md#qat-helpdesk-and-tickets).

#### b. Modelos de filial

**Objetivo:** Os modelos de ramificação permitem que os usuários adicionem um modelo de árvore, incluindo a estrutura e todos os vários nós filhos, como uma ramificação dentro de uma árvore pré-existente. Nota: os modelos de ramificação/árvore são gerenciados no nível de região (global). Se houver um modelo de árvore/ramo que beneficiaria a comunidade QAT, os usuários poderão solicitá-lo por meio do [Sistema de suporte técnico de tickets QAT](05-getting-started.md#qat-helpdesk-and-tickets).

**Usando modelos de ramificação:**

1. Os usuários devem primeiro revisar as diferentes opções de modelo de árvore/ramo, prestando atenção especial ao método de previsão e ao tipo de nó inicial na tela ‘Previsão de árvore’ → ‘Modelo de árvore’.
2. Navegue até ‘Previsões de árvores’ → ‘Gerenciar árvores’ e selecione a árvore desejada.
3. Clique no símbolo <img src={require('@site/static/img/media/image312.png').default} alt="branch template icon" style={{ height: '1.2em', verticalAlign: 'middle' }} />. Isso adicionará o modelo de ramificação como filho ao nó selecionado.

   um. Com base no nó pai escolhido, o QAT exibirá apenas modelos de ramificação que podem ser adicionados como filhos em potencial com base no nó inicial na tela ‘Modelo de árvore’ (consulte [Tipos e funções de nós](#a-node-types--functions) para as opções de filhos em potencial para cada tipo de nó).

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image313.png').default} alt="Figure 183: Adding a Branch Template" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 183: Adding a Branch Template</p>
  </div>

4. Assim que o modelo de filial for escolhido, clique em “Adicionar filial”.
5. Se houver alguma unidade de planejamento que esteja no modelo de filial, mas esteja faltando no programa, o QAT irá sinalizá-la em uma seção inferior deste pop-up (veja a Figura 153), onde uma tabela exibe todas as unidades de planejamento faltantes.

   um. Se houver unidades de planejamento ausentes no programa (incluindo aquelas inativas ou desmarcadas para Tree Forecast) e são recomendadas para utilização do modelo de ramificação escolhido, os usuários podem clicar no botão “Adicionar/atualizar unidades de planejamento selecionadas” e o QAT adicionará automaticamente as unidades de planejamento ao programa do usuário.

   b. Se o usuário desejar adicionar a filial sem as unidades de planejamento recomendadas, poderá clicar no botão “Adicionar filial sem adicionar unidades de planejamento” e as unidades de planejamento não serão adicionadas ao programa do usuário. Isso pode ser útil quando um usuário deseja utilizar uma estrutura de filial, mas possui unidades de planejamento diferentes que gostaria de prever.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image314.png').default} alt="Figure 184: Adding PUs from a Branch Template to a Program" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 184: Adding PUs from a Branch Template to a Program</p>
  </div>

#### c. Modelos de uso {#c-usage-templates}

**Objetivo:** Os modelos de uso permitem que o usuário preencha os detalhes de um nó de unidade de previsão de uma só vez. Os modelos de uso podem ser globais ou específicos do programa. Observe que os modelos específicos do programa são gerenciados pelos administradores do programa de previsão. O usuário deve estar online para gerenciar modelos, mas pode estar offline para usá-los.

**Para usar modelos de uso:**

  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
    <div style={{ flex: '1', minWidth: '150px', maxWidth: '35%' }}>
      <img src={require('@site/static/img/media/image315.png').default} alt="Using a Usage Template in a forecasting unit node - dropdown" style={{ width: '100%' }} />
    </div>
    <div style={{ flex: '2', minWidth: '250px', maxWidth: '63%' }}>
      <img src={require('@site/static/img/media/image316.png').default} alt="Using a Usage Template in a forecasting unit node - fields" style={{ width: '100%' }} />
    </div>
  </div>
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 185: Using a Usage Template in a forecasting unit node</p>

1. Certifique-se de que o programa possua a unidade de planejamento relacionada ao modelo de uso. Lembre-se de que os modelos de uso são baseados na unidade de previsão, mas cada unidade de planejamento está relacionada a uma unidade de previsão específica. Por exemplo, se o programa tiver a unidade de planejamento “Lopinavir/Ritonavir 200/50 mg Comprimido, 120 Comprimidos”, todos os modelos de uso com a unidade de previsão associada “Lopinavir/Ritonavir 200/50 mg Comprimido” estarão disponíveis ao projetar a árvore.
2. Na tela Construir árvore, crie ou edite um nó de unidade de previsão existente (consulte a [Seção B1](#building-a-tree) para obter mais informações). Se estiver criando um novo nó, certifique-se de primeiro selecionar o tipo de nó como “unidade de previsão” e verifique novamente se os campos ‘mês’ e ‘porcentagem do pai’ estão corretos.
3. (opcional) Selecione uma categoria do Tracer para filtrar os modelos de uso disponíveis
4. Usando o menu suspenso “Copiar do modelo”, selecione os modelos de uso desejados
5. Todos os campos subsequentes serão preenchidos
6. Clique em “Atualizar” para salvar as alterações.

**Para gerenciar modelos de uso (somente administradores do programa de previsão):**

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image317.png').default} alt="Figure 186: Managing Usage Templates" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 186: Managing Usage Templates</p>
  </div>

1. Certifique-se de que o QAT esteja no modo online e navegue até Modelos de árvore &gt; Modelos de uso. Os modelos globais ficarão esmaecidos e não poderão ser editados.
2. Para criar um novo modelo de uso, clique em “adicionar linha”. Para editar um modelo de uso existente, vá para a próxima etapa.
3. Preencha ou edite a linha do modelo de uso conforme desejado

- A coluna “nome de uso” é o que aparecerá no menu suspenso.
   - Utilize a barra de rolagem horizontal para acessar todos os campos da tabela.
   - Use as dicas de ferramentas (passe o mouse sobre os ícones “i”) para guiá-lo
   - Use a penúltima coluna “Uso em palavras” para verificar se tudo foi digitado corretamente.
   - Para produtos usados ​​mais de uma vez, existe uma calculadora para ajudá-lo a converter intervalo em frequência. Clique com o botão direito na linha que você está editando para abrir a tela “Calcular frequência de uso”. Insira o intervalo e a unidade de frequência desejada (dia, mês, semana ou ano) e o número e a unidade de frequência calculada serão preenchidos na tabela.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image318.png').default} alt="Figure 187: 'Calculate Usage Frequency' screen" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 187: "Calculate Usage Frequency" screen</p>
  </div>

4. Clique em “Enviar” quando terminar.