import java.util.Scanner;

public class NoOfDigitsInBaseb {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        int b=sc.nextInt();//2 for binary
        System.out.println(noOfDigitsInBaseb(n,b));


    }
    public static int noOfDigitsInBaseb(int n,int b) {
        int ans=(int)(Math.log(n)/Math.log(b))+1;
        return ans;
    }
}
