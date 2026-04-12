---
id: annex-3-user-role-matrix
title: "Annex 3: User Role Matrix"
sidebar_label: "Annex 3: User Role Matrix"
sidebar_position: 15
---
# Anexo 3: Matriz de funções do usuário

Esta matriz define as permissões para cada função no QAT. As permissões são categorizadas por área funcional.

## Descrições de funções

| Função | Descrição |
| :--- | :--- |
| **Administrador de aplicativos** | Configuração global do sistema, traduções de rótulos e criação de funções. |
| **Administrador do reino** | Gerencia dados mestre específicos do domínio (produtos, áreas técnicas, organizações). |
| **Administrador do Programa SP** | Gerencia configurações em nível de programa (prazos de entrega, unidades de planejamento, orçamentos). |
| **Revisor SP** | Revisa e aprova versões do plano de fornecimento. |
| **Usuário do Programa SP** | Função de entrada de dados primários e planejamento de fornecimento. |
| **Visualizador SP** | Acesso somente visualização a relatórios, dados brutos ou status de revisão. |
| **Administrador de previsão** | Gerencia parâmetros e modelos específicos de previsão. |
| **Usuário de previsão** | Cria previsões e insere dados de consumo. |
| **Visualizador de previsão** | Acesso somente visualização a resultados e árvores de previsão. |

---

## 1. Dados administrativos e mestres
| Função Empresarial | Administrador de aplicativos | Administrador de reino | Administrador do programa | Usuários | Visualizadores |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Traduções de rótulos e bancos de dados | **X** | - | - | - | - |
| Gerenciar países/usuários globais | **X** | - | - | - | - |
| Gerenciar Mestres de Reino (PU/FU/Org) | - | **X** | V | V | V |
| Gerenciar países/regiões do reino | - | **X** | - | - | V |
| Gerenciar agentes de compras | - | **X** | **X** | V | V |

**Legenda:** **X** = Acesso total | **V** = Somente visualização | **-** = Sem acesso

---

## 2. Gerenciamento do programa
| Função Empresarial | Administrador de reino | Administrador SP | Administrador FC | Usuários |
| :--- | :---: | :---: | :---: | :---: |
| Configurar/criar novo programa | **X** | - | **X** | - |
| Atualizar informações e configurações do programa | **X** | **X** | **X** | - |
| Gerenciar unidades de planejamento de programas | **X** | **X** | **X** | - |
| Gestão Orçamentária | **X** | **X** | - | V |
| Programas de importação/exportação | **X** | **X** | **X** | **X** |

---

## 3. Operações do Plano de Fornecimento
| Função Empresarial | Administrador de reino | Administrador SP | Usuário SP | Revisor SP | Visualizador SP |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Entrada de Dados (Cons./Inv./Navio) | **X** | **X** | **X** | - | V¹ |
| Gerenciar Plano/Cenários de Fornecimento | **X** | **X** | **X** | **X** | V² |
| Carregar versões | **X** | **X** | **X** | - | - |
| Revisar/Aprovar Versões | - | - | - | **X** | - |
| Vinculação de remessa ERP | **X** | **X** | **X** | - | - |

*¹ SP Viewer - Somente dados | ² SP Viewer - Dados/Revisão*

---

## 4. Operações de previsão
| Função Empresarial | Administrador de reino | Administrador FC | Usuário FC | Visualizador FC |
| :--- | :---: | :---: | :---: | :---: |
| Entrada de Dados de Consumo | **X** | **X** | **X** | V |
| Gerenciar/Construir Árvores | **X** | **X** | **X** | V |
| Extrapolação | **X** | **X** | **X** | V |
| Modelos de uso/árvore | **X** | **X** | **X** | V |
| Importação do Plano de Fornecimento | **X** | **X** | **X** | - |

---

## 5. Acesso a relatórios
| Tipo de relatório | Administradores | Usuários | Visualizadores |
| :--- | :---: | :---: | :---: |
| Plano de Fornecimento / Situação de Estoque | **X** | **X** | **X** |
| Erro de consumo/previsão | **X** | **X** | **X** |
| Relatórios de envio/custo | **X** | **X** | **X** |
| Giros/vencimentos de estoque | **X** | **X** | **X** |
| Capacidade do armazém | **X** | **X** | **X** |