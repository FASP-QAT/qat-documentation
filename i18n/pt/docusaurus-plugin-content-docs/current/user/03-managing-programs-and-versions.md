---
id: managing-programs-and-versions
title: "Gerenciando programas e versões"
sidebar_label: "Gerenciando programas e versões"
sidebar_position: 3
---
# Gerenciando programas e versões

## ![](/img/media/image87.png)Trabalhando com dados de programa

|                  |            |             |
| ---------------- | ---------- | ----------- |
|                  | **On-line** | **Off-line** |
| Dados de terceiros | Baixar | Importar |
| Dados dos usuários | Carregar | Exportar |

Tabela 6 – Trabalhando com Dados do Programa

Os dados do programa podem ser baixados, carregados, importados e exportados no QAT.

-> Observe que os programas de previsão são totalmente diferentes dos programas de planejamento de abastecimento. Certifique-se de estar no módulo correto antes de fazer download, upload, importação ou exportação.

- > Os usuários devem **fazer download** dos dados do programa para iniciar o planejamento ou previsão de fornecimento e precisam **fazer upload** de seus dados de volta ao servidor para compartilhar seu trabalho com outras pessoas.

- > O upload pode ser “rascunho” ou “final”. Carregar um programa de plano de fornecimento como “final” inicia o processo de revisão do plano de fornecimento. O status das versões do plano de fornecimento pode ser visualizado na tela **Versão e revisão do plano de fornecimento** – esta é a única função descrita nesta seção que está disponível para visualizadores de relatórios. Carregar um programa de previsão como “final” permite que os usuários importem essa previsão diretamente para o módulo do plano de fornecimento. Consulte [Importação de previsão QAT](04-supply-planning-module-program-data.md#qat-forecast-import) para obter mais instruções sobre como importar uma previsão para um plano de fornecimento.

- > Quando não há Internet disponível, o recurso **Exportar** permite que os usuários compartilhem seus dados com outros usuários por meio de dispositivos externos, como um pen drive/flash drive, que podem então usar a função **Importar** dados para abrir esse arquivo em seu computador.

- > Essas funções podem ser acessadas na barra de menu esquerda em **Gerenciamento de Programas.**

-> Além disso, Download & Upload pode ser acessado na barra de menu superior (veja a Figura 32)

![A blue circle with a arrow Description automatically generated](/img/media/image88.png)

Figura 47 Barra de menu

## Baixar/Excluir

- <u>Who?</u> Esta função está disponível para **Reino/Programa
Administradores, usuários do programa e revisores do plano de fornecimento. Não disponível ou necessário para Relatório
Espectadores**

- <u>When?</u> O usuário deve estar online para baixar um programa.

- <u>Por que </u>? Os usuários devem baixar um programa se
deseja inserir ou atualizar dados, ou prever ou planejar ativamente (em vez de
apenas visualizando relatórios). Os usuários podem baixar um programa quando percebem que
sua versão local não é a mais recente (ou seja, quando o ícone de download está vermelho
![P1040\#yIS1](/img/media/image89.png) em vez do azul habitual
![P1040\#yIS2](/img/media/image90.png)). O download de programas permite
usuário para trabalhar off-line. No entanto, observe que os programas <u> devem ser baixados </u> para completar as seguintes funções, <u> até mesmo </u> se o usuário estiver online:
  - Planejamento de Fornecimento:
    - Inserir/atualizar dados (consumo, estoque/ajustes, remessas). Por exemplo, se o usuário estiver trabalhando em “Detalhes de Consumo”, deverá selecionar um programa da lista fornecida. A lista mostrará dados apenas para os “Programas” que foram baixados no banco de dados de índice local.

    - Plano de fornecimento/cenário

    - Ver lista de problemas QAT

    - Em relatórios, visualização dos dados no computador local (em vez de no servidor)

  - Previsão:
    - Inserir/atualizar dados (inserir/importar consumo real, adicionar/editar árvores de previsão, extrapolar, etc)

    - Em relatórios de validação ou análise de previsão, visualização dos dados no computador local (em vez de no servidor)

- <u>O que acontece quando um usuário baixa um programa</u>?
Quando o usuário baixa um programa, ele é armazenado no banco de dados de índice local
no formato JSON.

- <u>Como baixar um programa</u>:

<!-- lista final -->

1. > Determine se deseja fazer download do módulo de previsão ou de planejamento de fornecimento e navegue até o módulo correto (consulte [Seção 2.J Navegação e barra de menu](#barra de navegação e menu)). Se você tiver acesso apenas a um módulo, poderá ignorar esta etapa.

2. > Vá para “Gerenciamento de Programas” \> “Baixar/Excluir Programa”. (Como alternativa, acesse esta tela clicando no ícone ![P1055#yIS1](/img/media/image89.png) na barra superior direita do QAT). A tela exibirá os dados do programa conforme mostrado na figura abaixo.
    -> O texto vermelho indica que o programa baixado não é a versão mais recente. O texto verde indica que o programa baixado é a versão mais recente. O texto preto indica que o programa não foi baixado.

![A screenshot of a computer Description automatically generated](/img/media/image91.png)

Figura 48: Tela Carregar Programa

3. > Para baixar
    1. > Marque a caixa de seleção ao lado do programa que deseja baixar. Por padrão, o QAT baixará a versão mais recente do programa selecionado.

    2. > _(opcional)_ Clique no botão triângulo ao lado do programa para ver todas as versões do programa. As cinco versões mais recentes serão exibidas. Clique em “ver mais” para ver versões mais antigas. Use a caixa de seleção para selecionar quais versões específicas você gostaria de baixar.

![P1063#yIS1](/img/media/image92.png)

Figura 49: Árvore de versões – como expandir

3. > Clique no botão “**Download**” para baixar o programa para o seu sistema.

<!-- lista final -->

4. > Para excluir ou limpar:
    1. > Clique no botão triângulo ao lado do programa para ver todas as versões do programa.

    2. > Selecione o ícone da lixeira ![P1068#yIS1](/img/media/image93.png) ao lado da versão do programa que deseja excluir. Se você tiver várias versões, também terá a opção de clicar no ícone de limpeza ![P1068#yIS2](/img/media/image94.png) para excluir todas as versões, exceto a versão local mais recente.

> ![P1069#yIS1](/img/media/image95.png)

Figura 50: Árvore de versões da tela de download – limpar e excluir ícones

5. > _(opcional)_ No módulo de planejamento de fornecimento, os usuários podem baixar subconjuntos de seus planos de fornecimento à medida que seus programas começam a ter mais dados históricos.

<!-- lista final -->

- > **Para isso, o usuário clica em “Baixar dados de faixa específica do plano de fornecimento” e seleciona o mês/ano inicial para os dados que irá baixar.**

- > Se a opção “**Baixar dados específicos do plano de abastecimento**” estiver marcada, a versão do programa selecionada só mostrará dados a partir da data desejada (mínimo 18 meses atrás).

![A screenshot of a computer Description automatically generated](/img/media/image96.png)

Figura 51 Baixe um intervalo específico de dados

- > **A seleção do intervalo de datas se aplicaria a TODOS os programas selecionados para download. Se o usuário quiser baixar um programa completo (programa A) e um programa truncado (programa B), o usuário deverá concluir o processo de download duas vezes – uma para o programa completo e outra para o programa truncado.**

- > **Dados mais antigos não baixados sempre existem no servidor e não podem ser excluídos ou substituídos.**

- > **Quando o usuário baixa o programa truncado (v1), atualiza-o e carrega uma nova versão (v2), a versão do servidor incluirá todos os dados, enquanto a nova versão local permanecerá truncada com a data de início previamente selecionada. O usuário pode excluir essa versão e baixar a v2 completa do servidor ou a v2 com um intervalo de dados diferente, conforme necessário**

Nota: Se você baixar uma versão mais antiga ou se outro usuário carregar uma versão mais recente no servidor após o download, você verá uma mensagem como a abaixo na Figura 36 sempre que ocorrer a sincronização de dados mestre (ao fazer login, ao baixar um novo programa ou se solicitado manualmente pelo usuário).

-> Se você selecionar “OK”, a versão mais recente do servidor será baixada e sua versão local será excluída permanentemente. Selecione “OK” apenas se concordar em descartar suas alterações ou se não tiver feito nenhuma alteração.

-> Se você selecionar “cancelar”, nenhuma ação será tomada e você permanecerá com sua versão local.

![P1074#yIS1](/img/media/image97.png)

Figura 52: Aviso “Servidor mais recente” no login do usuário

## Carregar

- <u>Quem?</u>
  - **<u>Planejamento de fornecimento</u>: administradores de aplicativos/domínios/programas e usuários do programa. Não disponível ou necessário para visualizadores de relatórios**

  - **<u>Forecasting</u>: Administradores de Aplicativo/Reino/Programa e Usuários do Programa. Não disponível ou necessário para visualizadores de previsão**

- <u>Por que </u>?
  - > **Enviando como <u>draft</u>:**
    - **Planos/previsões de fornecimento:** Compartilhe a versão local dos dados do programa com o servidor e outros usuários (carregando como rascunho)

  - > **Enviando como <u>final</u>:**
    - **Planejamento de Fornecimento:** Indicar a todos os usuários que o plano de fornecimento foi totalmente atualizado e também iniciar o processo de revisão do plano de fornecimento

    - **Previsão:** permite que as previsões finais sejam importadas para o plano de fornecimento

- <u>O que acontece quando um usuário carrega um programa</u>?
Quando o usuário carrega um Programa, ele se torna a versão mais recente no servidor
e está disponível para todos os outros usuários baixarem ou visualizarem
  - Observe que se uma versão truncada do programa do plano de fornecimento foi baixada (por exemplo, v10), quando o usuário carrega sua versão local (tornando-se v11), a nova versão no servidor conterá todos os dados, não apenas o subconjunto com o qual o usuário trabalhou.

- <u>When?</u> O usuário deve estar online para fazer upload de um programa

**Módulo Plano de Fornecimento -** Como fazer upload de um programa:

1. Certifique-se de estar no Módulo Plano de Fornecimento
    1. Vá para “Gerenciamento de programas” \> “Carregar versão”.

    2. Ou clique no ícone ![P1097#yIS1](/img/media/image98.png) na barra superior direita do QAT

2. ![](/img/media/image99.png)Use o menu suspenso **Programa** para selecionar o programa apropriado, se ainda não estiver selecionado (somente os programas baixados ficarão visíveis)

3. Selecione um **Tipo de versão** usando o menu suspenso:
    1. **Versão preliminar**: indica que o plano de fornecimento é um trabalho em andamento. Use isto para compartilhar um plano de fornecimento com outras pessoas, mas ainda não está pronto para ser enviado ao processo de revisão do plano de fornecimento.

    2. **Versão Final**: Indica que o plano de fornecimento atingiu o status final e está sendo submetido ao processo de revisão do plano de fornecimento. Observe que o QAT não permitirá que o usuário carregue como final qualquer problema “Aberto” na lista de problemas do QAT. Use a lista de problemas do QAT (consulte [Encerramento e resolução de problemas](06-supply-planning-module-reports.md#closing-and-addressing-problems)) para marcar qualquer problema em aberto como “Abordado” com uma nota explicativa ou mova o problema para “em conformidade” por meio da entrada de dados primeiro.

4. Em **Notas**, digite quaisquer notas gerais sobre esta versão, como um resumo das principais alterações feitas no plano de fornecimento e o raciocínio por trás dessas alterações.

5. Nas 4 abas – Consumo, Estoque, Remessa, lista de problemas do QAT – o QAT exibirá uma comparação detalhada dos detalhes do plano de fornecimento entre a “versão local” e a “versão do servidor”. Revise cada guia para ver se há registros destacados. Os registros amarelos exigem sua ação antes de você poder carregar o plano de fornecimento

> **Explicação da legenda**:

-> Verde: representa alterações que foram feitas na versão local; ao enviar seu programa, essas alterações serão salvas no servidor online como uma nova versão.

- > Azul claro: representa alterações feitas por outro usuário que já foi carregado na versão live/online – por se tratar de um ponto de dados que você não editou, a versão do servidor persistirá para este/estes registros.

-> Amarelo: representa conflito de dados entre a versão local e a versão do servidor para a mesma célula de dados. Você deve resolver todos os conflitos amarelos antes que o botão Upload apareça. Para resolver um conflito, clique com o botão direito na linha relevante e selecione “Resolver Conflito”. Na tela pop-up, escolha se deseja manter a versão local dos dados ou a versão do servidor dos dados. (ver Figura 32)

![P1109#yIS1](/img/media/image100.png)

Figura 55 Resolvendo Conflitos ao Carregar o Plano de Fornecimento

6. Após revisar todas as atualizações e resolver todos os conflitos, clique no botão “Upload”. QAT fornecerá uma mensagem de confirmação.

7. **(Para final)** Os planejadores de fornecimento e revisores do plano de fornecimento receberão uma notificação por e-mail confirmando que seu plano de fornecimento foi carregado como final.

8. **(Para final)** Planejadores de fornecimento, administradores de programa e revisores de plano de fornecimento, administradores de domínio, usuários de programa, visualizadores de dados e visualizadores de plano de fornecimento receberão uma notificação por e-mail quando seu plano de fornecimento for rejeitado. Eles também podem verificar o status da revisão do plano de fornecimento no relatório [Versão e revisão do plano de fornecimento](#supply-plan-version-and-review-supply-plan-module-only).

**Módulo de previsão –** Como fazer upload de um programa:

1. Certifique-se de estar no Módulo de Previsão
    1. Vá para “Gerenciamento de programas” \> “Carregar versão”.

    2. ![](/img/media/image101.png)Or, clique no ícone ![P1119#yIS1](/img/media/image102.png) ou ![P1119#yIS2](/img/media/image103.png) na barra superior direita em QAT

2. Use o menu suspenso **Programa** para selecionar o programa apropriado, se ainda não estiver selecionado (somente os programas baixados ficarão visíveis)

3. Selecione um **Tipo de versão** usando o menu suspenso:
    1. **Versão preliminar**: indica que a previsão é um trabalho em andamento. Use isto para compartilhar uma previsão com outras pessoas.

    2. **Versão Final**: Indica que a previsão atingiu o status final e pode ser importada para o plano de fornecimento. Observe que o QAT não permitirá que o usuário faça upload como final se não houver alterações entre a versão mais recente do servidor e a versão que está sendo carregada.

4. Em **Notas**, digite quaisquer notas gerais sobre esta versão, como um resumo das principais alterações feitas na previsão e o raciocínio por trás dessas alterações.

<!-- lista final -->

9. Nas 5 abas – Configurações de Versão, Unidade de Planejamento, Consumo, Árvore, Previsão Selecionada – o QAT exibirá uma comparação detalhada de detalhes entre a “Versão Local” e a “Versão do Servidor”. Revise cada guia para ver se há registros destacados. Os registros amarelos exigem sua ação antes de você poder enviar sua versão

> **Explicação da legenda**:

-> Verde: representa alterações que foram feitas na versão local; ao enviar seu programa, essas alterações serão salvas no servidor online como uma nova versão.

- > Azul claro: representa alterações feitas por outro usuário que já foi carregado na versão live/online – por se tratar de um ponto de dados que você não editou, a versão do servidor persistirá para este/estes registros.

-> Amarelo: representa conflito de dados entre a versão local e a versão do servidor para a mesma célula de dados. Você deve resolver todos os conflitos amarelos antes que o botão Upload apareça. Para resolver um conflito, clique com o botão direito na linha relevante e selecione “Resolver Conflito”. Na tela pop-up, escolha se deseja manter a versão local dos dados ou a versão do servidor dos dados. (veja a Figura 42 Resolvendo Conflitos ao Carregar a Previsão)

![P1131#yIS1](/img/media/image104.png)

Figura 58 Resolvendo conflitos durante o upload da previsão

5. Após revisar a tabela e confirmar as previsões selecionadas, clique no botão ‘Upload’. Isso abrirá uma janela pop-up separada (“Validação de previsão”). A tela **Validação de previsão** oferece aos usuários a capacidade de verificar seu trabalho e qualquer coisa que possam ter perdido ao criar e selecionar a(s) previsão(ões). O usuário tem a opção de visualizar as diferentes validações apenas para as previsões <u>selected</u> para cada unidade de planejamento, ou visualizar as validações para as previsões <u>all</u> no programa. Para alterar essa configuração, marque/desmarque a caixa na parte superior da tela. Para facilitar o acesso, as validações que estão em fonte azul estão vinculadas à página do QAT onde a validação está sendo sinalizada. Por exemplo, se uma previsão não estiver selecionada para uma das unidades de planejamento, clicar na unidade de planejamento na página de validação o direcionará para a tela Comparar e Selecionar, onde você poderá selecionar uma previsão.
    1. A **Seção 1** sinaliza quaisquer unidades de planejamento ativas que não tenham uma previsão selecionada.

2. A **Seção 2** analisa todas as unidades de planejamento ativas que usam previsão baseada em consumo. 2a sinalizará se alguma das previsões de consumo estiver faltando valores de consumo reais (gap). 2b sinalizará quaisquer unidades de planejamento que não tenham pelo menos 24 meses de dados de consumo. Se a caixa de seleção na parte superior estiver marcada, somente as unidades de planejamento com uma previsão de consumo selecionada serão sinalizadas. As unidades de planejamento com uma previsão de árvore selecionada não serão sinalizadas nesta seção.

    3. A **Seção 3** analisa todas as unidades de planejamento ativas que usam previsão de árvore. As unidades de planejamento com previsão de consumo selecionada não serão sinalizadas nesta seção. 3a sinaliza quaisquer unidades de planejamento que não aparecem em nenhuma árvore. 3b sinaliza qualquer galho de árvore que não tenha uma unidade de planejamento. 3c sinaliza quaisquer nós de árvore onde os nós filhos do pai não somam exatamente 100%. Na seção 3c, clicar no ícone + expandirá uma tabela com detalhes sobre quais nós e% estão sendo sinalizados.

    4. A **Seção 4** compila todas as notas nas diferentes telas do módulo de previsão. 4a exibirá notas da tela Entrada e ajuste de dados. 4b exibirá notas da tela ‘Gerenciar Árvore’. Essas notas incluem notas específicas da árvore e notas específicas do cenário. 4c exibirá notas da tela ‘Gerenciar Árvore’, especificamente as notas em cada nó.

![P1139#yIS1](/img/media/image105.png)

Figura 59: Validação de Previsão

6. Após revisar todas as validações e resolver todos os problemas, clique no botão “Ok” para fazer o upload. QAT fornecerá uma mensagem de confirmação.

## Versão e revisão do plano de fornecimento (apenas módulo do plano de fornecimento)

- <u>Who?</u> Esta função está disponível para **Aplicativo/Reino/Programa
Administradores, usuários do programa, revisores do plano de fornecimento e visualizadores do plano de fornecimento**

- <u>When?</u> O usuário deve estar online. Revisores do Plano de Fornecimento
receberá um e-mail da QAT sempre que um plano de fornecimento for carregado como final (ou seja,
pronto para revisão).

- <u>Por que </u>? Esta função permite aos usuários **revisar o
status de revisão do plano de fornecimento dos planos de fornecimento.**
  - **Planejadores de fornecimento** (administradores e usuários do programa) podem verificar o status de sua revisão

  - **Os revisores do plano de fornecimento** podem visualizar a fila de revisão

  - **Visualizadores do Plano de Fornecimento** podem verificar o status das revisões do plano de fornecimento

- <u>Como</u>?

<!-- lista final -->

1. > Vá em “Gerenciamento de Programas” \> “Versão e Revisão do Plano de Fornecimento” e a tela abaixo será exibida. Selecione o período do relatório, o país, o programa, o tipo de versão e o status. Nesta tabela, os usuários podem ver o status de todos os planos de fornecimento e quaisquer comentários de versão. Os usuários também podem usar as opções de pesquisa, filtro e classificação (consulte [Barra de navegação e menu](#barra de navegação e menu)) para encontrar programas específicos.

![A screenshot of a computer Description automatically generated](/img/media/image106.png)

Figura 60: Versões e revisão do plano de fornecimento

2. > Clique em qualquer linha da tabela para abrir os detalhes desse plano de fornecimento.

> **_Para revisores do plano de fornecimento_** **SOMENTE** –

1. Use a primeira guia “Planejamento de fornecimento” para revisar o status do estoque e os elementos de dados de qualquer unidade de planejamento

2. Use a segunda aba “Lista de Problemas QAT” para revisar quaisquer problemas dentro do plano de fornecimento.
    1. Use a coluna “**Revisado**” e marque a caixa de seleção em cada linha ao revisá-las. Todas as questões que não sejam “em conformidade” ou “resolvidas” devem ser marcadas como “revisadas” para que você aprove ou rejeite o plano.

    2. Use a coluna “**Inserir notas do revisor**” para anotar qualquer feedback para o planejador de fornecimento.

    3. Atualize o “**Status do problema**” conforme necessário – Deixe os problemas como “**Endereçados**” se desejar que o planejador de fornecimento os revise novamente no próximo ciclo de revisão (o problema se tornará “aberto” na próxima versão). Marque os problemas como “**Resolvidos**” se eles não precisarem ser revisados ​​novamente, mesmo em ciclos de revisão futuros. Marque os problemas como “**Abertos**” se quiser comunicar ao revisor que ele precisa atualizar seus comentários.

4. Se houver um problema que deva ser resolvido pelo planejador de fornecimento, mas não for sinalizado automaticamente pela Lista de Problemas do QAT, o revisor poderá adicionar um problema manual clicando no símbolo “+” no canto superior direito da tela.
        1. Os problemas manuais devem ter associada uma unidade de planejamento, criticidade, descrição e sugestão. Esses problemas serão adicionados como uma linha separada na Lista de Problemas do QAT para serem resolvidos pelos planejadores de fornecimento.

3. Após a revisão, altere o status do Plano de Fornecimento para **Aprovado** ou Precisa de Revisão, forneça notas (obrigatório) e clique em “Atualizar”
    1. Utilize o histórico de notas de versão para visualizar notas gerais sobre o plano de fornecimento ao longo do tempo.

![A screenshot of a computer Description automatically generated](/img/media/image107.png)

Figura 61: Botão Visualizar histórico de notas

> ![A screenshot of a computer Description automatically generated](/img/media/image108.png)

Figura 62: Exemplo de histórico de notas de versão

2. **\*Observação:** Há um status adicional para “Nenhuma revisão necessária” que pode ser usado quando um plano de fornecimento duplicado é carregado ou um plano de fornecimento é carregado fora da janela do período de envio.\*

![A screenshot of a computer Description automatically generated](/img/media/image109.png)

Figura 63: Versão e Revisão do Plano de Fornecimento (segunda tela)

3. > O usuário que enviou o plano de fornecimento para revisão será notificado por e-mail quando seu envio for aprovado, precisa de revisão ou não é necessária revisão. As regras para notificações por e-mail de revisão do plano de fornecimento são as seguintes:
    1. Notificação do plano de fornecimento final **carregado**
        1. Enviado para: Todos os revisores do plano de fornecimento com acesso a esse programa.

        2. Cc’d: Usuário que carregou a versão

        3. Cco: Todos os administradores do programa com acesso a esse programa.

    2. Notificação de plano de fornecimento de **Revisão Necessária**:
        1. Enviado para: O usuário que carregou o plano de fornecimento.

        2. Cc’d: Revisor que solicitou revisões da versão

        3. Cco: todos os revisores com acesso a esse programa, bem como administradores com acesso a esse programa.

    3. Notificação de plano de fornecimento **aprovado**:
        1. Enviado para: O usuário que carregou o plano.

        2. Cc: todos os usuários que têm acesso a esse programa, exceto administradores de aplicativos e visualizadores de relatórios.

    4. Notificação de plano de fornecimento **Não necessária**:
        1. Enviado para: O usuário que carregou o plano

        2. Cc: O revisor do plano de fornecimento

## Exportar

- <u>Who?</u> Esta função está disponível para **Aplicativo/Reino/Programa
Administradores, usuários do programa e revisores do plano de fornecimento. Esta função não está disponível
ou necessário para visualizadores de relatórios.**

- <u>Por que?</u> A função “Exportar programa” é usada quando
o usuário deseja exportar o programa para sua máquina local. Usando o Exportar
função, os dados do programa podem ser compartilhados com outras pessoas offline. Por exemplo, o usuário A pode
exporte um programa e salve esse arquivo em uma unidade USB para compartilhar com o usuário B, que é
off-line.

- <u>What?</u> O arquivo de dados do programa será exportado em
o formato zip. O arquivo zip contém todos os dados dessa versão do programa.
Os usuários podem optar por exportar em formato criptografado ou não criptografado. Este arquivo pode posteriormente
ser compartilhado com outras pessoas para importar para o QAT ou, se não criptografado, analisado fora
do QAT.

<!-- lista final -->

- **Observação:** se o usuário baixou uma versão com um intervalo de dados selecionado, a exportação também será para esse intervalo de dados selecionado)

![P1190#yIS1](/img/media/image110.png)

Figura 64: Tela do Programa de Exportação

- <u>Como exportar um programa:</u>

<!-- lista final -->

1. > Determine se deseja exportar do módulo de previsão ou de planejamento de fornecimento e navegue até o módulo correto (consulte [Seção 2.J Navegação e barra de menu](02-getting-started.md#navigation-and-menu-bar)). Se você tiver acesso apenas a um módulo, poderá ignorar esta etapa.

2. > Vá em “Gerenciamento de Programas” \> “Exportar Programa”

3. > Selecione o programa a ser exportado usando o menu suspenso. Os programas devem ser baixados primeiro antes que a exportação esteja disponível. (Veja [Seção 3.B Baixar/Excluir Programa](#downloaddelete)).
    - Se o programa foi baixado com um subconjunto de dados, a exportação também ficará limitada a esse mesmo subconjunto.

4. > Determine se você precisa ou não de uma versão não criptografada.
    - Para importar de volta para o QAT, deixe a caixa de seleção “Deseja criptografar” marcada

    - Para analisar dados fora do QAT, desmarque a caixa de seleção “Deseja criptografar”

5. > Clique no botão “Enviar” para salvar as alterações.

6. > Uma janela de navegação aparecerá. Selecione a pasta na qual deseja salvar o arquivo exportado. Em seguida, clique em “Salvar”.

7. > O arquivo .zip agora será salvo na pasta selecionada.

8. > Compartilhe o arquivo .zip com outras pessoas conforme necessário.

## Importar

- <u>Who?</u> Esta função está disponível para **Aplicativo/Reino/Programa
Administradores, usuários do programa e revisores do plano de fornecimento. Não disponível ou necessário para Relatório
Espectadores**

- <u>Por que?</u> A função “Importar Programa” é usada quando
o usuário está trabalhando no programa no modo offline e deseja abrir um programa
que foi exportado para um arquivo .zip
  - **Nota**: O arquivo de dados do programa deve ser salvo no formato zip). Por exemplo, o usuário B pode (enquanto estiver offline) importar um programa que o usuário A exportou e salvou em um dispositivo externo

  - **Observação**: Se o usuário exportou uma versão com um intervalo de dados selecionado, a importação também será para esse intervalo de dados selecionado.

- <u>Quando</u>? Esta função pode ser usada quando estiver offline ou
on-line.

![](/img/media/image111.png)

Figura 65: Tela de Importação do Programa

- <u>Como importar um programa:</u>

<!-- lista final -->

1. > Determine se deseja exportar do módulo de previsão ou de planejamento de fornecimento e navegue até o módulo correto (consulte [Seção 2.J Navegação e barra de menu](02-getting-started.md#navigation-and-menu-bar)). Se você tiver acesso apenas a um módulo, poderá ignorar esta etapa.

2. > Vá em “Gerenciamento de Programas” \> “Importar Programa”

3. > Clique em “Navegar”. Escolha o arquivo necessário que precisa ser importado. O arquivo selecionado deve estar no formato zip. O arquivo zip pode conter vários programas.

4. > Clique em “Avançar”

5. > Selecione o programa desejado para importar. (se apenas um programa estiver no arquivo, ele será selecionado automaticamente)

6. > Clique no botão “Importar” para importar o programa para a máquina local.

## Comparação de versões

**<u>Purpose</u>:** Permite que os usuários visualizem e comparem duas versões diferentes do mesmo programa de previsão. Nesta tela, os usuários selecionarão um programa de previsão para visualizar e a partir daí selecionarão 2 versões desse programa para comparar. O usuário pode selecionar versões locais e de servidor, bem como versões preliminares e finais. Se a versão tiver um \* próximo a ela, isso indica que a versão é final. Depois que o usuário selecionar todos os menus suspensos, aparecerá uma tabela comparando as duas versões de previsão. Para cada combinação de unidade de planejamento e região, a tabela exibirá a previsão selecionada, a quantidade prevista e as notas para cada uma das duas versões de previsão. Esta tela é apenas para fins de visualização e nenhuma alteração pode ser feita nas previsões selecionadas nesta tela.

![P1227#yIS1](/img/media/image112.png)

Figura 66: Comparação de versões

**<u>Usando esta tela</u>:**

1. **Primeiro, selecione um dos filtros de saída nos menus suspensos. Esta tela compara apenas um programa por vez, mas permite ao usuário comparar várias versões desse programa. O usuário tem a capacidade de comparar qualquer combinação de versões finais e preliminares, bem como versões locais e de servidor. Se** a versão tiver um \* próximo a ela, isso indica que a versão é final. As notas da versão e o período de previsão aparecerão em cinza, pois são campos não editáveis. Para atualizar esses campos, vá para ‘Atualizar configurações de versão’.

2. Depois que todos os menus suspensos forem selecionados, uma tabela aparecerá com os dados de ambas as versões de previsão selecionadas. Para cada combinação de unidade de planejamento e região, a tabela mostrará a previsão selecionada, a quantidade total prevista para o período de previsão e quaisquer notas de previsão para essa previsão selecionada. Cada lado da tabela representa 1 das 2 versões de previsão selecionadas. A linha superior da tabela mostra para qual versão o lado está mostrando dados.

3. Esta tela pode ser exportada tanto em formato PDF quanto CSV clicando nos ícones no canto superior direito da página.