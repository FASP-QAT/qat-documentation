---
id: annex-4-business-functions
title: "Annex 4: Business Functions"
sidebar_label: "Annex 4: Business Functions"
sidebar_position: 16
---
# Anexo 4: Funções Empresariais

As funções de negócios são recursos granulares atribuídos a funções. Eles definem exatamente quais ações um usuário pode realizar dentro do sistema.

## Verbos de permissão
Ao configurar funções, os seguintes verbos determinam o nível de acesso:
- **Lista**: Permite visualizar apenas a tabela de dados; sem acréscimos ou edições.
- **Adicionar**: Permite criar novos registros.
- **Editar**: Permite atualizar registros existentes. (Nota: As entidades não podem ser excluídas, apenas desabilitadas).
- **Gerenciar**: um atalho para Listar + Adicionar + Editar.

---

## 1. Traduções e painéis administrativos
| Categoria | Função Empresarial | Descrição |
| :--- | :--- | :--- |
| **Traduções** | Traduções de etiquetas | Atualize "rótulos estáticos" (cabeçalhos da interface do usuário) entre idiomas. |
| | Traduções de banco de dados | Atualize "Rótulos Dinâmicos" (itens suspensos) imediatamente. |
| | Ver traduções | Acesso somente leitura a todas as strings da UI. |
| **Painéis** | Painel do aplicativo | Acesse a visão geral do administrador global. |
| | Painel do reino | Acesse a visão geral do administrador específico da região. |
| | Painel do programa | Acesse o painel operacional para programas específicos. |

---

## 2. Gerenciamento de dados mestres
| Categoria | Função Empresarial | Descrição |
| :--- | :--- | :--- |
| **Mestres de aplicativos** | Gerenciar país/moeda | Configuração global das unidades geográficas e monetárias. |
| | Gerenciar usuário/função | Crie usuários e defina suas permissões funcionais. |
| | Criar/editar domínio | Configuração global de domínios administrativos. |
| **Mestres do Reino** | Gerenciar país/região do reino | Mapeie países globais para territórios específicos. |
| | Gerenciar fonte de financiamento | Definir entidades que fornecem apoio financeiro para remessas. |
| | Gerenciar Organização | Gerenciar órgãos parceiros e governamentais dentro do domínio. |
| | Gerenciar produtos | Controle total sobre as Unidades de Previsão, Planejamento e Aquisições. |
| | Unidades de Equivalência | Defina a lógica de agregação para produtos relacionados. |

---

## 3. Programa e operações da cadeia de suprimentos
| Categoria | Função Empresarial | Descrição |
| :--- | :--- | :--- |
| **Programas** | Programa de configuração | Crie e configure novos programas de Planejamento ou Previsão de Fornecimento. |
| | Gerenciar unidades de planejamento | Configure prazos de entrega e níveis de estoque específicos do programa. |
| | Gerenciar orçamento | Rastrear e alocar recursos financeiros no nível do programa. |
| **Controle de versão** | Carregar versão | Sincronize as edições do programa local com o servidor central. |
| | Rever/Aprovar | Audite formalmente e finalize os envios do plano de fornecimento. |
| | Regras de Notificação | Configure gatilhos de e-mail para eventos de upload/aprovação/rejeição. |
| **Remessas** | Vinculação ERP | Vincule remessas QAT a sistemas de compras externos. |
| | Marcação manual | Categorize remessas para rastreamento avançado. |

---

## 4. Previsão e relatórios
| Categoria | Função Empresarial | Descrição |
| :--- | :--- | :--- |
| **Metodologias** | Previsão de árvores | Crie e gerencie modelos de demanda em camadas (Agregação/Porcentagem/Número). |
| | Previsão de Consumo | Acesse as telas de entrada, ajuste e extrapolação de dados. |
| | Modelos | Gerencie modelos de uso e árvore para configuração rápida. |
| **Relatórios** | Ver relatórios | Acesse o conjunto completo de resultados analíticos. |
| | Lista de problemas QAT | Acesse e gerencie problemas de planejamento e qualidade de dados. |
| | Relatórios Globais | Veja dados agregados de todos os países e programas. |