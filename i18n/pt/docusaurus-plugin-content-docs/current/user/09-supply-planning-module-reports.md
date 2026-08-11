---
id: supply-planning-module-reports
title: "6. Supply Planning Module: Reports"
sidebar_label: "   6. Supply Plan Reports"
sidebar_position: 7
---
# Seção 6. Módulo de Planejamento de Fornecimento: Relatórios

Os relatórios QAT permitem ao usuário extrair e visualizar seus dados de planejamento de fornecimento em gráficos, tabelas e outros formatos visuais. O usuário também poderá navegar, classificar, filtrar e visualizar os dados para necessidades específicas. Os relatórios QAT produzem visualizações e exibem dados de uma forma que pode apoiar a tomada de decisões.

Os relatórios são divididos em **Relatórios Globais** e **Relatórios Específicos do Programa**. Os relatórios específicos do programa são exibidos offline e online. Porém, os Relatórios Globais são mostrados apenas no modo online e estão disponíveis apenas para Usuários Globais, como o Administrador do Realm e o Administrador da Aplicação.

**Observação:** Todos os relatórios QAT podem ser exportados para um arquivo Excel CSV, bem como para o formato PDF. Além disso, todos os gráficos permitem que o usuário passe o mouse sobre um visual para obter uma dica de ferramenta com mais informações.

## A. **Lista de problemas de QAT**

**Objetivo:** Uma revisão do plano de fornecimento integrada ao QAT que permite uma verificação de qualidade para identificar facilmente dados/problemas problemáticos e corrigi-los antes de carregar um plano de fornecimento para o servidor como uma versão “rascunho” ou “final”.

- **Acessível para:** Administradores de Realm, Administradores de Programa e Usuários de Programa
- **Navegação:** Relatórios → Lista de problemas QAT

![Figure 120: QAT Problem List](/img/media/image198.png)
*Figura 120: Lista de problemas de QAT*

**Observação:** Apenas o problema associado aos programas que foram baixados pelo usuário em sua máquina local aparecerá na lista de problemas do QAT. Para obter detalhes sobre como baixar programas e versões específicas, consulte a seção [Baixar programa](./06-managing-programs-and-versions.md#b-downloaddelete) do Manual do usuário.

###A1. **Noções básicas da lista de problemas do QAT**
Cada problema sinalizado na lista de problemas do QAT terá uma linha separada. Terá a unidade de planeamento associada, uma descrição do problema, uma sugestão sobre como resolver o problema, o estado do problema, notas do utilizador, uma caixa de verificação para identificar se o problema foi revisto, as últimas notas do revisor (conforme aplicável), a data em que foi revisto pela última vez e a criticidade.

![Figure 121: Aspects QAT Problem List](/img/media/image199.png)
*Figura 121: Lista de Problemas de Aspectos QAT*

Os problemas de QAT podem ser subdivididos em quatro categorias principais: Qualidade de Dados, Cronograma de Aquisições, Planejamento de Fornecimento e Outros. Eles também são atribuídos a diferentes níveis de criticidade: Baixo (amarelo), Médio (laranja) e Alto (vermelho). A criticidade informa aos usuários até que ponto um problema afeta a qualidade do plano de abastecimento. No entanto, independentemente da criticidade, todos os problemas devem estar “Em conformidade” ou “Abordados” na Lista de Problemas do QAT para serem carregados como Versão Final. Existem cinco status principais associados aos problemas individuais na Lista de Problemas do QAT:

1. **Em conformidade** – O problema foi resolvido através da entrada de dados pelo usuário. O status será alterado automaticamente e nenhuma nota será necessária.

   Exemplo – *Uma unidade de planejamento não possui consumo real nos últimos 3 meses. Um usuário insere dados de consumo reais dos últimos 3 meses. QAT marca isso automaticamente como 'em conformidade'.*
2. **Resolvido** – O problema foi marcado manualmente pelo revisor como 'resolvido'. O revisor utiliza esse status se for improvável que esse problema seja corrigido por meio da entrada de dados e também não exija mais anotações no futuro. Somente um revisor pode marcar um problema como ‘resolvido’.

   Exemplo – *Uma unidade de planejamento é sinalizada por não seguir a previsão dinâmica. O usuário insere uma observação informando que esta unidade de planejamento não segue a previsão dinâmica, pois não é um produto sazonal. O revisor marca isso como resolvido porque a explicação provavelmente não mudará no futuro.*
3. **Endereçado** – O problema foi marcado manualmente pelo revisor ou pelo usuário como 'endereçado'. O usuário aplica esse status quando não consegue resolver o problema por meio da entrada de dados. Este status deve ser acompanhado de uma nota. O revisor utiliza esse status se o problema não puder ser resolvido neste período de revisão, mas será resolvido no futuro, provavelmente em alguns períodos, e não antes da próxima revisão.

Exemplo – *Uma unidade de planejamento que está sendo descontinuada tem apenas 8 meses de consumo previsto no futuro, em vez de 18. Isso é aceitável, pois é uma unidade de planejamento de descontinuação, mas o usuário ainda precisará desativar a unidade de planejamento quando ela for totalmente descontinuada, e é por isso que o problema é marcado como 'resolvido' em vez de 'resolvido'.*
4. **Aberto** – Este problema foi sinalizado automaticamente pelo QAT ou o problema foi marcado manualmente pelo revisor como ‘Aberto’. O revisor poderia usar esse status ao rejeitar um plano de fornecimento para indicar que as notas não foram aceitas.

   Exemplo – *Um usuário tem uma unidade de planejamento que não contém dados de consumo real nos últimos 3 meses. QAT sinalizará automaticamente isso como 'Aberto'. Se o problema tiver sido 'Resolvido' quando carregado e aprovado, o problema voltará ao status 'Aberto' no próximo envio.*
5. **Revisado** – O problema foi revisado pelo revisor do plano de fornecimento. Este campo só pode ser editado pelo revisor do plano de fornecimento.

###A2. **Encerrando e resolvendo problemas**

1. **Fechando um problema por meio de entrada de dados:** para alterar um problema ‘Aberto’ para um que esteja ‘Em conformidade’, o usuário precisará completar a sugestão fornecida na coluna “Sugestão” para o problema específico. Por exemplo, a sugestão pode ser “fornecer o consumo real” para meses específicos. Assim, o usuário precisará:

   ![Figure 122: Closing a Problem Example](/img/media/image200.png)
   *Figura 122: Exemplo de Fechamento de um Problema*

   <ol style={{listStyleType: 'lower-alpha'}}>
     <li>Navigate to the Consumption Data Entry screen by either clicking directly on the Problem (which will open a new QAT window) or by clicking on Supply Plan Data → Consumption Data.</li>
     <li>From the consumption data entry screen, the user will add actual consumption for the requested months. For instructions on how to add consumption, please refer to <a href="./07-supply-planning-module-program-data.md#consumption-data">Consumption Data</a>.</li>
     <li>Navigate back to the QAT Problem List and click Recalculate to refresh the QAT Problem List to include the most recent addition of actual consumption data. The previously flagged problem should now be “In-compliance” and no longer be flagged by the QAT Problem List.</li>
   </ol>

   ![Figure 123: QAT Problem List Recalculate/Refresh](/img/media/image201.png)
   *Figura 123: Recalcular/Atualizar lista de problemas de QAT*

2. **Resolver um problema com um comentário:** Se um problema que foi sinalizado na lista de problemas do QAT não puder ser corrigido e tornado 'Em conformidade' por meio da entrada de dados conforme recomendado na coluna "Sugestão", um usuário poderá fornecer um comentário e alterar manualmente o status para "Abordado". Por exemplo, uma unidade de planejamento pode estar com excesso/falta de estoque e é apresentada a sugestão de “reavaliar o plano de fornecimento para atender aos parâmetros mínimo/máximo”. Se um usuário não conseguir resolver esse problema por meio da entrada de dados, ele precisará resolver o problema:
   <ol style={{listStyleType: 'lower-alpha'}}>
     <li>Double-click on the Problem Status dropdown for that problem and choose "Addressed." Users must provide an explanatory note in the Notes column for all problems marked as "Addressed."</li>
   </ol>

   ![Figure 124: Addressing a Problem & Adding a Note](/img/media/image202.png)
   *Figura 124: Resolvendo um problema e adicionando uma nota*

   **Observação:** o usuário também pode visualizar na tela "Detalhes da Transação do Problema" clicando com o botão direito no Problema. Esta área mostrará ao usuário notas anteriores, revisores, datas revisadas, etc.

   ![Figure 125: Problem Transaction Right Click](/img/media/image203.png)
   *Figura 125: Clique com o botão direito na transação problemática*

   ![Figure 126: Problem Transaction Details](/img/media/image204.png)
   *Figura 126: Detalhes da transação problemática*

   <ol style={{listStyleType: 'lower-alpha'}} start="2">
     <li>Click "Update." The QAT Problem List will now include the most recent addition of explanatory notes and the status.</li>
   </ol>

###A3. **Lista de problemas do QAT: explicação dos problemas**

- **Insumos de consumo real recentes ausentes (nos últimos 3 meses)**
  Se uma unidade de planejamento não tiver entradas recentes de dados de consumo real nos últimos três meses, ela será sinalizada na Lista de Problemas do QAT. Se as entradas forem preenchidas para algum destes últimos três meses, seja um mês ou todos os três meses, o problema não será sinalizado pelo sistema.

- **Quaisquer lacunas nos últimos 6 meses (consumo real)**
  O QAT verifica se uma unidade de planejamento está faltando um mês ou vários meses de entradas de consumo real recentes entre duas entradas de consumo real no intervalo de 6 meses especificado. Este problema procura lacunas acidentais nos insumos de consumo reais. Se houver alguma lacuna nos dados de consumo real nos últimos 6 meses, a Lista de Problemas do QAT sinalizará isso como um problema. Por exemplo, um usuário insere o consumo real para setembro de 2022, dezembro de 2022 e janeiro de 2023. Isso será sinalizado pela lista de problemas QAT porque há uma lacuna de insumos de consumo real ausentes para outubro de 2022 e novembro de 2022.

- **Inserções de inventário recentes ausentes (nos últimos 3 meses)**
  Se uma unidade de planejamento estiver faltando entradas de dados de inventário reais recentes nos últimos três meses, ela será sinalizada na Lista de Problemas de QAT. Se as entradas forem preenchidas para algum destes últimos três meses, seja um mês ou todos os três meses, o problema não será sinalizado pelo sistema.

- **Plano de Fornecimento sem previsão de consumo para os próximos 18 meses**
  Se uma unidade de planejamento estiver faltando os insumos de consumo previstos para um ou mais meses por um período de 18 meses a partir do mês atual, o QAT sinalizará isso como um problema. A QAT verificará se há lacunas para garantir que todos os futuros 18 meses tenham valores de consumo previstos.

  **Observação:** *Se houver uma unidade de planejamento em fase de desativação, é recomendável que o usuário coloque zero como o consumo previsto, até que seja totalmente descontinuada, momento em que a unidade de planejamento precisará ser desativada.*

- **Envios com datas de recebimento anteriores**
  A QAT verificará as datas de recebimento de todas as remessas para ver se alguma delas está no passado com base na data atual. Se a data de recebimento de uma remessa estiver no passado, ela será sinalizada na Lista de Problemas do QAT. Por exemplo, há uma unidade de planejamento com data de recebimento de 31 de dezembro<sup>st</sup> de 2022. Como essa data está no passado, o QAT irá sinalizá-la e o usuário precisará alterar o status da remessa para “Recebido” ou alterar a data de recebimento para uma data futura.

  **Observação:** *há um tempo de reserva de quatorze dias para que o QAT reconheça que a data de recebimento da remessa está no passado e para que o problema seja sinalizado.*

- **Remessas que deveriam ter sido enviadas até a data prevista**
  A QAT verificará as datas estimadas de envio, que são calculadas com base nos prazos de entrega predefinidos do Programa, para ver se há alguma remessa com uma data estimada de “Enviado” no passado. Se a data estimada de envio da remessa estiver no passado, ela será sinalizada na Lista de Problemas do QAT. Por exemplo, há uma unidade de planejamento com uma data de envio prevista de 15 de janeiro<sup></sup> de 2023. Como essa data está no passado, o QAT irá sinalizá-la e o usuário precisará alterar o status da remessa para “Enviado” ou alterar a data de recebimento para uma data mais futura. Alterar a data de recebimento para outra no futuro fará com que o QAT recalcule automaticamente as datas previstas de envio. Se não for possível alterar o status ou a data de recebimento, um usuário pode ‘resolver’ o problema (consulte [Encerramento e resolução de problemas](#a2-fechamento e resolução de problemas)).

  **Observação:** *Há um tempo de reserva de quatorze dias para que o QAT reconheça que a data de envio da remessa está no passado e para que o problema seja sinalizado.*

- **A previsão dinâmica não é usada (para grupos de produtos Malária, ARV, CMMV)**
  Para quaisquer produtos que pertençam às seguintes categorias de rastreadores: Malária, ARV ou VMMC, o QAT verificará a previsão dinâmica. O GHSC-PSM incentiva a previsão com valores mensais dinâmicos, a fim de mostrar que fatores como sazonalidade, expansão do programa ou campanhas foram levados em consideração. Se uma unidade de planejamento de um desses três grupos de mercadorias tiver quatro meses consecutivos com consumo estático, ela será sinalizada na Lista de Problemas do QAT.

- **Plano de Fornecimento não segue parâmetros mínimo/máximo**
  Se uma unidade de planejamento estiver com estoque excessivo, insuficiente ou esgotado em qualquer momento durante os próximos 18 meses, ela será sinalizada na Lista de Problemas do QAT. O QAT contará o número de meses em que a unidade de planejamento está com excesso ou falta de estoque, subdividindo-a em duas janelas de tempo diferentes: os meses dentro do prazo de entrega (1-6 meses) e aqueles dentro da janela de planejamento (7-18 meses). A Lista de Problemas QAT também indicará o número de remessas recebidas nos próximos 1 a 6 meses e nos próximos 7 a 18 meses. As rupturas de estoque serão sinalizadas como um problema separado na Lista de Problemas do QAT. O QAT indicará diretamente quais meses estão em falta nos períodos subdivididos de 1 a 6 meses e 7 a 18 meses. A Lista de Problemas QAT também indicará o número de remessas recebidas nos próximos 1 a 6 meses e nos próximos 7 a 18 meses.

**Plano por MOS:** O excesso de estoque é definido por MOS &gt; MOS máximo. O estoque insuficiente é definido por MOS &lt; MOS mínimo. Veja abaixo um exemplo de problema e o gráfico do plano de fornecimento que o acompanha:

  <div style={{border: '1.5px solid #000', padding: '15px', margin: '20px auto', maxWidth: '500px', backgroundColor: '#ffffff', textAlign: 'center', color: '#000'}}>
    <p style={{fontWeight: 'bold', fontSize: '1.15em', margin: '0 0 10px 0'}}>Flagged in Feb 2021</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 1-6 months (Mar 21 - Aug 21), inventory is...</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 5px 0'}}>understocked for 2 month(s)</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 10px 0'}}>overstocked for 1 month(s)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 7-18 months (Sep 21 - Aug 22), inventory is...</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 5px 0'}}>understocked for 0 month(s)</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 15px 0'}}>overstocked for 3 month(s)</p>
    <br/>
    <p style={{margin: '0', fontStyle: 'italic'}}><b>Note:</b> There are 2 shipment(s) in the next 1-6 months, and<br/>there are 3 shipment(s) in the next 7-18 months.</p>
  </div>

  ![Figure 127: Supply Plan does not follow min/max MOS parameter example](/img/media/image205.png)
  *Figura 127: O plano de fornecimento não segue o exemplo do parâmetro MOS mín/máx*

  **Observação:** *Se o valor MOS para um determinado mês for “N/A”, então todas essas instâncias serão excluídas ao calcular os problemas de excesso de estoque, falta de estoque ou falta de estoque.*

  **Exemplo de planejamento por quantidade:** O excesso de estoque é definido pela Quantidade de saldo final &gt; Quantidade máxima. A falta de estoque é definida pela Quantidade de saldo final &lt; Quantidade mínima. Observe que o QAT só sinalizará o excesso de estoque se esse excesso de estoque ocorrer mais do que o prazo de distribuição consecutivo (por exemplo, se o prazo de entrega for de 2 meses, o QAT sinalizará se houver excesso de estoque por mais de 2 meses consecutivos - mas não sinalizará o problema se houver excesso de estoque a cada dois meses). Veja abaixo um exemplo de problema e o gráfico do plano de fornecimento que o acompanha:

  <div style={{border: '1.5px solid #000', padding: '15px', margin: '20px auto', maxWidth: '550px', backgroundColor: '#ffffff', textAlign: 'center', color: '#000'}}>
    <p style={{fontWeight: 'bold', fontSize: '1.15em', margin: '0 0 10px 0'}}>Flagged in Feb 2021 (Distribution lead time is 1 month)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 1-6 months (Mar-23 to Aug-23), inventory is...</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>* over the max stock qty + distribution lead time for 1 month(s)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 15px 0'}}>* under the min stock qty for 0 month(s)</p>
    <br/>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 7-18 months (Sep-23 to Aug-24), inventory is...</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>* over the max stock qty + distribution lead time for 6 month(s)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 0 0'}}>* under the min stock qty for 0 month(s)</p>
  </div>

  ![Figure 128: Supply Plan does not follow min/max quantity parameter example](/img/media/image206.png)
  *Figura 128: Plano de fornecimento não segue exemplo de parâmetro de quantidade mínima/máxima*

- **Outros – Manual**
  Estas são perguntas ou esclarecimentos específicos inseridos manualmente pelo revisor do plano de fornecimento que não são sinalizados automaticamente pelo QAT. Esses problemas podem ser itens que o revisor do plano de fornecimento deseja resolver naquele trimestre antes de finalizar ou um lembrete para o próximo envio trimestral. A descrição do problema, a sugestão e a criticidade são determinadas pelo revisor do plano de fornecimento.

## B. Catálogo de Programas

**Objetivo:** visualizar uma lista padronizada de todas as unidades de planejamento e unidades de previsão em um programa QAT e seus atributos correspondentes.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa
- **Navegação:** Relatórios ➔ Catálogo de Programas
- **Observações:** Um usuário pode selecionar todas as categorias de unidades de planejamento e categorias de rastreador ou pode escolher uma categoria específica para visualização. Se um usuário quiser adicionar uma unidade de planejamento que não aparece no Relatório do Catálogo de Programas, consulte [Tickets para adicionar/atualizar usuários e dados mestres](./05-getting-started.md#i1-tickets-for-addingupdating-users-and-master-data).

![Figure 129: Program Catalog Report](/img/media/image207.png)
*Figura 129: Relatório do Catálogo de Programas*

## C. Relatórios de status de estoque

### C1. Status do estoque ao longo do tempo
**Objetivo:** comparar um ou mais produtos e seus níveis de estoque em um período.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa
- **Navegação:** Relatórios ➔ Status do estoque ➔ Status do estoque ao longo do tempo
- **Observações:** A Unidade de Planejamento pode ser única, de seleção múltipla ou selecionar todas. A opção “Selecionar tudo” pode não ser vantajosa se o programa tiver muitas unidades de planejamento, pois o gráfico não será capaz de definir as linhas individuais do gráfico. Sugerimos escolher menos de dez produtos de uma só vez. Especificamente, este relatório pode ser útil para comparar categorias.

![Figure 130: Stock Status Over Time Report](/img/media/image208.png)
*Figura 130: Relatório de status do estoque ao longo do tempo*

### C2. Matriz de status de estoque
**Objetivo:** fornecer um resumo rápido dos meses de estoque ao longo do tempo em um formato de tabela de fácil leitura.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa
- **Navegação:** Relatórios ➔ Status do estoque ➔ Matriz de status do estoque
- **Notas:**
  - Uma linha é mostrada para cada combinação de unidade de planejamento e ano, com base no que está selecionado nos filtros superiores.
  - O QAT exibirá o MOS ou quantidade para cada unidade de planejamento com base no fato de o produto ser planejado por quantidade ou MOS, conforme selecionado na tela Atualizar Unidades de Planejamento (consulte a Seção 4.A2).
  - As cores correspondem aos níveis de stock durante esse mês específico:
    - Vermelho – Estocado
    - Laranja – Pouco Estocado
    - Verde – Abastecido de acordo com o plano
    - Amarelo – Excesso de estoque
    - Cinza – N/A (QAT não consegue calcular o valor devido a dados faltantes)
  - Embora os CSVs não exportem as cores formatadas condicionalmente, o PDF contém as cores e os usuários podem copiar e colar a tabela para manter todas as cores e formatação.

![Figure 131: Stock Status Snapshot Report](/img/media/image209.png)
*Figura 131: Relatório instantâneo do status do estoque*

###C3. Instantâneo do status do estoque
**Objetivo:** fornecer uma visão de alto nível do status do estoque de um programa em todas as unidades de planejamento em um único momento (um mês).

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa
- **Navegação:** Relatórios ➔ Status do estoque ➔ Instantâneo do status do estoque
- **Notas:**
  - As diversas cores correspondem aos níveis de stock durante esse mês específico:
    - Vermelho – Estocado
    - Laranja – Pouco Estocado
    - Verde – Abastecido de acordo com o plano
    - Amarelo – Excesso de estoque
    - Cinza – N/A (QAT não consegue calcular o valor devido a dados faltantes)
  - Embora o PDF e o CSV não exportem as cores formatadas condicionalmente, os usuários podem copiar e colar a tabela para manter todas as cores e formatação.

![Figure 132: Stock Status Snapshot Report](/img/media/image210.png)
*Figura 132: Relatório instantâneo do status do estoque*

###C4. Instantâneo do status do estoque (global)
**Objetivo:** fornecer uma visão de alto nível do status do estoque de um programa em todas as unidades de planejamento em um único momento (um mês) para vários programas.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Usuários de Programa e Visualizadores de Relatórios
- **Navegação:** Relatórios ➔ Status do estoque ➔ Instantâneo do status do estoque (global)
- **Notas:**
  - As diversas cores correspondem aos níveis de stock durante esse mês específico:
    - Vermelho – Estocado
    - Laranja – Pouco Estocado
    - Verde – Abastecido de acordo com o plano
    - Amarelo – Excesso de estoque
  - Embora o PDF e o CSV não exportem as cores formatadas condicionalmente, os usuários podem copiar e colar a tabela para manter todas as cores e formatação.

![Figure 133: Stock Status Snapshot (Global) Report](/img/media/image211.png)
*Figura 133: Relatório instantâneo do status do estoque (global)*

## D. Relatórios de Consumo

###DI. Consumo (Global)
**Objetivo:** mostrar visualmente o consumo de uma unidade de planejamento ou de diversas unidades de planejamento entre países.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Usuários de Programa e Visualizadores de Relatórios
- **Navegação:** Relatórios ➔ Relatórios de Consumo ➔ Consumo (Global)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The various colors stacked in the horizontal bars represent different countries. Users can determine which country by referencing the graph legend.</li><li>The x-axis corresponds to the consumption quantity (in millions) for each country.</li></ul></li></ul>

### D2. Erro de previsão (mensal)
**Objetivo:** mostrar visualmente a precisão da previsão usando o método de erro percentual médio ponderado (WAPE), ao longo do tempo, ao mesmo tempo em que compara o consumo previsto com o consumo real.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa
- **Navegação:** Relatórios ➔ Relatórios de Consumo ➔ Erro de Previsão (Mensal)

![Figure 135: Forecast Error (Monthly) Report](/img/media/image213.png)
*Figura 135: Relatório de erros de previsão (mensal)*

<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>In the graph, the red vertical bars represent the actual consumption, the blue vertical bars represents the forecasted consumption, the green line (which uses the right axis), represents the forecast error, and the turquoise dotted line represents the forecast error threshold (see Figure 115: Forecast Error (Monthly) Report).</li><li>The forecast error threshold (%) per planning unit is set by the Program Admin in the Update Planning Units screen. If a forecast error is above the set forecast error threshold (%), it will appear in red text in the data table.</li><li>The Report View can be viewed in multiple ways:<ul style={{listStyleType: 'square'}}><li><strong>Forecasting unit.</strong> A user may want to choose forecasting unit when comparing in base units, such as with medicines that have different bottle sizes (planning units) sharing the same forecasting unit (e.g. the antiretroviral TLD30 vs TLD90 - See Figure 116.)</li><li><strong>Equivalency Unit:</strong> A user may want to choose forecasting unit when comparing products with different forecasting units, but some programmatic link (e.g. malaria treatments AL 6x1 vs 6x2 – see Figure 117.)</li><li><strong>“Show consumption adjusted for stock out?”:</strong> If this checkbox is checked, QAT uses the adjusted actual consumption instead of the actual consumption. QAT calculates the total days in the month based on the calendar.</li></ul></li><li>Missing Data:<ul style={{listStyleType: 'circle'}}><li>If data is missing for either forecasted or actual consumption, there will be a missing segment of the line or a missing bar in the graph</li><li>If there is missing data for actual or forecasted consumption, it will not be possible to calculate the forecast error and the user may see a gap in the line graph</li></ul></li><li><strong>Formula:</strong> Forecast Error uses the Weighted Average Percent Error (WAPE) formula. The example below uses the time windows of 6 months.<ul style={{listStyleType: 'square'}}><li><strong>Time Window:</strong> For non-seasonal products with predictable consumption pattern, use a short time window, but consider using a longer time window for those products with a more variable consumption or those with seasonality (use a time window at least long enough to consider the entire season).</li><li>For more details on the logic QAT uses to calculate this report, see the “Show Formulae” in the tool.</li></ul></li></ul></li></ul>

![Figure 136: WAPE Formula with 6-month time window as example](/img/media/image214.png)

*Figura 136: Fórmula WAPE com janela de tempo de 6 meses como exemplo*

![Figure 137: Forecast Error (Monthly) Report – displayed by forecasting unit](/img/media/image215.png)
*Figura 137: Relatório de erros de previsão (mensal) – exibido por unidade de previsão*

![Figure 138: Forecast Error (Monthly) Report – displayed by equivalency unit](/img/media/image216.png)
*Figura 138: Relatório de Erros de Previsão (Mensal) – exibido por unidade de equivalência*

###D3. Erro de previsão (por unidade de planejamento)
**Objetivo:** avaliar a precisão das previsões para produtos selecionados durante um mês específico em países e programas.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Visualizadores de Relatórios e Usuários de Programa
- **Navegação:** Relatórios ➔ Relatórios de Consumo ➔ Erro de Previsão (por Unidade de Planejamento)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>For the time window, non-seasonal products with predictable consumption pattern can have a short time window, but those that have a more variable consumption/those with seasons should have a long-time window, or at least long enough to consider the entire season.</li><li>In the table, the forecast error percentages that are above the forecast error threshold (%), set by a Program Admin in the Update Planning Units screen, will be highlighted red</li><li>If there is missing data for actual or forecasted consumption, it will not be possible to calculate the forecast error and the user will see an error message in the table.</li><li>Forecast Error uses the Weighted Average Percent Error (WAPE) formula:</li></ul></li></ul>

![Figure 139: WAPE Formula](/img/media/image217.png)

*Figura 139: Fórmula WAPE*

![Figure 140: Forecast Error (by Planning Unit) Report](/img/media/image218.png)
*Figura 140: Relatório de erros de previsão (por unidade de planejamento)*

## E. Relatórios de Remessa

### EI. Remessa (Global)
**Objetivo:** agregar quantidades de compras por fonte de financiamento, agente de compras e tipo de agente de compras em todos os países e programas.

- **Acessível para:** Administradores de Realm, Administradores de Programa, Usuários de Programa e Visualizadores de Relatórios
- **Navegação:** Relatórios ➔ Relatórios de Remessas ➔ Remessas (Global)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The two graphs that appear first in the Shipments (Global) Report depict the aggregated quantity of shipments per country and cost of the shipments (in USD) per funding source for a single planning unit. For a tabular view of the data, the user may find details in the bottom two tables.</li><li>If a country does not procure the selected planning unit, it will not appear in the graph of the tables in the report.</li></ul></li></ul>

![Figure 141: Shipment (Global) Report](/img/media/image219.png)
*Figura 141: Relatório de Remessa (Global)*

###E2. Visão geral da remessa
**Objetivo:** agregar quantidades de compras por fonte de financiamento ou por tipo de agente de compras em todos os países e programas.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins/Users, and Report Viewers</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Overview</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Once navigating to the Shipment Overview screen, Users will see dropdowns in which they must fill out to show specific data. Once selecting certain dropdowns or all, users are shown a graph and a pie chart. The graph that appears first in the Shipments Overview Report depicts the aggregated quantity of shipments across countries and cost (in USD) of the shipments per funding source across planning units. The pie chart shows percentages of Funding Source depending on user selections while also being able to hover over to see the total amount (in USD). Users may also choose to group the data by Procurement Agent Type or Funding Source Type. For a tabular view of the data, the user may find details in the bottom table.</li></ul></li></ul>

![Figure 142: Shipment Overview Report](/img/media/image220.png)
*Figura 142: Relatório de Visão Geral da Remessa*

###E3. Detalhes da remessa
**Objetivo:** fornecer uma visão abrangente de todas as remessas de um programa.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Details</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The top graphs shows total USD per month by shipment status</li><li>There are two tables below the graph: the first one provides a summary and the second one provides detailed information on shipments.<ul style={{listStyleType: 'square'}}><li>The summary table shows the total number of shipments, and total costs per funding source, for the selected time period.</li><li>The detailed table contains the shipments disaggregated by planning unit, etc.</li></ul></li></ul></li></ul>

![Figure 143: Shipment Details Report](/img/media/image221.png)
*Figura 143: Relatório de Detalhes da Remessa*

###E4. Detalhes do custo de envio
**Objetivo:** fornecer uma visão simples de todas as remessas de um programa e seus custos totais.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Cost Details</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Can be displayed by funding source, procurement agent, or planning unit.</li></ul></li></ul>

![Figure 144: Shipment Cost Details Report](/img/media/image222.png)
*Figura 144: Relatório de detalhes de custos de remessa*

###E5. Visão geral dos custos de envio
**Objetivo:** fornecer uma visão geral dos custos totais de remessa por ano civil para uma unidade de programa e planejamento, por fonte de financiamento.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Cost Overview</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report can be viewed in PDF or Excel (CSV) format</li><li>This report can be based on either the shipment receive date, or the shipment submitted date</li></ul></li></ul>

![Figure 145: Shipment Cost Overview Report](/img/media/image223.png)
*Figura 145: Relatório de Visão Geral dos Custos de Remessa*

### E6. Orçamento
**Objetivo:** mostrar os diferentes orçamentos atribuídos a um(s) programa(s), os valores alocados para remessas, o valor gasto a mais (se aplicável) e os valores restantes estimados. A lista suspensa de programas neste relatório é de seleção múltipla, pois vários programas podem compartilhar o mesmo orçamento.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Budget</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The graph shows every predefined Budget in a program and whether it is allocated to shipments (planned or ordered) and the remaining amount.</li><li>The tabular view of the graph also provides information on the funding source for each budget, start and end date, and other detailed information.</li></ul></li></ul>

![Figure 146: Budget Report](/img/media/image224.png)
*Figura 146: Relatório Orçamentário*

###E7. Prazo de entrega do agente de compras
**Objetivo:** mostrar os prazos de entrega detalhados (em meses) para todas as unidades de planejamento, por agente de compras.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Procurement Agent Lead Time</li></ul>

![Figure 147: Procurement Agent Lead Time Report](/img/media/image225.png)
*Figura 147: Relatório de prazo de entrega do agente de compras*

## F. Relatórios de inventário

###F1. Expirações
**Objetivo:** fornecer aos planejadores quantidades estimadas de unidades de planejamento que expirarão no futuro com base no lote/prazo de validade

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Expiries</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report pulls from data previously entered by including batch information on shipments, inventory, and actual consumption, and shelf life per planning unit. It displays the batch numbers, the receive date of the batch, shelf life of that batch (or planning unit), expiry date, and cost of the expired product.</li><li>The report can include quantities in planned shipments expected to arrive and expiry during the selected timeframe.</li><li>It will calculate (based on shelf life, stock projections, and forecast consumption) how much of a particular batch is expected to expire and when.<ul style={{listStyleType: 'square'}}><li>For the expiry calculation, refer to <a href="./14-annex-2-business-rules.md">Annex 2: Business Rules</a>.</li></ul></li><li>The report will calculate a cost of expired product, based on the quantity expired and the planning unit default price set by the user in the Update Planning Units screen.</li><li>The table is interactive. When the user clicks on the expired quantity, QAT will open a pop up with the batch ledger.</li></ul></li></ul>

![Figure 148: Expiries Report](/img/media/image226.png)
*Figura 148: Relatório de Vencimentos*

### F2. Custo do estoque
**Objetivo:** para um mês selecionado, fornece um custo estimado de estoque com base no estoque disponível real ou projetado e no preço de catálogo da unidade de planejamento.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Cost of Inventory</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The report can include quantities in planned shipments expected to arrive during the selected timeframe.</li><li>The stock column could be based on an actual inventory or projected ending balance.</li><li>This report uses the following formula:</li></ul></li></ul>

![Figure 149: Cost of Inventory Formula](/img/media/image227.png)

*Figura 149: Fórmula de custo de estoque*

![Figure 150: Cost of Inventory Report](/img/media/image228.png)
*Figura 150: Relatório de custo de estoque*

###F3. Giros de estoque
**Objetivo:** mostrar o número de giros de estoque por unidade de planejamento, programa, país ou categoria de unidade de planejamento em um determinado momento. O giro de estoque é uma forma de medir a velocidade dos planos de abastecimento. O giro de estoque é uma métrica chave de desempenho frequentemente usada para sinalizar a eficácia do gerenciamento da cadeia de suprimentos. Geralmente é uma métrica retrospectiva, mas como o QAT usa dados de previsão para estimar as projeções de estoque no futuro, o relatório também pode ser usado para visualizar giros de estoque estimados com base nos planos. Geralmente, rotações mais elevadas significam uma cadeia de abastecimento mais saudável – os produtos estão a mover-se a jusante e a ser substituídos por produtos frescos com mais frequência. O baixo volume de negócios implica baixo consumo, possivelmente excesso de inventário – podendo indicar, por exemplo, que as metas do programa são demasiado ambiciosas.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Inventory Turns</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report calculates inventory turns at various levels: at the individual planning unit level, at an aggregate level for an entire program (multiple planning units), and at an aggregate level for an entire country (multiple programs), or commodity category.</li><li><strong>Planned Inventory turns:</strong> Are the possible months of stock for each month over 12 months if the inventory rules worked perfectly considering the Planning Unit’s MIN and Reorder Interval.<ul style={{listStyleType: 'square'}}><li>At the planning unit level, the report utilizes the MIN and Reorder Interval from Planning Unit Settings to calculate the “Planned” inventory turns.</li><li>At the program level (multiple planning units) QAT utilizes the mode of all planned inventory turns of all Planning units under a specific program.</li><li>At the country and/or Planning Unit Category level QAT utilizes the mode of all planned inventory turns of all Planning units under a specific country / PU Category.</li></ul></li><li><strong>Actual inventory turns:</strong><ul style={{listStyleType: 'square'}}><li>At the planning unit level, QAT uses the following formula for each planning unit to calculate the actual inventory turns:</li></ul></li></ul></li></ul>

![Figure 151: Inventory Turns Formula at the planning unit level](/img/media/image229.png)

*Figura 151: Fórmula de giro de estoque no nível da unidade de planejamento*

<ul><li style={{listStyleType: 'none'}}><ul style={{listStyleType: 'circle'}}><li style={{listStyleType: 'none'}}><ul style={{listStyleType: 'square'}}><li>For each planning unit, the report compares the actual and planned turns, and calculates the MAPE and MSE.</li><li>To calculate the actual inventory turns at the program level, QAT will look for the mode across all planning units in that program. If no mode can be found, QAT will use the average from all planning units as that program’s actual inventory turns.</li><li>To calculate the actual inventory turns at the country (or commodity category) level, QAT will look for the mode across all programs. If no mode can be found, QAT will use the average.</li></ul></li></ul></li></ul>

![Figure 152: Inventory Turns Report](/img/media/image230.png)
*Figura 152: Relatório de giro de estoque*

### F4. Ajuste de estoque
**Objetivo:** mostrar uma lista de todos os ajustes de estoque inseridos manualmente em um programa. *Observação: os ajustes calculados automaticamente não serão exibidos neste relatório.*

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Stock Adjustment</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Automatically calculated adjustments (as a result of a difference between projected ending balance and an inventory count) do not appear in this report.</li></ul></li></ul>

![Figure 153: Stock Adjustment Report](/img/media/image231.png)
*Figura 153: Relatório de ajuste de estoque*

###F5. Capacidade do Armazém (por Programa)
**Objetivo:** exibe o volume (em metros cúbicos) de todas as regiões de um país (se um usuário inserir essas informações ao configurar um programa).

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Warehouse Capacity (by Program)</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report is most useful for those countries with multiple regions.</li></ul></li></ul>

![Figure 154: Warehouse Capacity (by Program)](/img/media/image232.png)
*Figura 154: Capacidade do Armazém (por Programa)*

### F6. Capacidade do armazém (por país)
**Objetivo:** exibe o volume (em metros cúbicos) de todos os países e regiões de um país (é necessário acesso em nível de reino).

<ul><li><strong>Accessible to:</strong> Realm Admins and Report Viewers</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Warehouse Capacity (by Country)</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report is most useful for those countries with multiple regions.</li></ul></li></ul>

![Figure 155: Warehouse Capacity (by Country)](/img/media/image233.png)
*Figura 155: Capacidade do Armazém (por País)*