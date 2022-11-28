package projeto_2;

import com.intuit.karate.junit5.Karate;

public class lotrRunner {
    
    @Karate.Test
    Karate testLOTR() {
        return Karate.run("lotr").relativeTo(getClass());
    }    

}
