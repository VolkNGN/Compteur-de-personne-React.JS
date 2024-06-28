# Compteur de Participants

## Description

Le **Compteur de Participants** est une application web interactive permettant de suivre et de gérer le nombre de participants à diverses activités telles que des matchs, festivals, votes, etc. L'application inclut des fonctionnalités avancées comme un mode sombre, un chronomètre intégré, et des animations amusantes. Elle est conçue pour être responsive et accessible, offrant une expérience utilisateur optimale sur tous les appareils.

## Fonctionnalités

- **Incrémentation et décrémentation** : Ajoutez ou retirez des participants facilement.
- **Réinitialisation** : Réinitialisez le compteur tout en continuant le chronomètre.
- **Chronomètre intégré** : Lancez, mettez en pause et arrêtez le chronomètre.
- **Mode sombre** : Basculer entre les modes clair et sombre pour le confort visuel.
- **Bouton rigolo** : Apportez une touche de fun avec une animation ?
- **Historique des réinitialisations** : Gardez une trace des réinitialisations avec le temps écoulé.
- **Instructions Toggle** : Accédez facilement aux instructions via un bouton "?".
- **Responsive** : Adapté pour une utilisation sur tous types d'écrans.

## Installation

### Prérequis

- Node.js
- npm ou yarn

### Étapes d'installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/votre-utilisateur/compteur-de-participants.git
    ```

2. Installez les dépendances :
    ```sh
    cd compteur-de-participants
    npm install
    ```

3. Lancez l'application :
    ```sh
    npm start
    ```

## Utilisation

### Compteur de Participants

- **Incrémenter** : Cliquez sur le bouton "Incrémenter" pour ajouter un participant.
- **Décrémenter** : Cliquez sur le bouton "Décrémenter" pour retirer un participant.
- **Réinitialiser** : Cliquez sur "Réinitialiser" pour remettre le compteur à zéro.
- **Démarrer le chronomètre** : Cliquez sur "▶️ Démarrer" pour lancer le chronomètre.
- **Pause du chronomètre** : Cliquez sur "⏸ Pause" pour mettre en pause le chronomètre.
- **Arrêter le chronomètre** : Cliquez sur "⏹ Arrêter" pour réinitialiser le chronomètre.
- **Bouton rigolo** : Cliquez (ou pas) sur le bouton "Bouton Rigolo" pour une surprise.
- **Basculer en mode sombre** : Utilisez le bouton de basculement pour changer de thème.
- **Afficher les instructions** : Cliquez sur "?" pour afficher les instructions d'utilisation.

### Historique

L'historique des réinitialisations affiche les valeurs du compteur et le temps écoulé à chaque réinitialisation.

## Structure du Projet

- `src/`
  - `components/`
    - `Alert/`: Composant d'alerte
    - `Button/`: Composant de bouton
    - `Counter/`: Composant de compteur
    - `CounterHistory/`: Composant d'historique du compteur
    - `Instructions/`: Composant des instructions
    - `InstructionsToggle/`: Composant de basculement des instructions
    - `Runner/`: Composant des emojis coureurs
    - `ToggleButton/`: Composant de basculement du mode sombre
  - `App.js`: Composant principal
  - `App.css`: Styles globaux et animations 

## Contribution

Les contributions ne sont pas ouverte pour ce projet ! Merci de vouloir contribuer mais il s'agit d'un travail effectué dans le cadre d'un Brief effectué chez Simplon.co.


## Support

Si vous avez des questions ou des problèmes, veuillez ouvrir une issue sur GitHub.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Remerciements

Merci à tous ceux qui ont contribué à ce projet et à ceux qui le soutiennent via des donations sur PayPal.

---

![PayPal Donate](https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png)
[Supportez-moi sur PayPal](https://paypal.me/VolkWebCo?country.x=FR&locale.x=fr_FR)

