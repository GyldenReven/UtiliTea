# UtiliTea

UtiliTea est un projet en HTML, CSS et JavaScript. Il s'agit d'un site web implémentant quelques "outils" en JavaScript

Le premier objectif de ce projet est de me familiariser avec HTML, CSS et JavaScript en apprenant à faire intéragir les
différents éléments d'une page web avec un code JavaScript

## Outil 1 : Le traducteur morse

Cette page, permet de convertir un texte en morse et vice-versa

Pour plus d'originalité, il est également possible de  changer les différents charactères représentant la conversion en morse. 
Un exemple d'utilisation concret de cette foncionnalitée est par exemple pour échanger le trait d'union et `-` avec le tiret bas `_`. 

Il est néanmoins possible de changer les quatres caractères complètement afin de produire un "code morse" plus difficile à 
déchiffrer sans connaire les charactères entrés.

il est bon de noter que dans le quadre de la conversion du morse vers l'alphabet, un caractère non reconnu sera simplement ignoré.

## Outil 2 : Le convertiseur de code César

Cette page permet d'appliquer un décalage sur les lettres de l'alphabets afin de produire un code césar.

Il est possible de chiffrer en code césar en entrant un message dans la zone de droite mais le déchiffrement peut être effectué
en entrant un texte chiffré dans la zone de droite.

Le décalage peut être choisi librement par l'utilisateur dans l'intervalle `{-9, 99}`

## Outil 3 : Le convertisseur de base

Cette page permet de convertir des bases numériques.

Le convertisseur offre la possibilité de convertir une base entre 2 et 16 en deux autres bases simultanément. Cela permet
par exemple de facilement visualier simultanément un nombre en binéaire, décimal et héxadécimal.

Si le champ d'entrée modifié est vide, la conversion ne sera pas effectuée. Dans le cas ou un caractère incorrect serait
présent dans une base, le résultat de la conversion sera alors `NaN (Not a Number)`
