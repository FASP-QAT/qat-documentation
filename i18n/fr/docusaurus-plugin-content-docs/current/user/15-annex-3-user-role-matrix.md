---
id: annex-3-user-role-matrix
title: "Annexe 3 : Matrice des rôles des utilisateurs"
sidebar_label: "Annexe 3 : Matrice des rôles des utilisateurs"
sidebar_position: 15
---
# Annexe 3 : Matrice des rôles des utilisateurs

Cette matrice définit les autorisations pour chaque rôle au sein de QAT. Les autorisations sont classées par domaine fonctionnel.

## Descriptions des rôles

| Rôle | Descriptif |
| :--- | :--- |
| **Administrateur d'application** | Configuration globale du système, traductions d'étiquettes et création de rôles. |
| **Administrateur du domaine** | Gère les données de base spécifiques au domaine (produits, domaines techniques, organisations). |
| **Administrateur du programme SP** | Gère les paramètres au niveau du programme (délais, unités de planification, budgets). |
| **Réviseur SP** | Examine et approuve les versions du plan d’approvisionnement. |
| **Utilisateur du programme SP** | Rôle principal de saisie des données et de planification des approvisionnements. |
| **Visionneuse SP** | Accès en lecture seule aux rapports, aux données brutes ou à l'état des révisions. |
| **Administrateur des prévisions** | Gère les paramètres et les modèles spécifiques aux prévisions. |
| **Utilisateur de prévision** | Élabore des prévisions et saisit les données de consommation. |
| **Visionneuse de prévisions** | Accès en lecture seule aux résultats et aux arborescences des prévisions. |

---

## 1. Données administratives et de base
| Fonction commerciale | Administrateur de l'application | Administrateur de royaume | Administrateur du programme | Utilisateurs | Téléspectateurs |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Traductions d'étiquettes et de bases de données | **X** | - | - | - | - |
| Gérer les pays/utilisateurs mondiaux | **X** | - | - | - | - |
| Gérer les maîtres de royaume (PU/FU/Org) | - | **X** | V | V | V |
| Gérer les pays/régions du domaine | - | **X** | - | - | V |
| Gérer les agents d'approvisionnement | - | **X** | **X** | V | V |

**Légende :** **X** = Accès complet | **V** = Affichage uniquement | **-** = Pas d'accès

---

## 2. Gestion du programme
| Fonction commerciale | Administrateur de royaume | Administrateur SP | Administrateur FC | Utilisateurs |
| :--- | :---: | :---: | :---: | :---: |
| Configurer/Créer un nouveau programme | **X** | - | **X** | - |
| Mettre à jour les informations et paramètres du programme | **X** | **X** | **X** | - |
| Gérer les unités de planification de programme | **X** | **X** | **X** | - |
| Gestion budgétaire | **X** | **X** | - | V |
| Programmes d'importation/exportation | **X** | **X** | **X** | **X** |

---

## 3. Opérations du plan d'approvisionnement
| Fonction commerciale | Administrateur de royaume | Administrateur SP | Utilisateur SP | Réviseur SP | Visionneuse SP |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Saisie de données (Cons./Inv./Expédi.) | **X** | **X** | **X** | - | V¹ |
| Gérer le plan/scénarios d'approvisionnement | **X** | **X** | **X** | **X** | V² |
| Télécharger des versions | **X** | **X** | **X** | - | - |
| Réviser/Approuver les versions | - | - | - | **X** | - |
| Liaison des expéditions ERP | **X** | **X** | **X** | - | - |

*¹ SP Viewer - Données uniquement | ² SP Viewer - Données/Révision*

---

## 4. Opérations de prévision
| Fonction commerciale | Administrateur de royaume | Administrateur FC | Utilisateur FC | Visionneuse FC |
| :--- | :---: | :---: | :---: | :---: |
| Saisie des données de consommation | **X** | **X** | **X** | V |
| Gérer/Créer des arbres | **X** | **X** | **X** | V |
| Extrapolation | **X** | **X** | **X** | V |
| Modèles d'utilisation/d'arborescence | **X** | **X** | **X** | V |
| Importer depuis le plan d'approvisionnement | **X** | **X** | **X** | - |

---

## 5. Accès aux rapports
| Type de rapport | Administrateurs | Utilisateurs | Téléspectateurs |
| :--- | :---: | :---: | :---: |
| Plan d'approvisionnement / État des stocks | **X** | **X** | **X** |
| Erreur de consommation/prévision | **X** | **X** | **X** |
| Rapports d'expédition/coût | **X** | **X** | **X** |
| Rotations/expirations des stocks | **X** | **X** | **X** |
| Capacité de l'entrepôt | **X** | **X** | **X** |