# Introductie


**Wat is kwaliteit?**

> De mate waarin een product of dienst beantwoordt aan de behoeftes of verwachtingen die kenbaar gemaakt zijn, vanzelfsprekend zijn of dwingend voorgeschreven zijn (door klante, consument, wet).

## TMap

![TMap summary](https://www.spritecloud.com/wp-content/uploads/2014/06/Lifecycle_0.png)

**T**est **M**anage **Approach** oftewel **TMap** is een testmethode voor software. 

### Fasering
TMap kent verschillende fasen waarin de testwerkzaamheden worden uitgevoerd.. et voorbereiden en specificeren van de testcases wordt gelijktijdig met het ontwerp- en ontwikkelwerk gedaan. Tegen de tijd dat een (deel)product dan eenmaal wordt opgeleverd hoeft het testen en goedkeuren niet veel tijd in beslag te nemen. De acceptatiecriteria en testcases zijn immers van tevoren vastgelegd. De gehanteerde fasen zijn;

- Planning en beheer (master testplan word geschreven)
	- In deze fase word de teststrategie bepaalt en een test plan opgesteld. Er wordt een begin gemaakt met de inrichting voor een test organisatie en infrastructuur. 
	- Om het proces te bewaken worden er voortgang rapportages bijgehouden.
- Voorbereiding
	- Vaststelling testbasis
	- Onderverdeling testbare eenheden
- Specificatie
	- Specificeren testgevallen met uitgangssituati, mutatie, eindresultaat.
	- Inrichting testinfrastructuur
- Testfasering / Uitvoering
	- Installatie test omgeving
	- Controle op werking applicaties
	- Uitvoeren van pre-tests
	- Uitvoeren van testscripts
	- Verklaring foutieve uitkomsten.
	- Voortdurend: risicorapportage, voortgang etc. Steeds testen uitvoeren

- Evaluatie en afronding
	- Evaluatie van test proces, lessons-learned
	- Eindrapportage
	- 'Opruimen'

### V-model
Het V-Model is een extensie van de waterval methode waarbij iedere testfase gepaard gaat met een development fase. Dit betekent dat er voor iedere fase in de development cyclus, er een test fase aan gekoppeld zit. De volgende fase begint alleen als de vorige fase is afgerond. 
Het testen parallel aan ontwikkeling.

![V-model](images/v-model.jpg)

#### Verification Phases

##### Business Requirement Analysis  

Dit is de eerste fase in de development cyclus waar de product requirements worden vastgelegd samen met de klant. Deze fase staat communicatie centraal. Klanten weten niet wat ze precies willen. De **acceptance test design planning** word gedaan in dit stadium. 

##### System design 
Daarna komt de volgende fase system design. In deze fase worden de requirements geanalyseerd en worden de mogelijkheden en technieken onderzocht. Als een requirement niet mogelijk is word de klant geinformeerd. In deze fase word ook de algemene en technische documentatie verzorgd. De **system test** plan is ontwikkeld op basis van de system design. 


##### Architectural Design
De architectuur word in deze fase ontworpen. Technische keuzes worden gemaakt. Het systeem word opgedeeld in modules met verschillende functionaliteiten. Dit word ook wel **High Level Design (HLD)** genoemd. De communicatie tussen de interne modules en andere externe systemen word gedefineerd in dit stadium. Met deze informatie worden de **integration tests** ontworpen en gedocumenteerd. 

##### Module design
In deze fase wordt het gedetaileerde interne ontwerp voor alle modules gespecificeerd. Dit heet **Low Level Design (LLD)**. De testen die hier worden uitvoerd zijn **unit tests**.

##### Coding phase 

#### Validation Phases


##### Unit testing
Bij de Unittest worden de individuele componenten getest: voldoen zij aan de voorwaarden beschreven in component design? In theorie zou een onafhankelijke tester dit moeten doen, maar in de praktijk wordt dit meestal gedaan door de ontwikkelaar zelf. Een probleem bij de unittest is dat de component wellicht door de test "individueel" heen komt, maar uiteindelijk zal moeten werken in een volledig systeem. Daarom wordt er vaak software gebruikt die de component wijs maakt dat dit in een compleet systeem functioneert, terwijl dit dus nog helemaal niet zo is.

##### Integration testing
Wanneer componenten afzonderlijk zijn getest begint de integratietest, dit is in feite kijken of de componenten wanneer zij aan elkaar gekoppeld zijn ook nog naar wens functioneren. Deze test kan door de ontwikkelaar of door specialisten worden gedaan.

##### System testing
Wanneer het volledige systeem is gebouwd is het tijd voor de systeemtest. Hierin wordt gekeken of alle vereisten kunnen worden gehaald. Dit is niet het testen van verschillende componenten, maar meer het volledige systeem. Denk hierbij aan het testen van onder andere:

- Performance - Zijn de vooraf opgestelde doelstellingen voor dit punt bereikt?
- Volume - Kan het systeem grote hoeveelheden informatie aan?
- Stress - Kan het systeem grote hoeveelheden informatie op een bepaald tijdstip aan? (piekuren)
- Documentatie - Is de documentatie die er wordt bijgeleverd bruikbaar voor het uiteindelijke systeem?
- Robustness - Blijft het systeem stabiel onder uitzonderlijke omstandigheden?

##### Acceptance testing
De acceptatietest test feitelijk de business case: levert het systeem wat de klant er van verwacht om voor hem een voordeel op te leveren in zijn werkveld? Met andere woorden zijn alle vereisten bereikt. Deze test moet uiteraard worden gedaan door de klant / gebruiker. Men spreekt dan ook wel van de UAT (User Acceptance Test) oftewel in goed Nederlands, de Gebruikersacceptatietest.
