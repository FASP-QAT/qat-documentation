---
id: annex-4-business-functions
title: "Annexe 4 : Fonctions Métiers"
sidebar_label: "Annexe 4 : Fonctions Métiers"
sidebar_position: 16
---
# Annexe 4 : Fonctions Métiers

Les fonctions métier sont des capacités granulaires attribuées aux rôles. Ils définissent exactement les actions qu'un utilisateur peut effectuer au sein du système.

## Verbes d'autorisation
Lors de la configuration des rôles, les verbes suivants déterminent le niveau d'accès :
- **Liste** : permet de visualiser uniquement le tableau de données ; aucun ajout ni modification.
- **Ajouter** : Permet de créer de nouveaux enregistrements.
- **Modifier** : Permet de mettre à jour les enregistrements existants. (Remarque : les entités ne peuvent pas être supprimées, mais uniquement désactivées).
- **Gérer** : un raccourci pour Liste + Ajouter + Modifier.

---

## 1. Traductions et tableaux de bord d'administration
| Catégorie | Fonction commerciale | Descriptif |
| :--- | :--- | :--- |
| **Traductions** | Traductions d'étiquettes | Mettez à jour les « étiquettes statiques » (en-têtes de l'interface utilisateur) dans toutes les langues. |
| | Traductions de bases de données | Mettez à jour immédiatement les « Étiquettes dynamiques » (éléments déroulants). |
| | Voir les traductions | Accès en lecture seule à toutes les chaînes de l'interface utilisateur. |
| **Tableaux de bord** | Tableau de bord des applications | Accédez à la présentation globale de l’administrateur. |
| | Tableau de bord du royaume | Accédez à la présentation de l'administrateur spécifique au domaine. |
| | Tableau de bord du programme | Accédez au tableau de bord opérationnel pour des programmes spécifiques. |

---

## 2. Gestion des données de référence
| Catégorie | Fonction commerciale | Descriptif |
| :--- | :--- | :--- |
| **Maîtres des applications** | Gérer le pays/devise | Configuration globale des unités géographiques et monétaires. |
| | Gérer l'utilisateur/le rôle | Créez des utilisateurs et définissez leurs autorisations fonctionnelles. |
| | Créer/Modifier un domaine | Configuration globale des domaines administratifs. |
| **Maîtres du royaume** | Gérer le pays/la région du domaine | Cartographiez les pays du monde avec des territoires de royaume spécifiques. |
| | Gérer la source de financement | Définir les entités fournissant un soutien financier aux expéditions. |
| | Gérer l'organisation | Gérer les organismes partenaires et gouvernementaux du domaine. |
| | Gérer les produits | Contrôle total sur les unités de prévision, de planification et d’approvisionnement. |
| | Unités d'équivalence | Définir la logique d'agrégation pour les produits associés. |

---

## 3. Opérations de programme et de chaîne d'approvisionnement
| Catégorie | Fonction commerciale | Descriptif |
| :--- | :--- | :--- |
| **Programmes** | Programme d'installation | Créez et configurez de nouveaux programmes de planification des approvisionnements ou de prévisions. |
| | Gérer les unités de planification | Configurez les délais de livraison et les niveaux de stock spécifiques au programme. |
| | Gérer le budget | Suivre et allouer les ressources financières au niveau du programme. |
| **Contrôle de version** | Télécharger la version | Synchronisez les modifications du programme local avec le serveur central. |
| | Réviser/Approuver | Auditer formellement et finaliser les soumissions du plan d’approvisionnement. |
| | Règles de notification | Configurez les déclencheurs de courrier électronique pour les événements de téléchargement/approbation/rejet. |
| **Expéditions** | Liaison ERP | Reliez les expéditions QAT aux systèmes d’approvisionnement externes. |
| | Marquage manuel | Catégorisez les expéditions pour un suivi avancé. |

---

## 4. Prévisions et rapports
| Catégorie | Fonction commerciale | Descriptif |
| :--- | :--- | :--- |
| **Méthodologies** | Prévision des arbres | Créez et gérez des modèles de demande à plusieurs niveaux (agrégation/pourcentage/nombre). |
| | Prévisions de consommation | Accédez aux écrans de saisie, d’ajustement et d’extrapolation des données. |
| | Modèles | Gérez les modèles d'utilisation et d'arborescence pour une configuration rapide. |
| **Rapports** | Afficher les rapports | Accédez à la suite complète des résultats analytiques. |
| | Liste des problèmes QAT | Accédez et gérez les problèmes de qualité des données et de planification. |
| | Rapports mondiaux | Consultez les données agrégées pour tous les pays et programmes. |