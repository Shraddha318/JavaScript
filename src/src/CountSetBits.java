import java.util.Scanner;

public class CountSetBits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int count=0;
        while(n>1){
            if((n&1)==1) count++;
            n=n>>1;
        }
        if(n==1) count++;
        System.out.println(count);
    }
}
