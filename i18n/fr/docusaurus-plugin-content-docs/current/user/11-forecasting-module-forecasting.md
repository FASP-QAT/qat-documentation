---
id: forecasting-module-forecasting
title: "8. Forecasting Module: Forecasting"
sidebar_label: "8. Forecasting"
sidebar_position: 11
---
# Section 8. Module de prévision : Prévision

## A. Prévisions de consommation

Les prévisions basées sur la consommation, qui s'appuient sur des données de consommation historiques, sont plus utiles dans les programmes matures et stables qui disposent d'un nombre complet d'unités de planification et de données fiables. Cette méthode peut être le prédicteur le plus fiable de la consommation future si l’on prévoit que l’utilisation future sera très similaire à celle du passé. Ainsi, un utilisateur doit être capable d'extrapoler des données historiques (idéalement, plus de 24 mois de données mensuelles de consommation réelle sont disponibles) et les données doivent être une série de données au fil du temps (c'est-à-dire la consommation réelle **ajustée**).

Il existe quatre éléments de base pour une prévision de consommation :

<div style={{ textAlign: 'center', margin: '20px 0', fontFamily: 'serif', fontSize: '1.2em', fontStyle: 'italic' }}>
  Forecast ≅ Base + Trend + Season + Random
</div>

Différents modèles d'extrapolation utiliseront différentes méthodes statistiques pour estimer ces différentes composantes et produire une prévision. Dans QAT, les utilisateurs suivront trois étapes pour produire une prévision basée sur la consommation :

1. **[Import/input](#a1-importinputting-actuals)** données de consommation réelle. Cela peut être fait en important des données à partir du module QAT Supply Planning ou en saisissant les données manuellement.
2. **[Ajuster](#a2-adjustments)** données de consommation réelle en ajoutant le taux de déclaration et les ruptures de stock, et/ou en interpolant les données manquantes.
3. **[Extrapoler](#a3-extrapolation)** données de consommation réelle pour produire une prévision. QAT propose cinq méthodes d'extrapolation différentes : moyennes mobiles, semi-moyennes, régression linéaire, triple lissage exponentiel (TES, Holt-Winters) et moyenne mobile intégrée auto-régressive (ARIMA).

### R1. Importer/Saisir les données réelles

Il existe deux manières pour un utilisateur d'ajouter des données de consommation réelle à son programme :
1. Importer les données de consommation réelle d'un programme existant dans le module QAT Supply Planning, ou
2. Saisissez manuellement les données dans l'écran « Saisie des données et ajustements » du module de prévision QAT.

**Étapes d'importation de données à partir du module QAT Supply Planning :**
1. Accédez à l'écran « Prévisions basées sur la consommation » -&gt; « Importer à partir du plan d'approvisionnement QAT »
2. Choisissez le programme de prévision, la plage de données de consommation réelle à importer, le programme du plan d'approvisionnement, puis la version du plan d'approvisionnement. Remarque : seuls les programmes de prévisions qui ont été ***téléchargés*** sur l'ordinateur local de l'utilisateur seront disponibles dans la liste déroulante « Programme de prévisions ». Voir [Télécharger/Supprimer le programme](06-managing-programs-and-versions.md#download-or-delete-program) pour savoir comment télécharger un programme sur l'ordinateur local.
3. Les utilisateurs mapperont ensuite l'unité de planification du plan d'approvisionnement à l'unité de planification des prévisions. Remarque : *seules les unités de planification qui ont été ajoutées au programme de prévision dans l'écran « Mettre à jour les unités de planification » et pour lesquelles nous avons coché la case pour les prévisions de consommation seront disponibles dans la liste déroulante « Unité de planification de prévision ».* Voir Module de prévision [Unités de planification] (10-forecasting-module-program-data.md#d-planning-units) pour savoir comment ajouter des unités de planification à un programme de prévision.
4. Choisissez « Ne pas importer » dans la liste déroulante pour les PU qui ne correspondent pas automatiquement. Si vous avez beaucoup de PU et que vous souhaitez sélectionner "Ne pas importer" pour toutes celles non mappées, vous pouvez cocher la case "Ne pas importer toutes les unités de planification non mappées".

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image239.png').default} alt="Figure 157: Step 1 for Importing Actual Consumption Data from the Supply Planning Module" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 157: Step 1 for Importing Actual Consumption Data from the Supply Planning Module</p>
     </div>

5. Les utilisateurs choisissent quelle région doit être importée dans le programme de prévision et fournissent également des informations sur le % de la consommation réelle qui doit être importée dans le programme de prévision.

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image240.png').default} alt="Figure 158: Step 2 for Importing Actual Consumption Data from the Supply Planning Module" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 158: Step 2 for Importing Actual Consumption Data from the Supply Planning Module</p>
     </div>

6. La dernière étape permettra aux utilisateurs de revérifier les données de consommation réelle du plan d'approvisionnement pour s'assurer qu'ils importent la bonne unité de mesure et les bons mois de données. Si les données existent déjà dans le programme de prévision, elles seront <span style={{ backgroundColor: '#FFFF00' }}>surlignées en jaune</span>. Si un utilisateur importe des données surlignées en jaune, cette nouvelle importation remplacera les données qui existent déjà dans le programme de prévision. Les utilisateurs peuvent décocher manuellement les mois de données à ne pas importer, s'ils le souhaitent.

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image241.png').default} alt="Figure 159: Step 3 for Importing Actual Consumption Data from the Supply Planning Module" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 159: Step 3 for Importing Actual Consumption Data from the Supply Planning Module</p>
     </div>

7. Cliquez sur « Importer ».

**Étapes de saisie manuelle des données de consommation réelle**
1. Accédez à l'écran « Prévisions basées sur la consommation » -&gt; « Saisie des données et ajustements ».
2. Sélectionnez le programme de prévision et la période de révision souhaitée. Par défaut, QAT présélectionne une plage de dates de 36 mois avant le début de la période de prévision. Un tableau non modifiable et tous les produits liés à ce programme de prévisions sont affichés, ainsi que leurs données de consommation ajustées si vous avez préalablement saisi ces données ; sinon, vous verrez des <span style={{ backgroundColor: '#FFFF00' }}>cellules jaunes</span> indiquant qu'aucune donnée de consommation n'a été saisie. Par défaut, les produits et la consommation sont affichés en unités de planification. L'utilisateur peut également développer chaque ligne du tableau pour afficher la consommation par région, s'il gère un programme multi-régions.

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image242.png').default} alt="Figure 160: Top Table in Data Entry & Adjustments Screen" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 160: Top Table in Data Entry & Adjustments Screen</p>
     </div>

3. Dans le tableau supérieur, cliquez sur une unité de planification pour afficher le tableau de données détaillé ci-dessous pour cette unité de planification. Le tableau de données détaillé comportera une section pour chaque région de votre programme.
4. Le tableau de données détaillées permet aux utilisateurs d'ajouter, de modifier, d'ajuster ou de supprimer des enregistrements de consommation historiques.

   un. Si vous souhaitez saisir les données manuellement, saisissez la consommation historique pour chaque région et mois dans la ligne « Consommation réelle ».

   b. Si vous avez importé des données de QAT, vous verrez votre consommation historique importée dans la ligne « Consommation réelle ».

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image243.png').default} alt="Figure 161: Manual Data Entry Table for Actual Consumption" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 161: Manual Data Entry Table for Actual Consumption</p>
        </div>

   c. Par défaut, les données sont supposées être saisies dans l'unité de planification. Cependant, l'utilisateur peut spécifier l'unité appropriée pour les données détaillées en cliquant sur le lien « modifier » sous le nom de l'unité de planification et dans la fenêtre contextuelle suivante, en choisissant de saisir les données en utilisant l'unité de planification, les quantités de l'unité de prévision (en appliquant un facteur de conversion géré par le domaine) ou une autre unité saisie par l'utilisateur (et un facteur de conversion).

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image244.png').default} alt="Figure 162: Button for Changing How Data is Manually Entered for Actual Consumption" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 162: Button for Changing How Data is Manually Entered for Actual Consumption</p>
        </div>

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image245.png').default} alt="Figure 163: Pop-up for Choosing How Data is Entered" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 163: Pop-up for Choosing How Data is Entered</p>
        </div>

5. Une fois qu'un utilisateur saisit des données dans la ligne « Consommation réelle » du tableau de données du bas, cliquez sur « Soumettre » afin d'enregistrer les entrées et de les visualiser dans le graphique.

   un. Les utilisateurs peuvent également copier et coller des données à partir d'un Excel ou d'autres formats tabulaires dans la ligne « Consommation réelle ».

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image246.png').default} alt="Figure 164: Graphical Display of Manually Entered Actual Consumption Data" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 164: Graphical Display of Manually Entered Actual Consumption Data</p>
        </div>

###A2. Ajustements

**Objectif :** Permettre aux utilisateurs de préparer des données historiques de consommation avant de passer à l'écran « Extrapolation ». La consommation réelle historique peut être des quantités vendues, des quantités distribuées à l'utilisateur ou des quantités émises par les installations de stockage. Sur cet écran, les utilisateurs peuvent ajuster les données de consommation historiques qui ont été soit saisies manuellement sur cet écran, soit qui ont été importées à partir d'un programme de plan d'approvisionnement QAT (si vous souhaitez importer, veuillez d'abord passer à l'écran « Importer à partir du plan d'approvisionnement QAT »).

**À l'aide de cet écran :**
1. Il existe trois façons d'ajuster les données :

   une. **Ajuster en cas de sous-déclaration :** La valeur par défaut est de 100 % de déclaration chaque mois. L'utilisateur peut modifier cette valeur pour la valeur correcte. QAT calculera la consommation ajustée en raison de la sous-déclaration. Le calcul suppose que les établissements qui n’ont déclaré aucune consommation avaient le même taux de consommation que ceux qui l’ont déclaré.

   b. **Ajuster pour les ruptures de stock :** Pour les données importées, le nombre de jours de rupture de stock est extrait du programme de plan d'approvisionnement QAT, si les données sont collectées. La valeur par défaut pour les jours de rupture de stock est zéro jour (produit supposé toujours en stock). L'utilisateur peut modifier cette valeur et QAT calculera la consommation ajustée en raison des ruptures de stock. Le calcul suppose que les jours où le produit était en rupture de stock auraient eu le même taux de consommation que le reste du temps où le produit était en stock. La valeur par défaut du nombre de jours dans un mois est basée sur les jours calendaires, mais les utilisateurs peuvent ajuster le nombre de jours utilisés pour le calcul des ruptures de stock dans « Mettre à jour les paramètres de la version ».

      **_Taux de rupture de stock = Rupture de stock (jours)/ (nombre de jours dans le mois)._**<br />
      **_Consommation ajustée = Consommation réelle / Taux de rapport / (1 - Taux de cumul)_**

Par exemple, pour un mois donné, un produit avait une consommation de 1 000 unités, était en rupture de stock 5 jours sur 31 dans le mois et le taux de signalement était de 98 % :

      **_Taux de rupture de stock = 5 jours de rupture de stock / 31 jours par mois = 16,1 % :_**<br />
      ** _Consommation ajustée = 1 000 unités / Rapport de 98 % / (1 - 16,1 %) = 1 217 unités._**

   c. **Ajuster les valeurs manquantes :** Cliquez sur le bouton vert « Interpoler » au milieu à droite de l'écran pour rechercher les périodes où la valeur de consommation est vide et les remplacer par une valeur interpolée. QAT interpole en trouvant les valeurs les plus proches de chaque côté (avant ou après le blanc), calcule la ligne droite entre elles et utilise cette formule de ligne droite pour calculer la valeur du ou des blancs. Notez que QAT n’interpolera pas les mois où la consommation réelle est nulle. QAT n'interpolera que s'il y a au moins un point de données avant et un point de données après la ou les valeurs vides. Mathématiquement :

      - Où x représente les mois et y représente la consommation réelle,

      - Où les valeurs de données connues sont (x0, y0) et (x1, y1)

      - Où les valeurs de données inconnues sont (x, y)

      - La formule de la ligne interpolée est :

  <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image247.png').default} alt="Figure 162: Formula for Interpolation" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 162: Formula for Interpolation</p>

     <img src={require('@site/static/img/media/image248.png').default} alt="Figure 162: Formula for Interpolation" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 162: Formula for Interpolation</p>
     
     </div>

2. Utilisez le tableau des données détaillées pour consulter la consommation ajustée
3. Cliquez sur « Soumettre » pour enregistrer toutes les données saisies/ajustées. Une fois les ajustements enregistrés, le graphique sera mis à jour (notez qu'il est nécessaire de cliquer sur Soumettre pour que cela se produise)
4. Répétez les étapes 1 à 3 pour chaque unité de planification qui doit être ajustée.

###A3. Extrapolation

**Objectif :** Permettre aux utilisateurs de créer une prévision en identifiant les tendances et les saisons à partir des données de séries chronologiques historiques saisies par l'utilisateur dans l'écran « Saisie et ajustement des données ». Plusieurs options d'extrapolation statistique sont disponibles et seront décrites ci-dessous. Les extrapolations à partir des données de consommation sont effectuées unité de planification par unité de planification.

**À l'aide de cet écran :**

**1) Commencer l'extrapolation :**

   - Avant d'utiliser cet écran, assurez-vous d'avoir rempli l'écran « Saisie et ajustement des données » pour chaque unité de planification et région que vous souhaitez extrapoler.

   - Utilisez les filtres en haut de cet écran pour sélectionner l'unité de planification, la région à extrapoler et la plage de dates pour les données historiques à utiliser.

   - L'utilisateur peut sélectionner une ou plusieurs des méthodes d'extrapolation disponibles dans QAT, en fonction du modèle général de consommation et des données disponibles, comme cela sera discuté ci-dessous. Voir les sections 2 à 4 ci-dessous pour une explication des méthodes d'extrapolation et pour savoir comment choisir au mieux les méthodes pour votre prévision.

   - Notez que les modifications dans cet écran sont facultatives – QAT applique automatiquement les paramètres d'extrapolation par défaut à toutes les unités de planification une fois l'écran Ajustements terminé. L'utilisateur effectue ensuite la sélection finale des prévisions dans l'écran [Comparer et sélectionner] (12-forecasting-module-reports-and-outputs.md#9a-compare-and-select).

**2) Méthodes d'extrapolation disponibles dans QAT**

   Les méthodes de prévision dans QAT sont organisées du simple au sophistiqué.

   un. **Moyenne mobile :** La moyenne mobile est une moyenne qui évolue dans le temps, supprimant les données plus anciennes à mesure qu'elles intègrent des données plus récentes. Pour que QAT calcule la moyenne mobile, entrez le nombre de mois passés que vous souhaitez utiliser dans le calcul de la moyenne. L'utilisateur peut sélectionner n'importe quel entier positif pour ce champ. Saisir 5 par exemple signifierait que la projection pour le mois suivant de la série serait la moyenne de la consommation des cinq mois précédents. Cette méthode est particulièrement utile pour les prévisions à court terme et est sensible aux tendances. Ce n'est pas approprié pour les données saisonnières

b. **Semi-moyennes :** Les tendances semi-moyennes sont estimées sur la base de deux moitiés d'une série. QAT divise les données réelles en deux parties égales (moitiés) et la moyenne arithmétique des valeurs de chaque partie (moitié) est calculée comme les valeurs « y » de deux points sur une ligne. La pente de la ligne de tendance est déterminée par la différence entre ces valeurs « y » au fil du temps, définie par la différence des points médians des deux moitiés de la série, ou valeurs « x », des points. Cette méthode est sensible aux tendances et utile pour les prévisions à court et moyen terme mais n'est pas appropriée pour les données saisonnières.

   c. **Régression linéaire :** La régression linéaire modélise la relation entre deux variables en ajustant une équation linéaire aux données observées. Intervalle de confiance : entre 0 % et 100 % (exclusif), par exemple, un niveau de confiance de 90 % indique que 90 % des points futurs possibles doivent se situer dans ce rayon de la prédiction représentée par la ligne de régression. Cette méthode n'est pas appropriée pour les données saisonnières.

   d. **Triple lissage exponentiel (Holt-Winters) :** Dans les statistiques, différents types de lissage sont utilisés pour filtrer le bruit afin que nous puissions voir plus clairement les modèles dans un ensemble de données de séries chronologiques. Le lissage exponentiel utilise des données plus anciennes avec des poids décroissants de façon exponentielle au fil du temps. Les paramètres de lissage exponentiel sont définis entre 0 et 1, les valeurs proches de 1 favorisant les valeurs récentes et les valeurs proches de 0 favorisant les valeurs plus anciennes. Les utilisateurs utilisant le triple lissage exponentiel peuvent choisir quatre paramètres :

      - alpha, s'applique au niveau ou à la ligne de base de l'ensemble de données. Des valeurs alpha plus élevées donnent plus de poids aux données les plus récentes. Le paramètre par défaut de QAT pour alpha est 0,2

      - bêta, détermine dans quelle mesure les tendances récentes doivent être valorisées par rapport aux tendances plus anciennes. Le paramètre par défaut de QAT pour la version bêta est 0,2.

      - gamma, reflète la composante saisonnière de la prévision. Saisonnier fait généralement référence à des modèles répétitifs au cours d’une année. Plus le gamma est élevé, plus la composante saisonnière la plus récente des données sera pondérée. Le paramètre par défaut de QAT pour le gamma est 0,2.

      - Intervalle de confiance : entre 0% et 100% (exclusif) par ex. Un niveau de confiance de 90 % indique que 90 % des points futurs doivent se situer dans ce rayon de prévision. L'intervalle de confiance par défaut de QAT est de 85 %.

      QAT ne calculera les prévisions TES que pour les ensembles de données contenant 24 mois ou plus de données.

   e. **ARIMA :** ARIMA ou moyenne mobile intégrée autorégressive permet d'intégrer et d'appliquer deux modèles statistiques conçus pour les séries chronologiques stationnaires à des séries chronologiques non stationnaires, c'est-à-dire des séries chronologiques qui ont des tendances ou des saisons. Il est souvent appliqué aux prévisions à court terme. « Auto-régressif » signifie que chaque point de la régression est influencé par ses valeurs précédentes et « moyenne mobile » implique que chaque point est une moyenne, une combinaison linéaire d'un ou plusieurs points adjacents. L'auto-régression et la moyenne mobile sont "intégrées" ensemble pour obtenir le meilleur modèle pour la série par différenciation, ou en utilisant littéralement la différence entre les points d'une série chronologique pour l'analyse au lieu des valeurs brutes. Les modèles ARIMA ont trois paramètres :

      - p ou AR (lag order) : le nombre d'observations de retard dans le modèle. Le paramètre par défaut QAT pour p est 0.

      - d ou I (degré de différenciation) : le nombre de fois que les observations brutes sont différenciées. Cette valeur est normalement 1 (s'il y a une tendance) ou 0 (pas de tendance). D'autres valeurs plus élevées sont possibles mais non attendues. Le paramètre QAT par défaut pour d est 1.

      - q ou MA (ordre de la moyenne mobile) : la taille de la fenêtre de moyenne mobile ou le nombre d'observations différenciées à moyenner. Le paramètre QAT par défaut pour q est 1.

      - Intervalle de confiance : entre 0% et 100% (exclusif) par ex. Un niveau de confiance de 90 % indique que 90 % des points futurs doivent se situer dans ce rayon de prévision. L'intervalle de confiance par défaut de QAT est de 85 %.

Le calcul ARIMA peut être saisonnier ou non saisonnier, en fonction du choix de l’utilisateur et de sa compréhension de ses données et de ses attentes quant à savoir si la consommation d’un produit particulier est soumise ou non à des influences saisonnières. La sélection par défaut de QAT concerne l'ARIMA saisonnier. QAT ne calculera les prévisions ARIMA que pour les ensembles de données contenant 13 mois ou plus de données.

**3) Quelle méthode d'extrapolation dois-je utiliser ?**

   Vous trouverez ci-dessous quelques considérations pour sélectionner une méthode de prévision. Les méthodes de prévision dans QAT sont organisées du simple au sophistiqué. En général,

   - Les modèles plus sophistiqués sont plus sensibles aux problèmes de données
   - Si vous disposez de données de moindre qualité (points de données manquants, taux de reporting variables, &lt; 12 mois de données), des méthodes de prévision plus simples telles que les moyennes mobiles sont probablement plus utiles.

   Le choix de la méthode d'extrapolation dépend de la tendance attendue dans les données. Certains modèles typiques incluent :

   - Stationnaire, où la plage des valeurs observées au fil du temps oscille autour d'une moyenne. Les modèles appliqués à ces ensembles de données peuvent inclure :

     - Moyenne mobile
     - ARIMA (non saisonnier)

   - Tendance sans composante saisonnière, où les valeurs observées ont une tendance à la hausse ou à la baisse. Les modèles appliqués à ces ensembles de données peuvent inclure :

     - Demi-moyennes
     - Régression linéaire

   - Tendance et saisonnier, où les valeurs observées dans un ensemble de données comportent à la fois des composantes de tendance et des composantes saisonnières. Les modèles appliqués à ces ensembles de données peuvent inclure :

     - ARIMA (saisonnier)
     - Triple lissage exponentiel (Holt-Winters)

   - Saisonnier sans tendance, où les valeurs observées ont une composante saisonnière mais pas de tendance. Les modèles appliqués à ces ensembles de données peuvent inclure :

     - Triple lissage exponentiel (Holt-Winters)

   Les modèles proposés ici ne sont ni exhaustifs ni exclusifs. QAT permet à l'utilisateur d'appliquer diverses méthodes d'extrapolation, puis de les comparer à l'aide des mesures de meilleur ajustement ou d'erreur de prévision.
   La deuxième étape consiste à déterminer si les valeurs prévisionnelles sont censées refléter fidèlement les modèles historiques de vos données et donc si vous utiliserez les mesures d'erreur pour éclairer votre sélection. Lors du choix d'un résultat (que ce soit en ignorant ou non la mesure d'erreur), il sera important de documenter les raisons pour lesquelles vous le faites afin d'éclairer les discussions ou les examens de vos prévisions et d'aider les futurs prévisionnistes à étayer leurs décisions.

**4) Comment interpréter les erreurs ? <sup>1</sup>**

   QAT calcule automatiquement les mesures d'erreur de prévision à l'aide de plusieurs méthodes. Ceux-ci incluent :

   - **MAPE (Mean Absolute Percentage Error) :** peut être interprété comme la différence en pourcentage moyenne entre les prédictions et leurs cibles prévues dans l'ensemble de données. Par exemple, si MAPE est de 15 %, vos prévisions sont en moyenne éloignées de 15 % des valeurs réelles.

     - MAPE = [(1/Nombre d'observations) * ∑ (|(réel – prévision)|/réel)] x 100

   - **WAPE (Weighted Absolute Percentage Error) :** WAPE est une métrique appropriée lorsque l'ensemble de données utilisé a des valeurs faibles ou intermittentes. Un pourcentage WAPE de 5 signifie que la prévision était erronée de 5 % sur l'ensemble des données pour une certaine période d'évaluation. Selon le cas d'utilisation, il est recommandé de choisir un modèle qui donne le moins de valeur WAPE.

     - WAPE = [ (∑n | (réel – prévision) | / ∑ n (réel)] x 100

   - **RMSE (Root Mean Squared Error) :** Le RMSE peut être interprété comme l'erreur moyenne des prédictions du modèle par rapport à la réalité, avec un poids supplémentaire ajouté aux erreurs de prédiction plus importantes. Généralement, plus le RMSE est proche de zéro, plus le modèle est précis.

     - RMSE = sqrt [∑n (réel – prévision)2] / Nombre d'observations

   - **MSE (Mean Squared Error) :** MSE est la moyenne agrégée de la différence quadratique entre les valeurs réelles et les prévisions. Les erreurs importantes sont mises en évidence à cause de cette quadrature. MSE est utile lorsque vous travaillez sur des modèles où les erreurs occasionnelles importantes doivent être minimisées. Généralement, plus il est proche de 0, plus le modèle est précis.

- MSE = ∑ n [(réel – prévision)2] / Nombre d'observations)

   - **R2 (la corrélation au carré entre la variable dépendante et les valeurs ajustées) :** R2 = 1 – [somme des carrés de régression (SSR) / somme totale des carrés (SST)], où la somme au carré des résidus de la régression (SSR) est la somme de ses résidus au carré, et la somme totale des carrés (SST) est la somme de la distance entre les données et la moyenne, le tout au carré. La valeur R2 est toujours un nombre compris entre 0 et 1. R2 mesure l'ajustement d'une droite de régression à une série d'observations historiques avec des valeurs plus proches de 1, indiquant une correspondance plus forte entre les valeurs réelles et prédites (modèle de régression). Il ne s’agit pas d’une mesure d’erreur et ne doit pas être utilisée seule pour évaluer la pertinence d’une prédiction, mais en combinaison avec d’autres mesures d’erreur et avec la connaissance du programme par l’utilisateur.

     - R2 = 1 – [régression somme carrée (SSR) / somme totale des carrés (SST)]

   Hormis R2, plus le score est faible, plus le résultat de la méthode de prévision correspond aux données historiques. Dans les modèles où les modèles historiques d'un ensemble de données devraient se refléter dans les valeurs futures, une faible valeur d'erreur pourrait être utilisée pour aider à sélectionner une méthode d'extrapolation préférée, et QAT mettra en évidence ces meilleurs ajustements dans un tableau. Toutefois, si des changements substantiels qui ne correspondent pas aux données historiques sont anticipés, l’extrapolation la mieux adaptée n’est peut-être pas la prévision la plus appropriée à sélectionner. 
   
   Pour faire la meilleure sélection entre les méthodes d'extrapolation en fonction de votre objectif, avant d'examiner les mesures d'erreur, la chose la plus importante est d'abord de comprendre quelle méthode d'extrapolation est la plus appropriée pour le modèle attendu dans les données.

<hr />
<p style={{ fontSize: '0.85em' }}><sup>1</sup> <a href="https://stephenallwright.com/mse-vs-mae/" target="_blank">https://stephenallwright.com/mse-vs-mae/</a>; <a href="https://www.obviously.ai/post/introducing-wape" target="_blank">https://www.obviously.ai/post/introducing-wape</a></p>

**5) Optimisation des paramètres de prévision TES et ARIMA**

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image249.png').default} alt="Figure 165: Optimize TES & ARIMA Link" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 165: Optimize TES & ARIMA Link</p>
  </div>

Comme décrit dans [Extrapolation](#extrapolation), QAT offre aux utilisateurs plusieurs options d'extrapolation, notamment TES et ARIMA saisonnier et non saisonnier. Les utilisateurs sont libres d'utiliser les valeurs par défaut de QAT ou de saisir des paramètres de prévision alternatifs dans le but de réduire les mesures d'erreur, augmentant ainsi la correspondance entre les sorties de la méthode de prévision et les points de données réels dans la période de données historiques. Si l'utilisateur travaille en ligne, QAT peut optimiser les paramètres TES et ARIMA en itérant, en calculant le RMSE de chaque itération et en sélectionnant les paramètres qui produisent le RMSE le plus bas.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image250.png').default} alt="Figure 166: Optimizing TES & ARIMA Pop-up" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 166: Optimizing TES & ARIMA Pop-up</p>
  </div>

Pour TES, QAT calcule 125 itérations de la prévision, testant chacun des paramètres alpha, bêta et gamma en combinaison avec les valeurs suivantes : 0, 0,2, 0,4, 0,8 et 1. Laquelle des 125 combinaisons pour un produit donné produit le résultat avec le RMSE le plus bas sera affichée sur l'écran d'extrapolation.

Pour ARIMA ou ARIMA saisonnier, QAT calcule 24 itérations de la prévision, testant chacun des paramètres p, d et q en combinaison, en utilisant les valeurs suivantes :

- p : 0 ou 1
- d : 0, 1 ou 2
- q : 0, 1, 2 ou 3

Laquelle des 24 combinaisons pour un produit donné produit le résultat ARIMA avec le RMSE le plus bas sera affichée sur l'écran d'extrapolation.

**Remarque :** **Les statistiques ne sont pas magiques. L’hypothèse sous-jacente à toutes ces méthodes d’extrapolation est que les tendances et les modèles des données historiques se poursuivront dans le futur. Par conséquent, des mesures à faible erreur ne garantissent pas nécessairement une meilleure prévision.**

**6) Extrapolation globale**

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image251.png').default} alt="Figure 167: Bulk Extrapolation Link" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 167: Bulk Extrapolation Link</p>
  </div>

Dans l'écran d'extrapolation QAT, l'utilisateur peut comparer les résultats des différentes méthodes d'extrapolation à la fois graphiquement et dans un tableau de résultats, produit par produit. Cela permet à l'utilisateur de désélectionner les méthodes d'extrapolation qui, selon lui, ne s'appliquent pas à un produit donné afin de limiter les options de l'écran [Comparer et sélectionner] (12-forecasting-module-reports-and-outputs.md#9a-compare-and-select) à celles que l'utilisateur choisit d'afficher.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image252.png').default} alt="Figure 168: Bulk Extrapolation Pop-up" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 168: Bulk Extrapolation Pop-up</p>
  </div>

Si l'utilisateur préfère envoyer tous les résultats des méthodes d'extrapolation disponibles pour plusieurs produits directement à l'écran Comparer et sélectionner, l'utilisateur peut sélectionner l'extrapolation groupée. Dans la fenêtre contextuelle Extrapolation globale, l'utilisateur peut ensuite sélectionner une plage de dates historiques à partir de laquelle extrapoler la prévision (une seule plage de dates par extrapolation globale), s'il souhaite appliquer la saisonnalité à son calcul ARIMA, quelles unités de planification et régions (si des données régionales sont utilisées) inclure dans l'extrapolation globale et s'il doit ou non optimiser les paramètres ARIMA et TES pour l'extrapolation.

Après avoir exécuté l'extrapolation globale, tous les résultats peuvent être visualisés dans l'écran d'extrapolation, l'écran de comparaison et de sélection et la boîte déroulante de l'écran de résumé des prévisions (régional). L'utilisateur peut sélectionner sa méthode d'extrapolation préférée à partir de l'écran de comparaison et de sélection ou de l'écran de résumé des prévisions (régional).

L'extrapolation globale dans QAT est particulièrement utile lorsque l'on travaille avec un large éventail de produits pour lesquels des données de consommation actuelles, complètes et précises sont disponibles pour 12 mois ou plus.

## B. Prévisions d'arbres

Les utilisateurs peuvent effectuer une prévision basée sur une arborescence si les données nécessaires à une prévision basée sur la consommation ne sont pas disponibles ou ne sont pas utiles pour prédire la consommation future. Les prévisions arborescentes s'adaptent de manière flexible à toutes les autres méthodes de prévision, telles que les méthodes de morbidité, de services et démographiques. Les utilisateurs peuvent spécifier les changements au fil du temps dans une arborescence, soit en spécifiant directement le taux de changement, soit en extrapolant à partir de données passées.

###B1. Construire un arbre

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image253.png').default} alt="Figure 169: Manage Tree – Tree List (Right click to access actions)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 169: Manage Tree – Tree List (Right click to access actions)</p>
  </div>

**Objectif :** Permettre aux utilisateurs de :
1. Afficher une liste de leurs arbres existants
2. Modifiez un arbre existant en cliquant sur n'importe quelle ligne
3. Faites un clic droit sur une ligne pour
   - **Dupliquer les arbres existants :** Les utilisateurs peuvent également dupliquer un arbre existant dans un autre programme. Les utilisateurs doivent avoir accès aux deux programmes et les avoir tous deux téléchargés sur leur ordinateur local pour pouvoir les dupliquer.
   - **Supprimer les arbres existants :** Il y aura un écran de confirmation, mais cette action est ensuite irréversible. Cependant, si vous supprimez accidentellement une arborescence, vous pouvez retélécharger un programme si l'arborescence supprimée a été sauvegardée sur le serveur.
   - **Tree Table :** Cela permet à l'utilisateur de modifier l'arborescence sélectionnée dans l'écran [Tree Table](#tree-table)
4. Ajoutez une nouvelle arborescence à un programme téléchargé en cliquant sur le menu déroulant « Créer ou sélectionner » dans le coin supérieur droit de l'écran. De nouveaux arbres peuvent être construits :
   - manuellement - sélectionnez '+ Dessinez votre propre arbre'
   - à partir d'un modèle d'arborescence - sélectionnez le nom du modèle souhaité. Si un utilisateur souhaite voir un modèle d'arborescence ajouté à QAT qui n'existe pas et que cela bénéficierait à la communauté QAT, il peut soumettre une demande de modification au [Système d'assistance de ticketing QAT] (05-getting-started.md#qat-helpdesk-and-tickets).

*Remarque : [Forecast Viewers](15-annex-3-user-role-matrix.md) peuvent afficher n'importe quelle arborescence qui a été téléchargée sur le serveur et à laquelle ils ont accès ; cependant, seuls les utilisateurs/administrateurs de prévisions pourront créer et modifier/mettre à jour des arborescences.*

Actions du nœud :
- <img src={require('@site/static/img/media/image254.png').default} alt="Delete" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Supprimer :** Supprime le nœud sélectionné et tous ses enfants.
- <img src={require('@site/static/img/media/image255.png').default} alt="Copy/Move" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Copier/Déplacer :** Copie ou déplace le nœud sélectionné et tous les enfants sous le nœud. L'utilisateur peut sélectionner la destination.
- <img src={require('@site/static/img/media/image256.png').default} alt="Add Branch Template" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Ajouter un modèle de branche :** Ajoute un modèle d'arborescence en tant que branche sous le nœud choisi.
- <img src={require('@site/static/img/media/image257.png').default} alt="Add" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Ajouter :** Ajoute un enfant au nœud sélectionné.
- <img src={require('@site/static/img/media/image258.png').default} alt="Collapse/Expand" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Réduire/Agrandir :** Réduire/Agrandir le nœud actuel et tous ses enfants. Les utilisateurs peuvent également survoler le point pour choisir le nœud à développer et cliquer une fois pour développer ce nœud et tous ses enfants. De plus, il y a une case à cocher « Réduire l'arbre » en haut de l'écran Construire des arbres qui réduira chaque nœud à l'exception du nœud supérieur.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image260.png').default} alt="Figure 170: Example of a Collapsed Forecasting Tree" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 170: Example of a Collapsed Forecasting Tree</p>
  </div>

Types de nœuds :

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Node Type</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Value</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Potential Children</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Advanced Functionality</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aggregation ∑</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sum of children nodes.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>∑ or Number</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Number #</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Defined at this node</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>% or <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} />, <img src={require('@site/static/img/media/image264.png').default} alt="Extrapolation" style={{ width: '16px', verticalAlign: 'middle' }} />, <img src={require('@site/static/img/media/image270.png').default} alt="Seasonality" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Percentage %</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Percentage of the parent.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>% or <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Funnel <img src={require('@site/static/img/media/image266.png').default} alt="Funnel" style={{ width: '16px', verticalAlign: 'middle' }} /></strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sum of linked source nodes (<img src={require('@site/static/img/media/image262.png').default} alt="Link" style={{ width: '16px', verticalAlign: 'middle' }} />)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>% or <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Forecasting Unit <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Percentage of the parent and forecasting unit parameters. Can be two different use types:
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', margin: '4px 0' }}>
          <li><img src={require('@site/static/img/media/image268.png').default} alt="Continuous" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /><strong>Continuous</strong></li>
          <li><img src={require('@site/static/img/media/image269.png').default} alt="Discrete" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /><strong>Discrete</strong></li>
        </ul>
      </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><img src={require('@site/static/img/media/image261.png').default} alt="PU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Planning Unit <img src={require('@site/static/img/media/image261.png').default} alt="PU" style={{ width: '16px', verticalAlign: 'middle' }} /></strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Percentage of the parent and planning unit parameters.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
  </tbody>
</table>

Attributs du nœud :
- **∑ Attributs spécifiques au nœud d'agrégation :** aucun – il est défini par la somme de ses enfants. Par exemple, s'il y a deux nœuds enfants sous le nœud Agrégation égaux à 50 et 100, QAT ajoutera automatiquement ces nombres pour définir le nœud Agrégation : 50 (enfant) + 100 (enfant) = 150 (parent d'agrégation).
- **# Attributs spécifiques au nœud :**
  - **Unité de nœud :** liste déroulante composée d'un patient, d'un client, d'un client, d'une personne ou d'une unité
  - **Mois :** choisissez le mois/l'année à partir duquel ces données ont été rapportées. Par exemple, si un utilisateur souhaite définir un nœud numérique comme Country Population et que les données datent de janvier 2020, le mois du nœud doit être janvier 2020.
  - **Valeur du nœud :** Définissez la valeur numérique de ce nœud. Par exemple, si la population du pays en janvier 2020 est de 500 000 habitants, la valeur du nœud doit être de 500 000. Si cette valeur change au fil du temps, les utilisateurs peuvent utiliser l'onglet [Modélisation/Transfert](#d-modelingtransfers) pour spécifier la modification.
- **% Pourcentage d'attributs spécifiques au nœud :**
  - **Unité de nœud :** liste déroulante composée d'un patient, d'un client, d'un client, d'une personne ou d'une unité
  - **Mois :** choisissez le mois/l'année à partir duquel ces données ont été rapportées. En règle générale, il s'agira du mois/de l'année de début de la prévision.
  - **Pourcentage du parent :** définit le pourcentage du nœud parent. Par exemple, si la moitié du nœud numérique parent, Population du pays, est composée de femmes, le pourcentage de parent serait de 50 %.
  - **Valeur parentale pour le mois :** non modifiable et fournie uniquement à titre de référence.
  - **Valeur du nœud :** calculée automatiquement par QAT en fonction du pourcentage défini par l'utilisateur et de la valeur parent. Ce champ n'est pas modifiable.
- <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '18px', verticalAlign: 'middle', marginRight: '4px' }} /> **Attributs spécifiques au nœud de l'unité de prévision :**
  - **Mois :** choisissez le mois/l'année à partir duquel ces données ont été rapportées. En règle générale, il s'agira du mois/de l'année de début de la prévision.
  - **Pourcentage du parent :** définit le pourcentage du nœud parent.
  - **Valeur parentale pour le mois :** non modifiable et fournie uniquement à titre de référence.
  - **Pourcentage de la valeur parentale pour le mois :** non modifiable et fourni uniquement à titre de référence.
  - **Catégorie de traceur :** liste déroulante qui peut être utilisée pour aider à affiner les unités de prévision, mais sera remplie automatiquement une fois l'unité de prévision choisie.
  - **Copier à partir du modèle :** fonctionnalité avancée, dans laquelle un utilisateur peut utiliser un [Modèle d'utilisation](#c-usage-templates) pour aider à créer efficacement une arborescence. Cette liste déroulante n'est pas obligatoire.
  - **Unité de prévision :** liste déroulante de toutes les unités de prévision disponibles dans le programme utilisateur. Si une unité de prévision n'est pas disponible dans la liste déroulante, l'utilisateur doit d'abord l'ajouter à l'écran [Mettre à jour les unités de planification] (10-forecasting-module-program-data.md#d-planning-units).
  - **Unité de planification :** liste déroulante filtrée en fonction de l'unité de prévision choisie. S'il n'y a qu'une seule unité de planification associée à l'unité de prévision, ce champ sera automatiquement pré-rempli.
  - **Type d'utilisation :**
    - <img src={require('@site/static/img/media/image269.png').default} alt="Discrete" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Discret :** Chaque _______ [unité de nœud parent] nécessite _________ [unité de mesure de prévision] __________ fois par [jour/semaine/mois/année] pendant _____________ [jour/semaine/mois/année]
      - **Calculer (Tout au cours du premier mois/mois par mois) :** Si vous avez sélectionné « Tout au cours du premier mois », QAT sera

anticipez la quantité totale prévue au mois de début du nœud. Si vous sélectionnez « Mois par mois », QAT calculera la quantité discrètement mois par mois (voir [Techniques avancées](#f-advanced-techniques) pour plus d'informations).
      - **Utilisation unique (Oui/Non) :** permet à l'utilisateur de déterminer si cette unité de prévision est utilisée sur une période de temps spécifique. Si « oui » est sélectionné, la durée des calculs discrets n'est pas nécessaire.
    - <img src={require('@site/static/img/media/image268.png').default} alt="Continuous" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Continu :** Chaque _______ [unité de nœud parent] nécessite _________ [unité de mesure de prévision] tous les _______ [jour/semaine/mois/année]
  - **Décalage en mois :** utilisé pour détailler si une unité de prévision est en retard ou a une utilisation progressive du produit. Voir [Techniques avancées](#f-advanced-techniques) pour plus d'informations.
- <img src={require('@site/static/img/media/image261.png').default} alt="PU" style={{ width: '18px', verticalAlign: 'middle', marginRight: '4px' }} /> **Attributs spécifiques au nœud de l'unité de planification :** nœud créé automatiquement lorsque l'unité de prévision est ajoutée à une arborescence. La plupart des attributs de l'écran d'ajout/modification de nœuds ne sont pas modifiables et servent uniquement de référence ; cependant, quelques-uns peuvent être mis à jour en fonction de circonstances spécifiques :
  - **Mois :** choisissez le mois/l'année à partir duquel ces données ont été rapportées. En règle générale, il s'agira du mois/de l'année de début de la prévision.
  - **Remplacement du calcul :** les utilisateurs peuvent choisir d'utiliser le calcul automatique de QAT pour le nombre d'unités de planification en cliquant sur « Oui » ou de saisir manuellement une valeur en cliquant sur « Non ». Voir [Techniques avancées](#f-advanced-techniques) pour plus d'informations.

**À l'aide de cet écran :**
- Un programme de prévision doit d'abord être téléchargé pour construire ou éditer un arbre
- Avant de construire et d'éditer une arborescence, ajoutez d'abord les unités de planification du programme de prévision dans l'écran « Mettre à jour les unités de planification ».
- **Construire un arbre similaire à un arbre existant ?**
  - Même structure, numéros différents : Construisez un seul arbre et utilisez la fonctionnalité [scenario](#c-scenarios).
  - Structure légèrement différente : Dupliquez un arbre existant en cliquant avec le bouton droit sur une ligne et en sélectionnant "Dupliquer l'arbre". Remarque : Si vous souhaitez dupliquer une arborescence existante à partir d'un autre programme, vous devez avoir téléchargé les deux programmes, puis vous pouvez dupliquer d'un programme à un autre.
- **Vous souhaitez plutôt commencer à partir d'un modèle ?** Voir la section [Modèle d'arbre](#a-tree-templates)
- Les utilisateurs peuvent également supprimer des arbres en cliquant avec le bouton droit sur une ligne et en sélectionnant « Supprimer l'arbre ».

### un. Types de nœuds et fonctions

Construire l'arbre : L'arbre de prévision est construit de haut en bas, en utilisant différents types de « nœuds ». Voir les types de nœuds et les actions de nœud ci-dessous. Chaque arbre de prévision doit commencer par un nœud Agrégation ou un nœud Numéro, et inclure un ou plusieurs nœuds Unité de planification, qui forment la sortie de prévision.

  - *Pourcentage du parent :* définit le pourcentage du nœud parent.

  - *Valeur parentale pour le mois :* non modifiable et fournie uniquement à titre de référence.

  - *Pourcentage de la valeur parentale pour le mois :* non modifiable et fourni uniquement à titre de référence.

  - *Catégorie de traceur :* liste déroulante qui peut être utilisée pour aider à affiner les unités de prévision, mais sera remplie automatiquement une fois l'unité de prévision choisie.

  - *Copier à partir d'un modèle :* fonctionnalité avancée, dans laquelle un utilisateur peut utiliser un modèle d'utilisation pour aider à créer efficacement une arborescence. Cette liste déroulante n'est pas obligatoire.

  - *Unité de prévision :* liste déroulante de toutes les unités de prévision disponibles dans le programme utilisateur. Si une unité de prévision n'est pas disponible dans la liste déroulante, l'utilisateur doit d'abord l'ajouter à l'écran « Mettre à jour l'unité de planification ».

  - *Unité de planification :* liste déroulante filtrée en fonction de l'unité de prévision choisie. S'il n'y a qu'une seule unité de planification associée à l'unité de prévision, ce champ sera automatiquement pré-rempli.

  - *Type d'utilisation :*

    - **Discret :** Chaque _______ [unité de nœud parent] nécessite _________ [unité de mesure de prévision] __________ fois par [jour/semaine/mois/année] pendant _____________ [jour/semaine/mois/année]

      - *Calculer (Tout au cours du premier mois/mois par mois) :* Si vous avez sélectionné « Tout au cours du premier mois », QAT préchargera la quantité totale prévue au mois de début du nœud. Si vous sélectionnez « Mois par mois », QAT calculera la quantité discrètement mois par mois (voir Techniques avancées pour plus d'informations).

      - *Usage unique (Oui/Non) :* permet à l'utilisateur de déterminer si cette unité de prévision est utilisée sur une période de temps spécifique. Si « oui » est sélectionné, la durée des calculs discrets n'est pas nécessaire.

    - **Continu :** Chaque _______ [unité de nœud parent] nécessite _________ [unité de mesure de prévision] tous les _______ [jour/semaine/mois/année]

      - *Décalage en mois :* utilisé pour détailler si une unité de prévision est en retard ou a une utilisation progressive du produit. Voir Techniques avancées pour plus d'informations.

- **Attributs spécifiques au nœud de l'unité de planification :** nœud créé automatiquement lorsque l'unité de prévision est ajoutée à une arborescence. La plupart des attributs de l'écran d'ajout/modification de nœuds ne sont pas modifiables et servent uniquement de référence ; cependant, quelques-uns peuvent être mis à jour en fonction de circonstances spécifiques :

  - *Mois :* choisissez le mois/l'année à partir duquel ces données ont été rapportées. En règle générale, il s'agira du mois/de l'année de début de la prévision.

  - *Remplacement du calcul :* les utilisateurs peuvent choisir d'utiliser le calcul automatique de QAT pour le nombre d'unités de planification en cliquant sur « Oui » ou de saisir manuellement une valeur en cliquant sur « Non ». Voir Techniques avancées pour plus d'informations.


  - *Pourcentage du parent :* définit le pourcentage du nœud parent.

  - *Valeur parentale pour le mois :* non modifiable et fournie uniquement à titre de référence.

  - *Pourcentage de la valeur parentale pour le mois :* non modifiable et fourni uniquement à titre de référence.

- *Catégorie de traceur :* liste déroulante qui peut être utilisée pour aider à affiner les unités de prévision, mais sera remplie automatiquement une fois l'unité de prévision choisie.

  - *Copier à partir d'un modèle :* fonctionnalité avancée, dans laquelle un utilisateur peut utiliser un modèle d'utilisation pour aider à créer efficacement une arborescence. Cette liste déroulante n'est pas obligatoire.

  - *Unité de prévision :* liste déroulante de toutes les unités de prévision disponibles dans le programme utilisateur. Si une unité de prévision n'est pas disponible dans la liste déroulante, l'utilisateur doit d'abord l'ajouter à l'écran « Mettre à jour l'unité de planification ».

  - *Unité de planification :* liste déroulante filtrée en fonction de l'unité de prévision choisie. S'il n'y a qu'une seule unité de planification associée à l'unité de prévision, ce champ sera automatiquement pré-rempli.

  - *Type d'utilisation :*

    - **Discret :** Chaque _______ [unité de nœud parent] nécessite _________ [unité de mesure de prévision] __________ fois par [jour/semaine/mois/année] pendant _____________ [jour/semaine/mois/année]

      - *Calculer (Tout au cours du premier mois/mois par mois) :* Si vous avez sélectionné « Tout au cours du premier mois », QAT préchargera la quantité totale prévue au mois de début du nœud. Si vous sélectionnez « Mois par mois », QAT calculera la quantité discrètement mois par mois (voir Techniques avancées pour plus d'informations).

      - *Usage unique (Oui/Non) :* permet à l'utilisateur de déterminer si cette unité de prévision est utilisée sur une période de temps spécifique. Si « oui » est sélectionné, la durée des calculs discrets n'est pas nécessaire.

    - **Continu :** Chaque _______ [unité de nœud parent] nécessite _________ [unité de mesure de prévision] tous les _______ [jour/semaine/mois/année]

      - *Décalage en mois :* utilisé pour détailler si une unité de prévision est en retard ou a une utilisation progressive du produit. Voir Techniques avancées pour plus d'informations.

- **Attributs spécifiques au nœud de l'unité de planification :** nœud créé automatiquement lorsque l'unité de prévision est ajoutée à une arborescence. La plupart des attributs de l'écran d'ajout/modification de nœuds ne sont pas modifiables et servent uniquement de référence ; cependant, quelques-uns peuvent être mis à jour en fonction de circonstances spécifiques :

  - *Mois :* choisissez le mois/l'année à partir duquel ces données ont été rapportées. En règle générale, il s'agira du mois/de l'année de début de la prévision.

  - *Remplacement du calcul :* les utilisateurs peuvent choisir d'utiliser le calcul automatique de QAT pour le nombre d'unités de planification en cliquant sur « Oui » ou de saisir manuellement une valeur en cliquant sur « Non ». Voir Techniques avancées pour plus d'informations.

### Changements au fil du temps

Bien que la structure arborescente reste constante dans le temps, les pourcentages et les valeurs des nœuds peuvent changer au fil du temps. Utilisez le menu déroulant des dates pour afficher l’arborescence à n’importe quel mois. Les trois fonctionnalités ci-dessous sont disponibles dans chaque nœud et permettent à l'utilisateur de contrôler la façon dont les nœuds évoluent au fil du temps :

- **⇅ Modélisation :** Permet à l'utilisateur de spécifier le taux de changement exact
- <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Transfert :** Permet aux utilisateurs de relier deux nœuds ensemble – ainsi la diminution du nœud source est liée à l'augmentation du nœud de destination. Utile pour les transitions.
- <img src={require('@site/static/img/media/image264.png').default} alt="Extrapolation" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Extrapolation :** Permet aux utilisateurs d'utiliser des données historiques pour extrapoler les changements futurs.

Pour plus d'informations et des exemples spécifiques de changements au fil du temps, voir [Modélisation/Transferts](#d-modelingtransfers).

###b. Bases de la construction d’un arbre

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image276.png').default} alt="Figure 171: Simple Forecasting Tree Example" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 171: Simple Forecasting Tree Example</p>
  </div>

Les arbres de prévision sont construits de haut en bas en utilisant différents types de [nœuds](#a-node-types--functions). Chaque arbre de prévision doit commencer par un nœud Agrégation ou un nœud Numéro et inclure un ou plusieurs nœuds Unité de planification. Les nœuds d'unité de planification doivent être l'enfant d'un nœud d'unité de prévision. Ainsi, un utilisateur doit disposer d'au moins trois niveaux de nœuds (nœud Agrégation/Nombre, nœud Unité de prévision et nœud Unité de planification) pour produire une sortie prévisionnelle.

**Étapes pour créer un arbre manuel :**
<ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
  <li style={{ marginBottom: '15px' }}>Download a program</li>
  <li style={{ marginBottom: '15px' }}>Navigate to the Forecasting Tree → Manage Tree screen</li>
  <li style={{ marginBottom: '15px' }}>In the top-right of the screen, click the blue ‘Create or Select’ dropdown and select ‘+ Draw your own tree’ from the dropdown</li>
  <li style={{ marginBottom: '15px' }}>
    Define the tree details, such as the forecasting method (demographic, morbidity, or services), tree name, and region.
    <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
      <li style={{ marginBottom: '10px' }}>Once created, users can edit tree details by clicking on the <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> icon next to the Tree dropdown.</li>
      <li>(optional) By clicking on the <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> icon next to the Scenario dropdown, users can add, edit, and delete tree scenarios. For more information, see <a href="#c-scenarios">Scenarios</a> in the section below.</li>
    </ol>
  </li>
  <li style={{ marginBottom: '15px' }}>By default, QAT will begin with a number node with a value of zero on Level 0. Click on this default node to edit/update the node.</li>
  <li style={{ marginBottom: '15px' }}>
    Ajoutez un nouveau nœud (enfant) sous le nœud parent en cliquant sur <img src={require('@site/static/img/media/image257.png').default} alt="Add" style={{ width: '16px', verticalAlign: 'middle' }} /> et en choisissant le type de nœud approprié. En fonction du parent, QAT filtrera automatiquement les <a href="#a-node-types--functions">types de nœuds enfants</a> disponibles. QAT ajoutera le nouveau nœud sous le même parent et à droite de tous les nœuds existants. Continuez à ajouter des nœuds en fonction des données disponibles jusqu'à terminer avec un nœud Unité de prévision et son nœud Unité de planification associé.
    <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
      <li style={{ marginBottom: '10px' }}>To delete a node, simply click the <img src={require('@site/static/img/media/image254.png').default} alt="delete" style={{ width: '16px', verticalAlign: 'middle' }} /> icon, but note that this will also delete the child nodes under the one being deleted.</li>
      <li style={{ marginBottom: '10px' }}>
        To copy or move a node, click on the <img src={require('@site/static/img/media/image255.png').default} alt="copy/move" style={{ width: '16px', verticalAlign: 'middle' }} /> icon. In the pop-up, review or select where you want the node to be copied or moved to – the tree, the level of the parent, and the parent.
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '10px' }}>
          <li style={{ marginBottom: '5px' }}>For copying, QAT will select the same location as the original node by default</li>
          <li style={{ marginBottom: '5px' }}>For moving, QAT will select the same tree as the original node by default</li>
          <li style={{ marginBottom: '5px' }}>The entire branch (including all child nodes) will be moved/copied.</li>
          <li>Use the checkbox to select if you want to include modeling or not. Note: Transfers are never copied/moved.</li>
        </ul>
      </li>
      <li style={{ marginBottom: '10px' }}>
        As a validation feature, QAT will flag a Planning Unit (PU) node with a red border under two circumstances: 1) if a user has added a Forecasting Unit (FU) and PU, and later changes the FU and mistakenly forgets to also change to the correct corresponding PU, or 2) if a user creates a tree from a tree template which has PUs, but the user does not have those PUs in their program.
        <div style={{ margin: '20px 0' }}>
          <img src={require('@site/static/img/media/image280.png').default} alt="Red Border Nodes" style={{ width: '100%' }} />
        </div>
        To correct this, users can click on the PU node and choose the appropriate PU from the dropdown list.
        <div style={{ margin: '20px 0' }}>
          <img src={require('@site/static/img/media/image281.png').default} alt="PU Dropdown Selection" style={{ width: '100%' }} />
        </div>
      </li>
      <li>Tip: users can “clean-up” their tree by clicking any of the checkboxes available (Hide Planning Unit, Hide Forecasting Unit and Planning Unit, or Hide Tree Validation) at the top of the tree.</li>
    </ol>
  </li>
  <li style={{ marginBottom: '15px' }}>(optional) Users can insert a tree template within the body of their tree by clicking the <img src={require('@site/static/img/media/image256.png').default} alt="branch template" style={{ width: '16px', verticalAlign: 'middle' }} /> icon to add a branch template. This branch will be added below the current node as a child. This improves the efficiency of adding multiple batches of nodes (a branch) that are the same or similar across an existing tree or a new tree by utilizing templates. For more information on branch templates, refer to <a href="#b-branch-templates">Branch Templates</a>.</li>
  <li style={{ marginBottom: '15px' }}>
    (facultatif) Cliquez sur les niveaux de l'arborescence (cases rectangulaires bleu foncé à gauche de l'arborescence) pour :
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '5px' }}>Name the levels of a tree. This will make a tree easier to read and will be used in the dropdowns and axis of the Modeling Validation screen.</li>
      <li>Reorder branches of your tree as desired by using the up and down arrows to indicate the left-to-right position of the branches. If the list is long, use the “see children of” dropdown to filter the nodes.</li>
    </ul>
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image282.png').default} alt="Level Details" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    Les arborescences QAT sont automatiquement enregistrées sur l'ordinateur local (pour enregistrer une arborescence sur le serveur, veuillez consulter [Télécharger la version](06-managing-programs-and-versions.md#c-upload)). Les quantités qui apparaissent dans les nœuds sont également automatiquement calculées à mesure que l'arbre change ; cependant, si QAT est lent lors de la modification de l'arborescence, les utilisateurs peuvent décocher la case « Calcul automatique » pour arrêter les calculs automatiques du backend. Pour voir manuellement les calculs mis à jour après chaque modification, les utilisateurs devront cliquer sur l'icône <img src={require('@site/static/img/media/image283.png').default} alt="calculate" style={{ width: '16px', verticalAlign: 'middle' }} />.
    <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
      <li style={{ marginBottom: '10px' }}>Users can download their trees as PDFs to share with stakeholders by clicking on the <img src={require('@site/static/img/media/image284.png').default} alt="PDF" style={{ width: '16px', verticalAlign: 'middle' }} /> icon.</li>
      <li>Users can download an outline form of their tree to double check the Sum of Children validation, node values, and their nodes by clicking on the <img src={require('@site/static/img/media/image285.png').default} alt="outline" style={{ width: '16px', verticalAlign: 'middle' }} /> icon.</li>
    </ol>
  </li>
  <li style={{ marginBottom: '15px' }}>
    (facultatif) Pour modifier par lots des valeurs dans une arborescence, l'utilisateur peut utiliser l'écran Tree Table, qui est accessible via un lien en haut à gauche de l'écran Gérer l'arbre – Créer des arbres.
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '5px' }}>On the Tree Tables screen,</li>
      <li style={{ marginBottom: '5px' }}>The dropdowns at the top of the screen should be prepopulated with the same program, tree, scenario, and display date as previously selected, but users can update the dropdowns as needed before making edits.</li>
      <li style={{ marginBottom: '5px' }}>Nodes are grouped by node type on different tabs. Navigate to the node(s) you want to edit by using the tabs</li>
      <li style={{ marginBottom: '5px' }}>Made edits to any node values by editing the table cells.</li>
      <li style={{ marginBottom: '5px' }}>See the example and screenshot in Figure 172</li>
      <li style={{ marginBottom: '5px' }}>Note that while the Tree Tables screen is helpful for editing the values of multiple nodes efficiently, the Tree Tables screen does not allow for editing for the tree structure. Please use the Manage Tree – Build Trees screen to add, delete, copy or move nodes.</li>
      <li>Upon returning to the Build Tree screen, users may need to click the <img src={require('@site/static/img/media/image283.png').default} alt="calculate" style={{ width: '16px', verticalAlign: 'middle' }} /> icon to see updated values.</li>
    </ul>
  </li>
</ol>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image286.png').default} alt="Figure 172: Accessing and Using Tree Table Screen" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 172: Accessing and Using Tree Table Screen</p>
  </div>

###c. Scénarios

**Utilisation de scénarios :** Les scénarios sont utilisés pour modéliser différentes valeurs pour le même arbre. Les scénarios sont utiles lorsque les utilisateurs souhaitent analyser les résultats de différents changements au fil du temps (par exemple : objectif national par rapport au statu quo, différents niveaux de saisonnalité, transition des unités de planification à des rythmes différents, etc.), mais souhaitent conserver la même structure de base. Pour créer un arbre avec des structures différentes (par exemple différents régimes, différentes méthodologies), il est recommandé de créer un autre arbre (astuce : utilisez la fonction d'arbre dupliqué !). Pour ajouter, modifier, supprimer ou désactiver un scénario, utilisez l'icône <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> à côté de la liste déroulante des scénarios. Utilisez la liste déroulante des scénarios pour sélectionner le scénario à afficher et à modifier.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Fixed for All Scenarios</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Unique to each Scenario</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tree structure</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Node value</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Node Title</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Month</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Node Type</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Notes</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modeling/Transfer/Extrapolation</td>
    </tr>
  </tbody>
</table>

*Remarques :*
- Par défaut, seuls les scénarios actifs sont affichés. Pour afficher les scénarios inactifs, cliquez sur l'icône <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> à côté de la liste déroulante des scénarios, puis sur « Afficher les scénarios inactifs ».
- Les utilisateurs peuvent choisir différentes combinaisons arbre-scénario pour chaque unité de planification dans l'écran [Comparer et sélectionner] (12-forecasting-module-reports-and-outputs.md#9a-compare-and-select).

### d. Modélisation/Transferts

**Objectif :** Si un nœud change au fil du temps, un utilisateur peut utiliser l'onglet Modélisation/Transfert pour modéliser la croissance/la perte au sein d'un seul nœud ou un transfert d'un nœud à un autre. Notez que cette fonctionnalité n'est disponible que pour les nœuds Nombre (#) et Pourcentage (%) (y compris les unités de prévision et les unités de planification). L'utilisateur peut toujours utiliser l'onglet pour afficher les données mensuelles des nœuds Agrégation et Entonnoir.

**Utilisation de cet onglet :**
Les utilisateurs peuvent saisir manuellement les changements souhaités au fil du temps (croissance/perte/transfert) dans le tableau supérieur, ou ils peuvent utiliser la calculatrice de modélisation pour calculer le taux de changement mensuel (voir la section « Calculatrice de modélisation » ci-dessous pour plus d'informations). Chaque entrée doit être ajoutée sous forme de lignes distinctes par changement dans le tableau supérieur (c'est-à-dire qu'un nœud ne peut pas croître et être transféré dans une seule ligne de saisie de données – il doit s'agir de deux lignes distinctes).

- **Règles pour les nœuds de transfert :**
  - Les nœuds numériques ne peuvent être transférés que vers d'autres nœuds numériques et doivent appartenir au même niveau.
  - Les nœuds de pourcentage ne peuvent être transférés que vers d'autres nœuds de pourcentage et doivent appartenir au même parent.
  - Les transferts sont toujours négatifs depuis le nœud source et positifs vers le nœud destination.
  - L'extrapolation n'est pas autorisée sur un nœud qui dispose également d'un transfert, que ce soit vers/depuis un autre nœud.

**Types de modélisation :**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Modeling Type</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong># Node Calculation</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>% Node Calculation</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a static number each month</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a static percentage each month, calculated based on the starting month</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Exponential (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a percentage each month, calculated on the previous month as a rolling percentage</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (% point)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a static percentage each month (e.g. if the starting month is 30% and the change is +1% each month, next month is 31%, the next is 32%, and so on)</td>
    </tr>
  </tbody>
</table>

**Saisonnalité et modifications manuelles :**

Cliquez sur **« Afficher les données mensuelles »** pour afficher un tableau et un graphique avec la valeur du nœud au fil du temps.

  - Cette fonctionnalité est utile pour voir comment les entrées de modélisation et de transfert affectent les données mensuelles sous forme graphique et tabulaire.
  - Dans les données tabulaires, les utilisateurs peuvent ajouter une modification manuelle pour un mois spécifique ou saisir un pourcentage d'indice de saisonnalité (disponible uniquement pour les nœuds # et %), selon les besoins.
  - Entrez un % positif pour une valeur augmentée ce mois-ci ou une valeur négative pour une valeur diminuée. Par exemple, 20 % indique que la valeur de ce mois est de 20 % au-dessus de la valeur non saisonnière (ou 120 %), tandis que -20 % indique qu'elle est de 20 % en dessous de la valeur non saisonnière (ou 80 %).
  - Pour les nœuds de pourcentage, QAT calcule d'abord la valeur saisonnalisée du pourcentage avant de calculer ensuite la valeur du nœud en multipliant le pourcentage saisonnier et la valeur parent. Dans la figure 174, l'exemple montre comment le pourcentage non saisonnier de 50 % devient 60 % une fois saisonnier.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image288.png').default} alt="Figure 173: Seasonality in a number node" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 173: Seasonality in a number node</p>
  </div>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image289.png').default} alt="Figure 174: Seasonality in a percentage node" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 174: Seasonality in a percentage node</p>
  </div>

  - Si un utilisateur coche « La modification manuelle affecte le mois prochain », le montant manuel ajouté à la fin du mois sera reporté au début du mois suivant.
  - Si aucun de ces champs n'est pertinent, les utilisateurs peuvent décocher « Afficher les modifications manuelles » ou « Afficher la saisonnalité et les modifications manuelles » pour masquer ces colonnes.

**Exemples de modélisation :**

<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
  <li style={{ marginBottom: '15px' }}>
    <strong>Croissance simple</strong> (# linéaire) - l'exemple ci-dessous montre une croissance démographique chaque mois de 500/mois de janvier 2022 à décembre 2024.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image290.png').default} alt="Simple Growth (linear #)" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Perte simple</strong> (# linéaire) - l'exemple ci-dessous montre l'attrition chaque mois de 100/mois de janvier 2022 à décembre 2024. QAT utilise un nombre négatif pour indiquer une diminution ou une perte.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image291.png').default} alt="Simple Loss (linear #)" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Croissance simple</strong> (%) linéaire : l'exemple ci-dessous montre une croissance démographique constante de 2 % chaque mois entre janvier 2022 et décembre 2024. QAT a calculé que ce changement entraîne une augmentation de la population de 108,64 chaque mois.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image292.png').default} alt="Simple Growth (linear %)" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Croissance simple</strong> (exponentielle %) : l'exemple ci-dessous montre une croissance démographique chaque mois de 1 % de janvier 2022 à décembre 2024. La croissance étant exponentielle, le changement diffère chaque mois.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image293.png').default} alt="Simple Growth (exponential %)" style={{ width: '100%' }} />
    </div>
    <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '5px' }}>QAT calculates this change to be 54.32 in Jan-22 month,</li>
      <li style={{ marginBottom: '5px' }}>QAT calculates this change to be 54.86 in Feb-22 month, and</li>
      <li>QAT calculates this change to be 55.41 in Mar-22</li>
    </ul>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Perte pluriannuelle</strong> : l'exemple ci-dessous montre un taux d'attrition (perte) différent chaque année. L'année 1 (janvier 2022 à décembre 2022) diminue la population de 1 % ou 54,32 chaque mois, l'année 2 (janvier 2023 à décembre 2023) diminue la population de 2 % ou 95,6 chaque mois, etc. QAT utilise un nombre négatif pour indiquer une diminution ou une perte.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image294.png').default} alt="Multi-year Loss" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Transfer</strong> - l'exemple ci-dessous montre un transfert de 250 patients chaque mois pendant un an, de janvier 2022 à décembre 2022, du nœud actuel (Adultes 1ère ligne) vers un autre nœud (Adultes 2ème ligne). Ce transfert apparaîtra également sur l'autre nœud (Adultes 2e ligne) en grisé pour signifier un changement non modifiable.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image295.png').default} alt="Transfer" style={{ width: '100%' }} />
    </div>
  </li>
</ul>

### <img src={require('@site/static/img/media/image287.png').default} alt="calculator" style={{ width: '16px', verticalAlign: 'middle', marginRight: '8px' }} /> Calculatrice de modélisation :

Cliquez sur le calculateur de modélisation <img src={require('@site/static/img/media/image287.png').default} alt="calculator" style={{ width: '16px', verticalAlign: 'middle' }} /> si vous avez besoin d'aide pour calculer le taux de variation mensuel. Le calculateur de modélisation **Valeur finale/Changement** est disponible pour tous les nœuds à l'exception des **Nœuds d'agrégation**, et le calculateur de modélisation **Cible annuelle** n'est disponible que pour les **Nœuds numériques**. Commencez par sélectionner un **Type de modélisation** (# Linéaire, % Linéaire ou % Exponentiel), puis un **Type de cible** (Valeur finale/Changement ou Cible annuelle) :

<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
  <li style={{ marginBottom: '15px' }}>
    <strong>Valeur/Changement final</strong> : utilisez cette option si vous avez une valeur cible (non cumulative) ou un changement total souhaité sur une période spécifique, plutôt qu'un taux de changement mensuel connu.
    <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '10px' }}>The <strong>Start Date</strong> and <strong>Target Date</strong> will be filled in based on the original inputs for Start date and End date in the modeling table, which are by default, based on the forecast period. The user can change these if desired. These two dates will flow back into the modeling table.</li>
      <li style={{ marginBottom: '10px' }}>The <strong>Start Value</strong> is the node value at beginning of the month for the <strong>Start Date</strong>, as calculated by QAT. In other words, the <strong>Start Value</strong> is the node value before any modeling changes occur. This field is calculated and cannot be directly changed by the user. If the <strong>Start Date</strong> is the month after the “Month” on the <strong>Node Data</strong> tab, then the <strong>Start Value</strong> is equal to the "Node Value” provided by the user on the <strong>Node Data</strong> tab.</li>
      <li style={{ marginBottom: '10px' }}><strong>Period</strong> is calculated as <strong>Target Date</strong> - <strong>Start Date</strong> (in months). This value is not displayed in the front-end of QAT, but is used in the formulas below.</li>
      <li style={{ marginBottom: '10px' }}>Based on the available data or assumptions, enter data in **one** of the following fields: <strong>Target Ending Value</strong>, <strong>Target Change (%)</strong> or <strong>Target Change (#)</strong></li>
      <li style={{ marginBottom: '10px' }}>After an input is developed, the other fields will be automatically populated, as well the final <strong>'Calculated Month-on-Month Change'</strong>.</li>
      <li>When user clicks 'Accept', the <strong>Monthly Change (% or #)</strong> will be populated back in the main modeling table, based on the formulas below. All negative changes will be displayed as “decrease” and positive changes displayed as “increase”, with the number shown in absolute value.</li>
    </ol>
  </li>
</ul>

Si l'utilisateur saisit **Valeur de fin cible :**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (%)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Exponential (%)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Target Ending Value - Start Value) / Start Value</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Ending Value - Start Value</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Month-on-Month Change</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Target Ending Value - Start Value) / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(((Target Ending Value - Start Value) / Period) / Start Value) * 100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>((Target Ending Value / Start Value) ^ (1 / Period) - 1) * 100</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Change (#) / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
  </tbody>
</table>

Si l'utilisateur saisit **Target Change (%) :**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (%)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Exponential (%)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Ending Value</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Start Value + (Start Value * Target Change (%)/100)/100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Ending Value - Start Value</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Month-on-Month Change</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Start value * Target Change (%)) / 100 / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(((Target Ending Value - Start Value) / Period) / Start Value) * 100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>((Target Ending Value / Start Value) ^ (1 / Period) - 1) * 100</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Change (#) / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
  </tbody>
</table>

Si l'utilisateur saisit **Target Change (#) :**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Ending Value</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Start Value + Target Change (#)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Target Ending Value - Start Value) / (Start Value * 100)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Month-on-Month Change</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Change (#)/ Period</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Change (#) / Period</td>
    </tr>
  </tbody>
</table>

- **Cible annuelle :** Utilisez cette option si vous avez des valeurs cibles (cumulatives sur un an). Au lieu de simplement diviser les objectifs annuels par 12, ce qui crée un modèle d'escalier, la calculatrice aidera à fournir une prévision fluide.

  <div style={{ margin: '20px 0' }}>
    <img src={require('@site/static/img/media/image297.png').default} alt="Annual Target Graph" style={{ width: '100%' }} />
  </div>

  <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
    <li style={{ marginBottom: '10px' }}>
      Select the first month of your target and the number of years of targets available.
      <ul style={{ listStyleType: 'square', paddingLeft: '20px', marginTop: '5px' }}>
        <li>QAT will autofill in the yearly rows in the table based on the chosen first month of target, assuming targets are for 12-month periods.</li>
      </ul>
    </li>
    <li style={{ marginBottom: '10px' }}>In the table, enter figures for the year before the target (the actual) and each target year.</li>
    <li style={{ marginBottom: '10px' }}>After data entry, click “Calculate” (see below for calculation approach and formulas).</li>
    <li style={{ marginBottom: '10px' }}>Review the differences between the desired targets and the QAT calculated numbers. If differences are large, consider if the rate of change follows a linear or exponential pattern and change the **Modeling Type** (Linear #, Linear %, or Exponential %) and re-calculate if needed.</li>
    <li>
      When user clicks “Accept,” QAT populates the calculated values in two places:
      <ul style={{ listStyleType: 'square', paddingLeft: '20px', marginTop: '5px' }}>
        <li style={{ marginBottom: '5px' }}>Node Value tab - Starting Month and Starting Value</li>
        <li>Modeling/Transfer tab – one row is created per 12-month period after the Starting Value. Note that these are not the same periods as the Target Years (see below).</li>
      </ul>
    </li>
  </ol>

**Approche de calcul de l'objectif annuel :** QAT suppose que 1/12ème de la valeur annuelle réelle a été atteint au milieu de l'année réelle et 1/12ème des objectifs annuels sera atteint au milieu de chaque année cible. QAT interpole ensuite efficacement entre ces points médians en calculant un taux de variation mensuel linéaire ou exponentiel. Ce taux de variation mensuel est ensuite appliqué aux deux années : la seconde moitié de la première année et la première moitié de la deuxième année. Pour y parvenir, QAT calcule les champs suivants :

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Field</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Explanation / Formula</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Annual Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Change from previous year. Calculated for each year after the first year.<br/>
        = (Current Year Value - Previous Year Value) / (Previous Year Value)
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (%) / Monthly Change (#)*</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Exponential Rate = (Year 2 Value/Year 1 Value)^ (1/12) -1<br/>
        Linear Rate = Annual Change / 12
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Node Month**</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>= n-7, where n is the first month of the target.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Node Value**</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Assumed to be the first value (the actual value) provided by the user divided by 12, since this is assumed to be the midpoint of the year.<br/>
        = Year Value/12
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Total</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Beginning with the Node Month and Node Value, and applying the Monthly Change (% or #), QAT calculates each monthly value, then provides sums the values across 12-month periods.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Difference (Target vs Calculated, #)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Calculated for each year after the first Actual year. This difference will be large if the annual change varies significantly between years.<br/>
        = Calculated Total – Target
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Difference (Target vs Calculated, %)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Calculated for each year after the first Actual year. This difference will be large if the annual change varies significantly between years.<br/>
        = (Calculated Total - Target) / Target.
      </td>
    </tr>
  </tbody>
</table>

<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '5px' }}>
  * Ces valeurs n'apparaissent pas dans la section « Calculatrice de modélisation », mais sont renseignées dans le tableau des nœuds de modélisation/transfert supérieurs après que l'utilisateur a cliqué sur « accepter ».<br />
  ** Ces valeurs n'apparaissent pas dans la section « Calculatrice de modélisation », mais sont renseignées dans les champs du nœud principal après utilisation, cliquez sur « Accepter ».
</p>

### e. Extrapolation

**Objectif :** L'onglet d'extrapolation permet aux utilisateurs de prévoir les valeurs futures des nœuds en extrapolant à partir des valeurs passées. Cette fonctionnalité n'est disponible que pour les nœuds numériques et est similaire à l'écran « Extrapolation », mais elle est effectuée dans un nœud d'arborescence. Pour un nœud donné, les utilisateurs doivent choisir entre modélisation/transferts ou extrapolation, mais ne peuvent pas utiliser les deux en même temps. Plus de détails sur les méthodes d'extrapolation peuvent être trouvés sous [Extrapolation](#extrapolation).

**Utilisation de cet onglet :**

1. Tout d’abord, cochez la case à côté de « Extrapoler » dans le nœud Ajouter/Modifier.
2. Sélectionnez « Afficher les données ».
3. Dans le tableau, entrez les valeurs réelles et les taux de reporting de vos données passées. À partir de cette entrée, QAT calculera les valeurs historiques ajustées. Si vous devez modifier la période des données, modifiez le mois de début et de fin en haut du nœud sous « Mois de début pour les données historiques ».
4. S'il manque des données, utilisez le bouton vert Interpoler pour remplir les données manquantes. L'interpolation ne peut être utilisée que s'il manque des données des deux côtés du mois.
5. (facultatif) Sélectionnez la ou les méthodes de prévision que vous souhaitez afficher et mettez à jour les paramètres d'extrapolation.
6. Cliquez sur « Extrapoler ». Toutes les prévisions sélectionnées s'afficheront dans le tableau principal et les graphiques.

**REMARQUE :** Les valeurs minimales nécessaires pour obtenir des graphiques et des rapports corrects pour les différentes fonctionnalités sont ci-dessous :

* TES, Holt-Winters : nécessite au moins 24 mois de données de consommation réelle
* ARIMA : nécessite au moins 14 mois de données de consommation réelle
* Moyenne mobile, semi-moyennes et régression linéaire : nécessite au moins 3 mois de données de consommation réelle

7. (facultatif) Dans le tableau, ajoutez toutes les modifications manuelles (+/-). Ces changements sont ajoutés ou soustraits aux valeurs extrapolées.
8. Après avoir examiné le tableau principal, le tableau d'erreurs et les graphiques, sélectionnez la méthode de prévision souhaitée en bas de l'écran et cliquez sur « Enregistrer ».
9. Remarque : Si vous modifiez des entrées, vous devrez extrapoler à nouveau pour mettre à jour les calculs, avant de sélectionner une nouvelle méthode.

###f. Techniques avancées

**Conseils pour des cas d'utilisation spécifiques :**

- **Utilisation du produit retardée ou échelonnée ?** Parfois, la consommation du produit est décalée par rapport aux autres niveaux supérieurs de l'arbre. Dans le nœud Unité de prévision concerné, utilisez le champ Lag pour indiquer ce délai.

  - Par exemple, si l'utilisation du produit commence 2 mois après les dates du nœud parent, saisissez « 2 » dans ce champ.
  - Ce champ peut également être utilisé lorsque le produit change au fil du temps – par exemple, si les unités de prévision A, B et C sont utilisées en sécession pendant deux mois à la fois, vous pouvez configurer votre arbre avec l'unité de prévision A (discrète pendant 2 mois, décalage = 0), l'unité de prévision B (discrète pendant 2 mois, décalage = 2), l'unité de prévision C (discrète pendant 2 mois, décalage = 4).

- **Utilisation discrète du produit sur une période plus longue ? (prévisions du premier mois par rapport aux prévisions mois par mois) :** QAT a la possibilité de calculer l'utilisation discrète des produits dans les nœuds d'unité de prévision de deux manières :

  - en frontloadant la quantité discrète consommée par patient au cours du mois 1 (choisissez "Calculer" = "Tout le Premier Mois") ou
  - en désagrégeant la quantité discrète consommée par patient par mois (choisir "Calculer" = "Mois par Mois").
  - Par défaut, QAT supposera « Tout au cours du premier mois » (frontloading) ; cependant, les utilisateurs ont la possibilité de sélectionner « Mois par mois » pour la méthode alternative. Ce calcul alternatif pourrait être utile pour les unités de planification (UP) qui ont de faibles modèles de consommation sur une période donnée ou s'il s'applique à un groupe de patients nouvellement initié. Par exemple, si une femme enceinte doit prendre un supplément nutritionnel une fois par mois pendant toute la durée de la grossesse (neuf mois), QAT calculera par défaut neuf suppléments au cours du premier mois (chargement anticipé). Sans préalimentation, QAT calculerait un supplément le mois 1, un supplément le mois 2, un supplément le mois 3, et ainsi de suite.

Exemple de calcul (Tous au cours du premier mois ou mois par mois) – aucune modélisation appliquée :

o **Tous au cours du premier mois :** 10 patients ont besoin d'un flacon pour un traitement sur une période de 6 mois ; ainsi, le nombre d'unités de planification par patient = 6. Lors du calcul de « Tout au cours du premier mois », QAT anticipera la quantité prévue et supposera que les 60 bouteilles (10 patients * 6 bouteilles par patient) sont prévues chaque mois.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jan</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Feb</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Mar</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Apr</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>May</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jun</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jul</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Aug</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Sep</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Oct</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Nov</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Dec</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong># of Patients</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Total Forecasted</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
  </tbody>
</table>

<p style={{ fontStyle: 'italic', marginTop: '5px' }}>Total Forecasted in 6-month Period = 360 Bottles</p>

o **Mois par mois :** 10 patients ont besoin d'un flacon pour un traitement sur une période de 6 mois ; ainsi, le nombre d'unités de planification par patient = 6. Avec « mois par mois », QAT répartira uniformément la quantité prévue sur la période de temps. Ainsi, QAT supposera que 10 flacons sont prévus au mois 1 (10 patients * 1 flacon). Au cours du mois 2, ces mêmes 10 patients reviendront chacun pour une autre bouteille, tandis qu'un nouveau groupe de 10 patients aura également besoin chacun d'une bouteille [(10 patients * 1 bouteille) + (10 patients * 1 bouteille)] pour un total de 20 bouteilles prévues au mois 2, et ainsi de suite.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jan</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Feb</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Mar</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Apr</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>May</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jun</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jul</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Aug</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Sep</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Oct</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Nov</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Dec</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong># of Patients</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Total Forecasted</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>20</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>30</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>40</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>50</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>50</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>40</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>30</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>20</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
  </tbody>
</table>

<p style={{ fontStyle: 'italic', marginTop: '5px' }}>
  Total prévu sur une période de 6 mois = 160 bouteilles<br />
  Total prévu sur une période de 12 mois = 360 bouteilles
</p>

Exemple de calcul (Tous au cours du premier mois ou mois par mois) – modélisation appliquée :
o Dix patients ont besoin d'un flacon pour un traitement sur une période de 6 mois ; ainsi, le nombre d'unités de planification par patient = 6. Il y a également une augmentation attendue de 5 nouveaux patients par mois. En utilisant la logique ci-dessus pour calculer « Tout au cours du premier mois » et « Mois par mois », QAT calculera le nombre suivant de bouteilles à distribuer sur une période de 12 mois :

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jan</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Feb</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Mar</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Apr</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>May</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jun</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jul</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Aug</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Sep</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Oct</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Nov</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Dec</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong># of Patients</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>15</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>20</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>25</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>30</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>35</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>All in the First Month</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>90</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>120</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>150</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>180</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>210</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month-by-Month</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>25</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>45</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>70</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>135</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>125</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>110</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>90</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>65</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>35</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
  </tbody>
</table>

<p style={{ fontStyle: 'italic', marginTop: '5px' }}>
  Total prévu (tout le premier mois) = 810 bouteilles<br />
  Total prévu (mois par mois) = 810 bouteilles
</p>

- **Vous souhaitez une valeur spécifique pour le nombre d'unités de planification par patient ?** Un utilisateur peut spécifier une valeur spécifique pour le nombre d'unités de planification par unité* (discrète) ou par unité* par mois (continu) en choisissant « Non » pour « Utiliser le calcul automatique de QAT pour le nombre d'unités de planification ? Sauf remplacement par un utilisateur, QAT utilisera le calcul automatique par défaut. (* Dans ce cas, l'unité peut être un patient, un test, un client, etc.)

  - **Exemple discret :** Si chaque flacon de bupivacaïne est censé être utilisé toutes les 5 procédures, alors le nombre d'unités de prévision/procédures est de 0,2 flacon. Avec une unité de planification de 5 flacons, QAT calcule que 0,2/5 = 0,04 unités de planification sont utilisées par procédure. Cependant, un utilisateur peut basculer le bouton radio sur « Non » et choisir de remplacer cela en connaissant les taux d'utilisation réels et de saisir 0,05 unités de planification. Ajoutez toujours une note lorsque vous remplacez le calcul de QAT.

    <div style={{ margin: '20px 0' }}>
    <img src={require('@site/static/img/media/image298.png').default} alt="Discrete Example Override" style={{ width: '100%' }} />
    </div>

  - **Exemple continu :** Si un patient a besoin de 1 comprimé par jour indéfiniment dans un flacon de 30 comprimés TLD, QAT calculera cela comme 30,4167/mois ou 1,0139/jour pour tenir compte des mois qui comportent 30 jours, 31 jours, 28 jours, etc. Cependant, un utilisateur peut choisir de basculer le bouton radio sur « Non » et de choisir de remplacer cela par 1 unité de planification/mois. fournissez la valeur de remplacement de 1. Ajoutez toujours une note lorsque vous remplacez le calcul de QAT.

    <div style={{ margin: '20px 0' }}>
    <img src={require('@site/static/img/media/image299.png').default} alt="Continuous Example Override" style={{ width: '100%' }} />
    </div>

- **Utilisations de prévision répétées ?** Si plusieurs nœuds d'unité de prévision partagent les mêmes paramètres, envisagez d'utiliser l'[écran Modèle d'utilisation](#c-usage-templates) pour enregistrer vos utilisations courantes, puis d'utiliser le champ « Copier à partir du modèle » pour remplir les champs dans les nœuds d'unité de prévision.
- **Agréger les valeurs des nœuds pour un calcul ultérieur ? (Nœuds d'entonnoir) :** Dans certains cas, les utilisateurs peuvent souhaiter lier la valeur d'un nœud à un autre nœud ou regrouper plusieurs nœuds en un seul nœud avant d'ajouter des nœuds supplémentaires ci-dessous. ¶¶Veuillez noter que cette fonctionnalité est différente de la liaison de nœuds via la modélisation/transfert, qui permet de lier les modifications dans un nœud aux modifications dans un autre nœud, plutôt que par agrégation. Ceci est également différent de l'utilisation de nœuds d'agrégation, qui s'agrègent uniquement vers le haut et ne permettent pas de calculs supplémentaires¶¶

**Cas d'utilisation :**

  - Les **tests de charge virale** sont utilisés par diverses populations, mais toutes les populations utiliseront la même combinaison d'instruments. Commencez par un arbre démographique qui se termine par plusieurs populations. Les différentes populations doivent être additionnées et les différentes branches d'instruments se situent sous la somme.
  - Les **patients atteints du paludisme** entrent dans le système de santé par différents canaux (agents de santé communautaires ou établissements de santé publics), qui ont des algorithmes de test différents, mais une fois qu'un patient est testé positif, il reçoit le même « mélange » de traitements. Les différentes populations testées positives doivent être additionnées et les différents schémas thérapeutiques se situent sous la somme.
  - Diverses **méthodes contraceptives** diffèrent dans la façon dont elles sont calculées, mais elles proviennent toutes de la même population du pays, qui doit être mise à jour à chaque quantification et peut faire l'objet d'une modélisation au fil du temps. Un arbre peut être construit pour les implants et les injectables, et un autre pour les préservatifs, mais les deux arbres sont liés ensemble au niveau du nœud de population du pays afin que leurs valeurs restent cohérentes.

**Comment lier des valeurs**

1. Indiquez (sur # ou % nœuds) qu'il s'agit de "nœuds sources"

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image300.png').default} alt="Figure 175 Indicating source nodes" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 175 Indicating source nodes</p>
  </div>

2. Créez de nouveaux « nœuds d'entonnoir » et sélectionnez les nœuds sources à partir desquels effectuer l'agrégation. Remarque : les nœuds d'entonnoir peuvent « s'asseoir » n'importe où sur l'arborescence – c'est-à-dire que vous pouvez faire du premier nœud d'une arborescence un nœud d'entonnoir, ou créer des nœuds d'entonnoir sous n'importe quelle agrégation, nombre de nœuds de pourcentage. En effet, la valeur des nœuds d'entonnoir ne dérive pas de leur parent, mais des sources auxquelles ils sont liés.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image301.png').default} alt="Figure 176 Adding funnel nodes" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 176 Adding funnel nodes</p>
  </div>

3. Ajoutez des nœuds « enfants » sous les nœuds d'entonnoir : il s'agira probablement des nœuds de produit. Les nœuds d'entonnoir offrent une grande flexibilité car ils peuvent être utilisés dans un ou plusieurs arbres, peuvent être utilisés à n'importe quel niveau et

   1. L'utilisateur peut créer un lien **en interne dans une arborescence**

      <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image302.png').default} alt="Link internally within one tree" style={{ width: '100%' }} />
      </div>

   2. Les utilisateurs peuvent établir des liens **en externe entre les arbres** (nœuds sources sur un arbre, nœuds d'entonnoir sur un arbre différent)

      <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image303.png').default} alt="Link externally between trees" style={{ width: '100%' }} />
      </div>

###B2. Validations de modélisation

**Objectif :** Une fois qu'une arborescence a été créée, les utilisateurs peuvent utiliser l'écran de validation de la modélisation pour visualiser les modifications au fil du temps. Ceci est utile si la prévision a appliqué une modélisation/des transferts dans un ou plusieurs nœuds de mode.

**À l'aide de cet écran :**
* Allez dans « Prévision d'arbre » et sélectionnez « Validations de modélisation ».
* Sélectionnez les filtres d'écran à l'aide des listes déroulantes.
  * Programme : Vous devez être en ligne pour visualiser les versions du programme sur le serveur. En mode hors ligne, seuls les programmes locaux téléchargés peuvent être sélectionnés.
  * Niveau :
    * Lors de la création d'un arbre, il est utile de renommer les niveaux. La liste déroulante « niveau » sur cet écran affichera les différents noms de niveau que vous avez choisis. Cela facilite l'identification de ce que montrent les données, plutôt que d'utiliser les niveaux 0,1,2,3, etc.
    * La liste déroulante des niveaux regroupera automatiquement l'unité de planification et l'unité de prévision dans ses propres niveaux au cas où ces nœuds se trouveraient à des niveaux distincts de votre arborescence. Par conséquent, si vous disposez également d'un niveau appelé « Unité de prévision », la sélection du niveau « FU » et du niveau « Unité de prévision » fournira les mêmes résultats. Cependant, si vous avez une unité de prévision au niveau 4 et une autre au niveau 5, le niveau « FU » affichera les deux.
  * **Affichage sur l'axe X :** Les données peuvent être affichées par mois (par défaut) ou agrégées par année civile ou année fiscale. (Voir Figure 154)
    * Lors de l'agrégation par année, il est utile d'utiliser la fonction « Afficher les données » pour confirmer quels mois sont inclus dans le graphique agrégé et pour confirmer s'il existe des données pour tous les mois attendus.
    * Lors de l'agrégation par exercices fiscaux, vous devez sélectionner le mois dans lequel commence votre exercice financier. Par exemple, si votre exercice financier 2023 s'étend d'octobre 2022 à septembre 2023, vous pouvez sélectionner l'option . QAT affichera toujours les exemples en utilisant l'année civile en cours.
  * **Affichage de l'axe Y :** Les données peuvent être affichées en nombre d'unités, ainsi qu'en pourcentage. (Voir Figure 149 par rapport à Figure 147)
* Pour afficher les données tabulaires, sélectionnez le bouton bleu « Afficher les données » en bas à droite de l'écran.
* Lors de la visualisation du graphique, l'utilisateur peut masquer des éléments en cliquant sur la légende. Pour afficher, re-cliquez sur cette partie de la légende.
* Cet écran peut être exporté au format CSV et PDF en sélectionnant la ou les icônes dans le coin supérieur droit.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image304.png').default} alt="Figure 177: Modeling Validation Screen (by number and month)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 177: Modeling Validation Screen (by number and month)</p>
  </div>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image305.png').default} alt="Figure 178: Modeling Validation Screen (by percentage and month)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 178: Modeling Validation Screen (by percentage and month)</p>
  </div>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image307.png').default} alt="Figure 179: Modeling Validation Screen (by Calendar Year vs by Fiscal Year)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 179: Modeling Validation Screen (by Calendar Year vs by Fiscal Year)</p>
  </div>

### B3. Validations de produits

**Objectif :** Une fois l'arborescence créée, les utilisateurs peuvent utiliser l'écran Validations de produits pour vérifier l'utilisation des produits dans l'arborescence de prévisions. Ceci est utile pour voir plusieurs produits à la fois.

**À l'aide de cet écran :**
* Accédez à « Prévisions d'arborescence » et sélectionnez « Validations de produits ».
* Sélectionnez les filtres d'écran à l'aide des listes déroulantes.
  * Seuls les programmes locaux téléchargés peuvent être sélectionnés dans cet écran.
* Cet écran peut être exporté au format CSV et PDF en sélectionnant la ou les icônes dans le coin supérieur droit.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image308.png').default} alt="Figure 180: Product Validations" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 180: Product Validations</p>
  </div>

### B4. Utiliser des modèles

#### une. Modèles d'arbre

**Objectif :** Permettre aux utilisateurs de commencer à concevoir leur arbre de prévision à partir d'un modèle préétabli. Remarque : les modèles d'arborescence sont gérés au niveau du domaine (global).

**Utilisation de modèles d'arborescence :**
L'utilisateur peut ajouter des modèles d'arborescence à deux emplacements différents : l'écran « Gérer l'arborescence » ou l'écran « Modèles d'arborescence ». Remarque : un programme doit être téléchargé afin de créer un modèle d'arborescence.

**Méthode 1 :**

1. Accédez à « Prévision des arbres » → « Gérer les arbres ».
2. En haut à droite de l'écran, cliquez sur la liste déroulante bleue « Créer ou sélectionner » et sélectionnez le modèle d'arborescence souhaité.
3. Dans la fenêtre contextuelle « Détails de l'arborescence » :

   une. Confirmez ou mettez à jour les sections Programme, Méthode de prévision, Nom de l'arbre, Régions et Notes.

   b. Si des unités de planification figurent dans le modèle mais sont absentes du programme, QAT les signalera dans la section inférieure de cette fenêtre contextuelle (voir Figure 150), dans laquelle un tableau affiche les unités de planification manquantes.

      je. S'il y a des unités de planification qui manquent dans le programme (y compris celles inactives ou non cochées pour la prévision d'arbre) et qui sont recommandées pour utiliser le modèle d'arborescence choisi, les utilisateurs peuvent cliquer sur le bouton « Ajouter/mettre à jour les unités de planification sélectionnées » et QAT ajoutera automatiquement les unités de planification au programme de l'utilisateur.

      ii. Si l'utilisateur souhaite créer l'arborescence sans les unités de planification recommandées, il peut cliquer sur le bouton « Créer une arborescence sans ajouter d'unités de planification » et les unités de planification ne seront pas ajoutées au programme de l'utilisateur. Cela peut être utile lorsqu'un utilisateur souhaite utiliser une structure arborescente mais souhaite prévoir différentes unités de planification.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image309.png').default} alt="Figure 181: Tree Details Pop-up with 'Missing Planning Units'" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 181 Tree Details Pop-up with 'Missing Planning Units'</p>
  </div>

         c. Notez que tous les détails de l'arborescence peuvent être mis à jour ultérieurement en cliquant sur l'icône d'engrenage <img src={require('@site/static/img/media/image310.png').default} alt="gear icon" style={{ height: '1.2em', verticalAlign: 'middle' }} /> à côté de la liste déroulante de l'arborescence et que des unités de planification peuvent être ajoutées en accédant à l'écran « Mettre à jour les unités de planification ».

4. QAT créera automatiquement le modèle d'arborescence pour le programme de l'utilisateur et accédera à l'écran « Construire l'arborescence ».

**Méthode 2 :**

1. Accédez à « Prévisions d'arborescence » → « Modèles d'arborescence ».

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image311.png').default} alt="Figure 182: Tree Templates Screen" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 182: Tree Templates Screen</p>
  </div>

2. Passez en revue les différentes options du modèle d'arborescence, en accordant une attention particulière à la méthode de prévision et au type de nœud de départ. Les utilisateurs peuvent cliquer sur n'importe quelle ligne pour consulter le modèle d'arborescence, sa structure et divers nœuds.

   un. Remarque : les nœuds qui commencent par un nœud Pourcentage sont utilisés spécifiquement pour les modèles de branche et ne peuvent pas être utilisés comme modèle d'arborescence. Les utilisateurs doivent d'abord créer un nœud de départ (Numéro ou Agrégation), avant d'ajouter un modèle de branche (pour plus d'informations, veuillez consulter [Modèles de branche](#b-branch-templates)).

3. Une fois qu'un utilisateur a examiné le modèle d'arborescence, il peut cliquer sur « Utiliser ce modèle » dans le coin supérieur droit de l'écran.
4. Continuez à suivre les étapes 3 et 4 de la méthode 1 pour finaliser la création du modèle d'arborescence.

**Recommandations générales sur les modèles d'arborescence :**

- En général, les modèles d'arborescence contiennent des valeurs de « 0 » et « 0 % » à tous les niveaux sauf les nœuds des unités de prévision et de planification. L'utilisateur peut ensuite personnaliser l'arborescence en fonction de ses besoins, par exemple :

  - Cliquez sur chaque nœud pour modifier les valeurs en valeurs réelles.
  - Renommez tous les titres de nœuds.
  - Remplacez tous les produits par :

    - modifier le nœud de l'unité de prévision – mais assurez-vous également d'ouvrir le nœud de l'unité de planification enfant et de sélectionner l'unité de planification appropriée.
    - supprimer les nœuds des unités de prévision et de planification et en ajouter de nouveaux.

  - Copiez tous les nœuds ou branches (l'utilisateur peut copier plusieurs nœuds en copiant le haut d'une branche de nœuds).
  - Supprimez tous les nœuds ou branches.
  - Ajoutez des notes pour expliquer les sources d'informations.

- S'il existe un modèle d'arborescence qui pourrait bénéficier à la communauté QAT, les utilisateurs peuvent le demander via le [Système d'assistance de billetterie QAT] (05-getting-started.md#qat-helpdesk-and-tickets).

####b. Modèles de succursales

**Objectif :** Les modèles de branche permettent aux utilisateurs d'ajouter un modèle d'arborescence, comprenant la structure et tous les différents nœuds enfants, en tant que branche au sein d'une arborescence préexistante. Remarque : les modèles de branche/arborescence sont gérés au niveau du domaine (global). S'il existe un modèle d'arborescence/branche qui pourrait bénéficier à la communauté QAT, les utilisateurs peuvent le demander via le [Système d'assistance de billetterie QAT](05-getting-started.md#qat-helpdesk-and-tickets).

**Utilisation de modèles de branche :**

1. Les utilisateurs doivent d'abord examiner les différentes options de modèle d'arbre/branche, en accordant une attention particulière à la méthode de prévision et au type de nœud de départ dans l'écran « Prévision d'arbre » → « Modèle d'arbre ».
2. Accédez à « Prévisions d'arbres » → « Gérer les arbres » et sélectionnez l'arbre souhaité.
3. Cliquez sur le symbole <img src={require('@site/static/img/media/image312.png').default} alt="branch template icon" style={{ height: '1.2em', verticalAlign: 'middle' }} />. Cela ajoutera le modèle de branche en tant qu'enfant au nœud sélectionné.

   un. En fonction du nœud parent choisi, QAT affichera uniquement les modèles de branche qui peuvent être ajoutés en tant qu'enfants potentiels en fonction du nœud de départ dans l'écran « Modèle d'arborescence » (voir [Types et fonctions de nœud](#a-node-types--functions) pour les options d'enfants potentiels pour chaque type de nœud).

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image313.png').default} alt="Figure 183: Adding a Branch Template" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 183: Adding a Branch Template</p>
  </div>

4. Une fois un modèle de branche choisi, cliquez sur « Ajouter une branche ».
5. Si des unités de planification figurent dans le modèle de branche, mais sont absentes du programme, QAT les signalera dans la section inférieure de cette fenêtre contextuelle (voir Figure 153), dans laquelle un tableau affiche les unités de planification manquantes.

   un. S'il y a des unités de planification qui manquent dans le programme (y compris celles inactives ou non cochées pour Tree Forecast) et qui sont recommandées pour utiliser le modèle de branche choisi, les utilisateurs peuvent cliquer sur le bouton « Ajouter/mettre à jour les unités de planification sélectionnées » et QAT ajoutera automatiquement les unités de planification au programme de l'utilisateur.

   b. Si l’utilisateur souhaite ajouter la branche sans les unités de planification recommandées, il peut cliquer sur le bouton « Ajouter une branche sans ajouter d’unités de planification » et les unités de planification ne seront pas ajoutées au programme de l’utilisateur. Cela peut être utile lorsqu'un utilisateur souhaite utiliser une structure de succursales mais souhaite prévoir différentes unités de planification.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image314.png').default} alt="Figure 184: Adding PUs from a Branch Template to a Program" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 184: Adding PUs from a Branch Template to a Program</p>
  </div>

#### c. Modèles d'utilisation {#c-usage-templates}

**Objectif :** Les modèles d'utilisation permettent à l'utilisateur de renseigner simultanément les détails d'un nœud d'unité de prévision. Les modèles d'utilisation peuvent être globaux ou spécifiques à un programme. Notez que les modèles spécifiques au programme sont gérés par les administrateurs du programme de prévisions. L'utilisateur doit être en ligne pour gérer les modèles, mais peut être hors ligne pour les utiliser.

**Pour utiliser des modèles d'utilisation :**

  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
    <div style={{ flex: '1', minWidth: '150px', maxWidth: '35%' }}>
      <img src={require('@site/static/img/media/image315.png').default} alt="Using a Usage Template in a forecasting unit node - dropdown" style={{ width: '100%' }} />
    </div>
    <div style={{ flex: '2', minWidth: '250px', maxWidth: '63%' }}>
      <img src={require('@site/static/img/media/image316.png').default} alt="Using a Usage Template in a forecasting unit node - fields" style={{ width: '100%' }} />
    </div>
  </div>
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 185: Using a Usage Template in a forecasting unit node</p>

1. Assurez-vous que le programme dispose de l'unité de planification liée au modèle d'utilisation. N'oubliez pas que les modèles d'utilisation sont basés sur l'unité de prévision, mais que chaque unité de planification est liée à une unité de prévision spécifique. Par exemple, si le programme dispose de l'unité de planification « Lopinavir/Ritonavir 200/50 mg Comprimé, 120 Comprimés », tous les modèles d'utilisation avec l'unité de prévision associée « Lopinavir/Ritonavir 200/50 mg Comprimé » seront disponibles lors de la conception de l'arborescence.
2. Dans l'écran Créer un arbre, créez ou modifiez un nœud d'unité de prévision existant (voir [Section B1](#building-a-tree) pour en savoir plus). Si vous créez un nouveau nœud, assurez-vous de sélectionner d'abord le type de nœud comme « unité de prévision » et vérifiez que les champs « mois » et « pourcentage du parent » sont corrects.
3. (facultatif) Sélectionnez une catégorie Tracer pour filtrer les modèles d'utilisation disponibles
4. À l'aide de la liste déroulante « Copier à partir du modèle », sélectionnez les modèles d'utilisation souhaités.
5. Tous les champs suivants seront remplis
6. Cliquez sur « Mettre à jour » pour enregistrer les modifications.

**Pour gérer les modèles d'utilisation (administrateurs du programme de prévisions uniquement) :**

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image317.png').default} alt="Figure 186: Managing Usage Templates" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 186: Managing Usage Templates</p>
  </div>

1. Assurez-vous que QAT est en mode en ligne et accédez aux modèles d'utilisation des modèles d'arborescence &gt;. Les modèles globaux seront grisés et non modifiables.
2. Pour créer un nouveau modèle d'utilisation, cliquez sur « Ajouter une ligne ». Pour modifier un modèle d'utilisation existant, passez à l'étape suivante.
3. Remplissez ou modifiez la ligne du modèle d'utilisation comme vous le souhaitez

- La colonne « Nom d'utilisation » est ce qui apparaîtra dans la liste déroulante.
   - Utilisez la barre de défilement horizontale pour accéder à tous les champs du tableau.
   - Utilisez les info-bulles (passez la souris sur les icônes « i ») pour vous guider
   - Utilisez l'avant-dernière colonne « Utilisation en mots » pour vérifier que tout est correctement saisi.
   - Pour les produits utilisés plus d'une fois, il existe un calculateur pour vous aider à convertir l'intervalle en fréquence. Faites un clic droit sur la ligne que vous modifiez pour ouvrir l’écran « Calculer la fréquence d’utilisation ». Entrez l'intervalle et l'unité de fréquence souhaitée (jour, mois, semaine ou année) et le numéro de fréquence et l'unité calculés seront renseignés dans le tableau.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image318.png').default} alt="Figure 187: 'Calculate Usage Frequency' screen" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 187: "Calculate Usage Frequency" screen</p>
  </div>

4. Cliquez sur « Soumettre » lorsque vous avez terminé.