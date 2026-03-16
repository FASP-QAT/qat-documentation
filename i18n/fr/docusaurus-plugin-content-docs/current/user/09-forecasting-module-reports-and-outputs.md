---
id: forecasting-module-reports-and-outputs
title: "Forecasting Module: Reports and Outputs"
sidebar_label: "Forecasting Module: Reports and Outputs"
sidebar_position: 9
---
# Module de prévision : rapports et résultats

## Comparez et sélectionnez

**<u>Purpose</u> :** Permet aux utilisateurs de comparer toutes les prévisions disponibles (à partir des méthodes d'arborescence et de consommation) et de sélectionner leur prévision finale. Dans cet écran, les utilisateurs sélectionnent leurs prévisions une unité de planification et une région à la fois. Pour sélectionner des prévisions sur plusieurs unités de planification et régions, utilisez l'écran Récapitulatif des prévisions. Les utilisateurs doivent utiliser tous les tableaux et graphiques de cet écran pour comparer les données et choisir une prévision finale.

**<u>Utilisation de cet écran</u> :**

1. **Vérifiez que toutes les prévisions attendues apparaissent dans le tableau Comparer et sélectionner. Pour ajouter des prévisions, accédez à l'écran** [Gérer l'arborescence](#tree-forecasts) **pour créer une prévision d'arborescence ou à l'écran [Extrapolation](#extrapolation)** **pour créer une prévision basée sur la consommation.** Les utilisateurs devront peut-être également revérifier l'écran [Mettre à jour les unités de planification](#planning-units-1) pour s'assurer que les méthodes de prévision de consommation ou de prévisions d'arborescence ont été cochées/décochées pour chaque unité de planification.
    1. Remarque : les lignes sont surlignées en gris et ne sont pas modifiables lorsqu'il n'y a rien à afficher ou à sélectionner.

2. **Examinez les prévisions disponibles pour chaque unité de planification à l'aide des informations suivantes à l'écran :**
    1. **Erreur de prévision (%) :** cette erreur est calculée à l'aide du calcul du pourcentage d'erreur absolue pondérée (WAPE) de la même manière qu'elle est calculée dans l'écran Extrapolation de la consommation. Si l'erreur de prévision est mise en évidence en vert, cette prévision présente l'erreur de prévision la plus faible parmi les prévisions disponibles.

> _Remarque : l'erreur de prévision n'est pas toujours fiable pour les prévisions d'arbres – à moins qu'une prévision d'arbre ne présente un chevauchement significatif avec les données réelles passées, il se peut qu'il n'y ait pas de données de prévision passées disponibles pour comparaison._

2. **Comparer aux prévisions de consommation :** QAT compare les prévisions de consommation disponibles et les prévisions d'arbres. Pour toutes les prévisions d'arbre, QAT signalera le pourcentage au-dessus de la prévision de consommation la plus élevée ou en dessous de la prévision de consommation la plus basse. La comparaison sera surlignée en rouge si elle se situe en dehors des pourcentages de seuil définis par l'utilisateur dans l'écran [Paramètres de version] (#version-settings). En supposant des données de consommation réelle fiables, cette comparaison aide les utilisateurs à déterminer si leurs prévisions d'arbres sont comparables à la consommation historique. Cette statistique ne sera pas disponible pour les prévisions de consommation.

3. **Graphique : comparez visuellement les différentes prévisions.** La prévision sélectionnée dans le tableau du haut apparaîtra **en gras** dans le graphique.

4. **Tableau de données détaillé : comparez les données entre les prévisions côte à côte en cliquant sur le bouton « Afficher les données » sous le graphique. Toutes les données en gras**/**_gras italique violet_** **les données se situent dans la période de prévision.**

5. **Affichage des prévisions sous forme d'agrégations d'année civile ou d'exercice : par défaut, QAT affiche les prévisions en chiffres mensuels, mais les utilisateurs ont la possibilité d'afficher une agrégation de ces chiffres par année civile ou par exercice (et de définir le début/la fin de l'exercice qui fonctionne dans leur contexte).**
    1. **Lorsque vous choisissez d'afficher par année civile/fiscale, un nouveau tableau apparaît entre le graphique et le tableau de données détaillées. Ce nouveau tableau montre les valeurs prévisionnelles globales par calendrier ou exercice financier et indique le nombre de mois utilisés dans le calcul pour cette année.**

<!-- fin de liste -->

3. **Sélectionnez la prévision finale dans le tableau Comparer et sélectionner. S'il y a un symbole** ![Warning with solid fill](/img/media/image319.png) ** à côté de l'unité de planification, aucune prévision n'est sélectionnée. S'il y a un symbole** ![Checkbox Checked with solid fill](/img/media/image320.png) **à côté de l'unité de planification, une prévision est sélectionnée.**

4. **Répétez les étapes 1 à 3 pour chaque unité de planification et région jusqu'à ce qu'il ne reste plus de symboles** ![Warning with solid fill](/img/media/image319.png) **. Une fois terminé, passez aux** [Prévisions mensuelles](#monthly-forecast) **pour vérifier toutes les unités de planification ensemble.**

**_Remarque : Les utilisateurs peuvent sélectionner plusieurs prévisions d'arbres comme prévision finale, qui regrouperont les quantités de prévisions mensuelles ; cependant, les utilisateurs ne peuvent pas sélectionner plusieurs prévisions de consommation ou une combinaison de prévisions de consommation et d'arborescence._**

**<u>Tips sur l'utilisation du graphique et du tableau de données détaillées :</u>**

- Un utilisateur peut visualiser le graphique dans l'unité de planification, l'unité de prévision, [Unité d'équivalence] (#unités d'équivalence) et pour une période de temps spécifique. Si un utilisateur choisit « Afficher uniquement la période de prévision », le graphique affichera uniquement la période de temps choisie par l'utilisateur comme période de prévision dans l'écran Paramètres de version.

- Par défaut, QAT affichera toutes les prévisions disponibles par unité de planification et tous les chiffres réels saisis ou importés depuis le module QAT Supply Planning dans le graphique ; cependant, un utilisateur peut désélectionner l'option « Affichage ? » case à cocher pour les prévisions dans le tableau supérieur s’ils ne souhaitent pas les afficher dans le graphique.

- Comme pour le graphique de l'écran Extrapolation de la consommation, l'utilisateur peut choisir d'afficher la prévision « à l'envers ». Notez que si vous choisissez cette option, cela ramènera la ligne « Réels (ajustés).

## Prévisions mensuelles

**<u>Purpose</u>** : permet aux utilisateurs d'afficher les prévisions finales (_selected_) pour un seul programme et affiche les prévisions par unité de planification et par mois. Ce résultat regroupe toutes les prévisions régionales en une seule prévision totale. Pour afficher les prévisions régionales désagrégées, les utilisateurs peuvent exporter le résultat au format CSV. Ce rapport est idéal pour vérifier toutes les unités de planification en un seul endroit, car il propose plusieurs options d'affichage du rapport :

- Unité de planification ou unité de prévision

- Agrégé par unité d'équivalence

- Graphique mensuel ou annuel et données tabulaires

![P3495#yIS1](/img/media/image321.png)

Figure 188 : Prévisions mensuelles affichées avec l'axe Y dans les UE

![P3497#yIS1](/img/media/image322.png)

Figure 189 : Données tabulaires de prévisions mensuelles

**<u>Utilisation de cet écran</u>** :

- _Seules les prévisions sélectionnées seront affichées dans cette sortie. Pour sélectionner une prévision pour un produit, accédez à l'écran « _[Comparer et sélectionner la prévision](#compare-and-select) ». Pour voir les prévisions totales pour tous les produits, accédez à l'écran « [Résumé des prévisions] (#forecast-summary) ».

- *L*a **Période de rapport** sera utilisée pour déterminer la période de temps qui s'affichera dans la sortie graphique/tabulaire et doit être comprise dans la période de prévision.

- Utilisez les paramètres pour afficher les données graphiques/tabulaires soit par unités de prévision, soit par unités de planification, ainsi que pour afficher l'axe y en unités d'équivalence.

- Les **Unités d'équivalence** (UE) permettent aux utilisateurs d'agréger des données entre des unités de planification ou des unités de prévision qui sont différentes mais qui ont la même unité d'équivalence. Voir [Unités d'équivalence](#equivalency-units) pour plus d'informations.

- Le filtre « Agrégation sur l'axe X par année » vous permet d'afficher les données agrégées par année plutôt que par mois.

- Pour la vue graphique, il existe 3 manières de masquer les unités de planification affichées :
  1. Utilisez le filtre en haut pour sélectionner la ou les unités de planification.

  2. Cliquez sur une unité de planification dans la légende du graphique.

  3. Décochez la case « Afficher » à l'extrême gauche de la vue tabulaire.

## Résumé des prévisions

**<u>Purpose</u>** : permet aux utilisateurs de voir un résumé de leurs prévisions finales (sélectionnées) pour toute la période de prévision. Pour afficher les prévisions par mois, utilisez plutôt l'écran « [Monthly Forecast](#monthly-forecast) ».

- **Vue régionale :** Utilisez cette vue pour afficher vos prévisions sur les unités de planification <u></u> et les régions <u></u>. Mettez directement à jour la méthode de prévision pour chaque combinaison région-unité de planification et ajoutez des notes dans le tableau, si vous le souhaitez. Les sélections de prévisions peuvent également être mises à jour dans l'écran « [Comparer et sélectionner les prévisions] (#compare-and-select) ».

- **Vue nationale :** Utilisez cette vue pour voir vos prévisions au niveau national <u></u> et évaluer votre excédent ou écart d'approvisionnement <u></u>.

### Vue régionale

1. **Utilisez les listes déroulantes en haut de l'écran pour sélectionner le programme et la version**

2. **Assurez-vous que le bouton radio « Vue régionale » sous Affichage.**

3. **Affichez un résumé de toutes les unités de planification, leur quantité de prévision sélectionnée et les notes, par région.**

4. **(si une version locale est sélectionnée), l'utilisateur peut mettre à jour la prévision sélectionnée en double-cliquant sur l'une des cellules de la colonne « Prévision sélectionnée » ainsi que sur toutes les notes de la colonne « Notes ».**

![P3518#yIS1](/img/media/image323.png)

Figure 190 Résumé des prévisions – Vue régionale

### Vue nationale

![P3521#yIS1](/img/media/image324.png)

Figure 191 Sommaire des prévisions – Vue nationale

1. **Utilisez les listes déroulantes en haut de l'écran pour sélectionner le programme et la version**

2. **Assurez-vous que le bouton radio « Vue nationale » sous Affichage.**

3. **Voir l'analyse de l'écart excédentaire qui en résulte. _Remarque : Il ne s'agit pas d'un plan d'approvisionnement complet, mais d'une analyse de haut niveau des excédents/écarts d'approvisionnement. Nous vous recommandons d'importer vos prévisions dans le module de planification des approvisionnements pour une planification granulaire des approvisionnements._**

4. **Cliquez sur la case « Masquer les calculs » pour voir une version simplifiée du tableau.**

5. Pour que les données s'affichent correctement ici, saisissez les données suivantes :
    1. Sous [Mettre à jour l'unité de planification](#planning-units-1) :
        1. **Stock** – au début de votre période de prévision

        2. **Expéditions existantes** – pendant votre période de prévision

        3. **Mois de stock souhaités** – à la fin de votre période de prévision

        4. **Type de prix** et **Prix unitaires**

    2. Sous [Mettre à jour les paramètres de version] (#version-settings) :
        1. ** % de transport** – Le coût du transport est calculé en pourcentage du coût du produit.

**Formules utilisées pour calculer l'excédent/l'écart d'approvisionnement**

- Stock du projet à la fin de la prévision = (Stock de départ) + (Expéditions existantes) - (Quantité prévue)

- Stock souhaité à la fin de la prévision = (Quantité prévue \* Mois de stock souhaités) / (Nombre de mois dans la période de prévision)

- Surplus/Écart d'approvisionnement = (Stock projeté à la fin de la prévision) - (Stock souhaité à la fin de la prévision)

Par exemple, une prévision de janvier 2021 à décembre 2023 (prévision sur 36 mois)

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Quantité totale prévue</strong>
      </th>
      <th>
        <strong> Stock <br /> (fin décembre 2020) </strong>
      </th>
      <th>
        <strong>Expéditions existantes (janvier 2021 - décembre 2023)</strong>
      </th>
      <th>
        <strong> Stock <br /> (fin décembre 2023) </strong>
      </th>
      <th>
        <strong> Mois de stock souhaités <br /> (fin décembre 2023) </strong>
      </th>
      <th>
        <strong> Stock souhaité <br /> (fin décembre 2023) </strong>
      </th>
      <th>
        <strong>Surplus/écart d’approvisionnement</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>360 000</td>
      <td>5 000</td>
      <td>20 000</td>
      <td>
        <p>5 000 + 20 000</p>
        <p>- 360 000</p>
        <p>= -335 000</p>
      </td>
      <td>5</td>
      <td>
        <p>(360 000 * 5) / 36</p>
        <p>= 50 000</p>
      </td>
      <td>
        <p>-335 000 -50 000</p>
        <p>= -385 000</p>
      </td>
    </tr>
  </tbody>
</table>

**Formules utilisées pour calculer les coûts d'approvisionnement**

_Remarque : le coût n'est calculé qu'en cas de déficit d'approvisionnement, pas en cas d'excédent_

- Coût du produit = Écart d'approvisionnement \* Coût unitaire

- Coût du transport = Coût du produit \* Pourcentage de transport

- Coût total = Coût du produit + Coût du transport

Pour l'exemple ci-dessus, en supposant un coût unitaire de 0,10 USD et un pourcentage de fret de 7 % :

- Coût du produit = -385 000 \* 0,10 = 38 500 $

- Coût du transport = 38 500 $ \* 7 % = 2 695 $

- Coût total = 38 500 $ + 2 695 $ = 41 195 $