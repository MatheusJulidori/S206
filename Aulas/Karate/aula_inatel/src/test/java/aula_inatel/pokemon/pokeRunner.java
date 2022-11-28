package aula_inatel.pokemon;

import com.intuit.karate.junit5.Karate;

public class pokeRunner {
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("pokemon").relativeTo(getClass());
    }    

}
