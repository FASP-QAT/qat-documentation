---
id: overview
title: "Visão geral"
sidebar_label: "Visão geral"
sidebar_position: 4
---
# Visão geral

## Introdução

O programa Cadeia Global de Abastecimento de Saúde – Aquisição e Gestão de Abastecimento (GHSC-PSM) é um projeto oficial da Agência dos Estados Unidos para o Desenvolvimento Internacional (USAID). Implementado pela Chemonics International e pelos membros do seu consórcio, o GHSC-PSM garante o fornecimento ininterrupto de produtos de saúde para apoiar iniciativas de saúde pública financiadas pelo governo dos EUA em todo o mundo.

A iniciativa de modernização da ferramenta de Previsão e Planeamento de Abastecimento (FASP) foi apoiada pelo Plano de Emergência do Presidente dos EUA para o Alívio da SIDA (PEPFAR), pela Iniciativa do Presidente dos EUA contra a Malária (PMI), pelo programa de Planeamento Familiar e Saúde Reprodutiva (FP/RH) da USAID e pelo programa de Saúde Materna e Infantil (MCH) da USAID.

### Antecedentes e Objetivos
Projetos anteriores financiados pela USAID, como Sistemas de Gestão da Cadeia de Abastecimento (SCMS) e DELIVER, implementaram com sucesso um conjunto de ferramentas FASP. No entanto, essas ferramentas muitas vezes eram isoladas, tinham interfaces de usuário inconsistentes e exigiam troca manual de dados.

O objetivo principal desta iniciativa era construir uma plataforma FASP de próxima geração que fosse:
- **Escalável e modular**: construído em uma arquitetura moderna e independente de sistema operacional.
- **Baseado na Web com recursos off-line**: garantindo acessibilidade mesmo em ambientes de baixa conectividade.
- **Interoperável**: Projetado para compartilhamento contínuo de dados entre partes interessadas e sistemas de saúde pública.
- **Centrado no usuário**: Focado na usabilidade e na automação para impulsionar a visibilidade de dados de ponta a ponta e a tomada de decisões baseada em evidências.

## Previsão vs. Planejamento de Fornecimento

- **Previsão**: Uma estimativa ou previsão das quantidades de produtos a serem consumidos por clientes ou consumidores em um período futuro.
- **Planejamento de fornecimento**: O componente do gerenciamento da cadeia de suprimentos focado no cumprimento dos requisitos do plano de demanda. O objectivo é equilibrar a oferta e a procura para cumprir os objectivos financeiros e de prestação de serviços do programa de saúde.

## O que é QAT e o que ele pode fazer por você?

A Quantification Analytics Tool (QAT) é uma solução modernizada para previsão e planejamento de fornecimento liderados pelo país. QAT aproveita tecnologias avançadas para aprimorar a funcionalidade de ferramentas legadas como PipeLine e Quantimed, fornecendo:
- **Previsões flexíveis**: Estruturas de árvores personalizáveis e metodologias avançadas de extrapolação (ARIMA, Holt-Winters, etc.).
- **Planejamento de cenário**: ferramentas robustas para modelar e comparar diferentes cenários da cadeia de suprimentos.
- **Funcionalidade off-line**: entrada e gerenciamento de dados confiáveis ​​sem uma conexão de rede constante.
- **Padronização**: gerenciamento de dados mestre para gerar consistência em todos os programas.

### Funções principais
- **Previsões**: previsões multimétodos, comparação visual de resultados e ferramentas de consenso das partes interessadas.
- **Monitoramento**: Acompanhamento em tempo real de saldos de estoque, parâmetros de estoque mínimo/máximo e identificação automatizada de problemas (por exemplo, deficiências pendentes).
- **Planejamento de compras**: cálculos de déficit, rastreamento de ações com base no lead time e modelagem estimada de custos de remessa/frete.

## Quem deve usar o QAT?

O QAT capacita os gerentes de programas locais a assumirem o controle de suas próprias previsões e planejamento de aquisições. Embora os gestores dos programas sejam os principais utilizadores, o sistema fornece informações vitais para os decisores políticos, diretores nacionais, adquirentes e doadores.

| Prazo | Definição |
| :--- | :--- |
| **Unidade Reportante Alternativa (ARU)** | O produto e a unidade em que os dados de um país (consumo ou estoque) são relatados. Isso pode ser diferente da unidade de planejamento. QAT permite aos usuários definir uma ARU e um fator de conversão (multiplicador) para a unidade de planejamento. Por exemplo, se a unidade de planejamento for um frasco de 30 comprimidos e o estoque for relatado em caixas de 20 frascos, o multiplicador será 20. Consulte a Seção 4.A3 (Unidade Alternativa de Relatório) para obter detalhes. |
| **Consumo Médio Mensal (AMC)** | Um valor dinâmico calculado mês a mês com base no uso médio do produto durante um período específico. Por padrão, o QAT calcula o AMC usando os últimos três meses, o mês atual e os próximos dois meses. Os dados mensais ausentes são tratados como "nulos" em vez de zero. Os administradores podem ajustar a janela de cálculo até 12 meses no passado e no futuro.<br/>![AMC Formula](/img/media/image6.png) |
| **Fonte de dados** | A origem dos dados inseridos no QAT. As fontes de dados devem ser aplicadas a todos os registros transacionais (Consumo, Estoque, Ajustes e Remessas). A seleção depende do tipo de fonte de dados específico do registro. |
| **Planejamento de recursos empresariais (ERP)** | O QAT foi projetado para interagir com vários sistemas de gerenciamento de compras (ERPs). Actualmente, uma interface com o ARTMIS permite a importação directa de dados de produtos e remessas da USAID, o que reduz os esforços de planeamento manual através da actualização automática de datas e estados de entrega. |
| **Fonte de financiamento** | Qualquer instituição ou entidade financeira que forneça instalações ou financiamento para o programa. Cada remessa deve receber uma fonte de financiamento. |
| **Prazos de entrega** | Mapeados para status de planejamento de fornecimento, os prazos de entrega são inseridos por produto, agente de compras ou programa. Os cálculos incluem:<br/>- **Planejado para Enviado**: Tempo desde a identificação de uma necessidade até a entrada no sistema de compras.<br/>- **Enviado para Aprovado**: Tempo desde a entrada até a aprovação da aquisição.<br/>- **Aprovado para Enviado**: Tempo desde a aprovação até o envio do fornecedor.<br/>- **Enviado para Chegado (Marítimo/Aéreo)**: Trânsito tempo até o porto de entrada.<br/>- **Chegou ao Recebido**: Tempo para desembaraço aduaneiro e entrega no destino final. |
| **Níveis de estoque mínimo e máximo** | **O nível mínimo de estoque** (em meses) é determinado por unidade de planejamento no nível do programa. <br/>![Min Stock Formula](/img/media/image7.png)<br/>**O nível de estoque máximo** é calculado dinamicamente como o nível de estoque mínimo mais o intervalo de novo pedido.<br/>![Max Stock Formula](/img/media/image8.png) |
| **Quantidade mínima de pedido (MOQ)** | O número mínimo de unidades em que um produto deve ser pedido. |
| **Meses de estoque (MOS)** | Uma medida dos níveis de estoque em relação ao consumo, conceitualmente semelhante ao PipeLine, mas usando a metodologia QAT AMC atualizada.<br/>![MOS Formula](/img/media/image9.png) |
| **Plano por MOS** | Mais adequado para produtos de alto consumo com prazos de validade mínimos, onde as remessas substituem principalmente o estoque consumido. O planejamento se concentra na manutenção de parâmetros de estoque baseados em meses. Consulte a Seção 4.A2 para configuração. |
| **Planejar por Quantidade** | Mais adequado para produtos de baixo consumo e com altas taxas de validade (por exemplo, medicamentos de emergência). O planejamento se concentra na manutenção de uma quantidade fixa de estoque (por exemplo, 2 unidades por instalação) em vez de meses de estoque. Consulte a Seção 4.A2 para configuração. |
| **Intervalo de novo pedido** | O número de meses definido pelo usuário entre remessas (o padrão é 1 mês). Este valor é usado para calcular os níveis máximos de estoque para planejamento MOS e baseado em quantidade. |
| **Status da remessa** | Acompanhamento de uma remessa ao longo de seu ciclo de vida por meio de nove status: Sugerido (aviso automático), Planejado (confirmado para projeção), Enviado (pedido), Aprovado, Expedido, Chegado (no porto), Recebido (no destino), Cancelado e Em espera. |
| **Demanda não atendida** | Quantidades que teriam sido consumidas se houvesse estoque disponível. QAT rastreia a demanda não atendida separadamente quando:<br/>a) O consumo previsto excede o estoque disponível.<br/>b) O consumo real inclui períodos de ruptura de estoque.<br/>c) Um ajuste negativo

o investimento excede o saldo final projetado. |
| **Volumetria** | Recurso que permite aos usuários definir volumes de produtos para estimar o tamanho físico total e os requisitos logísticos dos pedidos. |

| Grupo de usuários | Finalidade |
| :--- | :--- |
| **Planejadores de fornecimento/Gerentes de programa** | Gerencie aquisições em diversas fontes de financiamento e agentes de aquisição. O QAT proporciona visibilidade do estado dos stocks a longo prazo e diminui o risco de desequilíbrios nos stocks. |
| **Planejadores de previsão/demanda** | Estime a demanda usando modelos flexíveis e validações integradas. Compare metodologias e selecione previsões de commodities finais usando visualizações integradas. |
| **Formuladores de Políticas/Diretores** | Compare visualmente as previsões e analise as implicações das restrições orçamentais ou de novas metas do programa. |
| **Procuradores e Doadores** | Obtenha visibilidade clara do status atual do fornecimento e dos requisitos futuros de aquisição. |

*Tabela 1: Usuários e finalidade recomendados do QAT*

## Conceitos e termos importantes do QAT

### Termos transversais

| Prazo | Definição |
| :--- | :--- |
| **Unidade de previsão** | A unidade básica usada para um período de previsão especificado (por exemplo, um comprimido, um mililitro). |
| **Master Data (Sync)** | Um conjunto padronizado de dados (por exemplo, listas de produtos, nomes de financiadores) compartilhado por todo o sistema. Os usuários podem solicitar atualizações por meio de um mecanismo de tickets. QAT sincroniza dados mestre durante login ou acionamentos manuais. Observe que os conjuntos de dados completos de previsão ou plano de fornecimento devem ser baixados para uso local. |
| **Unidade de Planejamento** | O produto previsto no QAT, descrito até o nível da embalagem primária (por exemplo, um frasco de 30 comprimidos). |
| **Programas** | Semelhante a um "banco de dados de plano de fornecimento" em ferramentas legadas. Cada programa consiste num país, áreas técnicas específicas, uma região (por exemplo, a nível nacional) e uma organização (por exemplo, Ministério da Saúde). |
| **Reino** | Uma subdivisão de alto nível em QAT (por exemplo, Saúde Global) regida por seus próprios dados mestres. |
| **Região** | Níveis subnacionais usados ​​para estruturar os dados do programa. Para definir uma região, os dados de consumo e de inventário devem ser introduzidos nesse nível para agregação nacional. |
| **Área Técnica** | Sinónimo de grupos de produtos (por exemplo, ARV, Malária, Planeamento Familiar) utilizados para categorizar programas. |
| **Ingressos** | O mecanismo para relatar bugs ou solicitar atualizações de dados mestres. Os tickets são resolvidos pelos administradores do sistema. |
| **Funções do usuário** | Atribuições dedicadas que definem o acesso a dados e permissões funcionais dentro do aplicativo. |

### Termos de planejamento de fornecimento

### Termos de previsão

| Prazo | Definição |
| :--- | :--- |
| **Previsão baseada no consumo** | Uma previsão da procura futura com base em dados históricos de consumo real, utilizando metodologias de extrapolação linear e não linear. |
| **Previsão da árvore** | Estruturas flexíveis de previsão usadas para converter diversos tipos de dados (demográficos, morbidade, serviços) em requisitos de commodities, modelando caminhos de serviço. |
| **Modelo de árvore** | Árvores de previsão predefinidas que podem ser baixadas e personalizadas de acordo com o contexto de um usuário específico. |
| **Modelo de uso** | Taxas de utilização predefinidas para produtos específicos que podem ser aplicadas de forma consistente em diferentes árvores e programas. |
| **Uso contínuo e discreto** | Ao definir as taxas de uso, os usuários podem escolher entre aplicativos **Contínuos** (em andamento) ou **Discretos** (período específico ou uso único). |

### Siglas

Para obter uma lista abrangente de acrônimos usados no aplicativo e na documentação do QAT, consulte a página [Acrônimos](18-acronyms.md).