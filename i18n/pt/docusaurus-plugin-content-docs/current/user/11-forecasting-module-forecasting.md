---
id: forecasting-module-forecasting
title: "Módulo de Previsão: Previsão"
sidebar_label: "Módulo de Previsão: Previsão"
sidebar_position: 11
---
# Módulo de Previsão: Previsão

## Previsões de consumo
As previsões baseadas no consumo utilizam dados históricos para projetar a procura futura. Este método é ideal para programas estáveis ​​com pelo menos 24 meses de dados de consumo mensal confiáveis.

**O fluxo de trabalho:**
1. **Importação/Entrada:** Traga valores reais históricos do módulo Planejamento de Fornecimento ou insira-os manualmente.
2. **Ajustar:** Considere relatórios insuficientes, rupturas de estoque e pontos de dados ausentes.
3. **Extrapolar:** Aplicar modelos estatísticos para projetar o “Consumo Ajustado” no futuro.

### Entrada e importação de dados
Você pode preencher dados reais históricos por meio de dois métodos:

#### Método 1: Importar do Plano de Fornecimento
**Navegação:** **Previsão Baseada em Consumo** > **Importar do Plano de Fornecimento QAT**.
- **Mapeamento:** Vincule unidades do Plano de Fornecimento a unidades de Previsão. Você pode usar a opção "Não importar todos os não mapeados" para grandes conjuntos de dados.
- **Divisão Regional:** Selecione quais regiões importar e o percentual de consumo atribuir à previsão.
- **Tratamento de conflitos:** Os dados já presentes são destacados em **Amarelo**. A importação substituirá os registros existentes.

#### Método 2: entrada manual de dados
**Navegação:** **Previsão Baseada em Consumo** > **Inserção de Dados e Ajustes**.
- **Interface:** Selecione o programa e o período de revisão (padrão: últimos 36 meses).
- **Expansão:** expanda as linhas para detalhar os dados regionais.
- **Conversão de Unidades:** Use o link "alterar" para alternar a entrada entre Unidades de Planejamento (PU) ou Unidades de Previsão (FU).

![Data Entry Interface](/img/media/image242.png)
*Figura 1: Tabela histórica de entrada de dados de consumo*

### Ajustes estatísticos
Os dados brutos devem ser limpos para criar uma série confiável de “Consumo Ajustado”. QAT lida com três tipos de ajustes:

#### 1. Subnotificação
Se o reporte for inferior a 100%, o QAT inflaciona o consumo proporcionalmente, assumindo que as instalações que não reportam consomem à mesma taxa que as que reportam.

#### 2. Roturas de estoque
O QAT ajusta o consumo por dias sem estoque para estimar a demanda real.
- **Taxa de falta de estoque** = `Stocked Out (Days)` / `Days in Month`
- **Consumo Ajustado** = `Actual Consumption` / `Reporting Rate` / (1 - `Stock Out Rate`)

#### 3. Valores ausentes (interpolação)
O botão **Interpolar** preenche lacunas nos seus dados usando uma fórmula linear entre os valores conhecidos mais próximos.
> [!NOTA]
> O QAT não interpolará meses onde o consumo real for zero (pois este pode ser um ponto de dados válido). Ele apenas preenche células "ausentes" em branco.

### Conceitos de Extrapolação
A QAT oferece diversos modelos estatísticos para projetar a demanda futura. Escolha um modelo com base na disponibilidade de dados e nos padrões de consumo:

- **Modelos simples (dados de mais de 3 meses):**
  - **Média Móvel:** Melhor para dados estáveis sem tendências fortes ou sazonalidade.
  - **Semimédias/regressão linear:** Melhor para identificar crescimento ou declínio constante (tendências).
- **Modelos Avançados:**
  - **ARIMA (dados de mais de 13 meses):** Modelo flexível que leva em conta tendências e ciclos sazonais.
  - **Suavização exponencial tripla (dados de mais de 24 meses):** Melhor para dados complexos com tendências fortes e sazonalidade anual.

### Interpretando erros de previsão
O QAT calcula diversas métricas de erro para ajudá-lo a selecionar o melhor ajuste.

| Métrica | Definição | Melhor usado para... |
| :--- | :--- | :--- |
| **MAPE** | Erro percentual médio absoluto. | Comparando a precisão em diferentes escalas de dados. |
| **WAPE** | Erro percentual absoluto ponderado. | Conjuntos de dados com valores baixos ou intermitentes. |
| **RMSE** | Erro quadrático médio da raiz. | Destacando e penalizando grandes valores discrepantes. |
| **R²** | Coeficiente de Correlação. | Medir quão bem o modelo se ajusta aos padrões históricos. |

---

## Previsões de árvores
A previsão baseada em árvore é um método flexível usado quando o consumo histórico não está disponível ou não é confiável. Ele oferece suporte a metodologias de **morbidade, serviços e demografia**, permitindo que você construa uma "árvore" lógica de motivadores que resultam na demanda do produto.

### Construindo e gerenciando árvores
**Navegação:** **Árvore de previsão** > **Gerenciar árvore**.

Você pode gerenciar suas árvores através das seguintes ações:
- **Desenhe o seu próprio:** Comece com uma tela em branco.
- **Modelo:** Use uma estrutura de árvore predefinida (por exemplo, para programas de saúde específicos).
- **Duplicar:** Copie uma estrutura de árvore existente para outro programa (requer o download de ambos os programas).
- **Tabela em árvore:** acesse uma visualização semelhante a uma planilha para edição em massa de valores de nós sem alterar a estrutura.

> [!NOTA]
> As árvores são salvas localmente primeiro. Você deve **Fazer upload da versão** para salvar seu trabalho no servidor.

### Tipos e hierarquia de nós
Uma árvore é construída de cima para baixo usando tipos de nós específicos. Cada árvore deve terminar em **Unidades de planejamento** para gerar uma previsão.

| Tipo de nó | Função | Crianças permitidas | Opções Avançadas |
| :--- | :--- | :--- | :---: |
| **∑ Agregação** | Resume todas as crianças. | Agregação, Número. | - |
| **# Número** | Um valor fixo (por exemplo, população total). | Porcentagem, FU. | ⇅, Transferência |
| **% Porcentagem** | Uma porcentagem do valor pai. | Porcentagem, FU. | ⇅, Transferência |
| **Funil** | Soma valores de nós de origem vinculados. | Porcentagem, FU. | - |
| **FU (Unidade de Previsão)** | Parâmetros de uso (Contínuo/Discreto). | Unidade de Planejamento. | ⇅, atraso |
| **PU (Unidade de Planejamento)** | A saída final do produto. | Nenhum. | Substituir |

#### Ações do nó
- **Excluir:** Remove o nó e todos os seus filhos.
- **Copiar/Mover:** realoca uma ramificação para uma árvore ou pai diferente.
- **Adicionar modelo de ramificação:** Insere uma ramificação predefinida (por exemplo, um regime medicamentoso padrão).
- **Recolher/Expandir:** Simplifica a visualização visual da árvore.

### Atributos do nó
Cada nó possui campos editáveis que definem seu valor e comportamento:

- **#Nó Número:** Defina a **Unidade do Nó** (pacientes, pessoas, etc.) e seu **Valor** para um mês inicial específico.
- **Nó% Porcentagem:** Defina a porcentagem do valor pai. QAT usa isso para calcular o valor absoluto do nó.
- **Nó Unidade de Previsão (FU):**
  - **Tipo de Uso:** 
    - **Contínuo:** Uso diário/semanal (por exemplo, um comprimido por dia).
    - **Discreto:** Uso ocasional (por exemplo, 5 frascos por curso de tratamento).
  - **Atraso:** Atrasa o início do uso do produto em relação ao driver pai (por exemplo, o uso do produto começa 2 meses após o diagnóstico).
- **Nó da Unidade de Planejamento (PU):** O padrão é a conversão do sistema, mas pode ser substituído manualmente, se necessário.

### Mudanças Dinâmicas (Modelagem e Transferências)
As árvores não são estáticas; os valores podem mudar ao longo do tempo para refletir o crescimento ou as transições do programa.

#### 1. Tipos de modelagem
| Tipo | Comportamento | Melhor usado para... |
| :--- | :--- | :--- |
| **Linear (#)** | Adiciona/subtrai um número fixo a cada mês. | Crescimento local constante. |
| **Linear (%)** | Adiciona/subtrai uma% fixa do valor *inicial*. | Taxas de crescimento consistentes. |
| **Exonencial (%)** | Multiplica o mês *anterior* por uma porcentagem. | Compondo o crescimento. |
| **Linear (% ponto)** | Ajusta o valor de um nó percentual (por exemplo, 30% -> 31%). | Mudanças na participação de mercado. |

#### 2. Transferências
As transferências vinculam dois nós do mesmo nível (para nós Number) ou do mesmo pai (para nós Percentage). À medida que o nó “Origem” diminui, o nó “Destino” aumenta proporcionalmente. Isto é essencial para transições de regime.

#### 3. Sazonalidade e alterações manuais
Você pode refinar ainda mais os dados mensais clicando em **Mostrar dados mensais**:
- **Índice de sazonalidade:** Insira uma porcentagem (por exemplo, `20%` para um aumento de 20% em relação à linha de base) para refletir a demanda cíclica.
- **Alteração manual:** Substitua o valor de um mês específico para eventos únicos (por exemplo, uma campanha massiva de drogas).

### Calculadora de Modelagem
Se você não sabe a taxa mensal, use a **Calculadora de modelagem** (⇅) para derivá-la:
- **Valor final:** Insira seu valor inicial, data prevista e valor alvo final. QAT calcula a taxa mensal.
- **Meta Anual:** Insira uma meta cumulativa anual (Real + Ano Almejado). O QAT interpola uma transição mensal suave para evitar padrões de "escada".

### Técnicas Avançadas
#### Atraso no uso
Disponível em **Nós FU**. Use o campo **Lag** para atrasar o uso do produto em relação ao driver pai. 
- *Exemplo:* Se os pacientes forem diagnosticados no Mês 1, mas iniciarem o tratamento no Mês 3, insira um atraso de `2`.

#### Métodos de cálculo (uso discreto)
- **Tudo no primeiro mês:** Antecipa a quantidade total do curso de tratamento no primeiro mês do paciente. (Padrão)
- **Mês a mês:** Distribui o uso pela duração do curso (por exemplo, 1 comprimido/mês durante 6 meses).

#### Nós de funil
Os nós de funil permitem agregar nós de origem de diferentes ramificações — ou até mesmo de árvores diferentes — em um único fluxo para cálculos adicionais.
- *Caso de uso:* Diferentes grupos demográficos (adultos, crianças) que usam os mesmos instrumentos de teste de carga viral.

### Validações e modelos
#### Validações
- **Validação de modelagem:** Gráficos que mostram como seus motivadores (população, pacientes) mudam ao longo do tempo.
- **Validação do produto:** Visualização agregada de todas as unidades de planejamento na árvore para verificações de consistência.

#### Modelos
- **Modelos de árvore:** Estruturas globais pré-construídas para programas padrão (por exemplo, árvores de morbidade por malária).
- **Modelos de filial:** Ramos reutilizáveis ​​específicos do regime (por exemplo, "Regime padrão de primeira linha para adultos").
- **Modelos de uso:** Predefinições para nós FU (parâmetros discretos/contínuos) para garantir consistência em toda a equipe.