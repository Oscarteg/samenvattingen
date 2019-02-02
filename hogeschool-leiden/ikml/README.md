# Machine learning

:::tip
**De student leert tijdens de module:**
1. Datasets lezen in R en deze analyseren en visualiseren
2. Uitleggen hoe machine learning werkt
3. Het trainen en testen (valideren) van een classifier op datasets
4. Geavanceerde machine learning technieken zoals Neurale Netwerken
5. Gebruik maken van bestaande ML platformen zoals TensorFlow of Sci-kit
:::

:::tip
**De student kan aan het einde van deze module:**
1. Werken met R en R studio
2. Een dataset analyseren in R en R studio
3. Een classifier trainen en testen en de resultaten visualiseren
4. kennis over geavanceerde machine learning technieken
5. Toepassingsgebieden noemen waar ML gebruikt wordt
:::

## Wat is machine learning?

## Machine learning pipeline
1. Aangeleverde data
2. Machine learning algoritme. Welke technieken ga je gebruiken? Waarom? En welke technieken zijn het beste voor de data?
3. Interpretatie en visualisatie. Resultaten terug geven.

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

- **S**um Of **S**quared **E**rrors (SSE) = Het kwadrateren van alle errors.  $min \sum (y_i - \^{y}_i)^2$
- **S**um Of **S**quared **R**egression (**SSR**) = Als er sprake is van een regressie lijn (dus 2 variabelen) dan SSR berekenen. $\sum (\hat{y} - \bar{y})^2$
- **S**um Of **S**quared **T**otals = SSR + SSE = $\sum (y_i - \bar{y})^2$

:::tip
Doel is het ontwerpen van het model dat SSE minimaliseert. (dus zo accuraat mogelijk)
:::

:::tip
SSE minimaliseren gaat als volgt

$y_i =$ de waarde van de afhankelijk van de fooi

$\^{y}_i =$ de geschatte waarde van de afhankelijke variable
:::

:::warning
Alleen lineaire regressie toepassen als het model een rechte lijn kan zijn.
:::

De lineaire lijn/regressie lijn gaat altijd door het gemiddelde van de variable waarde.


### Vergelijking van rechte lijn

$y = mx + b$

$m =$ de helling

$b =$ de snijpunt met je y-as, dus waar x = 0

$$
m = \frac{rise}{run} = \frac{y_j - y_i}{x_j - x_i}
$$

$$
\hat{y} = b_0 + b_1x_i
$$

$$
b_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})} {\sum (x_i - \bar{x})^2}
$$

$\bar{x} =$ gemiddelde van de onafhankelijke variable


$\bar{y} =$ gemiddelde van de afhankelijke variabele


$x_i =$ waarde van de onafhankelijke variabele


$x_y =$ waar de van de afhankelijke variabele

Als je de helling hebt bepaalt kun je waarde berekenen voor $x=0$. 
$$
b_0 = \bar{y} - b_1\bar{x}
$$

Vul de waardes in die je weet.

## K Nearest neighbor classifier
Gebaseerd op gelijksoortigheid van training van data. 

KNN is gebaseerd op gelijkwaardige eigenschappen. 

Een van de simpelste **Supervised Machine Learning** algoritme.


## Cross validatie

:::tip
Crossvalidatie geeft de mogelijkheid om verschillende machine learning algoritmes te vergelijken. R
:::
Hoe controlleer je of een model goed is?

$$
R^2 = 1 - \frac{\sum(y_i-f_i)^2}{\sum(y_i-\bar{y})^2}
$$

Dit is de verhouding van fouten in een model ten opzichte van de totale variantie in de afhankelijke waarde. Hoe lager de fout hoe hoger de $R^2$-waarde. 

R-kwadraat wordt gebruikt als maatstaaf voor de kwaliteit van fit in een regressie. 


Crossvalidatie split de data in train data en test data. Dit kan de helft zijn of een derde of een andere variant. 

> Leave-one-out is dat elke sample individueel wordt getest. 
> n-fold Cross validation


## Naive Bayes Classifier



## Reinforced Learning



### Multi Armed Bandit (MAB)



## Begrippenlijst

