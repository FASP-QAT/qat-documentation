---
id: forecasting-module-program-data
title: "Module de prévision : données du programme"
sidebar_label: "Module de prévision : données du programme"
sidebar_position: 7
---
# Module de prévision : données du programme

##Présentation

La prévision ![](/img/media/image234.png)A est une estimation/prédiction des quantités de produits à consommer/utiliser par les clients ou les consommateurs sur une période future. Dans QAT, le processus de prévision est généralement mené dans un ordre spécifique (voir _Figure à droite_).

Tout d'abord, configurez un programme en utilisant Mettre à jour les informations sur le programme ou sélectionnez un programme précédent en utilisant Télécharger ou Supprimer le programme. Après avoir téléchargé le programme, ajoutez des informations sur la période de prévision, le seuil (%), les produits et d'autres paramètres du programme dans les écrans Mettre à jour les paramètres de version et Mettre à jour l'unité de planification. Dans QAT, les utilisateurs peuvent soit créer des prévisions en concevant des arbres de prévision (prévisions basées sur des arbres), soit en exploitant l'historique de la consommation (prévisions basées sur la consommation) pour obtenir une prévision finale. Pour chaque produit, choisissez la méthodologie de consommation ou d'arborescence, ou les deux\!

Les **prévisions basées sur la consommation** sont plus utiles dans les programmes matures et stables qui disposent d'un approvisionnement complet en produits et de données fiables. Cette méthode peut être le prédicteur le plus fiable de la consommation future si l’on prévoit que l’utilisation future sera très similaire à celle du passé. Idéalement, plus de 24 mois de données mensuelles de consommation réelle sont disponibles. Si les données nécessaires à une prévision basée sur la consommation ne sont pas disponibles ou ne sont pas utiles pour prédire la consommation future, effectuez une **prévision basée sur une arborescence**, qui s'adapte de manière flexible à toutes les autres méthodes de prévision, telles que la morbidité, les services et les méthodes démographiques. Les utilisateurs peuvent spécifier les changements au fil du temps dans une arborescence, soit en spécifiant directement le taux de changement, soit en extrapolant à partir de données passées.

Une fois les différentes prévisions créées, les utilisateurs peuvent accéder à la section Analyse et résultats des prévisions pour afficher et comparer les prévisions, puis sélectionner la prévision finale.

## Informations sur le programme

**<u>Purpose:</u>** Permet aux utilisateurs de mettre à jour les informations de base de leur programme après la création initiale.

**<u>Utilisation de cet écran :</u>**

Les _Administrateurs du programme_ peuvent utiliser l'écran principal pour :

- Mettre à jour le nom du programme de prévision, le gestionnaire de programme et le champ Notes. Les administrateurs du programme peuvent également choisir de désactiver ou d'activer un programme sur cet écran. Pour les modifications relatives au domaine technique, à l'organisation ou au nom d'affichage du programme, les administrateurs du programme doivent demander le changement à un administrateur de domaine via le [Système d'assistance QAT.](02-getting-started.md#qat-helpdesk-and-tickets)

Les _Realm Admins_ peuvent utiliser l'écran principal pour :

- Mettez à jour le domaine technique, l'organisation, le nom du programme de prévision, le nom d'affichage du programme, le gestionnaire de programme et le champ Notes. Les administrateurs de royaume peuvent également choisir de désactiver ou d'activer un programme sur cet écran.

## Paramètres de version

![P2710#yIS1](/img/media/image235.png)

**\*<u>Purpose</u>** : permet aux utilisateurs de mettre à jour les paramètres de leur programme et d'afficher les détails des versions précédentes. Pour afficher les résultats des prévisions, utilisez les écrans de la section [Forecast Analysis Output](09-forecasting-module-reports-and-outputs.md#forecasting-module-reports-and-outputs).\*

**\*<u>Utilisation de cet écran</u>** :\*

_Remarque : Un programme de prévision doit être téléchargé pour mettre à jour les paramètres de version. Toutes les versions antérieures de chaque programme de prévision seront en format lecture seule ; seule la version locale est disponible pour la mise à jour et l'édition._

Sur cet écran, les utilisateurs peuvent :

1. Mettez à jour les paramètres de programme suivants pour le programme local téléchargé :
    1. **Notes de version** – un champ de texte modifiable sous forme libre qui permet aux utilisateurs de fournir des notes générales sur une version de prévision particulière. Il est également visible et modifiable lors du téléchargement d'un programme.

    2. **Date de téléchargement/Téléchargement par l'utilisateur** – indique l'utilisateur qui a téléchargé chaque version des prévisions sur le serveur et à quelle date. Utile pour comprendre le cycle de vie de chaque programme.

    3. **Début de la prévision, période de prévision (mois) et fin de la prévision** – en fonction de la date de début et de fin, QAT calculera automatiquement la période de prévision en mois. Alternativement, les utilisateurs peuvent choisir de saisir une date de début de prévision et un nombre de mois dans la période de prévision, et QAT calculera automatiquement la date de fin de prévision.

| Nom de la colonne | Descriptif | Utilisé où ?                                                                                                       |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Facteur de conversion (FU:PU)** | Un champ non modifiable renseignant sur le facteur de conversion entre le PU choisi et son FU associé.                                                                                                                                                     | Les écrans de sélection (Saisie et ajustement des données, Comparaison et sélection, Prévisions mensuelles) permettent la saisie/visualisation des données dans PU ou FU |
| **Prévisions de consommation ?** | Pour chaque PU, les utilisateurs peuvent choisir l’une ou les deux méthodes. Si le type de prévision est coché pour l'UP, il apparaîtra dans les écrans Consommation et Arborescence.                                                                                                                    | Construire vos prévisions puis les analyser dans l'écran Comparer et sélectionner |
| **Prévision des arbres ?** |                                                                                                                                                                                                                                                                       |                                                                                                                   |
| **Stock disponible** _(début de la période de prévision)_ | Le stock (quantité) réel ou projeté au début de votre période de prévision. Les utilisateurs peuvent utiliser le module de planification des approvisionnements pour déterminer le SOH, s'ils le souhaitent.                                                                                                     | Résumé des prévisions pour calculer l'écart d'approvisionnement |
| **Expéditions existantes** _(période de prévision)_ | Quantité totale des expéditions existantes au cours de la période de prévision. Les utilisateurs peuvent utiliser le module de planification des approvisionnements pour déterminer la quantité d'expédition existante (_il est recommandé de ne pas inclure les quantités d'expédition planifiées sauf s'il existe une forte probabilité de commande)_. |                                                                                                                   |
| **Mois de stock souhaités** _(fin de la période de prévision)_ | Le MOS que vous souhaitez avoir à la fin de votre prévision.                                                                                                                                                                                                                 |                                                                                                                   |
| **Type de prix** | Choisissez un agent d'approvisionnement spécifique ou « Personnalisé ».                                                                                                                                                                                                                      | Résumé des prévisions pour calculer le coût de l'écart d'approvisionnement |
| **Prix unitaire**

| Rempli automatiquement en fonction de l'agent d'approvisionnement ou saisi manuellement par un utilisateur.                                                                                                                                                                                                 |                                                                                                                   |

4. **\# De jours dans le mois** – utilisé dans les prévisions basées sur la consommation pour ajuster la consommation réelle par rapport au nombre de jours de rupture de stock. Un utilisateur peut choisir entre 15 et 31 jours ; cependant, QAT sera par défaut « jours calendaires ». Ce champ peut être utile si un établissement souhaite utiliser uniquement les jours ouvrables (\~20 jours) pour calculer le taux de rupture de stock.

> ![P2723#yIS1](/img/media/image236.png)

5. **Pourcentage de fret** – utilisé dans les écrans de sortie et les rapports de prévision pour estimer les coûts totaux d'approvisionnement. Ce champ n'est pas obligatoire et peut être mis à jour à tout moment.

<!-- fin de liste -->

1. **Seuil de prévision** – cette mesure est utilisée dans l'écran Comparer et sélectionner. QAT compare les prévisions de consommation et les prévisions d'arbres disponibles. Pour toutes les prévisions d'arbre, QAT signalera le pourcentage au-dessus de la prévision de consommation la plus élevée ou en dessous de la prévision de consommation la plus basse. La comparaison sera surlignée en rouge si elle se situe en dehors des pourcentages de seuil définis par l'utilisateur dans cet écran. En supposant des données de consommation réelles fiables, cette comparaison aide les utilisateurs à déterminer si leurs prévisions d'arbres sont réalistes. Ces deux champs, haut et bas, ne sont pas obligatoires et peuvent être mis à jour à tout moment.

<!-- fin de liste -->

2. Consultez un cycle de vie historique de chaque programme à travers toutes ses versions.
    1. Afficher tous les paramètres de version ci-dessus

    2. (Clic droit) Affichez l'écran [Validation des prévisions] (#upload) (même écran que celui affiché lors du processus de téléchargement) – qui répertorie les prévisions manquantes, les données manquantes et toutes les notes. Cela permet aux utilisateurs de comprendre facilement les prévisions précédentes sans les télécharger. Utilisez les écrans [Prévisions mensuelles](09-forecasting-module-reports-and-outputs.md#monthly-forecast), [Résumé des prévisions](09-forecasting-module-reports-and-outputs.md#forecast-summary) ou [Comparaison des versions](03-managing-programs-and-versions.md#version-comparison) pour afficher les résultats des prévisions d'autres versions.

## Unités de planification

**\*<u>Purpose</u>** : permet aux utilisateurs d'ajouter et de mettre à jour des unités de planification et les paramètres d'unité de planification associés qui seront utilisés dans leurs prévisions et pour le calcul dans les écrans de sortie des prévisions.\*

**<u>Utilisation de cet écran</u>** :

_Remarque : Un programme de prévision doit être téléchargé pour ajouter ou mettre à jour des unités de planification et leurs paramètres._

1. **\*Ajouter des unités de planification** – Les utilisateurs devront ajouter dans cet écran toutes les unités de planification qu'ils souhaitent prévoir. Les unités de planification peuvent être ajoutées manuellement ou copiées et collées à partir de l'écran « Mettre à jour l'unité de planification » du module de planification des approvisionnements, si l'unité de planification a déjà été ajoutée au plan d'approvisionnement d'un utilisateur.\*

2. **\*Mettre à jour les paramètres de l'unité de planification** – Les utilisateurs peuvent également utiliser cet écran pour mettre à jour les unités de planification et leurs paramètres associés. Les utilisateurs doivent toujours maîtriser la synchronisation des données après avoir mis à jour un paramètre afin de voir les modifications avoir lieu sur les autres écrans du module de prévision. Les paramètres de l'unité de planification et de brèves explications sont les suivants :\*

Tableau 9 : Paramètres de l'unité de planification du module de prévision

## Unités d'équivalence

**<u>Purpose</u>** : permet aux utilisateurs de gérer les unités d'équivalence. Les unités d'équivalence (UE) permettent aux utilisateurs de regrouper des données sur des produits différents, mais liés. Ils permettent aux utilisateurs de regrouper plusieurs unités de prévision pour les agréger dans les [Rapports et sorties] (#forecasting-module-reports-and-outputs).

**<u>Utilisation de cet écran</u> :**

**Mappage des unités d'équivalence avec les unités de prévision**

Utilisez l'écran principal pour gérer les mappages entre les unités d'équivalence et les unités de prévision. Les mappages au niveau du domaine sont disponibles pour tous les utilisateurs et sont indiqués par le programme « Niveau du domaine ». Cependant, les administrateurs du programme peuvent créer des mappages spécifiques au programme (en ajoutant une ligne et en l'identifiant à une UE spécifique). En cas de conflits, les mappages spécifiques au programme auront la priorité et seront utilisés à la place des mappages au niveau du domaine.

Par exemple, un utilisateur prévoit des médicaments pour traiter la QATite, une condition dans laquelle les gens ne peuvent pas arrêter d'utiliser le QAT. L'utilisateur peut prévoir selon différents traitements (différentes unités de prévision), mais il souhaite voir comment ils sont regroupés. Pour l'exemple ci-dessous, un patient aurait besoin de 14 comprimés de FASPicillin, ou 1 tube de FASPasone (crème), ou 0,5 flacon de FASPicaïne, ou 2 barres de chocolat pour traiter la QATite. Ainsi, si différents patients subissent différents traitements, un utilisateur peut regrouper ces différents traitements en créant/utilisant une unité d'équivalence (UE).

| **Unité d'équivalence** | **Unité de prévision** | **Conversion vers l'UE** | **Traitement moyen requis pour guérir la QATite** |
| ----------------------- | ---------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------ |
| 1 Traitement de la QATite | 1 comprimé de FASPicilline | 14 | 1 comprimé par jour pendant 2 semaines |
| 1 Traitement de la QATite | Tube de 5 ml de FASPasone (crème) | 1 | 0,5 mL/jour en application sur le front pendant 10 jours (1 tube au total) |
| 1 Traitement de la QATite | Flacon de 2 ml de FASPicaïne (injection) | 0,5 | Une injection de 1 ml (deux personnes peuvent partager un flacon) |
| 1 Traitement de la QATite | 1 barre de chocolat blanc | 2 | 2 barres de chocolat. Le type de chocolat n’a pas d’importance, car tout chocolat contient la forme naturelle de FASPicilline. |
| 1 Traitement de la QATite | 1 barre de chocolat noir | 2 |                                                                                                                        |
| 1 Traitement de la QATite | 1 barre de chocolat au lait | 2 |                                                                                                                        |

Tableau 10 : Exemple de l'UE – Traitement de la QATite

**Étapes pour créer et gérer des unités d'équivalence**

1. Un utilisateur doit d'abord vérifier si l'UE existe déjà dans les données de base QAT en accédant à « Realm Masters » à « Unités d'équivalence ».

2. Si l'UE n'existe pas, cliquez sur « Gérer l'unité d'équivalence » puis sur « Ajouter une ligne » et les utilisateurs peuvent saisir l'UE qu'ils souhaitent utiliser pour leur programme spécifique dans QAT. Cette UE sera spécifique au programme et ne sera pas disponible pour d'autres programmes. S'il existe une UE qui pourrait bénéficier à la communauté QAT, les utilisateurs peuvent en faire la demande via le [Système d'assistance de billetterie QAT] (#tickets-for-addingupdating-users-and-master-data).

> ![P2819#yIS1](/img/media/image237.png)

3. Si l'UE existe et qu'un utilisateur souhaite mapper les unités de prévision à l'UE existante, il peut cliquer sur « Ajouter une ligne » sur l'écran principal et mapper l'unité de prévision à l'UE au niveau du programme. Si un utilisateur souhaite mapper l'unité de prévision à une UE existante au niveau du domaine et pense que cela profiterait à la communauté QAT, les utilisateurs peuvent en faire la demande via le [Système d'assistance de billetterie QAT] (#tickets-for-addingupdating-users-and-master-data).

> ![P2821#yIS1](/img/media/image238.png)

4. Les utilisateurs peuvent également modifier les UE spécifiques au programme sur l'écran principal.

5. L'utilisateur doit cliquer sur « Soumettre » lorsqu'il a terminé l'édition et la synchronisation des données de base, afin de voir l'UE disponible dans les listes déroulantes des écrans Rapports et Sorties.

**Où les unités d'équivalence sont-elles utilisées ?**

- Dans l'écran « Comparer et sélectionner » du module de prévisions, l'utilisateur peut afficher ses prévisions en UE. En utilisant l'exemple ci-dessus, un utilisateur qui prévoit 10 000 barres de chocolat noir par mois pourrait choisir d'afficher ses prévisions dans l'UE de « Traitements pour la QATite » et d'afficher ses prévisions comme 5 000 « Traitements pour la QATite » par mois à la place.

- Dans l'écran « Prévisions mensuelles » du module de prévision, l'utilisateur peut afficher les prévisions sélectionnées par unités de planification individuelles, ou les regrouper entre les unités de planification si elles sont connectées par des UE. Par exemple, si un utilisateur prévoyait 10 000 barres de chocolat noir, 10 000 barres de chocolat blanc et 14 000 par mois, QAT afficherait 7 000 « Traitements pour la QATite ».

- Dans l'écran « Rapport d'erreur de prévision (mensuel) » du module de planification des approvisionnements, les utilisateurs peuvent également visualiser la consommation réelle et prévue en unités d'équivalence.

| **Prévision** | **Équivalent dans « Traitements de la QATite »** |
| ------------------------------- | ------------------------------------------ |
| 10 000 tablettes de chocolat noir | 5 000 |
| 10 000 tablettes de chocolat blanc | 5 000 |
| 14 000 comprimés de FASPicilline | 1 000 |
| **Total** | **7 000** |