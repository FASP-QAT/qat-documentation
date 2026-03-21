---
id: annex-5-pipeline-program-import
title: "Anexo 5: Importação do Programa PipeLine"
sidebar_label: "Anexo 5: Importação do Programa PipeLine"
sidebar_position: 14
---
# Anexo 5: Importação do Programa PipeLine

Em certos casos, os usuários receberão um conjunto especial de credenciais que podem importar bancos de dados PipeLine se desejarem configurar seu programa desta forma (consulte [Configurando um novo programa](10-annex-1-application-realm-administrator-manual.md#setting-up-a-new-program) no Anexo 1).

**Etapa 1: Converta o arquivo .accdb em um arquivo JSON:**

_Sobre a ferramenta de conversão PipeLine Access DB para JSON:_ Como o sistema QAT só é capaz de importar dados do programa no formato JSON e os bancos de dados PipeLine estão no formato .accdb, o QAT possui uma ferramenta para download para converter o arquivo .accdb em um arquivo JSON, permitindo assim a importação para o QAT. Uma vez instalada, esta ferramenta não requer acesso à Internet para funcionar. Além disso, esta ferramenta permite ao usuário escolher o idioma de sua preferência.

1. Confirme se você possui os requisitos de configuração do sistema apropriados:

<!-- lista final -->

- Sistema operacional: _Windows/Linux/Ubuntu_

- Outros softwares: _Java JDK 1.8 e superior._

<!-- lista final -->

2. Confirme se seus dados do PipeLine estão totalmente atualizados

<!-- lista final -->

- O banco de dados não pode ter valores de estoque negativos.

- Todos os dados de envio, stock, consumo deverão estar atualizados.

<!-- lista final -->

3. Vá em “Gerenciamento de Programas” e clique em “Importação de Programa PipeLine”.

4. No canto superior direito clique no botão “Adicionar”. Isso levará a uma tela de entrada de arquivo.

5. Clique no botão de seta para baixo no canto superior direito.

6. Clique em “Download PipeLine Converter” na tela e selecione o sistema operacional do seu computador (Windows ou Linux). O conversor será baixado em arquivo zip.

7. Abra o arquivo conversor e execute a ferramenta (arquivo .exe / arquivo executável .java), a seguinte tela será exibida:

![P7343#yIS1](/img/media/image406.png)

Figura 251: Mensagem de cuidado durante a importação do PipeLine

![P7345#yIS1](/img/media/image407.jpg)

Figura 252: Tela de importação do PipeLine

8. Clique no primeiro botão Procurar para procurar o arquivo .accdb desejado para importar.

![P7349#yIS1](/img/media/image408.png)

> Figura 253: Tela de importação do PipeLine – Navegar

9. Clique no segundo botão Navegar para selecionar o local onde o arquivo convertido será armazenado na máquina local do usuário.

10. Clique em Converter. Quando o arquivo é convertido em . JSON, você receberá a notificação abaixo:

![P7353#yIS1](/img/media/image409.jpg)

Figura 254: Tela de importação bem-sucedida do PipeLine

**Etapa 2: Faça upload do arquivo JSON no QAT:**

11. No QAT vá para o item de menu “Program Management” \> “PipeLine Program Import”.

12. Clique no botão “Adicionar” e uma nova tela será aberta. Navegue para encontrar o arquivo JSON convertido (da Etapa 1) na máquina local. Clique em “Enviar”.

13. Após concluir o processo, o usuário receberá uma mensagem informando que o programa foi importado com sucesso.

14. Este programa será mostrado como uma linha na lista de programas. Clique nessa linha para continuar na Etapa 3.

**Observação:** Ao configurar o programa, o usuário do QAT pode selecionar diversas áreas técnicas na lista suspensa de áreas técnicas.

![P7363#yIS1](/img/media/image410.png)

Figura 255 Importação do programa Pipeline, múltiplas áreas técnicas

**Etapa 3: Configurar dados para importação para QAT**

Após importar os dados do PipeLine, o usuário navegará por uma série de telas onde serão solicitados a inserir os dados. Após editar os dados em uma tela, o usuário deve clicar em “Avançar” para passar para a tela de entrada de dados seguinte. Se necessário, navegue para as telas anteriores clicando em “Voltar”. O usuário deverá navegar pelas seguintes telas: Informações do Programa, Unidades de Planejamento, Fonte de Dados, Fonte de Financiamento, Agente de Compras, Consumos, Estoques e Remessas.

![P7369#yIS1](/img/media/image411.jpg)

Figura 256: Importação PipeLine - País

Cada uma dessas telas principais possui subtelas onde os usuários precisam inserir dados e mapear os dados atuais do PipeLine para dados mestres em nível de domínio QAT; por exemplo, os produtos PipeLine precisam ser mapeados para as unidades de planejamento do QAT. Na última etapa (tela Remessa) será exibido um pop-up caso algum programa contenha estoque negativo.

![P7374#yIS1](/img/media/image412.jpg)

Figura 257: Importação de PipeLine - Unidades de Planejamento

Depois que o arquivo for importado com sucesso para o QAT:

1. Os usuários podem ir em “Gerenciamento de Programas”.

2. Clique no item de menu “Programas”.

3. A lista de programas mostrará o programa importado.

4. Agora o usuário pode “Baixar”, “Importar” e “Exportar” esse programa.

<!-- lista final -->