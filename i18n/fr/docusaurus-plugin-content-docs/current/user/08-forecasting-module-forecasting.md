---
id: forecasting-module-forecasting
title: "Module de prévision : Prévision"
sidebar_label: "Module de prévision : Prévision"
sidebar_position: 8
---
# Module de prévision : Prévision

## Prévisions de consommation

Les prévisions basées sur la consommation, qui s'appuient sur des données de consommation historiques, sont plus utiles dans les programmes matures et stables qui disposent d'un nombre complet d'unités de planification et de données fiables. Cette méthode peut être le prédicteur le plus fiable de la consommation future si l’on prévoit que l’utilisation future sera très similaire à celle du passé. Ainsi, un utilisateur doit être capable d'extrapoler des données historiques (idéalement, plus de 24 mois de données mensuelles de consommation réelle sont disponibles) et les données doivent être une série de données au fil du temps (c'est-à-dire la consommation mensuelle <u>ajustée </u> réelle).

Il existe quatre éléments de base pour une prévision de consommation :

𝐹𝑜𝑟𝑒𝑐𝑎𝑠𝑡 ≅ 𝐵𝑎𝑠𝑒 + 𝑇𝑟𝑒𝑛𝑑 + 𝑆𝑒𝑎𝑠𝑜𝑛 + 𝑅𝑎𝑛𝑑𝑜𝑚

Différents modèles d'extrapolation utiliseront différentes méthodes statistiques pour estimer ces différentes composantes et produire une prévision. Dans QAT, les utilisateurs suivront trois étapes pour produire une prévision basée sur la consommation :

1. > [**Import/input**](#importinputting-actuals) données de consommation réelle. Cela peut être fait en important des données à partir du module QAT Supply Planning ou en saisissant les données manuellement.

2. > [**Ajuster**](#adjustments) données de consommation réelle en ajoutant le taux de reporting et les ruptures de stock, et/ou en interpolant les données manquantes.

3. > [**Extrapoler**](#extrapolation) les données de consommation réelle pour produire une prévision. QAT propose cinq méthodes d'extrapolation différentes : moyennes mobiles, semi-moyennes, régression linéaire, triple lissage exponentiel (TES, Holt-Winters) et moyenne mobile intégrée auto-régressive (ARIMA).

### Importer/Saisir les données réelles

Il existe deux manières pour un utilisateur d'ajouter des données de consommation réelle à son programme :

1. Importer les données de consommation réelle d'un programme existant dans le module QAT Supply Planning, ou

2. Saisissez manuellement les données dans l'écran « Saisie des données et ajustements » du module de prévision QAT.

**Étapes d'importation de données à partir du module QAT Supply Planning :**

1. > Accédez à l'écran « Prévisions basées sur la consommation » à « Importer depuis le plan d'approvisionnement QAT »

2. > Choisissez le programme de prévision, la plage de données de consommation réelle à importer, le programme du plan d'approvisionnement puis la version du plan d'approvisionnement. _Remarque : seuls les programmes de prévisions qui ont été **téléchargés** sur l'ordinateur local de l'utilisateur seront disponibles dans la liste déroulante « Programme de prévisions ». Voir [Télécharger/Supprimer le programme](03-managing-programs-and-versions.md#downloaddelete) pour savoir comment télécharger un programme sur l'ordinateur local._

3. > Les utilisateurs mapperont ensuite l'unité de planification du plan d'approvisionnement à l'unité de planification des prévisions. _Remarque : seules les unités de planification qui ont été ajoutées au programme de prévision dans l'écran « Mettre à jour les unités de planification » et pour lesquelles nous avons coché la case de prévision de consommation seront disponibles dans la liste déroulante « Unité de planification de prévision ». Voir Module de prévision [Unités de planification](07-forecasting-module-program-data.md#planning-units) pour savoir comment ajouter des unités de planification à un programme de prévision._

4. > _Choisissez « Ne pas importer » dans la liste déroulante pour les PU qui ne correspondent pas automatiquement. Si vous avez beaucoup de PU et que vous souhaitez sélectionner « Ne pas importer » pour toutes celles non mappées, vous pouvez cocher la case « Ne pas importer toutes les unités de planification non mappées »_

> ![A screenshot of a computer Description automatically generated](/img/media/image239.png)

Figure 157 : Étape 1 pour importer les données de consommation réelle à partir du module de planification des approvisionnements

5. > Les utilisateurs choisissent quelle région doit être importée dans le programme de prévision et fournissent également des informations sur le % de la consommation réelle qui doit être importée dans le programme de prévision.  
    > ![A screenshot of a computer Description automatically generated](/img/media/image240.png)

Figure 158 : Étape 2 pour importer les données de consommation réelle à partir du module de planification des approvisionnements

6. > La dernière étape permettra aux utilisateurs de revérifier les données de consommation réelle du plan d'approvisionnement pour s'assurer qu'ils importent la bonne unité de mesure et les bons mois de données. Si les données existent déjà dans le programme de prévision, elles seront surlignées en jaune. Si un utilisateur importe des données surlignées en jaune, cette nouvelle importation remplacera les données qui existent déjà dans le programme de prévision. Les utilisateurs peuvent décocher manuellement les mois de données à ne pas importer, s'ils le souhaitent.  
    > ![P2868#yIS1](/img/media/image241.png)

Figure 159 : Étape 3 pour importer les données de consommation réelle à partir du module de planification des approvisionnements

7. > Cliquez sur « Importer ».

**Étapes de saisie manuelle des données de consommation réelle**

1. Accédez à l'écran « Prévisions basées sur la consommation » à « Saisie des données et ajustements ».

2. Sélectionnez le programme de prévision et la période de révision souhaitée. Par défaut, QAT présélectionne une plage de dates de 36 mois avant le début de la période de prévision. Un tableau non modifiable et tous les produits liés à ce programme de prévisions sont affichés, ainsi que leurs données de consommation ajustées si vous avez préalablement saisi ces données ; sinon, vous verrez des cellules jaunes indiquant qu'aucune donnée de consommation n'a été saisie. Par défaut, les produits et la consommation sont affichés en unités de planification. L'utilisateur peut également développer chaque ligne du tableau pour afficher la consommation par région, s'il gère un programme multi-régions.

> ![P2876#yIS1](/img/media/image242.png)

Figure 160 : Tableau supérieur de l'écran de saisie et d'ajustement des données

3. Dans le tableau supérieur, cliquez sur une unité de planification pour afficher le tableau de données détaillé ci-dessous pour cette unité de planification. Le tableau de données détaillé comportera une section pour chaque région de votre programme.

4. Le tableau de données détaillées permet aux utilisateurs d'ajouter, de modifier, d'ajuster ou de supprimer des enregistrements de consommation historiques.
    1. Si vous souhaitez saisir les données manuellement, saisissez la consommation historique pour chaque région et mois dans la ligne « Consommation réelle ».

    2. Si vous avez importé des données de QAT, vous verrez votre consommation historique importée dans la ligne « Consommation réelle ».

![P2882#yIS1](/img/media/image243.png)

Figure 161 : Tableau de saisie manuelle des données pour la consommation réelle

3. Par défaut, les données sont supposées être saisies dans l'unité de planification. Cependant, l'utilisateur peut spécifier l'unité appropriée pour les données détaillées en cliquant sur le lien « modifier » sous le nom de l'unité de planification et dans la fenêtre contextuelle suivante, en choisissant de saisir les données en utilisant l'unité de planification, les quantités de l'unité de prévision (en appliquant un facteur de conversion géré par le domaine) ou une autre unité saisie par l'utilisateur (et un facteur de conversion).

![P2885#yIS1](/img/media/image244.png)

Figure 162 : Bouton permettant de modifier la manière dont les données sont saisies manuellement pour la consommation réelle

![P2887#yIS1](/img/media/image245.png)

Figure 163 : Fenêtre contextuelle permettant de choisir le mode de saisie des données

5. Une fois qu'un utilisateur saisit des données dans la ligne « Consommation réelle » du tableau de données du bas, cliquez sur « Soumettre » afin d'enregistrer les entrées et de les visualiser dans le graphique.
    1. Les utilisateurs peuvent également copier et coller des données à partir d'un Excel ou d'autres formats tabulaires dans la ligne « Consommation réelle ».

![P2891#yIS1](/img/media/image246.png)

Figure 164 : Affichage graphique des données de consommation réelle saisies manuellement

### Ajustements

**<u>Purpose</u> :** Permet aux utilisateurs de préparer des données de consommation historiques avant de passer à l'écran « Extrapolation ». La consommation réelle historique peut être des quantités vendues, des quantités distribuées à l'utilisateur ou des quantités émises par les installations de stockage. Sur cet écran, les utilisateurs peuvent ajuster les données de consommation historiques qui ont été soit saisies manuellement sur cet écran, soit importées à partir d'un programme de plan d'approvisionnement QAT (si vous souhaitez importer, veuillez d'abord passer à l'écran « Importer à partir du plan d'approvisionnement QAT »).

**<u>Utilisation de cet écran</u> :**

1. Il existe trois façons d'ajuster les données :
    1. **Ajuster en cas de sous-déclaration** : la valeur par défaut est de 100 % de déclaration chaque mois. L'utilisateur peut modifier cette valeur pour la valeur correcte. QAT calculera la consommation ajustée en raison de la sous-déclaration. Le calcul suppose que les établissements qui n’ont déclaré aucune consommation avaient le même taux de consommation que ceux qui l’ont déclaré.

2. **Ajuster pour les ruptures de stock** : pour les données importées, le nombre de jours de rupture de stock est extrait du programme de plan d'approvisionnement QAT, si les données sont collectées. La valeur par défaut pour les jours de rupture de stock est zéro jour (produit supposé toujours en stock). L'utilisateur peut modifier cette valeur et QAT calculera la consommation ajustée en raison des ruptures de stock. Le calcul suppose que les jours où le produit était en rupture de stock auraient eu le même taux de consommation que le reste du temps où le produit était en stock. La valeur par défaut du nombre de jours dans un mois est basée sur les jours calendaires, mais les utilisateurs peuvent ajuster le nombre de jours utilisés pour le calcul des ruptures de stock dans « Mettre à jour les paramètres de la version ».

> **\*Taux de rupture de stock** = Rupture de stock (jours)/(\# de jours dans le mois).\*
>
> **\*Consommation ajustée** = Consommation réelle / Taux de déclaration / (1 – Taux de rupture de stock)\*
>
> Par exemple, pour un mois donné, un produit avait une consommation de 1 000 unités, était en rupture de stock 5 jours sur 31 dans le mois et le taux de reporting était de 98 % :
>
> **\*Taux de rupture de stock** = 5 jours de rupture de stock / 31 jours par mois = 16,1 %\*
>
> **\*Consommation ajustée** = 1 000 unités / Rapport de 98 % / (1 – 16,1 %) = 1 217 unités.\*

3. **Ajuster les valeurs manquantes** : Cliquez sur le bouton vert « Interpoler » au milieu à droite de l'écran pour rechercher les périodes où la valeur de consommation est vide et les remplacer par une valeur interpolée. QAT interpole en trouvant les valeurs les plus proches de chaque côté (avant ou après le blanc), calcule la ligne droite entre elles et utilise cette formule de ligne droite pour calculer la valeur du ou des blancs. Notez que QAT n’interpolera pas les mois où la consommation réelle est nulle. QAT n'interpolera que s'il y a au moins un point de données avant et un point de données après la ou les valeurs vides. Mathématiquement :

<!-- fin de liste -->

- Où x représente les mois et y représente la consommation réelle,

- Où les valeurs de données connues sont (x<sub>0</sub> , y<sub>0</sub>) et (x<sub>1</sub> , y<sub>1</sub>)

- Où les valeurs de données inconnues sont (x, y)

- La formule de la ligne interpolée est

![P2914#yIS1](/img/media/image247.png)

![P2915#yIS1](/img/media/image248.png)

2. Utilisez le tableau des données détaillées pour consulter la consommation ajustée

3. Cliquez sur « Soumettre » pour enregistrer toutes les données saisies/ajustées. Une fois les ajustements enregistrés, le graphique sera mis à jour (notez qu'il est nécessaire de cliquer sur Soumettre pour que cela se produise)

4. Répétez les étapes 1 à 3 pour chaque unité de planification qui doit être ajustée.

###Extrapolation

**<u>Purpose</u> :** Permet aux utilisateurs de créer une prévision en identifiant les tendances et les saisons à partir des données de séries chronologiques historiques saisies par l'utilisateur dans l'écran « Saisie et ajustement des données ». Plusieurs options d'extrapolation statistique sont disponibles et seront décrites ci-dessous. Les extrapolations à partir des données de consommation sont effectuées unité de planification par unité de planification.

**<u>Utilisation de cet écran</u> :**

1. **Début de l'extrapolation :**

<!-- fin de liste -->

- Avant d'utiliser cet écran, assurez-vous d'avoir rempli l'écran « Saisie et ajustement des données » pour chaque unité de planification et région que vous souhaitez extrapoler.

- Utilisez les filtres en haut de cet écran pour sélectionner l'unité de planification, la région à extrapoler et la plage de dates pour les données historiques à utiliser.

- L'utilisateur peut sélectionner une ou plusieurs des méthodes d'extrapolation disponibles dans QAT, en fonction du modèle général de consommation et des données disponibles, comme cela sera discuté ci-dessous. Voir les sections 2 à 4 ci-dessous pour une explication des méthodes d'extrapolation et pour savoir comment choisir au mieux les méthodes pour votre prévision.

- Notez que les modifications dans cet écran sont facultatives – QAT applique automatiquement les paramètres d'extrapolation par défaut à toutes les unités de planification une fois l'écran Ajustements terminé. L'utilisateur effectue ensuite la sélection finale des prévisions dans l'écran « Comparer et sélectionner ».

<!-- fin de liste -->

2. **Méthodes d'extrapolation disponibles dans QAT**

> Les méthodes de prévision dans QAT sont organisées du simple au sophistiqué.

1. > **Moyenne mobile :** La moyenne mobile est une moyenne qui évolue dans le temps, supprimant les données plus anciennes à mesure qu'elle intègre des données plus récentes. Pour que QAT calcule la moyenne mobile, entrez le nombre de mois passés que vous souhaitez utiliser dans le calcul de la moyenne. L'utilisateur peut sélectionner n'importe quel entier positif pour ce champ. Saisir 5 par exemple signifierait que la projection pour le mois suivant de la série serait la moyenne de la consommation des cinq mois précédents. Cette méthode est particulièrement utile pour les prévisions à court terme et est sensible aux tendances. Ce n'est pas approprié pour les données saisonnières

2. > **Semi-moyennes :** Les tendances d'estimations semi-moyennes sont basées sur deux moitiés d'une série. QAT divise les données réelles en deux parties égales (moitiés) et la moyenne arithmétique des valeurs de chaque partie (moitié) est calculée comme les valeurs « y » de deux points sur une ligne. La pente de la ligne de tendance est déterminée par la différence entre ces valeurs « y » au fil du temps, définie par la différence des points médians des deux moitiés de la série, ou valeurs « x », des points. Cette méthode est sensible aux tendances et utile pour les prévisions à court et moyen terme mais n'est pas appropriée pour les données saisonnières.

3. > **Régression linéaire :** La régression linéaire modélise la relation entre deux variables en ajustant une équation linéaire aux données observées. Intervalle de confiance : entre 0 % et 100 % (exclusif), par exemple, un niveau de confiance de 90 % indique que 90 % des points futurs possibles doivent se situer dans ce rayon de la prédiction représentée par la ligne de régression. Cette méthode n'est pas appropriée pour les données saisonnières.

4. > **Triple Lissage Exponentiel (Holt-Winters)** : Dans les statistiques, différents types de lissage sont utilisés pour filtrer le bruit afin que nous puissions voir plus clairement les modèles dans un ensemble de données de séries chronologiques. Le lissage exponentiel utilise des données plus anciennes avec des poids décroissants de façon exponentielle au fil du temps. Les paramètres de lissage exponentiel sont définis entre 0 et 1, les valeurs proches de 1 favorisant les valeurs récentes et les valeurs proches de 0 favorisant les valeurs plus anciennes. Les utilisateurs utilisant le triple lissage exponentiel peuvent choisir quatre paramètres :

<!-- fin de liste -->

- **alpha**, s'applique au niveau ou à la ligne de base de l'ensemble de données. Des valeurs alpha plus élevées donnent plus de poids aux données les plus récentes. Le paramètre par défaut de QAT pour alpha est 0,2

- **bêta,** détermine dans quelle mesure les tendances récentes doivent être valorisées par rapport aux tendances plus anciennes. Le paramètre par défaut de QAT pour la version bêta est 0,2.

- **gamma,** reflète la composante saisonnière de la prévision. Saisonnier fait généralement référence à des modèles répétitifs _au cours d'une année_. Plus le gamma est élevé, plus la composante saisonnière la plus récente des données sera pondérée. Le paramètre par défaut de QAT pour le gamma est 0,2.

- **Intervalle de confiance :** entre 0 % et 100 % (exclusif) par ex. Un niveau de confiance de 90 % indique que 90 % des points futurs doivent se situer dans ce rayon de prévision. L'intervalle de confiance par défaut de QAT est de 85 %.

> QAT ne calculera les prévisions TES que pour les ensembles de données contenant 24 mois ou plus de données.

1. > **ARIMA :** ARIMA ou moyenne mobile intégrée autorégressive permet d'intégrer et d'appliquer deux modèles statistiques conçus pour les séries chronologiques stationnaires à des séries chronologiques non stationnaires, c'est-à-dire des séries chronologiques qui ont des tendances ou des saisons. Il est souvent appliqué aux prévisions à court terme. « Auto-régressif » signifie que chaque point de la régression est influencé par ses valeurs précédentes et « moyenne mobile » implique que chaque point est une moyenne, une combinaison linéaire d'un ou plusieurs points adjacents. L'auto-régression et la moyenne mobile sont "intégrées" ensemble pour obtenir le meilleur modèle pour la série par différenciation, ou en utilisant littéralement la différence entre les points d'une série chronologique pour l'analyse au lieu des valeurs brutes. Les modèles ARIMA ont trois paramètres :

<!-- fin de liste -->

- p ou AR (lag order) : le nombre d'observations de retard dans le modèle. Le paramètre par défaut QAT pour p est 0.

- d ou I (degré de différenciation) : le nombre de fois que les observations brutes sont différenciées. Cette valeur est normalement 1 (s'il y a une tendance) ou 0 (pas de tendance). D'autres valeurs plus élevées sont possibles mais non attendues. Le paramètre QAT par défaut pour d est 1.

- q ou MA (ordre de la moyenne mobile) : la taille de la fenêtre de moyenne mobile ou le nombre d'observations différenciées à moyenner. Le paramètre QAT par défaut pour q est 1.

- Intervalle de confiance : entre 0% et 100% (exclusif) par ex. Un niveau de confiance de 90 % indique que 90 % des points futurs doivent se situer dans ce rayon de prévision. L'intervalle de confiance par défaut de QAT est de 85 %.

> Le calcul ARIMA peut être saisonnier ou non saisonnier, en fonction du choix de l'utilisateur et de sa compréhension de ses données et de ses attentes quant à savoir si la consommation d'un produit particulier est soumise ou non à des influences saisonnières. La sélection par défaut de QAT concerne l'ARIMA saisonnier. QAT ne calculera les prévisions ARIMA que pour les ensembles de données contenant 13 mois ou plus de données.

3. **Quelle méthode d'extrapolation dois-je utiliser ?**

> Vous trouverez ci-dessous quelques considérations pour la sélection d'une méthode de prévision. Les méthodes de prévision dans QAT sont organisées du simple au sophistiqué. En général,

- Les modèles plus sophistiqués sont plus sensibles aux problèmes de données

- Si vous disposez de données de moindre qualité (points de données manquants, taux de reporting variables, \<12 mois de données), des méthodes de prévision plus simples comme les moyennes mobiles sont probablement plus utiles.

> Le choix de la méthode d'extrapolation dépend de la tendance attendue dans les données. Certains modèles typiques incluent :

- Stationnaire, où la plage des valeurs observées au fil du temps oscille autour d'une moyenne. Les modèles appliqués à ces ensembles de données peuvent inclure
  - Moyenne mobile

  - ARIMA (non saisonnier)

- Tendance sans composante saisonnière, où les valeurs observées ont une tendance à la hausse ou à la baisse. Les modèles appliqués à ces ensembles de données peuvent inclure
  - Demi-moyennes

  - Régression linéaire

- Tendance et saisonnier, où les valeurs observées dans un ensemble de données comportent à la fois des composantes de tendance et des composantes saisonnières. Les modèles appliqués à ces ensembles de données peuvent inclure
  - ARIMA (saisonnier)

  - Triple lissage exponentiel (Holt-Winters)

- Saisonnier sans tendance, où les valeurs observées ont une composante saisonnière mais pas de tendance. Les modèles appliqués à ces ensembles de données peuvent inclure
  - Triple lissage exponentiel (Holt-Winters)

> Les modèles proposés ici ne sont ni exhaustifs ni exclusifs. QAT permet à l'utilisateur d'appliquer diverses méthodes d'extrapolation, puis de les comparer à l'aide des mesures de meilleur ajustement ou d'erreur de prévision.
>
> La deuxième étape consiste à déterminer si les valeurs prévisionnelles sont censées refléter fidèlement les modèles historiques de vos données et donc si vous utiliserez les mesures d'erreur pour éclairer votre sélection. Lors du choix d'un résultat (que ce soit en ignorant ou non la mesure d'erreur), il sera important de documenter les raisons pour lesquelles vous le faites afin d'éclairer les discussions ou les examens de vos prévisions et d'aider les futurs prévisionnistes à étayer leurs décisions.

4. **Comment interpréter les erreurs ?**0F\[1\]

> QAT calcule automatiquement les mesures d'erreur de prévision à l'aide de plusieurs méthodes. Ceux-ci incluent :

- MAPE (Mean Absolute Percentage Error) : peut être interprété comme la différence moyenne en pourcentage entre les prédictions et leurs cibles prévues dans l'ensemble de données. Par exemple, si MAPE est de 15 %, vos prévisions sont en moyenne éloignées de 15 % des valeurs réelles.
  - _MAPE = \[(1/Nombre d'observations) \* ∑ (|(réel – prévision)|/réel)\] x 100_

- WAPE (Weighted Absolute Percentage Error) : WAPE est une métrique appropriée lorsque l'ensemble de données utilisé a des valeurs faibles ou intermittentes. Un pourcentage WAPE de 5 signifie que la prévision était erronée de 5 % sur l'ensemble des données pour une certaine période d'évaluation. Selon le cas d'utilisation, il est recommandé de choisir un modèle qui donne le moins de valeur WAPE.
  - _WAPE = \[ (∑<sup>n</sup> | (réel – prévision) | / ∑ <sup>n</sup> (réel)\] x 100_

- RMSE (Root Mean Squared Error) : RMSE peut être interprété comme l'erreur moyenne des prédictions du modèle par rapport à la réalité, avec un poids supplémentaire ajouté aux erreurs de prédiction plus importantes. Généralement, plus le RMSE est proche de zéro, plus le modèle est précis.
  - _RMSE = sqrt \[∑<sup>n</sup> (réel – prévision)<sup>2</sup>\] / Nombre d'observations_

- MSE (Mean Squared Error) : MSE est la moyenne agrégée de la différence quadratique entre les valeurs réelles et les prévisions. Les erreurs importantes sont mises en évidence à cause de cette quadrature. MSE est utile lorsque vous travaillez sur des modèles où les erreurs occasionnelles importantes doivent être minimisées. Généralement, plus il est proche de 0, plus le modèle est précis.
  - _MSE = ∑ <sup>n</sup> \[(réel – prévision)<sup>2</sup>\] / Nombre d'observations)_

- _R<sup>2</sup> (la corrélation quadratique entre la variable dépendante et les valeurs ajustées) :_

> _R<sup>2</sup> = 1 – \[régression au carré (SSR) / somme totale des carrés (SST)\], où la somme au carré des résidus de la régression (SSR) est la somme de ses résidus au carré, et la somme totale des carrés (SST) est la somme de la distance entre les données et la moyenne, le tout au carré. La valeur R<sup>2</sup> est toujours un nombre compris entre 0 et 1. R<sup>2</sup> est une mesure de l'ajustement d'une droite de régression à une série d'observations historiques avec des valeurs plus proches de 1 indiquant une correspondance plus forte entre les valeurs réelles et prédites (modèle de régression). Il ne s’agit pas d’une mesure d’erreur et ne doit pas être utilisé seul pour évaluer la pertinence d’une prédiction, mais en combinaison avec d’autres mesures d’erreur et la connaissance du programme par l’utilisateur._

- _R<sup>2</sup> = 1 – \[régression somme carrée (SSR) / somme totale des carrés (SST)\]_

> Hormis R<sup>2</sup>, plus le score est faible, plus le résultat de la méthode de prévision correspond aux données historiques. Dans les modèles où les modèles historiques d'un ensemble de données devraient se refléter dans les valeurs futures, une faible valeur d'erreur pourrait être utilisée pour aider à sélectionner une méthode d'extrapolation préférée, et QAT mettra en évidence ces meilleurs ajustements dans un tableau. Toutefois, si des changements substantiels qui ne correspondent pas aux données historiques sont anticipés, l’extrapolation la mieux adaptée n’est peut-être pas la prévision la plus appropriée à sélectionner.
>
> Pour faire la meilleure sélection entre les méthodes d'extrapolation en fonction de votre objectif, avant d'examiner les mesures d'erreur, la chose la plus importante est d'abord de comprendre quelle méthode d'extrapolation est la plus appropriée pour le modèle attendu dans les données.

5. **Optimisation des paramètres de prévision TES et ARIMA**

![A screenshot of a computer Description automatically generated](/img/media/image249.png)

Figure 165 : Optimiser le lien TES et ARIMA

> **Comme décrit dans la [Section A3. Extrapolation](#extrapolation), QAT offre aux utilisateurs plusieurs options d'extrapolation, notamment TES et ARIMA saisonnier et non saisonnier. Les utilisateurs sont libres d'utiliser les valeurs par défaut de QAT ou de saisir des paramètres de prévision alternatifs dans le but de réduire les mesures d'erreur, augmentant ainsi la correspondance entre les sorties de la méthode de prévision et les points de données réels dans la période de données historiques. Si l'utilisateur travaille en ligne, QAT peut optimiser les paramètres TES et ARIMA en itérant, en calculant le RMSE de chaque itération et en sélectionnant les paramètres qui produisent le RMSE le plus bas.**

![A screenshot of a computer Description automatically generated](/img/media/image250.png)

Figure 166 : Optimisation de la fenêtre contextuelle TES et ARIMA

> **Pour TES, QAT calcule 125 itérations de la prévision, testant chacun des paramètres alpha, bêta et gamma en combinaison avec les valeurs suivantes : 0, 0,2, 0,4, 0,8 et 1. Laquelle des 125 combinaisons pour un produit donné produit le résultat avec le RMSE le plus bas sera affichée sur l'écran d'extrapolation.**
>
> **Pour ARIMA ou ARIMA saisonnier, QAT calcule 24 itérations de la prévision, testant chacun des paramètres p, d et q en combinaison, en utilisant les valeurs suivantes :**

- **p : 0 ou 1**

- **d : 0, 1 ou 2**

- **q : 0, 1, 2 ou 3**

> **Laquelle des 24 combinaisons pour un produit donné produit le résultat ARIMA avec le RMSE le plus bas sera affichée sur l'écran d'extrapolation.**
>
> **Remarque : les statistiques ne sont pas magiques. L’hypothèse sous-jacente à toutes ces méthodes d’extrapolation est que les tendances et les modèles des données historiques se poursuivront dans le futur. Par conséquent, les métriques à faible erreur <u> ne garantissent pas nécessairement une meilleure prévision</u>.**

6. **Extrapolation groupée**

![A screenshot of a computer Description automatically generated](/img/media/image251.png)

Figure 167 : Lien d’extrapolation globale

> **Dans l'écran d'extrapolation QAT, l'utilisateur peut comparer les résultats des différentes méthodes d'extrapolation à la fois graphiquement et dans un tableau de résultats, produit par produit. Cela permet à l'utilisateur de désélectionner les méthodes d'extrapolation qui, selon lui, ne s'appliquent pas à un produit donné afin de limiter les options de l'écran Comparer et sélectionner uniquement celles que l'utilisateur choisit d'afficher.**

![A screenshot of a computer Description automatically generated](/img/media/image252.png)

Figure 168 : Fenêtre contextuelle d'extrapolation groupée

> **Si l'utilisateur préfère envoyer tous les résultats des méthodes d'extrapolation disponibles pour plusieurs produits directement à l'écran Comparer et sélectionner, l'utilisateur peut sélectionner l'extrapolation groupée. Dans la fenêtre contextuelle Extrapolation globale, l'utilisateur peut ensuite sélectionner une plage de dates historiques à partir de laquelle extrapoler la prévision (une seule plage de dates par extrapolation globale), s'il souhaite appliquer la saisonnalité à son calcul ARIMA, quelles unités de planification et régions (si des données régionales sont utilisées) inclure dans l'extrapolation globale et s'il doit ou non optimiser les paramètres ARIMA et TES pour l'extrapolation.**
>
> **Après avoir exécuté l'extrapolation globale, tous les résultats peuvent être visualisés dans l'écran d'extrapolation, l'écran de comparaison et de sélection et la boîte déroulante de l'écran de résumé des prévisions (régional). L'utilisateur peut sélectionner sa méthode d'extrapolation préférée à partir de l'écran de comparaison et de sélection ou de l'écran de résumé des prévisions (régional).**
>
> **L'extrapolation globale dans QAT est particulièrement utile lorsque vous travaillez avec un large éventail de produits pour lesquels des données de consommation actuelles, complètes et précises sont disponibles pendant 12 mois ou plus.**

## Prévisions d'arbres

Les utilisateurs peuvent effectuer une prévision basée sur une arborescence si les données nécessaires à une prévision basée sur la consommation ne sont pas disponibles ou ne sont pas utiles pour prédire la consommation future. Les prévisions arborescentes s'adaptent de manière flexible à toutes les autres méthodes de prévision, telles que les **méthodes de morbidité, de services et démographiques**. Les utilisateurs peuvent spécifier les changements au fil du temps dans une arborescence, soit en spécifiant directement le taux de changement, soit en extrapolant à partir de données passées.

### Construire un arbre

![A screenshot of a computer Description automatically generated](/img/media/image253.png) Figure 169 : Gérer l'arborescence – Liste des arborescences (clic droit pour accéder aux actions)

**<u>Purpose</u> :** Permettre aux utilisateurs de :

1. Afficher une liste de leurs arbres existants

2. Modifiez un arbre existant en cliquant sur n'importe quelle ligne

3. Faites un clic droit sur une ligne pour
    -> **Dupliquer les arbres existants :** Les utilisateurs peuvent également dupliquer un arbre existant dans un autre programme. Les utilisateurs doivent avoir accès aux deux programmes et les avoir tous deux téléchargés sur leur ordinateur local pour pouvoir les dupliquer.

    -> **Supprimer les arbres existants :** Il y aura un écran de confirmation, mais cette action est ensuite irréversible. Cependant, si vous supprimez accidentellement une arborescence, vous pouvez retélécharger un programme si l'arborescence supprimée a été sauvegardée sur le serveur.

    -> **Tree Table :** Ceci permet à l'utilisateur de modifier l'arbre sélectionné dans l'écran [Tree Table](#advanced-techniques)

4. Ajoutez une nouvelle arborescence à un programme téléchargé en cliquant sur le menu déroulant « Créer ou sélectionner » dans le coin supérieur droit de l'écran. De nouveaux arbres peuvent être construits :

<!-- fin de liste -->

- manuellement - sélectionnez « + Dessinez votre propre arbre »

- à partir d'un modèle d'arborescence - sélectionnez le nom du modèle souhaité. Si un utilisateur souhaite voir un modèle d'arborescence ajouté à QAT qui n'existe pas et qui bénéficierait à la communauté QAT, il peut soumettre une demande de modification au [Système d'assistance de ticketing QAT] (#qat-helpdesk-and-tickets).

**\*Remarque** : [Forecast Viewers](12-annex-3-user-role-matrix.md#annex-3-user-role-matrix) peuvent afficher n'importe quelle arborescence qui a été téléchargée sur le serveur et à laquelle ils ont accès ; cependant, seuls les utilisateurs/administrateurs des prévisions pourront créer et modifier/mettre à jour des arborescences.\*

**<u>Utilisation de cet écran</u> :**

- Un programme de prévision doit d'abord être téléchargé pour construire ou éditer un arbre

- Avant de construire et d'éditer une arborescence, ajoutez d'abord les unités de planification du programme de prévision dans l'écran « Mettre à jour les unités de planification ».

- **Construire un arbre similaire à un arbre existant ?**
  - <u>Same structure, numéros différents</u> : Build uniquement
un arbre et utilisez la fonctionnalité [scenario](#scenarios).

  - <u>Structure légèrement différente</u> : Dupliquer un
arbre existant en cliquant avec le bouton droit sur une ligne et en sélectionnant « Dupliquer l’arbre ».
Remarque : Si vous souhaitez dupliquer une arborescence existante à partir d'un autre programme, vous
vous devez avoir téléchargé les deux programmes, vous pouvez alors les dupliquer à partir d'un seul programme
vers un autre programme.

- **Vous souhaitez plutôt démarrer à partir d'un modèle ?** Voir la section [Modèle d'arbre](#tree-templates)

- Les utilisateurs peuvent également supprimer des arbres en cliquant avec le bouton droit sur une ligne et en sélectionnant « Supprimer l'arbre ».

#### Types et fonctions de nœuds

**Construire l'arbre :** L'arbre de prévision est construit de haut en bas, en utilisant différents types de « nœuds ». Voir les types de nœuds et les actions de nœud ci-dessous. Chaque arbre de prévision doit commencer par un nœud Agrégation ou un nœud Numéro et inclure un ou plusieurs nœuds Unité de planification, qui forment la sortie de prévision.

**Actions de nœud :**

- ![P3021L144#yIS1](/img/media/image254.png) Supprimer : Supprime le nœud sélectionné et tous ses enfants.

- ![](/img/media/image255.png) Copier/Déplacer : copie ou déplace le nœud sélectionné et tous les enfants sous le nœud. L'utilisateur peut sélectionner la destination.

- ![P3023#yIS1](/img/media/image256.png) Ajouter un modèle de branche : ajoute un modèle d'arborescence en tant que branche sous le nœud choisi.

- ![](/img/media/image257.png) Ajouter : Ajoute un enfant au nœud sélectionné.

- ![P3025#yIS1](/img/media/image258.png)/![P3025#yIS2](/img/media/image259.png) Réduire/Agrandir : Réduire/Agrandir le nœud actuel et tous ses enfants. Les utilisateurs peuvent également survoler le point pour choisir le nœud à développer et cliquer une fois pour développer ce nœud et tous ses enfants. De plus, il y a une case à cocher « Réduire l'arbre » en haut de l'écran Construire des arbres qui réduira chaque nœud à l'exception du nœud supérieur.

> ![](/img/media/image260.png)

Figure 170 : Exemple d'arbre de prévision réduit

**Types de nœuds :**

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>NType de nœud</strong>
      </th>
      <th>
        <strong>Valeur</strong>
      </th>
      <th>
        <strong>Enfants potentiels</strong>
      </th>
      <th>
        <strong>Afonctionnalité avancée</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <strong>Agrégation ∑</strong>
      </td>
      <td>Sum des nœuds enfants.</td>
      <td>
        <strong>∑</strong> ou numéro
      </td>
      <td>-</td>
    </tr>
    <tr class="even">
      <td>
        <strong>Numéro #</strong>
      </td>
      <td>Défini à ce nœud</td>
      <td>
        % ou 
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3041C11T27#yIS1"
        />
      </td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15574in', height: '0.15574in'}}
          alt="P3042C12T27#yIS1"
        />
        , 
        <img
          src="/img/media/image264.png"
          style={{width: '0.15152in', height: '0.12266in'}}
          alt="P3042C12T27#yIS2"
        />
        , 
        <img
          src="/img/media/image265.png"
          style={{width: '0.25466in', height: '0.16149in'}}
        />
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>P Pourcentage %</strong>
      </td>
      <td>P Pourcentage du parent.</td>
      <td>
        % ou 
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3046C15T27#yIS1"
        />
      </td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15574in', height: '0.15574in'}}
          alt="P3047C16T27#yIS1"
        />
        , 
        <img
          src="/img/media/image265.png"
          style={{width: '0.25466in', height: '0.16149in'}}
        />
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Fentonnoir</strong> 
        <img
          src="/img/media/image266.png"
          style={{width: '0.14783in', height: '0.16957in'}}
        />
      </td>
      <td>
        Somme des nœuds sources liés (
        <img
          src="/img/media/image267.png"
          style={{width: '0.24997in', height: '0.15623in'}}
        />
        )
      </td>
      <td>
        % ou
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3046C15T27#yIS1"
        />
      </td>
      <td>-</td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Funité de prévision</strong> 
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3049C17T27#yIS1"
        />
      </td>
      <td>
        <p>
          Pourcentage des paramètres du parent et de l'unité de prévision. Peut être deux
          différents types d'utilisation :
        </p>
        <ul>
          <li>
            <blockquote>
              <p>
                <img src="/img/media/image268.png" /> : continu
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <img
                  src="/img/media/image269.png"
                  style={{width: '0.1375in', height: '0.175in'}}
                  alt="P3052C18T27#yIS1"
                />
                : Discret
              </p>
            </blockquote>
          </li>
        </ul>
      </td>
      <td>
        <img
          src="/img/media/image270.png"
          style={{width: '0.20816in', height: '0.17563in'}}
          alt="P3053C19T27#yIS1"
        />
      </td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15574in', height: '0.15574in'}}
          alt="P3054C20T27#yIS1"
        />
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Punité de planification</strong> 
        <img
          src="/img/media/image270.png"
          style={{width: '0.20816in', height: '0.17563in'}}
          alt="P3056C21T27#yIS1"
        />
      </td>
      <td>P Pourcentage des paramètres parent et de l'unité de planification.</td>
      <td>-</td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15556in', height: '0.15556in'}}
          alt="P3059C24T27#yIS1"
        />
      </td>
    </tr>
  </tbody>
</table>

-> **∑ Attributs spécifiques au nœud d'agrégation :** aucun – il est défini par la somme de ses enfants. _Par exemple, s'il y a deux nœuds enfants en dessous du nœud Agrégation égaux à 50 et 100, QAT ajoutera automatiquement ces nombres pour définir le nœud Agrégation : 50 (enfant) + 100 (enfant) = 150 (parent d'agrégation)._

-> **\# Numéro d'attributs spécifiques au nœud :**
  -> <u>Node Unit</u> : liste déroulante composée soit
patient, client, client, personnes ou unité

  -> <u>Month:</u> choisissez le mois/l'année où ces données ont été rapportées
de*. Par exemple, si un utilisateur souhaite définir un nœud numérique comme Country Population
et les données datent de janvier 2020, le mois du nœud devrait être janvier 2020.*

-> <u>Node Value:</u> Définir la valeur numérique pour ce
nœud. *Par exemple, si la population du pays en janvier 2020 est de 500 000 habitants, le
la valeur du nœud doit être de 500 000.* Si cette valeur change au fil du temps, les utilisateurs peuvent utiliser
l'onglet [Modélisation/Transfert](#modelingtransfers) pour préciser le changement.
    -> **% Pourcentage d'attributs spécifiques au nœud :**
      -> <u>Node Unit : liste déroulante </u> composée soit de
patient, client, client, personnes ou unité

      -> <u>Mois:</u> choisissez le mois/année de ces données
rapporté à partir de*.* Généralement, il s'agira du mois/de l'année de début de la prévision.

      -> <u>Percentage du Parent:</u> définir le pourcentage
du nœud parent. *Par exemple, si la moitié du nœud du numéro parent, Pays
La population est féminine, le pourcentage de parent serait de 50%.*

      -> <u>Parent Value pour le mois :</u> non modifiable et
fourni uniquement à titre de référence.

      -> <u>Node Value</u>** :** calculé automatiquement par QAT
en fonction du pourcentage défini par l'utilisateur et de la valeur parent. Ceci
le champ n’est pas modifiable.

    -> ![](/img/media/image271.png) **Attributs spécifiques au nœud de l'unité de prévision :**
      -> <u>Mois:</u> choisissez le mois/année de ces données
rapporté de. En règle générale, il s'agira du mois/de l'année de début de la prévision.

      -> <u>Percentage du Parent:</u> définir le pourcentage
du nœud parent.

      -> <u>Parent Value pour le mois :</u> non modifiable et
fourni uniquement à titre de référence.

      -> <u>P Pourcentage de la valeur parent pour le mois : </u> non modifiable
et fourni uniquement à titre de référence.

      -> Catégorie <u>Tracer : liste déroulante </u> pouvant être utilisée
pour aider à affiner les unités de prévision, mais sera automatiquement rempli une fois que le
l’unité de prévision est choisie.

      -> <u>Copie à partir du modèle : fonctionnalité avancée </u>,
dans lequel un utilisateur peut utiliser un [Modèle d'utilisation](#usage-templates) pour l'aider
avec la construction efficace d'un arbre. Cette liste déroulante n'est pas obligatoire.

      -> <u>Unité de prévision : </u> liste déroulante de tous les disponibles
unité de prévision dans le programme utilisateur. Si une unité de prévision n'est pas disponible
dans la liste déroulante, l'utilisateur doit d'abord l'ajouter à « [Mettre à jour l'unité de planification] (#planning-units-1) »
écran.

      -> <u>Punité de planification : liste déroulante </u> filtrée en fonction de
unité de prévision choisie. S'il n'y a qu'une seule unité de planification associée
avec l'unité de prévision, ce champ sera automatiquement pré-rempli.

      -> <u>Type d'utilisation :</u>
        -> ![](/img/media/image272.png) <u>Discrete</u> : Chaque \_\_\_\_\_\_\_ \[unité de nœud parent\] nécessite \_\_\_\_\_\_\_\_\_ \[unité de mesure de prévision\] \_\_\_\_\_\_\_\_\_\_ fois par \[jour/semaine/mois/année\] pour \_\_\_\_\_\_\_\_\_\_\_\_\_ \[jour/semaine/mois/année\]
          -> <u> Calculer (tout le premier mois/mois par mois) </u>
: Si vous sélectionnez « Tout le premier mois », QAT préchargera le total
quantité prévue au mois de début du nœud. Si sélectionné
« Mois par mois », QAT calculera la quantité discrètement
mois par mois (voir [Techniques avancées](#advanced-techniques)
pour plus d'informations).

          -> <u>Sile Usage (Oui/Non) :</u> permet à l'utilisateur de
déterminer si cette unité de prévision est utilisée sur une période précise de
le temps. Si « oui » est sélectionné, la durée des calculs discrets
n'est pas nécessaire.

        -> ![](/img/media/image268.png) <u>Continuous</u> : Chaque \_\_\_\_\_\_\_ \[unité de nœud parent\] nécessite \_\_\_\_\_\_\_\_\_ \[unité de mesure de prévision\] tous les \_\_\_\_\_\_\_ \[jour/semaine/mois/année\]

      -> <u>Lag en mois :</u> permet de détailler si une prévision
l'unité est retardée ou a une utilisation progressive du produit. Voir [Techniques avancées](#advanced-techniques)
pour plus d'informations.

-> ![](/img/media/image273.png) **Attributs spécifiques au nœud de l'unité de planification :** nœud créé automatiquement lorsque l'unité de prévision est ajoutée à une arborescence. La plupart des attributs de l'écran d'ajout/modification de nœuds ne sont pas modifiables et servent uniquement de référence ; cependant, quelques-uns peuvent être mis à jour en fonction de circonstances spécifiques :
      -> <u>Mois:</u> choisissez le mois/année de ces données
rapporté de. En règle générale, il s'agira du mois/de l'année de début de la prévision.

      -> <u>Calculation Override : les utilisateurs de </u> peuvent choisir de
utilisez le calcul automatique de QAT pour le nombre d'unités de planification en cliquant sur « Oui »
ou saisissez manuellement une valeur en cliquant sur « Non ». Voir [Techniques avancées](#advanced-techniques)
pour plus d'informations.

**Changements au fil du temps**

Bien que la structure arborescente reste constante dans le temps, les pourcentages et les valeurs des nœuds peuvent changer au fil du temps. Utilisez le menu déroulant des dates pour afficher l’arborescence à n’importe quel mois. Les trois fonctionnalités ci-dessous sont disponibles dans chaque nœud et permettent à l'utilisateur de contrôler la façon dont les nœuds évoluent au fil du temps :

- **⇅ Modélisation :** Permet à l'utilisateur de spécifier le taux de changement exact

- ![P3094#yIS1](/img/media/image274.png "Link with solid fill")**Transfer** : Permet aux utilisateurs de relier deux nœuds ensemble – ainsi la diminution du nœud source est liée à l'augmentation du nœud de destination. Utile pour les transitions.

- ![P3095#yIS1](/img/media/image275.png) **Extrapolation :** Permet aux utilisateurs d'utiliser des données historiques pour extrapoler les changements futurs.

Pour plus d'informations et des exemples spécifiques de changements au fil du temps, voir [Modélisation/Transferts](#modelingtransfers)<u>.</u>

#### Bases de la construction d'un arbre

![](/img/media/image276.png)

Figure 171 : Exemple d'arbre de prévision simple

Les arbres de prévision sont construits de haut en bas à l'aide de différents types de [nœuds.](#node-types-functions) Chaque arbre de prévision doit commencer par un nœud Agrégation ou un nœud Numéro et inclure un ou plusieurs nœuds Unité de planification. Les nœuds d'unité de planification doivent être l'enfant d'un nœud d'unité de prévision. Ainsi, un utilisateur doit disposer d'au moins trois niveaux de nœuds (nœud Agrégation/Nombre, nœud Unité de prévision et nœud Unité de planification) pour produire une sortie prévisionnelle.

**Étapes pour créer une arborescence manuelle :**

1. > Télécharger un programme

2. > Accédez à l'écran Arbre de prévision à Gérer l'arborescence.

3. > En haut à droite de l'écran, cliquez sur le menu déroulant bleu « Créer ou sélectionner » et sélectionnez « + Dessinez votre propre arbre » dans le menu déroulant.

4. > Définissez les détails de l'arbre, tels que la méthode de prévision (démographique, morbidité ou services), le nom de l'arbre et la région.
    1. Une fois créé, les utilisateurs peuvent modifier les détails de l'arborescence en cliquant sur l'icône ![P3108#yIS1](/img/media/image277.png) à côté de la liste déroulante Arborescence.

    2. (facultatif) En cliquant sur l'icône ![P3109#yIS1](/img/media/image277.png) à côté de la liste déroulante Scénario, les utilisateurs peuvent ajouter, modifier et supprimer des scénarios d'arborescence. Pour plus d'informations, consultez [Scénarios](#scenarios) dans la section ci-dessous.

5. > Par défaut, QAT commencera par un nœud numérique avec une valeur de zéro au niveau 0. Cliquez sur ce nœud par défaut pour modifier/mettre à jour le nœud.

6. > Ajoutez un nouveau nœud (enfant) sous le nœud parent en cliquant sur ![P3111#yIS1](/img/media/image278.png) et en choisissant le type de nœud approprié. En fonction du parent, QAT filtrera automatiquement les [types de nœuds enfants] (#node-types-functions) disponibles. QAT ajoutera le nouveau nœud sous le même parent et à droite de tous les nœuds existants. Continuez à ajouter des nœuds en fonction des données disponibles jusqu'à terminer avec un nœud Unité de prévision et son nœud Unité de planification associé.
    1. Pour supprimer un nœud, cliquez simplement sur l'icône ![P3112#yIS1](/img/media/image254.png), mais notez que cela supprimera également les nœuds enfants sous celui en cours de suppression.

    2. Pour copier ou déplacer un nœud, cliquez sur l'icône ![](/img/media/image279.png). Dans la fenêtre contextuelle, vérifiez ou sélectionnez l'endroit où vous souhaitez que le nœud soit copié ou déplacé : l'arborescence, le niveau du parent et le parent.
        - Pour la copie, QAT sélectionnera par défaut le même emplacement que le nœud d'origine

        - Pour le déplacement, QAT sélectionnera par défaut le même arbre que le nœud d'origine

        - La branche entière (y compris tous les nœuds enfants) sera déplacée/copiée.

- Utilisez la case à cocher pour sélectionner si vous souhaitez inclure la modélisation ou non. Remarque : Les transferts ne sont jamais copiés/déplacés.

    3. En tant que fonctionnalité de validation, QAT signalera un nœud d'unité de planification (PU) avec une bordure rouge dans deux circonstances : 1) si un utilisateur a ajouté une unité de prévision (FU) et une PU, puis modifie l'UF et oublie par erreur de passer également à la PU correspondante correcte, ou 2) si un utilisateur crée une arborescence à partir d'un modèle d'arborescence qui a des PU, mais que l'utilisateur n'a pas ces PU dans son programme.

![](/img/media/image280.png)

> Pour corriger cela, les utilisateurs peuvent cliquer sur le nœud PU et choisir le PU approprié dans la liste déroulante.

![P3117#yIS1](/img/media/image281.png)

4. _Astuce : les utilisateurs peuvent « nettoyer » leur arborescence en cliquant sur l'une des cases disponibles (Masquer l'unité de planification, Masquer l'unité de prévision et l'unité de planification, ou Masquer la validation de l'arborescence) en haut de l'arborescence._

<!-- fin de liste -->

7. > _(facultatif)_ Les utilisateurs peuvent insérer un modèle d'arborescence dans le corps de leur arborescence en cliquant sur l'icône ![P3119#yIS1](/img/media/image256.png) pour ajouter un modèle de branche. Cette branche sera ajoutée sous le nœud actuel en tant qu'enfant. Cela améliore l'efficacité de l'ajout de plusieurs lots de nœuds (une branche) identiques ou similaires dans une arborescence existante ou une nouvelle arborescence en utilisant des modèles. Pour plus d'informations sur les modèles de branche, reportez-vous à [Modèles de branche](#branch-templates)

8. > _(facultatif)_ Cliquez sur les niveaux de l'arborescence (cases rectangulaires bleu foncé à gauche de l'arborescence) pour :
    -> Nommer les niveaux d'un arbre. Cela rendra l'arborescence plus facile à lire et sera utilisé dans les listes déroulantes et les axes de l'écran [Modeling Validation](#modeling-validations).

    -> Réorganisez les branches de votre arbre comme vous le souhaitez en utilisant les flèches haut et bas pour indiquer la position de gauche à droite des branches. Si la liste est longue, utilisez la liste déroulante « voir les enfants de » pour filtrer les nœuds.

![A screenshot of a computer Description automatically generated](/img/media/image282.png)

9. > Les arbres QAT sont **automatiquement enregistrés** sur l'ordinateur local (pour enregistrer un arbre sur le serveur, veuillez consulter [Télécharger la version] (#upload). Les quantités qui apparaissent dans les nœuds sont également automatiquement calculées à mesure que l'arbre change ; cependant, si QAT est lent lors de la modification de l'arbre, les utilisateurs peuvent décocher la case « Calculer automatiquement » pour arrêter les calculs automatiques du backend. Pour voir manuellement les calculs mis à jour après chaque modification, les utilisateurs devront cliquer sur le bouton ![P3121#yIS1](/img/media/image283.png). icône.
    1. > Les utilisateurs peuvent télécharger leurs arbres au format PDF pour les partager avec les parties prenantes en cliquant sur l'icône ![P3122#yIS1](/img/media/image284.png).

    2. > Les utilisateurs peuvent télécharger un aperçu de leur arbre pour vérifier la validation de la somme des enfants, les valeurs des nœuds et leurs nœuds en cliquant sur l'icône ![P3123#yIS1](/img/media/image285.png).

10. > _(facultatif)_ Pour modifier par lots des valeurs dans une arborescence, l'utilisateur peut utiliser l'écran **Tree Table**, qui est accessible via un lien en haut à gauche de l'écran Gérer l'arborescence – Créer des arborescences.
    -> Sur l'écran Tables arborescentes,

    -> Les listes déroulantes en haut de l'écran doivent être préremplies avec le même programme, arborescence, scénario et date d'affichage que ceux précédemment sélectionnés, mais les utilisateurs peuvent mettre à jour les listes déroulantes si nécessaire avant d'apporter des modifications.

    -> Les nœuds sont regroupés par type de nœud sur différents onglets. Accédez au(x) nœud(s) que vous souhaitez modifier à l'aide des onglets

    -> Modifications apportées à toutes les valeurs de nœud en modifiant les cellules du tableau.

    -> Voir l'exemple et la capture d'écran de la Figure 157

    -> Notez que même si l'écran Tree Tables est utile pour modifier efficacement les valeurs de plusieurs nœuds, l'écran Tree Tables permet <u>not</u> de modifier la structure arborescente. Veuillez utiliser l'écran Gérer l'arbre – Créer des arbres pour ajouter, supprimer, copier ou déplacer des nœuds.

    -> De retour à l'écran Build Tree, les utilisateurs devront peut-être cliquer sur l'icône ![P3121#yIS1](/img/media/image283.png) pour voir les valeurs mises à jour.

> ![A screenshot of a computer Description automatically generated](/img/media/image286.png)

Figure 172 Accès et utilisation de l'écran de table arborescente

#### Scénarios

**Utilisation de scénarios :** Les scénarios sont utilisés pour modéliser différentes valeurs pour le même arbre. Les scénarios sont utiles lorsque les utilisateurs souhaitent analyser le résultat de différents changements au fil du temps (par exemple : objectif national par rapport au statu quo, différents niveaux de saisonnalité, transition des unités de planification à des rythmes différents, etc.), mais souhaitent conserver la structure de base <u>same</u>. Pour créer un arbre avec des structures <u>différentes</u> (par exemple différents régimes, différentes méthodologies), il est recommandé de créer un autre arbre (astuce : utilisez la fonction d'arbre dupliqué\!). Pour ajouter, modifier, supprimer ou désactiver un scénario, utilisez l'icône ![P3125#yIS1](/img/media/image277.png) à côté de la liste déroulante des scénarios. Utilisez la liste déroulante des scénarios pour sélectionner le scénario à afficher et à modifier.

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Fixe pour tous les scénarios</strong>
      </th>
      <th>
        <strong>Unique à chaque scénario</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <p>Tarborescence</p>
        <p>Ntitre du nœud</p>
        <p>NType de nœud</p>
      </td>
      <td>
        <p>Nvaleur du nœud</p>
        <p>Mois</p>
        <p>Remarques</p>
        <p>Modélisation/Transfert/Extrapolation</p>
      </td>
    </tr>
  </tbody>
</table>

_Remarques_

- _Par défaut, seuls les _scénarios actifs_ sont affichés. Pour afficher les scénarios inactifs, cliquez sur l'icône_ ![P3125#yIS1](/img/media/image277.png) _à côté de la liste déroulante des scénarios, suivie de « Afficher les scénarios inactifs »_

- _Les utilisateurs peuvent choisir différentes combinaisons arbre-scénario pour chaque unité de planification dans l'écran [Comparer et sélectionner] (#compare-and-select)._

#### Modélisation/Transferts

**<u>Purpose</u> :** Si un nœud change au fil du temps, un utilisateur peut utiliser l'onglet Modélisation/Transfert pour modéliser la croissance/la perte au sein d'un seul nœud ou un transfert d'un nœud à un autre. Notez que cette fonctionnalité n'est disponible que pour les nœuds Nombre (\#) et Pourcentage (%) (y compris les unités de prévision et les unités de planification). L'utilisateur peut toujours utiliser l'onglet pour afficher les données mensuelles des nœuds Agrégation et Entonnoir.

**<u>Utilisation de cet onglet</u> :**

Les utilisateurs peuvent **manuellement** saisir tous les changements souhaités au fil du temps (croissance/perte/transfert) dans le tableau supérieur, ou ils peuvent utiliser la **Calculatrice de modélisation** ![P3144#yIS1](/img/media/image287.png) pour calculer le taux de variation mensuel (voir la section « Calculatrice de modélisation » ci-dessous pour plus d'informations). Chaque entrée doit être ajoutée sous forme de lignes distinctes par changement dans le tableau supérieur (c'est-à-dire qu'un nœud ne peut pas croître et être transféré dans une seule ligne de saisie de données – il doit s'agir de deux lignes distinctes).

- **Règles pour les nœuds de transfert :**
  - Les nœuds numériques ne peuvent être transférés que vers d'autres nœuds numériques et doivent appartenir au même niveau.

  - Les nœuds de pourcentage ne peuvent être transférés que vers d'autres nœuds de pourcentage et doivent appartenir au même parent.

  - Les transferts sont toujours négatifs depuis le nœud source et positifs vers le nœud destination.

  - L'extrapolation n'est pas autorisée sur un nœud qui dispose également d'un transfert, que ce soit vers/depuis un autre nœud.

<!-- fin de liste -->

- **Types de modélisation :**

| **Type de modélisation** | **\# Calcul du nœud** | **% Calcul du nœud** |
| ----------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Linéaire (\#) | \+/- un nombre statique chaque mois | N/A |
| Linéaire (%) | \+/- un pourcentage statique chaque mois, calculé en fonction du mois de départ | N/A |
| Exponentiel (%) | \+/- un pourcentage chaque mois, calculé sur le mois précédent sous forme de pourcentage glissant | N/A |
| Linéaire (points de %) | N/A | \+/- un pourcentage statique chaque mois (par exemple, si le mois de départ est de 30 % et que la variation est de +1 % chaque mois, le mois suivant est de 31 %, le suivant est de 32 %, et ainsi de suite) |

- Cliquez sur « **Afficher les données mensuelles »** pour afficher un tableau et un graphique avec la valeur du nœud au fil du temps.
  - Cette fonctionnalité est utile pour voir comment les entrées de modélisation et de transfert affectent les données mensuelles sous forme graphique et tabulaire.

  - Dans les données tabulaires, les utilisateurs peuvent ajouter une modification manuelle pour un mois spécifique ou saisir un pourcentage d'indice de saisonnalité (disponible uniquement pour les nœuds \# et %), selon les besoins.
    - Entrez un % positif pour une valeur augmentée ce mois-ci ou une valeur négative pour une valeur diminuée. Par exemple, 20 % indique que la valeur de ce mois est de 20 % au-dessus de la valeur non saisonnière (ou 120 %), tandis que -20 % indique qu'elle est de 20 % en dessous de la valeur non saisonnière (ou 80 %).

    - Pour les nœuds de pourcentage, QAT calcule d'abord la valeur saisonnalisée du pourcentage avant de calculer ensuite la valeur du nœud en multipliant le pourcentage saisonnier et la valeur parent. Dans la figure 159, l'exemple montre comment le pourcentage non saisonnier de 50 % devient 60 % une fois saisonnier.

> ![](/img/media/image288.png)
>
> Figure 173 Saisonnalité dans un nœud numérique
>
> ![](/img/media/image289.png)
>
> Figure 174 Saisonnalité dans un nœud de pourcentage

- Si un utilisateur coche « La modification manuelle affecte le mois prochain », le montant manuel ajouté à la fin du mois sera reporté au début du mois suivant.

- Si aucun de ces champs n'est pertinent, les utilisateurs peuvent décocher « Afficher les modifications manuelles » ou « Afficher la saisonnalité et les modifications manuelles » pour masquer ces colonnes.

**<u>Exemples de modélisation :</u>**

- **Croissance simple** (linéaire \#) - l'exemple ci-dessous montre une croissance démographique chaque mois de 500/mois de janvier 2022 à décembre 2024.

![P3182#yIS1](/img/media/image290.png)

- **Perte simple** (linéaire \#) - l'exemple ci-dessous montre l'attrition chaque mois de 100/mois de janvier 2022 à décembre 2024. QAT utilise un nombre négatif pour indiquer une diminution ou une perte.

![P3184#yIS1](/img/media/image291.png)

- **Croissance simple** (%) linéaire – l'exemple ci-dessous montre une croissance démographique constante de 2 % chaque mois de janvier 2022 à décembre 2024. QAT a calculé que ce changement entraîne une augmentation de la population de 108,64 chaque mois.

![P3186#yIS1](/img/media/image292.png)

- **Croissance simple** (%) exponentielle - l'exemple ci-dessous montre une croissance démographique chaque mois de 1 % de janvier 2022 à décembre 2024. La croissance étant exponentielle, le changement diffère chaque mois. ![P3187#yIS1](/img/media/image293.png)
  - QAT calcule ce changement à 54,32 pour le mois du 22 janvier,

  - QAT calcule ce changement à 54,86 pour le mois du 22 février, et

- QAT calcule ce changement à 55,41 en mars 2022

- **Perte pluriannuelle** – l'exemple ci-dessous montre un taux d'attrition (perte) différent chaque année. L'année 1 (janvier 2022 à décembre 2022) diminue la population de 1 % ou 54,32 chaque mois, l'année 2 (janvier 2023 à décembre 2023) diminue la population de 2 % ou 95,6 chaque mois, etc. QAT utilise un nombre négatif pour indiquer une diminution ou une perte.

![P3192#yIS1](/img/media/image294.png)

- **Transfert** – l'exemple ci-dessous montre un transfert de 250 patients chaque mois pendant un an, de janvier 2022 à décembre 2022, du nœud actuel (Ligne Adultes 1<sup>st</sup>) vers un autre nœud (Ligne Adultes 2<sup>nd</sup>). Ce transfert apparaîtra également sur l'autre nœud (Ligne Adultes 2<sup>nd</sup>) en grisé pour signifier un changement non modifiable.

![P3194#yIS1](/img/media/image295.png)

![](/img/media/image296.png)**<u>Calculatrice de modélisation :</u>**

Cliquez sur l'icône de la calculatrice de modélisation si vous avez besoin d'aide pour calculer le taux de variation mensuel. Le calculateur de modélisation **Valeur finale/Changement** est disponible pour tous les nœuds à l'exception des nœuds d'agrégation, et le calculateur de modélisation **Cible annuelle** n'est disponible que pour les nœuds numériques. Commencez par sélectionner un **Type de modélisation** (Linéaire \#, % linéaire ou % exponentiel), puis un **Type de cible** (Valeur finale/Changement ou Cible annuelle) :

- **Valeur/Changement final :** Utilisez ceci si vous avez une valeur cible (non cumulative) ou un changement total souhaité sur une période spécifique, plutôt qu'un taux de changement mensuel connu.

<!-- fin de liste -->

1. La **Date de début** et la **Date cible** seront renseignées en fonction des entrées originales pour la Date de début et la Date de fin dans le tableau de modélisation, qui sont par défaut basées sur la période de prévision. L'utilisateur peut les modifier s'il le souhaite. Ces deux dates reviendront dans la table de modélisation.

2. La **Valeur de début** est la valeur du nœud au début du mois pour la date de début, telle que calculée par QAT. En d'autres termes, la valeur de départ est la valeur du nœud _avant_ que toute modification de modélisation ne se produise. Ce champ est calculé et ne peut être modifié directement par l'utilisateur. Si la date de début est le mois suivant le « Mois » dans l'onglet Données du nœud, alors la valeur de début est égale à la « Valeur du nœud » fournie par l'utilisateur dans l'onglet Données du nœud.

3. La **Période** est calculée comme suit : Date cible - Date de début (en mois). Cette valeur n'est pas affichée dans le front-end de QAT, mais est utilisée dans les formules ci-dessous.

4. En fonction des données ou hypothèses disponibles, saisissez les données dans <u>one</u> des champs suivants : **Target Ending Value**, **Target Change (%)** ou **Target** **Change (\#)**

5. Une fois la saisie effectuée, les autres champs seront automatiquement renseignés, ainsi que le **'Changement mensuel calculé'** final.

6. Lorsque l'utilisateur clique sur « Accepter », la **Variation mensuelle (% ou \#)** sera renseignée dans le tableau de modélisation principal, en fonction des formules ci-dessous. Tous les changements négatifs seront affichés sous forme de « diminution » et les changements positifs seront affichés sous forme d'« augmentation », le nombre étant affiché en valeur absolue.

> Si l'utilisateur saisit une **valeur de fin cible** :

|                                      | **Linéaire (%)** | **Linéaire (\#)** | **Exponentiel (%)** |
| ------------------------------------ | -------------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------- |
| **Changement cible (%)** | (Valeur de fin cible - Valeur de départ) / Valeur de départ |                                   |                                                                 |
| **Changement cible (\#)** | \- | Valeur finale cible - Valeur de départ | \- |
| **Variation calculée d'un mois à l'autre** | (Valeur finale cible - Valeur de départ) / Période |                                   |                                                                 |
| **Variation mensuelle (%)** | (((Valeur de fin cible - Valeur de départ)/ Période) / Valeur de départ) \* 100 | \- | ((Valeur de fin cible / Valeur de départ) ^ (1 / Période) - 1) \* 100 |
| **Variation mensuelle (\#)** | \- | Changement (\#) / Période | \- |

> Si l'utilisateur saisit **Target Change (%)** :

|                                      | **Linéaire (%)** | **Linéaire (\#)** | **Exponentiel (%)** |
| ------------------------------------ | --------------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------- |
| **Valeur finale cible** | Valeur de départ + (Valeur de départ \* Modification cible (%)/100)/100 |                                   |                                                                |
| **Changement cible (\#)** | \- | Valeur finale cible - Valeur de départ | \- |
| **Variation calculée d'un mois à l'autre** | (Valeur de départ \* Changement cible (%)) / 100 / Période |                                   |                                                                |
| **Variation mensuelle (%)** | (((Valeur de fin cible - Valeur de départ) / Période) / Valeur de départ) \* 100 | \- | (Valeur de fin cible / Valeur de départ) ^ (1 / Période) - 1) \* 100 |
| **Variation mensuelle (\#)** | \- | Changement cible (\#) / Période | \- |

> Si l'utilisateur saisit **Target Change (\#)** :

|                                      | **Linéaire (\#)** |
| ------------------------------------ | ---------------------------------------------------------- |
| **Valeur finale cible** | Valeur de départ + Modification cible (\#) |
| **Changement (%)** | (Valeur de fin cible - Valeur de départ) / (Valeur de départ \* 100) |
| **Variation calculée d'un mois à l'autre** | Changement cible (\#)/Période |
| **Variation mensuelle (\#)** | Changement cible (\#) / Période |

- **Cible annuelle :** Utilisez cette option si vous avez des valeurs cibles (cumulatives sur un an). Au lieu de simplement diviser les objectifs annuels par 12, ce qui crée un modèle d'escalier, la calculatrice aidera à fournir une prévision fluide.

![P3279#yIS1](/img/media/image297.png)

1. Sélectionnez le premier mois de votre objectif et le nombre d'années d'objectifs disponibles.
    - QAT remplira automatiquement les lignes annuelles du tableau en fonction du premier mois d'objectif choisi, en supposant que les objectifs sont pour des périodes de 12 mois.

2. Dans le tableau, saisissez les chiffres pour l'année précédant l'objectif (le réel) et pour chaque année cible.

3. Après la saisie des données, cliquez sur « Calculer » (voir ci-dessous pour l'approche de calcul et les formules).

4. Examinez les différences entre les cibles souhaitées et les nombres calculés QAT. Si les différences sont importantes, déterminez si le taux de changement suit un modèle linéaire ou exponentiel, modifiez le **Type de modélisation** (Linéaire \#, % linéaire ou % exponentiel) et recalculez si nécessaire.

5. Lorsque l'utilisateur clique sur « Accepter », QAT remplit les valeurs calculées à deux endroits :
    - Onglet Valeur du nœud - Mois de départ et valeur de départ

    - Onglet Modélisation/Transfert – une ligne est créée par période de 12 mois après la valeur de départ. **Notez qu'il ne s'agit pas des mêmes périodes que les années cibles** (voir ci-dessous).

> <u>Approche de calcul de l'objectif annuel :</u> QAT suppose
que 1/12<sup>th</sup> de la valeur réelle annuelle a été atteint à mi-parcours
de l'année en cours, et 1/12<sup>th</sup> des objectifs annuels seront atteints
à mi-parcours de chaque année cible. QAT interpole alors efficacement entre ceux
points médians en calculant un taux de variation mensuel linéaire ou exponentiel. Ce mois-ci
le taux de variation est ensuite appliqué aux deux années - la seconde moitié de la première année
et la première moitié de la deuxième année. Pour y parvenir, QAT calcule ce qui suit
champs :

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Field</strong>
      </th>
      <th>
        <strong>Explication / Formule</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>Variation annuelle (%)</td>
      <td>
        <p>
          Changement par rapport à l'année précédente. Calculé pour chaque année après le premier
          année.
        </p>
        <p>
          = (Valeur de l'année en cours - Valeur de l'année précédente) / (Valeur de l'année précédente)
        </p>
      </td>
    </tr>
    <tr class="even">
      <td>Variation mensuelle (%) / Variation mensuelle (#)*</td>
      <td>
        <p>Etaux exponentiel = (valeur de l'année 2/valeur de l'année 1)^ (1/12) -1</p>
        <p>Taux linéaire = Variation annuelle / 12</p>
      </td>
    </tr>
    <tr class="odd">
      <td>Node mois**</td>
      <td>= n-7, où n est le premier mois de la cible.</td>
    </tr>
    <tr class="even">
      <td>NValeur du nœud**</td>
      <td>
        <p>
          Supposé être la première valeur (la valeur réelle) fournie par l'utilisateur
          divisé par 12, puisque nous supposons qu'il s'agit du milieu de l'année.
        </p>
        <p>= Valeur de l'année/12</p>
      </td>
    </tr>
    <tr class="odd">
      <td>CTotal calculé</td>
      <td>
        En commençant par le mois du nœud et la valeur du nœud, et en appliquant le paramètre mensuel
        Changement (% ou #), QAT calcule chaque valeur mensuelle, puis fournit les sommes
        les valeurs sur des périodes de 12 mois.
      </td>
    </tr>
    <tr class="even">
      <td>Différence (cible vs calculée, #)</td>
      <td>
        <p>
          Calculé pour chaque année après la première année réelle. Cette différence
          sera important si la variation annuelle varie considérablement d’une année à l’autre.
        </p>
        <p>= Total calculé – Cible</p>
      </td>
    </tr>
    <tr class="odd">
      <td>Différence (cible vs calculée, %)</td>
      <td>
        <p>
          Calculé pour chaque année après la première année réelle. Cette différence
          sera important si la variation annuelle varie considérablement d’une année à l’autre.
        </p>
        <p>= (Total calculé - Cible) / Target.</p>
      </td>
    </tr>
  </tbody>
</table>

> \* Ces valeurs n'apparaissent pas dans la section « Calculatrice de modélisation », mais sont renseignées dans le tableau des nœuds de modélisation/transfert supérieurs une fois que l'utilisateur a cliqué sur « Accepter ».  
> \*\* Ces valeurs n'apparaissent pas dans la section « Calculatrice de modélisation », mais sont renseignées dans les champs du nœud principal après utilisation, cliquez sur « Accepter ».

####Extrapolation

**<u>Purpose</u> :** L'onglet d'extrapolation permet aux utilisateurs de prévoir les valeurs futures des nœuds en extrapolant à partir des valeurs passées. Cette fonctionnalité n'est disponible que pour les nœuds numériques et est similaire à l'écran « Extrapolation », mais est effectuée dans un nœud d'arborescence. Pour un nœud donné, les utilisateurs doivent choisir entre modélisation/transferts ou extrapolation, mais ne peuvent pas utiliser les deux en même temps. Plus de détails sur les méthodes d'extrapolation peuvent être trouvés sous [Extrapolation](#extrapolation).

**<u>Utilisation de cet onglet</u> :**

1. Tout d’abord, cochez la case à côté de « Extrapoler » dans le nœud Ajouter/Modifier.

2. Sélectionnez « Afficher les données ».

3. Dans le tableau, entrez les valeurs réelles et les taux de reporting de vos données passées. À partir de cette entrée, QAT calculera les valeurs historiques ajustées. Si vous devez modifier la période des données, modifiez le mois de début et de fin en haut du nœud sous « Mois de début pour les données historiques ».

<table>
  <thead>
    <tr class="header">
      <th>Mois</th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>Mai</th>
      <th>Jun</th>
      <th>juillet</th>
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
        # de
        <br />
        Patients
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
    </tr>
    <tr class="even">
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td>
        Total
        <br />
        Prévu
      </td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

4. S'il manque des données, utilisez le bouton vert Interpoler pour remplir les données manquantes. L'interpolation ne peut être utilisée que s'il manque des données des deux côtés du mois.

5. (facultatif) Sélectionnez la ou les méthodes de prévision que vous souhaitez afficher et mettez à jour les paramètres d'extrapolation.

6. Cliquez sur « Extrapoler ». Toutes les prévisions sélectionnées s'afficheront dans le tableau principal et les graphiques.

> _REMARQUE : Les valeurs minimales nécessaires pour obtenir des graphiques et des rapports corrects pour les différentes fonctionnalités sont ci-dessous :_
>
> _\* TES, Holt-Winters : nécessite au moins 24 mois de données de consommation réelle_
>
> _\* ARIMA : Nécessite au moins 14 mois de données de consommation réelle_
>
> _\* Moyenne mobile, semi-moyennes et régression linéaire : nécessite au moins 3 mois de données de consommation réelle_

7. (facultatif) Dans le tableau, ajoutez toutes les modifications manuelles (+/-). Ces changements sont ajoutés ou soustraits aux valeurs extrapolées.

8. Après avoir examiné le tableau principal, le tableau d'erreurs et les graphiques, sélectionnez la méthode de prévision souhaitée en bas de l'écran et cliquez sur « Enregistrer ».

9. Remarque : Si vous modifiez des entrées, vous devrez extrapoler à nouveau pour mettre à jour les calculs, avant de sélectionner une nouvelle méthode.

#### Techniques avancées

**<u>Tips pour des cas d'utilisation spécifiques</u>** :

- **Utilisation du produit retardée ou échelonnée ?** Parfois, la consommation du produit est décalée par rapport aux autres niveaux supérieurs de l'arbre. Dans le nœud **Forecasting Unit** concerné, utilisez le champ **Lag** pour indiquer ce délai.
  - Par exemple, si l'utilisation du produit commence 2 mois après les dates du nœud parent, saisissez « 2 » dans ce champ.

  - Ce champ peut également être utilisé lorsque le produit change au fil du temps – par exemple, si les unités de prévision A, B et C sont utilisées en sécession pendant deux mois à la fois, vous pouvez configurer votre arbre avec l'unité de prévision A (discrète pendant 2 mois, décalage = 0), l'unité de prévision B (discrète pendant 2 mois, décalage = 2), l'unité de prévision C (discrète pendant 2 mois, décalage = 4).

- **Utilisation discrète du produit sur une période plus longue ? (prévisions du premier mois par rapport aux prévisions mois par mois) :** QAT a la possibilité de calculer l'utilisation discrète des produits dans les nœuds d'unité de prévision de deux manières :
  - en frontloadant la quantité discrète consommée par patient au cours du mois 1 (choisissez "Calculer" = "Tout le Premier Mois") ou

  - en désagrégeant la quantité discrète consommée par patient par mois (choisir "Calculer" = "Mois par Mois").

  - Par défaut, QAT supposera « Tout au cours du premier mois » (frontloading) ; cependant, les utilisateurs ont la possibilité de sélectionner « Mois par mois » pour la méthode alternative. Ce calcul alternatif pourrait être utile pour les unités de planification (UP) qui ont de faibles modèles de consommation sur une période donnée ou s'il s'applique à un groupe de patients nouvellement initié. Par exemple, si une femme enceinte doit prendre un supplément nutritionnel une fois par mois pendant toute la durée de la grossesse (neuf mois), QAT calculera par défaut neuf suppléments au cours du premier mois (chargement anticipé). Sans préalimentation, QAT calculerait un supplément le mois 1, un supplément le mois 2, un supplément le mois 3, et ainsi de suite.

Exemple de calcul (Tous au cours du premier mois ou mois par mois) – **Modélisation <u>no</u> appliquée** :

- <u>ATous au cours du premier mois</u> : Il y a 10 patients
qui nécessitent 1 flacon pour un traitement sur 6 mois ; ainsi, le \#
d'unités de planification par patient = 6. Lors du calcul de « Tout au cours du premier mois »,
QAT anticipera la quantité prévue et supposera que les 60 bouteilles (10
patients \* 6 flacons par patient) sont prévus chaque mois.

**Total prévu sur une période de 6 mois = 360 bouteilles**

<table>
  <thead>
    <tr class="header">
      <th>Mois</th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>Mai</th>
      <th>Jun</th>
      <th>juillet</th>
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
        # de
        <br />
        Patients
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
    </tr>
    <tr class="even">
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td>
        Total
        <br />
        Prévu
      </td>
      <td>10</td>
      <td>20</td>
      <td>30</td>
      <td>40</td>
      <td>50</td>
      <td>60</td>
      <td>50</td>
      <td>40</td>
      <td>30</td>
      <td>20</td>
      <td>10</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

- <u>Mois par mois</u> : Il y a 10 patients qui
nécessitent 1 flacon pour un traitement sur une période de 6 mois ; ainsi, le \# de
Unités de planification par patient = 6. Avec « mois par mois », le QAT sera uniformément
répartir la quantité prévue sur la période. Ainsi, QAT
supposons que 10 flacons sont prévus au mois 1 (10 patients \* 1 flacon). Dans
le mois 2, ces mêmes 10 patients reviendront chacun pour une autre bouteille, tandis qu'un
un nouveau groupe de patients de 10 aura également besoin chacun d'une bouteille \[(10 patients \* 1
flacon) + (10 patients \* 1 flacon)\] pour un total de 20 flacons prévus dans
mois 2, et ainsi de suite.

**Total prévu sur une période de 6 mois = 160 bouteilles**

**Total prévu sur une période de 12 mois = 360 bouteilles**

> Exemple de calcul (Tout dans le premier mois vs mois par mois) – **modélisation appliquée** :

- Il y a 10 patients qui ont besoin d'un flacon pour un traitement sur une période de 6 mois ; ainsi, le \# d'unités de planification par patient = 6. Il y a également une augmentation attendue de 5 nouveaux patients par mois. En utilisant la logique ci-dessus pour calculer « Tout au cours du premier mois » et « Mois par mois », QAT calculera le nombre suivant de bouteilles à distribuer sur une période de 12 mois :

<table>
  <thead>
    <tr class="header">
      <th>Mois</th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>Mai</th>
      <th>Jun</th>
      <th>juillet</th>
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
        # de
        <br />
        Patients
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>15</strong>
      </td>
      <td>
        <strong>20</strong>
      </td>
      <td>
        <strong>25</strong>
      </td>
      <td>
        <strong>30</strong>
      </td>
      <td>
        <strong>35</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
    </tr>
    <tr class="even">
      <td>ATout le premier mois</td>
      <td>60</td>
      <td>90</td>
      <td>120</td>
      <td>150</td>
      <td>180</td>
      <td>210</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td>Mois par mois</td>
      <td>10</td>
      <td>25</td>
      <td>45</td>
      <td>70</td>
      <td>100</td>
      <td>135</td>
      <td>125</td>
      <td>110</td>
      <td>90</td>
      <td>65</td>
      <td>35</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

**Total prévu (tout le premier mois) = 810 bouteilles**

**Total prévu (mois par mois) = 810 bouteilles**

- **Vous souhaitez une valeur spécifique pour le nombre d'unités de planification par patient ?** Un utilisateur peut spécifier une valeur spécifique pour le nombre d'unités de planification par unité\* (discrète) ou par unité\* par mois (continu) en choisissant « Non » pour « Utiliser le calcul automatique de QAT pour \# d'unités de planification ? Sauf remplacement par un utilisateur, QAT utilisera le calcul automatique par défaut. (\* Dans ce cas, l'unité peut être un patient, un test, un client, etc.)
  - **Exemple discret :** Si chaque flacon de bupivacaïne est censé être utilisé toutes les 5 procédures, alors le nombre d'unités de prévision/procédures est de 0,2 flacon. Avec une unité de planification de 5 flacons, QAT calcule que 0,2/5 = 0,04 unités de planification sont utilisées par procédure. Cependant, un utilisateur peut basculer le bouton radio sur « Non » et choisir de remplacer cela en connaissant les taux d'utilisation réels et de saisir 0,05 unités de planification. Ajoutez toujours une note lorsque vous remplacez le calcul de QAT.

> ![](/img/media/image298.png)

- **Exemple continu :** Si un patient a besoin de 1 comprimé par jour indéfiniment dans un flacon de 30 comprimés TLD, QAT calculera cela comme 30,4167/mois ou 1,0139/jour pour tenir compte des mois qui comportent 30 jours, 31 jours, 28 jours, etc. Cependant, un utilisateur peut choisir de basculer le bouton radio sur « Non » et de choisir de remplacer cela par 1 unité de planification/mois. fournissez la valeur de remplacement de 1. Ajoutez toujours une note lorsque vous remplacez le calcul de QAT.

> ![](/img/media/image299.png)

- **Utilisations de prévision répétées ?** Si plusieurs nœuds d'unité de prévision partagent les mêmes paramètres, envisagez d'utiliser l'[écran Modèle d'utilisation](#usage-templates) pour enregistrer vos utilisations courantes, puis d'utiliser le champ « Copier à partir du modèle » pour remplir les champs dans les nœuds d'unité de prévision.

- **Agréger les valeurs des nœuds pour un calcul ultérieur ? (Nœuds d'entonnoir) :** Dans certains cas, les utilisateurs peuvent souhaiter lier la valeur d'un nœud à un autre nœud ou regrouper plusieurs nœuds en un seul nœud avant d'ajouter des nœuds supplémentaires ci-dessous. \*\*Veuillez noter que cette fonctionnalité est différente de la liaison de nœuds via la modélisation/transfert, qui permet de lier les modifications dans un nœud aux modifications dans un autre nœud, plutôt que par agrégation. Ceci est également différent de l'utilisation de nœuds d'agrégation, qui agrègent uniquement vers le haut et ne permettent pas de calculs supplémentaires\*\*

> Cas d'utilisation :

- Les tests de charge virale <u></u> sont utilisés par diverses populations,
mais toutes les populations utiliseront la même combinaison d’instruments. Commencez par une démographie
arbre qui se termine par plusieurs populations. Il faut additionner les différentes populations
et les différentes branches d'instruments siègent sous la somme.

- <u>Malaria Patients</u> entrent dans le système de santé par
différents canaux (agents de santé communautaires vs établissements de santé publics), qui
ont des algorithmes de test différents, mais une fois qu'un patient est testé positif, il reçoit
le même « mélange » de traitements. Les différentes populations testées positives doivent
additionnés et les différents schémas thérapeutiques se situent sous la somme

- Diverses méthodes contraceptives <u>C</u> diffèrent par la façon dont elles sont calculées, mais elles proviennent toutes de la même population du pays, qui doit être mise à jour à chaque quantification et peut faire l'objet d'une modélisation au fil du temps. Un arbre peut être construit pour les implants et les injectables, et un autre pour les préservatifs, mais les deux arbres sont liés ensemble au niveau du nœud de population du pays afin que leurs valeurs restent cohérentes.

Comment lier des valeurs

1. Indiquez (sur les nœuds \# ou %) qu'il s'agit de "**nœuds sources**" ![](/img/media/image300.png)

> Figure 175 Indication des nœuds sources

2. Créez de nouveaux "**nœuds d'entonnoir**" et sélectionnez les nœuds sources à partir desquels effectuer l'agrégation.

> Remarque : les nœuds d'entonnoir peuvent « s'asseoir » n'importe où sur l'arborescence – c'est-à-dire que vous pouvez faire du premier nœud d'un arbre un nœud d'entonnoir, ou créer des nœuds d'entonnoir sous n'importe quelle agrégation, nombre de nœuds de pourcentage. En effet, la valeur des nœuds d'entonnoir ne dérive pas de leur parent, mais des sources auxquelles ils sont liés.
>
> ![](/img/media/image301.png)

Figure 176 Ajout de nœuds d'entonnoir

3. Ajoutez des nœuds « enfants » sous les nœuds d'entonnoir : il s'agira probablement des nœuds de produit.

> Les nœuds d'entonnoir offrent une grande flexibilité car ils peuvent être utilisés dans un ou plusieurs arbres, peuvent être utilisés à n'importe quel niveau et

1. L'utilisateur peut créer un lien **en interne dans une arborescence**

![](/img/media/image302.png)

2. Les utilisateurs peuvent établir des liens **en externe entre les arbres** (nœuds sources sur un arbre, nœuds d'entonnoir sur un arbre différent)

> ![](/img/media/image303.png)

### Validations de modélisation

**<u>Objectif :</u>** Une fois qu'une arborescence a été créée, les utilisateurs peuvent utiliser l'écran de validation de la modélisation pour visualiser les modifications au fil du temps. Ceci est utile si la prévision a appliqué une modélisation/des transferts dans un ou plusieurs nœuds de mode.

**<u>Utilisation de cet écran :</u>**

- Allez dans « Tree Forecast » et sélectionnez « Modeling Validations ».

- Sélectionnez les filtres d'écran à l'aide des listes déroulantes.
  - **Programme** : Vous devez être en ligne pour afficher les versions du programme sur le serveur. En mode hors ligne, seuls les programmes locaux téléchargés peuvent être sélectionnés.

  - **Niveau** :
    - Lors de la création d'un arbre, il est utile de renommer les niveaux. La liste déroulante « niveau » sur cet écran affichera les différents noms de niveau que vous avez choisis. Cela facilite l'identification de ce que montrent les données, plutôt que d'utiliser les niveaux 0,1,2,3, etc.

    - La liste déroulante des niveaux regroupera automatiquement l'unité de planification et l'unité de prévision dans ses propres niveaux au cas où ces nœuds se trouveraient à des niveaux distincts de votre arborescence. Par conséquent, si vous disposez également d’un niveau appelé « Unité de prévision », la sélection du niveau « FU » et du niveau « Unité de prévision » fournira les mêmes résultats. Cependant, si vous avez une unité de prévision au niveau 4 et une autre au niveau 5, le niveau « FU » affichera les deux.

  - **Affichage sur l'axe X :** Les données peuvent être affichées par mois (par défaut) ou agrégées par année civile ou année fiscale. (Voir Figure 154)
    - Lors de l'agrégation par année, il est utile d'utiliser la fonction « Afficher les données » pour confirmer quels mois sont inclus dans le graphique agrégé et pour confirmer s'il existe des données pour tous les mois attendus.

    - Lors de l'agrégation par années fiscales - vous devez sélectionner le mois dans lequel commence votre année fiscale. Par exemple, si votre année fiscale 2023 va d'octobre 2022 à septembre 2023, vous pouvez sélectionner l'option qui . QAT affichera toujours les exemples en utilisant l'année civile en cours.

  - **Affichage de l'axe Y** : Les données peuvent être affichées en nombre d'unités, ainsi qu'en pourcentage. (Voir Figure 149 par rapport à Figure 147)

- Pour afficher les données tabulaires, sélectionnez le bouton bleu « **Afficher les données** » en bas à droite de l'écran.

- Lors de la visualisation du **graphique**, l'utilisateur peut masquer des éléments en cliquant sur la légende. Pour afficher, re-cliquez sur cette partie de la légende.

- Cet écran peut être **exporté** au format CSV et PDF en sélectionnant la ou les icônes dans le coin supérieur droit.

![P3366#yIS1](/img/media/image304.png)

Figure 177 : Écran de validation de la modélisation (par numéro et mois)

![P3368#yIS1](/img/media/image305.png)

Figure 178 : Écran de validation de la modélisation (par pourcentage et par mois)

![](/img/media/image306.png)![P3371#yIS1](/img/media/image307.png)

Figure 179 : Écran de validation de la modélisation (par année civile ou par année fiscale)

### Validations de produits

**<u>Objectif :</u>** Une fois qu'une arborescence a été créée, les utilisateurs peuvent utiliser l'écran Validations de produits pour vérifier l'utilisation des produits dans l'arborescence de prévisions. Ceci est utile pour voir plusieurs produits à la fois.

**<u>Utilisation de cet écran :</u>**

- Allez dans « Tree Forecast » et sélectionnez « Product Validations ».

- Sélectionnez les filtres d'écran à l'aide des listes déroulantes.
  - Seuls les programmes locaux téléchargés peuvent être sélectionnés dans cet écran.

- Cet écran peut être exporté au format CSV et PDF en sélectionnant la ou les icônes dans le coin supérieur droit.

![P3382#yIS1](/img/media/image308.png)

Figure 180 : Validations du produit

### Utilisation de modèles

#### Modèles d'arbres

**<u>Purpose</u> :** Pour permettre aux utilisateurs de commencer à concevoir leur arbre de prévision à partir d'un modèle préétabli. _Remarque : les modèles d'arborescence sont gérés au niveau du domaine (global)._

**<u>UUtilisation de modèles d'arborescence :</u>**

** L'utilisateur peut ajouter des modèles d'arborescence à deux emplacements différents : l'écran « Gérer l'arborescence » ou l'écran « Modèles d'arborescence ». Remarque : un programme doit être téléchargé afin de créer un modèle d'arborescence.**

**Méthode 1 :**

1. ** Accédez à « Tree Forecast »** à ** « Gérer les arbres ».**

2. **En haut à droite de l'écran, cliquez sur le menu déroulant bleu « Créer ou sélectionner » et sélectionnez le modèle d'arborescence souhaité.**

3. **Dans la fenêtre contextuelle « Détails de l'arbre » :**
    1. **Confirmez ou mettez à jour les sections Programme, Méthode de prévision, Nom de l'arbre, Régions et Notes.**

    2. **S'il y a des unités de planification qui figurent dans le modèle mais qui sont absentes du programme, QAT les signalera dans la section inférieure de cette fenêtre contextuelle (voir** Figure 150**), dans laquelle un tableau affiche les unités de planification manquantes.**
        1. **S'il y a des unités de planification qui manquent dans le programme (y compris celles inactives ou non cochées pour la prévision d'arbre) et qu'il est recommandé d'utiliser le modèle d'arborescence choisi, les utilisateurs peuvent cliquer sur le bouton « Ajouter/mettre à jour les unités de planification sélectionnées » et QAT ajoutera automatiquement les unités de planification au programme de l'utilisateur.**

        2. **Si l'utilisateur souhaite créer l'arborescence sans les unités de planification recommandées, il peut cliquer sur le bouton « Créer une arborescence sans ajouter d'unités de planification » et les unités de planification ne seront pas ajoutées au programme de l'utilisateur. Cela peut être utile lorsqu'un utilisateur souhaite utiliser une structure arborescente mais souhaite prévoir différentes unités de planification.**

![P3400#yIS1](/img/media/image309.png)

Figure 181 Fenêtre contextuelle Détails de l'arborescence avec « Unités de planification manquantes »

3. **Notez que tous les détails de l'arborescence peuvent être mis à jour ultérieurement en cliquant sur l'icône en forme d'engrenage** ![P3402#yIS1](/img/media/image310.png) **à côté de la liste déroulante de l'arborescence et que des unités de planification peuvent être ajoutées en accédant à l'écran « Mettre à jour [Unités de planification] (#planning-units-1) ».**

<!-- fin de liste -->

4. **QAT créera automatiquement le modèle d'arborescence pour le programme de l'utilisateur et accédera à l'écran « Construire l'arborescence ».**

**Méthode 2 :**

1. > ** Accédez à « Prévisions d'arbre »** à ** « Modèles d'arbres ». **

> ![P3407#yIS1](/img/media/image311.png)

Figure 182 : Écran Modèles d'arborescence

2. > **Examinez les différentes options du modèle d'arborescence, en accordant une attention particulière à la méthode de prévision et au type de nœud de départ. Les utilisateurs peuvent cliquer sur n'importe quelle ligne pour consulter le modèle d'arborescence, sa structure et divers nœuds.**
    1. > **Remarque : les nœuds qui commencent par un nœud Pourcentage sont utilisés spécifiquement pour les modèles de branche et ne peuvent pas être utilisés comme modèle d'arborescence. Les utilisateurs doivent d'abord créer un nœud de départ (Numéro ou Agrégation) avant d'ajouter un modèle de branche (pour plus d'informations, veuillez consulter [Modèles de branche](#branch-templates)).**

3. > **Une fois qu'un utilisateur a examiné le modèle d'arborescence, il peut cliquer sur « Utiliser ce modèle » dans le coin supérieur droit de l'écran.**

4. > **Continuez à suivre les étapes 3 et 4 de la méthode 1 pour finaliser la création du modèle d'arborescence.**

**Recommandations générales sur les modèles d'arborescence :**

- **En général, les modèles d'arborescence contiennent des valeurs de « 0 » et « 0 % » à tous les niveaux, à l'exception des nœuds des unités de prévision et de planification. L'utilisateur peut ensuite personnaliser l'arborescence en fonction de ses besoins, par exemple :**
  - **Cliquez sur chaque nœud pour modifier les valeurs en valeurs réelles.**

  - **Renommer tous les titres de nœuds.**

  - **Remplacez tous les produits par :**
    - **modification du nœud de l'unité de prévision – mais assurez-vous également d'ouvrir le nœud de l'unité de planification enfant et de sélectionner la bonne unité de planification.**

    - **suppression des nœuds des unités de prévision et de planification et ajout de nouveaux.**

  - ** Copiez tous les nœuds ou branches (l'utilisateur peut copier plusieurs nœuds en copiant le haut d'une branche de nœuds). **

  - **Supprimez tous les nœuds ou branches.**

  - **Ajoutez des notes pour expliquer les sources d'informations.**

- S'il existe un modèle d'arborescence qui pourrait bénéficier à la communauté QAT, les utilisateurs peuvent le demander via le [Système d'assistance de billetterie QAT] (#tickets-for-addingupdating-users-and-master-data).

#### Modèles de succursales

**<u>Objectif : Les modèles de branche </u> permettent aux utilisateurs d'ajouter un modèle d'arborescence, y compris la structure et tous les différents nœuds enfants en tant que branche** <u>dans</u> **une arborescence préexistante.** _Remarque : les modèles de branche/arborescence sont gérés au niveau du domaine (global)._ S'il existe un modèle d'arborescence/branche qui bénéficierait à la communauté QAT, les utilisateurs peuvent demandez-le via le [Système d'assistance de billetterie QAT] (#tickets-for-addingupdating-users-and-master-data).

**<u>Utilisation de modèles de branche :</u>**

1. > **Les utilisateurs doivent d'abord examiner les différentes options de modèle d'arborescence/branche, en accordant une attention particulière à la méthode de prévision et au type de nœud de départ dans l'écran « Prévision d'arborescence »** à ** « Modèle d'arborescence ».**

2. > **Naviguez vers « Prévisions d'arbres »** à ** « Gérer les arbres » et sélectionnez l'arbre souhaité.**

3. > **Cliquez sur le symbole** ![P3431#yIS1](/img/media/image312.png) **. Cela ajoutera le modèle de branche en tant qu'enfant au nœud sélectionné.**
    1. > **En fonction du nœud parent choisi, QAT affichera uniquement les modèles de branche qui peuvent être ajoutés en tant qu'enfants potentiels en fonction du nœud de départ dans l'écran « Modèle d'arborescence » (voir [Types et fonctions de nœud](#node-types-functions) pour les options d'enfants potentiels pour chaque type de nœud).**

![P3433#yIS1](/img/media/image313.png)

Figure 183 : Ajout d'un modèle de branche

4. > **Une fois un modèle de branche choisi, cliquez sur « Ajouter une branche ».**

5. > **S'il y a des unités de planification qui figurent dans le modèle de branche, mais qui sont absentes du programme, QAT les signalera dans la section inférieure de cette fenêtre contextuelle (voir** Figure 153**), dans laquelle un tableau affiche les unités de planification manquantes.**
    1. > **S'il y a des unités de planification qui manquent dans le programme (y compris celles inactives ou non cochées pour Tree Forecast) et qui sont recommandées pour utiliser le modèle de branche choisi, les utilisateurs peuvent cliquer sur le bouton « Ajouter/mettre à jour les unités de planification sélectionnées » et QAT ajoutera automatiquement les unités de planification au programme de l'utilisateur.**

    2. > **Si l'utilisateur souhaite ajouter la branche sans les unités de planification recommandées, les utilisateurs peuvent cliquer sur le bouton « Ajouter une branche sans ajouter d'unités de planification » et les unités de planification ne seront pas ajoutées au programme de l'utilisateur. Cela peut être utile lorsqu'un utilisateur souhaite utiliser une structure de succursales mais souhaite prévoir différentes unités de planification.**

![P3440#yIS1](/img/media/image314.png)

Figure 184 : Ajout de PU d'un modèle de branche à un programme

#### Modèles d'utilisation

**<u>Purpose</u> :** Les modèles d'utilisation permettent à l'utilisateur de renseigner simultanément les détails d'un nœud d'unité de prévision. Les modèles d'utilisation peuvent être globaux ou spécifiques à un programme. Notez que les modèles spécifiques au programme sont gérés par les administrateurs du programme de prévisions. L'utilisateur doit être en ligne pour gérer les modèles, mais peut être hors ligne pour les utiliser.

**<u>Pour utiliser des modèles d'utilisation</u>**

![P3446#yIS1](/img/media/image315.png) ![P3446#yIS2](/img/media/image316.png)

Figure 185 : Utilisation d'un modèle d'utilisation dans un nœud d'unité de prévision

1. **Assurez-vous que le programme dispose de l'unité de planification liée au modèle d'utilisation. N'oubliez pas que les modèles d'utilisation sont basés sur l'unité de prévision, mais que chaque unité de planification est liée à une unité de prévision spécifique. Par exemple, si le programme a l'unité de planification « _Lopinavir/Ritonavir 200/50 mg Comprimé, 120 Comprimés_ », tous les modèles d'utilisation avec l'unité de prévision associée « _Lopinavir/Ritonavir 200/50 mg Comprimé_ » seront disponibles lors de la conception de l'arborescence.**

2. **Dans l'écran Créer un arbre, créez ou modifiez un nœud d'unité de prévision existant (voir la section** **B1 pour en savoir plus). Si vous créez un nouveau nœud, assurez-vous de sélectionner d'abord le type de nœud comme « unité de prévision » et vérifiez que les champs « mois » et « pourcentage du parent » sont corrects.**

3. **(facultatif) Sélectionnez une catégorie Tracer pour filtrer les modèles d'utilisation disponibles**

4. **À l'aide de la liste déroulante « Copier à partir du modèle », sélectionnez les modèles d'utilisation souhaités**

5. **Tous les champs suivants seront remplis**

6. **Cliquez sur « Mettre à jour » pour enregistrer les modifications.**

**<u>Pour gérer les modèles d'utilisation</u> (**administrateurs du programme de prévisions uniquement)

> ![P3456#yIS1](/img/media/image317.png)

Figure 186 : Gestion des modèles d'utilisation

1. **Assurez-vous que QAT est en mode en ligne et accédez à Modèles d'arborescence \> Modèles d'utilisation. Les modèles globaux seront grisés et non modifiables.**

2. **Pour créer un nouveau modèle d'utilisation, cliquez sur « Ajouter une ligne ». Pour modifier un modèle d'utilisation existant, passez à l'étape suivante.**

3. **Remplissez ou modifiez la ligne du modèle d'utilisation comme vous le souhaitez**
    -> **La colonne « Nom d'utilisation » est ce qui apparaîtra dans la liste déroulante.**

    -> **Utilisez la barre de défilement horizontale pour accéder à tous les champs du tableau.**

    -> **Utilisez les info-bulles (passez la souris sur les icônes « i ») pour vous guider**

    -> **Utilisez l'avant-dernière colonne « Utilisation en mots » pour vérifier que tout est correctement saisi.**

    -> **Pour les produits utilisés plus d'une fois, il existe un calculateur pour vous aider à convertir l'intervalle en fréquence. Faites un clic droit sur la ligne que vous modifiez pour ouvrir l’écran « Calculer la fréquence d’utilisation ». Entrez l'intervalle et l'unité de fréquence souhaitée (jour, mois, semaine ou année) et le numéro de fréquence et l'unité calculés seront renseignés dans le tableau.**

> ![P3467#yIS1](/img/media/image318.png)

Figure 187 : **Écran « Calculer la fréquence d'utilisation »**

4. **Cliquez sur « Soumettre » lorsque vous avez terminé.**