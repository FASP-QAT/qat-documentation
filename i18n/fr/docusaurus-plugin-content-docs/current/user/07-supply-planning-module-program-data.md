---
id: supply-planning-module-program-data
title: "Module de planification des approvisionnements : données du programme"
sidebar_label: "Module de planification des approvisionnements : données du programme"
sidebar_position: 7
---
# Module de planification des approvisionnements : données du programme

Dans QAT, un **Programme** est l'unité principale de planification de l'approvisionnement, correspondant généralement au domaine technique d'un pays (par exemple, Paludisme, VIH). Les programmes sont régis par des données de base au niveau du domaine, garantissant ainsi la cohérence dans l'ensemble du système.

La gestion des données au niveau du programme est principalement gérée par les **administrateurs du programme** et les **utilisateurs du programme**. Pour plus de détails sur les rôles, voir [Annexe 3 : Matrice des rôles des utilisateurs] (15-annex-3-user-role-matrix.md).

### Catégories de données

| Catégorie | Type de données | Exemples |
| :--- | :--- | :--- |
| **Données de base** | Informations sur le programme | Délais, fret %, responsables de programme. |
| | Informations sur le produit | Unités de planification, intervalles de réapprovisionnement, stock min/max. |
| | Budget | Sources de financement, montants budgétaires, dates de validité. |
| **Données transactionnelles**| Consommation | Consommation réelle et prévue. |
| | Inventaire | Inventaires et ajustements de stock (avaries, péremptions). |
| | Expéditions | Quantités, dates de livraison, agents d'approvisionnement. |

*Tableau 1 : Hiérarchie des données du programme*

## Données de base

> [!ASTUCE]
> Les données de base doivent être mises à jour en ligne. Effectuez une **Master Data Sync** après les mises à jour pour garantir que les modifications sont reflétées dans l'ensemble de l'application.

### Informations sur le programme
Les administrateurs de programme peuvent définir des paramètres généraux tels que les gestionnaires de programme, les délais et les pourcentages de fret par défaut.

**Pour mettre à jour les informations sur le programme :**
1. Accédez à **Gestion du programme** > **Mettre à jour les informations sur le programme**.
2. Sélectionnez le programme cible.
3. Modifiez les champs selon vos besoins et cliquez sur **Soumettre**.
4. (Facultatif) Ajoutez/supprimez des agents d'approvisionnement et des sources de financement des listes spécifiques au programme.

![Update Program Info Interface](/img/media/image113.png)
*Figure 1 : Gestion des informations sur le programme*

### Unités de planification
Les unités de planification sont les produits spécifiques utilisés pour le suivi des achats et des stocks. Alors que le catalogue principal est géré au niveau du domaine, les administrateurs de programme gèrent les unités actives dans leurs programmes spécifiques.

**Paramètres clés :**
- **Planifier par :** Choisissez « MOS » (mois de stock) pour les articles à volume élevé ou « Quantité » pour les articles à faible volume/urgence.
- **Intervalle de réapprovisionnement :** Fréquence des expéditions (en mois).
- **Min Months of Stock (MOS) :** Le niveau de stock de sécurité requis pour éviter les ruptures de stock.
- **Durée de conservation :** Moyenne en mois entre la réception et l'expiration.
- **Seuil d'erreur de prévision :** Utilisé pour signaler les écarts élevés dans les rapports de consommation.

**Pour gérer les unités de planification :**
1. Accédez à **Gestion du programme** > **Mettre à jour les unités de planification**.
2. Sélectionnez votre programme.
3. **Pour modifier :** Double-cliquez sur n'importe quelle cellule (par exemple, Min MOS, Shelf Life) et cliquez sur **Soumettre**.
4. **Pour ajouter :** Cliquez sur **Ajouter une ligne**, recherchez l'unité de planification par son nom, renseignez les paramètres et cliquez sur **Soumettre**.

> [!NOTE]
> Si une unité de planification est absente du catalogue, soumettez un ticket via le [QAT Helpdesk](05-getting-started.md#qat-helpdesk-and-tickets).

### Informations spécifiques au programme/agent d'approvisionnement
Les utilisateurs peuvent remplacer les délais de livraison, les coûts de transport et les prix unitaires par défaut pour des agents d'approvisionnement et des unités de planification spécifiques.

**Rôles et règles clés :**
- **Priorisation :** Les paramètres spécifiques de l'agent/de l'unité remplacent les paramètres du programme, qui remplacent les paramètres par défaut au niveau du domaine.
- **Contraintes :** Une seule ligne est autorisée par combinaison programme/unité/agent.
- **Champs obligatoires :** Le programme, l'unité de planification et l'agent d'approvisionnement sont requis pour ajouter une ligne.

**Pour ajouter ou modifier des informations spécifiques :**
1. Accédez à **Gestion des programmes** > **Informations sur l'agent de programme/approvisionnement**.
2. Sélectionnez le programme et l'unité de planification.
3. Remplissez les délais de livraison, le pourcentage de transport ou les prix unitaires spécifiques.
4. Cliquez sur **Soumettre** et effectuez une **Synchronisation des données principales**.

![Procurement Agent Info Interface](/img/media/image117.png)
*Figure 2 : Paramètres spécifiques de l'agent d'approvisionnement*

### Unités de déclaration alternatives (ARU)
Une ARU permet la saisie des données dans des unités différentes de l'unité de planification standard (par exemple, pièces ou paquets).

**Règles :**
- **Facteur de conversion :** Doit être défini pour convertir l'ARU en unité de planification (par exemple, multiplier par 10).
- **Automation :** QAT crée automatiquement un ARU 1:1 pour chaque unité de planification ajoutée.

**Pour gérer les ARU :**
1. Accédez à **Gestion du programme** > **Unité de reporting alternative**.
2. Sélectionnez le programme.
3. Cliquez sur **Ajouter une ligne** pour créer une nouvelle ARU, définissez le facteur de conversion, puis cliquez sur **Soumettre**.

![ARU Interface](/img/media/image118.png)
*Figure 3 : Autres unités déclarantes*

### Délais de livraison
Les délais de livraison suivent la progression des expéditions selon six statuts. Le système hiérarchise les délais comme suit : **Spécifique au programme/agent** > **Paramètres par défaut du programme** > **Paramètres par défaut du domaine**.

#### Définitions des délais

| Scène | Définition | Niveau de configuration |
| :--- | :--- | :--- |
| **Prévu pour être soumis** | Identifier le besoin de passer commande. | Programme |
| **Soumis à Approuvé** | Passation de la commande jusqu'à approbation. | Programme (par défaut) / Domaine (Agent) |
| **Approuvé pour être expédié** | Approbation d'expédition. | Programme (par défaut) / Domaine (Agent) |
| **Expédié à Arrivé** | Temps de transit (aérien, maritime ou routier). | Programme |
| **Arrivé à reçu** | Arrivée au port jusqu'au récépissé d'entrepôt. | Programme |

**Pour mettre à jour les délais :**
1. Accédez à **Gestion du programme** > **Mettre à jour les informations sur le programme**.
2. Faites défiler jusqu'aux champs de délai et saisissez les valeurs en mois.
3. Cliquez sur **Mettre à jour**.

Pour l'approvisionnement local, l'intégralité du délai de livraison (de la planification à la réception) est gérée par unité de planification dans **Mettre à jour les unités de planification**.

![Shipment Status Flow](/img/media/image120.png)
*Figure 4 : Cycle de vie des délais d'expédition*

### Budget
Les budgets suivent l'allocation de capital pour l'achat de produits de base. Un budget peut être lié à un ou plusieurs programmes.

- **Alerte de statut :** Les budgets surlignés en **Rouge** indiquent que la date de fin est dépassée ou que le montant utilisé dépasse le budget.
- **Règles :** Les envois associés à un budget doivent être désétiquetés avant de dissocier le programme de ce budget.

**Pour ajouter un budget :**
1. Accédez à **Gestion du programme** > **Budget**.
2. Cliquez sur l'icône **** (Ajouter).
3. Saisissez la source de financement, le nom du budget et les montants.
4. Cliquez sur **Soumettre**.

**Pour mettre à jour un budget :**
1. Sélectionnez le budget dans la liste.
2. Modifiez les détails dans l'écran **Mettre à jour le budget** et cliquez sur **Soumettre**.

![Budget Management Screen](/img/media/image123.png)
*Figure 5 : Aperçu du budget*

## Données du plan d'approvisionnement transactionnel
Les données transactionnelles incluent les « Big 3 » : **Consommation**, **Inventaire** et **Expéditions**.

### Données de consommation
La consommation fait référence au stock distribué aux clients.
- **Consommation réelle :** Quantité déclarée distribuée.
- **Consommation prévue :** Quantité prévue convenue par le programme.

**Pour ajouter/mettre à jour la consommation :**
1. Accédez à **Données du plan d'approvisionnement** > **Données de consommation**.
2. Sélectionnez la période de rapport et l'unité de planification.
3. **Ajouter :** Cliquez sur **+ Ajouter une ligne** ou cliquez avec le bouton droit sur une cellule et sélectionnez **Ajouter une nouvelle consommation**.
4. **Mise à jour :** Double-cliquez sur une cellule à modifier. 

> [!AVERTISSEMENT]
> Les données historiques (remontant à plus de 9 mois) sont en lecture seule et ne peuvent pas être modifiées.

**Détails du lot (consommation réelle uniquement) :**
1. Cliquez avec le bouton droit sur une ligne « Consommation réelle » et sélectionnez **Afficher les informations sur le lot**.
2. Modifiez les numéros de lot ou les quantités. La quantité totale du lot doit correspondre exactement à la quantité totale consommée.

![Consumption Data Entry](/img/media/image125.png)
*Figure 6 : Gestion de la consommation*

### Données d'inventaire
Les données d'inventaire incluent les **inventaires de stocks** et les **ajustements** (par exemple, dommages, transferts).

- **Inventaire des stocks :** Inventaire physique à une date précise.
- **Ajustements :** Modifications de l'inventaire utilisable (des notes sont requises pour tous les ajustements).

**Pour ajouter/mettre à jour l'inventaire :**
1. Accédez à **Données du plan d'approvisionnement** > **Données d'inventaire**.
2. Sélectionnez le **Type d'inventaire** (Inventaire ou Ajustement).
3. **Ajouter :** Cliquez sur **+ Ajouter une ligne** et saisissez les détails.
4. **Mise à jour :** Double-cliquez sur les cellules à modifier. 

> [!IMPORTANT]
> Comme la consommation, les enregistrements d'inventaire et d'ajustement datant de plus de 9 mois ne peuvent pas être modifiés.

**Détails du lot :**
- **Ajustements :** Cliquez avec le bouton droit sur une ligne et sélectionnez **Afficher les informations sur le lot**. QAT utilise la logique du « meilleur scénario » pour gérer les quantités de lots si elles ne sont pas explicitement fournies.
- **Inventaire :** Les détails du lot sont gérés dans l'écran Planification des approvisionnements (voir [Section 5.E](08-supply-planning-module-supply-planning.md#supply-planning-project-expired-stock-and-batch-information)).

![Inventory Data Entry](/img/media/image127.png)
*Figure 7 : Gestion des stocks*

### Données d'expédition
Les expéditions sont suivies de la planification à la réception.

**Pour ajouter/mettre à jour des expéditions :**
1. Accédez à **Données du plan d'approvisionnement** > **Données d'expédition**.
2. Sélectionnez les filtres et cliquez sur **+ Ajouter une ligne**.
3. Remplissez les champs obligatoires (surlignés en **Jaune**).
4. **Calculateur de commandes stratégiques :** Pour les produits stratégiques, double-cliquez sur la cellule **Quantité de commande** pour utiliser le calculateur pour le MOQ ou l'arrondi basé sur les palettes.
5. **Détails du lot :** Cliquez avec le bouton droit sur un envoi et sélectionnez **Afficher les informations sur le lot** pour gérer les dates d'expiration et les quantités.

**Règles d'expédition clés :**
- **Envois d'urgence :** Les lignes en **rouge** indiquent que la date de réception est comprise dans le délai de livraison.
- **Coût de transport :** Calculé automatiquement sur la base de `Cost * Freight %`, sauf remplacement manuel.
- **Dates d'expédition :** Cliquez avec le bouton droit sur une expédition et sélectionnez **Afficher les dates d'expédition** pour comparer les étapes estimées et réelles.

![Shipment Management](/img/media/image131.png)
*Figure 8 : Calculateur d'ordres stratégiques*

### Liaison des expéditions ERP
La liaison ERP permet aux planificateurs de synchroniser les expéditions QAT avec le système ERP d'un agent d'approvisionnement (par exemple, ARTMIS de GHSC-PSM). Cela automatise les mises à jour du statut, des coûts et des dates.

**Règles de liaison :**
- **Statut :** Les expéditions QAT ne doivent pas être « Planifiées », « Annulées » ou « Suggérées ».
- **Récence :** Les envois « reçus » doivent provenir des 6 derniers mois.
- **Agent :** Actuellement pris en charge uniquement pour **GHSC-PSM**.
- **Mode :** Modifiable uniquement dans les versions locales téléchargées.

#### Liaison des écrans
1. **Non lié (QAT) :** Liez les expéditions QAT existantes aux commandes ERP. Sélectionnez une expédition, recherchez la commande ERP et définissez le facteur de conversion.
2. **Non lié (ERP) :** Liez les commandes ERP à QAT. Vous pouvez sélectionner un envoi QAT existant ou en créer un nouveau directement à partir de cet écran.
3. **Lié :** Affichez toutes les expéditions actuellement synchronisées, mettez à jour les facteurs de conversion ou dissociez les commandes.

**Pour lier un envoi ERP :**
1. Accédez à **Données du plan d'approvisionnement** > **Lier les expéditions ERP**.
2. Sélectionnez l'onglet **Non lié (QAT)** ou **Non lié (ERP)**.
3. Choisissez le programme/unité de planification.
4. Cliquez sur une ligne pour ouvrir la fenêtre de recherche/lien.
5. Fournissez l'**Unité de reporting alternative (ARU)** pour définir le facteur de conversion.
6. Cliquez sur **Lier l'envoi**.

![ERP Linking Screens](/img/media/image133.png)
*Figure 9 : Présentation de la liaison ERP*

####Notifications ERP
Les planificateurs recevront des alertes sur l'écran **Notifications d'expédition ERP** s'il existe des écarts entre QAT et le système ERP (par exemple, commandes annulées, modifications de quantité ou mises à jour de SKU).

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

Figure 88 : Afficher les expéditions ERP dans la saisie de données

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

Pour adresser une notification, l'utilisateur doit cocher la case dans la colonne « Adressée ? », puis cliquer sur le bouton « Soumettre ». Si l'utilisateur adresse une notification de changement de produit ERP, il doit d'abord saisir le facteur de conversion. Le champ du facteur de conversion n'est pas modifiable tant que la case adressée n'est pas cochée.

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

Figure 94: Map Planning Units

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

### Importation de prévisions dans les plans d'approvisionnement
Les planificateurs peuvent importer les prévisions créées par QAT dans leurs programmes de plan d'approvisionnement pour répondre aux besoins d'approvisionnement.

**Prérequis :**
- La prévision doit être téléchargée en version **Finale**.
- Une prévision doit être sélectionnée pour chaque unité de planification.

**Pour importer une prévision :**
1. Accédez à **Données du plan d'approvisionnement** > **Importer les prévisions dans le plan d'approvisionnement**.
2. Sélectionnez le **Programme de prévision source** et le **Programme de plan d'approvisionnement cible** (versions locales uniquement).
3. Sélectionnez la plage de dates à importer.
4. **Cartographe des unités de planification :** Cartographiez les unités de planification de prévision pour approvisionner les unités de plan. Définissez un facteur de conversion si l'emballage diffère. Utilisez « Ne pas importer » pour les unités que vous souhaitez exclure.
5. **Carte des régions :** Définissez le pourcentage de prévision à allouer à chaque région du plan d'approvisionnement (par exemple, 100 % national à national, ou réparti 50/50 entre deux régions).

![Forecast Import Screen](/img/media/image151.png)
*Figure 10 : Mappage des données de prévision avec les plans d'approvisionnement*

#### Arrondis et résidus
Étant donné que la planification des approvisionnements nécessite des nombres entiers, QAT arrondit la consommation prévue au nombre entier le plus proche. Pour éviter la perte de données, les « résidus » (restes) sont reportés et additionnés sur plusieurs mois. Une fois que le résidu cumulé atteint 1,0, il est ajouté à la quantité importée du mois en cours.

**Exemple :**
| Mois | Prévisions converties | Total cumulé | Importation arrondie | Résiduel |
| :--- | :---: | :---: | :---: | :---: |
| janvier | 0,25 | 0,25 | 0 | 0,25 |
| Février | 0,25 | 0,50 | 0 | 0,50 |
| mars | 0,25 | 0,75 | 0 | 0,75 |
| avril | 0,25 | 1h00 | 1 | 0,00 |

*Tableau 2 : Démonstration de la logique d'arrondi résiduel*

6. Vérifiez la liste de conversion finale et cliquez sur **Importer** pour finaliser.