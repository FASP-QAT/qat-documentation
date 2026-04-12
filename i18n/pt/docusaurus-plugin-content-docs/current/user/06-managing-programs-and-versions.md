---
id: managing-programs-and-versions
title: "Gerenciando programas e versões"
sidebar_label: "Gerenciando programas e versões"
sidebar_position: 6
---
# Gerenciando programas e versões

## Trabalhando com dados do programa

QAT permite gerenciar dados do programa por meio de quatro ações principais: download, upload, importação e exportação.

| Ação | Modo | Descrição |
| :--- | :---: | :--- |
| **Baixar** | On-line | Recuperar dados do programa do servidor para o seu dispositivo local. |
| **Carregar** | On-line | Salve suas alterações locais de volta no servidor. |
| **Exportar** | Off-line | Salve os dados locais em um arquivo compactado (`.zip`) para compartilhamento. |
| **Importar** | Off-line | Carregue dados de um arquivo `.zip` exportado para o QAT. |

> [!NOTA]
> Os programas de Previsão e Planejamento de Fornecimento são módulos separados. Certifique-se de estar no módulo correto antes de realizar qualquer operação de dados.

### Resumo do fluxo de trabalho
- **Download:** Necessário para começar a trabalhar em qualquer programa.
- **Upload:** Compartilhe seu trabalho com a equipe. Carregar como “Final” no Planejamento de Fornecimento inicia o processo de revisão; em Previsão, disponibiliza os dados para importação para o Planejamento de Fornecimento.
- **Exportar/Importar:** Usado principalmente para compartilhar dados em ambientes off-line (por exemplo, via unidade USB).

## Baixe e exclua programas

### Visão geral
- **Quem:** Administradores, usuários do programa e revisores. 
- **Quando:** Obrigatório para downloads online. Necessário mesmo ao trabalhar on-line para permitir a entrada de dados e o planejamento de cenários.
- **Indicadores de status:** 
  - ![Red Icon](/img/media/image89.png) **Vermelho:** Sua versão local está desatualizada.
  - ![Blue Icon](/img/media/image90.png) **Azul:** Você tem a versão mais recente ou nenhuma versão baixada.

### Como baixar um programa
1. Navegue até **Gerenciamento de programas** > **Baixar/Excluir programa** (ou clique no ícone de download no canto superior direito).
2. A tela exibe programas com texto codificado por cores:
   - **Verde:** Versão mais recente baixada.
   - **Vermelho:** Versão desatualizada baixada.
   - **Preto:** Ainda não baixado.
3. Marque a caixa de seleção do programa de destino. O padrão do QAT é a versão mais recente.
4. (Opcional) Expanda o triângulo próximo a um programa para selecionar uma versão histórica específica.
5. Clique em **Baixar**.

![Load Program Screen](/img/media/image91.png)
*Figura 1: Baixar Interface do Programa*

### Fazendo download de um subconjunto de dados (somente planejamento de fornecimento)
Para melhorar o desempenho de programas grandes, você pode fazer download de uma versão truncada de um plano de fornecimento.
- Marque **Baixar faixa específica de dados do plano de fornecimento**.
- Selecione uma data de início (mínimo 18 meses atrás).
- **Observação:** Os dados mais antigos permanecem seguros no servidor e são mesclados durante uploads futuros.

### Excluindo e limpando
- **Excluir:** Clique no ícone da lixeira ao lado de uma versão específica.
- **Limpar:** Clique no ícone da vassoura para excluir todas as versões locais, exceto a mais recente.

> [!AVISO]
> Se você vir um aviso de "Versão mais recente do servidor" durante a sincronização, clicar em **OK** substituirá as alterações locais pelos dados do servidor. Clique em **Cancelar** para manter suas edições locais.

![More recent server warning](/img/media/image97.png)
*Figura 2: Aviso de conflito de versão do servidor*
## Fazendo upload de dados do programa

### Objetivo do upload
- **Versão de rascunho:** Salve seu trabalho em andamento no servidor e compartilhe-o com outros usuários.
- **Versão Final (Planejamento de Fornecimento):** Marca o plano de fornecimento como concluído e inicia o processo de revisão.
- **Versão Final (Previsão):** Disponibiliza a previsão para importação no módulo Planejamento de Suprimentos.

### Como fazer upload (planejamento de fornecimento)
1. Vá para **Gerenciamento de programas** > **Carregar versão** (ou clique no ícone de upload no canto superior direito).
2. Selecione seu programa e o **Tipo de Versão** (Rascunho ou Final).
3. Adicione **Notas** descrevendo as alterações feitas.
4. Revise as abas de comparação (**Consumo, Estoque, Remessa, QPL**).
5. Resolva quaisquer conflitos (destacados em **Amarelo**) clicando com o botão direito na linha e selecionando **Resolver Conflito**.
6. Clique em **Carregar**.

> [!IMPORTANTE]
> Você não pode carregar uma versão "Final" se houver algum problema "Aberto" na Lista de Problemas do QAT. Você deve primeiro abordá-los ou marcá-los como “Em Conformidade”.

### Como fazer upload (previsão)
1. Navegue até **Gerenciamento de programas** > **Carregar versão**.
2. Selecione o programa e o tipo de versão.
3. Revise as alterações nas guias (**Configurações de versão, Unidade de planejamento, Consumo, Árvore, Previsão selecionada**).
4. Resolva os conflitos e clique em **Fazer upload**.
5. Preencha a lista de verificação **Validação de previsão** para garantir a integridade dos dados e clique em **Ok** para finalizar o upload.

![Forecast Validation](/img/media/image105.png)
*Figura 3: Tela de validação de previsão*

## Versão e revisão do plano de fornecimento (apenas módulo do plano de fornecimento)

- <u>Who?</u> Esta função está disponível para **Aplicativo/Reino/Programa
## Versão e revisão do plano de fornecimento (somente planejamento de fornecimento)

### Visão geral
- **Quem:** Administradores, usuários do programa, revisores e visualizadores.
- **Quando:** Usado on-line para rastrear o status de envio e aprovação de planos de fornecimento.
- **Por que:** 
  - **Planejadores:** Monitore o status de aprovação e feedback.
  - **Revisores:** Gerencie a fila de revisão e aprove/rejeite envios.

### Como revisar um plano de fornecimento
1. Navegue até **Gerenciamento do programa** > **Versão e revisão do plano de fornecimento**.
2. Selecione filtros (Período, País, tipo de versão) para encontrar o plano de destino.
3. Clique em uma linha para visualizar detalhes.

#### Para revisores:
- **Guia Planejamento de Fornecimento:** Revise o status do estoque e os dados de cada unidade de planejamento.
- **Guia Lista de problemas do QAT:** Revise todos os problemas sinalizados.
- **Ação:** Marque a caixa **Revisado** para cada problema. Você pode adicionar **Notas do revisor** ou atualizar o **Status do problema** (por exemplo, marcar como "Resolvido").
- **Problemas manuais:** Clique no ícone **+** para adicionar problemas não detectados pela validação automática.
- **Aprovação:** Defina o status como **Aprovado** ou **Requer revisão**, adicione notas obrigatórias e clique em **Atualizar**.

![Supply Plan Review Interface](/img/media/image106.png)
*Figura 4: Versões do Plano de Fornecimento e Tela de Revisão*

### Notificações por e-mail
O QAT notifica automaticamente os usuários relevantes quando um plano é:
- **Enviado (Final):** Revisores notificados.
- **Revisão necessária:** Planejador notificado.
- **Aprovado:** Planejador e equipe notificados.

## Exportando e importando dados

### Exportando Programas
Use Exportar para salvar dados do programa em sua máquina para compartilhamento offline (por exemplo, via USB).
1. Vá para **Gerenciamento de Programas** > **Exportar Programa**.
2. Selecione o programa baixado no menu suspenso.
3. Escolha a criptografia:
   - **Criptografado (padrão):** Seguro; necessário para importar de volta para o QAT.
   - **Não criptografado:** Para análise de dados externos (por exemplo, Excel).
4. Clique em **Enviar** e selecione um local para salvar.

![Export Program Screen](/img/media/image110.png)
*Figura 5: Interface de exportação*

### Importando Programas
Use Importar para carregar um arquivo `.zip` em sua instância local do QAT.
1. Vá para **Gerenciamento de Programas** > **Importar Programa**.
2. Clique em **Procurar** e selecione o arquivo `.zip`.
3. Clique em **Avançar**, selecione o(s) programa(s) do arquivo e clique em **Importar**.

![Import Program Screen](/img/media/image111.png)
*Figura 6: Interface de importação*

## Comparação de versões (somente previsão)

Use a tela **Comparação de versões** para visualizar diferenças entre duas versões do mesmo programa de previsão.

1. Navegue até **Gerenciamento de programas** > **Comparação de versões**.
2. Selecione o programa e as duas versões que deseja comparar.
   - **Nota:** As versões finais estão marcadas com um asterisco (`*`).
   - Você pode comparar versões locais versus servidores e versões preliminares versus finais.
3. Revise a tabela de comparação, que resume a previsão selecionada, a quantidade prevista e as notas para cada combinação de unidade de planejamento/região.
4. (Opcional) Clique nos ícones no canto superior direito para exportar a comparação como **PDF** ou **CSV**.

![Version Comparison Interface](/img/media/image112.png)
*Figura 7: Comparação de versões de previsão*