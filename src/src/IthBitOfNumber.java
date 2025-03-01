import java.util.Scanner;

public class IthBitOfNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = sc.nextInt();
        int i = sc.nextInt();
        System.out.println("The " + i + "-th bit of the number is: " + bitCount(num, i));
        System.out.println(bitCount(num, i));

    }

    public static int bitCount(int n, int i) {
        return (n >> i) & 1;

    }
    public static int bitCount2(int n,int i) {
        return (1 << i) & n;
    }
}
