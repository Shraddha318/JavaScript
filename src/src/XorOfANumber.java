import java.util.Scanner;

public class XorOfANumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        System.out.println(xorOfANumber(n));
    }
    public static int xorOfANumber(int n) {
        if(n%4==1)return 1;
        else if(n%4==2)return n+1;
        else if(n%4==3)return 0;
        return n;
    }
}
