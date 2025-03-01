import java.util.Scanner;

public class PowerOfTwo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(powerOfTwo(n));
    }
    public static int powerOfTwo(int n) {
        if((n&n-1)==0) return 1;
        return -1;
    }
}
