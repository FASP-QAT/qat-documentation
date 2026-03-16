---
id: getting-started
title: "Getting Started"
sidebar_label: "Getting Started"
sidebar_position: 2
---
# Mise en route

## Configuration système requise

Le QAT devrait principalement être accessible via des ordinateurs portables et de bureau dotés de systèmes d'exploitation standard tels que MS Windows, Linux/Ubuntu et iOS. Le navigateur Web recommandé est Google Chrome, mais Chromium, Edge, Mozilla Firefox ou Safari peuvent être utilisés.

Il est également suggéré que chaque utilisateur de QAT dispose de suffisamment d'espace sur son lecteur C: pour permettre de stocker correctement les données du cache du navigateur. La quantité d'espace nécessaire dépend de la taille du programme QAT en cours de téléchargement et du nombre d'applications actuellement en cours d'exécution et utilisant les données du navigateur. Le stockage temporaire est partagé entre toutes les applications Web exécutées dans le navigateur. Ce pool partagé peut représenter jusqu'à 1/3 de l'espace disque disponible. Chaque application peut alors disposer jusqu’à 20 % du pool partagé. Par exemple, si l'espace total disponible sur le lecteur C: est de 60 Go, le pool partagé est de 20 Go ; ainsi, QAT peut potentiellement utiliser jusqu'à 4 Go. Ceci est calculé à partir de 20 % (jusqu’à 4 Go) de 1/3 (jusqu’à 20 Go) de l’espace disque C: disponible (60 Go).

## Niveaux de hiérarchie dans QAT

Le système QAT comporte **trois niveaux hiérarchiques** pour mener les opérations. Les niveaux hiérarchiques sont les suivants :

- **Application** Masters est le niveau le plus élevé de la hiérarchie des données dans QAT. Les données de base de l'application s'appliquent à tous les domaines et programmes de QAT. La majeure partie n'est accessible qu'aux administrateurs d'application, bien que quelques fonctions d'application soient disponibles pour les administrateurs de domaine, telles que l'ajout et la mise à jour d'utilisateurs et l'attribution de rôles aux utilisateurs. Les administrateurs d'application peuvent sélectionner les données de base spécifiques à l'échelle de l'application qu'ils souhaitent ajouter ou mettre à jour.

- **Realm** Level Masters couvre toutes les données de base de ce royaume qui s'appliquent à ses programmes de prévision et de planification des approvisionnements. L'administrateur du domaine pourra afficher, créer et modifier ces données principales. Les programmes, les domaines techniques, les unités de planification, les agents d'approvisionnement et les modèles d'arborescence sont quelques exemples de données principales de domaine que l'administrateur de domaine peut ajouter et gérer. De nombreux maîtres de niveau domaine sont accessibles aux administrateurs du programme ; cependant, ils n'ont pas la possibilité d'ajouter/mettre à jour ces données.

- **Programme** Level Masters est le troisième niveau de hiérarchie dans QAT. Bien que les administrateurs de programme ne puissent pas ajouter de programmes, ils peuvent mettre à jour les informations du programme (par exemple, les délais de livraison, les frais de transport, etc.) dans le(s) programme(s) qui leur sont attribués. L'administrateur du programme et les utilisateurs du programme peuvent également ajouter et mettre à jour les données du programme, telles que les ajustements de consommation, l'extrapolation et la gestion des arbres (dans les prévisions) ; et la consommation, les stocks, les expéditions (dans la planification des approvisionnements).

Pour en savoir plus sur les fonctionnalités destinées aux administrateurs au niveau des applications et des domaines, veuillez consulter [Annexe 1 : Manuel de l'administrateur des applications et des domaines.](#annex-1-application-realm-administrator-manual)

**Les programmes** sont une combinaison de pays, de domaine technique (1 ou plus), d'organisation et de région. Par exemple, **FASPonia**–ARV-MOH-National est un programme de planification de l'approvisionnement dans le cadre du domaine de la santé mondiale pour la gestion et la planification des **antirétroviraux** pour le ministère de la santé du pays fictif FASPonia, et les données de consommation et d'inventaire sont capturées au niveau national (région).

## Rôles et autorisations des utilisateurs

Les utilisateurs peuvent se voir attribuer l'un des nombreux rôles disponibles dans QAT qui définissent le niveau de données auquel les utilisateurs ont accès et la manière dont ils interagissent avec ces données, selon la hiérarchie suivante :

Les utilisateurs auront accès à un ou plusieurs niveaux de données selon les rôles et autorisations qui leur sont attribués. Les rôles sont définis de manière centralisée au niveau de l'application ou du domaine. Un rôle peut se voir attribuer plusieurs autorisations. Ces autorisations définissent les actions auxquelles un utilisateur a droit. Un utilisateur peut se voir attribuer plusieurs rôles et peut varier le rôle en fonction de l'accès au programme. Par exemple, un utilisateur peut être un administrateur de programme de plan d'approvisionnement pour le programme A et un visualiseur de rapports de plan d'approvisionnement pour le programme B. (REMARQUE : les rôles peuvent être attribués uniquement aux utilisateurs enregistrés dans QAT).

La grande majorité des utilisateurs de QAT – responsables et responsables des programmes de santé dans les pays – interagiront avec l'application au **niveau du programme** ; ainsi, ce manuel se concentrera principalement sur les tâches et fonctions qui s'appliquent à ce groupe. Les rôles d'administrateur de programme et d'utilisateur de programme sont généralement configurés pour avoir accès à un ou plusieurs programmes dans une juridiction géographique, c'est-à-dire qu'un administrateur de programme ne peut gérer que les programmes attribués dans son pays, mais pas dans un domaine.

Un administrateur **Realm** gère les données de base et peut avoir accès à tous les programmes de ce domaine.

Au niveau **Application**, il existe un rôle d'administrateur d'application. Ce rôle dispose d'un accès exclusif pour créer des structures de données à l'échelle de l'application, notamment l'ajout de langages, de rôles, la création de domaines, la mise à jour d'étiquettes statiques et dynamiques, entre autres fonctions commerciales.

Veuillez vous référer à [Annexe 4 : Fonctions commerciales](#annex-4-business-functions) pour un tableau avec la liste complète des fonctions commerciales QAT disponibles par rôle d'utilisateur.

## Comment se connecter à QAT et installer l'application Web progressive (PWA)

**Comment se connecter à QAT** **pour la première fois** (**en ligne**)

1. > Si vous n'avez pas de profil utilisateur, veuillez contacter l'administrateur du domaine pour créer un nouveau compte utilisateur et le rôle correspondant en votre nom.

2. > Une fois le compte créé, le nouvel utilisateur reçoit un email pour « Réinitialiser le mot de passe ».

3. > Le lien « Réinitialiser le mot de passe » redirigera l'utilisateur vers le site Web de QAT pour créer le nouveau mot de passe. Une fois terminé, cliquez sur « Soumettre ».
    1. > **Remarque** : le lien « Réinitialiser le mot de passe » sera valable 24 heures et ne pourra être utilisé qu'une seule fois. Si nécessaire, l'utilisateur peut générer à nouveau le lien pour réinitialiser le mot de passe en cliquant sur « Mot de passe oublié » sur l'écran de connexion.

4. > Ensuite, l'utilisateur sera redirigé vers l'écran de connexion. À l'aide de l'e-mail d'identification utilisateur et du mot de passe créé, connectez-vous à QAT.

**Remarque :** Le mot de passe doit : comporter au moins six caractères, commencer par une lettre, ne pas être le même que votre nom d'utilisateur ou votre dernier mot de passe, et doit inclure au moins un caractère spécial, un chiffre et une lettre majuscule.

**Installation de l'application Web progressive QAT**

Les applications Web progressives (PWA) sont des navigateurs autonomes qui ressemblent à des applications et sont installés sur le bureau. Les utilisateurs ne peuvent installer la PWA QAT que via Google Chrome et Edge. La PWA peut être utilisée en mode en ligne ou hors ligne.

1. > Accédez au [site Web Quantification Analytics](https://www.quantificationanalytics.org/).

2. > Cliquez sur le bouton Ajouter dans la barre d'adresse.

3. > Cliquez sur « installer » lorsque la petite fenêtre contextuelle apparaît.

![P602#yIS1](/img/media/image10.png)

Figure 1 : Installation de la PWA QAT

4. > Une icône apparaîtra sur votre bureau en tant qu'application autonome. Les utilisateurs peuvent ouvrir directement depuis le bureau ou saisir **chrome://apps/** dans le navigateur.

> ![P605#yIS1](/img/media/image11.png)

Figure 2 : Icônes QAT PWA

**Remarque :** Les utilisateurs peuvent utiliser simultanément les versions PWA et navigateur ; cependant, lorsque vous apportez des modifications dans l'un, une actualisation est nécessaire dans l'autre afin que les modifications soient prises en compte (voir [Quand et comment effectuer une actualisation d'application](#quand-et-comment-effectuer-une-actualisation-d'application)).

**Étapes pour installer PWA lorsque le bouton d'installation n'est pas disponible**

1. > Dans votre navigateur Chrome, accédez à [<u>https://www.quantificationanalytics.org/</u>](https://www.quantificationanalytics.org/)

2. > Cliquez sur les trois points verticaux en haut à droite du navigateur

3. > Sélectionnez « Caster, enregistrer et partager »

4. > Cliquez sur « Créer un raccourci »

5. > Une icône QAT s'affichera sur votre bureau.

6. > Cliquez sur l'icône « QAT » pour ouvrir la PWA de l'application QAT.

![A screenshot of a computer Description automatically generated](/img/media/image12.png)

Figure 3 : Installer une autre méthode PWA

## Comment se connecter à QAT pour les utilisateurs existants

**Connexion**

1. Pour vous connecter, saisissez l'URL [<u>https://www.quantificationanalytics.org/</u>](https://www.quantificationanalytics.org/) dans la barre du navigateur et appuyez sur Entrée, ou ouvrez la PWA depuis votre bureau.

2. Un écran de connexion s'affichera.

![A screenshot of a computer Description automatically generated](/img/media/image13.png)

Figure 4 : Écran de connexion

1. > Tapez le nom d'utilisateur et le mot de passe dans les champs obligatoires.

2. > Cliquez sur le bouton « Connexion ».
    1. > Remarque : Un utilisateur peut choisir de se connecter « en ligne » ou « hors ligne » en utilisant la case à cocher au-dessus du bouton « Connexion ». Pour plus d'informations sur le travail hors ligne dans QAT, consultez la section F. [Travailler hors ligne](#working-offline).

    2. > Lors de la connexion en mode « en ligne » – QAT subira la synchronisation des données de base. Si vous voyez un message concernant une « version de serveur plus récente » – voir la figure 36 de la section 3.B pour plus d'informations.

**Déconnexion**

1. > Allez dans le coin supérieur droit de l'écran.

2. > Cliquez sur l'icône du bouton de déconnexion à droite de l'icône de profil.

![A screenshot of a computer Description automatically generated](/img/media/image14.png)

Figure 5 : Icône de déconnexion

3. > Une fenêtre contextuelle apparaîtra demandant « Êtes-vous sûr de vouloir vous déconnecter ? » – cliquez sur « oui » pour vous déconnecter

**Changer le mot de passe**

1. Dans QAT, cliquez sur l'icône Profil dans le coin supérieur droit de l'écran.

2. Cliquez sur « Modifier le mot de passe ».

![A screenshot of a login screen Description automatically generated](/img/media/image15.png)

Figure 6 : Icône de profil

3. Une fois sur l'écran « Modifier le mot de passe », entrez votre ancien mot de passe suivi du nouveau mot de passe souhaité.

4. Le nouveau mot de passe doit répondre aux critères suivants :
    - Le mot de passe doit contenir au moins 6 caractères

    - Le mot de passe ne doit pas contenir le mot « mot de passe »

    - Le mot de passe doit contenir au moins 1 caractère spécial

    - Le mot de passe doit contenir au moins 1 chiffre

    - Le mot de passe doit contenir au moins 1 lettre majuscule

    - Le mot de passe doit commencer par une lettre

    - Le nouveau mot de passe ne doit pas être le même que votre nom d'utilisateur

    - Le nouveau mot de passe ne doit pas être le même que votre dernier mot de passe

5. Confirmez le nouveau mot de passe en le saisissant à nouveau.

6. Cliquez sur « Soumettre ».

**Si l'utilisateur oublie son mot de passe**

1. Un utilisateur qui a oublié son mot de passe peut cliquer sur le bouton « Mot de passe oublié ? lien pour le réinitialiser.

2. Saisissez l'adresse e-mail avec laquelle l'utilisateur est enregistré dans QAT et cliquez sur « Soumettre ».

![P662#yIS1](/img/media/image16.png)

Figure 7 : Écran Mot de passe oublié

3. L'utilisateur recevra un lien par e-mail pour réinitialiser son mot de passe.

![P666#yIS1](/img/media/image17.png)

Figure 8 : E-mail de réinitialisation du mot de passe

4. Le lien « Réinitialiser le mot de passe » vous redirigera vers QAT, où vous saisirez votre nouveau mot de passe. Une fois terminé, cliquez sur « Soumettre ».

5. Après avoir cliqué sur « Soumettre », l'utilisateur sera redirigé vers l'écran de connexion. À l'aide de l'e-mail d'identification utilisateur et du mot de passe nouvellement créé, connectez-vous à QAT.

**_Remarque : un mot de passe utilisateur QAT sera valide jusqu'à un an à compter de la date de création/mise à jour._**

## Travailler hors ligne

QAT est un outil hybride et peut être utilisé en mode en ligne et hors ligne. Il existe deux manières de forcer le mode hors ligne de QAT : sur la page de connexion avant de vous connecter à QAT ou sous les paramètres de profil après vous être connecté à QAT. Il peut être utile de passer en mode hors ligne de QAT lorsque la bande passante Internet est faible.

![A screenshot of a login page Description automatically generated](/img/media/image18.png) ![A screenshot of a login page Description automatically generated](/img/media/image19.png)

> Figure 9 : Bouton hors ligne sur la page de profil Figure 10 : Bouton hors ligne sur la page de connexion

L'icône de profil dans le coin supérieur droit affiche un cercle de couleur verte lorsque vous travaillez en mode en ligne. Lorsque l'utilisateur passe en mode hors ligne, la couleur passe au rouge, comme indiqué sur la capture d'écran ci-dessous.

![P677#yIS1](/img/media/image20.png)

Figure 11 : Icônes hors ligne et en ligne

Le tableau ci-dessous détaille _certaines_ des fonctionnalités clés qui peuvent être réalisées dans QAT hors ligne ainsi que _certaines_ des fonctionnalités qui doivent être réalisées en ligne :

| Que peut faire un utilisateur hors ligne ?\* | Que doit faire un utilisateur en ligne ?                                                               |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Plans/prévisions d'approvisionnement en import/export | Réinitialiser le mot de passe |
| Afficher les données de base | Synchroniser les données de base |
| Construire des arbres/scénarios | Mettre à jour les informations sur le programme, les unités de planification, les paramètres de version ou les budgets |
| Saisir/mettre à jour les données transactionnelles du plan d'approvisionnement et saisir/ajuster manuellement les données de consommation | Importer des données de prévision vers/depuis le module de planification des approvisionnements vers/depuis le module de prévision |
| Extrapoler à l'aide de moyennes mobiles ou de semi-moyennes | Extrapoler à l'aide des méthodes de régression linéaire, de lissage triple exponentiel (TES) ou ARIMA |
| Plan d'approvisionnement/scénario | Créer des billets |
| Afficher la liste des problèmes QAT | Télécharger/Télécharger les plans/prévisions d'approvisionnement |
| Afficher les rapports et les résultats des prévisions <u>program</u> | Afficher les rapports <u>global</u> |

\*Remarque : Même en ligne, les fonctions de la colonne « hors ligne » nécessitent qu'un programme soit téléchargé. Voir la section 3 pour plus d'informations.

Tableau 2 : Capacités en ligne et hors ligne

## Mises à jour de la version QAT

Pour maintenir l'application QAT, les versions régulières sont automatiquement transmises à l'application QAT et à tous les utilisateurs du domaine. Ces versions peuvent se produire pour les raisons suivantes :

- Maintenance régulièrement planifiée pour les corrections de bugs et l'optimisation des applications

- Maintenance d'urgence non planifiée pour les corrections de bogues hautement prioritaires/urgentes

- Mises à jour périodiques liées aux améliorations ou aux nouvelles fonctionnalités

![A screenshot of a computer Description automatically generated](/img/media/image21.png)

Figure 12 : Versions de QAT

La plupart des versions ne nécessiteront aucune action significative de la part de l'utilisateur, sauf pour actualiser l'application QAT avant de se connecter. QAT indiquera à l'utilisateur qu'il existe une nouvelle version de QAT sur la page de connexion :

![P721#yIS1](/img/media/image22.png)

Figure 13 : Invite de publication d'une nouvelle version de QAT pour les utilisateurs

En cas de changement majeur dans la structure de l'architecture backend de QAT, les utilisateurs peuvent être invités à télécharger leur dernière version sur le serveur (voir la section [Upload](#upload) pour plus d'informations) pour éviter de perdre des données une fois la nouvelle version de QAT publiée. L'équipe d'assistance QAT ([support@quantificationanalytics.org](mailto:support@quantificationanalytics.org)) informera les utilisateurs bien à l'avance si un téléchargement de programme est nécessaire.
## Dépannage

Lorsqu'un utilisateur rencontre un problème système potentiel avec QAT, il doit tenter de résoudre le problème en essayant les solutions décrites dans cette section, dans l'ordre dans lequel elles sont décrites (c'est-à-dire, essayez H1 d'abord, et si cela ne fonctionne pas, essayez H2, puis H3). Si aucune de ces étapes ne résout le problème, l'utilisateur doit soumettre un ticket au support technique pour signaler le bug (voir la section « [Signaler un bug](#reporting-a-bug) »).

### Quand et comment effectuer une actualisation de l'application

L'équipe de développement de QAT déploie des versions logicielles incrémentielles pour corriger les bogues et les modifications nécessaires à l'application. QAT invite les utilisateurs à le faire sur l'écran de connexion après chaque version (voir Figure 12). Pour effectuer une actualisation de l'application, les utilisateurs doivent appuyer simultanément sur « Ctrl » + « Maj » + « R » sur leur clavier.

![P721#yIS1](/img/media/image22.png) ![P721#yIS2](/img/media/image23.png)

Figure 14 : Maintenez Ctrl + Shift + R (les 3 touches) pour effectuer une actualisation de l'application

L'actualisation de l'application peut également être utilisée pour aider à résoudre les problèmes rencontrés lors de l'utilisation de QAT. Après avoir maintenu les 3 touches enfoncées, le logiciel devrait se recharger automatiquement. Notez que l'actualisation de l'application est différente de la simple actualisation du navigateur (« Ctrl » + « R »).

### Quand et comment effectuer une synchronisation complète des données de base (MDS)

Si une actualisation de l'application (« Ctrl » + « Maj » + « R ») ne résout pas votre problème logiciel, vous pouvez essayer d'effectuer une « Synchronisation complète des données principales ». Pour ce faire, assurez-vous de disposer d'une connexion Internet stable, puis cliquez sur le lien « Full Master Data Sync » en bas de l'application (voir Figure 13). Cette solution est susceptible de fonctionner si vous rencontrez des problèmes de données de base qui peuvent être le résultat d'un Internet instable qui a perturbé la synchronisation régulière des données de base (MDS) décrite dans la section 2.J Navigation et barre de menus.

- Dans un **MDS standard**, seules les modifications incrémentielles sont synchronisées entre le serveur et votre ordinateur local en fonction de la dernière fois qu'un MDS a été terminé.

- Dans un **Full MDS**, l'intégralité des données maîtres est chargée quelle que soit la dernière fois que QAT a été synchronisé, comme si c'était la première fois que vous chargez des données maîtres. Cela prendra donc plus de temps qu’un MDS normal.

![A screenshot of a computer Description automatically generated](/img/media/image24.png)

Figure 15 : Cliquez sur « Synchronisation complète des données de base »

### Quand et comment effacer les données du site

Si l'actualisation de QAT (Ctrl + Shift + R) et une synchronisation complète des données principales ne résolvent pas le problème, l'utilisateur doit tenter d'effacer les données du site afin de résoudre le problème. Suivez les étapes ci-dessous afin d'effacer les données du site sur votre QAT :

**\*Avertissement** : La suppression des données du site sur QAT efface toutes les données locales sur la PWA et le navigateur Web, y compris toutes les modifications que vous avez apportées depuis votre dernier téléchargement. Assurez-vous d'avoir téléchargé tous les programmes non enregistrés <u> avant la suppression des données du site </u>.\*

1. > Cliquez simultanément sur les touches « Ctrl » + « Maj » + « I » de votre clavier.

> ![P739#yIS1](/img/media/image25.png)
>
> Figure 16 : Ctrl + Maj + I

2. > Allez dans « Candidature ».

3. > Sur le côté gauche de l'écran, cliquez à l'endroit où il est indiqué « Stockage ».

4. > Une fois sur l'écran « Stockage », sélectionnez « Effacer les données du site ». Cela effacera toutes les données qui n'ont pas été téléchargées.

5. > Connectez-vous à nouveau à QAT et retéléchargez tous les programmes dont vous avez besoin. (La suppression des données du site efface tous les programmes de votre ordinateur local, vous devrez donc retélécharger ces programmes.)

![P746#yIS1](/img/media/image26.png)

Figure 17 : Effacer les données du site

### Dépannage des erreurs réseau

Les utilisateurs peuvent voir le message d'erreur suivant lors de la connexion ou lors de l'utilisation de QAT :

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "Erreur réseau. Veuillez vérifier votre connexion Internet ou contacter le service informatique de votre organisation pour vous assurer [api.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fapi.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=4heIFYQR9sA%2FqkifKvp2y9V00BIPmMKX35Wi5Am4jXk%3D&reserved=0) et [www.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=cW0d%2B1AnhHVpuclTsFqM6KwhliqBT1y82X5OD5ZUrmc%3D&reserved=0) sont sur la liste blanche pour l’accès au pare-feu. |

Ce message apparaît pour deux raisons : 1) Internet instable ou 2) Internet restreint.

**Internet instable** : utilisez un autre Internet avec une connexion stable ou plus rapide, ou réessayez plus tard.

**Internet restreint** : QAT est accessible via la plupart des connexions Internet privées, mais parfois les systèmes informatiques des organisations ont un contrôle de sécurité plus strict et signalent donc QAT comme une menace potentielle. Dans ce cas, les utilisateurs ont deux options :

1. Utilisez une autre connexion Internet sans restrictions, ou

2. Activez l'accès au pare-feu en mettant sur liste blanche les deux URL de site ci-dessous. L'utilisateur devra peut-être contacter le personnel informatique de son organisation pour obtenir de l'aide.

> •        [api.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fapi.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=4heIFYQR9sA%2FqkifKvp2y9V00BIPmMKX35Wi5Am4jXk%3D&reserved=0)
>
> •        [www.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=cW0d%2B1AnhHVpuclTsFqM6KwhliqBT1y82X5OD5ZUrmc%3D&reserved=0)

## Service d'assistance et tickets QAT

### Tickets pour l'ajout/la mise à jour d'utilisateurs et de données de base

Lorsqu'un utilisateur doit ajouter ou mettre à jour un utilisateur ou des données de base pour quelque raison que ce soit, il peut le faire en souscrivant un ticket d'assistance. Avant de demander des ajouts ou des modifications aux données principales dans QAT, l'utilisateur doit d'abord vérifier les données principales au niveau du domaine (Realm Level Masters \>\> Product) et le rapport du catalogue de programmes pour s'assurer que les informations n'existent pas déjà. Pour plus d'informations sur la façon d'accéder et d'utiliser les données de base, veuillez consulter [Gestion des programmes](#working-with-program-data) et [Realm Masters](#realm-masters). Pour plus d'informations sur la façon d'accéder au catalogue de programmes, veuillez consulter [Catalogue de programmes](#product). Pour accéder au service d'assistance QAT :

1. > Les utilisateurs peuvent accéder au Helpdesk QAT à partir de deux emplacements différents dans QAT :
    1. > Sur la page de connexion, et

    2. > à partir du ruban supérieur droit dans QAT

![A screenshot of a login screen Description automatically generated](/img/media/image27.png)

![A red line with numbers and circles Description automatically generated](/img/media/image28.png)

Figure 18 : Trois emplacements pour accéder au Helpdesk QAT

2. > Quatre options apparaîtront pour souscrire un ticket : Ajouter/Mettre à jour un utilisateur, Ajouter/Mettre à jour des données de base, Demande de modification et Signaler un bug. Voir les sections ci-dessous sur [Demandes de modification](#requesting-a-change) et [Signaler un bug](#reporting-a-bug).

![P772#yIS1](/img/media/image29.png)

Figure 19 : Menu du service d'assistance QAT

3. > Choisissez d'ajouter/mettre à jour un utilisateur ou d'ajouter/mettre à jour des données principales. L’une ou l’autre option vous amènera à différents écrans pour plus d’informations.

4. > Saisissez les informations requises dans le formulaire et cliquez sur « Soumettre ».

![P778#yIS1](/img/media/image30.png)

Figure 20 : Écran Ajouter/Mettre à jour un utilisateur

![A screenshot of a computer Description automatically generated](/img/media/image31.png) ![P781#yIS2](/img/media/image32.png)

Figure 21 : Écran Ajouter des données de base Figure 22 : Écran Ajouter des données de base de l'agent d'approvisionnement

Après avoir soumis un ticket, l'utilisateur se verra attribuer un numéro de code de ticket (ex : QAT-570). L'utilisateur recevra également une notification par e-mail et le nombre de « tickets ouverts » sur le ruban supérieur en rouge augmentera. Ce numéro de ticket correspond au numéro de ticket stocké dans l'outil de gestion du logiciel JIRA. Pour plus d'informations sur la gestion des tickets et sur l'outil de gestion du logiciel JIRA, veuillez consulter [Gestion des tickets](#managing-tickets).

### Demander une modification

Lorsqu'un utilisateur a une idée d'une nouvelle fonctionnalité ou d'un élément de conception qui ferait de QAT une meilleure application pour tous les utilisateurs, comme un nouveau rapport, la suppression d'une colonne inutile, etc., il peut demander une modification via le Helpdesk QAT. Tous les tickets de demande de modification nécessiteront une description détaillée et des captures d’écran. Une fois que l’équipe technique reçoit le ticket de demande de modification d’un utilisateur, celui-ci sera examiné quant à sa faisabilité et son utilité pour tous les utilisateurs de QAT. Si la demande de modification est acceptée, elle ne sera pas immédiatement disponible dans QAT, mais sera placée dans une file d'attente en fonction de la priorité métier du domaine, de sa criticité et des exigences LOE. Pour demander un changement de QAT :

1. > Cliquez sur l'icône du Helpdesk QAT.

![A red line with numbers and circles Description automatically generated](/img/media/image28.png)

Figure 23 : Icône du service d'assistance QAT

2. > Cliquez sur « Demander une modification » dans les options du menu QAT Helpdesk.

3. > Remplissez le formulaire en remplissant les informations requises et cliquez sur « Soumettre ».

![A screenshot of a computer Description automatically generated](/img/media/image33.png)

Figure 24 : ticket de demande de modification

4. > Après avoir soumis un ticket, l'utilisateur se verra attribuer un numéro de code de ticket (ex : QAT-570). L'utilisateur recevra également une notification par e-mail et le nombre de « tickets ouverts » sur le ruban supérieur en rouge augmentera. Ce numéro de ticket correspond au numéro de ticket stocké dans l'outil de gestion du logiciel JIRA. Pour plus d'informations sur la gestion des tickets et sur l'outil de gestion du logiciel JIRA, veuillez consulter [Gestion des tickets](#managing-tickets).

### Signaler un bug

Lorsqu'un utilisateur rencontre un problème système potentiel avec QAT, il doit tenter de le résoudre via une [actualisation de l'application] (#quand-et-comment-effectuer-une-actualisation-de-l'application) et/ou [effacer les données du site] (#quand-et-comment-effacer-les-données-du-site). Si aucune de ces étapes ne résout le problème, l'utilisateur doit soumettre un ticket au support technique pour signaler le bogue.

Le ticket de bogue sera traité par l’équipe de développement en fonction de la priorité commerciale, de la criticité et de la « capacité » disponible via les versions incrémentielles. Les étapes pour créer un ticket dans QAT sont indiquées ci-dessous :

1. Ouvrez l'écran QAT Helpdesk et cliquez sur « Signaler un bug ».

2. Saisissez un résumé du bug ainsi qu'une description du bug. Veuillez être descriptif et fournir autant de détails que possible (_par exemple, sur quel programme/version/fonctionnalité vous travailliez, les étapes que vous avez suivies pour obtenir le bogue, etc_).

3. Téléchargez une capture d'écran du bogue en cliquant sur le bouton « Parcourir » et en extrayant un fichier de capture d'écran enregistré de votre ordinateur.
    1. Il est également utile de fournir l'exportation du programme, si possible (voir [Exportations de programmes](#export) pour savoir comment exporter un programme local)

    2. **\*Remarque** : Si vous souhaitez télécharger plusieurs fichiers, placez les multiples captures d'écran dans un dossier sur votre ordinateur et compressez-le avant de naviguer dans QAT. Ensuite, téléchargez le dossier compressé.\*

4. Choisissez une priorité (la plus élevée, élevée, moyenne ou faible) pour le bug en fonction de l'urgence et de la manière dont il affecte le travail quotidien dans QAT.
    1. Les délais de réponse et de résolution des bogues seront basés sur le niveau de priorité

5. Cliquez sur le bouton « Soumettre » pour lancer le ticket.

![A screenshot of a computer Description automatically generated](/img/media/image34.png)

Figure 25 : Signaler un bug

### Gestion des tickets

Pour une visibilité améliorée, QAT donnera aux utilisateurs la possibilité de gérer et de vérifier l'état de leurs tickets, qu'ils ajoutent/modifient un utilisateur ou des données principales, demandent une modification ou signalent un bug. Lorsqu'un utilisateur soumet un ticket, un numéro de code de ticket lui sera attribué (ex : QAT-570). L'utilisateur recevra également une notification par e-mail et le nombre de « tickets ouverts » sur le ruban supérieur en rouge augmentera. Ce numéro de ticket correspond au numéro de ticket stocké dans l'outil de gestion du logiciel JIRA.

![P815#yIS1](/img/media/image35.png) ![A red line with numbers and circles Description automatically generated](/img/media/image28.png)

Figure 26 : Numéro de code du ticket du service d'assistance Figure 27 : Nombre de tickets sur le ruban supérieur

À partir de la notification par e-mail, les utilisateurs peuvent cliquer sur « Afficher les demandes » pour voir le statut de leur ticket. Les utilisateurs peuvent également ajouter des commentaires supplémentaires et des captures d'écran à leur demande, s'ils le souhaitent. **Les utilisateurs recevront toujours une notification par e-mail une fois le ticket complété.**

**Remarque** : Afin d'accéder pleinement au ticket via l'outil de gestion du logiciel JIRA, les utilisateurs doivent créer un compte avec un nom d'utilisateur et un mot de passe dans JIRA. La création d'un compte dans JIRA est **facultatif**. JIRA est un outil de gestion de logiciels externe accessible via le lien fourni dans l'e-mail, **en cliquant sur l'icône HelpDesk puis en choisissant « Gérer mes tickets » dans le coin supérieur droit de la fenêtre contextuelle**, ou directement via [https://qathelpdesk.atlassian.net/servicedesk/customer/portals](https://qathelpdesk.atlassian.net/servicedesk/customer/portals).

![P821#yIS1](/img/media/image36.png)

Figure 28 : Notification par courrier électronique pour le ticket QAT

![A screenshot of a computer Description automatically generated](/img/media/image37.png)

Figure 29 : Option pour accéder à JIRA

![P823#yIS1](/img/media/image38.png)

Figure 30 : Gestion des tickets JIRA

## Navigation et barre de menus

**Navigation de base**

Une fois connecté à QAT, l'écran ci-dessous apparaîtra :

![A screenshot of a computer Description automatically generated](/img/media/image39.png)

Figure 31 : Écran d'accueil du module de planification des approvisionnements

![P830#yIS1](/img/media/image40.png)

Figure 32 : Écran d'accueil du module de prévision

<table>
  <thead>
    <tr class="header">
      <th>Scapture d'écran</th>
      <th>Fonction</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image46.png"
          style={{width: '0.36111in', height: '0.3724in'}}
          alt="P873C3T10#yIS1"
        />
      </td>
      <td>
        <strong>Déconnecte l'utilisateur de QAT.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image47.png"
          style={{width: '0.55917in', height: '0.45833in'}}
          alt="P876C5T10#yIS1"
        />
      </td>
      <td>
        <p>
          <strong> L'icône de profil est verte lorsque vous travaillez en ligne et rouge lorsque vous travaillez hors ligne. Lorsque l'utilisateur clique sur l'icône, il peut : </strong>
        </p>
        <ul>
          <li>
            <p>
              <strong> Afficher le nom d'utilisateur et les rôles associés qui lui sont attribués </strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Changer leur langue préférée</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Changer son mot de passe</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Go hors ligne/en ligne</strong>
            </p>
          </li>
        </ul>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image42.png"
          style={{width: '0.42361in', height: '0.34774in'}}
          alt="P883C7T10#yIS1"
        />
      </td>
      <td>
        <strong>Renvoie l'utilisateur au tableau de bord/écran d'accueil.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image48.png"
          style={{width: '0.39468in', height: '0.42287in'}}
          alt="P886C9T10#yIS1"
        />
      </td>
      <td>
        <strong> Télécharge le manuel d’utilisation QAT sur l’ordinateur de l’utilisateur. Le fichier se trouve dans le dossier Téléchargements sur l’ordinateur de l’utilisateur. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image49.png"
          style={{width: '0.34722in', height: '0.33482in'}}
          alt="P889C11T10#yIS1"
        />
      </td>
      <td>
        <strong>Ractualise la page actuelle sur laquelle un utilisateur travaille.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image50.png"
          style={{width: '0.63584in', height: '0.60507in'}}
        />
      </td>
      <td>
        <strong> Informe l'utilisateur lorsqu'un programme stocké sur le serveur local comporte des modifications non téléchargées et doit télécharger ce programme sur le serveur. Si l'icône est bleue, aucun programme n'est non téléchargé. Si l'icône est rouge, certains programmes doivent être téléchargés sur le serveur. Le nombre dans la case rouge indique le nombre de programmes qui doivent être téléchargés. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image51.png"
          style={{width: '0.45521in', height: '0.49514in'}}
          alt="P895C15T10#yIS1"
        />
      </td>
      <td>
        <strong> Informe l'utilisateur lorsqu'il existe une version plus récente sur le serveur pour l'un de ses programmes téléchargés localement. Si l'icône est bleue, l'utilisateur dispose de la version la plus récente de tous les programmes téléchargés. Si l'icône est rouge, certains programmes sont obsolètes par rapport au serveur. Le nombre dans la case rouge indique le nombre de programmes dont les versions sont obsolètes. </strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image52.png"
          style={{width: '0.59937in', height: '0.43898in'}}
        />
      </td>
      <td>
        <strong> Ouvre le Helpdesk QAT où les utilisateurs peuvent créer des tickets pour ajouter/mettre à jour des données de base, proposer des demandes de modification et signaler un bug. Le nombre dans la case rouge indique le nombre de tickets ouverts dont dispose un utilisateur. Pour plus d'informations sur le service d'assistance, reportez-vous au service d'assistance <a href="#qat-helpdesk-and-tickets">QAT et aux tickets</a>. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image53.png"
          style={{width: '0.44063in', height: '0.32639in'}}
          alt="P901C19T10#yIS1"
        />
      </td>
      <td>
        <strong> Dirige l'utilisateur vers la page de notification d'expédition ERP. Cette page informera les utilisateurs s'il existe des mises à jour importantes qui doivent être examinées pour un envoi ERP lié. Pour plus d'informations sur ces notifications et celles qui seront signalées, reportez-vous à <a href="#erp-shipment-linking">Liaison d'expédition ERP</a>. <em> Remarque : cette icône est uniquement disponible dans le module de planification des approvisionnements QAT. </em> </strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image54.png"
          style={{width: '0.36111in', height: '0.38889in'}}
          alt="P904C21T10#yIS1"
        />
      </td>
      <td>
        <strong> Ouvre une page Web Afficher les instructions sur une introduction à la prévision QAT. Ce document fournit un aperçu de haut niveau du flux du processus de prévision QAT. <em> Remarque : Cette icône est uniquement disponible dans le module de prévision QAT. </em> </strong>
      </td>
    </tr>
  </tbody>
</table>

Dans la zone principale de la page d'accueil se trouvera un tableau de bord d'application. Le module de planification des approvisionnements dispose d'un tableau de bord amélioré avec des visualisations et des analyses concernant les programmes téléchargés et basés sur le serveur auxquels un utilisateur a accès. Pour des informations spécifiques sur le tableau de bord du module de planification des approvisionnements, voir [QAT Dashboard](#qat-dashboard). Pour le module de prévision, le nombre de vignettes et les types de vignettes dépendront de l'accès en fonction du rôle attribué à l'utilisateur. Les utilisateurs verront une vignette pour le programme qu'ils ont téléchargé (c'est-à-dire qu'une fois dans le module de prévision, les utilisateurs verront une vignette pour chaque programme de prévision qu'ils ont chargé.). En cliquant sur la flèche vers le bas sur la vignette du programme de prévision, un utilisateur peut 1) supprimer le programme de votre ordinateur local, 2) passer aux paramètres de version du programme, 3) passer à la liste des arbres de prévision, ou 4) passer à l'écran de saisie et d'ajustement des données de consommation.

![P838C3T9#yIS1](/img/media/image41.png)

Figure 33 : Carte de programme du module de prévision

En plus du tableau de bord de l'application, l'écran se compose du ruban supérieur et d'une barre de menu latérale sur le côté gauche. Toutes les fonctions disponibles dans le ruban et la barre latérale seront accessibles à l'utilisateur tout au long de l'outil, quel que soit l'écran qu'il consulte.

Pour revenir à l'écran du tableau de bord, l'utilisateur peut soit cliquer sur l'icône d'accueil dans le ruban supérieur, soit sur le logo QAT dans le coin supérieur gauche de l'écran.

![P860#yIS1](/img/media/image42.png) ou ![P860#yIS2](/img/media/image43.png)

**Ruban supérieur pour le module de planification des approvisionnements**

![](/img/media/image44.png)

**Ruban supérieur pour le module de prévision**

![](/img/media/image45.png)

De plus, les utilisateurs peuvent utiliser l'icône de profil pour vérifier leurs rôles d'utilisateur actuels, ainsi que :

- Changer son mot de passe,

- Allez [hors ligne/en ligne,](#working-offline)  
  ![A close up of words Description automatically generated](/img/media/image55.png)

- [Changer la langue préférée,](#changer-langue)

- Passez en mode thème sombre/clair, et  
  ![A black and white text Description automatically generated](/img/media/image56.png)

- Afficher les décimales dans les écrans de planification des approvisionnements  
  ![A black text on a white background Description automatically generated](/img/media/image57.png)

**Menu de la barre latérale :**

Le menu de la barre latérale est l'endroit où l'utilisateur peut naviguer vers les différents écrans de QAT. Les options disponibles dans la barre latérale varient en fonction de l'accès en fonction du rôle attribué à l'utilisateur. Dans la barre latérale se trouvent des éléments de menu. Cliquer sur l'un de ces éléments s'agrandira pour afficher une liste d'éléments de sous-menu. Au fur et à mesure que l'utilisateur sélectionne différents éléments dans le menu, les données respectives seront affichées dans QAT.

Dans le menu de la barre latérale, vous trouverez les éléments de menu suivants :

- **<u>SModule de planification des approvisionnements</u>**
  - **Master Data Sync** - En cliquant sur ce bouton, vous synchroniserez les données principales mises à jour avec votre version locale. Cette fonction est effectuée automatiquement lors de la connexion à QAT, mais ce bouton permet à l'utilisateur de le faire sans se déconnecter ni se reconnecter.

  - **Application Masters** (uniquement disponible pour les administrateurs d'applications et de domaines) – afficher/ajouter/modifier des données au niveau de l'application.

  - **Realm Level Masters** – afficher/ajouter/modifier les données au niveau du domaine.

  - **Gestion du programme** – afficher/ajouter/modifier les données au niveau du programme. Télécharger/Télécharger/Supprimer/Importer/Exporter des programmes. Effectuer des examens du plan d’approvisionnement.

  - **Données du plan d'approvisionnement** – Ajouter/modifier les données du plan d'approvisionnement.

  - **Planification de l'approvisionnement** – Afficher/modifier le plan d'approvisionnement. Plan de scénario.

  - **Rapports** – Afficher les rapports. Modifiez la liste des problèmes QAT.

- **Module de prévision <u>F</u>**
  - **Master Data Sync** - En cliquant sur ce bouton, vous synchroniserez les données principales mises à jour avec votre version locale. Cette fonction est effectuée automatiquement lors de la connexion à QAT, mais ce bouton permet à l'utilisateur de le faire sans se déconnecter ni se reconnecter.

  - **Application Masters** (uniquement disponible pour les administrateurs d'applications et de domaines) – afficher/ajouter/modifier des données au niveau de l'application.

  - **Realm Level Masters** – afficher/ajouter/modifier les données au niveau du domaine.

  - **Gestion du programme** – afficher/ajouter/modifier les données au niveau du programme. Télécharger/Télécharger/Supprimer/Importer/Exporter des programmes.

  - **Prévisions basées sur la consommation – <u> </u>**Importer/ajouter/ajuster et extrapoler les données de consommation.

  - **Prévisions d'arbre –** Créez et gérez un arbre de prévisions. Visualisez la modélisation et les validations de produits.

- **Résultats de l'analyse des prévisions –** Comparez et sélectionnez les prévisions finales. Afficher d'autres rapports de sortie.

| Capture d'écran | Fonction |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![P934C3T11#yIS1](/img/media/image58.png) | Réduit complètement le menu de la barre latérale pour créer plus d'espace sur l'écran. En cliquant une fois sur l'icône, le menu disparaîtra. En cliquant à nouveau dessus, il réapparaîtra. |
| ![P937C5T11#yIS1](/img/media/image59.png) | Réduit le menu de la barre latérale sans le faire disparaître complètement. Crée un peu plus d'espace sur l'écran.                                                              |
| ![P940C7T11#yIS1](/img/media/image60.png) | Affiché lorsque le menu de la barre latérale est réduit. Cliquez pour développer et afficher le menu complet de la barre latérale. Également utilisé pour développer et afficher les éléments de sous-menu sous les éléments de menu.                      |
| ![P943C9T11#yIS1](/img/media/image61.png) | Affiché lorsque les éléments du sous-menu sont affichés. Cliquez pour réduire les éléments du sous-menu.                                                                                               |
| ![P946C11T11#yIS1](/img/media/image62.png) | Boutons qui permettent aux utilisateurs de basculer entre le module de prévision et de planification des approvisionnements dans QAT, si leur accès utilisateur le permet.                                               |

Tableau 4 : Icônes du menu de la barre latérale

**Boutons trouvés dans QAT**

Les boutons suivants se retrouvent fréquemment sur les différents écrans QAT :

|                                                                                                  |                                                                                                       |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| **Boutons** | **Action** |
| ![P956C3T12#yIS1](/img/media/image63.png) | Soumet et apporte des modifications.                                                                            |
| ![P959C5T12#yIS1](/img/media/image64.png) | Annule les modifications non soumises.                                                                      |
| ![P962C7T12#yIS1](/img/media/image65.png) | Rétablit les données non soumises au format précédent.                                                     |
| ![P965C9T12#yIS1](/img/media/image66.png) | Ajoute un nouvel enregistrement à la base de données.                                                                    |
| ![P968C11T12#yIS1](/img/media/image67.png) | Met à jour les enregistrements.                                                                                      |
| ![P971C13T12#yIS1](/img/media/image68.png) | Aide les utilisateurs à rechercher les informations souhaitées. Recherche tous les champs du tableau affiché.            |
| ![P974C15T12#yIS1](/img/media/image69.png) | Permet à un utilisateur d'effacer les champs de recherche.                                                                 |
| ![P977C17T12#yIS1](/img/media/image70.png) | Indique les champs de saisie de données obligatoires.                                                                |
| ![P980C19T12#yIS1](/img/media/image71.png) | Affiche des explications/définitions et des formules sur les termes couramment utilisés dans la fenêtre/le rapport spécifié. |
| ![P984C21T12#yIS1](/img/media/image72.png) | Fournit des conseils de haut niveau sur la meilleure façon d’utiliser la page actuelle.                                     |
| ![P987C23T12#yIS1](/img/media/image73.png)![P987C23T12#yIS2](/img/media/image74.png) | Exporte le rapport PDF, CSV ou Word (les options dépendent de l'écran).                                       |

Tableau 5 : Boutons couramment utilisés

## Changer la langue

Pour garantir que QAT soit adaptable aux utilisateurs du monde entier, l'application affiche le texte dans quatre langues différentes : anglais, français, portugais et espagnol. Les utilisateurs sont encouragés à soumettre des tickets s’ils souhaitent voir une traduction d’étiquette particulière améliorée. (_Remarque : les traductions des étiquettes d'application ne peuvent être modifiées que par les **administrateurs d'application**. Les instructions sur la façon de procéder peuvent être trouvées dans la [section traduction](#database-translation)._)

Il existe deux manières de modifier la langue affichée pour l'utilisateur :

1. **Écran de connexion :**

Dans le coin supérieur droit de l'écran de connexion, il y a un menu déroulant dans lequel les utilisateurs peuvent sélectionner leur langue préférée avant de se connecter. Cela modifiera non seulement le texte une fois connecté à QAT, mais également le texte affiché sur l'écran de connexion.

![P1001#yIS1](/img/media/image75.png)

Figure 34 : Changement de langue de l'écran de connexion

2. **Au sein de QAT :**

Une fois connecté à QAT, l'utilisateur peut changer la langue d'affichage en cliquant sur l'icône de profil utilisateur dans le coin supérieur droit de l'écran, en sélectionnant la langue préférée, puis l'outil mettra automatiquement à jour son texte/étiquettes.

![](/img/media/image76.png)

Figure 35 : Dans le changement de langue de l'outil

## Tableau de bord QAT

Le tableau de bord de planification des approvisionnements fournit une interface complète avec des visualisations et des analyses améliorées. Il est structuré en trois sections principales : Ticker, Aperçu, Programme Spotlight.

![No alt text provided for this image](/img/media/image77.jpeg)

Figure 36 : Tableau de bord

1. **Ticker –** Cette section affiche les informations clés à travers trois vignettes à défilement automatique. Pour parcourir manuellement les vignettes, cliquez sur les points en bas des vignettes. Chaque vignette renvoie aux écrans pertinents. Cliquez sur le nom de la vignette pour être dirigé vers cet écran (si vous n'y avez pas accès, un message approprié s'affichera). Par exemple, en cliquant sur la vignette « Liaison ERP », vous accéderez à l’écran Liaison ERP.
    1. **Royaume :** Fournit des mesures globales, telles que le nombre de pays, d'utilisateurs, de programmes de planification des approvisionnements et de programmes de prévision.

    2. **Mon accès :** met en évidence les plans d'approvisionnement auxquels vous avez accès, y compris les plans d'approvisionnement téléchargés.

    3. **Lien ERP :** Affiche le nombre d'envois liés par domaine et par programmes téléchargés.

![](/img/media/image78.png)

Figure 37 : Ticker du tableau de bord

2. **Aperçu –** Ce tableau propose un résumé de haut niveau d'un ou plusieurs programmes en fonction de votre accès.

![A screenshot of a computer Description automatically generated](/img/media/image79.png)

Figure 38 : Section Présentation

> **Sélection des programmes :**

- Les programmes peuvent être basés sur le serveur ou téléchargés mais ne peuvent pas être mélangés

- Peut sélectionner 1 à « tous » les programmes. Sélection multiple.

- Le mode hors ligne limite la sélection aux programmes téléchargés uniquement, la case à cocher pour les programmes serveur étant grisée.

- Pour les programmes serveur, certaines colonnes/fonctionnalités (par exemple, la colonne Action et les liens QPL) ne sont pas affichées, mais tous les autres détails restent cohérents.

> **Caractéristiques du tableau de synthèse**
>
> Chaque colonne est conçue pour présenter des données exploitables :

- **Info-bulles :** Passez la souris sur l'icône d'info-bulle dans chaque colonne pour plus de détails

- **Tri :** Les programmes sont triés par ordre alphabétique, avec un astérisque indiquant les versions finales et approuvées.

- **Liens et icônes :**
  - La colonne « Action » permet aux utilisateurs de supprimer un programme local ainsi que de cliquer sur les icônes du cloud pour être redirigés vers les écrans de téléchargement ou de téléchargement. L'icône du nuage apparaîtra en rouge si cette version téléchargée est obsolète. La colonne « Action » n'apparaît pas dans le tableau de synthèse des programmes serveur.

  - En cliquant sur le numéro dans la colonne « Problèmes QAT ouverts », l'utilisateur sera dirigé vers la liste des problèmes QAT (QPL) pour ce programme. Cela n'apparaît pas pour les programmes serveur.

  - Cliquer sur le statut dans la colonne « Statut de la révision » dirigera l'utilisateur vers l'écran Version et révision du plan d'approvisionnement, tandis qu'en cliquant sur l'icône du bloc-notes dans la même cellule, l'historique des notes de ce programme s'ouvrira.

![](/img/media/image80.png)

Figure 40 : Notes de version

3. **Program Spotlight –** Cette section fournit des informations détaillées sur les indicateurs clés d'un seul programme. Assurez-vous d'utiliser les info-bulles et les liens intégrés pour une navigation et une exploration des données efficaces. Les 5 sections ont une info-bulle à côté de l'en-tête et chaque en-tête est lié à un écran QAT auquel vous pouvez accéder en cliquant sur l'en-tête.

> **Sélection d'un programme :**

- Prend en charge le serveur ou les programmes téléchargés (sélection unique uniquement)

- Les programmes serveur utilisent par défaut la dernière version (ébauche ou finale)

- Le mode hors ligne limite la sélection aux programmes téléchargés.

> **Période du rapport :**

- **Programmes serveur :** Par défaut, 6 mois passés et 18 mois futurs (modifiables)

- ![](/img/media/image81.png)**Programmes téléchargés :** Par défaut, 6 mois passés et 18 mois futurs (non modifiables sur le tableau de bord). Les administrateurs peuvent définir des paramètres par défaut personnalisés par programme via l'écran Mettre à jour les informations sur le programme.

> **<u>Smétriques de projecteur</u>**
>
> **État des stocks :**

- Le graphique à barres affiche le pourcentage de mois dans la période de rapport par catégorie de stock. Peut survoler le graphique pour des répartitions détaillées.

- Personnalisation visuelle : possibilité de masquer des éléments de légende ou de copier/coller un graphique.

- Le tableau ci-joint montre les détails des ruptures de stock par unité de planification (UP).

![A screen shot of a chart Description automatically generated](/img/media/image82.png)

Figure 42 : Section État des stocks

**Erreur de prévision (versions de serveur uniquement) :**

- Pourcentage d'erreur moyen calculé pour la période du rapport.

- Les erreurs supérieures à un seuil défini (par défaut 50 %) sont surlignées en rouge. Les administrateurs peuvent ajuster les seuils par PU et par programme dans l'écran « Mettre à jour les unités de planification ».

- Les données manquantes affichent une icône d'avertissement avec une note explicative.

![A screenshot of a computer screen Description automatically generated](/img/media/image83.png)

Figure 43 : Section Erreur de prévision

> **Expéditions :**

- Diagramme circulaire des expéditions par source de financement, agent d'approvisionnement ou statut en utilisant la liste déroulante pour désigner lequel.

- Survolez le diagramme circulaire pour connaître la répartition des coûts. La ventilation des coûts utilise la valeur totale des expéditions au cours de cette période de rapport comme dénominateur.

- Le tableau ci-joint montre le \# des expéditions dont le financement est à déterminer au cours de la période du rapport.

![A screenshot of a computer Description automatically generated](/img/media/image84.png)

Figure 44 : Section Expédition

> **Qualité des données :**

- Reflète les métriques de la liste des problèmes QAT, indépendamment de la période du rapport. Il s'agit de la seule section des 5 sections mises en lumière sur le programme qui n'utilise pas la période de rapport affichée sur le tableau de bord.

- Mises à jour dynamiquement avec les modifications apportées dans QPL si l'utilisateur a actualisé le QPL. Sinon, l'utilisateur peut cliquer sur l'icône d'actualisation à côté de l'en-tête Data Quality pour actualiser les données affichées.

- Cadrans pour :
  - Consommation prévue : compte le nombre de PU pour lesquels il manque au moins un mois de consommation prévue au cours des 18 prochains mois.

  - Inventaire réel : compte le nombre de PU qui n'ont pas de données d'inventaire réelles récentes au cours des 3 derniers mois.

  - Consommation réelle : compte le nombre de PU qui n'ont pas de données de consommation réelle au cours des 3 derniers mois ou qui présentent un écart dans les données de consommation réelle au cours des 6 derniers mois.

  - Expéditions : compte le nombre de PU qui ont des expéditions avec des dates de réception passées, ou des expéditions qui auraient dû être « soumises » en fonction des délais de livraison du programme.

![](/img/media/image85.png)

**Expirations :**

- Affiche les expirations au cours de la période de rapport, y compris la quantité et le coût total

- La valeur totale d'expiration dans toutes les unités de planification pour le programme sélectionné apparaît en haut à droite de la section.

![](/img/media/image86.png)