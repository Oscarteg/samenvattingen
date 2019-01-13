# Machine learning

> 

**De student leert tijdens de module:**
1. Datasets lezen in R en deze analyseren en visualiseren
2. Uitleggen hoe machine learning werkt
3. Het trainen en testen (valideren) van een classifier op datasets
4. Geavanceerde machine learning technieken zoals Neurale Netwerken
5. Gebruik maken van bestaande ML platformen zoals TensorFlow of Sci-kit

**De student kan aan het einde van deze module:**
1. Werken met R en R studio
2. Een dataset analyseren in R en R studio
3. Een classifier trainen en testen en de resultaten visualiseren
4. kennis over geavanceerde machine learning technieken
5. Toepassingsgebieden noemen waar ML gebruikt wordt

## Wat is machine learning?

## Machine learning pipeline
1. Aangeleverde data
2. Machine learning algoritme. Welke technieken ga je gebruiken? Waarom? En welke technieken zijn het beste voor de data?
3. Interpreatie en visualisatie. Resultaten terug geven.

## Data

Er zijn verschillende data types. 
- Tekst
- Numerieke 
- Categorische data (producten supermakrt, honden rasse, false/true)
- Images
- Geluid
- Video's

De grootste bron van data is door middel van **tekst**. 

### Data vormen

- Gestructureerde data (excel sheet, tabellen). Voor een computer snel te begrijpen. 
- Ongestructureerde data (vrije tekst). Voor een mens snel te begrijpen maar moet omgevormd worden voor een computer.
- Semi gestructureerde data (HTML, XML). Parser zijn nodig om deze files te structureren.

### Kwaliteit van Data

> Je mag er niet vanuit gaan dat data perfect is. 

- Ruis (Garbage in = Garbage out). Als de data geen informatie bevat dan zal het algoritme niks vinden. 
- Opschonen (parsen). 
- Missing values (NA, NaN) 
- Sparse data. Grote tabellen met veel null waarden. Wel gemeten data maar 

### Data privacy

> GDPR 

In je achterhoofd houden met de nieuwe wetgeving of je de data mag gebruiken.

## Algoritmes

- Supervised learning
    - Classificatie 
    - Regressie
- Unsupervised learning
    - Clustering
    - Associates
- Reinforcement learning

Voorbeelden van algoritmes zijn; 
- Linear discriminant classiefier
- Nearest mean classifier
- KNN classifier
- Decision trees
- Maximum likelihood
- Random forest
- Hidden markov models
........


## Interpretatie en visualisatie

- Hoe goed doet mijn machine learning algoritme het?
    - Error criterium. Wat is goed, wat is slecht? 
    - Cross validatie.
    - RSS, RSE (voor lineaire regressie)
- Hoe presenteer ik mijn bevindingen?

## Machine learning toepassingen

### Recommendation systems
Aanbevelingen geven zoals bijvoorbeeld muziek, films of producten

### Text-mining

> Natural language processing (NLP)

Hoe wij computers kunnen leren om texten te lezen zoals wij dat doen. De grammatica van zinnen ontleden.

> Sentiment analysis

Het herkennen van positieve of negatieve woorden in ongestructureerde texten.

> Network analysis

Associaties berekenen tussen woorden in tekst en daar een netwerk mee bouwen. 

## Classificatie en regressie

Classificatie methoden worden gebruikt om dingen van elkaar te onderscheiden. 

Regressie methoden is een classificatie met continue waarden. Bv. groei bepalen door externe factoren zoals levenstijl.

## (Deep) neural networks

Worden veel gebruikt omdat ze erg generiek zijn. Zoals bijvoorbeeld het handschrift herkennen.

Of bij het restoren van zwart-wit figuren naar kleur.

## Reinforcement learning
De computer (agent) leert aanpassen aan de omgeving. In de AI hoek. 

## Enkelvoudige lineaire regressie
- Enkelvoudige regressie is een methode om de juiste rechte lijn te vinden die door een set of data punten gaat. 
- Maak een grafiek om te kijken of er een rechte lijn is.
- Gebruik X om Y te voorspellen. Y is afhankelijk van X. 
- Vinden van de juiste beste lijn (ofwel model).


Zoek je model
De error is het verschil tussen de rechte lijn (het model) en de afstand tot het datapunt.

- **S**um Of **S**quared **E**rrors (SSE) = Het kwadrateren van alle errors
- **S**um Of **S**quared **E**quation (SSR) = 
- **S**um Of **S**quared **R**egression (**SSR**) = Als er sprake is van een regressie lijn (dus 2 variabelen) dan SSR berekenen. 
- **S**um Of **S**quared **T**otals = SSR + SSE

:::tip
Doel is het ontwerpen van het model dat SSE minimaliseert. (dus zo accuraat mogelijk)
:::

:::tip
SSE minimaliseren gaat als volgt

$
min \sum (y_i - \^{y}_i)^2
$

 $\\sqrt{3x-1}+(1+x)^2$'

y_i = de waarde van de afhankelijk van de fooi

\^{y}_i = de geschatte waarde van de afhankelijke variable
:::

:::warning
Alleen lineaire regressie toepassen als het model een rechte lijn kan zijn.
:::

De lineaire lijn/regressie lijn gaat altijd door het gemiddelde van de variable waarde.

## Begrippenlijst

