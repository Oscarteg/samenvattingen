# Factory method

## Intent
- Een "virtuele" constructor 
- Geen `new` gebruiken.

## Problem
Een framework moet het architecturele model voor applicaties standaardiseren maar moet de individuele applicaties de ruimte geven om eigen domein objecten te maken en aan te kunnen maken.

## Structure


## Checklist
1. Als je een overerfende hierarchie hebt, voeg een static factory methode toe aan de base klasse. 
2. Voeg de argumenten toe een de factory methode.
3. Voeg een object pool toe dat er voor zorgt dat objecten herbruikt kunnen worden inplaats van opnieuw gemaakt.
4. Alle constructors `private` of `protected`

## Rules of thumb
- Abstract factory classes wroden vaak gebruikt met Factory methods maar zou ook gedaan kunnen worden met prototype.
- Factory methods word meestal gebruikt in template methodes
