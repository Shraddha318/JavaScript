import java.util.Scanner;

public class XorOfNumberInGivenRange {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int b= sc.nextInt();
        System.out.println(xorOfNumberInGivenRange(n,b));

    }
    public static int xorOfANumber(int n) {
        if(n%4==1)return 1;
        else if(n%4==2)return n+1;
        else if(n%4==3)return 0;
        return n;
    }
    public static int xorOfNumberInGivenRange(int a, int b) {
        return xorOfANumber(a-1) ^ xorOfANumber(b);
    }
}
