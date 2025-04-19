// package projetoFebre;

import java.util.Scanner;


public class Temperaturas {
	
	private static final String NORMAL = "NORMAL";
	private static final String FEBRE = "FEBRE";
	private static final String MAIOR = "SUBIU";
	private static final String MENOR = "BAIXOU";
	private static final String IGUAL = "MANTEVE";
	private static final int TEMP= 37;


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner in = new Scanner(System.in);
		int t1 = in.nextInt();
		int t2 = in.nextInt();
		int t3 = in.nextInt();
		int t4 = in.nextInt();
		if (t3< TEMP)
			System.out.println(NORMAL);
		else {
			if (t1<t3)
				System.out.println(FEBRE+" "+MAIOR);
			else if (t1>t3)
				System.out.println(FEBRE+" "+MENOR);
			else if (t2<t4)
				System.out.println(FEBRE+" "+MAIOR);
			else if (t2>t4)
				System.out.println(FEBRE+" "+MENOR);
			else
				System.out.println(FEBRE+" "+IGUAL);
		}
		in.close();
	}

}
