---
id: annex-1-application-realm-administrator-manual
title: "Annex 1: Application & Realm Administrator Manual"
sidebar_label: "Annex 1: Admin Manual"
sidebar_position: 13
---
# Anexo I: Manual do Administrador de Aplicativos e Realm

## A. Introdução

Embora o foco do manual do usuário seja orientar os administradores do programa e usuários sobre como fornecer o plano no QAT, o objetivo deste anexo é fornecer orientação sobre as funcionalidades disponíveis apenas para administradores de aplicativos e de domínio. Os mestres de aplicativos estão disponíveis principalmente para o administrador de aplicativos (com algumas exceções), enquanto os mestres de nível de reino estão disponíveis para administradores de aplicativos e de reinos.

## B. Painel do aplicativo

As funções disponíveis no Dashboard do Aplicativo de Previsão ficarão visíveis de acordo com a **função do usuário**. Abaixo está uma explicação dos blocos exclusivos para administradores de nível de aplicativo e reino. Para obter uma explicação de outros blocos (ingressos e programa), consulte [Barra de navegação e menu](05-getting-started.md#j-navigation-and-menu-bar). Consulte [Painel QAT](05-getting-started.md#l-qat-dashboard) para obter informações sobre o painel aprimorado de planejamento de fornecimento.

Na captura de tela abaixo, a função atribuída é **"Administrador de nível de aplicativo"**.

<img src={require('@site/static/img/media/image326.png').default} alt="App Level Admin Dashboard" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 192: App Level Admin Dashboard</p>

Na captura de tela abaixo, a função atribuída é **"Administrador de nível de reino"**.

<img src={require('@site/static/img/media/image327.png').default} alt="Realm Level Admin Dashboard" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 193: Realm Level Admin Dashboard</p>

### Blocos de administração de aplicativos e domínios:

| Quais administradores? | Captura de tela | Explicação |
| :--- | :---: | :--- |
| Aplicativo e reino | <img src={require('@site/static/img/media/image328.png').default} alt="Program User Tile" style={{ width: '220px' }} /> | Este bloco exibe o **número de usuários em cada função**. Clicar no botão suspenso exibe duas funções ("Ir para Gerenciamento de usuários" e "Adicionar usuário"). Ambos redirecionam os usuários para o "Application Masters" &gt; "Usuário" (consulte [Usuários](#i-users) para obter mais informações) |
| Aplicativo | <img src={require('@site/static/img/media/image329.png').default} alt="Total Realms Tile" style={{ width: '220px' }} /> | Este bloco exibe o **número total de domínios** no aplicativo. Clicar no botão suspenso exibe duas funções ("Ir para Gerenciamento de Realm" e "Adicionar Realm"). Ambos redirecionam os usuários para a tela Realms, que também pode ser acessada no menu esquerdo em Application Masters &gt; Realms (Veja [Realm](#h-realm) para mais) |
| Aplicativo | <img src={require('@site/static/img/media/image330.png').default} alt="Language Tile" style={{ width: '220px' }} /> | Este bloco exibe o **número de idiomas** no aplicativo. Clicar no botão suspenso exibe duas funções ("Ir para Gerenciamento de Idioma" e "Adicionar Idioma"). Ambos redirecionam os usuários para a tela Idioma, que também pode ser acessada no menu esquerdo em Application Masters &gt; Idioma (consulte [Idioma](#f-linguagem) para obter mais informações) |
| Reino | <img src={require('@site/static/img/media/image331.png').default} alt="Country Tile" style={{ width: '220px' }} /> | Este bloco exibe o **número de países** no domínio. Clicar no botão suspenso exibe duas funções: "Ir para Realm Country Management" leva os usuários a uma tabela de países, que também pode ser acessada no menu esquerdo em Realm Masters &gt; Country. "Adicionar país do reino" leva os usuários à tela do reino, que também pode ser acessada no menu esquerdo em Application Masters &gt; Realm, onde os usuários podem mapear países para o reino (consulte [País do reino](#c-country) para obter mais informações) |
| Reino | <img src={require('@site/static/img/media/image332.png').default} alt="Technical Area Tile" style={{ width: '220px' }} /> | Este bloco exibe o **número de áreas técnicas** no reino. Clicar no botão suspenso exibe duas funções ("Ir para Gerenciamento de Área Técnica" e "Adicionar Área Técnica"). Ambos redirecionam os usuários para a tela Área Técnica, que também pode ser acessada no menu esquerdo em Application Masters &gt; Área Técnica (Veja [Área Técnica](#j-technical-area) para mais) |
| Reino | <img src={require('@site/static/img/media/image333.png').default} alt="Region Tile" style={{ width: '220px' }} /> | Este bloco exibe o **número de regiões** no aplicativo. Clicar no botão suspenso exibe duas funções ("Ir para Gerenciamento de Região" e "Adicionar Região"). Ambos redirecionam os usuários para a tela Idioma, que também pode ser acessada no menu esquerdo em Application Masters &gt; Região (Veja [Realm Country](#c-country) para mais) |
| Reino | <img src={require('@site/static/img/media/image334.png').default} alt="Organization Tile" style={{ width: '220px' }} /> | Este bloco exibe o **número de organizações** no aplicativo. Clicar no botão suspenso exibe duas funções ("Ir para Gerenciamento da Organização" e "Adicionar Organização"). Ambos redirecionam os usuários para a tela Idioma, que também pode ser acessada no menu esquerdo em Application Masters &gt; Organização (Veja [Organização](#f-organização) para mais) |
| Reino | <img src={require('@site/static/img/media/image335.png').default} alt="Total Program Tile" style={{ width: '220px' }} /> | Este bloco exibe o **número de programas** no aplicativo. Clicar no botão suspenso exibe ("Ir para Gerenciamento do programa"), que redireciona os usuários para a tela Atualizar informações do programa, que também pode ser acessada no menu esquerdo em Gerenciamento do programa &gt; Atualizar informações do programa (consulte [Informações do programa](./07-supply-planning-module-program-data.md#a1-program-information) para obter mais informações) |
| Reino | <img src={require('@site/static/img/media/image336.png').default} alt="Setup Program Tile" style={{ width: '220px' }} /> | Este bloco permite que os usuários cliquem no botão suspenso para navegar até a tela "Programa de configuração", que também pode ser acessada no menu esquerdo em Gerenciamento de programas &gt; Programa de configuração (consulte [Configurando um novo programa](#d-setting-up-a-new-program) para obter mais informações) |

<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Table 11: App and Realm Admin Tiles</p>

## C. Gerenciamento de dados mestre

**Application Masters** é o nível de hierarquia de dados mais alto no QAT. Os dados mestre do aplicativo se aplicam a todos os domínios e programas do QAT. A maior parte só é acessível aos Administradores de Aplicativos, embora algumas das funções do Aplicativo estejam disponíveis para Administradores de Realm, como adicionar e atualizar usuários e atribuir funções aos usuários. Os administradores de aplicativos podem selecionar os dados mestre específicos de todo o aplicativo que desejam adicionar ou atualizar.

**Realm Level Masters** abrange todos os dados mestres desse Realm que se aplicam aos seus programas e planos de fornecimento. O Administrador do Realm poderá visualizar, criar e editar esses dados mestre. Programas, Áreas Técnicas, Unidades de Planejamento e Agentes de Compras são alguns exemplos de dados mestres do Realm que o Administrador do Realm pode adicionar e manter. Muitos dos mestres de nível de região estão acessíveis para visualização aos Administradores do Programa; no entanto, eles não têm a capacidade de adicionar/atualizar esses dados.

**Program Level Masters** é o terceiro nível de hierarquia no QAT. Embora os administradores do programa não possam adicionar programas, eles podem atualizar as informações do programa (por exemplo, prazos de entrega, custos de frete, etc.) dentro do(s) programa(s) atribuído(s). Os administradores e usuários do programa também podem adicionar e atualizar os dados do programa (consumo, estoque, remessas).

## C1. Mestres de Aplicação

###a. Tradução de banco de dados

<div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
  <div style={{ flex: '1 1 300px' }}>
    <p>The database translation screen, which is accessible for application admins is used to translate "Dynamic labels" that are stored in QAT. The dynamic labels are included in drop-down lists throughout QAT as well as be labels that reference other labels (e.g. QAT Problem List problems that reference shipment IDs).</p>
    <p>For every dynamic label, there must be at least an English translation as identified by the red asterisk next to 'English' in the below figure. The translations for the other software languages are highly recommended but not required to save a translation.</p>
    <p>To edit a translation, double-click that cell and input the desired text. Then click the "Submit" button. The submitted translation(s) will not be changed on the front end in QAT until the next software release.</p>
  </div>
  <div style={{ flex: '0 0 200px', margin: '0 auto' }}>
    <img src={require('@site/static/img/media/image337.png').default} alt="Database Translation Menu" style={{ width: '100%', marginBottom: '5px' }} />
    <p style={{ fontSize: '0.85em', fontStyle: 'italic', textAlign: 'center' }}>Figure 193a: Navigation to Database Translation</p>
  </div>
</div>

<img src={require('@site/static/img/media/image338.png').default} alt="Database Language Translation Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 194: Database Language Translation Screen</p>

### b. Tradução de rótulos

A tela de tradução de rótulos é usada para traduzir "rótulos estáticos" que não fazem referência a outros rótulos QAT e não fazem parte de listas suspensas. Os cabeçalhos das colunas da tabela são um exemplo de rótulo estático no QAT.

Para os rótulos estáticos, deve haver pelo menos uma tradução em inglês, conforme identificado pelo asterisco vermelho próximo a 'Inglês' na figura abaixo. As traduções para os outros idiomas do software são altamente recomendadas, mas não são obrigatórias para salvar uma tradução.

Para editar uma tradução, clique duas vezes nessa célula e insira o texto desejado. Em seguida, clique no botão "Enviar". Depois de clicar em enviar, a tradução será refletida imediatamente no QAT para todos os usuários.

<img src={require('@site/static/img/media/image339.png').default} alt="Label Translation Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 195: Label Translation Screen</p>

### c. País

QAT exibe uma tabela de países listando todos os países padrão no aplicativo, mas novos países podem ser adicionados, conforme necessário.

**Para ver uma lista dos países atuais que estão no QAT:**

1. Vá para “Application Masters” e clique em “Country”.
2. O administrador do aplicativo pode visualizar e filtrar os países pelo status "Ativo" ou "Desativado". Além disso, o usuário pode pesquisar um país específico usando a barra de pesquisa.

<img src={require('@site/static/img/media/image340.png').default} alt="List of Countries" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 196: List of Countries</p>

**Para adicionar um país:**

1. No canto superior direito da lista de países, clique no ícone “+”.
2. Uma nova tela “Adicionar País” será aberta conforme mostrado abaixo.
3. Insira o novo país, nome de exibição do país, nome de exibição do país2 e moeda e clique no botão "Enviar".
   
   um. **Observação:** O nome de exibição do país é sempre o código do país de três letras (por exemplo, Angola = AGO). O Nome de Exibição do País2 é sempre o código do país de duas letras (por exemplo, Angola = AO).*

   <img src={require('@site/static/img/media/image341.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 197: Add Country Screen</p>

**Para atualizar um país:**

1. Para atualizar um país atual, vá para a lista de países do Administrador do Aplicativo.
2. Clique no país que precisa ser alterado ou atualizado.
3. Atualize as informações conforme necessário e clique no botão “Atualizar”. Isto pode incluir “desativar” um país ou torná-lo “ativo”.

<img src={require('@site/static/img/media/image342.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 198: Add Country Screen</p>

###d. Moeda

**Para visualizar uma lista das moedas atuais que estão em QAT:**

1. Vá em “Application Masters” e clique em “Moeda”.
2. Uma lista de moedas e seus atributos, como taxa de conversão, será mostrada abaixo.

<img src={require('@site/static/img/media/image343.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 199: Currency Screen</p>

**Para adicionar uma moeda:**

1. No canto superior direito da lista de moedas, clique no ícone “+”.
2. Insira a nova moeda, o nome de exibição da moeda, a taxa de conversão para 1 USD e se deve sincronizar online. Depois de inserir todas as informações, clique no botão "Enviar".
   
   um. **Observação:** A taxa de conversão para 1 USD pode ser inserida manualmente ou pode ser obtida na integração com a fonte pública online selecionando "Sim" em "Sincronizar taxa de conversão online", que é o padrão.

   <img src={require('@site/static/img/media/image344.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 200: Add Currency Screen</p>

**Para atualizar uma moeda existente:**

1. Vá para a lista de moedas do Administrador do Aplicativo.
2. Clique na moeda que precisa ser alterada ou atualizada.
3. Atualize as informações conforme necessário e clique no botão “Atualizar”.

### e. Dimensão

As dimensões denotam vários valores mensuráveis, como comprimento, volume, peso ou altura.

**Para visualizar uma lista das dimensões atuais que estão no QAT:**

1. Vá em “Application Masters” e clique em “Dimension”.
2. Uma lista de dimensões será mostrada abaixo.

<img src={require('@site/static/img/media/image345.png').default} alt="List of Dimensions" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 201: List of Dimensions</p>


**Para adicionar uma dimensão:**

1. No canto superior direito da Lista de Dimensões, clique no ícone “+”.
2. Uma nova tela “Adicionar Dimensão” será aberta conforme mostrado abaixo.
3. Insira a nova dimensão e clique no botão “Enviar”.

<img src={require('@site/static/img/media/image346.png').default} alt="Add Dimension Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 202: Add Dimension Screen</p>



**Para atualizar uma dimensão:**

1. Para atualizar uma dimensão atual, acesse a lista de dimensões Admin do aplicativo.
2. Clique na dimensão que precisa ser alterada ou atualizada.
3. Atualize as informações conforme necessário e clique no botão “Atualizar”.

### f. Idioma

O QAT está disponível em quatro idiomas diferentes: inglês, francês, espanhol e português.

**Para visualizar uma lista dos idiomas atuais que estão no QAT:**

1. Vá em “Application Masters” e clique em “Language”.
2. Uma lista de idiomas será mostrada abaixo:

<img src={require('@site/static/img/media/image347.png').default} alt="List of Languages" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>figure 203: List of Languages</p>


**Para adicionar um idioma:**

1. No canto superior direito da lista de idiomas, clique no ícone “+”.
2. Uma nova tela “Adicionar Idioma” será aberta conforme mostrado abaixo.
3. Insira o novo idioma e o nome de exibição do idioma e clique no botão “Enviar”.
4. **Observação:** Todos os bancos de dados e rótulos de exibição do QAT devem ser traduzidos para que um novo idioma apareça no QAT. Consulte [Tradução de banco de dados](#a-database-translation) e [Tradução de rótulo](#b-label-translation) no Apêndice I para obter mais informações.

<img src={require('@site/static/img/media/image348.png').default} alt="Add Language Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 204: Add Language Screen</p>


**Para atualizar um idioma:**

1. Para atualizar um idioma atual, vá para a lista de idiomas do Administrador do Aplicativo.
2. Clique no idioma que precisa ser alterado ou atualizado.
3. Atualize as informações conforme necessário e clique no botão “Atualizar”. Isso pode incluir “desativar” um idioma ou torná-lo “ativo”.

### g. Funções

Os administradores de aplicativos podem criar e editar tipos de funções para todo o aplicativo conforme surge a necessidade de modificar as regras de negócios que determinadas funções podem acessar. Para obter uma lista das funções atuais, acesso e funções associadas, consulte [Anexo 3: Matriz de funções do usuário](15-annex-3-user-role-matrix.md).

**Para visualizar uma lista das funções atuais que estão no QAT:**

1. Vá em “Application Masters” e clique em “Roles”.
2. Uma lista de funções será mostrada abaixo:

<img src={require('@site/static/img/media/image349.png').default} alt="Current list of roles" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 205: Current list of roles</p>

**Para adicionar uma função:**

1. No canto superior direito da lista de funções, clique no ícone “+”.
2. Uma nova tela “Adicionar Função” será aberta conforme mostrado abaixo.
3. Insira a nova Função, Função de Negócios e Pode Criar Função e clique no botão "Enviar".
4. Para obter uma descrição e mais informações sobre funções empresariais individuais, consulte [Anexo 4: Funções Empresariais](16-annex-4-business-functions.md).
5. "Pode criar função" permite que a nova função crie usuários e atribua-lhes funções e acessos específicos. Por exemplo, um Administrador de Realm pode criar um usuário, atribuí-lo como Administrador de Programa e determinar a quais países e programas o usuário terá acesso.

<img src={require('@site/static/img/media/image350.png').default} alt="Add Role Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 206: Add Role Screen</p>

**Para atualizar uma função:**

1. Para atualizar uma função atual, acesse a lista de funções de Administrador de Aplicativo.
2. Clique na função que precisa ser alterada ou atualizada.
3. Atualize as informações conforme necessário e clique no botão “Atualizar”.
4. Para obter uma descrição e mais informações sobre funções empresariais individuais, consulte [Anexo 4: Funções Empresariais](16-annex-4-business-functions.md).
5. "Pode criar função" permite que a nova função crie usuários e atribua-lhes funções e acessos específicos. Por exemplo, um Administrador de Realm pode criar um usuário, atribuí-lo como Administrador de Programa e determinar a quais países e programas o usuário terá acesso.

<img src={require('@site/static/img/media/image351.png').default} alt="Edit Role Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 207: Edit Role Screen</p>

### h. Reino

O QAT é subdividido em domínios, cada um governado por seus próprios dados mestres (incluindo catálogo de produtos, nomes de financiadores, nomes de agentes de compras, etc.). Futuros domínios poderiam ser criados para outros campos, como cadeias de fornecimento de educação, cadeias de fornecimento de agricultura, etc. Para informações e funções que podem ser executadas por um Administrador de Reino, consulte [Mestres de Nível de Reino](#e-realm-masters).

**Para visualizar uma lista dos domínios atuais que estão no QAT:**

1. Vá para “Application Masters” e clique em “Realm”.
2. Uma lista de reinos será mostrada abaixo:

<img src={require('@site/static/img/media/image352.png').default} alt="List of Realms" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 208: List of Realms</p>

**Para adicionar um domínio:**

1. No canto superior direito da lista de domínios, clique no ícone “+”.
2. Uma nova tela “Adicionar Realm” será aberta conforme mostrado abaixo.
3. Insira o novo Realm, Nome de exibição do Realm, Min Guardrail para MIN MOS, Min Guardrail para MAX MOS e Max Guardrail para MAX MOS. Continue adicionando todos os valores de tolerância e restrição para o domínio e clique no botão "Enviar".
   
   um. Ao adicionar um usuário ao QAT, se ele não receber um domínio, ele será automaticamente atribuído ao domínio considerado "padrão". Só pode haver um domínio padrão por instância do QAT.

   b. **Nota:** as proteções MIN/MAX são os limites inferiores e superiores absolutos para definir os parâmetros MINI/MAX do programa; eles são definidos no nível do reino. Isso significa que um programa não pode ter um MIN MOS menor que o "Min guardrail for MIN MOS" ou um MAX MOS que seja maior que o "Max guardrail for MAX MOS"

<img src={require('@site/static/img/media/image353.png').default} alt="Add Realm screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>figure 209: Add Realm screen</p>

**Para atualizar um domínio:**

1. Para atualizar uma região atual, acesse a lista de regiões Admin do Aplicativo.
2. Clique na região que precisa ser alterada ou atualizada.
3. Atualize as informações conforme necessário e clique no botão “Atualizar”. Isso pode incluir “desativar” um domínio ou torná-lo “ativo”.

**Para adicionar um país a um reino**

1. Para adicionar um país a uma região existente, vá para a lista de regiões de administração de aplicativos
2. Clique com o botão direito no reino e depois clique em "Mapear países para este reino" conforme mostrado abaixo:

<img src={require('@site/static/img/media/image354.png').default} alt="Map Countries" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 210: Map Countries</p>

3. A partir desta nova janela, o administrador do aplicativo pode adicionar um país clicando no botão “Adicionar linha” na parte inferior da tela. O novo país não pode já existir no domínio a ser adicionado. Para obter mais informações sobre como adicionar um país, consulte Application Masters: [Country](#c-country).
4. A partir desta nova janela, o administrador do aplicativo também pode tornar um país "Ativo" à medida que os programas estão integrados ao QAT, ou inativo usando a caixa de seleção na última coluna.
5. Quando todas as atualizações e alterações forem feitas, clique em “Enviar”.

<img src={require('@site/static/img/media/image355.png').default} alt="Map Countries" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 211: Mapping countries to a Realm</p>

### eu. Usuários

Adicionar e atualizar usuários e suas funções/controles de acesso está disponível para administradores de aplicativos e administradores de domínio.

**Para visualizar uma lista do usuário atual que está no QAT:**

1. Vá em “Application Masters” e clique em “User”.
2. Uma lista de usuários será mostrada, juntamente com informações como e-mail, data do último login e status.

<div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
  <div style={{ flex: '1 1 300px' }}>
    <p><strong>To add a new user:</strong></p>
    <ol>
      <li>In the top right corner of the realm list, click on the "+" icon.</li>
      <li>A new screen "Add User" will be opened as shown below.</li>
      <li>Enter the new user's name, email address, organization & country, role, and language and click "Submit."</li>
      <li>For a detailed description on roles, their function, and access, see <a href="15-annex-3-user-role-matrix.md">Annex 3: User Role Matrix</a></li>
    </ol>
    <p><strong>To update an existing user or manage user access controls:</strong></p>
    <ol>
      <li>Navigate to the user list.</li>
      <li>Click on the user that needs to be changed or updated.</li>
      <li>Update the information or access controls as needed and then click on the "Update" button. This can include "disabling" a user or making one "active."</li>
    </ol>
  </div>
  <div style={{ flex: '0 0 300px', margin: '0 auto' }}>
    <img src={require('@site/static/img/media/image356.png').default} alt="Add User Screen" style={{ width: '100%', marginBottom: '5px' }} />
    <p style={{ fontSize: '0.85em', fontStyle: 'italic', textAlign: 'center' }}>Figure 212: Add User Screen</p>
  </div>
</div>

### j. Período de uso

O período de uso é usado no módulo de previsão para que os usuários associem um período de tempo a determinados elementos da previsão (por exemplo, com que frequência uma unidade de planejamento é usada).

**Para visualizar uma lista das unidades atuais que estão no QAT:**

1. Vá em “Application Masters” e clique em “Usage Period”.
2. Uma lista de períodos de uso e seus atributos, como se está ativo ou não, será mostrada abaixo:

<img src={require('@site/static/img/media/image357.png').default} alt="List of Usage Periods" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 213b: List of Usage Periods</p>

**Para adicionar um período de uso:**

1. No canto inferior direito da lista de unidades, clique no botão "+ Adicionar linha".
2. Uma nova linha aparece.
3. Insira o nome do período de uso, fator de conversão e clique no botão "Enviar".

**Para atualizar um período de uso existente:**

1. Para atualizar um período de uso existente, acesse a lista de períodos de uso do Administrador do Aplicativo.
2. Clique duas vezes no nome do período de uso ou fator de conversão que precisa ser alterado ou atualizado. Para desativar ou reativar, marque a caixa de seleção.
3. Atualize as informações conforme necessário e clique no botão “Enviar”. Isso pode incluir “desativar” um período de uso ou torná-lo “ativo”.

### k. Unidade

Unidade é uma quantidade fixa (neste caso, um valor como mL, gm ou mesmo Caixa) usada como padrão de medição.

**Para visualizar uma lista das unidades atuais que estão no QAT:**

1. Vá em “Application Masters” e clique em “Unit”.
2. Uma lista de unidades e seus atributos, como dimensão, será mostrada abaixo:

<img src={require('@site/static/img/media/image358.png').default} alt="List of Units" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 214: List of Units</p>

**Para adicionar uma unidade:**

1. No canto superior direito da lista de unidades, clique no ícone “+”.
2. Uma nova tela “Adicionar Unidade” será aberta conforme mostrado abaixo.
3. Insira a nova unidade, o nome de exibição da unidade e sua dimensão correspondente e clique no botão "Enviar".

**Para atualizar uma unidade existente:**

1. Para atualizar uma unidade existente, vá para a lista de unidades de administração de aplicativos.
2. Clique na unidade que precisa ser alterada ou atualizada.
3. Atualize as informações conforme necessário e clique no botão “Atualizar”. Isso pode incluir “desabilitar” um usuário ou torná-lo “ativo”.

<img src={require('@site/static/img/media/image359.png').default} alt="Updating a Unit Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 215: Updating a Unit Screen</p>

### l. Carregar manual do usuário

O manual do usuário pode ser carregado a qualquer momento por um administrador do aplicativo.

**Para fazer upload de uma nova versão:**

1. Vá em "Application Masters" e clique em "Upload User Manual"
2. Clique em 'Selecionar arquivo' ou 'Navegar'
3. Selecione o manual do usuário que deseja carregar em seu computador. Observe que o arquivo deve estar no formato PDF.
4. Clique em "Enviar".

## C2. Mestres do Reino

A aplicação QAT é subdividida em Reinos, cada um com seus próprios dados mestres (incluindo catálogo de produtos, nomes de financiadores, nomes de agentes de compras, etc.). O Reino é o segundo nível de hierarquia no sistema QAT.

Um Reino cobre todos os programas e seus planos de abastecimento. Por exemplo, “Saúde Global” é um domínio sob o qual vários programas são gerenciados. Outros domínios poderiam ser criados para outros domínios, como cadeias de abastecimento da educação, cadeias de abastecimento da agricultura, etc.

###a. País

O menu País em Mestres de nível de reino permite que administradores de aplicativos e de reino criem/atribuam regiões a países criados anteriormente.

Uma região poderia ser “Nacional” para programas de uma única região, ou poderia ser qualquer número de regiões para programas multirregionais. A decisão de adicionar regiões depende de como os dados de inventário e consumo serão inseridos no QAT. Note que os envios QAT são sempre Nacionais e não podem ser atribuídos a Regiões.

1. Vá para "Mestres de Nível de Reino".
2. Clique em “País” e a tela abaixo será mostrada.
3. Clique com o botão direito em um país específico que precisa ser atualizado.
4. Clique em “Map Region” para mostrar a tela Realm Country Region.

<img src={require('@site/static/img/media/image360.png').default} alt="Mapping regions to a country within a realm" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 216: Mapping regions to a country within a realm</p>

5. Insira uma descrição da região, bem como o volume de armazém disponível e o número de localização global (GLN) do seu armazém.
6. Selecione o status (“Ativo” ou “Desativado”) conforme mostrado na tela.
   um. **Observação:** Para adicionar diversas regiões, clique no botão azul "+ Adicionar linha" ou clique com o botão direito no formulário e selecione "Inserir nova linha antes" ou "Inserir nova linha depois".
7. Clique em “Enviar” para salvar suas alterações ou em “Cancelar” para fechar o formulário sem salvar.

<img src={require('@site/static/img/media/image361.png').default} alt="Adding multiple regions to a country" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 217: Adding multiple regions to a country</p>

### b. Fonte de dados

Uma fonte de dados é o local de onde se originam os dados que estão sendo inseridos no QAT. Os usuários deverão aplicar fontes de dados a todos os registros transacionais (Consumo, Estoque, Ajustes e Remessas) no QAT. O usuário seleciona fontes de dados conforme necessário nas listas suspensas. A seleção de fontes de dados para cada registro transacional dependerá do tipo de fonte de dados aplicável a esse tipo de registro transacional. **Administradores de aplicativos e domínios** podem adicionar/editar fontes de dados da seguinte forma:

**Adicionar uma fonte de dados**

Vá para o canto superior direito da tela “Fonte de dados” e clique no ícone azul “+”.
1. Uma nova tela mostrando “Adicionar fonte de dados” aparecerá.
2. Insira os dados necessários e clique no botão "Enviar".
3. Clique no botão “Cancelar” para não adicionar a fonte de dados.

<img src={require('@site/static/img/media/image362.png').default} alt="Adding a data source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 218: Adding a data source</p>

**Atualizar fonte de dados**

1. Acesse a tela "Fonte de dados".
2. Clique na linha da fonte de dados que deseja atualizar.
3. Uma nova tela mostrando “Atualizar fonte de dados” aparecerá.
4. Insira os detalhes atualizados.
5. Se você deseja ativar/desativar essa fonte de dados, selecione o círculo correspondente.
6. Clique no botão "Enviar".
7. Clique no botão “Cancelar” para manter as informações existentes.

### c. Tipo de fonte de dados

Refere-se ao tipo de dados para os quais uma fonte está fornecendo informações. Existem quatro tipos de fontes de dados: consumo real, consumo previsto, estoque, remessas. **Administradores de aplicativos e domínios** podem adicionar/editar o tipo de fonte de dados.

**Adicionar tipo de fonte de dados**

1. Vá em "Realm Level Masters" e depois em "Data Source Type" para mostrar a tabela abaixo.


<img src={require('@site/static/img/media/image363.png').default} alt="Data Source type" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 219: Data Source type</p>

2. Clique no botão azul “adicionar” no canto superior direito. Uma nova tela mostrando “Adicionar fonte de dados
Tipo” será aberto.

<img src={require('@site/static/img/media/image364.png').default} alt="Adding a Data Source Type" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 220: Adding a Data Source Type</p>

**Atualizar tipo de fonte de dados:**

1. Vá para a lista de tipos de fontes de dados.
2. Clique em qualquer parâmetro que precise ser alterado ou atualizado.
3. Clique no botão "Atualizar".

###d. Fonte de financiamento

Fonte de financiamento refere-se à entidade que fornece financiamento para compras para o programa. **Administradores de aplicativos e domínios** podem adicionar/editar fontes de financiamento

Para adicionar uma fonte de financiamento:

1. Vá para “Realm Level Masters” e clique em “Fonte de Financiamento” para exibir a lista de financiamento atual
fontes.

<img src={require('@site/static/img/media/image365.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 221: Adding a Funding Source</p>

4. Clique no botão azul “+” (adicionar) abaixo do ícone do perfil.
5. Uma nova tela “Adicionar fonte de financiamento” é aberta.
6. Insira os dados necessários e clique no botão “Enviar” para salvar suas alterações ou “Cancelar” para
feche o formulário sem salvar.

<img src={require('@site/static/img/media/image366.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 222: Adding a Funding Source</p>

**Para atualizar uma fonte de financiamento:**

1. Acesse a Lista de Fontes de Financiamento.
2. Clique na fonte de financiamento que precisa ser alterada ou atualizada.
3. Insira as informações necessárias e clique no botão “Atualizar”.

<img src={require('@site/static/img/media/image367.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 223: Adding a Funding Source</p>

### e. Fabricante

O fabricante de uma mercadoria são dados mestres que não são acessíveis/visíveis aos principais usuários do QAT.
No entanto, eles fazem parte dos dados de remessa/pedido que podem/serão recebidos dos sistemas de gerenciamento de pedidos
juntamente com atributos de commodities específicos do fabricante.

**Para adicionar um fabricante:**

1. Vá para “Realm Level Masters” e clique em “Fabricante” para exibir a tabela abaixo.

<img src={require('@site/static/img/media/image368.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 224: Adding a Funding Source</p>

2. Clique no botão azul “+” para abrir uma nova tela “Adicionar Fabricante”.
3. Insira os detalhes necessários.
4. Clique em “Enviar” para salvar as alterações ou em “Cancelar” para fechar o formulário sem salvar.

<img src={require('@site/static/img/media/image369.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 224: Adding a Funding Source</p>

**Atualizar fabricante**

1. Vá para a tela Fabricante.
2. Clique no fabricante que precisa ser atualizado.
3. Insira as informações necessárias e clique no botão “Atualizar”.

### f. Organização

Uma organização é um grupo de pessoas com um propósito específico, que pode ser um órgão privado ou governamental.
**Aplicativo**, **Administradores de Realm**, **Administrador do Programa**, **Usuário do Programa** e **Usuário Convidado** podem listar/visualizar
organizações.

**Para adicionar uma organização:**

1. Vá para “Realm Level Masters” e clique em “Organization” para exibir a tabela abaixo.

<img src={require('@site/static/img/media/image370.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

2. Clique no botão azul “+” para abrir uma nova tela “Adicionar Organização”.
3. Insira os detalhes necessários.
4. Clique em “Enviar” para salvar as alterações ou em “Cancelar” para fechar o formulário sem salvar.

<img src={require('@site/static/img/media/image371.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

**Para atualizar uma organização:**

1. Vá para a tela Organização.
2. Clique no registro que precisa ser atualizado.
3. Insira as informações necessárias e clique no botão “Atualizar”.

### g. Tipo de organização

Os nomes das organizações podem ser personalizados de acordo com a necessidade do usuário; no entanto, para manter a padronização
por meio de dados mestres, o QAT inclui um “tipo de organização” que pode ser gerenciado por um administrador de domínio.

O administrador da região atribui um tipo de organização a cada organização no QAT; por exemplo, no
No Reino da Saúde Global, o país A pode solicitar que o nome do seu programa inclua a organização Ministério da
Saúde e Bem-Estar (MOHW), enquanto o país B exige que o nome do seu programa inclua Ministério da Saúde
e Assistência Social (MOHSW). Este nível de personalização é possível no QAT, mantendo
padronização através dos mestres do Tipo de Organização. No exemplo acima, MOHW e MOHSW
receberia o tipo de organização “Govt”, pois qualquer ministério da saúde seria considerado um
entidade governamental, independentemente da denominação desse ministério da saúde em cada país.

Como o tipo de organização consiste em dados mestre em nível de realm, os usuários do QAT podem solicitar novos tipos de organização, caso não o façam.
já existem, através da função de ticketing.

<img src={require('@site/static/img/media/image373.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

**Adicionar tipo de organização:**

1. Vá para “Realm Level Masters” e então clique em “Organization Type” para exibir uma lista dos Or-
tipos de organização.

<img src={require('@site/static/img/media/image374.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

2. Clique no botão azul “+” para abrir a tela “Adicionar tipo de organização”
3. Insira os detalhes necessários.
4. Clique em “Enviar” para salvar as alterações ou em “Cancelar” para fechar o formulário sem salvar.

<img src={require('@site/static/img/media/image375.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

   **Observação:** O QAT não permite colocar espaço antes de iniciar o nome do tipo de organização. Espaços só serão permitidos entre palavras se o nome do tipo de organização consistir em várias palavras.*

**Para atualizar um tipo de organização:**

1. Vá para “Realm Level Masters” e clique em “Organization Type”,
2. Clique em um tipo de organização existente para exibir a tela abaixo.

<img src={require('@site/static/img/media/image375.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

3. Insira os detalhes necessários.
4. Clique em “Enviar” para salvar as alterações ou em “Cancelar” para fechar o formulário sem salvar.

### h. Produto

QAT oferece suporte à padronização de dados dentro de cada domínio por meio do gerenciamento de dados mestres. Uma peça essencial
dos dados mestre são produtos. No QAT, “Produto” refere-se aos múltiplos níveis de commodities que devem ser
configurados e gerenciados por domínio: unidades de previsão, unidades de planejamento, unidades de aquisição e alternativas
unidades de relatório. Os produtos no QAT podem ser editados/adicionados pelos Administradores do Aplicativo ou do Realm, exceto para as unidades de relatórios alternativas, que são gerenciadas no nível do país/programa. Os usuários em nível de país podem
também solicite que novas unidades de planejamento/previsão sejam adicionadas ao catálogo QAT, levantando um ticket.

#### Unidade de previsão

A unidade de previsão é o equivalente QAT da unidade base do produto. Será usado para estimar futuros
demanda, ou seja, a previsão. Por exemplo: um comprimido, um mililitro, uma camisinha. Essas unidades de previsão têm um
relacionamento um-para-muitos com a unidade de planejamento, ou seja, muitas unidades de planejamento (por exemplo, TLD, frasco de 90 comprimidos,
TLD, frasco de 180 comprimidos, etc.) podem estar relacionados a uma única unidade de previsão (por exemplo, 1 comprimido TLD)

**Para ver e exportar a lista de todas as unidades de previsão no catálogo em nível de região:**

1. Vá para “Mestres de Nível de Reino”
2. Clique em “Produto” e depois em “Unidade de Previsão”.
3. Selecione a Categoria da Unidade de Planejamento e depois a Categoria do Rastreador e clique em “Pesquisar”
4. Ao clicar no ícone exportar para CSV você poderá exportar todas as unidades de previsão selecionadas.

<img src={require('@site/static/img/media/image377.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

**Para adicionar unidades de previsão:**

1. Vá para “Mestres de Nível de Reino”
2. Clique em “Produto” e depois em “Unidade de Previsão”.
3. Clique no botão azul “adicionar” no canto superior direito da tela Unidade de Previsão.
4. Uma nova tela chamada “Adicionar Unidade de Previsão” será aberta.
5. Insira os dados necessários e clique em “Enviar”.

**Para editar/atualizar unidades de previsão:**

1. Vá para “Mestres de Nível de Reino”.
2. Clique em “Produto” e depois em “Unidade de Planejamento”.
3. Clique em qualquer unidade de previsão que precise ser alterada ou atualizada.
4. Edite as informações necessárias.
5. Clique em “Atualizar” para salvar as alterações.

#### Unidade de Planejamento

<img src={require('@site/static/img/media/image232.png').default} alt="List of Planning Units" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>figure 232: List of Planning Units</p>

**Para adicionar unidades de planejamento:**

1. Vá para "Mestres de Nível de Reino".
2. Clique em “Produto” e depois em “Unidade de Planejamento”.
3. Clique no botão azul "adicionar" no canto superior direito da tela da Unidade de Planejamento.
4. Insira os detalhes necessários.
5. Clique no botão “Enviar” para salvar as alterações.

**Para editar/atualizar unidades de planejamento:**

1. Vá para "Mestres de Nível de Reino".
2. Clique em “Produto” e depois em “Unidade de Planejamento”.
3. Clique em qualquer unidade de previsão que precise ser alterada ou atualizada.
4. Edite as informações necessárias.
5. Clique em “Atualizar” para salvar as alterações.

#### Volume da unidade de planejamento

Conforme mencionado na seção Unidade de Planejamento, as unidades de planejamento podem ter volumetrias atribuídas a elas para permitir um planejamento mais detalhado. Porém, esta tela é de visualização apenas para Administradores do programa e tem como objetivo mostrar os dados volumétricos de cada unidade de planejamento, e não editá-los ou adicioná-los. **Administradores de aplicativos e domínios** podem adicionar/editar dados volumétricos da unidade de planejamento na tela Unidade de planejamento.

**Para adicionar dados volumétricos às unidades de planejamento:**

Os administradores do aplicativo e do Realm podem adicionar/editar dados volumétricos da unidade de planejamento na tela Unidade de planejamento.

1. Vá para "Mestres de Nível de Reino".
2. Clique em “Produto” e depois em “Unidade de Planejamento”.
3. Clique com o botão direito na unidade de planejamento a ser editada.
4. Clique em "Mapear Volumes"
5. Use o "Botão Adicionar Linha" azul para adicionar uma nova linha, se necessário, ou edite os detalhes da Unidade de Planejamento na linha da unidade de planejamento existente.
6. Clique no botão "Enviar".

<img src={require('@site/static/img/media/image380.png').default} alt="Adding volumetric data to planning units" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>FFigure 233: Adding volumetric data to planning units</p>

#### Categoria da unidade de planejamento

Ao nível do domínio, as unidades de planeamento devem ser agrupadas em categorias amplas, tais como produtos farmacêuticos para o VIH/SIDA, produtos farmacêuticos e dispositivos para a saúde reprodutiva (no domínio da Saúde Global), a fim de filtrar pesquisas e relatórios. **Administradores de aplicativos e domínios** podem adicionar/editar categorias de unidades de planejamento.

**Para adicionar categorias de unidades de planejamento**

1. Vá para "Mestres de Nível de Reino"
2. Clique em “Produto” e depois em “Categoria da Unidade de Planejamento”
3. Escreva o nome da nova categoria a ser adicionada, clique em “Adicionar” e depois em “Enviar”.

<img src={require('@site/static/img/media/image381.png').default} alt="Viewing/adding planning unit categories" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 234: Viewing/adding planning unit categories</p>

#### Unidade de Relatório Alternativa

Consulte [Unidades de Relatório Alternativas](07-supply-planning-module-program-data.md#a4-alternate-reporting-units) para obter mais informações.

#### Unidade de Aquisições

Uma descrição em nível de item da "unidade de planejamento", incluindo atributos específicos do fornecedor/fabricante, como GTIN e preços de pedidos, que podem ser adicionados/editados manualmente por **Administradores de aplicativos e domínios** ou recebidos automaticamente por meio de integração e mapeamento de unidades de planejamento QAT para um sistema de gerenciamento de pedidos de agente de compras. As unidades de compras são específicas para cada agente de compras. As unidades de aquisição não são visíveis/editáveis ​​pelos usuários em nível de país/programa.

**Para adicionar unidades de compras ao catálogo em nível de região, o Aplicativo ou Administrador de Região deve:**

1. Vá para "Realm Level Masters" e clique em "Product".
2. Clique em “Unidade de Compras” e será exibida uma tabela de unidades de compras.
3. Clique no botão azul "adicionar" no canto superior direito da tela.
4. Insira todos os dados necessários na tela "Adicionar Unidade de Aquisição" e clique em "Enviar".

   um. **Observação:** Os detalhes necessários incluem nome da unidade de planejamento, fabricante, fator de conversão, atributos de volume e peso, unidades por palete e por contêiner, etc.

**Para editar/atualizar unidades de aquisição:**

1. Vá para "Realm Level Masters" e clique em "Product".
2. Clique em “Unidade de Compras” e será exibida uma tabela de unidades de compras.
3. Clique em qualquer unidade de aquisição que precise ser alterada ou atualizada.
4. Edite as informações necessárias.

   um. **Observação:** Detalhes como nome da unidade de planejamento e fabricante não são editáveis.
5. Clique no botão “Atualizar” para salvar as alterações.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('@site/static/img/media/image382.png').default} alt="Add/Update Procurement Unit" style={{ border: '1px solid #ccc', marginBottom: '15px' }} />
</div>
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 235: Add/Update Procurement Unit</p>

#### Categoria do rastreador

As categorias rastreadoras são um agrupamento de segundo nível, menos amplo, de tipos de produtos específicos de um Realm. **Administradores de aplicativos e administradores de realm** podem adicionar/editar categorias do Tracer. Por exemplo, os anti-retrovirais para adultos são uma categoria de rastreio pertencente ao grupo mais amplo de produtos farmacêuticos para o VIH/SIDA (categoria de unidade de planeamento).

<img src={require('@site/static/img/media/image383.png').default} alt="List of tracer categories" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 236: List of tracer categories</p>

**Para adicionar categorias de rastreador ao catálogo em nível de região:**

1. Vá para "Realm Level Masters" e clique em "Product".
2. Clique em "Categoria Tracer" e uma tabela de categorias Tracer será mostrada para o Realm selecionado.
3. Clique no botão azul "adicionar" no canto superior direito da tela.
4. Insira todos os detalhes necessários na tela "Adicionar categoria de rastreador" e clique em "Enviar".

**Para atualizar/editar categorias de rastreador:**

1. Vá para "Realm Level Masters" e clique em "Product".
2. Clique em "Categoria Tracer" e uma tabela de categorias Tracer será mostrada para o Realm selecionado.
3. Clique em qualquer linha que precise ser alterada ou atualizada.
4. Atualize as informações necessárias e clique em “Atualizar” para salvar as alterações.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('@site/static/img/media/image384.png').default} alt="Update Tracer Category" style={{ border: '1px solid #ccc', marginBottom: '15px' }} />
</div>
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 237: Update Tracer Category</p>

### eu. Unidade de Equivalência

A Unidade de Equivalência permite que os usuários gerenciem dados agregados de produtos diferentes, mas relacionados. Unidades de equivalência podem ser usadas na [tela de comparação e seleção de previsão](12-forecasting-module-reports-and-outputs.md#a-compare-and-select), na [tela de previsão mensal](12-forecasting-module-reports-and-outputs.md#b-monthly-forecast), no [erro de previsão (mensal) screen](09-supply-planning-module-reports.md#d2-forecast-error-monthly) e o [relatório do plano de fornecimento](08-supply-planning-module-supply-planning.md#g-supply-plan-report).

**Para adicionar um mapeamento de unidade de equivalência:**

1. Vá para "Realm Level Masters" e clique em "Equivalency Unit".
2. Clique no botão "+Adicionar linha" no canto inferior direito da tela. Você também pode clicar com o botão direito em qualquer linha e selecionar 'Adicionar linha'.
3. Insira os dados necessários e clique no botão "Enviar".

   um. Os mapeamentos em nível de região estão disponíveis para todos os usuários e são indicados por todos. Eles são criados e gerenciados por Administradores do Realm. O mapeamento específico do programa pode ser criado e gerenciado pelos administradores do programa. Se houver algum conflito, os mapeamentos específicos do programa terão precedência e serão usados ​​em vez dos mapeamentos em nível de região.

Por exemplo, um usuário está prevendo medicamentos para tratar QATite, uma condição em que as pessoas não conseguem parar de usar QAT. O usuário pode prever por diferentes tratamentos (diferentes unidades de previsão), mas deseja ver como eles são agregados.

<table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', marginTop: '15px', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Equivalency Unit</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Forecasting Unit</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Conversion to EU</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Average Treatment Required to cure QATitis</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet of FASPicillin</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>14</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet a day for 2 weeks</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>5mL tube of FASPasone (cream)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5mL/day applied on the forehead over 10 days (1 tube total)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2mL vial of FASPicaine (injection)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>One injection of 1mL (Two people can share one vial)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of white chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
      <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'middle' }}>2 bars of chocolate. The type of chocolate does not matter, as all chocolate contains the natural form of FASPicillin.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of dark chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of milk chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
    </tr>
  </tbody>
</table>

**Criando e gerenciando unidades de equivalência:**

Se você não encontrar uma unidade de equivalência que gostaria de mapear ou gostaria de editar uma unidade de equivalência existente, clique no botão Gerenciar Unidade de Equivalência no canto superior direito da tela. A partir daí, você pode editar uma unidade de equivalência pré-existente ou selecionar 'Adicionar linha' e adicionar uma nova.

### j. Área Técnica

A Área Técnica é um componente chave de um programa QAT e especifica o foco desse programa. Por exemplo, no domínio da saúde global, as áreas técnicas estão alinhadas com condições médicas ou programas de cuidados de saúde, tratamento e prevenção, como a malária, o planeamento familiar e o VIH/SIDA, cada um dos quais requer uma variedade de medicamentos e suprimentos. **Administradores de aplicativos e administradores de domínio** podem adicionar/atualizar áreas técnicas.

**Para adicionar uma área técnica:**

1. Vá até o canto superior direito da tela da Área Técnica e clique no botão azul “+”. Uma nova tela mostrando “Adicionar Área Técnica” será aberta:

<img src={require('@site/static/img/media/image385.png').default} alt="Add Technical Area Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 238: Add Technical Area Screen</p>

<img src={require('@site/static/img/media/image386.png').default} alt="Add Technical Area" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 239: Add Technical Area</p>

2. Insira os dados necessários e clique no botão "Enviar".
   
   um. Caso não queira prosseguir com a criação de uma nova área técnica e não tenha clicado em enviar, clique no botão “Cancelar” e o QAT fechará o formulário sem salvar e o levará de volta à tela da Área Técnica.

**Para atualizar uma área técnica:**

1. Para atualizar a área técnica acesse a Tela Área Técnica.
2. Clique com o botão esquerdo na área técnica que deseja atualizar.
3. Insira as edições desejadas na área técnica e clique no botão “Enviar”.
4. Caso queira desativar ou reativar a área técnica, clique no círculo ao lado dessa opção e clique no botão “Enviar”.
   
   um. Ao clicar no botão “Reset”, a informação da área técnica não desaparecerá, mas sim voltará ao que era antes da atualização.

<img src={require('@site/static/img/media/image387.png').default} alt="Update Technical Area" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 240: Update Technical Area</p>

### k. Agente de compras

Um Agente de Compras seleciona os fornecedores, estabelece as condições de pagamento, a verificação estratégica, a seleção, a negociação de contratos e a compra efetiva das mercadorias que são enviadas para um programa. Os Agentes de Aquisição são geralmente contratados pela agência que financia uma remessa específica (uma "Fonte de Financiamento" no QAT) e identificados pelo usuário no nível do Programa ao planejar uma remessa. Os Agentes de compras são gerenciados por **Administradores em nível de aplicativo** e **Administradores em nível de realm**.

**Para ver a lista de agentes de compras em nível de realm:**

1. Vá para "Realm Level Masters" no menu da barra lateral.
2. Clique em “Agente de Compras”.

**Para adicionar um agente de compras:**

1. Na tela Agente de Compras, vá até o canto superior direito da tela e clique no botão azul
botão “+”.
2. Uma tela intitulada “Adicionar Agente de Aquisição” aparecerá.
3. Insira os detalhes necessários.
4. Clique no botão “Enviar” para salvar o agente de compras.
   
   um. Antes de enviar, se desejar não prosseguir com aquele agente de compras, clique no botão “Cancelar”.

<img src={require('@site/static/img/media/image388.png').default} alt="Add Procurement Agent" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 241: Add Procurement Agent</p>

**Para atualizar um Agente de compras:**

1. Acesse a tela Agente de compras.
2. Clique com o botão esquerdo no Agente de compras que precisa ser atualizado.
3. Uma tela chamada “Atualizar Agente de Aquisição” aparecerá.
4. Insira as alterações desejadas, por exemplo, modificando o código de cores do agente ou os prazos de entrega.
5. Se desejar ativar ou desativar o agente de compras, selecione a opção correspondente em
a parte inferior da tela.
6. Clique no botão “Atualizar” para salvar as alterações ou cancelar para fechar o formulário sem salvar.

**Detalhes da unidade de planejamento para mapeamento para um agente de compras:**

| | |
| :--- | :--- |
| **Unidade de Planejamento** | A unidade de planejamento é o produto a ser planejado no QAT. É um produto com descrição completa até a embalagem primária (ex.: frasco com 30 comprimidos, blister 10x10, etc.). |
| **Unidade de Compras** | A unidade de compras é uma descrição de nível superior da Unidade de Planejamento que inclui atributos específicos do fornecedor, como custos e GTINs. |
| **Código SKU** | O código da unidade de manutenção de estoque (SKU) é um recurso usado para identificar produtos específicos e geralmente impresso nas etiquetas do produto e da caixa. O código SKU deve corresponder ao que está no catálogo do agente de compras. |
| **Preço de catálogo** | Preço incluído no catálogo do agente de compras. |
| **Quantidade mínima** | Quantidade mínima do pedido refere-se à quantidade mínima que pode ser solicitada de um agente de compras para aquela unidade de planejamento específica. |
| **Unidades por Contêiner** | O número máximo de unidades de uma unidade de planejamento que cabem em um contêiner usado pelo agente de compras para enviar o produto para um programa. |
| **Unidades por palete** | Unidades por palete definem o número de unidades de planejamento que podem ser embaladas em um palete padrão, por dimensão do palete. Unidades por palete descrevem os itens individuais de um palete em "unidades" únicas que podem ser movidas facilmente com uma paleteira ou empilhadeira. |
| **Volume** | O volume da unidade de planejamento. |
| **Peso** | O peso da unidade de planejamento. |
| **GTIN** | O Número Global de Item Comercial é um identificador para itens comerciais, desenvolvido pela GS1. Esses identificadores são usados ​​para pesquisar informações sobre produtos em um banco de dados que pode pertencer a um fabricante. |

<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Table 12: Procurement Agent Planning Unit Details</p>

**Para adicionar uma unidade de planejamento do agente de compras:**

1. Acesse a tela “Agente de compras”.
2. Clique com o botão direito no agente de compras desejado ao qual deseja adicionar uma unidade de planejamento. Em seguida, selecione "Unidade de Planejamento do Mapa".
3. Uma tela intitulada "Adicionar unidade de planejamento de agente de compras" aparecerá.
4. Clique no botão "Adicionar linha" ou clique com o botão direito e selecione "Inserir nova linha" para adicionar uma linha.
5. Insira os detalhes da nova unidade de planejamento. Consulte a tabela acima para obter definições sobre qualquer um dos elementos de dados.
6. Se você inserir informações para "MOQ", "Unidade por palete" ou "Unidade por contêiner", esta combinação agente de compras/unidade de planejamento será considerada um produto estratégico. (Consulte a seção Dados de Remessa para saber mais sobre produtos estratégicos).
7. Clique no botão "Enviar".

**Para atualizar uma unidade de planejamento do agente de compras:**

1. Acesse a tela “Agente de compras”.
2. Clique com o botão direito no agente de compras desejado para o qual deseja atualizar uma(s) unidade(s) de planejamento. Em seguida, selecione "Unidade de Planejamento do Mapa".
3. Uma tela intitulada "Adicionar unidade de planejamento de agente de compras" aparecerá.
4. Insira os detalhes da unidade de planejamento existente clicando duas vezes nas células e digitando as informações. Consulte a tabela acima para obter definições sobre qualquer um dos elementos de dados.
5. Se você inserir informações para "MOQ", "Unidade por palete" ou "Unidade por contêiner", esta combinação agente de compras/unidade de planejamento será considerada um produto estratégico. (Consulte a seção Dados de Remessa para saber mais sobre produtos estratégicos).
6. Clique no botão "Enviar".

Observação: se o catálogo do agente de compras estiver integrado ao QAT, as unidades de planejamento e os detalhes associados no QAT refletirão automaticamente esse catálogo e qualquer alteração feita manualmente no QAT será substituída automaticamente pelos dados do catálogo do agente de compras no momento em que seus dados forem atualizados.

<img src={require('@site/static/img/media/image389.png').default} alt="Map Procurement Agent Planning Unit" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 242: Map Procurement Agent Planning Unit</p>

**Para adicionar uma unidade de aquisição do agente de compras:**

1. Acesse a tela “Agente de compras”.
2. Clique com o botão direito no agente de compras desejado ao qual deseja adicionar uma unidade de planejamento. Em seguida, selecione “Mapa Unidade de Aquisição”.
3. Um formulário intitulado "Adicionar unidade de aquisição de agente de aquisição" aparecerá.
4. Clique no botão "Adicionar linha" ou clique com o botão direito e selecione "Inserir nova linha" para adicionar uma linha.
5. Insira os detalhes da nova unidade de aquisição. Consulte a tabela acima para obter definições sobre qualquer um dos elementos de dados.
6. Todos os campos são obrigatórios, exceto o campo GTIN que é opcional.
7. Clique no botão "Enviar".

**Para atualizar uma unidade de aquisição do agente de compras:**

1. Acesse a tela “Agente de compras”.
2. Clique com o botão direito no agente de compras desejado para o qual deseja atualizar uma(s) unidade(s) de compras. Em seguida, selecione “Mapa Unidade de Aquisição”.
3. Um formulário intitulado "Adicionar unidade de aquisição de agente de aquisição" aparecerá.
4. Insira os detalhes da unidade de aquisição existente clicando duas vezes nas células e digitando as informações. Consulte a tabela acima para obter definições sobre qualquer um dos elementos de dados.
5. Todos os campos são obrigatórios, exceto o campo GTIN que é opcional.
6. Clique no botão "Enviar".

Nota: Se o catálogo do agente de compras estiver integrado ao QAT, as unidades de compras e os detalhes associados no QAT refletirão automaticamente o catálogo desse agente de compras e qualquer alteração feita manualmente no QAT será substituída pela integração no momento da próxima atualização.

<img src={require('@site/static/img/media/image390.png').default} alt="Map Procurement Agent Procurement Unit" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 243: Map Procurement Agent Procurement Unit</p>

### l. Tipo de agente de compras

Os agentes de compras podem ser personalizados de acordo com a necessidade do programa; entretanto, para manter a padronização por meio de dados mestres, o QAT inclui um “tipo de agente de compras” que pode ser gerenciado por um administrador de domínio.

O administrador da região atribui um tipo de agente de compras a cada agente de compras no QAT; por exemplo, no domínio da saúde global, o país A pode solicitar que as remessas do seu programa incluam o agente de compras Joint Medical Store, enquanto o país B exige que as remessas do seu programa incluam a National Medical Store. Esse nível de customização é possível no QAT, mantendo a padronização por meio dos mestres de tipo de agente de compras. No exemplo acima, ambos os agentes de compras receberiam o tipo de agente de compras "Governo".

Como o tipo de agente de compras são dados mestre em nível de realm, os usuários do QAT podem solicitar novos tipos de organização, se ainda não existirem, por meio da função de emissão de tickets.

<img src={require('@site/static/img/media/image391.png').default} alt="Procurement agent types in the Global Health Realm" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 244 – Procurement agent types in the Global Health Realm</p>

**Adicionar tipo de agente de compras**

1. Vá para 'Realm Level Masters' e clique em 'Procurement Agent Type' para exibir uma lista dos tipos de organização atuais.

<img src={require('@site/static/img/media/image392.png').default} alt="Procurement Agent Type List" style={{ width: '100%', marginBottom: '15px' }} />

2. Clique no botão azul "+" para abrir a tela "Adicionar tipo de agente de aquisição".
3. Insira os detalhes necessários.
4. Clique em “Enviar” para salvar as alterações ou em “Cancelar” para fechar o formulário sem salvar.

<img src={require('@site/static/img/media/image393.png').default} alt="Add Procurement Agent Type Screen" style={{ width: '100%', marginBottom: '15px' }} />

Nota: QAT não permite colocar espaço antes de iniciar o nome do tipo de agente de compras. Espaços só serão permitidos entre palavras se o nome do tipo de agente de compras consistir em diversas palavras.

**Atualizar um tipo de agente de compras**

1. Vá para "Realm Level Masters" e clique em "Procurement Agent Type".
2. Clique em um tipo de Agente de compras existente para exibir a tela abaixo.

<img src={require('@site/static/img/media/image394.png').default} alt="Update Procurement Agent Type Screen" style={{ width: '100%', marginBottom: '15px' }} />

3. Insira os detalhes necessários.
4. Clique em “Atualizar” para salvar as alterações ou em “Cancelar” para fechar o formulário sem salvar.

###m. Método de previsão

Esta tela permite que administradores de região adicionem ou editem métodos de previsão que podem ser usados pelos usuários ao criar programas de previsão.

**Adicione um método de previsão:**

1. Vá para "Realm Level Masters" e clique em "Forecast Method" para exibir uma lista dos métodos de previsão atuais.

<img src={require('@site/static/img/media/image395.png').default} alt="Forecast Method List" style={{ width: '100%', marginBottom: '15px' }} />

2. Clique no botão azul "+Adicionar linha".
3. Insira os detalhes e clique em **Enviar**.

## D. Configurando um novo programa

Um administrador de Realm ou Aplicativo pode criar um novo programa quando necessário. Cada programa deve consistir em um país, área técnica (pode ser 1 ou mais), região(ões) e organização. Depois que o programa for configurado no QAT, os administradores do programa poderão atualizar determinadas configurações do programa. Informações sobre como atualizar essas configurações podem ser encontradas na seção [Informações do programa](./07-supply-planning-module-program-data.md#a1-program-information).

Para configurar um novo **Programa de Planejamento de Fornecimento** siga estas etapas:

1. Vá para “Gerenciamento de Programas” no menu da barra lateral.
2. Clique em “Programa de configuração”.

OU

1. Vá para “Gerenciamento de programas” no menu da barra lateral e selecione “Atualizar informações do programa”.
2. Clique no ícone azul “+” no canto superior direito da tela. Este botão redirecionará o usuário para a tela “Configurar Programa”.

<img src={require('@site/static/img/media/image396.png').default} alt="Supply Planning Module Setup Program Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 245: Supply Planning Module Setup Program Screen</p>

3. Preencha a seção Realm e clique em “Avançar”. Se o usuário tiver acesso apenas a um domínio, ele será automaticamente selecionado para o usuário.
4. Em seguida, selecione o país ao qual se destina o programa e clique em “Avançar”. Se o país não estiver listado, o administrador do aplicativo precisará adicionar ou ativar esse país específico para o domínio.
5. Selecione a(s) Área(s) Técnica(s) a que se destina o programa e clique em “Seguinte”. Se a Área Técnica não estiver listada, o administrador do aplicativo precisará adicionar ou ativar essa Área Técnica para o domínio.

Nota: Várias áreas técnicas podem ser selecionadas usando a lista suspensa Área técnica.

<img src={require('@site/static/img/media/image397.png').default} alt="Setting-up a program with multi-select technical areas" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 246 Setting-up a program with multi-select technical areas</p>

6. Selecione a Organização a que se destina o programa e clique em “Avançar”. Se a Organização não estiver listada, o administrador do Aplicativo precisará adicionar ou ativar essa Organização para a região.
7. Selecione a(s) região(ões) a que se destina o programa e clique em “Avançar”. Se uma região que o usuário precisa não estiver listada, o administrador do aplicativo precisará adicionar ou ativar essa região para a região. Esta etapa permite uma ou mais seleções.
8. A etapa 6 é onde o usuário fornecerá os **Dados do Programa**. Preencha todos os dados necessários.

<img src={require('@site/static/img/media/image398.png').default} alt="Add Program Data" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 247: Add Program Data</p>

9. A etapa final para configurar o programa é adicionar a(s) unidade(s) de planejamento. Todos os campos desta etapa são obrigatórios para prosseguir. Qualquer campo deixado em branco ficará destacado em amarelo até ser preenchido.
10. Clique em “Enviar”.

Para configurar um novo **Programa de previsão**, siga estas etapas:

1. Vá para “Gerenciamento de programas” no menu da barra lateral e selecione “Atualizar informações do programa”.
2. Clique no ícone azul “+” no canto superior direito da tela.
3. Preencha os campos obrigatórios para País, Área Técnica, Organização, Região, Programa de Previsão, Gerente de Programa e as Configurações da Versão 1 (Início da Previsão, Período de Previsão, Fim da Previsão). As configurações de versão podem ser atualizadas a qualquer momento pelos administradores do programa.
   - Início da previsão, período de previsão (meses) e término da previsão - com base na data de início e término, o QAT calculará automaticamente o período de previsão em meses. Alternativamente, os usuários podem optar por inserir uma data de início da previsão e o número de meses no período de previsão, e o QAT calculará automaticamente a data de término da previsão.
4. Clique em “Enviar”

<img src={require('@site/static/img/media/image399.png').default} alt="Forecasting Module Setup Program Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 248: Forecasting Module Setup Program Screen</p>

## E. Redefinindo a lista de problemas do QAT

Os administradores de domínio têm a capacidade de redefinir a lista de problemas do QAT para todos os programas, independentemente do tipo de versão ou status. Os programas podem ser redefinidos em massa ou individualmente por programa. Redefinir a lista de problemas do QAT para um programa reverterá todos os problemas com status “endereçado” para “aberto”. Isso acontece automaticamente quando um plano de fornecimento é aprovado finalmente por um revisor do plano de fornecimento, mas não acontece automaticamente para quaisquer outros tipos de versão ou status. A redefinição da lista de problemas do QAT pode ser útil no final de um período de envio de plano de fornecimento para programas que foram enviados como finais, não aprovados, mas todos os problemas devem ser reabertos para revisão no próximo período de envio.

Para redefinir a lista de problemas do QAT:

1. Navegue até a tela Versão e revisão do plano de fornecimento
2. Clique no botão “Redefinir QPL” no canto superior direito

<img src={require('@site/static/img/media/image400.png').default} alt="Reset QPL Button" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 249: Reset QPL Button</p>

3. Escolha o tipo de versão, status e programa que deve ser redefinido

<img src={require('@site/static/img/media/image401.png').default} alt="Reset QPL Dropdowns" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 250: Reset QPL Dropdowns</p>

4. Clique em "Enviar"