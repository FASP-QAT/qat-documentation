---
id: forecasting-module-reports-and-outputs
title: "Módulo de Previsão: Relatórios e Resultados"
sidebar_label: "Módulo de Previsão: Relatórios e Resultados"
sidebar_position: 12
---
# Módulo de Previsão: Relatórios e Resultados

Após definir suas metodologias e parâmetros, a etapa final é comparar os modelos disponíveis, selecionar a previsão mais precisa e revisar os requisitos de aquisição resultantes.

## Compare e selecione
**Navegação:** **Árvore de previsão** > **Comparar e selecionar**.

Esta tela permite comparar múltiplas previsões (com base no consumo vs. com base na árvore) lado a lado para fazer sua seleção final.

### Principais métricas para seleção
- **Erro de previsão (%):** Usa o cálculo **WAPE**. Um destaque verde indica o modelo com menor erro histórico.
- **Comparar com o consumo:** Para previsões de árvores, o QAT sinaliza se a produção é significativamente maior ou menor do que as tendências históricas de consumo. O texto em vermelho indica que a variação excede os limites definidos.
- **Auditoria visual:** use o **Gráfico** para ver a tendência das diferentes previsões em relação aos valores reais históricos. A linha em negrito representa o modelo atualmente selecionado.

### Regras de seleção
- **Uma região por vez:** A seleção é realizada por Unidade de Planejamento e Região.
- **Múltiplas Árvores:** Você pode selecionar e agregar múltiplas previsões de árvores (por exemplo, para diferentes grupos de pacientes).
- **Exclusividade mútua:** Você não pode combinar uma previsão baseada em consumo com uma previsão baseada em árvore para a mesma região/unidade.

> [!TIP]
> Use o botão **Mostrar dados** abaixo do gráfico para ver os dados mensais em formato tabular. Os valores roxos em itálico indicam o período oficial de previsão.

---

## Previsão Mensal
**Navegação:** **Árvore de previsão** > **Previsão Mensal**.

Use este relatório para verificar agregadas as previsões finais selecionadas. É a principal ferramenta para uma verificação final de sanidade antes de terminar a quantificação.

- **Agregação:** soma automaticamente as previsões regionais em um total nacional.
- **Unidades de Equivalência (EUs):** Veja a previsão em UEs (por exemplo, "Meses de Tratamento Padrão") para comparar diferentes variantes de produtos.
- **Visualizações de análise:** alterne entre unidades de planejamento e unidades de previsão ou agregue dados por calendário/ano fiscal.

---

## Resumo da previsão
**Navegação:** **Árvore de previsão** > **Resumo da previsão**.

Esta tela fornece duas visualizações de alto nível dos resultados de quantificação durante todo o período de previsão.

### 1. Visão Regional
- Fornece uma visão geral em estilo de planilha de todas as unidades de planejamento em todas as regiões.
- Você pode atualizar diretamente os métodos de previsão ou adicionar notas justificativas nesta tabela.

### 2. Visão Nacional (Análise de Gap)
Esta visualização fornece uma análise de excedentes/lacunas de compras de alto nível com base em sua previsão e nos dados de fornecimento existentes.

> [!AVISO]
> Esta é uma ferramenta de alto nível. Para planejamento de fornecimento granular (programação de remessa, rastreamento de prazo de validade), você deve importar essa previsão para o módulo **Planejamento de fornecimento**.

#### Fórmulas e Lógica
QAT usa a seguinte lógica para estimar as necessidades de aquisição:

1. **Estoque projetado** = (Estoque inicial + Remessas existentes) - Quantidade prevista
2. **Estoque desejado** = (Quantidade prevista × Meses de estoque desejado) / Meses no período
3. **Gap nas compras** = Estoque projetado - Estoque desejado

#### Estimativa de custos
Se existir uma lacuna, o QAT estima os custos com base nos preços unitários definidos e nas porcentagens de frete:
- **Custo do Produto** = Lacuna de Aquisição × Preço Unitário
- **Custo do frete** = Custo do produto ×% do frete
- **Custo Total** = Custo do Produto + Custo do Frete