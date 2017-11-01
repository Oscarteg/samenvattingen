# Singleton


## Intent
- Zorg ervoor dat er maar 1 instantie is van een klasse en dat die overal beschikbaar is. 
- Initialization on first use

## Problem

De applicatie heeft maar 1 instantie nodig van een object. Bijvoorbeeld een database instantie.

## Structure

![Singleton](https://sourcemaking.com/files/v2/content/patterns/singleton1.svg)
![lazy initialization](https://sourcemaking.com/files/v2/content/patterns/Singleton.svg)

De `single instantie` is een private static attribute en de accessor is een public static methode.

## Check list

1. Een private attribute op de klasse
2. Een public `static` accessor function
3. Maak het object bij eerste gebruik van de accessor function. (lazy initialization)
4. Alle constructors moeten `protected` of `private` worden. Je mag het object niet van buiten af aanmaken
5. Gebruikers mogen alleen de accessor gebruiken 

## Rules of thumb

- `Abstract factory`, `builder` en `prototype` kunnen `singleton` gebruiken
- `Facade` objecten zijn vaak singletons omdat er maar 1 `facade` nodig is.
- `State` objecten zijn vaak singletons
