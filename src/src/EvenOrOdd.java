import java.util.Scanner;

public class EvenOrOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number : ");
        int n = sc.nextInt();
        evenOrOdd(n);

    }
    public static void evenOrOdd(int n) {
        if((n & 1)==1){
            System.out.println(n+" is odd");
        }
        else System.out.println(n+" is even");
    }
}
