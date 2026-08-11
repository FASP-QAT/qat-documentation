---
id: forecasting-module-program-data
title: "7. Forecasting Module: Program Data"
sidebar_label: "7. Forecast Program Data"
sidebar_position: 10
---
# Seção 7. Módulo de Previsão: Dados do Programa

## A. Introdução

<div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
  <div style={{ flex: 1 }}>
    A forecast is an estimate/prediction of the quantities of products to be consumed/utilized by clients or consumers over a future period of time. In QAT, the forecast process is generally conducted in a specific order (see Figure to the right).<br/><br/>
    First, set up a program using Update Program Info or select a previous program using Download or Delete Program. After downloading the program, add information on the forecast period, threshold (%), products, and other program settings in the Update Version Settings and Updating Planning Unit screens. In QAT, users can either create forecasts by designing forecasting trees (tree-based forecast) or by leveraging historical consumption (consumption-based forecast) to reach a final forecast. For each product, choose consumption or tree methodology, or both!<br/><br/>
    Consumption-based forecasts are most useful in mature, stable programs that have a full supply of products and reliable data. This method can be the most reliable predictor of future consumption if future use is predicted to be very similar to the past. Ideally, 24+ months of monthly actual consumption data is available. If the necessary data for a consumption-based forecast is not available or not helpful in predicting future consumption, conduct a tree-based forecast, which flexibly accommodates all other forecast methods, such as morbidity, services, and demographic methods. Users can specify changes over time in a tree, either by directly specifying the rate of change or extrapolating from past data.<br/><br/>
    Once the various forecasts have been created, users can navigate to the Forecast Analysis and Outputs section to view and compare forecasts, and select the final forecast.
  </div>
  <div style={{ width: '220px', flexShrink: 0, textAlign: 'center' }}>
    <img src={require('@site/static/img/media/image234.png').default} alt="QAT Forecasting High-level Process Flow" style={{ width: '100%' }} />
    <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px' }}>Figure 156: QAT Forecasting High-level Process Flow</p>
  </div>
</div>

## B. Informações do programa

**<u>Objetivo:</u>** Permite que os usuários atualizem as informações básicas do programa após a criação inicial.

**<u>Usando esta tela:</u>**

_Administradores do programa_ podem usar a tela principal para:
* Atualize o nome do programa de previsão, o gerente do programa e o campo Notas. Os administradores do programa também podem optar por desativar ou ativar um programa nesta tela. Para alterações relacionadas à área técnica, organização ou nome de exibição do programa, os Administradores do Programa devem solicitar a alteração a um Administrador do Realm por meio do [Sistema de Helpdesk QAT.](05-getting-started.md#qat-helpdesk-and-tickets)

_Realm Admins_ podem usar a tela principal para:
* Atualize a Área Técnica, Organização, Nome do Programa de Previsão, Nome de Exibição do Programa, Gerente do Programa e o campo Notas. Os administradores do Realm também podem optar por desativar ou ativar um programa nesta tela.

## C. Configurações de versão

<img src={require('@site/static/img/media/image235.png').default} alt="Version Settings Interface" style={{ width: '100%', marginBottom: '15px' }} />

**<u>Objetivo:</u>** Permite que os usuários atualizem as configurações do programa e visualizem detalhes sobre versões anteriores. Para visualizar os resultados da previsão, use as telas na seção [Saída da análise de previsão](12-forecasting-module-reports-and-outputs.md).

**<u>Usando esta tela:</u>**
*Nota: Um programa de previsão deve ser baixado para atualizar as configurações da versão. Todas as versões anteriores de cada programa de previsão estarão em formato somente leitura; apenas a versão local está disponível para atualização e edição.*

Nesta tela, os usuários podem:

<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px 0' }}>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <span style={{ minWidth: '25px', flexShrink: 0 }}>1)</span>
    <div style={{ flex: 1 }}>
      Update the following program settings for the downloaded, local program:
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>a.</span>
          <div style={{ flex: 1 }}>
            <strong>Version Notes</strong> – a free form editable text field that allows users a place to provide general notes about a particular forecast version. It is also visible and editable when uploading a program.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>b.</span>
          <div style={{ flex: 1 }}>
            <strong>Date Uploaded/Uploaded by User</strong> – denotes the user that uploaded each version of the forecast to the server and on what date. Useful for understanding the lifecycle of each program.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>c.</span>
          <div style={{ flex: 1 }}>
            <strong>Forecast Start, Forecast Period (Months), and Forecast End</strong> – based on the start & end date, QAT will automatically calculate the forecast period in months. Alternatively, users can choose to enter a forecast start date and number of months in the forecast period, and QAT will automatically calculate the forecast end date.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>d.</span>
          <div style={{ flex: 1 }}>
            <strong># Of Days in Month</strong> – used in consumption-based forecasts for adjusting actual consumption against the number of days stocked out. A user can choose anywhere from 15 to 31 days; however, QAT will default to “calendar days.” This field could be useful if a facility only wants to use business days (~20 days) to calculate the stockout rate.
            <div style={{ border: '3px double #000', padding: '10px 20px', margin: '15px auto', width: 'fit-content', backgroundColor: '#fff', textAlign: 'center', fontFamily: 'monospace' }}>
              Stock Out Rate = Stocked Out (days) / (# of Days in Month)<br/>
              Adjusted Consumption = Actual Consumption / Reporting Rate / (1 - Stock Out Rate)
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>e.</span>
          <div style={{ flex: 1 }}>
            <strong>Freight percentage</strong> – used in forecasting output screens and reports for estimating total procurement costs. This field is not mandatory and can be updated at any time.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>a.</span>
          <div style={{ flex: 1 }}>
            <strong>Forecast Threshold</strong> – this metric is used in the Compare and Select screen. QAT compares available Consumption Forecasts and Tree Forecasts. For any Tree Forecasts, QAT will flag the percentage above the highest or below the lowest Consumption Forecast. The comparison will be highlighted in <span style={{ color: 'red' }}>red text</span> if it is outside the threshold percentages set by the user in this screen. Assuming reliable actual consumption data, this comparison helps users determine if their Tree Forecasts are realistic. These two fields, high and low, are not mandatory and can be updated at any time.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <span style={{ minWidth: '25px', flexShrink: 0 }}>2)</span>
    <div style={{ flex: 1 }}>
      See a historical lifecycle of each program through all its versions.
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>a.</span>
          <div style={{ flex: 1 }}>
            View all version settings above
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>b.</span>
          <div style={{ flex: 1 }}>
            (Right click) View the <a href="06-managing-programs-and-versions.md#forecast-validation">Forecast Validation</a> screen (same screen as viewed during the Upload process) – which lists missing forecasts, missing data and all notes. This serves as an easy for users to understand previous forecasts without downloading them. Use the <a href="11-forecasting-module-forecasting.md">Monthly Forecast</a>, <a href="12-forecasting-module-reports-and-outputs.md">Forecast Summary</a> or <a href="12-forecasting-module-reports-and-outputs.md">Version Comparison</a> screens to view the forecast outputs from other versions.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## D. Unidades de planejamento

**<u>Objetivo:</u>** Permite que os usuários adicionem e atualizem unidades de planejamento e as configurações de unidade de planejamento associadas que serão usadas em suas previsões e para cálculo nas telas de saída de previsão.

**<u>Usando esta tela:</u>**
*Observação: um programa de previsão deve ser baixado para adicionar ou atualizar unidades de planejamento e suas configurações.*

1. **Adicionar unidades de planejamento** – Os usuários precisarão adicionar quaisquer unidades de planejamento nesta tela que gostariam de prever. As unidades de planejamento podem ser adicionadas manualmente ou copiadas e coladas na tela ‘Atualizar unidade de planejamento’ do módulo Planejamento de fornecimento, se a unidade de planejamento já tiver sido adicionada ao plano de fornecimento de um usuário.
2. **Atualizar configurações da unidade de planejamento** – Os usuários também podem usar esta tela para atualizar quaisquer unidades de planejamento e suas configurações associadas. Os usuários devem sempre Master Data Sync após atualizar qualquer configuração para ver as alterações ocorrendo em outras telas do módulo de previsão. As configurações da Unidade de Planejamento e breves explicações são as seguintes:

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Column Name</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Description</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Used Where?</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Conversion Factor (FU:PU)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>A non-editable field providing information on the conversion factor between the chosen PU and it's associated FU.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Select screens (Data Entry & Adjustment, Compare & Select, Monthly Forecast) allow data entry/viewing in PU or FU</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Consumption Forecast?</strong></td>
      <td rowSpan={2} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>For each PU, users can choose one or both methods. If the forecast type is checked for the PU, it will appear in the Consumption and Tree screens.</td>
      <td rowSpan={2} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>Building your forecasts and then analyzing in the Compare & Select screen</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Tree Forecast?</strong></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Stock on Hand</strong> <em>(start of forecast period)</em></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>The actual or projected stock (quantity) at the beginning of your forecast period. Users can utilize the supply planning module to determine the SOH, if desired.</td>
      <td rowSpan={3} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>Forecast Summary to calculate the procurement gap</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Existing Shipments</strong> <em>(forecast period)</em></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Total existing shipment quantity during the forecast period. Users can utilize the supply planning module to determine the existing shipment quantity <em>(it is recommended to not include planned shipment quantities unless there is a high likelihood of ordering).</em></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Desired Months of Stock</strong> <em>(end of forecast period)</em></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>The MOS you wish to have at the end of your forecast.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Price Type</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Choose a specific procurement agent or "Custom."</td>
      <td rowSpan={2} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>Forecast Summary to calculate the cost of the procurement gap</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Unit Price</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Auto-filled based on procurement agent or manually entered by a user.</td>
    </tr>
  </tbody>
</table>
<p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.9em', marginTop: '5px' }}>Table 9: Forecasting Module Planning Unit Settings</p>

## E. Unidades de Equivalência

**<u>Objetivo:</u>** Permitir que os usuários gerenciem unidades de equivalência. As Unidades de Equivalência (EUs) permitem que os usuários agreguem dados de produtos diferentes, mas relacionados. Eles permitem que os usuários agrupem várias unidades de previsão para agregação em [Relatórios e resultados](12-forecasting-module-reports-and-outputs.md).

**<u>Usando esta tela:</u>**

**Mapeamento de unidades de equivalência para unidades de previsão**
Utilize a tela principal para gerenciar mapeamentos entre unidades de equivalência e unidades de previsão. Os mapeamentos em nível de território estão disponíveis para todos os usuários e são indicados pelo Programa "Nível de Reino". No entanto, os administradores do programa podem criar mapeamentos específicos do programa (adicionando uma linha e marcando-a para um EU específico). Se houver algum conflito, os mapeamentos específicos do programa terão precedência e serão usados ​​em vez dos mapeamentos em nível de região.

Por exemplo, um usuário está prevendo medicamentos para tratar QATite, uma condição em que as pessoas não conseguem parar de usar QAT. O usuário pode prever por diferentes tratamentos (diferentes unidades de previsão), mas deseja ver como eles são agregados. Para o exemplo abaixo, um paciente precisaria de 14 comprimidos de FASPicilina, ou 1 tubo de FASPasona (creme), ou 0,5 frascos de FASPicaína, ou 2 barras de chocolate para tratar QATite. Assim, caso pacientes diferentes sejam submetidos a tratamentos diferentes, um utilizador pode agregar esses diferentes tratamentos criando/utilizando uma Unidade de Equivalência (UE).

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Equivalency Unit</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Forecasting Unit</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Conversion to EU</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Average Treatment required to cure QATitis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet of FASPicillin</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>14</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet a day for 2 weeks</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>5mL tube of FASPasone (cream)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>1</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5mL/day applied on the forehead over 10 days (1 tube total)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2mL vial of FASPicaine (injection)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0.5</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>One injection of 1mL (Two people can share one vial)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of white chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>2</td>
      <td rowSpan={3} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'middle' }}>2 bars of chocolate. The type of chocolate does not matter, as all chocolate contains the natural form of FASPicillin.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of dark chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>2</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of milk chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>2</td>
    </tr>
  </tbody>
</table>
<p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.9em', marginTop: '5px' }}>Table 10: EU Example - Treatment for QATitis</p>

**Etapas para criar e gerenciar unidades de equivalência**
1. Um usuário deve primeiro verificar se a UE já existe nos Dados Mestres do QAT navegando até “Realm Masters” → “Equivalency Units”.
2. Se a UE não existir, clique em “Gerenciar Unidade de Equivalência” e depois em “Adicionar Linha” e os usuários poderão inserir a UE que gostariam de utilizar para seu programa específico em todo o QAT. Esta UE será específica do programa e não estará disponível para outros programas. Se houver uma UE que possa beneficiar a comunidade QAT, os usuários podem solicitá-la através do [Sistema de suporte técnico de tickets QAT.](05-getting-started.md#qat-helpdesk-and-tickets)

<div style={{ margin: '15px 0' }}>
  <img src={require('@site/static/img/media/image237.png').default} alt="Manage Equivalency Unit Button" />
</div>

3. Se a UE existir e um usuário desejar mapear unidades de previsão para a UE existente, ele poderá clicar em “Adicionar linha” na tela principal e mapear a unidade de previsão para a UE em nível de programa. Se um usuário quiser mapear a unidade de previsão para uma UE existente em nível de domínio e achar que isso beneficiaria a comunidade QAT, os usuários poderão solicitá-la por meio do [Sistema de suporte técnico de tickets QAT.](05-getting-started.md#qat-helpdesk-and-tickets)

<div style={{ margin: '15px 0' }}>
  <img src={require('@site/static/img/media/image238.png').default} alt="Equivalency Unit Mappings Screen" />
</div>

4. Os usuários também podem editar EUs específicos do programa na tela principal.
5. O usuário deve clicar em “Enviar” quando terminar a edição e o Master Data Sync, para ver o EU disponível nos menus suspensos nas telas Relatórios e Resultados.

### Onde as unidades de equivalência são usadas?

* Na tela [Compare and Select](12-forecasting-module-reports-and-outputs.md#9a-compare-and-select), o usuário pode exibir suas previsões em UEs. Usando o exemplo acima, um usuário que prevê 10.000 barras de chocolate amargo por mês poderia optar por exibir sua previsão na UE de “Tratamentos para QATite” e, em vez disso, exibir sua previsão como 5.000 “Tratamentos para QATite” por mês.
* Na tela [Previsão Mensal](12-forecasting-module-reports-and-outputs.md#9b-monthly-forecast), o usuário pode exibir suas previsões selecionadas por unidades de planejamento individuais ou agregar entre unidades de planejamento se estiverem conectadas por UEs. Por exemplo, se um usuário previsse 10.000 barras de chocolate amargo, 10.000 barras de chocolate branco e 14.000 comprimidos de FASPicilina por mês, o QAT exibiria 7.000 “Tratamentos para QATite”.
* Na tela do relatório [Erro de previsão (mensal)](09-supply-planning-module-reports.md#d2-forecast-error-monthly), os usuários também podem visualizar o consumo real e previsto em unidades de equivalência.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Forecast</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Equivalent in "Treatments for QATitis"</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>10,000 bars of dark chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>5,000</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>10,000 bars of white chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>5,000</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>14,000 tablets of FASPicillin</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>1,000</td>
    </tr>
    <tr style={{ fontWeight: 'bold' }}>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>Total</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>7,000</td>
    </tr>
  </tbody>
</table>
