---
id: forecasting-module-forecasting
title: "Forecasting Module: Forecasting"
sidebar_label: "Forecasting Module: Forecasting"
sidebar_position: 8
---
# Módulo de Previsão: Previsão

## Previsões de consumo

As previsões baseadas no consumo, que se baseiam em dados históricos de consumo, são mais úteis em programas maduros e estáveis, que dispõem de um fornecimento completo de unidades de planeamento e de dados fiáveis. Este método pode ser o preditor mais confiável do consumo futuro se o uso futuro for muito semelhante ao passado. Assim, um usuário deve ser capaz de extrapolar dados históricos (idealmente, mais de 24 meses de dados de consumo real mensal estão disponíveis) e os dados devem ser uma série de dados ao longo do tempo (ou seja, consumo real <u>a ajustado mensalmente </u>).

Existem quatro componentes básicos para uma previsão de consumo:

𝐹𝑜𝑟𝑒𝑐𝑎𝑠𝑡 ≅ 𝐵𝑎𝑠𝑒 + 𝑇𝑟𝑒𝑛𝑑 + 𝑆𝑒𝑎𝑠𝑜𝑛 + 𝑅𝑎𝑛𝑑𝑜𝑚

Diferentes modelos de extrapolação utilizarão diferentes métodos estatísticos para estimar estes diferentes componentes e produzir uma previsão. No QAT, os usuários seguirão três etapas para produzir uma previsão baseada no consumo:

1. > [**Importar/entrar**](#importinputting-actuals) dados de consumo real. Isso pode ser feito importando dados do módulo QAT Supply Planning ou inserindo dados manualmente.

2. > [**Ajustar**](#ajustes) dados de consumo real adicionando taxa de relatório e rupturas de estoque e/ou interpolando dados ausentes.

3. > [**Extrapolar**](#extrapolation) dados de consumo real para produzir uma previsão. QAT tem cinco métodos de extrapolação diferentes para escolher: médias móveis, semi-médias, regressão linear, suavização exponencial tripla (TES, Holt-Winters) e média móvel integrada auto-regressiva (ARIMA).

### Importar/Inserir dados reais

Existem duas maneiras pelas quais um usuário pode adicionar dados de consumo reais ao seu programa:

1. Importar dados de consumo real de um programa existente no módulo QAT Supply Planning, ou

2. Inserir dados manualmente na tela “Inserção de dados e ajustes” no módulo QAT Forecasting

**Etapas para importar dados do módulo QAT Supply Planning:**

1. > Navegue até a tela “Previsão Baseada em Consumo” à tela “Importar do Plano de Fornecimento QAT”

2. > Escolha o Programa de Previsão, os dados da Faixa de Consumo Real a importar, o programa Plano de Fornecimento e depois a versão do Plano de Fornecimento. _Observação: apenas programas de previsão que foram **baixados** no computador local do usuário estarão disponíveis no menu suspenso “Programa de previsão”. Consulte [Baixar/Excluir programa](03-managing-programs-and-versions.md#downloaddelete) para saber como baixar um programa para o computador local._

3. > Os usuários mapearão a Unidade de Planejamento do Plano de Fornecimento para a Unidade de Planejamento de Previsão. _Observação: somente as unidades de planejamento que foram adicionadas ao Programa de Previsão na tela “Atualizar Unidades de Planejamento” e para as quais marcamos a caixa de seleção de previsão de consumo estarão disponíveis no menu suspenso “Unidade de Planejamento de Previsão”. Consulte Módulo de previsão [Unidades de planejamento](07-forecasting-module-program-data.md#planning-units) para saber como adicionar unidades de planejamento a um programa de previsão._

4. > _Escolha “Não importar” no menu suspenso para quaisquer PUs que não correspondam automaticamente. Caso você tenha muitas PUs e queira selecionar “Não importar” para todas as unidades não mapeadas você pode marcar a caixa ‘Não importar todas as unidades de planejamento não mapeadas”_

> ![A screenshot of a computer Description automatically generated](/img/media/image239.png)

Figura 157: Etapa 1 para Importação de Dados de Consumo Real do Módulo de Planejamento de Fornecimento

5. > Os usuários escolhem qual região deve ser importada para o programa de previsão e também fornecem informações sobre a % do consumo real que deve ser importada para o programa de previsão  
    > ![A screenshot of a computer Description automatically generated](/img/media/image240.png)

Figura 158: Passo 2 para Importar Dados de Consumo Real do Módulo de Planejamento de Fornecimento

6. > A última etapa permitirá que os usuários verifiquem novamente os dados de consumo real do plano de abastecimento para garantir que estão importando a unidade de medida e os meses de dados corretos. Se os dados já existirem no programa de previsão, eles serão destacados em amarelo. Se um usuário importar dados destacados em amarelo, essa nova importação substituirá os dados que já existem no programa de previsão. Os usuários podem desmarcar manualmente os meses de dados que não serão importados, se desejarem.  
    > ![P2868#yIS1](/img/media/image241.png)

Figura 159: Etapa 3 para Importação de Dados de Consumo Real do Módulo de Planejamento de Fornecimento

7. > Clique em “Importar”.

**Etapas para inserir dados de consumo real manualmente**

1. Navegue até a tela “Previsão Baseada em Consumo” à tela “Inserção de Dados e Ajustes”.

2. Selecione o programa de previsão e o período de revisão desejado. Por padrão, o QAT pré-seleciona um intervalo de datas de 36 meses antes do início do período de previsão. Uma tabela não editável e todos os produtos relacionados a este programa de previsão são exibidos, juntamente com seus dados de consumo ajustados, caso você tenha inserido esses dados anteriormente; caso contrário, você verá células amarelas indicando que nenhum dado de consumo foi inserido. Por padrão, os produtos e o consumo são mostrados em unidades de planejamento. O usuário também pode expandir cada linha da tabela para exibir o consumo por região, caso esteja gerenciando um programa multirregional.

> ![P2876#yIS1](/img/media/image242.png)

Figura 160: Tabela superior na tela de entrada e ajustes de dados

3. Na tabela superior, clique em uma unidade de planejamento para exibir a tabela de dados detalhada abaixo dessa unidade de planejamento. A tabela de dados detalhada terá uma seção para cada região do seu programa.

4. A tabela de dados detalhada permite aos usuários adicionar, editar, ajustar ou excluir registros históricos de consumo.
    1. Se desejar inserir os dados manualmente, insira o consumo histórico de cada região e mês na linha ‘Consumo Real’.

    2. Se você importou dados do QAT, verá o consumo histórico importado na linha ‘Consumo Real’.

![P2882#yIS1](/img/media/image243.png)

Figura 161: Tabela de entrada manual de dados para consumo real

3. Por padrão, presume-se que os dados sejam inseridos na Unidade de Planejamento. No entanto, o usuário pode especificar a unidade apropriada para os dados detalhados clicando no link “alterar” sob o nome da Unidade de Planejamento e no pop-up subsequente, escolhendo inserir dados usando a unidade de planejamento, as quantidades da unidade de previsão (aplicando um fator de conversão gerenciado pelo domínio) ou outra unidade inserida pelo usuário (e fator de conversão).

![P2885#yIS1](/img/media/image244.png)

Figura 162: Botão para alterar a forma como os dados são inseridos manualmente para consumo real

![P2887#yIS1](/img/media/image245.png)

Figura 163: Pop-up para escolher como os dados são inseridos

5. Assim que o usuário inserir os dados na linha “Consumo Real” da tabela de dados inferior, clique em “Enviar” para salvar os lançamentos e visualizá-los no gráfico.
    1. Os usuários também podem copiar e colar dados de um Excel ou outros formatos tabulares na linha “Consumo real”.

![P2891#yIS1](/img/media/image246.png)

Figura 164: Exibição gráfica de dados de consumo real inseridos manualmente

### Ajustes

**<u>Purpose</u>:** Permite que os usuários preparem dados históricos de consumo antes de passar para a tela ‘Extrapolação’. O consumo real histórico pode ser quantidades vendidas, quantidades distribuídas ao usuário ou quantidades emitidas por instalações de armazenamento. Nesta tela, os usuários podem ajustar os dados históricos de consumo que foram inseridos manualmente nesta tela ou que foram importados de um programa de plano de fornecimento QAT (se desejar importar, prossiga primeiro para a tela ‘Importar do Plano de Fornecimento QAT’).

**<u>Usando esta tela</u>:**

1. Existem três maneiras de ajustar os dados:
    1. **Ajuste para subnotificação**: O valor padrão é 100% de relatórios todos os meses. O usuário pode alterar isso para o valor correto. O QAT calculará o consumo ajustado por subnotificação. O cálculo pressupõe que as instalações que não reportaram qualquer consumo tiveram a mesma taxa de consumo que as que o fizeram.

2. **Ajuste para rupturas de estoque**: Para dados importados, o número de dias de ruptura de estoque é obtido do programa de plano de fornecimento QAT, se os dados forem coletados. O valor padrão para dias de ruptura é zero dias (produto assumido sempre em estoque). O usuário pode alterar para o valor correto e o QAT calculará o consumo ajustado por ruptura de estoque. O cálculo pressupõe que os dias em que o produto esteve em estoque teriam a mesma taxa de consumo do restante do tempo em que o produto esteve em estoque. O valor padrão para o número de dias em um mês é baseado nos dias corridos, mas os usuários podem ajustar o número de dias usados ​​para o cálculo de falta de estoque em ‘Atualizar configurações de versão’.

> **\*Taxa de ruptura de estoque** = Estoque esgotado (dias)/ (\# de dias no mês).\*
>
> **\*Consumo Ajustado** = Consumo Real / Taxa reportada / (1 – Taxa de ruptura de estoque)\*
>
> Por exemplo, para um determinado mês, um produto teve um consumo de 1.000 unidades, ficou fora de estoque por 5 dos 31 dias do mês e a taxa de reporte foi de 98%:
>
> **\*Taxa de falta de estoque** = 5 dias de falta de estoque / 31 dias em um mês = 16,1%.\*
>
> **\*Consumo ajustado** = 1.000 unidades / Relatório de 98% / (1 – 16,1%) = 1.217 unidades.\*

3. **Ajustar para valores faltantes**: Clique no botão verde ‘Interpolar’ no centro direito da tela para pesquisar os períodos onde o valor de consumo está em branco e substituí-los por um valor interpolado. O QAT interpola encontrando os valores mais próximos em ambos os lados (antes ou depois do espaço em branco), calcula a linha reta entre eles e usa essa fórmula linear para calcular o valor do(s) espaço(s) em branco. Observe que o QAT não interpolará nos meses em que o consumo real for zero. O QAT interpolará apenas se houver pelo menos um ponto de dados antes e um ponto de dados depois dos valores em branco. Matematicamente:

<!-- lista final -->

- Onde x representa meses e y representa o consumo real,

- Onde os valores de dados conhecidos são (x<sub>0</sub>, y<sub>0</sub>) e (x<sub>1</sub>, y<sub>1</sub>)

- Onde quaisquer valores de dados desconhecidos são (x, y)

- A fórmula para a linha interpolada é

![P2914#yIS1](/img/media/image247.png)

![P2915#yIS1](/img/media/image248.png)

2. Use a tabela de dados detalhados para revisar o consumo ajustado

3. Clique em ‘Enviar’ para salvar quaisquer dados inseridos/ajustados. Assim que os ajustes forem salvos, o Gráfico será atualizado (observe que é necessário clicar em Enviar para que isso aconteça)

4. Repita as etapas 1 a 3 para cada unidade de planejamento que precisa ser ajustada.

### Extrapolação

**<u>Purpose</u>:** Permite que os usuários criem uma previsão identificando tendências e estações a partir de dados históricos de séries temporais inseridos pelo usuário na tela "Entrada e ajuste de dados". Várias opções de extrapolação estatística estão disponíveis e serão descritas abaixo. As extrapolações dos dados de consumo são feitas unidade de planejamento por unidade de planejamento.

**<u>Usando esta tela</u>:**

1. **Introdução à extrapolação:**

<!-- lista final -->

- Antes de usar esta tela, certifique-se de ter preenchido a tela ‘Inserção e ajuste de dados’ para cada unidade de planejamento e região que você gostaria de extrapolar

- Use os filtros na parte superior desta tela para selecionar a unidade de planejamento, a região a ser extrapolada e o intervalo de datas para utilização dos dados históricos.

- O usuário pode selecionar um ou vários dos métodos de extrapolação disponíveis no QAT, conforme apropriado ao padrão geral de consumo e aos dados disponíveis, conforme será discutido abaixo. Consulte as seções 2 a 4 abaixo para obter uma explicação dos métodos de extrapolação e como escolher os melhores métodos para sua previsão.

- Observe que as alterações nesta tela são opcionais – o QAT aplica automaticamente os parâmetros de extrapolação padrão a todas as unidades de planejamento após a conclusão da tela Ajustes. O usuário então faz a seleção final da previsão na tela ‘Comparar e selecionar’.

<!-- lista final -->

2. **Métodos de extrapolação disponíveis no QAT**

> Os métodos de previsão no QAT são organizados do simples ao sofisticado.

1. > **Média Móvel:** A média móvel é uma média que se move ao longo do tempo, descartando dados mais antigos à medida que incorpora dados mais recentes. Para que o QAT calcule a média móvel, insira o número de meses anteriores que você gostaria de usar no cálculo da média. O usuário pode selecionar qualquer número inteiro positivo para este campo. Inserir 5, por exemplo, significaria que a projeção para o próximo mês da série seria a média do consumo dos cinco meses anteriores. Este método é mais útil para previsões de curto prazo e é sensível às tendências. Não é apropriado para dados sazonais

2. > **Semimédias:** A semimédia estima tendências com base em duas metades de uma série. O QAT divide os dados reais em duas partes iguais (metades) e a média aritmética dos valores de cada parte (metade) é calculada como os valores ‘y’ de dois pontos em uma linha. A inclinação da linha de tendência é determinada pela diferença entre estes valores ‘y’ ao longo do tempo, conforme definido pela diferença dos pontos médios das duas metades da série, ou valores ‘x’, dos pontos. Este método é sensível às tendências e útil para previsões de curto e médio prazo, mas não é apropriado para dados sazonais.

3. > **Regressão Linear:** A regressão linear modela a relação entre duas variáveis ​​ajustando uma equação linear aos dados observados. Intervalo de confiança: entre 0% e 100% (exclusivo), por exemplo, o nível de confiança de 90% indica que 90% dos possíveis pontos futuros devem cair dentro deste raio da previsão representada pela linha de regressão. Este método não é apropriado para dados sazonais.

4. > **Suavização exponencial tripla (Holt-Winters)**: Nas estatísticas, diferentes tipos de suavização são usados ​​para filtrar o ruído para que possamos ver os padrões em um conjunto de dados de série temporal com mais clareza. A suavização exponencial usa dados mais antigos com pesos decrescentes exponencialmente ao longo do tempo. Os parâmetros de suavização na suavização exponencial são definidos entre 0 e 1, com valores próximos de 1 favorecendo valores recentes e valores próximos de 0 favorecendo valores mais antigos. Os usuários que utilizam suavização exponencial tripla podem escolher quatro parâmetros:

<!-- lista final -->

- **alfa**, aplica-se ao nível ou linha de base do conjunto de dados. Valores alfa mais altos dão mais peso aos dados mais recentes. O parâmetro padrão QAT para alfa é 0,2

- **beta** determina quão fortemente as tendências recentes devem ser valorizadas em comparação com tendências mais antigas. O parâmetro padrão QAT para beta é 0,2.

- **gama** reflete o componente sazonal da previsão. Sazonal geralmente se refere à repetição de padrões _dentro de um ano_. Quanto maior o gama, maior será o peso aplicado ao componente sazonal mais recente dos dados. O parâmetro padrão QAT para gama é 0,2.

- **Intervalo de confiança:** entre 0% e 100% (exclusivo), por exemplo. O nível de confiança de 90% indica que 90% dos pontos futuros cairão dentro deste raio da previsão. O intervalo de confiança padrão do QAT é de 85%.

> O QAT calculará previsões de TES apenas para conjuntos de dados com 24 ou mais meses de dados.

1. > **ARIMA:** ARIMA ou média móvel integrada autoregressiva permite que dois modelos estatísticos projetados para séries temporais estacionárias sejam integrados e aplicados a séries temporais não estacionárias, ou seja, séries temporais que possuem tendências ou estações. Muitas vezes é aplicado a previsões de curto prazo. “Auto-regressivo” significa que cada ponto na regressão é influenciado pelos seus valores anteriores e “média móvel” implica que cada ponto é uma média, uma combinação linear de um ou mais pontos adjacentes. Tanto a auto-regressão quanto a média móvel são "integradas" juntas para ajustar o melhor modelo para a série por meio de diferenciação ou, literalmente, usando a diferença entre pontos em uma série temporal para a análise, em vez dos valores brutos. Os modelos ARIMA possuem três parâmetros:

<!-- lista final -->

- p ou AR (lag order): o número de observações defasadas no modelo. O parâmetro padrão QAT para p é 0.

- d ou I (grau de diferenciação): o número de vezes que as observações brutas são diferenciadas. Este valor normalmente é 1 (se houver tendência) ou 0 (sem tendência). Outros valores mais elevados são possíveis, mas não esperados. O parâmetro padrão QAT para d é 1.

- q ou MA (ordem da média móvel): o tamanho da janela da média móvel ou o número de observações diferenciadas a serem calculadas. O parâmetro padrão QAT para q é 1.

- Intervalo de confiança: entre 0% e 100% (exclusivo), por exemplo. O nível de confiança de 90% indica que 90% dos pontos futuros cairão dentro deste raio da previsão. O intervalo de confiança padrão do QAT é de 85%.

> O cálculo ARIMA pode ser sazonal ou não sazonal, com base na escolha e compreensão do utilizador dos seus dados e expectativas sobre se o consumo de um determinado produto está ou não sujeito a influências sazonais. A seleção padrão do QAT é para ARIMA sazonal. O QAT calculará apenas as previsões ARIMA para conjuntos de dados com 13 ou mais meses de dados.

3. **Qual método de extrapolação devo usar?**

> Abaixo estão algumas considerações para selecionar um método de previsão. Os métodos de previsão no QAT são organizados do simples ao sofisticado. Em geral,

- Modelos mais sofisticados são mais sensíveis a problemas nos dados

- Se você tiver dados de baixa qualidade (pontos de dados ausentes, taxas de relatórios variáveis, \<12 meses de dados), métodos de previsão mais simples, como médias móveis, serão provavelmente mais úteis.

> A escolha do método de extrapolação depende do padrão esperado nos dados. Alguns padrões típicos incluem:

- Estacionário, onde o intervalo de valores observados ao longo do tempo gira em torno de uma média. Os modelos aplicados a tais conjuntos de dados podem incluir
  - Média Móvel

  - ARIMA (não sazonal)

- Tendência sem componente sazonal, onde os valores observados apresentam tendência crescente ou decrescente. Os modelos aplicados a tais conjuntos de dados podem incluir
  - Semi-médias

  - Regressão Linear

- Tendência e Sazonal, onde os valores observados em um conjunto de dados possuem componentes de tendência e sazonais. Os modelos aplicados a tais conjuntos de dados podem incluir
  - ARIMA (sazonal)

  - Suavização Exponencial Tripla (Holt-Winters)

- Sazonal sem tendência, onde os valores observados têm uma componente sazonal mas não têm tendência. Os modelos aplicados a tais conjuntos de dados podem incluir
  - Suavização Exponencial Tripla (Holt-Winters)

> Os modelos aqui sugeridos não são exaustivos nem exclusivos. O QAT permite ao usuário aplicar uma variedade de métodos de extrapolação e depois compará-los usando métricas de melhor ajuste ou erro de previsão.
>
> A segunda etapa é considerar se se espera que os valores de previsão reflitam de perto os padrões históricos em seus dados e, portanto, se você usará as métricas de erro para informar sua seleção. Ao escolher um resultado (seja desconsiderando ou não a métrica de erro), será importante documentar sua justificativa para fazê-lo, para informar discussões ou revisões de sua previsão e para ajudar futuros previsores a apoiar suas decisões.

4. **Como interpreto erros?**0F\[1\]

> O QAT calcula automaticamente as métricas de erro de previsão usando vários métodos. Estes incluem:

- MAPE (Erro Percentual Médio Absoluto): pode ser interpretado como a diferença percentual média entre as previsões e seus alvos pretendidos no conjunto de dados. Por exemplo, se o MAPE for 15%, então as suas previsões estão, em média, 15% distantes dos valores reais.
  - _MAPE = \[(1/Nº de observações) \* ∑ (|(real – previsão)|/real)\] x 100_

- WAPE (Erro Percentual Absoluto Ponderado): WAPE é uma métrica apropriada para quando o conjunto de dados utilizado possui valores baixos ou intermitentes. Uma porcentagem WAPE de 5 significa que a previsão estava errada em 5% em todo o conjunto de dados para um determinado período de avaliação. Dependendo do caso de uso, é recomendado escolher um modelo que forneça o menor valor WAPE.
  - _WAPE = \[ (∑<sup>n</sup> | (real – previsão) | / ∑ <sup>n</sup> (reais)\] x 100_

- RMSE (Root Mean Squared Error): RMSE pode ser interpretado como o erro médio que as previsões do modelo apresentam em comparação com o real, com peso extra adicionado a erros de previsão maiores. Geralmente, quanto mais próximo o RMSE estiver de zero, mais preciso será o modelo.
  - _RMSE = sqrt \[∑<sup>n</sup> (real – previsão)<sup>2</sup>\] / Nº de observações_

- MSE (Erro Quadrático Médio): MSE é a média agregada da diferença quadrática entre os valores reais e as previsões. Grandes erros são destacados devido a esta quadratura. O MSE é útil ao trabalhar em modelos onde grandes erros ocasionais devem ser minimizados. Geralmente, quanto mais próximo de 0, mais preciso é o modelo.
  - _MSE = ∑ <sup>n</sup> \[(real – previsão)<sup>2</sup>\] / Nº de observações)_

- _R<sup>2</sup> (a correlação quadrática entre a variável dependente e os valores ajustados):_

> _R<sup>2</sup> = 1 – \[soma quadrada da regressão (SSR) / soma total dos quadrados (SST)\], onde a soma quadrada dos resíduos da regressão (SSR) é a soma de seus resíduos ao quadrado, e a soma total dos quadrados (SST) é a soma da distância em que os dados estão longe da média, todos elevados ao quadrado. O valor R<sup>2</sup> é sempre um número entre 0 e 1. R<sup>2</sup> é uma medida do ajuste de uma linha de regressão a uma série de observações históricas com valores mais próximos de 1, indicando uma correspondência mais forte entre os valores reais e previstos (modelo de regressão). Não é uma medida de erro e não deve ser usada por si só para avaliar a adequação de uma previsão, mas em combinação com outras métricas de erro e com o conhecimento do programa pelo usuário._

- _R<sup>2</sup> = 1 – \[soma quadrada da regressão (SSR) / soma total dos quadrados (SST)\]_

> Além de R<sup>2</sup>, quanto menor a pontuação, mais próximo o resultado do método de previsão se ajusta aos dados históricos. Em modelos onde se espera que os padrões históricos num conjunto de dados sejam refletidos nos valores futuros, um valor de erro baixo poderia ser usado para ajudar a selecionar um método de extrapolação preferido, e o QAT destacará esses melhores ajustes numa tabela. Contudo, se forem previstas alterações substanciais que não se ajustam aos dados históricos, a extrapolação mais adequada pode não ser a previsão mais adequada a seleccionar.
>
> Para fazer a melhor seleção entre os métodos de extrapolação para o seu propósito, antes de revisar as métricas de erro, o mais importante é primeiro entender qual método de extrapolação é mais apropriado para o padrão esperado nos dados.

5. **Otimização dos parâmetros de previsão TES e ARIMA**

![A screenshot of a computer Description automatically generated](/img/media/image249.png)

Figura 165: Otimizar link TES e ARIMA

> **Conforme descrito na [Seção A3. Extrapolação](#extrapolação), QAT oferece aos usuários múltiplas opções de extrapolação, incluindo TES e ARIMA sazonal e não sazonal. Os usuários são livres para usar os padrões do QAT ou inserir parâmetros de previsão alternativos com a intenção de reduzir as métricas de erro, aumentando assim a correspondência entre os resultados do método de previsão e os pontos de dados reais no período de dados históricos. Se o usuário estiver trabalhando online, o QAT pode otimizar os parâmetros TES e ARIMA iterando, calculando o RMSE de cada iteração e selecionando os parâmetros que produzem o RMSE mais baixo.**

![A screenshot of a computer Description automatically generated](/img/media/image250.png)

Figura 166: Otimizando pop-up TES e ARIMA

> **Para TES, o QAT calcula 125 iterações da previsão, testando cada um dos parâmetros alfa, beta e gama em combinação com os seguintes valores: 0, 0,2, 0,4, 0,8 e 1. Qualquer uma das 125 combinações para um determinado produto produz o resultado com o RMSE mais baixo será exibido na tela de extrapolação.**
>
> **Para ARIMA ou ARIMA sazonal, o QAT calcula 24 iterações da previsão, testando cada um dos parâmetros p, d e q em combinação, usando os seguintes valores:**

- **p: 0 ou 1**

- **d: 0, 1 ou 2**

- **q: 0, 1, 2 ou 3**

> **Qualquer das 24 combinações para um determinado produto produzir o resultado ARIMA com o RMSE mais baixo será exibida na tela de extrapolação.**
>
> **Nota: Estatísticas não são mágicas. A suposição subjacente a todos estes métodos de extrapolação é que as tendências e padrões nos dados históricos continuarão no futuro. Portanto, métricas de baixo erro <u> não garantem necessariamente uma previsão melhor </u>.**

6. **Extrapolação em massa**

![A screenshot of a computer Description automatically generated](/img/media/image251.png)

Figura 167: Link de extrapolação em massa

> **Na tela de extrapolação QAT, o usuário pode comparar os resultados dos vários métodos de extrapolação tanto graficamente quanto em uma tabela de resultados, produto por produto. Isso permite que o usuário desmarque métodos de extrapolação que eles acham que não se aplicam a um determinado produto para limitar as opções na tela Comparar e Selecionar apenas aquelas que o usuário escolhe exibir.**

![A screenshot of a computer Description automatically generated](/img/media/image252.png)

Figura 168: Pop-up de extrapolação em massa

> **Se o usuário preferir enviar todos os resultados dos métodos de extrapolação disponíveis para mais de um produto diretamente para a tela Comparar e Selecionar, o usuário poderá selecionar a extrapolação em massa. Na janela pop-up Extrapolação em massa, o usuário pode então selecionar um intervalo de datas históricas a partir do qual extrapolar a previsão (apenas um intervalo de datas por extrapolação em massa), se deseja aplicar sazonalidade ao seu cálculo ARIMA, quais unidades de planejamento e regiões (se dados regionais forem usados) incluir na extrapolação em massa e se deve ou não otimizar os parâmetros ARIMA e TES para a extrapolação.**
>
> **Depois de executar a extrapolação em massa, todos os resultados podem ser visualizados na tela de extrapolação, na tela de comparação e seleção e na caixa suspensa da tela de resumo de previsão (regional). O usuário pode selecionar seu método de extrapolação preferido na tela Comparar e selecionar ou na tela Resumo de previsão (regional).**
>
> **A extrapolação em massa no QAT é particularmente útil ao trabalhar com um grande conjunto de produtos para os quais dados de consumo oportunos, completos e precisos estão disponíveis por 12 meses ou mais.**

## Previsões de árvores

Os usuários podem realizar uma previsão baseada em árvore se os dados necessários para uma previsão baseada no consumo não estiverem disponíveis ou não forem úteis na previsão do consumo futuro. As previsões em árvore acomodam com flexibilidade todos os outros métodos de previsão, como **morbidade, serviços e métodos demográficos**. Os usuários podem especificar alterações ao longo do tempo em uma árvore, especificando diretamente a taxa de alteração ou extrapolando dados anteriores.

### Construindo uma árvore

![A screenshot of a computer Description automatically generated](/img/media/image253.png) Figura 169: Gerenciar Árvore – Lista de Árvore (Clique com o botão direito para acessar as ações)

**<u>Purpose</u>:** Permite que os usuários:

1. Veja uma lista de suas árvores existentes

2. Edite uma árvore existente clicando em qualquer linha

3. Clique com o botão direito em uma linha para
    - > **Duplicar árvores existentes:** Os usuários também podem duplicar uma árvore existente para outro programa. Os usuários devem ter acesso a ambos os programas e baixá-los em seu computador local para duplicação.

    - > **Excluir árvores existentes:** Haverá uma tela de confirmação, mas esta ação é irreversível. No entanto, se você excluir acidentalmente uma árvore, poderá baixar novamente um programa se o backup da árvore excluída tiver sido feito no servidor.

    - > **Tree Table:** Isso permite ao usuário editar a árvore selecionada na tela [Tree Table](#advanced-techniques)

4. Adicione uma nova árvore a um programa baixado clicando no menu suspenso ‘Criar ou Selecionar’ no canto superior direito da tela. Novas árvores podem ser construídas:

<!-- lista final -->

- manualmente - selecione ‘+ Desenhe sua própria árvore’

- a partir de um modelo de árvore - selecione o nome do modelo desejado. Se um usuário quiser ver um modelo de árvore adicionado ao QAT que não existe e que beneficiaria a comunidade QAT, ele poderá enviar uma solicitação de alteração ao [Sistema de suporte técnico de tickets do QAT](02-getting-started.md#qat-helpdesk-and-tickets).

**\*Nota**: [Visualizadores de previsão](12-annex-3-user-role-matrix.md#annex-3-user-role-matrix) podem visualizar qualquer árvore que tenha sido carregada no servidor e à qual tenham acesso; no entanto, apenas usuários/administradores do Forecast poderão criar e editar/atualizar árvores.\*

**<u>Usando esta tela</u>:**

- Um programa de previsão deve primeiro ser baixado para construir ou editar uma árvore

- Antes de construir e editar uma árvore, primeiro adicione as unidades de planejamento do programa de previsão na tela ‘Atualizar Unidades de Planejamento’.

- **Construir uma árvore semelhante a uma árvore existente?**
  - <u>Mesma estrutura, números diferentes</u>: Somente compilação
uma árvore e use o recurso [scenario](#scenarios).

  - <u>Sestrutura ligeiramente diferente</u>: Duplicar um
árvore existente clicando com o botão direito em uma linha e selecionando “Duplicar Árvore”.
Nota: Se quiser duplicar uma árvore existente de outro programa, você
deve ter ambos os programas baixados, então você pode duplicar de um programa
para outro programa.

- **Pretende começar a partir de um modelo?** Consulte a seção [Modelo de árvore](#tree-templates)

- Os usuários também podem excluir árvores clicando com o botão direito em uma linha e selecionando “Excluir árvore”.

#### Tipos e funções de nós

**Construindo a Árvore:** A árvore de previsão é construída de cima para baixo, usando diferentes tipos de “nós”. Consulte os tipos de nós e as ações dos nós abaixo. Cada árvore de previsão deve começar com um nó Agregação ou um nó Número e incluir um ou mais nós Unidade de Planejamento, que formam a saída da previsão.

**Ações do nó:**

- ![P3021L144#yIS1](/img/media/image254.png) Excluir: Exclui o nó selecionado e todos os seus filhos.

- ![](/img/media/image255.png) Copiar/Mover: Copia ou move o nó selecionado e todos os filhos sob o nó. O usuário pode selecionar o destino.

- ![P3023#yIS1](/img/media/image256.png) Adicionar modelo de ramificação: Adiciona um modelo de árvore como ramificação abaixo do nó escolhido.

- ![](/img/media/image257.png) Adicionar: Adiciona um filho ao nó selecionado.

- ![P3025#yIS1](/img/media/image258.png)/![P3025#yIS2](/img/media/image259.png) Recolher/Expandir: Recolher/Expandir o nó atual e todos os seus filhos. Os usuários também podem passar o mouse sobre o ponto para escolher qual nó expandir e clicar uma vez para expandir esse nó e todos os seus filhos. Além disso, há uma caixa de seleção “Collapse Tree” na parte superior da tela Build Trees que recolherá todos os nós, exceto o nó superior.

> ![](/img/media/image260.png)

Figura 170: Exemplo de árvore de previsão recolhida

**Tipos de nós:**

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Tipo de nó</strong>
      </th>
      <th>
        <strong>Value</strong>
      </th>
      <th>
        <strong>Pfilhos Potenciais</strong>
      </th>
      <th>
        <strong>Afuncionalidade avançada</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <strong>Aggregação ∑</strong>
      </td>
      <td>Soma de nós filhos.</td>
      <td>
        <strong>∑</strong> ou Número
      </td>
      <td>-</td>
    </tr>
    <tr class="even">
      <td>
        Número <strong>N#</strong>
      </td>
      <td>Definido neste nó</td>
      <td>
        % ou 
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3041C11T27#yIS1"
        />
      </td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15574in', height: '0.15574in'}}
          alt="P3042C12T27#yIS1"
        />
        , 
        <img
          src="/img/media/image264.png"
          style={{width: '0.15152in', height: '0.12266in'}}
          alt="P3042C12T27#yIS2"
        />
        , 
        <img
          src="/img/media/image265.png"
          style={{width: '0.25466in', height: '0.16149in'}}
        />
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Percentagem %</strong>
      </td>
      <td>Porcentagem do pai.</td>
      <td>
        % ou 
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3046C15T27#yIS1"
        />
      </td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15574in', height: '0.15574in'}}
          alt="P3047C16T27#yIS1"
        />
        , 
        <img
          src="/img/media/image265.png"
          style={{width: '0.25466in', height: '0.16149in'}}
        />
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Funil</strong> 
        <img
          src="/img/media/image266.png"
          style={{width: '0.14783in', height: '0.16957in'}}
        />
      </td>
      <td>
        Soma dos nós de origem vinculados (
        <img
          src="/img/media/image267.png"
          style={{width: '0.24997in', height: '0.15623in'}}
        />
        )
      </td>
      <td>
        % ou
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3046C15T27#yIS1"
        />
      </td>
      <td>-</td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Unidade de previsão</strong> 
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3049C17T27#yIS1"
        />
      </td>
      <td>
        <p>
          Porcentagem dos parâmetros pai e da unidade de previsão. Podem ser dois
          diferentes tipos de uso:
        </p>
        <ul>
          <li>
            <blockquote>
              <p>
                <img src="/img/media/image268.png" />: Contínuo
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <img
                  src="/img/media/image269.png"
                  style={{width: '0.1375in', height: '0.175in'}}
                  alt="P3052C18T27#yIS1"
                />
                : Discreto
              </p>
            </blockquote>
          </li>
        </ul>
      </td>
      <td>
        <img
          src="/img/media/image270.png"
          style={{width: '0.20816in', height: '0.17563in'}}
          alt="P3053C19T27#yIS1"
        />
      </td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15574in', height: '0.15574in'}}
          alt="P3054C20T27#yIS1"
        />
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>PUnidade de planejamento</strong> 
        <img
          src="/img/media/image270.png"
          style={{width: '0.20816in', height: '0.17563in'}}
          alt="P3056C21T27#yIS1"
        />
      </td>
      <td>Porcentagem dos parâmetros pai e da unidade de planejamento.</td>
      <td>-</td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15556in', height: '0.15556in'}}
          alt="P3059C24T27#yIS1"
        />
      </td>
    </tr>
  </tbody>
</table>

- > **∑ Atributos específicos do nó de agregação:** nenhum – é definido pela soma de seus filhos. _Por exemplo, se houver dois nós filhos abaixo do nó Agregação iguais a 50 e 100, o QAT adicionaria automaticamente estes números para definir o nó Agregação: 50 (filho) + 100 (filho) = 150 (pai da agregação)._

- > **\# Número de atributos específicos do nó:**
  -> <u>Node Unit</u>: menu suspenso que consiste em
paciente, cliente, cliente, pessoas ou unidade

  -> <u>Month:</u> escolha o mês/ano em que esses dados foram reportados
de*. Por exemplo, se um usuário quiser definir um nó numérico como População do País
e os dados são de janeiro de 2020, o mês do nó deve ser janeiro de 2020.*

- > <u>Node Valor:</u> Defina o valor numérico para este
nó. *Por exemplo, se a população do país em janeiro de 2020 for 500.000, o
o valor do nó deve ser 500.000.* Se esse valor mudar ao longo do tempo, os usuários poderão utilizar
a guia [Modelagem/Transferência](#modelingtransfers) para especificar a alteração.
    - > **% Porcentagem de atributos específicos do nó:**
      -> <u>Node Unidade: lista suspensa </u> que consiste em
paciente, cliente, cliente, pessoas ou unidade

      -> <u>Month:</u> escolha o mês/ano em que esses dados foram
relatado a partir de*.* Normalmente, este será o mês/ano de início da previsão.

      -> <u>Percentagem do Pai:</u> define a porcentagem
do nó pai. *Por exemplo, se metade do nó de número pai, País
População feminina, a porcentagem de pais seria de 50%.*

      -> <u>Valor pai para o mês:</u> não editável e
fornecido apenas como referência.

      - > <u>Node Value</u>**:** calculado automaticamente pelo QAT
com base na porcentagem definida pelo usuário e no valor pai. Isto
campo não é editável.

    - > ![](/img/media/image271.png) **Atributos específicos do nó da unidade de previsão:**
      -> <u>Month:</u> escolha o mês/ano em que esses dados foram
relatado de. Normalmente, este será o mês/ano de início da previsão.

      -> <u>Percentagem do Pai:</u> define a porcentagem
do nó pai.

      -> <u>Valor pai para o mês:</u> não editável e
fornecido apenas como referência.

      -> <u>Percentagem do valor pai do mês:</u> não editável
e fornecido apenas como referência.

      -> <u>Tracer Categoria: menu suspenso </u> que pode ser usado
para ajudar a restringir as unidades de previsão, mas será preenchido automaticamente assim que o
unidade de previsão é escolhida.

      -> <u>Copiar do modelo: </u> funcionalidade avançada,
em que um usuário pode utilizar um [modelo de uso](#usage-templates) para ajudar
com a construção de uma árvore de forma eficiente. Este menu suspenso não é obrigatório.

      -> <u>Unidade de previsão: lista suspensa </u> de todos os disponíveis
unidade de previsão no programa do usuário. Se uma unidade de previsão não estiver disponível
no menu suspenso, o usuário deve primeiro adicioná-lo a ‘[Atualizar unidade de planejamento](07-forecasting-module-program-data.md#planning-units)’
tela.

      -> <u>P Unidade de planejamento: menu suspenso </u> filtrado com base em
unidade de previsão escolhida. Se houver apenas uma unidade de planejamento associada
com a unidade de previsão, este campo será automaticamente pré-preenchido.

      -> <u>Tipo de uso:</u>
        - > ![](/img/media/image272.png) <u>Discrete</u>: Cada \_\_\_\_\_\_\_ \[unidade do nó pai\] requer \_\_\_\_\_\_\_\_\_ \[unidade de medida de previsão\] \_\_\_\_\_\_\_\_\_\_ vezes por \[dia/semana/mês/ano\] para \_\_\_\_\_\_\_\_\_\_\_\_\_ \[dia/semana/mês/ano\]
          -> <u> Calcular (tudo no primeiro mês/mês a mês) </u>
: Se selecionado “Tudo no primeiro mês”, o QAT antecipará o total
quantidade prevista para o mês de início do nó. Se selecionado
“Mês a mês”, o QAT calculará a quantidade discretamente
mês a mês (veja [Técnicas Avançadas](#técnicas-avançadas)
para mais informações).

          -> <u>Suso único (Sim/Não):</u> permite ao usuário
determinar se esta unidade de previsão é usada durante um período específico de
tempo. Se “sim” for selecionado, o período de tempo para cálculos discretos
não é necessário.

        - > ![](/img/media/image268.png) <u>Continuous</u>: Cada \_\_\_\_\_\_\_ \[unidade do nó pai\] requer \_\_\_\_\_\_\_\_\_ \[unidade de medida de previsão\] cada \_\_\_\_\_\_\_ \[dia/semana/mês/ano\]

      -> <u>Lag em meses:</u> usado para detalhar se uma previsão
unidade está atrasada ou tem uso faseado do produto. Veja [Técnicas Avançadas](#técnicas-avançadas)
para mais informações.

- > ![](/img/media/image273.png) **Atributos específicos do nó da unidade de planejamento:** nó criado automaticamente quando a unidade de previsão é adicionada a uma árvore. A maioria dos atributos na tela de adição/edição de nó não são editáveis ​​e são apenas para referência; no entanto, alguns podem ser atualizados com base em circunstâncias específicas:
      -> <u>Month:</u> escolha o mês/ano em que esses dados foram
relatado de. Normalmente, este será o mês/ano de início da previsão.

      -> Sobreposição de cálculo <u>C: os usuários do </u> podem optar por
use o cálculo automático do QAT para o número de unidades de planejamento clicando em “Sim”
ou insira manualmente um valor clicando em “Não”. Veja [Técnicas Avançadas](#técnicas-avançadas)
para mais informações.

**Mudanças ao longo do tempo**

Embora a estrutura da árvore permaneça constante ao longo do tempo, as porcentagens e os valores dos nós podem mudar com o tempo. Use o menu suspenso de data para visualizar a árvore em qualquer mês. As três funcionalidades abaixo estão disponíveis em cada nó e permitem ao usuário controlar como os nós mudam ao longo do tempo:

- **⇅ Modelagem:** Permite ao usuário especificar a taxa exata de mudança

- ![P3094#yIS1](/img/media/image274.png "Link with solid fill")**Transferência**: Permite aos usuários vincular dois nós - de forma que a diminuição do nó de origem esteja vinculada ao aumento do nó de destino. Útil para transições.

- ![P3095#yIS1](/img/media/image275.png) **Extrapolação:** permite que os usuários usem dados históricos para extrapolar alterações futuras.

Para obter mais informações e exemplos específicos de alterações ao longo do tempo, consulte [Modelagem/Transferências](#modelingtransfers)<u>.</u>

#### Noções básicas de construção de árvores

![](/img/media/image276.png)

Figura 171: Exemplo de árvore de previsão simples

As árvores de previsão são construídas de cima para baixo usando diferentes tipos de [nós.](#node-types-functions) Cada árvore de previsão deve começar com um nó Agregação ou um nó Número e incluir um ou mais nós Unidade de Planejamento. Os nós da Unidade de Planejamento devem ser filhos de um nó da Unidade de Previsão. Portanto, um usuário deve ter pelo menos três níveis de nós (nó Agregação/Número, nó Unidade de Previsão e nó Unidade de Planejamento) para produzir uma saída de previsão.

**Etapas para construir uma árvore manual:**

1. > Baixe um programa

2. > Navegue até a tela Árvore de previsão à tela Gerenciar árvore

3. > No canto superior direito da tela, clique no menu suspenso azul ‘Criar ou Selecionar’ e selecione ‘+ Desenhe sua própria árvore’ no menu suspenso

4. > Defina os detalhes da árvore, como método de previsão (demográfica, morbidade ou serviços), nome da árvore e região.
    1. Depois de criada, os usuários podem editar os detalhes da árvore clicando no ícone ![P3108#yIS1](/img/media/image277.png)icon próximo ao menu suspenso Árvore.

    2. (opcional) Ao clicar no ícone ![P3109#yIS1](/img/media/image277.png) próximo ao menu suspenso Cenário, os usuários podem adicionar, editar e excluir cenários de árvore. Para obter mais informações, consulte [Cenários](#scenarios) na seção abaixo.

5. > Por padrão, QAT começará com um nó numérico com valor zero no Nível 0. Clique neste nó padrão para editar/atualizar o nó.

6. > Adicione um novo nó (filho) abaixo do nó pai clicando em ![P3111#yIS1](/img/media/image278.png) e escolhendo o tipo de nó apropriado. Com base no pai, o QAT filtrará automaticamente quais [tipos de nós filhos](#node-types-functions) estão disponíveis. QAT adicionará o novo nó sob o mesmo pai e à direita de quaisquer nós existentes. Continue adicionando nós com base nos dados disponíveis até terminar com um nó Unidade de Previsão e seu nó Unidade de Planejamento associado.
    1. Para excluir um nó, basta clicar no ícone ![P3112#yIS1](/img/media/image254.png), mas observe que isso também excluirá os nós filhos daquele que está sendo excluído.

    2. Para copiar ou mover um nó, clique no ícone ![](/img/media/image279.png)icon. No pop-up, revise ou selecione para onde deseja que o nó seja copiado ou movido – a árvore, o nível do pai e o pai.
        - Para copiar, o QAT selecionará o mesmo local do nó original por padrão

        - Para movimentação, o QAT selecionará a mesma árvore do nó original por padrão

        - Toda a ramificação (incluindo todos os nós filhos) será movida/copiada.

- Use a caixa de seleção para selecionar se deseja incluir modelagem ou não. Nota: As transferências nunca são copiadas/movidas.

    3. Como um recurso de validação, o QAT sinalizará um nó da Unidade de Planejamento (PU) com uma borda vermelha em duas circunstâncias: 1) se um usuário adicionou uma Unidade de Previsão (FU) e uma PU e posteriormente alterar a FU e se esquecer por engano de também alterar para a PU correspondente correta, ou 2) se um usuário criar uma árvore a partir de um modelo de árvore que possui PUs, mas o usuário não tiver essas PUs em seu programa.

![](/img/media/image280.png)

> Para corrigir isso, os usuários podem clicar no nó PU e escolher o PU apropriado na lista suspensa.

![P3117#yIS1](/img/media/image281.png)

4. _Dica: os usuários podem “limpar” sua árvore clicando em qualquer uma das caixas de seleção disponíveis (Ocultar Unidade de Planejamento, Ocultar Unidade de Previsão e Unidade de Planejamento ou Ocultar Validação de Árvore) no topo da árvore._

<!-- lista final -->

7. > _(opcional)_ Os usuários podem inserir um modelo de árvore dentro do corpo de sua árvore clicando no ícone ![P3119#yIS1](/img/media/image256.png) para adicionar um modelo de ramificação. Esta ramificação será adicionada abaixo do nó atual como filho. Isso melhora a eficiência da adição de vários lotes de nós (uma ramificação) iguais ou semelhantes em uma árvore existente ou em uma nova árvore, utilizando modelos. Para obter mais informações sobre modelos de ramificação, consulte [Modelos de ramificação](#branch-templates)

8. > _(opcional)_ Clique nos níveis da árvore (caixas retangulares azuis escuras à esquerda da árvore) para:
    -> Nomeie os níveis de uma árvore. Isso tornará a árvore mais fácil de ler e será usada nos menus suspensos e no eixo da tela [Validação de modelagem](#modeling-validations).

    -> Reordene os galhos da sua árvore conforme desejado usando as setas para cima e para baixo para indicar a posição dos galhos da esquerda para a direita. Se a lista for longa, use o menu suspenso “ver filhos de” para filtrar os nós.

![A screenshot of a computer Description automatically generated](/img/media/image282.png)

9. > As árvores QAT são **salvas automaticamente** no computador local (para salvar uma árvore no servidor, consulte [Versão de upload](03-managing-programs-and-versions.md#upload). As quantidades que aparecem nos nós também são calculadas automaticamente conforme uma árvore muda; no entanto, se o QAT estiver lento durante a edição da árvore, os usuários podem desmarcar a caixa “Calcular automaticamente” para interromper os cálculos automáticos de backend. Para ver manualmente os cálculos atualizados após cada edição, os usuários precisarão clicar no Ícone ![P3121#yIS1](/img/media/image283.png).
    1. > Os usuários podem baixar suas árvores como PDFs para compartilhar com as partes interessadas clicando no ícone ![P3122#yIS1](/img/media/image284.png).

    2. > Os usuários podem baixar um formulário de esboço de sua árvore para verificar novamente a validação da Soma de Filhos, os valores dos nós e seus nós clicando no ícone ![P3123#yIS1](/img/media/image285.png).

10. > _(opcional)_ Para editar valores em lote em uma árvore, o usuário pode usar a tela **Tabela de Árvore**, que pode ser acessada por meio de um link no canto superior esquerdo da tela Gerenciar Árvore – Construir Árvores.
    -> Na tela Tabelas em Árvore,

    -> Os menus suspensos na parte superior da tela devem ser pré-preenchidos com o mesmo programa, árvore, cenário e data de exibição selecionados anteriormente, mas os usuários podem atualizar os menus suspensos conforme necessário antes de fazer edições.

    -> Os nós são agrupados por tipo de nó em guias diferentes. Navegue até o(s) nó(s) que deseja editar usando as guias

    -> Foram feitas edições em qualquer valor de nó editando as células da tabela.

    -> Veja o exemplo e captura de tela na Figura 157

    -> Observe que, embora a tela Tabelas em árvore seja útil para editar os valores de vários nós com eficiência, a tela Tabelas em árvore <u>not</u> permite a edição da estrutura em árvore. Use a tela Gerenciar árvore – Construir árvores para adicionar, excluir, copiar ou mover nós.

    -> Ao retornar à tela Build Tree, os usuários podem precisar clicar no ícone ![P3121#yIS1](/img/media/image283.png) para ver os valores atualizados.

> ![A screenshot of a computer Description automatically generated](/img/media/image286.png)

Figura 172 Acessando e usando a tela Tabela em árvore

#### Cenários

**Uso de cenários:** Cenários são usados ​​para modelar valores diferentes para a mesma árvore. Os cenários são úteis quando os usuários desejam analisar o resultado de diferentes mudanças ao longo do tempo (ex: meta nacional vs. status quo, diferentes níveis de sazonalidade, transição de unidades de planejamento em taxas diferentes, etc.), mas gostariam de manter a estrutura base <u>same</u>. Para criar uma árvore com estruturas <u>diferentes</u> (por exemplo, diferentes regimes, diferentes metodologias), é recomendado criar outra árvore (dica: utilize a função de árvore duplicada\!). Para adicionar, editar, excluir ou desativar um cenário, use o ícone ![P3125#yIS1](/img/media/image277.png) próximo ao menu suspenso do cenário. Use o menu suspenso de cenários para selecionar qual cenário visualizar e editar.

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Ffixo para todos os cenários</strong>
      </th>
      <th>
        <strong>Único para cada cenário</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <p>Estrutura de árvore</p>
        <p>Título do nó</p>
        <p>Tipo de nó</p>
      </td>
      <td>
        <p>Valor do nó</p>
        <p>Mês</p>
        <p>Notas</p>
        <p>Modelagem/Transferência/Extrapolação</p>
      </td>
    </tr>
  </tbody>
</table>

_Notas_

- _Por padrão, apenas _cenários_ ativos são mostrados. Para visualizar cenários inativos, clique no ícone_ ![P3125#yIS1](/img/media/image277.png) _ próximo ao menu suspenso do cenário, seguido de “Mostrar inativo”_

- _Os usuários podem escolher diferentes combinações de cenário de árvore para cada unidade de planejamento na tela [Comparar e selecionar](09-forecasting-module-reports-and-outputs.md#compare-and-select)._

#### Modelagem/Transferências

**<u>Purpose</u>:** Se um nó mudar ao longo do tempo, um usuário poderá utilizar a guia Modelagem/Transferência para modelar o crescimento/perda dentro de um único nó ou uma transferência de um nó para outro. Observe que esta funcionalidade está disponível apenas para nós Número (\#) e Nós Porcentagem (%) (incluindo Unidades de Previsão e Unidades de Planejamento). O usuário ainda pode usar a guia para visualizar dados mensais dos nós de agregação e funil.

**<u>Usando esta guia</u>:**

Os usuários podem inserir **manualmente** quaisquer alterações desejadas ao longo do tempo (crescimento/perda/transferência) na tabela superior ou podem utilizar a **Calculadora de modelagem** ![P3144#yIS1](/img/media/image287.png) para calcular a taxa mensal de alteração (consulte a seção ‘Calculadora de modelagem’ abaixo para obter mais informações). Cada entrada deve ser adicionada como linhas separadas por alteração na tabela superior (ou seja, um nó não pode crescer e ser transferido em uma linha de entrada de dados – devem ser duas linhas separadas).

- **Regras para nós de transferência:**
  - Os nós numéricos só podem ser transferidos para outros nós numéricos e devem pertencer ao mesmo nível.

  - Os nós percentuais só podem ser transferidos para outros nós percentuais e devem pertencer ao mesmo pai.

  - As transferências são sempre negativas do nó de origem e positivas para o nó de destino.

  - A extrapolação não é permitida em um nó que também tenha uma transferência, seja de/para outro nó.

<!-- lista final -->

- **Tipos de modelagem:**

| **Tipo de modelagem** | **\# Cálculo do nó** | **% Cálculo do nó** |
| ----------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Linear (\#) | \+/- um número estático a cada mês | N/A |
| Linear (%) | \+/- uma porcentagem estática a cada mês, calculada com base no mês inicial | N/A |
| Exponencial (%) | \+/- uma percentagem por mês, calculada com base no mês anterior como percentagem móvel | N/A |
| Linear (ponto %) | N/A | \+/- uma porcentagem estática a cada mês (por exemplo, se o mês inicial for 30% e a variação for +1% a cada mês, o próximo mês será 31%, o próximo será 32% e assim por diante) |

- Clique em “**Mostrar dados mensais”** para mostrar uma tabela e gráfico com o valor do nó ao longo do tempo
  - Este recurso é útil para ver como as entradas de modelagem e transferência afetam os dados mensais em formato gráfico e tabular.

  - Nos dados tabulares, os usuários podem adicionar uma alteração manual para um mês específico ou inserir uma porcentagem do índice de sazonalidade (disponível apenas para nós \# e %), conforme necessário.
    - Insira um % positivo para um valor aumentado neste mês ou um valor negativo para um valor diminuído. Por exemplo, 20% indica que o valor deste mês está 20% acima do valor não sazonal (ou 120%), enquanto -20% indica que está 20% abaixo do valor não sazonal (ou 80%).

    - Para nós percentuais, o QAT primeiro calcula o valor sazonal da porcentagem antes de calcular o valor do nó multiplicando a porcentagem sazonalizada e o valor pai. Na Figura 159, o exemplo mostra como a porcentagem não sazonalizada de 50% se torna 60% depois de sazonalizada.

> ![](/img/media/image288.png)
>
> Figura 173 Sazonalidade em um nó numérico
>
> ![](/img/media/image289.png)
>
> Figura 174 Sazonalidade em um nó percentual

- Se um usuário marcar “A alteração manual afeta o mês futuro”, o valor manual adicionado ao final do mês será transferido para o início do mês seguinte.

- Se nenhum desses campos for relevante, os usuários podem desmarcar “Mostrar alteração manual” ou “Mostrar sazonalidade e alteração manual” para ocultar essas colunas.

**<u>Exemplos de modelagem:</u>**

- **Crescimento Simples** (linear \#) - o exemplo abaixo mostra um crescimento populacional a cada mês em 500/mês de janeiro de 2022 a dezembro de 2024.

![P3182#yIS1](/img/media/image290.png)

- **Perda Simples** (linear \#) - o exemplo abaixo mostra o desgaste a cada mês em 100/mês de janeiro de 2022 a dezembro de 2024. QAT utiliza um número negativo para denotar uma diminuição ou perda.

![P3184#yIS1](/img/media/image291.png)

- **Crescimento Simples** (% linear) – o exemplo abaixo mostra um crescimento populacional constante a cada mês em 2%, de janeiro de 2022 a dezembro de 2024. QAT calculou que esta mudança aumentará a população em 108,64 a cada mês.

![P3186#yIS1](/img/media/image292.png)

- **Crescimento Simples** (% exponencial) - o exemplo abaixo mostra um crescimento populacional de 1% a cada mês, de janeiro de 2022 a dezembro de 2024. Como o crescimento é exponencial, a mudança difere a cada mês. ![P3187#yIS1](/img/media/image293.png)
  - QAT calcula essa mudança em 54,32 no mês de janeiro de 22,

  - QAT calcula essa mudança em 54,86 no mês de fevereiro de 22, e

- QAT calcula que essa mudança será de 55,41 em 22 de março

- **Perda plurianual** – o exemplo abaixo mostra uma taxa diferente de atrito (perda) a cada ano. O ano 1 (janeiro de 2022 a dezembro de 2022) diminui a população em 1% ou 54,32 a cada mês, o ano 2 (janeiro de 2023 a dezembro de 2023) diminui a população em 2% ou 95,6 a cada mês, etc. QAT utiliza um número negativo para denotar uma diminuição ou perda.

![P3192#yIS1](/img/media/image294.png)

- **Transferência** – o exemplo abaixo mostra uma transferência de 250 pacientes por mês durante um ano, janeiro de 2022 a dezembro de 2022, do nó atual (Linha Adultos 1<sup>st</sup>) para outro nó (Linha Adultos 2<sup>nd</sup>). Esta transferência também aparecerá no outro nó (Linha Adultos 2<sup>nd</sup>) esmaecido para indicar uma alteração não editável.

![P3194#yIS1](/img/media/image295.png)

![](/img/media/image296.png)**<u>Calculadora de modelagem:</u>**

Clique no ícone da calculadora de modelagem se precisar de ajuda para calcular a taxa de variação mensal. A calculadora de modelagem **Valor/Alteração Final** está disponível para todos os nós, exceto Nós de Agregação, e a calculadora de modelagem **Meta Anual** está disponível apenas para Nós de Número. Comece selecionando um **Tipo de modelagem** (Linear \#, % linear ou % exponencial) e, em seguida, um **Tipo de meta** (Valor final/mudança ou meta anual):

- **Valor/mudança final:** Use isto se você tiver um valor alvo (não cumulativo) ou uma mudança total desejada durante um período específico, em vez de uma taxa de mudança mensal conhecida.

<!-- lista final -->

1. **Data de início** e **Data de destino** serão preenchidas com base nas entradas originais para Data de início e Data de término na tabela de modelagem, que são, por padrão, baseadas no período de previsão. O usuário pode alterá-los se desejar. Essas duas datas retornarão à tabela de modelagem.

2. O **Valor Inicial** é o valor do nó no início do mês para a Data de Início, conforme calculado pelo QAT. Em outras palavras, o Valor Inicial é o valor do nó _antes_ de ocorrer qualquer alteração na modelagem. Este campo é calculado e não pode ser alterado diretamente pelo usuário. Se a Data de Início for o mês após o “Mês” na guia Dados do Nó, então o Valor Inicial será igual ao “Valor do Nó” fornecido pelo usuário na guia Dados do Nó.

3. **Período** é calculado como Data prevista - Data de início (em meses). Este valor não é exibido no front-end do QAT, mas é usado nas fórmulas abaixo.

4. Com base nos dados ou suposições disponíveis, insira dados em <u>one</u> dos seguintes campos: **Valor Final Alvo**, **Alteração Alvo (%)** ou **Alvo** **Alteração (\#)**

5. Depois que uma entrada for fornecida, os outros campos serão preenchidos automaticamente, bem como a **'Alteração Mês a Mês Calculada'** final.

6. Quando o usuário clica em ‘Aceitar’, a **Alteração Mensal (% ou \#)** será preenchida novamente na tabela de modelagem principal, com base nas fórmulas abaixo. Todas as alterações negativas serão exibidas como “diminuição” e as alterações positivas serão exibidas como “aumento”, com o número mostrado em valor absoluto.

> Se o usuário inserir **Valor Final Alvo**:

|                                      | **Linear (%)** | **Linear (\#)** | **Exonencial (%)** |
| ------------------------------------ | -------------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------- |
| **Alteração de meta (%)** | (Valor Final Alvo - Valor Inicial) / Valor Inicial |                                   |                                                                 |
| **Alteração de destino (\#)** | \- | Valor Final Alvo - Valor Inicial | \- |
| **Alteração mensal calculada** | (Valor Final Alvo - Valor Inicial) / Período |                                   |                                                                 |
| **Variação Mensal (%)** | (((Valor Final Alvo - Valor Inicial)/ Período) / Valor Inicial) \* 100 | \- | ((Valor Final Alvo/Valor Inicial) ^ (1/Período) - 1) \* 100 |
| **Alteração Mensal (\#)** | \- | Alteração (\#) / Período | \- |

> Se o usuário inserir **Alteração de meta (%)**:

|                                      | **Linear (%)** | **Linear (\#)** | **Exonencial (%)** |
| ------------------------------------ | -------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------ |
| **Valor Final Alvo** | Valor inicial + (Valor inicial \* Alteração desejada (%)/100)/100 |                                   |                                                                |
| **Alteração de destino (\#)** | \- | Valor Final Alvo - Valor Inicial | \- |
| **Alteração mensal calculada** | (Valor inicial \* Alteração da meta (%)) / 100 / Período |                                   |                                                                |
| **Variação Mensal (%)** | (((Valor Final Alvo - Valor Inicial) / Período) / Valor Inicial) \* 100 | \- | (Valor Final Alvo / Valor Inicial) ^ (1 / Período) - 1) \* 100 |
| **Alteração Mensal (\#)** | \- | Alteração de meta (\#) / Período | \- |

> Se o usuário inserir **Target Change (\#)**:

|                                      | **Linear (\#)** |
| ------------------------------------ | ---------------------------------------------------------- |
| **Valor Final Alvo** | Valor inicial + alteração de meta (\#) |
| **Alteração (%)** | (Valor Final Alvo - Valor Inicial) / (Valor Inicial \* 100) |
| **Alteração mensal calculada** | Alteração de meta (\#)/ Período |
| **Alteração Mensal (\#)** | Alteração de meta (\#) / Período |

- **Meta Anual:** Use isto se você tiver valores de meta (acumulados ao longo de um ano). Em vez de simplesmente dividir as metas anuais por 12, o que cria um padrão escalonado, a calculadora ajudará a fornecer uma previsão suave.

![P3279#yIS1](/img/media/image297.png)

1. Selecione o primeiro mês da sua meta e o número de anos de metas disponíveis.
    - O QAT preencherá automaticamente as linhas anuais da tabela com base no primeiro mês escolhido da meta, presumindo que as metas sejam para períodos de 12 meses.

2. Na tabela, insira os valores do ano anterior à meta (o real) e de cada ano da meta.

3. Após a entrada dos dados, clique em “Calcular” (veja abaixo a abordagem de cálculo e as fórmulas).

4. Revise as diferenças entre as metas desejadas e os números calculados do QAT. Se as diferenças forem grandes, considere se a taxa de alteração segue um padrão linear ou exponencial e altere o **Tipo de modelagem** (Linear \#, % Linear ou % Exponencial) e recalcule se necessário.

5. Quando o usuário clica em “Aceitar”, o QAT preenche os valores calculados em dois locais:
    - Guia Valor do nó - Mês inicial e Valor inicial

    - Aba Modelagem/Transferência – uma linha é criada a cada período de 12 meses após o Valor Inicial. **Observe que estes não são os mesmos períodos dos anos-alvo** (veja abaixo).

> <u>AAbordagem de cálculo de meta anual:</u> QAT assume
que 1/12<sup>th</sup> do valor real anual foi alcançado no ponto médio
do ano real, e 1/12<sup>th</sup> das metas anuais será alcançado
até o ponto médio de cada ano-alvo. QAT então interpola efetivamente entre aqueles
pontos médios calculando uma taxa de mudança mensal linear ou exponencial. Este mês
a taxa de variação é então aplicada a ambos os anos - a segunda metade do primeiro ano
e a primeira metade do segundo ano. Para conseguir isso, o QAT calcula o seguinte
campos:

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Field</strong>
      </th>
      <th>
        <strong>Explicação / Fórmula</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>Alteração anual (%)</td>
      <td>
        <p>
          Mudança em relação ao ano anterior. Calculado para cada ano após o primeiro
          ano.
        </p>
        <p>
          = (Valor do ano atual - Valor do ano anterior) / (Valor do ano anterior)
        </p>
      </td>
    </tr>
    <tr class="even">
      <td>Alteração mensal (%) / Alteração mensal (#)*</td>
      <td>
        <p>ETaxa Exponencial = (Valor do Ano 2/Valor do Ano 1)^ (1/12) -1</p>
        <p>Taxa Linear = Variação Anual / 12</p>
      </td>
    </tr>
    <tr class="odd">
      <td>Node Mês**</td>
      <td>= n-7, onde n é o primeiro mês da meta.</td>
    </tr>
    <tr class="even">
      Valor do nó <td>No**</td>
      <td>
        <p>
          Assumido como o primeiro valor (o valor real) fornecido pelo usuário
          dividido por 12, uma vez que este é considerado o ponto médio do ano.
        </p>
        <p>= Valor do ano/12</p>
      </td>
    </tr>
    <tr class="odd">
      <td>CTotal calculado</td>
      <td>
        Começando com o mês do nó e o valor do nó e aplicando o valor mensal
        Alteração (% ou #), QAT calcula cada valor mensal e fornece somas
        os valores em períodos de 12 meses.
      </td>
    </tr>
    <tr class="even">
      <td>Diferença (alvo versus calculado, #)</td>
      <td>
        <p>
          Calculado para cada ano após o primeiro ano real. Essa diferença
          será grande se a variação anual variar significativamente entre os anos.
        </p>
        <p>= Total Calculado – Alvo</p>
      </td>
    </tr>
    <tr class="odd">
      <td>Diferença (alvo versus calculado, %) </td>
      <td>
        <p>
          Calculado para cada ano após o primeiro ano real. Essa diferença
          será grande se a variação anual variar significativamente entre os anos.
        </p>
        <p>= (Total Calculado - Meta) / Meta.</p>
      </td>
    </tr>
  </tbody>
</table>

> \* Esses valores não aparecem na seção ‘Calculadora de modelagem’, mas são preenchidos na tabela do nó de modelagem/transferência superior depois que o usuário clica em “aceitar”.  
> \*\* Esses valores não aparecem na seção ‘Calculadora de modelagem’, mas são preenchidos nos campos do nó principal após o uso clicar em “aceitar”.

#### Extrapolação

**<u>Purpose</u>:** A guia de extrapolação permite que os usuários prevejam valores futuros de nós extrapolando a partir de valores passados. Esta funcionalidade está disponível apenas para nós numéricos e é semelhante à tela ‘Extrapolação’, mas é conduzida em um nó de árvore. Para um determinado nó, os usuários devem escolher entre modelagem/transferência ou extrapolação, mas não podem usar ambas ao mesmo tempo. Mais detalhes sobre métodos de extrapolação podem ser encontrados em [Extrapolação](#extrapolação).

**<u>Usando esta guia</u>:**

1. Primeiro, marque a caixa de seleção ao lado de ‘Extrapolar’ no nó Adicionar/Editar.

2. Selecione ‘Mostrar dados’.

3. Na tabela, insira quaisquer valores reais e taxas de relatório para seus dados anteriores. A partir desta entrada, o QAT calculará os valores históricos ajustados. Se você precisar alterar o período dos dados, altere o mês inicial e final na parte superior do nó em ‘Mês inicial para dados históricos’.

<table>
  <thead>
    <tr class="header">
      <th>Mês</th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>May</th>
      <th>Jun</th>
      <th>Jul</th>
      <th>Aug</th>
      <th>Sep</th>
      <th>Oct</th>
      <th>Nov</th>
      <th>Dec</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        # de
        <br />
        Pacientes
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
    </tr>
    <tr class="even">
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td>
        Total
        <br />
        Previsto
      </td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

4. Se houver dados faltantes, use o botão verde Interpolar para preencher os dados faltantes. A interpolação só pode ser usada se houver dados faltantes em ambos os lados do mês.

5. (opcional) Selecione quais métodos de previsão você deseja exibir e atualize os parâmetros de extrapolação.

6. Clique em “Extrapolar”. Todas as previsões selecionadas serão exibidas na tabela principal e nos gráficos.

> _NOTA: Os valores mínimos necessários para obter gráficos e relatórios corretos para os diversos recursos estão abaixo:_
>
> _\* TES, Holt-Winters: Precisa de pelo menos 24 meses de dados de consumo real_
>
> _\* ARIMA: Precisa de pelo menos 14 meses de dados de consumo real_
>
> _\* Média Móvel, Semimédias e Regressão Linear: Precisa de pelo menos 3 meses de dados de consumo real_

7. (opcional) Na tabela, adicione quaisquer alterações manuais (+/-). Essas alterações são adicionadas ou subtraídas sobre os valores extrapolados.

8. Após revisar a tabela principal, a tabela de erros e os gráficos, selecione o método de previsão desejado na parte inferior da tela e clique em “Salvar”.

9. Observação: Se você alterar alguma entrada, será necessário extrapolar novamente para atualizar os cálculos, antes de selecionar um novo método.

#### Técnicas Avançadas

**<u>Dicas para casos de uso específicos</u>**:

- **Uso do produto atrasado ou faseado?** Às vezes, o consumo do produto é atrasado em relação aos demais níveis superiores da árvore. No nó **Forecasting Unit** relevante, use o campo **Lag** para indicar esse atraso.
  - Por exemplo, se o uso do produto começar 2 meses após as datas do nó pai, insira “2” neste campo.

  - Este campo também pode ser usado onde o produto muda ao longo do tempo - por exemplo, se as unidades de previsão A, B e C forem usadas em secessão por dois meses de cada vez, você pode configurar sua árvore com Unidade de previsão A (discreta para 2 meses, atraso = 0), Unidade de previsão B (discreta para 2 meses, atraso = 2), Unidade de previsão C (discreta para 2 meses, atraso = 4).

- **Uso discreto do produto por um longo período de tempo? (previsão do primeiro mês vs. previsão mês a mês):** O QAT tem a opção de calcular o uso discreto do produto em nós de unidades de previsão de duas maneiras:
  - antecipando a quantidade discreta consumida por paciente no mês 1 (escolha "Calcular" = "Tudo no primeiro mês") ou

  - desagregando a quantidade discreta consumida por paciente por mês (escolha "Calcular" = "Mês a Mês").

  - Por padrão, o QAT assumirá “Tudo no Primeiro Mês” (frontloading); no entanto, os usuários têm a opção de selecionar "Mês a mês" para o método alternativo. Este cálculo alternativo pode ser útil para Unidades de Planeamento (UP) que tenham padrões de baixo consumo durante um período de tempo ou se se aplicarem a um grupo de pacientes recém-iniciados. Por exemplo, se uma mulher grávida for obrigada a tomar um suplemento nutricional uma vez por mês durante a gravidez (nove meses), por padrão o QAT calcularia nove suplementos no mês 1 (fornecimento prévio). Sem o fornecimento prévio, o QAT calcularia um suplemento no mês 1, um suplemento no mês 2, um suplemento no mês 3 e assim por diante.

Cálculo de exemplo (tudo no primeiro mês vs. mês a mês) – **Modelagem <u>no</u> aplicada**:

- <u>All no primeiro mês</u>: São 10 pacientes
que necessitam de 1 frasco para tratamento ao longo de 6 meses; assim, o \#
de Unidades de Planejamento por paciente = 6. Ao calcular “Tudo no Primeiro Mês”,
A QAT irá antecipar a quantidade prevista e assumir que todas as 60 garrafas (10
pacientes \* 6 frascos por paciente) são previstos a cada mês.

**Total previsto no período de 6 meses = 360 garrafas**

<table>
  <thead>
    <tr class="header">
      <th>Mês</th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>May</th>
      <th>Jun</th>
      <th>Jul</th>
      <th>Aug</th>
      <th>Sep</th>
      <th>Oct</th>
      <th>Nov</th>
      <th>Dec</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        # de
        <br />
        Pacientes
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
    </tr>
    <tr class="even">
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td>
        Total
        <br />
        Previsto
      </td>
      <td>10</td>
      <td>20</td>
      <td>30</td>
      <td>40</td>
      <td>50</td>
      <td>60</td>
      <td>50</td>
      <td>40</td>
      <td>30</td>
      <td>20</td>
      <td>10</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

- <u>Mês a mês</u>: São 10 pacientes que
necessita de 1 frasco para tratamento ao longo de 6 meses; assim, o \# de
Unidades de planejamento por paciente = 6. Com “Mês a mês”, o QAT será uniformemente
distribuir a quantidade prevista ao longo do período. Assim, o QAT
suponha que 10 frascos estejam previstos no mês 1 (10 pacientes \* 1 frasco). Em
mês 2, esses mesmos 10 pacientes retornarão cada um para buscar outro frasco, enquanto um
novo grupo de pacientes de 10 também precisará de 1 frasco cada um \[(10 pacientes \* 1
frasco) + (10 pacientes \* 1 frasco)\] para um total de 20 frascos previstos em
mês 2 e assim por diante.

**Total previsto no período de 6 meses = 160 garrafas**

**Total previsto no período de 12 meses = 360 garrafas**

> Exemplo de cálculo (Tudo no Primeiro Mês vs. Mês a Mês) – **modelagem aplicada**:

- São 10 pacientes que necessitam de 1 frasco para tratamento ao longo de 6 meses; assim, o \# de Unidades de Planejamento por paciente = 6. Espera-se também um aumento de 5 novos pacientes por mês. Usando a lógica acima para calcular “Tudo no primeiro mês” e “Mês a mês”, o QAT calculará o seguinte número de frascos a serem distribuídos durante um período de 12 meses:

<table>
  <thead>
    <tr class="header">
      <th>Mês</th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>May</th>
      <th>Jun</th>
      <th>Jul</th>
      <th>Aug</th>
      <th>Sep</th>
      <th>Oct</th>
      <th>Nov</th>
      <th>Dec</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        # de
        <br />
        Pacientes
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>15</strong>
      </td>
      <td>
        <strong>20</strong>
      </td>
      <td>
        <strong>25</strong>
      </td>
      <td>
        <strong>30</strong>
      </td>
      <td>
        <strong>35</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
    </tr>
    <tr class="even">
      <td>Tudo no primeiro mês</td>
      <td>60</td>
      <td>90</td>
      <td>120</td>
      <td>150</td>
      <td>180</td>
      <td>210</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td>Mês a mês</td>
      <td>10</td>
      <td>25</td>
      <td>45</td>
      <td>70</td>
      <td>100</td>
      <td>135</td>
      <td>125</td>
      <td>110</td>
      <td>90</td>
      <td>65</td>
      <td>35</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

**Total Previsto (Tudo no Primeiro Mês) = 810 Garrafas**

**Total previsto (mês a mês) = 810 garrafas**

- **Deseja um valor específico para o número de unidades de planejamento por paciente?** Um usuário pode especificar um valor específico para o número de unidades de planejamento por unidade\* (discreta) ou por unidade\* por mês (contínuo) escolhendo “Não” para “Usar cálculo automático do QAT para \# de unidades de planejamento?” A menos que seja substituído por um usuário, o QAT utilizará o cálculo automático por padrão. (\* Neste caso, a unidade pode ser paciente, teste, cliente, etc.)
  - **Exemplo discreto:** Se cada 1 frasco de bupivacaína for usado a cada 5 procedimentos, então o número de unidades/procedimentos de previsão é de 0,2 frascos. Com uma unidade de planejamento de 5 frascos, o QAT calcula que 0,2/5 = 0,04 unidades de planejamento são usadas por procedimento. No entanto, um usuário pode alternar o botão de opção para “Não” e optar por substituir isso com conhecimento das taxas de uso reais e inserir 0,05 unidades de planejamento. Sempre adicione uma nota ao substituir o cálculo do QAT.

> ![](/img/media/image298.png)

- **Exemplo contínuo:** Se um paciente precisar de 1 comprimido por dia indefinidamente do frasco de 30 comprimidos TLD, o QAT calculará isso como 30,4167/mês ou 1,0139/dia para contabilizar meses que têm 30 dias, 31 dias, 28 dias, etc. forneça o valor de substituição de 1. Sempre adicione uma nota ao substituir o cálculo do QAT.

> ![](/img/media/image299.png)

- **Usos repetidos de previsão?** Se vários nós da unidade de previsão compartilharem as mesmas configurações, considere usar a [tela Modelo de uso](#usage-templates) para salvar seus usos comuns e, em seguida, usar o campo “Copiar do modelo” para preencher os campos nos nós da unidade de previsão.

- **Valores de nós agregados para cálculos adicionais? (Nós de funil):** Em alguns casos, os usuários podem querer vincular o valor de um nó a outro nó ou agregar vários nós em um nó antes de adicionar nós adicionais abaixo. \*\*Observe que esse recurso é diferente de vincular nós por meio de modelagem/transferência, que serve para vincular alterações em um nó a alterações em outro nó, em vez de agregação. Isso também é diferente de usar nós de agregação, que agregam apenas para cima e não permitem cálculos adicionais\*\*

> Casos de uso:

- <u>Testes de carga viral</u> são usados por diversas populações,
mas todas as populações utilizarão a mesma combinação de instrumentos. Comece com um grupo demográfico
árvore que termina em múltiplas populações. As diferentes populações precisam ser somadas
e os vários ramos de instrumentos ficam sob a soma.

- <u>MPacientes com malária</u> entram no sistema de saúde através
diferentes canais (agentes comunitários de saúde vs unidades de saúde pública), que
têm algoritmos de teste diferentes, mas quando um paciente testa positivo, ele recebe
a mesma “mistura” de tratamentos. As diferentes populações com resultados positivos precisam
somados e os vários regimes de tratamento ficam sob a soma

- Vários <u>Métodos Contraceptivos</u> diferem na forma como são calculados, mas todos derivam da mesma população do país, que precisa ser atualizada a cada quantificação, podendo ter modelagem ao longo do tempo. Uma árvore pode ser construída para implantes e injectáveis, e outra construída para preservativos, mas as duas árvores estão ligadas entre si no nó da população do país para que os seus valores permaneçam consistentes

Como vincular valores

1. Indique (em \# ou % nós) que eles são "**nós de origem**" ![](/img/media/image300.png)

> Figura 175 Indicando nós de origem

2. Crie novos "**nós de funil**" e selecione de quais nós de origem agregar.

> Observação: os nós do funil podem “ficar” em qualquer lugar da árvore – ou seja, você pode transformar o primeiro nó de uma árvore em um nó de funil ou construir nós de funil em qualquer nó de agregação, número ou porcentagem. Isso ocorre porque o valor dos nós do funil não deriva de seus pais, mas das fontes às quais estão vinculados.
>
> ![](/img/media/image301.png)

Figura 176 Adicionando nós de funil

3. Adicione quaisquer nós "filhos" sob os nós do funil - provavelmente serão os nós do produto.

> Os nós de funil permitem muita flexibilidade, pois podem ser usados em uma ou em várias árvores, podem ser usados em qualquer nível e

1. O usuário pode vincular **internamente em uma árvore**

![](/img/media/image302.png)

2. Os usuários podem vincular **externamente entre árvores** (nós de origem em uma árvore, nós de funil em uma árvore diferente)

> ![](/img/media/image303.png)

### Validações de modelagem

**<u>Purpose:</u>** Depois que uma árvore for construída, os usuários poderão usar a tela Validação de modelagem para visualizar a mudança ao longo do tempo. Isso é útil se a previsão tiver aplicado modelagem/transferências em um ou mais nós modais.

**<u>Usando esta tela:</u>**

- Vá para ‘Tree Forecast’ e selecione ‘Modeling Validations’.

- Selecione os filtros de tela usando os menus suspensos.
  - **Programa**: Você deve estar online para visualizar as versões do programa no servidor. Quando estiver off-line, apenas programas locais baixados poderão ser selecionados.

  - **Nível**:
    - Ao criar uma árvore, é útil renomear os níveis. O menu suspenso ‘nível’ nesta tela mostrará os diferentes nomes de nível que você escolheu. Isso torna mais fácil identificar o que os dados estão mostrando, em vez de usar o nível 0,1,2,3, etc.

    - A lista suspensa de níveis agrupará automaticamente a Unidade de Planejamento e a Unidade de Previsão em seus próprios níveis, caso esses nós estejam em níveis separados da sua árvore. Portanto, se você também tiver um nível chamado ‘Unidade de Previsão’, selecionar o nível ‘FU’ e o nível ‘Unidade de Previsão’ preencherá os mesmos resultados. No entanto, se você tiver uma unidade de previsão no nível 4 e outra no nível 5, o nível ‘FU’ mostrará ambas.

  - **Exibição do eixo X:** Os dados podem ser mostrados por meses (padrão) ou agregados por ano civil ou ano fiscal. (Ver Figura 154)
    - Ao agregar por ano, é útil usar o recurso ‘Mostrar Dados’ para confirmar quais meses estão incluídos no gráfico agregado e para confirmar se há dados para todos os meses esperados

    - Ao agregar por anos fiscais - você deve selecionar o mês em que seu ano fiscal começa. Por exemplo, se o seu ano fiscal de 2023 for de outubro de 2022 a setembro de 2023 - você pode selecionar a opção que . O QAT sempre mostrará os exemplos usando o ano civil atual.

  - **Exibição do eixo Y**: Os dados podem ser mostrados por número de unidades, bem como por porcentagem. (Ver Figura 149 versus Figura 147)

- Para visualizar os dados tabulares, selecione o botão azul ‘**Mostrar dados**’ no canto inferior direito da tela.

- Ao visualizar o **gráfico** o usuário pode ocultar elementos clicando na legenda. Para reexibir, clique novamente nessa parte da legenda.

- Esta tela pode ser **exportada** em formato CSV e PDF selecionando o(s) ícone(s) no canto superior direito.

![P3366#yIS1](/img/media/image304.png)

Figura 177: Tela de Validação da Modelagem (por número e mês)

![P3368#yIS1](/img/media/image305.png)

Figura 178: Tela de Validação da Modelagem (por percentual e mês)

![](/img/media/image306.png)![P3371#yIS1](/img/media/image307.png)

Figura 179: Tela de validação de modelagem (por ano civil versus ano fiscal)

### Validações de produto

**<u>Purpose:</u>** Depois que uma árvore for construída, os usuários poderão usar a tela Validações de produto para verificar o uso dos produtos na árvore de previsão. Isso é útil para ver vários produtos ao mesmo tempo.

**<u>Usando esta tela:</u>**

- Vá para ‘Tree Forecast’ e selecione ‘Validações de Produto’.

- Selecione os filtros de tela usando os menus suspensos.
  - Somente programas locais baixados podem ser selecionados nesta tela.

- Esta tela pode ser exportada em formato CSV e PDF selecionando o(s) ícone(s) no canto superior direito.

![P3382#yIS1](/img/media/image308.png)

Figura 180: Validações de Produto

### Usando modelos

#### Modelos de árvore

**<u>Purpose</u>:** Para permitir que os usuários comecem a projetar sua árvore de previsão a partir de um modelo pré-estabelecido. _Observação: os modelos de árvore são gerenciados no nível de região (global)._

**<u>Usando modelos de árvore:</u>**

**O usuário pode adicionar modelos de árvore em dois locais diferentes: tela ‘Gerenciar árvore’ ou tela ‘Modelos de árvore’. Nota: um programa deve ser baixado para criar um modelo de árvore.**

**Método 1:**

1. **Navegue até ‘Previsão de Árvore’** até **‘Gerenciar Árvores’.**

2. **No canto superior direito da tela, clique no menu suspenso azul ‘Criar ou Selecionar’ e selecione o modelo de árvore desejado.**

3. **No pop-up “Detalhes da árvore”:**
    1. **Confirme ou atualize as seções Programa, Método de Previsão, Nome da Árvore, Regiões e Notas.**

    2. **Se houver alguma unidade de planejamento que esteja no modelo, mas esteja faltando no programa, o QAT irá sinalizá-la em uma seção inferior deste pop-up (veja** Figura 150**), onde uma tabela exibe quaisquer unidades de planejamento ausentes.**
        1. **Se houver unidades de planejamento que estão faltando no programa (incluindo aquelas inativas ou desmarcadas para Tree Forecast) e são recomendadas para utilização do modelo de árvore escolhido, os usuários podem clicar no botão “Adicionar/atualizar unidades de planejamento selecionadas” e o QAT adicionará automaticamente as unidades de planejamento ao programa do usuário.**

        2. **Se o usuário desejar criar a árvore sem as unidades de planejamento recomendadas, poderá clicar no botão “Criar árvore sem adicionar unidades de planejamento” e as unidades de planejamento não serão adicionadas ao programa do usuário. Isso pode ser útil quando um usuário deseja utilizar uma estrutura em árvore, mas tem diferentes unidades de planejamento que gostaria de prever.**

![P3400#yIS1](/img/media/image309.png)

Figura 181 Pop-up de detalhes da árvore com 'Unidades de planejamento ausentes'

3. **Observe que todos os detalhes da árvore podem ser atualizados posteriormente clicando no ícone de engrenagem** ![P3402#yIS1](/img/media/image310.png) **ao lado do menu suspenso da árvore e as unidades de planejamento podem ser adicionadas navegando até a tela ‘Atualizar [unidades de planejamento](07-forecasting-module-program-data.md#planning-units)’.**

<!-- lista final -->

4. **O QAT criará automaticamente o modelo de árvore para o programa do usuário e navegará até a tela ‘Construir Árvore’.**

**Método 2:**

1. > **Navegue até ‘Previsão de árvore’** até **‘Modelos de árvore’**

> ![P3407#yIS1](/img/media/image311.png)

Figura 182: Tela de modelos de árvore

2. > **Revise as diferentes opções de modelo de árvore, prestando atenção especial ao Método de Previsão e ao tipo de Nó Inicial. Os usuários podem clicar em qualquer linha para revisar o modelo de árvore, sua estrutura e vários nós.**
    1. > **Observação: os nós que começam com um nó Porcentagem são usados especificamente para modelos de ramificação e não podem ser usados como um modelo de árvore. Os usuários devem primeiro criar um nó inicial (Número ou Agregação), antes de adicionar um modelo de ramificação (para obter mais informações, consulte [Modelos de ramificação](#branch-templates)).**

3. > **Depois que o usuário revisar o modelo de árvore, ele poderá clicar em “Usar este modelo” no canto superior direito da tela.**

4. > **Continue seguindo as etapas 3 a 4 do Método 1 para finalizar a criação do modelo de árvore.**

**Recomendações gerais sobre modelos de árvore:**

- **Em geral, os modelos de árvore contêm valores de “0” e “0%” em todos os níveis, exceto nos nós das unidades de previsão e planejamento. O usuário pode então personalizar a árvore com base em seus requisitos – por exemplo:**
  - **Clique em cada nó para editar os valores para valores reais.**

  - **Renomeie qualquer título de nó.**

  - **Substitua qualquer produto por:**
    - **editar o nó da unidade de previsão – mas certifique-se de abrir também o nó da unidade de planejamento filho e selecionar a unidade de planejamento correta.**

    - **excluindo os nós da unidade de previsão e planejamento e adicionando novos.**

  - **Copie quaisquer nós ou ramificações (o usuário pode copiar vários nós copiando o topo de uma ramificação de nós).**

  - **Exclua quaisquer nós ou ramificações.**

  - **Adicione notas para explicar quaisquer fontes de informação.**

- Se houver um modelo de árvore que beneficie a comunidade QAT, os usuários podem solicitá-lo através do [sistema de helpdesk de tickets QAT](02-getting-started.md#tickets-for-addingupdating-users-and-master-data).

#### Modelos de filial

**<u>Purpose:</u> Os modelos de ramificação permitem que os usuários adicionem um modelo de árvore, incluindo a estrutura e todos os vários nós filhos como uma ramificação** <u>dentro de </u> **uma árvore pré-existente.** _Observação: os modelos de ramificação/árvore são gerenciados no nível de região (global)._ Se houver um modelo de árvore/filial que possa beneficiar a comunidade QAT, os usuários podem solicitar através do [Sistema de Helpdesk QAT Ticketing](02-getting-started.md#tickets-for-addingupdating-users-and-master-data).

**<u>Usando modelos de ramificação:</u>**

1. > **Os usuários devem primeiro revisar as diferentes opções de modelo de árvore/ramo, prestando especial atenção ao Método de Previsão e ao tipo de Nó Inicial na tela ‘Previsão de Árvore’** à **‘Modelo de Árvore’.**

2. > **Navegue até ‘Previsões de árvores’** até **‘Gerenciar árvores’ e selecione a árvore desejada.**

3. > **Clique no símbolo** ![P3431#yIS1](/img/media/image312.png) **. Isso adicionará o modelo de ramificação como filho ao nó selecionado.**
    1. > **Com base no nó pai escolhido, o QAT exibirá apenas modelos de ramificação que podem ser adicionados como filhos em potencial com base no nó inicial na tela 'Modelo de árvore' (consulte [Tipos e funções de nós](#node-types-functions) para as opções de filhos em potencial para cada tipo de nó).**

![P3433#yIS1](/img/media/image313.png)

Figura 183: Adicionando um modelo de filial

4. > **Depois que um modelo de filial for escolhido, clique em “Adicionar filial”.**

5. > **Se houver alguma unidade de planejamento que esteja no modelo de filial, mas esteja faltando no programa, o QAT irá sinalizá-la em uma seção inferior deste pop-up (veja** Figura 153**), onde uma tabela exibe quaisquer unidades de planejamento ausentes.**
    1. > **Se houver unidades de planejamento que estão faltando no programa (incluindo aquelas inativas ou desmarcadas para Tree Forecast) e são recomendadas para utilização do modelo de ramificação escolhido, os usuários podem clicar no botão “Adicionar/atualizar unidades de planejamento selecionadas” e o QAT adicionará automaticamente as unidades de planejamento ao programa do usuário.**

    2. > **Se o usuário desejar adicionar a filial sem as unidades de planejamento recomendadas, o usuário poderá clicar no botão “Adicionar filial sem adicionar unidades de planejamento” e as unidades de planejamento não serão adicionadas ao programa do usuário. Isso pode ser útil quando um usuário deseja utilizar uma estrutura de filial, mas tem diferentes unidades de planejamento que gostaria de prever.**

![P3440#yIS1](/img/media/image314.png)

Figura 184: Adicionando PUs de um Modelo de Filial a um Programa

#### Modelos de uso

**<u>Purpose</u>:** Os modelos de uso permitem que o usuário preencha os detalhes de um nó de unidade de previsão de uma só vez. Os modelos de uso podem ser globais ou específicos do programa. Observe que os modelos específicos do programa são gerenciados pelos administradores do programa de previsão. O usuário deve estar online para gerenciar modelos, mas pode estar offline para usá-los.

**<u>Para usar modelos de uso</u>**

![P3446#yIS1](/img/media/image315.png) ![P3446#yIS2](/img/media/image316.png)

Figura 185: Usando um modelo de uso em um nó de unidade de previsão

1. **Garantir que o programa possua a unidade de planejamento relacionada ao modelo de uso. Lembre-se de que os modelos de uso são baseados na unidade de previsão, mas cada unidade de planejamento está relacionada a uma unidade de previsão específica. Por exemplo, se o programa tiver a unidade de planejamento “_Lopinavir/Ritonavir 200/50 mg Comprimido, 120 Comprimidos_”, todos os modelos de uso com a unidade de previsão associada “_Lopinavir/Ritonavir 200/50 mg Comprimido_” estarão disponíveis ao projetar a árvore.**

2. **Na tela Construir Árvore, crie ou edite um nó de unidade de previsão existente (consulte a Seção** **B1 para obter mais informações). Se estiver criando um novo nó, certifique-se primeiro de selecionar o tipo de nó como “unidade de previsão” e verifique novamente se os campos ‘mês’ e ‘porcentagem do pai’ estão corretos.**

3. **(opcional) Selecione uma categoria do Tracer para filtrar os modelos de uso disponíveis**

4. **Usando o menu suspenso “Copiar do modelo”, selecione os modelos de uso desejados**

5. **Todos os campos subsequentes serão preenchidos**

6. **Clique em “Atualizar” para salvar as alterações.**

**<u>Para gerenciar modelos de uso</u> (**somente administradores do programa de previsão)

> ![P3456#yIS1](/img/media/image317.png)

Figura 186: Gerenciando modelos de uso

1. **Certifique-se de que o QAT esteja no modo online e navegue até Tree Templates \> Usage Templates. Os modelos globais ficarão esmaecidos e não poderão ser editados.**

2. **Para criar um novo modelo de uso, clique em “adicionar linha”. Para editar um modelo de uso existente, vá para a próxima etapa.**

3. **Preencha ou edite a linha do modelo de uso conforme desejado**
    - > **A coluna “nome de uso” é o que aparecerá no menu suspenso.**

    - > **Use a barra de rolagem horizontal para acessar todos os campos da tabela.**

    - > **Use as dicas de ferramentas (passe o mouse sobre os ícones “i”) para orientá-lo**

    - > **Use a penúltima coluna “Uso em palavras” para verificar se tudo foi digitado corretamente.**

    - > **Para produtos usados mais de uma vez, existe uma calculadora para ajudá-lo a converter intervalo em frequência. Clique com o botão direito na linha que você está editando para abrir a tela “Calcular frequência de uso”. Insira o intervalo e a unidade de frequência desejada (dia, mês, semana ou ano) e o número e a unidade de frequência calculada serão preenchidos na tabela.**

> ![P3467#yIS1](/img/media/image318.png)

Figura 187: **Tela “Calcular frequência de uso”**

4. **Clique em “Enviar” quando terminar.**