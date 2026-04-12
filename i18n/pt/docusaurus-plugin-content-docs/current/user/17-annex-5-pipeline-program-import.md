---
id: annex-5-pipeline-program-import
title: "Annex 5: PipeLine Program Import"
sidebar_label: "Annex 5: PipeLine Program Import"
sidebar_position: 17
---
# Anexo 5: Importação do Programa PipeLine

Este anexo detalha o processo de migração de bancos de dados legados do **PipeLine** para o QAT. Este é um processo de três etapas: conversão, upload e mapeamento de dados.

> [!IMPORTANTE]
> **Pré-requisitos:**
> - **Software:** Java JDK 1.8 ou superior deve estar instalado em sua máquina.
> - **Qualidade de dados:** Seu banco de dados PipeLine (.accdb) não deve conter valores de inventário negativos. Certifique-se de que todos os dados de remessa, estoque e consumo estejam finalizados antes de começar.

---

## Etapa 1: Converter .accdb em JSON
QAT requer dados no formato JSON. Use a **PipeLine Converter Tool** para esta conversão.

1. Navegue até **Gerenciamento de Programas > Importação de Programa PipeLine**.
2. Clique no botão **Adicionar (+)** e, em seguida, clique no ícone **Baixar (↓)** no canto superior direito.
3. Selecione seu sistema operacional (Windows ou Linux) e baixe o arquivo `.zip`.
4. Extraia e execute o conversor (arquivo executável ou `.jar`).
5. **No Conversor:**
   - **Fonte:** Navegue e selecione seu arquivo `.accdb`.
   - **Destino:** Selecione a pasta onde o arquivo `.json` resultante deve ser salvo.
   - Clique em **Converter**. Uma notificação aparecerá em caso de sucesso.

---

## Etapa 2: fazer upload para QAT
Assim que tiver o arquivo `.json`, você deve carregá-lo no servidor QAT.

1. No QAT, retorne para **Gerenciamento de Programas > Importação de Programa PipeLine**.
2. Clique em **Adicionar (+)**.
3. Navegue e selecione o arquivo `.json` convertido.
4. Clique em **Enviar**. Você receberá uma mensagem de sucesso e o novo programa aparecerá na lista de importação.

---

## Etapa 3: Assistente de mapeamento de dados
O estágio final envolve o mapeamento de campos PipeLine legados para os dados mestre em nível de domínio do QAT.

Clique na linha do programa importado para iniciar o **Mapping Wizard**. Você navegará pelas seguintes telas:
1. **Informações do Programa**: Mapear áreas técnicas e organizações.
2. **Unidades de planejamento**: Vincule produtos PipeLine às unidades de planejamento QAT.
3. **Dados e fontes de financiamento**: Mapear parceiros logísticos e financeiros.
4. **Remessas e Estoque**: Revisão final dos registros importados.

> [!TIP]
> Use os botões **Próximo** e **Voltar** para navegar. Caso o sistema detecte estoque negativo durante a etapa final, aparecerá um aviso; você deve resolver essas discrepâncias nos dados de origem ou durante o mapeamento.

Depois de concluído, o programa ficará totalmente ativo em **Gerenciamento de programas > Atualizar informações do programa**, onde poderá ser baixado para planejamento de fornecimento ativo.