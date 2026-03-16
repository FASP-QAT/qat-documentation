---
id: supply-planning-module-program-data
title: "Supply Planning Module: Program Data"
sidebar_label: "Supply Planning Module: Program Data"
sidebar_position: 4
---
# Módulo de Planejamento de Fornecimento: Dados do Programa

Conforme definido anteriormente em [Conceitos e termos importantes do QAT](#important-qat-concepts-and-terms), um programa é semelhante em estrutura a um banco de dados de plano de fornecimento do PipeLine. Cada programa consiste em apenas um país, uma ou mais áreas técnicas, uma região (nível nacional, nível central, etc.) e uma organização (MS, apenas PEPFAR, apenas PMI). Cada programa dentro de um domínio é governado pelos mesmos dados mestre padronizados, como catálogo de produtos, agentes de compras, fontes de financiamento, fontes de dados, etc.

O gerenciamento de dados do programa fica no terceiro nível da hierarquia do sistema QAT e geralmente é feito por usuários com as funções **administrador do programa e usuário do programa** (para obter mais informações sobre as funções do usuário, consulte [Anexo 3: Matriz de funções do usuário](#annex-3-user-role-matrix)). Os dados mestre em nível de programa gerenciados por esses usuários incluem orçamentos e unidades de relatório alternativas.

Um usuário pode “baixar” ou “excluir” programas de sua máquina local. Os programas também podem ser “importados” para a máquina local ou “exportados” da máquina local para compartilhar com outros usuários se houver problemas de conectividade.

Os administradores e usuários do programa podem manipular duas grandes categorias de dados em seus programas: dados do programa e dados transacionais (os “3 grandes” – consumo, estoque, remessas).

<table>
  <thead>
    <tr class="header">
      <th></th>
      <th>
        <strong>Categoria de dados</strong>
      </th>
      <th>
        <strong>Detalhes</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>Dados de fundo</td>
      <td>
        <strong>Informações do programa</strong>
      </td>
      <td>Gerenciador de programas,% de frete, prazos de entrega</td>
    </tr>
    <tr class="even">
      <td></td>
      <td>
        <strong>Informações do produto</strong>
      </td>
      <td>Punidades de planejamento – min, intervalo de novo pedido, unidades de relatório alternativas</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td>
        <strong>Borçamento</strong>
      </td>
      <td>Fonte de financiamento, valores, datas de início e término, etc. </td>
    </tr>
    <tr class="even">
      <td>
        <p>Dados Transacionais</p>
        <p> (“Grande 3”) </p>
        <p>para cada produto</p>
      </td>
      <td>
        <strong>Consumo</strong>
      </td>
      <td>
        <p>Consumo previsto</p>
        <p>E consumo real, à medida que fica disponível</p>
      </td>
    </tr>
    <tr class="odd">
      <td></td>
      <td>
        <strong>Estoque</strong>
      </td>
      <td>Contagens de inventário e Ajustes</td>
    </tr>
    <tr class="even">
      <td></td>
      <td>
        <strong>Envios</strong>
      </td>
      <td>
        <p>
          Quantidades, data de recebimento, status, agente de compras, financiador e agente de compras.
          orçamento associado
        </p>
        <p> (se disponível) lote #s &amp; datas de validade</p>
      </td>
    </tr>
  </tbody>
</table>

Tabela 7: Dados ao nível do programa

## Dados de segundo plano

Nota: Todos os dados de segundo plano devem ser atualizados enquanto o usuário estiver online. É recomendado que os usuários cliquem em “sincronização de dados mestres” após fazer qualquer atualização de dados em segundo plano para que sejam refletidos em toda a ferramenta.

### Informações do programa

Os gerentes de programa no QAT podem definir seus parâmetros gerais de programa selecionando em uma lista suspensa que contém dados mestre em nível de região para cada campo**.** Esses parâmetros gerais para o módulo de planejamento de fornecimento incluem nome do programa, gerente de programa, porcentagens de frete padrão para frete aéreo, marítimo e rodoviário, prazos de entrega por status de remessa e notas. Os parâmetros gerais do módulo de previsão incluem nome do programa, gerenciador do programa e notas. **Usuários do programa** poderão listar/visualizar todos os programas aos quais têm acesso, enquanto apenas **Administradores do programa** poderão atualizar qualquer um dos parâmetros gerais do programa.

**Atualizar informações do programa:**

1. Clique em “Gerenciamento de programas” e selecione “Atualizar informações do programa”

2. Clique no programa que precisa ser atualizado
    1. Os administradores do programa podem adicionar/remover agentes de compras e fontes de financiamento que já existem no QAT ao seu programa. Isso, por sua vez, adicionará/removerá os agentes de compras dos campos suspensos nas telas [Entrada de dados da remessa](#shipment-data). Se um usuário quiser adicionar um agente de compras ao seu programa que <u>not</u> exista no QAT, ele poderá emitir um ticket com o sistema [QAT HelpDesk](#tickets-for-addingupdating-users-and-master-data).

![](/img/media/image113.png)

Figura 67: Atualização de informações do programa – Módulo de planejamento de suprimentos

![A screenshot of a computer Description automatically generated](/img/media/image114.png)

Figura 68: Atualizar informações do programa – Módulo de previsão

3. Atualize os campos conforme desejado e clique em “Enviar”

**\*Observação:** O QAT permite apenas que administradores em nível de realm ou administradores em nível de aplicativo atualizem os campos que estão em cinza na tela Atualizar informações do programa. Se um usuário precisar que esses campos sejam atualizados, ele poderá emitir um ticket no sistema [QAT HelpDesk](#tickets-for-adding-updating-users-and-master-data).\*

### Unidades de planejamento

A unidade de planejamento é o produto utilizado no QAT como base para planejar compras e exibir consumo, remessas, estoque e ajustes. O nome da unidade de planejamento geralmente inclui uma descrição completa até a embalagem primária; assim, sua nomenclatura segue de perto o tamanho da embalagem em que ocorre a dispensação, ou seja, um frasco de 30 comprimidos, blister de 10x10 cápsulas, etc.

O catálogo da unidade de planejamento QAT é considerado dados mestre em nível de domínio, o que significa que quaisquer adições/edições/subtrações desse catálogo são gerenciadas em nível de domínio e se aplicam a todos os programas dentro desse domínio. Cada programa deve ter pelo menos uma unidade de planejamento que **Administradores de Programa** possam selecionar no catálogo em nível de região para **adicionar a seus programas ou desativar** de seus programas. Os administradores do programa também podem atualizar qualquer parâmetro relacionado a uma unidade de planejamento específica, incluindo a frequência de novos pedidos, meses mínimos de estoque, cálculo de consumo médio mensal, prazo de entrega do agente de compras local, prazo de validade e preço. As unidades de planejamento podem ser desativadas do programa se não estiverem mais em uso, permitindo que os administradores do programa mantenham todos os dados legados. Caso a unidade de planejamento não exista no catálogo do QAT, por favor, levante um ticket através do Helpdesk do QAT para que ele possa ser criado para todo o domínio. Veja mais sobre emissão de tickets na seção [QAT Helpdesk e Tickets](#qat-helpdesk-and-tickets).

![](/img/media/image115.png)

Figura 69: Parâmetros a atualizar por unidade de planejamento.

**Parâmetros da Unidade de Planejamento:**

- > **Fator de conversão (FU:PU):** Campo não editável que fornece informações sobre o fator de conversão entre a PU escolhida e sua FU associada

- > **Planejar por: escolha entre “MOS” para as unidades de planejamento que são consumidas em grandes quantidades ou “Quantidade” para as unidades de planejamento que são** consumidas em pequenas quantidades, ou para fins emergenciais com vencimentos elevados

- > **Intervalo de novo pedido (em meses): o** número de meses entre remessas**. Intervalo de reordenação + MOS mínimo = MOS máximo**

- > **Mínimos Meses de Estoque (MOS): a quantidade mínima de estoque, em meses, que deve estar disponível para atender a demanda e evitar rupturas de estoque**

- > **Quantidade mínima: a quantidade mínima de estoque determinada como necessária disponível**

- > **O cálculo do Consumo Médio Mensal (AMC), que é a quantidade média que um produto é usado durante um período de tempo selecionado, usará uma média dos valores do administrador do programa para “Meses no futuro (incluindo o mês atual)” e “Meses no passado”**

<!-- lista final -->

- **Prazo de entrega de aquisição local: todo o prazo de entrega (“planejado para recebimento”), em meses, para unidades de planejamento adquiridas localmente. Idealmente, nas compras locais, o prazo de entrega seria muito menor do que nas compras internacionais.
  - > **Prazo de entrega de distribuição: Número de meses entre o recebimento da remessa e o produto a ser distribuído até o nível mais baixo. Usado para remessas sugeridas antes do estoque insuficiente.**

  - > **Prazo de Validade: número de meses desde o recebimento da remessa (status = recebido) até o vencimento. Este é um número médio de meses para a unidade de planejamento – para inserir dados exatos do lote, incluindo datas de vencimento, consulte [Planejamento de fornecimento: estoque expirado do projeto e informações do lote](#supply-planning-project-expired-stock-and-batch-information)**

  - > **Limite de erro de previsão (%): um valor usado nos relatórios de consumo de Erro de previsão (mensal) e Erro de previsão (por PU) como uma demarcação se um erro de previsão é considerado muito alto**

  - > **Preço de Catálogo: preço médio de uma única unidade de planejamento, que será utilizado no cálculo dos custos de envio. O preço por programa e agente de compras pode ser atualizado de forma mais granular em [Informações específicas do programa/agente de compras](#programprocurement-agent-specific-information) ou os preços de remessa específicos podem ser atualizados na tela [Entrada de dados de remessa](#shipment-data).**

  - > **Notas: um campo de texto livre para adicionar informações relevantes da unidade de planejamento (ou seja, cronogramas de entrada/saída progressiva, se a unidade de planejamento for de dados de nível central/nacional, etc.). Essas notas estão disponíveis para visualização no relatório Plano de Fornecimento, Versão do Plano de Fornecimento e tela Revisão de Planejamento de Fornecimento, tela Planejamento de Fornecimento e tela Planejamento de Cenário.**

**Atualizar unidades de planejamento em um programa:**

1. Certifique-se de estar trabalhando no modo ‘online’. Selecione “Gerenciamento de Programas” e depois “Atualizar Unidades de Planejamento”

2. Selecione o programa para exibir as unidades de planejamento atualmente gerenciadas
    1. Se pretende atualizar ou reativar uma unidade de planejamento desativada, escolha “Inativo” no menu suspenso Status da unidade de planejamento

3. Clique duas vezes na célula (parâmetro) que precisa ser atualizada

4. Clique em “Enviar” para salvar as alterações

**Adicionar unidades de planejamento a um programa:**

1. Certifique-se de estar trabalhando no modo ‘online’. Selecione “Gerenciamento de Programas” e depois “Atualizar Unidades de Planejamento”.

2. Selecione o programa para exibir as unidades de planejamento atualmente gerenciadas

3. Clique no botão azul “Adicionar linha” no canto inferior direito da tela e uma nova linha aparecerá no topo da tabela.
    1. Alternativamente, clique com o botão direito em qualquer linha da tabela e selecione “Inserir nova linha antes” ou “Inserir nova linha depois”.

4. Comece digitando as três primeiras letras da unidade de planejamento desejada a ser adicionada

5. Preencha todas as células (parâmetros) nessa linha

6. Clique em “Enviar” para salvar as alterações

> **Observação:** Se uma unidade de planejamento necessária não estiver disponível no menu suspenso e, portanto, no catálogo do QAT, crie um ticket por meio do Helpdesk do QAT para que ele possa ser criado para todo o domínio. Veja mais sobre emissão de tickets na seção [QAT Helpdesk e Tickets](#qat-helpdesk-and-tickets).

### Informações específicas do programa/agente de compras

Os usuários do QAT podem gerenciar detalhes específicos (custos de frete, prazos de entrega, custos unitários) para agentes de compras e unidades de planejamento dentro de um plano de fornecimento. Os preços específicos do agente de compras do programa podem ser definidos para cada unidade de planejamento em seus programas, além dos preços padrão (catálogo) do programa ou preços de catálogo do agente de compras em nível de região. Por exemplo, um utilizador pode querer inserir o preço do PNUD para testes de diagnóstico rápido da malária (mRDT) no programa FASPonia-Malária, se o catálogo do PNUD não estiver disponível ao nível do território. Os usuários também têm a capacidade de designar porcentagens de frete, prazos de entrega (incluindo prazos de entrega locais) e preços unitários para unidades de planejamento específicas, agentes de compras ou uma combinação dos dois.

**Recursos e regras:**

- **Combinação Programa + Agente de Compras:** Se estiver criando uma combinação de programa e agente de compras, a coluna de preço se tornará não editável se a unidade de planejamento for definida como ‘Todos’, uma vez que o preço já existe em uma tela diferente.

- **Custos de frete, prazos de entrega e preços unitários:** Pelo menos uma dessas colunas deve ter um valor numérico ao adicionar ou editar linhas.

- **Campos Obrigatórios:** Somente as três primeiras colunas (Programa, Unidade de Planejamento e Agente de Compras) são obrigatórias para adicionar uma linha.

- **Restrições:**
  - Somente uma linha é permitida por combinação de programa/unidade de planejamento/agente de compras.

  - Se uma linha do agente de compras incluir unidades de planejamento 'Todas', a coluna de preço unitário não será editável.

**Uso no Módulo de Planejamento de Suprimentos:**

Esses detalhes específicos do programa/agente de compras/unidade de planejamento impactarão o módulo de planejamento de fornecimento da seguinte forma:

- **Porcentagens de frete:** Priorizadas pelas configurações do programa/agente de compras/unidade de planejamento e, em seguida, pelas configurações do programa.

- **Tempos de entrega:** Priorizados pelas configurações do programa/agente de compras/unidade de planejamento, depois pelas configurações do programa e, por fim, pelas configurações do agente de compras no nível da região.

- **Preços unitários:** Priorizados pelas configurações do programa/agente de compras/unidade de planejamento, depois pelas configurações do agente de compras no nível da região e, finalmente, pelas configurações do programa.

**Etapas para adicionar ou editar informações específicas do programa/agente de compras**

1. Selecione “Gerenciamento de Programas” e depois “Atualizar Unidades de Planejamento”.

2. Selecione o programa para exibir as unidades de planejamento atualmente administradas.

3. Clique com o botão direito na linha da unidade de planejamento para adicionar o preço do agente de compras e clique em “Adicionar Preços do Programa/Agente de Compras” para mostrar uma nova tela.

![P1341#yIS1](/img/media/image116.png)

Figura 70. Acessando a tela Preços do Programa/Agente de Compras

4. <u>OR</u> selecione “Informações do programa/agente de compras” em
no menu à esquerda para ir diretamente para a tela.

5. Selecione o(s) programa(s) e unidade(s) de planejamento para os quais deseja inserir informações.

6. Preencha os campos obrigatórios e quaisquer campos adicionais. Alguns lembretes acima:
    1. Se estiver criando uma combinação de programa e agente de compras, a coluna de preço se tornará não editável se a unidade de planejamento for definida como ‘Todos’, uma vez que o preço já existe em uma tela diferente.

    2. Pelo menos uma dessas colunas deve ter um valor numérico ao adicionar ou editar linhas.

    3. Somente as três primeiras colunas (Programa, Unidade de Planejamento e Agente de Aquisições) são necessárias para adicionar uma linha.

    4. Somente uma linha é permitida por combinação de programa/unidade de planejamento/agente de compras.

![](/img/media/image117.png)

Figura 71. Adicionando informações do programa/agente de compras para uma unidade de planejamento

7. Clique em “Enviar” para salvar as alterações.

8. Clique em Master Data Sync após fazer alterações (aplica-se a qualquer item em Gerenciamento de Programas).

### Unidades de Relatório Alternativas

Uma unidade de relatório alternativa (ARU) é o produto e a unidade em que os dados do país (consumo, inventário e ajustes) são relatados e pode ter a mesma descrição que a unidade de planeamento, unidade de previsão, unidade de aquisição, ou numa descrição de embalagem completamente diferente. A ARU é definida dentro de um determinado país e exige a inserção de um fator de conversão da ARU para a unidade de planejamento à qual está associada (pode ser 1). De todos os mestres de produto, o ARU é o único que os administradores de programa gerenciam, porque são específicos de cada país. **Administradores de aplicativos, domínios e programas** podem adicionar/editar ARU para um país e programa. Unidades de relatório alternativas são úteis quando:

1. > As fontes de dados relatam dados em unidades diferentes (por exemplo, peças versus pacotes)

2. > Existe outro nome comum no país (por exemplo, nome de marca)

**Para ver a lista de todas as unidades de relatório alternativas em um país:**

1. Selecione “Gerenciamento de Programas” e depois “Unidade de Relatório Alternativa”.

2. Selecione o programa no menu suspenso.

**Para adicionar unidades de relatório alternativas a um país:**

1. Selecione “Gerenciamento de Programas” e depois “Unidade de Relatório Alternativa”.

2. Selecione o programa no menu suspenso.

3. Clique no botão “Adicionar linha” no canto inferior direito da tela ou clique com o botão direito em qualquer linha para adicionar outra.

4. Insira os dados na linha recém-criada e clique em “Enviar”.
    1. Nota: o fator de conversão pode ser ‘dividir’ ou ‘multiplicar’.

![](/img/media/image118.png)

Figura 72: ARUs

\*Observe que para cada unidade de planejamento adicionada a um programa, o QAT criará automaticamente uma Unidade de Relatório Alternativa com um fator de conversão de 1:1. O QAT usará a descrição da Unidade de Planejamento como descrição da Unidade de Relatório Alternativa.

### Prazos de entrega padrão

O QAT usa seis status de remessa para acompanhar a progressão de uma remessa, desde o planejamento até o recebimento do produto. Cada uma dessas etapas do ciclo de vida do pedido tem um lead time associado que é usado para estimar quando a próxima ação deve acontecer em cada etapa. Os prazos de entrega são expressos em meses e podem ser meses parciais ou até zero. A ordem de prioridade para configurações de prazos de entrega é a seguinte: As configurações de **Informações do agente de compras/programa** têm a prioridade mais alta, seguidas pelas configurações de **Nível de programa** e, em seguida, configurações de nível de região**.

Figura 73: Status de remessa QAT

Há diferentes lógicas de lead time dependendo se a aquisição está marcada como internacional ou local.

- **Para compras internacionais:**
  - **Administradores do programa** gerenciam prazos de entrega específicos do programa/país (por exemplo, tempo de planejamento, tempos de remessa, tempos de desembaraço aduaneiro, períodos de quarentena, etc.)

  - **Administradores de Realm** gerenciam prazos de entrega específicos para cada agente de compras (mais sobre isso na tabela abaixo).

  - **Também é possível definir configurações específicas de lead time para programas e/ou agentes de compras por unidade de planejamento (PU).**

- **Para compras locais:**
  - Todo o prazo de entrega (“planejado para recebido”) é determinado pelo que é inserido no nível do programa, por unidade de planejamento. Todas as etapas das compras locais são normalmente mais curtas do que as das compras internacionais.

|                            |                                                                                                                                                     |                                                                                                                                                                    |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Prazo de entrega (de – até)** | **Definição** | **Configuração** |
| Planejado para ser enviado | Número de meses desde a identificação da necessidade de aquisição até à colocação de uma encomenda junto de um agente de aquisições | Sempre definido no nível do programa pelos administradores do programa |
| Enviado para aprovado | Número de meses entre a colocação do pedido e a aprovação do pedido. Esse lead time pode ser definido para cada agente de compras.                           | Padrão definido no nível do programa pelos administradores do programa. No entanto, será substituído pela configuração do agente de compras no nível do território, se o agente de compras estiver atribuído a uma remessa. |
| Aprovado para envio | Número de meses entre a aprovação do pedido e o envio do agente/fornecedor de compras. Esse lead time pode ser definido para cada agente de compras. | Padrão definido no nível do programa pelos administradores do programa. No entanto, será substituído pela configuração do agente de compras no nível do território, se o agente de compras estiver atribuído a uma remessa. |
| Enviado para chegar por via aérea | Tempo de trânsito aéreo entre o envio do pedido até a chegada ao porto de entrada - em número de meses.                                                    | Sempre definido no nível do programa pelos administradores do programa |
| Enviado para chegar por via marítima | Tempo de trânsito marítimo entre o envio do pedido por via aérea até a chegada ao porto de entrada - em número de meses.                                          | Sempre definido no nível do programa pelos administradores do programa |
| Enviado para chegar por estrada | Tempo de trânsito rodoviário entre o envio da encomenda por estrada até à chegada ao ponto de entrega solicitado – em número de meses | Sempre definido no nível do programa pelos administradores do programa |
| Chegou ao recebido | Número de meses desde a chegada ao porto de entrada até a recepção no armazém.                                                                  | Sempre definido no nível do programa pelos administradores do programa |

Tabela 8: Prazos de entrega por estágio de embarque – definições

**Pedido prioritário para configurações de prazo de entrega**

A ordem de prioridade para configurações de lead time é a seguinte:

1. **Informações do programa/agente de compras:** Essas configurações têm a prioridade mais alta. Se os prazos de entrega forem definidos neste nível, eles substituirão outras configurações. Eles podem ser atualizados na tela ‘Informações do programa/agente de compras’.

2. **Nível do programa:** Se nenhum prazo de entrega for definido no nível do programa/agente de compras, os padrões do nível do programa serão usados. Eles podem ser atualizados nas telas ‘Atualizar informações do programa’ e ‘Atualizar unidades de planejamento’.

3. **Nível de região:** Os prazos de entrega em nível de região serão aplicados se nenhum prazo de entrega específico for definido no nível do programa.

**Insira/atualize os prazos de entrega padrão no nível do programa:**

1. > Vá para “Gerenciamento de Programas” e clique em “Atualizar Informações do Programa” (veja [Atualizando Informações do Programa](#program-information)).

2. > Role para baixo até a segunda metade da página onde estão todos os campos de lead time.

3. > Insira os prazos de entrega padrão do programa por etapa.

4. > Clique em “Atualizar” para salvar as alterações.

_Consulte [Informações do programa/agente de compras](#programprocurement-agent-specific-information) para obter instruções sobre como adicionar/editar configurações no nível do programa/agente de compras._

**Insira/atualize os prazos de entrega padrão do agente de compras local:**

1. > Vá para “Gerenciamento de Programas” e clique em “Atualizar Unidades de Planejamento” (veja [Atualizando Unidades de Planejamento](#planning-units))

2. > Selecione o programa no menu suspenso no canto superior esquerdo.

3. > Insira o prazo de entrega padrão do programa para compras locais.

4. > Clique em “Enviar” para salvar as alterações.

![P1428#yIS1](/img/media/image119.png)

Figura 74: Inserindo os prazos de entrega do agente de compras local

### ![](/img/media/image120.png)BOrçamentos

Um orçamento representa um montante (estimado ou real) de capital para um determinado período que será gasto na compra de produtos para o programa.

Vá para “Gerenciamento de Programas” e depois “Orçamento” para ver uma lista de todos os orçamentos para seu(s) programa(s).

Um orçamento pode ser vinculado a um programa ou a vários programas. Por exemplo, se o FSP-Lab-A tiver orçamento x, o FSP-Lab-B também poderá vincular seu programa ao orçamento x. Se um programa for desvinculado de um orçamento, o usuário será forçado a desmarcar todas as remessas desse orçamento antes de enviar a versão para o servidor. Qualquer administrador de programa que tenha acesso a um programa pode editar um orçamento associado ao programa; no entanto, ele/ela só poderá adicionar/remover programas aos quais tenha acesso.

Para adicionar ou remover programas de um orçamento, clique no orçamento e selecione ou desmarque no primeiro menu suspenso.

![P1438#yIS1](/img/media/image121.png)

Figura 75: Programa Múltiplo ®

Se um orçamento estiver destacado em vermelho, isso indica que o orçamento ultrapassou a “Data Final” e/ou o “Valor Utilizado” excedeu o “Valor do Orçamento”.

**Adicione um orçamento**

1. Na tela “Orçamento”, vá até o canto superior direito e clique no ícone azul “+”. ![P1444L58#yIS1](/img/media/image122.png)

2. Uma nova tela intitulada “Adicionar Orçamento” aparecerá.

3. Insira os detalhes necessários.

4. Clique no botão “Enviar”.
    1. **\*Observação:** Um Programa não pode ter vários orçamentos com a mesma Fonte de Financiamento e Nome de Exibição do Orçamento. Uma mensagem de erro aparecerá se for esse o caso.\*

**Atualizar um orçamento**

1. Vá para a tela Orçamento.

2. Clique com o botão esquerdo no orçamento que deseja atualizar.

3. Uma nova tela aparecerá intitulada “Atualizar Orçamento

4. Atualizar os detalhes do orçamento selecionado conforme apropriado.

5. Clique em “Enviar” para salvar as alterações.

![P1456#yIS1](/img/media/image123.png)

Figura 76: Tela Orçamento

![P1458#yIS1](/img/media/image124.png)

Figura 77: Atualizar Orçamento

## **Dados do plano de fornecimento transacional**

Existem três requisitos principais de dados ao criar ou atualizar um plano de abastecimento: consumo, estoque e remessas. A seção abaixo definirá cada um dos elementos de dados e como adicionar/atualizar esses elementos no QAT.

1. > **Consumo**: Estoque distribuído pelo programa aos clientes.
    1. > **Consumo real**: A quantidade relatada de um produto distribuído aos clientes em um determinado período de tempo para um programa específico em um nível específico da cadeia de fornecimento ou combinação de níveis.

    2. > **Consumo Previsto**: Quantidade prevista a ser consumida pelos clientes em um determinado período de tempo acordado pelo programa.

2. > **Inventário**: A quantidade disponível de produto utilizável em um nível específico da cadeia de fornecimento ou combinação de níveis, em uma data específica, para um produto específico.
    1. > **Estoque** **contagem**: Uma verificação de quanto estoque um programa possui em um determinado momento em um nível específico da cadeia de suprimentos ou combinação de níveis.

    2. > **Ajustes de estoque**: Modificações positivas ou negativas nas quantidades de estoque utilizáveis ​​para uma data específica, categorizadas por motivo do ajuste, se possível (por exemplo, dano, vencimento, quarentena, transferência para outro parceiro de implementação, etc.). As transferências de reequilíbrio entre locais na mesma cadeia de abastecimento estão excluídas.

3. > **Embarques**: A quantidade de quantidades financiadas ou planejadas que serão enviadas no mês atual ou futuro ou que foram enviadas em um mês anterior ou que foram recebidas. Expresso em remessas individuais, com número de remessa e data prevista de recebimento.

### Dados de consumo

**Adicionar dados de consumo:**

1. Na barra lateral do menu, acesse “Dados do Plano de Fornecimento” e clique em “Dados de Consumo”.

2. Assim que aparecer a tela “Dados de Consumo”, selecione os filtros desejados usando os menus suspensos na parte superior.

3. A tela exibirá todos os dados atuais do período selecionado, unidade(s) de planejamento e outros filtros selecionados na etapa 2.

4. Para adicionar um novo registro de consumo, clique com o botão direito em qualquer célula e selecione “Adicionar novo consumo” OU selecione o azul “+ Adicionar linha” na parte inferior. JAJALC

5. Insira as informações necessárias e clique em “Enviar”.
    1. Qualquer célula esmaecida (por exemplo, Quantidade (PU) indica que é uma célula gerada por QAT e não pode ser inserida/editada manualmente.
        1. Lembre-se de que [Unidade de Relatório Alternativo](#alternate-reporting-units) (ARU) é o produto e a unidade em que os dados do país são relatados. Os usuários do QAT podem definir uma unidade de relatório alternativa e um fator de conversão (multiplicar ou dividir) para a unidade de planejamento.

    2. Qualquer célula destacada em amarelo indica que é um campo obrigatório e ainda não foi inserido pelo usuário.

![](/img/media/image125.png)

Figura 78: Adicionar dados de consumo

**Atualizar dados de consumo:**

1. Na barra lateral do menu, acesse “Dados do Plano de Fornecimento” e clique em “Dados de Consumo”.

2. Assim que aparecer a tela “Dados de Consumo”, selecione os filtros desejados usando os menus suspensos na parte superior.

3. A tela exibirá todos os dados atuais do período do relatório, unidade(s) de planejamento e outros filtros selecionados na etapa 2.

4. Para atualizar os dados de consumo existentes, o usuário deve clicar duas vezes na(s) célula(s). Um usuário pode atualizar quantas células para quantas linhas forem necessárias antes de salvar, desde que seja para os mesmos filtros suspensos selecionados na etapa 2.
    1. **Observação:** Os usuários podem <u>not</u> editar o consumo previsto há mais de nove (9) meses no passado e <u>não editar o consumo real </u> há mais de nove (9) meses no passado. Os dados não editáveis são identificados por linhas esmaecidas.

5. Uma vez salvo um registro de consumo no QAT, ele não poderá ser excluído. Portanto, se um usuário quiser remover esse registro do plano de fornecimento, ele deverá desativá-lo marcando a caixa de seleção azul na coluna da extrema direita ou poderá ser reaproveitado para os dados de um mês diferente.

6. Depois de feitas as atualizações, clique em “Enviar”.

**Adicionar/atualizar detalhes do lote:**

A adição de informações de lote aos registros de consumo só pode ser aplicada ao consumo real.

1. Clique com o botão direito na linha “Consumo Real” e clique em “Mostrar Informações do Lote”.

2. Uma tela pop-up com os detalhes do lote desse registro de consumo real aparecerá.

3. O usuário pode editar o número e/ou quantidade do lote existente clicando duas vezes na célula.

4. O usuário também pode adicionar um novo(s) lote(s) clicando com o botão direito e selecionando “Adicionar Novo Lote” ou clicando no botão “+Adicionar Linha””.

5. A quantidade total dos lotes deve ser igual à quantidade desse registo de consumo real.
    1. Se a quantidade/quantidade do lote for menor que a quantidade de consumo real, o QAT criará um lote, usando FEFO para calcular a diferença.

    2. Se a quantidade do lote/quantidades do lote forem maiores que a quantidade real de consumo, o QAT terá um erro de validação e não permitirá que o usuário envie.

6. Clique em “Enviar”.

![P1507#yIS1](/img/media/image126.png)

Figura 79: Detalhes do lote

### Dados de inventário

**Adicionar dados de inventário/ajuste:**

1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados de Inventário”.

2. Assim que a tela “Dados de inventário” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.
    1. Se o usuário estiver inserindo dados de inventário, selecione “Inventário” no menu suspenso Tipo de inventário. Se o usuário estiver inserindo dados de ajuste, selecione “Ajuste”.

3. A tela exibirá todos os dados atuais do período selecionado, unidade(s) de planejamento e demais filtros selecionados no passo 2.

4. Para adicionar um novo registro de inventário/ajuste, clique com o botão direito em qualquer célula e selecione “Adicionar nova contagem de inventário”/ “Adicionar novos ajustes” OU selecione o azul  
    “+ Adicionar linha” na parte inferior.

5. Insira as informações necessárias.
    1. Qualquer célula esmaecida (por exemplo, Fator de conversão) indica que é uma célula gerada por QAT e não pode ser inserida/editada manualmente.

    2. Qualquer célula destacada em amarelo indica que é um campo obrigatório e ainda não foi inserido pelo usuário.

    3. Se for inserir um ajuste, será necessária uma observação no campo “Notas”. As notas para registros de inventário são opcionais.

6. Clique em “Enviar”.

![P1523#yIS1](/img/media/image127.png)

Figura 80: Adicionar inventário

**Atualizar dados de inventário/ajuste:**

1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados de Inventário”.

2. Assim que a tela “Dados de inventário” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.
    1. Se o usuário estiver atualizando dados de inventário, selecione “Inventário” no menu suspenso Tipo de inventário. Se o usuário estiver atualizando dados de ajuste, selecione “Ajuste”.

3. A tela exibirá todos os dados atuais do período do relatório, unidade(s) de planejamento e outros filtros selecionados na etapa 2.

4. Para atualizar os dados de inventário/ajuste existentes, o usuário deve clicar duas vezes na(s) célula(s). Um usuário pode atualizar quantas células para quantas linhas forem necessárias antes de salvar, desde que seja para os mesmos filtros suspensos selecionados na etapa 2. Um usuário também não pode atualizar dados de inventário de ajuste <u>and</u> ao mesmo tempo sem primeiro salvar.
    1. **Observação:** Os usuários podem <u>not</u> editar ajustes ou registros de inventário há mais de nove (9) meses no passado. Os dados não editáveis ​​são identificados por linhas esmaecidas.

<!-- lista final -->

7. Depois que um registro de inventário for salvo no QAT, ele não poderá ser excluído. Portanto, se um usuário quiser remover esse registro do plano de fornecimento, ele deverá desativá-lo marcando a caixa de seleção azul na coluna da extrema direita ou poderá ser reaproveitado para os dados de um mês diferente.

<!-- lista final -->

5. Depois de feitas as atualizações, clique em “Enviar”.

**Adicionar/atualizar detalhes do lote – ajustes**

(para obter mais informações sobre cálculos de lote QAT, consulte [Anexo 2: Regras de negócios](#annex-2-business-rules) ou Seção 5.E).

1. Clique com o botão direito na linha Ajuste e clique em “Mostrar informações do lote”.

2. Uma tela pop-up com os detalhes do lote desse registro aparecerá

3. O usuário pode editar o número e/ou quantidade do lote existente clicando duas vezes na célula.

4. O usuário também pode adicionar um novo(s) lote(s) clicando com o botão direito e selecionando “Adicionar Novo Lote” ou clicando no botão “+Adicionar Linha”” para selecionar

5. A quantidade total dos lotes deverá ser igual à quantidade daquele registro de ajuste.
    1. Se a quantidade/quantidades do lote forem menores que a quantidade de ajuste, o QAT criará um lote, usando a lógica do melhor cenário para calcular a diferença

2. Se a quantidade do lote/quantidades do lote forem maiores que a quantidade de ajuste, o QAT terá um erro de validação e não permitirá que o usuário envie.

    3. _Observação: não há substituição do usuário para ajustes automáticos, apenas ajustes manuais._

6. Clique em “Enviar”

![](/img/media/image128.png)

![](/img/media/image129.png)

Figura 81: Detalhes do lote

**Adicionar/atualizar detalhes do lote – inventário**

1. Clique com o botão direito na linha Inventário e clique em “Mostrar informações do lote”.

2. Uma tela pop-up com os detalhes do lote desse registro aparecerá na tela de planejamento de fornecimento. Consulte a Seção 5.E para obter detalhes sobre como atualizar.

### Dados de Remessa

**Adicionar dados de remessa:**

1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados da Remessa”.

2. Assim que a tela “Dados da Remessa” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.

3. A tela exibirá todos os dados atuais do período do relatório, unidade(s) de planejamento e outros filtros selecionados na etapa 2.

4. Para adicionar um novo registro de remessa, clique com o botão direito em qualquer célula e selecione “Adicionar nova remessa” OU selecione o azul “+ Adicionar linha” na parte inferior.

5. Insira as informações necessárias.
    1. Qualquer célula esmaecida (por exemplo, Custo Unitário de Planejamento) indica que é uma célula gerada por QAT e não pode ser inserida/editada manualmente.

    2. Qualquer célula destacada em amarelo indica que é um campo obrigatório e ainda não foi inserido pelo usuário.

    3. Certas células não estarão disponíveis para inserção de dados até que outras células tenham sido preenchidas. Por exemplo, “Orçamento” não pode ser selecionado até que o usuário tenha selecionado uma “Fonte de Financiamento”.

    4. “QAT Shipment ID” será exibido em branco ou ‘0’ até que o programa seja carregado.

    5. As remessas não podem ser marcadas como ‘Recebidas’ se a Data de Recebimento for no futuro.

    6. Na tela de dados da remessa, o usuário pode selecionar a moeda desejada em uma lista suspensa clicando na célula apropriada na coluna de moeda. Com base na moeda selecionada, o usuário obterá o preço de catálogo.
        1. Esse preço pode ser alterado durante a entrada/atualização dos dados.

        2. O custo do frete é baseado no modo de envio e no agente de compras, mas também pode ser modificado manualmente.

    7. Se uma linha de remessa estiver em texto vermelho, isso significa que a remessa está identificada como uma “Remessa de Emergência”. O QAT marcará automaticamente a remessa como uma remessa de emergência se a data de recebimento estiver dentro do prazo de entrega predefinido, o que significa que a remessa provavelmente precisará ser agilizada. _Observação: o QAT sinalizará automaticamente a remessa de emergência apenas quando a remessa for criada pela primeira vez, mas o QAT interromperá a sinalização automática após a primeira vez que a linha da remessa for enviada._

    8. Se uma remessa estiver destacada em cinza, significa que a remessa não está incluída no saldo final do plano de fornecimento. As remessas podem ser excluídas alterando o status da remessa para “Cancelado” OU desativando a remessa usando a caixa de seleção azul na extremidade esquerda.

6. Clique em “Enviar”.

**Atualizar dados de remessa:**

1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados da Remessa”.

2. Assim que a tela “Dados da Remessa” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.

3. A tela exibirá todos os dados atuais do período do relatório, unidade(s) de planejamento e outros filtros selecionados na etapa 2.

4. Para atualizar os dados de envio existentes, o usuário deverá clicar duas vezes na(s) célula(s). Um usuário pode atualizar quantas células para quantas linhas forem necessárias antes de salvar, desde que seja para os mesmos filtros suspensos selecionados na etapa 2 (ou seja, você não pode editar remessas de um produto e depois editar remessas de um produto diferente sem primeiro salvar).

5. Quando qualquer um dos seguintes elementos for alterado (quantidade, ARU, modalidade de envio, agente de compras e custo unitário de planejamento), o comportamento do campo custo do frete dependerá do status do checkbox “Custo do frete calculado automaticamente”:
    1. **Verificado:**
        1. O custo do frete será recalculado automaticamente com base nas configurações do programa/unidade de planejamento.

2. Este cálculo utiliza a fórmula: Custo unitário de planejamento \* % Frete.

    2. **Desmarcado:**
        1. A célula de custo do frete aparece com um triângulo vermelho no canto direito recomendando ao usuário atualizar o custo do frete na primeira vez que a caixa de seleção for desmarcada.

        2. Para facilitar a entrada manual, o usuário pode inserir uma fórmula diretamente na célula digitando ‘=’ primeiro. A fórmula desaparecerá ao salvar, mas o valor resultante permanecerá. O usuário também pode inserir um número diretamente.

6. Ao contrário dos dados de consumo, um usuário pode excluir um registro de remessa mesmo depois de ter sido salvo no programa, embora a remessa deva estar no status ‘Planejado’. Para fazer isso, clique com o botão direito na remessa desejada e selecione ‘Excluir linha’.

7. Depois de feitas as atualizações, clique em “Enviar”.

**Adicionar/atualizar detalhes do lote**

A adição de informações de lote aos registros de remessa pode ser aplicada a remessas em qualquer status diferente de “remessas sugeridas”. Assim que uma remessa for criada, o QAT gerará automaticamente um lote. O usuário tem a capacidade de editar esse lote e/ou adicionar novos lotes a essa remessa.

1. Clique com o botão direito na linha da remessa e clique em “Mostrar informações do lote”.

2. Uma tela pop-up com os detalhes do lote dessa remessa será exibida.

3. O usuário pode editar o número do lote existente, prazo de validade e quantidade clicando duas vezes na célula.

4. O usuário também pode adicionar um novo(s) lote(s) clicando com o botão direito e selecionando “Adicionar Novo Lote” ou clicando no botão “+Adicionar Linha””.

5. A quantidade total dos lotes deverá ser igual à quantidade dessa remessa. Na parte inferior da tela pop-up será exibida a quantidade total da remessa, bem como a quantidade total atribuída ao(s) lote(s). Isso permite que o usuário saiba se a quantidade do lote está acima, abaixo ou igual à quantidade da remessa.

6. Clique em “Salvar informações do lote”.

7. **Observação:** Quando o status de uma remessa é alterado para “Recebido”, os detalhes do lote aparecerão automaticamente para que os usuários editem ou confirmem as informações do lote atual.

A coluna à direita denominada “Gerado automaticamente” permitirá ao usuário saber se aquele lote foi gerado automaticamente pelo QAT ou inserido manualmente pelo usuário. Se algum dos 3 campos do lote (número do lote, data de validade, quantidade) for alterado, a caixa de seleção do campo gerado automaticamente ficará desmarcada. Se a data de validade e/ou quantidade forem alteradas, mas não o número do lote, o número do lote muda automaticamente para trocar ‘QAT’ por ‘MAN’ e a célula é destacada com um triângulo vermelho indicando ao usuário que deve ser alterado. Se o usuário não souber o número real do lote, o QAT permitirá que o lote ainda seja salvo sem alterar o número.

![P1594#yIS1](/img/media/image130.png)

Figura 82: Detalhes do lote de remessa

**Calculadora de pedidos estratégicos:**

Para combinações específicas de unidade de planejamento e agente de compras, uma **calculadora estratégica de pedidos** pode aparecer para o usuário ao inserir a quantidade de uma remessa. O objetivo da calculadora é aconselhar os usuários sobre a quantidade de pedido apropriada para uma remessa com base em um ou mais dos seguintes elementos: a) Quantidade Mínima de Pedido (MOQ); b) Carga de contentores; c) palete Euro 1; d) Palete Euro 2. A calculadora ajudará os usuários a planejar remessas para maximizar a eficiência na logística de entrega (por exemplo, utilizando um contêiner cheio em vez de 20% do contêiner). Os produtos estratégicos são definidos no nível da região por um aplicativo ou administrador da região. Para obter mais informações sobre como definir produtos estratégicos, consulte a [seção sobre adição de unidades de planejamento para agentes de compras](#programprocurement-agent-specific-information).

1. Para visualizar a Calculadora de Quantidades de um produto estratégico, clique duas vezes na célula da coluna “Quantidade do Pedido” e a tela “Calculadora de Quantidades” aparecerá. _Observação: Se o produto for não estratégico, o usuário poderá modificar diretamente a quantidade do pedido na célula após clicar duas vezes e não haverá pop-up._

2. A quantidade original da remessa aparecerá na célula “Quantidade do pedido manual”.

3. Se você não quiser usar a calculadora estratégica e quiser usar a “Quantidade do pedido manual” original, selecione “Nenhum” no menu suspenso para “Embalagem baseada em” e clique em “Salvar quantidade de remessa”.

4. Se quiser usar a calculadora estratégica:
    1. Selecione como deseja usar a calculadora escolhendo uma opção no menu suspenso “Embalagem baseada em” e também no menu suspenso “Opção de arredondamento”.

    2. Dependendo de suas seleções na etapa 4a, a quantidade na célula “Quantidade final do pedido” mostrará a quantidade de remessa calculada do QAT. A tabela inferior resume as principais informações sobre os diferentes modos de embalagem.

    3. Após confirmar que você está satisfeito com a Quantidade Final do Pedido, clique em “Salvar Quantidade de Remessa”.

![P1608#yIS1](/img/media/image131.png)

Figura 83: Calculadora de Pedido Estratégico

**Ver datas de envio:**

As estimativas para cada status podem ser visualizadas e as datas reais podem ser inseridas manualmente na tela Remessa. Isso permitirá que o usuário identifique se a remessa está dentro do cronograma ou atrasada/adiante com base nos prazos de entrega. O usuário também pode usar esta tela para comparar as datas reais com as datas estimadas dessa remessa e usar essas informações para atualizar prazos de entrega que podem não ser precisos.

1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados da Remessa”.

2. Assim que a tela “Dados da Remessa” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.

3. A tela exibirá todos os dados atuais do período do relatório, unidade de planejamento e demais filtros selecionados na etapa 2.

4. Clique com o botão direito na remessa cujas datas deseja visualizar e selecione “Mostrar datas de remessa”. Uma tela pop-up chamada “Datas de envio” aparecerá.

5. A linha denominada “Estimado” da tela “Datas de Remessa” mostrará uma data para cada status da remessa com base nos prazos de entrega inseridos no programa, bem como na data estimada de recebimento. Somente a data estimada de recebimento pode ser editada pelo usuário.
    1. Se um usuário alterar a data estimada de recebimento, as outras datas estimadas também serão alteradas com base nos prazos de entrega do programa.

6. A linha denominada “Real” permitirá ao usuário inserir a data real em que cada status ocorreu para aquela remessa. Se uma célula estiver esmaecida nesta linha, significa que a remessa ainda não atingiu esse status e uma data não pode ser inserida.

7. Caso o usuário faça alguma alteração na data estimada de recebimento ou em uma das datas reais, clique em “Salvar datas de envio”.

![P1623#yIS1](/img/media/image132.png)

Figura 84: Mostrar datas de envio

### Vinculação de remessa ERP

A funcionalidade de vinculação de remessas do ERP permite que os planejadores de fornecimento vinculem remessas selecionadas (atualmente GHSC-PSM) ao sistema ERP do agente de compras correspondente (atualmente ARTMIS). Uma vez vinculado um envio no plano de abastecimento, todos os detalhes do pedido (status, data de recebimento, custos, quantidade, lotes, etc.) corresponderão ao que está no ERP e o usuário não precisará mais atualizar manualmente o envio. Caso a embalagem do produto no ERP não corresponda à embalagem da unidade de planejamento no QAT, o usuário terá a possibilidade de corrigir isso através de um atributo de fator de conversão no QAT. O usuário poderá desvincular a remessa se desejar rastrear manualmente. Os detalhes da remessa para essas remessas vinculadas aparecerão em todo o QAT (Entrada de Dados da Remessa, Planejamento de Fornecimento, Relatórios, etc.). O usuário será alertado se houver alguma alteração importante feita no ERP, como cancelamento de um pedido ou alteração do SKU de um produto. Os usuários só poderão marcar remessas que já passaram pela aprovação da fonte de financiamento no ERP.

Ao gerenciar a vinculação de remessas ERP, os usuários selecionarão as opções de menu ‘Vincular remessas ERP’ ou ‘Notificações de remessas ERP’. Dentro da tela ‘Link ERP Shipments’ existem 3 subtelas:

1. > **Não vinculado (QAT) –** Use esta tela para vincular remessas QAT a pedidos ERP pela primeira vez. Os usuários verão uma lista de remessas QAT e, quando clicarem em uma única remessa QAT, poderão escolher a quais pedidos de ERP a remessa QAT deve ser vinculada.

2. > **Vinculados –** Os usuários verão uma lista de remessas atualmente vinculadas e poderão atualizar o fator de conversão ou notas de remessas já vinculadas, adicionar linhas ERP a remessas QAT já vinculadas ou desvincular linhas ERP da remessa QAT.

3. > **Não vinculado (ERP) –** Use esta tela para vincular pedidos de ERP ao QAT pela primeira vez. Os usuários verão uma lista de remessas de ERP e, quando clicarem em uma única remessa de ERP, poderão escolher a qual remessa de QAT a remessa de ERP deve ser vinculada. Para quaisquer pedidos que estejam no ERP e que ainda não estejam no QAT, você poderá criar uma nova remessa de QAT nesta tela.

![P1634#yIS1](/img/media/image133.png)

Figura 85: Telas de vinculação do ERP

**Regras para vinculação de remessas ERP**

Abaixo estão as regras para vinculação de remessas ERP. O botão de detalhes no canto superior direito da tela ‘Vincular remessas ERP’ resumirá essas regras.

1. A vinculação do ERP só é editável para versões locais baixadas. As telas de vinculação do ERP mostrarão as versões do servidor, mas esses dados são somente leitura. Para salvar as alterações de vinculação, o usuário deve fazer upload dessa versão.

2. Atualmente, os envios QAT só podem ser vinculados se o agente de compras for GHSC-PSM.

3. Os envios QAT não poderão ser vinculados se estiverem no status planejado, cancelado ou sugerido.

4. Remessas QAT inativas não podem ser vinculadas.

5. Remessas QAT com status ‘recebido’ só podem ser vinculadas se a data de recebimento estiver dentro dos últimos 6 meses.

6. Os pedidos de ERP só podem ser vinculados se já tiverem passado do status de aprovação da fonte de financiamento (por exemplo, aprovados pela USAID).

7. Os pedidos ERP com status ‘entregue’ só poderão ser vinculados se a data de entrega for nos últimos 6 meses.

8. A data de recebimento do ERP usa a lógica: 1) Data de entrega real 2) Data de entrega estimada 3) Data de entrega acordada 4) Data de entrega solicitada. Portanto, se \#1 não estiver disponível, o QAT usará \#2. Se \#2 não estiver disponível, o QAT usará \#3 e se \#3 não estiver disponível, o QAT usará \#4.

**Não vinculado (QAT)**

Esta tela é usada pelos planejadores de fornecimento para vincular remessas QAT a pedidos ERP. Abaixo estão as etapas sobre como vincular uma remessa QAT a um ou vários pedidos ERP:

1. Selecione o botão de opção na parte superior denominado ‘Not Linked (QAT)’.

2. Selecione o programa e a(s) unidade(s) de planejamento das quais deseja escolher a remessa QAT. Uma vez selecionado, uma lista de remessas QAT aparecerá. A vinculação do ERP só pode ser feita em versões locais, porém, os envios vinculados podem ser visualizados em versões de servidor.

3. Clique com o botão esquerdo em uma única remessa QAT. Uma janela pop-up aparecerá chamada ‘Pesquisar remessas vinculadas ao ERP’. Esta janela permitirá ao usuário escolher a quais pedidos ERP o envio QAT deverá ser vinculado.
    1. A metade superior da janela mostrará os detalhes da remessa do QAT. Esta informação não é editável.

    2. A metade central da janela mostrará 2 menus suspensos que permitirão ao usuário filtrar a lista de pedidos ERP aos quais vincular a remessa QAT.

    3. A metade inferior da janela listará todas as remessas de ERP com base nos menus suspensos na seção intermediária. É aqui que o usuário vinculará 1 ou mais pedidos, bem como fornecerá a Unidade Alternativa de Relatório (ARU) e a nota (opcional). A ARU preencherá automaticamente o fator de conversão.
        1. **Para alterar/adicionar um fator de conversão, o usuário poderá fazê-lo na tela ‘Unidade Reporte Alternativa’.**

4. Na seção intermediária, o usuário pode filtrar as remessas do ERP selecionando a unidade de planejamento do ERP, o RO/Nº do pedido ou ambos. O QAT preencherá previamente o menu suspenso RO/Nº do pedido assim que esta janela aparecer, selecionando o Nº do pedido do agente de processamento na remessa do QAT. Se este campo estiver em branco, o QAT exibirá uma mensagem abaixo de ambos os menus suspensos em vermelho que exibe “Preencha a unidade de planejamento ERP ou RO/Nº do pedido para preencher os dados”.

5. Para vincular uma remessa de ERP, o usuário marcará a caixa na coluna mais à esquerda que diz ‘Link?’. Depois que o usuário fizer isso, ele será solicitado a inserir a ARU.
    1. Se um usuário quiser vincular várias linhas ERP à mesma remessa QAT, ele deverá marcar a caixa para múltiplas linhas.

    2. Se um usuário quiser vincular várias remessas QAT a 1 ou várias linhas ERP, ele deverá marcar a caixa na parte superior que diz ‘Mostrar todas as remessas para \_\_\_\_\_\_’ e, em seguida, selecionar cada uma das remessas QAT para vincular.

6. O fator de conversão é útil quando a unidade de planejamento QAT e o produto ERP são diferentes (pacote de 10 barras de chocolate versus pacote de 100 barras de chocolate). O fator de conversão é usado para calcular qual é a quantidade de remessa QAT convertida. A quantidade de remessa QAT convertida é a quantidade do pedido que será usada em seu plano de fornecimento para a remessa vinculada.

![P1665#yIS1](/img/media/image134.png)

7. Se houver uma nota na remessa do QAT, ela será transferida para cada um dos pedidos do ERP quando você fizer o link. Nesta janela pop-up, o usuário pode editar ou excluir essa nota.

8. A parte inferior da janela mostrará qual é o pedido de quantidade QAT original e qual será a nova quantidade convertida de QAT.

![P1668#yIS1](/img/media/image135.png)

Figura 86: Quantidade convertida de ERP

9. Por último, clique em ‘Link Shipment’.

**Não Vinculado (ERP)**

Esta tela é usada pelos planejadores de fornecimento para vincular pedidos de ERP ao QAT pela primeira vez. Para quaisquer pedidos que estejam no ERP e que ainda não estejam no QAT, você poderá criar uma nova remessa de QAT nesta tela. Abaixo estão as etapas sobre como vincular um pedido ERP a uma remessa QAT:

1. Selecione o botão de opção na parte superior denominado ‘Não vinculado (ERP)’.

2. Selecione o país E a categoria da unidade de planejamento ou a unidade de planejamento da qual deseja escolher o pedido ERP. Uma vez selecionado, uma lista de pedidos ERP aparecerá.
    1. **Observação: esta lista mostra dados de ERP, enquanto a tela Not Linked (QAT) mostra dados de QAT.**

3. Clique com o botão esquerdo em um único pedido ERP. Uma janela pop-up aparecerá chamada ‘Pesquisar remessas vinculadas ao ERP’. Esta janela permitirá ao usuário vincular 1 ou mais pedidos ERP a uma remessa QAT pré-existente ou nova.
    1. A metade superior da janela mostrará os detalhes da remessa do QAT. Esta área permitirá ao usuário selecionar uma remessa QAT pré-existente ou criar uma nova. As etapas 4 e 5 detalharão como fazer isso.

    2. A metade central da janela mostrará 2 menus suspensos que permitirão filtrar a lista de pedidos ERP aos quais vincular a remessa QAT.

    3. A metade inferior da janela listará todas as remessas de ERP com base nos menus suspensos na seção intermediária. É aqui que o usuário vinculará 1 ou mais pedidos, além de fornecer o fator de conversão e a nota. Esta seção é pré-preenchida com base no número do pedido ERP selecionado na tela anterior.

4. Para selecionar uma remessa QAT existente, clique no botão ‘Selecionar remessa existente’ na seção superior.
    1. Selecione o programa no qual deseja pesquisar a(s) remessa(s) QAT. A lista suspensa será filtrada para mostrar apenas o país selecionado na etapa 2.

    2. Em seguida, pesquise a lista de remessas QAT por unidade de planejamento (padrão) ou por ID de remessa QAT. Se quiser pesquisar por ID de remessa QAT, você precisará marcar a caixa rotulada ‘Filtrar por ID de remessa QAT?’. Para voltar à busca por unidade de planejamento, desmarque a caixa.

    3. Depois de encontrar a remessa QAT desejada, selecione o botão na coluna mais à esquerda denominado ‘Selecionar ID da remessa’.

5. Para criar uma nova remessa QAT, clique no botão ‘Criar Nova Remessa’ na seção superior.
    1. O usuário precisará preencher 4 menus suspensos (Programa, Unidade de Planejamento, Fonte de Financiamento, Orçamento) para fornecer as informações necessárias para a criação da remessa. O restante dos detalhes da remessa virá do pedido ERP selecionado na etapa 7.
        1. O menu suspenso do programa é filtrado para mostrar apenas o país selecionado na etapa 2.

        2. A lista suspensa de orçamento é filtrada com base na seleção na lista suspensa de fontes de financiamento.

3. Caso não haja orçamento aplicável, o usuário precisará sair da tela e adicionar um orçamento nos dados cadastrais. Se o usuário adicionar um orçamento, ele deverá sincronizar os dados mestres antes de ver essa opção aparecer nesta tela.

6. Na seção intermediária, o QAT preencherá previamente o menu suspenso RO/Nº do pedido assim que esta janela aparecer com base no pedido de ERP selecionado feito na etapa 3.

7. Para vincular uma remessa de ERP, o usuário marcará a caixa na coluna mais à esquerda que diz ‘Link?’. Depois que o usuário fizer isso, ele será solicitado a inserir a ARU.
    1. Se um usuário quiser vincular várias linhas ERP à mesma remessa QAT, ele deverá marcar a caixa para múltiplas linhas.

    2. Se um usuário quiser vincular várias remessas QAT a 1 ou várias linhas ERP, ele deverá marcar a caixa na parte superior que diz ‘Mostrar todas as remessas para \_\_\_\_\_\_’ e, em seguida, selecionar cada uma das remessas QAT para vincular.

8. O fator de conversão é útil quando a unidade de planejamento QAT e o produto ERP são diferentes (pacote de 10 barras de chocolate versus pacote de 100 barras de chocolate). O fator de conversão é usado para calcular qual é a quantidade de remessa QAT convertida. A quantidade de remessa QAT convertida é a quantidade do pedido que será usada em seu plano de fornecimento para a remessa vinculada.

![P1699#yIS1](/img/media/image134.png)

9. O usuário pode adicionar uma nota à remessa editando a coluna da extrema direita chamada ‘Notas’.

10. A parte inferior da janela mostrará qual é o pedido de quantidade QAT original e qual será a nova quantidade QAT convertida.

11. Por último, clique em ‘Link Shipment’.

![P1703#yIS1](/img/media/image136.png)

Figura 87: Criar nova remessa

**Tela vinculada**

Esta tela é usada pelos planejadores de fornecimento para visualizar a lista de remessas de ERP atualmente vinculadas e atualizar a Unidade de Relatório Alternativo (ARU) ou notas, adicionar pedidos de ERP a remessas de QAT já vinculadas ou desvincular linhas de ERP da remessa de QAT.

1. Selecione o botão de opção na parte superior denominado ‘Linked’.

2. Selecione o programa e a(s) unidade(s) de planejamento para os quais deseja ver a lista de remessas vinculadas. Uma vez selecionado, uma lista de remessas aparecerá. As informações nessas remessas estão sendo extraídas do ERP.

3. Para fazer qualquer uma das atualizações listadas no passo 2, clique com o botão esquerdo em uma única remessa.
    1. Para editar ARU e/ou notas, clique duas vezes na célula e digite ou selecione no menu suspenso.

    2. Para desvincular um pedido ERP, desmarque a caixa na coluna ‘Vincular?’.

    3. Para adicionar um pedido ERP, marque a caixa desse pedido na coluna ‘Link?’. O usuário pode limpar os menus suspensos de pesquisa na seção intermediária para procurar uma unidade de planejamento ou número de pedido diferente e os pedidos originalmente vinculados permanecerão vinculados.

4. Os usuários também poderão visualizar detalhes do histórico de pedidos do ERP. Para fazer isso, na tela original ‘Linked’, clique com o botão direito em uma única remessa e clique em ‘View ERP Order History’. Uma janela pop-up aparecerá chamada ‘Histórico de pedidos ERP’. Esta tela mostrará todos os detalhes que mudaram ao longo do tempo no pedido ERP. Cada linha indica que uma ou mais colunas foram alteradas. A coluna mais à direita, denominada ‘Dados recebidos em’, indica quando o registro foi recebido pelo QAT.
    1. Para visualizar detalhes do lote, clique no ícone ![](/img/media/image137.png).

    2. **Observação:** Determinados campos do ERP não são capturados nesta tela, portanto pode haver alguns casos em que 1 ou mais linhas tenham os mesmos detalhes. Isso significa que uma coluna no backend foi alterada.

> **Depois de vincular remessas QAT a pedidos ERP, os dados serão refletidos em seu plano de fornecimento sem a necessidade de sincronização de dados mestres.** Os dados ERP recém-vinculados serão refletidos nos relatórios locais, na tela de planejamento de fornecimento, bem como na tela de entrada de dados de remessa. O usuário **precisa** fazer upload de uma versão para o servidor para que outros usuários vejam essas alterações.
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

    2. > “Consumo Previsto Quantimed Convertido” é o valor que será puxado para o QAT do produto associado e mês-ano após aplicação do percentual de importação e fator de conversão.

    3. > “Consumo previsto atual do QAT” é o valor do consumo previsto atualmente no QAT para aquela unidade de planejamento e mês-ano. Depois de importar os dados do Quantimed, esse valor será sobrescrito pelo valor do “Consumo Previsto Quantimed Convertido”.

2. > Esta tela mostrará todos os dados que serão importados para o QAT. Se você não quiser importar determinados registros, clique na caixa de seleção na coluna ‘Importar?’ na extrema direita. Isso impedirá que o QAT importe os dados da Quantimed e manterá o consumo atual previsto do QAT para aquela unidade de planejamento e mês-ano.

3. > Clique em “Enviar” para importar os dados.

![P1816#yIS1](/img/media/image150.png)

Figura 96: Tela de confirmação de importação de dados

### Importação de previsão QAT

**<u>Purpose</u>:** Permite que os usuários importem previsões criadas pelo QAT para programas de plano de fornecimento. As previsões só estarão disponíveis para importação se 1) forem carregadas como uma versão final e 2) houver uma previsão selecionada para cada unidade de planejamento.

**<u>Usando esta tela</u>**:

**(Etapa 1)**

- Selecione de qual programa de previsão importar (apenas as previsões finais estão disponíveis)

- Selecione para qual programa de plano de fornecimento importar. Somente versões de planos de fornecimento locais podem ser usadas. Para baixar um programa, vá para a tela ‘Baixar/Excluir Programa’ em ‘Gerenciamento de Programas’.
  - Selecione o intervalo de datas dos dados de previsão a serem importados, que deve estar dentro do período de previsão.

- Na tabela que aparece, selecione e mapeie as unidades de planejamento.
  - Para cada Unidade de Planejamento de Previsão, o QAT exige uma Unidade de Planejamento do Plano de Fornecimento correspondente e um fator de conversão. O QAT mapeia automaticamente as correspondências exatas da unidade de planejamento, mas os usuários podem substituir o mapeamento da unidade de planejamento e o fator de conversão.

  - Nem todas as unidades de planejamento de previsão precisam ser importadas; no entanto, todas as unidades de planejamento de previsão devem ter uma seleção na tabela de mapeamento. Você pode selecionar manualmente “Não importar” para cada PUs de previsão que não deseja importar ou clicar na caixa de seleção “Não importar todas as PUs não mapeadas”, o que permitirá uma seleção em massa de Não importar para todas as PUs não mapeadas.

  - > Se para um PU Nenhuma previsão foi selecionada, aparecerá acinzentado com “static.importintoSP.forecastBlank”

  - Se uma unidade de planejamento não aparecer no menu suspenso, você precisará adicioná-la ao programa do plano de fornecimento na tela ‘Atualizar Unidades de Planejamento’.

![P1833#yIS1](/img/media/image151.png)

Figura 97: Tela de importação de previsão

**(Etapa 2)**

Para cada região de previsão, insira quanto (%) da previsão daquela região você importará e para qual região o consumo previsto será importado. Abaixo estão alguns casos de uso:

- Previsão nacional para plano nacional de abastecimento

| **Região(ões) de previsão** | **% da Previsão** | **Região do Plano de Fornecimento** |
| ----------------------- | ----------------- | ---------------------- |
| Nacional | 100 | Nacional |

- Previsão multirregional para plano de fornecimento multirregional

| **Região(ões) de previsão** | **% da Previsão** | **Região do Plano de Fornecimento** |
| ----------------------- | ----------------- | ---------------------- |
| Norte | 100 | Norte |
| Leste | 100 | Leste |
| Sul | 100 | Sul |

- Previsão multirregional para plano de abastecimento nacional –

| **Região(ões) de previsão** | **% da Previsão** | **Região do Plano de Fornecimento** |
| ----------------------- | ----------------- | ---------------------- |
| Norte | 100 | Nacional |
| Leste | 100 | Nacional |
| Sul | 100 | Nacional |

- Previsão nacional para plano de abastecimento multirregional – observe que o processo de importação precisa ser repetido para cada região do plano de abastecimento.

| **Região(ões) de previsão** | **% da Previsão** | **Região do Plano de Fornecimento** |
| ----------------------- | ----------------- | ---------------------- |
| Nacional | 20 | Norte |

| **Região(ões) de previsão** | **% da Previsão** | **Região do Plano de Fornecimento** |
| ----------------------- | ----------------- | ---------------------- |
| Nacional | 45 | Sul |

| **Região(ões) de previsão** | **% da Previsão** | **Região do Plano de Fornecimento** |
| ----------------------- | ----------------- | ---------------------- |
| Nacional | 35 | Leste |

**(Etapa 3)**

O QAT listará cada registro de previsão a ser importado (uma linha para cada combinação de unidade de planejamento, região e mês).

- O QAT calcula o Consumo Previsto a importar da seguinte forma:

<table>
  <tbody>
    <tr class="odd">
      <td>
        <em>Consumo previsto (Módulo de previsão)</em>
      </td>
      <td>
        <em>x</em>
      </td>
      <td>
        <em>% da previsão</em>
      </td>
      <td>
        <em>x</em>
      </td>
      <td>
        <p>
          <em>Fator de conversão</em>
        </p>
        <p>
          <em>(Previsão para Plano de Fornecimento)</em>
        </p>
      </td>
      <td>
        <em>=</em>
      </td>
      <td>
        <em>Rounded* Consumo previsto convertido</em>
      </td>
    </tr>
  </tbody>
</table>

> Por exemplo:

- Uma previsão nacional que será dividida em duas regiões de 50% cada

- A Unidade de Planejamento de Previsão está em pacotes de 3, e a Unidade de Planejamento do Plano de Fornecimento está em pacotes de 1 (fator de conversão = 3)

- A previsão nacional para o Mês N foi de 100 (pacotes de 3)

- Previsão de 100 x 50% x 3 = 150,00 arredondados (pacotes de 1) serão importados para cada região para o Mês N

<!-- lista final -->

- **\*Método de Arredondamento:** Como o Planejamento de Fornecimento do QAT requer números inteiros sem decimais, o QAT converte o consumo previsto em números inteiros arredondando para baixo e somando os “resíduos” ao longo do tempo. A cada mês, o QAT adiciona o total de resíduos do mês anterior e a previsão deste mês, antes de arredondar para baixo, e qualquer resíduo não arredondado para baixo é adicionado a um total residual corrente, denominado Total Cumulativo. Desta forma, as quantidades não são perdidas no processo de arredondamento.
  -> Fórmulas:
    - **Total acumulado para o mês N** = (Residual para o mês N - 1) + Previsão convertida para o mês N

    - **Residual do Mês N** = Quanto foi perdido no arredondamento = (Total Acumulado do Mês N) – (Previsão Convertida Arredondada para o Mês N)

    - **Previsão convertida arredondada para o mês N** = Total acumulado para o mês N, arredondado para o número inteiro mais próximo

- > Por exemplo, uma previsão nacional está projetada para consumir 0,25 pacotes da Unidade de Planejamento de Previsão por mês, durante 12 meses. A Unidade de Planejamento de Previsão e a Unidade de Planejamento do Plano de Fornecimento são iguais (fator de conversão = 1)
    - Em janeiro o Consumo Convertido é 0,25, e por ser o primeiro mês, 0,25 também é o Total Acumulado de Janeiro. 0,25 é arredondado para um número inteiro igual a 0, e o número arredondado de 0 é importado para o módulo de planejamento de fornecimento. O resíduo de janeiro do arredondamento é 0,25 – 0 = 0,25.

    - Em Fevereiro o Consumo Convertido é de 0,25, somado ao Residual de Janeiro de 0,25 perfaz o Total Acumulado de Fevereiro 0,25 + 0,25 = 0,5. Em seguida, 0,5 é arredondado para um número inteiro 0, que é importado para o módulo de planejamento de fornecimento. O resíduo de fevereiro do arredondamento é 0,5 – 0 = 0,5.

    - Em março o Consumo Convertido é de 0,25, somado ao Residual de Fevereiro de 0,5 perfaz o Total Acumulado de Março 0,25 + 0,5 = 0,75. Em seguida, 0,75 é arredondado para um número inteiro 0, que é importado para o módulo de planejamento de fornecimento. O resíduo de março do arredondamento é 0,75 – 0 = 0,75.

    - Em abril o Consumo Convertido é de 0,25, somado ao Residual de Março de 0,75 perfaz o Total Acumulado de Abril 0,25 + 0,75 = 1,00. Em seguida, 1,00 é arredondado para um número inteiro de 1,00, que é importado para o módulo de planejamento de fornecimento. O resíduo de abril do arredondamento é 1,00 – 1,00 = 0.

    - A partir de maio o ciclo se repete.

<table>
  <thead>
    <tr class="header">
      <th></th>
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
        <p>Previsão convertida</p>
        <p>
          <em>(após a aplicação do fator de conversão)</em>
        </p>
      </td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
    </tr>
    <tr class="even">
      <td>
        <em>CTotal cumulativo</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>1</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>1</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>1</em>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <em>Residual</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>0</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>0</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>0</em>
      </td>
    </tr>
    <tr class="even">
      <td>
        <p>Previsão Convertida Arredondada</p>
        <p>
          <em>(Para ser importado para o Módulo de Planejamento de Fornecimento)</em>
        </p>
      </td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

- Caso exista um consumo previsto no plano de abastecimento, a célula ‘Consumo Atual Previsto’ ficará destacada em amarelo.

- Se existir um consumo previsto no plano de abastecimento e os dados de consumo previsto que o utilizador está a tentar importar forem anteriores a 4 meses, a célula ‘Consumo Previsto Atual’ ficará destacada a cinzento e NÃO será importada.

- Utilize a opção “Importar?” coluna para desmarcar quaisquer previsões que você NÃO deseja importar para o plano de fornecimento. Se marcada, o Consumo Previsto Convertido substituirá a previsão do Plano de Fornecimento. Se desmarcada, a previsão atual do Plano de Fornecimento permanecerá.

![P2015#yIS1](/img/media/image152.png)

Figura 98:Tela de importação de previsão QAT