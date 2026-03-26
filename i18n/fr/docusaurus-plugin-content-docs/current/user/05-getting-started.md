---
id: getting-started
title: "Mise en route"
sidebar_label: "Mise en route"
sidebar_position: 5
---
# Mise en route

## Configuration système requise

Le QAT est une application Web accessible via des ordinateurs portables et de bureau fonctionnant sous **Windows, Linux/Ubuntu ou macOS**. 

- **Navigateur recommandé :** Google Chrome.
- **Navigateurs pris en charge :** Chromium, Microsoft Edge, Mozilla Firefox et Safari.

### Espace disque et cache
Nous vous recommandons de disposer de suffisamment d'espace libre sur votre lecteur principal (par exemple, lecteur C:) pour les données du cache du navigateur. Chrome et d'autres navigateurs partagent un pool de stockage entre toutes les applications Web, qui peut représenter jusqu'à 1/3 de l'espace disque disponible. QAT peut utiliser jusqu'à 20 % de ce pool partagé. Par exemple, avec 60 Go d'espace libre, le pool partagé est de 20 Go, permettant à QAT de stocker jusqu'à 4 Go de données locales.

## Hiérarchie des données dans QAT

Le système QAT est organisé en trois niveaux hiérarchiques :

1. **Niveau d'application :** Le niveau le plus élevé, couvrant les données de base globales qui s'appliquent à tous les domaines et programmes. Réservé aux administrateurs d'applications.
2. **Niveau du domaine :** couvre les données de base spécifiques à un domaine (par exemple, pays, domaines techniques, unités de planification). Géré par les administrateurs de domaine.
3. **Niveau programme :** Le troisième niveau, où les utilisateurs gèrent des données spécifiques de prévision ou de planification des approvisionnements (par exemple, consommation, inventaire, expéditions).

Pour des fonctions administratives détaillées, voir [Annexe 1 : Manuel de l'administrateur d'applications et de domaines] (13-annex-1-application-realm-administrator-manual.md#annex-1-application-realm-administrator-manual).

> **Remarque :** Un **Programme** est une combinaison d'un pays, d'un domaine technique, d'une organisation et d'une région (par exemple, *FASPonia–ARV-MOH-National*).

## Rôles et autorisations des utilisateurs

L'accès à QAT est régi par des rôles et des autorisations définis au niveau de l'application ou du domaine. Un utilisateur peut se voir attribuer plusieurs rôles, qui peuvent varier selon le programme.

- **Niveau du programme :** La plupart des utilisateurs (gestionnaires et dirigeants) interagissent à ce niveau en tant qu'**administrateurs du programme** ou **utilisateurs du programme**.
- **Niveau du domaine :** **Les administrateurs du domaine** gèrent les données de base et ont accès à tous les programmes de leur domaine.
- **Niveau application :** **Les administrateurs d'application** ont un accès exclusif aux structures globales, aux rôles et aux paramètres système.

Pour une liste complète des rôles et des fonctions commerciales, reportez-vous à [Annexe 4 : Fonctions commerciales](16-annex-4-business-functions.md#annex-4-business-functions).

## Connexion et installation PWA

### Connexion initiale (en ligne)
Si vous n'avez pas de profil utilisateur, contactez votre administrateur de domaine pour créer un compte. Une fois créé, vous recevrez un email pour réinitialiser votre mot de passe.

1. Cliquez sur le lien **Réinitialiser le mot de passe** dans l'e-mail (valable 24 heures, à usage unique).
2. Créez votre nouveau mot de passe et cliquez sur **Soumettre**.
3. Connectez-vous en utilisant votre adresse e-mail et le nouveau mot de passe.

> **Exigences en matière de mot de passe :**
> - Minimum 6 caractères, commençant par une lettre.
> - Doit inclure au moins une lettre majuscule, un chiffre et un caractère spécial.
> - Ne peut pas être identique à votre nom d'utilisateur ou à votre mot de passe précédent.

### Installation de l'application Web progressive (PWA) QAT
La PWA offre une expérience autonome semblable à une application sur votre bureau et prend en charge le mode hors ligne. Il est compatible avec **Google Chrome** et **Microsoft Edge**.

####Installation standard
1. Accédez au [site Web Quantification Analytics](https://www.quantificationanalytics.org/).
2. Cliquez sur l'icône **Installer** (signe plus) dans la barre d'adresse du navigateur.
3. Sélectionnez **Installer** dans la fenêtre contextuelle de confirmation.

![Installing QAT PWA](/img/media/image10.png)
*Figure 1 : Installation de la PWA*

#### Installation alternative (si le bouton est manquant)
1. Dans Chrome, cliquez sur les **trois points verticaux** (en haut à droite).
2. Sélectionnez **Diffuser, enregistrer et partager** > **Créer un raccourci**.
3. Une icône QAT apparaîtra sur votre bureau.

![PWA Alternate Method](/img/media/image12.png)
*Figure 2 : Installation alternative de PWA*

## Accès à QAT pour les utilisateurs existants

1. Accédez à [https://www.quantificationanalytics.org/](https://www.quantificationanalytics.org/) ou ouvrez la PWA depuis votre bureau.
2. Entrez vos informations d'identification sur l'écran de connexion.
3. (Facultatif) Cochez la case **Hors ligne** pour travailler sans connexion Internet.

![Login Screen](/img/media/image13.png)
*Figure 3 : Écran de connexion*

### Sécurité et maintenance
- **Déconnexion :** Cliquez sur l'icône de déconnexion dans le ruban en haut à droite.
- **Modification des mots de passe :** Dans QAT, accédez à votre **Profil** > **Modifier le mot de passe**.
- **Mot de passe oublié :** Cliquez sur le lien **Mot de passe oublié ?** sur l'écran de connexion pour recevoir un lien de réinitialisation par e-mail.

> **Remarque :** Les mots de passe QAT expirent un an après leur création ou leur mise à jour.

## Travailler hors ligne

QAT est un outil hybride qui fonctionne à la fois en mode en ligne et hors ligne. Vous pouvez passer manuellement en mode hors ligne via la page de connexion ou dans les paramètres de votre profil. Ceci est particulièrement utile dans les environnements à faible bande passante Internet.

![Offline Toggle (Profile)](/img/media/image18.png) ![Offline Toggle (Login)](/img/media/image19.png)

*Figure 9 : Bascule hors ligne dans les paramètres du profil et Figure 10 : Bascule hors ligne sur la page de connexion*

L'icône de profil dans le coin supérieur droit indique l'état de votre connexion : un **cercle vert** pour en ligne et un **cercle rouge** pour hors ligne.

![Status Icons](/img/media/image20.png)

*Figure 11 : Icônes d'état en ligne (vert) et hors ligne (rouge)*

### Capacités en ligne et hors ligne

| Fonctionnalité | Hors ligne | En ligne |
| :--- | :---: | :---: |
| Plans et prévisions d'approvisionnement en import/export | [x] | [x] |
| Afficher les données de base | [x] | [x] |
| Construire des arbres et des scénarios | [x] | [x] |
| Saisir les données transactionnelles et de consommation | [x] | [x] |
| Extrapoler (Moyenne mobile / Semi-moyenne) | [x] | [x] |
| Afficher les rapports et les résultats au niveau du programme | [x] | [x] |
| Réinitialiser le mot de passe | [ ] | [x] |
| Synchroniser les données de base | [ ] | [x] |
| Mettre à jour les informations du programme / les budgets | [ ] | [x] |
| Importer des données entre modules | [ ] | [x] |
| Extrapoler (Régression Linéaire / TES / ARIMA) | [ ] | [x] |
| Créer des tickets d'assistance | [ ] | [x] |
| Programmes de téléchargement/téléchargement | [ ] | [x] |
| Afficher les rapports au niveau mondial | [ ] | [x] |

*\*Remarque : La plupart des fonctions hors ligne nécessitent que le programme spécifique ait été préalablement téléchargé sur votre appareil local. Voir la section 3 pour plus de détails.*

## Dépannage et mises à jour logicielles

### Versions logicielles régulières
QAT reçoit des mises à jour régulières pour les corrections de bugs, l'optimisation des performances et les nouvelles fonctionnalités. Lorsqu'une nouvelle version est disponible, vous serez invité sur l'écran de connexion à actualiser l'application.

![New QAT Version Prompt](/img/media/image22.png)
*Figure 4 : Notification de mise à jour du logiciel*

> [!IMPORTANT]
> Pour éviter la perte de données lors de mises à jour structurelles majeures, assurez-vous que tous les programmes locaux sont téléchargés sur le serveur avant la publication. L'équipe d'assistance QAT vous informera à l'avance si un téléchargement est requis.

### Résoudre les problèmes courants
Si vous rencontrez des difficultés techniques, suivez ces étapes de dépannage dans l'ordre :

#### 1. Actualisation de l'application
Résolvez la plupart des problèmes mineurs en effectuant une actualisation matérielle. Appuyez simultanément sur **Ctrl + Maj + R**. Cela recharge le logiciel et efface les problèmes temporaires, contrairement à une actualisation standard du navigateur (**Ctrl + R**).

#### 2. Synchronisation complète des données de base
Si une actualisation ne fonctionne pas, essayez une **synchronisation complète des données principales**. Alors qu'un MDS standard ne récupère que les modifications incrémentielles, un MDS complet recharge toutes les données de base à partir de zéro. 
- *Emplacement :* Cliquez sur le lien en bas de l'application.
- *Exigence :* Une connexion Internet stable est requise.

![Full Master Data Sync](/img/media/image24.png)
*Figure 5: Full Master Data Sync Link*

#### 3. Effacer les données du site
Comme dernière étape de dépannage, vous pouvez effacer toutes les données stockées localement. 

> [!AVERTISSEMENT]
> Cela effacera toutes les modifications locales et les programmes téléchargés. Assurez-vous d'avoir **téléchargé toutes les données** sur le serveur avant de continuer.

1. Appuyez sur **Ctrl + Shift + I** pour ouvrir les outils de développement du navigateur.
2. Accédez à l'onglet **Application**.
3. Sélectionnez **Stockage** sur la gauche et cliquez sur **Effacer les données du site**.
4. Reconnectez-vous et retéléchargez vos programmes.

![Clear Site Data](/img/media/image26.png)
*Figure 6 : Effacement des données du site*

### Dépannage des erreurs réseau
Si vous voyez un message « Erreur réseau », cela est généralement dû à :
- **Internet instable :** Essayez une connexion plus rapide ou attendez un meilleur signal.
- **Restrictions du pare-feu :** La politique informatique de votre organisation peut bloquer QAT. Demandez à votre service informatique de mettre sur liste blanche les URL suivantes :
    - `api.quantificationanalytics.org`
    - `www.quantificationanalytics.org`

## Service d'assistance et tickets QAT

### Tickets pour l'ajout/la mise à jour d'utilisateurs et de données de base

Lorsqu'un utilisateur doit ajouter ou mettre à jour un utilisateur ou des données de base pour quelque raison que ce soit, il peut le faire en souscrivant un ticket d'assistance. Before requesting any additions or changes to the master data in QAT, the user should first check the realm-level master data (Realm Level Masters \>\> Product) and the Program Catalog Report to make sure the information does not already exist. Pour plus d'informations sur la façon d'accéder et d'utiliser les données de base, veuillez consulter [Program Management](06-managing-programs-and-versions.md#working-with-program-data) et [Realm Masters](13-annex-1-application-realm-administrator-manual.md#realm-masters). Pour plus d'informations sur la façon d'accéder au catalogue de programmes, veuillez consulter [Catalogue de programmes](13-annex-1-application-realm-administrator-manual.md#product). Pour accéder au service d'assistance QAT :

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

Lorsqu'un utilisateur rencontre un problème système potentiel avec QAT, il doit tenter de le résoudre via une [actualisation de l'application] (#1-application-refresh) et/ou [effacement des données du site] (#3-clear-site-data). Si aucune de ces étapes ne résout le problème, l'utilisateur doit soumettre un ticket au support technique pour signaler le bogue.

Le ticket de bogue sera traité par l’équipe de développement en fonction de la priorité commerciale, de la criticité et de la « capacité » disponible via les versions incrémentielles. Les étapes pour créer un ticket dans QAT sont indiquées ci-dessous :

1. Ouvrez l'écran QAT Helpdesk et cliquez sur « Signaler un bug ».

2. Saisissez un résumé du bug ainsi qu'une description du bug. Veuillez être descriptif et fournir autant de détails que possible (_par exemple, sur quel programme/version/fonctionnalité vous travailliez, les étapes que vous avez suivies pour obtenir le bogue, etc_).

3. Téléchargez une capture d'écran du bogue en cliquant sur le bouton « Parcourir » et en extrayant un fichier de capture d'écran enregistré de votre ordinateur.
    1. Il est également utile de fournir l'exportation du programme, si possible (voir [Exportations de programmes](06-managing-programs-and-versions.md#export) pour savoir comment exporter un programme local)

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

## Service d'assistance et tickets QAT

Le Helpdesk QAT est votre principal point de contact pour l'assistance technique, la gestion des utilisateurs et les demandes de fonctionnalités.

### Soumettre un ticket
Vous pouvez accéder au service d'assistance à partir de la **page de connexion** ou du **ruban supérieur** de l'application.

1. Cliquez sur l'icône **QAT Helpdesk**.
2. Sélectionnez l'une des options suivantes :
   - **Ajouter/Mettre à jour un utilisateur :** Demandez de nouveaux comptes ou des changements de rôle.
   - **Ajouter/mettre à jour les données de base :** Demander des ajouts aux produits, aux agents d'approvisionnement, etc.
   - **Demander une modification :** Proposez de nouvelles fonctionnalités ou des améliorations de conception.
   - **Signaler un bug :** Signalez les problèmes techniques (veuillez inclure des captures d'écran et les étapes à reproduire).
3. Remplissez les champs obligatoires et cliquez sur **Soumettre**.

![QAT Helpdesk Menu](/img/media/image29.png)
*Figure 7 : Options de ticket du service d'assistance*

### Gérer vos billets
Après la soumission, vous recevrez un **Code de ticket** (par exemple, QAT-570) et une notification par e-mail. 
- **Suivi :** Cliquez sur **Afficher les demandes** dans l'e-mail de notification pour vérifier l'état ou ajouter des commentaires.
- **Intégration JIRA :** QAT utilise JIRA pour la gestion des tickets. Bien que facultatif, vous pouvez créer un compte JIRA pour suivre toutes vos demandes en un seul endroit.

## Navigation et interface

### Page d'accueil et tableau de bord
Une fois connecté, vous verrez le tableau de bord principal. 
- **Module de planification des approvisionnements :** Présente des visualisations et des analyses améliorées.
- **Module de prévision :** Affiche des vignettes pour chaque programme téléchargé. Cliquez sur la flèche d'une vignette pour gérer les versions, les arborescences ou la saisie de données.

Pour revenir au tableau de bord à tout moment, cliquez sur l'icône **Accueil** dans le ruban supérieur ou sur le **Logo QAT** dans le coin supérieur gauche.

![Supply Planning Dashboard](/img/media/image39.png)
*Figure 8 : Écran d'accueil de la planification des approvisionnements*

### Disposition de l'interface
L'interface se compose de trois zones principales :
1. **Ruban supérieur :** Accès rapide aux fonctions globales (Profil, Helpdesk, Sync).
2. **Menu de la barre latérale :** Navigation vers les écrans spécifiques au module (Données de base, Rapports, etc.).
3. **Zone de contenu principale :** Où ont lieu la saisie et l'analyse des données.

**Ruban supérieur pour la planification des approvisionnements et les prévisions :**
![Supply Planning Ribbon](/img/media/image44.png)
![Forecasting Ribbon](/img/media/image45.png)

### Fonctions du ruban supérieur

| Icône | Fonction |
| :--- | :--- |
| ![Logout](/img/media/image46.png) | **Déconnexion :** vous déconnecte de l'application QAT. |
| ![Profile](/img/media/image47.png) | **Profil utilisateur :** Vert en ligne, rouge en mode hors ligne. Cliquez pour afficher le nom d'utilisateur/les rôles, changer de langue, réinitialiser le mot de passe ou basculer en mode en ligne/hors ligne. |
| ![Home](/img/media/image42.png) | **Tableau de bord :** vous ramène à l'écran d'accueil principal. |
| ![Download Manual](/img/media/image48.png) | **Manuel de l'utilisateur :** Télécharge le manuel QAT sur votre appareil local. |
| ![Refresh](/img/media/image49.png) | **Actualiser la page :** Recharge l'écran actuel. |
| ![Upload Alert](/img/media/image50.png) | **Statut du téléchargement :** Le bleu indique qu'aucune modification n'est en attente. Le rouge indique que les modifications locales sont prêtes à être téléchargées ; le numéro indique les programmes concernés. |
| ![Version Alert](/img/media/image51.png) | **Synchronisation des versions :** Le rouge indique qu'une version plus récente est disponible sur le serveur ; cliquez pour synchroniser votre programme local. |
| ![Helpdesk](/img/media/image52.png) | **QAT Helpdesk :** Ouvre le portail de billetterie pour l'assistance, les mises à jour de données ou les rapports de bogues. Le numéro suit vos tickets ouverts. |
| ![ERP Notification](/img/media/image53.png) | **Mises à jour ERP :** (Supply Planning uniquement) vous alerte des mises à jour des systèmes ERP liés (par exemple, ARTMIS). |
| ![Guidance](/img/media/image54.png) | **Conseils sur le workflow :** (Prévisions uniquement) affiche un guide de haut niveau sur le processus de prévision. |

De plus, les utilisateurs peuvent utiliser l'icône de profil pour vérifier leurs rôles d'utilisateur actuels, ainsi que :

- Changer son mot de passe,

- Allez [hors ligne/en ligne,](#working-offline)  
  ![A close up of words Description automatically generated](/img/media/image55.png)

- [Changer la langue préférée,](#changer-langue)

- Passez en mode thème sombre/clair, et  
  ![A black and white text Description automatically generated](/img/media/image56.png)

- Afficher les décimales dans les écrans de planification des approvisionnements  
  ![A black text on a white background Description automatically generated](/img/media/image57.png)

### Menu de la barre latérale

Le menu de la barre latérale vous permet de naviguer à travers les différents écrans de QAT. Les options disponibles dépendent du rôle et des autorisations qui vous sont attribués.

#### Modules clés

- **Module de planification des approvisionnements :** Gérez les données du plan d'approvisionnement, effectuez des examens et consultez les rapports de planification des approvisionnements.
- **Module de prévision :** Créez des arbres de prévisions, importez des données de consommation et analysez les résultats des prévisions.
- **Master Data Sync :** Synchronisez manuellement les données de base mises à jour sans vous déconnecter.
- **Application & Realm Masters :** (Administrateurs uniquement) Gérez les structures de données de haut niveau et les paramètres spécifiques au domaine.

#### Icônes de navigation dans la barre latérale

| Icône | Actions |
| :---: | :--- |
| ![Collapse](/img/media/image58.png) | **Réduction complète :** masque entièrement le menu de la barre latérale pour plus d'espace sur l'écran. |
| ![Minimize](/img/media/image59.png) | **Réduire :** Réduit la barre latérale aux icônes uniquement. |
| ![Expand](/img/media/image60.png) | **Développer :** Restaure la barre latérale complète ou développe un sous-menu. |
| ![Collapse Sub-menu](/img/media/image61.png) | **Réduire le sous-menu :** Masque les éléments de menu imbriqués. |
| ![Module Toggle](/img/media/image62.png) | **Basculement du module :** Bascule entre les modules de prévision et de planification des approvisionnements. |

*Tableau 4 : Icônes du menu de la barre latérale*

### Boutons d'action courants

| Bouton | Actions |
| :--- | :--- |
| ![Submit](/img/media/image63.png) | **Soumettre :** Enregistre les modifications et met à jour la base de données. |
| ![Cancel](/img/media/image64.png) | **Annuler :** Annule les modifications non soumises. |
| ![Revert](/img/media/image65.png) | **Revert :** renvoie les données non soumises à leur état précédent. |
| ![Add](/img/media/image66.png) | **Ajouter :** Crée un nouvel enregistrement. |
| ![Update](/img/media/image67.png) | **Mise à jour :** modifie un enregistrement existant. |
| ![Search](/img/media/image68.png) | **Recherche :** Filtre le tableau actuel pour des mots clés spécifiques. |
| ![Clear](/img/media/image69.png) | **Effacer :** Réinitialise tous les filtres et champs de recherche actifs. |
| ![Mandatory](/img/media/image70.png) | **Champ obligatoire :** Indique que la saisie des données est obligatoire. |
| ![Help](/img/media/image71.png) | **Info-bulles :** affiche les définitions, les formules ou le contexte de termes spécifiques. |
| ![Guidance](/img/media/image72.png) | **Guide de page :** Fournit des instructions de haut niveau pour l'écran actuel. |
| ![Export Logs](/img/media/image73.png) ![Export Reports](/img/media/image74.png) | **Exporter :** Télécharge les données/rapports sous forme de fichiers PDF, CSV ou Word. |

## Changer la langue

Pour garantir que QAT soit adaptable aux utilisateurs du monde entier, l'application affiche le texte dans quatre langues différentes : anglais, français, portugais et espagnol. Les utilisateurs sont encouragés à soumettre des tickets s’ils souhaitent voir une traduction d’étiquette particulière améliorée. (_Remarque : les traductions des étiquettes d'application ne peuvent être modifiées que par les **administrateurs d'application**. Les instructions sur la façon de procéder peuvent être trouvées dans la [section de traduction](13-annex-1-application-realm-administrator-manual.md#database-translation)._)

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

Le tableau de bord Supply Planning fournit une interface complète pour l’analyse visuelle. Il est divisé en trois sections principales : **Ticker**, **Overview** et **Program Spotlight**.

![QAT Dashboard](/img/media/image77.jpeg)

*Figure 36 : Tableau de bord de planification des approvisionnements QAT*

### 1. Téléscripteur
Le Ticker affiche des métriques de haut niveau via trois vignettes à défilement automatique :
- **Royaume :** affiche le nombre mondial de pays, d'utilisateurs et de programmes.
- **Mon accès :** Répertorie les plans d'approvisionnement disponibles pour vous.
- **Lien ERP :** Affiche le nombre d'envois liés dans vos programmes.

![Dashboard Ticker](/img/media/image78.png)

*Figure 37 : Vignettes du téléscripteur du tableau de bord*

### 2. Aperçu
Le tableau Présentation résume plusieurs programmes en fonction de votre niveau d'accès.

![Dashboard Overview Section](/img/media/image79.png)

*Figure 38 : Tableau de présentation du tableau de bord*

- **Sélection de programmes :** Choisissez entre des programmes basés sur le serveur ou locaux (téléchargés). La sélection multiple est prise en charge.
- **Colonne d'action :** (Programmes locaux uniquement) Fournit des liens rapides pour supprimer, charger ou télécharger des programmes.
- **Liste des problèmes (QPL) :** (Programmes locaux uniquement) Cliquez sur le numéro dans cette colonne pour accéder à la liste des problèmes QAT de ce programme.
- **Notes et statut :** Consultez l'état actuel et les notes historiques de chaque plan d'approvisionnement.

![Version Notes](/img/media/image80.png)

*Figure 39 : Notes sur la version du programme*

### 3. Pleins feux sur le programme
Cette section fournit des mesures approfondies pour un seul programme sélectionné.

- **Statut du stock :** Un graphique à barres montrant le pourcentage de mois par catégorie de stock (par exemple, Stocké, Surstocké, En rupture de stock).
- **Erreur de prévision :** (programmes serveur uniquement) Met en évidence les unités de planification présentant des taux d'erreur élevés (par défaut > 50 %).
- **Expéditions :** Un diagramme circulaire montrant les sources de financement et l'état d'approvisionnement pour les expéditions à venir.
- **Qualité des données :** affiche les mesures en temps réel de la liste des problèmes QAT (QPL), telles que les données de consommation manquantes ou les expéditions en retard.
- **Expirations :** Résume la quantité et le coût total des produits expirant au cours de la période du rapport.

![Stock Status](/img/media/image82.png) ![Shipment Status](/img/media/image84.png)  
*Figure 40 : État du stock et Figure 41 : Analyse des expéditions*

![Data Quality Dials](/img/media/image85.png) ![Expiries Table](/img/media/image86.png)  
*Figure 42 : Qualité des données et Figure 43 : Expirations de produits*