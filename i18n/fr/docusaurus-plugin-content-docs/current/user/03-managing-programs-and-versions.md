---
id: managing-programs-and-versions
title: "Managing Programs and Versions"
sidebar_label: "Managing Programs and Versions"
sidebar_position: 3
---
# Gestion des programmes et des versions

## ![](/img/media/image87.png)Travailler avec les données du programme

|                  |            |             |
| ---------------- | ---------- | ----------- |
|                  | **En ligne** | **Hors ligne** |
| Données provenant d'autrui | Télécharger | Importer |
| Données des utilisateurs | Télécharger | Exporter |

Tableau 6 - Utilisation des données du programme

Les données du programme peuvent être téléchargées, téléchargées, importées et exportées dans QAT.

-> Notez que les programmes de prévision sont totalement différents des programmes de planification des approvisionnements. Assurez-vous que vous êtes dans le bon module avant de télécharger, charger, importer ou exporter.

-> Les utilisateurs doivent **Télécharger** les données du programme pour commencer la planification ou la prévision des approvisionnements et doivent **Télécharger** leurs données sur le serveur pour partager leur travail avec d'autres.

-> Le téléchargement peut être « brouillon » ou « final ». Le téléchargement d’un programme de plan d’approvisionnement comme « final » lance le processus de révision du plan d’approvisionnement. L'état des versions du plan d'approvisionnement peut être consulté dans l'écran **Version et révision du plan d'approvisionnement** : il s'agit de la seule fonction décrite dans cette section qui est disponible pour les visualiseurs de rapports. Le téléchargement d'un programme de prévisions comme « final » permet aux utilisateurs d'importer cette prévision directement dans le module du plan d'approvisionnement. Voir [QAT Forecast Import](04-supply-planning-module-program-data.md#qat-forecast-import) pour plus d'instructions sur la façon d'importer une prévision dans un plan d'approvisionnement.

-> Lorsqu'aucune connexion Internet n'est disponible, la fonction **Exporter** permet aux utilisateurs de partager leurs données avec d'autres utilisateurs via des périphériques externes tels qu'une clé USB/une clé USB, qui peuvent ensuite utiliser la fonction **Importer** de données pour ouvrir ce fichier sur leur ordinateur.

-> Ces fonctions sont accessibles à partir de la barre de menu de gauche sous **Gestion des programmes.**

-> De plus, Download & Upload est accessible à partir de la barre de menu supérieure (voir Figure 32)

![A blue circle with a arrow Description automatically generated](/img/media/image88.png)

Figure 47 Barre de menus

## Télécharger/Supprimer

- <u>Who?</u> Cette fonction est disponible pour **Realm/Program
Administrateurs, utilisateurs du programme et réviseurs du plan d’approvisionnement. Non disponible ou nécessaire pour le rapport
Téléspectateurs**

- <u>Land?</u> L'utilisateur doit être en ligne pour télécharger un programme.

- <u>Pourquoi</u> ? Les utilisateurs doivent télécharger un programme s'ils
souhaitez saisir ou mettre à jour des données, ou prévoir ou planifier activement un approvisionnement (au lieu de
il suffit de consulter les rapports). Les utilisateurs peuvent télécharger un programme lorsqu'ils remarquent que
leur version locale n'est pas la dernière (c'est-à-dire lorsque l'icône de téléchargement est rouge
![P1040\#yIS1](/img/media/image89.png) au lieu du bleu habituel
![P1040\#yIS2](/img/media/image90.png)). Le téléchargement de programmes permet
l'utilisateur de travailler hors ligne. Notez cependant que les programmes <u> doivent être téléchargés </u> pour compléter les fonctions suivantes, <u> voire </u> si l'utilisateur est en ligne :
  - Planification des approvisionnements :
    - Saisir/mettre à jour les données (consommation, inventaire/ajustements, expéditions). Par exemple, si l'utilisateur travaille sur « Détails de la consommation », il doit sélectionner un programme dans la liste donnée. La liste affichera les données uniquement pour les « Programmes » qui ont été téléchargés dans la base de données d'index locale.

    - Plan d'approvisionnement/scénario

    - Afficher la liste des problèmes QAT

    - Dans les rapports, visualisation des données sur l'ordinateur local (et non sur le serveur)

  - Prévisions :
    - Saisir/mettre à jour les données (saisir/importer la consommation réelle, ajouter/éditer des arbres de prévisions, extrapoler, etc.)

    - Dans les rapports de validation ou d'analyse prévisionnelle, visualisation des données sur l'ordinateur local (et non sur le serveur)

- <u>Que se passe-t-il lorsqu'un utilisateur télécharge un programme</u> ?
Lorsque l'utilisateur télécharge un programme, il est stocké dans la base de données d'index locale
au format JSON.

- <u>Comment télécharger un programme</u> :

<!-- fin de liste -->

1. > Déterminez si vous souhaitez télécharger à partir du module de prévision ou de planification des approvisionnements, et accédez au module approprié (voir [Section 2.J Navigation et barre de menus](02-getting-started.md#navigation-and-menu-bar)). Si vous n'avez accès qu'à un seul module, vous pouvez ignorer cette étape.

2. > Allez dans « Gestion du programme » \> « Télécharger/Supprimer le programme ». (Vous pouvez également accéder à cet écran en cliquant sur l'icône ![P1055#yIS1](/img/media/image89.png) dans la barre supérieure droite de QAT). L'écran affichera les données du programme comme indiqué dans la figure ci-dessous.
    -> Le texte rouge indique que le programme téléchargé n'est pas la dernière version. Le texte vert indique que le programme téléchargé est la dernière version. Le texte noir indique que le programme n'est pas téléchargé.

![A screenshot of a computer Description automatically generated](/img/media/image91.png)

Figure 48 : Écran de chargement du programme

3. > Pour télécharger
    1. > Cochez la case à côté du programme que vous souhaitez télécharger. Par défaut, QAT téléchargera la dernière version du programme sélectionné.

    2. > _(facultatif)_ Cliquez sur le bouton triangle à côté du programme pour voir toutes les versions du programme. Les cinq dernières versions seront affichées. Cliquez sur « voir plus » pour afficher les anciennes versions. Utilisez la case à cocher pour sélectionner la ou les versions spécifiques que vous souhaitez télécharger.

![P1063#yIS1](/img/media/image92.png)

Figure 49 : Arborescence des versions – comment développer

3. > Cliquez sur le bouton « **Télécharger** » pour télécharger le programme sur votre système.

<!-- fin de liste -->

4. > Pour supprimer ou nettoyer :
    1. > Cliquez sur le bouton triangle à côté du programme pour voir toutes les versions du programme.

    2. > Sélectionnez l'icône de poubelle ![P1068#yIS1](/img/media/image93.png) à côté de la version du programme que vous souhaitez supprimer. Si vous disposez de plusieurs versions, vous avez également la possibilité de cliquer sur l'icône de nettoyage ![P1068#yIS2](/img/media/image94.png) pour supprimer toutes les versions à l'exception de la dernière version locale.

> ![P1069#yIS1](/img/media/image95.png)

Figure 50 : Arborescence des versions de l'écran de téléchargement – nettoyer et supprimer les icônes

5. > _(facultatif)_ Dans le module de planification des approvisionnements, les utilisateurs peuvent télécharger un sous-ensemble de leurs plans d'approvisionnement à mesure que leurs programmes commencent à avoir plus de données historiques.

<!-- fin de liste -->

- > **Pour ce faire, l'utilisateur clique sur « Télécharger une plage spécifique de données du plan d'approvisionnement » et sélectionne le mois/l'année de début des données qu'il va télécharger.**

-> Si « **Télécharger une plage spécifique de données du plan d'approvisionnement** » est coché, la version du programme sélectionnée n'affichera que les données à partir de la date souhaitée (minimum 18 mois dans le passé).

![A screenshot of a computer Description automatically generated](/img/media/image96.png)

Figure 51 Télécharger une plage spécifique de données

-> **La sélection de la plage de dates s'appliquerait à TOUS les programmes sélectionnés pour le téléchargement. Si l'utilisateur souhaite télécharger un programme complet (programme A) et un programme tronqué (programme B), il doit effectuer le processus de téléchargement deux fois : une pour le programme complet et une autre pour le programme tronqué.**

-> **Les données plus anciennes non téléchargées existent toujours sur le serveur et ne peuvent pas être supprimées ou écrasées.**

-> **Lorsque l'utilisateur télécharge un programme tronqué (v1), le met à jour et télécharge une nouvelle version (v2), la version du serveur inclura l'intégralité des données, tandis que la nouvelle version locale restera tronquée avec la date de début précédemment sélectionnée. L'utilisateur peut supprimer cette version et télécharger la v2 complète à partir du serveur, ou la v2 avec une plage de données différente, selon les besoins**

Remarque : Si vous téléchargez une ancienne version ou si un autre utilisateur télécharge une version ultérieure sur le serveur après le téléchargement, vous verrez un message comme celui ci-dessous dans la figure 36 à chaque fois que la synchronisation des données de base se produit (lors de la connexion, lors du téléchargement d'un nouveau programme ou si l'utilisateur le demande manuellement).

-> Si vous sélectionnez « OK », la dernière version du serveur sera téléchargée et votre version locale sera définitivement supprimée. Veuillez sélectionner « OK » uniquement si vous acceptez d'annuler vos modifications ou si vous n'avez apporté aucune modification.

-> Si vous sélectionnez « annuler », aucune action ne sera effectuée et vous resterez avec votre version locale.

![P1074#yIS1](/img/media/image97.png)

Figure 52 : Avertissement « Serveur plus récent » lors de la connexion de l'utilisateur

## Télécharger

- <u>Qui ?</u>
  - **<u>Supply Planning</u> : administrateurs d'application/domaine/programme et utilisateurs du programme. Non disponible ou nécessaire pour les visionneuses de rapports**

  - **<u>Forecasting</u> : administrateurs d'application/domaine/programme et utilisateurs du programme. Non disponible ou nécessaire pour les visionneuses de prévisions**

- <u>Pourquoi</u> ?
  -> **Téléchargement en tant que <u>draft</u> :**
    - **Plans/Prévisions d'approvisionnement :** Partagez la version locale des données du programme avec le serveur et d'autres utilisateurs (téléchargement en tant que brouillon)

  -> **Téléchargement en tant que <u>final</u> :**
    - **Planification de l'approvisionnement :** Indiquez à tous les utilisateurs que le plan d'approvisionnement a été entièrement mis à jour et lancez également le processus de révision du plan d'approvisionnement.

    - **Prévisions :** Permet d'importer les prévisions finales dans le plan d'approvisionnement

- <u>Que se passe-t-il lorsqu'un utilisateur télécharge un programme</u> ?
Lorsque l'utilisateur télécharge un programme, celui-ci devient la dernière version sur le serveur
et est disponible pour que tous les autres utilisateurs puissent télécharger ou visualiser
  - Notez que si une version tronquée du programme du plan d'approvisionnement a été téléchargée (par exemple v10), lorsque l'utilisateur télécharge sa version locale (devenant v11), la nouvelle version sur le serveur contiendra toutes les données, pas seulement le sous-ensemble avec lequel l'utilisateur a travaillé.

- <u>Land?</u> L'utilisateur doit être en ligne pour télécharger un programme

**Module Plan d'approvisionnement -** Comment télécharger un programme :

1. Assurez-vous que vous êtes dans le module Plan d'approvisionnement
    1. Accédez à « Gestion du programme » \> « Télécharger la version ».

    2. Ou cliquez sur l'icône ![P1097#yIS1](/img/media/image98.png) dans la barre supérieure droite de QAT.

2. ![](/img/media/image99.png)Utilisez la liste déroulante **Programme** pour sélectionner le programme approprié, s'il n'est pas déjà sélectionné (seuls les programmes téléchargés seront visibles).

3. Sélectionnez un **Type de version** à l'aide du menu déroulant :
    1. **Version préliminaire** : indique que le plan d'approvisionnement est un travail en cours. Utilisez-le pour partager un plan d'approvisionnement avec d'autres, mais pas prêt à être soumis au processus de révision du plan d'approvisionnement.

    2. **Version finale** : Indique que le plan d'approvisionnement a atteint un statut final et est en cours de soumission au processus d'examen du plan d'approvisionnement. Notez que QAT ne permettra pas à l'utilisateur de télécharger en tant que version finale des problèmes « ouverts » dans la liste des problèmes QAT. Veuillez utiliser la liste des problèmes QAT (voir [Clôture et résolution des problèmes](06-supply-planning-module-reports.md#closing-and-addressing-problems)) pour marquer tout problème ouvert comme « Adressé » avec une note explicative, ou déplacez le problème vers « conforme » via la saisie des données en premier.

4. Dans **Notes**, saisissez toutes les notes générales sur cette version, par exemple en résumant les principales modifications apportées au plan d'approvisionnement et le raisonnement derrière ces modifications.

5. Dans les 4 onglets – Consommation, Inventaire, Expédition, Liste des problèmes QAT – QAT affichera une comparaison détaillée des détails du plan d'approvisionnement entre la « Version locale » et la « Version serveur ». Examinez chaque onglet pour tous les enregistrements en surbrillance. Les enregistrements jaunes nécessitent votre action avant de pouvoir télécharger le plan d'approvisionnement

> **Explication de la légende** :

-> Vert : représente les modifications qui ont été apportées à la version locale ; en téléchargeant votre programme, ces modifications seront enregistrées sur le serveur en ligne en tant que nouvelle version.

-> Bleu clair : représente les modifications apportées par un autre utilisateur qui ont déjà été téléchargées vers la version en direct/en ligne – comme il s'agit d'un point de données que vous n'avez pas modifié, la version du serveur persistera pour ce/ces enregistrements.

-> Jaune : représente un conflit de données entre la version locale et la version serveur pour la même cellule de données. Vous devez résoudre tous les conflits jaunes avant que le bouton Télécharger n'apparaisse. Pour résoudre un conflit, faites un clic droit sur la ligne concernée et sélectionnez « Résoudre le conflit ». Dans l'écran contextuel, choisissez si vous souhaitez conserver la version locale des données ou la version serveur des données. (voir Figure 32)

![P1109#yIS1](/img/media/image100.png)

Figure 55 Résolution d'un conflit lors du téléchargement du plan d'approvisionnement

6. Après avoir examiné toutes les mises à jour et résolu tous les conflits, cliquez sur le bouton « Télécharger ». QAT fournira un message de confirmation.

7. **(Pour la version finale)** Les planificateurs d'approvisionnement et les réviseurs du plan d'approvisionnement recevront une notification par courrier électronique confirmant que leur plan d'approvisionnement a été téléchargé comme final.

8. **(Pour la version finale)** Les planificateurs d'approvisionnement, les administrateurs de programme et les réviseurs du plan d'approvisionnement, les administrateurs de domaine, les utilisateurs du programme, les visualiseurs de données et les visualiseurs du plan d'approvisionnement recevront une notification par e-mail lorsque leur plan d'approvisionnement est rejeté. Ils peuvent également vérifier l'état de la révision de leur plan d'approvisionnement dans le rapport [Version et révision du plan d'approvisionnement](#supply-plan-version-and-review-supply-plan-module-only).

**Module de prévision –** Comment télécharger un programme :

1. Assurez-vous que vous êtes dans le module de prévisions
    1. Accédez à « Gestion du programme » \> « Télécharger la version ».

    2. ![](/img/media/image101.png)Or, cliquez sur l'icône ![P1119#yIS1](/img/media/image102.png) ou ![P1119#yIS2](/img/media/image103.png) dans la barre supérieure droite de QAT.

2. Utilisez la liste déroulante **Programme** pour sélectionner le programme approprié, s'il n'est pas déjà sélectionné (seuls les programmes téléchargés seront visibles).

3. Sélectionnez un **Type de version** à l'aide du menu déroulant :
    1. **Version préliminaire** : indique que la prévision est un travail en cours. Utilisez-le pour partager une prévision avec d’autres.

    2. **Version finale** : Indique que la prévision a atteint un statut final et peut être importée dans le plan d'approvisionnement. Notez que QAT ne permettra pas à l'utilisateur de télécharger comme final s'il n'y a aucun changement entre la dernière version du serveur et la version en cours de téléchargement.

4. Dans **Remarques**, saisissez toutes les remarques générales sur cette version, par exemple en résumant les principales modifications apportées aux prévisions et le raisonnement derrière ces modifications.

<!-- fin de liste -->

9. Dans les 5 onglets – Paramètres de version, Unité de planification, Consommation, Arbre, Prévisions sélectionnées – QAT affichera une comparaison détaillée des détails entre la « Version locale » et la « Version du serveur ». Examinez chaque onglet pour tous les enregistrements en surbrillance. Les enregistrements jaunes nécessitent votre action avant de pouvoir télécharger votre version

> **Explication de la légende** :

-> Vert : représente les modifications qui ont été apportées à la version locale ; en téléchargeant votre programme, ces modifications seront enregistrées sur le serveur en ligne en tant que nouvelle version.

-> Bleu clair : représente les modifications apportées par un autre utilisateur qui ont déjà été téléchargées vers la version en direct/en ligne – comme il s'agit d'un point de données que vous n'avez pas modifié, la version du serveur persistera pour ce/ces enregistrements.

-> Jaune : représente un conflit de données entre la version locale et la version serveur pour la même cellule de données. Vous devez résoudre tous les conflits jaunes avant que le bouton Télécharger n'apparaisse. Pour résoudre un conflit, faites un clic droit sur la ligne concernée et sélectionnez « Résoudre le conflit ». Dans l'écran contextuel, choisissez si vous souhaitez conserver la version locale des données ou la version serveur des données. (voir Figure 42 Résoudre un conflit lors du téléchargement des prévisions)

![P1131#yIS1](/img/media/image104.png)

Figure 58 Résolution d'un conflit lors du téléchargement des prévisions

5. Après avoir examiné le tableau et confirmé les prévisions sélectionnées, cliquez sur le bouton « Télécharger ». Cela ouvrira une fenêtre contextuelle distincte (« Validation des prévisions »). L'écran **Validation des prévisions** offre aux utilisateurs la possibilité de vérifier leur travail et tout ce qu'ils auraient pu manquer lors de la création et de la sélection des prévisions. L'utilisateur a la possibilité de visualiser les différentes validations uniquement pour les prévisions <u>selected</u> pour chaque unité de planification, ou de visualiser les validations pour les prévisions <u>all</u> dans le programme. Pour modifier ce paramètre, cochez/décochez la case en haut de l'écran. Pour faciliter l'accès, les validations en bleu sont liées à la page de QAT où la validation est signalée. Par exemple, si une prévision n'est pas sélectionnée pour l'une des unités de planification, cliquer sur l'unité de planification dans la page de validation vous dirigera vers l'écran Comparer et sélectionner où vous pourrez sélectionner une prévision.
    1. **Section 1** signale toutes les unités de planification actives qui n'ont pas de prévision sélectionnée.

2. **Section 2** examine toutes les unités de planification actives qui utilisent des prévisions basées sur la consommation. 2a signalera si l'une des prévisions de consommation manque des valeurs de consommation réelles (écart). 2b signalera toutes les unités de planification qui ne disposent pas d’au moins 24 mois de données de consommation. Si la case en haut est cochée, seules les unités de planification avec une prévision de consommation sélectionnée seront marquées. Les unités de planification avec une prévision d'arbre sélectionnée ne seront pas signalées dans cette section.

    3. **La section 3** examine toutes les unités de planification actives qui utilisent la prévision arborescente. Les unités de planification avec une prévision de consommation sélectionnée ne seront pas signalées dans cette section. 3a signale toutes les unités de planification qui n'apparaissent sur aucun arbre. 3b signale toutes les branches d'arbre pour lesquelles il manque une unité de planification. 3c signale tous les nœuds d'arborescence pour lesquels les nœuds enfants du parent ne totalisent pas exactement 100 %. Dans la section 3c, cliquer sur l'icône + développera un tableau avec des détails sur les nœuds et les % signalés.

    4. **Section 4** compile toutes les notes sur les différents écrans du module de prévision. 4a affichera les notes de l'écran de saisie et d'ajustement des données. 4b affichera les notes de l’écran « Gérer l’arborescence ». Ces notes comprennent à la fois des notes spécifiques à l'arbre et des notes spécifiques au scénario. 4c affichera les notes de l'écran « Gérer l'arborescence », en particulier les notes de chaque nœud.

![P1139#yIS1](/img/media/image105.png)

Figure 59 : Validation des prévisions

6. Après avoir examiné toutes les validations et résolu tous les problèmes, cliquez sur le bouton « OK » pour télécharger. QAT fournira un message de confirmation.

## Version et révision du plan d'approvisionnement (module du plan d'approvisionnement uniquement)

- <u>Who?</u> Cette fonction est disponible pour **Application/Royaume/Programme
Administrateurs, utilisateurs du programme, réviseurs du plan d'approvisionnement et visualiseurs du plan d'approvisionnement**

- <u>Land?</u> L'utilisateur doit être en ligne. Réviseurs du plan d’approvisionnement
recevra un e-mail de QAT chaque fois qu'un plan d'approvisionnement est téléchargé comme final (c'est-à-dire
prêt pour examen).

- <u>Pourquoi</u> ? Cette fonction permet aux utilisateurs de **réviser le
état d'examen du plan d'approvisionnement des plans d'approvisionnement.**
  - Les **planificateurs d'approvisionnement** (administrateurs et utilisateurs du programme) peuvent vérifier l'état de leur examen

  - Les **réviseurs du plan d'approvisionnement** peuvent consulter la file d'attente de révision

  - Les **observateurs du plan d'approvisionnement** peuvent vérifier l'état des révisions du plan d'approvisionnement.

- <u>Comment</u> ?

<!-- fin de liste -->

1. > Allez dans « Gestion du programme » \> « Version et révision du plan d'approvisionnement » et l'écran ci-dessous s'affichera. Sélectionnez la période du rapport, le pays, le programme, le type de version et le statut. Dans ce tableau, les utilisateurs peuvent voir l'état de tous les plans d'approvisionnement et les commentaires de version. Les utilisateurs peuvent également utiliser les options de recherche, de filtrage et de tri (voir [Navigation et barre de menus](02-getting-started.md#navigation-and-menu-bar)) pour rechercher des programmes spécifiques.

![A screenshot of a computer Description automatically generated](/img/media/image106.png)

Figure 60 : Versions et révision du plan d'approvisionnement

2. > Cliquez sur n'importe quelle ligne du tableau pour ouvrir les détails de ce plan d'approvisionnement.

> **_Pour les réviseurs du plan d'approvisionnement_** **UNIQUEMENT** –

1. Utilisez le premier onglet « Planification des approvisionnements » pour examiner l'état du stock et les éléments de données d'une unité de planification donnée.

2. Utilisez le deuxième onglet « Liste des problèmes QAT » pour examiner tous les problèmes liés au plan d'approvisionnement.
    1. Utilisez la colonne « **Révisé** » et cochez la case dans chaque ligne au fur et à mesure que vous les examinez. Tous les problèmes autres que « conforme » ou « résolu » doivent être cochés comme « examinés » afin que vous puissiez approuver ou rejeter le plan.

    2. Utilisez la colonne « **Entrer les notes du réviseur** » pour noter tout commentaire destiné au planificateur des approvisionnements.

    3. Mettez à jour le « **Statut du problème** » si nécessaire – Laissez les problèmes comme « **Addressed** » si vous souhaitez que le planificateur des approvisionnements les examine à nouveau lors du prochain cycle de révision (le problème deviendra « ouvert » dans la prochaine version). Marquez les problèmes comme « **Résolu** » s'ils n'ont pas besoin d'être examinés à nouveau, même lors de cycles d'examen ultérieurs. Marquez les problèmes comme « **Ouvert** » si vous souhaitez indiquer au réviseur qu'il doit mettre à jour ses commentaires.

4. S'il existe un problème qui doit être résolu par le planificateur d'approvisionnement, mais qui n'est pas automatiquement signalé par la liste des problèmes QAT, le réviseur peut ajouter un problème manuel en cliquant sur le symbole « + » en haut à droite de l'écran.
        1. Les problèmes manuels doivent être associés à une unité de planification, une criticité, une description et une suggestion. Ces problèmes seront ajoutés dans une ligne distincte dans la liste des problèmes QAT pour que les planificateurs d'approvisionnement puissent les résoudre.

3. Après examen, modifiez le statut du plan d'approvisionnement en **Approuvé** ou Nécessite une révision, fournissez des notes (obligatoires) et cliquez sur « Mettre à jour ».
    1. Utilisez l'historique des notes de version pour afficher les notes globales sur le plan d'approvisionnement au fil du temps.

![A screenshot of a computer Description automatically generated](/img/media/image107.png)

Figure 61 : Bouton Afficher l'historique des notes

> ![A screenshot of a computer Description automatically generated](/img/media/image108.png)

Figure 62 : Exemple d'historique des notes de version

2. **\*Remarque :** Il existe un statut supplémentaire pour « Aucun examen nécessaire » qui peut être utilisé lorsqu'un plan d'approvisionnement en double est téléchargé ou qu'un plan d'approvisionnement est téléchargé en dehors de la fenêtre de période de soumission.\*

![A screenshot of a computer Description automatically generated](/img/media/image109.png)

Figure 63 : Version et révision du plan d'approvisionnement (deuxième écran)

3. > L'utilisateur qui a soumis le plan d'approvisionnement pour examen sera informé par e-mail lorsque sa soumission est approuvée, nécessite une révision ou aucune révision nécessaire. Les règles relatives aux notifications par courrier électronique de révision du plan d'approvisionnement sont les suivantes :
    1. Notification du plan d'approvisionnement final **Téléchargé**
        1. Envoyé à : Tous les réviseurs de plans d’approvisionnement ayant accès à ce programme.

        2. Copie en copie : utilisateur qui a téléchargé la version

        3. Cci : tous les administrateurs du programme ayant accès à ce programme.

    2. Notification du plan d'approvisionnement **Révision des besoins** :
        1. Envoyé à : l'utilisateur qui a téléchargé le plan d'approvisionnement.

        2. Copie en copie : réviseur qui a demandé des révisions à la version

        3. Cci : tous les réviseurs ayant accès à ce programme ainsi que les administrateurs ayant accès à ce programme.

    3. Notification du plan d'approvisionnement **Approuvé** :
        1. Envoyé à : l'utilisateur qui a téléchargé le plan.

        2. Cc'd : tous les utilisateurs qui ont accès à ce programme, à l'exception des administrateurs d'applications et de la visionneuse de rapports.

    4. Notification du plan d'approvisionnement **Aucun examen nécessaire** :
        1. Envoyé à : l'utilisateur qui a téléchargé le plan

        2. Copie en copie : l'examinateur du plan d'approvisionnement

## Exporter

- <u>Who?</u> Cette fonction est disponible pour **Application/Royaume/Programme
Administrateurs, utilisateurs du programme et réviseurs du plan d’approvisionnement. Cette fonction n'est pas disponible
ou nécessaire pour les visionneuses de rapports.**

- <u>Pourquoi ?</u> La fonction « Exporter le programme » est utilisée lorsque
l'utilisateur souhaite exporter le programme vers sa machine locale. En utilisant l'option Exporter
Fonction, les données du programme peuvent être partagées avec d'autres personnes hors ligne. Par exemple, l'utilisateur A peut
exporter un programme et enregistrer ce fichier sur une clé USB pour le partager avec l'utilisateur B, qui est
hors ligne.

- <u>What?</u> Le fichier de données du programme sera exporté dans
le format zip. Le fichier zip contient toutes les données de cette version du programme.
Les utilisateurs peuvent choisir d'exporter au format crypté ou non crypté. Ce fichier pourra par la suite
être partagé avec d'autres pour être importé dans QAT ou, s'il n'est pas chiffré, analysé à l'extérieur
de QAT.

<!-- fin de liste -->

- **Remarque :** si l'utilisateur a téléchargé une version avec une plage de données sélectionnée, l'exportation concernera également cette plage de données sélectionnée.)

![P1190#yIS1](/img/media/image110.png)

Figure 64 : Écran d'exportation du programme

- <u>Comment exporter un programme :</u>

<!-- fin de liste -->

1. > Déterminez si vous souhaitez exporter à partir du module de prévision ou de planification des approvisionnements, et accédez au module approprié (voir [Section 2.J Navigation et barre de menus](02-getting-started.md#navigation-and-menu-bar)). Si vous n'avez accès qu'à un seul module, vous pouvez ignorer cette étape.

2. > Allez dans « Gestion du programme » \> « Exporter le programme »

3. > Sélectionnez le programme à exporter à l'aide de la liste déroulante. Les programmes doivent d'abord être téléchargés avant que l'exportation ne soit disponible. (Voir [Section 3.B Programme de téléchargement/suppression](#downloaddelete)).
    - Si le programme a été téléchargé avec un sous-ensemble de données, l'export sera également limité à ce même sous-ensemble.

4. > Déterminez si vous avez besoin ou non d'une version non cryptée.
    - Pour réimporter dans QAT, laissez la case « Voulez-vous chiffrer » cochée

    - Pour analyser des données en dehors de QAT, décochez la case « Voulez-vous chiffrer »

5. > Cliquez sur le bouton « Soumettre » pour enregistrer les modifications.

6. > Une fenêtre de navigation apparaîtra. Sélectionnez le dossier dans lequel vous souhaitez enregistrer le fichier exporté. Cliquez ensuite sur « Enregistrer ».

7. > Le fichier .zip sera désormais enregistré dans le dossier sélectionné.

8. > Partagez le fichier .zip avec d'autres personnes si nécessaire.

## Importer

- <u>Who?</u> Cette fonction est disponible pour **Application/Royaume/Programme
Administrateurs, utilisateurs du programme et réviseurs du plan d’approvisionnement. Non disponible ou nécessaire pour le rapport
Téléspectateurs**

- <u>Pourquoi ?</u> La fonction « Importer un programme » est utilisée lorsque
l'utilisateur travaille sur le programme en mode hors ligne et souhaite ouvrir un programme
qui a été exporté dans un fichier .zip
  - **Remarque** : Le fichier de données du programme doit être enregistré au format zip). Par exemple, l'utilisateur B peut (en mode hors connexion) importer un programme que l'utilisateur A a exporté et enregistré sur un périphérique externe.

  - **Remarque** : Si l'utilisateur a exporté une version avec une plage de données sélectionnée, l'importation concernera également cette plage de données sélectionnée.

- <u>Lorsque</u> ? Cette fonction peut être utilisée hors ligne ou
en ligne.

![](/img/media/image111.png)

Figure 65 : Écran d'importation du programme

- <u>Comment importer un programme :</u>

<!-- fin de liste -->

1. > Déterminez si vous souhaitez exporter à partir du module de prévision ou de planification des approvisionnements, et accédez au module approprié (voir [Section 2.J Navigation et barre de menus](02-getting-started.md#navigation-and-menu-bar)). Si vous n'avez accès qu'à un seul module, vous pouvez ignorer cette étape.

2. > Allez dans « Gestion du programme » \> « Importer un programme »

3. > Cliquez sur « Parcourir ». Choisissez le fichier requis qui doit être importé. Le fichier sélectionné doit être au format zip. Le fichier zip peut contenir plusieurs programmes.

4. > Cliquez sur « Suivant »

5. > Sélectionnez le programme requis à importer. (si un seul programme est dans le fichier, il sera automatiquement sélectionné)

6. > Cliquez sur le bouton « Importer » pour importer le programme sur la machine locale.

## Comparaison des versions

**<u>Purpose</u> :** Permet aux utilisateurs d'afficher et de comparer 2 versions différentes du même programme de prévisions. Dans cet écran, les utilisateurs sélectionneront un programme de prévision à afficher et à partir de là, sélectionneront 2 versions de ce programme à comparer. L'utilisateur peut sélectionner à la fois les versions locales et celles du serveur, ainsi que les versions brouillon et finale. Si la version est précédée d'un \*, cela indique que la version est définitive. Une fois que l'utilisateur a sélectionné toutes les listes déroulantes, un tableau apparaîtra comparant les deux versions de prévisions. Pour chaque combinaison d'unité de planification et de région, le tableau affichera la prévision sélectionnée, la quantité prévue et les notes pour chacune des 2 versions de prévision. Cet écran est uniquement destiné à des fins de visualisation et aucune modification ne peut être apportée aux prévisions sélectionnées dans cet écran.

![P1227#yIS1](/img/media/image112.png)

Figure 66 : Comparaison des versions

**<u>Utilisation de cet écran</u> :**

1. **Tout d'abord, sélectionnez parmi les filtres de sortie dans les listes déroulantes. Cet écran ne compare qu'un seul programme à la fois, mais permet à l'utilisateur de comparer plusieurs versions de ce programme. L'utilisateur a la possibilité de comparer n'importe quelle combinaison de versions finales et préliminaires ainsi que de versions locales et serveur. Si** la version a un \* à côté, cela indique que la version est définitive. Les notes de version et la période de prévision apparaîtront grisées car ce sont des champs non modifiables. Pour mettre à jour ces champs, accédez à « Mettre à jour les paramètres de version ».

2. Une fois toutes les listes déroulantes sélectionnées, un tableau apparaîtra avec les données des deux versions de prévisions sélectionnées. Pour chaque combinaison d'unité de planification et de région, le tableau affiche la prévision sélectionnée, la quantité totale prévue pour la période de prévision et toutes les notes de prévision pour cette prévision sélectionnée. Chaque côté du tableau représente 1 des 2 versions de prévisions sélectionnées. La ligne supérieure du tableau indique pour quelle version le côté affiche les données.

3. Cet écran peut être exporté au format PDF et CSV en cliquant sur les icônes en haut à droite de la page.