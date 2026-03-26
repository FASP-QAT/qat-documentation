---
id: annex-1-application-realm-administrator-manual
title: "Anexo 1: Manual do Administrador do Aplicativo e do Realm"
sidebar_label: "Anexo 1: Manual do Administrador do Aplicativo e do Realm"
sidebar_position: 13
---
# Anexo 1: Manual do Administrador do Aplicativo e do Realm

## Introdução
Este anexo fornece orientação sobre funcionalidades administrativas restritas a **Administradores de Aplicativos** e **Administradores de Realm**.
- **Application Masters**: configurações globais que afetam todos os domínios (somente App Admin).
- **Mestres de nível de reino**: dados específicos de um reino, afetando seus programas e planos de fornecimento (administradores de aplicativos e de reino).
- **Program Level Masters**: configurações gerenciadas pelos administradores do programa para programas específicos.

## Painéis Administrativos
Os administradores veem blocos exclusivos em seus painéis para gerenciar dados globais e em nível de região.

| Azulejo | Nível de administrador | Função |
| :--- | :--- | :--- |
| **Usuário do programa** | Aplicativo e reino | Gerenciar funções e permissões de usuário. |
| **Total de Reinos** | Aplicativo | Crie e configure domínios de aplicativos. |
| **Idioma** | Aplicativo | Gerenciar idiomas de UI suportados. |
| **País** | Reino | Mapeie países globais para domínios específicos. |
| **Área Técnica** | Reino | Definir áreas de enfoque do programa (por exemplo, VIH, Malária). |
| **Organização** | Reino | Gerenciar entidades parceiras e governamentais. |
| **Programa Total** | Reino | Visão geral e atualização em massa das informações do programa. |
| **Programa de configuração** | Reino | Assistente principal para integração de novos programas. |

---

## Gerenciando dados mestres
QAT usa uma hierarquia de três níveis para gerenciamento de dados.

### 1. Mestres de aplicativos (global)
Essas configurações se aplicam a todo o aplicativo em todos os domínios.

#### Gerenciamento de Tradução
- **Conversão de banco de dados**: Usado para "Rótulos Dinâmicos" (itens da lista suspensa). Inglês é obrigatório; outros são recomendados.
- **Tradução de rótulos**: Usado para "rótulos estáticos" (cabeçalhos de tabelas, itens de menu). As alterações são refletidas imediatamente.

#### Entidades Globais (CRUD)
As entidades a seguir seguem um fluxo de trabalho padrão **Lista > Adicionar (+) > Atualizar**:
- **País**: Gerencie a lista global de países. Nota: Use códigos ISO de 3 letras (por exemplo, AGO) e 2 letras (por exemplo, AO).
- **Moeda**: Gerencie taxas de conversão. Use "Sync Online" para atualizar automaticamente as taxas em relação ao dólar americano.
- **Idioma**: ativar/desativar idiomas da UI (inglês, francês, espanhol, português).
- **Dimensão e Unidade**: Defina valores mensuráveis ​​(Peso, Volume) e unidades (mL, gm, Caixa).
- **Período de utilização**: Defina intervalos de tempo (mês, semana) usados ​​nos cálculos de previsão.

#### Gerenciamento de usuários e funções
- **Usuários**: adicione novos usuários por e-mail, atribuindo-lhes uma função, domínio e idioma principais.
- **Funções**: os administradores podem modificar regras de negócios associadas às funções. 
  > [!NOTA]
  > Para obter uma análise completa das permissões, consulte [Anexo 3: Matriz de funções do usuário](15-annex-3-user-role-matrix.md).

---

### 2. Realm Masters (Lógica de Negócios)
As configurações de domínio regem os produtos, financiadores e lógica de aquisição específicos para um grupo de programas.

#### Catálogo de Produtos
A hierarquia de produtos é central para as operações QAT:
1. **Unidade de previsão (FU)**: A unidade base (por exemplo, 1 comprimido).
2. **Unidade de Planejamento (PU)**: O pacote dispensador (por exemplo, Frasco de 30 pastilhas). 
   - *Mapeamento:* Muitas PUs podem mapear para uma FU.
   - *Volumetria:* Os administradores devem mapear dados de volume/peso para PUs para cálculos de envio.
3. **Unidade de compras**: descrição em nível de item, incluindo dados específicos do fabricante (GTIN, SKU) e prazos de entrega.
4. **Categoria de unidade de planejamento**: agrupamentos amplos (por exemplo, "ARV Pharmaceuticals").
5. **Categoria do rastreador**: clusters específicos (por exemplo, "Primeira linha para adultos").

#### Unidades de Equivalência (UE)
As UEs permitem que produtos díspares sejam agregados para relatórios (por exemplo, convertendo frascos e tubos em “Meses de Tratamento Padrão”).
- **Lógica:** Os mapeamentos em nível de domínio se aplicam a todos os programas, a menos que sejam substituídos por um mapeamento específico do programa.

#### Logística e Parceiros
- **Agentes de compras**: gerencie prazos de entrega, códigos de cores e integração de catálogos.
- **Fontes de Financiamento**: Definir as entidades pagadoras dos envios.
- **Organizações**: Gerenciar os órgãos específicos (MS, ONG) que executam programas.
- **Métodos de Previsão**: Defina as metodologias disponíveis (ARIMA, TES, etc.) para o domínio.

---

## Configurando um novo programa
Os administradores iniciam programas por meio do assistente **Programa de configuração**.

### Fluxo de trabalho:
1. **Escolha Região e País**: Atribua o programa ao seu contexto clínico/geográfico.
2. **Definir Área Técnica**: Selecione uma ou mais áreas (por exemplo, HIV + TB).
3. **Selecione Organização e Regiões**: Determine o órgão gestor e o escopo geográfico (nacional ou subnacional).
4. **Configurar dados do programa**:
   - **Para planejamento de fornecimento**: defina prazos de entrega, níveis de estoque e unidades de planejamento.
   - **Para previsão**: defina as datas de início/término da previsão e os períodos de revisão.
5. **Enviar**: o programa agora está disponível para gerenciamento pelos administradores do programa.

---

## Ferramentas utilitárias
### Redefinindo o QPL
Os administradores podem redefinir em massa a **Lista de Problemas QAT (QPL)** para reabrir problemas "Abordados" para um novo ciclo de revisão.
- **Uso:** Normalmente feito no início de um novo período de envio para versões aprovadas.