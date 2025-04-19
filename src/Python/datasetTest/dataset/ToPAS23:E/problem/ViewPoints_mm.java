import java.util.Scanner;

/**
 * @author Margarida Mamede
 */

public class ViewPoints_mm {

    public static final String END_OF_INPUT = "FIM";

    private static final String[][] POINTS = {
        {"ARCO DA VILA",                  "Faro"},
        {"GRACA",                         "Lisboa"},
        {"IGREJA DOS GRILOS",             "Porto"},
        {"JARDINS DO PALACIO DE CRISTAL", "Porto"},
        {"MONTE AGUDO",                   "Lisboa"},
        {"MONTE DE FARO",                 "Faro"},
        {"PENHA DE FRANCA",               "Lisboa"},
        {"SANTA CATARINA",                "Lisboa"},
        {"SANTA LUZIA",                   "Lisboa"},
        {"SAO JORGE",                     "Lisboa"},
        {"SAO PEDRO DE ALCANTARA",        "Lisboa"},
        {"SE CATEDRAL",                   "Porto"},
        {"SENHORA DO MONTE",              "Lisboa"},
        {"SERRA DO PILAR",                "Porto"},
        {"TORRE DOS CLERIGOS",            "Porto"},
        {"VITORIA",                       "Porto"}
    };

    private int[] records;

    private int totVisits;

    private int maxVisits;


    public ViewPoints_mm( ) {
        records = new int[POINTS.length];
        totVisits = 0;
        maxVisits = 0;
    }

    public void addVisit( String name ) {
        int pos = this.findPos(name);
        records[pos]++;
        totVisits++;
        if ( records[pos] > maxVisits )
            maxVisits = records[pos];
    }

    private int findPos( String name ) {
        int pos = 0;
        while ( pos < POINTS.length && !name.equals( POINTS[pos][0] ) )
            pos++;
        return pos;
    }

    public void writeResults( ) {
        System.out.println(totVisits + " " + maxVisits);
        for ( int i = 0; i < POINTS.length; i++ )
            if ( records[i] == maxVisits )
                System.out.println(POINTS[i][0] + " " + POINTS[i][1]);
    }

    public static void main( String[] args ) {
        Scanner input = new Scanner(System.in);
        ViewPoints_mm app = new ViewPoints_mm();
        boolean cont = true;
        do {
            String name = input.nextLine();
            if ( name.equals(END_OF_INPUT) )
                cont = false;
            else
                app.addVisit(name);
        }
        while ( cont );
        input.close();
        app.writeResults();
    }

}
