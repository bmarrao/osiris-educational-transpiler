import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class NaoMetasAgua {

    /**
     * Represents a jug with a given capacity and current content.
     * The content of the jug is a non-negative integer that is less than or equal to the capacity of the jug.
     * The jug can be filled, drained, or have its content transferred to another jug.
     */
    class Jug {
        int capacity;
        int current;

        /**
         * Creates a new Jug with the given capacity.
         * @param capacity the capacity of the jug
         */
        public Jug(int capacity) {
            this.capacity = capacity;
        }

        /**
         * Fills the jug to its maximum capacity.
         */
        public void fill() {
            current = capacity;
        }

        /**
         * Drains the jug.
         */
        public void drain() {
            current = 0;
        }

        /**
         * Transfers (part of) the content of this jug to another jug.
         * @param jug the jug to transfer the content to
         */
        public void transferTo(Jug jug) {
            int quantity = Math.min(current, jug.capacity - jug.current);

            current -= quantity;
            jug.current += quantity;
        }
    }

    /**
     * Represents an operation to be performed on a jug.
     * An operation can be a fill, a drain, or a transfer of content between two jugs.
     * The origin and destiny of the operation are represented by the indexes of the jugs.
     * The indexes are 1-based, with 0 representing tap or sink, if used for origin or destiny, respectively.
     */
    class Operation {
        private int origin, destiny;

        /**
         * Creates a new operation with the given origin and destiny.
         * @param origin the index of the jug to transfer the content from
         * @param destino the index of the jug to transfer the content to
         */
        public Operation(int origin, int destino) {
            this.origin = origin;
            this.destiny = destino;
        }

        /**
         * Checks if the operation is a fill operation.
         * @return true if the operation is a fill operation, false otherwise
         */
        public boolean isFill() {
            return origin == 0;
        }

        /**
         * Checks if the operation is a drain operation.
         * @return true if the operation is a drain operation, false otherwise
         */
        public boolean isDrain() {
            return destiny == 0;
        }

    }


    final List<Jug> jugs = new ArrayList<>();
    int goal;
    final List<Operation> operations = new ArrayList<>();

    /**
     * Reads the input from the given input stream.
     * @param in the input stream to read from
     */
    void readInput(InputStream in) {
        jugs.add(new Jug(0)); // Add a dummy jug to make the index match the jug number
        try (Scanner scanner = new Scanner(in)) {

            while(true) {
                int capacity = scanner.nextInt();

                if(capacity == 0) {
                    break;
                } else {
                    jugs.add(new Jug(capacity));
                }
            }
            goal = scanner.nextInt();


            while(true) {
                int origem = scanner.nextInt();
                int destino = scanner.nextInt();

                if(origem == 0 && destino == 0) {
                    break;
                } else {
                    operations.add(new Operation(origem, destino));
                }
            }

        }
    }

    /**
     * Processes the operations and returns the result.
     * @return "CERTO" if the goal is reached, "ERRADO" otherwise
     */
    String processOperations() {
        for (Operation operation : operations) {
            if(operation.isFill()) {
                jugs.get(operation.destiny).fill();
            } else if (operation.isDrain()) {
                jugs.get(operation.origin).drain();
            } else {
                jugs.get(operation.origin).transferTo(jugs.get(operation.destiny));
            }
        }

        for(Jug jug : jugs) {
            if(jug.current == goal) {
                return "CERTO";
            }
        }
        return "ERRADO";
    }

    /**
     * Main method.
     * @param args the command line arguments (unused)p
     */
    public static void main(String[] args) {
        NaoMetasAgua naoMetasAgua = new NaoMetasAgua();

        naoMetasAgua.readInput(System.in);
        System.out.println(naoMetasAgua.processOperations());
    }


}
