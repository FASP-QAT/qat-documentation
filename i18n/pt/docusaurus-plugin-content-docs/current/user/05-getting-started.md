---
id: getting-started
title: "Primeiros passos"
sidebar_label: "Primeiros passos"
sidebar_position: 5
---
# Primeiros passos

## Requisitos do sistema

O QAT é um aplicativo baseado na Web acessível por meio de laptops e desktops que executam **Windows, Linux/Ubuntu ou macOS**. 

- **Navegador recomendado:** Google Chrome.
- **Navegadores suportados:** Chromium, Microsoft Edge, Mozilla Firefox e Safari.

### Espaço em disco e cache
Recomendamos ter espaço livre suficiente em sua unidade principal (por exemplo, unidade C:) para dados de cache do navegador. O Chrome e outros navegadores compartilham um pool de armazenamento entre todos os aplicativos da web, que pode ocupar até 1/3 do espaço disponível em disco. O QAT pode utilizar até 20% desse pool compartilhado. Por exemplo, com 60 GB de espaço livre, o pool compartilhado é de 20 GB, permitindo que o QAT armazene até 4 GB de dados locais.

## Hierarquia de dados em QAT

O sistema QAT está organizado em três níveis hierárquicos:

1. **Nível de Aplicação:** O nível mais alto, abrangendo dados mestres globais que se aplicam a todos os Realms e Programas. Restrito a administradores de aplicativos.
2. **Nível de Realm:** Abrange dados mestre específicos de um Realm (por exemplo, País, Áreas Técnicas, Unidades de Planejamento). Gerenciado por administradores de reino.
3. **Nível do programa:** O terceiro nível, onde os usuários gerenciam previsões específicas ou dados de planejamento de fornecimento (por exemplo, consumo, estoque, remessas).

Para funções administrativas detalhadas, consulte [Anexo 1: Manual do Administrador de Aplicativos e Realm](13-annex-1-application-realm-administrator-manual.md#annex-1-application-realm-administrator-manual).

> **Observação:** Um **Programa** é uma combinação de País, Área Técnica, Organização e Região (por exemplo, *FASPonia–ARV-MOH-National*).

## Funções e permissões do usuário

O acesso ao QAT é regido por funções e permissões definidas no nível do Aplicativo ou do Realm. Um usuário pode receber diversas funções, que podem variar de acordo com o programa.

- **Nível do Programa:** A maioria dos usuários (gerentes e executivos) interage nesse nível como **Administradores do Programa** ou **Usuários do Programa**.
- **Nível de reino:** **Administradores de reino** gerenciam dados mestre e têm acesso a todos os programas dentro de seu reino.
- **Nível de aplicativo:** **Administradores de aplicativos** têm acesso exclusivo a estruturas globais, funções e configurações do sistema.

Para obter uma lista completa de funções e funções empresariais, consulte [Anexo 4: Funções Empresariais](16-annex-4-business-functions.md#annex-4-business-functions).

## Login e instalação do PWA

### Login inicial (online)
Se você não possui um perfil de usuário, entre em contato com o administrador do Realm para criar uma conta. Depois de criada, você receberá um e-mail para redefinir sua senha.

1. Clique no link **Redefinir senha** no e-mail (válido por 24 horas, uso único).
2. Crie sua nova senha e clique em **Enviar**.
3. Faça login usando seu endereço de e-mail e a nova senha.

> **Requisitos de senha:**
> - Mínimo 6 caracteres, começando com uma letra.
> - Deve incluir pelo menos uma letra maiúscula, um número e um caractere especial.
> - Não pode ser igual ao seu nome de usuário ou senha anterior.

### Instalando o aplicativo Web progressivo QAT (PWA)
O PWA oferece uma experiência autônoma semelhante a um aplicativo em sua área de trabalho e oferece suporte ao modo offline. É compatível com **Google Chrome** e **Microsoft Edge**.

#### Instalação padrão
1. Navegue até o [site da Quantification Analytics](https://www.quantificationanalytics.org/).
2. Clique no ícone **Instalar** (sinal de mais) na barra de endereço do navegador.
3. Selecione **Instalar** no pop-up de confirmação.

![Installing QAT PWA](/img/media/image10.png)
*Figura 1: Instalação do PWA*

#### Instalação alternativa (se o botão estiver faltando)
1. No Chrome, clique nos **três pontos verticais** (canto superior direito).
2. Selecione **Transmitir, salvar e compartilhar** > **Criar atalho**.
3. Um ícone QAT aparecerá na sua área de trabalho.

![PWA Alternate Method](/img/media/image12.png)
*Figura 2: Instalação alternativa do PWA*

## Acessando QAT para usuários existentes

1. Navegue até [https://www.quantificationanalytics.org/](https://www.quantificationanalytics.org/) ou abra o PWA em seu desktop.
2. Insira suas credenciais na tela de login.
3. (Opcional) Marque a caixa **Offline** para trabalhar sem conexão com a Internet.

![Login Screen](/img/media/image13.png)
*Figura 3: Tela de Login*

### Segurança e Manutenção
- **Logout:** Clique no ícone de logout na faixa superior direita.
- **Alteração de senhas:** No QAT, acesse seu **Perfil** > **Alterar senha**.
- **Esqueceu a senha:** Clique no link **Esqueceu a senha?** na tela de login para receber um link de redefinição por e-mail.

> **Observação:** As senhas do QAT expiram um ano após serem criadas ou atualizadas.

## Trabalhando off-line

QAT é uma ferramenta híbrida que opera nos modos online e offline. Você pode alternar manualmente para o modo offline por meio da página de login ou nas configurações do seu perfil. Isto é particularmente útil em ambientes com baixa largura de banda de Internet.

![Offline Toggle (Profile)](/img/media/image18.png) ![Offline Toggle (Login)](/img/media/image19.png)

*Figura 9: Alternar offline nas configurações do perfil e Figura 10: Alternar offline na página de login*

O ícone do perfil no canto superior direito indica o status da sua conexão: um **círculo verde** para online e um **círculo vermelho** para offline.

![Status Icons](/img/media/image20.png)

*Figura 11: Ícones de status on-line (verde) vs. off-line (vermelho)*

### Recursos on-line x off-line

| Recurso | Off-line | On-line |
| :--- | :---: | :---: |
| Planos e previsões de abastecimento de importação/exportação | [x] | [x] |
| Ver dados mestre | [x] | [x] |
| Construir Árvores e Cenários | [x] | [x] |
| Insira dados transacionais e de consumo | [x] | [x] |
| Extrapolar (Média Móvel / Semimédia) | [x] | [x] |
| Visualize relatórios e resultados em nível de programa | [x] | [x] |
| Redefinir senha | [ ] | [x] |
| Sincronizar dados mestre | [ ] | [x] |
| Atualizar informações/orçamentos do programa | [ ] | [x] |
| Importar dados entre módulos | [ ] | [x] |
| Extrapolar (Regressão Linear / TES / ARIMA) | [ ] | [x] |
| Criar tickets de suporte técnico | [ ] | [x] |
| Baixar/carregar programas | [ ] | [x] |
| Ver relatórios de nível global | [ ] | [x] |

*\*Nota: A maioria das funções off-line exige que o programa específico tenha sido previamente baixado para o seu dispositivo local. Consulte a Seção 3 para obter detalhes.*

## Solução de problemas e atualizações de software

### Lançamentos regulares de software
QAT recebe atualizações regulares de versão para correções de bugs, otimização de desempenho e novos recursos. Quando uma nova versão estiver disponível, você será solicitado na tela de login para atualizar o aplicativo.

![New QAT Version Prompt](/img/media/image22.png)
*Figura 4: Notificação de atualização de software*

> [!IMPORTANTE]
> Para evitar perda de dados durante atualizações estruturais importantes, certifique-se de que todos os programas locais sejam carregados no servidor antes do lançamento. A equipe de suporte do QAT irá notificá-lo com antecedência se for necessário fazer um upload.

### Resolvendo problemas comuns
Se você encontrar dificuldades técnicas, siga estas etapas de solução de problemas na ordem:

#### 1. Atualização do aplicativo
Resolva a maioria dos pequenos problemas executando uma atualização completa. Pressione **Ctrl + Shift + R** simultaneamente. Isso recarrega o software e elimina falhas temporárias, ao contrário de uma atualização padrão do navegador (**Ctrl + R**).

#### 2. Sincronização completa de dados mestres
Se a atualização não funcionar, tente uma **Sincronização completa de dados mestre**. Enquanto um MDS regular busca apenas alterações incrementais, um MDS completo recarrega todos os dados mestre do zero. 
- *Localização:* Clique no link na parte inferior do aplicativo.
- *Requisito:* É necessária uma conexão estável à Internet.

![Full Master Data Sync](/img/media/image24.png)
*Figura 5: Link de sincronização completa de dados mestres*

#### 3. Limpar dados do site
Como etapa final da solução de problemas, você pode limpar todos os dados armazenados localmente. 

> [!AVISO]
> Isso apagará todas as alterações locais e programas baixados. Certifique-se de ter **carregado todos os dados** no servidor antes de continuar.

1. Pressione **Ctrl + Shift + I** para abrir as Ferramentas do Desenvolvedor do navegador.
2. Navegue até a guia **Aplicativo**.
3. Selecione **Armazenamento** à esquerda e clique em **Limpar dados do site**.
4. Faça login novamente e baixe novamente seus programas.

![Clear Site Data](/img/media/image26.png)
*Figura 6: Limpeza de dados do site*

### Solução de problemas de erros de rede
Se você vir uma mensagem "Erro de rede", geralmente é devido a:
- **Internet instável:** Tente uma conexão mais rápida ou aguarde um sinal melhor.
- **Restrições de firewall:** A política de TI da sua organização pode bloquear o QAT. Solicite que seu departamento de TI coloque na lista de permissões os seguintes URLs:
    -`api.quantificationanalytics.org`
    -`www.quantificationanalytics.org`

## Helpdesk e tickets do QAT

### Tickets para adição/atualização de usuários e dados mestre

Quando um usuário precisar adicionar ou atualizar um usuário ou dados mestre por qualquer motivo, ele poderá fazê-lo solicitando um ticket de suporte técnico. Antes de solicitar quaisquer adições ou alterações nos dados mestres no QAT, o usuário deve primeiro verificar os dados mestres em nível de região (Mestres em nível de região \>\> Produto) e o Relatório de Catálogo de Programas para garantir que as informações ainda não existam. Para obter mais informações sobre como acessar e usar dados mestres, consulte [Gerenciamento de programas](06-managing-programs-and-versions.md#working-with-program-data) e [Realm Masters](13-annex-1-application-realm-administrator-manual.md#realm-masters). Para obter informações sobre como acessar o Catálogo de Programas, consulte [Catálogo de Programas](13-annex-1-application-realm-administrator-manual.md#product). Para acessar o Helpdesk do QAT:

1. > Os usuários podem acessar o Helpdesk do QAT de dois locais diferentes no QAT:
    1. > Na página de login e

    2. > da faixa superior direita no QAT

![A screenshot of a login screen Description automatically generated](/img/media/image27.png)

![A red line with numbers and circles Description automatically generated](/img/media/image28.png)

Figura 18: Três locais para acessar o Helpdesk do QAT

2. > Aparecerão quatro opções para retirar um ticket: Adicionar/Atualizar Usuário, Adicionar/Atualizar Dados Mestre, Solicitação de Mudança e Reportar um Bug. Veja as seções abaixo sobre [Solicitações de Mudança](#requesting-a-change) e [Relatar um Bug](#reporting-a-bug).

![P772#yIS1](/img/media/image29.png)

Figura 19: Menu Helpdesk do QAT

3. > Escolha Adicionar/Atualizar Usuário ou Adicionar/Atualizar dados mestre. Qualquer uma das opções o levará a telas diferentes para obter mais informações.

4. > Insira as informações solicitadas no formulário e clique em “Enviar”.

![P778#yIS1](/img/media/image30.png)

Figura 20: Tela Adicionar/Atualizar Usuário

![A screenshot of a computer Description automatically generated](/img/media/image31.png) ![P781#yIS2](/img/media/image32.png)

Figura 21: Tela Adicionar dados mestre Figura 22: Tela Adicionar dados mestre do agente de compras

Após enviar um ticket, será atribuído ao usuário um número de código de ticket (ex: QAT-570). O usuário também receberá uma notificação por e-mail e o número de “Tickets Abertos” na faixa superior em vermelho aumentará. Este número do ticket corresponde ao número do ticket armazenado na ferramenta de gerenciamento do software JIRA. Para obter mais informações sobre o gerenciamento de tickets e a ferramenta de gerenciamento do software JIRA, consulte [Gerenciamento de tickets](#managing-tickets).

### Solicitando uma alteração

Quando um usuário tem uma ideia para um novo recurso, funcionalidade ou elemento de design que tornaria o QAT um aplicativo melhor para todos os usuários, como um novo relatório, remoção de uma coluna desnecessária, etc., ele pode solicitar uma alteração por meio do Helpdesk do QAT. Todos os tickets de solicitação de alteração exigirão uma descrição detalhada e capturas de tela. Assim que a equipe técnica receber um ticket de solicitação de alteração do usuário, ele será analisado quanto à viabilidade e utilidade para todos os usuários do QAT. Se a solicitação de mudança for aceita, ela não será disponibilizada no QAT imediatamente, mas será colocada em uma fila com base na prioridade de negócios, na criticidade e nos requisitos de LOE do domínio. Para solicitar uma alteração no QAT:

1. > Clique no ícone QAT Helpdesk.

![A red line with numbers and circles Description automatically generated](/img/media/image28.png)

Figura 23: Ícone do Helpdesk QAT

2. > Clique em “Solicitar uma alteração” nas opções do menu QAT Helpdesk.

3. > Preencha o formulário preenchendo as informações solicitadas e clique em “Enviar”.

![A screenshot of a computer Description automatically generated](/img/media/image33.png)

Figura 24: Ticket de solicitação de alteração

4. > Após o envio do ticket, será atribuído ao usuário um número de Código do Ticket (ex: QAT-570). O usuário também receberá uma notificação por e-mail e o número de “Tickets Abertos” na faixa superior em vermelho aumentará. Este número do ticket corresponde ao número do ticket armazenado na ferramenta de gerenciamento do software JIRA. Para obter mais informações sobre o gerenciamento de tickets e a ferramenta de gerenciamento do software JIRA, consulte [Gerenciamento de tickets](#managing-tickets).

### Relatando um bug

Quando um usuário se depara com um possível problema de sistema com QAT, ele deve tentar solucioná-lo por meio de uma [atualização do aplicativo](#1-application-refresh) e/ou [limpeza dos dados do site](#3-clear-site-data). Se nenhuma dessas etapas resolver o problema, o usuário deverá enviar um ticket de suporte técnico para relatar o bug.

O ticket de bug será abordado pela equipe de desenvolvimento de acordo com a prioridade do negócio, criticidade e ‘capacidade’ disponível por meio de versões incrementais. As etapas para gerar um ticket no QAT são mostradas abaixo:

1. Abra a tela do QAT Helpdesk e clique em “Relatar um bug”.

2. Insira um resumo do bug, bem como uma descrição do bug. Por favor, seja descritivo e forneça o máximo de detalhes possível (_por exemplo, em qual programa/versão/funcionalidade você estava trabalhando, etapas que você executou para obter o bug, etc_).

3. Carregue uma captura de tela do bug clicando no botão “Navegar” e extraindo um arquivo de captura de tela salvo do seu computador.
    1. Também é útil fornecer a exportação do programa, se possível (consulte [Exportações de Programas](06-managing-programs-and-versions.md#export) sobre como exportar um programa local)

    2. **\*Nota**: Se você quiser fazer upload de vários arquivos, coloque as várias capturas de tela em uma pasta no seu computador e compacte-as antes de navegar no QAT. Em seguida, faça upload da pasta compactada.\*

4. Escolha uma prioridade (Mais Alta, Alta, Média ou Baixa) para o bug com base na urgência e como isso afeta o trabalho diário no QAT
    1. Os tempos de resposta e resolução de bugs serão baseados no nível de prioridade

5. Clique no botão “Enviar” para levantar o ticket.

![A screenshot of a computer Description automatically generated](/img/media/image34.png)

Figura 25: Reportar um bug

### Gerenciando ingressos

Para maior visibilidade, o QAT dará aos usuários a opção de gerenciar e verificar o status de seus tickets, quer estejam adicionando/editando um usuário ou dados mestre, solicitando uma alteração ou relatando um bug. Quando um usuário envia um ticket, ele receberá um número de código de ticket (ex: QAT-570). O usuário também receberá uma notificação por e-mail e o número de “Tickets Abertos” na faixa superior em vermelho aumentará. Este número do ticket corresponde ao número do ticket armazenado na ferramenta de gerenciamento do software JIRA.

![P815#yIS1](/img/media/image35.png) ![A red line with numbers and circles Description automatically generated](/img/media/image28.png)

Figura 26: Número do código do ticket do Helpdesk Figura 27: Número de tickets na faixa superior

A partir da notificação por e-mail, os usuários podem clicar em “Ver solicitações” para ver o status do seu ticket. Os usuários também podem adicionar comentários e capturas de tela adicionais à sua solicitação, se desejarem. **Os usuários sempre receberão uma notificação por e-mail assim que o ticket for concluído.**

**Observação**: Para acessar totalmente o ticket por meio da ferramenta de gerenciamento do software JIRA, os usuários devem criar uma conta com nome de usuário e senha no JIRA. Criar uma conta no JIRA é **opcional**. JIRA é uma ferramenta externa de gerenciamento de software que pode ser acessada através do link fornecido no e-mail, **clicando no ícone HelpDesk e escolhendo “Gerenciar meus tickets” no canto superior direito do pop-up**, ou diretamente através de [https://qathelpdesk.atlassian.net/servicedesk/customer/portals](https://qathelpdesk.atlassian.net/servicedesk/customer/portals).

![P821#yIS1](/img/media/image36.png)

Figura 28: Notificação por e-mail para ticket QAT

![A screenshot of a computer Description automatically generated](/img/media/image37.png)

Figura 29: Opção para navegar até JIRA

![P823#yIS1](/img/media/image38.png)

Figura 30: Gerenciamento de tickets JIRA

## Navegação e barra de menu

**Navegação Básica**

## Helpdesk e tickets do QAT

O Helpdesk QAT é seu principal ponto de contato para suporte técnico, gerenciamento de usuários e solicitações de recursos.

### Enviando um ticket
Você pode acessar o Helpdesk na **Página de login** ou na **Faixa superior** do aplicativo.

1. Clique no ícone **QAT Helpdesk**.
2. Selecione uma das seguintes opções:
   - **Adicionar/atualizar usuário:** Solicite novas contas ou alterações de função.
   - **Adicionar/Atualizar Dados Mestres:** Solicite acréscimos a produtos, agentes de compras, etc.
   - **Solicite uma alteração:** Proponha novos recursos ou melhorias de design.
   - **Relatar um bug:** Relate problemas técnicos (inclua capturas de tela e etapas para reprodução).
3. Preencha os campos obrigatórios e clique em **Enviar**.

![QAT Helpdesk Menu](/img/media/image29.png)
*Figura 7: Opções de tíquetes de suporte técnico*

### Gerenciando seus ingressos
Após o envio, você receberá um **Código do ticket** (por exemplo, QAT-570) e uma notificação por e-mail. 
- **Rastreamento:** Clique em **Ver solicitações** no e-mail de notificação para verificar o status ou adicionar comentários.
- **Integração JIRA:** QAT usa JIRA para gerenciamento de tickets. Embora seja opcional, você pode criar uma conta JIRA para rastrear todas as suas solicitações em um só lugar.

## Navegação e Interface

### Página inicial e painel
Ao fazer login, você verá o Dashboard principal. 
- **Módulo de Planejamento de Fornecimento:** Apresenta visualizações e análises aprimoradas.
- **Módulo de previsão:** Exibe blocos para cada programa baixado. Clique na seta de um bloco para gerenciar versões, árvores ou entrada de dados.

Para retornar ao Painel a qualquer momento, clique no ícone **Home** na faixa superior ou no **Logotipo QAT** no canto superior esquerdo.

![Supply Planning Dashboard](/img/media/image39.png)
*Figura 8: Tela inicial do planejamento de suprimentos*

### Layout da interface
A interface consiste em três áreas principais:
1. **Faixa superior:** Acesso rápido a funções globais (Perfil, Helpdesk, Sincronização).
2. **Menu Barra Lateral:** Navegação para telas específicas do módulo (Dados Mestres, Relatórios, etc.).
3. **Área de Conteúdo Principal:** Onde ocorre a entrada e análise de dados.

**Faixa superior para planejamento de fornecimento versus previsão:**
![Supply Planning Ribbon](/img/media/image44.png)
![Forecasting Ribbon](/img/media/image45.png)

### Principais funções da faixa de opções

| Ícone | Função |
| :--- | :--- |
| ![Logout](/img/media/image46.png) | **Logout:** Efetua logout do aplicativo QAT. |
| ![Profile](/img/media/image47.png) | **Perfil do usuário:** Verde quando online, vermelho quando offline. Clique para visualizar o nome de usuário/funções, alterar o idioma, redefinir a senha ou alternar o modo online/offline. |
| ![Home](/img/media/image42.png) | **Painel:** Retorna à tela inicial principal. |
| ![Download Manual](/img/media/image48.png) | **Manual do usuário:** Baixa o manual do QAT para o seu dispositivo local. |
| ![Refresh](/img/media/image49.png) | **Atualizar página:** recarrega a tela atual. |
| ![Upload Alert](/img/media/image50.png) | **Status do upload:** Azul indica que não há alterações pendentes. Vermelho indica que as alterações locais estão prontas para upload; o número mostra os programas afetados. |
| ![Version Alert](/img/media/image51.png) | **Sincronização de versão:** Vermelho indica que uma versão mais recente está disponível no servidor; clique para sincronizar seu programa local. |
| ![Helpdesk](/img/media/image52.png) | **QAT Helpdesk:** abre o portal de tickets para suporte, atualizações de dados ou relatórios de bugs. O número rastreia seus tickets abertos. |
| ![ERP Notification](/img/media/image53.png) | **Atualizações de ERP:** (somente Planejamento de Fornecimento) Alerta sobre atualizações de sistemas ERP vinculados (por exemplo, ARTMIS). |
| ![Guidance](/img/media/image54.png) | **Orientação do fluxo de trabalho:** (somente previsão) Exibe um guia de alto nível para o processo de previsão. |

Além disso, os usuários podem utilizar o ícone do perfil para verificar suas funções de usuário atuais, bem como:

- Alterar sua senha,

- Vá [off-line/online,](#working-offline)  
  ![A close up of words Description automatically generated](/img/media/image55.png)

- [Alterar o idioma preferido,](#mudar-idioma)

- Mude para o modo de tema escuro / claro e  
  ![A black and white text Description automatically generated](/img/media/image56.png)

- Mostrar decimais nas telas de planejamento de fornecimento  
  ![A black text on a white background Description automatically generated](/img/media/image57.png)

### Menu da barra lateral

O menu da barra lateral permite navegar pelas diversas telas do QAT. As opções disponíveis dependem da função e das permissões atribuídas.

#### Módulos principais

- **Módulo de planejamento de fornecimento:** Gerencie dados do plano de fornecimento, realize revisões e visualize relatórios de planejamento de fornecimento.
- **Módulo de previsão:** Crie árvores de previsão, importe dados de consumo e analise resultados de previsão.
- **Sincronização de dados mestres:** Sincronize manualmente os dados mestres atualizados sem fazer logout.
- **Mestres de aplicativos e domínios:** (somente administradores) Gerencie estruturas de dados de alto nível e configurações específicas de domínios.

#### Ícones de navegação na barra lateral

| Ícone | Ação |
| :---: | :--- |
| ![Collapse](/img/media/image58.png) | **Recolher totalmente:** Oculta totalmente o menu da barra lateral para obter mais espaço na tela. |
| ![Minimize](/img/media/image59.png) | **Minimizar:** Reduz a barra lateral apenas a ícones. |
| ![Expand](/img/media/image60.png) | **Expandir:** restaura a barra lateral completa ou expande um submenu. |
| ![Collapse Sub-menu](/img/media/image61.png) | **Recolher submenu:** Oculta itens de menu aninhados. |
| ![Module Toggle](/img/media/image62.png) | **Alternar Módulo:** Alterna entre os módulos Previsão e Planejamento de Fornecimento. |

*Tabela 4: Ícones do menu da barra lateral*

### Botões de ação comuns

| Botão | Ação |
| :--- | :--- |
| ![Submit](/img/media/image63.png) | **Enviar:** salva alterações e atualiza o banco de dados. |
| ![Cancel](/img/media/image64.png) | **Cancelar:** Descarta alterações não enviadas. |
| ![Revert](/img/media/image65.png) | **Reverter:** Retorna os dados não enviados ao seu estado anterior. |
| ![Add](/img/media/image66.png) | **Adicionar:** Cria um novo registro. |
| ![Update](/img/media/image67.png) | **Atualização:** Modifica um registro existente. |
| ![Search](/img/media/image68.png) | **Pesquisa:** Filtra a tabela atual para palavras-chave específicas. |
| ![Clear](/img/media/image69.png) | **Limpar:** redefine todos os filtros ativos e campos de pesquisa. |
| ![Mandatory](/img/media/image70.png) | **Campo Obrigatório:** Indica que a entrada de dados é obrigatória. |
| ![Help](/img/media/image71.png) | **Dicas:** exibe definições, fórmulas ou contexto para termos específicos. |
| ![Guidance](/img/media/image72.png) | **Orientação de página:** fornece instruções de alto nível para a tela atual. |
| ![Export Logs](/img/media/image73.png) ![Export Reports](/img/media/image74.png) | **Exportar:** Baixa dados/relatórios como arquivos PDF, CSV ou Word. |

## Mudando o idioma

Para garantir que o QAT seja adaptável a usuários de todo o mundo, o aplicativo exibe texto em quatro idiomas diferentes: inglês, francês, português e espanhol. Os usuários são incentivados a enviar tickets se desejarem que a tradução de uma etiqueta específica seja melhorada. (_Observação: as traduções dos rótulos dos aplicativos podem ser editadas apenas por **administradores de aplicativos**. Instruções sobre como fazer isso podem ser encontradas na [seção de tradução](13-annex-1-application-realm-administrator-manual.md#database-translation)._)

Existem duas maneiras de alterar o idioma exibido para o usuário:

1. **Tela de login:**

No canto superior direito da tela de login, há um menu suspenso no qual os usuários podem selecionar seu idioma preferido antes de fazer login. Isso não apenas alterará o texto quando você estiver conectado ao QAT, mas também alterará o texto exibido na tela de login.

![P1001#yIS1](/img/media/image75.png)

Figura 34: Alteração de idioma da tela de login

2. **Dentro do QAT:**

Uma vez logado no QAT, o usuário pode alterar o idioma de exibição clicando no ícone do perfil do usuário no canto superior direito da tela, selecionando o idioma preferido e então a ferramenta atualizará automaticamente seu texto/rótulos.

![](/img/media/image76.png)

Figura 35: Mudança de idioma na ferramenta

## Painel QAT

O painel Planejamento de fornecimento fornece uma interface abrangente para análises visuais. Ele está dividido em três seções principais: **Ticker**, **Visão geral** e **Destaque do programa**.

![QAT Dashboard](/img/media/image77.jpeg)

*Figura 36: Painel de Planejamento de Fornecimento QAT*

### 1. Marcador
O Ticker exibe métricas de alto nível por meio de três blocos de rolagem automática:
- **Reino:** Mostra contagens globais de países, usuários e programas.
- **Meu acesso:** Lista os planos de fornecimento disponíveis para você.
- **Vinculação de ERP:** mostra a contagem de remessas vinculadas em seus programas.

![Dashboard Ticker](/img/media/image78.png)

*Figura 37: Blocos de ticker do painel*

### 2. Visão geral
A tabela Visão geral resume vários programas com base no seu nível de acesso.

![Dashboard Overview Section](/img/media/image79.png)

*Figura 38: Tabela de visão geral do painel*

- **Seleção de programas:** Escolha entre programas baseados em servidor ou locais (baixados). A seleção múltipla é suportada.
- **Coluna Ação:** (somente programas locais) Fornece links rápidos para exclusão, upload ou download de programas.
- **Lista de problemas (QPL):** (somente programas locais) Clique no número nesta coluna para ir para a lista de problemas de QAT desse programa.
- **Notas e status:** Revise o status atual e as notas históricas de cada plano de fornecimento.

![Version Notes](/img/media/image80.png)

*Figura 39: Notas da Versão do Programa*

### 3. Destaque do programa
Esta seção fornece métricas detalhadas para um único programa selecionado.

- **Status do estoque:** Um gráfico de barras mostrando a porcentagem de meses por categoria de estoque (por exemplo, Estocado, Excesso de estoque, Estoque esgotado).
- **Erro de previsão:** (somente programas de servidor) Destaca unidades de planejamento com altas taxas de erro (padrão >50%).
- **Remessas:** um gráfico de pizza mostrando fontes de financiamento e status de aquisição para remessas futuras.
- **Qualidade de dados:** Exibe métricas em tempo real da lista de problemas QAT (QPL), como dados de consumo ausentes ou remessas atrasadas.
- **Expirações:** Resume a quantidade e o custo total dos produtos que expiram dentro do período do relatório.

![Stock Status](/img/media/image82.png) ![Shipment Status](/img/media/image84.png)  
*Figura 40: Status do estoque e Figura 41: Análise de remessa*

![Data Quality Dials](/img/media/image85.png) ![Expiries Table](/img/media/image86.png)  
*Figura 42: Qualidade dos dados e Figura 43: Expirações do produto*