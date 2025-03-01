import java.util.Scanner;

public class RemovetheLastSetBit {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(remove(n));

    }public static int remove(int n){
        return n&n-1;
    }
}
