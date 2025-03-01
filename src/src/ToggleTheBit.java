import java.util.Scanner;

public class ToggleTheBit {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        System.out.println(toggleTheBit(n,m));
    }
    public static int toggleTheBit(int n,int i) {
        return (1<<i)^n;
    }
}
