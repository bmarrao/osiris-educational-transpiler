
import java.util.Scanner;

public class noveEMeio {

	//private static final int IDADE= 5;
	
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int idFilho = in.nextInt();
		in.nextLine();
;		int idMae=in.nextInt();
		System.out.println(idMae-2*idFilho);
		in.close();
	}

}
