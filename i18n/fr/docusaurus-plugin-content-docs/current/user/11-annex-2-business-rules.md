---
id: annex-2-business-rules
title: "Annex 2: Business Rules"
sidebar_label: "Annex 2: Business Rules"
sidebar_position: 11
---
# Annexe 2 : Règles Métier

##Présentation

Ce document décrit les formules clés et les règles métier qui sous-tendent l'application de l'outil d'analyse de quantification (QAT).

## Module de planification des approvisionnements : Planification des approvisionnements

1. **Solde d'ouverture :**

> Le solde d'ouverture d'un mois est le même que celui de fin du mois dernier et si c'est le premier mois alors le solde d'ouverture est 0.
>
> **Formule :**
>
> Solde d'ouverture du premier mois = 0
>
> Solde d'ouverture du mois en cours = Solde de fin du mois précédent

2. **Stock expiré :**

> Le stock périmé est calculé comme la somme du solde de clôture de tous les lots du mois précédent disponibles et dont la date de péremption est la même que celle du mois en cours.
>
> **Formule :**
>
> Stock expiré = Somme du solde de fin des lots qui expirent ce mois-ci

3. **Expédition totale :**

> L'expédition totale est calculée comme la somme de toutes les expéditions dont la date de réception (si la date de livraison actuelle ou prévue) est la même que celle du mois en cours et le statut de l'expédition n'est pas annulé et si cette expédition particulière doit être prise en compte, elle doit être prise en compte dans le solde de clôture.
>
> **Formule :**
>
> Total des expéditions = Somme de toutes les expéditions dont la date de réception ou la date de livraison prévue est dans le même mois

4. **Stock final et ajustement :**

> Le stock final est calculé comme la somme du stock de toutes les régions et l'ajustement total est calculé comme la somme des ajustements de toutes les régions en fonction de certaines conditions.

1. Si la région a déclaré à la fois le stock réel et l'ajustement, nous prenons uniquement en compte le décompte réel lors de la somme et l'ajustement est ignoré pour cette région même si quelqu'un a saisi les données à ajuster.

2. Si la région a uniquement déclaré l'ajustement, cet ajustement est pris en compte lors de la somme.

> Par exemple, si la région A a déclaré à la fois l'inventaire et l'ajustement manuel, dans ce cas, nous considérons uniquement l'inventaire et ignorons l'ajustement. Et si la région B a signalé uniquement les ajustements, nous prenons la somme de tous les ajustements pour cette région. Ensuite, nous résumons les décomptes pour les deux régions en tant que stock final et ajustement total.
>
> **Formule :**
>
> Stock Final = Somme du stock pour toutes les régions
>
> Total des ajustements = Somme des ajustements de toutes les régions pour lesquelles il n'y a pas de quantité en stock disponible.

5. **Consommation : **

> La consommation est calculée comme la somme de la consommation de toutes les régions en fonction de certaines conditions.

-> Si toutes les régions n'ont pas déclaré la consommation réelle, QAT prend au maximum la somme de la consommation prévue et la somme de la consommation réelle.

-> Si toutes les régions ont déclaré la consommation réelle, nous prenons la somme comme consommation finale.

> \*\* \*\*
>
> **Formule : **
>
> Consommation finale (Si toutes les régions n'ont pas déclaré la consommation réelle) = MAX (Somme de la consommation réelle pour toutes les régions, Somme de la consommation prévue pour toutes les régions)
>
> Consommation finale (Si toutes les régions ont déclaré la consommation réelle) = Somme de la consommation réelle pour toutes les régions

6. **Inventaire projeté :**

> Le stock projeté est calculé comme la somme du solde d'ouverture, du total des expéditions, du total des ajustements et de la déduction de la consommation finale totale et du stock expiré.
>
> **Formule :**
>
> Stock prévisionnel = Solde d'ouverture + Total des expéditions +/- Total des ajustements - Consommation finale - Stock périmé

7. **Calculer l'ajustement automatique :**

> Les ajustements automatiques sont calculés en fonction de trois conditions :

1. Si toutes les régions ont déclaré l'inventaire réel et que l'inventaire projeté n'est pas égal à l'inventaire final

2. Si certaines régions ont déclaré que l'inventaire réel et l'inventaire final sont supérieurs à la somme de l'inventaire projeté et de l'ajustement total.

3. Si l'une des régions a déclaré l'inventaire réel et que l'inventaire projeté est inférieur à 0

> Et sur la base des conditions ci-dessus, si l'une des conditions est remplie, l'ajustement automatique est calculé comme la différence entre l'inventaire final et l'inventaire projeté, sinon il est considéré comme 0.
>
> **Formule :**
>
> Ajustements automatiques = Stock final - Inventaire prévisionnel

8. **AMC :**

> La consommation mensuelle moyenne (AMC) est calculée comme le rapport de la somme de la demande totale des mois passés et de la demande totale des mois futurs au nombre total de mois pour toutes les consommations finales non nulles et incluant le mois en cours dans les mois futurs. Si la consommation est réelle, la demande totale sera égale à la somme de la demande non satisfaite en plus de la consommation réelle. Si la consommation est prévue, la demande totale est égale à la consommation prévue. Les mois passés et les mois futurs sont basés sur la cartographie des unités de planification du programme.
>
> **Formule :**
>
> AMC = Somme (demande totale en nombre de mois passés) + Somme (demande totale en nombre de mois futurs)/nombre total de mois

9. **MOS minimum :**

> Min MOS est calculé comme Max de Min MOS et Min MOS garde-corps. Min MOS est basé sur la cartographie de l'unité de planification du programme et le garde-corps Min MOS est basé sur le domaine.
>
> <u>RLes règles pour les décimales sont les suivantes</u> :
>
> \-Afficher 0 décimale si plus de 3 chiffres (\>100, par exemple <u>10,000</u>)
>
> \-Afficher 1 décimale si 2 chiffres (par exemple <u>99</u>.8)
>
> \-Afficher 2 décimales si 1 chiffre (par exemple <u>1</u>.63)
>
> \-Afficher 3 décimales si inférieur à 0 (par exemple <u>0</u>.124)
>
> Remarque : AMC et MOS affichent toujours des décimales, les autres champs du plan d'approvisionnement n'afficheront des décimales que si le bouton d'arrondi est activé.
>
> **Formule :**
>
> Min MOS = Max de (Min MOS, Min MOS garde-corps)

10. **MOS maximum :**

> Max MOS est calculé comme Min de Max de la somme de Min MOS et de la fréquence de réapprovisionnement ainsi que du garde-corps Min Max et du garde-corps Max Max. La fréquence de réapprovisionnement est basée sur le mappage de l'unité de planification du programme et les garde-corps Min Max et Max Max sont basés sur le domaine.
>
> **Formule :**
>
> Max MOS = Min (Max (Min MOS + fréquence de réapprovisionnement, garde-corps Min Max), garde-corps Max Max)

11. **Stock minimum :**

> Le stock minimum est calculé en multipliant l'AMC et le Min MOS.
>
> **Formule :**
>
> Stock minimum = AMC \* MOS minimum

12. **Stock maximum :**

> Le stock maximum est calculé en multipliant l'AMC et le Max MOS.
>
> **Formule :**
>
> Stock maximum = AMC \* MOS maximum

13. **Quantité maximale :**

> La quantité maximale est calculée comme la somme de la quantité minimale et la multiplication de la fréquence de réapprovisionnement et de l'AMC
>
> **Formule**
>
> Qté Max = Qté Min + (Fréquence de réapprovisionnement \* AMC)

14. **Solde final :**

> Le solde de clôture est calculé selon certaines conditions :

1. Si toutes les régions ont déclaré l’inventaire réel, alors le solde de clôture est égal au stock final.

> **Formule :**
>
> Solde final = Stock final

2. Si certaines régions ont déclaré l'inventaire réel et si le stock final est supérieur à la somme du stock projeté et de l'ajustement automatique, alors le solde de clôture est égal au stock final.

> **Formule :**
>
> Solde final = Stock final

3. Sinon, le solde final est calculé comme la somme de l'inventaire projeté et de l'ajustement automatique.

> **Formule :**
>
> Solde de clôture = Inventaire projeté + Ajustement automatique

15. **Demande non satisfaite :**

<!-- fin de liste -->

- Lorsque la consommation réelle est disponible = (Consommation réelle \* Jours en rupture de stock) / (Jours du mois – Jours en rupture de stock)

- Lorsqu'aucune consommation réelle n'est disponible = Inventaire projeté\* (si l'inventaire projeté est \<0)

<!-- fin de liste -->

16. **MOS :**

> Le MOS est calculé comme le rapport du solde de clôture à celui de l'AMC.
>
> **Formule :**
>
> MOS = Solde final / AMC

17. **Quand suggérer des expéditions (Planifier par MOS) :**

> QAT propose l'envoi pour un mois lorsque le MOS du mois et des deux mois suivants est inférieur à celui du Min MOS et si le mois est supérieur au mois en cours
>
> **Formule :**
>
> Quand proposer des expéditions = Si MOS du mois et des deux mois suivants \< Min MOS

18. **Quantité d'expédition suggérée (Plan par MOS) :**

> La quantité d'expédition suggérée est calculée comme la différence entre le stock maximum et le solde final.
>
> **Formule :**
>
> Quantité d'expédition suggérée = Stock maximum - Solde final

- Si le MOS du mois en cours et des deux mois suivants est inférieur au Min MOS

> _Quantité de commande suggérée = (Stock maximum - Solde final + Demande non satisfaite)_

- Si MOS est '0' et AMC est supérieur à \> 0 et les deux mois suivants sont inférieurs à Min MOS

> _Quantité de commande suggérée = (Stock maximum - Solde final + Demande non satisfaite)_

- Si MOS est '0' et AMC est supérieur à \> 0 et l'un des deux mois suivants est supérieur à Min MOS

> _Quantité de commande suggérée = (Stock minimum - Solde final + Demande non satisfaite)_

19. **Quand suggérer des expéditions (planifier par quantité) : **

> QAT suggère l'expédition pour un mois lorsque le solde de fin du mois + le délai de distribution et les deux mois suivants sont inférieurs à celui de la quantité minimale ou lorsque le solde de fin du mois est de 0 et l'AMC est supérieur à 0 et si le mois est supérieur au mois en cours
>
> **Formule : **
>
> Quand suggérer des expéditions = Si Solde de Fin du mois + X (Délai de Distribution) et deux mois suivants \< Quantité Min ou
>
> Quand suggérer des expéditions = Si Solde final du mois = 0 et AMC n'est pas égal à 0
>
> \*\* \*\*

20. **Quantité d'expédition suggérée (planifier par quantité) : **

> La quantité d'expédition suggérée est calculée comme la différence entre le stock maximum/stock minimum et la somme du solde final et de la demande non satisfaite.
>
> **Formule :**

- Si le solde final pour le mois en cours + X mois (délai de distribution) et les deux mois suivants est inférieur à la quantité minimale

> _Quantité de commande suggérée = (Quantité maximale pour le mois en cours + X mois (délai de distribution) - Solde final + Demande non satisfaite)_

- Si le solde de clôture est « 0 » et que l'AMC est supérieur à \> 0 pour le mois en cours + X mois (délai de distribution) et que les deux mois suivants sont inférieurs à la quantité minimale.

> _Quantité de commande suggérée = (Quantité maximale pour le mois en cours + X mois (délai de distribution) - Solde final + Demande non satisfaite)_

- Si la fin est '0' et que l'AMC est supérieur à \> 0 pour le mois en cours + X mois (Délai de distribution) et que l'un des deux mois suivants est supérieur à Min MOS

> _Quantité de commande suggérée = (Quantité minimale - Solde final + Demande non satisfaite)_

21. **Calculs par lots :**

> Vous trouverez ci-dessous les étapes pour toutes les allocations de lots :

1. **Calculs FEFO :**

> Nous calculons d'abord le FEFO non alloué, c'est-à-dire que nous calculons la quantité totale restante de la consommation finale et l'ajustement total qui sera utilisé dans le cas des calculs du FEFO et pour lequel nous n'avons pas les informations de lot. Ainsi, le FEFO non alloué est calculé en fonction de deux conditions différentes

1. Si la somme du réglage total et du réglage automatique est inférieure à 0, alors le FEFO non alloué est calculé comme la différence entre la consommation finale et la somme du réglage manuel et du réglage automatique.

> **Formule :**
>
> FEFO non alloué = Consommation finale - (Ajustement manuel + Ajustement automatique)

2. Si la somme de l’ajustement et de l’ajustement national est supérieure à 0 alors le FEFO non alloué est le même que celui de la consommation finale.

> **Formule :**
>
> FEFO non alloué = Consommation finale
>
> Nous trions tous les lots en fonction de la date de péremption par ordre croissant, c'est-à-dire que nous trions les lots dans l'ordre qui expire en premier
>
> On boucle ensuite tous les lots pour faire les calculs FEFO
>
> Nous calculons le solde d'ouverture d'un lot qui est le même que celui de clôture du même lot du mois précédent. Et si le lot est créé alors le solde d'ouverture est considéré comme 0.
>
> **Formule :**
>
> Solde d'ouverture du lot nouvellement créé = 0
>
> Solde d'ouverture des lots restants = Solde de clôture
>
> On calcule ensuite la Quantité de stock Expiré qui est égale au Solde de Fin du même lot du mois précédent et n'est calculée que lorsque la date de péremption du lot est la même que celle du mois en cours sinon elle est 0.
>
> **Formule :**
>
> Stock expiré (Si la date d'expiration est la même que celle de la date actuelle) = Solde de fin
>
> Stock expiré (sinon) = 0
>
> Nous calculons ensuite le solde final temporaire. Le solde final temporaire est calculé comme la somme du solde d’ouverture, du total des expéditions, du total des ajustements et de la déduction de la consommation finale totale et des stocks expirés.
>
> **Formule :**
>
> Solde de fin temporaire = Solde d'ouverture + Quantité d'expédition + Quantité d'ajustement - Quantité de consommation - Stock expiré
>
> Nous calculons ensuite le montant du solde final qui est calculé en fonction de deux conditions différentes

1. > Si le solde de fin temporaire est supérieur ou égal au FEFO non alloué, alors le solde de fin est égal à la différence entre le solde de fin temporaire et le FEFO non alloué. Dans ce cas également, nous rendons le FEFO non alloué à 0 puisque nous avons alloué toute la quantité au lot.

> **Formule :**
>
> Solde de fin = Solde de fin temporaire - FEFO non alloué
>
> FEFO non alloué = 0

2. > Si le solde final temporaire est inférieur au FEFO non alloué, alors le solde final est égal à 0 puisque nous consommerons entièrement ce lot. De plus, nous déduisons ensuite le temp CB du FEFO non alloué puisque nous avons consommé autant de quantité.

> **Formule :**
>
> Solde final = 0
>
> FEFO non alloué = FEFO non alloué - Solde de fin temporaire
>
> Nous répétons ce processus pour chaque lot dans l'ordre de leur date de péremption.

1. > **Calculs LEFO :**

> Nous calculons d'abord le LEFO non alloué, c'est-à-dire que nous calculons la quantité totale restante de la consommation finale et l'ajustement total qui sera utilisé dans le cas des calculs LEFO et pour lequel nous n'avons pas les informations de lot. Ainsi, le LEFO non alloué est calculé en fonction de deux conditions différentes

1. Si la somme du réglage manuel et du réglage automatique est supérieure à 0, alors le LEFO non alloué est calculé comme la différence entre 0 et la somme du réglage manuel et du réglage automatique.

> **Formule :**
>
> LEFO non alloué = 0 - (Ajustement manuel + Ajustement automatique)

2. Si la somme du réglage manuel et du réglage automatique est inférieure à 0, alors le LEFO non alloué est 0.

> **Formule :**
>
> LEFO non alloué = 0

3. Si LEFO non alloué n'est pas égal à 0 alors on continue sinon on interrompt.

> Nous trions tous les lots en fonction de la date de péremption par ordre décroissant, c'est-à-dire que nous trions les lots dans l'ordre qui expire en premier
>
> On boucle ensuite tous les lots pour faire les calculs LEFO
>
> Nous calculons ensuite le solde final temporaire. Le solde de fin temporaire est le même que celui de fin du solde du lot après les calculs FEFO.
>
> **Formule :**
>
> Temp Ending Balance = Solde de fin après calculs FEFO
>
> Nous calculons ensuite le montant du solde final qui est calculé en fonction de deux conditions différentes

1. Si le solde de fin temporaire est supérieur ou égal au LEFO non alloué, le solde de fin est égal à la différence entre le solde de fin temporaire et le LEFO non alloué. Dans ce cas également, nous rendons le LEFO non alloué à 0 puisque nous avons alloué toute la quantité au lot.

> **Formule :**
>
> Solde de fin = Solde de fin temporaire - LEFO non alloué
>
> LEFO non alloué = 0

2. Si le solde final temporaire est inférieur au LEFO non alloué, le solde final est égal à 0 puisque nous consommerons entièrement ce lot. De plus, nous déduisons ensuite la température CB du LEFO non alloué puisque nous avons consommé autant de quantité.

> **Formule :**
>
> Solde final = 0
>
> LEFO non alloué = LEFO non alloué - Solde de fin temporaire
>
> Nous répétons ce même processus pour le reste des lots jusqu'à ce que le LEFO non alloué ne soit pas égal à 0.

## Module de planification des approvisionnements : liste des problèmes QAT

### Qualité des données

1. > Données de consommation réelles récentes manquantes (au cours des \<%X %\> derniers mois)

<!-- fin de liste -->

1. **Suggestion :** Veuillez fournir la consommation réelle dans la région \<%REGION %\> pour le mois de \<%DT %\>.

2. **Logique :** QPL vérifiera la consommation réelle des trois derniers mois et du mois en cours. Si la consommation réelle des trois derniers mois et du mois en cours est manquante, le problème est signalé.

<!-- fin de liste -->

1. Entrées d'inventaire récentes manquantes (au cours des \<%X%\> derniers mois)
    1. **Suggestion :** Veuillez fournir l'inventaire des stocks dans la région \<%REGION %\> pour le mois de \<%DT%\>.

    2. **Logique :** QPL vérifiera les stocks des trois derniers mois et du mois en cours. Si le stock des trois derniers mois et du mois en cours est manquant, le problème est signalé.

2. Manque d’intrants de consommation réelle récents pendant des mois
    1. **Suggestion :** Veuillez fournir la consommation réelle dans la région \<%REGION %\> pour le mois de \<%DT %\>.

    2. **Logique :**
        1. QPL vérifiera les entrées de consommation réelles pour le mois en cours (considéré comme t) et pour le mois qui sera le mois en cours moins deux mois (considéré comme t-2), c'est-à-dire t et t-2 si les deux mois ont une consommation réelle et le mois en cours moins un mois (considéré comme t-1), c'est-à-dire que t-1 n'a pas de consommation réelle. Dans ce cas, le problème est signalé.

        2. QPL vérifiera les entrées de consommation réelles pour le mois en cours moins un mois (considéré comme t-1) et pour le mois qui sera le mois en cours moins trois mois (considéré comme t-3), c'est-à-dire t-1 et t-3 si les deux mois ont une consommation réelle et le mois en cours moins deux mois (considéré comme t-2), c'est-à-dire que t-2 n'a pas de consommation réelle. Dans ce cas, le problème est signalé.

### Calendrier d'approvisionnement

1. Les expéditions ont des dates de réception antérieures à plus de \<%X%\> jours.
    1. **Suggestion :** Veuillez vérifier que l'envoi \<%SHIPMENT_ID %\> a été reçu et mettre à jour la date de réception ou l'état de l'envoi.

    2. **Logique :** QPL vérifiera la date de réception de toutes les expéditions et si la date de réception est dépassée et a également dépassé la période tampon, le problème est signalé. Par exemple, le délai tampon pour ce problème est de 14 jours. Ainsi, si la date de réception de l'envoi plus les jours tampon sont dépassés, le problème est signalé pour chaque envoi.

2. L'envoi n'a pas été soumis depuis plus de \<%X%\> jours depuis la date cible.
    1. **Suggestion :** Compte tenu des délais de livraison, l'expédition \<%SHIPMENT_ID%\> aurait dû être soumise à ce jour. Veuillez revérifier pour vous assurer que le statut ou la date de réception est exact.

    2. **Logique :** QPL vérifiera la date de soumission pour toutes les expéditions et si la date de soumission est dépassée et a également dépassé la période tampon, le problème est signalé. Par exemple, le temps tampon pour ce problème est de 3 jours. Par conséquent, si la date de soumission de l'envoi ainsi que les jours tampon sont déjà passés, le problème est signalé pour chaque envoi.

### Planification des approvisionnements

1. Aucune consommation prévue dans \<%X %\> mois dans le futur
    1. **Suggestion :** Veuillez fournir la consommation prévue dans la région \<%REGION %\> pour le mois de \<%DT %\>.

    2. **Logique :** QPL vérifiera la consommation prévue pour les 18 prochains mois. Si la consommation prévue pour l’un des mois manque, le problème est signalé. Le problème passe à l’état de conformité si et seulement si tous les 18 mois ont prévu une consommation.

2. La prévision dynamique n'est pas utilisée pour les groupes de produits ARV
    1. **Suggestion :** Veuillez vérifier les données de consommation dans la région \<%REGION%\> pendant la période \<%DT%\> car nous encourageons les prévisions avec des valeurs mensuelles dynamiques, montrant que des facteurs tels que l'échelle du programme ou la saisonnalité ont été pris en compte.

    2. **Logique :** QPL vérifiera si l'unité de planification du programme appartient au groupe de produits ARV, puis QPL vérifiera la consommation prévue pour les 18 mois à venir si quatre mois consécutifs au cours de la période de 18 mois à venir ont la même quantité de consommation prévue, alors le problème est signalé.

3. La prévision dynamique n'est pas utilisée pour les groupes de produits PALUDISME
    1. **Suggestion :** Veuillez vérifier les données de consommation dans la région \<%REGION %\> pendant la période \<%DT%\> car nous encourageons les prévisions avec des valeurs mensuelles dynamiques, montrant que des facteurs tels que l'échelle du programme ou la saisonnalité ont été pris en compte.

    2. **Logique :** QPL vérifiera si l'unité de planification du programme appartient au groupe de produits PALUDISME, puis QPL vérifiera la consommation prévue pour les 18 mois à venir si quatre mois consécutifs au cours de la période de 18 mois à venir ont la même quantité de consommation prévue, alors le problème est signalé.

4. La prévision dynamique n'est pas utilisée pour les groupes de produits VMMC
    1. **Suggestion :** Veuillez vérifier les données de consommation dans la région \<%REGION%\> pendant la période \<%DT%\> car nous encourageons les prévisions avec des valeurs mensuelles dynamiques, montrant que des facteurs tels que l'échelle du programme ou la saisonnalité ont été pris en compte.

    2. **Logique :** QPL vérifiera si l'unité de planification du programme appartient au groupe de produits VMMC, puis QPL vérifiera la consommation prévue pour les 18 mois à venir si quatre mois consécutifs au cours de la période de 18 mois à venir ont la même quantité de consommation prévue, alors le problème est signalé.

5. **Le plan d'approvisionnement ne suit pas les paramètres minimum/maximum**
    1. **Suggestion :** **Réévaluez le plan d'approvisionnement pour répondre aux paramètres Min/Max. En cas de surstock, envisagez de retarder/annuler les expéditions, de vérifier les expirations futures ou de faire don de stock. En cas de sous-stockage, envisagez de planifier et de commander, d'accélérer ou d'augmenter la quantité d'expédition.**

    2. **Logique : QPL vérifiera si chaque unité de planification** est en surstock ou en sous-stock à tout moment au cours des 18 prochains mois en fonction des paramètres minimum et de réapprovisionnement définis au niveau de chaque programme. QAT comptera ensuite le nombre de mois pendant lesquels l'unité de planification est **surapprovisionnée et sous-approvisionnée** et la subdivisera en deux fenêtres de temps différentes : les mois compris dans le délai de livraison (1 à 6 mois) et ceux compris dans la fenêtre de planification (7 à 18 mois). Le QPL indiquera également le nombre d’expéditions reçues au cours des 1 à 6 prochains mois et des 7 à 18 prochains mois.

6. **Rupture de stock dans les 1 à 6 prochains mois/Rupture de stock dans les 7 à 18 prochains mois**
    1. **Suggestion : Envisagez de planifier et de commander, d'accélérer ou d'augmenter la quantité d'expédition. Communiquer les ruptures de stock potentielles avec les parties prenantes concernées.**

    2. **Logique : QPL vérifiera si chaque unité de planification** est en rupture de stock (zéro MOS) à tout moment au cours des 18 prochains mois. QAT comptera ensuite le nombre de mois pendant lesquels l'unité de planification est en rupture de stock et la subdivisera en deux fenêtres temporelles différentes : les mois compris dans le délai de livraison (1 à 6 mois) et ceux compris dans la fenêtre de planification (7 à 18 mois). Le QPL indiquera également le nombre d’expéditions reçues au cours des 1 à 6 prochains mois et des 7 à 18 prochains mois.

### Autre (problèmes manuels)

1. > **Il s'agit de questions ou de clarifications spécifiques saisies manuellement par le réviseur du plan d'approvisionnement qui ne sont pas automatiquement signalées par QAT. La description du problème, la suggestion et la criticité sont déterminées par l'examinateur du plan d'approvisionnement. QAT n'applique aucune logique spécifique pour ce problème, car il doit être ajouté, mis à jour et résolu manuellement par le réviseur du plan d'approvisionnement.**

## Module de planification des approvisionnements : autres rapports QAT

1. **WAPE (pourcentage d'erreur absolu pondéré)**

> Le WAPE (Weighted Absolute Percentage Error) est utilisé pour calculer l'erreur de prévision. Ce calcul est utilisé dans les rapports d'erreurs de prévision qui aident les propriétaires de plans d'approvisionnement à examiner les erreurs de prévision afin de surveiller la solidité de leurs prévisions. La formule WAPE utilise les données des 3 à 12 mois précédents en fonction de la sélection dans la liste déroulante « Fenêtre temporelle ».
>
> WAPE divise la somme des différences absolues par la somme des valeurs réelles pour une fenêtre temporelle particulière. La fenêtre de temps peut être 3,6,9 ou 12
>
> **Formule :**
>
> WAPE=((Abs(consommation réelle mois 1-consommation prévue mois 1)+ Abs(consommation réelle mois 2-consommation prévue mois 2)+ Abs(consommation réelle mois 3-consommation prévue mois 3)+ Abs(consommation réelle mois 4-consommation prévue mois 4)+ Abs(consommation réelle mois 5-consommation prévue mois 5)+ Abs(consommation réelle mois 6-consommation prévue mois 6)) / (Somme de toutes les consommations réelles au cours des 6 derniers mois))
>
> **Remarque :** Fenêtre de temps considérée comme 6 mois

2. **Frais d'expédition**

> C'est le coût total requis pour recevoir la commande à l'entrepôt
>
> **Formule :**
>
> Coût total de l'expédition = (Coût du produit + Coût du transport) \* taux de conversion en USD

3. **Coût de l'inventaire**

> Ce calcul nous fournit le coût du produit disponible
>
> **Formule :**
>
> Coût du stock = solde final\* prix catalogue

4. **Stock moyen**

> **Formule :**
>
> Stock moyen = somme (solde final pour ‘n’ mois) / n
>
> **Remarque :** « n » est le nombre de mois

5. **Tournées d'inventaire**

> C'est le rapport entre la consommation et le stock moyen. L'utilisateur peut choisir d'afficher le tableau de deux manières : par pays ou par catégorie PU. Peut être une sélection multiple pour les pays ou la catégorie PU, calcul de niveau le plus élevé (agrégation/moyenne de chaque PU sous programme ou de chaque programme qui contient cette catégorie PU). Ensuite, nous calculerons les tours pour chaque unité de planification dans le cadre de ce programme.
>
> **Formule : **

**Tournées de stock planifiées (IT)**

**Au niveau PU**

> Le calcul se fait en déterminant les mois de stock possibles pour chaque mois sur 12 mois si les règles d'inventaire ont parfaitement fonctionné compte tenu du MIN et de l'intervalle de réapprovisionnement de l'unité de planification.
>
> Consommation = 1 MOS/mois ; Consommation totale sur période = 12 MOS
>
> Le MOS moyen est calculé en fonction du MIN et de l'intervalle de réapprovisionnement
>
> Par exemple :

1\. Si le MIN est de 3 et que la commande est de 9 et que le premier mois est un mois de commande alors :

> une. Le MOS moyen sur 12 mois serait de 7,25
>
> b. La rotation des stocks prévue est la consommation totale 12 divisée par le nombre moyen de mois de stock calculé sur 12 mois. Ainsi 12 /7,25 = 1,7

| Intervalle de réapprovisionnement | Mois 1 | Mois 2 | Mois 3 | Mois 4 | Mois 5 | Mois 6 | Mois 7 | Mois 8 | Mois 9 | Mois 10 | Mois 11 | Mois 12 | Total mois |
| ---------------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- | ------------ |
| 12 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 78 |
| 11 | 1 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 67 |
| 10 | 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 58 |
| 9 | 3 | 2 | 1 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 51 |
| 8 | 4 | 3 | 2 | 1 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 46 |
| 7 | 5 | 4 | 3 | 2 | 1 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 43 |
| 6 | 6 | 5 | 4 | 3 | 2 | 1 | 6 | 5 | 4 | 3 | 2 | 1 | 42 |
| 5 | 2 | 1 | 5 | 4 | 3 | 2 | 1 | 5 | 4 | 3 | 2 | 1 | 33 |
| 4 | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1 | 30 |
| 3 | 3 | 2 | 1 | 3 | 2 | 1 | 3 | 2 | 1 | 3 | 2 | 1 | 24 |
| 2 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 18 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 12 |

**Au niveau du programme :**

> MODE (Tournées d'inventaire planifiées de toutes les unités de planification dans le cadre d'un programme spécifique)
>
> **Au niveau du pays et/ou de la catégorie PU** :

MODE (Tournées d'inventaire planifiées de toutes les unités de planification dans un pays spécifique/catégorie PU)

**Tournées réelles des stocks (IT)**

**Au niveau PU**

1. Consommation totale des 12 derniers mois / Stock moyen disponible au cours des 12 derniers mois

> **Au niveau du programme**

1\. La première option consiste à rechercher un mode.

2\. Si le nombre de valeurs MODE \< 3 (réglage variable), QAT utilise AVG, si le nombre de valeurs MODE est \> 3 (réglage variable), alors

3\. Le mode sera déterminé si la valeur apparaît dans au moins 20 % (paramètre variable) du nombre total d'unités de planification du programme. (Exemple : le programme contient 100 PU, 20 d'entre eux ont des tours = 1,2 et les autres ont tous des tours différents ; donc les tours du programme seront de 1,2)

4\. Si la condition ci-dessus (20 %) est trouvée plusieurs fois dans l'ensemble de données, QAT doit utiliser l'inv la PLUS FAIBLE. mode tours de l'ensemble (Exemple :, le programme contient 100 PU ; 60 PU ont des tours différents ; 20 PU

> avoir des tours inv = 1,2, 20 autres PU ont des inv. tours = 2,5 ; QAT affichera 1.2 comme inv. tours pour ce programme)

5\. Si aucun mode définitif ne peut être trouvé sur la base des règles ci-dessus, alors les tours d'investissement au niveau du programme seront la moyenne de tous les tours d'inventaire PU dans le cadre de ce programme.

**Au niveau du pays et/ou de la catégorie PU**

1\. La première option consiste à rechercher un mode.

2\. Si le nombre de valeurs MODE \< 3 (réglage variable), QAT utilise AVG, si le nombre de valeurs MODE est \> 3 (réglage variable), alors

3\. Le mode sera déterminé si la valeur apparaît dans au moins 20 % (paramètre variable) du nombre total d'unités de planification de ce pays (ou catégorie PU).

4\. Règle : si la condition ci-dessus est trouvée plusieurs fois dans l'ensemble de données, QAT doit utiliser l'inv la PLUS FAIBLE. mode de tours du groupe (par exemple, le pays contient 1 000 PU ; 600 PU ont des tours différents ; 200 PU

ont des tours inv = 1,6, 200 autres PU ont des inv. tours = 2,2 ; QAT affichera 1,6 comme inv. tourne pour

ce pays/catégorie PU)

5\. Règle : Si aucun mode définitif ne peut être trouvé sur la base des règles ci-dessus, alors les tours d'investissement au niveau de la catégorie Pays/PU seront la moyenne de tous les tours d'inventaire PU dans ce pays/catégorie PU.

\*\* \*\*

**Remarque** : La consommation réelle précède la consommation prévue dans le calcul si disponible

6. **Délai total de l'agent d'approvisionnement :**

> Il s'agit du temps total nécessaire pour recevoir un produit en entrepôt depuis la date de planification de la commande. Cela dépend également du mode d'expédition (maritime ou aérien). Ce calcul est utilisé pour calculer la date de livraison prévue afin que l'utilisateur puisse commander des produits avant la rupture de stock.
>
> **Formule :**
>
> Délai de livraison total de l'agent d'approvisionnement (par avion) = Délai de livraison prévu pour la soumission en mois + Soumis pour le délai de livraison approuvé en mois + Approuvé pour le délai d'expédition en mois + Expédié pour le délai d'arrivée en mois (par avion) + Arrivé pour le délai de livraison en mois
>
> Délai de livraison total de l'agent d'approvisionnement (par mer) = Délai de livraison prévu pour la soumission en mois + Soumis pour le délai de livraison approuvé en mois + Approuvé pour le délai d'expédition en mois + Expédié pour le délai d'arrivée en mois (par mer) + Arrivé pour le délai de livraison en mois

7. **Rapport sur les expirations :**

> Ce rapport calcule la quantité expirée pour chaque unité de planification ainsi que le numéro de lot lié pour afficher les dates d'expiration. Sont également inclus le coût total d’expiration des produits périmés.
>
> **Formule :**
>
> Coût total d'expiration = Quantité expirée \* Prix unitaire du produit depuis l'expédition (si le lot ne provient pas de l'expédition, le prix catalogue par défaut est utilisé)

## Module de prévision : prévisions d'arbres

1. **Nœud d'agrégation**

> La valeur du nœud d'agrégation pour un mois est calculée comme la somme des valeurs des nœuds enfants pour ce même mois
>
> **Formule :**
>
> Valeur du nœud pour un mois = Somme (Valeurs des nœuds enfants)

1. **Nœud numérique**

> La valeur du nœud numérique pour un mois est définie au nœud.
>
> **Formule :**
>
> Valeur du nœud pour un mois = Valeur définie au nœud
>
> Il existe trois types de modélisation/transfert applicables
>
> **a. Numéro linéaire : **
>
> Si une modélisation numérique linéaire est appliquée, la valeur de ce nœud est augmentée ou diminuée d'une quantité mensuelle fixe.
>
> Si un transfert de nombre linéaire est appliqué, la valeur de ce nœud est diminuée à partir de ce nœud et la même quantité est augmentée dans le nœud transféré.

- **Formule de modélisation :**

> Valeur d'un nœud pour un mois = Valeur définie au nœud +/- Quantité fixe, mensuelle

- **Formule de transfert :**

> Valeur du transfert depuis le nœud pour un mois = Valeur définie au nœud - quantité mensuelle fixe
>
> Valeur du transfert vers le nœud pour un mois = Valeur définie au nœud + quantité mensuelle fixe

2. > **Pourcentage linéaire : **

> Si une modélisation en pourcentage linéaire est appliquée, un pourcentage du mois de départ est augmenté ou diminué à partir de chaque mois.
>
> Si un transfert en pourcentage linéaire est appliqué, un pourcentage du mois de départ est diminué à partir de ce nœud et le même montant est augmenté dans le nœud transféré pour chaque mois.

- **Formule de modélisation :**

> Valeur d'un nœud pour un mois = Valeur définie au nœud +/- Pourcentage de la valeur du mois de départ

- **Formule de transfert :**

> Valeur du transfert depuis le nœud pour un mois = Valeur définie au niveau du nœud - Pourcentage de la valeur du mois de départ
>
> Valeur du transfert vers le nœud pour un mois = Valeur définie au niveau du nœud + Pourcentage de la valeur du mois de départ du transfert depuis le nœud

3. > **Pourcentage exponentiel : **

> Si une modélisation de pourcentage exponentiel est appliquée, un pourcentage de la valeur du mois précédent est augmenté ou diminué à partir de chaque mois.
>
> Si un transfert en pourcentage exponentiel est appliqué, un pourcentage de la valeur du mois précédent est diminué à partir de ce nœud et le même montant est augmenté dans le nœud transféré pour chaque mois.

- **Formule de modélisation :**

> Valeur d'un nœud pour un mois = Valeur définie au nœud +/- Pourcentage de la valeur du mois précédent

- **Formule de transfert :**

> Valeur du transfert depuis le nœud pour un mois = Valeur définie au nœud - Pourcentage de la valeur du mois précédent
>
> Valeur du transfert vers le nœud pour un mois = Valeur définie au nœud + Pourcentage de la valeur du mois précédent

1. > **Nœud de pourcentage**

> La valeur du nœud de pourcentage est calculée en pourcentage de la valeur du nœud parent
>
> **Formule :**
>
> Valeur du nœud pour un mois = (Valeur définie au nœud \* Valeur du nœud parent/100)
>
> Il n'y a qu'un type de modélisation/transfert qui peut être appliqué

1. > **Linéaire (point de %) : **

> Si une modélisation linéaire (points de %) est appliquée, la valeur est calculée comme la somme du pourcentage du nœud et de la valeur en pourcentage linéaire (points de %) du nœud parent.
>
> Si un transfert de nombre linéaire est appliqué, la valeur en pourcentage de ce nœud est diminuée à partir de ce nœud et la même quantité est augmentée dans le nœud transféré.

- **Formule de modélisation :**

> Valeur d'un nœud pour un mois = (Valeur définie au nœud +/- Valeur en % linéaire) \* Valeur du nœud du parent / 100

- **Formule de transfert :**

> Valeur du transfert depuis le nœud pour un mois = (Valeur définie au nœud - Valeur en % linéaire) \* Valeur du nœud du parent / 100
>
> Valeur du transfert vers le nœud pour un mois = (Valeur définie au nœud + Valeur en % linéaire) \* Valeur du nœud du parent / 100

1. > **Nœud d'unité de prévision**

> La valeur du nœud de pourcentage est calculée en pourcentage de la valeur du nœud parent en fonction des paramètres de l'unité de prévision.
>
> **Formule :**
>
> Valeur du nœud pour un mois = (Valeur définie au nœud \* Valeur du nœud parent/100)
>
> Il n'y a qu'un type de modélisation/transfert qui peut être appliqué

1. > **Linéaire (point de %) : **

> Si une modélisation linéaire (points de %) est appliquée, la valeur est calculée comme la somme du pourcentage du nœud et de la valeur en pourcentage linéaire (points de %) du nœud parent.
>
> Si un transfert de nombre linéaire est appliqué, la valeur en pourcentage de ce nœud est diminuée à partir de ce nœud et la même quantité est augmentée dans le nœud transféré.

- **Formule de modélisation :**

> Valeur d'un nœud pour un mois = (Valeur définie au nœud +/- Valeur en % linéaire) \* Valeur du nœud du parent / 100

- **Formule de transfert :**

> Valeur du transfert depuis le nœud pour un mois = (Valeur définie au nœud - Valeur en % linéaire) \* Valeur du nœud du parent / 100
>
> Valeur du transfert vers le nœud pour un mois = (Valeur définie au nœud + Valeur en % linéaire) \* Valeur du nœud du parent / 100

1. > **Nœud d'unité de planification**

> La valeur du nœud de pourcentage est calculée en pourcentage de la valeur du nœud parent en fonction des paramètres de l'unité de planification.
>
> **Formule :**
>
> Valeur du nœud pour un mois = (Valeur définie au nœud \* Valeur du nœud parent/100)
>
> Il n'y a qu'un type de modélisation/transfert qui peut être appliqué

1. > **Linéaire (point de %) : **

> Si une modélisation linéaire (points de %) est appliquée, la valeur est calculée comme la somme du pourcentage du nœud et de la valeur en pourcentage linéaire (points de %) du nœud parent.
>
> Si un transfert de nombre linéaire est appliqué, la valeur en pourcentage de ce nœud est diminuée à partir de ce nœud et la même quantité est augmentée dans le nœud transféré.

- **Formule de modélisation :**

> Valeur d'un nœud pour un mois = (Valeur définie au nœud +/- Valeur en % linéaire) \* Valeur du nœud du parent / 100

- **Formule de transfert :**

> Valeur du transfert depuis le nœud pour un mois = (Valeur définie au nœud - Valeur en % linéaire) \* Valeur du nœud du parent / 100
>
> Valeur du transfert vers le nœud pour un mois = (Valeur définie au nœud + Valeur en % linéaire) \* Valeur du nœud du parent / 100

## Module de prévision : Prévision de consommation

1. > **Interpoler**

> QAT interpole en trouvant les valeurs les plus proches de chaque côté (avant ou après le blanc), calcule la ligne droite entre elles et utilise cette formule de ligne droite pour calculer la valeur du ou des blancs. Notez que QAT n’interpolera pas les mois où la consommation réelle est nulle. QAT n'interpolera que s'il y a au moins un point de données avant et un point de données après la ou les valeurs vides.
>
> Mathématiquement :

- Où x représente les mois, et y représente la consommation réelle,

- Où les valeurs de données connues sont (x0, y0) et (x1, y1)

- Où les valeurs de données inconnues sont (x, y)

- La formule de la ligne interpolée est

> **Formule :**
>
> y = y0+(x-x0)\*(y1-y0)/(x1-x0)

2. > **Taux de rupture de stock**

> Le taux de rupture de stock est calculé en pourcentage du rapport entre le taux de rupture de stock en jours et le nombre de jours dans un mois.
>
> **Formule :**
>
> Taux de rupture de stock = (Taux de rupture de stock (jours)/Nombre de jours dans le mois) \* 100

3. > **Consommation ajustée**

> La consommation ajustée est calculée en fonction de la consommation réelle, du taux de déclaration, du taux de rupture de stock (jours), du nombre de jours dans le mois en utilisant la formule ci-dessous.
>
> **Formule :**
>
> Si la consommation réelle est vide alors,
>
> Consommation ajustée = ""
>
> Sinon,
>
> Consommation ajustée = (Consommation réelle/Taux de déclaration/(1-(Taux de rupture de stock (jours)/Nombre de jours dans le mois)))\*100

4. > **Facteur de conversion pour l'écran de saisie et de réglage des données**

> Si la consommation réelle est en unité de prévision alors
>
> Facteur de conversion = 1/Facteur de conversion de l'unité de planification
>
> Si la consommation réelle est en unités de planification alors
>
> Facteur de conversion = 1
>
> Si la consommation réelle est dans une autre unité alors
>
> Facteur de conversion = 1/Conversion en FU (entré par l'utilisateur)

5. > **Consommation ajustée en termes d'unité de planification**

> La consommation ajustée en termes d'unité de planification est calculée en multipliant la consommation ajustée par le facteur de conversion
>
> **Formule :**
>
> Consommation ajustée (Unité de planification) = Consommation ajustée \* Facteur de conversion

6. > **Erreur de prévision (%)**

<!-- fin de liste -->

- **WAPE** (Weighted Absolute Percentage Error) divise la somme des différences absolues par la somme des valeurs réelles pour une fenêtre de temps particulière. La fenêtre de temps est de 6 mois.

> **Formule :**
>
> WAPE = ((Abs(consommation réelle mois 1-consommation prévue mois 1)+ Abs(consommation réelle mois 2-consommation prévue mois 2)+ Abs(consommation réelle mois 3-consommation prévue mois 3)+ Abs(consommation réelle mois 4-consommation prévue mois 4)+ Abs(consommation réelle mois 5-consommation prévue mois 5)+ Abs(consommation réelle mois 6-consommation prévue mois 6)) / (Somme de toutes les consommations réelles au cours des 6 derniers mois))

- **RMSE (**Erreur quadratique moyenne) est calculé comme la racine carrée du rapport de la somme des carrés de la différence entre les prévisions et le nombre réel d'observations.

> **Formule :**
>
> RMSE = Racine carrée \[ Somme(Carré(Prévision – Réel)) / Nombre d'observations \]

- **MAPE (**Pourcentage d'erreur absolu moyen) est calculé comme le rapport de 1 est au nombre d'observations multiplié par la somme de la différence absolue entre le réel et la prévision et la multiplication du réel absolu et 100.

> **Formule :**
>
> MAPE = (1/Nombre d'observations) \* Somme (Absolu (réel – prévision) / Absolu (réel)) \* 100

- **MSE** (Erreur quadratique moyenne) est calculée comme la multiplication du rapport de 1 au nombre d'observations et la somme du carré de la différence entre le réel et le prévu.

> **Formule :**
>
> MSE = (1/Nombre d'observations) \* Somme (Carré (réel – prévision))

- **R au carré**

> R2 = 1 – \[régression somme carrée (SSR) / somme totale des carrés (SST)\]. La somme au carré des résidus pour la régression est la somme de ses résidus au carré, et la somme totale des carrés est la somme de la distance entre les données et la moyenne, le tout au carré. Par « somme des carrés », nous entendons la somme des écarts au carré entre les valeurs **réelles** et la moyenne (SST), ou entre les valeurs **prédites** et la moyenne (SSR). La valeur R2 est toujours un nombre compris entre 0 et 1. R2 mesure l'ajustement d'une droite de régression à une série d'observations historiques avec des valeurs plus proches de 1, indiquant une correspondance plus forte entre les valeurs réelles et prédites (modèle de régression). Il ne s’agit pas d’une mesure d’erreur et ne doit pas être utilisée seule pour évaluer la pertinence d’une prédiction, mais en combinaison avec d’autres mesures d’erreur et avec la connaissance du programme par l’utilisateur.
>
> **Formule :**
>
> R2= 1- \[SSR / SST\]

7. **Importer à partir du plan d'approvisionnement QAT**

<!-- fin de liste -->

- QAT permet aux utilisateurs d'importer les données réelles de leurs plans d'approvisionnement dans une prévision de consommation.
  - Tout d'abord, un utilisateur sélectionnera un programme de prévision et une plage de dates pour la consommation réelle importée.
    - Remarque : une bascule s'affiche si toutes les unités de planification non mappées ne doivent pas être importées. Ceci est utile s'il existe de nombreuses unités de planification et que vous n'en importez que quelques-unes. Après avoir mappé les quelques unités de planification sélectionnées, cliquez sur le bouton « Ne pas importer toutes les unités de planification non mappées », qui sélectionnera alors automatiquement les unités de planification restantes à ne pas importer.

  - Deuxièmement, un programme de plan d'approvisionnement et une version du plan d'approvisionnement seront sélectionnés. Ceci est utile si un utilisateur souhaite télécharger une version spécifique du plan d’approvisionnement et pas seulement la dernière.
    - Remarque : un utilisateur peut sélectionner plusieurs programmes à partir desquels importer.

  - Troisièmement, après avoir sélectionné un programme de plan d'approvisionnement, les unités de planification du plan d'approvisionnement seront affichées à côté de la liste déroulante des unités de planification des prévisions.
    - Remarque : La liste déroulante Unité de planification des prévisions permet à l'utilisateur de sélectionner une unité de planification des prévisions spécifique ou de ne pas importer cette unité de planification du plan d'approvisionnement spécifique.

  - Après avoir sélectionné suivant, un % du plan d'approvisionnement doit maintenant être saisi.
    - Une info-bulle s'affiche dans la colonne supérieure indiquant « Pourcentage de la quantité de consommation réelle mensuelle du programme Plan d'approvisionnement qui sera importée dans le programme de prévision.

    - Ceci permet d'utiliser un pourcentage spécifique si les 100 % ne sont pas nécessaires.

## Module de prévision : rapports et résultats

### Comparez et sélectionnez

1. **Comparer aux prévisions de consommation** s'affiche uniquement lorsqu'il existe à la fois des prévisions d'arbre et de consommation. Il affiche les valeurs comme

<!-- fin de liste -->

-> Supérieur de H% à la prévision de consommation la plus élevée ou

-> Inférieur de L% à la prévision de consommation la plus basse

> **Formule :**
>
> H% = (Somme (Prévision de l'arbre sélectionné)-Somme (Prévision de consommation))/Somme (Prévision de consommation)
>
> L% = (Somme (Prévision de l'arbre sélectionné) -Somme (Prévision de consommation))/Somme (Prévision de consommation)

2. **Arbres à sélection multiple**

> Dans l'écran de comparaison et de sélection, les utilisateurs peuvent sélectionner plusieurs prévisions d'arbres comme prévision finale, qui regrouperont les quantités de prévisions mensuelles. Les utilisateurs ne peuvent pas sélectionner plusieurs prévisions de consommation ou une combinaison d'arbres et de prévisions de consommation comme prévision finale.
>
> Remarque : L'erreur de prévision d'extrapolation de consommation et l'erreur de prévision de comparaison et de sélection correspondront sur les deux écrans même si la plage historique des données est limitée.

### Résumé des prévisions

1. > **Stock ou demande non satisfaite**

> Le stock ou la demande non satisfaite est calculé comme la différence entre la somme du stock et des expéditions existantes pour une unité de planification et la consommation totale prévue
>
> **Formule :**
>
> Stock ou demande non satisfaite = (Stock pour une unité de planification + Expéditions existantes pour une unité de planification) - (Consommation totale prévue)

2. > **Stock souhaité**

> Le stock souhaité est calculé comme le rapport de multiplication des mois de stock pour une unité de planification et de la consommation totale prévue par le nombre de mois dans la période de prévision.

**Formule :**

> Stock souhaité =((Mois de stock pour une unité de planification) \*(Consommation totale prévue) /(Nombre de mois dans la période de prévision))

3. > **Excédent/écart d'approvisionnement**

L'excédent d'approvisionnement est calculé comme la différence entre le stock et le stock souhaité

**Formule :**

Surplus d'approvisionnement = Stock ou demande non satisfaite - Stock souhaité

4. > **Approvisionnements nécessaires**

> Les achats nécessaires sont calculés en multipliant l'excédent/l'écart d'approvisionnement et le prix unitaire.

**Formule :**

Achats nécessaires = Excédent d'achat \* Prix unitaire

5. > **Frais de transport**

> Le coût du transport est calculé en multipliant le ratio du pourcentage de transport par 100 et la somme des achats nécessaires

**Formule :**

Coût de transport = Pourcentage de transport /100 \* Achat total nécessaire

6. > **Coût total**

Le coût total est calculé comme la somme des achats nécessaires et du coût du transport.

**Formule :**

Coût total = somme des achats nécessaires + coût du transport

## Module de planification et de prévision des approvisionnements : téléchargement de versions

La section ci-dessous détaille les différentes conditions recherchées par QAT lors de l'identification de conflits dans un téléchargement de version (pour un programme de plan d'approvisionnement et un programme de prévision).

L'exemple suivant sera utilisé tout au long de l'explication ci-dessous : Un utilisateur tente de télécharger la version locale 8 et la dernière version disponible sur le serveur est la version 10. Une fois les conflits résolus et l'utilisateur confirme, la version téléchargée sera la version 11. QAT compare les 3 versions différentes :

> **a. Serveur v8** (il s'agit de la version du serveur que l'utilisateur a téléchargée avant d'apporter des modifications)
>
> **b. Local v8** (il s'agit de la version que l'utilisateur a l'intention de télécharger)
>
> **c. Serveur v10** (il s'agit de la dernière version du serveur)

Selon le type de données, QAT compare les enregistrements réels ou compare les dates modifiées. Les enregistrements réels ne peuvent pas être comparés pour certaines données car celles-ci sont trop vastes et complexes.

<table>
  <thead>
    <tr class="header">
      <th>Les enregistrements réels sont comparés</th>
      <th>Les dates modifiées sont comparées</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <ul>
          <li>
            <p>SModule de planification des approvisionnements</p>
            <ul>
              <li>
                <p>
                  Consommation réelle/prévue, inventaire, ajustement, expédition
                  enregistrements
                </p>
              </li>
              <li>
                <p>QAT Liste des problèmes</p>
              </li>
              <li>
                <p>ERP Liaison d’expédition*</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Module de prévision</p>
            <ul>
              <li>
                <p>Paramètres de l'unité de planification</p>
              </li>
              <li>
                <p>Paramètres de version</p>
              </li>
              <li>
                <p>Prévisions sélectionnées</p>
              </li>
            </ul>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <p>Module de prévision</p>
            <ul>
              <li>
                <p>Aconsommation réelle, ajustements, extrapolation</p>
              </li>
              <li>
                <p>Tarbre</p>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> \* Pour la liaison ERP, avant la logique ci-dessous, QAT vérifie d'abord si l'envoi ERP est déjà lié à un autre programme. S'il est lié, alors QAT est surligné en rouge et n'autorise pas le téléchargement.

En utilisant la logique décrite ci-dessous (testant chaque condition dans un ordre séquentiel), QAT détermine si les données sont

-> **Nouvellement ajouté sur la version locale (Local v8)** ß Condition 1

-> **Nouvellement ajouté sur la version serveur (Serveur v10)** ß Condition 2

-> **Inchangé depuis la version précédente du serveur (Serveur v8)** ß Condition 3a

-> **Mise à jour sur la version locale (Local v8) sans conflits ß** Condition 3b

-> **Mise à jour sur la version serveur (Serveur v10) sans conflits** ßCondition 3c

-> **Ou, un conflit entre les versions locale et serveur.** ß Condition 3d

#### Condition 1 : Données nouvellement ajoutées dans la version locale 

Tout d'abord, QAT vérifie chaque point de données dans la version locale (Local v8) pour confirmer s'il s'agit de données nouvellement ajoutées. Si tel est le cas, les données <u> s'affichent en **vert** sur l'écran de téléchargement.</u>

**une. Serveur v8 - L'enregistrement n'existe pas**

**b. Local v8 - L'enregistrement existe**

**c. Serveur v10 - L'enregistrement n'existe pas**

Voici quelques exemples de cette condition :

1. > **Consommation (Planification des approvisionnements) :** Par exemple, il existe un enregistrement de consommation réelle dans la version locale v8 pour mai 2023, unité de planification A, unité de reporting alternative B, région X. QAT vérifie le serveur v10 et le serveur v8 pour voir s'il existe un enregistrement de consommation réelle en mai 2023, unité de planification A, unité de reporting alternative B, région X. Sinon, la v8 locale est la dernière.

2. > **Inventaire (Planification des approvisionnements) :** Par exemple, il existe un enregistrement d'inventaire dans la version locale v8 pour mai 2023, unité de planification A, unité de reporting alternative B, région X, source de données Y. QAT vérifie le serveur v10 et le serveur v8 pour voir s'il existe un enregistrement d'inventaire en mai 2023, unité de planification A, unité de reporting alternative B, région X, source de données Y. Sinon, la v8 locale est la dernière.

<!-- fin de liste -->

2. > **Ajustements, expéditions, QPL (Supply Planning) :** Étant donné que les ID ne sont attribués qu'après le téléchargement du plan d'approvisionnement, QAT vérifie les ID de chaque enregistrement dans la version locale 8 pour voir s'ils sont « 0 ». Les enregistrements portant l'ID « 0 » ont été nouvellement créés dans cette version locale, donc pour ces enregistrements, la version locale 8 est la dernière. QAT ne vérifie pas les versions du serveur.

3. > **Arbres (prévisions) :** Étant donné que les ID ne sont attribués qu'après le téléchargement de la prévision, QAT vérifie les ID de chaque arbre dans la version locale 8 pour voir s'ils sont « 0 ». Les arbres avec l'ID « 0 » ont été nouvellement créés dans cette version locale, donc pour ceux-ci, la v8 locale est la dernière. QAT ne vérifie pas les versions du serveur.

4. > **Paramètres de l'unité de planification (prévision) :** QAT vérifie si cet ID d'unité de planification est présent dans le serveur v8 et le serveur v10. Si l’ID de l’unité de planification n’existe pas dans l’un ou l’autre, la version locale 8 est la plus récente.

5. > **Données de consommation et extrapolation (prévision) :** QAT vérifie si les données de cette unité de planification et de cette région sont présentes dans le serveur v10 en fonction de la présence de la date modifiée. Si les données de l'unité de planification et de la région ne sont pas présentes dans le serveur v10, la version locale 8 est la plus récente.

6. > **Prévision sélectionnée (Prévision) :** QAT vérifie si une prévision sélectionnée existe pour cette unité de planification et cette région dans Server v10. Si aucune sélection n'est présente dans le serveur v10, la v8 locale est la dernière.

#### Condition 2 : Données nouvellement ajoutées dans la version serveur 

Si la condition 1 échoue, QAT vérifie la dernière version du serveur (Serveur v10) pour voir si ces données ont été récemment ajoutées en les comparant avec la version locale (Local v8). QAT ne vérifie pas la version précédente du serveur (serveur v8). Si les données ne sont pas présentes sur la version locale, cela signifie qu'elles ont été récemment ajoutées sur la dernière version du serveur et qu'il n'y a pas de conflit avec la version locale. Ces données seront ajoutées à la version nouvellement téléchargée (Serveur v11) et les données <u> sont affichées en **bleu** dans l'écran de téléchargement </u>.

**un. Serveur v8 - L'enregistrement n'existe pas**

**b. Local v8 - L'enregistrement n'existe pas**

**c. Serveur v10 - L'enregistrement existe**

Voici quelques exemples de cette condition :

1. > **Inventaire de consommation, ajustement, expédition, QPL (Supply Planning) : par exemple, il existe un enregistrement de consommation réelle avec l'ID unique \#A dans le serveur v10. QAT vérifie si l'ID unique\#A est également présent dans la version locale v8. Si l'ID unique n'est pas présent dans la version locale, le serveur v10 est le dernier. **

2. > **Arbres : par exemple, il existe un arbre avec l'ID unique \#B sur le serveur v10. QAT vérifie si l'ID unique\#B est également présent dans la version locale v8. Si l'ID unique n'est pas présent dans la version locale, le serveur v10 est le dernier. **

3. > **Paramètres de l'unité de planification (prévision) :** **Par exemple, il existe une unité de planification avec l'ID d'unité de planification \#C dans le serveur v10. QAT vérifie si l'unité de planification \#C est également présente dans la version locale v8. Si l'ID de l'unité de planification n'est pas présent dans la version locale, le serveur v10 est la dernière version. **

<!-- fin de liste -->

7. > **Données de consommation et extrapolation (prévision) : une fois que QAT a trouvé des données pour une** unité de planification et un serveur de région v10, QAT examine la même unité de planification et la région dans la version locale v8 recherche une date modifiée. Si la date de modification n'existe pas dans la v8 locale, **le serveur v10 est la dernière. **

8. > **Prévisions sélectionnées (Prévision) :** **Une fois que QAT a trouvé des données pour des prévisions sélectionnées pour une unité de planification et une région particulières dans le serveur v10, QAT recherche** la même unité de planification et la même région dans la version locale v8 recherche une prévision sélectionnée. Si la prévision sélectionnée n'existe pas dans la version locale v8, **le serveur v10 est la dernière. **

#### Condition 3a : Le serveur local et le dernier serveur sont identiques 

Si les conditions ci-dessus échouent, QAT vérifie chaque point de données dans la version locale (Local v8) pour voir s'ils sont identiques à la dernière version du serveur (v10). Si tel est le cas, les données <u> sont affichées non mises en surbrillance dans l'écran de téléchargement </u>.

**un. Serveur v8 – L'enregistrement est X**

**b. v8 local – L'enregistrement est X**

**c. Dernier serveur v10 – L'enregistrement est X**

Voici quelques exemples de cette condition :

1. > **Consommation, Inventaire, Ajustement, Expéditions, QPL, paramètres de version, paramètres d'unité de planification et prévisions sélectionnées :** QAT compare chaque enregistrement de la version locale (v8) avec les dernières versions du serveur (v10). Par exemple, pour l'enregistrement de la consommation réelle du mois du 22 juin, QAT vérifie chaque champ (ARU, source de données, quantité, jours de rupture de stock, etc.) pour voir si la version locale (v8) et la dernière version du serveur (v10) sont les mêmes. S'ils sont identiques, alors aucune modification n'a été apportée depuis le serveur v8, ou ils ont été mis à jour pour avoir la même valeur.

2. > **Consommation (Prévision) et Arbres : QAT compare la date de dernière modification de chaque enregistrement en version locale (v8) avec la date de dernière modification de la dernière version du serveur (v10). S'ils sont identiques, aucune modification n'a été apportée depuis le serveur v8.**

#### Condition 3b : Modifications uniquement dans la version locale 

Si les conditions ci-dessus échouent, QAT compare pour voir si la version précédente du serveur (Serveur v8) et la dernière version du serveur (serveur v10) sont identiques. Si tel est le cas, QAT en déduit que la version locale (v8 locale) a été modifiée et les données <u> s'affichent en **vert** dans l'écran de téléchargement.</u>

Voici quelques exemples de cette condition :

1. **Consommation, inventaire, ajustement, expéditions, QPL, paramètres de version, paramètres d'unité de planification et prévisions sélectionnées :** Par exemple, un enregistrement de consommation réelle pour le 22 juin a « Rapports d'entrepôt » comme source de données dans la version locale 8. Si le champ de source de données pour les versions de serveur précédente (v8) et dernière (v10) est tous deux « Rapports LMIS », cela indique que les données ont été modifiées dans la version locale, donc la v8 locale est la dernière.

> **a. Serveur v8 – la source de données est les rapports LMIS **
>
> **b. v8 local –** **la source de données est Warehouse Reports **
>
> **c. Dernier serveur v10 - la source de données est les rapports LMIS  **

2. **Consommation (Prévision) et Arbres :** Si les dates de dernière modification des versions précédente (v8) et dernière (v10) du serveur sont les mêmes, cela indique que les données ont été modifiées en version locale, donc la v8 locale est la dernière.

> **a. Serveur v8 - la date de dernière modification est le 15 septembre 2023, 12:00:00**
>
> **b. v8 local - la date de dernière modification est le 20 septembre 2023, 15:15:00**
>
> **c. Dernier serveur v10 - la date de dernière modification est le 15 septembre 2023, 12:00:00**

#### Condition 3c : Modifications uniquement dans la dernière version du serveur 

Si les conditions ci-dessus échouent, QAT compare pour voir si la version précédente du serveur (Serveur v8) et la version locale (local v8) sont identiques. Si tel est le cas, QAT en déduit que la dernière version du serveur (serveur v10) a été modifiée et les données <u> s'affichent en **bleu** dans l'écran de téléchargement.</u>

Voici quelques exemples de cette condition :

1. **Consommation, inventaire, ajustement, expéditions, QPL, paramètres de version, paramètres de l'unité de planification et prévisions sélectionnées : par exemple, un enregistrement de consommation réelle pour le 22 juin. Si la valeur de la source de données dans ** le serveur v8 et la v8 locale sont les mêmes, cela indique que les données ont été modifiées dans la dernière version du serveur (v10), donc **le serveur v10 est la dernière. **

> **a. Serveur v8 – la source de données est les rapports LMIS **
>
> **b. v8 local – la source de données est les rapports LMIS **
>
> **c. Dernier serveur v10 – la source de données est Warehouse Reports **

2. **Consommation (Prévision) et Arbres :** Si les dates de dernière modification de la version précédente du serveur (v8) et de la version locale (v8) sont les mêmes, cela indique que les données ont été modifiées dans la dernière version du serveur (v10), donc **le serveur v10 est la dernière. **

> **a. Serveur v8 – la dernière date de modification est le 15 septembre 2023, 12:00:00 **
>
> **b. v8 local - la date de dernière modification est le 15 septembre 2023, 12:00:00 **
>
> **c. Dernier serveur v10 - la date de dernière modification est le 20 septembre 2023, 15:30:00**

#### Condition 3D : modifications apportées à la version locale et à la dernière version du serveur (même paramètre)

Si les conditions ci-dessus échouent, cela signifie que les 3 versions ne correspondent pas et qu'il y a un conflit. Si tel est le cas, les données <u> sont surlignées en **jaune** dans l'écran de téléchargement.</u>

Voici quelques exemples de cette condition :

1. **Consommation, inventaire, ajustement, expéditions, QPL, paramètres de version, paramètres d'unité de planification et prévisions sélectionnées :** Pour un enregistrement de consommation réelle pour le mois du 22 juin**, si la valeur de la source de données ne correspond à aucune des versions, cela indique que les données sont modifiées dans les versions locale (v8) et la dernière version du serveur (v10). QAT met donc en surbrillance la ligne en jaune pour indiquer un conflit que l'utilisateur doit résoudre.

> une. Serveur v8 - la source de données est les rapports LMIS
>
> **b. v8 local - la source de données est SDP Reports**
>
> **c. Dernier serveur v10 - la source de données est Warehouse Reports**

2. **Consommation (prévision) et arbres** : si la date de dernière modification ne correspond à aucune des versions, cela indique que les données sont modifiées à la fois dans les versions locales (v8) et dans la dernière version du serveur (v10). QAT met donc en surbrillance la ligne en jaune pour indiquer un conflit que l'utilisateur doit résoudre.

> **a. Serveur v8 - la date de dernière modification est le 15 septembre 2023, 12:00:00**
>
> **b. v8 local - la date de dernière modification est le 16 septembre 2023, 13:00:00**
>
> **c. Dernier serveur v10 - la date de dernière modification est le 20 septembre 2023, 15:30:00**
>
> **a. Serveur v8 - la date de dernière modification est le 28 septembre 2023, 12:00:00**
>
> **b. v8 local - la date de dernière modification est le 16 septembre 2023, 13:00:00**
>
> **c. Dernier serveur v10 – l'arborescence est manquante **

#### Condition 4 : Modifications de la version locale et de la dernière version du serveur (différents paramètres) 

Après avoir vérifié toutes les conditions, QAT vérifie s'il existe des enregistrements contenant une combinaison de 3b et 3c, mais pour des champs différents. Si tel est le cas, les données <u> sont surlignées en **jaune** dans l'écran de téléchargement </u>.

1. **Consommation, Stock, Ajustement, Expéditions, QPL, paramètres de version, paramètres d'unité de planification et prévisions sélectionnées :** Pour un enregistrement de consommation réelle pour le mois du 22 juin**,** la source de données est mise à jour dans la version locale (Condition 3b) et la quantité est modifiée dans la version serveur (condition 3c). Dans ce cas, QAT ne sait pas quelle version utiliser, donc QAT met en surbrillance la ligne en jaune pour indiquer un conflit que l'utilisateur doit résoudre.

| **Version** | **Source de données** (Condition 3b) | **Quantité** (Condition 3c) |
| ------------------------------------ | ------------------------------- | -------------------------------- |
| serveur v8 | Rapports SIGL | 50 |
| **v8 local** | **Rapports d'entrepôt** | 50 |
| **dernier serveur v10** | Rapports SIGL | 55 |

2. **Consommation (Prévision) et Arbres :** Ceci ne s'applique pas puisque seule la date de modification est comparée pour ces deux types de données

#