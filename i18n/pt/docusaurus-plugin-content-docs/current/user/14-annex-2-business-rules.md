---
id: annex-2-business-rules
title: "Anexo 2: Regras de Negócios"
sidebar_label: "Anexo 2: Regras de Negócios"
sidebar_position: 14
---
# Anexo 2: Regras de Negócios

Este anexo documenta as principais fórmulas matemáticas e condições lógicas que orientam os cálculos do QAT, sugestões de planejamento de fornecimento e verificações de qualidade de dados.

## Módulo de planejamento de suprimentos

### 1. Noções básicas de inventário
- **Saldo inicial**: `Opening Balance(t) = Ending Balance(t-1)`. (O padrão do primeiro mês é 0).
- **Estoque Expirado**: `Sum(Ending Balance of batches expiring in month t)`.
- **Total de Remessas**: `Sum(Quantities where Receive Date is in month t)`.
- **Inventário projetado**: `Opening Balance + Total Shipments ± Total Adjustments - Final Consumption - Expired Stock`.

### 2. Estoque e Consumo Final
- **Estoque Final**: Soma do estoque reportado em todas as regiões.
- **Ajustes totais**: Soma dos ajustes manuais de regiões que *não* informaram uma contagem de estoque.
- **Consumo Final**:
  - *Se todas as regiões reportaram valores reais:* `Sum(Actual Consumption)`.
  - *Se alguma região estiver faltando valores reais:* `MAX(Sum(Actual Consumption), Sum(Forecasted Consumption))`.

### 3. Parâmetros do Plano de Fornecimento
- **AMC (Consumo Médio Mensal)**: `[Sum(Full Demand in Past Window) + Sum(Full Demand in Future Window)] / Total Months`.
- **MOS mínimo**: `MAX(Program Min MOS, Realm Min MOS Guardrail)`.
- **MOS máx.**: `MIN(MAX(Min MOS + Reorder Interval, Realm Min Max Guardrail), Realm Max Max Guardrail)`.
- **Estoque mínimo**: `AMC × Min MOS`.
- **Estoque máximo**: `AMC × Max MOS`.
- **Saldo final**: 
  - Se todas as regiões reportaram estoque: `Final Stock`.
  - Caso contrário: `Projected Inventory + Auto Adjustment`.

### 4. Sugestões de Envio (Plano por MOS)
QAT sugere uma remessa quando `MOS` para o mês atual e os dois meses seguintes forem menores que `Min MOS`.
- **Quantidade sugerida**: `Max Stock - Ending Balance + Unmet Demand`.

---

## Lógica de alocação de lote (FEFO/LEFO)

### FEFO (primeiro vencimento, primeiro a sair)
Usado para consumir estoque com base nas primeiras datas de vencimento.
1. Classifique todos os lotes por **Data de Validade** (asc).
2. Calcular **Consumo Não Alocado** (Consumo Final - Ajustes).
3. Percorrer lotes:
   -`Batch Ending Balance = MAX(0, Batch Temp Balance - Unallocated Consumption)`.
   - Subtraia a quantidade consumida do pool total de `Unallocated Consumption`.

### LEFO (último vencimento, primeiro a sair)
Utilizado principalmente para distribuição de ajustes (perdas) negativos.
1. Classifique os lotes por **Data de Validade** (desc).
2. Deduza primeiro as quantidades dos lotes mais recentes até que o ajuste seja totalmente alocado.

---

## Lógica da lista de problemas QAT (QPL)

### Qualidade dos dados
| Problema | Sugestão | Lógica |
| :--- | :--- | :--- |
| **Reais ausentes** | Insira o consumo real. | Sinalizado se os dados reais estiverem faltando por mais de três meses consecutivos. |
| **Inventário ausente** | Insira a contagem de estoque. | Sinalizado se nenhuma contagem de estoque for informada por mais de 3 meses consecutivos. |
| **Remessas anteriores** | Atualizar data de recebimento. | Sinalizado se a data prevista de uma remessa for >14 dias atrás. |

### Planejamento de Fornecimento
| Problema | Sugestão | Lógica |
| :--- | :--- | :--- |
| **Previsão ausente** | Estender o período de previsão. | Sinalizado se algum dos próximos 18 meses não tiver previsão. |
| **Previsão Não Dinâmica** | Revise a sazonalidade. | Sinalizado (para ARV/Malária) se 4+ meses consecutivos tiverem valores idênticos. |
| **Violação Mín/Máx** | Reavaliar o plano de fornecimento. | Sinalizado se o MOS estiver fora dos parâmetros Mín/Máx dentro de 18 meses. |

---

## Metodologia de Previsão

### Ajustes estatísticos
- **Taxa de Estoque**: `(Stockout Days / Days in Month) × 100`.
- **Consumo Ajustado**: `(Actual Consumption / Reporting Rate) / (1 - Stockout Rate)`.
- **Interpolação**: `y = y0 + (x - x0) * (y1 - y0) / (x1 - x0)`. (Linha reta entre dois pontos conhecidos).

### Métricas de erro
- **WAPE**: `Sum(ABS(Actual - Forecast)) / Sum(Actual)`. (Calculado para uma janela de 6 meses).
- **RMSE**: `SQRT(Sum((Forecast - Actual)²) / N)`.
- **R²**: `1 - (SSR / SST)`. Mede o quão próximo o modelo acompanha os padrões históricos (0 a 1).

---

## Resolução de conflitos de versão
Ao fazer upload de uma versão local, o QAT compara:
- **Servidor (Antigo)**: A versão baixada originalmente.
- **Local**: sua versão editada.
- **Servidor (mais recente)**: Versão atual no servidor (pode ter sido atualizada por outros).

### Estados de conflito
- **Verde (Local mais recente)**: Os dados existem apenas na versão local ou foram modificados apenas localmente.
- **Azul (Servidor mais recente)**: Os dados foram modificados apenas no servidor desde que você os baixou.
- **Amarelo (Conflito)**: O registro *mesmo* foi modificado nas versões local e servidor. Você deve escolher qual manter.
- **Não destacado**: nenhuma alteração detectada entre versões.