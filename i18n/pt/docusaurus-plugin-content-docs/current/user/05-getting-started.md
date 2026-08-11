---
id: getting-started
title: "2. Getting Started"
sidebar_label: "2. Getting Started"
sidebar_position: 1
---
# Seção 2. Primeiros passos

## A. Requisitos do sistema

Espera-se que o QAT seja acessado principalmente por meio de laptops e desktops com sistemas operacionais padrão, como MS Windows, Linux/Ubuntu e iOS. O navegador recomendado é o Google Chrome, mas podem ser utilizados Chromium, Edge, Mozilla Firefox ou Safari.

Também é sugerido que cada usuário do QAT tenha espaço suficiente em sua unidade C: para permitir o armazenamento bem-sucedido dos dados do cache do navegador. A quantidade de espaço necessária depende do tamanho do programa QAT que está sendo baixado e de quantos aplicativos estão sendo executados e utilizando dados do navegador. O armazenamento temporário é compartilhado entre todos os aplicativos da web em execução no navegador. Esse pool compartilhado pode ter até 1/3 do espaço disponível em disco. Cada aplicativo pode então ter até 20% do pool compartilhado. Por exemplo, se o espaço total disponível na unidade C: for 60 GB, o pool compartilhado será de 20 GB; portanto, o QAT pode potencialmente utilizar até 4 GB. Isso é calculado a partir de 20% (até 4 GB) de 1/3 (até 20 GB) do espaço disponível na unidade C: (60 GB).

## B. Níveis de hierarquia em QAT

O sistema QAT possui **três níveis de hierarquia** para conduzir operações. Os níveis de hierarquia são os seguintes:

<p align="center">
  <em>Application Masters → Realm-level Masters → Program-level Masters</em>
</p>

- **Aplicativo** Masters é o nível de hierarquia de dados mais alto no QAT. Os dados mestre do aplicativo se aplicam a todos os domínios e programas do QAT. A maior parte só é acessível aos Administradores de Aplicativos, embora algumas das funções do Aplicativo estejam disponíveis para Administradores de Realm, como adicionar e atualizar usuários e atribuir funções aos usuários. Os administradores de aplicativos podem selecionar os dados mestre específicos de todo o aplicativo que desejam adicionar ou atualizar.
- **Realm** Level Masters abrange todos os dados mestres desse Realm que se aplicam aos seus programas de previsão e planejamento de fornecimento. O Administrador do Realm poderá visualizar, criar e editar esses dados mestre. Programas, Áreas Técnicas, Unidades de Planejamento, Agentes de Compras e Modelos de Árvore são alguns exemplos de dados mestres de realm que o Administrador de Realm pode adicionar e manter. Muitos dos mestres de nível de região estão acessíveis para visualização aos Administradores do Programa; no entanto, eles não têm a capacidade de adicionar/atualizar esses dados.
- **Programa** Level Masters é o terceiro nível de hierarquia no QAT. Embora os administradores do programa não possam adicionar programas, eles podem atualizar as informações do programa (por exemplo, prazos de entrega, custos de frete, etc.) dentro do(s) programa(s) atribuído(s). Administradores e Usuários do Programa também podem adicionar e atualizar dados do programa, como ajustes de consumo, extrapolação e gerenciamento de árvores (em previsões); e consumo, estoque, remessas (no planejamento de abastecimento).

Para obter mais informações sobre a funcionalidade para administradores em nível de aplicativo e realm, consulte [Anexo 1: Manual do administrador de aplicativo e realm.](13-annex-1-application-realm-administrator-manual.md#annex-1-application-realm-administrator-manual)

**Programas** são uma combinação de País, Área Técnica (1 ou mais), Organização e Região. Por exemplo, **FASPonia** –ARV-MOH-National, é um programa de planeamento de abastecimento no âmbito do Reino da Saúde Global para a gestão e planeamento de **antirretrovirais** para o ministério da saúde do país fictício FASPonia, e os dados de consumo e inventário são capturados a nível nacional (região).

## C. Funções e permissões do usuário

Os usuários podem receber uma das muitas funções disponíveis no QAT que definem a qual nível de dados os usuários têm acesso e como eles interagem com esses dados, de acordo com a seguinte hierarquia:

<p align="center">
  <em>Application-level data → Realm-level data → Program-level data</em>
</p>

Os usuários terão acesso a um ou mais níveis de dados de acordo com as funções e permissões atribuídas a eles. As funções são definidas centralmente no nível do aplicativo ou do domínio. Uma função pode ter diversas permissões atribuídas a ela. Essas permissões definem a quais ações um usuário tem direito. Um usuário pode receber diversas funções e pode variar a função com base no acesso ao programa. Por exemplo, um usuário pode ser um administrador do programa do plano de fornecimento para o programa A e um visualizador de relatórios do plano de fornecimento para o programa B. (NOTA: As funções podem ser atribuídas apenas aos usuários registrados no QAT).

A grande maioria dos utilizadores do QAT – gestores e responsáveis ​​de programas de saúde no país – irão interagir com a aplicação ao **nível do programa**; portanto, este manual focará principalmente nas tarefas e funções que se aplicam a este grupo. As funções de Administrador do Programa e Usuário do Programa geralmente são configuradas para ter acesso a um ou vários programas dentro de uma jurisdição geográfica, ou seja, um Administrador do Programa só pode gerenciar programas atribuídos em seu país, mas não em uma região.

Um administrador do **Realm** gerencia dados mestre e pode ter acesso a todos os programas dentro desse realm.
No nível **Aplicativo**, há uma função de Administrador de Aplicativo. Esta função tem acesso exclusivo para criar estruturas de dados em todo o aplicativo, incluindo adição de linguagens, funções, criação de domínios, atualização de rótulos estáticos e dinâmicos, entre outras funções de negócios.

Consulte [Anexo 4: Funções de negócios](16-annex-4-business-functions.md#annex-4-business-functions) para obter uma tabela com a lista completa de funções de negócios QAT disponíveis por função de usuário.

## D. Como fazer login no QAT e instalar o Progressive Web Application (PWA)

**Como fazer login no QAT pela primeira vez (online)**
1. Se você não tiver um perfil de usuário, entre em contato com o administrador do domínio para criar uma nova conta de usuário e função correspondente em seu nome.
2. Uma vez criada a conta, o novo usuário recebe um e-mail para “Redefinir Senha”.
3. O link “Redefinir senha” redirecionará o usuário ao site do QAT para criação da nova senha. Depois de concluído, clique em “Enviar”.
   um. Observação: o link “Redefinir senha” será válido por 24 horas e poderá ser utilizado apenas uma vez. Se necessário, o usuário pode gerar novamente o link para redefinir a senha clicando em “Esqueci minha senha” na tela de login.
4. Em seguida, o usuário será redirecionado para a tela de login. Usando o e-mail de ID do usuário e a senha criada, faça login no QAT.

**Observação:** A senha deve: ter pelo menos seis caracteres, começar com uma letra, não ser igual ao seu nome de usuário ou à sua última senha e deve incluir pelo menos um caractere especial, um número e uma letra maiúscula.

**Instalando o aplicativo Web progressivo QAT**

Aplicativos da web progressivos (PWA) são navegadores autônomos que trazem uma aparência semelhante a um aplicativo e são instalados na área de trabalho. Os usuários só podem instalar o QAT PWA por meio do Google Chrome e Edge. O PWA pode ser usado no modo online ou offline.

1. Acesse https://www.quantificationanalytics.org/
2. Clique no botão adicionar na barra de endereço.
3. Clique em “instalar” quando o pequeno pop-up aparecer.

![Installing QAT PWA](/img/media/image10.png)

_Instalando o PWA_

4. Um ícone aparecerá na sua área de trabalho como um aplicativo independente. Os usuários podem abrir diretamente na área de trabalho ou digitar **chrome://apps/** no navegador.

![QAT PWA Icons](/img/media/image11.png)

_Ícones QAT PWA_

**Observação**: Os usuários podem utilizar as versões do PWA e do navegador simultaneamente; no entanto, ao fazer alterações em um, é necessária uma atualização no outro para que as alterações sejam efetivadas (consulte [Quando e como realizar uma atualização de aplicativo](#1-application-refresh)).

**Etapas para instalar o PWA quando o botão de instalação não está disponível**
1. No navegador Chrome, navegue até https://www.quantificationanalytics.org/
2. Clique nos três pontos verticais no canto superior direito do navegador
3. Selecione "Transmitir, salvar e compartilhar"
4. Clique em “Criar Atalho”
5. Um ícone QAT será exibido na sua área de trabalho.
6. Clique no ícone "QAT" para abrir o PWA do aplicativo QAT.

![Install PWA alternate method](/img/media/image12.png)

_Instalar método alternativo do PWA_

## E. Como fazer login no QAT para usuários existentes

**Entrar**
1. Para fazer login, digite o URL https://www.quantificationanalytics.org/ na barra do navegador e pressione Enter ou abra o PWA em sua área de trabalho.
2. Uma tela de login será exibida.

![Log-in Screen](/img/media/image13.png)

_Tela de login_

   uma. Digite o nome de usuário e a senha nos campos obrigatórios.
   b. Clique no botão “Login”.
      1. Observação: um usuário pode optar por fazer login “online” ou “offline” usando a caixa de seleção acima do botão “Login”. Para obter mais informações sobre como trabalhar offline no QAT, consulte a Seção F. [Trabalhar offline](#working-offline).

2. Ao fazer login no modo "online" – o QAT passará pela sincronização dos dados mestres. Se você vir uma mensagem sobre uma "versão de servidor mais recente" – veja a Figura 36 na Seção 3.B para obter mais informações.

**Saindo**
1. Vá para o canto superior direito da tela.
2. Clique no ícone do botão de logout à direita do ícone do perfil.

![Logout Icon](/img/media/image14.png)

_Ícone de logout_

3. Um pop-up aparecerá perguntando "Tem certeza de que deseja sair?" – clique em "sim" para sair

**Alterar senha**
1. No QAT, clique no ícone Perfil no canto superior direito da tela.
2. Clique em “Alterar senha”.

![Profile Icon](/img/media/image15.png)

_Ícone do perfil_

3. Uma vez na tela ‘Alterar senha’, digite sua senha antiga seguida da nova senha desejada.
4. A nova senha deverá atender aos seguintes critérios:
   <ul style={{ listStyleType: 'disc' }}>
     <li>A senha deve ter pelo menos 6 caracteres</li>
     <li>Password should not contain the word 'password'</li>
     <li>Password must contain at least 1 special character</li>
     <li>A senha deve conter pelo menos 1 número</li>
     <li>Password must contain at least 1 uppercase letter</li>
     <li>A senha deve começar com uma letra</li>
     <li>New Password should not be the same as your username</li>
     <li>New password should not be the same as your last password</li>
   </ul>
5. Confirme a nova senha digitando-a novamente.
6. Clique em "Enviar".

**Se o usuário esquecer a senha**
1. O usuário que esqueceu sua senha pode clicar no link "Esqueceu a senha?" link para redefini-lo.
2. Digite o endereço de e-mail com o qual o usuário está cadastrado no QAT e clique em “Enviar”.

![Forgot Password Screen](/img/media/image16.png)

_Tela Esqueci a senha_

3. O usuário receberá um link por e-mail para redefinir sua senha.

![Reset Password Email](/img/media/image17.png)

_Redefinir e-mail de senha_

4. O link "Redefinir senha" irá redirecioná-lo para o QAT, onde você inserirá sua nova senha. Depois de concluído, clique em “Enviar”.
5. Após clicar em “Enviar” o usuário será redirecionado para a tela de login. Usando o e-mail de ID do usuário e a senha recém-criada, faça login no QAT.

**Observação:** *Uma senha de usuário QAT será válida por até um ano a partir da data em que foi criada/atualizada.*

## F. Trabalhando off-line

QAT é uma ferramenta híbrida e pode ser operada tanto no modo online quanto offline. Existem duas maneiras de forçar o modo offline do QAT: na página de login antes de fazer login no QAT ou nas configurações do perfil após fazer login no QAT. Pode ser útil mudar para o modo offline do QAT quando a largura de banda da Internet estiver baixa.

| ![Offline Button on Profile Page](/img/media/image18.png) | ![Offline Button on Login Page](/img/media/image19.png) |
| :---: | :---: |
| *Botão offline na página de perfil* | *Botão offline na página de login* |

O ícone do perfil no canto superior direito mostra um círculo verde ao trabalhar no modo online. Quando o usuário muda para o modo offline a cor muda para vermelho, conforme mostrado na imagem abaixo.

![Offline vs. Online Icons](/img/media/image20.png)

_Ícone off-line vs. on-line_

A tabela abaixo detalha algumas das principais funcionalidades que podem ser realizadas no QAT offline, bem como algumas das funcionalidades que devem ser realizadas online:

| O que um usuário pode fazer offline?* | O que um usuário deve fazer on-line? |
| :--- | :--- |
| Import/Export supply plans/forecasts | Redefinir senha |
| Ver dados mestre | Sincronizar dados mestre |
| Construir Árvores/Cenários | Update program info, planning units, version settings, or budgets |
| Inserir/atualizar dados transacionais do plano de fornecimento e inserir/ajustar manualmente os dados de consumo | Importar dados de previsão de/para o Módulo de Planejamento de Fornecimento para/do Módulo de Previsão |
| Extrapolate using moving averages or semi-averages | Extrapolar usando regressão linear, suavização exponencial tripla (TES) ou métodos ARIMA |
| Plano de Fornecimento/Cenário | Criar ingressos |
| Ver lista de problemas do QAT | Download/Upload de planos/previsões de abastecimento |
| Ver relatórios do programa e resultados de previsão | Ver relatórios globais |

*\*Nota: Mesmo quando online, as funções na coluna "offline" exigem que um programa seja baixado - consulte a Seção 3 para obter mais informações*

## G. Atualizações de lançamento do QAT

Para manter o aplicativo QAT, as versões regulares são enviadas automaticamente para o aplicativo QAT e para todos os usuários do realm. Esses lançamentos de versão podem ocorrer devido ao seguinte:
- Manutenção programada regularmente para correção de bugs e otimização de aplicativos
- Manutenção de emergência não planejada para correções de bugs urgentes/de alta prioridade
- Atualizações periódicas relacionadas a melhorias ou novos recursos

![QAT Version Releases](/img/media/image21.png)

_Lançamentos da versão QAT_

Most version releases will not require significant action from the user, except to refresh the QAT application prior to logging-in. O QAT avisará ao usuário que há uma nova versão do QAT na página de login:

![New QAT Version Released Prompt for Users](/img/media/image22.png)

_New QAT Version Released Prompt for Users_

Se houver uma grande mudança na estrutura da arquitetura de back-end do QAT, os usuários poderão ser solicitados a fazer upload de sua versão mais recente para o servidor (consulte a seção [Upload](06-managing-programs-and-versions.md#upload) para obter mais informações) para evitar a perda de dados quando a nova versão do QAT for lançada. A equipe de suporte do QAT (support@quantificationanalytics.org) informará os usuários com bastante antecedência se for necessário fazer o upload do programa.

## H. Solução de problemas

Quando um usuário se depara com um possível problema de sistema com QAT, ele deve tentar solucionar o problema tentando as soluções descritas nesta seção, na ordem em que são descritas (ou seja, tente H1 primeiro e, se não funcionar, tente H2 e depois H3). If none of these steps resolve the issue, the user should submit a helpdesk ticket to report the bug (see section on ‘[Reporting a Bug](#reporting-a-bug)’).

### H1. Quando e como realizar uma atualização de aplicativo

A equipe de desenvolvimento do QAT implanta versões incrementais de software para resolver os bugs e alterações necessárias para o aplicativo. O QAT solicita que os usuários façam isso na tela de login após cada lançamento (veja a Figura 12). Para realizar uma atualização do aplicativo, os usuários devem pressionar “Ctrl” + “Shift” + “R” ao mesmo tempo no teclado.

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', textAlign: 'center', marginBottom: '10px' }}>
  <img src={require('@site/static/img/media/image22.png').default} alt="New QAT Version Released Prompt for Users" style={{ maxWidth: '48%' }} />
  <img src={require('@site/static/img/media/image23.png').default} alt="Hold Ctrl + Shift + R (all 3 keys) to conduct an Application Refresh" style={{ maxWidth: '48%' }} />
</div>

<p align="center"><em>Hold Ctrl + Shift + R (all 3 keys) to conduct an Application Refresh</em></p>

A atualização do aplicativo também pode ser usada para ajudar a solucionar quaisquer problemas ocorridos ao usar o QAT. Depois de segurar todas as 3 teclas, o software deverá recarregar automaticamente. Observe que a atualização do aplicativo é diferente de simplesmente atualizar o navegador (“Ctrl” + “R”).

###H2. Quando e como conduzir uma sincronização completa de dados mestres (MDS)

Se uma atualização do aplicativo ("Ctrl" + "Shift" + "R") não resolver o problema do software, você pode tentar realizar uma "Sincronização completa dos dados mestres". Para fazer isso, certifique-se de ter uma conexão estável com a Internet e clique no link "Full Master Data Sync" na parte inferior do aplicativo (veja a Figura 13). Esta solução provavelmente funcionará se você estiver enfrentando problemas de dados mestres que podem ser o resultado de uma Internet instável que perturbou o Master Data Sync (MDS) normal descrito na Seção 2.J Navegação e barra de menus.
- Em um MDS normal, apenas as alterações incrementais são sincronizadas entre o servidor e o computador local com base na última vez que um MDS foi concluído.
- Em um MDS completo, todos os dados mestre são carregados independentemente da última vez que o QAT foi sincronizado, como se esta fosse a primeira vez que você está carregando dados mestre. Portanto, isso levará mais tempo do que um MDS normal.

![Click "Full Master Data Sync"](/img/media/image24.png)

_Sincronização completa de dados mestres_

### H3. Quando e como limpar os dados do site

Se a atualização do QAT (Ctrl + Shift + R) e uma sincronização completa dos dados mestres não resolverem o problema, o usuário deverá tentar limpar os dados do site para solucionar o problema. Siga as etapas abaixo para limpar os dados do site em seu QAT:

***Aviso:*** *A limpeza dos dados do site no QAT limpa todos os dados locais no PWA e no navegador da Web, incluindo quaisquer alterações feitas desde o último upload. Certifique-se de ter carregado todos os programas não salvos <u>antes</u> de limpar os dados do site.*

1. Clique nas teclas "Ctrl"+"Shift"+"I" ao mesmo tempo no teclado.

![Ctrl + Shift + I](/img/media/image25.png)

_Ctrl + Shift + I_

2. Vá em “Aplicativo”.
3. No lado esquerdo da tela, clique onde diz “Armazenamento”.
4. Uma vez na tela “Armazenamento”, selecione “Limpar dados do site”. Isso limpará todos os dados que não foram carregados.
5. Faça login novamente no QAT e baixe novamente todos os programas necessários. (A limpeza dos dados do site apaga todos os programas da sua máquina local, portanto, você precisará baixá-los novamente.)

![Clear Site Data](/img/media/image26.png)

_Limpar dados do site_

### H4. Solução de erros de rede
Os usuários podem ver a seguinte mensagem de erro ao fazer login ou usar o QAT:

&gt; "Erro de rede. Verifique sua conexão com a Internet ou entre em contato com o departamento de TI da sua organização para garantir que [api.quantificationanalytics.org/#](https://api.quantificationanalytics.org/#) e [www.quantificationanalytics.org/#](https://www.quantificationanalytics.org/#) estejam na lista de permissões para acesso ao firewall."

Esta mensagem aparece por dois motivos: 1) Internet instável ou 2) Internet restrita.

**Internet instável:** use outra Internet com uma conexão estável ou mais rápida ou tente novamente mais tarde.

**Internet restrita:** O QAT pode ser acessado pela maioria das conexões privadas de Internet, mas às vezes os sistemas de TI organizacionais têm um controle de segurança mais rígido e, portanto, sinalizam o QAT como uma ameaça potencial. Neste caso, os usuários têm duas opções:
1. Use outra conexão de internet sem restrições, ou
2. Habilite o acesso ao firewall colocando os dois URLs de site abaixo na lista de permissões. O usuário pode precisar entrar em contato com a equipe de TI organizacional para obter assistência
   - [api.quantificationanalytics.org/#](https://api.quantificationanalytics.org/#)
   - [www.quantificationanalytics.org/#](https://www.quantificationanalytics.org/#)

## I. Helpdesk e tickets do QAT

###E1. Tickets para adição/atualização de usuários e dados mestre
Quando um usuário precisar adicionar ou atualizar um usuário ou dados mestre por qualquer motivo, ele poderá fazê-lo solicitando um ticket de suporte técnico. Antes de solicitar quaisquer adições ou alterações nos dados mestres no QAT, o usuário deve primeiro verificar os dados mestres em nível de reino (produto mestre em nível de reino &gt;&gt;) e o relatório do catálogo de programas para garantir que as informações ainda não existam. Para obter mais informações sobre como acessar e usar dados mestres, consulte [Gerenciamento de programas](06-managing-programs-and-versions.md#working-with-program-data) e [Realm Masters](13-annex-1-application-realm-administrator-manual.md#realm-masters). Para obter informações sobre como acessar o Catálogo de Programas, consulte [Catálogo de Programas](13-annex-1-application-realm-administrator-manual.md#product). Para acessar o Helpdesk do QAT:

1. Os usuários podem acessar o Helpdesk do QAT de dois locais diferentes no QAT:
   uma. Na página de login e
   b. da faixa superior direita no QAT

![QAT Login Screen Helpdesk](/img/media/image27.png)

_Helpdesk da tela de login do QAT_

![QAT Top Ribbon Helpdesk](/img/media/image28.png)

_QAT Top Ribbon Helpdesk_

2. Aparecerão quatro opções para retirar um ticket: Adicionar/Atualizar Usuário, Adicionar/Atualizar Dados Mestre, Solicitação de Mudança e Reportar um Bug. Veja as seções abaixo sobre [Solicitações de Mudança](#requesting-a-change) e [Relatar um Bug](#reporting-a-bug).

![QAT Helpdesk Menu](/img/media/image29.png)

_Menu do suporte técnico do QAT_

3. Escolha Adicionar/Atualizar Usuário ou Adicionar/Atualizar dados mestre. Qualquer uma das opções o levará a telas diferentes para obter mais informações.
4. Insira as informações solicitadas no formulário e clique em “Enviar”.

![Add/Update User Screen](/img/media/image30.png)

_Tela Adicionar/Atualizar Usuário_

| ![Add Master Data Screen](/img/media/image31.png) | ![Add Procurement Agent Master Data Screen](/img/media/image32.png) |
| :---: | :---: |
| *Tela Adicionar dados mestre* | *Tela Adicionar dados mestre do agente de compras* |

Após enviar um ticket, será atribuído ao usuário um número de código de ticket (ex: QAT-570). O usuário também receberá uma notificação por e-mail e o número de “Tickets Abertos” na faixa superior em vermelho aumentará. Este número do ticket corresponde ao número do ticket armazenado na ferramenta de gerenciamento do software JIRA. Para obter mais informações sobre o gerenciamento de tickets e a ferramenta de gerenciamento do software JIRA, consulte [Gerenciamento de tickets](#managing-tickets).

###I2. Solicitando uma mudança
Quando um usuário tem uma ideia para um novo recurso, funcionalidade ou elemento de design que tornaria o QAT um aplicativo melhor para todos os usuários, como um novo relatório, remoção de uma coluna desnecessária, etc., ele pode solicitar uma alteração por meio do Helpdesk do QAT. Todos os tickets de solicitação de alteração exigirão uma descrição detalhada e capturas de tela. Assim que a equipe técnica receber um ticket de solicitação de alteração do usuário, ele será analisado quanto à viabilidade e utilidade para todos os usuários do QAT. Se a solicitação de mudança for aceita, ela não será disponibilizada no QAT imediatamente, mas será colocada em uma fila com base na prioridade de negócios, na criticidade e nos requisitos de LOE do domínio. Para solicitar uma alteração no QAT:

1. Clique no ícone QAT Helpdesk.

![QAT Helpdesk Icon](/img/media/image28.png)

_Ícone do suporte técnico QAT_

2. Clique em "Solicitar uma alteração" nas opções do menu QAT Helpdesk.
3. Preencha o formulário preenchendo as informações necessárias e clique em “Enviar”.

![Change Request Ticket](/img/media/image33.png)

_Tíquete de solicitação de alteração_

4. Após o envio do ticket, será atribuído ao usuário um número de código do ticket (ex: QAT-570). O usuário também receberá uma notificação por e-mail e o número de “Tickets Abertos” na faixa superior em vermelho aumentará. Este número do ticket corresponde ao número do ticket armazenado na ferramenta de gerenciamento do software JIRA. Para obter mais informações sobre o gerenciamento de tickets e a ferramenta de gerenciamento do software JIRA, consulte [Gerenciamento de tickets](#managing-tickets).

###I3. Relatando um bug
Quando um usuário se depara com um possível problema de sistema com QAT, ele deve tentar solucioná-lo por meio de uma [atualização do aplicativo](#h1-quando-e-como-conduzir-uma-atualização-do-aplicativo) e/ou [limpar os dados do site](#h3-quando-e-como-limpar-os-dados-do-site). Se nenhuma dessas etapas resolver o problema, o usuário deverá enviar um ticket de suporte técnico para relatar o bug.

O ticket de bug será abordado pela equipe de desenvolvimento de acordo com a prioridade de negócios, criticidade e 'capacidade' disponível por meio de versões incrementais. As etapas para gerar um ticket no QAT são mostradas abaixo:
1. Abra a tela do QAT Helpdesk e clique em “Relatar um bug”.
2. Insira um resumo do bug, bem como uma descrição do bug. Por favor, seja descritivo e forneça o máximo de detalhes possível (por exemplo, em qual programa/versão/funcionalidade você estava trabalhando, etapas que você executou para obter o bug, etc.).
3. Carregue uma captura de tela do bug clicando no botão "Navegar" e extraindo um arquivo de captura de tela salvo do seu computador.
   um. Também é útil fornecer a exportação do programa, se possível (consulte [Exportações de Programas](06-managing-programs-and-versions.md#export) sobre como exportar um programa local)
   b. **Observação:** Se você quiser fazer upload de vários arquivos, coloque as várias capturas de tela em uma pasta no seu computador e compacte-as antes de navegar no QAT. Em seguida, carregue a pasta compactada.
4. Escolha uma prioridade (Mais Alta, Alta, Média ou Baixa) para o bug com base na urgência e como isso afeta o trabalho diário no QAT
   uma. Os tempos de resposta e resolução de bugs serão baseados no nível de prioridade
5. Clique no botão “Enviar” para levantar o ticket.

![Report a Bug](/img/media/image34.png)

_Relatar um bug_

###I4. Gerenciando ingressos
Para maior visibilidade, o QAT dará aos usuários a opção de gerenciar e verificar o status de seus tickets, quer estejam adicionando/editando um usuário ou dados mestre, solicitando uma alteração ou relatando um bug. Quando um usuário envia um ticket, ele receberá um número de código de ticket (ex: QAT-570). O usuário também receberá uma notificação por e-mail e o número de “Tickets Abertos” na faixa superior em vermelho aumentará. Este número do ticket corresponde ao número do ticket armazenado na ferramenta de gerenciamento do software JIRA.

| ![Helpdesk Ticket Code Number](/img/media/image35.png) | ![Number of Tickets on Top Ribbon](/img/media/image28.png) |
| :---: | :---: |
| *Número do código do ticket do suporte técnico* | *Número de ingressos na faixa superior* |

A partir da notificação por e-mail, os usuários podem clicar em “Ver solicitações” para ver o status do seu ticket. Os usuários também podem adicionar comentários e capturas de tela adicionais à sua solicitação, se desejarem. **Os usuários sempre receberão uma notificação por e-mail assim que o ticket for concluído.**

**Observação**: Para acessar totalmente o ticket por meio da ferramenta de gerenciamento do software JIRA, os usuários devem criar uma conta com nome de usuário e senha no JIRA. Criar uma conta no JIRA é **opcional**. JIRA é uma ferramenta externa de gerenciamento de software que pode ser acessada através do link fornecido no e-mail, **clicando no ícone HelpDesk e escolhendo “Gerenciar meus tickets” no canto superior direito do pop-up**, ou diretamente através de [https://qathelpdesk.atlassian.net/servicedesk/customer/portals](https://qathelpdesk.atlassian.net/servicedesk/customer/portals).

![Email Notification for QAT Ticket](/img/media/image36.png)

_Notificação por e-mail para ticket QAT_

![Option to Navigate to JIRA](/img/media/image37.png)

_Opção para navegar para JIRA_

![JIRA Ticket Management](/img/media/image38.png)

_Gerenciamento de tickets JIRA_

## J. Navegação e barra de menu

**Navegação Básica**

Uma vez logado no QAT, a tela abaixo aparecerá:

![Supply Planning Module Home Screen](/img/media/image39.png)

_Tela inicial do módulo de planejamento de fornecimento_

![Forecasting Module Home Screen](/img/media/image40.png)

_Tela inicial do módulo de previsão_

Na área principal da página inicial estará um painel do aplicativo. O Módulo de Planejamento de Fornecimento possui um painel aprimorado com visualizações e análises sobre programas baixados e baseados em servidor aos quais o usuário tem acesso. Para obter informações específicas sobre o painel do Módulo de Planejamento de Fornecimento, consulte [Painel QAT](#l-qat-dashboard).

Para o Módulo de Previsão, o número de blocos e os tipos de blocos dependerão do acesso de acordo com a função atribuída ao usuário. Os usuários verão um bloco para o programa que baixaram (ou seja, quando estiverem no módulo de previsão, os usuários verão um bloco para cada programa de previsão que carregaram). Ao clicar na seta para baixo no bloco do programa de previsão, um usuário pode 1) excluir o programa do seu computador local, 2) prosseguir para as configurações de versão do programa, 3) prosseguir para a lista de árvores de previsão ou 4) prosseguir para a tela de entrada e ajuste de dados de consumo.

![Forecasting Module Program Tile](/img/media/image41.png)

_ Bloco do programa do módulo de previsão_

Além do painel do aplicativo, a tela consiste na faixa superior e uma barra lateral de menu no lado esquerdo. Todas as funções disponíveis na faixa de opções e na barra lateral estarão acessíveis ao usuário em toda a ferramenta, independentemente da tela que estiver visualizando.

Para retornar à tela do Dashboard, o usuário pode clicar no ícone inicial na faixa superior ou no logotipo QAT no canto superior esquerdo da tela.

![Home icon](/img/media/image42.png) Ou ![QAT logo](/img/media/image43.png)

**Faixa superior para módulo de planejamento de suprimentos**
![Top Ribbon for Supply Planning Module](/img/media/image44.png)

**Faixa superior para módulo de previsão**
![Top Ribbon for Forecasting Module](/img/media/image45.png)

| Captura de tela | Função |
| :---: | :--- |
| ![Logout](/img/media/image46.png) | Desconecta o usuário do QAT. |
| ![Profile](/img/media/image47.png) | O ícone do perfil fica verde ao trabalhar online e vermelho ao trabalhar offline. Quando o usuário clica no ícone, ele pode:<ul><li>Ver o nome de usuário e as funções associadas atribuídas a ele</li><li>Alterar o idioma preferido</li><li>Alterar o idioma de sua preferência senha</li><li>Ficar off-line/online</li><li>Mudar para o modo de tema claro/escuro</li><li>Mostrar decimais no Planejamento de fornecimento telas</li></ul> |
| ![Home](/img/media/image42.png) | Retorna o usuário ao painel/tela inicial. |
| ![Download Manual](/img/media/image48.png) | Baixa o manual do usuário do QAT para o computador do usuário. O arquivo pode ser encontrado na pasta **Downloads** do computador do usuário. |
| ![Refresh](/img/media/image49.png) | Atualiza a página atual em que um usuário está trabalhando. |
| ![Upload Alert](/img/media/image50.png) | Informa ao usuário quando um programa armazenado no servidor local possui alterações não carregadas e deve fazer upload desse programa para o servidor. Se o ícone estiver azul, não há programas não carregados. Se o ícone estiver vermelho, há programas que devem ser carregados no servidor. O número na caixa vermelha indica o número de programas que devem ser carregados. |
| ![Version Alert](/img/media/image51.png) | Informa o usuário quando há uma versão mais recente no servidor de um de seus programas baixados localmente. Se o ícone estiver azul, o usuário possui a versão mais atualizada de todos os programas baixados. Se o ícone estiver vermelho, há programas desatualizados em comparação com o servidor. O número na caixa vermelha indica a quantidade de programas que possuem versões desatualizadas. |
| ![Helpdesk](/img/media/image52.png) | Abre o Helpdesk QAT onde os usuários podem criar tickets para adicionar/atualizar dados mestre, propor solicitações de mudança e relatar um bug. O número na caixa vermelha indica o número de tickets abertos que um usuário possui. Para obter mais informações sobre o helpdesk, consulte Helpdesk e tickets do QAT. |
| ![ERP Notification](/img/media/image53.png) | Direciona o usuário para a página Notificação de Remessa do ERP. Esta página informará os usuários se houver alguma atualização importante que precise ser revisada para uma remessa de ERP vinculada. Para mais informações sobre essas notificações e quais serão sinalizadas, consulte Vinculação de Remessas do ERP. Observação: este ícone está disponível apenas no Módulo de Planejamento de Fornecimento do QAT. |
| ![Guidance](/img/media/image54.png) | Abre uma página da Web Show Guidance em uma introdução à previsão de QAT. Este documento fornece uma visão geral de alto nível sobre o fluxo do processo de previsão de QAT. Nota: Este ícone está disponível apenas no Módulo de Previsão QAT. |

**Menu da barra lateral:**

O menu da barra lateral é onde o usuário pode navegar pelas diferentes telas do QAT. As opções disponíveis na barra lateral irão variar de acordo com o acesso de acordo com a função atribuída ao usuário. Na barra lateral existem itens de menu. Clicar em um desses itens será expandido para mostrar uma lista de itens do submenu. À medida que o usuário seleciona diferentes itens do menu, os respectivos dados serão exibidos no QAT.

No menu da barra lateral, você encontrará os seguintes itens de menu:

- **Módulo de Planejamento de Fornecimento**
  - **Sincronização de dados mestres** - Clicar neste botão sincronizará os dados mestres atualizados com sua versão local. Esta função é feita automaticamente ao fazer login no QAT, mas este botão permite que o usuário faça isso sem sair e fazer login novamente.
  - **Application Masters** (disponível apenas para Administradores de Aplicativos e Realm) – visualizar/adicionar/editar dados em nível de aplicativo.
  - **Mestres em nível de reino** – visualizar/adicionar/editar dados em nível de reino.
  - **Gerenciamento de programas** – visualizar/adicionar/editar dados em nível de programa. Baixar/carregar/excluir/importar/exportar programas. Conduzir revisões do plano de fornecimento.
  - **Dados do plano de fornecimento** – Adicionar/editar dados do plano de fornecimento.
  - **Planejamento de fornecimento** – Visualizar/editar plano de fornecimento. Plano de Cenário.
  - **Relatórios** – Ver relatórios. Edite a lista de problemas do QAT.
- **Módulo de previsão**
  - **Sincronização de dados mestres** - Clicar neste botão sincronizará os dados mestres atualizados com sua versão local. Esta função é feita automaticamente ao fazer login no QAT, mas este botão permite que o usuário faça isso sem sair e fazer login novamente.
  - **Application Masters** (disponível apenas para Administradores de Aplicativos e Realm) – visualizar/adicionar/editar dados em nível de aplicativo.
  - **Mestres em nível de reino** – visualizar/adicionar/editar dados em nível de reino.
  - **Gerenciamento de programas** – visualizar/adicionar/editar dados em nível de programa. Baixar/carregar/excluir/importar/exportar programas.
  - **Previsões Baseadas em Consumo** – Importe/adicione/ajuste e extrapole dados de consumo.
  - **Árvore de previsões** – Crie e gerencie uma árvore de previsões. Visualize modelagens e validações de produtos.
  - **Resultados da análise de previsão** – Compare e selecione as previsões finais. Veja outros relatórios de saída.

| Captura de tela | Função |
| :---: | :--- |
| ![Hamburger icon](/img/media/image58.png) | Recolhe completamente o menu da barra lateral para criar mais espaço na tela. Clicar no ícone uma vez fará com que o menu desapareça. Clicar novamente fará com que ele reapareça. |
| ![Left arrow icon](/img/media/image59.png) | Minimiza o menu da barra lateral sem fazê-lo desaparecer completamente. Cria mais espaço na tela. |
| ![Right arrow icon](/img/media/image60.png) | Exibido quando o menu da barra lateral está minimizado. Clique para expandir e mostrar o menu completo da barra lateral. Também usado para expandir e mostrar itens de submenu em itens de menu. |
| ![Down arrow icon](/img/media/image61.png) | Exibido quando os itens do submenu são exibidos. Clique para recolher os itens do submenu. |
| ![Module toggle buttons](/img/media/image62.png) | Botões que permitem aos usuários alternar entre o Módulo de Previsão e Planejamento de Fornecimento no QAT, se o acesso do usuário permitir. |

**Botões encontrados em todo o QAT**

Os seguintes botões são frequentemente encontrados nas diferentes telas do QAT:

| Botões | Ação |
| :---: | :--- |
| ![Submit button](/img/media/image63.png) | Envia e faz alterações. |
| ![Cancel button](/img/media/image64.png) | Cancela as alterações não enviadas. |
| ![Reset button](/img/media/image65.png) | Reverte os dados não enviados para o formato anterior. |
| ![Plus icon button](/img/media/image66.png) | Adiciona um novo registro ao banco de dados. |
| ![Update](/img/media/image67.png) | Atualiza registros. |
| ![Search](/img/media/image68.png) | Ajuda os usuários a pesquisar as informações desejadas. Pesquisa todos os campos da tabela exibida. |
| ![Clear](/img/media/image69.png) | Permite que um usuário limpe os campos de pesquisa. |
| ![Red asterisk](/img/media/image70.png) | Indica campos obrigatórios de entrada de dados. |
| ![Show Formulae](/img/media/image71.png) | Exibe explicações/definições e fórmulas sobre termos comumente usados ​​na janela/relatório especificado. |
| ![Show Guidance](/img/media/image72.png) | Fornece orientação de alto nível sobre como usar melhor a página atual. |
| ![PDF, CSV, Word](/img/media/image73.png) | Exporta relatório em PDF, CSV ou Word (as opções dependem da tela). |

## K. Mudança de idioma
Para garantir que o QAT seja adaptável a usuários de todo o mundo, o aplicativo exibe texto em quatro idiomas diferentes: inglês, francês, português e espanhol. Os usuários são incentivados a enviar tickets se desejarem que a tradução de uma etiqueta específica seja melhorada. (*Observação: as traduções dos rótulos dos aplicativos podem ser editadas apenas por **administradores do aplicativo**. Instruções sobre como fazer isso podem ser encontradas na [seção de tradução](13-annex-1-application-realm-administrator-manual.md#a-database-translation).*)

Existem duas maneiras de alterar o idioma exibido para o usuário:
1. Tela de login:
No canto superior direito da tela de login, há um menu suspenso no qual os usuários podem selecionar seus
idioma preferido antes do login. Isso não apenas alterará o texto quando você estiver conectado ao QAT, mas
isso também alterará o texto exibido na tela de login.

![Login Screen Language Change](/img/media/image75.png)

_Alteração de idioma da tela de login_

**2. Dentro do QAT:**
Uma vez logado no QAT, o usuário pode alterar o idioma de exibição clicando no ícone do perfil do usuário no canto superior direito da tela, selecionando o idioma preferido e então a ferramenta atualizará automaticamente seu texto/rótulos.

![In Tool Language Change](/img/media/image76.png)

_Em mudança de idioma da ferramenta_

## L. Painel QAT
O painel de planejamento de fornecimento fornece uma interface abrangente com visualizações e análises aprimoradas. Está estruturado em três seções principais: Ticker, Visão geral, Destaque do programa.

![Dashboard](/img/media/image77.png)

_Painel de Planejamento de Fornecimento_

1. **Ticker** – Esta seção exibe informações importantes por meio de três blocos de rolagem automática.
Para navegar manualmente pelos blocos, clique nos pontos na parte inferior dos blocos. Cada bloco está vinculado a telas relevantes. Clique no nome do bloco para ser direcionado para essa tela (se você não tiver acesso, uma mensagem apropriada será exibida). Por exemplo, clicar no bloco ‘Linking ERP’ o levará para a tela Linking ERP.
    - **Reino:** Fornece métricas globais, como número de países, usuários, plano de fornecimento
   programas de monitoramento e programas de previsão.
    - **Meu acesso:** Destaca os planos de fornecimento aos quais você tem acesso, incluindo planos de fornecimento baixados.
    - **Vinculação ERP:** Exibe o número de remessas vinculadas por domínio e programas baixados.

![Dashboard Ticker](/img/media/image78.png)

_Ticker do painel_

2. **Visão geral** – Esta tabela oferece um resumo de alto nível de um ou mais programas com base no seu acesso.

![Overview Section](/img/media/image79.png)

_Seção de visão geral_

  **Selecionando Programas:**
  - Os programas podem ser baseados em servidor ou baixados, mas não ambos
  - Seleção múltipla disponível para programas
  - O modo offline limita a seleção apenas a programas baixados, com a caixa de seleção para programas de servidor esmaecida
  - Para programas de servidor, algumas colunas/recursos (por exemplo, coluna de ação e links QPL) não são exibidos
  - *Observação: as versões baixadas e do servidor podem apresentar dados diferentes, caso os itens tenham sido atualizados na versão local e não carregados, ou caso o QPL tenha sido recalculado com base na data de hoje.*
  
  **Recursos da tabela de visão geral**
  Cada coluna é projetada para apresentar dados acionáveis:
  - **Dicas:** Passe o mouse sobre o ícone de dica de ferramenta em cada coluna para obter mais detalhes
  - **Classificação:** Os programas são classificados em ordem alfabética, com um asterisco indicando as versões finais e aprovadas.
  - **Links e ícones:**
      - A coluna 'Ação' permite aos usuários excluir um programa local, bem como clicar nos ícones da nuvem para serem redirecionados para as telas de upload ou download. O ícone da nuvem aparecerá em vermelho se a versão baixada estiver desatualizada. A coluna 'Ação' não aparece na tabela de visão geral dos programas de servidor.
      - Clicar no número na coluna 'Problemas abertos de QAT' direcionará o usuário para a Lista de Problemas de QAT (QPL) desse programa. Isto não aparece para programas de servidor.
      - Clicar no status na coluna 'Status de revisão' direcionará o usuário para a tela Versão e revisão do plano de fornecimento, enquanto clicar no ícone do caderno na mesma célula abrirá o histórico de notas desse programa.

![Version Notes](/img/media/image80.png)

_Notas da versão_

3. **Programa em destaque** – Esta seção fornece insights detalhados sobre as principais métricas de um único programa. Certifique-se de utilizar dicas de ferramentas e links incorporados para navegação eficiente e exploração de dados. Todas as 5 seções têm uma dica de ferramenta próxima ao cabeçalho e cada cabeçalho está vinculado a uma tela QAT que você pode acessar clicando no cabeçalho.

  **Selecionando um programa:**
  - Suporta servidor ou programas baixados (somente seleção única)
  - Os programas de servidor são padronizados para a versão mais recente (rascunho ou final)
  - O modo offline limita a seleção aos programas baixados.
  
  **Período do relatório:**
  - Afeta apenas as seções Remessas, Erro de Previsão e Vencimentos. A seção Pontuação geral do plano de fornecimento e qualidade dos dados são baseadas nos cálculos QPL e a seção Status do estoque é sempre daqui a 18 meses (incluindo o mês atual)
  - **Programas de servidor:** O padrão é 6 meses anteriores e 18 meses futuros (editável)
  - **Programas baixados:** O padrão é 6 meses anteriores e 18 meses futuros (não editável no painel). Os administradores podem definir padrões personalizados por programa por meio da tela Atualizar informações do programa.

![Dashboard Default Report Period](/img/media/image81.png)

_Período de relatório padrão do painel nas configurações do programa_

  **Métricas em destaque**
  
  **Pontuação geral do plano de fornecimento**
  - O mostrador grande exibe a pontuação geral do plano de fornecimento para um programa específico. A Pontuação Geral do Plano de Fornecimento é uma média do Índice de Qualidade e da Pontuação de Status do Estoque. Em geral, pontuações mais altas indicam um desempenho mais forte do plano de abastecimento. Para obter mais informações sobre como as pontuações são calculadas, consulte o Relatório de scorecard do plano de fornecimento.
  
  **Status do estoque:**
  - O gráfico de barras exibe a porcentagem de meses no período do relatório por categoria de ações. Pode passar o mouse sobre o gráfico para detalhamentos detalhados.
  - Personalização visual: pode ocultar elementos de legenda ou copiar/colar gráfico.
  - A tabela anexa apresenta detalhes de ruptura por unidade de planejamento (PU).
  - Exibe a pontuação do status do estoque, que se baseia no número de meses (18 meses no futuro) em que cada unidade de planejamento está estocada de acordo com o planejado.

![Stock Status Section](/img/media/image82.png)

_Seção de status do estoque_

  **Qualidade dos dados:**
  - Reflete as métricas da lista de problemas de QAT, independente do período do relatório.
  - Atualizações dinamicamente com alterações feitas no QPL se o usuário tiver atualizado o QPL. Caso contrário, o usuário poderá clicar no ícone de atualização próximo ao cabeçalho Data Quality para atualizar os dados exibidos.
  - Exibe o Índice de Qualidade de Dados, que é uma média da porcentagem em que o plano de fornecimento está em conformidade de acordo com os quatro mostradores de qualidade de dados.
  - Mostradores para:
    - Consumo previsto: contabiliza a quantidade de UPs que possuem pelo menos um mês de falta de consumo previsto nos próximos 18 meses.
    - Estoque Real: Conta o número de UPs que não possuem dados recentes de estoque real nos últimos 3 meses.
    - Consumo Real: Conta o número de UPs que não possuem dados de consumo real nos últimos 3 meses ou apresentam lacuna nos dados de consumo real nos últimos 6 meses.
    - Remessas: Conta a quantidade de UPs que possuem remessas com datas de recebimento no passado, ou remessas que deveriam ter sido “enviadas” com base nos prazos de entrega do programa.

![Data Quality Section](/img/media/image85.png)

_Seção de qualidade de dados_

  **Erro de previsão (somente versões de servidor):**
  - Erro percentual médio calculado para o período do relatório.
  - Erros acima de um limite definido (padrão 50%) são destacados em vermelho. Os administradores podem ajustar limites por PU e programa na tela 'Atualizar Unidades de Planejamento'.
  - Os dados faltantes exibem um ícone de cuidado com uma nota explicativa.

![Forecast Error Section](/img/media/image83.png)

_Seção de erro de previsão_

  **Envios:**
  - Gráfico de remessas por fonte de financiamento, agente de compras ou status usando o menu suspenso para designar qual deles.
  - Passe o mouse sobre o gráfico de pizza para detalhar os custos. A repartição dos custos utiliza o valor total das remessas nesse período do relatório como denominador.
  - A tabela anexa mostra o número de remessas com financiamento a definir no período do relatório.

![Shipment Section](/img/media/image84.png)

_Seção de Remessa_

**Expirações:**
  - Exibe vencimentos dentro do período do relatório, incluindo quantidade e custo total
  - O valor total de vencimento em todas as unidades de planejamento do programa selecionado aparece no canto superior direito da seção.

![Expiries Section](/img/media/image86.png)

_Seção de Expirações_