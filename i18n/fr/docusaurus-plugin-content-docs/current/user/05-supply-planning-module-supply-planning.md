---
id: supply-planning-module-supply-planning
title: "Module de planification des approvisionnements : Planification des approvisionnements"
sidebar_label: "Module de planification des approvisionnements : Planification des approvisionnements"
sidebar_position: 5
---
# Module de planification des approvisionnements : Planification des approvisionnements

## Planification des approvisionnements : un aperçu

![](/img/media/image153.png)

Figure 99 : Écran de planification des approvisionnements – Plan par MOS

![](/img/media/image154.png)

Figure 100 : Écran de planification des approvisionnements – Planifier par quantité

- <u>Qu'est-ce que</u> ? Tous les principaux points de données (consommation,
expéditions, inventaire) se rejoignent sur l'écran de planification des approvisionnements, et c'est
où la plupart des utilisateurs de QAT passeront la majorité de leur temps. Les utilisateurs peuvent cliquer sur
plusieurs cellules du tableau pour modifier directement leurs données. Il est recommandé
pour utiliser cet écran pour la planification active des approvisionnements (y compris les mises à jour des données et
planifier de nouvelles expéditions), mais d'utiliser l'écran de saisie des données lorsque cela est important
la saisie des données est requise. Notez que certaines sections varient **selon que le
l'unité de planification est planifiée par MOS ou planifiée par Quantité (selon la sélection dans
[Mise à jour des unités de planification](04-supply-planning-module-program-data.md#planning-units)) – les différences sont notées ci-dessous.**
  - Cet écran est également visible par l'unité de reporting alternative (ARU) associée à l'unité de planification. Cela signifie que les utilisateurs peuvent visualiser leurs plans d'approvisionnement en termes de noms de produits et d'unités de mesure dans lesquelles ils saisissent les données, les valeurs du tableau et du graphique changeant en fonction du facteur de conversion ARU/PU établi par l'utilisateur (voir Autres unités de rapport). L'utilisateur choisit d'afficher par ARU en cliquant sur le bouton radio, puis en sélectionnant l'ARU souhaité à afficher.

![A screenshot of a calendar Description automatically generated](/img/media/image155.png)

Figure 101 : Tableau de planification des approvisionnements – par unité de planification et par unité de reporting alternative

- <u>Qui ?</u> **Administrateurs de domaine, administrateurs de programme**, **Approvisionnement
Les réviseurs de plan** et les **utilisateurs du programme** peuvent ajouter/modifier des données dans le plan d'approvisionnement.
Certains rôles « affichage uniquement » peuvent afficher le plan d'approvisionnement.

- <u>Land?</u> À tout moment. L'utilisateur n'a pas besoin d'être
en ligne. Cependant, ils doivent avoir téléchargé un programme sur leur ordinateur local
en ligne avant de commencer.

- <u>Comment</u> ?

> **Remarque :** autre que l'étape 1 étant requise, les étapes restantes ne sont pas séquentielles, mais une explication des fonctionnalités disponibles dans l'écran de planification des approvisionnements.

1. > Dans la barre de menu de gauche, allez dans Planification des approvisionnements \> « Planification des approvisionnements »
    1. Sélectionnez le **Programme** souhaité. La liste déroulante de l'écran du plan d'approvisionnement affichera tous les programmes téléchargés par l'utilisateur. Reportez-vous à [Télécharger le programme](03-managing-programs-and-versions.md#downloaddelete) pour plus de détails sur la façon de télécharger un programme.

    2. Sélectionnez l'**unité de planification QAT ou l'unité de reporting alternative (ARU)** souhaitée.

![](/img/media/image156.png)

2. > L'écran affiche deux onglets Plan d'approvisionnement : **Plan d'approvisionnement local** et **Serveur** **Plan d'approvisionnement - VX.** L'onglet « Plan d'approvisionnement local » est la version locale qui a été sélectionnée sous « programme » et qui peut être modifiée. Le « Plan d'approvisionnement du serveur » est la dernière version disponible sur le serveur et est uniquement disponible pour visualisation (non modifiable).

![P2040#yIS1](/img/media/image157.png)

3. > Par défaut, les 3 derniers mois et les 15 mois futurs à partir de la date actuelle sont affichés. Utilisez **Faites défiler vers la gauche/droite** pour afficher les données des 3 mois passés/futurs.

![P2044#yIS1](/img/media/image158.png)

> Cliquez sur « Afficher les formules » en haut à droite de l'écran pour obtenir des explications sur les calculs sur cet écran.

![](/img/media/image159.png)

4. > Cliquez sur les icônes PDF et CSV pour exporter ce rapport et inclure toutes les unités de planification du programme. En PDF, seul le graphique du produit sélectionné sera inclus, mais il y aura des tableaux pour chaque unité de planification.

![P2050#yIS1](/img/media/image160.png)

5. > Comprendre les calculs du solde des stocks dans la moitié supérieure du tableau :

![](/img/media/image161.png)

Figure 102 : Fin du calcul du solde des stocks

-> **Solde d'ouverture** représente la quantité de stock au début du mois. Il est égal au solde de clôture du mois précédent, sauf le tout premier mois du programme, où le solde d'ouverture est nul. Il peut s'agir d'un inventaire du mois précédent (**en gras**) ou d'une valeur projetée (en gras).

-> **Solde de fin** représente la quantité de stock à la fin du mois. Il peut s'agir d'un inventaire (**en gras**) ou d'une valeur projetée (en gras).

-> Suivez les signes +/- à côté de chaque ligne pour comprendre comment fonctionnent les calculs du solde d'ouverture au solde de fin.

<!-- fin de liste -->

6. > La moitié inférieure du tableau contient plus de détails pour aider l'utilisateur à interpréter l'état du stock.

![](/img/media/image162.png)

Figure 103 Différences dans le tableau de planification des approvisionnements : plan par MOS et plan par quantité

-> **La consommation mensuelle moyenne (AMC)** est une moyenne des consommations sur les mois indiquées par les paramètres AMC, qui sont affichés au-dessus du tableau. **Pour modifier ces paramètres, voir [Mise à jour des unités de planification](04-supply-planning-module-program-data.md#planning-units).**

![](/img/media/image163.png)

Figure 104 Différences dans la légende de la planification des approvisionnements : plan par MOS et plan par quantité

-> **Demande non satisfaite.** Quantités estimées de produit qui auraient été consommées si un stock suffisant était disponible :
  -> Lorsque la consommation prévisionnelle est supérieure au stock disponible de départ prévu.

  -> **Lorsque la consommation réelle inclut les jours de rupture de stock**

  -> **Lorsqu'un ajustement manuel négatif est supérieur au solde de clôture projeté**

  -> La fonctionnalité de demande non satisfaite de QAT est ce qui capture ce qui aurait été un stock négatif dans l'ancien logiciel PipeLine.

-> **La deuxième rangée en partant du bas**
  -> **Planifié par MOS : Les mois de stock** sont calculés comme le solde de clôture du mois divisé par l'AMC.

  -> **Planifié par quantité : la quantité maximale est calculée comme la quantité minimale + la fréquence de réapprovisionnement x AMC.**

-> Code couleur de l'état du stock
  -> **Planifié par MOS : La ligne « Mois de stock »** est codée par couleur en fonction de l'état du stock en utilisant le code couleur affiché dans la légende. L'état du stock est déterminé en comparant le MOS avec le MIN MOS et le MAX MOS.

  - > **Planifié par quantité : la ligne « Solde final » est codée par couleur en fonction de l'état du stock** en utilisant le code couleur affiché dans la légende. L'état du stock est déterminé en comparant la quantité du « solde final » avec la quantité minimale (fournie par l'utilisateur) et la quantité maximale (calculée).

<!-- fin de liste -->

7. > **Lecture du graphique d'état des stocks.** Les dates sur ce graphique suivent le tableau. Par défaut, tous les éléments du graphique sont affichés. Cliquez sur n'importe quel élément de données dans la légende pour masquer un élément de données. Le graphique État du stock comporte deux axes verticaux (Y) :

<!-- fin de liste -->

-> L'**axe principal (à gauche) est en unités** et représente les expéditions, la consommation, le stock et les expirations. Pour Planifier par quantité, les quantités minimales et maximales utilisent l'axe principal.

![](/img/media/image164.png)

Figure 105 Graphique de planification des approvisionnements - Axe principal (Plan par MOS)

![](/img/media/image165.png)

Figure 106 Graphique de planification des approvisionnements - Axe principal (planification par quantité)

-> Pour le plan par MOS, il y a un **axe secondaire (à droite) en mois**, et représente les paramètres de stock (minimum, maximum) et les mois de stock calculés.

![](/img/media/image166.png)

Figure 107 Graphique de planification des approvisionnements - Axe secondaire (Plan par MOS)

## Planification des approvisionnements : Consommation

Dans le tableau de planification des approvisionnements, un seul chiffre s'affichera par mois pour l'ensemble du programme dans la ligne de consommation. Comme indiqué dans la légende, la **_consommation prévue_** est indiquée par un texte en italique violet, tandis que la **consommation réelle** est indiquée par un texte noir non italique.

![P2093#yIS1](/img/media/image167.png)

> ![P2094#yIS1](/img/media/image168.png)

![](/img/media/image169.png)**Pour ajouter ou modifier des enregistrements de consommation**

1. Cliquez sur le mois et la cellule de la ligne Consommation dans l'écran de planification des approvisionnements. Une nouvelle fenêtre intitulée Détails de la consommation apparaîtra. Dans le tableau qui apparaît, chaque ligne représente une région. Les programmes monorégionaux n’auront qu’une seule ligne, tandis que les programmes multirégionaux auront plusieurs lignes. Le total montre la consommation agrégée pour toutes les régions.

2. Cliquez sur l'enregistrement de consommation de n'importe quel mois et région pour afficher plus de détails*.* Tous les enregistrements pour ce mois et cette région s'afficheront ci-dessous.

3. Pour créer un nouvel enregistrement, faites un clic droit sur la ligne de détails et sélectionnez « Ajouter une nouvelle consommation » <u>or</u> cliquez sur le bouton « + Ajouter une ligne ».

4. Pour modifier un enregistrement, cliquez sur n'importe quelle cellule et modifiez les détails de la consommation (type de consommation, source de données, quantité, etc.). Double-cliquez pour activer les listes déroulantes. Voir [Données de consommation](04-supply-planning-module-program-data.md#consumption-data) pour des conseils supplémentaires sur la saisie des données de consommation.

5. Cliquez sur « Soumettre » pour enregistrer les modifications et revenir à l'écran principal de planification des approvisionnements, où vos modifications seront reflétées. ![A screenshot of a computer Description automatically generated](/img/media/image170.png)

## Planification des approvisionnements : expéditions

Par défaut, les expéditions ne sont affichées que sur une seule ligne dans l'écran de planification des approvisionnements : il s'agit de la quantité globale de toutes les expéditions (à l'exclusion des expéditions suggérées). Pour afficher plus de détails, cliquez sur l'icône + à gauche de la ligne « + Expéditions » pour développer et afficher les sous-lignes. Vous verrez cinq lignes divisées par statut de commande (ligne du haut pour les expéditions suggérées qui sont automatiquement calculées).

**Pour voir une répartition détaillée de toutes les expéditions au cours d'un mois, cliquez sur la cellule du mois correspondant dans la ligne « + Expéditions ». Pour voir la répartition détaillée de toutes les expéditions par statut, cliquez sur la cellule du mois correspondant dans la ligne de statut individuel.**

**ERP (Enterprise Resource Planning)** : les données liées à l'ERP provenant des agents d'approvisionnement ne sont pas modifiables (voir [ERP Shipment Linking](04-supply-planning-module-program-data.md#erp-shipment-linking))

Pour toutes les lignes d'expédition, les couleurs indiquent l'agent d'approvisionnement. Si un mois comporte plusieurs expéditions avec différents agents d'approvisionnement, la cellule sera verte. Les triangles rouges en haut à droite de la cellule indiquent qu'un envoi est une urgence. Si l'envoi est un approvisionnement local, il y aura une icône L en bas à gauche de la cellule. Si l'envoi est lié à l'ERP, il y aura une icône de lien en haut à gauche de la cellule. Les expéditions peuvent avoir plusieurs icônes, telles qu'une commande d'urgence locale liée à l'ERP. La légende apparaît en haut de l'écran.

![](/img/media/image171.png)

![](/img/media/image172.png)

Figure 108 Expéditions dans la planification des approvisionnements

Les sections suivantes expliquent comment mettre à jour les expéditions existantes et créer de nouvelles expéditions dans l'écran de planification des approvisionnements. Voir <u>**Données d'expédition**</u> pour plus de conseils sur les champs de données d'expédition, qui s'appliquent à l'écran de saisie des données d'expédition et à l'écran de planification des approvisionnements.

### Mettre à jour un envoi existant

1. Cliquez sur la cellule représentant le mois et l'expédition à modifier. En cliquant sur la ligne « + Expéditions », un onglet s'ouvrira avec toutes les expéditions de ce mois, quel que soit leur statut. En cliquant sur l'une des lignes de statut, vous ouvrirez un onglet affichant uniquement les expéditions de ce mois avec ce statut.

![A screenshot of a computer Description automatically generated](/img/media/image173.png)

2. La fenêtre contextuelle Détails de l'envoi apparaîtra. Apportez toutes les modifications souhaitées. Pour mettre à jour les informations sur le lot ou la date, cliquez avec le bouton droit sur la ligne d'expédition. Le haut de la fenêtre contextuelle permet aux utilisateurs de naviguer vers un mois différent pour apporter également des modifications à ces expéditions.

![](/img/media/image174.png)

3. Cliquez sur « Soumettre » pour enregistrer les modifications et revenir à l'écran principal de planification des approvisionnements, où les modifications seront reflétées (**Remarque :** Le bouton Soumettre n'apparaîtra pas si tous les champs obligatoires ne sont pas remplis.)

![A screenshot of a computer screen Description automatically generated](/img/media/image175.png)

**Remarque :** L'expédition planifiée a été modifiée en Expédié, ce qui indique que les 130 000 ont maintenant été déplacés de la ligne « Planifié » vers la ligne « Expédié et arrivé ».

![](/img/media/image176.png)

**Rappel :** Des info-bulles sont fournies pour vous aider à savoir où mettre à jour des paramètres spécifiques. Ceux-ci clarifient ce que les utilisateurs doivent mettre à jour.

**Mise à jour de la quantité expédiée avec le bouton Recalculer**

Pour les expéditions prévues à l'avenir, QAT suggérera une quantité d'expédition révisée à titre d'avertissement précoce afin d'éviter de descendre en dessous des niveaux de stock minimum. Tout comme les expéditions suggérées (voir [Créer un nouvel envoi](#creating-a-new-shipment)), QAT ne fournira le bouton de recalcul que si l'envoi tombe dans un mois inférieur au minimum suivi d'au moins deux mois également inférieurs au niveau de stock minimum. La quantité recommandée par le bouton de recalcul suivra la même logique que les expéditions suggérées par QAT (voir **Règles pour les expéditions suggérées** ci-dessous).

Vous trouverez ci-dessous les étapes à suivre pour utiliser le bouton de recalcul dans l'écran Planification des approvisionnements :

Accédez à une expédition planifiée dans le futur où le mois en cours et au moins les 2 mois suivants sont inférieurs au niveau de stock minimum.

Faites un clic gauche sur l'envoi.

Recherchez la colonne « Quantité commandée » et faites un clic droit.

Cliquez sur « Recalculer ». Un message contextuel apparaîtra vous indiquant la quantité que QAT suggère d'ajouter et la quantité de l'envoi révisé.

![P2155#yIS1](/img/media/image177.png)

Figure 109 : Bouton Recalculer

Cliquez sur « OK ». La fenêtre contextuelle disparaîtra et la quantité de commande révisée apparaîtra dans la colonne « Quantité commandée ». Cliquez sur « Soumettre » si vous souhaitez procéder à la quantité de commande révisée. À tout moment, l'utilisateur peut remplacer la quantité en double-cliquant dans la cellule et en saisissant une nouvelle quantité.

La quantité révisée sera désormais reflétée dans le plan d'approvisionnement.

### Création d'un nouvel envoi

Il existe deux manières de créer de nouvelles expéditions : 1) en convertissant une expédition suggérée par QAT en une expédition planifiée ou 2) en ajoutant manuellement une expédition.

Pour **Convertir une** **Expédition suggérée** en une expédition planifiée :

1. Cliquez sur la ligne Envoi suggéré sous le mois souhaité.

2. La fenêtre contextuelle Détails de l'envoi apparaîtra. Modifiez le statut au statut souhaité, remplissez les champs obligatoires, indiqués par un astérisque. Double-cliquez pour activer les listes déroulantes. Faites défiler vers la droite pour voir tous les champs. Passez la souris sur les info-bulles si des éclaircissements sont nécessaires (illustré dans l'image ci-dessous). La quantité commandée sera pré-remplie par la quantité commandée suggérée.

![](/img/media/image178.png)

![A screenshot of a computer Description automatically generated](/img/media/image179.png)

3. Cliquez sur « Soumettre » pour enregistrer les modifications et revenir à l'écran principal de planification des approvisionnements, où les modifications seront reflétées (**Remarque** : le bouton Soumettre n'apparaîtra pas si tous les champs obligatoires ne sont pas remplis).

**Règles pour les expéditions suggérées :**

> <u>Pour Plan par MOS :</u>

1. L'unité de planification est-elle sous-approvisionnée (MOS\<Min) for 3 straight months?
    1.  If yes, suggested shipment will bring the current month’s stock level to **maximum**.

    2.  If no, no suggested shipment.

2.  If the planning unit is stocked out, QAT will always suggest a shipment.
    1.  If both of the next 2 months are \<Min, the suggested shipment will bring the current month’s stock level to **maximum.**

    2.  If 1 of the next 2 months is \>Min, l'expédition suggérée ramènera le niveau de stock du mois en cours à **minimum.**

3. Si AMC = 0 ou N/A, aucune expédition suggérée ne sera proposée pour ce mois.

> <u>Pour Planifier par Quantité :</u>
>
> Où le mois N est le mois pour lequel QAT calcule, et X = délai de distribution

1. > Si AMC = 0 ou N/A pour le Mois N, pas d'expédition suggérée

2. > Si le Mois N est en rupture de stock (Solde final = 0), QAT proposera toujours une expédition

<!-- fin de liste -->

1. > Si les deux prochains mois (N+1, N+2) sont \< quantité minimum, l'expédition suggérée est la quantité qui amènerait le mois N à **quantité maximale.**

2. > Si l'un ou les deux mois suivants (N+1 ou N+2) est \> quantité minimale, l'expédition suggérée est la quantité qui amènerait le mois N à **quantité minimale.**

<!-- fin de liste -->

3. > Le produit est-il en sous-stock (solde final \< Quantité min) pendant 3 mois consécutifs (Mois N, N+1, N+2) ?

<!-- fin de liste -->

1. > Si oui, l'expédition suggérée est la quantité qui amènerait le mois N à **quantité maximale.**

2. > Si non, pas d'envoi suggéré

_QAT place la quantité suggérée dans le mois N-X. Autrement dit, X mois avant le Mois N, où X est le délai de distribution._

**Pour créer manuellement un nouvel envoi :**

1. Cliquez sur la cellule représentant le mois auquel l'envoi doit être ajouté. En cliquant sur la ligne « + Expéditions », un onglet s'ouvrira avec toutes les expéditions de ce mois, quel que soit leur statut. En cliquant sur l'une des lignes de statut, vous ouvrirez un onglet affichant uniquement les expéditions de ce mois avec ce statut. L’une ou l’autre option fonctionnera pour l’ajout d’un nouvel envoi.

2. La fenêtre contextuelle Détails de l'envoi apparaîtra. Pour ajouter une nouvelle ligne, cliquez sur le bouton « + Ajouter une ligne » ou faites un clic droit sur n'importe quelle ligne et sélectionnez « Ajouter un nouvel envoi ». Double-cliquez pour activer les listes déroulantes. Passez au statut, à la quantité souhaités et complétez les champs obligatoires indiqués par un astérisque. Faites défiler vers la droite pour voir tous les champs.

3. Pour créer plusieurs nouveaux envois, faites un clic droit sur n'importe quelle ligne et sélectionnez « Ajouter un nouvel envoi » ou cliquez sur le bouton « + Ajouter une ligne ».
    1. Faites attention aux icônes d’info-bulles pour vous aider à déterminer quels paramètres spécifiques doivent être mis à jour.

> ![A close up of a white background Description automatically generated](/img/media/image180.png)

![P2201#yIS1](/img/media/image181.png)

4. Cliquez sur « Soumettre » pour enregistrer les modifications et revenir à l'écran principal de planification des approvisionnements, où les modifications seront reflétées (**Remarque :** Le bouton Soumettre n'apparaîtra pas si tous les champs obligatoires ne sont pas remplis.)

## Planification des approvisionnements : inventaire/ajustements

Dans le tableau de planification des approvisionnements, un chiffre s'affichera par mois pour l'ensemble du programme dans la ligne **manuel** **ajustements**, quel que soit le nombre d'ajustements manuels effectués. De même, le **solde final** comportera toujours une seule ligne, que le solde final soit projeté par QAT ou fourni par l'utilisateur sous forme d'inventaire.

![](/img/media/image182.png)

1. ![](/img/media/image169.png) Pour ajouter ou modifier des enregistrements d'ajustement ou d'inventaire, cliquez sur le mois et la cellule sur les lignes d'ajustement ou de solde de clôture dans l'écran de planification des approvisionnements.
    1. Une nouvelle fenêtre intitulée **Ajustements et détails de l'inventaire** apparaîtra. Dans le tableau qui apparaît, chaque ligne représente une région. Les programmes monorégionaux n’auront qu’une seule ligne, tandis que les programmes multirégionaux auront plusieurs lignes.

    2. Le total montre les ajustements et les stocks agrégés pour toutes les régions.

    3. Cliquez sur l'enregistrement d'un mois et d'une région pour afficher plus de détails

![P2222#yIS1](/img/media/image183.png)

2. Tous les enregistrements pour ce mois et cette région s'afficheront ci-dessous.
    - Pour ajouter un ajustement ou un enregistrement d'inventaire, cliquez sur ajouter une ligne, ou faites un clic droit sur le tableau du bas et sélectionnez « Ajouter un nouvel ajustement » ou « Ajouter un nouvel inventaire ». Entrez les détails requis. Pour les ajustements, les utilisateurs peuvent saisir des ajustements positifs et négatifs, passés et futurs, et des notes sont requises.

![P2227#yIS1](/img/media/image184.png)

- Pour modifier un enregistrement, cliquez sur n'importe quelle cellule à modifier.

<!-- fin de liste -->

3. **Remarque :** Un utilisateur peut vérifier quel lot affecte son solde de clôture pour un mois particulier, en cliquant sur « Inventaire final » dans la fenêtre contextuelle « Ajustement et détails de l'inventaire ».

![P2232#yIS1](/img/media/image185.png)

Figure 111 : Lots inclus dans la fenêtre contextuelle de l'inventaire final

4. Pour les mois avec un enregistrement d'inventaire, l'utilisateur peut cliquer sur modifier les quantités de lots.
    - Remarque : la redistribution des quantités de lots doit être le dernier recours. Il est toujours préférable de mettre à jour les informations en amont (expédition, consommation, ajustement) plutôt que de mettre à jour les informations des lots de stocks.

    - Comment faire ?
      1. Assurez-vous qu'il y a un inventaire réel/manuel pour le mois

      2. Cliquez sur « inventaire final » pour récupérer les lots

      3. Tapez la quantité réelle – utilisez les listes déroulantes si vous souhaitez modifier les lots

      4. N'oubliez pas que le total des lots doit correspondre au total de l'inventaire du mois.

    - Cliquez avec le bouton droit sur n'importe quel lot pour afficher le grand livre des lots (pour en savoir plus, consultez [Planification des approvisionnements : informations sur les stocks et les lots expirés du projet] (#supply-planning-project-expired-stock-and-batch-information).)

> ![](/img/media/image186.png)

Figure 112 : Fenêtre contextuelle des lots affectant l'inventaire final

## Planification des approvisionnements : informations sur les stocks et les lots expirés du projet

![](/img/media/image187.png)ULes utilisateurs peuvent afficher le stock expiré projeté, le cas échéant, pour chaque mois de leur plan d'approvisionnement dans la ligne P**Stock expiré projeté**. En cliquant sur <u>cell</u>, une fenêtre contextuelle apparaîtra avec les détails d'expiration.

![](/img/media/image188.png)

À partir de la fenêtre contextuelle, les utilisateurs peuvent exécuter 2 fonctions :

1. **Modifiez le lot qui a contribué à l'expiration** : Cliquez sur le numéro de lot. QAT redirigera automatiquement l'utilisateur vers l'envoi à partir duquel le lot a été généré. À partir de l'écran d'expédition, un utilisateur peut modifier le nom du lot, la date d'expiration et la quantité d'expédition.

![P2240#yIS1](/img/media/image189.png)

> **Remarque :** Les utilisateurs peuvent également modifier ces informations dans l'écran de saisie des données d'expédition (voir [Données d'expédition](04-supply-planning-module-program-data.md#shipment-data)).

2. **Afficher le grand livre des lots :** Cliquez sur la cellule <u>Expired Quantity</u>. QAT ouvrira automatiquement un écran contextuel ci-dessous avec le grand livre des lots, qui indique la durée de vie d'un lot mois par mois, de la réception de l'expédition à l'expiration.

![P2247#yIS1](/img/media/image190.png)

> **Remarque :** à moins que l'utilisateur n'associe un lot à des entrées de consommation réelle ou d'ajustement spécifiques (voir « Ajouter/mettre à jour les détails du lot » dans [Données de consommation](04-supply-planning-module-program-data.md#consumption-data) et [Données d'inventaire](#inventaire-data)), QAT utilisera par défaut les quantités de lots mensuelles placées dans la colonne « Auto-alloué » dans le grand livre des lots.

## Planification de scénarios

QAT fournit aux utilisateurs des scénarios prédéfinis pour la planification des approvisionnements. Cette fonctionnalité permettra aux utilisateurs d'apporter des modifications et de visualiser leurs données de différentes manières, sans nécessairement affecter leur plan d'approvisionnement actuel. Les utilisateurs peuvent appliquer un ou plusieurs scénarios à leurs données pour voir comment ces changements affectent les projections de stocks. Le ou les scénarios sélectionnés peuvent ensuite être appliqués à un plan d'approvisionnement actuel, créant ainsi une nouvelle version.

Il existe actuellement six scénarios prédéfinis disponibles pour les utilisateurs ; d'autres peuvent être programmés dans QAT en fonction des besoins et des cas d'utilisation. Les utilisateurs de QAT peuvent demander de nouveaux scénarios en créant un ticket. Le besoin de nouveaux scénarios sera géré de manière centralisée par l’administrateur du royaume.

Scénarios disponibles :

-> **Augmenter la consommation prévue** : pour un pourcentage et une période définis par l'utilisateur. Cela appliquera une augmentation en pourcentage aux valeurs de prévision pour chaque mois de la période sélectionnée.

-> **Diminuer la consommation prévue** : pour un pourcentage et une période définis par l'utilisateur. Cela appliquera une diminution en pourcentage aux valeurs de prévision pour chaque mois de la période sélectionnée.

-> **Prévision des phases d'entrée/sortie du produit :** pour une période définie par l'utilisateur et des valeurs de consommation prévisionnelles de début et de fin. QAT tracera une ligne droite en interpolant entre les valeurs de début et de fin, et remplacera les valeurs de consommation prévisionnelles actuelles.

-> **Supprimer les expéditions non financées** : toutes les expéditions sans source de financement attribuée (c'est-à-dire, source de financement = à déterminer) seront supprimées du plan d'approvisionnement et des projections de stock.

- > **Supprimer toutes les expéditions planifiées** : toutes les expéditions avec le statut « planifiées » seront supprimées du plan d'approvisionnement et des projections de stock. L'utilisateur peut cocher une case pour supprimer uniquement les « expéditions planifiées » qui ne respectent pas les délais de livraison établis (c'est-à-dire que la date de réception prévue est plus tôt que ce qui serait réalisable compte tenu des délais de livraison).

- > **Supprimer toutes les expéditions soumises hors délai** : toutes les expéditions avec le statut « soumises » qui ne respectent pas les délais établis seront supprimées du plan d'approvisionnement et des projections de stocks.

- > **Supprimer toutes les expéditions en attente hors délai** : toutes les expéditions avec le statut « en attente » qui ne respectent pas les délais établis seront supprimées du plan d'approvisionnement et des projections de stocks.

- > **Replanifier le plan d'approvisionnement :** pour une période définie par l'utilisateur, QAT supprime les expéditions planifiées qui ne maintiennent pas correctement le stock entre les paramètres MIN/MAX et crée de nouvelles expéditions planifiées pour se conformer aux paramètres de stock, en utilisant la logique d'expédition suggérée décrite dans <u>Section 5.C2</u> <u>Création d'une nouvelle expédition</u>.

Pour accéder à ces scénarios :

1. Allez dans Planification des approvisionnements et cliquez sur « Planification par scénarios ».

2. Sélectionnez un scénario prédéfini dans le menu déroulant et modifiez les champs requis

3. Cliquez sur Ajouter pour afficher les modifications.

![P2270#yIS1](/img/media/image191.png)

Figure 113 Écran de planification de scénario

4. Le scénario sera affiché dans la « Liste des scénarios ».

![P2274#yIS1](/img/media/image192.png)

Figure 114 : Liste des scénarios de planification de scénarios

5. Si l'utilisateur souhaite appliquer le scénario à son plan d'approvisionnement, il peut cliquer sur le bouton « Soumettre ». Le nouveau plan d'approvisionnement sera stocké sur l'ordinateur de cet utilisateur et celui-ci pourra le télécharger sur le serveur en tant que nouvelle version via la fonctionnalité de téléchargement.

6. Si l'utilisateur ne souhaite pas appliquer le scénario à son plan d'approvisionnement actuel, il peut cliquer sur le bouton « Annuler » ou sur le bouton « Réinitialiser », et les modifications ne prendront pas effet.

## Rapport sur le plan d'approvisionnement

L'objectif du rapport du plan d'approvisionnement est de permettre à l'utilisateur d'évaluer rapidement l'état des stocks d'un ou plusieurs programmes et/ou unités de planification sélectionnés, en comparant graphiquement les projections de stock aux niveaux de stock minimum et maximum dynamiques et de pouvoir voir toute la consommation (réelle et prévisionnelle), les stocks et les détails d'expédition en un seul endroit. Le rapport fournit une représentation graphique du plan d'approvisionnement, ainsi qu'une vue tabulaire. Le rapport peut être exporté au format PDF et/ou CSV.

- **Accessible à :** Administrateurs de domaine, administrateurs de programme, utilisateurs du programme et visualiseur de rapports

- **Navigation :** Planification des approvisionnements  Rapport sur le plan d'approvisionnement

**Les utilisateurs peuvent utiliser les différents paramètres déroulants en haut de l'écran pour générer différentes vues du rapport sur le plan d'approvisionnement. Chaque vue du rapport généré aura à la fois une représentation graphique et un équivalent tabulaire des données. Il existe trois vues principales du rapport sur le plan d'approvisionnement :**

1. **Vue unique du programme**
    1. **Programme unique**

    2. **Unité de planification unique (UP) ou unité de reporting alternative unique (ARU)**

    3. **Envois ventilés par statut (c'est-à-dire planifié, expédié, reçu, etc.)**

![A graph with blue and red lines Description automatically generated](/img/media/image193.png)

Figure 115 : Rapport sur le plan d'approvisionnement : vue d'un seul programme, graphique

![A screenshot of a computer Description automatically generated](/img/media/image194.png)

Figure 116 : Rapport sur le plan d'approvisionnement : vue d'un seul programme, données tabulaires

2. **Vue multi-programmes**
    1. **Plusieurs programmes**

    2. **Unique PU ou ARU**

    3. **Expéditions ventilées par programme (c'est-à-dire FASPonia Malaria MOH et FASPonia Malaria Social Marketing)**

    4. **Remarques : QAT est capable de regrouper les données de planification des approvisionnements sur plusieurs programmes s'ils partagent le <u>same</u> PU/ARU. Cela pourrait être utile si un pays dispose de plusieurs programmes parallèles surveillant les mêmes produits et souhaite avoir une vue globale ou nationale de l'état des stocks au fil du temps.**

![A graph with blue and red lines Description automatically generated](/img/media/image195.png)

Figure 117 : Rapport sur le plan d'approvisionnement : vue multi-programmes

![A screenshot of a computer Description automatically generated](/img/media/image196.png)

Figure 118 : Rapport sur le plan d'approvisionnement : vue multi-programmes/UE, données tabulaires

3. **Vue de l'unité d'équivalence (UE)**
    1. **Programmes simples ou multiples**

    2. **Plusieurs PU _(Les ARU ne peuvent pas être utilisés avec les EU)_**

    3. **Expéditions ventilées par programme, PU ou programme-PU**

    4. **Remarques : QAT est capable de regrouper des PU différentes (différentes tailles de pack, taux d'utilisation, etc.), mais liées en utilisant une UE (voir [Unités d'équivalence] (#unités d'équivalence) pour plus d'informations) et un facteur de conversion correspondant. Cela pourrait être utile pour les pays ou les téléspectateurs du monde entier qui souhaiteraient voir des concepts tels que les traitements contre le paludisme, la protection annuelle des couples (CYP), les mois de patients ARV, etc. dans leur ensemble.**

![A graph with colorful lines and numbers Description automatically generated with medium confidence](/img/media/image197.png)

Figure 119 : Rapport sur le plan d'approvisionnement : vue des unités d'équivalence

**Remarque :**

1. > **Le rapport utilise les paramètres de l'unité de planification définis par l'administrateur du programme pour l'AMC, la durée de conservation, le MIN, l'intervalle de réapprovisionnement et le MAX**.

2. > La colonne Quantité d'expédition est la somme de toutes les expéditions qui ont une date de réception dans le même mois pour cette unité de planification.

3. > La colonne « Quantité de l'expédition | Source de financement | Statut de l'expédition | Agent d'approvisionnement | RO – Numéro de mensonge principal | Numéro de commande – Numéro de ligne principale » permet à l'utilisateur de voir les expéditions désagrégées qui ont une date de réception dans le même mois, y compris les détails de la quantité, de l'agent d'approvisionnement, du statut, de la source de financement et du numéro de commande attribué à cette commande.

4. > La colonne « Consensus Consommation » n'apparaît que si un utilisateur choisit plusieurs programmes pour l'agrégation

5. > Les exportations PDF et CSV disposent de plusieurs options, similaires aux listes déroulantes des rapports, permettant l'exportation de programmes agrégés, de plusieurs plans d'approvisionnement pour un seul produit ou de produits agrégés (via les UE).

#