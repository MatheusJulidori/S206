package aula_inatel.star_wars;

import com.intuit.karate.junit5.Karate;

public class swRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("sw").relativeTo(getClass());
    }    

}
