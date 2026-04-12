---
id: annex-2-business-rules
title: "Annex 2: Business Rules"
sidebar_label: "Annex 2: Business Rules"
sidebar_position: 14
---
# Annexe 2 : Règles Métier

Cette annexe documente les formules mathématiques de base et les conditions logiques qui déterminent les calculs de QAT, les suggestions de planification des approvisionnements et les contrôles de qualité des données.

## Module de planification des approvisionnements

### 1. Bases de l'inventaire
- **Solde d'ouverture** : `Opening Balance(t) = Ending Balance(t-1)`. (Le premier mois est par défaut 0).
- **Stock expiré** : `Sum(Ending Balance of batches expiring in month t)`.
- **Total des expéditions** : `Sum(Quantities where Receive Date is in month t)`.
- **Inventaire projeté** : `Opening Balance + Total Shipments ± Total Adjustments - Final Consumption - Expired Stock`.

### 2. Stock final et consommation
- **Stock final** : Somme du stock déclaré dans toutes les régions.
- **Ajustements totaux** : somme des ajustements manuels des régions qui n'ont *pas* déclaré d'inventaire.
- **Consommation finale** :
  - *Si toutes les régions ont déclaré des chiffres réels :* `Sum(Actual Consumption)`.
  - *S'il manque des données réelles dans une région :* `MAX(Sum(Actual Consumption), Sum(Forecasted Consumption))`.

### 3. Paramètres du plan d'approvisionnement
- **AMC (Consommation mensuelle moyenne)** : `[Sum(Full Demand in Past Window) + Sum(Full Demand in Future Window)] / Total Months`.
- **Min MOS** : `MAX(Program Min MOS, Realm Min MOS Guardrail)`.
- **MOS maximum** : `MIN(MAX(Min MOS + Reorder Interval, Realm Min Max Guardrail), Realm Max Max Guardrail)`.
- **Stock minimum** : `AMC × Min MOS`.
- **Stock maximum** : `AMC × Max MOS`.
- **Solde final** : 
  - Si toutes les régions ont déclaré du stock : `Final Stock`.
  - Sinon : `Projected Inventory + Auto Adjustment`.

### 4. Suggestions d'expédition (Planifier par MOS)
QAT suggère une expédition lorsque `MOS` pour le mois en cours et les deux mois suivants sont tous inférieurs à `Min MOS`.
- **Quantité suggérée** : `Max Stock - Ending Balance + Unmet Demand`.

---

## Logique d'allocation de lots (FEFO/LEFO)

### FEFO (Première expiration, premier sorti)
Utilisé pour consommer le stock en fonction des dates d'expiration les plus rapprochées.
1. Triez tous les lots par **Date d'expiration** (asc).
2. Calculez la **Consommation non allouée** (Consommation finale - Ajustements).
3. Parcourez les lots :
   - `Batch Ending Balance = MAX(0, Batch Temp Balance - Unallocated Consumption)`.
   - Soustrayez la quantité consommée du pool total `Unallocated Consumption`.

### LEFO (Dernière expiration, premier sorti)
Utilisé principalement pour répartir les ajustements négatifs (pertes).
1. Triez les lots par **Date d'expiration** (desc).
2. Déduisez d'abord les quantités des lots les plus récents jusqu'à ce que l'ajustement soit entièrement alloué.

---

## Logique de la liste de problèmes QAT (QPL)

### Qualité des données
| Problème | Suggestions | Logique |
| :--- | :--- | :--- |
| **Réels manquants** | Saisissez la consommation réelle. | Marqué si les données réelles sont manquantes pendant plus de 3 mois consécutifs. |
| **Inventaire manquant** | Entrez l'inventaire. | Marqué si aucun inventaire n’est signalé pendant plus de 3 mois consécutifs. |
| **Expéditions passées** | Mettre à jour la date de réception. | Signalé si la date prévue d'un envoi est antérieure de > 14 jours. |

### Planification des approvisionnements
| Problème | Suggestions | Logique |
| :--- | :--- | :--- |
| **Prévisions manquantes** | Prolonger la période de prévision. | Signalé si l’un des 18 prochains mois ne dispose pas de prévisions. |
| **Prévisions non dynamiques** | Examinez la saisonnalité. | Marqué (pour les ARV/paludisme) si plus de 4 mois consécutifs ont des valeurs identiques. |
| **Violation min/max** | Réévaluer le plan d’approvisionnement. | Signalé si le MOS tombe en dehors des paramètres Min/Max dans les 18 mois. |

---

## Méthodologie de prévision

### Ajustements statistiques
- **Taux de rupture de stock** : `(Stockout Days / Days in Month) × 100`.
- **Consommation ajustée** : `(Actual Consumption / Reporting Rate) / (1 - Stockout Rate)`.
- **Interpolation** : `y = y0 + (x - x0) * (y1 - y0) / (x1 - x0)`. (Ligne droite entre deux points connus).

### Métriques d'erreur
- **WAPE** : `Sum(ABS(Actual - Forecast)) / Sum(Actual)`. (Calculé sur une fenêtre de 6 mois).
- **RMSE** : `SQRT(Sum((Forecast - Actual)²) / N)`.
- **R²** : `1 - (SSR / SST)`. Mesure dans quelle mesure le modèle suit les modèles historiques (0 à 1).

---

## Résolution des conflits de versions
Lors du téléchargement d'une version locale, QAT compare :
- **Serveur (ancien)** : La version initialement téléchargée.
- **Local** : votre version modifiée.
- **Serveur (dernière)** : version actuelle sur le serveur (peut avoir été mise à jour par d'autres).

### États en conflit
- **Vert (dernière version locale)** : les données existent uniquement dans la version locale ou ont été modifiées localement uniquement.
- **Bleu (Serveur le plus récent)** : Les données ont été modifiées uniquement sur le serveur depuis que vous les avez téléchargées.
- **Jaune (Conflit)** : Le *même* enregistrement a été modifié dans les versions locale et serveur. Vous devez choisir lequel conserver.
- **Non mis en surbrillance** : aucune modification détectée dans les versions.