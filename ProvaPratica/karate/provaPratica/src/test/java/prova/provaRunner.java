package prova;

import com.intuit.karate.junit5.Karate;

public class provaRunner {
    
    @Karate.Test
    Karate testProva() {
        return Karate.run("prova").relativeTo(getClass());
    }    

}
