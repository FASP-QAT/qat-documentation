---
id: supply-planning-module-reports
title: "Supply Planning Module: Reports"
sidebar_label: "Supply Planning Module: Reports"
sidebar_position: 6
---
# Module de planification des approvisionnements : Rapports

Les rapports QAT permettent à l'utilisateur d'extraire et d'afficher ses données de planification des approvisionnements sous forme de graphiques, de tableaux et d'autres formats visuels. L'utilisateur pourra également naviguer, trier, filtrer et visualiser les données pour des besoins spécifiques. Les rapports QAT produisent des visualisations et affichent les données de manière à faciliter la prise de décision.

Les rapports sont divisés en **Rapports globaux** et **Rapports spécifiques au programme**. Les rapports spécifiques au programme sont affichés hors ligne et en ligne. Toutefois, les rapports globaux sont affichés uniquement en mode en ligne et ne sont disponibles que pour les utilisateurs globaux, tels que l'administrateur de domaine et l'administrateur d'application.

**Remarque :** Tous les rapports QAT peuvent être exportés dans un fichier Excel CSV ainsi qu'au format PDF. De plus, tous les graphiques permettent à l'utilisateur de survoler un visuel pour afficher une info-bulle contenant plus d'informations.

## Liste des problèmes QAT

**Objectif :** Un examen du plan d'approvisionnement intégré à QAT qui permet un contrôle de qualité pour identifier facilement les données/problèmes problématiques et les corriger avant de télécharger un plan d'approvisionnement sur le serveur en tant que version « ébauche » ou « finale ».

- **Accessible à :** Administrateurs de domaine, administrateurs de programme et utilisateurs du programme

- **Navigation :** Rapports  Liste des problèmes QAT

![P2309#yIS1](/img/media/image198.png)

Figure 120 : Liste des problèmes QAT

**Remarque :** Seul le problème associé aux programmes téléchargés par l'utilisateur sur son ordinateur local apparaîtra dans la liste des problèmes QAT. Pour plus de détails sur la façon de télécharger des programmes et des versions spécifiques, reportez-vous à la section [Télécharger le programme] (#downloaddelete) du manuel de l'utilisateur.

### Bases de la liste des problèmes QAT

Chaque problème signalé dans la liste des problèmes QAT aura une ligne distincte. Celui-ci contiendra l'unité de planification associée, une description du problème, une suggestion sur la façon de résoudre le problème, l'état du problème, des notes d'utilisateur, une case à cocher pour identifier si le problème a été examiné, les dernières notes du réviseur (le cas échéant), la date de sa dernière révision et la criticité.

![P2315#yIS1](/img/media/image199.png)

Figure 121 : Liste des problèmes liés au QAT

Les problèmes QAT peuvent être subdivisés en quatre catégories principales : qualité des données, calendrier d'approvisionnement, planification des approvisionnements et autres. Ils sont également affectés à différents niveaux de criticité : faible (jaune), moyen (orange) et élevé (rouge). La criticité informe les utilisateurs dans quelle mesure un problème affecte la qualité du plan d'approvisionnement. Cependant, quelle que soit leur gravité, tous les problèmes doivent être « Conforme » ou « Résolus » dans la liste des problèmes QAT pour être téléchargés en tant que version finale. Il existe cinq statuts principaux associés aux problèmes individuels dans la liste des problèmes QAT :

1. **Conforme** – Le problème a été résolu grâce à la saisie des données par l'utilisateur. Le statut sera automatiquement modifié et les notes ne seront pas requises.

> _Exemple – Il manque une consommation réelle dans une unité de planification au cours des 3 derniers mois. Un utilisateur saisit les données de consommation réelle des 3 derniers mois. QAT marque automatiquement cela comme « conforme »._

2. **Résolu** – Le problème a été marqué manuellement par le réviseur comme « résolu ». L'examinateur utilise ce statut s'il est peu probable que ce problème soit corrigé via la saisie des données et qu'il ne nécessite pas non plus de notes supplémentaires à l'avenir. Seul un évaluateur peut marquer un problème comme « résolu ».

> _Exemple – Une unité de planification est signalée comme ne suivant pas les prévisions dynamiques. L'utilisateur saisit une note indiquant que cette unité de planification ne suit pas les prévisions dynamiques car il ne s'agit pas d'un produit saisonnier. L'évaluateur marque ce problème comme résolu car l'explication ne changera probablement pas à l'avenir._

3. **Adressé** – Le problème a été marqué manuellement par le réviseur ou l'utilisateur comme « résolu ». L'utilisateur applique ce statut lorsqu'il ne peut pas résoudre le problème via la saisie de données. Ce statut doit être accompagné d'une note. L'évaluateur utilise ce statut si le problème ne peut pas être résolu au cours de cette période d'évaluation, mais qu'il le sera à l'avenir, très probablement dans quelques périodes, plutôt qu'avant la prochaine évaluation.

> _Exemple – Une unité de planification en cours de suppression n'a que 8 mois de consommation prévue dans le futur au lieu de 18. Ceci est acceptable car il s'agit d'une unité de planification en cours de suppression, mais l'utilisateur devra toujours désactiver l'unité de planification une fois qu'elle sera complètement supprimée, c'est pourquoi le problème est marqué comme « résolu » au lieu de « résolu »._

4. **Ouvert** – Ce problème a été automatiquement signalé par QAT, ou le problème a été marqué manuellement par le réviseur comme « Ouvert ». Le réviseur peut utiliser ce statut lorsqu'il rejette un plan d'approvisionnement pour indiquer que les notes ne sont pas acceptées.

> _Exemple – Un utilisateur dispose d'une unité de planification pour laquelle il manque des données de consommation réelle au cours des 3 derniers mois. QAT le signalera automatiquement comme « Ouvert ». Si le problème a été « résolu » lors du téléchargement et de l'approbation, le problème reviendra au statut « Ouvert » pour la prochaine soumission._

5. **Révisé -** Le problème a été examiné par l'examinateur du plan d'approvisionnement. Ce champ est modifiable uniquement par le réviseur du plan d'approvisionnement.

### Clôture et résolution des problèmes

1. > **Clôture d'un problème via la saisie de données** : pour changer un problème « Ouvert » en un problème « Conforme », l'utilisateur devra compléter la suggestion fournie dans la colonne « Suggestion » pour le problème spécifique. Par exemple, la suggestion peut être de « fournir la consommation réelle » pour des mois spécifiques. Ainsi, l'utilisateur devra :

![P2340#yIS1](/img/media/image200.png)

Figure 122 : Clôture d'un exemple de problème

1. Accédez à l'écran de saisie des données de consommation en cliquant directement sur le problème (ce qui ouvrira une nouvelle fenêtre QAT) ou en cliquant sur Données du plan d'approvisionnement  Données de consommation.

2. À partir de l'écran de saisie des données de consommation, l'utilisateur ajoutera la consommation réelle pour les mois demandés. Pour obtenir des instructions sur la façon d'ajouter une consommation, veuillez vous référer à [Données de consommation](#consumption-data).

3. Revenez à la liste des problèmes QAT et cliquez sur Recalculer pour actualiser la liste des problèmes QAT afin d'inclure l'ajout le plus récent des données de consommation réelle. Le problème précédemment signalé devrait désormais être « Conforme » et ne plus être signalé par la liste des problèmes QAT.

![P2346#yIS1](/img/media/image201.png)

Figure 123 : Recalculer/Actualiser la liste des problèmes QAT

1. **Résoudre un problème avec un commentaire** : Si un problème qui a été signalé dans la liste des problèmes QAT ne peut pas être résolu et rendu « conforme » via la saisie de données comme recommandé dans la colonne « Suggestion », un utilisateur peut fournir un commentaire et modifier manuellement le statut en « Traité ». Par exemple, une unité de planification peut être en surstock/sous-stocké et la suggestion de « réévaluer le plan d'approvisionnement pour répondre aux paramètres min/max » est présentée. Si un utilisateur ne parvient pas à résoudre ce problème via la saisie de données, il devra résoudre le problème :
    1. Double-cliquez sur la liste déroulante État du problème pour ce problème et choisissez « Résolu ». Les utilisateurs doivent fournir une note explicative dans la colonne Notes pour tous les problèmes marqués comme « Résolu ».

![P2354#yIS1](/img/media/image202.png)

Figure 124 : Résoudre un problème et ajouter une note

> **Remarque :** l'utilisateur peut également voir dans l'écran « Détails de la transaction du problème » en cliquant avec le bouton droit sur le problème. Cette zone affichera à l'utilisateur les notes passées, les réviseurs, les dates de révision, etc.

![P2358#yIS1](/img/media/image203.png)

Figure 125 : Transaction problématique, clic droit

![P2360#yIS1](/img/media/image204.png)

Figure 126 : Détails de la transaction problématique

2. Cliquez sur « Mettre à jour ». La liste des problèmes QAT inclura désormais l'ajout le plus récent de notes explicatives et le statut.

### Liste des problèmes QAT : Explication des problèmes

- **Données de consommation réelles récentes manquantes (au cours des 3 derniers mois)**

> Si une unité de planification manque de données de consommation réelles récentes au cours des trois derniers mois, elle sera signalée dans la liste des problèmes QAT. Si les données sont renseignées pour l'un de ces trois derniers mois, qu'il s'agisse d'un mois ou de l'ensemble des trois mois, le problème ne sera pas signalé par le système.

- **Éventuels écarts au cours des 6 derniers mois (consommation réelle)**

> QAT vérifie s'il manque à une unité de planification un ou plusieurs mois d'entrées de consommation réelle récentes entre deux entrées de consommation réelle dans la plage de 6 mois spécifiée. Ce problème consiste à rechercher des écarts accidentels dans les intrants de consommation réels. S'il existe des écarts dans les données de consommation réelle au cours des 6 derniers mois, la liste des problèmes QAT le signalera comme un problème. Par exemple, un utilisateur saisit la consommation réelle pour septembre 2022, décembre 2022 et janvier 2023. Cela sera signalé par la liste des problèmes QAT car il existe un écart d'entrées de consommation réelle manquantes pour octobre 2022 et novembre 2022.

- **Entrée d'inventaire récente manquante (au cours des 3 derniers mois)**

> Si une unité de planification manque de données d'inventaire réelles récentes au cours des trois derniers mois, elle sera signalée dans la liste des problèmes QAT. Si les données sont renseignées pour l'un de ces trois derniers mois, qu'il s'agisse d'un mois ou de l'ensemble des trois mois, le problème ne sera pas signalé par le système.

- **Le plan d'approvisionnement ne prévoit pas de consommation au cours des 18 prochains mois**

> Si une unité de planification ne dispose pas des entrées de consommation prévues pour un ou plusieurs mois pendant une période de 18 mois à compter du mois en cours, QAT le signalera comme un problème. QAT vérifiera les écarts pour s'assurer que tous les 18 mois à venir ont des valeurs de consommation prévues.
>
> **\*Remarque :** Si une unité de planification est en cours de suppression progressive, il est recommandé à l'utilisateur de mettre zéro comme consommation prévue, jusqu'à ce qu'elle soit complètement supprimée, auquel cas l'unité de planification devra être désactivée.\*

- **Envois avec des dates de réception passées**

> QAT vérifiera les dates de réception de tous les envois pour voir s'il y en a dans le passé en fonction de la date actuelle. Si la date de réception d'un envoi est antérieure, elle sera signalée dans la liste des problèmes QAT. Par exemple, il existe une unité de planification avec une date de réception du 31 décembre 2022<sup>st</sup>. Comme cette date est passée, QAT la signalera et l'utilisateur devra soit modifier le statut de l'expédition en « Reçu », soit modifier la date de réception en une date ultérieure.
>
> **\*Remarque :** il existe un délai tampon de quatorze jours pour que QAT reconnaisse que la date de réception de l'envoi est passée et que le problème soit signalé.\*

- **Envois qui auraient dû être soumis avant la date cible**

> QAT vérifiera les dates d'expédition estimées, qui sont calculées sur la base des délais de livraison prédéfinis du programme, pour voir s'il y a eu des expéditions avec une date de « Soumission » estimée dans le passé. Si la date estimée de soumission de l'envoi est antérieure, elle sera signalée dans la liste des problèmes QAT. Par exemple, il existe une unité de planification dont la date de soumission cible est le 15<sup>th</sup> janvier 2023. Comme cette date est située dans le passé, QAT la signalera et l'utilisateur devra soit modifier le statut de l'expédition en « Soumis », soit modifier la date de réception en une date plus éloignée dans le futur. Si vous modifiez la date de réception à une date ultérieure, QAT recalculera automatiquement les dates d'expédition cibles. S'il n'est pas possible de modifier le statut ou la date de réception, un utilisateur peut « résoudre » le problème (voir [Closing and Addressing Problems](#closing-and-addressing-problems)).
>
> **\*Remarque :** Il existe un délai tampon de quatorze jours pour que QAT reconnaisse que la date de soumission de l'envoi est passée et que le problème soit signalé.\*

- **La prévision dynamique n'est pas utilisée (pour les groupes de produits Paludisme, ARV, VMMC)**

> Pour tous les produits appartenant aux catégories de traceurs suivantes : Paludisme, ARV ou VMMC, QAT vérifiera les prévisions dynamiques. GHSC-PSM encourage les prévisions avec des valeurs mensuelles dynamiques, afin de montrer que des facteurs tels que la saisonnalité, la mise à l'échelle du programme ou les campagnes ont été pris en compte. Si une unité de planification de l'un de ces trois groupes de produits connaît quatre mois consécutifs de consommation statique, elle sera signalée dans la liste des problèmes QAT.

- **Le plan d'approvisionnement ne suit pas les paramètres minimum/maximum**

> Si une unité de planification est en surstock, en sous-stock ou en rupture de stock à tout moment au cours des 18 prochains mois, elle sera signalée dans la liste des problèmes QAT. QAT comptera le nombre de mois pendant lesquels l'unité de planification est **surapprovisionnée et sous-approvisionnée**, en la subdivisant en deux fenêtres temporelles différentes : les mois compris dans le délai de livraison (1 à 6 mois) et ceux compris dans la fenêtre de planification (7 à 18 mois). La liste des problèmes QAT indiquera également le nombre d’envois reçus au cours des 1 à 6 prochains mois et des 7 à 18 prochains mois. Les **ruptures de stock** seront signalées comme un problème distinct dans la liste des problèmes QAT. QAT indiquera directement quels mois sont en rupture de stock dans les périodes subdivisées de 1 à 6 mois et de 7 à 18 mois. La liste des problèmes QAT indiquera également le nombre d’envois reçus au cours des 1 à 6 prochains mois et des 7 à 18 prochains mois.
>
> **_Plan par MOS :_** Le surstockage est défini par MOS \> MOS maximum. Le sous-stockage est défini par MOS \< Minimum MOS. _Voir_ ci-dessous pour un exemple de problème et le graphique du plan d'approvisionnement qui l'accompagne :

![P2396#yIS1](/img/media/image205.png)

Figure 127 : Le plan d'approvisionnement ne suit pas l'exemple du paramètre MOS min/max

> **\*Remarque :** Si la valeur MOS pour un mois donné est « N/A », alors toutes ces instances sont exclues lors du calcul des problèmes de surstock, de sous-stock ou de rupture de stock.\*
>
> **Exemple de plan par quantité** : Le surstockage est défini par Quantité du solde final \> Quantité maximale. Le sous-stockage est défini par Quantité du solde final \< Quantité minimale. Notez que QAT ne signalera le surstock que si ce surstock se produit plus longtemps que le délai de distribution consécutif (par exemple, si le délai est de 2 mois, alors QAT signalera s'il y a un excédent de stock plus de 2 mois d'affilée - mais ne signalera pas le problème si le surstock est tous les deux mois). _Voir_ ci-dessous pour un exemple de problème et le graphique du plan d'approvisionnement qui l'accompagne :

![P2403#yIS1](/img/media/image206.png)

Figure 128 : Le plan d'approvisionnement ne suit pas l'exemple du paramètre de quantité min/max.

- **Autre – Manuel**

> Il s'agit de questions ou de clarifications spécifiques saisies manuellement par le réviseur du plan d'approvisionnement qui ne sont pas automatiquement signalées par QAT. Ces problèmes peuvent être des éléments que l'examinateur du plan d'approvisionnement souhaite résoudre ce trimestre avant de finaliser ou un rappel pour la prochaine soumission trimestrielle. La description du problème, la suggestion et la criticité sont déterminées par l'examinateur du plan d'approvisionnement.

## Catalogue de programmes

**Objectif** : afficher une liste standardisée de toutes les unités de planification et unités de prévision d'un programme QAT et de leurs attributs correspondants.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Catalogue des programmes

- **Remarques :** Un utilisateur peut sélectionner toutes les catégories d'unités de planification et catégories de traceur, ou choisir une catégorie spécifique à afficher. Si un utilisateur souhaite ajouter une unité de planification qui n'apparaît pas dans le rapport du catalogue de programmes, veuillez vous référer à [Tickets pour l'ajout/la mise à jour d'utilisateurs et de données de base] (#tickets-pour-addingupdating-users-and-master-data).

![P2414#yIS1](/img/media/image207.png)

Figure 129 : Rapport sur le catalogue de programmes

## Rapports sur l'état des stocks

### État des stocks au fil du temps

**Objectif :** comparer un ou plusieurs produits et leurs niveaux de stock sur une période donnée

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  État du stock  État du stock au fil du temps

- **Remarques :** L'unité de planification peut être unique, à sélection multiple ou tout sélectionner. L'option "Sélectionner tout" peut ne pas être avantageuse si le programme comporte de nombreuses unités de planification, car le graphique ne pourra pas distinguer les lignes individuelles du graphique. Nous suggérons de choisir moins de dix produits à la fois. Plus précisément, ce rapport peut être utile pour comparer les catégories.

![A graph of a graph Description automatically generated with medium confidence](/img/media/image208.png)

Figure 130 : Rapport sur l'état des stocks au fil du temps

### Matrice de l'état des stocks

**Objectif :** fournir un aperçu rapide des mois de stock au fil du temps dans un format de tableau facile à lire.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  État des stocks  Matrice de l'état des stocks

- **Remarques :**
  - Une ligne est affichée pour chaque combinaison d'unité de planification et d'année, en fonction de ce qui est sélectionné dans les filtres supérieurs.

  - QAT affichera le MOS ou la quantité pour chaque unité de planification selon que le produit est planifié par quantité ou par MOS, comme sélectionné dans l'écran Mettre à jour les unités de planification (voir <u>Section 4.A2</u>).

  - Les couleurs correspondent aux niveaux de stock du mois en question :
    - Rouge – En rupture de stock

    - Orange – Sous-stocké

    - Vert – Stocké selon le plan

    - Jaune – Surstocké

    - Gris – N/A (QAT est incapable de calculer la valeur en raison de données manquantes)

  - Bien que le CSV n'exporte pas les couleurs formatées conditionnellement, le PDF contient les couleurs et les utilisateurs peuvent copier et coller le tableau pour conserver toutes les couleurs et le formatage.

![P2442#yIS1](/img/media/image209.png)

Figure 131 : Rapport instantané sur l'état des stocks

### Aperçu de l'état des stocks

**Objectif :** donner une vue d'ensemble de l'état des stocks d'un programme dans les unités de planification à un moment donné (un mois).

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  État du stock  Aperçu de l'état du stock

- **Remarques :**
  - Les différentes couleurs correspondent aux niveaux de stock du mois en question :
    - Rouge – En rupture de stock

    - Orange – Sous-stocké

    - Vert – Stocké selon le plan

    - Jaune – Surstocké

    - Gris – N/A (QAT est incapable de calculer la valeur en raison de données manquantes)

  - Bien que les fichiers PDF et CSV n'exportent pas les couleurs formatées de manière conditionnelle, les utilisateurs peuvent copier et coller le tableau pour conserver toutes les couleurs et le formatage.

![P2459#yIS1](/img/media/image210.png)

Figure 132 : Rapport instantané sur l'état des stocks

### Aperçu de l'état des stocks (mondial)

**Objectif :** donner une vue d'ensemble de l'état des stocks d'un programme dans les unités de planification à un moment donné (un mois) pour plusieurs programmes.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, utilisateurs du programme et visualiseurs de rapports

- **Navigation :** Rapports  État du stock  Aperçu de l'état du stock (mondial)

- **Remarques :**
  - Les différentes couleurs correspondent aux niveaux de stock du mois en question :
    - Rouge – En rupture de stock

    - Orange – Sous-stocké

    - Vert – Stocké selon le plan

    - Jaune – Surstocké

  - Bien que les fichiers PDF et CSV n'exportent pas les couleurs formatées de manière conditionnelle, les utilisateurs peuvent copier et coller le tableau pour conserver toutes les couleurs et le formatage.

![P2475#yIS1](/img/media/image211.png)

Figure 133 : Rapport instantané sur l'état des stocks (global)

## Rapports de consommation

### Consommation (mondiale)

**Objectif :** afficher visuellement la consommation d'une ou de plusieurs unités de planification dans différents pays.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, utilisateurs du programme et visualiseurs de rapports

- **Navigation :** Rapports  Rapports de consommation  Consommation (mondiale)

- **Remarques :**
  - Les différentes couleurs empilées dans les barres horizontales représentent différents pays. Les utilisateurs peuvent déterminer quel pays en référençant la légende du graphique.

  - L'axe des abscisses correspond à la quantité consommée (en millions) pour chaque pays.

![P2487#yIS1](/img/media/image212.png)

Figure 134 : Rapport sur la consommation (mondiale)

### Erreur de prévision (mensuelle)

**Objectif :** afficher visuellement l'exactitude des prévisions à l'aide de la méthode du pourcentage d'erreur moyen pondéré (WAPE), au fil du temps, tout en comparant la consommation prévue à la consommation réelle.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports de consommation  Erreur de prévision (mensuel)

![A graph with red and blue bars Description automatically generated](/img/media/image213.png)

> Figure 135 : Rapport d'erreur de prévision (mensuel)

- **Remarques :**
  - Dans le graphique, les barres verticales rouges représentent la consommation réelle, les barres verticales bleues représentent la consommation prévue, la ligne verte (qui utilise l'axe de droite) représente l'erreur de prévision et la ligne pointillée turquoise représente le seuil d'erreur de prévision (voir Figure 115 : Rapport d'erreur de prévision (mensuel)).

- Le seuil d'erreur de prévision (%) par unité de planification est défini par l'administrateur du programme dans l'écran Mettre à jour les unités de planification. Si une erreur de prévision est supérieure au seuil d'erreur de prévision défini (%), elle apparaîtra en rouge dans le tableau de données.

  - La vue Rapport peut être visualisée de plusieurs manières :
    - **Unité de prévision.** Un utilisateur peut choisir de choisir l'unité de prévision lors d'une comparaison en unités de base, par exemple avec des médicaments qui ont des tailles de flacon différentes (unités de planification) partageant la même unité de prévision (par exemple, l'antirétroviral TLD30 vs TLD90 - Voir Figure 116.)

    - **Unité d'équivalence :** Un utilisateur peut souhaiter choisir l'unité de prévision lorsqu'il compare des produits avec différentes unités de prévision, mais avec un certain lien programmatique (par exemple, traitements du paludisme AL 6x1 vs 6x2 – voir Figure 117.)

    - **« Afficher la consommation ajustée en cas de rupture de stock ? » :** Si cette case est cochée, QAT utilise la consommation réelle ajustée au lieu de la consommation réelle. QAT calcule le nombre total de jours dans le mois en fonction du calendrier.

  - Données manquantes :

  -> S'il manque des données pour la consommation prévue ou réelle, il y aura un segment de ligne manquant ou une barre manquante dans le graphique.

  <!-- fin de liste -->
  -> S'il manque des données sur la consommation réelle ou prévue, il ne sera pas possible de calculer l'erreur de prévision et l'utilisateur pourra constater un écart dans le graphique linéaire.

  <!-- fin de liste -->
  - **Formule :** L'erreur de prévision utilise la formule du pourcentage d'erreur moyen pondéré (WAPE). L'exemple ci-dessous utilise les fenêtres temporelles de 6 mois.
    - **Période de temps :** Pour les produits non saisonniers avec un modèle de consommation prévisible, utilisez une fenêtre de temps courte, mais envisagez d'utiliser une fenêtre de temps plus longue pour les produits avec une consommation plus variable ou ceux avec une saisonnalité (utilisez une fenêtre de temps au moins suffisamment longue pour prendre en compte la saison entière).

    - Pour plus de détails sur la logique utilisée par QAT pour calculer ce rapport, voir « Afficher les formules » dans l'outil.

![P2508#yIS1](/img/media/image214.png)

Figure 136 : Formule WAPE avec une fenêtre de temps de 6 mois comme exemple

![A graph with red and blue bars Description automatically generated](/img/media/image215.png)

> Figure 137 : Rapport d'erreur de prévision (mensuel) – affiché par unité de prévision

![A screenshot of a graph Description automatically generated](/img/media/image216.png)

> Figure 138 : Rapport d'erreur de prévision (mensuel) – affiché par unité d'équivalence

### Erreur de prévision (par unité de planification)

**Objectif : **évaluer l'exactitude des prévisions pour des produits sélectionnés au cours d'un mois spécifique dans tous les pays et programmes.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports de consommation  Erreur de prévision (par unité de planification)

- **Remarques :**
  - Pour la fenêtre temporelle, les produits non saisonniers avec un mode de consommation prévisible peuvent avoir une fenêtre temporelle courte, mais ceux qui ont une consommation plus variable/ceux avec des saisons devraient avoir une fenêtre temporelle longue, ou au moins suffisamment longue pour considérer la saison entière.

  - Dans le tableau, les pourcentages d'erreur de prévision supérieurs au seuil d'erreur de prévision (%), défini par un administrateur de programme dans l'écran Mettre à jour les unités de planification, seront surlignés en rouge.

  - S'il manque des données sur la consommation réelle ou prévue, il ne sera pas possible de calculer l'erreur de prévision et l'utilisateur verra un message d'erreur dans le tableau.

  - L'erreur de prévision utilise la formule du pourcentage d'erreur moyen pondéré (WAPE) :

![P2529#yIS1](/img/media/image217.png)

Figure 139 : Formule WAPE

![P2531#yIS1](/img/media/image218.png)

Figure 140 : Rapport sur les erreurs de prévision (par unité de planification)

## Rapports d'expédition

### Expédition (mondiale)

**Objectif :** regrouper les quantités d'approvisionnement par source de financement, agent d'approvisionnement et type d'agent d'approvisionnement dans tous les pays et programmes.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, utilisateurs du programme et visualiseurs de rapports

- **Navigation :** Rapports  Rapports d'expédition  Envois (mondiaux)

- **Remarques :**
  - Les deux graphiques qui apparaissent en premier dans le rapport sur les expéditions (mondiales) représentent la quantité agrégée d'expéditions par pays et le coût des expéditions (en USD) par source de financement pour une seule unité de planification. Pour une vue tabulaire des données, l'utilisateur peut trouver des détails dans les deux tableaux du bas.

- Si un pays n'achète pas l'unité de planification sélectionnée, elle n'apparaîtra pas dans le graphique des tableaux du rapport.

![P2543#yIS1](/img/media/image219.png)

Figure 141 : Rapport sur les expéditions (globales)

### Aperçu de l'expédition

**Objectif :** pour regrouper les quantités d'achats par source de financement ou par type d'agent d'approvisionnement dans tous les pays et programmes.

- **Accessible à :** Administrateurs de domaine, administrateurs/utilisateurs de programme et visualiseurs de rapports

- **Navigation :** Rapports  Rapports d'expédition  Aperçu de l'expédition

- **Remarques :**
  - Une fois accédés à l'écran Aperçu de l'expédition, les utilisateurs verront des listes déroulantes dans lesquelles ils doivent remplir pour afficher des données spécifiques. Une fois certaines listes déroulantes sélectionnées ou toutes, les utilisateurs voient un graphique et un diagramme circulaire. Le graphique qui apparaît en premier dans le rapport de synthèse des expéditions représente la quantité agrégée des expéditions dans tous les pays et le coût (en USD) des expéditions par source de financement dans les unités de planification. Le chat circulaire affiche les pourcentages de la source de financement en fonction des sélections de l'utilisateur tout en pouvant également survoler pour voir le montant total (en USD). Les utilisateurs peuvent également choisir de regrouper les données par type d'agent d'approvisionnement ou par type de source de financement. Pour une vue tabulaire des données, l'utilisateur peut trouver des détails dans le tableau du bas.

![A screenshot of a computer Description automatically generated](/img/media/image220.png)

Figure 142 : Rapport de synthèse des expéditions

### Détails de l'expédition

**Objectif :** fournir une vue complète de toutes les expéditions pour un programme.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'expédition  Détails de l'expédition

- **Remarques :**
  - Les graphiques du haut montrent le total USD par mois par statut d'expédition

  - Il y a deux tableaux sous le graphique : le premier fournit un récapitulatif et le second fournit des informations détaillées sur les expéditions.
    - Le tableau récapitulatif indique le nombre total d'expéditions et les coûts totaux par source de financement pour la période sélectionnée.

    - Le tableau détaillé contient les expéditions désagrégées par unité de planification, etc.

![](/img/media/image221.png)

Figure 143 : Rapport sur les détails de l'expédition

### Détails des frais d'expédition

**Objectif :** fournir une vue simple de toutes les expéditions d'un programme et de leurs coûts totaux.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'expédition  Détails des frais d'expédition

- **Remarques :**
  - Peut être affiché par source de financement, agent d'approvisionnement ou unité de planification.

![P2574#yIS1](/img/media/image222.png)

Figure 144 : Rapport sur les détails des coûts d'expédition

### Aperçu des frais d'expédition

**Objectif :** fournir une vue générale des coûts totaux d'expédition par année civile pour un programme et une unité de planification, par source de financement.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'expédition  Aperçu des coûts d'expédition

- **Remarques :**
  - Ce rapport peut être consulté au format PDF ou Excel (CSV)

  - Ce rapport peut être basé soit sur la date de réception de l'envoi, soit sur la date de soumission de l'envoi.

![A screenshot of a computer Description automatically generated](/img/media/image223.png)

Figure 145 : Rapport de présentation des coûts d'expédition

### Budget

**Objectif :** afficher les différents budgets attribués à un ou plusieurs programmes, les montants alloués aux expéditions, le montant dépensé en trop (le cas échéant) et les montants restants estimés. Cette liste déroulante de programmes dans ce rapport est à sélection multiple puisque plusieurs programmes peuvent partager le même budget.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'expédition  Budget

- **Remarques :**
  - Le graphique montre chaque budget prédéfini dans un programme et s'il est alloué aux expéditions (planifiées ou commandées) et le montant restant.

  - La vue tabulaire du graphique fournit également des informations sur la source de financement pour chaque budget, les dates de début et de fin, ainsi que d'autres informations détaillées.

![P2596#yIS1](/img/media/image224.png)

Figure 146 : Rapport budgétaire

### Délai de livraison de l'agent d'approvisionnement

**Objectif :** afficher les délais de livraison détaillés (en mois) pour toutes les unités de planification, par agent d'approvisionnement.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'expédition  Délai de l'agent d'approvisionnement

![P2604#yIS1](/img/media/image225.png)

Figure 147 : Rapport sur les délais de livraison de l'agent d'approvisionnement

## Rapports d'inventaire

### Expirations

**Objectif :** fournir aux planificateurs des quantités estimées d'unités de planification expirant dans le futur en fonction de la durée de vie du lot/de conservation.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'inventaire  Expirations

- **Remarques :**
  - Ce rapport extrait des données précédemment saisies en incluant des informations sur les lots sur les expéditions, les stocks, la consommation réelle et la durée de conservation par unité de planification. Il affiche les numéros de lot, la date de réception du lot, la durée de conservation de ce lot (ou unité de planification), la date d'expiration et le coût du produit expiré.

  - Le rapport peut inclure les quantités des expéditions planifiées qui devraient arriver et expirer pendant la période sélectionnée.

  - Il calculera (en fonction de la durée de conservation, des projections de stock et de la consommation prévue) la quantité d'un lot particulier qui devrait expirer et quand.
    - Pour le calcul de l'expiration, reportez-vous à [Annexe 2 : Règles commerciales](#annex-2-business-rules)

  - Le rapport calculera le coût du produit expiré, en fonction de la quantité expirée et du prix par défaut de l'unité de planification défini par l'utilisateur dans l'écran Mettre à jour les unités de planification.

  - Le tableau est interactif. Lorsque l'utilisateur clique sur la quantité expirée, QAT ouvrira une fenêtre contextuelle avec le registre des lots.

![P2620#yIS1](/img/media/image226.png)

Figure 148 : Rapport sur les expirations

### Coût de l'inventaire

**Objectif** : pour un mois sélectionné, fournit un coût estimé du stock basé sur le stock disponible réel ou projeté et le prix catalogue de l'unité de planification.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'inventaire  Coût de l'inventaire

- **Remarques :**
  - Le rapport peut inclure les quantités des expéditions planifiées qui devraient arriver pendant la période sélectionnée

  - La colonne de stock peut être basée sur un inventaire réel ou un solde final projeté

  - Ce rapport utilise la formule suivante :

![P2632#yIS1](/img/media/image227.png)

Figure 149 : Formule du coût des stocks

![P2635#yIS1](/img/media/image228.png)

Figure 150 : Rapport sur le coût des stocks

### Rotations des stocks

**Objectif :** afficher le nombre de rotations de stock par unité de planification, programme, pays ou catégorie d'unité de planification à un moment donné. Les rotations de stocks sont un moyen de mesurer la vitesse des plans d’approvisionnement. La rotation des stocks est une mesure de performance clé souvent utilisée pour signaler l’efficacité de la gestion de la chaîne d’approvisionnement. Il s'agit généralement d'une mesure rétrospective, mais comme QAT utilise des données prévisionnelles pour estimer les projections de stocks dans le futur, le rapport peut également être utilisé pour afficher les rotations de stocks estimées en fonction des plans. En général, des rotations plus élevées signifient une chaîne d'approvisionnement plus saine : les produits se déplacent vers l'aval et sont remplacés plus fréquemment par des produits frais. Un faible chiffre d’affaires implique une faible consommation, voire des stocks excédentaires – cela pourrait par exemple indiquer que les objectifs du programme sont trop ambitieux.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'inventaire  Rotations d'inventaire

- **Remarques :**
  - Ce rapport calcule la rotation des stocks à différents niveaux : au niveau de l'unité de planification individuelle, au niveau global pour un programme entier (plusieurs unités de planification) et au niveau global pour un pays entier (plusieurs programmes) ou une catégorie de produits.

  - Rotations d'inventaire planifiées : ce sont les mois de stock possibles pour chaque mois sur 12 mois si les règles d'inventaire fonctionnaient parfaitement en tenant compte du MIN et de l'intervalle de réapprovisionnement de l'unité de planification.
    - Au niveau de l'unité de planification, le rapport utilise le MIN et l'intervalle de réapprovisionnement des paramètres de l'unité de planification pour calculer les rotations de stock « planifiées ».

    - Au niveau du programme (plusieurs unités de planification), QAT utilise le mode de toutes les rotations de stocks planifiées de toutes les unités de planification dans le cadre d'un programme spécifique.

- Au niveau du pays et/ou de la catégorie d'unité de planification, QAT utilise le mode de toutes les rotations de stock planifiées de toutes les unités de planification dans une catégorie de pays/UP spécifique.

  - Rotations réelles des stocks :
    - Au niveau de l'unité de planification, QAT utilise la formule suivante pour chaque unité de planification pour calculer les rotations de stocks réelles :

![P2651#yIS1](/img/media/image229.png)

Figure 151 : Formule de rotation des stocks au niveau de l'unité de planification

- Pour chaque unité de planification, le rapport compare les tours réels et prévus, et calcule le MAPE et le MSE.

- Pour calculer les rotations de stocks réelles au niveau du programme, QAT recherchera le mode dans toutes les unités de planification de ce programme. Si aucun mode ne peut être trouvé, QAT utilisera la moyenne de toutes les unités de planification en fonction de la rotation réelle des stocks de ce programme.

- Pour calculer la rotation réelle des stocks au niveau du pays (ou de la catégorie de produits), QAT recherchera le mode dans tous les programmes. Si aucun mode ne peut être trouvé, QAT utilisera la moyenne.

![P2656#yIS1](/img/media/image230.png)

Figure 152 : Rapport sur les rotations des stocks

### Ajustement des stocks

**Objectif :** afficher une liste de tous les ajustements de stock saisis manuellement dans un programme. Remarque : les ajustements calculés automatiquement ne s'afficheront pas sur ce rapport.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'inventaire  Ajustement des stocks

- **Remarques :**
  - Les ajustements calculés automatiquement (résultant d'une différence entre le solde final projeté et un inventaire) n'apparaissent pas dans ce rapport.

![P2666#yIS1](/img/media/image231.png)

Figure 153 : Rapport d'ajustement des stocks

### Capacité de l'entrepôt (par programme)

**Objectif :** affiche le volume (en mètres cubes) de toutes les régions d'un pays (si un utilisateur saisit ces informations lors de la configuration d'un programme.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, visualiseurs de rapports et utilisateurs du programme

- **Navigation :** Rapports  Rapports d'inventaire  Capacité de l'entrepôt (par programme)

- **Remarques :**
  - Ce rapport est particulièrement utile pour les pays comportant plusieurs régions.

![P2676#yIS1](/img/media/image232.png)

Figure 154 : Capacité de l'entrepôt (par programme)

### Capacité de l'entrepôt (par pays)

**Objectif :** affiche le volume (en mètres cubes) de tous les pays et régions d'un pays (accès au niveau du domaine requis).

- **Accessible à :** Administrateurs de domaine et visualiseurs de rapports

- **Navigation :** Rapports à Rapports d'inventaire à Capacité de l'entrepôt (par pays)

- **Remarques :**
  - Ce rapport est particulièrement utile pour les pays comportant plusieurs régions.

![P2686#yIS1](/img/media/image233.png)

Figure 155 : Capacité des entrepôts (par pays)