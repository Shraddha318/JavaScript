import java.util.ArrayList;
import java.util.Scanner;

public class PascalTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of rows : ");
        int n = sc.nextInt();
        System.out.println(generate(n));

    }
    public static int generate(int rows) {
        return 1<<(rows-1);
    }
}
