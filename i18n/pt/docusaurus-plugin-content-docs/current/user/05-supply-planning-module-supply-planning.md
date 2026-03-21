---
id: supply-planning-module-supply-planning
title: "Supply Planning Module: Supply Planning"
sidebar_label: "Supply Planning Module: Supply Planning"
sidebar_position: 5
---
# Módulo de Planejamento de Fornecimento: Planejamento de Fornecimento

## Planejamento de fornecimento: uma visão geral

![](/img/media/image153.png)

Figura 99: Tela Planejamento de Fornecimento – Plano por MOS

![](/img/media/image154.png)

Figura 100: Tela Planejamento de Fornecimento – Planejar por Quantidade

- <u>What</u>? Todos os principais pontos de dados (consumo,
remessas, estoque) se reúnem na tela de planejamento de fornecimento, e isso é
onde a maioria dos usuários do QAT passará a maior parte do tempo. Os usuários podem clicar em
muitas das células da tabela para editar diretamente seus dados. É recomendado
usar esta tela para planejamento de fornecimento ativo (incluindo atualizações de dados e
planejando novos embarques), mas usar a tela de entrada de dados quando
a entrada de dados é necessária. Observe que algumas seções variam **com base em se o
unidade de planejamento é planejada por MOS ou planejada por Quantidade (conforme selecionado em
[Atualizando unidades de planejamento](04-supply-planning-module-program-data.md#planning-units)) – as diferenças são indicadas abaixo.**
  - Esta tela também pode ser visualizada pela unidade de reporte alternativa (ARU) associada à unidade de planejamento. Isso significa que os usuários podem visualizar seus planos de fornecimento em termos dos nomes dos produtos e unidades de medida em que inserem os dados, com valores na tabela e no gráfico mudando de acordo com o fator de conversão ARU/PU estabelecido pelo usuário (consulte Unidades Alternativas de Relatório). O usuário seleciona visualizar por ARU clicando no botão de opção e selecionando a ARU desejada para exibição.

![A screenshot of a calendar Description automatically generated](/img/media/image155.png)

Figura 101: Tabela de Planejamento de Fornecimento – por Unidade de Planejamento vs por Unidade de Relatório Alternativa

- <u>Who?</u> **Administradores de Realm, Administradores de Programa**, **Fornecimento
Revisores de Plano** e **Usuários do Programa** podem adicionar/editar dados no plano de fornecimento.
Certas funções “somente visualização” podem visualizar o plano de fornecimento.

- <u>Quando?</u> A qualquer momento. O usuário não precisa ser
on-line. No entanto, eles devem ter baixado um programa em seu computador local
enquanto estiver online antes de começar.

- <u>Como</u>?

> **Observação:** além da etapa 1 ser obrigatória, as demais etapas não são sequenciais, mas sim uma explicação das funcionalidades disponíveis na tela de planejamento de abastecimento.

1. > Na barra de menu esquerda, vá em Planejamento de Fornecimento \> “Planejamento de Fornecimento”
    1. Selecione o **Programa** desejado. A lista suspensa na tela do plano de suprimentos mostrará todos os programas que foram baixados pelo usuário. Consulte [Baixar programa](03-managing-programs-and-versions.md#downloaddelete) para obter detalhes sobre como baixar um programa.

    2. Selecione a **Unidade de Planejamento QAT ou Unidade de Relatório Alternativa (ARU)** desejada.

![](/img/media/image156.png)

2. > A tela exibe duas abas Plano de Fornecimento: **Plano de Fornecimento Local** e **Servidor** **Plano de Fornecimento - VX.** A aba “Plano de Fornecimento Local” é a versão local que foi selecionada em “programa” e está disponível para edição. O “Plano de Fornecimento do Servidor” é a última versão disponível no servidor e está disponível apenas para visualização (não editável).

![P2040#yIS1](/img/media/image157.png)

3. > Por padrão, são mostrados os últimos 3 meses e os 15 meses futuros a partir da data atual. Use **Rolar para a esquerda/direita** para mostrar dados de 3 meses no passado/futuro

![P2044#yIS1](/img/media/image158.png)

> Clique em “Mostrar Fórmulas” no canto superior direito da tela para obter explicações sobre os cálculos nesta tela.

![](/img/media/image159.png)

4. > Clique nos ícones PDF e CSV para exportar este relatório, que incluirá todas as unidades de planejamento do programa. No PDF será incluído apenas o gráfico do produto selecionado, mas haverá tabelas para cada unidade de planejamento.

![P2050#yIS1](/img/media/image160.png)

5. > Compreender os cálculos do saldo de estoque na metade superior da tabela:

![](/img/media/image161.png)

Figura 102: Cálculo do Saldo de Estoque Final

- > **Saldo Inicial** representa a quantidade de estoque no início do mês. É igual ao saldo final do mês anterior, exceto no primeiro mês do programa, onde o saldo inicial é zero. Pode ser uma contagem de estoque do mês anterior (**negrito**) ou um valor projetado (sem negrito).

- > **Saldo Final** representa a quantidade de estoque no final do mês. Pode ser uma contagem de estoque (**negrito**) ou um valor projetado (sem negrito).

-> Siga os sinais +/- ao lado de cada linha para entender como funciona a matemática desde o saldo inicial até o saldo final.

<!-- lista final -->

6. > A metade inferior da tabela contém mais detalhes para ajudar o usuário a interpretar o status do estoque.

![](/img/media/image162.png)

Figura 103 Diferenças na Tabela de Planejamento de Fornecimento - Plano por MOS vs Plano por Quantidade

- > **Consumo médio mensal (AMC)** é uma média do consumo ao longo dos meses indicados pelos parâmetros AMC, que são apresentados acima da tabela. **Para editar esses parâmetros, consulte [Atualizando unidades de planejamento](04-supply-planning-module-program-data.md#planning-units).**

![](/img/media/image163.png)

Figura 104 Diferenças na Legenda do Planejamento de Fornecimento - Plano por MOS vs Plano por Quantidade

- > **Demanda não atendida.** Quantidades estimadas de produto que teriam sido consumidas se houvesse estoque suficiente disponível:
  -> Quando o consumo previsto é maior que o estoque inicial disponível projetado.

  - > **Quando o consumo efetivo inclui dias de ruptura de stock**

  - > **Quando um ajuste manual negativo é maior que o saldo final projetado**

  -> A funcionalidade de demanda não atendida do QAT é o que captura o que seria um estoque negativo no software legado PipeLine.

- > **A segunda linha de baixo**
  - > **Planejado por MOS: Meses de Estoque** é calculado como o saldo final do mês dividido pelo AMC.

  - > **Planejado por quantidade: a quantidade máxima é calculada como a quantidade mínima + frequência de novo pedido x AMC.**

-> Codificação por cores do status do estoque
  - > **Planejado pela MOS: A linha “Meses de estoque”** é codificada por cores com base no status do estoque usando o código de cores exibido na legenda. O status do estoque é determinado comparando o MOS com o MIN MOS e o MAX MOS.

  - > **Planejado por Quantidade: A linha “Saldo Final” é codificada por cores com base no status do estoque** usando o código de cores exibido na legenda. O status do estoque é determinado comparando a quantidade do “saldo final” com a quantidade mínima (fornecida pelo usuário) e a quantidade máxima (calculada).

<!-- lista final -->

7. > **Leitura do gráfico de situação do estoque.** As datas deste gráfico seguem a tabela. Por padrão, todos os elementos gráficos são exibidos. Clique em qualquer elemento de dados na legenda para ocultar um elemento de dados. O gráfico Status do estoque possui dois eixos verticais (Y):

<!-- lista final -->

- > O **eixo principal (esquerdo) está em unidades** e representa remessas, consumo, estoque e vencimentos. Para Planejar por quantidade, as quantidades mínimas e máximas usam o eixo primário.

![](/img/media/image164.png)

Figura 105 Gráfico de Planejamento de Fornecimento - Eixo Primário (Plano por MOS)

![](/img/media/image165.png)

Figura 106 Gráfico de Planejamento de Fornecimento - Eixo Primário (Planejamento por Quantidade)

- > Para o plano por MOS, existe um **eixo secundário (direita) em meses**, e representa os parâmetros de estoque (mínimo, máximo) e os meses de estoque calculados.

![](/img/media/image166.png)

Figura 107 Gráfico de Planejamento de Fornecimento - Eixo Secundário (Plano por MOS)

## Planejamento de Abastecimento: Consumo

Na tabela de planejamento de abastecimento, será exibido apenas um número por mês para todo o programa na linha de consumo. Conforme observado na legenda, **_consumo previsto_** é indicado por texto roxo em itálico, enquanto **consumo real** é indicado por texto preto sem itálico.

![P2093#yIS1](/img/media/image167.png)

> ![P2094#yIS1](/img/media/image168.png)

![](/img/media/image169.png)**Para adicionar ou editar registros de consumo**

1. Clique no mês e na célula da linha Consumo na tela de planejamento de abastecimento. Uma nova janela chamada Detalhes de Consumo aparecerá. Na tabela que aparece, cada linha representa uma região. Os programas de região única terão apenas uma linha, enquanto os programas multirregionais terão várias linhas. O total mostra o consumo agregado de todas as regiões.

2. Clique no registro de consumo de qualquer mês e região para exibir mais detalhes*.* Todos os registros desse mês e região serão exibidos abaixo.

3. Para criar um novo registro, clique com o botão direito na linha de detalhes e selecione “Adicionar novo consumo” <u>or</u> clique no botão “+ Adicionar linha”.

4. Para editar um registro, clique em qualquer célula e edite os detalhes do consumo (tipo de consumo, fonte de dados, quantidade, etc.) Clique duas vezes para ativar qualquer menu suspenso. Consulte [Dados de consumo](04-supply-planning-module-program-data.md#consumption-data) para obter orientações adicionais sobre a entrada de dados de consumo.

5. Clique em “Enviar” para salvar as alterações e retornar à tela principal de planejamento de fornecimento, onde suas alterações serão refletidas. ![A screenshot of a computer Description automatically generated](/img/media/image170.png)

## Planejamento de Fornecimento: Remessas

Por padrão, as remessas são mostradas apenas como uma linha na tela de planejamento de fornecimento – esta é a quantidade agregada de todas as remessas (excluindo as remessas sugeridas). Para mostrar mais detalhes, clique no ícone + à esquerda da linha “+ Remessas” para expandir e exibir as sublinhas. Você verá cinco linhas divididas por status do pedido (linha superior para remessas sugeridas que são calculadas automaticamente).

**Para ver um detalhamento de todas as remessas em um mês, clique na célula do mês correspondente na linha ‘+Embarques’. Para ver o detalhamento de todas as remessas por status, clique na célula do mês correspondente na linha de status individual.**

**ERP (Enterprise Resource Planning)**: os dados vinculados ao ERP dos agentes de compras não são editáveis (consulte [ERP Shipment Linking](04-supply-planning-module-program-data.md#erp-shipment-linking))

Para todas as linhas de remessa, as cores indicam o agente de compras. Se um mês tiver múltiplas remessas com diferentes agentes de compras, a célula ficará verde. Os triângulos vermelhos no canto superior direito da célula indicam que uma remessa é uma emergência. Se a remessa for uma compra local, haverá um ícone L no canto inferior esquerdo da célula. Se a remessa estiver vinculada ao ERP, haverá um ícone de link no canto superior esquerdo da célula. As remessas podem ter vários ícones, como um pedido de emergência vinculado ao ERP local. A legenda aparece na parte superior da tela.

![](/img/media/image171.png)

![](/img/media/image172.png)

Figura 108 Remessas no Planejamento de Fornecimento

As seções a seguir abordarão como atualizar remessas existentes e criar novas remessas na tela de planejamento de fornecimento. Consulte <u>**Dados da Remessa**</u> para obter mais dicas sobre os campos de dados da remessa, que se aplicam à tela Entrada de Dados da Remessa e à tela de planejamento de fornecimento.

### Atualizando uma Remessa Existente

1. Clique na célula que representa o mês e a remessa a ser editada. Clicar na linha ‘+ Remessas’ abrirá uma guia com todas as remessas daquele mês, independentemente do status. Clicar em uma das linhas de status abrirá uma guia que mostra apenas as remessas daquele mês com esse status.

![A screenshot of a computer Description automatically generated](/img/media/image173.png)

2. O pop-up Detalhes da Remessa aparecerá. Faça todas as alterações desejadas. Para atualizar informações de lote ou data, clique com o botão direito na linha da remessa. A parte superior do pop-up permite que os usuários naveguem para um mês diferente para fazer alterações nessas remessas também.

![](/img/media/image174.png)

3. Clique em “Enviar” para salvar as alterações e retornar à tela principal de planejamento de fornecimento, onde as alterações serão refletidas (**Observação:** O botão Enviar não aparecerá se todos os campos obrigatórios não forem preenchidos.)

![A screenshot of a computer screen Description automatically generated](/img/media/image175.png)

**Observação:** A remessa planejada foi editada para enviada, mostrando que 130.000 foram movidos da linha “Planejada” para a linha “Enviada e Chegada”.

![](/img/media/image176.png)

**Lembrete:** dicas de ferramentas são fornecidas para ajudar a orientar onde atualizar parâmetros específicos. Eles fornecem clareza sobre o que os usuários precisam atualizar.

**Atualizando quantidade de remessa com botão recalcular**

Para remessas planejadas no futuro, a QAT irá sugerir uma quantidade revisada de remessa como um aviso prévio para evitar ficar abaixo dos níveis mínimos de estoque. Assim como as remessas sugeridas (consulte [Criando uma nova remessa](#creating-a-new-shipment)), o QAT só fornecerá o botão de recalcular se a remessa cair em um mês abaixo do mínimo, seguido por pelo menos dois meses que também esteja abaixo do nível mínimo de estoque. A quantidade recomendada pelo botão recalcular seguirá a mesma lógica dos envios sugeridos pelo QAT (ver **Regras para Remessas Sugeridas** abaixo).

Abaixo estão as etapas para usar o botão recalcular na tela Planejamento de Fornecimento:

Vá para uma remessa planejada no futuro, onde o mês atual e pelo menos os 2 meses seguintes estejam abaixo do nível mínimo de estoque.

Clique com o botão esquerdo na remessa.

Encontre a coluna ‘Quantidade do pedido’ e clique com o botão direito.

Clique em ‘Recalcular’. Uma mensagem pop-up aparecerá informando a quantidade que a QAT está sugerindo adicionar e qual será a quantidade da remessa revisada.

![P2155#yIS1](/img/media/image177.png)

Figura 109: Botão Recalcular

Clique em ‘Ok’. O pop-up desaparecerá e a quantidade revisada do pedido aparecerá na coluna ‘Quantidade do pedido’. Clique em ‘Enviar’ se desejar prosseguir com a quantidade revisada do pedido. A qualquer momento, o usuário pode substituir a quantidade clicando duas vezes na célula e digitando uma nova quantidade.

A quantidade revisada agora será refletida no plano de fornecimento.

### Criando uma nova remessa

Existem duas maneiras de criar novas remessas – 1) converter uma remessa sugerida pelo QAT em uma remessa planejada ou 2) adicionar manualmente uma remessa.

Para **Converter uma** **Remessa Sugerida** em uma remessa planejada:

1. Clique na linha Remessa Sugerida no mês desejado.

2. O pop-up Detalhes da Remessa aparecerá. Altere o status para o status desejado, preencha os campos obrigatórios, indicados por um asterisco. Clique duas vezes para ativar qualquer menu suspenso. Role para a direita para ver todos os campos. Passe o mouse sobre as dicas de ferramentas se for necessário algum esclarecimento (mostrado na imagem abaixo). A quantidade do pedido será pré-preenchida pela quantidade do pedido sugerida.

![](/img/media/image178.png)

![A screenshot of a computer Description automatically generated](/img/media/image179.png)

3. Clique em “Enviar” para salvar as alterações e retornar à tela principal de planejamento de fornecimento, onde as alterações serão refletidas (**Observação**: O botão Enviar não aparecerá se todos os campos obrigatórios não forem preenchidos)

**Regras para envios sugeridos:**

> <u>Para Plano por MOS:</u>

1. A unidade de planejamento está com estoque insuficiente (MOS\<Min) for 3 straight months?
    1.  If yes, suggested shipment will bring the current month’s stock level to **maximum**.

    2.  If no, no suggested shipment.

2.  If the planning unit is stocked out, QAT will always suggest a shipment.
    1.  If both of the next 2 months are \<Min, the suggested shipment will bring the current month’s stock level to **maximum.**

    2.  If 1 of the next 2 months is \>Min, a remessa sugerida levará o nível de estoque do mês atual ao **mínimo.**

3. Se AMC = 0 ou N/A, não haverá sugestão de remessa para aquele mês.

> <u>Para plano por quantidade:</u>
>
> Onde Mês N é o mês para o qual o QAT está calculando e X = Prazo de entrega de distribuição

1. > Se AMC = 0 ou N/A para o Mês N, nenhuma remessa sugerida

2. > Se o mês N estiver esgotado (saldo final = 0), a QAT sempre sugerirá uma remessa

<!-- lista final -->

1. > Se ambos os próximos 2 meses (N+1, N+2) forem \< quantidade mínima, a remessa sugerida é a quantidade que levaria o mês N à **quantidade máxima.**

2. > Se um ou ambos os próximos 2 meses (N+1 ou N+2) for \> quantidade mínima, a remessa sugerida é a quantidade que levaria o mês N à **quantidade mínima.**

<!-- lista final -->

3. > O produto está com falta de estoque (saldo final \< Quantidade mínima) por 3 meses consecutivos (Mês N, N+1, N+2)?

<!-- lista final -->

1. > Em caso afirmativo, a remessa sugerida é a quantidade que levaria o Mês N à **quantidade máxima.**

2. > Se não, nenhuma remessa sugerida

_QAT coloca a quantidade sugerida no mês NX. Em outras palavras, X meses antes do Mês N, onde X é o lead time de distribuição._

**Para criar manualmente uma nova remessa:**

1. Clique na célula que representa o mês ao qual a remessa deve ser adicionada. Clicar na linha ‘+ Remessas’ abrirá uma guia com todas as remessas daquele mês, independentemente do status. Clicar em uma das linhas de status abrirá uma guia que mostra apenas as remessas daquele mês com esse status. Qualquer uma das opções funcionará para adicionar uma nova remessa.

2. O pop-up Detalhes da Remessa aparecerá. Para adicionar uma nova linha, clique no botão ‘+ Adicionar linha’ ou clique com o botão direito em qualquer linha e selecione ‘Adicionar nova remessa’. Clique duas vezes para ativar qualquer menu suspenso. Altere para o status e quantidade desejados e preencha os campos obrigatórios indicados por um asterisco. Role para a direita para ver todos os campos.

3. Para criar várias remessas novas, clique com o botão direito em qualquer linha e selecione “Adicionar nova remessa” ou clique no botão “+ Adicionar linha”.
    1. Esteja atento aos ícones de dicas de ferramentas para ajudar a orientar quais parâmetros específicos precisam ser atualizados.

> ![A close up of a white background Description automatically generated](/img/media/image180.png)

![P2201#yIS1](/img/media/image181.png)

4. Clique em “Enviar” para salvar as alterações e retornar à tela principal de planejamento de fornecimento, onde as alterações serão refletidas (**Observação:** O botão Enviar não aparecerá se todos os campos obrigatórios não forem preenchidos.)

## Planejamento de Fornecimento: Estoque/Ajustes

Na tabela de planejamento de fornecimento, um número será exibido por mês para todo o programa na linha **manuais** **ajustes**, independentemente de quantos ajustes manuais forem feitos. Da mesma forma, o **saldo final** sempre será uma linha, independentemente de o saldo final ser projetado pelo QAT ou fornecido pelo usuário como uma contagem de estoque.

![](/img/media/image182.png)

1. ![](/img/media/image169.png) Para adicionar ou editar registros de ajuste ou estoque, clique no mês e na célula nas linhas de ajustes ou saldo final na tela de planejamento de fornecimento.
    1. Uma nova janela chamada **Ajustes e detalhes de inventário** aparecerá. Na tabela que aparece, cada linha representa uma região. Os programas de região única terão apenas uma linha, enquanto os programas multirregionais terão várias linhas.

    2. O total mostra os ajustes agregados e o estoque para todas as regiões.

    3. Clique no registro de qualquer mês e região para exibir mais detalhes

![P2222#yIS1](/img/media/image183.png)

2. Quaisquer registros desse mês e região serão exibidos abaixo.
    - Para adicionar um ajuste ou registro de inventário, clique em adicionar linha, ou clique com o botão direito na tabela inferior e selecione “Adicionar novo ajuste” ou “Adicionar novo inventário”. Insira os detalhes necessários. Para ajustes, os usuários podem inserir ajustes positivos e negativos, no passado e no futuro, e são necessárias notas

![P2227#yIS1](/img/media/image184.png)

- Para editar um registro, clique em qualquer célula para editar.

<!-- lista final -->

3. **Observação:** Um usuário pode revisar qual lote está afetando seu saldo final de um determinado mês, clicando em “Estoque final” na tela pop-up “Detalhes de ajuste e estoque”.

![P2232#yIS1](/img/media/image185.png)

Figura 111: Lotes incluídos no pop-up do inventário final

4. Para meses com registro de estoque, o usuário pode clicar em editar as quantidades do lote.
    - Nota: a redistribuição das quantidades dos lotes deve ser o último recurso. É sempre melhor atualizar as informações a montante (expedição, consumo, ajuste) em vez de atualizar as informações do lote de estoque.

    - Como fazer isso?
      1. Certifique-se de que haja uma contagem de estoque real/manual para o mês

      2. Clique em “inventário final” para abrir os lotes

      3. Digite a quantidade real – use os menus suspensos se quiser alterar os lotes

      4. Lembre-se, o total dos lotes deve corresponder ao total do estoque do mês.

    - Clique com o botão direito em qualquer lote para visualizar o razão do lote (saiba mais em [Planejamento de fornecimento: estoque expirado do projeto e informações do lote](#supply-planning-project-expired-stock-and-batch-information).)

> ![](/img/media/image186.png)

Figura 112: Pop-up de lotes que afetam o inventário final

## Planejamento de fornecimento: estoque expirado do projeto e informações de lote

![](/img/media/image187.png)Os usuários podem visualizar o estoque expirado projetado, se houver, para cada mês em seu plano de fornecimento na linha P**Estoque expirado projetado**. Clicar em <u>cell</u> abrirá uma janela pop-up com os detalhes de validade.

![](/img/media/image188.png)

No pop-up – os usuários podem realizar 2 funções:

1. **Edite o lote que contribuiu para o vencimento**: Clique no Número do Lote. O QAT redirecionará automaticamente o usuário para a remessa a partir da qual o lote foi gerado. Na tela de remessa, um usuário pode editar o nome do lote, a data de vencimento e a quantidade da remessa.

![P2240#yIS1](/img/media/image189.png)

> **Observação:** Os usuários também podem editar essas informações na tela de entrada de Dados da Remessa (consulte [Dados da Remessa](04-supply-planning-module-program-data.md#shipment-data)).

2. **Visualizar o razão do lote:** Clique na célula <u>Expired Quantity</u>. O QAT abrirá automaticamente uma tela pop-up abaixo com o registro do lote, que mostra a vida útil de um lote mês a mês, desde o recebimento da remessa até o vencimento.

![P2247#yIS1](/img/media/image190.png)

> **Observação:** a menos que o usuário marque um lote para consumo real específico ou entradas de ajuste (consulte “Adicionar/atualizar detalhes do lote” em [Dados de consumo](#consumo-dados) e [Dados de inventário](#inventário-dados)), o QAT usará como padrão as quantidades mensais de lote sendo colocadas na coluna “Alocada automaticamente” no razão de lote.

## Planejamento de cenário

QAT fornece aos usuários cenários predefinidos para planejamento de fornecimento. Esta funcionalidade permitirá aos usuários fazer alterações e visualizar seus dados de diferentes maneiras, sem necessariamente afetar seu plano de fornecimento atual. Os usuários podem aplicar um ou mais cenários aos seus dados para ver como essas alterações afetam as projeções de estoque. Os cenários selecionados podem então ser aplicados a um plano de fornecimento atual, criando uma nova versão.

Existem atualmente seis cenários predefinidos disponíveis para os usuários; mais podem ser programados no QAT dependendo da necessidade e dos casos de uso. Os usuários do QAT podem solicitar novos cenários através da geração de um ticket. A necessidade de novos cenários será gerenciada centralmente pelo Realm Admin.

Cenários disponíveis:

- > **Aumentar o consumo previsto**: por percentual e período definidos pelo usuário. Isto aplicará um aumento percentual aos valores previstos para cada mês do período selecionado.

- > **Diminuir o consumo previsto**: por percentual e período definidos pelo usuário. Isto aplicará uma redução percentual aos valores previstos para cada mês do período selecionado.

- > **Produto de entrada/saída de previsão:** para um período definido pelo usuário e valores de consumo de previsão inicial e final. O QAT traçará uma linha reta interpolando entre os valores inicial e final e substituirá os valores atuais de consumo previstos.

- > **Remover remessas não financiadas**: todas as remessas sem uma fonte de financiamento atribuída (ou seja, fonte de financiamento = TBD) serão removidas do plano de fornecimento e das projeções de estoque.

- > **Remover todos os embarques planejados**: todos os embarques com status “planejados” serão retirados do plano de abastecimento e das projeções de estoque. O usuário pode marcar uma caixa para remover apenas as “remessas planejadas” que não cumprem os prazos de entrega estabelecidos (ou seja, a data de recebimento esperada é anterior ao que seria viável dados os prazos de entrega).

- > **Remover todos os envios enviados fora do prazo de entrega**: todos os envios com status “enviado” que não cumpram os prazos de entrega estabelecidos serão retirados do plano de abastecimento e das projeções de estoque.

- > **Remover todos os Envios Em Espera que não estejam dentro do prazo de entrega**: todos os envios com status “em espera” que não cumpram os prazos de entrega estabelecidos serão removidos do plano de abastecimento e das projeções de estoque.

- > **Replanejar plano de fornecimento:** por um período de tempo definido pelo usuário, o QAT remove remessas planejadas que não estão mantendo o estoque corretamente entre os parâmetros MIN/MAX e cria novas remessas planejadas para cumprir os parâmetros de estoque, usando a lógica de remessa sugerida descrita na Seção 5.C2 <u>Criando uma nova remessa</u>.

Para acessar esses cenários:

1. Acesse Planejamento de Fornecimento e clique em “Planejamento de Cenário”.

2. Selecione um cenário predefinido no menu suspenso e edite os campos obrigatórios

3. Clique em Adicionar para visualizar as alterações.

![P2270#yIS1](/img/media/image191.png)

Figura 113 Tela de planejamento de cenário

4. O cenário será mostrado na “Lista de Cenários”.

![P2274#yIS1](/img/media/image192.png)

Figura 114: Lista de cenários de planejamento de cenário

5. Caso o usuário deseje aplicar o cenário ao seu plano de fornecimento, poderá clicar no botão “Enviar”. O novo plano de fornecimento será armazenado no computador desse usuário, e o usuário poderá carregá-lo no servidor como uma nova versão por meio da funcionalidade Upload.

6. Caso o usuário não deseje aplicar o cenário ao seu plano de abastecimento atual, poderá clicar no botão “Cancelar” ou no botão “Reiniciar”, e as alterações não terão efeito.

## Relatório do Plano de Fornecimento

O objetivo do relatório do plano de abastecimento é permitir ao usuário avaliar rapidamente o status do estoque de um ou mais programas e/ou unidades de planejamento selecionados, comparando graficamente as projeções de estoque com os níveis dinâmicos de estoque mínimo e máximo e poder ver todos os detalhes de consumo (real e previsto), estoque e envio em um só lugar. O relatório fornece uma representação gráfica do plano de fornecimento, bem como uma visão tabular. O relatório pode ser exportado em formato PDF e/ou CSV.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Usuários de Programa e Visualizador de Relatórios

- **Navegação:** Planejamento de Fornecimento  Relatório do Plano de Fornecimento

**Os usuários podem utilizar os vários parâmetros suspensos na parte superior da tela para gerar diferentes visualizações do Relatório do Plano de Fornecimento. Cada visualização do relatório gerada terá uma representação gráfica e um equivalente tabular dos dados. Existem três visualizações principais do Relatório do Plano de Fornecimento:**

1. **Visualização de programa único**
    1. **Programa único**

    2. **Unidade Única de Planejamento (PU) ou Unidade Única de Relatório Alternativo (ARU)**

    3. **Remessas desagregadas por status (ou seja, planejando, enviadas, recebidas, etc.)**

![A graph with blue and red lines Description automatically generated](/img/media/image193.png)

Figura 115: Relatório do Plano de Fornecimento: Visualização Única do Programa, Gráfico

![A screenshot of a computer Description automatically generated](/img/media/image194.png)

Figura 116: Relatório do Plano de Fornecimento: Visualização Única do Programa, Dados Tabulares

2. **Visualização de vários programas**
    1. **Vários programas**

    2. **PU único ou ARU**

    3. **Remessas desagregadas por programa (ou seja, FASPonia Malaria MOH e FASPonia Malaria Social Marketing)**

    4. **Observações: QAT é capaz de agregar os dados de planejamento de fornecimento em vários programas se eles compartilharem o PU/ARU <u>same</u>. Isto pode ser útil se um país tiver vários programas paralelos que monitorizam os mesmos produtos e gostaria de ter uma visão agregada ou nacional do estado dos stocks ao longo do tempo.**

![A graph with blue and red lines Description automatically generated](/img/media/image195.png)

Figura 117: Relatório do Plano de Fornecimento: Visão Multiprograma

![A screenshot of a computer Description automatically generated](/img/media/image196.png)

Figura 118: Relatório do Plano de Fornecimento: Visão Multiprograma/UE, Dados Tabulares

3. **Visualização da Unidade de Equivalência (UE)**
    1. **Programas únicos ou múltiplos**

    2. **Várias PUs _(ARUs não podem ser usadas com EUs)_**

    3. **Remessas desagregadas por programa, PU ou programa-PU**

    4. **Notas: O QAT é capaz de agregar PUs que são diferentes (diferentes tamanhos de embalagens, taxas de uso, etc.), mas relacionados através da utilização de um EU (consulte [Unidades de Equivalência](#unidades de equivalência) para obter mais informações) e um fator de conversão correspondente. Isto pode ser útil para países ou telespectadores globais que gostariam de ver conceitos como Tratamentos contra a Malária, Protecção Anual de Casais (CYP), Meses de Pacientes ARV, etc.

![A graph with colorful lines and numbers Description automatically generated with medium confidence](/img/media/image197.png)

Figura 119: Relatório do Plano de Fornecimento: Visão da Unidade de Equivalência

**Nota:**

1. > **O relatório utiliza as configurações da Unidade de Planejamento definidas pelo Administrador do Programa para AMC, prazo de validade, MIN, intervalo de novo pedido e MAX**

2. > A coluna Quantidade da Remessa é a soma de todas as remessas que possuem data de recebimento no mesmo mês para aquela unidade de planejamento

3. > A coluna “Quantidade da Remessa | Fonte de Financiamento | Status da Remessa | Agente de Aquisição | RO - Número Principal | Número do Pedido - Número da Linha Principal" permite ao usuário ver as remessas desagregadas que têm data de recebimento no mesmo mês, incluindo detalhes de quantidade, agente de compras, status, fonte de financiamento e número do pedido atribuído a esse pedido

4. > A coluna “Consumo de Consenso” só aparece se um usuário escolher vários programas para agregação

5. > As exportações de PDF e CSV têm múltiplas opções, semelhantes aos menus suspensos do relatório, permitindo exportações de programas agregados, vários planos de fornecimento de produto único ou produtos agregados (via EUs)

#