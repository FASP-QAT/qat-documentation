---
id: supply-planning-module-reports
title: "Módulo de Planejamento de Suprimentos: Relatórios"
sidebar_label: "Módulo de Planejamento de Suprimentos: Relatórios"
sidebar_position: 6
---
# Módulo de Planejamento de Suprimentos: Relatórios

Os relatórios QAT permitem ao usuário extrair e visualizar seus dados de planejamento de fornecimento em gráficos, tabelas e outros formatos visuais. O usuário também poderá navegar, classificar, filtrar e visualizar os dados para necessidades específicas. Os relatórios QAT produzem visualizações e exibem dados de uma forma que pode apoiar a tomada de decisões.

Os relatórios são divididos em **Relatórios Globais** e **Relatórios Específicos do Programa**. Os relatórios específicos do programa são exibidos offline e online. Porém, os Relatórios Globais são mostrados apenas no modo online e estão disponíveis apenas para Usuários Globais, como o Administrador do Realm e o Administrador da Aplicação.

**Observação:** Todos os relatórios QAT podem ser exportados para um arquivo Excel CSV, bem como para o formato PDF. Além disso, todos os gráficos permitem que o usuário passe o mouse sobre um visual para obter uma dica de ferramenta com mais informações.

## Lista de problemas do QAT

**Objetivo:** Uma revisão do plano de fornecimento integrada ao QAT que permite uma verificação de qualidade para identificar facilmente dados/problemas problemáticos e corrigi-los antes de enviar um plano de fornecimento para o servidor como uma versão “rascunho” ou “final”.

- **Acessível para:** Administradores de Realm, Administradores de Programa e Usuários de Programa

- **Navegação:** Relatórios  Lista de problemas QAT

![P2309#yIS1](/img/media/image198.png)

Figura 120: Lista de Problemas QAT

**Observação:** Somente o problema associado aos programas que foram baixados pelo usuário em sua máquina local aparecerá na lista de problemas do QAT. Para obter detalhes sobre como baixar programas e versões específicas, consulte a seção [Baixar Programa](03-managing-programs-and-versions.md#downloaddelete) do Manual do Usuário.

### Noções básicas da lista de problemas do QAT

Cada problema sinalizado na lista de problemas do QAT terá uma linha separada. Terá a unidade de planeamento associada, uma descrição do problema, uma sugestão sobre como resolver o problema, o estado do problema, notas do utilizador, uma caixa de verificação para identificar se o problema foi revisto, as últimas notas do revisor (conforme aplicável), a data em que foi revisto pela última vez e a criticidade.

![P2315#yIS1](/img/media/image199.png)

Figura 121: Lista de Problemas de Aspectos QAT

Os problemas de QAT podem ser subdivididos em quatro categorias principais: Qualidade de Dados, Cronograma de Aquisições, Planejamento de Fornecimento e Outros. Eles também são atribuídos a diferentes níveis de criticidade: Baixo (amarelo), Médio (laranja) e Alto (vermelho). A criticidade informa aos usuários até que ponto um problema afeta a qualidade do plano de abastecimento. No entanto, independentemente da criticidade, todos os problemas devem estar “Em conformidade” ou “Abordados” na Lista de Problemas do QAT para serem carregados como Versão Final. Existem cinco status principais associados aos problemas individuais na Lista de Problemas do QAT:

1. **Em conformidade** – O problema foi resolvido através da entrada de dados pelo usuário. O status será alterado automaticamente e nenhuma nota será necessária.

> _Exemplo – Uma unidade de planejamento está sem consumo real nos últimos 3 meses. Um usuário insere dados de consumo reais dos últimos 3 meses. QAT marca isso automaticamente como 'em conformidade'._

2. **Resolvido** – O problema foi marcado manualmente pelo revisor como ‘resolvido’. O revisor utiliza esse status se for improvável que esse problema seja corrigido por meio da entrada de dados e também não exija mais anotações no futuro. Somente um revisor pode marcar um problema como ‘resolvido’.

> _Exemplo – Uma unidade de planejamento é sinalizada por não seguir a previsão dinâmica. O usuário insere uma observação informando que esta unidade de planejamento não segue a previsão dinâmica, pois não é um produto sazonal. O revisor marca isso como resolvido porque a explicação provavelmente não mudará no futuro._

3. **Endereçado** – O problema foi marcado manualmente pelo revisor ou pelo usuário como ‘resolvido’. O usuário aplica esse status quando não consegue resolver o problema por meio da entrada de dados. Este status deve ser acompanhado de uma nota. O revisor utiliza este status se o problema não puder ser resolvido neste período de revisão, mas será resolvido no futuro, provavelmente em alguns períodos, e não antes da próxima revisão.

> _Exemplo – Uma unidade de planejamento em fase de desativação tem apenas 8 meses de consumo previsto no futuro, em vez de 18. Isso é aceitável, pois é uma unidade de planejamento em fase de desativação, mas o usuário ainda precisará desativar a unidade de planejamento quando ela for totalmente descontinuada, e é por isso que o problema é marcado como ‘resolvido’ em vez de ‘resolvido’._

4. **Aberto** – Este problema foi sinalizado automaticamente pelo QAT ou o problema foi marcado manualmente pelo revisor como ‘Aberto’. O revisor poderia usar esse status ao rejeitar um plano de fornecimento para indicar que as notas não foram aceitas.

> _Exemplo – Um usuário possui uma unidade de planejamento que não possui dados de consumo real nos últimos 3 meses. QAT sinalizará automaticamente isso como 'Aberto'. Se o problema tiver sido 'Resolvido' quando carregado e aprovado, o problema voltará ao status 'Aberto' no próximo envio._

5. **Revisado -** O problema foi revisado pelo revisor do plano de fornecimento. Este campo só pode ser editado pelo revisor do plano de fornecimento.

### Fechando e resolvendo problemas

1. > **Fechando um problema via entrada de dados**: para alterar um problema ‘Aberto’ para um que esteja ‘Em conformidade’, o usuário precisará completar a sugestão fornecida na coluna “Sugestão” para o problema específico. Por exemplo, a sugestão pode ser “fornecer o consumo real” para meses específicos. Assim, o usuário precisará:

![P2340#yIS1](/img/media/image200.png)

Figura 122: Exemplo de Fechamento de um Problema

1. Navegue até a tela de Entrada de Dados de Consumo clicando diretamente no Problema (que abrirá uma nova janela QAT) ou clicando em Dados do Plano de Fornecimento  Dados de Consumo.

2. Na tela de entrada de dados de consumo o usuário adicionará o consumo real dos meses solicitados. Para obter instruções sobre como adicionar consumo, consulte [Dados de consumo](04-supply-planning-module-program-data.md#consumption-data).

3. Navegue de volta para a lista de problemas de QAT e clique em Recalcular para atualizar a lista de problemas de QAT para incluir a adição mais recente de dados de consumo real. O problema sinalizado anteriormente deve agora estar “Em conformidade” e não ser mais sinalizado pela Lista de Problemas do QAT.

![P2346#yIS1](/img/media/image201.png)

Figura 123: Recalcular/Atualizar lista de problemas de QAT

1. **Resolvendo um problema com um comentário**: Se um problema que foi sinalizado na lista de problemas do QAT não puder ser corrigido e tornado 'Em conformidade' por meio da entrada de dados, conforme recomendado na coluna "Sugestão", um usuário pode fornecer um comentário e alterar manualmente o status para 'Abordado'. Se um usuário não conseguir resolver esse problema por meio da entrada de dados, ele precisará resolver o problema:
    1. Clique duas vezes no menu suspenso Status do problema desse problema e escolha “Endereçado”. Os usuários devem fornecer uma nota explicativa na coluna Notas para todos os problemas marcados como “Abordados”.

![P2354#yIS1](/img/media/image202.png)

Figura 124: Resolvendo um Problema e Adicionando uma Nota

> **Nota:** o usuário também pode ver na tela “Detalhes da Transação do Problema” clicando com o botão direito no Problema. Esta área mostrará ao usuário notas anteriores, revisores, datas revisadas, etc.

![P2358#yIS1](/img/media/image203.png)

Figura 125: Clique com o botão direito na transação problemática

![P2360#yIS1](/img/media/image204.png)

Figura 126: Detalhes da transação problemática

2. Clique em “Atualizar”. A Lista de Problemas do QAT incluirá agora a adição mais recente de notas explicativas e o status.

### Lista de problemas do QAT: explicação dos problemas

- **Insumos de consumo real recentes ausentes (nos últimos 3 meses)**

> Se uma unidade de planejamento não tiver entradas recentes de dados de consumo real nos últimos três meses, ela será sinalizada na Lista de Problemas QAT. Se as entradas forem preenchidas para algum destes últimos três meses, seja um mês ou todos os três meses, o problema não será sinalizado pelo sistema.

- **Quaisquer lacunas nos últimos 6 meses (consumo real)**

> O QAT verifica se uma unidade de planejamento está faltando um mês ou vários meses de entradas de consumo real recentes entre duas entradas de consumo real no intervalo especificado de 6 meses. Este problema procura lacunas acidentais nos insumos de consumo reais. Se houver alguma lacuna nos dados de consumo real nos últimos 6 meses, a Lista de Problemas do QAT sinalizará isso como um problema. Por exemplo, um usuário insere o consumo real para setembro de 2022, dezembro de 2022 e janeiro de 2023. Isso será sinalizado pela lista de problemas QAT porque há uma lacuna de insumos de consumo real ausentes para outubro de 2022 e novembro de 2022.

- **Inserções de inventário recentes ausentes (nos últimos 3 meses)**

> Se uma unidade de planejamento estiver faltando entradas de dados de inventário reais recentes nos últimos três meses, ela será sinalizada na Lista de Problemas QAT. Se as entradas forem preenchidas para algum destes últimos três meses, seja um mês ou todos os três meses, o problema não será sinalizado pelo sistema.

- **Plano de Fornecimento sem previsão de consumo para os próximos 18 meses**

> Se uma unidade de planejamento não tiver os insumos de consumo previstos para um ou mais meses por um período de 18 meses a partir do mês atual, o QAT sinalizará isso como um problema. A QAT verificará se há lacunas para garantir que todos os futuros 18 meses tenham valores de consumo previstos.
>
> **\*Nota:** Caso exista uma unidade de planejamento em fase de desativação, é recomendável que o usuário coloque zero como consumo previsto, até que seja totalmente descontinuada, momento em que a unidade de planejamento precisará ser desativada.\*

- **Envios com datas de recebimento anteriores**

> O QAT verificará as datas de recebimento de todas as remessas para ver se alguma delas está no passado com base na data atual. Se a data de recebimento de uma remessa estiver no passado, ela será sinalizada na Lista de Problemas do QAT. Por exemplo, há uma unidade de planejamento com data de recebimento de 31 de dezembro de 31<sup>st</sup> de 2022. Como essa data está no passado, o QAT irá sinalizá-la e o usuário precisará alterar o status da remessa para “Recebido” ou alterar a data de recebimento para uma que esteja no futuro.
>
> **\*Observação:** há um tempo de buffer de quatorze dias para que o QAT reconheça que a data de recebimento da remessa está no passado e para que o problema seja sinalizado.\*

- **Remessas que deveriam ter sido enviadas até a data prevista**

> A QAT verificará as datas estimadas de envio, que são calculadas com base nos prazos de entrega predefinidos do Programa, para ver se há alguma remessa com data estimada de “Enviado” no passado. Se a data estimada de envio da remessa estiver no passado, ela será sinalizada na Lista de Problemas do QAT. Por exemplo, há uma unidade de planejamento com uma data de envio prevista de 15 de janeiro <sup>th</sup> de 2023. Como essa data está no passado, o QAT irá sinalizá-la e o usuário precisará alterar o status da remessa para “Enviado” ou alterar a data de recebimento para uma que esteja mais no futuro. Alterar a data de recebimento para outra no futuro fará com que o QAT recalcule automaticamente as datas previstas de envio. Se não for possível alterar o status ou a data de recebimento, um usuário pode ‘resolver’ o problema (consulte [Encerrando e resolvendo problemas](#closing-and-addressing-problems)).
>
> **\*Observação:** Há um tempo de reserva de quatorze dias para que o QAT reconheça que a data de envio da remessa está no passado e para que o problema seja sinalizado.\*

- **A previsão dinâmica não é usada (para grupos de produtos Malária, ARV, CMMV)**

> Para quaisquer produtos que pertençam às seguintes categorias de rastreadores: Malária, ARV ou CMMV, o QAT verificará a previsão dinâmica. O GHSC-PSM incentiva a previsão com valores mensais dinâmicos, a fim de mostrar que fatores como sazonalidade, expansão do programa ou campanhas foram levados em consideração. Se uma unidade de planejamento de um desses três grupos de mercadorias tiver quatro meses consecutivos com consumo estático, ela será sinalizada na Lista de Problemas do QAT.

- **Plano de Fornecimento não segue parâmetros mínimo/máximo**

> Se uma unidade de planejamento estiver com estoque excessivo, insuficiente ou esgotado em qualquer momento durante os próximos 18 meses, ela será sinalizada na Lista de Problemas do QAT. O QAT contará o número de meses em que a unidade de planejamento está **com excesso e falta de estoque**, subdividindo-a em duas janelas de tempo diferentes: os meses dentro do prazo de entrega (1-6 meses) e aqueles dentro da janela de planejamento (7-18 meses). A Lista de Problemas QAT também indicará o número de remessas recebidas nos próximos 1 a 6 meses e nos próximos 7 a 18 meses. **Rupturas de estoque** serão sinalizadas como um problema separado na Lista de Problemas do QAT. O QAT indicará diretamente quais meses estão em falta nos períodos subdivididos de 1 a 6 meses e 7 a 18 meses. A Lista de Problemas QAT também indicará o número de remessas recebidas nos próximos 1 a 6 meses e nos próximos 7 a 18 meses.
>
> **_Planejar por MOS:_** O excesso de estoque é definido por MOS \> MOS máximo. O estoque insuficiente é definido por MOS \< MOS mínimo. _Veja_ abaixo um exemplo de problema e o gráfico do plano de fornecimento que o acompanha:

![P2396#yIS1](/img/media/image205.png)

Figura 127: O Plano de Fornecimento não segue o exemplo do parâmetro MOS mín/máx.

> **\*Observação:** Se o valor MOS para um determinado mês for “N/A”, todas essas instâncias serão excluídas ao calcular os problemas de excesso de estoque, falta de estoque ou falta de estoque.\*
>
> **Exemplo de planejamento por quantidade**: O excesso de estoque é definido por Quantidade de saldo final \> Quantidade máxima. A falta de estoque é definida por Quantidade de saldo final \< Quantidade mínima. Observe que o QAT só sinalizará o excesso de estoque se esse excesso de estoque ocorrer mais do que o prazo de distribuição consecutivo (por exemplo, se o prazo de entrega for de 2 meses, o QAT sinalizará se houver excesso de estoque por mais de 2 meses consecutivos - mas não sinalizará o problema se o excesso de estoque ocorrer a cada dois meses). _Veja_ abaixo um exemplo de problema e o gráfico do plano de fornecimento que o acompanha:

![P2403#yIS1](/img/media/image206.png)

Figura 128: O Plano de Fornecimento não segue o exemplo do parâmetro de quantidade mínima/máxima

- **Outros – Manual**

> São perguntas ou esclarecimentos específicos inseridos manualmente pelo revisor do plano de fornecimento que não são sinalizados automaticamente pelo QAT. Esses problemas podem ser itens que o revisor do plano de fornecimento deseja resolver naquele trimestre antes de finalizar ou um lembrete para o próximo envio trimestral. A descrição do problema, a sugestão e a criticidade são determinadas pelo revisor do plano de fornecimento.

## Catálogo de Programas

**Objetivo**: visualizar uma lista padronizada de todas as unidades de planejamento e unidades de previsão em um programa QAT e seus atributos correspondentes.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Catálogo de Programas

- **Observações:** Um usuário pode selecionar todas as categorias de unidades de planejamento e categorias de rastreador ou pode escolher uma categoria específica para visualização. Se um usuário desejar adicionar uma unidade de planejamento que não aparece no Relatório do Catálogo de Programas, consulte [Tickets para Adicionar/Atualizar Usuários e Dados Mestres](02-getting-started.md#tickets-for-addingupdating-users-and-master-data).

![P2414#yIS1](/img/media/image207.png)

Figura 129: Relatório do Catálogo de Programas

## Relatórios de status de estoque

### Status do estoque ao longo do tempo

**Objetivo:** comparar um ou mais produtos e seus níveis de estoque em um período

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Status do estoque  Status do estoque ao longo do tempo

- **Observações:** A Unidade de Planejamento pode ser única, de seleção múltipla ou selecionar todas. A opção “Selecionar tudo” pode não ser vantajosa se o programa tiver muitas unidades de planejamento, pois o gráfico não será capaz de definir as linhas individuais do gráfico. Sugerimos escolher menos de dez produtos de uma vez. Especificamente, este relatório pode ser útil para comparar categorias.

![A graph of a graph Description automatically generated with medium confidence](/img/media/image208.png)

Figura 130: Relatório de status do estoque ao longo do tempo

### Matriz de status de estoque

**Objetivo:** fornecer um resumo rápido dos meses de estoque ao longo do tempo em um formato de tabela de fácil leitura.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Status do estoque  Matriz de status do estoque

- **Notas:**
  - Uma linha é mostrada para cada combinação de unidade de planejamento e ano, com base no que está selecionado nos filtros superiores.

  - QAT exibirá o MOS ou quantidade para cada unidade de planejamento com base no fato de o produto ser planejado por quantidade ou MOS, conforme selecionado na tela Atualizar Unidades de Planejamento (consulte <u>Seção 4.A2</u>).

  - As cores correspondem aos níveis de stock durante esse mês específico:
    - Vermelho – Estocado

    - Laranja – Pouco Estocado

    - Verde – Abastecido de acordo com o plano

    - Amarelo – Excesso de estoque

    - Cinza – N/A (QAT não consegue calcular o valor devido a dados faltantes)

  - Embora os CSVs não exportem as cores formatadas condicionalmente, o PDF contém as cores e os usuários podem copiar e colar a tabela para manter todas as cores e formatação.

![P2442#yIS1](/img/media/image209.png)

Figura 131: Relatório instantâneo de status de estoque

### Instantâneo do status do estoque

**Objetivo:** fornecer uma visão de alto nível do status do estoque de um programa em todas as unidades de planejamento em um único momento (um mês).

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Status do estoque  Instantâneo do status do estoque

- **Notas:**
  - As diversas cores correspondem aos níveis de stock durante esse mês específico:
    - Vermelho – Estocado

    - Laranja – Pouco Estocado

    - Verde – Abastecido de acordo com o plano

    - Amarelo – Excesso de estoque

    - Cinza – N/A (QAT não consegue calcular o valor devido a dados faltantes)

  - Embora o PDF e o CSV não exportem as cores formatadas condicionalmente, os usuários podem copiar e colar a tabela para manter todas as cores e formatação.

![P2459#yIS1](/img/media/image210.png)

Figura 132: Relatório instantâneo de status de estoque

### Instantâneo do status do estoque (global)

**Objetivo:** fornecer uma visão de alto nível do status do estoque de um programa em todas as unidades de planejamento em um único momento (um mês) para vários programas.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Usuários de Programa e Visualizadores de Relatórios

- **Navegação:** Relatórios  Status do estoque  Instantâneo do status do estoque (global)

- **Notas:**
  - As diversas cores correspondem aos níveis de stock durante esse mês específico:
    - Vermelho – Estocado

    - Laranja – Pouco Estocado

    - Verde – Abastecido de acordo com o plano

    - Amarelo – Excesso de estoque

  - Embora o PDF e o CSV não exportem as cores formatadas condicionalmente, os usuários podem copiar e colar a tabela para manter todas as cores e formatação.

![P2475#yIS1](/img/media/image211.png)

Figura 133: Relatório instantâneo de status de estoque (global)

## Relatórios de consumo

### Consumo (Global)

**Objetivo:** mostrar visualmente o consumo de uma unidade de planejamento ou de diversas unidades de planejamento entre países.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Usuários de Programa e Visualizadores de Relatórios

- **Navegação:** Relatórios  Relatórios de Consumo  Consumo (Global)

- **Notas:**
  - As diversas cores empilhadas nas barras horizontais representam diferentes países. Os usuários podem determinar qual país consultando a legenda do gráfico.

  - O eixo x corresponde à quantidade de consumo (em milhões) de cada país.

![P2487#yIS1](/img/media/image212.png)

Figura 134: Relatório de Consumo (Global)

### Erro de previsão (mensal)

**Objetivo:** mostrar visualmente a precisão da previsão usando o método de erro percentual médio ponderado (WAPE), ao longo do tempo, ao mesmo tempo em que compara o consumo previsto com o consumo real.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de Consumo  Erro de Previsão (Mensal)

![A graph with red and blue bars Description automatically generated](/img/media/image213.png)

> Figura 135: Relatório de erros de previsão (mensal)

- **Notas:**
  - No gráfico, as barras verticais vermelhas representam o consumo real, as barras verticais azuis representam o consumo previsto, a linha verde (que utiliza o eixo direito), representa o erro de previsão, e a linha pontilhada turquesa representa o limite de erro de previsão (ver Figura 115: Relatório de Erros de Previsão (Mensal)).

- O limite de erro de previsão (%) por unidade de planejamento é definido pelo Administrador do Programa na tela Atualizar Unidades de Planejamento. Se um erro de previsão estiver acima do limite de erro de previsão definido (%), ele aparecerá em texto vermelho na tabela de dados.

  - A visualização do relatório pode ser visualizada de várias maneiras:
    - **Unidade de previsão.** Um usuário pode querer escolher a unidade de previsão ao comparar unidades básicas, como medicamentos que possuem tamanhos de frascos diferentes (unidades de planejamento) compartilhando a mesma unidade de previsão (por exemplo, o antirretroviral TLD30 versus TLD90 - Consulte a Figura 116.)

    - **Unidade de Equivalência:** Um usuário pode querer escolher a unidade de previsão ao comparar produtos com diferentes unidades de previsão, mas alguma ligação programática (por exemplo, tratamentos de malária AL 6x1 vs 6x2 – ver Figura 117.)

    - **“Mostrar consumo ajustado por ruptura de estoque?”:** Se esta caixa de seleção estiver marcada, o QAT utiliza o consumo real ajustado em vez do consumo real. O QAT calcula o total de dias do mês com base no calendário.

  - Dados ausentes:

  -> Se faltarem dados para o consumo previsto ou real, faltará um segmento da linha ou uma barra no gráfico

  <!-- lista final -->
  -> Caso faltem dados de consumo real ou previsto, não será possível calcular o erro de previsão e o usuário poderá ver uma lacuna no gráfico de linhas

  <!-- lista final -->
  - **Fórmula:** Erro de previsão usa a fórmula de erro percentual médio ponderado (WAPE). O exemplo abaixo usa janelas de tempo de 6 meses.
    - **Janela de tempo:** Para produtos não sazonais com padrão de consumo previsível, use uma janela de tempo curta, mas considere usar uma janela de tempo mais longa para aqueles produtos com consumo mais variável ou com sazonalidade (use uma janela de tempo pelo menos longa o suficiente para considerar toda a temporada).

    - Para mais detalhes sobre a lógica que o QAT utiliza para calcular este relatório, consulte “Mostrar Fórmulas” na ferramenta.

![P2508#yIS1](/img/media/image214.png)

Figura 136: Fórmula WAPE com janela de tempo de 6 meses como exemplo

![A graph with red and blue bars Description automatically generated](/img/media/image215.png)

> Figura 137: Relatório de erros de previsão (mensal) – exibido por unidade de previsão

![A screenshot of a graph Description automatically generated](/img/media/image216.png)

> Figura 138: Relatório de Erros de Previsão (Mensal) – exibido por unidade de equivalência

### Erro de previsão (por unidade de planejamento)

**Objetivo: **avaliar a precisão das previsões para produtos selecionados durante um mês específico em países e programas.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de Consumo  Erro de Previsão (por Unidade de Planejamento)

- **Notas:**
  - Para a janela de tempo, os produtos não sazonais com padrão de consumo previsível podem ter uma janela de tempo curta, mas aqueles que têm um consumo mais variável/aqueles com estações devem ter uma janela de tempo longa, ou pelo menos longa o suficiente para considerar toda a estação

  - Na tabela, as porcentagens de erro de previsão que estão acima do limite de erro de previsão (%), definido por um Administrador do Programa na tela Atualizar Unidades de Planejamento, serão destacadas em vermelho

  - Caso faltem dados de consumo real ou previsto, não será possível calcular o erro de previsão e o usuário verá uma mensagem de erro na tabela.

  - O erro de previsão usa a fórmula do erro percentual médio ponderado (WAPE):

![P2529#yIS1](/img/media/image217.png)

Figura 139: Fórmula WAPE

![P2531#yIS1](/img/media/image218.png)

Figura 140: Relatório de erros de previsão (por unidade de planejamento)

## Relatórios de Remessa

### Remessa (Global)

**Objetivo:** agregar quantidades de compras por fonte de financiamento, agente de compras e tipo de agente de compras em todos os países e programas.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Usuários de Programa e Visualizadores de Relatórios

- **Navegação:** Relatórios  Relatórios de Remessas  Remessas (Global)

- **Notas:**
  - Os dois gráficos que aparecem primeiro no Relatório de Remessas (Global) representam a quantidade agregada de remessas por país e o custo das remessas (em dólares americanos) por fonte de financiamento para uma única unidade de planejamento. Para uma visão tabular dos dados, o usuário pode encontrar detalhes nas duas tabelas inferiores.

- Se um país não adquirir a unidade de planeamento selecionada, esta não aparecerá no gráfico das tabelas do relatório.

![P2543#yIS1](/img/media/image219.png)

Figura 141: Relatório de Remessa (Global)

### Visão geral da remessa

**Objetivo:** agregar quantidades de compras por fonte de financiamento ou por tipo de agente de compras em todos os países e programas.

- **Acessível para:** Administradores de Realm, Administradores/Usuários de Programa e Visualizadores de Relatórios

- **Navegação:** Relatórios  Relatórios de Remessa  Visão Geral da Remessa

- **Notas:**
  - Ao navegar até a tela Visão Geral da Remessa, os usuários verão menus suspensos nos quais deverão preencher para mostrar dados específicos. Depois de selecionar determinados menus suspensos ou todos, os usuários veem um gráfico e um gráfico de pizza. O gráfico que aparece primeiro no Relatório de visão geral de remessas representa a quantidade agregada de remessas entre países e o custo (em dólares americanos) das remessas por fonte de financiamento em todas as unidades de planejamento. O bate-papo circular mostra porcentagens da fonte de financiamento dependendo das seleções do usuário, ao mesmo tempo que pode passar o mouse para ver o valor total (em dólares americanos). Os usuários também podem optar por agrupar os dados por Tipo de Agente de Aquisição ou Tipo de Fonte de Financiamento. Para uma visualização tabular dos dados, o usuário pode encontrar detalhes na tabela inferior.

![A screenshot of a computer Description automatically generated](/img/media/image220.png)

Figura 142: Relatório de Visão Geral da Remessa

### Detalhes da remessa

**Objetivo:** fornecer uma visão abrangente de todas as remessas de um programa.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de Remessa  Detalhes da Remessa

- **Notas:**
  - Os gráficos superiores mostram o total em dólares por mês por status de remessa

  - Abaixo do gráfico há duas tabelas: a primeira traz um resumo e a segunda traz informações detalhadas sobre os embarques.
    - A tabela de resumo mostra o número total de remessas e os custos totais por fonte de financiamento, para o período selecionado.

    - A tabela detalhada contém os envios desagregados por unidade de planejamento, etc.

![](/img/media/image221.png)

Figura 143: Relatório de Detalhes da Remessa

### Detalhes do custo de envio

**Objetivo:** fornecer uma visualização simples de todas as remessas de um programa e seus custos totais.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de Remessa  Detalhes de Custo de Remessa

- **Notas:**
  - Pode ser exibido por fonte de financiamento, agente de compras ou unidade de planejamento.

![P2574#yIS1](/img/media/image222.png)

Figura 144: Relatório de Detalhes de Custo de Remessa

### Visão geral dos custos de envio

**Objetivo:** fornecer uma visão geral dos custos totais de remessa por ano civil para uma unidade de programa e planejamento, por fonte de financiamento.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de Remessa  Visão Geral dos Custos de Remessa

- **Notas:**
  - Este relatório pode ser visualizado em formato PDF ou Excel (CSV)

  - Este relatório pode ser baseado na data de recebimento da remessa ou na data de envio da remessa

![A screenshot of a computer Description automatically generated](/img/media/image223.png)

Figura 145: Relatório de Visão Geral dos Custos de Remessa

### Orçamento

**Objetivo:** mostrar os diferentes orçamentos atribuídos a um(s) programa(s), os valores alocados para remessas, o valor gasto a mais (se aplicável) e os valores restantes estimados. A lista suspensa de programas neste relatório é de seleção múltipla, pois vários programas podem compartilhar o mesmo orçamento.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de Embarque  Orçamento

- **Notas:**
  - O gráfico mostra cada Orçamento predefinido em um programa e se está alocado em embarques (planejados ou pedidos) e o valor restante.

  - A visualização tabular do gráfico também fornece informações sobre a fonte de financiamento de cada orçamento, data de início e término e outras informações detalhadas.

![P2596#yIS1](/img/media/image224.png)

Figura 146: Relatório Orçamentário

### Prazo de entrega do agente de compras

**Objetivo:** mostrar os prazos de entrega detalhados (em meses) para todas as unidades de planejamento, por agente de compras.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de Remessa  Prazo de entrega do agente de compras

![P2604#yIS1](/img/media/image225.png)

Figura 147: Relatório de prazo de entrega do agente de compras

## Relatórios de inventário

### Expirações

**Objetivo:** fornecer aos planejadores quantidades estimadas de unidades de planejamento que expirarão no futuro com base no lote/prazo de validade

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de inventário  Expirações

- **Notas:**
  - Este relatório extrai dados inseridos anteriormente, incluindo informações de lote sobre remessas, estoque e consumo real e prazo de validade por unidade de planejamento. Ele exibe os números do lote, a data de recebimento do lote, o prazo de validade desse lote (ou unidade de planejamento), a data de vencimento e o custo do produto vencido.

  - O relatório pode incluir quantidades em remessas planejadas com previsão de chegada e vencimento durante o período selecionado.

  - Ele calculará (com base no prazo de validade, projeções de estoque e previsão de consumo) quanto de um determinado lote deverá expirar e quando.
    - Para o cálculo de vencimento, consulte [Anexo 2: Regras de Negócios](11-annex-2-business-rules.md#annex-2-business-rules)

  - O relatório calculará o custo do produto vencido, com base na quantidade vencida e no preço padrão da unidade de planejamento definido pelo usuário na tela Atualizar Unidades de Planejamento

  - A mesa é interativa. Quando o usuário clicar na quantidade expirada, o QAT abrirá um pop-up com o razão do lote.

![P2620#yIS1](/img/media/image226.png)

Figura 148: Relatório de Vencimentos

### Custo do estoque

**Objetivo**: para um mês selecionado, fornece um custo estimado de estoque com base no estoque disponível real ou projetado e no preço de catálogo da unidade de planejamento.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de estoque  Custo de estoque

- **Notas:**
  - O relatório pode incluir quantidades em remessas planejadas que deverão chegar durante o período selecionado

  - A coluna de estoque pode ser baseada em um estoque real ou no saldo final projetado

  - Este relatório utiliza a seguinte fórmula:

![P2632#yIS1](/img/media/image227.png)

Figura 149: Fórmula de custo de estoque

![P2635#yIS1](/img/media/image228.png)

Figura 150: Relatório de Custo de Estoque

### Giros de estoque

**Objetivo:** mostrar o número de giros de estoque por unidade de planejamento, programa, país ou categoria de unidade de planejamento em um determinado momento. O giro de estoque é uma forma de medir a velocidade dos planos de abastecimento. O giro de estoque é uma métrica chave de desempenho frequentemente usada para sinalizar a eficácia do gerenciamento da cadeia de suprimentos. Geralmente é uma métrica retrospectiva, mas como o QAT usa dados de previsão para estimar as projeções de estoque no futuro, o relatório também pode ser usado para visualizar giros de estoque estimados com base nos planos. Geralmente, rotações mais elevadas significam uma cadeia de abastecimento mais saudável – os produtos estão a mover-se a jusante e a ser substituídos por produtos frescos com mais frequência. O baixo volume de negócios implica baixo consumo, possivelmente excesso de inventário – podendo indicar, por exemplo, que as metas do programa são demasiado ambiciosas.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de estoque  Giros de estoque

- **Notas:**
  - Este relatório calcula giros de estoque em vários níveis: no nível da unidade de planejamento individual, no nível agregado para um programa inteiro (múltiplas unidades de planejamento) e no nível agregado para um país inteiro (múltiplos programas) ou categoria de mercadoria.

  - Giros de estoque planejados: são os meses de estoque possíveis para cada mês acima de 12 meses se as regras de estoque funcionassem perfeitamente considerando o MIN da Unidade de Planejamento e o Intervalo de Reordenamento.
    - No nível da unidade de planejamento, o relatório utiliza o MIN e o intervalo de reabastecimento das configurações da unidade de planejamento para calcular os giros de estoque “planejados”.

    - No nível do programa (múltiplas unidades de planejamento), o QAT utiliza o modo de todos os giros de estoque planejados de todas as unidades de planejamento em um programa específico.

- No nível de país e/ou categoria de unidade de planejamento, o QAT utiliza o modo de todos os giros de estoque planejados de todas as unidades de planejamento em um país específico/categoria PU

  - Giros de estoque reais:
    - No nível de unidade de planejamento, o QAT usa a seguinte fórmula para cada unidade de planejamento para calcular os giros de estoque reais:

![P2651#yIS1](/img/media/image229.png)

Figura 151: Fórmula de giro de estoque no nível da unidade de planejamento

- Para cada unidade de planejamento, o relatório compara os giros reais e planejados e calcula o MAPE e o MSE.

- Para calcular os giros reais de estoque no nível do programa, o QAT procurará a moda em todas as unidades de planejamento desse programa. Se nenhum modo for encontrado, o QAT usará a média de todas as unidades de planejamento à medida que o estoque real desse programa gira.

- Para calcular os giros reais de estoque no nível do país (ou categoria de mercadoria), o QAT procurará a moda em todos os programas. Se nenhum modo for encontrado, o QAT usará a média.

![P2656#yIS1](/img/media/image230.png)

Figura 152: Relatório de giro de estoque

### Ajuste de estoque

**Objetivo:** mostrar uma lista de todos os ajustes de estoque inseridos manualmente em um programa. Observação: os ajustes calculados automaticamente não serão exibidos neste relatório.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de estoque  Ajuste de estoque

- **Notas:**
  - Os ajustes calculados automaticamente (como resultado de uma diferença entre o saldo final projetado e uma contagem de estoque) não aparecem neste relatório.

![P2666#yIS1](/img/media/image231.png)

Figura 153: Relatório de ajuste de estoque

### Capacidade do Armazém (por Programa)

**Objetivo:** exibe o volume (em metros cúbicos) de todas as regiões de um país (se um usuário inserir essas informações ao configurar um programa.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa

- **Navegação:** Relatórios  Relatórios de estoque  Capacidade do armazém (por programa)

- **Notas:**
  - Este relatório é mais útil para países com múltiplas regiões.

![P2676#yIS1](/img/media/image232.png)

Figura 154: Capacidade do Armazém (por Programa)

### Capacidade do armazém (por país)

**Objetivo:** exibe o volume (em metros cúbicos) de todos os países e regiões de um país (é necessário acesso em nível de reino).

- **Acessível para:** Administradores de Realm e Visualizadores de Relatórios

- **Navegação:** Relatórios à Relatórios de Inventário à Capacidade do Armazém (por País)

- **Notas:**
  - Este relatório é mais útil para países com múltiplas regiões.

![P2686#yIS1](/img/media/image233.png)

Figura 155: Capacidade do Armazém (por País)