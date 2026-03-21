---
id: getting-started
title: "Getting Started"
sidebar_label: "Getting Started"
sidebar_position: 2
---
# Primeiros passos

## Requisitos do sistema

Espera-se que o QAT seja acessado principalmente por meio de laptops e desktops com sistemas operacionais padrão, como MS Windows, Linux/Ubuntu e iOS. O navegador recomendado é o Google Chrome, mas podem ser utilizados Chromium, Edge, Mozilla Firefox ou Safari.

Também é sugerido que cada usuário do QAT tenha espaço suficiente em sua unidade C: para permitir o armazenamento bem-sucedido dos dados do cache do navegador. A quantidade de espaço necessária depende do tamanho do programa QAT que está sendo baixado e de quantos aplicativos estão sendo executados e utilizando dados do navegador. O armazenamento temporário é compartilhado entre todos os aplicativos da web em execução no navegador. Esse pool compartilhado pode ter até 1/3 do espaço disponível em disco. Cada aplicativo pode então ter até 20% do pool compartilhado. Por exemplo, se o espaço total disponível na unidade C: for 60 GB, o pool compartilhado será de 20 GB; portanto, o QAT pode potencialmente utilizar até 4 GB. Isso é calculado a partir de 20% (até 4 GB) de 1/3 (até 20 GB) do espaço disponível na unidade C: (60 GB).

## Níveis de hierarquia no QAT

O sistema QAT possui **três níveis de hierarquia** para conduzir operações. Os níveis de hierarquia são os seguintes:

- **Aplicativo** Masters é o nível de hierarquia de dados mais alto no QAT. Os dados mestre do aplicativo se aplicam a todos os domínios e programas do QAT. A maior parte é acessível apenas para administradores de aplicativos, embora algumas funções do aplicativo estejam disponíveis para administradores de domínio, como adicionar e atualizar usuários e atribuir funções a usuários. Os administradores de aplicativos podem selecionar os dados mestre específicos de todo o aplicativo que desejam adicionar ou atualizar.

- **Realm** Level Masters abrange todos os dados mestres desse Realm que se aplicam aos seus programas de previsão e planejamento de fornecimento. O Administrador do Realm poderá visualizar, criar e editar esses dados mestre. Programas, Áreas Técnicas, Unidades de Planejamento, Agentes de Compras e Modelos de Árvore são alguns exemplos de dados mestres de realm que o Administrador de Realm pode adicionar e manter. Muitos dos mestres de nível de região estão acessíveis para visualização aos Administradores do Programa; no entanto, eles não têm a capacidade de adicionar/atualizar esses dados.

- **Programa** Level Masters é o terceiro nível de hierarquia no QAT. Embora os administradores do programa não possam adicionar programas, eles podem atualizar as informações do programa (por exemplo, prazos de entrega, custos de frete, etc.) dentro do(s) programa(s) atribuído(s). Administradores e Usuários do Programa também podem adicionar e atualizar dados do programa, como ajustes de consumo, extrapolação e gerenciamento de árvores (em previsões); e consumo, estoque, remessas (no planejamento de abastecimento).

Para obter mais informações sobre a funcionalidade para administradores em nível de aplicativo e realm, consulte [Anexo 1: Manual do administrador de aplicativo e realm.](10-annex-1-application-realm-administrator-manual.md#annex-1-application-realm-administrator-manual)

**Programas** são uma combinação de País, Área Técnica (1 ou mais), Organização e Região. Por exemplo, **FASPonia** –ARV-MOH-National, é um programa de planeamento de abastecimento no âmbito do Reino da Saúde Global para a gestão e planeamento de **antirretrovirais** para o ministério da saúde do país fictício FASPonia, e os dados de consumo e inventário são capturados a nível nacional (região).

## Funções e permissões do usuário

Os usuários podem receber uma das muitas funções disponíveis no QAT que definem a qual nível de dados os usuários têm acesso e como eles interagem com esses dados, de acordo com a seguinte hierarquia:

Os usuários terão acesso a um ou mais níveis de dados de acordo com as funções e permissões atribuídas a eles. As funções são definidas centralmente no nível do aplicativo ou do domínio. Uma função pode ter diversas permissões atribuídas a ela. Essas permissões definem a quais ações um usuário tem direito. Um usuário pode receber diversas funções e pode variar a função com base no acesso ao programa. Por exemplo, um usuário pode ser um administrador do programa do plano de fornecimento para o programa A e um visualizador de relatórios do plano de fornecimento para o programa B. (NOTA: As funções podem ser atribuídas apenas aos usuários registrados no QAT).

A grande maioria dos utilizadores do QAT – gestores e responsáveis ​​dos programas de saúde nacionais – irão interagir com a aplicação ao **nível do programa**; portanto, este manual focará principalmente nas tarefas e funções que se aplicam a este grupo. As funções de Administrador do Programa e Usuário do Programa geralmente são configuradas para ter acesso a um ou vários programas dentro de uma jurisdição geográfica, ou seja, um Administrador do Programa só pode gerenciar programas atribuídos em seu país, mas não em uma região.

Um administrador do **Realm** gerencia dados mestre e pode ter acesso a todos os programas dentro desse realm.

No nível **Aplicativo**, há uma função de Administrador de Aplicativo. Esta função tem acesso exclusivo para criar estruturas de dados em todo o aplicativo, incluindo adição de linguagens, funções, criação de domínios, atualização de rótulos estáticos e dinâmicos, entre outras funções de negócios.

Consulte [Anexo 4: Funções de negócios](13-annex-4-business-functions.md#annex-4-business-functions) para obter uma tabela com a lista completa de funções de negócios do QAT disponíveis por função de usuário.

## Como fazer login no QAT e instalar o Progressive Web Application (PWA)

**Como fazer login no QAT** **pela primeira vez** (**online**)

1. > Se você não possui um perfil de usuário, entre em contato com o administrador do reino para criar uma nova conta de usuário e função correspondente em seu nome.

2. > Uma vez criada a conta, o novo usuário recebe um e-mail para “Redefinir Senha”.

3. > O link “Redefinir senha” redirecionará o usuário ao site do QAT para criação da nova senha. Depois de concluído, clique em “Enviar”.
    1. > **Observação**: o link “Redefinir senha” será válido por 24 horas e poderá ser usado apenas uma vez. Se necessário, o usuário pode gerar novamente o link para redefinir a senha clicando em “Esqueci minha senha” na tela de login.

4. > Em seguida, o usuário será redirecionado para a tela de login. Usando o e-mail de ID do usuário e a senha criada, faça login no QAT.

**Observação:** A senha deve: ter pelo menos seis caracteres, começar com uma letra, não ser igual ao seu nome de usuário ou sua última senha e deve incluir pelo menos um caractere especial, um número e uma letra maiúscula.

**Instalando o aplicativo Web progressivo QAT**

Aplicativos da web progressivos (PWA) são navegadores autônomos que trazem uma aparência semelhante a um aplicativo e são instalados na área de trabalho. Os usuários só podem instalar o QAT PWA por meio do Google Chrome e Edge. O PWA pode ser usado no modo online ou offline.

1. > Acesse o [site da Quantification Analytics](https://www.quantificationanalytics.org/).

2. > Clique no botão adicionar na barra de endereço.

3. > Clique em “instalar” quando o pequeno pop-up aparecer.

![P602#yIS1](/img/media/image10.png)

Figura 1: Instalando QAT PWA

4. > Um ícone aparecerá na sua área de trabalho como um aplicativo independente. Os usuários podem abrir diretamente na área de trabalho ou digitar **chrome://apps/** no navegador.

> ![P605#yIS1](/img/media/image11.png)

Figura 2: Ícones QAT PWA

**Observação:** Os usuários podem utilizar as versões do PWA e do navegador simultaneamente; no entanto, ao fazer alterações em um, é necessária uma atualização no outro para que as alterações sejam efetivadas (consulte [Quando e como realizar uma atualização de aplicativo](#quando-e-como-conduzir-uma-atualização-de-aplicativo)).

**Etapas para instalar o PWA quando o botão de instalação não está disponível**

1. > No navegador Chrome, navegue até [<u>https://www.quantificationanalytics.org/</u>](https://www.quantificationanalytics.org/)

2. > Clique nos três pontos verticais no canto superior direito do navegador

3. > Selecione “Transmitir, salvar e compartilhar”

4. > Clique em “Criar Atalho”

5. > Um ícone QAT será exibido em sua área de trabalho.

6. > Clique no ícone “QAT” para abrir o PWA do aplicativo QAT.

![A screenshot of a computer Description automatically generated](/img/media/image12.png)

Figura 3: Método alternativo de instalação do PWA

## Como fazer login no QAT para usuários existentes

**Entrar**

1. Para fazer login, digite o URL [<u>https://www.quantificationanalytics.org/</u>](https://www.quantificationanalytics.org/) na barra do navegador e pressione Enter ou abra o PWA em sua área de trabalho.

2. Uma tela de login será exibida.

![A screenshot of a computer Description automatically generated](/img/media/image13.png)

Figura 4: Tela de login

1. > Digite o nome de usuário e a senha nos campos obrigatórios.

2. > Clique no botão “Login”.
    1. > Nota: Um usuário pode escolher fazer login “online” ou “offline” usando a caixa de seleção acima do botão “Login”. Para obter mais informações sobre como trabalhar offline no QAT, consulte a Seção F. [Trabalhar offline](#working-offline).

    2. > Ao efetuar login no modo “online” – o QAT passará pela sincronização dos dados mestres. Se você vir uma mensagem sobre uma “versão de servidor mais recente” – consulte a Figura 36 na Seção 3.B para obter mais informações.

**Saindo**

1. > Vá para o canto superior direito da tela.

2. > Clique no ícone do botão de logout à direita do ícone do perfil.

![A screenshot of a computer Description automatically generated](/img/media/image14.png)

Figura 5: Ícone de logout

3. > Um pop-up aparecerá perguntando “Tem certeza que deseja sair?” – clique em “sim” para sair

**Alterar senha**

1. No QAT, clique no ícone Perfil no canto superior direito da tela.

2. Clique em “Alterar senha”.

![A screenshot of a login screen Description automatically generated](/img/media/image15.png)

Figura 6: Ícone do perfil

3. Uma vez na tela ‘Alterar senha’, digite sua senha antiga seguida da nova senha desejada.

4. A nova senha deverá atender aos seguintes critérios:
    - A senha deve ter pelo menos 6 caracteres

    - A senha não deve conter a palavra ‘senha’

    - A senha deve conter pelo menos 1 caractere especial

    - A senha deve conter pelo menos 1 número

    - A senha deve conter pelo menos 1 letra maiúscula

    - A senha deve começar com uma letra

    - A nova senha não deve ser igual ao seu nome de usuário

    - A nova senha não deve ser igual à última senha

5. Confirme a nova senha digitando-a novamente.

6. Clique em “Enviar”.

**Se o usuário esquecer a senha**

1. Um usuário que esqueceu sua senha pode clicar no botão “Esqueceu a senha?” link para redefini-lo.

2. Digite o endereço de e-mail com o qual o usuário está cadastrado no QAT e clique em “Enviar”.

![P662#yIS1](/img/media/image16.png)

Figura 7: Tela Esqueci a Senha

3. O usuário receberá um link por e-mail para redefinir sua senha.

![P666#yIS1](/img/media/image17.png)

Figura 8: E-mail de redefinição de senha

4. O link “Redefinir senha” irá redirecioná-lo para o QAT, onde você inserirá sua nova senha. Depois de concluído, clique em “Enviar”.

5. Após clicar em “Enviar” o usuário será redirecionado para a tela de login. Usando o e-mail de ID do usuário e a senha recém-criada, faça login no QAT.

**_Nota: Uma senha de usuário QAT será válida por até um ano a partir da data em que foi criada/atualizada._**

## Trabalhando off-line

QAT é uma ferramenta híbrida e pode ser operada tanto no modo online quanto offline. Existem duas maneiras de forçar o modo offline do QAT: na página de login antes de fazer login no QAT ou nas configurações do perfil após fazer login no QAT. Pode ser útil mudar para o modo offline do QAT quando a largura de banda da Internet estiver baixa.

![A screenshot of a login page Description automatically generated](/img/media/image18.png) ![A screenshot of a login page Description automatically generated](/img/media/image19.png)

> Figura 9: Botão Offline na página de perfil Figura 10: Botão Offline na página de login

O ícone do perfil no canto superior direito mostra um círculo verde ao trabalhar no modo online. Quando o usuário muda para o modo offline a cor muda para vermelho, conforme mostrado na imagem abaixo.

![P677#yIS1](/img/media/image20.png)

Figura 11: Ícones offline vs. online

A tabela abaixo detalha _algumas_ das principais funcionalidades que podem ser realizadas no QAT offline, bem como _algumas_ das funcionalidades que devem ser realizadas online:

| O que um usuário pode fazer off-line?\* | O que um usuário deve fazer on-line?                                                               |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Planos/previsões de fornecimento de importação/exportação | Redefinir senha |
| Ver dados mestre | Sincronizar dados mestre |
| Construir Árvores/Cenários | Atualizar informações do programa, unidades de planejamento, configurações de versão ou orçamentos |
| Inserir/atualizar dados transacionais do plano de fornecimento e inserir/ajustar manualmente os dados de consumo | Importar dados de previsão de/para o Módulo de Planejamento de Fornecimento para/do Módulo de Previsão |
| Extrapolar utilizando médias móveis ou semimédias | Extrapolar usando regressão linear, suavização exponencial tripla (TES) ou métodos ARIMA |
| Plano de Fornecimento/Cenário | Criar ingressos |
| Ver lista de problemas do QAT | Download/Upload de planos/previsões de fornecimento |
| Visualizar relatórios <u>program</u> e resultados de previsão | Ver relatórios <u>global</u> |

\*Nota: Mesmo quando online, as funções na coluna “offline” exigem que um programa seja baixado - consulte a Seção 3 para obter mais informações

Tabela 2: Capacidades Online vs. Offline

## Atualizações de lançamento do QAT

Para manter o aplicativo QAT, as versões regulares são enviadas automaticamente para o aplicativo QAT e para todos os usuários do realm. Esses lançamentos de versão podem ocorrer devido ao seguinte:

- Manutenção programada regularmente para correção de bugs e otimização de aplicativos

- Manutenção de emergência não planejada para correções de bugs urgentes/de alta prioridade

- Atualizações periódicas relacionadas a melhorias ou novos recursos

![A screenshot of a computer Description automatically generated](/img/media/image21.png)

Figura 12: Lançamentos da versão QAT

A maioria dos lançamentos de versões não exigirá ação significativa do usuário, exceto para atualizar o aplicativo QAT antes de fazer login. O QAT avisará ao usuário que há uma nova versão do QAT na página de login:

![P721#yIS1](/img/media/image22.png)

Figura 13: Solicitação de lançamento de nova versão do QAT para usuários

Se houver uma grande mudança na estrutura da arquitetura de back-end do QAT, os usuários poderão ser solicitados a fazer upload de sua versão mais recente para o servidor (consulte a seção [Upload](03-managing-programs-and-versions.md#upload) para obter mais informações) para evitar a perda de dados quando a nova versão do QAT for lançada. A equipe de suporte do QAT ([support@quantificationanalytics.org](mailto:support@quantificationanalytics.org)) informará os usuários com bastante antecedência se for necessário fazer o upload do programa.
## Solução de problemas

Quando um usuário se depara com um possível problema de sistema com QAT, ele deve tentar solucionar o problema tentando as soluções descritas nesta seção, na ordem em que são descritas (ou seja, tente H1 primeiro e, se não funcionar, tente H2 e depois H3). Se nenhuma dessas etapas resolver o problema, o usuário deverá enviar um ticket de suporte técnico para relatar o bug (consulte a seção ‘[Relatando um bug](#reporting-a-bug)’).

### Quando e como realizar uma atualização de aplicativo

A equipe de desenvolvimento do QAT implanta versões incrementais de software para resolver os bugs e alterações necessárias para o aplicativo. O QAT solicita que os usuários façam isso na tela de login após cada lançamento (veja a Figura 12). Para realizar uma atualização do aplicativo, os usuários devem pressionar “Ctrl” + “Shift” + “R” ao mesmo tempo no teclado.

![P721#yIS1](/img/media/image22.png) ![P721#yIS2](/img/media/image23.png)

Figura 14: Segure Ctrl + Shift + R (todas as 3 teclas) para realizar uma atualização do aplicativo

A atualização do aplicativo também pode ser usada para ajudar a solucionar quaisquer problemas ocorridos ao usar o QAT. Depois de segurar todas as 3 teclas, o software deverá recarregar automaticamente. Observe que a atualização do aplicativo é diferente de simplesmente atualizar o navegador (“Ctrl” + “R”).

### Quando e como realizar uma sincronização completa de dados mestres (MDS)

Se uma atualização do aplicativo (“Ctrl” + “Shift” + “R”) não resolver o problema de software, você pode tentar realizar uma “Sincronização completa de dados mestre”. Para fazer isso, certifique-se de ter uma conexão estável com a Internet e clique no link “Full Master Data Sync” na parte inferior do aplicativo (veja a Figura 13). Esta solução provavelmente funcionará se você estiver enfrentando problemas de dados mestres que podem ser o resultado de uma Internet instável que perturbou o Master Data Sync (MDS) normal descrito na Seção 2.J Navegação e barra de menus.

- Em um **MDS normal,** somente alterações incrementais são sincronizadas entre o servidor e seu computador local com base na última vez que um MDS foi concluído.

- Em um **MDS completo**, todos os dados mestre são carregados independentemente da última vez que o QAT foi sincronizado, como se esta fosse a primeira vez que você está carregando dados mestre. Portanto, isso levará mais tempo do que um MDS normal.

![A screenshot of a computer Description automatically generated](/img/media/image24.png)

Figura 15: Clique em “Sincronização completa de dados mestres”

### Quando e como limpar os dados do site

Se a atualização do QAT (Ctrl + Shift + R) e uma sincronização completa dos dados mestres não resolverem o problema, o usuário deverá tentar limpar os dados do site para solucionar o problema. Siga as etapas abaixo para limpar os dados do site em seu QAT:

**\*Aviso**: A limpeza dos dados do site no QAT limpa todos os dados locais no PWA e no navegador da Web, incluindo quaisquer alterações feitas desde o último upload. Certifique-se de ter carregado todos os programas não salvos <u>antes de </u> limpar os dados do site.\*

1. > Clique nas teclas “Ctrl”+”Shift”+”I” ao mesmo tempo no teclado.

> ![P739#yIS1](/img/media/image25.png)
>
> Figura 16: Ctrl + Shift + I

2. > Vá em “Aplicativo”.

3. > No lado esquerdo da tela, clique onde diz “Armazenamento”.

4. > Uma vez na tela “Armazenamento”, selecione “Limpar dados do site”. Isso limpará todos os dados que não foram carregados.

5. > Faça login novamente no QAT e baixe novamente todos os programas necessários. (A limpeza dos dados do site apaga todos os programas da sua máquina local, portanto, você precisará baixá-los novamente.)

![P746#yIS1](/img/media/image26.png)

Figura 17: Limpar dados do site

### Solução de problemas de erros de rede

Os usuários podem ver a seguinte mensagem de erro ao fazer login ou usar o QAT:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Erro de rede. Verifique sua conexão com a Internet ou entre em contato com o departamento de TI organizacional para garantir [api.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fapi.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=4heIFYQR9sA%2FqkifKvp2y9V00BIPmMKX35Wi5Am4jXk%3D&reservado=0) e [www.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=cW0d%2B1AnhHVpuclTsFqM6KwhliqBT1y82X5OD5ZUrmc%3D&reservado=0) estão na lista de permissões para acesso ao firewall.” |

Esta mensagem aparece por dois motivos: 1) Internet instável ou 2) Internet restrita.

**Internet instável**: use outra Internet com uma conexão estável ou mais rápida ou tente novamente mais tarde.

**Internet restrita**: o QAT pode ser acessado pela maioria das conexões privadas de Internet, mas às vezes os sistemas de TI organizacionais têm um controle de segurança mais rígido e, portanto, sinalizam o QAT como uma ameaça potencial. Neste caso, os usuários têm duas opções:

1. Use outra conexão de internet sem restrições, ou

2. Habilite o acesso ao firewall colocando os dois URLs de site abaixo na lista de permissões. O usuário pode precisar entrar em contato com a equipe de TI organizacional para obter assistência

> •        [api.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fapi.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=4heIFYQR9sA%2FqkifKvp2y9V00BIPmMKX35Wi5Am4jXk%3D&reservado=0)
>
> •        [www.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=cW0d%2B1AnhHVpuclTsFqM6KwhliqBT1y82X5OD5ZUrmc%3D&reservado=0)

## Helpdesk e tickets do QAT

### Tickets para adição/atualização de usuários e dados mestre

Quando um usuário precisar adicionar ou atualizar um usuário ou dados mestre por qualquer motivo, ele poderá fazê-lo solicitando um ticket de suporte técnico. Antes de solicitar quaisquer adições ou alterações nos dados mestres no QAT, o usuário deve primeiro verificar os dados mestres em nível de região (Mestres em nível de região \>\> Produto) e o Relatório de Catálogo de Programas para garantir que as informações ainda não existam. Para obter mais informações sobre como acessar e usar dados mestres, consulte [Gerenciamento de programas](03-managing-programs-and-versions.md#working-with-program-data) e [Realm Masters](10-annex-1-application-realm-administrator-manual.md#realm-masters). Para obter informações sobre como acessar o Catálogo de Programas, consulte [Catálogo de Programas](10-annex-1-application-realm-administrator-manual.md#product). Para acessar o Helpdesk do QAT:

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

Quando um usuário se depara com um possível problema de sistema com QAT, ele deve tentar solucioná-lo por meio de uma [atualização de aplicativo](#quando-e-como-conduzir-uma-atualização-de-aplicativo) e/ou [limpeza de dados do site](#quando-e-como-limpar-dados-do-site). Se nenhuma dessas etapas resolver o problema, o usuário deverá enviar um ticket de suporte técnico para relatar o bug.

O ticket de bug será abordado pela equipe de desenvolvimento de acordo com a prioridade do negócio, criticidade e ‘capacidade’ disponível por meio de versões incrementais. As etapas para gerar um ticket no QAT são mostradas abaixo:

1. Abra a tela do QAT Helpdesk e clique em “Relatar um bug”.

2. Insira um resumo do bug, bem como uma descrição do bug. Por favor, seja descritivo e forneça o máximo de detalhes possível (_por exemplo, em qual programa/versão/funcionalidade você estava trabalhando, etapas que você executou para obter o bug, etc_).

3. Carregue uma captura de tela do bug clicando no botão “Navegar” e extraindo um arquivo de captura de tela salvo do seu computador.
    1. Também é útil fornecer a exportação do programa, se possível (veja [Exportações de Programas](03-managing-programs-and-versions.md#export) sobre como exportar um programa local)

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

Uma vez logado no QAT, a tela abaixo aparecerá:

![A screenshot of a computer Description automatically generated](/img/media/image39.png)

Figura 31: Tela inicial do módulo de planejamento de suprimentos

![P830#yIS1](/img/media/image40.png)

Figura 32: Tela inicial do módulo de previsão

<table>
  <thead>
    <tr class="header">
      <th>SCaptura de tela</th>
      <th>Função</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image46.png"
          style={{width: '0.36111in', height: '0.3724in'}}
          alt="P873C3T10#yIS1"
        />
      </td>
      <td>
        <strong>Logs do usuário em QAT.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image47.png"
          style={{width: '0.55917in', height: '0.45833in'}}
          alt="P876C5T10#yIS1"
        />
      </td>
      <td>
        <p>
          <strong> O ícone do perfil fica verde ao trabalhar online e vermelho ao trabalhar offline. Quando o usuário clica no ícone, ele consegue: </strong>
        </p>
        <ul>
          <li>
            <p>
              <strong> Visualize o nome de usuário e as funções associadas atribuídas a eles </strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Calterar seu idioma preferido</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Calterar a senha</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>GFicar offline/online</strong>
            </p>
          </li>
        </ul>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image42.png"
          style={{width: '0.42361in', height: '0.34774in'}}
          alt="P883C7T10#yIS1"
        />
      </td>
      <td>
        <strong>Retorna o usuário ao painel/tela inicial.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image48.png"
          style={{width: '0.39468in', height: '0.42287in'}}
          alt="P886C9T10#yIS1"
        />
      </td>
      <td>
        <strong> Baixa o manual do usuário QAT para o computador do usuário. O arquivo pode ser encontrado na pasta Downloads do computador do usuário. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image49.png"
          style={{width: '0.34722in', height: '0.33482in'}}
          alt="P889C11T10#yIS1"
        />
      </td>
      <td>
        <strong>Atualiza a página atual em que um usuário está trabalhando.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image50.png"
          style={{width: '0.63584in', height: '0.60507in'}}
        />
      </td>
      <td>
        <strong> Informa ao usuário quando um programa armazenado no servidor local possui alterações não carregadas e deve fazer upload desse programa para o servidor. Se o ícone estiver azul, não há programas não carregados. Se o ícone estiver vermelho, há programas que devem ser carregados no servidor. O número na caixa vermelha indica o número de programas que devem ser carregados. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image51.png"
          style={{width: '0.45521in', height: '0.49514in'}}
          alt="P895C15T10#yIS1"
        />
      </td>
      <td>
        <strong> Informa ao usuário quando há uma versão mais recente no servidor de um de seus programas baixados localmente. Se o ícone estiver azul, o usuário possui a versão mais atualizada de todos os programas baixados. Se o ícone estiver vermelho, há programas desatualizados em comparação com o servidor. O número na caixa vermelha indica a quantidade de programas que possuem versões desatualizadas. </strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image52.png"
          style={{width: '0.59937in', height: '0.43898in'}}
        />
      </td>
      <td>
        <strong> Abre o Helpdesk do QAT onde os usuários podem criar tickets para adicionar/atualizar dados mestres, propor solicitações de mudança e relatar um bug. O número na caixa vermelha indica o número de tickets abertos que um usuário possui. Para obter mais informações sobre o helpdesk, consulte Helpdesk <a href="#qat-helpdesk-and-tickets">QAT e Tickets</a>. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image53.png"
          style={{width: '0.44063in', height: '0.32639in'}}
          alt="P901C19T10#yIS1"
        />
      </td>
      <td>
        <strong> Direciona o usuário para a página Notificação de Remessa do ERP. Esta página informará os usuários se houver alguma atualização importante que precise ser revisada para uma remessa de ERP vinculada. Para obter mais informações sobre essas notificações e quais serão sinalizadas, consulte <a href="#erp-shipment-linking"> Vinculação de remessa ERP</a>. <em> Nota: este ícone está disponível apenas no Módulo de Planejamento de Fornecimento QAT. </em> </strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image54.png"
          style={{width: '0.36111in', height: '0.38889in'}}
          alt="P904C21T10#yIS1"
        />
      </td>
      <td>
        <strong> Abre uma página da Web Show Guidance em uma introdução à previsão de QAT. Este documento fornece uma visão geral de alto nível sobre o fluxo do processo de previsão de QAT. <em> Nota: Este ícone está disponível apenas no Módulo de Previsão QAT. </em> </strong>
      </td>
    </tr>
  </tbody>
</table>

Na área principal da página inicial estará um painel do aplicativo. O Módulo de Planejamento de Fornecimento possui um painel aprimorado com visualizações e análises sobre programas baixados e baseados em servidor aos quais o usuário tem acesso. Para obter informações específicas sobre o painel do Módulo de Planejamento de Fornecimento, consulte [Painel QAT](#qat-dashboard). Para o Módulo de Previsão, o número de blocos e os tipos de blocos dependerão do acesso de acordo com a função atribuída ao usuário. Os usuários verão um bloco para o programa que baixaram (ou seja, quando estiverem no módulo de previsão, os usuários verão um bloco para cada programa de previsão que carregaram). Ao clicar na seta para baixo no bloco do programa de previsão, um usuário pode 1) excluir o programa do seu computador local, 2) prosseguir para as configurações de versão do programa, 3) prosseguir para a lista de árvores de previsão ou 4) prosseguir para a tela de entrada e ajuste de dados de consumo.

![P838C3T9#yIS1](/img/media/image41.png)

Figura 33: Bloco do Programa do Módulo de Previsão

Além do painel do aplicativo, a tela consiste na faixa superior e uma barra lateral de menu no lado esquerdo. Todas as funções disponíveis na faixa de opções e na barra lateral estarão acessíveis ao usuário em toda a ferramenta, independentemente da tela que estiver visualizando.

Para retornar à tela do Dashboard, o usuário pode clicar no ícone inicial na faixa superior ou no logotipo QAT no canto superior esquerdo da tela.

![P860#yIS1](/img/media/image42.png) ou ![P860#yIS2](/img/media/image43.png)

**Faixa superior para módulo de planejamento de suprimentos**

![](/img/media/image44.png)

**Faixa superior para módulo de previsão**

![](/img/media/image45.png)

Além disso, os usuários podem utilizar o ícone do perfil para verificar suas funções de usuário atuais, bem como:

- Alterar sua senha,

- Vá [off-line/online,](#working-offline)  
  ![A close up of words Description automatically generated](/img/media/image55.png)

- [Alterar o idioma preferido,](#mudar-idioma)

- Mude para o modo de tema escuro / claro e  
  ![A black and white text Description automatically generated](/img/media/image56.png)

- Mostrar decimais nas telas de planejamento de fornecimento  
  ![A black text on a white background Description automatically generated](/img/media/image57.png)

**Menu da barra lateral:**

O menu da barra lateral é onde o usuário pode navegar pelas diferentes telas do QAT. As opções disponíveis na barra lateral irão variar de acordo com o acesso de acordo com a função atribuída ao usuário. Na barra lateral existem itens de menu. Clicar em um desses itens será expandido para mostrar uma lista de itens do submenu. À medida que o usuário seleciona diferentes itens do menu, os respectivos dados serão exibidos no QAT.

No menu da barra lateral, você encontrará os seguintes itens de menu:

- **<u>Módulo de planejamento de fornecimento</u>**
  - **Sincronização de dados mestres** - Clicar neste botão sincronizará os dados mestres atualizados com sua versão local. Esta função é feita automaticamente ao fazer login no QAT, mas este botão permite que o usuário faça isso sem sair e fazer login novamente.

  - **Application Masters** (disponível apenas para Administradores de Aplicativos e Realm) – visualizar/adicionar/editar dados em nível de aplicativo.

  - **Mestres em nível de reino** – visualizar/adicionar/editar dados em nível de reino.

  - **Gerenciamento de programas** – visualizar/adicionar/editar dados em nível de programa. Baixar/carregar/excluir/importar/exportar programas. Conduzir revisões do plano de fornecimento.

  - **Dados do plano de fornecimento** – Adicionar/editar dados do plano de fornecimento.

  - **Planejamento de fornecimento** – Visualizar/editar plano de fornecimento. Plano de Cenário.

  - **Relatórios** – Ver relatórios. Edite a lista de problemas do QAT.

- **<u>Módulo de previsão</u>**
  - **Sincronização de dados mestres** - Clicar neste botão sincronizará os dados mestres atualizados com sua versão local. Esta função é feita automaticamente ao fazer login no QAT, mas este botão permite que o usuário faça isso sem sair e fazer login novamente.

  - **Application Masters** (disponível apenas para Administradores de Aplicativos e Realm) – visualizar/adicionar/editar dados em nível de aplicativo.

  - **Mestres em nível de reino** – visualizar/adicionar/editar dados em nível de reino.

  - **Gerenciamento de programas** – visualizar/adicionar/editar dados em nível de programa. Baixar/carregar/excluir/importar/exportar programas.

  - **Previsões baseadas em consumo – <u> </u>**Importar/adicionar/ajustar e extrapolar dados de consumo.

  - **Árvore de previsões –** Crie e gerencie a árvore de previsões. Visualize modelagens e validações de produtos.

- **Resultados da análise de previsão –** Compare e selecione as previsões finais. Veja outros relatórios de saída.

| Captura de tela | Função |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![P934C3T11#yIS1](/img/media/image58.png) | Recolhe completamente o menu da barra lateral para criar mais espaço na tela. Clicar no ícone uma vez fará com que o menu desapareça. Clicar novamente fará com que ele reapareça. |
| ![P937C5T11#yIS1](/img/media/image59.png) | Minimiza o menu da barra lateral sem fazê-lo desaparecer completamente. Cria mais espaço na tela.                                                              |
| ![P940C7T11#yIS1](/img/media/image60.png) | Exibido quando o menu da barra lateral está minimizado. Clique para expandir e mostrar o menu completo da barra lateral. Também usado para expandir e mostrar itens de submenu em itens de menu.                      |
| ![P943C9T11#yIS1](/img/media/image61.png) | Exibido quando os itens do submenu são exibidos. Clique para recolher os itens do submenu.                                                                                               |
| ![P946C11T11#yIS1](/img/media/image62.png) | Botões que permitem aos usuários alternar entre o Módulo de Previsão e Planejamento de Fornecimento no QAT, se o acesso do usuário permitir.                                               |

Tabela 4: Ícones do menu da barra lateral

**Botões encontrados em todo o QAT**

Os seguintes botões são frequentemente encontrados nas diferentes telas do QAT:

|                                                                                                  |                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Botões** | **Ação** |
| ![P956C3T12#yIS1](/img/media/image63.png) | Envia e faz alterações.                                                                            |
| ![P959C5T12#yIS1](/img/media/image64.png) | Cancela as alterações não enviadas.                                                                      |
| ![P962C7T12#yIS1](/img/media/image65.png) | Reverte os dados não enviados para o formato anterior.                                                     |
| ![P965C9T12#yIS1](/img/media/image66.png) | Adiciona um novo registro ao banco de dados.                                                                    |
| ![P968C11T12#yIS1](/img/media/image67.png) | Atualiza registros.                                                                                      |
| ![P971C13T12#yIS1](/img/media/image68.png) | Ajuda os usuários a pesquisar as informações desejadas. Pesquisa todos os campos da tabela exibida.            |
| ![P974C15T12#yIS1](/img/media/image69.png) | Permite que um usuário limpe os campos de pesquisa.                                                                 |
| ![P977C17T12#yIS1](/img/media/image70.png) | Indica campos obrigatórios de entrada de dados.                                                                |
| ![P980C19T12#yIS1](/img/media/image71.png) | Exibe explicações/definições e fórmulas sobre termos comumente usados ​​na janela/relatório especificado. |
| ![P984C21T12#yIS1](/img/media/image72.png) | Fornece orientação de alto nível sobre como usar melhor a página atual.                                     |
| ![P987C23T12#yIS1](/img/media/image73.png)![P987C23T12#yIS2](/img/media/image74.png) | Exporta relatório em PDF, CSV ou Word (as opções dependem da tela).                                       |

Tabela 5: Botões comumente usados

## Mudando o idioma

Para garantir que o QAT seja adaptável a usuários de todo o mundo, o aplicativo exibe texto em quatro idiomas diferentes: inglês, francês, português e espanhol. Os usuários são incentivados a enviar tickets se desejarem que a tradução de uma etiqueta específica seja melhorada. (_Observação: as traduções de rótulos de aplicativos podem ser editadas apenas por **administradores de aplicativos**. Instruções sobre como fazer isso podem ser encontradas na [seção de tradução](10-annex-1-application-realm-administrator-manual.md#database-translation)._)

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

O painel de planejamento de fornecimento fornece uma interface abrangente com visualizações e análises aprimoradas. Está estruturado em três seções principais: Ticker, Visão geral, Destaque do programa.

![No alt text provided for this image](/img/media/image77.jpeg)

Figura 36: Painel

1. **Ticker –** Esta seção exibe informações importantes por meio de três blocos de rolagem automática. Para navegar manualmente pelos blocos, clique nos pontos na parte inferior dos blocos. Cada bloco está vinculado a telas relevantes. Clique no nome do bloco para ser direcionado para essa tela (se você não tiver acesso, uma mensagem apropriada será exibida). Por exemplo, clicar no bloco ‘Linking ERP’ o levará para a tela Linking ERP.
    1. **Reino:** Fornece métricas globais, como número de países, usuários, programas de planejamento de fornecimento e programas de previsão.

    2. **Meu acesso:** destaca os planos de fornecimento aos quais você tem acesso, incluindo planos de fornecimento baixados.

    3. **Vinculação ERP:** Exibe o número de remessas vinculadas por domínio e programas baixados.

![](/img/media/image78.png)

Figura 37: Indicador do painel

2. **Visão geral –** Esta tabela oferece um resumo de alto nível de um ou mais programas com base no seu acesso.

![A screenshot of a computer Description automatically generated](/img/media/image79.png)

Figura 38: Seção Visão Geral

> **Selecionando Programas:**

- Os programas podem ser baseados em servidor ou baixados, mas não podem ser misturados

- Pode selecionar 1 para ‘todos’ os programas. Seleção múltipla.

- O modo offline limita a seleção apenas aos programas baixados, com a caixa de seleção dos programas do servidor esmaecida.

- Para programas de servidor, algumas colunas/recursos (por exemplo, coluna Ação e links QPL) não são exibidos, mas todos os outros detalhes permanecem consistentes.

> **Recursos da tabela de visão geral**
>
> Cada coluna foi projetada para apresentar dados acionáveis:

- **Dicas:** Passe o mouse sobre o ícone de dica de ferramenta em cada coluna para obter mais detalhes

- **Classificação:** Os programas são classificados em ordem alfabética, com um asterisco indicando as versões finais e aprovadas.

- **Links e ícones:**
  - A coluna ‘Ação’ permite aos usuários excluir um programa local, bem como clicar nos ícones da nuvem para serem redirecionados para as telas de upload ou download. O ícone da nuvem aparecerá em vermelho se a versão baixada estiver desatualizada. A coluna ‘Ação’ não aparece na tabela de visão geral dos programas de servidor.

  - Clicar no número na coluna ‘Problemas abertos de QAT’ direcionará o usuário para a lista de problemas de QAT (QPL) desse programa. Isto não aparece para programas de servidor.

  - Clicar no status na coluna ‘Status de revisão’ direcionará o usuário para a tela Versão e revisão do plano de fornecimento, enquanto clicar no ícone do bloco de notas na mesma célula abrirá o histórico de notas desse programa.

![](/img/media/image80.png)

Figura 40: Notas de versão

3. **Programa em destaque –** Esta seção fornece insights detalhados sobre as principais métricas de um único programa. Certifique-se de utilizar dicas de ferramentas e links incorporados para navegação eficiente e exploração de dados. Todas as 5 seções têm uma dica de ferramenta próxima ao cabeçalho e cada cabeçalho está vinculado a uma tela QAT que você pode acessar clicando no cabeçalho.

> **Selecionando um programa:**

- Suporta servidor ou programas baixados (somente seleção única)

- Os programas de servidor são padronizados para a versão mais recente (rascunho ou final)

- O modo offline limita a seleção aos programas baixados.

> **Período do relatório:**

- **Programas de servidor:** O padrão é 6 meses passados e 18 meses futuros (editável)

- ![](/img/media/image81.png)**Programas baixados:** O padrão é 6 meses anteriores e 18 meses futuros (não editável no painel). Os administradores podem definir padrões personalizados por programa por meio da tela Atualizar informações do programa.

> **<u>SMétricas do Spotlight</u>**
>
> **Status do estoque:**

- O gráfico de barras exibe a porcentagem de meses no período do relatório por categoria de ações. Pode passar o mouse sobre o gráfico para detalhamentos detalhados.

- Personalização visual: pode ocultar elementos de legenda ou copiar/colar gráfico.

- A tabela anexa apresenta detalhes de ruptura por unidade de planejamento (PU).

![A screen shot of a chart Description automatically generated](/img/media/image82.png)

Figura 42: Seção Status do Estoque

**Erro de previsão (somente versões de servidor):**

- Erro percentual médio calculado para o período do relatório.

- Erros acima de um limite definido (padrão 50%) são destacados em vermelho. Os administradores podem ajustar limites por PU e programa na tela “Atualizar unidades de planejamento”.

- Os dados faltantes exibem um ícone de cuidado com uma nota explicativa.

![A screenshot of a computer screen Description automatically generated](/img/media/image83.png)

Figura 43: Seção de Erro de Previsão

> **Envios:**

- Gráfico de remessas por fonte de financiamento, agente de compras ou status usando o menu suspenso para designar qual deles.

- Passe o mouse sobre o gráfico de pizza para detalhar os custos. A repartição dos custos utiliza o valor total das remessas nesse período do relatório como denominador.

- A tabela anexa mostra o número de remessas com financiamento a definir no período do relatório.

![A screenshot of a computer Description automatically generated](/img/media/image84.png)

Figura 44: Seção de Remessa

> **Qualidade dos dados:**

- Reflete as métricas da lista de problemas de QAT, independente do período do relatório. Esta é a única seção das 5 seções em destaque do programa que não usa o período do relatório exibido no painel.

- Atualizações dinamicamente com alterações feitas no QPL se o usuário tiver atualizado o QPL. Caso contrário, o usuário poderá clicar no ícone de atualização próximo ao cabeçalho Data Quality para atualizar os dados exibidos.

- Mostradores para:
  - Consumo previsto: contabiliza a quantidade de UPs que possuem pelo menos um mês de falta de consumo previsto nos próximos 18 meses.

  - Estoque Real: Conta o número de UPs que não possuem dados recentes de estoque real nos últimos 3 meses.

  - Consumo Real: Conta o número de UPs que não possuem dados de consumo real nos últimos 3 meses ou apresentam lacuna nos dados de consumo real nos últimos 6 meses.

  - Remessas: Conta o número de UPs que possuem remessas com datas de recebimento no passado, ou remessas que deveriam ter sido “enviadas” com base nos prazos de entrega do programa.

![](/img/media/image85.png)

**Expirações:**

- Exibe vencimentos dentro do período do relatório, incluindo quantidade e custo total

- O valor total de vencimento em todas as unidades de planejamento do programa selecionado aparece no canto superior direito da seção.

![](/img/media/image86.png)