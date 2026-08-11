---
id: supply-planning-module-program-data
title: "4. Supply Planning Module: Program Data"
sidebar_label: "   4. Supply Plan Program Data"
sidebar_position: 5
---
# Seção 4. Módulo de Planejamento de Fornecimento: Dados do Programa

Conforme definido anteriormente em [Conceitos e termos importantes de QAT](./04-overview.md#e-important-qat-concepts-and-terms), um programa em QAT é definido por um país, uma ou mais áreas técnicas, uma região (geralmente, nível nacional, mas pode ser subnacional) e uma organização (geralmente MS). 

Existem duas grandes categorias de dados do programa: dados de segundo plano (editáveis ​​pelos administradores do programa) e dados transacionais (os “3 grandes” – consumo, estoque, remessas – que são editáveis ​​pelos administradores e usuários do programa).

<table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', margin: '20px 0' }}>
  <thead>
    <tr>
      <th style={{ border: 'none', backgroundColor: 'transparent', width: '20%' }}></th>
      <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold', width: '25%', backgroundColor: '#eaeaea' }}>Data Category</th>
      <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold', width: '55%', backgroundColor: '#eaeaea' }}>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan="3" style={{ border: '1px solid #ccc', padding: '10px', verticalAlign: 'middle', textAlign: 'center', backgroundColor: '#eaeaea', fontWeight: 'normal', color: '#000' }}>
        Background Data
      </td>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Program Info</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Program Manager, Freight %, Lead Times</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Product Info</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Planning units – min, reorder interval, alternate reporting units</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Budget</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Funding source, amounts, beginning and ending dates, etc.</td>
    </tr>
    <tr>
      <td rowSpan="3" style={{ border: '1px solid #ccc', padding: '10px', verticalAlign: 'middle', textAlign: 'center', backgroundColor: '#eaeaea', fontWeight: 'normal', color: '#000' }}>
        Transactional Data<br/>(“Big 3”)<br/>for each product
      </td>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Consumption</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>
        Forecasted consumption<br/>
        And actual consumption, as it becomes available
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Stock</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Inventory counts & Adjustments</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Shipments</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>
        Quantities, receive date, status, procurement agent, funder & associated budget<br/>
        (if available) batch #s & expiry dates
      </td>
    </tr>
  </tbody>
</table>

*Tabela 7: Dados em nível de programa*

## A. Dados de segundo plano

Cada programa dentro do domínio Saúde Global é governado pelos mesmos dados mestre padronizados, como catálogo de produtos, agentes de compras, fontes de financiamento, fontes de dados, etc. No entanto, os administradores do programa podem selecionar um subconjunto dos dados mestre do domínio para usar em seu programa e fornecer parâmetros adicionais 

**Notas:** 
- Todos os dados de segundo plano devem ser atualizados enquanto o usuário estiver online. É recomendado que os usuários cliquem em “sincronização de dados mestres” após fazer qualquer atualização de dados em segundo plano para que sejam refletidos em toda a ferramenta.
- Para obter mais informações sobre funções de usuário, consulte [Anexo 3: Matriz de funções de usuário](./15-annex-3-user-role-matrix.md)). 

###A1. Configurações do programa

Os gerentes de programa no QAT podem definir seus parâmetros gerais de programa selecionando em uma lista suspensa que contém dados mestre em nível de região para cada campo. Esses parâmetros gerais para o módulo de planejamento de fornecimento incluem nome do programa, gerenciador de programa, porcentagens de frete padrão para frete aéreo, marítimo e rodoviário, prazos de entrega por status de remessa e notas. Os parâmetros gerais do módulo de previsão incluem nome do programa, gerenciador do programa e notas. **Usuários do programa** poderão listar/visualizar todos os programas aos quais têm acesso, enquanto apenas **Administradores do programa** poderão atualizar qualquer um dos parâmetros gerais do programa.

Atualizar informações do programa:
1. Clique em "Gerenciamento de programas" e selecione "Atualizar informações do programa"
2. Clique no programa que precisa ser atualizado<br />
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>Program Admins can add/remove procurement agents and funding sources that already exist<br/>in QAT to their program. This will in turn, add/remove the procurement agents to the<br/>dropdown fields in the [Shipment Data entry](#b3-shipment-data) screens. If a user would like to add a<br/>procurement agent to their program that does not exist in QAT, they can take out a ticket<br/>with the [QAT HelpDesk](./05-getting-started.md#i-qat-helpdesk-and-tickets) system.</li>
    </ol>

<div style={{textAlign: 'center'}}>

![Update Program Info - Supply Planning Module](/img/media/image113.png)

Figure 67: Update Program Info - Supply Planning Module

</div>

![Update Program Info - Supply Planning Module](/img/media/image114.png)

3. Os administradores do programa podem rolar para baixo para ver uma lista de usuários que têm acesso ao seu programa. Os administradores do programa são incentivados a revisar esta lista regularmente para garantir que todos os usuários listados tenham uma finalidade comercial para visualizar, editar ou gerenciar esse plano de fornecimento.

4. Atualize os campos conforme desejado e clique em “Enviar”

**Observação:** O QAT permite apenas que administradores em nível de domínio ou administradores em nível de aplicativo atualizem os campos que estão em cinza na tela Atualizar informações do programa. Se um usuário precisar que esses campos sejam atualizados, ele poderá emitir um ticket com o sistema [QAT HelpDesk](./05-getting-started.md#i-qat-helpdesk-and-tickets).

###A2. Unidades de planejamento

A unidade de planejamento é o produto utilizado no QAT como base para planejar compras e exibir consumo, remessas, estoque e ajustes. O nome da unidade de planejamento geralmente inclui uma descrição completa até a embalagem primária; assim, sua nomenclatura segue de perto o tamanho da embalagem em que ocorre a dispensação, ou seja, um frasco de 30 comprimidos, blister de 10x10 cápsulas, etc.

O catálogo da unidade de planejamento QAT é considerado dados mestre em nível de domínio, o que significa que quaisquer adições/edições/subtrações desse catálogo são gerenciadas em nível de domínio e se aplicam a todos os programas dentro desse domínio.

Cada programa deve ter pelo menos uma unidade de planejamento que **Administradores de Programa** possam selecionar no catálogo em nível de região para adicionar aos seus programas ou desativar em seus programas. **Administradores do programa** também podem atualizar qualquer parâmetro relacionado a uma unidade de planejamento específica, incluindo a frequência de novos pedidos, meses mínimos de estoque, cálculo de consumo médio mensal, prazo de entrega do agente de compras local, prazo de validade e preço. As unidades de planejamento podem ser desativadas do programa se não estiverem mais em uso, permitindo que os administradores do programa mantenham todos os dados legados. Caso a unidade de planejamento não exista no catálogo do QAT, por favor, levante um ticket através do Helpdesk do QAT para que ele possa ser criado para todo o domínio. Veja mais sobre emissão de tickets na seção [Helpdesk e tickets do QAT](./05-getting-started.md#i-qat-helpdesk-and-tickets).

<div style={{textAlign: 'center'}}>

![Parameters to update per planning unit](/img/media/image115.png)

Figure 69: Parameters to update per planning unit.

</div>

**Parâmetros da Unidade de Planejamento:**
- **Fator de Conversão (FU:PU):** Campo não editável que fornece informações sobre o fator de conversão entre a PU escolhida e sua FU associada
- **Planejar por:** escolha entre “MOS” para as unidades de planejamento que são consumidas em grandes quantidades ou “Quantidade” para as unidades de planejamento que são consumidas em pequenas quantidades ou para fins emergenciais com vencimentos elevados
- **Intervalo de novo pedido (em meses):** o número de meses entre as remessas. Intervalo de reordenação + MOS mínimo = MOS máximo
- **Mínimos Meses de Estoque (MOS):** a quantidade mínima de estoque, em meses, que deve estar disponível para atender à demanda e evitar rupturas de estoque
- **Quantidade mínima:** a quantidade mínima de estoque determinada como necessária disponível
- **Cálculo do Consumo Médio Mensal (AMC):** que é a quantidade média que um produto é usado durante um período de tempo selecionado, terá uma média dos valores inseridos pelo administrador do programa para “Meses no futuro (incluindo o mês atual)” e “Meses no passado”
- **Prazo de entrega de aquisição local:** todo o prazo de entrega (“planejado para recebimento”), em meses, para unidades de planejamento adquiridas localmente. Idealmente, nas compras locais, o prazo de entrega seria muito menor do que nas compras internacionais.
- **Prazo de entrega de distribuição:** Número de meses entre o recebimento da remessa e o produto a ser distribuído até o nível mais baixo. Usado para remessas sugeridas antes do estoque insuficiente.
- **Prazo de validade:** número de meses desde o recebimento da remessa (status = recebido) até o vencimento. Este é um número médio de meses para a unidade de planejamento – para inserir dados exatos do lote, incluindo datas de vencimento, consulte [Planejamento de fornecimento: estoque expirado do projeto e informações do lote](./08-supply-planning-module-supply-planning.md#e-supply-planning-project-expired-stock-and-batch-information)
- **Limite de erro de previsão (%):** um valor usado nos relatórios de consumo de Erro de previsão (mensal) e Erro de previsão (por PU) como uma demarcação para saber se um erro de previsão é considerado muito alto
- **Preço de Catálogo:** preço médio de uma única unidade de planejamento, que será utilizado no cálculo dos custos de envio. O preço por programa e agente de compras pode ser atualizado de forma mais granular em Informações específicas do programa/agente de compras ou os preços de remessa específicos podem ser atualizados na tela de entrada de dados de remessa.
- **Notas:** um campo de texto livre para adicionar informações relevantes da unidade de planejamento (ou seja, cronogramas de introdução/exclusão progressiva, se a unidade de planejamento for de dados de nível central/nacional, etc.). Essas notas estão disponíveis para visualização no relatório Plano de fornecimento, na tela Versão do plano de fornecimento e revisão do planejamento de fornecimento, na tela Planejamento de fornecimento e na tela Planejamento de cenário.

**Atualizar unidades de planejamento em um programa:**
1. Certifique-se de estar trabalhando no modo ‘online’. Selecione “Gerenciamento de Programas” e depois “Atualizar Unidades de Planejamento”
2. Selecione o programa para exibir as unidades de planejamento atualmente gerenciadas<br />
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>If intending to update or reactivate a deactivated planning unit, choose “Inactive” from the planning unit Status dropdown</li>
    </ol>
3. Clique duas vezes na célula (parâmetro) que precisa ser atualizada
4. Clique em “Enviar” para salvar as alterações

**Adicionar unidades de planejamento a um programa:**
1. Certifique-se de estar trabalhando no modo ‘online’. Selecione “Gerenciamento de Programas” e depois “Atualizar Unidades de Planejamento”.
2. Selecione o programa para exibir as unidades de planejamento atualmente gerenciadas
3. Clique no botão azul “Adicionar linha” no canto inferior direito da tela e uma nova linha aparecerá no topo da tabela.<br />
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>Alternatively, right-click on any row in the table and select “Insert new row before” or “Insert new row after”.</li>
    </ol>
4. Comece digitando as três primeiras letras da unidade de planejamento desejada a ser adicionada
5. Preencha todas as células (parâmetros) nessa linha
6. Clique em “Enviar” para salvar as alterações

**Observação:** Se uma unidade de planejamento necessária não estiver disponível no menu suspenso e, portanto, no catálogo do QAT, por favor<br />crie um ticket através do Helpdesk do QAT para que ele possa ser criado para todo o domínio. Veja mais sobre<br />tickets na seção <a href="./05-getting-started.md#i-qat-helpdesk-and-tickets">QAT Helpdesk e Tickets</a>.

###A3. Informações específicas do programa/agente de compras

Os usuários do QAT podem gerenciar detalhes específicos (custos de frete, prazos de entrega, custos unitários) para agentes de compras e unidades de planejamento dentro de um plano de fornecimento. Os preços específicos do agente de compras do programa podem ser definidos para cada unidade de planejamento em seus programas, além dos preços padrão (catálogo) do programa ou preços de catálogo do agente de compras em nível de região. Por exemplo, um utilizador pode querer inserir o preço do PNUD para testes de diagnóstico rápido da malária (mRDT) no programa FASPonia-Malaria, se o catálogo do PNUD não estiver disponível ao nível do território. Os usuários também têm a capacidade de designar porcentagens de frete, prazos de entrega (incluindo prazos de entrega locais) e preços unitários para unidades de planejamento específicas, agentes de compras ou uma combinação dos dois.

**Recursos e regras:**
- **Combinação Programa + Agente de Compras:** Se estiver criando uma combinação de programa e agente de compras, a coluna de preço se tornará não editável se a unidade de planejamento for definida como ‘Todos’, uma vez que o preço já existe em uma tela diferente.
- **Custos de frete, prazos de entrega e preços unitários:** Pelo menos uma dessas colunas deve ter um valor numérico ao adicionar ou editar linhas.
- **Campos obrigatórios:** Somente as três primeiras colunas (Programa, Unidade de planejamento e Agente de compras) são obrigatórias para adicionar uma linha.
- **Restrições:**
  - Somente uma linha é permitida por combinação de programa/unidade de planejamento/agente de compras.
  - Se uma linha do agente de compras incluir unidades de planejamento 'Todas', a coluna de preço unitário não será editável.

**Uso no Módulo de Planejamento de Suprimentos:**
Esses detalhes específicos do programa/agente de compras/unidade de planejamento impactarão o módulo de planejamento de fornecimento da seguinte forma:
- **Porcentagens de frete:** Priorizadas pelas configurações do programa/agente de compras/unidade de planejamento e, em seguida, pelas configurações do programa.
- **Tempos de entrega:** Priorizados pelas configurações do programa/agente de compras/unidade de planejamento, depois pelas configurações do programa e, por fim, pelas configurações do agente de compras no nível da região.
- **Preços unitários:** Priorizados pelas configurações do programa/agente de compras/unidade de planejamento, depois pelas configurações do agente de compras no nível da região e, finalmente, pelas configurações do programa.

**Etapas para adicionar ou editar informações específicas do programa/agente de compras:**
1. Selecione “Gerenciamento de Programas” e depois “Atualizar Unidades de Planejamento”.
2. Selecione o programa para exibir as unidades de planejamento atualmente administradas.
3. Clique com o botão direito na linha da unidade de planejamento para adicionar o preço do agente de compras e clique em “Adicionar Preços do Programa/Agente de Compras” para mostrar uma nova tela.

<div style={{textAlign: 'center'}}>

![Accessing the Program/Procurement Agent Prices screen](/img/media/image116.png)

Figure 70. Accessing the Program/Procurement Agent Prices screen

</div>

4. OU selecione “Informações do programa/agente de compras” no menu à esquerda para ir diretamente para a tela.
5. Selecione o(s) programa(s) e unidade(s) de planejamento para os quais deseja inserir informações.
6. Preencha os campos obrigatórios e quaisquer campos adicionais. Alguns lembretes acima:<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If creating a program and procurement agent combination, the price column will become non-editable if the planning unit is set to ‘All’ since the price already exists in a different screen.</li>
       <li>At least one of these columns must have a numeric value when adding or editing rows.</li>
       <li>Only the first three columns (Program, Planning Unit, and Procurement Agent) are required to add a row.</li>
       <li>Only one row is allowed per program/planning unit/procurement agent combination.</li>
   </ol>


<div style={{textAlign: 'center'}}>

![Adding Program/Procurement Agent Info for a planning unit](/img/media/image117.png)

*Figura 71: Adicionando informações do programa/agente de compras para uma unidade de planejamento*

</div>

7. Clique em “Enviar” para salvar as alterações.
8. Clique em Master Data Sync após fazer alterações (aplica-se a qualquer item em Gerenciamento de Programas).

### A4. Unidades de Relatório Alternativas

Uma unidade de relatório alternativa (ARU) é o produto e a unidade em que os dados do país (consumo, inventário e ajustes) são relatados e pode ter a mesma descrição que a unidade de planeamento, unidade de previsão, unidade de aquisição, ou numa descrição de embalagem completamente diferente. A ARU é definida dentro de um país específico e exige a inserção de um fator de conversão da ARU para a unidade de planejamento à qual está associada (pode ser 1). De todos os mestres de produto, o ARU é o único que os administradores de programa gerenciam, porque são específicos de cada país. **Administradores de aplicativos, domínios e programas** podem adicionar/editar ARU para um país e programa. Unidades de relatório alternativas são úteis quando:
1. As fontes de dados relatam dados em unidades diferentes (por exemplo, peças versus pacotes)
2. Existe outro nome comum no país (por exemplo, nome de marca)

**Para ver a lista de todas as unidades de relatório alternativas em um país:**
1. Selecione “Gerenciamento de Programas” e depois “Unidade de Relatório Alternativa”.
2. Selecione o programa no menu suspenso.

**Para adicionar unidades de relatório alternativas a um país:**
1. Selecione “Gerenciamento de Programas” e depois “Unidade de Relatório Alternativa”.
2. Selecione o programa no menu suspenso.
3. Clique no botão “Adicionar linha” no canto inferior direito da tela ou clique com o botão direito em qualquer linha para adicionar outra.
4. Insira os detalhes na linha recém-criada e clique em “Enviar”.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Note: the conversion factor can be ‘divide’ or ‘multiply’.</li>
   </ol>
<div style={{textAlign: 'center'}}>

![ARUs](/img/media/image118.png)

Figure 72: ARUs

</div>

*Observe que para cada unidade de planejamento adicionada a um programa, o QAT criará automaticamente uma Unidade de Relatório Alternativa com um fator de conversão de 1:1. O QAT usará a descrição da Unidade de Planejamento como descrição da Unidade de Relatório Alternativa.

###A5. Prazos de entrega padrão

O QAT usa seis status de remessa para acompanhar a progressão de uma remessa, desde o planejamento até o recebimento do produto. Cada uma dessas etapas do ciclo de vida do pedido tem um lead time associado que é usado para estimar quando a próxima ação deve acontecer em cada etapa. Os prazos de entrega são expressos em meses e podem ser meses parciais ou até zero. A ordem de prioridade para configurações de prazos de entrega é a seguinte: As configurações de **Informações do agente de compras/programa** têm a prioridade mais alta, seguidas pelas configurações de **Nível de programa** e, em seguida, configurações de **Nível de território**.

<div style={{textAlign: 'center'}}>

<div style={{textAlign: 'center', overflowX: 'auto', margin: '20px 0'}}>
<svg viewBox="0 0 760 80" style={{ minWidth: '600px', width: '100%', maxWidth: '800px', height: 'auto' }}>
  <g transform="translate(10, 10)">
    <g transform="translate(0, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="3,3 98,3 115,30 98,57 3,57" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="55" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Planned</text>
    </g>
    <g transform="translate(125, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Submitted</text>
    </g>
    <g transform="translate(250, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Approved</text>
    </g>
    <g transform="translate(375, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Shipped</text>
    </g>
    <g transform="translate(500, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Arrived</text>
    </g>
    <g transform="translate(625, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Received</text>
    </g>
  </g>
</svg>
</div>

*Figura 73: Status de remessa QAT*

</div>

Há diferentes lógicas de lead time dependendo se a aquisição está marcada como internacional ou local.

- **Para compras internacionais:**
  - **Administradores do programa** gerenciam prazos de entrega específicos do programa/país (por exemplo, tempo de planejamento, tempos de remessa, tempos de desembaraço aduaneiro, períodos de quarentena, etc.)
  - **Administradores de Realm** gerenciam prazos de entrega específicos para cada agente de compras (mais sobre isso na tabela abaixo).
  - Também pode definir configurações específicas de lead time para programas e/ou agentes de compras por unidade de planejamento (PU).
- **Para compras locais:**
  - Todo o prazo de entrega (“planejado para recebido”) é determinado pelo que é inserido no nível do programa, por unidade de planejamento. Todas as etapas das compras locais são normalmente mais curtas do que as das compras internacionais.

| Prazo de entrega (de – até) | Definição | Configuração |
| :--- | :--- | :--- |
| **Planejado para envio** | Número de meses desde a identificação da necessidade de aquisição até à colocação de uma encomenda junto de um agente de aquisições | Sempre definido no nível do programa pelos administradores do programa |
| **Enviado para aprovado** | Número de meses entre a colocação do pedido e a aprovação do pedido. Esse lead time pode ser definido para cada agente de compras. | Padrão definido no nível do programa pelos administradores do programa. No entanto, será substituído pela configuração do agente de compras no nível do território, se o agente de compras estiver atribuído a uma remessa. |
| **Aprovado para envio** | Número de meses entre a aprovação do pedido e o envio do agente/fornecedor de compras. Esse lead time pode ser definido para cada agente de compras. | Padrão definido no nível do programa pelos administradores do programa. No entanto, será substituído pela configuração do agente de compras no nível do território, se o agente de compras estiver atribuído a uma remessa. |
| **Enviado para chegada por via aérea** | Tempo de trânsito aéreo entre o envio do pedido até a chegada ao porto de entrada - em número de meses. | Sempre definido no nível do programa pelos administradores do programa |
| **Enviado para chegada por via marítima** | Tempo de trânsito marítimo entre o envio do pedido por via aérea até a chegada ao porto de entrada - em número de meses. | Sempre definido no nível do programa pelos administradores do programa |
| **Enviado para chegada por estrada** | Tempo de trânsito rodoviário entre o envio do pedido por estrada até a chegada ao ponto de entrega solicitado – em número de meses. | Sempre definido no nível do programa pelos administradores do programa |
| **Chegou ao recebido** | Número de meses desde a chegada ao porto de entrada até a recepção no armazém. | Sempre definido no nível do programa pelos administradores do programa |

*Tabela 8: Prazos de entrega por estágio de embarque – definições*

**Pedido prioritário para configurações de prazo de entrega:**
A ordem de prioridade para configurações de lead time é a seguinte:
1. **Informações do programa/agente de compras:** Essas configurações têm a prioridade mais alta. Se os prazos de entrega forem definidos neste nível, eles substituirão outras configurações. Eles podem ser atualizados na tela ‘Informações do programa/agente de compras’.
2. **Nível do programa:** Se nenhum prazo de entrega for definido no nível do programa/agente de compras, os padrões do nível do programa serão usados. Eles podem ser atualizados nas telas ‘Atualizar informações do programa’ e ‘Atualizar unidades de planejamento’.
3. **Nível de região:** Os prazos de entrega em nível de região serão aplicados se nenhum prazo de entrega específico for definido no nível do programa.

**Insira/atualize os prazos de entrega padrão no nível do programa:**
1. Vá para “Gerenciamento de programas” e clique em “Atualizar informações do programa” (consulte [Atualizando informações do programa](#a1-program-information)).
2. Role para baixo até a segunda metade da página, onde estão todos os campos de lead time.
3. Insira os prazos de entrega padrão do programa por etapa.
4. Clique em “Atualizar” para salvar as alterações.

Consulte [Informações do agente de compras/programa](#a3-programprocurement-agent-specific-information) para obter instruções sobre como adicionar/editar configurações em nível de agente de compras/programa.

**Insira/atualize os prazos de entrega padrão do agente de compras local:**
1. Vá para “Gerenciamento de Programas” e clique em “Atualizar Unidades de Planejamento” (veja [Atualizando Unidades de Planejamento](#a2-planning-units))
2. Selecione o programa no menu suspenso no canto superior esquerdo.
3. Insira o prazo de entrega padrão do programa para compras locais.
4. Clique em “Enviar” para salvar as alterações.


4. Clique em “Enviar” para salvar as alterações.

<div style={{textAlign: 'center'}}>

![](/img/media/image119.png)

</div>


###A6. Orçamentos

<div style={{float: 'right', marginLeft: '15px', width: '250px'}}>

![Budget sidebar](/img/media/image120.png)

</div>

Um orçamento representa um montante (estimado ou real) de capital para um determinado período que será gasto na compra de produtos para o programa.

Vá para “Gerenciamento de Programas” e depois “Orçamento” para ver uma lista de todos os orçamentos para seu(s) programa(s).

Um orçamento pode ser vinculado a um programa ou a vários programas. Por exemplo, se o FSP-Lab-A tiver orçamento x, o FSP-Lab-B também poderá vincular seu programa ao orçamento x. Se um programa for desvinculado de um orçamento, o usuário será forçado a desmarcar todas as remessas desse orçamento antes de enviar a versão para o servidor. Qualquer administrador de programa que tenha acesso a um programa pode editar um orçamento associado ao programa; no entanto, ele/ela só poderá adicionar/remover programas aos quais tenha acesso.

Para adicionar ou remover programas de um orçamento, clique no orçamento e selecione ou desmarque no primeiro menu suspenso.

<div style={{textAlign: 'center', clear: 'both'}}>

![Multiple Program](/img/media/image121.png)

Figure 75: Multiple Program ⊗

</div>

Se um orçamento estiver destacado em vermelho, isso indica que o orçamento ultrapassou a “Data Final” e/ou o “Valor Utilizado” excedeu o “Valor do Orçamento”.

**Adicione um orçamento**
1. Na tela “Orçamento”, vá até o canto superior direito e clique no ícone azul “+”. ![icon](/img/media/image122.png)
2. Uma nova tela intitulada “Adicionar Orçamento” aparecerá.
3. Insira os detalhes necessários.
4. Clique no botão “Enviar”.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** <em>A Program cannot have multiple budgets with the same Funding Source and Budget Display Name. An error message will pop up if this is the case.</em></li>

   </ol>
**Atualizar um orçamento**
1. Vá para a tela Orçamento.
2. Clique com o botão esquerdo no orçamento que deseja atualizar.
3. Uma nova tela aparecerá intitulada “Atualizar Orçamento”
4. Atualizar os detalhes do orçamento selecionado conforme apropriado.
5. Clique em “Enviar” para salvar as alterações.

<div style={{textAlign: 'center'}}>

![Budget Screen](/img/media/image123.png)

Figure 76: Budget Screen

</div>

<br />

<div style={{textAlign: 'center'}}>

![Update Budget](/img/media/image124.png)

Figure 77: Update Budget

</div>

## B. Dados do plano de fornecimento transacional

Existem três requisitos principais de dados ao criar ou atualizar um plano de abastecimento: consumo, estoque e remessas. A seção abaixo definirá cada um dos elementos de dados e como adicionar/atualizar esses elementos no QAT.

1. **Consumo:** Estoque distribuído pelo programa aos clientes.
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Actual Consumption:** The reported quantity of a product dispensed to clients in a given time period for a specific program at a specific supply chain level or combination of levels.</li>
       <li>**Forecasted Consumption:** The quantity predicted to be consumed by clients in a given time period which has been agreed upon by the program.</li>
   </ol>
2. **Inventário:** A quantidade disponível de produto utilizável em um nível específico da cadeia de fornecimento ou combinação de níveis, em uma data específica, para um produto específico.
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Stock count:** A check of how much stock a program has at a particular time in a specific supply chain level or combination of levels.</li>
       <li>**Stock adjustments:** Positive or negative modifications to usable inventory quantities for a specific date, categorized by reason for the adjustment, if possible (e.g. damage, expiry, quarantine, transfer to another implementing partner, etc.). Rebalancing transfers between locations in the same supply chain are excluded.</li>
   </ol>
3. **Remessas:** A quantidade de quantidades financiadas ou planejadas que serão enviadas no mês atual ou futuro ou que foram enviadas em um mês anterior ou que foram recebidas. Expresso em remessas individuais, com número de remessa e data prevista de recebimento.

### B1. Dados de consumo

**Adicionar dados de consumo:**
<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<b>Notes on Consumption Data:</b>
<ul style={{paddingLeft: '20px', margin: 0}}>
<li>For each month and each region, user may enter <u>one</u> forecasted consumption record, and <u>one</u> actual consumption record.</li>
<li>Users may <u>not</u> enter actual consumption for months in the future</li>
<li>Users may <u>not</u> edit forecasted consumption more than nine (9) months in the past and may <u>not edit</u> actual consumption more than nine (9) months in the past.</li>
</ul>
</div>

1. Na barra lateral do menu, acesse “Dados do Plano de Fornecimento” e clique em “Dados de Consumo”.
2. Assim que aparecer a tela “Dados de Consumo”, selecione os filtros desejados usando os menus suspensos na parte superior.
3. A tela exibirá todos os dados atuais do período selecionado, unidade(s) de planejamento e outros filtros selecionados na etapa 2.
4. Para adicionar um novo registro de consumo, clique com o botão direito em qualquer célula e selecione “Adicionar novo consumo” OU selecione o azul “+ Adicionar linha” na parte inferior.
5. Insira as informações necessárias e clique em “Enviar”.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell that is greyed out (e.g. Quantity (PU)) indicates that it is a QAT generated cell and cannot be manually entered/edited.<ol style={{ listStyleType: 'lower-roman' }}><li>Reminder that [Alternate Reporting Unit](#a4-alternate-reporting-units) (ARU) is the product and the unit that the country’s data is reported in. This could be the same as the planning unit or may be different. QAT users can define an alternate reporting unit and a conversion factor (multiply or divide) to the planning unit.</li></ol></li>
       <li>Any cell that is highlighted yellow indicates that it is a required field and has not yet been entered by the user.</li>
   </ol>

<div style={{textAlign: 'center', clear: 'both'}}>

![Add Consumption Data](/img/media/image125.png)

Figure 78: Add Consumption Data

</div>

**Atualizar dados de consumo:**
1. Na barra lateral do menu, acesse “Dados do Plano de Fornecimento” e clique em “Dados de Consumo”.
2. Assim que aparecer a tela “Dados de Consumo”, selecione os filtros desejados usando os menus suspensos na parte superior.
3. A tela exibirá todos os dados atuais do período do relatório, unidade(s) de planejamento e outros filtros selecionados na etapa 2.
4. Para atualizar os dados de consumo existentes, o usuário deve clicar duas vezes na(s) célula(s). Um usuário pode atualizar quantas células para quantas linhas forem necessárias antes de salvar, desde que seja para os mesmos filtros suspensos selecionados na etapa 2.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** Users may <u>not</u> edit forecasted consumption more than nine (9) months in the past and may <u>not edit</u> actual consumption more than nine (9) months in the past. The non-editable data is identified by greyed out rows.</li>
   </ol>
5. Uma vez salvo um registro de consumo no QAT, ele não poderá ser excluído. Portanto, se um usuário quiser remover esse registro do plano de fornecimento, ele deverá desativá-lo marcando a caixa de seleção azul na coluna da extrema direita ou poderá ser reaproveitado para os dados de um mês diferente.
6. Depois de feitas as atualizações, clique em “Enviar”.

**Adicionar/atualizar detalhes do lote:**
A adição de informações de lote aos registros de consumo só pode ser aplicada ao consumo real.

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<b>Notes on Inventory Data:</b>
<ul style={{paddingLeft: '20px', margin: 0}}>
<li>For each month, data source, and region, users may enter <u>one</u> inventory record but may enter <u>multiple</u> adjustments.</li>
<li>Users can <u>not</u> enter inventory for months in the future</li>
<li>Users may <u>not</u> edit inventory or adjustment records more than nine (9) months in the past.</li>
</ul>
</div>

1. Clique com o botão direito na linha “Consumo Real” e clique em “Mostrar Informações do Lote”.
2. Uma tela pop-up com os detalhes do lote desse registro de consumo real aparecerá.
3. O usuário pode editar o número e/ou quantidade do lote existente clicando duas vezes na célula.
4. O usuário também pode adicionar um novo(s) lote(s) clicando com o botão direito e selecionando “Adicionar Novo Lote” ou clicando no botão “+Adicionar Linha””.
5. A quantidade total dos lotes deverá ser igual à quantidade daquele registro de consumo real.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the batch quantity/batch quantities are less than the actual consumption quantity, QAT will create a batch, using FEFO to calculate the difference.</li>
       <li>If the batch quantity/batch quantities are greater than the actual consumption quantity, QAT will have a validation error and not let the user submit.</li>
   </ol>
6. Clique em “Enviar”.

<div style={{textAlign: 'center', clear: 'both'}}>

![Batch Details](/img/media/image126.png)

Figure 79: Batch Details

</div>

### B2. Dados de inventário

**Adicionar dados de inventário/ajuste:**
1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados de Inventário”.
2. Assim que a tela “Dados de inventário” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the user is entering inventory data, select “Inventory” in the Inventory Type drop-down. If the user is entering adjustment data, select “Adjustment”.</li>
   </ol>
3. A tela exibirá todos os dados atuais do período selecionado, unidade(s) de planejamento e demais filtros selecionados no passo 2.
4. Para adicionar um novo registro de inventário/ajuste, clique com o botão direito em qualquer célula e selecione “Adicionar nova contagem de inventário”/ “Adicionar novos ajustes” OU selecione o azul “+ Adicionar linha” na parte inferior.
5. Insira as informações necessárias.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell that is greyed out (e.g., Conversion Factor) indicates that it is a QAT generated cell and cannot be manually entered/edited.</li>
       <li>Any cell that is highlighted yellow indicates that it is a required field and has not yet been entered by the user.</li>
       <li>If entering an adjustment, a note in the “Notes” field is required. Notes for inventory records are optional.</li>
   </ol>
6. Clique em “Enviar”.

<div style={{textAlign: 'center'}}>

![Add Inventory](/img/media/image127.png)

Figure 80: Add Inventory

</div>

**Atualizar dados de inventário/ajuste:**
1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados de Inventário”.
2. Assim que a tela “Dados de inventário” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the user is updating inventory data, select “Inventory” in the Inventory Type drop-down. If the user is updating adjustment data, select “Adjustment”.</li>
   </ol>
3. A tela exibirá todos os dados atuais do período do relatório, unidade(s) de planejamento e outros filtros selecionados na etapa 2.
4. Para atualizar os dados de inventário/ajuste existentes, o usuário deve clicar duas vezes na(s) célula(s). Um usuário pode atualizar quantas células para quantas linhas forem necessárias antes de salvar, desde que seja para os mesmos filtros suspensos selecionados na etapa 2. Um usuário também não pode atualizar dados de ajuste e de inventário ao mesmo tempo sem salvar primeiro.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** Users may <u>not</u> edit adjustment or inventory records more than nine (9) months in the past. The non-editable data is identified by greyed out rows.</li>
   </ol>
7. Depois que um registro de inventário for salvo no QAT, ele não poderá ser excluído. Portanto, se um usuário quiser remover esse registro do plano de fornecimento, ele deverá desativá-lo marcando a caixa de seleção azul na coluna da extrema direita ou poderá ser reaproveitado para os dados de um mês diferente.
5. Depois de feitas as atualizações, clique em “Enviar”.

**Adicionar/atualizar detalhes do lote – ajustes**
(para obter mais informações sobre cálculos de lote QAT, consulte [Anexo 2: Regras de negócios](./14-annex-2-business-rules.md) ou Seção 5.E).
1. Clique com o botão direito na linha Ajuste e clique em “Mostrar informações do lote”.
2. Uma tela pop-up com os detalhes do lote desse registro será exibida.
3. O usuário pode editar o número e/ou quantidade do lote existente clicando duas vezes na célula.
4. O usuário também pode adicionar um novo(s) lote(s) clicando com o botão direito e selecionando “Adicionar Novo Lote” ou clicando no botão “+Adicionar Linha””.
5. A quantidade total dos lotes deverá ser igual à quantidade daquele registro de ajuste.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the batch quantity/batch quantities are less than the adjustment quantity, QAT will create a batch, using Best Case Scenario logic to calculate the difference.</li>
       <li>If the batch quantity/batch quantities are greater than the adjustment quantity, QAT will have a validation error and not let the user submit.</li>
       <li><em>**Note:** there is no user override for auto-adjustments, only manual adjustments.</em></li>
   </ol>
6. Clique em “Enviar”.

<div style={{textAlign: 'center'}}>

![Batch Details Adjustments Top](/img/media/image128.png)
<br/>
![Batch Details Adjustments Bottom](/img/media/image129.png)

Figure 81: Batch Details

</div>

**Adicionar/atualizar detalhes do lote – inventário:**
1. Clique com o botão direito na linha Inventário e clique em “Mostrar informações do lote”.
2. Uma tela pop-up com os detalhes do lote desse registro aparecerá na tela de planejamento de fornecimento. Consulte a Seção 5.E para obter detalhes sobre como atualizar.

### B3. Dados de Remessa

**Adicionar dados de remessa:**
1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados da Remessa”.
2. Assim que a tela “Dados da Remessa” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.
3. A tela exibirá todos os dados atuais do período do relatório, unidade(s) de planejamento e outros filtros selecionados na etapa 2.
4. Para adicionar um novo registro de remessa, clique com o botão direito em qualquer célula e selecione “Adicionar nova remessa” OU selecione o azul “+ Adicionar linha” na parte inferior.
5. Insira as informações necessárias.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell that is greyed out (e.g. Planning Unit Cost) indicates that it is a QAT generated cell and cannot be manually entered/edited.</li>
       <li>Any cell that is highlighted yellow indicates that it is a required field and has not yet been entered by the user.</li>
       <li>Certain cells will not be available to enter data into until other cells have been filled in. For example, “Budget” cannot be selected until the user has selected a “Funding Source”.</li>
       <li>“QAT Shipment ID” will display as blank or ‘0’ until the program is uploaded.</li>
       <li>Shipments cannot be marked as ‘Received’ if the Receive Date is in the future.</li>
       <li>In the shipment data screen, the user may select the desired currency from a drop-down list by clicking in the appropriate cell in the currency column. Based on the currency selected, the user will get the catalog price.<ol style={{ listStyleType: 'lower-roman' }}><li>That price can be changed during data entry/updating.</li><li>Freight cost is based on shipment mode and procurement agent but can also be modified manually.</li></ol></li>
       <li>If a shipment row is in red text, this means that the shipment is identified as an “Emergency Shipment”. QAT will automatically mark the shipment as an emergency shipment if the receive date falls inside the predefined lead time, meaning the shipment will most likely need to be expedited. <em>Note: QAT will only auto-flag the emergency shipment when the shipment is first created, but QAT will stop auto-flagging after first time the shipment row is submitted.</em></li>
       <li>If a shipment is highlighted in grey, this means that the shipment is not included in the ending balance of the supply plan. Shipments can be excluded by either changing the status of the shipment to “Cancelled” OR by de-activating the shipment using the blue check box on the far left.</li>
   </ol>
6. Clique em “Enviar”.

**Atualizar dados de remessa:**
1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados da Remessa”.
2. Assim que a tela “Dados da Remessa” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.
3. A tela exibirá todos os dados atuais do período do relatório, unidade(s) de planejamento e outros filtros selecionados na etapa 2.
4. Para atualizar os dados de envio existentes, o usuário deverá clicar duas vezes na(s) célula(s). Um usuário pode atualizar quantas células para quantas linhas forem necessárias antes de salvar, desde que seja para os mesmos filtros suspensos selecionados na etapa 2 (ou seja, você não pode editar remessas de um produto e depois editar remessas de um produto diferente sem primeiro salvar).
5. Quando qualquer um dos seguintes elementos for alterado (quantidade, ARU, modalidade de envio, agente de compras e custo unitário de planejamento), o comportamento do campo custo do frete dependerá do status do checkbox “Custo do frete calculado automaticamente”:<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Checked:**<ol style={{ listStyleType: 'lower-roman' }}><li>The freight cost will be automatically recalculated based on the program/planning unit settings.</li><li>This calculation uses the formula: Planning Unit cost * Freight %.</li></ol></li>
       <li>**Unchecked:**<ol style={{ listStyleType: 'lower-roman' }}><li>The freight cost cell with have a red triangle in the right corner appear recommending the user to update the freight cost the first time the checkbox is unchecked.</li><li>To facilitate manual entry, the user can input a formula directly into the cell by typing an ‘=’ first. The formula will disappear upon saving, but the resulting value will remain. The user can also input a number directly.</li></ol></li>
   </ol>
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

<div style={{textAlign: 'center'}}>

![Shipment Batch Details](/img/media/image131.png)

*Figure 82: Shipment Batch Details*

</div>

**Calculadora de pedidos estratégicos:**

Para combinações específicas de unidade de planejamento e agente de compras, uma **calculadora estratégica de pedidos** pode aparecer para o usuário ao inserir a quantidade de uma remessa. O objetivo da calculadora é aconselhar os usuários sobre a quantidade de pedido apropriada para uma remessa com base em um ou mais dos seguintes elementos: a) Quantidade Mínima de Pedido (MOQ); b) Carga de contentores; c) palete Euro 1; d) Palete Euro 2. A calculadora ajudará os usuários a planejar remessas para maximizar a eficiência na logística de entrega (por exemplo, utilizando um contêiner cheio em vez de 20% do contêiner). Os produtos estratégicos são definidos no nível da região por um aplicativo ou administrador da região. Para obter mais informações sobre como definir produtos estratégicos, consulte a [seção sobre adição de unidades de planejamento para agentes de compras](./13-annex-1-application-realm-administrator-manual.md#k-procurement-agent).
1. Para visualizar a Calculadora de Quantidades de um produto estratégico, clique duas vezes na célula da coluna “Quantidade do Pedido” e a tela “Calculadora de Quantidades” aparecerá. <em>Nota: Se o produto for um produto não estratégico, o usuário pode modificar diretamente a quantidade do pedido na célula após clicar duas vezes e não haverá pop-up.</em>
2. A quantidade original da remessa aparecerá na célula “Quantidade do pedido manual”.
3. Se você não quiser usar a calculadora estratégica e quiser usar a “Quantidade do pedido manual” original, selecione “Nenhum” no menu suspenso para “Embalagem baseada em” e clique em “Salvar quantidade de remessa”.
4. Se quiser usar a calculadora estratégica:<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Select how you wish to use the calculator by choosing an option from the “Packaging Based On” drop-down as well as the “Rounding Option” drop-down.</li>
       <li>Depending on your selections in step 4a, the quantity in “Final Order Quantity” cell will show you QAT’s calculated shipment quantity. The bottom table summarizes the key information around the different packaging modes.</li>
       <li>After confirming you are happy with the Final Order Quantity, click “Save Shipment Quantity”.</li>

   </ol>
<div style={{textAlign: 'center'}}>

![Strategic Order Calculator](/img/media/image131.png)

*Figure 83: Strategic Order Calculator*

</div>

**Ver datas de envio:**
As estimativas para cada status podem ser visualizadas e as datas reais podem ser inseridas manualmente na tela Remessa. Isso permitirá que o usuário identifique se a remessa está dentro do cronograma ou atrasada/adiante com base nos prazos de entrega. O usuário também pode usar esta tela para comparar as datas reais com as datas estimadas dessa remessa e usar essas informações para atualizar prazos de entrega que podem não ser precisos.
1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique em “Dados da Remessa”.
2. Assim que a tela “Dados da Remessa” aparecer, selecione os filtros desejados usando os menus suspensos na parte superior.
3. A tela exibirá todos os dados atuais do período do relatório, unidade de planejamento e demais filtros selecionados na etapa 2.
4. Clique com o botão direito na remessa cujas datas deseja visualizar e selecione “Mostrar datas de remessa”. Uma tela pop-up chamada “Datas de envio” aparecerá.
5. A linha denominada “Estimado” da tela “Datas de Remessa” mostrará uma data para cada status da remessa com base nos prazos de entrega inseridos no programa, bem como na data estimada de recebimento. Somente a data estimada de recebimento pode ser editada pelo usuário.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If a user changes the estimated receive date, the other estimated dates will also change based on the program’s lead times.</li>
   </ol>
6. A linha denominada “Real” permitirá ao usuário inserir a data real em que cada status ocorreu para aquela remessa. Se uma célula estiver esmaecida nesta linha, significa que a remessa ainda não atingiu esse status e uma data não pode ser inserida.
7. Caso o usuário faça alguma alteração na data estimada de recebimento ou em uma das datas reais, clique em “Salvar datas de envio”.

<div style={{textAlign: 'center'}}>

![Show Shipment Dates](/img/media/image131.png)

*Figure 84: Show Shipment Dates*

</div>

### B4. Vinculação de remessa ERP

A funcionalidade de vinculação de remessas ERP permite que os planejadores de fornecimento vinculem remessas selecionadas (atualmente GHSC-PSM) ao sistema ERP do agente de compras correspondente (atualmente ARTMIS). Uma vez vinculado um envio no plano de abastecimento, todos os detalhes do pedido (status, data de recebimento, custos, quantidade, lotes, etc.) corresponderão ao que está no ERP e o usuário não precisará mais atualizar manualmente o envio. Caso a embalagem do produto no ERP não corresponda à embalagem da unidade de planejamento no QAT, o usuário terá a possibilidade de corrigir isso através de um atributo de fator de conversão no QAT. O usuário poderá desvincular a remessa se desejar rastrear manualmente. Os detalhes da remessa para essas remessas vinculadas aparecerão em todo o QAT (Entrada de Dados da Remessa, Planejamento de Fornecimento, Relatórios, etc.). O usuário será alertado se houver alguma alteração importante feita no ERP, como cancelamento de um pedido ou alteração do SKU de um produto. Os usuários só poderão marcar remessas que já passaram pela aprovação da fonte de financiamento no ERP.

Ao gerenciar a vinculação de remessas ERP, os usuários selecionarão as opções de menu ‘Vincular remessas ERP’ ou ‘Notificações de remessas ERP’. Dentro da tela ‘Link ERP Shipments’ existem 3 subtelas:
1) **Não vinculado (QAT)** – Use esta tela para vincular remessas QAT a pedidos ERP pela primeira vez. Os usuários verão uma lista de remessas de QAT e, quando clicarem em uma única remessa de QAT, poderão escolher a quais pedidos de ERP a remessa de QAT deve ser vinculada.
2) **Vinculados** – Os usuários verão uma lista de remessas atualmente vinculadas e poderão atualizar o fator de conversão ou notas de remessas já vinculadas, adicionar linhas ERP a remessas QAT já vinculadas ou desvincular linhas ERP da remessa QAT.
3) **Não vinculado (ERP)** – Use esta tela para vincular pedidos de ERP ao QAT pela primeira vez. Os usuários verão uma lista de remessas de ERP e, quando clicarem em uma única remessa de ERP, poderão escolher a qual remessa de QAT a remessa de ERP deve ser vinculada. Para quaisquer pedidos que estejam no ERP e que ainda não estejam no QAT, você poderá criar uma nova remessa de QAT nesta tela.

<div style={{textAlign: 'center'}}>

![ERP Linking Screens](/img/media/image133.png)

*Figure 85: ERP Linking Screens*

</div>

**Regras para vinculação de remessas ERP:**

Abaixo estão as regras para vinculação de remessas ERP. O botão de detalhes no canto superior direito da tela ‘Vincular remessas ERP’ resumirá essas regras.
1. A vinculação do ERP só é editável para versões locais baixadas. As telas de vinculação do ERP mostrarão as versões do servidor, mas esses dados são somente leitura. Para salvar as alterações de vinculação, o usuário deve fazer upload dessa versão.
2. Atualmente, os envios QAT só podem ser vinculados se o agente de compras for GHSC-PSM.
3. Os envios QAT não poderão ser vinculados se estiverem no status planejado, cancelado ou sugerido.
4. Remessas QAT inativas não podem ser vinculadas.
5. Remessas QAT com status ‘recebido’ só podem ser vinculadas se a data de recebimento estiver dentro dos últimos 6 meses.
6. Os pedidos de ERP só podem ser vinculados se já tiverem passado do status de aprovação da fonte de financiamento (por exemplo, aprovados pela USAID).
7. Os pedidos ERP com status ‘entregue’ só poderão ser vinculados se a data de entrega for nos últimos 6 meses.
8. A data de recebimento do ERP usa a lógica: 1) Data de entrega real 2) Data de entrega estimada 3) Data de entrega acordada 4) Data de entrega solicitada. Portanto, se o número 1 não estiver disponível, o QAT usará o número 2. Se o número 2 não estiver disponível, o QAT usará o número 3 e se o número 3 não estiver disponível, o QAT usará o número 4.

**Não vinculado (QAT):**

Esta tela é usada pelos planejadores de fornecimento para vincular remessas QAT a pedidos ERP. Abaixo estão as etapas sobre como vincular uma remessa QAT a um ou vários pedidos ERP:
1. Selecione o botão de opção na parte superior denominado ‘Not Linked (QAT)’.
2. Selecione o programa e a(s) unidade(s) de planejamento das quais deseja escolher a remessa QAT. Uma vez selecionado, uma lista de remessas QAT aparecerá. A vinculação do ERP só pode ser feita em versões locais, porém, os envios vinculados podem ser visualizados em versões de servidor.
3. Clique com o botão esquerdo em uma única remessa QAT. Uma janela pop-up aparecerá chamada ‘Pesquisar remessas vinculadas ao ERP’. Esta janela permitirá ao usuário escolher a quais pedidos ERP o envio QAT deverá ser vinculado.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The top half of the window will show the QAT shipment details. This information is non-editable.</li>
       <li>The middle half of the window will show 2 dropdowns that will allow the user to filter the list of ERP orders to link the QAT shipment with.</li>
       <li>The bottom half of the window will list all ERP shipments based on the dropdowns in the middle section. This is where the user will link 1 or more orders as well as provide the Alternate Reporting Unit (ARU) and note (optional). The ARU will automatically populate the conversion factor.<ol style={{ listStyleType: 'lower-roman' }}><li>**To change/add a conversion factor, the user can do so in the ‘Alternate Reporting Unit’ screen.**</li></ol></li>
   </ol>
4. Na seção intermediária, o usuário pode filtrar as remessas do ERP selecionando a unidade de planejamento do ERP, o RO/Nº do pedido ou ambos. O QAT preencherá previamente o menu suspenso RO/Nº do pedido assim que esta janela aparecer, selecionando o Nº do pedido do agente de processamento na remessa do QAT. Se este campo estiver em branco, o QAT exibirá uma mensagem abaixo de ambos os menus suspensos em vermelho que exibe “Preencha a unidade de planejamento ERP ou RO/Nº do pedido para preencher os dados”.
5. Para vincular uma remessa de ERP, o usuário marcará a caixa na coluna mais à esquerda que diz ‘Link?’. Depois que o usuário fizer isso, ele será solicitado a inserir a ARU.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If a user wants to link multiple ERP lines to the same QAT shipment, he/she should check the box for multiple rows.</li>
       <li>If a user wants to link multiple QAT shipments to 1 or multiple ERP lines, he/she should check the box at the top that says ‘Show all shipments for ______’ and then select each of the QAT shipments to link.</li>
   </ol>
6. O fator de conversão é útil quando a unidade de planejamento QAT e o produto ERP são diferentes (pacote de 10 barras de chocolate versus pacote de 100 barras de chocolate). O fator de conversão é usado para calcular qual é a quantidade de remessa QAT convertida. A quantidade de remessa QAT convertida é a quantidade do pedido que será usada em seu plano de fornecimento para a remessa vinculada.

<div style={{textAlign: 'center'}}>

![Conversion Factor Formula](/img/media/image134.png)

</div>

7. Se houver uma nota na remessa do QAT, ela será transferida para cada um dos pedidos do ERP quando você fizer o link. Nesta janela pop-up, o usuário pode editar ou excluir essa nota.
8. A parte inferior da janela mostrará qual é o pedido de quantidade QAT original e qual será a nova quantidade convertida de QAT.

<div style={{textAlign: 'center'}}>

![ERP Converted Quantity](/img/media/image135.png)

*Figure 86: ERP Converted Quantity*

</div>

9. Por último, clique em ‘Link Shipment’.

**Não Vinculado (ERP):**

Esta tela é usada pelos planejadores de fornecimento para vincular pedidos de ERP ao QAT pela primeira vez. Para quaisquer pedidos que estejam no ERP e que ainda não estejam no QAT, você poderá criar uma nova remessa de QAT nesta tela. Abaixo estão as etapas sobre como vincular um pedido ERP a uma remessa QAT:
1. Selecione o botão de opção na parte superior denominado ‘Não vinculado (ERP)’.
2. Selecione o país E a categoria da unidade de planejamento ou a unidade de planejamento da qual deseja escolher o pedido ERP. Depois de selecionado, uma lista de pedidos de ERP aparecerá.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note: This list is showing ERP data whereas the Not Linked (QAT) screen shows QAT data.**</li>
   </ol>
3. Clique com o botão esquerdo em um único pedido ERP. Uma janela pop-up aparecerá chamada ‘Pesquisar remessas vinculadas ao ERP’. Esta janela permitirá ao usuário vincular 1 ou mais pedidos de ERP a uma remessa QAT nova ou pré-existente.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The top half of the window will show the QAT shipment details. This area will allow the user to either select a pre-existing QAT shipment or create a new one. Steps 4 and 5 will detail how to do so.</li>
       <li>The middle half of the window will show 2 dropdowns that will allow the use to filter the list of ERP orders to link the QAT shipment with.</li>
       <li>The bottom half of the window will list all ERP shipments based on the dropdowns in the middle section. This is where the user will link 1 or more orders as well as provide the conversion factor and note. This section is pre-populated based on the ERP order number that was selected on the previous screen.</li>
   </ol>
4. Para selecionar uma remessa QAT existente, clique no botão ‘Selecionar remessa existente’ na seção superior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Select the program that you want to search the QAT shipment(s) from. The dropdown will be filtered to show only the country that was selected in step 2.</li>
       <li>Next, either search the list of QAT shipments by planning unit (default) or by QAT shipment ID. If you want to search by QAT shipment ID, you will need to check the box that is labeled ‘Filter by QAT shipment id?’. To go back to searching by planning unit, you will uncheck the box.</li>
       <li>Once you find the desired QAT shipment, select the button in the far-left column labeled ‘Select shipment id’.</li>
   </ol>
5. Para criar uma nova remessa QAT, clique no botão ‘Criar nova remessa’ na seção superior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The user will need to fill in 4 dropdowns (Program, Planning Unit, Funding Source, Budget) to provide required information for creating the shipment. The rest of the shipment details will come from the ERP order that is selected in step 7.<ol style={{ listStyleType: 'lower-roman' }}><li>The program dropdown is filtered to show only the country that was selected in step 2.</li><li>The budget dropdown is filtered based on the selection in the funding source dropdown.</li><li>If there is no applicable budget, the user will need to leave the screen and add a budget in master data. If the user adds a budget, he/she must master data sync before seeing that option appear in this screen.</li></ol></li>
   </ol>
6. Na seção intermediária, o QAT preencherá previamente o menu suspenso RO/Nº do pedido assim que esta janela aparecer com base no pedido de ERP selecionado feito na etapa 3.
7. Para vincular uma remessa de ERP, o usuário marcará a caixa na coluna mais à esquerda que diz ‘Link?’. Depois que o usuário fizer isso, ele será solicitado a inserir a ARU.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If a user wants to link multiple ERP lines to the same QAT shipment, he/she should check the box for multiple rows.</li>
       <li>If a user wants to link multiple QAT shipments to 1 or multiple ERP lines, he/she should check the box at the top that says ‘Show all shipments for ______’ and then select each of the QAT shipments to link.</li>
   </ol>
8. O fator de conversão é útil quando a unidade de planejamento QAT e o produto ERP são diferentes (pacote de 10 barras de chocolate versus pacote de 100 barras de chocolate). O fator de conversão é usado para calcular qual é a quantidade de remessa QAT convertida. A quantidade de remessa QAT convertida é a quantidade do pedido que será usada em seu plano de fornecimento para a remessa vinculada.

<div style={{textAlign: 'center'}}>

![Conversion Factor Formula](/img/media/image134.png)

</div>

9. O usuário pode adicionar uma nota à remessa editando a coluna da extrema direita chamada ‘Notas’.
10. A parte inferior da janela mostrará qual é o pedido de quantidade QAT original e qual será a nova quantidade QAT convertida.
11. Por último, clique em ‘Link Shipment’.

<div style={{textAlign: 'center'}}>

![Create New Shipment](/img/media/image136.png)

*Figure 87: Create New Shipment*

</div>

**Tela vinculada:**

Esta tela é usada pelos planejadores de fornecimento para visualizar a lista de remessas de ERP atualmente vinculadas e atualizar a Unidade de Relatório Alternativo (ARU) ou notas, adicionar pedidos de ERP a remessas de QAT já vinculadas ou desvincular linhas de ERP da remessa de QAT.
1. Selecione o botão de opção na parte superior denominado ‘Linked’.
2. Selecione o programa e a(s) unidade(s) de planejamento para os quais deseja ver a lista de remessas vinculadas. Uma vez selecionado, uma lista de remessas aparecerá. As informações nessas remessas estão sendo extraídas do ERP.
3. Para fazer qualquer uma das atualizações listadas na etapa 2, clique com o botão esquerdo em uma única remessa.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>To edit ARU and/or notes, double-click on the cell and type or select from dropdown.</li>
       <li>To de-link an ERP order, uncheck the box in the ‘Link?’ column.</li>
       <li>To add an ERP order, check the box for that order under ‘Link?’ column. The user can clear the search dropdowns in the middle section to look up a different planning unit or order number and the originally linked orders will remain linked.</li>
   </ol>
4. Os usuários também poderão visualizar detalhes do histórico de pedidos do ERP. Para fazer isso, na tela original ‘Linked’, clique com o botão direito em uma única remessa e clique em ‘View ERP Order History’. Uma janela pop-up aparecerá chamada ‘Histórico de pedidos ERP’. Esta tela mostrará todos os detalhes que mudaram ao longo do tempo no pedido ERP. Cada linha indica que uma ou mais colunas foram alteradas. A coluna mais à direita, denominada ‘Dados recebidos em’, indica quando o registro foi recebido pelo QAT.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>To view batch details, click on the icon.</li>

       <li>**Note:** Certain fields from the ERP are not captured on this screen so there may be some instances where 1 or more rows have the same details. This means that a column in the backend was changed.</li>
   </ol>

**Observação:** Depois de vincular as remessas QAT aos pedidos ERP, os dados serão refletidos em seu plano de fornecimento sem a necessidade de sincronização de dados mestres. Os dados ERP recém-vinculados serão refletidos nos relatórios locais, na tela de planejamento de fornecimento, bem como na tela de entrada de dados de remessa. O usuário precisa fazer upload de uma versão para o servidor para que outros usuários vejam essas alterações.

Para visualizar as remessas vinculadas ao ERP na tela de entrada de dados da remessa, o usuário deve selecionar ‘Remessas vinculadas ao ERP’ no menu suspenso Tipo de Remessa. O usuário pode exibir apenas esta opção ou combiná-la com os envios manuais para mostrar todos os envios. As remessas vinculadas ao ERP ficarão esmaecidas para indicar que não são editáveis.

<div style={{textAlign: 'center'}}>

![View ERP Shipments in Data Entry](/img/media/image138.png)

*Figure 88: View ERP Shipments in Data Entry*

</div>

Na tela de planejamento de abastecimento, os envios vinculados ao ERP terão um ícone de link no canto superior esquerdo da célula. O usuário pode clicar em uma remessa específica para visualizar os detalhes, mas essas células também ficarão esmaecidas para indicar que não são editáveis. O usuário ainda pode clicar com o botão direito nos detalhes da remessa para visualizar as datas da remessa e as informações do lote.

<div style={{textAlign: 'center'}}>

![View ERP Shipments in Supply Plan](/img/media/image139.png)

*Figure 89: View ERP Shipments in Supply Plan*

</div>

**Notificações de remessa ERP**

O objetivo da tela 'Notificações de remessa do ERP' é alertar os planejadores de fornecimento sobre quaisquer alterações importantes feitas nas remessas vinculadas ao ERP, como o cancelamento de um pedido ou a alteração do SKU de um produto. Os planeadores de abastecimento serão incentivados a “abordar” cada uma das notificações para confirmar que estão cientes da mudança e das implicações feitas no plano de abastecimento. Para alterações de produtos, o usuário deverá reconfirmar o fator de conversão, alterando ou não.

Na parte superior da tela, há um ícone ![Truck Icon](/img/media/image140.png). Este ícone exibirá um número vermelho indicando quantas notificações não endereçadas estão na tela de notificações de envio do ERP. Se não houver nenhum número vermelho, isso significa que não há nenhum.

Para acessar a tela ‘Notificações de Remessa ERP’, clique no ícone do caminhão na parte superior do QAT ou selecione ‘Notificações de Remessa ERP’ em ‘Dados do Plano de Fornecimento’ no menu da barra lateral esquerda.

Para visualizar as notificações, o usuário precisará selecionar um dos 3 menus suspensos (Programa, Unidade de Planejamento, Endereçado). O usuário também tem a opção de selecionar diretamente na tabela acima dos menus suspensos. Quando um usuário clica com o botão esquerdo em uma linha da tabela, os três menus suspensos serão preenchidos automaticamente com base no programa selecionado pelo usuário. O menu suspenso da unidade de planejamento será preenchido com todas as unidades de planejamento e o menu suspenso endereçado selecionará ‘Não endereçado’.

<div style={{textAlign: 'center'}}>

![ERP Shipment Notifications Filtering](/img/media/image141.png)

*Figure 90: ERP Shipment Notifications Filtering*

</div>

Para endereçar uma notificação, o usuário deve marcar a caixa na coluna ‘Endereçado?’ e clicar no botão ‘Enviar’. Se o usuário estiver tratando de uma notificação de Alteração de Produto ERP, ele deverá primeiro inserir o fator de conversão. O campo do fator de conversão não é editável até que a caixa endereçada seja marcada.

Assim como na tela ‘Vinculado’, o usuário pode visualizar o histórico de pedidos do ERP. Para fazer isso, clique com o botão direito na linha de notificação e clique em ‘Exibir histórico de pedidos ERP’. Consulte a seção Tela vinculada para obter mais informações.

## C. Importação de dados para planejamento de fornecimento

### C1. Modelos de importação do Excel de dados do plano de fornecimento

<div style={{ border: '2px solid black', padding: '15px', float: 'right', width: '35%', marginLeft: '15px', marginBottom: '15px', backgroundColor: '#fcfcfc' }}>

**Notes on Excel Templates:**<br/>
Each of the four data types (Inventory, Adjustment, Consumption and Shipment) have their own Excel template so it is important that you click on “Download Template” from the proper screen. For inventory and adjustment, make sure the drop-down menu has selected the type of data you want the template for.

</div>

Os dados de Consumo, Estoque e Expedição podem ser inseridos através das telas de entrada de dados do QAT, através da tela de Planejamento de Fornecimento ou através da Quantimed Import (somente consumo previsto). O QAT também oferece aos usuários a capacidade de inserir esses dados diretamente do Microsoft Excel. Este método de entrada de dados destina-se a entradas em massa que contêm muitos dados. As etapas abaixo mostrarão como inserir dados do Excel no QAT:

1. Na barra lateral do menu, vá em “Dados do Plano de Fornecimento” e clique no tipo de dados que deseja inserir (por exemplo, “Dados de Consumo”).

<div style={{textAlign: 'center', margin: '20px 0'}}>

![Download Template Location](/img/media/image142.png)

</div>

2. Uma vez na tela de entrada de dados, vá até o canto superior direito e clique em “Baixar Modelo”.
3. Um arquivo Microsoft Excel será baixado diretamente para a pasta **‘Downloads’** do seu computador.
4. Vá para a pasta Downloads do seu computador e abra o arquivo Excel. O formato do nome deve ser **ConsumptionDataEntryTemplate.xlsx** com a primeira parte dependente do tipo de dados que você está inserindo.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li><u><i>Each of the four data types (Inventory, Adjustment, Consumption and Shipment) have their own Excel template so it is important that you click on “Download Template” from the proper screen. For inventory and adjustment, make sure the drop-down menu has selected the type of data you want the template for.</i></u></li>
   </ol>
5. Uma vez no modelo Excel, clique em “Ativar edição” na parte superior, se solicitado.

<div style={{textAlign: 'center'}}>

![Enable Editing](/img/media/image144.png)

*Figure 91: Enable Editing*

</div>

<div style={{ float: 'right', marginLeft: '20px', marginBottom: '15px', width: '20%' }}>

![Downloads Folder Sidebar](/img/media/image143.png)

</div>

6. Insira os dados de todos os campos obrigatórios.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell highlighted in grey (e.g. Conversion Factor) is non-editable and does not need to be filled in.</li>
       <li>Certain fields (e.g. Data Source) will have drop down menus pre-populated from QAT. Therefore, it is important to download a new template if it has been a while since the last time the user used the template.</li>
       <li>Certain fields have built in data validations (e.g. letters cannot be entered in cost cells). If the validation is not met, a pop-up error message will appear.</li>

   </ol>
<div style={{textAlign: 'center'}}>

![Excel Template](/img/media/image145.png)

*Figure 92: Excel Template*

</div>

7. Depois que todos os dados forem inseridos no modelo Excel, reabra a janela QAT.
8. Acesse a tela de Entrada de Dados (Consumo, Estoque, Ajuste, Expedição).
9. Clique no botão azul “+Adicionar linha” na parte inferior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** You only need to add 1 row in QAT regardless of how many rows there are in the Excel template.</li>
   </ol>
10. No modelo Excel, selecione todos os dados e pressione Ctrl + C no teclado para copiar os dados.
11. Vá para a linha adicionada no QAT, clique com o botão esquerdo na célula mais à esquerda dessa linha e pressione Ctrl + V no teclado para colar os dados.
12. O QAT criará automaticamente novas linhas para os dados importados do Excel.
13. Clique em “Enviar”.

### C2. Importação de Previsão Quantimed

Quantimed é um software desenvolvido para facilitar o processo de determinação das quantidades de medicamentos e insumos médicos necessários para um programa de saúde. O resultado da Quantimed são dados de consumo previsto dos programas de saúde. Esses dados de consumo previstos podem ser uma contribuição fundamental para os planos de abastecimento dos usuários do QAT. O QAT permite que os usuários importem previsões da Quantimed para o QAT para incluí-las em seu plano de fornecimento.

<div style={{textAlign: 'center'}}>

![Quantimed Sidebar](/img/media/image146.png)

</div>

**Etapa 1: Importar dados Quantimed para QAT**
1. Vá em “Dados do Plano de Fornecimento” no menu da barra lateral
2. Selecione “Importação Quantimada”
3. Importar arquivo de dados quantizados<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Choose the Quantimed .xml forecast file from your local computer system.</li>
       <li>Select the QAT program that you want the Quantimed data to import into.</li>
       <li>Click on “Import”.</li>

   </ol>
<div style={{textAlign: 'center'}}>

![Quantimed File Import](/img/media/image147.png)

*Figure 93: Quantimed File Import*

</div>

**Etapa 2: Mapear unidades de planejamento**
1. Para mapear um produto Quantimed para uma unidade de planejamento QAT, selecione a unidade de planejamento QAT usando o menu suspenso.
2. Caso não queira importar um produto específico da Quantimed, selecione a opção “Não importar” para essa linha.
3. Se não houver uma unidade de planejamento QAT associada ao produto Quantimed, o menu suspenso mostrará “Unidade de Planejamento Não Encontrada”. Você precisará selecionar manualmente uma unidade de planejamento no menu suspenso ou voltar ao programa e adicionar uma unidade de planejamento para esse produto Quantimed antes de continuar. Você não pode clicar em “Avançar” se uma ou mais células disser “Unidade de planejamento não encontrada”.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** to minimize instances where a planning unit is not found, it is recommended that Quantimed users select products from the GHSC-PSM product catalog .xml file.</li>
   </ol>
4. Assim que cada linha tiver uma unidade de planejamento selecionada ou disser “Não importar”, clique em “Avançar” na parte inferior da tela.

<div style={{textAlign: 'center'}}>

![Map Planning Units](/img/media/image148.png)

*Figure 94: Map Planning Units*

</div>

**Etapa 3: Região**
1. Nesta etapa selecione a região para a qual deseja importar os dados de consumo previsto. Se houver apenas uma região, você deverá selecioná-la para continuar.
2. Em seguida, insira a porcentagem dos dados de consumo que deseja importar para o QAT. Este percentual deverá variar de 0 a 100% e será aplicado a todas as unidades de planejamento previamente selecionadas.
3. Clique em “Avançar”.

**Etapa 4: Mês de Consumo**
1. Selecione o intervalo de datas dos dados Quantimed que você deseja importar para o QAT.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The period you select is the period of data that you will be able to import and will apply to all planning units previously selected.</li>
   </ol>
2. Clique em “Avançar”.

<div style={{textAlign: 'center'}}>

![Consumption Month Screen](/img/media/image149.png)

*Figure 95: Consumption Month Screen*

</div>

**Etapa 5: Importar dados**
1. A etapa final é confirmar os dados que serão importados do Quantimed para o QAT com base no que foi inserido nas etapas 1 a 4.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>“Quantimed Forecasted Consumption” is the amount that is being pulled in from Quantimed for the associated product and month-year.</li>
       <li>“Converted Quantimed Forecasted Consumption” is the amount that will be pulled into QAT for the associated product and month-year after applying the import percentage and conversion factor.</li>
       <li>“Current QAT Forecasted Consumption” is the forecasted consumption amount currently in QAT for that planning unit and month-year. Once you import the Quantimed data, this amount will be overwritten by the “Converted Quantimed Forecasted Consumption” amount.</li>
   </ol>
2. Esta tela mostrará todos os dados que serão importados para o QAT. Se você não quiser importar determinados registros, clique na caixa de seleção na coluna ‘Importar?’ na extrema direita. Isso impedirá que o QAT importe os dados da Quantimed e manterá o consumo atual previsto do QAT para aquela unidade de planejamento e mês-ano.
3. Clique em “Enviar” para importar os dados.

<div style={{textAlign: 'center'}}>

![Confirm Data Import Screen](/img/media/image150.png)

*Figure 96: Confirm Data Import Screen*

</div>

###C3. Importação de previsão QAT

**<u>Objetivo</u>:** Permitir que os usuários importem previsões criadas pelo QAT para programas de plano de fornecimento. As previsões só estarão disponíveis para importação se 1) forem carregadas como uma versão final e 2) houver uma previsão selecionada para cada unidade de planejamento.

**<u>Usando esta tela</u>:**

**(Etapa 1)**

- Selecione de qual programa de previsão importar (apenas as previsões finais estão disponíveis)
- Selecione para qual programa de plano de fornecimento importar. Somente versões de planos de fornecimento locais podem ser usadas. Para baixar um programa, vá para a tela ‘Baixar/Excluir Programa’ em ‘Gerenciamento de Programas’.
  - Selecione o intervalo de datas dos dados de previsão a serem importados, que deve estar dentro do período de previsão.
- Na tabela que aparece, selecione e mapeie as unidades de planejamento.
  - Para cada Unidade de Planejamento de Previsão, o QAT exige uma Unidade de Planejamento do Plano de Fornecimento correspondente e um fator de conversão. O QAT mapeia automaticamente as correspondências exatas da unidade de planejamento, mas os usuários podem substituir o mapeamento da unidade de planejamento e o fator de conversão.
  - Nem todas as unidades de planejamento de previsão precisam ser importadas; no entanto, todas as unidades de planejamento de previsão devem ter uma seleção na tabela de mapeamento. Você pode selecionar manualmente “Não importar” para cada PUs de previsão que não deseja importar ou clicar na caixa de seleção “Não importar todas as PUs não mapeadas”, o que permitirá uma seleção em massa de Não importar para todas as PUs não mapeadas.
  - Se para uma PU nenhuma previsão foi selecionada, ela aparecerá em cinza com “static.importintoSP.forecastBlank”
  - Se uma unidade de planejamento não aparecer no menu suspenso, você precisará adicioná-la ao programa do plano de fornecimento na tela ‘Atualizar Unidades de Planejamento’.

<div style={{textAlign: 'center'}}>

![Forecast Import Screen](/img/media/image151.png)

*Figure 97: Forecast Import Screen*

</div>

**(Etapa 2)**

Para cada região de previsão, insira quanto (%) da previsão daquela região você importará e para qual região o consumo previsto será importado. Abaixo estão alguns casos de uso:
- Previsão nacional para plano nacional de abastecimento

  | Região(ões) de previsão | % da previsão | Região do Plano de Abastecimento |
  | :--- | :--- | :--- |
  | Nacional | 100 | Nacional |

- Previsão multirregional para plano de fornecimento multirregional

  | Região(ões) de previsão | % da previsão | Região do Plano de Abastecimento |
  | :--- | :--- | :--- |
  | Norte | 100 | Norte |
  | Leste | 100 | Leste |
  | Sul | 100 | Sul |

- Previsão multirregional para plano de abastecimento nacional –

  | Região(ões) de previsão | % da previsão | Região do Plano de Abastecimento |
  | :--- | :--- | :--- |
  | Norte | 100 | Nacional |
  | Leste | 100 | Nacional |
  | Sul | 100 | Nacional |

- Previsão nacional para plano de abastecimento multirregional – observe que o processo de importação precisa ser repetido para cada região do plano de abastecimento.

  | Região(ões) de previsão | % da previsão | Região do Plano de Abastecimento |
  | :--- | :--- | :--- |
  | Nacional | 20 | Norte |

  <br />

  | Região(ões) de previsão | % da previsão | Região do Plano de Abastecimento |
  | :--- | :--- | :--- |
  | Nacional | 45 | Sul |

  <br />

  | Região(ões) de previsão | % da previsão | Região do Plano de Abastecimento |
  | :--- | :--- | :--- |
  | Nacional | 35 | Leste |

**(Etapa 3)**

O QAT listará cada registro de previsão a ser importado (uma linha para cada combinação de unidade de planejamento, região e mês).
- O QAT calcula o Consumo Previsto a importar da seguinte forma:

  _Consumo Previsto (Módulo de Previsão)_ &nbsp;&nbsp;x&nbsp;&nbsp; _% da Previsão_ &nbsp;&nbsp;x&nbsp;&nbsp; _Fator de Conversão (Previsão para Plano de Fornecimento)_ &nbsp;&nbsp;=&nbsp;&nbsp; _Arredondado* Consumo previsto convertido_

Por exemplo:
  - Uma previsão nacional que será dividida em duas regiões de 50% cada
  - A Unidade de Planejamento de Previsão está em pacotes de 3, e a Unidade de Planejamento do Plano de Fornecimento está em pacotes de 1 (fator de conversão = 3)
  - A previsão nacional para o Mês N foi de 100 (pacotes de 3)
  - Previsão de 100 x 50% x 3 = 150,00 arredondados (pacotes de 1) serão importados para cada região para o Mês N
- **\*Método de Arredondamento:** Como o Planejamento de Fornecimento do QAT requer números inteiros sem decimais, o QAT converte o consumo previsto em números inteiros arredondando para baixo e somando os “resíduos” ao longo do tempo. A cada mês, o QAT adiciona o total de resíduos do mês anterior e a previsão deste mês, antes de arredondar para baixo, e qualquer resíduo não arredondado para baixo é adicionado a um total residual corrente, denominado Total Cumulativo. Desta forma, as quantidades não são perdidas no processo de arredondamento.
  - Fórmulas:
    - **Total acumulado para o mês N** = (Residual para o mês N - 1) + Previsão convertida para o mês N
    - **Residual do Mês N** = Quanto foi perdido no arredondamento = (Total Acumulado do Mês N) – (Previsão Convertida Arredondada para o Mês N)
    - **Previsão convertida arredondada para o mês N** = Total acumulado para o mês N, arredondado para o número inteiro mais próximo
  - Por exemplo, prevê-se que uma previsão nacional consuma 0,25 pacotes da Unidade de Planeamento de Previsão por mês, durante 12 meses. A Unidade de Planejamento de Previsão e a Unidade de Planejamento do Plano de Fornecimento são iguais (fator de conversão = 1)
    - Em janeiro o Consumo Convertido é 0,25, e por ser o primeiro mês, 0,25 também é o Total Acumulado de Janeiro. 0,25 é arredondado para um número inteiro igual a 0, e o número arredondado de 0 é importado para o módulo de planejamento de fornecimento. O resíduo de janeiro do arredondamento é 0,25 – 0 = 0,25.
    - Em Fevereiro o Consumo Convertido é de 0,25, somado ao Residual de Janeiro de 0,25 perfaz o Total Acumulado de Fevereiro 0,25 + 0,25 = 0,5. Em seguida, 0,5 é arredondado para um número inteiro 0, que é importado para o módulo de planejamento de fornecimento. O resíduo de fevereiro do arredondamento é 0,5 – 0 = 0,5.
    - Em março o Consumo Convertido é de 0,25, somado ao Residual de Fevereiro de 0,5 perfaz o Total Acumulado de Março 0,25 + 0,5 = 0,75. Em seguida, 0,75 é arredondado para um número inteiro 0, que é importado para o módulo de planejamento de fornecimento. O resíduo de março do arredondamento é 0,75 – 0 = 0,75.
    - Em abril o Consumo Convertido é de 0,25, somado ao Residual de Março de 0,75 perfaz o Total Acumulado de Abril 0,25 + 0,75 = 1,00. Em seguida, 1,00 é arredondado para um número inteiro de 1,00, que é importado para o módulo de planejamento de fornecimento. O resíduo de abril do arredondamento é 1,00 – 1,00 = 0.
    - A partir de maio o ciclo se repete.

| | Janeiro | Fevereiro | Março | abril | Maio | junho | Julho | agosto | Setembro | Outubro | Novembro | dezembro |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Previsão convertida** <br /> _(após a aplicação do fator de conversão)_ | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 |
| _Total Acumulado_ | 0,25 | 0,5 | 0,75 | 1 | 0,25 | 0,5 | 0,75 | 1 | 0,25 | 0,5 | 0,75 | 1 |
| _Residual_ | 0,25 | 0,5 | 0,75 | 0 | 0,25 | 0,5 | 0,75 | 0 | 0,25 | 0,5 | 0,75 | 0 |
| **Previsão Convertida Arredondada** <br /> _(Para ser importado para o Módulo de Planejamento de Fornecimento)_ | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 |

- Caso exista um consumo previsto no plano de abastecimento, a célula ‘Consumo Atual Previsto’ ficará <mark style={{backgroundColor: 'yellow', padding: '0 4px', color: 'black'}}>destacada em amarelo</mark>.
- Se houver um consumo previsto existente no plano de abastecimento e os dados de consumo previsto que o usuário está tentando importar forem anteriores a 4 meses, a célula ‘Consumo Previsto Atual’ ficará <mark style={{backgroundColor: 'lightgray', padding: '0 4px', color: 'black'}}>destacada em cinza</mark> e NÃO será importada.
- Utilize a opção “Importar?” coluna para desmarcar quaisquer previsões que você NÃO deseja importar para o plano de fornecimento. Se marcada, o Consumo Previsto Convertido substituirá a previsão do Plano de Fornecimento. Se desmarcada, a previsão atual do Plano de Fornecimento permanecerá.

<div style={{textAlign: 'center'}}>

![QAT Forecast Import Screen](/img/media/image152.png)

*Figure 98: QAT Forecast Import Screen*

</div>