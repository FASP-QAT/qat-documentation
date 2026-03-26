---
id: supply-planning-module-program-data
title: "Módulo de Planejamento de Fornecimento: Dados do Programa"
sidebar_label: "Módulo de Planejamento de Fornecimento: Dados do Programa"
sidebar_position: 7
---
# Módulo de Planejamento de Fornecimento: Dados do Programa

No QAT, um **Programa** é a unidade principal de planeamento de abastecimento, normalmente correspondendo à área técnica de um país (por exemplo, Malária, VIH). Os programas são controlados por dados mestre em nível de região, garantindo consistência em todo o sistema.

O gerenciamento de dados no nível do programa é feito principalmente por **Administradores do Programa** e **Usuários do Programa**. Para obter mais detalhes sobre funções, consulte [Anexo 3: Matriz de funções do usuário](15-annex-3-user-role-matrix.md).

### Categorias de dados

| Categoria | Tipo de dados | Exemplos |
| :--- | :--- | :--- |
| **Dados de segundo plano** | Informações do programa | Prazos de entrega,% de frete, gerentes de programa. |
| | Informações do produto | Unidades de planejamento, intervalos de reabastecimento, estoque mínimo/máximo. |
| | Orçamento | Fontes de financiamento, valores orçamentários, datas de validade. |
| **Dados transacionais**| Consumo | Consumo real e previsto. |
| | Inventário | Contagens e ajustes de estoque (danos, vencimentos). |
| | Remessas | Quantidades, datas de entrega, agentes de compras. |

*Tabela 1: Hierarquia de dados do programa*

## Dados de segundo plano

> [!TIP]
> Os dados de segundo plano devem ser atualizados enquanto estiver online. Execute uma **Master Data Sync** após as atualizações para garantir que as alterações sejam refletidas em todo o aplicativo.

### Informações do programa
Os administradores do programa podem definir parâmetros gerais, como gerentes de programa, prazos de entrega e porcentagens de frete padrão.

**Para atualizar as informações do programa:**
1. Navegue até **Gerenciamento de programas** > **Atualizar informações do programa**.
2. Selecione o programa alvo.
3. Modifique os campos conforme necessário e clique em **Enviar**.
4. (Opcional) Adicionar/remover agentes de aquisição e fontes de financiamento das listas específicas do programa.

![Update Program Info Interface](/img/media/image113.png)
*Figura 1: Gerenciamento de informações do programa*

### Unidades de planejamento
As unidades de planejamento são os produtos específicos usados para compras e controle de estoque. Embora o catálogo mestre seja gerenciado no nível da região, os administradores do programa gerenciam quais unidades estão ativas em seus programas específicos.

**Parâmetros principais:**
- **Planejar por:** Escolha "MOS" (meses de estoque) para itens de alto volume ou "Quantidade" para itens de baixo volume/emergência.
- **Intervalo de novo pedido:** Frequência de remessas (em meses).
- **Meses mínimos de estoque (MOS):** O nível de estoque de segurança necessário para evitar rupturas de estoque.
- **Prazo de validade:** Meses médios desde o recebimento até o vencimento.
- **Limite de erro de previsão:** Usado para sinalizar grandes discrepâncias em relatórios de consumo.

**Para gerenciar unidades de planejamento:**
1. Acesse **Gerenciamento de programas** > **Atualizar unidades de planejamento**.
2. Selecione seu programa.
3. **Para editar:** Clique duas vezes em qualquer célula (por exemplo, Min MOS, Shelf Life) e clique em **Enviar**.
4. **Para Adicionar:** Clique em **Adicionar Linha**, procure a unidade de planejamento por nome, preencha os parâmetros e clique em **Enviar**.

> [!NOTA]
> Se uma unidade de planejamento estiver faltando no catálogo, envie um ticket por meio do [QAT Helpdesk](05-getting-started.md#qat-helpdesk-and-tickets).

### Informações específicas do programa/agente de compras
Os usuários podem substituir prazos de entrega, custos de frete e preços unitários padrão para agentes de compras e unidades de planejamento específicos.

**Principais funções e regras:**
- **Priorização:** As configurações específicas do agente/unidade substituem as configurações do programa, que substituem os padrões em nível de região.
- **Restrições:** Apenas uma linha é permitida por combinação de programa/unidade/agente.
- **Campos obrigatórios:** Programa, Unidade de planejamento e Agente de compras são obrigatórios para adicionar uma linha.

**Para adicionar ou editar informações específicas:**
1. Navegue até **Gerenciamento de programas** > **Informações do agente de compras/programa**.
2. Selecione o programa e a unidade de planejamento.
3. Preencha os prazos de entrega,% de frete ou preços unitários específicos.
4. Clique em **Enviar** e execute uma **Sincronização de Dados Mestres**.

![Procurement Agent Info Interface](/img/media/image117.png)
*Figura 2: Configurações específicas do agente de compras*

### Unidades de Relatório Alternativas (ARU)
Uma ARU permite a entrada de dados em unidades diferentes da unidade de planejamento padrão (por exemplo, peças versus pacotes).

**Regras:**
- **Fator de Conversão:** Deve ser definido para converter ARU em Unidade de Planejamento (ex.: multiplicar por 10).
- **Automação:** o QAT cria automaticamente uma ARU 1:1 para cada unidade de planejamento adicionada.

**Para gerenciar ARUs:**
1. Vá para **Gerenciamento de programas** > **Unidade de relatórios alternativos**.
2. Selecione o programa.
3. Clique em **Adicionar linha** para criar uma nova ARU, defina o fator de conversão e clique em **Enviar**.

![ARU Interface](/img/media/image118.png)
*Figura 3: Unidades de Relatório Alternativas*

### Prazos de entrega
Os prazos de entrega acompanham a progressão da remessa em seis status. O sistema prioriza os prazos de entrega da seguinte forma: **Específico do programa/agente** > **Padrões do programa** > **Padrões do território**.

#### Definições de prazo de entrega

| Palco | Definição | Nível de configuração |
| :--- | :--- | :--- |
| **Planejado para ser enviado** | Identificando a necessidade de fazer o pedido. | Programa |
| **Enviado para Aprovado** | Colocação de pedidos para aprovação. | Programa (Padrão)/Reino (Agente) |
| **Aprovado para envio** | Aprovação para envio. | Programa (Padrão)/Reino (Agente) |
| **Enviado para Chegado** | Tempo de trânsito (Aéreo, Marítimo ou Rodoviário). | Programa |
| **Chegou ao Recebido** | Chegada ao porto até recepção do armazém. | Programa |

**Para atualizar prazos de entrega:**
1. Navegue até **Gerenciamento de programas** > **Atualizar informações do programa**.
2. Vá até os campos de prazo de entrega e insira valores em meses.
3. Clique em **Atualizar**.

Para compras locais, todo o lead time (planejado até o recebimento) é gerenciado por unidade de planejamento em **Atualizar unidades de planejamento**.

![Shipment Status Flow](/img/media/image120.png)
*Figura 4: Ciclo de vida do prazo de entrega da remessa*

### Orçamentos
Os orçamentos acompanham a alocação de capital para a compra de mercadorias. Um orçamento pode estar vinculado a um ou vários programas.

- **Alerta de status:** Orçamentos destacados em **Vermelho** indicam que a data de término já passou ou o valor utilizado excede o orçamento.
- **Regras:** As remessas marcadas para um orçamento devem ser desmarcadas antes de desvincular o programa desse orçamento.

**Para adicionar um orçamento:**
1. Navegue até **Gerenciamento de programas** > **Orçamento**.
2. Clique no ícone **+** (Adicionar).
3. Insira a fonte de financiamento, o nome do orçamento e os valores.
4. Clique em **Enviar**.

**Para atualizar um orçamento:**
1. Selecione o orçamento na lista.
2. Modifique os detalhes na tela **Atualizar orçamento** e clique em **Enviar**.

![Budget Management Screen](/img/media/image123.png)
*Figura 5: Visão geral do orçamento*

## Dados do plano de fornecimento transacional
Os dados transacionais incluem as "3 Grandes": **Consumo**, **Estoque** e **Remessas**.

### Dados de consumo
O consumo refere-se ao stock distribuído aos clientes.
- **Consumo Real:** Quantidade dispensada informada.
- **Consumo Previsto:** Quantidade prevista acordada pelo programa.

**Para adicionar/atualizar consumo:**
1. Navegue até **Dados do Plano de Fornecimento** > **Dados de Consumo**.
2. Selecione o período do relatório e a unidade de planejamento.
3. **Adicionar:** Clique em **+ Adicionar linha** ou clique com o botão direito em uma célula e selecione **Adicionar novo consumo**.
4. **Atualizar:** clique duas vezes em uma célula para editá-la. 

> [!AVISO]
> Os dados históricos (mais de 9 meses atrás) são somente leitura e não podem ser editados.

**Detalhes do lote (somente consumo real):**
1. Clique com o botão direito na linha "Consumo real" e selecione **Mostrar informações do lote**.
2. Edite números de lote ou quantidades. A quantidade total do lote deve corresponder exatamente à quantidade total de consumo.

![Consumption Data Entry](/img/media/image125.png)
*Figura 6: Gestão de Consumo*

### Dados de inventário
Os dados de inventário incluem **Contagens de estoque** e **Ajustes** (por exemplo, danos, transferências).

- **Contagem de Estoque:** Inventário físico em data específica.
- **Ajustes:** Modificações no inventário utilizável (notas são necessárias para todos os ajustes).

**Para adicionar/atualizar inventário:**
1. Navegue até **Dados do plano de fornecimento** > **Dados de inventário**.
2. Selecione o **Tipo de Estoque** (Estoque ou Ajuste).
3. **Adicionar:** Clique em **+ Adicionar linha** e insira os detalhes.
4. **Atualização:** clique duas vezes nas células para editar. 

> [!IMPORTANTE]
> Assim como o consumo, os registros de estoque e ajuste há mais de 9 meses não podem ser editados.

**Detalhes do lote:**
- **Ajustes:** Clique com o botão direito em uma linha e selecione **Mostrar informações do lote**. QAT usa a lógica do "melhor cenário" para lidar com quantidades de lote, se não for fornecido explicitamente.
- **Inventário:** Os detalhes do lote são gerenciados na tela Planejamento de fornecimento (consulte a [Seção 5.E](08-supply-planning-module-supply-planning.md#supply-planning-project-expired-stock-and-batch-information)).

![Inventory Data Entry](/img/media/image127.png)
*Figura 7: Gerenciamento de estoque*

### Dados de Remessa
As remessas são rastreadas desde o planejamento até o recebimento.

**Para adicionar/atualizar remessas:**
1. Navegue até **Dados do plano de fornecimento** > **Dados de remessa**.
2. Selecione os filtros e clique em **+ Adicionar linha**.
3. Preencha os campos obrigatórios (destacados em **Amarelo**).
4. **Calculadora de pedidos estratégicos:** Para produtos estratégicos, clique duas vezes na célula **Quantidade do pedido** para usar a calculadora para MOQ ou arredondamento baseado em palete.
5. **Detalhes do lote:** clique com o botão direito em uma remessa e selecione **Mostrar informações do lote** para gerenciar datas de vencimento e quantidades.

**Principais regras de envio:**
- **Envios de emergência:** As linhas em **Vermelho** indicam que a data de recebimento está dentro do prazo de entrega.
- **Custo de frete:** Calculado automaticamente com base em `Cost * Freight %`, a menos que seja substituído manualmente.
- **Datas de remessa:** clique com o botão direito em uma remessa e selecione **Mostrar datas de remessa** para comparar os marcos estimados com os reais.

![Shipment Management](/img/media/image131.png)
*Figura 8: Calculadora de Pedidos Estratégicos*

### Vinculação de remessa ERP
A vinculação de ERP permite que os planejadores sincronizem remessas QAT com o sistema ERP de um agente de compras (por exemplo, ARTMIS do GHSC-PSM). Isso automatiza atualizações de status, custos e datas.

**Regras para vinculação:**
- **Status:** As remessas QAT não devem ser "Planejadas", "Canceladas" ou "Sugeridas".
- **Recência:** As remessas "recebidas" devem ser dos últimos 6 meses.
- **Agente:** Atualmente compatível apenas com **GHSC-PSM**.
- **Modo:** Editável apenas em versões locais baixadas.

#### Vinculando telas
1. **Não vinculado (QAT):** Vincule remessas de QAT existentes a pedidos de ERP. Selecione uma remessa, pesquise o pedido ERP e defina o fator de conversão.
2. **Não vinculado (ERP):** Vincule pedidos de ERP ao QAT. Você pode selecionar uma remessa QAT existente ou criar uma nova diretamente nesta tela.
3. **Vinculados:** Visualize todas as remessas atualmente sincronizadas, atualize fatores de conversão ou desvincule pedidos.

**Para vincular uma remessa ERP:**
1. Navegue até **Dados do plano de fornecimento** > **Vincular remessas de ERP**.
2. Selecione a guia **Não vinculado (QAT)** ou **Não vinculado (ERP)**.
3. Escolha o programa/unidade de planejamento.
4. Clique em uma linha para abrir a janela de pesquisa/link.
5. Forneça a **Unidade Alternativa de Relatório (ARU)** para definir o fator de conversão.
6. Clique em **Vincular envio**.

![ERP Linking Screens](/img/media/image133.png)
*Figura 9: Visão geral da vinculação de ERP*

#### Notificações ERP
Os planejadores receberão alertas na tela **Notificações de remessa do ERP** se houver discrepâncias entre o QAT e o sistema ERP (por exemplo, pedidos cancelados, alterações de quantidade ou atualizações de SKU).

1. Selecione o botão de opção na parte superior denominado ‘Linked’.

2. Selecione o programa e a(s) unidade(s) de planejamento para os quais deseja ver a lista de remessas vinculadas. Uma vez selecionado, uma lista de remessas aparecerá. As informações nessas remessas estão sendo extraídas do ERP.

3. Para fazer qualquer uma das atualizações listadas no passo 2, clique com o botão esquerdo em uma única remessa.
    1. Para editar ARU e/ou notas, clique duas vezes na célula e digite ou selecione no menu suspenso.

    2. Para desvincular um pedido ERP, desmarque a caixa na coluna ‘Vincular?’.

    3. Para adicionar um pedido ERP, marque a caixa desse pedido na coluna ‘Link?’. O usuário pode limpar os menus suspensos de pesquisa na seção intermediária para procurar uma unidade de planejamento ou número de pedido diferente e os pedidos originalmente vinculados permanecerão vinculados.

4. Os usuários também poderão visualizar detalhes do histórico de pedidos do ERP. Para fazer isso, na tela original ‘Linked’, clique com o botão direito em uma única remessa e clique em ‘View ERP Order History’. Uma janela pop-up aparecerá chamada ‘Histórico de pedidos ERP’. Esta tela mostrará todos os detalhes que mudaram ao longo do tempo no pedido ERP. Cada linha indica que uma ou mais colunas foram alteradas. A coluna mais à direita, denominada ‘Dados recebidos em’, indica quando o registro foi recebido pelo QAT.
    1. Para visualizar detalhes do lote, clique no ícone ![](/img/media/image137.png).

    2. **Observação:** Determinados campos do ERP não são capturados nesta tela, portanto pode haver alguns casos em que 1 ou mais linhas tenham os mesmos detalhes. Isso significa que uma coluna no backend foi alterada.

> **Depois de vincular remessas QAT a pedidos ERP, os dados serão refletidos em seu plano de fornecimento sem a necessidade de sincronização de dados mestre.** Os dados ERP recém-vinculados serão refletidos nos relatórios locais, na tela de planejamento de fornecimento, bem como na tela de entrada de dados de remessa. O usuário **precisa** fazer upload de uma versão para o servidor para que outros usuários vejam essas alterações.
>
> Para visualizar as remessas vinculadas ao ERP na tela de entrada de dados da remessa, o usuário deve selecionar ‘Remessas vinculadas ao ERP’ no menu suspenso Tipo de Remessa. O usuário pode exibir apenas esta opção ou combiná-la com os envios manuais para mostrar todos os envios. As remessas vinculadas ao ERP ficarão esmaecidas para indicar que não são editáveis.

![P1723#yIS1](/img/media/image138.png)

Figura 88: Visualizar Remessas ERP na Entrada de Dados

Na tela de planejamento de abastecimento, os envios vinculados ao ERP terão um ícone de link no canto superior esquerdo da célula. O usuário pode clicar em uma remessa específica para visualizar os detalhes, mas essas células também ficarão esmaecidas para indicar que não são editáveis. O usuário ainda pode clicar com o botão direito nos detalhes da remessa para visualizar as datas da remessa e as informações do lote.

![P1727#yIS1](/img/media/image139.png)

Figura 89: Visualizar Remessas ERP no Plano de Fornecimento

**Notificações de remessa ERP**

O objetivo da tela 'Notificações de remessa do ERP' é alertar os planejadores de fornecimento sobre quaisquer alterações importantes feitas nas remessas vinculadas ao ERP, como o cancelamento de um pedido ou a alteração do SKU de um produto. Os planeadores de abastecimento serão incentivados a “abordar” cada uma das notificações para confirmar que estão cientes da mudança e das implicações feitas no plano de abastecimento. Para alterações de produtos, o usuário deverá reconfirmar o fator de conversão, alterando ou não.

![](/img/media/image140.png)

Na parte superior da tela, há um ícone. Este ícone exibirá um número vermelho indicando quantas notificações não endereçadas estão na tela de notificações de envio do ERP. Se não houver nenhum número vermelho, isso significa que não há nenhum.

Para chegar à tela ‘Notificações de Remessa ERP’, clique no ícone do caminhão na parte superior do QAT ou selecione ‘Notificações de Remessa ERP’ em ‘Dados do Plano de Fornecimento’ no menu da barra lateral esquerda.

Para visualizar as notificações, o usuário precisará selecionar um dos 3 menus suspensos (Programa, Unidade de Planejamento, Endereçado). O usuário também tem a opção de selecionar diretamente na tabela acima dos menus suspensos. Quando um usuário clica com o botão esquerdo em uma linha da tabela, os três menus suspensos serão preenchidos atomicamente com base no programa selecionado pelo usuário. O menu suspenso da unidade de planejamento será preenchido com todas as unidades de planejamento e o menu suspenso endereçado selecionará ‘Não endereçado’.

![P1739#yIS1](/img/media/image141.png)

Figura 90: Filtragem de notificações de remessa ERP

Para endereçar uma notificação, o usuário deve marcar a caixa na coluna ‘Endereçado?’ e clicar no botão ‘Enviar’. Se o usuário estiver tratando de uma notificação de Alteração de Produto ERP, ele deverá primeiro inserir o fator de conversão. O campo do fator de conversão não é editável até que a caixa endereçada seja marcada.

Assim como na tela ‘Vinculado’, o usuário pode visualizar o histórico de pedidos do ERP. Para fazer isso, clique com o botão direito na linha de notificação e clique em ‘Exibir histórico de pedidos ERP’. Consulte a seção Tela vinculada para obter mais informações.

## Importando dados para planejamento de fornecimento

### Modelos de importação de dados do plano de fornecimento do Excel

Os dados de Consumo, Estoque e Expedição podem ser inseridos através das telas de entrada de dados do QAT, através da tela de Planejamento de Fornecimento ou através do Quantimed Import (somente consumo previsto). O QAT também oferece aos usuários a capacidade de inserir esses dados diretamente do Microsoft Excel. Este método de entrada de dados destina-se a entradas em massa que contêm muitos dados. As etapas abaixo mostrarão como inserir dados do Excel no QAT:

1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique no tipo de dados que deseja inserir (por exemplo, “Dados de Consumo”). ![P1748L76#yIS1](/img/media/image142.png)

2. ![](/img/media/image143.png)O Uma vez na tela de entrada de dados, vá até o canto superior direito e clique em “Baixar Modelo”.

3. Um arquivo Microsoft Excel será baixado diretamente para a pasta ‘**Downloads’** do seu computador.

4. Vá para a pasta Downloads do seu computador e abra o arquivo Excel. O formato do nome deve ser **ConsumptionDataEntryTemplate.xlsx** com a primeira parte dependente do tipo de dados que você está inserindo.
    1. _<u>ECada um dos quatro tipos de dados (Estoque, Ajuste, Consumo e Remessa) possui seu próprio modelo Excel, por isso é importante que você clique em “Baixar Modelo” na tela apropriada. Para inventário e ajuste, certifique-se de que o menu suspenso tenha selecionado o tipo de dados para o qual você deseja o modelo.</u>_

5. Uma vez no modelo Excel, clique em “Ativar edição” na parte superior, se solicitado.

![P1755#yIS1](/img/media/image144.png)

Figura 91: Habilitar Edição

6. Insira dados para todos os campos obrigatórios.
    1. Qualquer célula destacada em cinza (por exemplo, Fator de Conversão) não é editável e não precisa ser preenchida.

    2. Certos campos (por exemplo, Fonte de dados) terão menus suspensos pré-preenchidos no QAT. Portanto, é importante baixar um novo modelo se já faz algum tempo desde a última vez que o usuário o utilizou.

    3. Certos campos possuem validações de dados integradas (por exemplo, letras não podem ser inseridas em células de custo). Se a validação não for atendida, uma mensagem de erro pop-up aparecerá.

![P1762#yIS1](/img/media/image145.png)

Figura 92: Modelo Excel

7. Depois que todos os dados forem inseridos no modelo Excel, reabra a janela QAT.

8. Acesse a tela de Entrada de Dados (Consumo, Estoque, Ajuste, Expedição).

9. Clique no botão azul “+Adicionar linha” na parte inferior.
    1. **Observação:** Você só precisa adicionar 1 linha no QAT, independentemente de quantas linhas existem no modelo do Excel.

10. No modelo Excel, selecione todos os dados e pressione Ctrl + C no teclado para copiar os dados.

11. Vá para a linha adicionada no QAT, clique com o botão esquerdo na célula mais à esquerda dessa linha e pressione Ctrl + V no teclado para colar os dados.

12. O QAT criará automaticamente novas linhas para os dados importados do Excel.

13. Clique em “Enviar”.

### Importação de Previsão Quantimada

![](/img/media/image146.png)Quantimed é um software desenvolvido para facilitar o processo de determinação das quantidades de medicamentos e suprimentos médicos necessários para um programa de saúde. O resultado da Quantimed são dados de consumo previsto dos programas de saúde. Esses dados de consumo previstos podem ser uma contribuição fundamental para os planos de abastecimento dos usuários do QAT. O QAT permite que os usuários importem previsões da Quantimed para o QAT para incluí-las em seu plano de fornecimento.

**Etapa 1: Importar dados Quantimed para QAT**

1. Vá em “Dados do Plano de Fornecimento” no menu da barra lateral

2. Selecionado “Importação Quantimed”

3. **Importar arquivo de dados quantitativos**
    1. Escolha o arquivo de previsão .xml da Quantimed em seu sistema de computador local.

    2. Selecione o programa QAT para o qual você deseja que os dados do Quantimed sejam importados.

    3. Clique em “Importar”.

![P1783#yIS1](/img/media/image147.png)

Figura 93: Importação de Arquivo Quantimed

**Etapa 2: Mapear unidades de planejamento**

1. > Para mapear um produto Quantimed para uma unidade de planejamento QAT, selecione a unidade de planejamento QAT usando o menu suspenso.

2. > Caso não queira importar um produto específico da Quantimed, selecione a opção “Não importar” para essa linha.

3. > Caso não exista uma unidade de planejamento QAT associada ao produto Quantimed, o menu suspenso mostrará “Unidade de Planejamento Não Encontrada”. Você precisará selecionar manualmente uma unidade de planejamento no menu suspenso ou voltar ao programa e adicionar uma unidade de planejamento para esse produto Quantimed antes de continuar. Você não pode clicar em “Avançar”, uma ou mais células dizem “Unidade de planejamento não encontrada”.
    1. > **Observação**: para minimizar os casos em que uma unidade de planejamento não é encontrada, é recomendado que os usuários da Quantimed selecionem produtos do arquivo .xml do catálogo de produtos GHSC-PSM.

4. > Assim que cada linha tiver uma unidade de planejamento selecionada ou disser “Não importar”, clique em “Avançar” na parte inferior da tela.

![P1794#yIS1](/img/media/image148.png)

Figura 94: Unidades de Planejamento do Mapa

**Etapa 3: Região**

1. > Nesta etapa selecione a região para a qual deseja importar os dados de consumo previsto. Se houver apenas uma região, você deverá selecioná-la para continuar.

2. > Em seguida, insira a porcentagem dos dados de consumo que deseja importar para o QAT. Este percentual deverá variar de 0 a 100% e será aplicado a todas as unidades de planejamento previamente selecionadas.

3. > Clique em “Avançar”.

**Etapa 4: Mês de Consumo**

1. > Selecione o intervalo de datas dos dados Quantimed que deseja importar para o QAT.
    1. > O período que você selecionar é o período de dados que você poderá importar e aplicará a todas as unidades de planejamento previamente selecionadas.

2. > Clique em “Avançar”.

![P1806#yIS1](/img/media/image149.png)

Figura 95: Tela Mês de Consumo

**Etapa 5: Importar dados**

1. > A etapa final é confirmar os dados que serão importados do Quantimed para o QAT com base no que foi inserido nas etapas 1 a 4.
    1. > “Consumo Previsto da Quantimed” é o valor que está sendo sacado da Quantimed para o produto associado e mês-ano.

    2. > “Consumo Previsto Quantimed Convertido” é o valor que será puxado para QAT do produto associado e mês-ano após aplicação do percentual de importação e fator de conversão.

    3. > “Consumo previsto atual do QAT” é o valor do consumo previsto atualmente no QAT para aquela unidade de planejamento e mês-ano. Depois de importar os dados do Quantimed, esse valor será sobrescrito pelo valor do “Consumo Previsto Quantimed Convertido”.

2. > Esta tela mostrará todos os dados que serão importados para o QAT. Se você não quiser importar determinados registros, clique na caixa de seleção na coluna ‘Importar?’ na extrema direita. Isso impedirá que o QAT importe os dados da Quantimed e manterá o consumo atual previsto do QAT para aquela unidade de planejamento e mês-ano.

3. > Clique em “Enviar” para importar os dados.

![P1816#yIS1](/img/media/image150.png)

Figura 96: Tela de confirmação de importação de dados

### Importação de previsão QAT

### Importando previsões para planos de fornecimento
Os planejadores podem importar previsões criadas pelo QAT para seus programas de plano de fornecimento para direcionar as necessidades de aquisição.

**Pré-requisitos:**
- A previsão deve ser carregada como versão **Final**.
- Uma previsão deve ser selecionada para cada unidade de planejamento.

**Para importar uma previsão:**
1. Navegue até **Dados do plano de fornecimento** > **Importar previsão para o plano de fornecimento**.
2. Selecione **Programa de previsão de origem** e **Programa de plano de fornecimento de destino** (somente versões locais).
3. Selecione o intervalo de datas para importação.
4. **Mapear Unidades de Planejamento:** Mapeie unidades de planejamento de previsão para unidades de plano de fornecimento. Defina um fator de conversão se a embalagem for diferente. Use "Não importar" para unidades que você deseja excluir.
5. **Regiões do mapa:** Defina a porcentagem da previsão a ser alocada para cada região do plano de fornecimento (por exemplo, 100% nacional para nacional ou dividida 50/50 entre duas regiões).

![Forecast Import Screen](/img/media/image151.png)
*Figura 10: Mapeamento de dados de previsão para planos de fornecimento*

#### Arredondamento e Resíduos
Como o planejamento do fornecimento exige números inteiros, o QAT arredonda o consumo previsto para o número inteiro mais próximo. Para evitar a perda de dados, os "resíduos" (restos) são transportados e somados ao longo dos meses. Quando o resíduo acumulado atingir 1,0, ele será adicionado à quantidade importada do mês atual.

**Exemplo:**
| Mês | Previsão convertida | Total Acumulado | Importação arredondada | Residual |
| :--- | :---: | :---: | :---: | :---: |
| Janeiro | 0,25 | 0,25 | 0 | 0,25 |
| Fevereiro | 0,25 | 0,50 | 0 | 0,50 |
| março | 0,25 | 0,75 | 0 | 0,75 |
| abril | 0,25 | 1,00 | 1 | 0,00 |

*Tabela 2: Demonstração da Lógica de Arredondamento Residual*

6. Revise a lista de conversões final e clique em **Importar** para finalizar.