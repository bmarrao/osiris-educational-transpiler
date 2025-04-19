import java.io.InputStream;
import java.io.PrintStream;
import java.util.Scanner;

public class HeatWave {


    void process(InputStream sin, PrintStream out){
        try(Scanner in = new Scanner(sin)) {
            int m = in.nextInt();
            int n = in.nextInt();
            int c = 0;
            boolean wave = false;

            for(int i=0; i < n; i++) {
                int t = in.nextInt();

                if(t > m + 5) {
                    c++;
                    if(c >= 6)
                        wave = true;
                } else
                    c = 0;
            }

            if(wave)
                out.println("WAVE");
            else
                out.println("FLAT");

        }
    }
    public static void main(String[] args) {
        new HeatWave().process(System.in,System.out);
    }
}