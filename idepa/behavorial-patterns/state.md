# State


## Intent

> Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.
> An object-oriented state machine
> Wrapper + polymorphic wrappee + collaboration

## Problem
De flow van een object/applicatie is afhankelijk van "state" die het heeft. Het patroon bestaat uit een tweetal klassen: de 'context' en de 'toestand' (state). De eerste handelt verzoeken af en geeft deze door aan de tweede. De verschillende interne toestanden worden geïmplementeerd als subklassen van de state-klasse. Iedere subklasse kan anders reageren op verzoeken, zodat we gedrag verkrijgen dat kan afhangen van de interne toestand van een object zonder allerlei globale variabelen en een batterij if-statements.

## Structure
[State](https://sourcemaking.com/files/v2/content/patterns/State1.svg)

## Check list
1. Identificeer een bestaande klasse of maak een nieuwe klasse dat dient als de 'state machine'. Dit word de 'wrapper' klasse.
2. Creeër een State base klasse dat de methoden van de state machine implementeert. Elke methode krijgt een instantie van de 'wrapper' klasse als parameter. 
3. Creeër een state klasse die de state base klasse overerft. Deze classe override de methode die ze moeten overriden.
4. De 'wrapper' klasse houdt de huidige state bij.
5. Alle requests naar de 'wrapper' klasse worden doorgegeven aan de huidige State object waarbij de 'wrapper' klasse (`this`) wordt doorgegeven.
6. The state methodes veranderen de 

## Rules of thumb


## Example

```java
interface State {
    void pull(CeilingFanPullChain wrapper);
}

class CeilingFanPullChain {
    private State currentState;

    public CeilingFanPullChain() {
        currentState = new Off();
    }

    public void set_state(State s) {
        currentState = s;
    }

    public void pull() {
        currentState.pull(this);
    }
}

class Low implements State {
    public void pull(CeilingFanPullChain wrapper) {
        wrapper.set_state(new Low());
        System.out.println("low speed");
    }
}

class Medium implements State {
    public void pull(CeilingFanPullChain wrapper) {
        wrapper.set_state(new Medium());
        System.out.println("medium speed");
    }
}

class High implements State {
    public void pull(CeilingFanPullChain wrapper) {
        wrapper.set_state(new High());
        System.out.println("high speed");
    }
}

class Off implements State {
    public void pull(CeilingFanPullChain wrapper) {
        wrapper.set_state(new Off());
        System.out.println("turning off");
    }
}

class On implements State {
    public void pull(CeilingFanPullChain wrapper) {
        wrapper.set_state(new On());
        System.out.println("turning off");
    }
}

public class StateDemo {
    public static void main(String[] args) {
        CeilingFanPullChain chain = new CeilingFanPullChain();
        while (true) {
            System.out.print("Press ENTER");
            getLine();
            chain.pull();
        }
    }

    static String getLine() {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        String line = null;
        try {
            line = in.readLine();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return line;
    }
}

```
