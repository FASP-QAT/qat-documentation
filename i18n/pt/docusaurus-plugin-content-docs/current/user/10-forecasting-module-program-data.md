---
id: forecasting-module-program-data
title: "Módulo de Previsão: Dados do Programa"
sidebar_label: "Módulo de Previsão: Dados do Programa"
sidebar_position: 10
---
# Módulo de Previsão: Dados do Programa

## Introdução
Uma previsão é uma estimativa das quantidades de produtos exigidas pelos clientes em um período futuro. No QAT, a previsão segue um fluxo de trabalho estruturado: **Configuração** → **Seleção de metodologia** → **Entrada de dados** → **Análise e seleção**.

### Metodologias de Previsão
QAT suporta duas metodologias principais, que podem ser usadas individualmente ou combinadas para cada produto:

| Metodologia | Melhor para... | Requisitos |
| :--- | :--- | :--- |
| **Com base no consumo** | Programas maduros e estáveis ​​com dados confiáveis. | Mais de 24 meses de dados históricos de consumo. |
| **Baseado em árvore** | Novos programas, expansões ou demanda variável. | Dados de morbidade, serviço ou demográficos; tendências demográficas. |

Depois que as previsões são preparadas, elas são comparadas na seção **Análise de previsões** para selecionar o plano final.

## Informações do Programa
Os administradores do programa podem atualizar metadados básicos (Nome, Gerente, Notas) e alternar o status do programa (Ativo/Desativado).
> [!NOTA]
> Alterações na área técnica, organização ou nome de exibição exigem um [ticket de suporte técnico](05-getting-started.md#qat-helpdesk-and-tickets).

## Configurações de versão
A tela **Configurações de versão** permite que os usuários definam os parâmetros da previsão atual e revisem versões anteriores. Somente a **Versão Local** é editável; versões do servidor são somente leitura.

### Parâmetros Técnicos
- **Período de Previsão:** Defina a **Data de Início** e o **Número de Meses**. O QAT calcula automaticamente a **Data de término**.
- **Dias no mês:** Defina entre 15 e 31 dias (padrão: dias corridos). Útil para ajustar o consumo com base nos dias de serviço.
- **Porcentagem de frete:** Estimativa opcional para cálculos de custos de aquisição.
- **Limite de previsão:** Usado na tela **Comparar e selecionar**. QAT sinaliza previsões de árvore que se desviam significativamente (alta/baixa) das previsões de consumo. Os valores fora do limite são destacados em **Vermelho**.

### Histórico de versões
Os usuários podem visualizar o ciclo de vida histórico do programa e clicar com o botão direito em qualquer versão para visualizar o resumo da **Validação da previsão** (listando dados ausentes e notas de validação) sem fazer download dessa versão específica.

![Version Settings Interface](/img/media/image235.png)
*Figura 1: Conjunto de versões de previsão## Unidades de planejamento
A tela **Unidades de Planejamento** é onde você define os produtos a serem previstos. Os produtos podem ser adicionados manualmente ou copiados do módulo Planejamento de Fornecimento.

### Configurações da unidade de planejamento
Defina estas configurações para ativar metodologias e cálculos financeiros específicos:

| Configuração | Descrição | Impacto |
| :--- | :--- | :--- |
| **Fator de conversão** | Relação entre Unidade de Planejamento (PU) e Unidade de Previsão (FU). | Padroniza a entrada de dados entre unidades. |
| **Metodologia de previsão** | Alterne a metodologia **Consumo** e/ou **Árvore**. | Determina quais telas de entrada de dados estão ativas. |
| **Estoque disponível** | Saldo inicial no início do período de previsão. | Usado para calcular a lacuna de aquisição. |
| **Remessas Existentes** | Total de quantidades comprometidas para o período de previsão. | Reduz a lacuna total a ser preenchida. |
| **MOS desejado** | Nível de estoque alvo (meses de estoque) no final do período. | Define a meta para o cálculo da lacuna. |
| **Preço e Tipo** | Preço de catálogo ou preço personalizado por agente de compras. | Estima o custo total da lacuna de aquisição. |

> [!TIP]
> Sempre execute uma **Master Data Sync** após atualizar essas configurações para garantir que elas sejam propagadas para as telas de análise.
 Configurações da unidade de planejamento

## Unidades de Equivalência
**Unidades de Equivalência (EUs)** permitem agregar dados de produtos diferentes, mas relacionados (por exemplo, diferentes tamanhos de embalagens ou concentrações). Isso permite uma visão unificada da previsão na seção **Relatórios e resultados**.

### Mapeamento e Conflitos
- **Mapeamentos em nível de reino:** Mapeamentos universais fornecidos pela QAT.
- **Mapeamentos em nível de programa:** Substituições criadas por administradores de programa para necessidades específicas. Os mapeamentos em nível de programa sempre têm precedência.

### Exemplos de equivalência
Se um regime de tratamento requer 14 comprimidos de um produto OU 1 tubo de outro, ambos podem ser mapeados para um EU denominado “Regime de Tratamento”.

| Unidade de Equivalência | Unidade de previsão | Fator de conversão |
| :--- | :--- | :---: |
| Tratamento de regime | 1 comprimido do Produto A | 14 |
| Tratamento de regime | 1 tubo do Produto B | 1 |

### Gerenciando UEs
1. **Verifique os dados mestres:** Pesquise EUs existentes em **Realm Masters** > **Unidades de equivalência**.
2. **Adicionar EU personalizado:** Se não for encontrado, use **Gerenciar unidade de equivalência** para criar uma unidade específica do programa.
3. **Unidades do mapa:** Clique em **Adicionar linha** na tela principal para vincular suas unidades de previsão à UE.
4. **Sincronizar:** Clique em **Enviar** e execute uma **Sincronização de Dados Mestres**.

### Uso em relatórios
- **Comparar e selecionar:** Exibe a demanda total na UE em vez de unidades individuais.
- **Previsão Mensal:** Agregue produtos distintos em uma única linha de "necessidade total".
- **Planejamento de fornecimento:** Visualize o consumo real e previsto na UE para identificar tendências de alto nível.