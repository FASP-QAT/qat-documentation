---
id: supply-planning-module-supply-planning
title: "Supply Planning Module: Supply Planning"
sidebar_label: "Supply Planning Module: Supply Planning"
sidebar_position: 8
---
# Módulo de Planejamento de Fornecimento: Planejamento de Fornecimento

## Planejamento de fornecimento: uma visão geral
A tela Planejamento de fornecimento é o ponto central onde o consumo, o estoque e as remessas convergem para os níveis de estoque do projeto.

**Quem:** Administradores de domínio/programa, revisores e usuários do programa.
**Quando:** A qualquer momento (suporte offline via PWA).

**Principais recursos da interface:**
- **Guias Local vs. Servidor:** Edite o **Plano de Fornecimento Local**; o **Plano de Fornecimento de Servidor** é somente leitura para comparação.
- **Tabela interativa:** Clique nas células para editar os dados diretamente ou visualizar pop-ups detalhados.
- **Legenda dinâmica:** alterne os elementos de dados no gráfico clicando nos itens da legenda.

### Cálculos de saldo de estoque
QAT usa uma lógica padrão para calcular a progressão mensal:

| Componente | Descrição | Indicador Visual |
| :--- | :--- | :--- |
| **Saldo inicial** | Estoque de início de mês. | **Negrito** = Real; Regular = Projetado. |
| **Saldo final** | Estoque de fim de mês. | **Negrito** = Real; Regular = Projetado. |
| **Demanda não atendida** | Estoque necessário, mas indisponível. | Captura cenários de ações "negativos". |

### Legenda do status do estoque
O status do estoque é codificado por cores com base no método de planejamento:
- **Plano por MOS:** Transições: **Esgotamento (Vermelho)** → **Subestoque (Amarelo)** → **Ideal (Verde)** → **Excesso de estoque (Azul)**.
- **Planejar por quantidade (Mín/Máx):** Codificado por cores com base nas quantidades mínimas definidas pelo usuário e nas quantidades máximas calculadas.

![Supply Planning Interface](/img/media/image153.png)
*Figura 1: Visualização do plano por meses de estoque (MOS)*

## Planejamento de Fornecimento: Consumo e Embarques
A tabela Planejamento de Fornecimento permite controle granular sobre as transações.

### Consumo
- **Consumo Previsto:** Texto roxo em itálico.
- **Consumo Real:** Texto em preto e sem itálico.

**Para editar o consumo:**
1. Clique na célula do mês na linha **Consumo**.
2. No pop-up, edite as quantidades por região.
3. Clique em **Enviar** para atualizar o plano.

### Remessas
As remessas são agregadas por padrão. Clique em **+** ao lado de **Remessas** para expandir para:
- **Sugerido:** Calculado automaticamente pelo QAT para manter os níveis de estoque.
- **Planejado, enviado, enviado, chegado, recebido:** Marcos rastreados.

#### Indicadores Visuais
| Ícone | Significado |
| :--- | :--- |
| **Triângulo Vermelho** | Envio de emergência (dentro do prazo de entrega). |
| **Ícone de link** | Remessa vinculada ao ERP (somente leitura). |
| **Ícone L** | Aquisições locais. |
| **Célula Verde** | Várias remessas no mesmo mês. |

#### Lógica de Remessas Sugeridas
A QAT sugere remessas para manter o plano entre os níveis **Mínimo** e **Máximo**.
- **Gatilho:** Se o estoque cair abaixo do mínimo por 3 meses consecutivos.
- **Quantidade:** Calcula a quantidade necessária para atingir o nível **Máx**.

**Para converter uma sugestão em um pedido planejado:**
1. Clique na célula da linha **Sugerida**.
2. Atualize o status e clique em **Enviar**.

![Shipment Details Pop-up](/img/media/image174.png)
*Figura 2: Editando Detalhes da Remessa*

## Planejamento de Fornecimento: Estoque e Ajustes
O estoque e os ajustes podem ser gerenciados diretamente na tabela de planejamento de fornecimento.

**Para adicionar/editar registros:**
1. Clique na célula do mês na linha **Ajustes** ou **Saldo Final**.
2. No pop-up, ajuste as quantidades por região.
3. **Contagem de estoque:** inserir uma contagem de estoque irá **negrito** o saldo final e substituirá as projeções.
4. **Ajustes:** Notas são necessárias para todas as entradas de ajustes.

### Projetando Expirações
A linha **Estoque expirado projetado** destaca perdas potenciais.
- **Ação:** Clique em uma célula para ver os **Detalhes de expiração**.
- **Correção:** Clique no número do lote para ir para a remessa de origem e atualizar a data de vencimento ou a quantidade.
- **Ledger de lote:** Clique na célula **Quantidade expirada** para visualizar o histórico completo mês a mês desse lote.

![Expiry Management Pop-up](/img/media/image189.png)
*Figura 3: Detalhes de expiração do lote*

## Planejamento de cenário
O Planejamento de Cenário permite aos usuários simular alterações em seu plano de fornecimento sem alterar a versão atual.

**Cenários disponíveis:**
- **Alterações no Consumo:** Aumente ou diminua o consumo previsto em uma porcentagem fixa.
- **Phase In/Out:** Interpolação linear entre dois valores de consumo durante um período definido.
- **Limpeza de remessa:** Remova em massa remessas não financiadas, planejadas ou enviadas que violam os prazos de entrega.
- **Replanejar:** Gera automaticamente novas remessas para resolver violações de nível de estoque.

**Para usar cenários:**
1. Navegue até **Planejamento de fornecimento** > **Planejamento de cenário**.
2. Selecione um cenário no menu suspenso e configure os parâmetros.
3. Clique em **Adicionar** para visualizar o impacto.
4. Se estiver satisfeito, clique em **Enviar** para salvar o cenário como uma nova versão do plano de fornecimento.

![Scenario Planning interface](/img/media/image191.png)
*Figura 4: Comparação de cenários*

## Relatório do Plano de Fornecimento
O Relatório do Plano de Fornecimento fornece uma visão abrangente do status do estoque em um ou vários programas.

### Visualizações de relatórios
- **Programa Único:** Visualização detalhada de um programa e unidade de planejamento.
- **Multiprogramas:** Agrega dados para a mesma unidade de planejamento em vários programas.
- **Unidade de Equivalência (UE):** Agrega diferentes unidades de planejamento usando fatores de conversão padronizados (por exemplo, CYP ou Meses de Pacientes ARV).

**Navegação:** **Planejamento de Fornecimento** > **Relatório do Plano de Fornecimento**.

**Principais recursos:**
- **Visualizações tabulares e gráficas:** os dados são apresentados como um gráfico interativo e uma tabela de dados detalhada.
- **Remessas Desagregadas:** Veja detalhes de remessas individuais (Fonte de Financiamento, Status, Agente de Compras) diretamente na tabela.
- **Exportação:** Suporta exportações de PDF e CSV com várias opções de agregação.

![Supply Plan Report](/img/media/image193.png)
*Figura 5: Relatório do Plano de Fornecimento do Programa Único*