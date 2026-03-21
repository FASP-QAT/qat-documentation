---
id: forecasting-module-program-data
title: "Módulo de Previsão: Dados do Programa"
sidebar_label: "Módulo de Previsão: Dados do Programa"
sidebar_position: 7
---
# Módulo de Previsão: Dados do Programa

## Introdução

A previsão ![](/img/media/image234.png)A é uma estimativa/predição das quantidades de produtos a serem consumidos/utilizados por clientes ou consumidores em um período futuro. No QAT, o processo de previsão é geralmente conduzido em uma ordem específica (ver _Figura à direita_).

Primeiro, configure um programa usando Atualizar informações do programa ou selecione um programa anterior usando Baixar ou Excluir programa. Depois de baixar o programa, adicione informações sobre o período de previsão, limite (%), produtos e outras configurações do programa nas telas Atualizar configurações de versão e Atualizar unidade de planejamento. No QAT, os usuários podem criar previsões projetando árvores de previsão (previsão baseada em árvore) ou aproveitando o consumo histórico (previsão baseada em consumo) para chegar a uma previsão final. Para cada produto escolha metodologia de consumo ou árvore, ou ambas\!

**Previsões baseadas no consumo** são mais úteis em programas maduros e estáveis ​​que possuem uma oferta completa de produtos e dados confiáveis. Este método pode ser o preditor mais confiável do consumo futuro se o uso futuro for muito semelhante ao passado. Idealmente, estão disponíveis mais de 24 meses de dados mensais de consumo real. Se os dados necessários para uma previsão baseada no consumo não estiverem disponíveis ou não forem úteis na previsão do consumo futuro, realize uma **previsão baseada em árvore**, que acomode de forma flexível todos os outros métodos de previsão, como morbidade, serviços e métodos demográficos. Os usuários podem especificar alterações ao longo do tempo em uma árvore, especificando diretamente a taxa de alteração ou extrapolando dados anteriores.

Depois que as diversas previsões forem criadas, os usuários poderão navegar até a seção Análise e resultados da previsão para visualizar e comparar as previsões e selecionar a previsão final.

## Informações do programa

**<u>Purpose:</u>** Permite que os usuários atualizem as informações básicas do programa após a criação inicial.

**<u>Usando esta tela:</u>**

_Administradores do programa_ podem usar a tela principal para:

- Atualize o nome do programa de previsão, o gerente do programa e o campo Notas. Os administradores do programa também podem optar por desativar ou ativar um programa nesta tela. Para alterações relacionadas à área técnica, organização ou nome de exibição do programa, os Administradores do Programa devem solicitar a alteração a um Administrador do Realm por meio do [Sistema QAT Helpdesk.](02-getting-started.md#qat-helpdesk-and-tickets)

_Realm Admins_ podem usar a tela principal para:

- Atualize a Área Técnica, Organização, Nome do Programa de Previsão, Nome de Exibição do Programa, Gerente do Programa e o campo Notas. Os administradores do Realm também podem optar por desativar ou ativar um programa nesta tela.

## Configurações de versão

![P2710#yIS1](/img/media/image235.png)

**\*<u>Purpose</u>**: permite que os usuários atualizem as configurações do programa e visualizem detalhes sobre versões anteriores. Para visualizar os resultados da previsão, use as telas na seção [Saída da análise de previsão](09-forecasting-module-reports-and-outputs.md#forecasting-module-reports-and-outputs).\*

**\*<u>Usando esta tela</u>**:\*

_Nota: Um programa de previsão deve ser baixado para atualizar as configurações da versão. Todas as versões anteriores de cada programa de previsão estarão em formato somente leitura; apenas a versão local está disponível para atualização e edição._

Nesta tela, os usuários podem:

1. Atualize as seguintes configurações do programa local baixado:
    1. **Notas de versão** – um campo de texto editável de formato livre que permite aos usuários um local para fornecer notas gerais sobre uma versão de previsão específica. Também é visível e editável ao carregar um programa.

    2. **Data de upload/Enviado pelo usuário** – indica o usuário que carregou cada versão da previsão no servidor e em que data. Útil para compreender o ciclo de vida de cada programa.

    3. **Início da previsão, período de previsão (meses) e término da previsão** – com base na data de início e término, o QAT calculará automaticamente o período de previsão em meses. Alternativamente, os usuários podem optar por inserir uma data de início da previsão e o número de meses no período de previsão, e o QAT calculará automaticamente a data de término da previsão.

| Nome da coluna | Descrição | Usado onde?                                                                                                       |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Fator de conversão (FU:PU)** | Campo não editável que fornece informações sobre o fator de conversão entre a PU escolhida e a UF associada.                                                                                                                                                     | Telas de seleção (Entrada e Ajuste de Dados, Comparar e Selecionar, Previsão Mensal) permitem entrada/visualização de dados em PU ou FU |
| **Previsão de Consumo?** | Para cada PU, os usuários podem escolher um ou ambos os métodos. Caso o tipo de previsão esteja marcado para a PU, ela aparecerá nas telas Consumo e Árvore.                                                                                                                    | Construindo suas previsões e depois analisando na tela Comparar e Selecionar |
| **Previsão da árvore?** |                                                                                                                                                                                                                                                                       |                                                                                                                   |
| **Estoque disponível** _(início do período de previsão)_ | O estoque (quantidade) real ou projetado no início do período de previsão. Os usuários podem utilizar o módulo de planejamento de fornecimento para determinar o SOH, se desejarem.                                                                                                     | Resumo da previsão para calcular a lacuna de compras |
| **Remessas Existentes** _(período de previsão)_ | Quantidade total de remessa existente durante o período de previsão. Os usuários podem utilizar o módulo de planejamento de fornecimento para determinar a quantidade de remessa existente (_recomenda-se não incluir quantidades de remessa planejadas, a menos que haja uma alta probabilidade de pedido)_. |                                                                                                                   |
| **Meses de estoque desejados** _(fim do período de previsão)_ | O MOS que você deseja ter no final da sua previsão.                                                                                                                                                                                                                 |                                                                                                                   |
| **Tipo de preço** | Escolha um agente de compras específico ou “Personalizado”.                                                                                                                                                                                                                      | Resumo da previsão para calcular o custo da lacuna de compras |
| **Preço unitário**

| Preenchido automaticamente com base no agente de compras ou inserido manualmente por um usuário.                                                                                                                                                                                                 |                                                                                                                   |

4. **\# De Dias no Mês** – usado em previsões baseadas em consumo para ajustar o consumo real em relação ao número de dias de falta de estoque. Um usuário pode escolher entre 15 e 31 dias; no entanto, o QAT será padronizado como “dias corridos”. Este campo pode ser útil se uma instalação quiser usar apenas dias úteis (~20 dias) para calcular a taxa de ruptura de estoque.

> ![P2723#yIS1](/img/media/image236.png)

5. **Porcentagem de frete** – usada em telas de saída de previsão e relatórios para estimar os custos totais de aquisição. Este campo não é obrigatório e pode ser atualizado a qualquer momento.

<!-- lista final -->

1. **Limite de previsão** – esta métrica é usada na tela Comparar e Selecionar. QAT compara previsões de consumo e previsões de árvores disponíveis. Para qualquer previsão de árvore, o QAT sinalizará a porcentagem acima da previsão de consumo mais alta ou abaixo da previsão de consumo mais baixa. A comparação será destacada em texto vermelho se estiver fora dos percentuais limites definidos pelo usuário nesta tela. Assumindo dados de consumo reais confiáveis, esta comparação ajuda os usuários a determinar se suas previsões de árvore são realistas. Estes dois campos, alto e baixo, não são obrigatórios e podem ser atualizados a qualquer momento.

<!-- lista final -->

2. Veja um ciclo de vida histórico de cada programa em todas as suas versões.
    1. Veja todas as configurações de versão acima

    2. (Clique com o botão direito) Visualize a tela [Validação de previsão](03-managing-programs-and-versions.md#upload) (mesma tela visualizada durante o processo de upload) – que lista previsões faltantes, dados faltantes e todas as notas. Isso facilita para os usuários entender as previsões anteriores sem baixá-las. Use as telas [Previsão mensal](09-forecasting-module-reports-and-outputs.md#monthly-forecast), [Resumo da previsão](09-forecasting-module-reports-and-outputs.md#forecast-summary) ou [Comparação de versões](03-managing-programs-and-versions.md#version-comparison) para visualizar os resultados da previsão de outras versões.

## Unidades de planejamento

**\*<u>Purpose</u>**: permite que os usuários adicionem e atualizem unidades de planejamento e as configurações de unidade de planejamento associadas que serão usadas em suas previsões e para cálculo nas telas de saída de previsão.\*

**<u>Usando esta tela</u>**:

_Nota: Um programa de previsão deve ser baixado para adicionar ou atualizar unidades de planejamento e suas configurações._

1. **\*Adicionar unidades de planejamento** – Os usuários precisarão adicionar quaisquer unidades de planejamento nesta tela que gostariam de prever. As unidades de planejamento podem ser adicionadas manualmente ou copiadas e coladas na tela ‘Atualizar unidade de planejamento’ do módulo Planejamento de fornecimento, se a unidade de planejamento já tiver sido adicionada ao plano de fornecimento de um usuário.\*

2. **\*Atualizar configurações da unidade de planejamento** – Os usuários também podem usar esta tela para atualizar quaisquer unidades de planejamento e suas configurações associadas. Os usuários devem sempre Master Data Sync após atualizar qualquer configuração para ver as alterações ocorrendo em outras telas do módulo de previsão. As configurações da unidade de planejamento e breves explicações são as seguintes:\*

Tabela 9: Configurações da unidade de planejamento do módulo de previsão

## Unidades de Equivalência

**<u>Purpose</u>**: permite que os usuários gerenciem unidades de equivalência. As Unidades de Equivalência (EUs) permitem que os usuários agreguem dados de produtos diferentes, mas relacionados. Eles permitem que os usuários agrupem diversas unidades de previsão para agregação em [Relatórios e resultados](09-forecasting-module-reports-and-outputs.md#forecasting-module-reports-and-outputs).

**<u>Usando esta tela</u>:**

**Mapeamento de unidades de equivalência para unidades de previsão**

Utilize a tela principal para gerenciar mapeamentos entre unidades de equivalência e unidades de previsão. Os mapeamentos em nível de território estão disponíveis para todos os usuários e são indicados pelo Programa "Nível de Reino". No entanto, os administradores do programa podem criar mapeamentos específicos do programa (adicionando uma linha e marcando-a para um EU específico). Se houver algum conflito, os mapeamentos específicos do programa terão precedência e serão usados ​​em vez dos mapeamentos em nível de região.

Por exemplo, um usuário está prevendo medicamentos para tratar QATite, uma condição em que as pessoas não conseguem parar de usar QAT. O usuário pode prever por diferentes tratamentos (diferentes unidades de previsão), mas deseja ver como eles são agregados. Para o exemplo abaixo, um paciente precisaria de 14 comprimidos de FASPicilina, ou 1 tubo de FASPasona (creme), ou 0,5 frascos de FASPicaína, ou 2 barras de chocolate para tratar QATite. Assim, caso pacientes diferentes sejam submetidos a tratamentos diferentes, um utilizador pode agregar esses diferentes tratamentos criando/utilizando uma Unidade de Equivalência (EU).

| **Unidade de Equivalência** | **Unidade de previsão** | **Conversão para a UE** | **Tratamento médio necessário para curar QATite** |
| ----------------------- | ---------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 1 Tratamento para QATite | 1 comprimido de FASPicilina | 14 | 1 comprimido por dia durante 2 semanas |
| 1 Tratamento para QATite | Tubo de 5mL de FASPasone (creme) | 1 | 0,5mL/dia aplicado na testa durante 10 dias (1 tubo no total) |
| 1 Tratamento para QATite | Frasco de 2mL de FASPicaína (injeção) | 0,5 | Uma injeção de 1mL (duas pessoas podem compartilhar um frasco) |
| 1 Tratamento para QATite | 1 barra de chocolate branco | 2 | 2 barras de chocolate. O tipo de chocolate não importa, pois todo chocolate contém a forma natural da FASPicilina. |
| 1 Tratamento para QATite | 1 barra de chocolate amargo | 2 |                                                                                                                        |
| 1 Tratamento para QATite | 1 barra de chocolate ao leite | 2 |                                                                                                                        |

Tabela 10: Exemplo da UE - Tratamento para QATite

**Etapas para criar e gerenciar unidades de equivalência**

1. Um usuário deve primeiro verificar se a UE já existe nos dados mestres do QAT navegando até “Realm Masters” à “Equivalency Units”.

2. Se a UE não existir, clique em “Gerenciar Unidade de Equivalência” e depois em “Adicionar Linha” e os usuários poderão inserir a UE que gostariam de utilizar para seu programa específico em todo o QAT. Esta UE será específica do programa e não estará disponível para outros programas. Se houver uma UE que possa beneficiar a comunidade QAT, os usuários podem solicitá-la através do [Sistema de suporte técnico de tickets QAT](02-getting-started.md#tickets-for-addingupdating-users-and-master-data).

> ![P2819#yIS1](/img/media/image237.png)

3. Se a UE existir e um usuário desejar mapear unidades de previsão para a UE existente, ele poderá clicar em “Adicionar linha” na tela principal e mapear a unidade de previsão para a UE em nível de programa. Se um usuário quiser mapear a unidade de previsão para uma UE _em nível de reino_ existente e achar que isso beneficiaria a comunidade QAT, os usuários podem solicitá-la por meio do [Sistema de suporte técnico de tickets QAT](02-getting-started.md#tickets-for-addingupdating-users-and-master-data).

> ![P2821#yIS1](/img/media/image238.png)

4. Os usuários também podem editar EUs específicos do programa na tela principal.

5. O usuário deve clicar em “Enviar” quando terminar a edição e o Master Data Sync, para ver o EU disponível nos menus suspensos nas telas Relatórios e Resultados.

**Onde as unidades de equivalência são usadas?**

- Na tela ‘Comparar e Selecionar’ do Módulo de Previsão, o usuário pode exibir suas previsões em UEs. Usando o exemplo acima, um usuário que prevê 10.000 barras de chocolate amargo por mês poderia optar por exibir sua previsão na UE de “Tratamentos para QATite” e, em vez disso, exibir sua previsão como 5.000 “Tratamentos para QATite” por mês.

- Na tela ‘Previsão Mensal’ do Módulo de Previsão, o usuário pode exibir as previsões selecionadas por unidades de planejamento individuais ou agregar entre unidades de planejamento se estiverem conectadas por UEs. Por exemplo, se um usuário previsse 10.000 barras de chocolate amargo e 10.000 barras de chocolate branco e 14.000 por mês, o QAT exibiria 7.000 “Tratamentos para QATite”.

- Na tela ‘Relatório de Erros de Previsão (Mensal)’ do Módulo de Planejamento de Fornecimento, o usuário também pode visualizar o consumo real e previsto em Unidades de Equivalência.

| **Previsão** | **Equivalente em “Tratamentos para QATite”** |
| ------------------------------ | ------------------------------------------ |
| 10.000 barras de chocolate amargo | 5.000 |
| 10.000 barras de chocolate branco | 5.000 |
| 14.000 comprimidos de FASPicilina | 1.000 |
| **Total** | **7.000** |