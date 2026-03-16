---
id: supply-planning-module-program-data
title: "Supply Planning Module: Program Data"
sidebar_label: "Supply Planning Module: Program Data"
sidebar_position: 4
---
# Module de planification des approvisionnements : données du programme

Comme défini précédemment dans [Concepts et termes importants de QAT] (#important-qat-concepts-and-terms), un programme a une structure similaire à celle d'une base de données de plan d'approvisionnement PipeLine. Chaque programme comprend un seul pays, un ou plusieurs domaines techniques, une région (niveau national, niveau central, etc.) et une organisation (MOH, PEPFAR uniquement, PMI uniquement). Chaque programme d'un domaine est régi par les mêmes données de base standardisées, telles que le catalogue de produits, les agents d'approvisionnement, les sources de financement, les sources de données, etc.

La gestion des données du programme se situe au troisième niveau de la hiérarchie du système QAT et est généralement effectuée par les utilisateurs avec les rôles **administrateur du programme et utilisateur du programme** (pour plus d'informations sur les rôles des utilisateurs, veuillez consulter [Annexe 3 : Matrice des rôles des utilisateurs](#annex-3-user-role-matrix)). Les données de base au niveau du programme gérées par ces utilisateurs comprennent les budgets et les unités de reporting alternatives.

Un utilisateur peut « Télécharger » ou « Supprimer » des programmes de sa machine locale. Les programmes peuvent également être « importés » vers la machine locale ou « exportés » depuis la machine locale pour être partagés avec d'autres utilisateurs en cas de problèmes de connectivité.

Les administrateurs et les utilisateurs du programme peuvent manipuler deux grandes catégories de données au sein de leurs programmes : les données du programme et les données transactionnelles (les « trois grands » : consommation, inventaire, expéditions).

<table>
  <thead>
    <tr class="header">
      <th></th>
      <th>
        <strong>Catégorie de données</strong>
      </th>
      <th>
        <strong>Détails</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>Données de base</td>
      <td>
        <strong>Info programme</strong>
      </td>
      <td>Pesteur de programme, pourcentage de fret, délais</td>
    </tr>
    <tr class="even">
      <td></td>
      <td>
        <strong>Information produit</strong>
      </td>
      <td>Punités de planification – min, intervalle de réapprovisionnement, unités de reporting alternatives</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td>
        <strong>Budget</strong>
      </td>
      <td>Fsource de financement, montants, dates de début et de fin, etc. </td>
    </tr>
    <tr class="even">
      <td>
        <p>Données transactionnelles</p>
        <p>(« Grand 3 »)</p>
        <p>pour chaque produit</p>
      </td>
      <td>
        <strong>Consommation</strong>
      </td>
      <td>
        <p>Fonsommation prévue</p>
        <p>Et consommation réelle, dès qu'elle sera disponible</p>
      </td>
    </tr>
    <tr class="odd">
      <td></td>
      <td>
        <strong>Stock</strong>
      </td>
      <td>Inombre et amp; Ajustements</td>
    </tr>
    <tr class="even">
      <td></td>
      <td>
        <strong>Sexpéditions</strong>
      </td>
      <td>
        <p>
          Quantités, date de réception, statut, agent d'approvisionnement, bailleur de fonds et amp;
          budget associé
        </p>
        <p> (si disponible) numéros de lots et amp; dates d'expiration</p>
      </td>
    </tr>
  </tbody>
</table>

Tableau 7 : Données au niveau du programme

## Données de base

Remarque : Toutes les données d'arrière-plan doivent être mises à jour lorsqu'un utilisateur est en ligne. Il est recommandé aux utilisateurs de cliquer sur « Synchronisation des données principales » après avoir effectué toute mise à jour des données en arrière-plan afin que cela soit reflété dans l'ensemble de l'outil.

### Informations sur le programme

Les responsables de programme dans QAT peuvent définir leurs paramètres généraux de programme en sélectionnant dans une liste déroulante contenant des données principales au niveau du domaine pour chacun des champs**.** Ces paramètres généraux du module de planification des approvisionnements incluent le nom du programme, le responsable du programme, les pourcentages de fret par défaut pour le fret aérien, maritime et routier, les délais par statut d'expédition et les notes. Les paramètres généraux du module de prévision incluent le nom du programme, le gestionnaire du programme et les notes. Les **utilisateurs du programme** pourront répertorier/afficher tous les programmes auxquels ils ont accès, tandis que seuls les **administrateurs du programme** pourront mettre à jour les paramètres généraux du programme.

**Mettre à jour les informations sur le programme :**

1. Cliquez sur « Gestion du programme » puis sélectionnez « Mettre à jour les informations sur le programme »

2. Cliquez sur le programme qui doit être mis à jour
    1. Les administrateurs du programme peuvent ajouter/supprimer des agents d'approvisionnement et des sources de financement qui existent déjà dans QAT à leur programme. Cela ajoutera/supprimera à son tour les agents d'approvisionnement dans les champs déroulants des écrans [Saisie des données d'expédition] (#shipment-data). Si un utilisateur souhaite ajouter un agent d'approvisionnement à son programme qui <u>not</u> existe dans QAT, il peut souscrire un ticket auprès du système [QAT HelpDesk](#tickets-for-addingupdating-users-and-master-data).

![](/img/media/image113.png)

Figure 67 : Mettre à jour les informations sur le programme – Module de planification des approvisionnements

![A screenshot of a computer Description automatically generated](/img/media/image114.png)

Figure 68 : Mettre à jour les informations sur le programme – Module de prévision

3. Mettez à jour les champs comme vous le souhaitez et cliquez sur « Soumettre »

**\*Remarque :** QAT permet uniquement aux administrateurs au niveau du domaine ou aux administrateurs au niveau de l'application de mettre à jour les champs grisés dans l'écran Mettre à jour les informations sur le programme. Si un utilisateur souhaite que ces champs soient mis à jour, il peut souscrire un ticket auprès du système [QAT HelpDesk](#tickets-for-addingupdating-users-and-master-data).\*

### Unités de planification

L'unité de planification est le produit utilisé dans QAT comme base pour planifier les achats et afficher la consommation, les expéditions, les stocks et les ajustements. Le nom d'une unité de planification comprend généralement une description complète allant jusqu'à l'emballage primaire ; ainsi, sa nomenclature suit de près la taille du conditionnement dans lequel la distribution a lieu, c'est-à-dire un flacon de 30 comprimés, un blister de 10x10 gélules, etc.

Le catalogue d'unités de planification QAT est considéré comme des données de base au niveau du domaine, ce qui signifie que tous les ajouts/modifications/soustractions de ce catalogue sont gérés au niveau du domaine et s'appliquent à tous les programmes de ce domaine. Chaque programme doit avoir au moins une unité de planification que les **administrateurs de programme** peuvent sélectionner dans le catalogue au niveau du domaine pour **ajouter à leurs programmes ou désactiver** de leurs programmes. Les administrateurs du programme peuvent également mettre à jour tout paramètre lié à une unité de planification particulière, notamment la fréquence de réapprovisionnement, les mois minimum de stock, le calcul de la consommation mensuelle moyenne, le délai de livraison de l'agent d'approvisionnement local, la durée de conservation et le prix. Les unités de planification peuvent être désactivées du programme si elles ne sont plus utilisées, permettant aux administrateurs du programme de conserver toutes les données héritées. Si l'unité de planification n'existe pas dans le catalogue QAT, veuillez créer un ticket via le Helpdesk QAT afin qu'elle puisse être créée pour l'ensemble du domaine. Pour en savoir plus sur la billetterie, consultez la section [QAT Helpdesk et tickets] (#qat-helpdesk-and-tickets).

![](/img/media/image115.png)

Figure 69 : Paramètres à mettre à jour par unité de planification.

**Paramètres de l'unité de planification :**

-> **Conversion Factor (FU:PU) :** Un champ non modifiable renseignant sur le facteur de conversion entre le PU choisi et son FU associé

- > **Planifier par : choisissez entre « MOS » pour les unités de planification consommées en grandes quantités ou « Quantité » pour les unités de planification qui sont** consommées en faibles quantités, ou à des fins d'urgence avec des expirations élevées.

-> **Intervalle de réapprovisionnement (en mois) : le** nombre de mois entre les expéditions**. Intervalle de réapprovisionnement + Min MOS = Max MOS**

-> **Min Months of Stock (MOS) : quantité minimale de stock, en mois, qui doit être disponible pour répondre à la demande et éviter les ruptures de stock**

-> **Quantité minimale : la quantité minimale de stock qui est déterminée comme étant nécessaire en stock**

-> **Le calcul de la consommation mensuelle moyenne (AMC), qui correspond à la quantité moyenne qu'un produit est utilisé sur une période de temps sélectionnée, prendra la moyenne des valeurs saisies par l'administrateur du programme pour les « mois futurs (y compris le mois en cours) » et les « mois passés »**

<!-- fin de liste -->

- **Délai d'approvisionnement local : le délai d'approvisionnement total (« prévu à la réception »), en mois, pour les unités de planification achetées localement. Idéalement, pour un achat local, le délai de livraison serait beaucoup plus court que pour un achat international.
  -> **Délai de distribution : Nombre de mois entre la réception de l'expédition et le produit à distribuer jusqu'au niveau le plus bas. Utilisé pour les expéditions suggérées avant le sous-stock.**

  -> **Durée de conservation : nombre de mois à compter de la réception de l'expédition (statut = reçu) jusqu'à l'expiration. Il s'agit d'un nombre moyen de mois pour l'unité de planification. Pour saisir les données exactes des lots, y compris les dates d'expiration, voir [Planification des approvisionnements : informations sur les stocks et les lots expirés du projet] (#supply-planning-project-expired-stock-and-batch-information)**

  -> **Seuil d'erreur de prévision (%) : une valeur utilisée dans les rapports de consommation d'erreur de prévision (mensuelle) et d'erreur de prévision (par PU) pour déterminer si une erreur de prévision est jugée trop élevée**

  -> **Prix catalogue : prix moyen d'une seule unité de planification, qui sera utilisé dans le calcul des coûts d'expédition. Le prix par programme et par agent d'approvisionnement peut être mis à jour de manière plus granulaire dans [Informations spécifiques au programme/agent d'approvisionnement] (#programprocurement-agent-special-information) ou les prix d'expédition spécifiques peuvent être mis à jour dans l'écran [Saisie des données d'expédition] (#shipment-data).**

  -> **Remarques : un champ de texte libre pour ajouter des informations pertinentes sur l'unité de planification (c'est-à-dire les délais d'introduction/de suppression progressive, si l'unité de planification est constituée de données au niveau central/national, etc.). Ces notes peuvent être consultées dans le rapport Plan d'approvisionnement, l'écran Version du plan d'approvisionnement et Révision de la planification des approvisionnements, l'écran Planification des approvisionnements et l'écran Planification des scénarios.**

**Mettre à jour les unités de planification au sein d'un programme :**

1. Assurez-vous que vous travaillez en mode « en ligne ». Sélectionnez « Gestion du programme » puis « Mettre à jour les unités de planification »

2. Sélectionnez le programme pour afficher les unités de planification actuellement gérées
    1. Si vous avez l'intention de mettre à jour ou de réactiver une unité de planification désactivée, choisissez « Inactif » dans la liste déroulante Statut de l'unité de planification.

3. Double-cliquez sur la cellule (paramètre) qui doit être mise à jour

4. Cliquez sur « Soumettre » pour enregistrer les modifications

**Ajouter des unités de planification à un programme :**

1. Assurez-vous que vous travaillez en mode « en ligne ». Sélectionnez « Gestion du programme » puis « Mettre à jour les unités de planification ».

2. Sélectionnez le programme pour afficher les unités de planification actuellement gérées

3. Cliquez sur le bouton bleu « Ajouter une ligne » en bas à droite de l'écran et une nouvelle ligne apparaîtra en haut du tableau.
    1. Vous pouvez également cliquer avec le bouton droit sur n’importe quelle ligne du tableau et sélectionner « Insérer une nouvelle ligne avant » ou « Insérer une nouvelle ligne après ».

4. Commencez par taper les trois premières lettres de l'unité de planification que vous souhaitez ajouter.

5. Remplissez toutes les cellules (paramètres) de cette ligne

6. Cliquez sur « Soumettre » pour enregistrer les modifications

> **Remarque :** Si une unité de planification requise n'est pas disponible dans la liste déroulante, et donc dans le catalogue QAT, veuillez créer un ticket via le Helpdesk QAT afin qu'elle puisse être créée pour l'ensemble du domaine. Pour en savoir plus sur la billetterie, consultez la section [QAT Helpdesk et tickets] (#qat-helpdesk-and-tickets).

### Informations spécifiques au programme/agent d'approvisionnement

Les utilisateurs de QAT peuvent gérer des détails spécifiques (frais de transport, délais de livraison, coûts unitaires) pour les agents d'approvisionnement et les unités de planification au sein d'un plan d'approvisionnement. Les prix spécifiques aux agents d'approvisionnement du programme peuvent être définis pour chaque unité de planification de leurs programmes, en plus des prix par défaut (catalogue) du programme ou des prix catalogue de l'agent d'approvisionnement au niveau du domaine. Par exemple, un utilisateur peut souhaiter saisir le prix du PNUD pour les tests de diagnostic rapide du paludisme (mRDT) dans le programme FASPonia-Malaria, si le catalogue du PNUD n'est pas disponible au niveau du domaine. Les utilisateurs ont également la possibilité de désigner des pourcentages de fret, des délais de livraison (y compris des délais de livraison locaux) et des prix unitaires pour des unités de planification spécifiques, des agents d'approvisionnement ou une combinaison des deux.

**Caractéristiques et règles :**

- **Combinaison programme + agent d'approvisionnement :** Si vous créez une combinaison programme et agent d'approvisionnement, la colonne de prix deviendra non modifiable si l'unité de planification est définie sur « Tout » puisque le prix existe déjà dans un autre écran.

- **Coûts de transport, délais de livraison et prix unitaires :** Au moins une de ces colonnes doit avoir une valeur numérique lors de l'ajout ou de la modification de lignes.

- **Champs obligatoires :** Seules les trois premières colonnes (Programme, Unité de planification et Agent d'approvisionnement) sont requises pour ajouter une ligne.

- **Contraintes :**
  - Une seule ligne est autorisée par combinaison programme/unité de planification/agent d'approvisionnement.

  - Si une ligne d'agent d'approvisionnement comprend « Toutes » les unités de planification, la colonne de prix unitaire ne sera pas modifiable.

**Utilisation dans le module de planification des approvisionnements :**

Ces détails spécifiques au programme/agent d'approvisionnement/unité de planification auront un impact sur le module de planification des approvisionnements comme suit :

- **Pourcentages de fret :** Priorisés par les paramètres du programme/agent d'approvisionnement/unité de planification, puis par les paramètres du programme.

- **Délais de livraison :** Hiérarchisé par les paramètres du programme/agent d'approvisionnement/unité de planification, puis les paramètres du programme et enfin les paramètres de l'agent d'approvisionnement au niveau du domaine.

- **Prix unitaires :** Hiérarchisés par les paramètres du programme/agent d'approvisionnement/unité de planification, puis les paramètres de l'agent d'approvisionnement au niveau du domaine et enfin les paramètres du programme.

**Étapes pour ajouter ou modifier des informations spécifiques au programme/agent d'approvisionnement**

1. Sélectionnez « Gestion du programme » puis « Mettre à jour les unités de planification ».

2. Sélectionnez le programme pour afficher les unités de planification actuellement gérées.

3. Cliquez avec le bouton droit sur la ligne de l'unité de planification pour laquelle ajouter le prix de l'agent d'approvisionnement et cliquez sur « Ajouter les prix du programme/de l'agent d'approvisionnement » pour afficher un nouvel écran.

![P1341#yIS1](/img/media/image116.png)

Figure 70. Accès à l'écran Programme/Prix de l'agent d'approvisionnement

4. <u>OR</u> sélectionnez « Informations sur l'agent de programme/d'approvisionnement » dans
le menu de gauche pour accéder directement à l'écran.

5. Sélectionnez le(s) programme(s) et unité(s) de planification pour lesquels saisir les informations.

6. Remplissez les champs obligatoires et tous les champs supplémentaires. Quelques rappels ci-dessus :
    1. Si vous créez une combinaison programme et agent d'approvisionnement, la colonne de prix deviendra non modifiable si l'unité de planification est définie sur « Tous », car le prix existe déjà dans un autre écran.

    2. Au moins une de ces colonnes doit avoir une valeur numérique lors de l'ajout ou de la modification de lignes.

    3. Seules les trois premières colonnes (Programme, Unité de planification et Agent d'approvisionnement) sont nécessaires pour ajouter une ligne.

    4. Une seule ligne est autorisée par combinaison programme/unité de planification/agent d'approvisionnement.

![](/img/media/image117.png)

Figure 71. Ajout d'informations sur le programme/l'agent d'approvisionnement pour une unité de planification

7. Cliquez sur « Soumettre » pour enregistrer les modifications.

8. Cliquez sur Master Data Sync après avoir apporté des modifications (s'applique à tout élément sous Gestion du programme).

### Unités de reporting alternatives

Une unité de reporting alternative (ARU) est le produit et l'unité dans lesquels les données du pays (consommation, stocks et ajustements) sont déclarées et elle peut avoir la même description que l'unité de planification, l'unité de prévision, l'unité d'approvisionnement ou dans une description d'emballage totalement différente. L'ARU est définie dans un pays particulier et nécessite la saisie d'un facteur de conversion de l'ARU vers l'unité de planification à laquelle elle est associée (peut être 1). De tous les produits génériques, l'ARU est le seul que les administrateurs de programme gèrent, car ils sont spécifiques à chaque pays. **Les administrateurs d'applications, de domaines et de programmes** peuvent ajouter/modifier des ARU pour un pays et un programme. Les unités de déclaration alternatives sont utiles lorsque :

1. > Les sources de données rapportent les données dans différentes unités (par exemple pièces ou paquets)

2. > Il existe un autre nom commun dans le pays (par exemple le nom de la marque)

**Pour voir la liste de toutes les unités déclarantes alternatives dans un pays :**

1. Sélectionnez « Gestion du programme », puis « Unité de rapport alternative ».

2. Sélectionnez le programme dans la liste déroulante.

**Pour ajouter d'autres unités de reporting à un pays :**

1. Sélectionnez « Gestion du programme », puis « Unité de rapport alternative ».

2. Sélectionnez le programme dans la liste déroulante.

3. Cliquez sur le bouton « Ajouter une ligne » dans le coin inférieur droit de l'écran, ou cliquez avec le bouton droit sur n'importe quelle ligne pour en ajouter une autre.

4. Entrez les détails dans la ligne nouvellement créée et cliquez sur « Soumettre ».
    1. Remarque : le facteur de conversion peut être « diviser » ou « multiplier ».

![](/img/media/image118.png)

Figure 72 : ARU

\*Notez que pour chaque unité de planification ajoutée à un programme, QAT créera automatiquement une unité de reporting alternative avec un facteur de conversion de 1:1. QAT utilisera la description de l'unité de planification comme description de l'unité de reporting alternative.

### Délais de livraison par défaut

QAT utilise six statuts d'expédition pour suivre la progression d'une expédition depuis la planification jusqu'à la réception du produit. Chacune de ces étapes du cycle de vie de la commande est associée à un délai d'exécution qui est utilisé pour estimer le moment où la prochaine action doit avoir lieu à chaque étape. Les délais sont exprimés en mois et peuvent être partiels voire nuls. L'ordre de priorité des paramètres de délais est le suivant : les paramètres **Informations sur le programme/l'agent d'approvisionnement** ont la priorité la plus élevée, suivis des paramètres de **niveau programme**, puis des paramètres de niveau R**ealm**.

Figure 73 : Statuts des expéditions QAT

Il existe une logique de délai différente selon que l’approvisionnement est étiqueté comme international ou local.

- **Pour les achats internationaux :**
  - Les **administrateurs du programme** gèrent les délais spécifiques au programme/au pays (par exemple, le temps de planification, les délais d'expédition, les délais de dédouanement, les périodes de quarantaine, etc.)

  - Les **Realm Admins** gèrent les délais spécifiques à chaque agent d'approvisionnement (plus d'informations à ce sujet dans le tableau ci-dessous).

  - **Peut également définir des configurations de délais spécifiques pour les programmes et/ou les agents d'approvisionnement sur une base par unité de planification (PU).**

- **Pour les achats locaux :**
  - Le délai total (« de la planification à la réception ») est déterminé par ce qui est saisi au niveau du programme, par unité de planification. Toutes les étapes d’un achat local sont généralement plus courtes que celles d’un achat international.

|                            |                                                                                                                                                     |                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Délai de livraison (de – à)** | **Définition** | **Configuration** |
| Prévu pour soumettre | Nombre de mois entre l'identification du besoin en matière d'approvisionnement et la passation d'une commande auprès d'un agent d'approvisionnement | Toujours défini au niveau du programme par les administrateurs du programme |
| Soumis à approuvé | Nombre de mois entre la passation de la commande et l'approbation de la commande. Ce délai peut être défini pour chaque acheteur.                           | Valeur par défaut définie au niveau du programme par les administrateurs du programme. Toutefois, remplacé par le paramètre de l'agent d'approvisionnement au niveau du domaine, si l'agent d'approvisionnement est affecté à une expédition. |
| Approuvé pour être expédié | Nombre de mois entre l'approbation de la commande et l'expédition par l'agent d'approvisionnement/fournisseur. Ce délai peut être défini pour chaque acheteur. | Valeur par défaut définie au niveau du programme par les administrateurs du programme. Toutefois, remplacé par le paramètre de l'agent d'approvisionnement au niveau du domaine, si l'agent d'approvisionnement est affecté à une expédition. |
| Expédié à arrivé par avion | Temps de transit par voie aérienne entre l'expédition de la commande et son arrivée au port d'entrée - en nombre de mois.                                                    | Toujours défini au niveau du programme par les administrateurs du programme |
| Expédié à arrivé par mer | Temps de transit par voie maritime entre l'expédition de la commande par voie aérienne jusqu'à son arrivée au port d'entrée - en nombre de mois.                                          | Toujours défini au niveau du programme par les administrateurs du programme |
| Expédié à arrivé par la route | Temps de transit par route entre l'expédition de la commande par route jusqu'à l'arrivée au point de livraison demandé – en nombre de mois | Toujours défini au niveau du programme par les administrateurs du programme |
| Arrivé à reçu | Nombre de mois entre l'arrivée au port d'entrée et la réception dans l'entrepôt.                                                                  | Toujours défini au niveau du programme par les administrateurs du programme |

Tableau 8 : Délais par étape d'expédition - définitions

**Ordre prioritaire pour les paramètres de délai de livraison**

L'ordre de priorité des configurations de délais est le suivant :

1. **Informations sur l'agent de programme/d'approvisionnement :** Ces paramètres ont la priorité la plus élevée. Si les délais sont définis à ce niveau, ils remplaceront les autres paramètres. Ceux-ci peuvent être mis à jour dans l’écran « Informations sur l’agent du programme/approvisionnement ».

2. **Au niveau du programme :** Si aucun délai n'est défini au niveau du programme/de l'agent d'approvisionnement, les valeurs par défaut du niveau du programme seront utilisées. Ceux-ci peuvent être mis à jour dans les écrans « Mettre à jour les informations sur le programme » et « Mettre à jour les unités de planification ».

3. **Au niveau du domaine :** Les délais de livraison au niveau du domaine s'appliqueront si aucun délai spécifique n'est défini au niveau du programme.

**Saisissez/mettez à jour les délais par défaut au niveau du programme :**

1. > Allez dans « Gestion du programme » puis cliquez sur « Mettre à jour les informations sur le programme » (voir [Mise à jour des informations sur le programme](#program-information)).

2. > Faites défiler jusqu'à la seconde moitié de la page où se trouvent tous les champs de délai de livraison.

3. > Saisissez les délais par défaut du programme par étape.

4. > Cliquez sur « Mettre à jour » pour enregistrer les modifications.

_Reportez-vous à [Informations sur l'agent de programme/d'approvisionnement](#programprocurement-agent-special-information) pour obtenir des instructions sur la façon d'ajouter/modifier des paramètres au niveau d'un programme/d'un agent d'approvisionnement._

**Saisissez/mettez à jour les délais par défaut de l'agent d'approvisionnement local :**

1. > Allez dans « Gestion du programme » puis cliquez sur « Mettre à jour les unités de planification » (voir [Mise à jour des unités de planification](#planning-units))

2. > Sélectionnez le programme dans la liste déroulante en haut à gauche.

3. > Saisissez le délai de livraison par défaut du programme pour l'approvisionnement local.

4. > Cliquez sur « Soumettre » pour enregistrer les modifications.

![P1428#yIS1](/img/media/image119.png)

Figure 74 : Saisie des délais de l'agent d'approvisionnement local

### ![](/img/media/image120.png)Budgets

Un budget représente un montant (estimé ou réel) de capital pour une période définie qui doit être dépensé pour acheter des produits pour le programme.

Allez dans « Gestion du programme », puis « Budget » pour afficher une liste de tous les budgets de votre (vos) programme(s).

Un budget peut être associé à un ou plusieurs programmes. Par exemple, si le FSP-Lab-A dispose d'un budget x, le FSP-Lab-B peut également lier son programme au budget x. Si un programme est dissocié d'un budget, l'utilisateur sera obligé de supprimer toutes les expéditions de ce budget avant de télécharger la version sur le serveur. Tout administrateur de programme ayant accès à un programme peut modifier un budget associé au programme ; cependant, il ne pourra ajouter/supprimer que les programmes auxquels il a accès.

Pour ajouter ou supprimer des programmes d'un budget, cliquez sur le budget, puis sélectionnez ou désélectionnez dans la première liste déroulante.

![P1438#yIS1](/img/media/image121.png)

Figure 75 : Programme Multiple ®

Si un budget est surligné en rouge, cela indique que le budget a dépassé la « Date de fin » et/ou que le « Montant utilisé » a dépassé le « Montant du budget ».

**Ajouter un budget**

1. Dans l'écran « Budget », allez dans le coin supérieur droit et cliquez sur l'icône bleue « + ». ![P1444L58#yIS1](/img/media/image122.png)

2. Un nouvel écran intitulé « Ajouter un budget » apparaîtra.

3. Entrez les détails requis.

4. Cliquez sur le bouton « Soumettre ».
    1. **\*Remarque :** Un programme ne peut pas avoir plusieurs budgets avec la même source de financement et le même nom d'affichage du budget. Un message d'erreur apparaîtra si tel est le cas.\*

**Mettre à jour un budget**

1. Accédez à l'écran Budget.

2. Faites un clic gauche sur le budget que vous souhaitez mettre à jour.

3. Un nouvel écran apparaîtra intitulé « Mettre à jour le budget

4. Mettez à jour les détails du budget sélectionné, le cas échéant.

5. Cliquez sur « Soumettre » pour enregistrer les modifications.

![P1456#yIS1](/img/media/image123.png)

Figure 76 : Écran Budget

![P1458#yIS1](/img/media/image124.png)

Figure 77 : Mise à jour du budget

## **Données du plan d'approvisionnement transactionnel**

Il existe 3 principales exigences en matière de données lors de la création ou de la mise à jour d'un plan d'approvisionnement : la consommation, l'inventaire et les expéditions. La section ci-dessous définira chacun des éléments de données et comment ajouter/mettre à jour ces éléments dans QAT.

1. > **Consommation** : Stock distribué par le programme aux clients.
    1. > **Consommation réelle** : quantité déclarée d'un produit distribuée aux clients au cours d'une période donnée pour un programme spécifique à un niveau spécifique de la chaîne d'approvisionnement ou une combinaison de niveaux.

    2. > **Consommation prévue** : La quantité prévue qui sera consommée par les clients au cours d'une période donnée qui a été convenue par le programme.

2. > **Inventaire** : quantité disponible de produit utilisable à un niveau spécifique de la chaîne d'approvisionnement ou à une combinaison de niveaux, à une date spécifique, pour un produit spécifique.
    1. > **Stock** **count** : vérification de la quantité de stock dont dispose un programme à un moment donné dans un niveau spécifique de la chaîne d'approvisionnement ou une combinaison de niveaux.

    2. > **Ajustements de stock** : modifications positives ou négatives des quantités de stock utilisables pour une date spécifique, classées par motif de l'ajustement, si possible (par exemple, dommage, expiration, quarantaine, transfert à un autre partenaire de mise en œuvre, etc.). Les transferts de rééquilibrage entre sites d’une même chaîne d’approvisionnement sont exclus.

3. > **Expéditions** : quantité des quantités financées ou planifiées qui seront expédiées au cours du mois en cours ou à venir ou qui ont été expédiées au cours d'un mois précédent ou qui ont été reçues. Exprimé en envois individuels, avec un numéro d'envoi et une date de réception prévue.

### Données de consommation

**Ajouter des données de consommation :**

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données de consommation ».

2. Une fois l'écran « Données de consommation » affiché, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.

3. L'écran affichera toutes les données actuelles pour la période sélectionnée, les unités de planification et les autres filtres sélectionnés à l'étape 2.

4. Pour ajouter un nouvel enregistrement de consommation, faites un clic droit sur n'importe quelle cellule et sélectionnez « Ajouter une nouvelle consommation » OU sélectionnez le bleu « + Ajouter une ligne » en bas. JAJALC

5. Entrez les informations requises et cliquez sur « Soumettre ».
    1. Toute cellule grisée (par exemple, Quantité (PU) indique qu'il s'agit d'une cellule générée par QAT et qu'elle ne peut pas être saisie/modifiée manuellement.
        1. Rappel que [Alternate Reporting Unit](#alternate-reporting-units) (ARU) est le produit et l'unité dans lesquels les données du pays sont déclarées. Cela peut être identique à l'unité de planification ou peut être différente. Les utilisateurs de QAT peuvent définir une unité de reporting alternative et un facteur de conversion (multiplier ou diviser) pour l'unité de planification.

    2. Toute cellule surlignée en jaune indique qu'il s'agit d'un champ obligatoire et qu'il n'a pas encore été saisi par l'utilisateur.

![](/img/media/image125.png)

Figure 78 : Ajouter des données de consommation

**Mettre à jour les données de consommation :**

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données de consommation ».

2. Une fois l'écran « Données de consommation » affiché, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.

3. L'écran affichera toutes les données actuelles pour la période du rapport, les unités de planification et les autres filtres sélectionnés à l'étape 2.

4. Pour mettre à jour les données de consommation existantes, l'utilisateur doit double-cliquer sur la ou les cellules. Un utilisateur peut mettre à jour autant de cellules pour autant de lignes que nécessaire avant d'enregistrer, à condition qu'il s'agisse des mêmes filtres déroulants sélectionnés à l'étape 2.
    1. **Remarque :** Les utilisateurs peuvent <u>not</u> modifier la consommation prévue plus de neuf (9) mois dans le passé et peuvent <u>not modifier la consommation réelle de </u> plus de neuf (9) mois dans le passé. Les données non modifiables sont identifiées par des lignes grisées.

5. Une fois qu'un enregistrement de consommation a été enregistré dans QAT, il ne peut pas être supprimé. Par conséquent, si un utilisateur souhaite supprimer cet enregistrement du plan d’approvisionnement, il doit le désactiver en cochant la case bleue dans la colonne d’extrême droite ou il peut être réutilisé pour les données d’un mois différent.

6. Une fois la ou les mises à jour effectuées, cliquez sur « Soumettre ».

**Ajouter/mettre à jour les détails du lot :**

L'ajout d'informations sur les lots aux enregistrements de consommation ne peut être appliqué qu'à la consommation réelle.

1. Faites un clic droit sur la ligne « Consommation réelle » et cliquez sur « Afficher les informations sur le lot ».

2. Un écran contextuel contenant les détails du lot pour cet enregistrement de consommation réelle apparaîtra.

3. L'utilisateur peut modifier le numéro de lot et/ou la quantité existante en double-cliquant sur la cellule.

4. L'utilisateur peut également ajouter un ou plusieurs nouveaux lots en cliquant avec le bouton droit et en sélectionnant « Ajouter un nouveau lot » ou en cliquant sur le bouton « +Ajouter une ligne » ».

5. La quantité totale des lots doit être égale à la quantité de cet enregistrement de consommation réelle.
    1. Si la quantité/les quantités de lots sont inférieures à la quantité de consommation réelle, QAT créera un lot en utilisant FEFO pour calculer la différence.

    2. Si la quantité/les quantités de lots sont supérieures à la quantité de consommation réelle, QAT aura une erreur de validation et ne permettra pas à l'utilisateur de soumettre.

6. Cliquez sur « Soumettre ».

![P1507#yIS1](/img/media/image126.png)

Figure 79 : Détails du lot

### Données d'inventaire

**Ajouter des données d'inventaire/d'ajustement :**

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'inventaire ».

2. Une fois l'écran « Données d'inventaire » affiché, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.
    1. Si l'utilisateur saisit des données d'inventaire, sélectionnez « Inventaire » dans la liste déroulante Type d'inventaire. Si l'utilisateur saisit des données de réglage, sélectionnez « Réglage ».

3. L'écran affichera toutes les données actuelles pour la période sélectionnée, les unités de planification et les autres filtres sélectionnés à l'étape 2.

4. Pour ajouter un nouvel enregistrement d'inventaire/ajustement, cliquez avec le bouton droit sur n'importe quelle cellule et sélectionnez « Ajouter un nouveau décompte d'inventaire »/« Ajouter de nouveaux ajustements » OU sélectionnez le bouton bleu.  
    «+ Ajouter une ligne» en bas.

5. Saisissez les informations requises.
    1. Toute cellule grisée (par exemple, facteur de conversion) indique qu'il s'agit d'une cellule générée par QAT et qu'elle ne peut pas être saisie/modifiée manuellement.

    2. Toute cellule surlignée en jaune indique qu'il s'agit d'un champ obligatoire et qu'il n'a pas encore été saisi par l'utilisateur.

    3. Si vous saisissez un ajustement, une note dans le champ « Notes » est requise. Les notes pour les enregistrements d’inventaire sont facultatives.

6. Cliquez sur « Soumettre ».

![P1523#yIS1](/img/media/image127.png)

Figure 80 : Ajouter un inventaire

**Mettre à jour les données d'inventaire/d'ajustement :**

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'inventaire ».

2. Une fois l'écran « Données d'inventaire » affiché, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.
    1. Si l'utilisateur met à jour les données d'inventaire, sélectionnez « Inventaire » dans la liste déroulante Type d'inventaire. Si l'utilisateur met à jour les données de réglage, sélectionnez « Réglage ».

3. L'écran affichera toutes les données actuelles pour la période du rapport, les unités de planification et les autres filtres sélectionnés à l'étape 2.

4. Pour mettre à jour les données d'inventaire/ajustement existantes, l'utilisateur doit double-cliquer sur la ou les cellules. Un utilisateur peut mettre à jour autant de cellules pour autant de lignes que nécessaire avant d'enregistrer, à condition qu'il s'agisse des mêmes filtres déroulants sélectionnés à l'étape 2. Un utilisateur ne peut pas non plus mettre à jour les données d'inventaire d'ajustement <u> et </u> en même temps sans enregistrer au préalable.
    1. **Remarque :** Les utilisateurs peuvent <u>not</u> modifier les enregistrements d'ajustement ou d'inventaire il y a plus de neuf (9) mois. Les données non modifiables sont identifiées par des lignes grisées.

<!-- fin de liste -->

7. Une fois qu'un enregistrement d'inventaire a été enregistré dans QAT, il ne peut pas être supprimé. Par conséquent, si un utilisateur souhaite supprimer cet enregistrement du plan d’approvisionnement, il doit le désactiver en cochant la case bleue dans la colonne d’extrême droite ou il peut être réutilisé pour les données d’un mois différent.

<!-- fin de liste -->

5. Une fois la ou les mises à jour effectuées, cliquez sur « Soumettre ».

**Ajouter/mettre à jour les détails du lot – Ajustements**

(pour plus d'informations sur les calculs par lots QAT, veuillez consulter [Annexe 2 : Règles commerciales](#annex-2-business-rules) ou la section 5.E).

1. Faites un clic droit sur la ligne Ajustement et cliquez sur « Afficher les informations sur le lot ».

2. Un écran contextuel contenant les détails du lot pour cet enregistrement apparaîtra.

3. L'utilisateur peut modifier le numéro de lot et/ou la quantité existante en double-cliquant sur la cellule.

4. L'utilisateur peut également ajouter un ou plusieurs nouveaux lots en cliquant avec le bouton droit et en sélectionnant « Ajouter un nouveau lot » ou en cliquant sur le bouton « +Ajouter une ligne » pour sélectionner

5. La quantité totale des lots doit être égale à la quantité de cet enregistrement d'ajustement.
    1. Si la quantité du lot/les quantités du lot sont inférieures à la quantité d'ajustement, QAT créera un lot, en utilisant la logique du meilleur scénario pour calculer la différence.

2. Si la quantité/les quantités de lots sont supérieures à la quantité d'ajustement, QAT aura une erreur de validation et ne permettra pas à l'utilisateur de soumettre.

    3. _Remarque : il n'y a pas de remplacement par l'utilisateur pour les ajustements automatiques, uniquement des ajustements manuels._

6. Cliquez sur « Soumettre »

![](/img/media/image128.png)

![](/img/media/image129.png)

Figure 81 : Détails du lot

**Ajouter/mettre à jour les détails du lot – Inventaire**

1. Faites un clic droit sur la ligne Inventaire et cliquez sur « Afficher les informations sur le lot ».

2. Un écran contextuel contenant les détails du lot pour cet enregistrement apparaîtra dans l'écran de planification des approvisionnements. Voir la section 5.E pour plus de détails sur la façon de mettre à jour.

### Données d'expédition

**Ajouter des données d'expédition :**

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'expédition ».

2. Une fois que l'écran « Données d'expédition » apparaît, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.

3. L'écran affichera toutes les données actuelles pour la période du rapport, les unités de planification et les autres filtres sélectionnés à l'étape 2.

4. Pour ajouter un nouvel enregistrement d'envoi, cliquez avec le bouton droit sur n'importe quelle cellule et sélectionnez « Ajouter un nouvel envoi » OU sélectionnez le bleu « + Ajouter une ligne » en bas.

5. Saisissez les informations requises.
    1. Toute cellule grisée (par exemple, Coût unitaire de planification) indique qu'il s'agit d'une cellule générée par QAT et qu'elle ne peut pas être saisie/modifiée manuellement.

    2. Toute cellule surlignée en jaune indique qu'il s'agit d'un champ obligatoire et qu'il n'a pas encore été saisi par l'utilisateur.

    3. Certaines cellules ne seront pas disponibles pour saisir des données tant que d'autres cellules n'auront pas été remplies. Par exemple, « Budget » ne peut pas être sélectionné tant que l'utilisateur n'a pas sélectionné une « Source de financement ».

    4. « QAT Shipment ID » s’affichera vide ou « 0 » jusqu’à ce que le programme soit téléchargé.

    5. Les envois ne peuvent pas être marqués comme « Reçus » si la date de réception est ultérieure.

    6. Dans l'écran des données d'expédition, l'utilisateur peut sélectionner la devise souhaitée dans une liste déroulante en cliquant dans la cellule appropriée de la colonne des devises. En fonction de la devise sélectionnée, l'utilisateur obtiendra le prix catalogue.
        1. Ce prix peut être modifié lors de la saisie/mise à jour des données.

        2. Le coût du transport est basé sur le mode d'expédition et l'agent d'approvisionnement, mais peut également être modifié manuellement.

    7. Si une ligne d'envoi est en rouge, cela signifie que l'envoi est identifié comme un « envoi d'urgence ». QAT marquera automatiquement l'envoi comme envoi d'urgence si la date de réception tombe dans le délai prédéfini, ce qui signifie que l'envoi devra très probablement être accéléré. _Remarque : QAT signalera automatiquement l'envoi d'urgence uniquement lorsque l'envoi est créé pour la première fois, mais QAT arrêtera le marquage automatique après la première soumission de la ligne d'envoi._

    8. Si une expédition est surlignée en gris, cela signifie que l'expédition n'est pas incluse dans le solde final du plan d'approvisionnement. Les envois peuvent être exclus soit en changeant le statut de l'envoi en « Annulé » OU en désactivant l'envoi à l'aide de la case à cocher bleue à l'extrême gauche.

6. Cliquez sur « Soumettre ».

**Mettre à jour les données d'expédition :**

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'expédition ».

2. Une fois que l'écran « Données d'expédition » apparaît, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.

3. L'écran affichera toutes les données actuelles pour la période du rapport, les unités de planification et les autres filtres sélectionnés à l'étape 2.

4. Pour mettre à jour les données d'expédition existantes, l'utilisateur doit double-cliquer sur la ou les cellules. Un utilisateur peut mettre à jour autant de cellules pour autant de lignes que nécessaire avant d'enregistrer, à condition qu'il s'agisse des mêmes filtres déroulants sélectionnés à l'étape 2 (c'est-à-dire que vous ne pouvez pas modifier les expéditions pour un produit, puis modifier les expéditions pour un produit différent sans enregistrer au préalable).

5. Lorsque l'un des éléments suivants est modifié (quantité, ARU, mode d'expédition, agent d'approvisionnement et coût unitaire de planification), le comportement du champ de coût de transport dépendra de l'état de la case à cocher « Coût de transport calculé automatiquement » :
    1. **Vérifié :**
        1. Les frais de transport seront automatiquement recalculés en fonction des paramètres du programme/unité de planification.

2. Ce calcul utilise la formule : Coût unitaire de planification \* % de transport.

    2. **Non coché :**
        1. La cellule de coût du transport avec un triangle rouge dans le coin droit apparaît, recommandant à l'utilisateur de mettre à jour le coût du transport la première fois que la case est décochée.

        2. Pour faciliter la saisie manuelle, l'utilisateur peut saisir une formule directement dans la cellule en tapant d'abord un « = ». La formule disparaîtra lors de la sauvegarde, mais la valeur résultante restera. L'utilisateur peut également saisir directement un numéro.

6. Contrairement aux données de consommation, un utilisateur peut supprimer un enregistrement d'expédition même après qu'il a été enregistré dans le programme, bien que l'expédition doive être dans le statut « Planifié ». Pour ce faire, faites un clic droit sur l'envoi souhaité et sélectionnez « Supprimer la ligne ».

7. Une fois la ou les mises à jour effectuées, cliquez sur « Soumettre ».

**Ajouter/mettre à jour les détails du lot**

L’ajout d’informations sur les lots aux enregistrements d’expédition peut être appliqué aux expéditions dans n’importe quel statut autre que « expéditions suggérées ». Une fois un envoi créé, QAT générera automatiquement un lot. L'utilisateur a la possibilité de modifier ce lot et/ou d'ajouter de nouveaux lots à cet envoi.

1. Faites un clic droit sur la ligne d'expédition et cliquez sur « Afficher les informations sur le lot ».

2. Un écran contextuel contenant les détails du lot pour cet envoi apparaîtra.

3. L'utilisateur peut modifier le numéro de lot existant, la date de péremption et la quantité en double-cliquant sur la cellule.

4. L'utilisateur peut également ajouter un ou plusieurs nouveaux lots en cliquant avec le bouton droit et en sélectionnant « Ajouter un nouveau lot » ou en cliquant sur le bouton « +Ajouter une ligne » ».

5. La quantité totale des lots doit être égale à la quantité de cet envoi. Au bas de l'écran contextuel, la quantité totale de l'envoi ainsi que la quantité totale attribuée au(x) lot(s) s'afficheront. Il s'agit d'informer l'utilisateur si la quantité du lot est supérieure, inférieure ou égale à la quantité expédiée.

6. Cliquez sur « Enregistrer les informations sur le lot ».

7. **Remarque :** Lorsqu'un statut d'envoi passe à « Reçu », les détails du lot s'afficheront automatiquement pour que les utilisateurs puissent modifier ou confirmer les informations actuelles du lot.

La colonne à l'extrême droite intitulée « Généré automatiquement » permettra à l'utilisateur de savoir si ce lot a été généré automatiquement par QAT ou saisi manuellement par l'utilisateur. Si l'un des 3 champs du lot (numéro de lot, date de péremption, quantité) est modifié, la case du champ généré automatiquement deviendra décochée. Si la date de péremption et/ou la quantité sont modifiées mais pas le numéro de lot, le numéro de lot change automatiquement pour remplacer « QAT » par « MAN » et la cellule est mise en surbrillance avec un triangle rouge indiquant à l'utilisateur qu'elle doit être modifiée. Si l'utilisateur ne connaît pas le numéro de lot réel, QAT permettra de sauvegarder le lot sans modifier le numéro.

![P1594#yIS1](/img/media/image130.png)

Figure 82 : Détails du lot d'expédition

**Calculateur d'ordre stratégique :**

Pour des combinaisons spécifiques d'unité de planification et d'agent d'approvisionnement, un **calculateur de commande stratégique** peut apparaître pour l'utilisateur lors de la saisie de la quantité d'une expédition. L'objectif du calculateur est de conseiller les utilisateurs sur la quantité de commande appropriée pour une expédition en fonction d'un ou plusieurs des éléments suivants : a) quantité minimale de commande (MOQ) ; b) Chargement du conteneur ; c) Palette Euro 1 ; d) Palette Euro 2. Le calculateur aidera les utilisateurs à planifier les expéditions afin de maximiser l'efficacité de la logistique de livraison (par exemple en utilisant un conteneur plein au lieu de 20 % du conteneur). Les produits stratégiques sont définis au niveau du domaine par un administrateur d'application ou de domaine. Pour plus d'informations sur la façon de définir des produits stratégiques, consultez la [section sur l'ajout d'unités de planification pour les agents d'approvisionnement](#programprocurement-agent-special-information).

1. Pour afficher le calculateur de quantité pour un produit stratégique, double-cliquez sur la cellule sous la colonne « Quantité commandée » et l'écran « Calculateur de quantité » apparaîtra. _Remarque : Si le produit est un produit non stratégique, l'utilisateur peut directement modifier la quantité commandée dans la cellule après double-clic et il n'y aura pas de pop-up._

2. La quantité originale de l’envoi apparaîtra dans la cellule « Quantité de commande manuelle ».

3. Si vous ne souhaitez pas utiliser le calculateur stratégique et souhaitez utiliser la « Quantité de commande manuelle » d'origine, sélectionnez « Aucune » dans la liste déroulante « Emballage basé sur » et cliquez sur « Enregistrer la quantité d'expédition ».

4. Si vous souhaitez utiliser le calculateur stratégique :
    1. Sélectionnez la manière dont vous souhaitez utiliser la calculatrice en choisissant une option dans la liste déroulante « Emballage basé sur » ainsi que dans la liste déroulante « Option d'arrondi ».

    2. En fonction de vos sélections à l'étape 4a, la quantité dans la cellule « Quantité finale de la commande » vous indiquera la quantité d'expédition calculée par QAT. Le tableau du bas résume les informations clés sur les différents modes d’emballage.

    3. Après avoir confirmé que vous êtes satisfait de la quantité finale de la commande, cliquez sur « Enregistrer la quantité expédiée ».

![P1608#yIS1](/img/media/image131.png)

Figure 83 : Calculateur d'ordre stratégique

**Voir les dates d'expédition :**

Les estimations pour chaque statut peuvent être consultées et les dates réelles peuvent être saisies manuellement dans l'écran Envoi. Cela permettra à l'utilisateur d'identifier si l'expédition est dans les délais ou en retard/en avance en fonction des délais de livraison. L'utilisateur peut également utiliser cet écran pour comparer les dates réelles avec les dates estimées de cette expédition et utiliser ces informations pour mettre à jour les délais de livraison qui peuvent ne pas être exacts.

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur « Données d'expédition ».

2. Une fois que l'écran « Données d'expédition » apparaît, sélectionnez les filtres souhaités à l'aide des menus déroulants en haut.

3. L'écran affichera toutes les données actuelles pour la période de rapport, l'unité de planification et les autres filtres sélectionnés à l'étape 2.

4. Faites un clic droit sur l'envoi dont vous souhaitez afficher les dates et sélectionnez « Afficher les dates d'envoi ». Un écran contextuel intitulé « Dates d'expédition » apparaîtra.

5. La ligne intitulée « Estimation » de l'écran « Dates d'expédition » affichera une date pour chaque statut de l'expédition en fonction des délais saisis pour le programme ainsi que de la date de réception estimée. Seule la date de réception estimée peut être modifiée par l'utilisateur.
    1. Si un utilisateur modifie la date de réception estimée, les autres dates estimées changeront également en fonction des délais de livraison du programme.

6. La ligne intitulée « Réel » permettra à l'utilisateur de saisir la date réelle à laquelle chaque statut s'est produit pour cet envoi. Si une cellule est grisée dans cette ligne, cela signifie que l'envoi n'a pas encore atteint ce statut et qu'une date ne peut pas être saisie.

7. Si l'utilisateur modifie la date de réception estimée ou l'une des dates réelles, cliquez sur « Enregistrer les dates d'expédition ».

![P1623#yIS1](/img/media/image132.png)

Figure 84 : Afficher les dates d'expédition

### Liaison des expéditions ERP

La fonctionnalité de liaison des expéditions ERP permet aux planificateurs d’approvisionnement de relier certaines expéditions (actuellement GHSC-PSM) au système ERP de l’agent d’approvisionnement correspondant (actuellement ARTMIS). Une fois qu'une expédition est liée dans le plan d'approvisionnement, tous les détails de la commande (statut, date de réception, coûts, quantité, lots, etc.) correspondront à ceux présents dans l'ERP et l'utilisateur n'aura plus besoin de mettre à jour manuellement l'expédition. Si le packaging du produit dans l'ERP ne correspond pas au packaging de l'unité de planification dans QAT, l'utilisateur aura la possibilité de corriger cela via un attribut de facteur de conversion dans QAT. L'utilisateur pourra dissocier l'envoi s'il souhaite plutôt effectuer un suivi manuel. Les détails de l'expédition pour ces expéditions liées apparaîtront dans QAT (saisie des données d'expédition, planification des approvisionnements, rapports, etc.). L'utilisateur sera alerté si des modifications clés sont apportées à l'ERP, telles qu'une commande annulée ou un changement de SKU de produit. Les utilisateurs ne pourront étiqueter que les expéditions dont la source de financement a déjà été approuvée dans l'ERP.

Lors de la gestion de la liaison des expéditions ERP, les utilisateurs sélectionneront les options de menu « Lier les expéditions ERP » ou « Notifications d'expédition ERP ». Dans l’écran « Lier les expéditions ERP », il y a 3 sous-écrans :

1. > **Non lié (QAT) –** Utilisez cet écran pour lier pour la première fois les expéditions QAT aux commandes ERP. Les utilisateurs verront une liste des envois QAT, et lorsqu'un utilisateur clique sur un seul envoi QAT, ils pourront choisir à quelles commandes ERP cet envoi QAT doit être lié.

2. > **Lié –** Les utilisateurs verront une liste des expéditions actuellement liées et pourront mettre à jour le facteur de conversion ou les notes des expéditions déjà liées, ajouter des lignes ERP aux expéditions QAT déjà liées ou dissocier les lignes ERP de l'expédition QAT.

3. > **Non lié (ERP) –** Utilisez cet écran pour lier les commandes ERP à QAT pour la première fois. Les utilisateurs verront une liste des envois ERP, et lorsqu'un utilisateur clique sur un seul envoi ERP, ils pourront alors choisir à quel envoi QAT cet envoi ERP doit être lié. Pour toutes les commandes qui se trouvent dans l'ERP et qui ne sont pas déjà dans QAT, vous pouvez créer une nouvelle expédition QAT dans cet écran.

![P1634#yIS1](/img/media/image133.png)

Figure 85 : Écrans de liaison ERP

**Règles pour la liaison des expéditions ERP**

Vous trouverez ci-dessous les règles de liaison des expéditions ERP. Le bouton de détails dans le coin supérieur droit de l’écran « Lier les expéditions ERP » résumera ces règles.

1. La liaison ERP n'est modifiable que pour les versions locales téléchargées. Les écrans de liaison ERP afficheront les versions du serveur, mais ces données sont en lecture seule. Pour enregistrer les modifications de liaison, l'utilisateur doit télécharger cette version.

2. Actuellement, les expéditions QAT ne peuvent être liées que si l'agent d'approvisionnement est GHSC-PSM.

3. Les expéditions QAT ne peuvent pas être liées si elles sont dans le statut planifié, annulé ou suggéré.

4. Les envois QAT inactifs ne peuvent pas être liés.

5. Les envois QAT au statut « reçus » ne peuvent être liés que si la date de réception tombe dans les 6 derniers mois.

6. Les commandes ERP ne peuvent être liées que si elles ont dépassé le statut d'approbation de la source de financement (par exemple, approuvées par l'USAID).

7. Les commandes ERP au statut « livrées » ne peuvent être liées que si la date de livraison tombe dans les 6 derniers mois.

8. La date de réception ERP utilise la logique : 1) Date de livraison réelle 2) Date de livraison estimée 3) Date de livraison convenue 4) Date de livraison demandée. Par conséquent, si \#1 n’est pas disponible, QAT utilisera \#2. Si \#2 n'est pas disponible, QAT utilisera \#3 et si \#3 n'est pas disponible, QAT utilisera \#4.

**Non lié (QAT)**

Cet écran est utilisé par les planificateurs d'approvisionnement pour lier les expéditions QAT aux commandes ERP. Vous trouverez ci-dessous les étapes à suivre pour lier un envoi QAT à une ou plusieurs commandes ERP :

1. Sélectionnez le bouton radio en haut intitulé « Non lié (QAT) ».

2. Sélectionnez le programme et les unités de planification à partir desquels vous souhaitez choisir l'expédition QAT. Une fois sélectionnée, une liste des envois QAT apparaîtra. La liaison ERP ne peut être effectuée que sur les versions locales, cependant, les expéditions liées peuvent être visualisées sur les versions serveur.

3. Faites un clic gauche sur un seul envoi QAT. Une fenêtre contextuelle apparaîtra intitulée « Rechercher des expéditions liées à l'ERP ». Cette fenêtre permettra à l'utilisateur de choisir à quelles commandes ERP l'envoi QAT doit être lié.
    1. La moitié supérieure de la fenêtre affichera les détails de l'envoi QAT. Ces informations ne sont pas modifiables.

    2. La moitié centrale de la fenêtre affichera 2 listes déroulantes qui permettront à l'utilisateur de filtrer la liste des commandes ERP auxquelles lier l'envoi QAT.

    3. La moitié inférieure de la fenêtre répertorie toutes les expéditions ERP en fonction des listes déroulantes de la section centrale. C'est ici que l'utilisateur reliera 1 ou plusieurs commandes et fournira l'unité de reporting alternative (ARU) et la note (facultatif). L'ARU remplira automatiquement le facteur de conversion.
        1. **Pour modifier/ajouter un facteur de conversion, l'utilisateur peut le faire dans l'écran « Autre unité de déclaration ».**

4. Dans la section centrale, l'utilisateur peut filtrer les expéditions ERP en sélectionnant l'unité de planification ERP, le numéro de commande/RO ou les deux. QAT pré-remplira la liste déroulante RO/Numéro de commande une fois que cette fenêtre apparaîtra en sélectionnant le numéro de commande de l'agent de procédure dans l'envoi QAT. Si ce champ est vide, QAT affichera un message sous les deux listes déroulantes en rouge indiquant « Remplissez soit l'unité de planification ERP, soit le RO/numéro de commande pour renseigner les données ».

5. Pour lier un envoi ERP, l'utilisateur cochera la case dans la colonne la plus à gauche qui dit « Lier ? ». Une fois que l’utilisateur aura fait cela, il lui sera demandé de saisir l’ARU.
    1. Si un utilisateur souhaite lier plusieurs lignes ERP au même envoi QAT, il doit cocher la case correspondant à plusieurs lignes.

    2. Si un utilisateur souhaite lier plusieurs envois QAT à 1 ou plusieurs lignes ERP, il doit cocher la case en haut indiquant « Afficher toutes les expéditions pour \_\_\_\_\_\_ », puis sélectionner chacune des expéditions QAT à lier.

6. Le facteur de conversion est utile lorsque l'unité de planification QAT et le produit ERP sont différents (paquet de 10 tablettes de chocolat vs paquet de 100 tablettes de chocolat). Le facteur de conversion est utilisé pour calculer la quantité d'expédition QAT convertie. La quantité d'expédition QAT convertie est la quantité de commande qui sera utilisée dans votre plan d'approvisionnement pour l'expédition liée.

![P1665#yIS1](/img/media/image134.png)

7. S'il y a une note dans l'envoi QAT, celle-ci sera reportée sur chacune des commandes ERP lors de la liaison. Dans cette fenêtre contextuelle, l'utilisateur peut modifier ou supprimer cette note.

8. Le bas de la fenêtre affichera la quantité de QAT commandée d'origine et la nouvelle quantité de QAT convertie.

![P1668#yIS1](/img/media/image135.png)

Figure 86 : Quantité convertie ERP

9. Enfin, cliquez sur « Lier l'expédition ».

**Non lié (ERP)**

Cet écran est utilisé par les planificateurs d'approvisionnement pour lier les commandes ERP à QAT pour la première fois. Pour toutes les commandes qui se trouvent dans l'ERP et qui ne sont pas déjà dans QAT, vous pouvez créer une nouvelle expédition QAT dans cet écran. Vous trouverez ci-dessous les étapes à suivre pour lier une commande ERP à un envoi QAT :

1. Sélectionnez le bouton radio en haut intitulé « Non lié (ERP) ».

2. Sélectionnez le pays ET la catégorie d'unité de planification ou l'unité de planification parmi laquelle vous souhaitez choisir l'ordre ERP. Une fois sélectionnée, une liste de commandes ERP apparaîtra.
    1. **Remarque : Cette liste affiche les données ERP tandis que l'écran Non lié (QAT) affiche les données QAT.**

3. Faites un clic gauche sur une seule commande ERP. Une fenêtre contextuelle apparaîtra intitulée « Rechercher des expéditions liées à l'ERP ». Cette fenêtre permettra à l'utilisateur de lier 1 ou plusieurs commandes ERP à un envoi QAT préexistant ou nouveau.
    1. La moitié supérieure de la fenêtre affichera les détails de l'envoi QAT. Cette zone permettra à l'utilisateur de sélectionner un envoi QAT préexistant ou d'en créer un nouveau. Les étapes 4 et 5 détailleront comment procéder.

    2. La moitié centrale de la fenêtre affichera 2 listes déroulantes qui permettront de filtrer la liste des commandes ERP avec lesquelles lier l'envoi QAT.

    3. La moitié inférieure de la fenêtre répertorie toutes les expéditions ERP en fonction des listes déroulantes de la section centrale. C'est ici que l'utilisateur reliera 1 ou plusieurs commandes et fournira le facteur de conversion et la note. Cette section est pré-remplie en fonction du numéro de commande ERP sélectionné sur l'écran précédent.

4. Pour sélectionner un envoi QAT existant, cliquez sur le bouton « Sélectionner un envoi existant » dans la section supérieure.
    1. Sélectionnez le programme à partir duquel vous souhaitez rechercher les envois QAT. La liste déroulante sera filtrée pour afficher uniquement le pays sélectionné à l'étape 2.

    2. Ensuite, recherchez dans la liste des expéditions QAT par unité de planification (par défaut) ou par ID d'expédition QAT. Si vous souhaitez effectuer une recherche par ID d'expédition QAT, vous devrez cocher la case intitulée « Filtrer par ID d'expédition QAT ? ». Pour revenir à la recherche par unité de planification, vous décocherez la case.

    3. Une fois que vous avez trouvé l'envoi QAT souhaité, sélectionnez le bouton dans la colonne d'extrême gauche intitulé « Sélectionner l'identifiant de l'envoi ».

5. Pour créer un nouvel envoi QAT, cliquez sur le bouton « Créer un nouvel envoi » dans la section supérieure.
    1. L'utilisateur devra remplir 4 listes déroulantes (Programme, Unité de planification, Source de financement, Budget) pour fournir les informations requises pour créer l'envoi. Le reste des détails de l’expédition proviendra de la commande ERP sélectionnée à l’étape 7.
        1. La liste déroulante des programmes est filtrée pour afficher uniquement le pays sélectionné à l'étape 2.

        2. La liste déroulante du budget est filtrée en fonction de la sélection dans la liste déroulante des sources de financement.

3. S'il n'y a pas de budget applicable, l'utilisateur devra quitter l'écran et ajouter un budget dans les données de base. Si l'utilisateur ajoute un budget, il doit maîtriser la synchronisation des données avant de voir cette option apparaître sur cet écran.

6. Dans la section du milieu, QAT pré-remplira la liste déroulante RO/Numéro de commande une fois que cette fenêtre apparaîtra en fonction de la commande ERP sélectionnée effectuée à l'étape 3.

7. Pour lier un envoi ERP, l'utilisateur cochera la case dans la colonne la plus à gauche qui dit « Lier ? ». Une fois que l’utilisateur aura fait cela, il lui sera demandé de saisir l’ARU.
    1. Si un utilisateur souhaite lier plusieurs lignes ERP au même envoi QAT, il doit cocher la case correspondant à plusieurs lignes.

    2. Si un utilisateur souhaite lier plusieurs envois QAT à 1 ou plusieurs lignes ERP, il doit cocher la case en haut indiquant « Afficher toutes les expéditions pour \_\_\_\_\_\_ », puis sélectionner chacune des expéditions QAT à lier.

8. Le facteur de conversion est utile lorsque l'unité de planification QAT et le produit ERP sont différents (paquet de 10 tablettes de chocolat vs paquet de 100 tablettes de chocolat). Le facteur de conversion est utilisé pour calculer la quantité d'expédition QAT convertie. La quantité d'expédition QAT convertie est la quantité de commande qui sera utilisée dans votre plan d'approvisionnement pour l'expédition liée.

![P1699#yIS1](/img/media/image134.png)

9. L'utilisateur peut ajouter une note à l'envoi en modifiant la colonne d'extrême droite intitulée « Notes ».

10. Le bas de la fenêtre affichera la quantité de QAT commandée d'origine et la nouvelle quantité de QAT convertie.

11. Enfin, cliquez sur « Lier l'expédition ».

![P1703#yIS1](/img/media/image136.png)

Figure 87 : Créer un nouvel envoi

**Écran lié**

Cet écran est utilisé par les planificateurs d'approvisionnement pour afficher la liste des expéditions ERP actuellement liées et mettre à jour l'unité de rapport alternative (ARU) ou les notes, ajouter des commandes ERP aux expéditions QAT déjà liées ou dissocier les lignes ERP de l'expédition QAT.

1. Sélectionnez le bouton radio en haut intitulé « Lié ».

2. Sélectionnez le programme et les unités de planification pour lesquels vous souhaitez voir la liste des expéditions liées. Une fois sélectionnée, une liste d’envois apparaîtra. Les informations contenues dans ces expéditions sont extraites de l’ERP.

3. Pour effectuer l'une des mises à jour répertoriées à l'étape 2, cliquez avec le bouton gauche sur un seul envoi.
    1. Pour modifier l'ARU et/ou les notes, double-cliquez sur la cellule et saisissez ou sélectionnez dans la liste déroulante.

    2. Pour dissocier une commande ERP, décochez la case dans la colonne « Lien ? ».

    3. Pour ajouter une commande ERP, cochez la case correspondant à cette commande dans la colonne « Lien ? ». L'utilisateur peut effacer les listes déroulantes de recherche dans la section centrale pour rechercher une unité de planification ou un numéro de commande différent et les commandes initialement liées resteront liées.

4. Les utilisateurs auront également la possibilité de consulter les détails de l'historique des commandes à partir de l'ERP. Pour ce faire, à partir de l'écran d'origine « Lié », cliquez avec le bouton droit sur un seul envoi et cliquez sur « Afficher l'historique des commandes ERP ». Une fenêtre contextuelle apparaîtra intitulée « Historique des commandes ERP ». Cet écran affichera tous les détails qui ont changé au fil du temps dans la commande ERP. Chaque ligne indique qu'une ou plusieurs colonnes ont changé. La colonne la plus à droite intitulée « Données reçues le » indique la date à laquelle l'enregistrement a été reçu par QAT.
    1. Pour afficher les détails du lot, cliquez sur l'icône ![](/img/media/image137.png).

    2. **Remarque :** Certains champs de l'ERP ne sont pas capturés sur cet écran. Il peut donc y avoir des cas où une ou plusieurs lignes contiennent les mêmes détails. Cela signifie qu'une colonne du backend a été modifiée.

> **Une fois que vous avez lié les expéditions QAT aux commandes ERP, les données seront reflétées dans votre plan d'approvisionnement sans avoir à synchroniser les données principales.** Les données ERP nouvellement liées seront reflétées dans les rapports locaux, l'écran de planification des approvisionnements ainsi que l'écran de saisie des données d'expédition. L'utilisateur **doit** télécharger une version sur le serveur pour que les autres utilisateurs puissent voir ces modifications.
>
> Pour afficher les expéditions liées à l'ERP dans l'écran de saisie des données d'expédition, l'utilisateur doit sélectionner « Envois liés à l'ERP » dans la liste déroulante Type d'expédition. L'utilisateur peut soit afficher uniquement cette option, soit la combiner avec les expéditions manuelles pour afficher toutes les expéditions. Les expéditions liées à l'ERP seront grisées pour indiquer qu'elles ne sont pas modifiables.

![P1723#yIS1](/img/media/image138.png)

Figure 88 : Afficher les expéditions ERP dans la saisie de données

Dans l'écran de planification des approvisionnements, les expéditions liées à l'ERP auront une icône de lien en haut à gauche de la cellule. L'utilisateur peut cliquer sur un envoi spécifique pour afficher les détails, mais ces cellules seront également grisées pour indiquer qu'elles ne sont pas modifiables. Cependant, l'utilisateur peut toujours cliquer avec le bouton droit sur les détails de l'expédition pour afficher les dates d'expédition et les informations sur les lots.

![P1727#yIS1](/img/media/image139.png)

Figure 89 : Afficher les expéditions ERP dans le plan d'approvisionnement

**Notifications d'expédition ERP**

Le but de l'écran « Notifications d'expédition ERP » est d'alerter les planificateurs d'approvisionnement de toute modification clé apportée aux expéditions liées à l'ERP, comme une commande annulée ou un changement de SKU de produit. Les planificateurs de l’approvisionnement seront encouragés à « répondre » à chacune des notifications pour confirmer qu’ils sont au courant du changement et des implications apportées au plan d’approvisionnement. Pour les modifications de produits, l'utilisateur reconfirmera le facteur de conversion, qu'il change ou non.

![](/img/media/image140.png)

En haut de l'écran, il y a une icône. Cette icône affichera un nombre rouge indiquant le nombre de notifications non adressées figurant sur l'écran des notifications d'expédition ERP. S’il n’y a pas de chiffre rouge, cela signifie qu’il n’y en a pas.

Pour accéder à l'écran « Notifications d'expédition ERP », cliquez sur l'icône du camion en haut de QAT ou sélectionnez « Notifications d'expédition ERP » sous « Données du plan d'approvisionnement » dans le menu de la barre latérale de gauche.

Pour afficher les notifications, l'utilisateur devra sélectionner parmi les 3 listes déroulantes (Programme, Unité de planification, Adressée). L'utilisateur a également la possibilité de sélectionner directement dans le tableau situé au-dessus des listes déroulantes. Lorsqu'un utilisateur clique avec le bouton gauche sur une ligne du tableau, les 3 listes déroulantes se rempliront atomiquement en fonction du programme sélectionné par l'utilisateur. La liste déroulante des unités de planification sera renseignée dans toutes les unités de planification et la liste déroulante adressée sélectionnera « Non adressé ».

![P1739#yIS1](/img/media/image141.png)

Figure 90 : Filtrage des notifications d'expédition ERP

Pour adresser une notification, l'utilisateur doit cocher la case dans la colonne « Adressée ? », puis appuyer sur le bouton « Soumettre ». Si l'utilisateur adresse une notification de changement de produit ERP, il doit d'abord saisir le facteur de conversion. Le champ du facteur de conversion n'est pas modifiable tant que la case adressée n'est pas cochée.

Tout comme dans l’écran « Lié », l’utilisateur peut consulter l’historique des commandes ERP. Pour ce faire, faites un clic droit sur la ligne de notification et cliquez sur « Afficher l'historique des commandes ERP ». Reportez-vous à la section Écran lié pour plus d'informations.

## Importation de données pour la planification des approvisionnements

### Modèles d'importation Excel de données de plan d'approvisionnement

Les données de consommation, d’inventaire et d’expédition peuvent être saisies via les écrans de saisie de données de QAT, via l’écran de planification des approvisionnements ou via Quantimed Import (consommation prévue uniquement). QAT offre également aux utilisateurs la possibilité de saisir ces données directement à partir de Microsoft Excel. Cette méthode de saisie de données est destinée aux saisies groupées contenant beaucoup de données. Les étapes ci-dessous montreront comment saisir des données d'Excel dans QAT :

1. Dans la barre latérale du menu, accédez à « Données du plan d'approvisionnement » et cliquez sur le type de données que vous souhaitez saisir (par exemple « Données de consommation »). ![P1748L76#yIS1](/img/media/image142.png)

2. ![](/img/media/image143.png)OUne fois sur l'écran de saisie des données, allez dans le coin supérieur droit et cliquez sur « Télécharger le modèle ».

3. Un fichier Microsoft Excel sera téléchargé directement dans le dossier « **Téléchargements »** de votre ordinateur.

4. Accédez au dossier Téléchargements de votre ordinateur et ouvrez le fichier Excel. Le format du nom doit être **ConsumptionDataEntryTemplate.xlsx**, la première partie dépendant du type de données que vous saisissez.
    1. _<u>EChacun des quatre types de données (Inventaire, Ajustement, Consommation et Expédition) a son propre modèle Excel, il est donc important de cliquer sur « Télécharger le modèle » à partir de l'écran approprié. Pour l'inventaire et l'ajustement, assurez-vous que le menu déroulant a sélectionné le type de données pour lequel vous souhaitez le modèle.</u>_

5. Une fois dans le modèle Excel, cliquez sur « Activer la modification » en haut si cela vous y est invité.

![P1755#yIS1](/img/media/image144.png)

Figure 91 : Activer l'édition

6. Saisissez les données pour tous les champs obligatoires.
    1. Toute cellule surlignée en gris (par exemple, facteur de conversion) n'est pas modifiable et n'a pas besoin d'être remplie.

    2. Certains champs (par exemple, Source de données) auront des menus déroulants pré-remplis à partir de QAT. Par conséquent, il est important de télécharger un nouveau modèle si un certain temps s'est écoulé depuis la dernière fois que l'utilisateur a utilisé le modèle.

    3. Certains champs comportent des validations de données intégrées (par exemple, les lettres ne peuvent pas être saisies dans les cellules de coût). Si la validation n'est pas satisfaite, un message d'erreur contextuel apparaîtra.

![P1762#yIS1](/img/media/image145.png)

Figure 92 : Modèle Excel

7. Une fois toutes les données saisies dans le modèle Excel, rouvrez la fenêtre QAT.

8. Accédez à l'écran de saisie des données (Consommation, Inventaire, Ajustement, Expédition).

9. Cliquez sur le bouton bleu « + Ajouter une ligne » en bas.
    1. **Remarque :** Vous ne devez ajouter qu'une seule ligne dans QAT, quel que soit le nombre de lignes dans le modèle Excel.

10. Dans le modèle Excel, sélectionnez toutes les données et appuyez sur Ctrl + C sur votre clavier pour copier les données.

11. Accédez à la ligne ajoutée dans QAT, faites un clic gauche sur la cellule la plus à gauche de cette ligne et appuyez sur Ctrl + V sur votre clavier pour coller les données.

12. QAT créera automatiquement de nouvelles lignes pour les données importées depuis Excel.

13. Cliquez sur « Soumettre ».

### Importation de prévisions quantimées

![](/img/media/image146.png)Quantimed est un logiciel conçu pour faciliter le processus de détermination des quantités de médicaments et de fournitures médicales nécessaires à un programme de santé. Le résultat de Quantimed est constitué de données de consommation prévisionnelles d’un programme de santé. Ces données de consommation prévues peuvent constituer un élément clé dans les plans d’approvisionnement des utilisateurs de QAT. QAT permet aux utilisateurs d'importer des prévisions Quantimed dans QAT pour les inclure dans leur plan d'approvisionnement.

**Étape 1 : Importer des données quantimées dans QAT**

1. Accédez à « Données du plan d'approvisionnement » dans le menu de la barre latérale.

2. Sélectionnez « Importation Quantimée »

3. **Importer un fichier de données quantimées**
    1. Choisissez le fichier de prévisions Quantimed .xml sur votre système informatique local.

    2. Sélectionnez le programme QAT dans lequel vous souhaitez importer les données Quantimed.

    3. Cliquez sur « Importer ».

![P1783#yIS1](/img/media/image147.png)

Figure 93 : Importation de fichiers quantimés

**Étape 2 : Cartographier les unités de planification**

1. > Pour mapper un produit Quantimed à une unité de planification QAT, sélectionnez l'unité de planification QAT à l'aide du menu déroulant.

2. > Si vous ne souhaitez pas importer un produit Quantimed spécifique, sélectionnez l'option « Ne pas importer » pour cette ligne.

3. > S'il n'y a pas d'unité de planification QAT associée au produit Quantimed, la liste déroulante affichera « Unité de planification introuvable ». Vous devrez soit sélectionner manuellement une unité de planification dans la liste déroulante, soit revenir au programme et ajouter une unité de planification pour ce produit Quantimed avant de continuer. Vous ne pouvez pas cliquer sur « Suivant », une ou plusieurs cellules indiquent « Unité de planification introuvable ».
    1. > **Remarque** : pour minimiser les cas où une unité de planification n'est pas trouvée, il est recommandé aux utilisateurs de Quantimed de sélectionner des produits dans le fichier .xml du catalogue de produits GHSC-PSM.

4. > Une fois que chaque ligne comporte une unité de planification sélectionnée ou indique « Ne pas importer », cliquez sur « Suivant » en bas de l'écran.

![P1794#yIS1](/img/media/image148.png)

Figure 94 : Unités de planification de la carte

**Étape 3 : Région**

1. > Dans cette étape, sélectionnez la région dans laquelle vous souhaitez importer les données de consommation prévisionnelles. S'il n'y a qu'une seule région, vous devez sélectionner cette région pour continuer.

2. > Ensuite, saisissez le pourcentage de ces données de consommation que vous souhaitez importer dans QAT. Ce pourcentage doit être compris entre 0 et 100 % et s'appliquera à toutes les unités de planification préalablement sélectionnées.

3. > Cliquez sur « Suivant ».

**Étape 4 : Mois de consommation**

1. > Sélectionnez la plage de dates pour les données Quantimed que vous souhaitez importer dans QAT.
    1. > La période que vous sélectionnez est la période de données que vous pourrez importer et qui s'appliquera à toutes les unités de planification précédemment sélectionnées.

2. > Cliquez sur « Suivant ».

![P1806#yIS1](/img/media/image149.png)

Figure 95 : Écran du mois de consommation

**Étape 5 : Importer des données**

1. > La dernière étape consiste à confirmer les données qui seront importées de Quantimed vers QAT en fonction de ce qui a été saisi aux étapes 1 à 4.
    1. > « Consommation prévue Quantimed » est le montant extrait de Quantimed pour le produit et le mois-année associés.

    2. > «Consommation prévue Quantimed convertie» est le montant qui sera intégré dans QAT pour le produit associé et le mois-année après avoir appliqué le pourcentage d'importation et le facteur de conversion.

    3. > « Consommation actuelle prévue en QAT » est le montant de la consommation prévue actuellement en QAT pour cette unité de planification et ce mois-année. Une fois que vous importez les données Quantimed, ce montant sera écrasé par le montant de la « Consommation prévue Quantimed convertie ».

2. > Cet écran affichera toutes les données qui seront importées dans QAT. Si vous ne souhaitez pas importer certains enregistrements, cochez la case dans la colonne « Importer ? » à l'extrême droite. Cela empêchera QAT d’importer les données Quantimed et conservera la consommation prévue actuelle de QAT pour cette unité de planification et ce mois-année.

3. > Cliquez sur « Soumettre » pour importer les données.

![P1816#yIS1](/img/media/image150.png)

Figure 96 : Écran de confirmation de l'importation des données

### Importation des prévisions QAT

**<u>Purpose</u> :** Permet aux utilisateurs d'importer des prévisions créées par QAT dans les programmes de plan d'approvisionnement. Les prévisions ne sont disponibles pour l'importation que si 1) elles sont téléchargées en tant que version finale et 2) une prévision est sélectionnée pour chaque unité de planification.

**<u>Utilisation de cet écran</u>** :

**(Étape 1)**

- Sélectionnez le programme de prévisions à partir duquel importer (seules les prévisions finales sont disponibles)

- Sélectionnez le programme de plan d'approvisionnement vers lequel importer. Seules les versions du plan d'approvisionnement local peuvent être utilisées. Pour télécharger un programme, accédez à l'écran « Télécharger/Supprimer le programme » sous « Gestion du programme ».
  - Sélectionnez la plage de dates des données de prévision à importer, qui doit se situer dans la période de prévision.

- Dans le tableau qui apparaît, sélectionnez et cartographiez les unités de planification.
  - Pour chaque unité de planification de prévision, QAT nécessite une unité de planification du plan d'approvisionnement et un facteur de conversion correspondants. QAT mappe automatiquement les correspondances exactes des unités de planification, mais les utilisateurs peuvent remplacer à la fois le mappage de l'unité de planification et le facteur de conversion.

  - Il n'est pas nécessaire d'importer toutes les unités de planification prévisionnelle. Toutefois, toutes les unités de planification prévisionnelle doivent avoir une sélection dans la table de mappage. Vous pouvez sélectionner manuellement « Ne pas importer » pour chaque PU de prévision que vous ne souhaitez pas importer ou vous pouvez cliquer sur la case à cocher « Ne pas importer toutes les PU non mappées » qui permettra une sélection groupée de Ne pas importer pour toutes les PU non mappées.

  -> Si pour une PU Aucune prévision n'a été sélectionnée, elle apparaîtra grisée avec « static.importintoSP.forecastBlank »

  - Si une unité de planification n'apparaît pas dans la liste déroulante, vous devrez l'ajouter au programme du plan d'approvisionnement dans l'écran « Mettre à jour les unités de planification ».

![P1833#yIS1](/img/media/image151.png)

Figure 97 : Écran d'importation des prévisions

**(Étape 2)**

Pour chaque région de prévision, saisissez la quantité (%) des prévisions de cette région que vous importerez et dans quelle région la consommation prévue sera importée. Voici quelques cas d'utilisation :

- Prévisions nationales au plan national d'approvisionnement

| **Région(s) de prévision** | **% des prévisions** | **Région du plan d'approvisionnement** |
| ----------------------- | ----------------- | ---------------------- |
| Nationale | 100 | Nationale |

- Prévisions multirégionales au plan d'approvisionnement multirégional

| **Région(s) de prévision** | **% des prévisions** | **Région du plan d'approvisionnement** |
| ----------------------- | ----------------- | ---------------------- |
| Nord | 100 | Nord |
| Est | 100 | Est |
| Sud | 100 | Sud |

- Prévisions multirégionales au plan d'approvisionnement national -

| **Région(s) de prévision** | **% des prévisions** | **Région du plan d'approvisionnement** |
| ----------------------- | ----------------- | ---------------------- |
| Nord | 100 | Nationale |
| Est | 100 | Nationale |
| Sud | 100 | Nationale |

- Prévisions nationales vers un plan d'approvisionnement multirégional – notez que le processus d'importation doit être répété pour chaque région du plan d'approvisionnement.

| **Région(s) de prévision** | **% des prévisions** | **Région du plan d'approvisionnement** |
| ----------------------- | ----------------- | ---------------------- |
| Nationale | 20 | Nord |

| **Région(s) de prévision** | **% des prévisions** | **Région du plan d'approvisionnement** |
| ----------------------- | ----------------- | ---------------------- |
| Nationale | 45 | Sud |

| **Région(s) de prévision** | **% des prévisions** | **Région du plan d'approvisionnement** |
| ----------------------- | ----------------- | ---------------------- |
| Nationale | 35 | Est |

**(Étape 3)**

QAT listera chaque enregistrement de prévision à importer (une ligne pour chaque combinaison d'unité de planification, de région et de mois).

- QAT calcule la consommation prévue à importer comme suit :

<table>
  <tbody>
    <tr class="odd">
      <td>
        <em>Fconsommation prévue (module de prévision)</em>
      </td>
      <td>
        <em>x</em>
      </td>
      <td>
        <em>% des prévisions</em>
      </td>
      <td>
        <em>x</em>
      </td>
      <td>
        <p>
          <em>Facteur de conversion</em>
        </p>
        <p>
          <em> (Prévision au plan d'approvisionnement)</em>
        </p>
      </td>
      <td>
        <em>=</em>
      </td>
      <td>
        <em>Consommation prévue arrondie* convertie</em>
      </td>
    </tr>
  </tbody>
</table>

> Par exemple :

- Une prévision nationale qui sera divisée en deux régions de 50% chacune

- L'Unité de Planification des Prévisions est en pack de 3, et l'Unité de Planification du Plan d'Approvisionnement est en pack de 1 (Facteur de Conversion = 3)

- La prévision nationale pour le Mois N était de 100 (pack de 3)

- Prévisions de 100 x 50% x 3 = 150,00 arrondis (packs de 1) seront importés dans chaque région pour le Mois N

<!-- fin de liste -->

- **\*Méthode d'arrondi :** Étant donné que QAT Supply Planning nécessite des nombres entiers sans décimales, QAT convertit la consommation prévue en nombres entiers en arrondissant et en additionnant les « résidus » au fil du temps. Chaque mois, QAT additionne le total des résidus du mois dernier et les prévisions de ce mois-ci, avant d'arrondir à l'inférieur, et tout résidu non arrondi à l'inférieur est ajouté à un total résiduel courant, appelé Total Cumulatif. De cette façon, les quantités ne sont pas perdues lors du processus d’arrondi.
  -> Formules :
    - **Total cumulé pour le mois N** = (Résiduel pour le mois N - 1) + Prévision convertie pour le mois N

    - **Résiduel pour le mois N** = Combien a été perdu lors de l'arrondi = (Total cumulé pour le mois N) – (Prévision convertie arrondie pour le mois N)

    - **Prévision convertie arrondie pour le mois N** = Total cumulé pour le mois N, arrondi au nombre entier le plus proche

-> Par exemple, une prévision nationale devrait consommer 0,25 pack de l'unité de planification des prévisions par mois, pendant 12 mois. L'unité de planification des prévisions et l'unité de planification du plan d'approvisionnement sont identiques (facteur de conversion = 1)
    - En janvier, la consommation convertie est de 0,25, et comme c'est le premier mois, le 0,25 est aussi le total cumulé de janvier. 0,25 est arrondi à un nombre entier égal à 0, et le nombre arrondi de 0 est importé dans le module de planification des approvisionnements. Le résidu de janvier résultant des arrondis est de 0,25 – 0 = 0,25.

    - En février, la consommation convertie est de 0,25, ajoutée au résiduel de janvier de 0,25, ce qui donne au total cumulé de février 0,25 + 0,25 = 0,5. Ensuite, 0,5 est arrondi à un nombre entier de 0, qui est importé dans le module de planification des approvisionnements. Le résiduel de février après arrondi est de 0,5 – 0 = 0,5.

    - En mars, la consommation convertie est de 0,25, ajoutée au résiduel de février de 0,5, ce qui donne au total cumulé de mars 0,25 + 0,5 = 0,75. Ensuite, 0,75 est arrondi à un nombre entier de 0, qui est importé dans le module de planification des approvisionnements. Le résidu de mars après arrondi est de 0,75 – 0 = 0,75.

    - En avril, la consommation convertie est de 0,25, ajoutée au résiduel de mars de 0,75, ce qui donne au total cumulé d'avril 0,25 + 0,75 = 1,00. Ensuite, 1,00 est arrondi à un nombre entier de 1,00, qui est importé dans le module de planification des approvisionnements. Le résidu d’avril résultant de l’arrondi est de 1,00 – 1,00 = 0.

    - A partir du mois de mai, le cycle se répète.

<table>
  <thead>
    <tr class="header">
      <th></th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>Mai</th>
      <th>Jun</th>
      <th>Jul</th>
      <th>Aug</th>
      <th>Sep</th>
      <th>Oct</th>
      <th>Nov</th>
      <th>Dec</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <p>Crévisions converties</p>
        <p>
          <em> (Après application du facteur de conversion)</em>
        </p>
      </td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
    </tr>
    <tr class="even">
      <td>
        <em>CTotal cumulatif</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>1</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>1</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>1</em>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <em>Résiduel</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>0</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>0</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>0</em>
      </td>
    </tr>
    <tr class="even">
      <td>
        <p>Prévision convertie arrondie</p>
        <p>
          <em>(À importer dans le module de planification des approvisionnements)</em>
        </p>
      </td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

- S'il existe une consommation prévue existante dans le plan d'approvisionnement, la cellule « Consommation actuelle prévue » sera surlignée en jaune.

- S'il existe une consommation prévue dans le plan d'approvisionnement et que les données de consommation prévue que l'utilisateur tente d'importer datent de plus de 4 mois, la cellule « Consommation actuelle prévue » sera surlignée en gris et ne sera PAS importée.

- Utilisez le bouton « Importer ? » pour désélectionner les prévisions que vous ne souhaitez PAS importer dans le plan d'approvisionnement. Si cette case est cochée, la consommation prévue convertie remplacera la prévision du plan d'approvisionnement. Si cette case n'est pas cochée, la prévision actuelle du plan d'approvisionnement sera conservée.

![P2015#yIS1](/img/media/image152.png)

Figure 98 : Écran d'importation des prévisions QAT