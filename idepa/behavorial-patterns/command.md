# Command

## Intent
- Encapsuleer de request in een object en zodat je gebruikers met verschillende verzoeken kunt parametreren en onbedoelde operaties ondersteunen
- Een `object-oriented callback`

## Problem
Verzoeken kunnen doen aan objecten zonder dat je iets weet over de operatie die het uitvoerd of gevraag

## Structure

![Command](https://sourcemaking.com/files/v2/content/patterns/Command.svg)

## Checklist
1. Defineer een `Command` interface met een methode zoals `execute()`
2. Defineer 1 of meerdere afgeleide klasse die encapsuleren een subset van het volgende: een 'receiver' object, de methode die word aangeroepen en de argumenten die doorgegeven moeten worden.
3. Instantieer een Command object voor iedere uitgestelde uitvoer request.
4. Geef het Command object door van de zender naar de ontvanger
5. De ontvanger bepaald wanneer het word uitgevoerd.

## Rules of thumb


