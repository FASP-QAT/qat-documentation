---
id: supply-planning-module-supply-planning
title: "5. Supply Planning Module: Supply Planning"
sidebar_label: "   5. Supply Planning"
sidebar_position: 6
---
* <u>Quem?</u> **Administradores de Realm**, **Administradores de Programa**, **Revisores do Plano de Fornecimento** e **Usuários do Programa** podem adicionar/editar dados no plano de fornecimento. Certas funções “somente visualização” podem visualizar o plano de fornecimento.
* <u>Quando?</u> A qualquer momento. O usuário não precisa estar online. No entanto, eles devem ter baixado um programa em seu computador local enquanto estavam online antes de começar.
* <u>Como?</u>
  
  **Observação:** além da etapa 1 ser obrigatória, as demais etapas não são sequenciais, mas sim uma explicação das funcionalidades disponíveis na tela de planejamento de abastecimento.
  
  <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '15px' }}>
    <li style={{ marginBottom: '20px' }}>
      On the left menu bar, go to Supply Planning &gt; “Supply Planning”
      <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
        <li style={{ marginBottom: '10px' }}>Select the desired <b>Program</b>. The drop-down list in the supply plan screen will show all the programs that have been downloaded by the user. Refer to <a href="./06-managing-programs-and-versions.md#b-downloaddelete">Download Program</a> for details on how to download a program.</li>
        <li style={{ marginBottom: '10px' }}>Select the desired <b>QAT Planning Unit</b> or <b>Alternate Reporting Unit (ARU)</b>.</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image156.png').default} alt="QAT Planning Unit / Alternate Reporting Unit Selectors" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      A tela exibe duas abas Plano de Fornecimento: <b>Plano de Fornecimento Local</b> e <b>Plano de Fornecimento de Servidor - VX</b>. A aba “Plano de Abastecimento Local” é a versão local que foi selecionada em “programa” e está disponível para edição. O “Plano de Fornecimento do Servidor” é a última versão disponível no servidor e está disponível apenas para visualização (não editável).
      <br /><br />
      <img src={require('@site/static/img/media/image157.png').default} alt="Local/Server Supply Plan Tabs" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      Por padrão, são mostrados os últimos 3 meses e os 15 meses futuros a partir da data atual. Use <b>Rolar para a esquerda/direita</b> para mostrar dados de 3 meses no passado/futuro
      <br /><br />
      <img src={require('@site/static/img/media/image158.png').default} alt="Scroll to left / right bar" />
      <br /><br />
      Clique em “Mostrar Fórmulas” no canto superior direito da tela para obter explicações sobre os cálculos nesta tela.
      <br /><br />
      <img src={require('@site/static/img/media/image159.png').default} alt="Show Formulae button" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      Clique no PDF &amp; Ícones CSV para exportar este relatório e incluirão todas as unidades de planejamento do programa. No PDF será incluído apenas o gráfico do produto selecionado, mas haverá tabelas para cada unidade de planejamento.
      <br /><br />
      <img src={require('@site/static/img/media/image160.png').default} alt="PDF and CSV Export Icons" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      Compreendendo os cálculos do saldo de estoque na metade superior da tabela:
      <br /><br />
      <img src={require('@site/static/img/media/image161.png').default} alt="Figure 102: Ending Stock Balance Calculation" />
      <br />
      <i>Figure 102: Ending Stock Balance Calculation</i>
      <br /><br />
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '5px' }}><b>Opening Balance</b> represents the quantity of stock at the beginning of the month. It is equal to the ending balance of the previous month, except the very first month of the program, where the opening balance is zero. It can be an inventory count from the previous month (<b>bolded</b>), or a projected value (unbolded).</li>
        <li style={{ marginBottom: '5px' }}><b>Ending Balance</b> represents the quantity of stock at the end of the month. It can be an inventory count (<b>bolded</b>), or a projected value (unbolded).</li>
        <li style={{ marginBottom: '5px' }}>Follow the +/- signs besides each row to understand how the math works from opening balance to ending balance.</li>
      </ul>
    </li>
  </ol>
  
A metade inferior da tabela contém mais detalhes para ajudar o usuário a interpretar o status do estoque.
  
  ![Figure 103 Differences in the Supply Planning Table - Plan by MOS vs Plan by Quantity](/img/media/image162.png)
  *Figura 103 Diferenças na Tabela de Planejamento de Fornecimento - Plano por MOS vs Plano por Quantidade*
  
  * **Consumo médio mensal (AMC)** é a média do consumo dos meses indicados pelos parâmetros AMC, que são apresentados acima da tabela. Para editar esses parâmetros, consulte [Atualização de unidades de planejamento](./07-supply-planning-module-program-data.md#a2-planning-units).
    
    ![Figure 104 Differences in the Supply Planning Legend- Plan by MOS vs Plan by Quantity](/img/media/image163.png)
    *Figura 104 Diferenças na Legenda do Planejamento de Fornecimento - Plano por MOS vs Plano por Quantidade*
    
  * **Demanda não atendida.** Quantidades estimadas de produto que teriam sido consumidas se houvesse estoque suficiente disponível:
    - Quando o consumo previsto é maior que o estoque inicial disponível projetado.
    - Quando o consumo efetivo inclui dias de ruptura de stock
    - Quando um ajuste manual negativo for maior que o saldo final projetado
    - A funcionalidade de demanda não atendida do QAT é o que captura o que seria um estoque negativo no software legado PipeLine.
  * A segunda linha de baixo
    - **Planejado pelo MOS: Meses de Estoque** é calculado como o saldo final do mês dividido pelo AMC.
    - **Planejado por Quantidade: Quantidade Máxima** é calculada como Quantidade Mínima + Frequência de Novo Pedido x AMC.
  * Codificação por cores do status do estoque
    - **Planejado pela MOS:** A linha **“Meses de estoque”** é codificada por cores com base no status do estoque usando o código de cores exibido na legenda. O status do estoque é determinado comparando o MOS com o MIN MOS e o MAX MOS.
    - ** Planejado por Quant

cidade:** A linha **“Saldo final”** é codificada por cores com base no status do estoque usando o código de cores exibido na legenda. O status do estoque é determinado comparando a quantidade do “saldo final” com a quantidade mínima (fornecida pelo usuário) e a quantidade máxima (calculada).
  
  <ol start="7" style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '15px' }}>
    <li style={{ marginBottom: '20px' }}>
      Reading the stock status graph. The dates on this graph follow the table. By default, all graph elements are displayed. Click on any data element in the legend to hide a data element. The Stock Status graph has two vertical (Y) axes:
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
        <li style={{ marginBottom: '10px' }}>The <b>primary (left) axis is in units</b>, and depicts shipments, consumption, stock, and expiries. For Plan by Quantity, there minimum and maximum quantities use the primary axis.<br/><br/><img src={require('@site/static/img/media/image164.png').default} alt="Figure 105 Supply Planning Graph - Primary Axis (Plan by MOS)" /><br/><i>Figure 105 Supply Planning Graph - Primary Axis (Plan by MOS)</i><br/><br/><img src={require('@site/static/img/media/image165.png').default} alt="Figure 106 Supply Planning Graph - Primary Axis (Plan by Quantity)" /><br/><i>Figure 106 Supply Planning Graph - Primary Axis (Plan by Quantity)</i></li>
        <li style={{ marginBottom: '10px' }}>For plan by MOS, there is a <b>secondary (right) axis in months</b>, and depicts the stock parameters (minimum, maximum) and the calculated months of stock.<br/><br/><img src={require('@site/static/img/media/image166.png').default} alt="Figure 107 Supply Planning Graph - Secondary Axis (Plan by MOS)" /><br/><i>Figure 107 Supply Planning Graph - Secondary Axis (Plan by MOS)</i></li>
      </ul>
    </li>
  </ol>
  
## B. Planejamento de Fornecimento: Consumo

# Seção 5. Módulo de Planejamento de Fornecimento: Planejamento de Fornecimento

## A. **Planejamento de fornecimento: uma visão geral**

![Figure 99: Supply Planning Screen – Plan by MOS](/img/media/image153.png)
*Figura 99: Tela de Planejamento de Fornecimento – Plano por MOS*

![Figure 100: Supply Planning Screen – Plan by Quantity](/img/media/image154.png)
*Figura 100: Tela Planejamento de Fornecimento – Planejar por Quantidade*

* <u>O quê?</u> Todos os principais pontos de dados (consumo, remessas, estoque) se reúnem na tela de planejamento de fornecimento, e é aqui que a maioria dos usuários do QAT passará a maior parte do tempo. Os usuários podem clicar em muitas células da tabela para editar diretamente seus dados. Recomenda-se usar esta tela para planejamento ativo de fornecimento (incluindo atualizações de dados e planejamento de novas remessas), mas usar a tela de entrada de dados quando for necessária uma entrada significativa de dados. Observe que algumas seções variam dependendo se a unidade de planejamento é planejada por MOS ou por Quantidade (conforme selecionado em [Atualizando Unidades de Planejamento](./07-supply-planning-module-program-data.md#a2-planning-units)) – as diferenças são observadas abaixo.
  * Esta tela também pode ser visualizada pela unidade de relatório alternativa (ARU) associada à unidade de planejamento. Isso significa que os usuários podem visualizar seus planos de fornecimento em termos de nomes de produtos e unidades de medida em que inserem os dados, com valores na tabela e no gráfico mudando de acordo com o fator de conversão ARU/PU estabelecido pelo usuário (consulte [Unidades de relatório alternativas](./07-supply-planning-module-program-data.md#a4-alternate-reporting-units)). O usuário seleciona visualizar por ARU clicando no botão de opção e selecionando a ARU desejada para exibição.
    
    ![Figure 101: Supply Planning Table –by Planning Unit vs by Alternate Reporting Unit](/img/media/image155.png)
    *Figura 101: Tabela de Planejamento de Fornecimento – por Unidade de Planejamento versus por Unidade de Relatório Alternativa*

Na tabela de planejamento de abastecimento, será exibido apenas um número por mês para todo o programa na linha de consumo. Conforme observado na legenda, <span style={{ color: 'purple', fontStyle: 'italic' }}>consumo previsto</span> é indicado por texto roxo em itálico, enquanto **consumo real** é indicado por texto preto sem itálico.

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<b>Logic for Consumption Data Displayed</b>
<ul style={{paddingLeft: '20px', margin: 0, marginTop: '5px', listStyleType: 'disc'}}>
<li style={{marginBottom: '5px'}}>For single-region programs, the actual consumption will be displayed when it is available. If actual consumption is not available, the forecasted consumption will display.</li>
<li style={{marginBottom: '5px'}}>For multi-region programs, QAT will display the greater between Σ(actuals) or Σ(forecast) across regional data. (Note: this logic is being reviewed and may be updated in the future).</li>
</ul>
</div>

![Consumption Table Legend](/img/media/image167.png)

<div style={{clear: 'both'}} />

**To add or edit consumption records**

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<div style={{textAlign: 'center', fontWeight: 'bold'}}>
Lots of data to add/update?<br/>
Go to data entry screen!
</div>
<br />
<img src={require('@site/static/img/media/image169.png').default} alt="Lots of data to add/update right-click menu" style={{width: '100%'}} />
<br /><br />
<i style={{fontSize: '11px', display: 'block', lineHeight: '1.4'}}>
No pop-up de detalhes de consumo, os usuários podem acessar diretamente a entrada de dados de consumo clicando no link no canto superior direito (ver <a href="./07-supply-planning-module-program-data.md#b1-consumption-data">Dados de consumo</a>). Clique com o botão esquerdo para abrir uma guia em seu navegador, clique com o botão direito e selecione &ldquo;Abrir link na nova janela da ferramenta Quantification Analytics&rdquo; para abrir uma janela separada do QAT PWA.
</i>
</div>

0. Clique no mês e na célula da linha Consumo na tela de planejamento de abastecimento. Uma nova janela chamada Detalhes de Consumo aparecerá. Na tabela que aparece, cada linha representa uma região. Os programas de região única terão apenas uma linha, enquanto os programas multirregionais terão várias linhas. O total mostra o consumo agregado de todas as regiões.
1. Clique no registro de consumo de qualquer mês e região para visualizar mais detalhes. Todos os registros desse mês e região serão exibidos abaixo.
2. Para criar um novo registro, clique com o botão direito na linha de detalhes e selecione “Adicionar novo consumo” ou clique no botão “+ Adicionar linha”.
3. Para editar um registro, clique em qualquer célula e edite os detalhes do consumo (tipo de consumo, fonte de dados, quantidade, etc.) Clique duas vezes para ativar qualquer menu suspenso. Consulte [Dados de consumo](./07-supply-planning-module-program-data.md#b1-consumption-data) para obter orientações adicionais sobre a entrada de dados de consumo.
4. Clique em “Enviar” para salvar as alterações e retornar à tela principal de planejamento de fornecimento, onde suas alterações serão refletidas.

<img src={require('@site/static/img/media/image170.png').default} alt="Consumption Details Dialog" style={{maxWidth: '100%', margin: '15px 0'}} />


## C. Planejamento de Fornecimento: Remessas

Por padrão, as remessas são mostradas apenas como uma linha na tela de planejamento de fornecimento – esta é a quantidade agregada de todas as remessas (excluindo as remessas sugeridas). Para mostrar mais detalhes, clique no ícone + à esquerda da linha "+ Remessas" para expandir e exibir as sublinhas. Você verá cinco linhas divididas por status do pedido (linha superior para remessas sugeridas que são calculadas automaticamente).

Para ver um detalhamento de todas as remessas em um mês, clique na célula do mês correspondente na linha '+Embarques'. Para ver o detalhamento de todas as remessas por status, clique na célula do mês correspondente na linha de status individual.

ERP (planejamento de recursos empresariais): os dados vinculados ao ERP de agentes de compras não são editáveis (consulte [Link de remessa de ERP](./07-supply-planning-module-program-data.md#b4-erp-shipment-linking))

Para todas as linhas de remessa, as cores indicam o agente de compras. Se um mês tiver várias remessas com diferentes agentes de compras, a célula ficará verde. Os triângulos vermelhos no canto superior direito da célula indicam que uma remessa é uma emergência. Se a remessa for uma compra local, haverá um ícone L no canto inferior esquerdo da célula. Se a remessa estiver vinculada ao ERP, haverá um ícone de link no canto superior esquerdo da célula. As remessas podem ter vários ícones, como um pedido de emergência vinculado ao ERP local. A legenda aparece na parte superior da tela.

![Figure 108: Shipments in Supply Planning](/img/media/image172.png)
*Figura 108: Remessas no Planejamento de Fornecimento*


As seções a seguir abordarão como atualizar remessas existentes e criar novas remessas na tela de planejamento de fornecimento. Consulte [**Dados de remessa**](./07-supply-planning-module-program-data.md#b3-shipment-data) para obter mais dicas sobre os campos de dados de remessa, que se aplicam à tela de entrada de dados de remessa e à tela de planejamento de fornecimento.

###CI. Atualizando uma Remessa Existente
1. Clique na célula que representa o mês e a remessa a ser editada. Clicar na linha "+ Remessas" abrirá uma guia com todas as remessas daquele mês, independentemente do status. Clicar em uma das linhas de status abrirá uma guia que mostra apenas as remessas daquele mês com esse status.

![Planned Shipment Highlight](/img/media/image173.png)

2. O pop-up Detalhes da Remessa aparecerá. Faça todas as alterações desejadas. Para atualizar informações de lote ou data, clique com o botão direito na linha da remessa. A parte superior do pop-up permite que os usuários naveguem para um mês diferente para fazer alterações nessas remessas também.

![Shipment Details Table Columns](/img/media/image174.png)

3. Clique em "Enviar" para salvar as alterações e retornar à tela principal de planejamento de fornecimento, onde as alterações serão refletidas (**Observação**: O botão Enviar não aparecerá se todos os campos obrigatórios não forem preenchidos.)

![Shipped Shipment Table Highlight](/img/media/image175.png)

**Observação**: A remessa planejada foi editada para enviada, mostrando que 130.000 foram movidos da linha "Planejada" para a linha "Enviada e Chegada".

![Shipment Parameters Tooltips](/img/media/image176.png)

**Lembrete**: dicas de ferramentas são fornecidas para ajudar a orientar onde atualizar parâmetros específicos. Eles fornecem clareza sobre o que os usuários precisam atualizar.


### Atualizando a quantidade de remessa com o botão Recalcular
Para remessas planejadas no futuro, a QAT irá sugerir uma quantidade revisada de remessa como um aviso prévio para evitar ficar abaixo dos níveis mínimos de estoque. Assim como as remessas sugeridas (consulte [Criando uma nova remessa](#c2-criando uma nova remessa)), o QAT só fornecerá o botão de recalcular se a remessa cair em um mês abaixo do mínimo, seguido por pelo menos dois meses que também esteja abaixo do nível mínimo de estoque. A quantidade recomendada pelo botão recalcular seguirá a mesma lógica dos envios sugeridos pelo QAT (veja **Regras para Remessas Sugeridas abaixo**).

Abaixo estão as etapas para usar o botão recalcular na tela Planejamento de Fornecimento:
1. Vá para uma remessa planejada no futuro, onde o mês atual e pelo menos os 2 meses seguintes estejam abaixo do nível mínimo de estoque.
2. Clique com o botão esquerdo na remessa.
3. Encontre a coluna 'Quantidade do pedido' e clique com o botão direito.

![Suggested Shipment Highlight](/img/media/image178.png)

4. Clique em 'Recalcular'. Uma mensagem pop-up aparecerá informando a quantidade que a QAT está sugerindo adicionar e qual será a quantidade da remessa revisada.

![Figure 109: Recalculate Button](/img/media/image177.png)
*Figura 109: Botão Recalcular*

5. Clique em 'Ok'. O pop-up desaparecerá e a quantidade revisada do pedido aparecerá na coluna 'Quantidade do pedido'. Clique em 'Enviar' se desejar prosseguir com a quantidade revisada do pedido. A qualquer momento, o usuário pode substituir a quantidade clicando duas vezes na célula e digitando uma nova quantidade.

A quantidade revisada agora será refletida no plano de fornecimento.



### C2. Criando uma Nova Remessa
Existem duas maneiras de criar novas remessas – 1) converter uma remessa sugerida pelo QAT em uma remessa planejada ou 2) adicionar uma remessa manualmente.

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<div style={{textAlign: 'center', fontWeight: 'bold'}}>
QAT Suggested Shipments
</div>
<br />
A QAT sugere uma remessa como um aviso prévio para evitar ficar abaixo dos níveis mínimos de estoque. Estas não são remessas reais e, como tal, não afetam as projeções de estoque. Somente quando uma remessa sugerida for aceita e o status mudar, ela será contabilizada em suas projeções de estoque. O QAT marcará automaticamente uma remessa sugerida como remessa de emergência se estiver dentro do prazo de entrega. Consulte <b>Regras para envios sugeridos</b> abaixo.
</div>

Para **Converter uma remessa sugerida** em uma remessa planejada:
1. Clique na linha Remessa Sugerida no mês desejado.
2. O pop-up Detalhes da Remessa aparecerá. Altere o status para o status desejado, preencha os campos obrigatórios, indicados por um asterisco. Clique duas vezes para ativar qualquer menu suspenso. Role para a direita para ver todos os campos. Passe o mouse sobre as dicas de ferramentas se for necessário algum esclarecimento (mostrado na imagem abaixo). A quantidade do pedido será pré-preenchida pela quantidade do pedido sugerida.

![Suggested Shipment](/img/media/image179.png)

3. Clique em “Enviar” para salvar as alterações e retornar à tela principal de planejamento de fornecimento, onde as alterações serão refletidas (**Observação**: O botão Enviar não aparecerá se todos os campos obrigatórios não forem preenchidos)


**Regras para envios sugeridos:**

<u>Para plano da MOS:</u>

1. A unidade de planejamento está com estoque insuficiente (MOS&lt;Min) por 3 meses consecutivos?
   um. Em caso afirmativo, a remessa sugerida elevará o nível de estoque do mês atual ao **máximo**.
   b. Se não, nenhuma remessa sugerida.
2. Caso a unidade de planejamento esteja sem estoque, a QAT sempre sugerirá um envio.
   um. Se ambos os próximos 2 meses forem &lt;Min, a remessa sugerida elevará o nível de estoque do mês atual ao **máximo**.
   b. Se 1 dos próximos 2 meses for &gt;Min, a remessa sugerida levará o nível de estoque do mês atual ao **mínimo**.
3. Se AMC = 0 ou N/A, não haverá sugestão de remessa para aquele mês.

<u>Para plano por quantidade:</u>

Onde Mês N é o mês para o qual o QAT está calculando e X = Prazo de entrega de distribuição
1. Se AMC = 0 ou N/A para o Mês N, nenhuma remessa sugerida
2. Se o mês N estiver esgotado (saldo final = 0), o QAT sempre sugerirá uma remessa
   uma. Se ambos os próximos 2 meses (N+1, N+2) forem &lt; quantidade mínima, a remessa sugerida será a quantidade que levaria o mês N à **quantidade máxima.**
   b. Se um ou ambos os próximos 2 meses (N+1 ou N+2) for &gt; quantidade mínima, a remessa sugerida será a quantidade que levaria o mês N à **quantidade mínima.**
3. O produto está com estoque insuficiente (saldo final &lt; quantidade mínima) por 3 meses consecutivos (mês N, N+1, N+2)?
   um. Em caso afirmativo, a remessa sugerida é a quantidade que levaria o Mês N à **quantidade máxima.**
   b. Se não, nenhuma remessa sugerida

*QAT coloca a quantidade sugerida no mês NX. Em outras palavras, X meses antes do Mês N, onde X é o lead time de distribuição.*

**Para criar manualmente uma nova remessa:**
1. Clique na célula que representa o mês ao qual a remessa deve ser adicionada. Clicar na linha '+Embarques' abrirá uma guia com todas as remessas daquele mês, independentemente do status. Clicar em uma das linhas de status abrirá uma guia que mostra apenas as remessas daquele mês com esse status. Qualquer uma das opções funcionará para adicionar uma nova remessa.
2. O pop-up Detalhes da Remessa aparecerá. Para adicionar uma nova linha, clique no botão '+ Adicionar linha' ou clique com o botão direito em qualquer linha e selecione 'Adicionar nova remessa'. Clique duas vezes para ativar qualquer menu suspenso. Altere para o status e quantidade desejados e preencha os campos obrigatórios indicados por um asterisco. Role para a direita para ver todos os campos.
3. Para criar várias remessas novas, clique com o botão direito em qualquer linha e selecione “Adicionar nova remessa” ou clique no botão “+ Adicionar linha”.
   um. Esteja atento aos ícones de dicas de ferramentas para ajudar a orientar quais parâmetros específicos precisam ser atualizados.

![Shipment Parameters Tooltip Crop](/img/media/image180.png)

![Manual Shipment Table Entry](/img/media/image179.png)

4. Clique em “Enviar” para salvar as alterações e retornar à tela principal de planejamento de fornecimento, onde as alterações serão refletidas (**Observação**: O botão Enviar não aparecerá se todos os campos obrigatórios não forem preenchidos.)

## D. **Planejamento de Fornecimento: Estoque/Ajustes**

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <p style={{margin: '0 0 15px 0'}}>
      In the supply planning table, one number will show per month for the whole program in the <b>manual adjustments</b> row, regardless of how many manual adjustments are made. Similarly, the <b>ending balance</b> will always be one row, regardless of whether the ending balance is projected by QAT or provided by the user as an inventory count.
    </p>
    <img src={require('@site/static/img/media/image182.png').default} alt="Adjustments and Ending Balances in Table" style={{width: '100%', borderRadius: '4px', border: '1px solid #ddd'}} />
  </div>
  <div style={{flex: '1 1 350px', border: '1.5px solid #000', padding: '15px', borderRadius: '4px', backgroundColor: '#f9f9f9', fontSize: '0.9em', color: '#000'}}>
    <h4 style={{marginTop: 0, textAlign: 'center', fontWeight: 'bold'}}>Logic for Adjustments and Ending Balances</h4>
    <ul style={{paddingLeft: '20px', listStyleType: 'disc', margin: 0}}>
      <li style={{marginBottom: '10px'}}>
        When there are no inventory counts,
        <ul style={{paddingLeft: '20px', listStyleType: 'circle'}}>
          <li><b>Adjustments</b> = the sum of all manual adjustments (&Sigma;(manual adjustments))</li>
          <li><b>Ending balance</b> = projected inventory</li>
        </ul>
      </li>
      <li style={{marginBottom: '10px'}}>
        When there are inventory counts,
        <ul style={{paddingLeft: '20px', listStyleType: 'circle'}}>
          <li>For single-region programs, if there is an inventory count, that inventory count will be the ending balance.</li>
          <li>For multi-region programs where <u>not</u> all regions are reporting, QAT will use whichever is <u>greater</u>, &Sigma;(inventory count) or (projected inventory) as the ending balance</li>
          <li>For multi-region programs where all regions are reporting, QAT will use &Sigma;(inventory count) as the ending balance.</li>
        </ul>
      </li>
      <li>
        Whenever <b>QAT</b> uses inventory count as the ending balance, auto adjustments are calculated on top of manual adjustments.
      </li>
    </ul>
  </div>
</div>

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <ol style={{paddingLeft: '20px', listStyleType: 'decimal', margin: 0}}>
      <li style={{marginBottom: '15px'}}>
        To add or edit adjustment or inventory records, click on the month and cell on the adjustments or ending balance rows in the supply planning screen.
        <ol style={{paddingLeft: '20px', listStyleType: 'lower-alpha', marginTop: '10px'}}>
          <li style={{marginBottom: '8px'}}>A new window called <b>Adjustments and Inventory Details</b> will pop up. In the table that appears, each row represents a region. Single-region programs will only have one row, while multi-region programs would have multiple rows.</li>
          <li style={{marginBottom: '8px'}}>The total shows the aggregated adjustments and inventory for all regions.</li>
          <li>Click on the record of any month and region to display further details</li>
        </ol>
      </li>
    </ol>
  </div>
  <div style={{flex: '1 1 350px', borderTop: '1px solid #000', borderBottom: '1px solid #000', padding: '15px 0', fontSize: '0.9em', color: '#000'}}>
    <h4 style={{marginTop: 0, textAlign: 'center', fontWeight: 'bold'}}>Lots of data to add/update?<br/>Go to data entry screen!</h4>
    <div style={{textAlign: 'center', margin: '10px 0'}}>
      <img src={require('@site/static/img/media/image169.png').default} alt="Lots of data to add/update" style={{width: '90%', borderRadius: '4px'}} />
    </div>
    <p style={{margin: 0, lineHeight: '1.4'}}>
      No pop-up Ajustes e detalhes de inventário, os usuários podem acessar diretamente a entrada de dados de Ajustes e inventário clicando no link no canto superior direito (consulte <a href="./07-supply-planning-module-program-data.md#b2-inventory-data">Dados de inventário</a>). Clique com o botão esquerdo para abrir uma guia em seu navegador, clique com o botão direito e selecione “Abrir link na nova janela da ferramenta de análise de quantificação” para abrir uma janela separada do QAT PWA.
    </p>
  </div>
</div>

![Adjustment and Inventory Details](/img/media/image183.png)



<ol start="2" style={{paddingLeft: '20px', listStyleType: 'decimal', margin: '20px 0'}}>
  <li style={{marginBottom: '15px'}}>
    Any records for that month and region will display below.
    <ul style={{paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px'}}>
      <li style={{marginBottom: '10px'}}>To add an adjustment or inventory record, click on add row, or right-click on the bottom table and select “Add new adjustment” or “Add new inventory”. Enter the required details. For adjustments, users can enter both positive and negative adjustments, in the past and in the future, and notes are required</li>
    </ul>
  </li>
</ol>

![Adjustment and Inventory Details Context Menu](/img/media/image184.png)

<ul style={{paddingLeft: '40px', listStyleType: 'disc', margin: '10px 0'}}>
  <li style={{marginBottom: '10px'}}>To edit a record, click on any cell to edit.</li>
</ul>

<ol start="3" style={{paddingLeft: '20px', listStyleType: 'decimal', margin: '20px 0'}}>
  <li style={{marginBottom: '15px'}}>
    <b>Note:</b> A user can review which batch is affecting their ending balance for a particular month, by clicking on “Final Inventory” in the “Adjustment and Inventory Details” screen pop-up.
  </li>
</ol>

![Figure 111: Batches included in Final Inventory Pop-up](/img/media/image185.png)
*Figura 111: Lotes incluídos no pop-up de inventário final*

<ol start="4" style={{paddingLeft: '20px', listStyleType: 'decimal', margin: '20px 0'}}>
  <li style={{marginBottom: '15px'}}>
    For months with an inventory record, the user can click edit the batch quantities.
    <ul style={{paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px'}}>
      <li style={{marginBottom: '10px'}}><b>Note:</b> redistributing batch quantities should be the last resort. It’s always better to update the information upstream (shipment, consumption, adjustment) instead of updating the inventory batch information.</li>
      <li style={{marginBottom: '10px'}}>
        <b>How to do it?</b>
        <ol style={{paddingLeft: '20px', listStyleType: 'lower-alpha', marginTop: '10px'}}>
          <li style={{marginBottom: '8px'}}>Ensure there is an actual/manual inventory count for the month</li>
          <li style={{marginBottom: '8px'}}>Click on “final inventory” to pull up the batches</li>
          <li style={{marginBottom: '8px'}}>Type over the actual quantity – use the dropdowns if you want to change batches</li>
          <li>Remember, the total of the batches must match the total inventory total for the month</li>
        </ol>
      </li>
      <li>Right click on any batch to view the batch ledger (learn more in <a href="#e-supply-planning-project-expired-stock-and-batch-information">Supply Planning: Project Expired Stock and Batch Information</a>)</li>
    </ul>
  </li>
</ol>

![Figure 112: Batches Affecting Final Inventory Pop-up](/img/media/image186.png)
*Figura 112: Pop-up de lotes que afetam o inventário final*



## E. **Planejamento de fornecimento: estoque expirado do projeto e informações de lote**

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <p style={{margin: '0 0 15px 0'}}>
      Users can view the projected expired stock, if any, for each month in their supply plan in the **Projected Expired Stock** row. Clicking on the <u>cell</u> will bring a pop-up window with the expiry details.
    </p>
    <img src={require('@site/static/img/media/image188.png').default} alt="Projected Expired Stock row highlight" style={{display: 'block', maxWidth: '300px', margin: '15px 0', border: '1px solid #ddd'}} />
    <p style={{margin: '20px 0 15px 0'}}>From the pop-up – users can do 2 functions:</p>
    <ol style={{listStyleType: 'decimal', paddingLeft: '20px', margin: 0}}>
      <li style={{marginBottom: '20px'}}>
        <b>Edit the batch that contributed to the expiry:</b> Click on the Batch Number. QAT will automatically redirect the user to the shipment from which the batch was generated. From the shipment screen, a user can edit the Batch Name, Expiry Date, and Shipment Quantity.
        <br /><br />
        <img src={require('@site/static/img/media/image189.png').default} alt="Projected Expired Batch Details Pop-up" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
        <br />
        <i>Note: Users can also edit this information in the Shipment Data entry screen (see <a href="./07-supply-planning-module-program-data.md#b3-shipment-data">Shipment Data</a>).</i>
      </li>
      <li style={{marginBottom: '20px'}}>
        <b>View the batch ledger:</b> Click on the <u>Expired Quantity</u> cell. QAT will automatically open a pop-up screen below with the batch ledger, which shows the life of a batch month-by-month from shipment receipt to expiry.
      </li>
    </ol>
  </div>
  <div style={{flex: '1 1 350px', border: '1.5px solid #000', padding: '15px', borderRadius: '4px', backgroundColor: '#ffffff', fontSize: '0.9em', color: '#000'}}>
    <img src={require('@site/static/img/media/image187.png').default} alt="Logic for Batches & Expiries Flowchart" style={{width: '100%', display: 'block', margin: '0 auto 15px auto'}} />
    <h4 style={{marginTop: 0, textAlign: 'left', fontWeight: 'bold'}}>Logic for Batches & Expiries</h4>
    <ul style={{listStyleType: 'square', paddingLeft: '20px', margin: 0, color: '#000'}}>
      <li style={{marginBottom: '15px'}}>
        Batches start with <b>shipments</b>.
        <ul style={{listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px'}}>
          <li style={{marginBottom: '5px'}}>QAT automatically generates one batch for each shipment that equals the quantity of the shipment.</li>
          <li style={{marginBottom: '5px'}}>Batch expiry dates are based on shipment <b>receive date</b> plus planning unit <b>shelf life</b> (Updatable by Program Admins in <a href="./07-supply-planning-module-program-data.md#a2-planning-units">Update Planning Units</a>).</li>
          <li>Users <u>can override</u> the batch number, expiry date, and split shipments into multiple batches.</li>
        </ul>
      </li>
      <li style={{marginBottom: '15px'}}>
        For <b>consumption</b>
        <ul style={{listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px'}}>
          <li style={{marginBottom: '5px'}}>By default, QAT uses First Expired, First Out <b>(FEFO)</b> logic.</li>
          <li>Users <u>can override</u> the FEFO logic and instead, choose a specific batch from a dropdown to tag to that <u>actual</u> consumption record.</li>
        </ul>
      </li>
      <li>
        For <b>adjustments</b>
        <ul style={{listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px'}}>
          <li style={{marginBottom: '5px'}}>By default, QAT uses the <b>Best-Case Scenario</b> logic: For positive adjustments (manual or automated), QAT adds to the batch that is last to expire (longest shelf life). For negative adjustments (manual or automated), QAT subtracts from the batch that is the expiring soonest (shortest shelf life).</li>
          <li style={{marginBottom: '5px'}}>Users <u>can override</u> the Best-Case Scenario logic and instead, choose a specific batch from a dropdown to tag to that <u>manual</u> adjustment record.</li>
          <li>Users <u>cannot override</u> the Best-Case Scenario logic for an <u>auto</u>-adjustment record.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<img src={require('@site/static/img/media/image190.png').default} alt="Batch Ledger details" style={{display: 'block', maxWidth: '100%', margin: '20px 0', border: '1px solid #ddd'}} />

<p style={{marginTop: '15px'}}><b>Note:</b> unless the user tags a batch to specific actual consumption or adjustment entries (see “Add/Update Batch Details” in <a href="./07-supply-planning-module-program-data.md#b1-consumption-data">Consumption Data</a> and <a href="./07-supply-planning-module-program-data.md#b2-inventory-data">Inventory Data</a>), QAT will default to monthly batch quantities being placed in the “Auto-Allocated” column in the Batch Ledger.</p>

## F. **Planejamento de cenário**

QAT fornece aos usuários cenários predefinidos para planejamento de fornecimento. Esta funcionalidade permitirá aos usuários fazer alterações e visualizar seus dados de diferentes maneiras, sem necessariamente afetar seu plano de fornecimento atual. Os usuários podem aplicar um ou mais cenários aos seus dados para ver como essas alterações afetam as projeções de estoque. Os cenários selecionados podem então ser aplicados a um plano de fornecimento atual, criando uma nova versão.

Existem atualmente seis cenários predefinidos disponíveis para os usuários; mais podem ser programados no QAT dependendo da necessidade e dos casos de uso. Os usuários do QAT podem solicitar novos cenários através da emissão de um ticket. A necessidade de novos cenários será gerenciada centralmente pelo Realm Admin.

Cenários disponíveis:
- **Aumentar o consumo previsto:** por um percentual e período definidos pelo usuário. Isto aplicará um aumento percentual aos valores previstos para cada mês do período selecionado.
- **Diminuir o consumo previsto:** por um percentual e período definidos pelo usuário. Isto aplicará uma redução percentual aos valores previstos para cada mês do período selecionado.
- **Produto de entrada/saída de previsão:** para um período definido pelo usuário e valores de consumo de previsão inicial e final. O QAT traçará uma linha reta interpolando entre os valores inicial e final e substituirá os valores atuais de consumo previstos.
- **Remover remessas não financiadas:** todas as remessas sem uma fonte de financiamento atribuída (ou seja, fonte de financiamento = a ser definida) serão removidas do plano de fornecimento e das projeções de estoque.
- **Remover todos os embarques Planejados:** todos os embarques com status “planejados” serão retirados do plano de abastecimento e das projeções de estoque. O usuário pode marcar uma caixa para remover apenas as “remessas planejadas” que não cumprem os prazos de entrega estabelecidos (ou seja, a data de recebimento esperada é anterior ao que seria viável dados os prazos de entrega).
- **Remover todos os envios enviados fora do prazo de entrega:** todos os envios com status “enviado” que não cumpram os prazos de entrega estabelecidos serão removidos do plano de fornecimento e das projeções de estoque.
- **Remover todos os envios em espera que não estejam dentro do prazo de entrega:** todos os envios com status “em espera” que não cumpram os prazos de entrega estabelecidos serão removidos do plano de abastecimento e das projeções de estoque.
- **Replanejar plano de fornecimento:** por um período definido pelo usuário, o QAT remove remessas planejadas que não estão mantendo o estoque corretamente entre os parâmetros MIN/MAX e cria novas remessas planejadas para cumprir os parâmetros de estoque, usando a lógica de remessa sugerida descrita na <a href="#c2-creating-a-new-shipment">Seção 5.C2 Criando uma nova remessa</a>.

Para acessar esses cenários:
1. Acesse Planejamento de Fornecimento e clique em “Planejamento de Cenário”.
2. Selecione um cenário predefinido no menu suspenso e edite os campos obrigatórios
3. Clique em Adicionar para visualizar as alterações.

![Figure 113 Scenario Planning Screen](/img/media/image191.png)
*Figura 113 Tela de planejamento de cenário*

4. O cenário será mostrado na “Lista de Cenários”.

![Figure 114 Scenario Planning Scenario List](/img/media/image192.png)
*Figura 114 Lista de cenários de planejamento de cenário*

5. Caso o usuário deseje aplicar o cenário ao seu plano de abastecimento, poderá clicar no botão “Enviar”. O novo plano de fornecimento será armazenado no computador desse usuário, e o usuário poderá carregá-lo no servidor como uma nova versão por meio da funcionalidade Upload.
6. Caso o usuário não deseje aplicar o cenário ao seu plano de abastecimento atual, poderá clicar no botão “Cancelar” ou no botão “Reiniciar”, e as alterações não terão efeito.

## G. **Relatório do Plano de Fornecimento**

O objetivo do relatório do plano de abastecimento é permitir ao usuário avaliar rapidamente o status do estoque de um ou mais programas e/ou unidades de planejamento selecionados, comparando graficamente as projeções de estoque com os níveis dinâmicos de estoque mínimo e máximo e poder ver todos os detalhes de consumo (real e previsto), estoque e remessa em um só lugar. O relatório fornece uma representação gráfica do plano de fornecimento, bem como uma visão tabular. O relatório pode ser exportado em formato PDF e/ou CSV.

<ul style={{listStyleType: 'disc', paddingLeft: '20px', margin: '15px 0'}}>
  <li><b>Accessible to:</b> Realm Admins, Program Admins, Program Users, and Reports Viewer</li>
  <li><b>Navigation:</b> Supply Planning &rarr; Supply Plan Report</li>
</ul>

Os usuários podem utilizar os vários parâmetros suspensos na parte superior da tela para gerar diferentes visualizações do Relatório do Plano de Fornecimento. Cada visualização do relatório gerada terá uma representação gráfica e um equivalente tabular dos dados. Existem três visualizações principais do Relatório do Plano de Fornecimento:

<ol style={{listStyleType: 'decimal', paddingLeft: '20px'}}>
  <li>
    <div>
      <b>Single Program View</b>
      <ol style={{listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '5px'}}>
        <li>Single program</li>
        <li>Single Planning Unit (PU) or single Alternate Reporting Unit (ARU)</li>
        <li>Shipments disaggregated by status (i.e. planning, shipped, received, etc.)</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image193.png').default} alt="Figure 115: Supply Plan Report: Single Program View, Graph" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 115: Supply Plan Report: Single Program View, Graph</i>
      <br /><br />
      <img src={require('@site/static/img/media/image194.png').default} alt="Figure 116: Supply Plan Report: Single Program View, Tabular Data" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 116: Supply Plan Report: Single Program View, Tabular Data</i>
    </div>
  </li>
  <br />
  <li>
    <div>
      <b>Multi-Program View</b>
      <ol style={{listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '5px'}}>
        <li>Multiple programs</li>
        <li>Single PU or ARU</li>
        <li>Shipments disaggregated by program (i.e. FASPonia Malaria MOH & FASPonia Malaria Social Marketing)</li>
        <li><b>Notes:</b> QAT is able to aggregate the supply planning data across multiple programs if they share the <b>same</b> PU/ARU. This could be useful if a country has multiple parallel programs monitoring the same products and would like to see an aggregated or national view of the stock status over time.</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image195.png').default} alt="Figure 117: Supply Plan Report: Multi-program View" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 117: Supply Plan Report: Multi-program View</i>
      <br /><br />
      <img src={require('@site/static/img/media/image196.png').default} alt="Figure 118: Supply Plan Report: Multi-program/EU View, Tabular Data" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 118: Supply Plan Report: Multi-program/EU View, Tabular Data</i>
    </div>
  </li>
  <br />
  <li>
    <div>
      <b>Equivalency Unit (EU) View</b>
      <ol style={{listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '5px'}}>
        <li>Single or multiple programs</li>
        <li>Multiple PUs (<i>ARUs</i> <i>cannot</i> be used with EUs)</li>
        <li>Shipments disaggregated by program, PU, or program-PU</li>
        <li><b>Notes:</b> QAT is able to <u>aggregate</u> across PUs that are different (different pack sizes, usage rates, etc.), but related by utilizing an EU (see <a href="./07-supply-planning-module-program-data.md#a5-equivalency-units">Equivalency Units</a> for more information) and a corresponding conversion factor. This could be useful for countries or global viewers that would like to see concepts such as, Malaria Treatments, Couples Year Protection (CYP), ARV Patient Months, etc. as an aggregate.</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image197.png').default} alt="Figure 119: Supply Plan Report: Equivalency Unit View" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 119: Supply Plan Report: Equivalency Unit View</i>
    </div>
  </li>
</ol>

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <p style={{fontWeight: 'bold', margin: '0 0 10px 0'}}>Note:</p>
    <ol style={{listStyleType: 'decimal', paddingLeft: '20px', margin: 0}}>
      <li style={{marginBottom: '10px'}}>The report utilizes the Planning Unit settings set by the Program Admin for AMC, shelf life, MIN, reorder interval, and MAX</li>
      <li style={{marginBottom: '10px'}}>The Shipment Quantity column is the sum of all shipments that have a receive date in the same month for that planning unit</li>
      <li style={{marginBottom: '10px'}}>The “Shipment Quantity | Funding Source | Shipment Status | Procurement Agent | RO – Prime line No | Order No – Prime line No” column allows the user to see the disaggregated shipments that have receive date in the same month, including details of quantity, procurement agent, status, funding source, and order number assigned to that order</li>
      <li style={{marginBottom: '10px'}}>The “Consensus Consumption” column only appears if a user chooses multiple programs for aggregation</li>
      <li style={{marginBottom: '10px'}}>The PDF and CSV exports have multiple options, similar to the report dropdowns, allowing for exports of aggregated programs, multiple single product supply plans, or aggregated products (via EUs)</li>
    </ol>
  </div>
  <div style={{flex: '1 1 380px', border: '1.5px solid #000', padding: '15px', borderRadius: '4px', backgroundColor: '#eeeeee', fontSize: '0.9em', color: '#000'}}>
    <div style={{fontWeight: 'bold', textDecoration: 'underline', marginBottom: '15px'}}>Calculations for the Varying Supply Plan Report Views:</div>
    
    <div style={{fontWeight: 'bold', marginBottom: '5px'}}>Single Program</div>
    <div style={{marginBottom: '10px'}}>
      <u>Ending Balance</u> = Opening Balance – Consumption + Shipments ± Adjustments – Expiries
    </div>
    <div style={{marginBottom: '20px'}}>
      <u>MOS</u> = Ending Balance / AMC
    </div>
    
    <div style={{fontWeight: 'bold', marginBottom: '5px'}}>Multi-Program/Equivalency Unit</div>
    <div style={{fontStyle: 'italic', marginBottom: '10px'}}>Same ending balance & MOS calculation</div>
    
    <div style={{marginBottom: '15px'}}>
      <u>Forecast, Actual, Shipment, Adjustment, Expiries, MIN, MAX</u> = Σ selected programs individual data elements
    </div>
    <div>
      <u>Consensus consumption:</u> Σ selected program actuals (if available), otherwise forecasts. <i>Therefore, this could be a sum of actuals and forecasts depending on data available.</i>
    </div>
  </div>
</div>

