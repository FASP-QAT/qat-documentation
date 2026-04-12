---
id: supply-planning-module-reports
title: "Supply Planning Module: Reports"
sidebar_label: "Supply Planning Module: Reports"
sidebar_position: 9
---
# Módulo de Planejamento de Suprimentos: Relatórios

Os relatórios QAT permitem ao usuário extrair e visualizar seus dados de planejamento de fornecimento em gráficos, tabelas e outros formatos visuais. O usuário também poderá navegar, classificar, filtrar e visualizar os dados para necessidades específicas. Os relatórios QAT produzem visualizações e exibem dados de uma forma que pode apoiar a tomada de decisões.

Os relatórios são divididos em **Relatórios Globais** e **Relatórios Específicos do Programa**. Os relatórios específicos do programa são exibidos offline e online. Porém, os Relatórios Globais são mostrados apenas no modo online e estão disponíveis apenas para Usuários Globais, como o Administrador do Realm e o Administrador da Aplicação.

**Observação:** Todos os relatórios QAT podem ser exportados para um arquivo Excel CSV, bem como para o formato PDF. Além disso, todos os gráficos permitem que o usuário passe o mouse sobre um visual para obter uma dica de ferramenta com mais informações.

## Lista de problemas do QAT
A **Lista de problemas do QAT** é uma ferramenta integrada de garantia de qualidade. Ele identifica inconsistências de dados e problemas de planejamento de fornecimento que devem ser resolvidos antes que um plano de fornecimento possa ser finalizado e carregado.

**Principais recursos:**
- **Recalcular:** Atualize a lista após fazer alterações na entrada de dados.
- **Níveis de criticidade:** Os itens são sinalizados como **Alto (Vermelho)**, **Médio (Laranja)** ou **Baixo (Amarelo)**.
- **Trilha de auditoria:** clique com o botão direito em um problema para visualizar notas internas e revisar o histórico.

### Status do problema
| Estado | Definição | Ação necessária |
| :--- | :--- | :--- |
| **Aberto** | Estado padrão para problemas novos ou sinalizados automaticamente. | Requer entrada de dados ou uma nota. |
| **Em conformidade** | Problema resolvido automaticamente através da entrada de dados. | Nenhum (fechado automaticamente). |
| **Endereçado** | Problema reconhecido com nota explicativa. | Nota é obrigatória. |
| **Resolvido** | O revisor confirma que o problema foi resolvido permanentemente. | Status apenas para revisor. |
| **Revisado** | O revisor inspecionou a entrada. | Status apenas para revisor. |

### Problemas e soluções comuns
- **Dados ausentes:** Consumo real ou contagens de estoque ausentes nos últimos 3 meses. *Solução: insira os dados ausentes.*
- **Lacunas de previsão:** valores de previsão ausentes nos próximos 18 meses. *Solução: Insira a previsão ou zeros se estiver descontinuando.*
- **Remessas Passadas:** Remessas com datas de "Recebimento" no passado que ainda estão marcadas como "Encomendadas" ou "Enviadas". *Solução: atualize o status para "Recebido".*
- **Violações de prazo de entrega:** Remessas que deveriam ter sido enviadas até uma determinada data. *Solução: atualize o status ou adie a data de recebimento.*
- **Violações de estoque:** Plano fica abaixo dos parâmetros Mínimo ou acima do Máximo. *Solução: Ajustar remessas ou consumo.*

![QAT Problem List Interface](/img/media/image198.png)
*Figura 1: Visão de alto nível da Lista de Problemas*

## Catálogo de Programas
O **Catálogo de Programas** fornece uma lista padronizada de todas as Unidades de Planejamento e Unidades de Previsão de um programa, incluindo seus atributos correspondentes.

**Navegação:** **Relatórios** > **Catálogo de Programas**.

## Relatórios de status de estoque
Esses relatórios fornecem diferentes perspectivas sobre a saúde do estoque ao longo do tempo.

### Status do estoque ao longo do tempo
Visualiza os níveis de estoque para uma ou mais unidades de planejamento em um período definido.
- **Dica:** limite a seleção a menos de 10 produtos para manter a clareza do gráfico.

### Matriz de status de estoque
Fornece um "mapa de calor" de alto nível do status do estoque (MOS ou Quantidade) em formato de grade.
- **Codificação Visual:**
  - **Vermelho:** Estocado.
  - **Laranja:** Estoque insuficiente.
  - **Verde:** Ideal.
  - **Amarelo:** Estoque excessivo.
  - **Cinza:** N/A (dados ausentes).

### Instantâneo do status do estoque
Uma visão pontual (mês único) de todas as unidades de planejamento em um programa.

### Instantâneo do status do estoque (global)
Semelhante ao Snapshot, mas permite comparações entre programas (acesso em nível de realm).

![Stock Status Matrix](/img/media/image209.png)
*Figura 2: Mapa de calor da matriz de status do estoque*

## Relatórios de consumo
Esses relatórios analisam como os produtos estão sendo usados em comparação com as previsões.

### Consumo (Global)
Visualiza o consumo em vários países para identificar tendências regionais.

### Erro de previsão (mensal e por unidade de planejamento)
Analisa a precisão da previsão usando o método **Erro percentual médio ponderado (WAPE)**.

**Principais métricas e recursos:**
- **Visuais:** Barras vermelhas (Real), Barras azuis (Previsão), Linha verde (% de erro).
- **Limites:** As porcentagens de erro que excedem o limite definido pelo Administrador do Programa são destacadas em **Vermelho**.
- **Consumo Ajustado:** Alterne para ver o consumo ajustado para dias de falta de estoque.
- **Fórmula WAPE:** Mede o desvio absoluto da previsão em relação ao real, ponderado pelo volume total.

![Forecast Error Report](/img/media/image213.png)
*Figura 3: Erro de previsão (mensal) com limite*

## Relatórios de Remessa
Esses relatórios rastreiam o volume de compras, custos e logística.

### Remessa (Global e Visão Geral)
Agrega dados de aquisição por fonte de financiamento, agente e país.
- **Global:** Visão de quantidades e custos entre países.
- **Visão geral:** Resumo de alto nível usando gráficos de pizza para distribuição de fontes de financiamento.

### Detalhes de envio e detalhes de custo
Fornece listas granulares de remessas com status e detalhes financeiros.
- **Tabela Resumo:** Custos por fonte de financiamento para o período selecionado.
- **Tabela detalhada:** Desagregado por unidade de planejamento e status do envio.

### Relatório de orçamento
Acompanha os gastos em relação aos orçamentos de programas predefinidos.
- **Visuais:** Mostra os fundos alocados versus os fundos restantes.
- **Multiprogramas:** Suporta orçamentos compartilhados entre vários programas.

### Prazo de entrega do agente de compras
Um relatório de referência mostrando os prazos de entrega estabelecidos para cada combinação de agente/unidade de planejamento.

![Shipment Details Report](/img/media/image221.png)
*Figura 4: Rastreamento detalhado da remessa*

## Relatórios de inventário
Esses relatórios monitoram o estoque disponível, os riscos de vencimento e a capacidade do armazém.

### Relatório de vencimentos
Fornece quantidades estimadas de produtos que expirarão no futuro com base no lote/prazo de validade.
- **Projeção:** Calcula o vencimento com base nas projeções de estoque e previsão de consumo.
- **Interativo:** Clique em uma quantidade expirada para abrir o **Batch Ledger**.

### Custo do estoque
Calcula o valor estimado do estoque disponível (real ou projetado) com base nos preços de catálogo.

### Giros de estoque
Mede a velocidade da cadeia de abastecimento (eficácia da gestão).
- **Turnos planejados:** Turnos alvo com base nas configurações de MIN e Intervalo de reordenamento.
- **Giros Reais:** Calculados com base no estoque e consumo médios.
- **Interpretação:** Rotações altas geralmente indicam uma cadeia de suprimentos mais saudável e mais responsiva.

### Relatório de ajuste de estoque
Lista todos os ajustes de estoque inseridos manualmente.
> [!NOTA]
> Os ajustes calculados automaticamente (a partir de discrepâncias na contagem de estoque) não são mostrados aqui.

### Capacidade do Armazém
Exibe a utilização do volume de armazenamento (m³) por região ou país. Requer acesso em nível de Realm para a visualização Global.

![Warehouse Capacity Report](/img/media/image232.png)
*Figura 5: Utilização da capacidade do armazém regional*