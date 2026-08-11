---
id: managing-programs-and-versions
title: "3. Managing Programs and Versions"
sidebar_label: "3. Managing Programs and Versions"
sidebar_position: 3
---
# Seção 3. Gerenciando Programas e Versões

## A. Trabalhando com dados do programa

|                      | On-line | Off-line |
| :------------------- | :------- | :------ |
| Dados de terceiros | Baixar | Importar |
| Dados dos usuários | Carregar | Exportar |


![Left Menu Bar](/img/media/image87.png)

Os dados do programa podem ser baixados, carregados, importados e exportados no QAT.

- Observe que os programas de previsão são totalmente diferentes dos programas de planejamento de abastecimento. Certifique-se de estar no módulo correto antes de fazer download, upload, importação ou exportação.
- Os usuários devem **fazer download** dos dados do programa para iniciar o planejamento ou previsão de fornecimento e precisam **fazer upload** de seus dados de volta ao servidor para compartilhar seu trabalho com outras pessoas.
- O upload pode ser "rascunho" ou "final". Carregar um programa de plano de fornecimento como "final" inicia o processo de revisão do plano de fornecimento. O status das versões do plano de fornecimento pode ser visualizado na tela **Versão e revisão do plano de fornecimento** — esta é a única função descrita nesta seção que está disponível para visualizadores de relatórios. Carregar um programa de previsão como "final" permite que os usuários importem essa previsão diretamente para o módulo do plano de fornecimento. Consulte [Importação de previsão QAT](07-supply-planning-module-program-data.md#importing-forecasts-into-supply-plans) para obter mais instruções sobre como importar uma previsão para um plano de fornecimento.
- Quando não há Internet disponível, o recurso **Exportar** permite que os usuários compartilhem seus dados com outros usuários por meio de dispositivos externos, como um pen drive/flash drive, que podem usar a função **Importar** dados para abrir esse arquivo no computador.
- Essas funções podem ser acessadas na barra de menu esquerda em **Gerenciamento de Programas**.
- Além disso, Download e Upload podem ser acessados ​​na barra de menu superior.

<div style={{textAlign: 'center'}}>

![Top Menu Bar](/img/media/image88.png)

_Top Ribbon Menu Bar_

</div>

## B. Baixar/Excluir

- <u>Quem?</u> Esta função está disponível para **Administradores de território/programa, usuários do programa e revisores do plano de fornecimento.** Não disponível ou necessária para **Visualizadores de relatórios**
- <u>Quando?</u> O usuário deve estar online para baixar um programa.
- <u>Por quê?</u> Os usuários devem baixar um programa se quiserem inserir ou atualizar dados, ou prever ativamente ou fornecer um plano (em vez de apenas visualizar relatórios). Os usuários podem baixar um programa quando percebem que sua versão local não é a mais recente (ou seja, quando o ícone de download está vermelho em vez do azul habitual). O download de programas permite que o usuário trabalhe offline. No entanto, observe que os programas <u>devem</u> ser baixados para completar as seguintes funções, <u>mesmo</u> se o usuário estiver online:
  - Planejamento de Fornecimento:
    - Inserir/atualizar dados (consumo, estoque/ajustes, remessas). Por exemplo, se o usuário estiver trabalhando em “Detalhes de Consumo”, deverá selecionar um programa da lista fornecida. A lista mostrará dados apenas para os "Programas" que foram baixados no banco de dados de índice local.
    - Plano de fornecimento/cenário
    - Ver lista de problemas QAT
    - Em relatórios, visualização dos dados no computador local (em vez de no servidor)
  - Previsão:
    - Inserir/atualizar dados (inserir/importar consumo real, adicionar/editar árvores de previsão, extrapolar, etc)
    - Em relatórios de validação ou análise de previsão, visualização dos dados no computador local (em vez de no servidor)

- <u>O que acontece quando um usuário baixa um programa?</u> Quando o usuário baixa um programa, ele é armazenado no banco de dados de índice local no formato JSON.

- <u>Como baixar um programa:</u>
  1. Determine se deseja fazer download do módulo de previsão ou de planejamento de fornecimento e navegue até o módulo correto (consulte <u>Seção 2.J Navegação e barra de menu</u>). Se você tiver acesso apenas a um módulo, poderá ignorar esta etapa.
  2. Vá para “Gerenciamento de Programas” &gt; “Baixar/Excluir Programa”. (Como alternativa, acesse esta tela clicando no ícone ![download icon](/img/media/image89.png) na barra superior direita do QAT). A tela exibirá os dados do programa conforme mostrado na figura abaixo.
     - <span style={{color: 'red'}}>Texto em vermelho</span> indica que o programa baixado não é a versão mais recente. <span style={{color: 'green'}}>Texto verde</span> indica que o programa baixado é a versão mais recente. O texto preto indica que o programa não foi baixado.

<div style={{textAlign: 'center'}}>

![Load Program Screen](/img/media/image91.png)

_Load Program Screen_

</div>

3. Para baixar
   uma. Marque a caixa de seleção ao lado do programa que deseja baixar. Por padrão, o QAT baixará a versão mais recente do programa selecionado.
   b. *(opcional)* Clique no botão triângulo ![triangle button](/img/media/image90.png) ao lado do programa para ver todas as versões do programa. As cinco versões mais recentes serão exibidas. Clique em “ver mais” para ver versões mais antigas. Use a caixa de seleção para selecionar quais versões específicas você gostaria de baixar.

<div style={{textAlign: 'center'}}>

![Version Tree – how to expand](/img/media/image92.png)

_Version Tree – how to expand_

</div>

   c. Clique no botão **Download** para baixar o programa para o seu sistema.

4. Para excluir ou limpar:
   uma. Clique no botão triangular ao lado do programa para ver todas as versões do programa.
   b. Selecione o ícone da lixeira ![trashcan icon](/img/media/image93.png) próximo à versão do programa que você deseja excluir. Se você tiver várias versões, também terá a opção de clicar no ícone de limpeza ![clean-up icon](/img/media/image94.png) para excluir todas as versões, exceto a versão local mais recente.

<div style={{textAlign: 'center'}}>

![Download Screen Version Tree – clean up and delete icons](/img/media/image95.png)

_Download Screen Version Tree – clean up and delete icons_

</div>

5. *(opcional)* No módulo de planejamento de fornecimento, os usuários podem baixar subconjuntos de seus planos de fornecimento à medida que seus programas começam a ter mais dados históricos.
   - Para isso, o usuário clica em “Baixar dados de gama específica do plano de abastecimento” e seleciona o mês/ano de início dos dados que irá baixar.
   - Se estiver marcado “Baixar gama específica de dados do plano de abastecimento”, a versão do programa selecionada só mostrará dados a partir da data desejada (mínimo 18 meses atrás).

<div style={{textAlign: 'center'}}>

![Download specific range of data](/img/media/image96.png)

_Download specific range of data_

</div>

   - A seleção do intervalo de datas se aplicaria a TODOS os programas selecionados para download. Se o usuário quiser baixar um programa completo (programa A) e um programa truncado (programa B), o usuário deverá concluir o processo de download duas vezes – uma para o programa completo e outra para o programa truncado.
   - Os dados mais antigos não baixados sempre existem no servidor e não podem ser excluídos ou substituídos.
   - Quando o usuário baixa o programa truncado (v1), atualiza-o e carrega uma nova versão (v2), a versão do servidor incluirá todos os dados, enquanto a nova versão local permanecerá truncada com a data de início previamente selecionada. O usuário pode excluir essa versão e baixar a v2 completa do servidor ou a v2 com um intervalo diferente de dados, conforme necessário

**Observação**: Se você baixar uma versão mais antiga ou se outro usuário carregar uma versão mais recente no servidor após o download, você verá uma mensagem como a abaixo na Figura 36 sempre que ocorrer a sincronização de dados mestre (ao fazer login, ao baixar um novo programa ou se solicitado manualmente pelo usuário).
- Se você selecionar “OK”, a versão mais recente do servidor será baixada e sua versão local será excluída permanentemente. Selecione “OK” apenas se concordar em descartar suas alterações ou se não tiver feito nenhuma alteração.
- Se você selecionar “cancelar”, nenhuma ação será tomada e você permanecerá com sua versão local.

<div style={{textAlign: 'center'}}>

![More recent server warning](/img/media/image97.png)

_“More recent server” warning on user login_

</div>

## C. Carregar

- <u>Quem?</u>
  - **Planejamento de fornecimento:** Administradores de aplicativos/domínios/programas e usuários do programa. Não disponível ou necessário para visualizadores de relatórios
  - **Previsão:** Administradores de aplicativos/domínios/programas e usuários do programa. Não disponível ou necessário para visualizadores de previsão
- <u>Por quê?</u>
  - **Enviando como rascunho:**
    - **Planos/previsões de fornecimento:** Compartilhe a versão local dos dados do programa com o servidor e outros usuários (carregando como rascunho)
  - **Enviando como final:**
    - **Planejamento de Fornecimento:** Indicar a todos os usuários que o plano de fornecimento foi totalmente atualizado e também iniciar o processo de revisão do plano de fornecimento
    - **Previsão:** permite que as previsões finais sejam importadas para o plano de fornecimento
- <u>O que acontece quando um usuário carrega um programa?</u> Quando o usuário carrega um Programa, ele se torna a versão mais recente no servidor e fica disponível para todos os outros usuários baixarem ou visualizarem
  - Observe que se uma versão truncada do programa do plano de fornecimento foi baixada (por exemplo, v10), quando o usuário carrega sua versão local (tornando-se v11), a nova versão no servidor conterá todos os dados, não apenas o subconjunto com o qual o usuário trabalhou.
- <u>Quando?</u> O usuário deve estar online para fazer upload de um programa

**Módulo Plano de Fornecimento** - Como fazer upload de um programa:

1. Certifique-se de estar no Módulo Plano de Fornecimento

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>Go to "Program Management" > "Upload Version."</li>
<li>Or, Click the <img src="/img/media/image98.png" alt="upload icon" style={{ verticalAlign: 'middle' }} /> icon in the top right bar in QAT</li>
</ol>

<div style={{ display: 'flex', flexDirection: 'row', gap: '2%', flexWrap: 'wrap' }}>

<div style={{ flex: '1 1 50%', minWidth: '300px' }}>

2. Use **Program** dropdown to select the appropriate program, if it is not already selected (only downloaded programs will be visible)
3. Select a **Version Type** using the dropdown:

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li><b>Draft Version:</b> Indicates the supply plan is a work in progress. Use this to share a supply plan with others, but not ready to be submitted into the supply plan review process.</li>
<li><b>Final Version:</b> Indicates that the supply plan has reached a final status, and is being submitted to the supply plan review process. Note that QAT will not allow the user to upload as final with any “Open” issues in the QAT Problem List. Please use the QAT problem list (see <a href="08-supply-planning-module-supply-planning.md#closing-and-addressing-problems">Closing and Addressing Problems</a>) to mark any open issue as "Addressed" with an explanatory note, or move issue to "in compliance" via data entry first.</li>
</ol>
</div>

<div style={{ flex: '1 1 45%', minWidth: '300px' }}>

<div style={{textAlign: 'center'}}>

![Upload Version](/img/media/image99.png)

_Supply Planning - Upload Version_

</div>

| Recurso | PROJECTO | FINAL |
| :---------------------------------------------------------- | :---: | :---: |
| Deve estar online para carregar a versão local no servidor |   ✓ |   ✓ |
| Dados enviados para sistemas ERP vinculados |   ✕ |   ✓ |
| Problemas ‘abertos’ permitidos na lista de problemas do QAT |   ✓ |   ✕ |
| Revisor do Plano de Fornecimento será informado |   ✕ |   ✓ |

<div style={{textAlign: 'center'}}>

_Uploading Supply Plan as Draft vs Final_

</div>

</div>

</div>

4. Em **Notas**, digite quaisquer notas gerais sobre esta versão, como um resumo das principais alterações feitas no plano de fornecimento e o raciocínio por trás dessas alterações.
5. Nas 4 abas – Consumo, Estoque, Remessa, lista de problemas do QAT – o QAT exibirá uma comparação detalhada dos detalhes do plano de fornecimento entre a “versão local” e a “versão do servidor”. Revise cada guia para ver se há registros destacados. Os registros <span style={{backgroundColor: '#ffff00'}}>amarelos</span> exigem sua ação antes que você possa fazer upload do plano de fornecimento

<div style={{ marginLeft: '20px', marginTop: '10px' }}>
     <b>Legend Explanation:</b>

<ul style={{ marginTop: '5px', listStyleType: 'disc' }}>
<li><span style={{backgroundColor: '#c2e0c6'}}>Green</span>: represents changes that have been made in the local version; by uploading your program, these changes will save to the online server as a new version.</li>
<li><span style={{backgroundColor: '#cfe2f3'}}>Light blue</span>: represents changes made by another user that has already been uploaded to the live/online version - because this is a data point that you did not edit, the server version will persist for this/these records.</li>
<li><span style={{backgroundColor: '#ffff00'}}>Yellow</span>: represents a conflict in data between the local version and the server version for the same data cell. You must resolve all yellow conflicts before the Upload button appears. To resolve a conflict, right click on the relevant row, and select "Resolve Conflict." In the pop-up screen, choose whether to keep the <span style={{backgroundColor: '#c2e0c6'}}>local version of the data</span> or the <span style={{backgroundColor: '#cfe2f3'}}>server version of the data</span>.</li>
</ul>
</div>

<div style={{textAlign: 'center'}}>

![Resolving Conflict while uploading supply plan](/img/media/image100.png)

_Resolving Conflict while uploading supply plan_

</div>

6. Após revisar todas as atualizações e resolver todos os conflitos, clique no botão “Upload”. QAT fornecerá uma mensagem de confirmação.
7. **(Para final)** Os planejadores de fornecimento e revisores do plano de fornecimento receberão uma notificação por e-mail confirmando que seu plano de fornecimento foi carregado como final.
8. **(Para final)** Planejadores de fornecimento, administradores de programa e revisores de plano de fornecimento, administradores de domínio, usuários de programa, visualizadores de dados e visualizadores de plano de fornecimento receberão uma notificação por e-mail quando seu plano de fornecimento for rejeitado. Eles também podem verificar o status da revisão do plano de fornecimento no relatório [Versão e revisão do plano de fornecimento](06-managing-programs-and-versions.md#d-supply-plan-version-and-review-supply-plan-module-only).

**Módulo de Previsão** – Como fazer upload de um programa:

1. Certifique-se de estar no Módulo de Previsão

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>Go to “Program Management” > “Upload Version.”</li>
<li>Or, Click the <img src="/img/media/image102.png" alt="upload icon" style={{ verticalAlign: 'middle' }} /> or <img src="/img/media/image103.png" alt="upload icon alternative" style={{ verticalAlign: 'middle' }} /> icon in the top right bar in QAT</li>
</ol>

<div style={{ display: 'flex', flexDirection: 'row', gap: '2%', flexWrap: 'wrap' }}>

<div style={{ flex: '1 1 50%', minWidth: '300px' }}>

2. Use **Program** dropdown to select the appropriate program, if it is not already selected (only downloaded programs will be visible)
3. Select a **Version Type** using the dropdown:

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li><b>Draft Version:</b> Indicates the forecast is a work in progress. Use this to share a forecast with others.</li>
<li><b>Final Version:</b> Indicates that the forecast has reached a final status and can be imported into the supply plan. Note that QAT will not allow the user to upload as final if no there are no changes between the latest server version and the version being uploaded.</li>
</ol>

</div>

<div style={{ flex: '1 1 45%', minWidth: '300px' }}>

<div style={{textAlign: 'center'}}>

![Upload Version](/img/media/image101.png)

_Forecasting - Upload Version_

</div>

| | PROJECTO | FINAL |
| :--- | :---: | :---: |
| Deve estar online para carregar a versão local no servidor | ✓ | ✓ |
| O consumo previsto pode ser importado para o módulo de planejamento de abastecimento | ✕ | ✓ |

<div style={{textAlign: 'center'}}>

_Uploading Forecast as Draft vs Final_

</div>

</div>

</div>

4. Em **Notas**, digite quaisquer notas gerais sobre esta versão, como um resumo das principais alterações feitas na previsão e o raciocínio por trás dessas alterações.
5. Nas 5 abas – Configurações de Versão, Unidade de Planejamento, Consumo, Árvore, Previsão Selecionada – o QAT exibirá uma comparação detalhada de detalhes entre a “Versão Local” e a “Versão Servidor”. Revise cada guia para ver se há registros destacados. Os registros <span style={{backgroundColor: '#ffff00'}}>amarelos</span> exigem sua ação antes que você possa fazer upload da sua versão

<div style={{ marginLeft: '20px', marginTop: '10px' }}>
     <b>Legend Explanation:</b>

<ul style={{ marginTop: '5px', listStyleType: 'disc' }}>
<li><span style={{backgroundColor: '#c2e0c6'}}>Green</span>: represents changes that have been made in the local version; by uploading your program, these changes will save to the online server as a new version.</li>
<li><span style={{backgroundColor: '#cfe2f3'}}>Light blue</span>: represents changes made by another user that has already been uploaded to the live/online version - because this is a data point that you did not edit, the server version will persist for this/these records.</li>
<li><span style={{backgroundColor: '#ffff00'}}>Yellow</span>: represents a conflict in data between the local version and the server version for the same data cell. You must resolve all yellow conflicts before the Upload button appears. To resolve a conflict, right click on the relevant row, and select "Resolve Conflict." In the pop-up screen, choose whether to keep the <span style={{backgroundColor: '#c2e0c6'}}>local version of the data</span> or the <span style={{backgroundColor: '#cfe2f3'}}>server version of the data</span>.</li>
</ul>
</div>

<div style={{textAlign: 'center'}}>

![Resolving Conflict while uploading forecast](/img/media/image104.png)

_Resolving Conflict while uploading forecast_

</div>

6. Após revisar a tabela e confirmar as previsões selecionadas, clique no botão ‘Upload’. Isso abrirá uma janela pop-up separada (“Validação de previsão”). A tela **Validação de previsão** oferece aos usuários a capacidade de verificar seu trabalho e qualquer coisa que possam ter perdido ao criar e selecionar a(s) previsão(ões). O usuário tem a opção de visualizar as diferentes validações apenas para as <u>previsões selecionadas</u> para cada unidade de planejamento, ou visualizar as validações para <u>todas</u> previsões no programa. Para alterar essa configuração, marque/desmarque a caixa na parte superior da tela. Para facilitar o acesso, as validações que estão na fonte <span style={{color: 'blue'}}>azul</span> estão vinculadas à página no QAT onde a validação está sendo sinalizada. Por exemplo, se uma previsão não estiver selecionada para uma das unidades de planejamento, clicar na unidade de planejamento na página de validação o direcionará para a tela Comparar e Selecionar, onde você poderá selecionar uma previsão.

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li><b>Section 1</b> flags any active planning units that do not have a selected forecast.</li>
<li><b>Section 2</b> looks at all active planning units that use consumption-based forecasting. 2a will flag if any of the consumption forecasts are missing actual consumption values (gap). 2b will flag any planning units that do not have at least 24 months of consumption data. If the checkbox at the top is selected, then only the planning units with a selected consumption forecast will be flagged. Planning units with a selected tree forecast will not be flagged in this section.</li>
<li><b>Section 3</b> looks at all active planning units that use tree forecasting. Planning units with a selected consumption forecast will not be flagged in this section. 3a flags any planning units that do not appear on any tree. 3b flags any tree branches that are missing a planning unit. 3c flags any tree nodes where the parent’s child nodes don’t add up to exactly 100%. In section 3c, clicking on the + icon will expand a table with details on which nodes and % are being flagged.</li>
<li><b>Section 4</b> compiles all of the notes across the different screens in the forecasting module. 4a will display notes from the Data Entry & Adjustment screen. 4b will display notes from the ‘Manage Tree’ screen. These notes include both tree specific notes and scenario specific notes. 4c will display notes from the ‘Manage Tree’ screen, specifically the notes in each node.</li>
</ol>

<div style={{textAlign: 'center'}}>

![Forecast Validation](/img/media/image105.png)

_Forecast Validation_

</div>

7. Após revisar todas as validações e resolver todos os problemas, clique no botão "Ok" para fazer o upload. QAT fornecerá uma mensagem de confirmação.

## D. Versão e revisão do plano de fornecimento (somente módulo do plano de fornecimento)

- <u>Quem?</u> Esta função está disponível para **Administradores de aplicativos/domínios/programas, usuários do programa, revisores do plano de fornecimento e visualizadores do plano de fornecimento**
- <u>Quando?</u> O usuário deve estar online. Os revisores do plano de fornecimento receberão um e-mail da QAT sempre que um plano de fornecimento for carregado como final (ou seja, pronto para revisão).
- <u>Por quê?</u> Esta função permite aos usuários **revisar o status de revisão do plano de fornecimento dos planos de fornecimento.**
  - **Planejadores de fornecimento** (administradores e usuários do programa) podem verificar o status de sua revisão
  - **Os revisores do plano de fornecimento** podem visualizar a fila de revisão
  - **Visualizadores do Plano de Fornecimento** podem verificar o status das revisões do plano de fornecimento
- <u>Como?</u>
  1. Acesse “Gerenciamento do Programa” &gt; “Versão e Revisão do Plano de Fornecimento” e a tela abaixo será exibida. Selecione o período do relatório, o país, o programa, o tipo de versão e o status. Nesta tabela, os usuários podem ver o status de todos os planos de fornecimento e quaisquer comentários de versão. Os usuários também podem usar as opções de pesquisa, filtro e classificação (consulte [Barra de navegação e menu](05-getting-started.md#j-navigation-and-menu-bar)) para encontrar programas específicos.

<div style={{textAlign: 'center'}}>

![Supply Plan Versions and Review](/img/media/image106.png)

_Supply Plan Versions and Review_

</div>

2. Clique em qualquer linha da tabela para abrir os detalhes desse plano de fornecimento.
   _**APENAS para revisores do plano de fornecimento –**_

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>Use the first tab “Supply Planning” to review the stock status and data elements of any given planning unit</li>
<li>
       Use the second tab “QAT Problem List” to review any issues within the supply plan.

<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Use the “Reviewed” column and check the checkbox in each row as you review them. All issues other than “in compliance” or “resolved” must be checked as “reviewed” in order for you to approve or reject the plan.</li>
<li>Use the “Enter Reviewer Notes” column to note any feedback for the supply planner.</li>
<li>Update the “Problem Status” as needed – Leave issues as “Addressed” if you want the supply planner to review them again in the next review cycle (the issue will become “open” in the next version). Mark issues as “Resolved” if they don’t need to be reviewed again even in future review cycles. Mark issues as “Open” if you want to communicate to the reviewer that they need to update their comments.</li>
<li>
           If there is a problem that should be addressed by the supply planner, but is not automatically flagged by the QAT Problem List, the reviewer can add a manual problem by clicking the “+” symbol <img src="/img/media/image103.png" alt="plus symbol" style={{ verticalAlign: 'middle' }} /> in the top right of the screen.

<ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
<li>Manual problems must have an associated planning unit, criticality, description, and suggestion. These problems will be added as a separate row in the QAT Problem List for supply planners to address.</li>
</ol>
</li>
</ol>
</li>
<li>
Após a análise, altere o status do Plano de Fornecimento para Aprovado ou Necessita Revisão, forneça notas (obrigatório) e clique em “Atualizar”
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>
Utilize the Version Notes History to view overall notes on the supply plan through time.

<div style={{textAlign: 'center'}}>

![View Notes History Button](/img/media/image107.png)

_View Notes History Button_

</div>

<div style={{textAlign: 'center'}}>

![Version Notes History Example](/img/media/image108.png)

_Version Notes History Example_

</div>
</li>
<li>
<b>Note:</b> There is an additional status for “No Review Needed” that can be used when a duplicate supply plan is uploaded or a supply plan is uploaded outside of the submission period window.

<div style={{textAlign: 'center'}}>

![Supply Plan Version and Review (second screen)](/img/media/image109.png)

_Supply Plan Version and Review (second screen)_

</div>
</li>
</ol>
</li>
</ol>

3. O usuário que enviou o plano de fornecimento para revisão será notificado por e-mail quando seu envio for aprovado, precisa de revisão ou não é necessária revisão. As regras para notificações por e-mail de revisão do plano de fornecimento são as seguintes:
<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>
Notification of <b>Uploaded</b> final supply plan
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: All supply plan reviewers with access to that program.</li>
<li>Cc'd: User who uploaded the version</li>
<li>Bcc'd: All program admins with access to that program.</li>
</ol>
</li>
<li>
Notificação de <b>Precisa de Revisão</b> plano de fornecimento:
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: The user who uploaded the supply plan.</li>
<li>Cc'd: Reviewer who requested revisions to the version</li>
<li>Bcc'd: All reviewers with access to that program as well as admins with access to that program.</li>
</ol>
</li>
<li>
Notificação de plano de fornecimento <b>aprovado</b>:
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: The user who uploaded the plan.</li>
<li>Cc'd: All users who have access to that program except for app admins and reports viewer.</li>
</ol>
</li>
<li>
Notificação de <b>nenhuma revisão necessária</b> plano de fornecimento:
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: The user who uploaded the plan</li>
<li>Cc'd: The supply plan reviewer</li>
</ol>
</li>
</ol>

## E. Exportar

- <u>Quem?</u> Esta função está disponível para **Administradores de aplicativos/domínios/programas, usuários de programas e revisores de planos de fornecimento.** Esta função não está disponível nem é necessária para **Visualizadores de relatórios.**
- <u>Por quê?</u> A função “Exportar Programa” é utilizada quando o usuário deseja exportar o programa para sua máquina local. Ao usar a função Exportar, os dados do programa podem ser compartilhados com outras pessoas offline. Por exemplo, o usuário A pode exportar um programa e salvar esse arquivo em uma unidade USB para compartilhar com o usuário B, que está offline.
- <u>O quê?</u> O arquivo de dados do programa será exportado no formato zip. O arquivo zip contém todos os dados dessa versão do programa. Os usuários podem optar por exportar em formato criptografado ou não criptografado. Este arquivo pode posteriormente ser compartilhado com outras pessoas para importação para o QAT ou, se não criptografado, analisado fora do QAT.
  - **Observação:** se o usuário baixou uma versão com um intervalo de dados selecionado, a exportação também será para esse intervalo de dados selecionado)

<div style={{textAlign: 'center'}}>

![Export Program Screen](/img/media/image110.png)

_Export Program Screen_

</div>

- <u>Como exportar um programa:</u>
<ol style={{ paddingLeft: '20px' }}>
<li>Determine whether you would like to export from the forecasting or the supply planning module, and navigate to the correct module (See [Section 2.J Navigation and Menu Bar](05-getting-started.md#j-navigation-and-menu-bar)). If you only have access to one module, you can ignore this step.</li>
<li>Go to “Program Management” > “Export Program”</li>
<li>
Select the program to be exported using the dropdown. Programs must be first downloaded before exporting is available. (See [Section 3.B Download/Delete Program](06-managing-programs-and-versions.md#b-downloaddelete-program)).
<ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
<li>If the program was downloaded with a subset of data, the export will also be limited to that same subset.</li>
</ul>
</li>
<li>
Determine whether or not you need an unencrypted version.
<ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
<li>For importing back into QAT, leave the “Do you want to encrypt” checkbox checked</li>
<li>For analyzing data outside of QAT, uncheck the “Do you want to encrypt” checkbox</li>
</ul>
</li>
<li>Click on the “Submit” button to save the changes.</li>
<li>A browse window will pop up. Select the folder you want to save the exported file in. Then click “Save.”</li>
<li>The .zip file will now be saved in the selected folder.</li>
<li>Share the .zip file with others as needed.</li>
</ol>

## F. Importar

<ul>
<li><u>Who?</u> This function is available for <b>Application/Realm/Program Admins, Program Users and Supply Plan Reviewers.</b> Not available or needed for <b>Report Viewers</b></li>
<li>
<u>Por quê?</u> A função “Importar Programa” é usada quando o usuário está trabalhando no programa em modo offline e deseja abrir um programa que foi exportado para um arquivo .zip
<ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
<li><b>Note:</b> The program data file must be saved in the zip format). For example, user B can (while offline) import a program that user A exported and saved to an external device</li>
<li><b>Note:</b> If the user exported a version with a selected range of data, the import will also be for that selected range of data.</li>
</ul>
</li>
<li><u>When?</u> This function can be used when offline or online.</li>
</ul>

<div style={{textAlign: 'center'}}>

![Import Program Screen](/img/media/image111.png)

_Import Program Screen_

</div>

- <u>Como importar um programa:</u>
<ol style={{ paddingLeft: '20px' }}>
<li>Determine whether you would like to export from the forecasting or the supply planning module, and navigate to the correct module (See [Section 2.J Navigation and Menu Bar](05-getting-started.md#j-navigation-and-menu-bar)). If you only have access to one module, you can ignore this step.</li>
<li>Go to “Program Management” > “Import Program”</li>
<li>Click “Browse”. Choose the required file that needs to be imported. The selected file must be in the zip format. The zip file may have multiple programs.</li>
<li>Click “Next”</li>
<li>Select the required program to import. (if only one program is in the file, it will be auto selected)</li>
<li>Click on the “Import” button to import the program into the local machine.</li>
</ol>

## G. Comparação de versões

**Objetivo:** permitir que os usuários visualizem e comparem duas versões diferentes do mesmo programa de previsão. Nesta tela, os usuários selecionarão um programa de previsão para visualizar e a partir daí selecionarão 2 versões desse programa para comparar. O usuário pode selecionar versões locais e de servidor, bem como versões preliminares e finais. Se a versão tiver um \* próximo a ela, isso indica que a versão é final. Depois que o usuário selecionar todos os menus suspensos, aparecerá uma tabela comparando as duas versões de previsão. Para cada combinação de unidade de planejamento e região, a tabela exibirá a previsão selecionada, a quantidade prevista e as notas para cada uma das duas versões de previsão. Esta tela é apenas para fins de visualização e nenhuma alteração pode ser feita nas previsões selecionadas nesta tela.

<div style={{textAlign: 'center'}}>

![Version Comparison Interface](/img/media/image112.png)

_Version Comparison_

</div>

<u>**Usando esta tela:**</u>

1. Primeiro, selecione um dos filtros de saída nos menus suspensos. Esta tela compara apenas um programa por vez, mas permite ao usuário comparar várias versões desse programa. O usuário tem a capacidade de comparar qualquer combinação de versões finais e preliminares, bem como versões locais e de servidor. Se a versão tiver um \* próximo a ela, isso indica que a versão é final. As notas da versão e o período de previsão aparecerão em cinza, pois são campos não editáveis. Para atualizar esses campos, vá para ‘Configurações de versão’.
2. Depois que todos os menus suspensos forem selecionados, uma tabela aparecerá com os dados de ambas as versões de previsão selecionadas. Para cada combinação de unidade de planejamento e região, a tabela mostrará a previsão selecionada, a quantidade total prevista para o período de previsão e quaisquer notas de previsão para essa previsão selecionada. Cada lado da tabela representa 1 das 2 versões de previsão selecionadas. A linha superior da tabela mostra para qual versão o lado está mostrando dados.
3. Esta tela pode ser exportada tanto em formato PDF quanto CSV clicando nos ícones no canto superior direito da página.